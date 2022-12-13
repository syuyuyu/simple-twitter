import React, { useState } from "react";
import { AuthButton, AuthContainer, AuthLinkText, LogoStyle, TitleH3 } from "../components/common/authstyled";
import AuthInput from "../components/AuthInput";
import { Link, useNavigate } from "react-router-dom";

const RegistPage = () => {
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setcheCkPassword] = useState("");
  // const navigate = useNavigate();

  return (
    <AuthContainer>
      <LogoStyle>
        <div className='logo-icon'></div>
      </LogoStyle>
      <TitleH3>建立你的帳號</TitleH3>
      <AuthInput //用useReducer
        label='帳號'
        placeholder='請輸入帳號'
        value={account}
        onChange={(accountInputValue) => setAccount(accountInputValue)}
      />
      <AuthInput
        label='名稱'
        placeholder='請輸入使用者名稱'
        value={name}
        onChange={(nameInputValue) => setName(nameInputValue)}
      />
      <AuthInput
        label='Email'
        placeholder='請輸入Email'
        value={email}
        onChange={(emailInputValue) => setEmail(emailInputValue)}
      />
      <AuthInput
        type='password'
        label='密碼'
        placeholder='請設定密碼'
        value={password}
        onChange={(passwordInputValue) => setPassword(passwordInputValue)}
      />
      <AuthInput
        type='password'
        label='密碼確認'
        placeholder='請再次輸入密碼'
        value={checkPassword}
        onChange={(checkPasswordInputValue) => setcheCkPassword(checkPasswordInputValue)}
      />
      <AuthButton>註冊</AuthButton>
      {/* <Link to='/login'> */}
      <AuthLinkText as='a' href='/logo'>
        取消
      </AuthLinkText>
      {/* </Link> */}
    </AuthContainer>
  );
};

export default RegistPage;
