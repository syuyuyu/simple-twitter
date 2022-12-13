import React, { useState } from "react";
import {
  AuthButton,
  AuthContainer,
  AuthLinkText,
  LinkTextContainer,
  LogoStyle,
  TitleH3,
} from "../components/common/authstyled";
import AuthInput from "../components/AuthInput";

const AdminPage = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
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
      <AuthButton>登入</AuthButton>
      <LinkTextContainer>
        <AuthLinkText>前台登入</AuthLinkText>
      </LinkTextContainer>
    </AuthContainer>
  );
};

export default AdminPage;
