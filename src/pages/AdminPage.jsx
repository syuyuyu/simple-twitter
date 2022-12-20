import React, { useEffect, useState } from "react";
import {
  AuthButton,
  AuthContainer,
  AuthLinkText,
  LinkTextContainer,
  LogoStyle,
  TitleH3,
} from "../components/common/authstyled";
import AuthInput from "../components/AuthInput";
// import {Routes,Route} from "react-router-dom";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { useAdmin } from "../contexts/AdminContext";
import Swal from "sweetalert2";

const AdminPage = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
const { login, isAuthenticated } = useAdmin();

const handleClick = async () => {
  if (account.length === 0) {
    return;
  }
  if (password.length === 0) {
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
  Swal.fire({
    title: "登入失敗",
    icon: "error",
    showConfirmButton: false,
    timer: 1000,
    position: "top",
  });
};

useEffect(() => {
  if (isAuthenticated) {
    navigate("/admin/main");
  }
}, [navigate, isAuthenticated]);

  return (
    <AuthContainer>
      <LogoStyle>
        <div className='logo-icon'></div>
      </LogoStyle>
      <TitleH3>後台登入</TitleH3>
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
        <AuthButton onClick={handleClick}>登入</AuthButton>
      <LinkTextContainer>
        <Link to='/'>
          <AuthLinkText>前台登入</AuthLinkText>
        </Link>
      </LinkTextContainer>
    </AuthContainer>
  );
};

export default AdminPage;
