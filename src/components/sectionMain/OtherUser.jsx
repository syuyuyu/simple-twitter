import React, { useContext, useEffect, useState } from "react";
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
import noti from "../../assets/icons/noti.svg";
import notiActive from "../../assets/icons/noti-active.svg";
import message from "../../assets/icons/message.svg";
import messageActive from "../../assets/icons/message-active.svg";
import { NavLink as Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {  LikeTweetContext, UserReplyContext, UserTweetContext } from "../../contexts/TweetContext";
import { getOtherUser } from "../../api/user";
import { getOtherLikeTweets, getOtherReplys, getOtherUserTweets } from "../../api/tweets";

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
  const { isAuthenticated } = useAuth();
  const param = useParams();
  // const { otherUser, setOtherUser } = useContext(OtherUserContext);
  const { setUserTweets } = useContext(UserTweetContext);
  const { setUserReplys } = useContext(UserReplyContext);
  const { setLikeTweets } = useContext(LikeTweetContext);
  const [personalInfo, setPersonalInfo] = useState({});

  //GET 個人資料
  useEffect(() => {
    const getOtherUserAsync = async () => {
      try {
        const user = await getOtherUser(param.userId);
        setPersonalInfo(user);
      } catch (error) {
        console.error(error);
      }
    };
    getOtherUserAsync();
  }, [param.userId]);

  //GET otherUser自己的推文
  useEffect(() => {
    const getUserTweetsAsync = async () => {
      try {
        const userTweets = await getOtherUserTweets(param.userId);
        setUserTweets(userTweets.map((userTweet) => ({ ...userTweet })));
      } catch (error) {
        console.error(error);
      }
    };
    getUserTweetsAsync();
  }, [setUserTweets, param.userId]);

  //GET otherUser回覆串資料
  useEffect(() => {
    const getUserReplysAsync = async () => {
      try {
        const userReplys = await getOtherReplys(param.userId);
        setUserReplys(userReplys.map((tweet) => ({ ...tweet })));
      } catch (error) {
        console.error(error);
      }
    };
    getUserReplysAsync();
  }, [setUserReplys, param.userId]);

  useEffect(() => {
    const getUserLikeTweetsAsync = async () => {
      try {
        const likeTweets = await getOtherLikeTweets(param.userId);
        setLikeTweets(likeTweets.map((tweet) => ({ ...tweet })));
        console.log("其他使用者的LikeTweets",likeTweets);
      } catch (error) {
        console.error(error);
      }
    };
    getUserLikeTweetsAsync();
  }, [setLikeTweets, param.userId]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [navigate, isAuthenticated]);

  return (
    <StyledMainContainer>
      <StyledHeader style={{ border: "0px" }}>
        <StyledTitleContainer>
          <StyledBackIcon className='backIcon' onClick={() => navigate(-1)}></StyledBackIcon>
          <StyledTitleWrapper>
            <StyledTitleH5>{personalInfo?.name}</StyledTitleH5>
            <StyledTitleTweetCount>{personalInfo.tweetCount}推文</StyledTitleTweetCount>
          </StyledTitleWrapper>
        </StyledTitleContainer>
      </StyledHeader>
      <StyledProfileContainer>
        {personalInfo.cover ? (
          <StyledBackgroundImage
            className='cover'
            style={{ backgroundImage: `url('${personalInfo.cover}')` }}
          ></StyledBackgroundImage>
        ) : (
          <StyledBackgroundImage className='cover'></StyledBackgroundImage>
        )}
        <StyledAvatarImage
          className='avatar'
          style={{ backgroundImage: `url('${personalInfo.avatar}')` }}
        ></StyledAvatarImage>
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
          <StyledTitleH5>{personalInfo.name}</StyledTitleH5>
          <StyledAccount style={{ fontSize: "14px", fontWeight: "400" }}>@{personalInfo.account}</StyledAccount>
          <StyledContent>{personalInfo.introduction}</StyledContent>
          <StyledFollowsWrapper>
            <Link to='follow/following'>
              <StyledFollowWrapper>
                <p style={{ color: "var(--color-grayscale-dark100)" }}>{personalInfo.followingCount}個</p>
                <p>跟隨中</p>
              </StyledFollowWrapper>
            </Link>
            <Link to='follow/follower'>
              <StyledFollowWrapper>
                <p style={{ color: "var(--color-grayscale-dark100)" }}>{personalInfo.followerCount}位</p>
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
