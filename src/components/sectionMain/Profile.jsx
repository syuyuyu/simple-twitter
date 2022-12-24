import React, { useContext, useEffect } from "react";
import { EditModalContext } from "../../contexts/ModalContext";
import { Outlet, useNavigate } from "react-router-dom";
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
import EditModal from "../Modals/EditModal";
import { useAuth } from "../../contexts/AuthContext";
import { getReplys } from "../../api/tweets";
import { LikeTweetContext, OtherUserContext, UserReplyContext, UserTweetContext } from "../../contexts/TweetContext";
import { getLikeTweets, getUserTweets } from "../../api/tweets";
import TweetModal from "../Modals/TweetModal";
import { getUser } from "../../api/user";

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
  
  const { toggleEditModal } = useContext(EditModalContext);
  const navigate = useNavigate();
  const { isAuthenticated, currentMember } = useAuth();
  const { setUserReplys } = useContext(UserReplyContext);
  const { setLikeTweets } = useContext(LikeTweetContext);
  const { otherUser, setOtherUser } = useContext(OtherUserContext);
  const { setUserTweets } = useContext(UserTweetContext);

  //GET 個人資料
  useEffect(() => {
    const getUserAsync = async () => {
      try {
        const user = await getUser();
        setOtherUser(user);
        return
      } catch (error) {
        console.error(error);
      }
    };
    getUserAsync();
  }, [setOtherUser]);

  //取得使用者自己的推文
  useEffect(() => {
    const getUserTweetsAsync = async () => {
      try {
        const userTweets = await getUserTweets();
        setUserTweets(userTweets.map((userTweet) => ({ ...userTweet })));
        return
      } catch (error) {
        console.error(error);
      }
    };
    getUserTweetsAsync();
  }, [setUserTweets]);

  //取得回覆串資料
  useEffect(() => {
    const getUserReplysAsync = async () => {
      try {
        const userReplys = await getReplys();
        setUserReplys(userReplys.map((tweet) => ({ ...tweet })));
        return
      } catch (error) {
        console.error(error);
      }
    };
    getUserReplysAsync();
  }, [setUserReplys]);
  //喜歡的內容
  useEffect(() => {
    const getLikeTweetsAsync = async () => {
      try {
        const likeTweets = await getLikeTweets();
        setLikeTweets(likeTweets.map((tweet) => ({ ...tweet })));
        return
      } catch (error) {
        console.error(error);
      }
    };
    getLikeTweetsAsync();
  }, [setLikeTweets]);

  //身分驗證
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [navigate, isAuthenticated]);

  return (
    <>
      <StyledMainContainer>
        <StyledHeader style={{ border: "0px" }}>
          <StyledTitleContainer>
            <StyledBackIcon className='backIcon' onClick={() => navigate(-1)}></StyledBackIcon>
            <StyledTitleWrapper>
              <StyledTitleH5>{currentMember?.name}</StyledTitleH5>
              <StyledTitleTweetCount>{otherUser.tweetCount}推文</StyledTitleTweetCount>
            </StyledTitleWrapper>
          </StyledTitleContainer>
        </StyledHeader>
        <StyledProfileContainer>
          {otherUser.cover ? (
            <StyledBackgroundImage
              className='cover'
              style={{ backgroundImage: `url('${otherUser.cover}')` }}
            ></StyledBackgroundImage>
          ) : (
            <StyledBackgroundImage className='cover'></StyledBackgroundImage>
          )}
          <StyledAvatarImage
            className='avatar'
            style={{ backgroundImage: `url('${otherUser.avatar}')` }}
          ></StyledAvatarImage>

          <StyledEditContainer>
            <StyledPublicButton whiteMode={true} onClick={toggleEditModal}>
              編輯個人資料
            </StyledPublicButton>
          </StyledEditContainer>

          <StyledInfoWrapper>
            <StyledTitleH5>{otherUser.name}</StyledTitleH5>
            <StyledAccount style={{ fontSize: "14px", fontWeight: "400" }}>@{otherUser.account}</StyledAccount>
            <StyledContent>{otherUser.introduction}</StyledContent>
            <StyledFollowsWrapper>
              <Link to='follow/following'>
                <StyledFollowWrapper>
                  <p style={{ color: "var(--color-grayscale-dark100)" }}>{otherUser.followingCount}個</p>
                  <p>跟隨中</p>
                </StyledFollowWrapper>
              </Link>
              <Link to='follow/follower'>
                <StyledFollowWrapper>
                  <p style={{ color: "var(--color-grayscale-dark100)" }}>{otherUser.followerCount}位</p>
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
      <EditModal />
      <TweetModal />
    </>
  );
};

export default Profile;
