import React, { useState } from "react";
import {StyledHeader,StyledTitleH4,StyledPublicButton} from "./common/StyledGroup";
import AuthInput from "../components/AuthInput";
import styled from "styled-components";
import TweetModal from "./Modals/TweetModal";

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
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkedPassword, setCheckedPassword] = useState("");

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
            value={account}
            onChange={(accountInputValue) => setAccount(accountInputValue)}
          />
          <AuthInput //用useReducer
            label='名稱'
            placeholder='請輸入名稱'
            value={name}
            onChange={(nameInputValue) => setName(nameInputValue)}
          />
          <AuthInput
            type='email'
            label='Email'
            placeholder='請輸入Email'
            value={email}
            onChange={(passwordInputValue) => setEmail(passwordInputValue)}
          />
          <AuthInput //用useReducer
            type='password'
            label='密碼'
            placeholder='請設定密碼'
            value={password}
            onChange={(passwordInputValue) => setPassword(passwordInputValue)}
          />
          <AuthInput //用useReducer
            type='password'
            label='密碼再確認'
            placeholder='請再次輸入密碼'
            value={checkedPassword}
            onChange={(checkedasswordInputValue) => setCheckedPassword(checkedasswordInputValue)}
          />
          <div className='buttonPosition'>
            <StyledPublicButton style={{ marginRight: "0px", marginTop: "8px" }}>儲存</StyledPublicButton>
          </div>
        </InputContainer>
      </SettingContainer>
      <TweetModal />
    </>
  );
}

export default Setting;