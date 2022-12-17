import React from "react";
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
import styled from "styled-components";
import noti from '../../icons/noti.svg'
import notiActive from '../../icons/noti-active.svg'
import message from "../../icons/message.svg";
import messageActive from "../../icons/message-active.svg";
import { NavLink as Link, Outlet, useNavigate } from "react-router-dom";

const NotiButton = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 16px;
  border: 1px solid var(--color-main);
  border-radius: 50%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .noti {
    width: 24px;
    height: 24px;
    background-size: cover;
    background-image: url(${noti});
  }
  .chat {
    width: 24px;
    height: 24px;
    background-size: cover;
    background-image: url(${message});
  }
  &.active {
    background: var(--color-main);
    .noti {
      background-image: url(${notiActive});
    }
    .chat {
      background-image: url(${messageActive});
    }
  }
`;
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

const OtherUser = () => {
  const navigate = useNavigate();
  return (
    <StyledMainContainer>
      <StyledHeader style={{ border: "0px" }}>
        <StyledTitleContainer>
          <StyledBackIcon className='backIcon' onClick={() => navigate(-1)}></StyledBackIcon>
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
          <NotiButton>
            <div className='chat'></div>
          </NotiButton>
          <NotiButton className='active'>
            <div className='noti'></div>
          </NotiButton>
          <StyledPublicButton>正在跟隨</StyledPublicButton>
        </StyledEditContainer>
        <StyledInfoWrapper>
          <StyledTitleH5>Jane Cathy</StyledTitleH5>
          <StyledAccount style={{ fontSize: "14px", fontWeight: "400" }}>@iamjane1999</StyledAccount>
          <StyledContent>
            其他使用者頁面 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum inventore tenetur iste
            expedita esse maxime.
          </StyledContent>
          <StyledFollowsWrapper>
            <Link to='follow/following'>
            <StyledFollowWrapper>
              <p style={{ color: "var(--color-grayscale-dark100)" }}>231個</p>
              <p>跟隨中</p>
            </StyledFollowWrapper>
            </Link>
            <Link to='follow/follower'>
            <StyledFollowWrapper>
              <p style={{ color: "var(--color-grayscale-dark100)" }}>59位</p>
              <p>跟隨者</p>
            </StyledFollowWrapper>
            </Link>
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
  );
};

export default OtherUser;
