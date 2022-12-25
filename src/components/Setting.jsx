import React, { useState,useEffect } from "react";
import {StyledHeader,StyledTitleH4,StyledPublicButton} from "./common/StyledGroup";
import AuthInput from "../components/AuthInput";
import styled from "styled-components";
import { putUser,getUser } from "../api/user";
import Swal from "sweetalert2";
import SettingPasswordInput from "./AuthInputPassword";


const SettingContainer =styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
`
const HeaderContainer= styled.div`
  width: 100%;
`
const InputContainer= styled.div`
  padding: 24px 23px;
  width: 100%;
  position: relative;
  .buttonPosition{
    display: flex;
    justify-content: end;
  }
`
const Setting =()=>{
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkedPassword, setCheckedPassword] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const handleSubmit=async()=>{
    if(!account || !name || !email ){
      Swal.fire({
        title: "資料欄位為必填",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        position: "top",
      });
      return;
    };
    if(isUpdating){
      return;
    }
    if(password !== checkedPassword){
      Swal.fire({
        title: "密碼不相同",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        position: "top",
      });
    }
    setIsUpdating(true)
    const res = await putUser({account,name,email,password,checkedPassword})
    if(res){
      await Swal.fire({
        title: "資料儲存中",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
        position: "top",
      });
    }
    setIsUpdating(false)
  }


  useEffect(()=>{
    const getUserData = async () => {
    try {
      const user = await getUser();
      setAccount(user?.account);
      setName(user?.name);
      setEmail(user?.email);
    } catch (error) {
      console.error(error);
    }
    };
    getUserData();
  }, []);


  return (
    <>
      <SettingContainer>
        <HeaderContainer>
          <StyledHeader>
            <StyledTitleH4>帳戶設定</StyledTitleH4>
          </StyledHeader>
        </HeaderContainer>
        <InputContainer>
          <AuthInput //用useReducer
            label='帳號'
            placeholder='請輸入帳號'
            isUpdating={isUpdating}
            value={account}
            onChange={(value) => isUpdating? value : setAccount(value)}
          />
          <AuthInput //用useReducer
            label='名稱'
            placeholder='請輸入名稱'
            isUpdating={isUpdating}

            value={name}
            onChange={(value) => isUpdating? value : setName(value)}
          />
          <AuthInput
            type='email'
            label='Email'
            placeholder='請輸入Email'
            isUpdating={isUpdating}

            value={email}
            onChange={(value) => isUpdating? value : setEmail(value)}
          />
          <SettingPasswordInput //用useReducer
            type='password'
            label='密碼'
            placeholder='請設定密碼'
            isUpdating={isUpdating}

            value={password}
            onChange={(value) => isUpdating? value : setPassword(value)}
          />
          <SettingPasswordInput //用useReducer
            type='password'
            label='密碼再確認'
            placeholder='請再次輸入密碼'
            isUpdating={isUpdating}

            value={checkedPassword}
            onChange={(value) => isUpdating? value : setCheckedPassword(value)}
          />
          <div className='buttonPosition'>
            <StyledPublicButton onClick={handleSubmit} style={{ marginRight: "0px", marginTop: "8px" }}>儲存</StyledPublicButton>
          </div>
        </InputContainer>
      </SettingContainer>
    </>
  );
}

export default Setting;