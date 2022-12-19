import React, { useContext } from "react";
import styled from "styled-components";
import {
  StyledContentContainer,
  StyledContentWrapper,
  StyledAvatarDefault,
  StyledButtonContainer,
  StyledError,
  StyledPublicButton,
} from "../common/StyledGroup";
import close from "../../assets/icons/close.svg";
import ReplyTweet from "../ReplyTweet";
import { ReplyModalContext } from "../../contexts/ModalContext";

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
  background: rgba(50, 50, 60, 0.4);
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
const TweetContainer = styled.div`
  width: 100%;
  
`;
const StyledContainer = styled.div`
  position: relative;
  flex-grow: 0.9;
  padding-top: 10px;
`;
const StyledTextarea = styled.textarea`
  width: 100%;
  font-size: 18px;
  line-height: 26px;
  outline: none;
  border: none;
`;

const ReplyModal = () => {
   const {replyModal,toggleReplyModal} = useContext(ReplyModalContext);

  return (
    <>
      {replyModal && (
        <Modal>
          <Overlay onClick={toggleReplyModal}></Overlay>
          <Content>
            <NavContainer>
              <Close className='close' onClick={toggleReplyModal}></Close>
            </NavContainer>
            <TweetContainer>
              <ReplyTweet />
            </TweetContainer>
            <StyledContentContainer style={{ border: "none", height: "243px" }}>
              <StyledContentWrapper>
                <StyledAvatarDefault style={{ margin: "0px 8px 16px 16px" }}>
                  <div className='avatar'></div>
                </StyledAvatarDefault>
                <StyledContainer>
                  <StyledTextarea
                    type='text'
                    placeholder='推你的回覆'
                    // value={value}
                    // onChange={(event) => onChange?.(event.target.value)}
                  />
                </StyledContainer>
              </StyledContentWrapper>
              <StyledButtonContainer>
                <StyledError>字數不可超過140字</StyledError>
                <StyledPublicButton>回覆</StyledPublicButton>
              </StyledButtonContainer>
            </StyledContentContainer>
          </Content>
        </Modal>
      )}
    </>
  );
};

export default ReplyModal;
