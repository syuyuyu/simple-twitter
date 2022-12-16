import React from 'react'
import styled from "styled-components";
import {
  StyledContentContainer,
  StyledContentWrapper,
  StyledAvatarDefault,
  StyledButtonContainer,
  StyledError,
  StyledPublicButton,
} from "../common/StyledGroup";
import ContentInput from '../ContentTextarea';
import close from "../../icons/close.svg";

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
  border-bottom: 1px solid #E6ECF0;
`


const TweetModal = ({ modal, toggleModal }) => {
  return (
    <>
      {modal && (
        <Modal>
          <Overlay onClick={toggleModal}></Overlay>
          <Content>
            <NavContainer>
                <Close className='close' onClick={toggleModal}></Close>
            </NavContainer>
            <StyledContentContainer style={{border: "none", height:'243px'}}>
              <StyledContentWrapper>
                <StyledAvatarDefault>
                  <div className='avatar'></div>
                </StyledAvatarDefault>
                <ContentInput
                  placeholder='有什麼新鮮事？'
                  // value={content}
                  // onChange={(accountInputValue) => setContevt(accountInputValue)}
                />
              </StyledContentWrapper>
              <StyledButtonContainer>
                <StyledError>字數不可超過140字</StyledError>
                <StyledPublicButton>推文</StyledPublicButton>
              </StyledButtonContainer>
            </StyledContentContainer>
          </Content>
        </Modal>
      )}
    </>
  );
};

export default TweetModal