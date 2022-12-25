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
  const [isFollow, setIsFollow] = useState("");

  //GET 個人資料
  useEffect(() => {
    const getOtherUserAsync = async () => {
      try {
        const user = await getOtherUser(param.userId);
        setPersonalInfo(user);
        console.log("其他使用者資料>>",user)
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

  //GET otherUser自己的推文
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

  //GET otherUser回覆串資料
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

  //GET otherUser喜歡的內容
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

  const handleToggleFollow = async (targetUser) => {
    const userId = localStorage.getItem("userId");
    if (Number(userId) === Number(targetUser.followingId)) {
      return;
    }
    //開始跟隨
    if (!targetUser.isFollowed) {
      try {
        const res = await postFollowing(targetUser.followingId);
        if (res) {
          setIsFollow(isFollow + 1);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      //取消追隨
      try {
        const res = await deleteFollow(targetUser.followingId);
        if (res) {
          setIsFollow(isFollow - 1);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  //身分驗證頁面跳轉
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
          {isFollow === 1 ? (
            <StyledPublicButton onClick={(e) => handleToggleFollow(e)}>正在跟隨</StyledPublicButton>
          ) : (
            <StyledPublicButton className='active' onClick={(e) => handleToggleFollow(e)}>
              跟隨
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
