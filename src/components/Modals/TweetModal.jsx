import React,{ useContext, useState }  from "react";
import styled from "styled-components";
import {
  StyledContentContainer,
  StyledButtonContainer,
  StyledError,
  StyledPublicButton,
} from "../common/StyledGroup";
import Swal from "sweetalert2";
import ContentTextarea from "../ContentTextarea";
import close from "../../assets/icons/close.svg";
import { TweetModalContext } from "../../contexts/ModalContext";
import avatarDefault from "../../assets/icons/avatar-default.svg";
import { createTweet } from "../../api/tweets";

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(50, 50, 60);
  opacity: 0.5;
`;

const Content = styled.div`
  position: absolute;
  top: 56px;
  left: 50%;
  transform: translate(-57.2%, 0);
  background: var(--color-white);
  border-radius: 14px;
  max-width: 634px;
  min-width: 634px;
`;

const Close = styled.button`
  width: 24px;
  height: 24px;
  margin: 16px 15px;

  &:hover {
    cursor: pointer;
  }
  &.close {
    background-image: url(${close});
    background-size: cover;
  }
`;

const NavContainer = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #e6ecf0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 8px 0 8.2px;
  width: 100%;
  margin-left: 8.2px;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  &:hover {
    cursor: pointer;
  }
  &.avatar {
    width: 50px;
    height: 50px;
    background-image: url(${avatarDefault});
    background-size: cover;
  }
`;

const TweetModal = () => {
  const {tweetModal,toggleTweetModal} = useContext(TweetModalContext);
  const [inputValue, setInputValue] = useState(""); 
  const [isUpload,setIsUpload] = useState(false)

  const handleSubmit=async()=>{
    if(isUpload){
      Swal.fire({
        title: "上傳中請稍等",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        position: "top",
      });
    };
    if(!inputValue){
      Swal.fire({
        title: "推文不可為空白",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        position: "top",
      });
    };
    setIsUpload(true)
    const description = inputValue
    try{
      const res = await createTweet(description)
      console.log('res :',res)
      if(res){
        await Swal.fire({
          title: "資料儲存中",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
          position: "top",
        });
      }
      toggleTweetModal()
      setIsUpload(false)
    }catch(err){
      Swal.fire({
        title: "儲存失敗",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        position: "top",
      });
    }
  }

  return (
    <>
      {tweetModal && (
        <Modal>
          <Overlay onClick={toggleTweetModal}></Overlay>
          <Content>
            <NavContainer>
              <Close className='close' onClick={toggleTweetModal}></Close>
            </NavContainer>
            <StyledContentContainer style={{ border: "none", height: "243px" }}>
              <ContentWrapper>
                <Avatar className='avatar'></Avatar>
                <ContentTextarea
                  placeholder='有什麼新鮮事？'
                  value={inputValue}
                  onChange={(value => isUpload? value : setInputValue(value))}
                />
              </ContentWrapper>
              <StyledButtonContainer>
                <StyledError>字數不可超過140字</StyledError>
                <StyledPublicButton onClick={handleSubmit}>推文</StyledPublicButton>
              </StyledButtonContainer>
            </StyledContentContainer>
          </Content>
        </Modal>
      )}
    </>
  );
};

export default TweetModal;
