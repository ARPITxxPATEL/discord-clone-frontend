import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const RegisterPageInputs = (props) => {
  const { mail, username, password, setMail, setUsername, setPassword } = props;

  return (
    <>
    <InputWithLabel
    value={mail}
    setValue={setMail}
    label="Email address"
    type="text"
    />
    <InputWithLabel
    value={username}
    setValue={setUsername}
    label="Username"
    type="text"
    />
    <InputWithLabel
    value={password}
    setValue={setPassword}
    label="Password"
    type="password"
    />
    </>
  )
}

export default RegisterPageInputs;