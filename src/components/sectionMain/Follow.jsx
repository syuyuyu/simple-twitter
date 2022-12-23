import {
  StyledMainContainer,
  StyledHeader,
  StyledTitleContainer,
  StyledBackIcon,
  StyledTitleWrapper,
  StyledTitleH5,
  StyledTitleTweetCount,
  StyledTweetsNavbarWrapper,
  StyledTweetsNavbar,
} from "../common/StyledGroup";
import { NavLink as Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { FollowerContext, FollowingContext } from "../../contexts/TweetContext";
import { getFollowers, getFollowings } from "../../api/user";

const FollowNavLink = styled(Link)`
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

const Follow = () => {
  const navigate = useNavigate();
  const { isAuthenticated, currentMember} = useAuth();
  const { setFollowers } = useContext(FollowerContext);
  const { setFollowings } = useContext(FollowingContext);

  
//渲染追隨者
useEffect(() => {
  const getFollowersAsync = async () => {
    try {
      const followers = await getFollowers();
      console.log("追隨者",followers);
      setFollowers(followers);
    } catch (error) {
      console.error(error);
    }
  };
  getFollowersAsync();
}, [setFollowers]);
//渲染追蹤ing名單
useEffect(() => {
  const getFollowingsAsync = async () => {
    try {
      const followings = await getFollowings();
      console.log("追蹤ing名單", followings);
      setFollowings(followings);
    } catch (error) {
      console.error(error);
    }
  };
  getFollowingsAsync();
}, [setFollowings]);

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
            <StyledTitleH5>{currentMember?.name}</StyledTitleH5>
            <StyledTitleTweetCount>25推文</StyledTitleTweetCount>
          </StyledTitleWrapper>
        </StyledTitleContainer>
      </StyledHeader>
      <div
        style={{
          borderTop: "1px solid #E6ECF0",
        }}
      ></div>
      <StyledTweetsNavbarWrapper>
        <StyledTweetsNavbar style={{ width: "260px" }}>
          <FollowNavLink to='follower' activeStyle>
            追隨者
          </FollowNavLink>
          <FollowNavLink to='following' activeStyle>
            正在追隨
          </FollowNavLink>
        </StyledTweetsNavbar>
      </StyledTweetsNavbarWrapper>
      <Outlet />
    </StyledMainContainer>
  );
};

export default Follow;