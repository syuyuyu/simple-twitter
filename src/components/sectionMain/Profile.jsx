import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  StyledMainContainer,
  StyledHeader,
  StyledTitleContainer,
  StyledBackIcon,
  StyledTitleH5,
  StyledTitleTweetCount,
  StyledProfileContainer,
  StyledBackgroundImage,
  StyledEditContainer,
  StyledPublicButton,
  StyledAvatarImage,
  StyledTitleWrapper,
  StyledInfoWrapper,
  StyledAccount,
  StyledContent,
  StyledFollowsWrapper,
  StyledFollowWrapper,
  StyledTweetsNavbar,
  StyledTweetsNavbarWrapper,
} from "../common/StyledGroup";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import TweetModal from "../Modals/TweetModal";


const NavLink = styled(Link)`
  height: 52px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-line-default);
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid var(--color-main);
    color: var(--color-main);
  }
  &.active {
    border-bottom: 2px solid var(--color-main);
    color: var(--color-main);
  }
`;

const Profile = () => {
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal);
  };
  
  return (
    <>
    <StyledMainContainer>
      <StyledHeader style={{ border: "0px" }}>
        <StyledTitleContainer>
          <StyledBackIcon className='backIcon'></StyledBackIcon>
          <StyledTitleWrapper>
            <StyledTitleH5>John Doe</StyledTitleH5>
            <StyledTitleTweetCount>25推文</StyledTitleTweetCount>
          </StyledTitleWrapper>
        </StyledTitleContainer>
      </StyledHeader>
      <StyledProfileContainer>
        <StyledBackgroundImage></StyledBackgroundImage>
        <StyledAvatarImage className='avatar'></StyledAvatarImage>

        <StyledEditContainer>
          <StyledPublicButton whiteMode={true} onClick={toggleModal}>編輯個人資料</StyledPublicButton>
        </StyledEditContainer>

        <StyledInfoWrapper>
          <StyledTitleH5>John Doe</StyledTitleH5>
          <StyledAccount style={{ fontSize: "14px", fontWeight: "400" }}>@heyjohn</StyledAccount>
          <StyledContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam impedit vel Quisquam impedit vel Quisquam
            impedit vel
          </StyledContent>
          <StyledFollowsWrapper>
            <StyledFollowWrapper>
              <p style={{ color: "var(--color-grayscale-dark100)" }}>34個</p>
              <p>跟隨中</p>
            </StyledFollowWrapper>
            <StyledFollowWrapper>
              <p style={{ color: "var(--color-grayscale-dark100)" }}>59位</p>
              <p>跟隨者</p>
            </StyledFollowWrapper>
          </StyledFollowsWrapper>
        </StyledInfoWrapper>
      </StyledProfileContainer>
      <StyledTweetsNavbarWrapper>
        <StyledTweetsNavbar>
          <NavLink to='tweets'>推文</NavLink>
          <NavLink to='replys'>回覆</NavLink>
          <NavLink to='likes'>喜歡的內容</NavLink>
        </StyledTweetsNavbar>
      </StyledTweetsNavbarWrapper>
      <Outlet />
    </StyledMainContainer>
    <TweetModal modal={modal} toggleModal={toggleModal} />
    </>
  );
};

export default Profile;
