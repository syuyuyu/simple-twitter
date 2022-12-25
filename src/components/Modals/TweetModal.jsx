import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { StyledContentContainer, StyledButtonContainer, StyledError, StyledPublicButton } from "../common/StyledGroup";
import Swal from "sweetalert2";
import close from "../../assets/icons/close.svg";
import { TweetModalContext } from "../../contexts/ModalContext";
import avatarDefault from "../../assets/icons/avatar-default.svg";
import { createTweet } from "../../api/tweets";
import { getUser } from "../../api/user";

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
  border-radius: 50%;
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

const StyledContainer = styled.div`
  position: relative;
  flex-grow: 0.9;
  padding: 15px 0 0 8px;
  height: 100%;
`;
const StyledTextarea = styled.textarea`
  width: 100%;
  font-size: 18px;
  line-height: 26px;
  outline: none;
  border: none;
  min-height: 150px;
`;

const TweetModal = () => {
  const { tweetModal, toggleTweetModal } = useContext(TweetModalContext);
  const [inputValue, setInputValue] = useState("");
  const [isUpload, setIsUpload] = useState(false);
  const [user, setUser] = useState({});

  const handleSubmit = async () => {
    if (isUpload) {
      Swal.fire({
        title: "上傳中請稍等",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        position: "top",
      });
    }
    if (!inputValue) {
      Swal.fire({
        title: "推文不可為空白",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        position: "top",
      });
      return;
    }
    setIsUpload(true);
    const description = inputValue;
    try {
      const res = await createTweet(description);
      if (res) {
        await Swal.fire({
          title: "資料儲存中",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
          position: "top",
        });
      }
      toggleTweetModal();
      setIsUpload(false);
      setInputValue("");
    } catch (err) {
      Swal.fire({
        title: "儲存失敗",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        position: "top",
      });
    }
  };
  //GET 個人資料
  useEffect(() => {
    const getUserAsync = async () => {
      try {
        const user = await getUser();
        setUser(user);
        return;
      } catch (error) {
        console.error(error);
      }
    };
    getUserAsync();
    return () => {};
  }, [setUser]);

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
                <Avatar className='avatar' style={{ backgroundImage: `url('${user.avatar}')` }}></Avatar>
                <StyledContainer>
                  <StyledTextarea
                    type='text'
                    value={inputValue}
                    placeholder={"有什麼新鮮事？"}
                    maxLength={140}
                    onChange={(event) => setInputValue(event.target.value)}
                  />
                </StyledContainer>
              </ContentWrapper>
              <StyledButtonContainer>
                {inputValue?.length === 140 ? <StyledError>字數不可超過140字</StyledError> : null}
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
