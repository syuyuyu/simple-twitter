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
import { getReplys } from "../../api/userReplys";
import { UserReplyContext } from "../../contexts/TweetContext";

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
  const { setUserReplys } = useContext(UserReplyContext);

  useEffect(() => {
    const getUserReplysAsync = async () => {
      try {
        const userReplys = await getReplys();
        console.log(userReplys);
        setUserReplys(userReplys.map((tweet) => ({ ...tweet })));
      } catch (error) {
        console.error(error);
      }
    };
    getUserReplysAsync();
  }, [setUserReplys]);


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
              <StyledTitleTweetCount>25推文</StyledTitleTweetCount>
            </StyledTitleWrapper>
          </StyledTitleContainer>
        </StyledHeader>
        <StyledProfileContainer>
          <StyledBackgroundImage></StyledBackgroundImage>
          <StyledAvatarImage className='avatar'></StyledAvatarImage>

          <StyledEditContainer>
            <StyledPublicButton whiteMode={true} onClick={toggleEditModal}>
              編輯個人資料
            </StyledPublicButton>
          </StyledEditContainer>

          <StyledInfoWrapper>
            <StyledTitleH5>{currentMember?.name}</StyledTitleH5>
            <StyledAccount style={{ fontSize: "14px", fontWeight: "400" }}>@heyjohn</StyledAccount>
            <StyledContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam impedit vel Quisquam impedit vel
              Quisquam impedit vel
            </StyledContent>
            <StyledFollowsWrapper>
              <Link to='follow/following'>
                <StyledFollowWrapper>
                  <p style={{ color: "var(--color-grayscale-dark100)" }}>34個</p>
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
      <EditModal />
    </>
  );
};

export default Profile;
