import React, { useState } from "react";
import {
  AuthButton,
  AuthContainer,
  AuthDot,
  AuthLinkText,
  LinkTextContainer,
  LogoStyle,
  TitleH3,
} from "../components/common/authstyled";
import AuthInput from "../components/AuthInput";
import { Link } from "react-router-dom";


const LoginPage = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AuthContainer>
      <LogoStyle>
        <div className='logo-icon'></div>
      </LogoStyle>
      <TitleH3>登入Alphitter</TitleH3>
      <AuthInput //用useReducer
        label='帳號'
        placeholder='請輸入帳號'
        value={account}
        onChange={(accountInputValue) => setAccount(accountInputValue)}
      />
      <AuthInput
        type='password'
        label='密碼'
        placeholder='請設定密碼'
        value={password}
        onChange={(passwordInputValue) => setPassword(passwordInputValue)}
      />
      <Link to='/user/main'>
      <AuthButton>登入</AuthButton>
      </Link>
      <LinkTextContainer>
        <Link to='/regist'>
          <AuthLinkText>註冊</AuthLinkText>
        </Link>
        <AuthDot>·</AuthDot>
        <Link to='/admin'>
        <AuthLinkText>後台登入</AuthLinkText>
        </Link>
      </LinkTextContainer>
    </AuthContainer>
  );
};

export default LoginPage;
