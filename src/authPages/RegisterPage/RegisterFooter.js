import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useHistory } from "react-router-dom";
import { Tooltip } from '@mui/material';

const getFormNotValidMessage = () => {
  return 'Username should contains  between 3 and 12 characters and password contains between 6 and 12 characters. Also correct email address should provide';
}

const getFormValidMessage = () => {
  return 'Press  to log in';
}

const RegisterPageFooter = ({handleRegister, isFormValid}) => {
  const history = useHistory();

  const handlePushToLoginPage = () => {
    history.push("/login");
  };

  return (
    <>
    <Tooltip
    title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
    >
      <div>
        <CustomPrimaryButton
          label="Register"
          additionalStyles={{ marginTop: '40px' }}
          disabled={!isFormValid}
          onClick={handleRegister}
        />
      </div>
      </Tooltip>
      <RedirectInfo 
      text=''
      redirectText='Already have an account ?'
      additionalStyles={{ marginTop: '5px' }}
      redirectHandler={handlePushToLoginPage}
      />
    </>
  )
}

export default RegisterPageFooter;