import React, { useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
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
// import Swal from 'sweetalert2';
// import { useAuth } from "../contexts/AuthContext";
import { login } from "../api/auth";
// import { LogoutContext } from "../contexts/AuthContext";



const LoginPage = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  // const {isAuth,handleToggleAuth} = useContext(LogoutContext)
  // const { isAuthenticated }=useAuth();

  // 測試用
  const [isAuthenticated,setIsAuthenticated] = useState(false)

  const handleClick = async () => {
    if (account.length === 0 || password.length === 0) {
      return alert('帳號或密碼不得為空白')
    }
    const { status, token } = await login({ account, password });
    
    if (status === "success") {
      alert('登入成功')
      setIsAuthenticated(true)
      // handleToggleAuth(true)
      //登入成功
    //   Swal.fire({
    //     title: '登入成功',
    //     icon: 'success',
    //     showConfirmButton: false,
    //     timer: 1000,
    //     position: 'top',
    //   })
    //   return
    }else{
      alert('登入失敗')
      setIsAuthenticated(false)
    }
    // //登入失敗
    // Swal.fire({
    //   title: '登入失敗',
    //   icon: 'error',
    //   showConfirmButton: false,
    //   timer: 1000,
    //   position: 'top',
    // })
  ;}

  useEffect(() => {
  // 若通行轉到main頁面去
  if (isAuthenticated) {
    navigate('/user/main');
    }
  }, [navigate, isAuthenticated]);

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
