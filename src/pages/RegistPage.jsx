import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthButton, AuthContainer, AuthLinkText, LogoStyle, TitleH3 } from "../components/common/authstyled";
import AuthInput from "../components/AuthInput";
// import { register } from "../api/auth";
import { useAuth } from "../contexts/AuthContext";


const RegistPage = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setcheCkPassword] = useState("");

    // 將register功能and狀態通行驗證從useAuth取得
  const { register, isAuthenticated } = useAuth();

  // const handleSubmit = (event) => {
  //   event.preventDedault();
  // };

  const handleClick = async()=>{
    if (account.length === 0 || name.length === 0 || email.length === 0 || password.length === 0 || checkPassword.length === 0){
      return
    };

    const success = await register({
      account,
      name,
      email,
      password,
      checkPassword
    });
    if(success){
      // alert('註冊成功,',success,account,name,email,password,checkPassword)
      Swal.fire({
        title: '登入成功',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
        position: 'top',
      });
      return;
      // 不成功就直接返回
    }
    Swal.fire({
      position: 'top',
      title: '註冊失敗！',
      timer: 1000,
      icon: 'error',
      showConfirmButton: false,
      });
    // alert('註冊失敗',account,name,email,password,checkPassword);
  };

  useEffect(()=>{
  // 若通行轉到main頁面去
  if (isAuthenticated) {
    navigate('/user/main');
    }
  }, [navigate, isAuthenticated]);
  
  return (
    // <AuthContainer onSubmit={handleSubmit}>
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
        typr='email'
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
      <AuthButton onClick={handleClick}>註冊</AuthButton>
      <Link to='/'>
        <AuthLinkText>取消</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default RegistPage;
