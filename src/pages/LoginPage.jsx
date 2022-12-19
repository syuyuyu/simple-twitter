import React, { useEffect, useState } from "react";
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
import { Link, useNavigate } from 'react-router-dom';
import { login } from "../api/auth";


const LoginPage = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    if (account.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }
    const { status, token } = await login({ account, password });

    if (status === "success") {
      localStorage.setItem("authToken", token);
    }
  };

  useEffect(() => {
  // 若通行轉到todo頁面去
  if (isAuth) {
    navigate('/user/main');
    }
  }, [navigate, isAuth]);

  return (
    <AuthContainer>
      <LogoStyle>
        <div className='logo-icon'></div>
      </LogoStyle>
      <TitleH3>登入Alphitter</TitleH3>
      <AuthInput
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
      {/* <Link to='/user/main'> */}
      <AuthButton onClick={handleClick}>登入</AuthButton>
      {/* </Link> */}
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
