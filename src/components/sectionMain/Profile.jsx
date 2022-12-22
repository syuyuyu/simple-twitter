import React, { useContext, useEffect } from "react";
import { EditModalContext } from "../../contexts/ModalContext";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
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
import { getReplys } from "../../api/userReplys";
import { LikeTweetContext, OtherUserContext, UserReplyContext } from "../../contexts/TweetContext";
import { getLikeTweets } from "../../api/tweets";
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

  //個人資料
  useEffect(() => {
    const getUserAsync = async () => {
      try {
        const user = await getUser();
        console.log("個人頁面-個人資料", user);
        setOtherUser(user);
      } catch (error) {
        console.error(error);
      }
    };
    getUserAsync();
  }, [setOtherUser]);

  //回覆串
  useEffect(() => {
    const getUserReplysAsync = async () => {
      try {
        const userReplys = await getReplys();
        console.log("個人頁面-回覆串", userReplys);
        setUserReplys(userReplys);
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
        console.log("個人頁面-喜歡的內容", likeTweets);
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
