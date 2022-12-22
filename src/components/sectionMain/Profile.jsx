import React, { useContext, useEffect,useState } from "react";
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
import { getReplys } from "../../api/userReplys";
import { UserReplyContext,TweetContext } from "../../contexts/TweetContext";
import { getUser } from "../../api/user";
// import { getUserTweets } from "../../api/tweets";

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
  const {toggleEditModal} = useContext(EditModalContext);
  const navigate = useNavigate();
  const { isAuthenticated,currentMember } = useAuth();
  const {setUserReplys } = useContext(UserReplyContext);
  const { userTweets } = useContext(TweetContext);
  const [intro, setIntro] = useState('')
  const [avatar, setAvatar] = useState('')
  const [cover, setCover] = useState('')
  const [name, setName] = useState('')
  const [followerCount,setFollowerCount] = useState('')
  const [followingCount,setFollowingCount] = useState('')

  //取得回覆串資料
  useEffect(() => {
    const getUserReplysAsync = async () => {
      try {
        const userReplys = await getReplys();
        // console.log(userReplys);
        setUserReplys(userReplys.map((tweet) => ({ ...tweet })));
      } catch (error) {
        console.error(error);
      }
    };
    getUserReplysAsync();
  }, [setUserReplys]);

  //取得user資料
  useEffect(()=>{
    const getUserData = async () => {
      try {
        const user = await getUser();
        console.log('Profile useEffect getUser :',user)
        setIntro(user.introduction)
        setName(user.name)
        setAvatar(user.avatar)
        setCover(user.cover)
        setFollowerCount(user.followerCount)
        setFollowingCount(user.followingCount)
      } catch (error) {
        console.error(error);
      }
    };
    getUserData();
  }, [isAuthenticated]);

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
              <StyledTitleH5>{name}</StyledTitleH5>
              <StyledTitleTweetCount>{userTweets.length}推文</StyledTitleTweetCount>
            </StyledTitleWrapper>
          </StyledTitleContainer>
        </StyledHeader>
        <StyledProfileContainer>
          <StyledBackgroundImage style={{backgroundImage:`url('${cover}')`, backgroundColor: 'red'}}></StyledBackgroundImage>
          <StyledAvatarImage className='avatar' style={{backgroundImage:`url('${avatar}')`,backgroundColor: 'black'}}></StyledAvatarImage>

          <StyledEditContainer>
            <StyledPublicButton whiteMode={true} onClick={toggleEditModal}> 
              編輯個人資料
            </StyledPublicButton>
          </StyledEditContainer>

          <StyledInfoWrapper>
            <StyledTitleH5>{name}</StyledTitleH5>
            <StyledAccount style={{ fontSize: "14px", fontWeight: "400" }}>@{currentMember?.name}</StyledAccount>
            <StyledContent>
              {intro}
            </StyledContent>
            <StyledFollowsWrapper>
              <Link to='follow/following'>
                <StyledFollowWrapper>
                  <p style={{ color: "var(--color-grayscale-dark100)" }}>{followingCount}個</p>
                  <p>跟隨中</p>
                </StyledFollowWrapper>
              </Link>
              <Link to='follow/follower'>
                <StyledFollowWrapper>
                  <p style={{ color: "var(--color-grayscale-dark100)" }}>{followerCount}位</p>
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
    </>
  );
};

export default Profile;
