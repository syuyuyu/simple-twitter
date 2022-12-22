import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
// import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../contexts/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuthenticated } = useAuth();

  const handleClick = async () => {
    try {
      if (account.trim().length === 0) {
        return;
      }
      if (password.trim().length === 0) {
        return;
      }
      const success = await login({ account, password });
      if (success) {
        Swal.fire({
          title: "登入成功",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
          position: "top",
        });
        return;
      }
    } catch (error) {
      Swal.fire({
        title: "登入失敗",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        position: "top",
      });
    }
  };

  useEffect(
    (userId) => {
      if (isAuthenticated) {
        navigate('/user/main');
      }
    },
    [navigate, isAuthenticated]
  );

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
      <AuthButton onClick={handleClick}>登入</AuthButton>
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
