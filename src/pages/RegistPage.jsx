import React from "react";
import {AuthButton, AuthContainer, AuthLinkText, LogoStyle, TitleH3} from "../components/common/authstyled";
import AuthInput from "../components/common/AuthInput";

const RegistPage = () => {
  return (
    <AuthContainer>
      <LogoStyle>
        <div className='logo-icon'></div>
      </LogoStyle>
      <TitleH3>建立你的帳號</TitleH3>
      <AuthInput //用useReducer
        label='帳號'
        placeholder='請輸入帳號'
        // value={account}
        // onChange={(accountInputValue) => setAccount(accountInputValue)}
      />
      <AuthInput
        label='名稱'
        placeholder='請輸入使用者名稱'
        // value={username}
        // onChange={(nameInputValue) => setUsername(nameInputValue)}
      />
      <AuthInput
        label='Email'
        placeholder='請輸入Email'
        // value={email}
        // onChange={(emailInputValue) => setEmail(emailInputValue)}
      />
      <AuthInput
        label='密碼'
        placeholder='請設定密碼'
        // value={password}
        // onChange={(passwordInputValue) => setPassword(passwordInputValue)}
      />
      <AuthInput
        label='密碼確認'
        placeholder='請再次輸入密碼'
        // value={password}
        // onChange={(passwordInputValue) => setPassword(passwordInputValue)}
      />
      <AuthButton>註冊</AuthButton>
      <AuthLinkText>取消</AuthLinkText>
    </AuthContainer>
  );
};

export default RegistPage;
