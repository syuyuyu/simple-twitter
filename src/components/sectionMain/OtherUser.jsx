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
import { LikeTweetContext, UserReplyContext, UserTweetContext } from "../../contexts/TweetContext";
import { deleteFollow, getOtherUser, postFollowing } from "../../api/user";
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
  const { setUserTweets } = useContext(UserTweetContext);
  const { setUserReplys } = useContext(UserReplyContext);
  const { setLikeTweets } = useContext(LikeTweetContext);
  const [personalInfo, setPersonalInfo] = useState({});
  const [isFollow, setIsFollow] = useState('');

  //GET ????????????
  useEffect(() => {
    const getOtherUserAsync = async () => {
      try {
        const user = await getOtherUser(param.userId);
        setPersonalInfo(user);
        setIsFollow(user.isFollowed);
        return;
      } catch (error) {
        console.error(error);
      }
    };
    getOtherUserAsync();
    return () => {
      setIsFollow(0);
    };
  }, [param.userId]);

  //GET otherUser???????????????
  useEffect(() => {
    const getUserTweetsAsync = async () => {
      try {
        const userTweets = await getOtherUserTweets(param.userId);
        setUserTweets(userTweets.map((userTweet) => ({ ...userTweet })));
        return;
      } catch (error) {
        console.error(error);
      }
    };
    getUserTweetsAsync();
    return () => {};
  }, [setUserTweets, param.userId]);

  //GET otherUser???????????????
  useEffect(() => {
    const getUserReplysAsync = async () => {
      try {
        const userReplys = await getOtherReplys(param.userId);
        setUserReplys(userReplys.map((tweet) => ({ ...tweet })));
        return;
      } catch (error) {
        console.error(error);
      }
    };
    getUserReplysAsync();
    return () => {};
  }, [setUserReplys, param.userId]);

  //GET otherUser???????????????
  useEffect(() => {
    const getUserLikeTweetsAsync = async () => {
      try {
        const likeTweets = await getOtherLikeTweets(param.userId);
        setLikeTweets(likeTweets.map((tweet) => ({ ...tweet })));
        return;
      } catch (error) {
        console.error(error);
      }
    };
    getUserLikeTweetsAsync();
    return () => {};
  }, [setLikeTweets, param.userId]);

  //????????????
  const handleToggleFollow = async (targetUser) => {
    const userId = localStorage.getItem("userId");
    if (Number(userId) === Number(targetUser.id)) {
      return;
    }
    //????????????
    if (isFollow === false) {
      try {
        const res = await postFollowing(targetUser.id);
        if (res) {
          setIsFollow(true);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      //????????????
      try {
        const res = await deleteFollow(targetUser.id);
        if (res) {
          setIsFollow(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  //????????????????????????
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
            <StyledTitleTweetCount>{personalInfo.tweetCount}??????</StyledTitleTweetCount>
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
          {isFollow ? (
            <StyledPublicButton onClick={() => handleToggleFollow(personalInfo)}>????????????</StyledPublicButton>
          ) : (
            <StyledPublicButton className='active' onClick={() => handleToggleFollow(personalInfo)}>
              ??????
            </StyledPublicButton>
          )}
        </StyledEditContainer>
        <StyledInfoWrapper>
          <StyledTitleH5>{personalInfo.name}</StyledTitleH5>
          <StyledAccount style={{ fontSize: "14px", fontWeight: "400" }}>@{personalInfo.account}</StyledAccount>
          <StyledContent>{personalInfo.introduction}</StyledContent>
          <StyledFollowsWrapper>
            <Link to='follow/following'>
              <StyledFollowWrapper>
                <p style={{ color: "var(--color-grayscale-dark100)" }}>{personalInfo.followingCount}???</p>
                <p>?????????</p>
              </StyledFollowWrapper>
            </Link>
            <Link to='follow/follower'>
              <StyledFollowWrapper>
                <p style={{ color: "var(--color-grayscale-dark100)" }}>{personalInfo.followerCount}???</p>
                <p>?????????</p>
              </StyledFollowWrapper>
            </Link>
          </StyledFollowsWrapper>
        </StyledInfoWrapper>
      </StyledProfileContainer>
      <StyledTweetsNavbarWrapper>
        <StyledTweetsNavbar>
          <NavLink to='tweets'>??????</NavLink>
          <NavLink to='replys'>??????</NavLink>
          <NavLink to='likes'>???????????????</NavLink>
        </StyledTweetsNavbar>
      </StyledTweetsNavbarWrapper>
      <Outlet />
    </StyledMainContainer>
  );
};

export default OtherUser;
