import styled from "styled-components";
import {StyledAdminUserCard,StyledAdminUserBackground,StyledAdminUserAvatar,StyledName} from "./common/StyledGroup";
import likeIcom from "../assets/icons/like.svg";
import tweetIcon from "../assets/icons/tweet.svg";
// import {useEffect,useState, useContext} from "react";
// import { adminGetUsers } from "../api/admin";
import { useAdmin } from "../contexts/AdminContext";
// import { useContext } from "react";


const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 120px;
  margin-top: 16px;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  &.p{
    line-height: 26px;
  }
`;

const StyledIcon = styled.div`
  width: 24px;
  height: 24px;
  background-size: cover;
  margin-right: 9px;

  &.replyIcon {
    background-image: url(${tweetIcon});
  }
  &.likeIcon {
    background-image: url(${likeIcom});
  }
`;

const StyledUserAccount = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: var(--color-grayscale-dark70);
`;

const StyleUserCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  position: relative;
`

const StyledCardFollow = styled.div`
  color: var(--color-dark-100);
  margin-top: 13px;
  span:nth-child(even){
  color: var(--color-secondary);
  }
  span:nth-child(2){
  margin-right:8px;
  }
`

const AdminUserCard =()=>{
  const { getUsers } = useAdmin();
  // console.log('getUsers UserCard:' ,getUsers)

  return (
    <>
    { getUsers?.map((user) => 
    <StyledAdminUserCard>
      <StyledAdminUserBackground style={{backgroundImage:`${user.cover}`}}></StyledAdminUserBackground>
      <StyleUserCardContent>
        <StyledName>{user.name}</StyledName>
        <StyledUserAccount>@{user.account}</StyledUserAccount>
          <IconsContainer>
            <IconContainer>
              <StyledIcon className='replyIcon'></StyledIcon>
              <p>{user.tweetCount}</p>
            </IconContainer>
            <IconContainer>
              <StyledIcon className='likeIcon'></StyledIcon>
              <p>{user.likeCount}</p>
            </IconContainer>
          </IconsContainer>
          <StyledCardFollow>
            <span>{user.followingCount}個</span>
            <span>跟隨中</span>
            <span>{user.followerCount}位</span>
            <span>跟隨者</span>
          </StyledCardFollow>
          <StyledAdminUserAvatar src={user.avatar}></StyledAdminUserAvatar>
      </StyleUserCardContent>
    </StyledAdminUserCard>
    )}
    </>
  )
}

export default AdminUserCard;