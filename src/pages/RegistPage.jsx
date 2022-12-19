import React, { useState } from "react";
import { AuthButton, AuthContainer, AuthLinkText, LogoStyle, TitleH3 } from "../components/common/authstyled";
import AuthInput from "../components/AuthInput";
import { Link } from "react-router-dom";
import { register } from "../api/auth";

const RegistPage = () => {
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setcheCkPassword] = useState("");
  // const navigate = useNavigate();

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

    // console.log('success',{
    //   account,
    //   name,
    //   email,
    //   password,
    //   checkPassword})
    // 若註冊成功跳出成功訊息
    if(success){
      alert('註冊成功,',success,'::',account,name,email,password,checkPassword)
      // 不成功就直接返回
      return;
    }
    alert('註冊失敗',account,name,email,password,checkPassword);
  };
  
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
        <AuthLinkText>
          取消
        </AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default RegistPage;
