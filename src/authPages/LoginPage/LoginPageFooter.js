import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useHistory } from "react-router-dom";
import { Tooltip } from '@mui/material';

const getFormNotValidMessage = () => {
  return 'Enter correct e-mail and password should contains between 6 to 12 characters';
}

const getFormValidMessage = () => {
  return 'Press  to log in';
}

const LoginPageFooter = ({handleLogin, isFormValid}) => {
  const history = useHistory();

  const handlePushToRegisterPage = () => {
    history.push("/register");
  };

  return (
    <>
    <Tooltip
    title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
    >
      <div>
        <CustomPrimaryButton
          label="Login"
          additionalStyles={{ marginTop: '40px' }}
          disabled={!isFormValid}
          onClick={handleLogin}
        />
      </div>
      </Tooltip>
      <RedirectInfo 
      text='Need a account? '
      redirectText='Create an account'
      additionalStyles={{ marginTop: '5px' }}
      redirectHandler={handlePushToRegisterPage}
      />
    </>
  )
}

export default LoginPageFooter;