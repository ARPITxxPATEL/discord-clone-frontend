import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const LoginPageInputs = ({ mail, setMail, password, setPassword }) => {
  return (
    <>
      <InputWithLabel 
      value={mail}
      setValue={setMail}
      label='Email'
      type='text'
      />
      <InputWithLabel 
      value={password}
      setValue={setPassword}
      label='Password'
      type='password'
      />
    </>
  )
}

export default LoginPageInputs;