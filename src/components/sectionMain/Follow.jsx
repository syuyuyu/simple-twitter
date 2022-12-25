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
import { useContext, useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { FollowerContext, FollowingContext } from "../../contexts/TweetContext";
import { deleteFollow, getFollowers, getFollowings, postFollowing } from "../../api/user";

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
  const [isFollow, setIsFollow] = useState(0);

  
//GET 追隨者
useEffect(() => {
  const getFollowersAsync = async () => {
    try {
      const followers = await getFollowers();
      setFollowers(followers);
      return;
    } catch (error) {
      console.error(error);
    }
  };
  getFollowersAsync();
  return()=>{
    setIsFollow(0)
  }
}, [isFollow,setFollowers]);

//GET 追蹤ing名單
useEffect(() => {
  const getFollowingsAsync = async () => {
    try {
      const followings = await getFollowings();
      setFollowings(followings);
      return;
    } catch (error) {
      console.error(error);
    }
  };
  getFollowingsAsync();
  return()=>{
    setIsFollow(0)
  }
}, [isFollow,setFollowings]);


// //追隨開關
  const handleToggleFollow = async (targetUser) => {
    const userId = localStorage.getItem("userId");
    if (Number(userId) === Number(targetUser.followingId)) {
      return;
    }
    //開始跟隨
    if (!targetUser.isFollowed) {
      try {
        const res = await postFollowing(targetUser.followingId);
        if(res){
          setIsFollow(isFollow+1);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      //取消追隨
      try {
        const res = await deleteFollow(targetUser.followingId);
        if(res){
          setIsFollow(isFollow-1);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

//驗證 跳轉頁面
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
          <FollowNavLink to='follower' activeStyle handleToggleFollow={handleToggleFollow}>
            追隨者
          </FollowNavLink>
          <FollowNavLink to='following' activeStyle handleToggleFollow={handleToggleFollow}>
            正在追隨
          </FollowNavLink>
        </StyledTweetsNavbar>
      </StyledTweetsNavbarWrapper>
      <Outlet handleToggleFollow={handleToggleFollow} />
    </StyledMainContainer>
  );
};

export default Follow;
