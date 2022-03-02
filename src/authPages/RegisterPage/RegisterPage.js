import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import AuthBox from '../../shared/components/AuthBox';
import RegisterPageInputs from './RegisterPageInputs';
import RegisterPageFooter from './RegisterFooter';
import { validateRegisterForm } from '../../shared/utils/validators';
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions"
import { useHistory } from 'react-router-dom';

const RegisterPage = ({register}) => {
  const history = useHistory();

  const [mail, setMail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = () => {
    const userDetails = {
      mail,
      password,
      username
    };
    register(userDetails, history);
  }

  useEffect(() => {
    setIsFormValid(validateRegisterForm({
      mail,
      username,
      password
    }));
  }, [mail, username, password, setIsFormValid]);

  return (
    <AuthBox additionalStyles={{height: 460,}}>
      <Typography 
        variant="h5" 
        sx={{ 
          color: "white",
          textAlign:"center", 
          fontWeight: "bold", 
          marginBottom: "20px",
        }}
      >
        Create an account
      </Typography>
      <RegisterPageInputs 
      mail={mail}
      username={username}
      password={password}
      setMail={setMail}
      setUsername={setUsername}
      setPassword={setPassword}
      setIsFormValid={setIsFormValid}
      />
      <RegisterPageFooter 
      handleRegister={handleRegister}
      isFormValid={isFormValid}
      />
    </AuthBox>
  )
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
}

export default connect(null, mapActionsToProps)(RegisterPage);