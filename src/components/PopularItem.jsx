import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import {
  StyledStyledNameContainer,
  StyledName,
  StyledAccount,
  StyledPublicButton,
  StyledPopularItem,
} from "../components/common/StyledGroup";

const AvatarContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 8px;
  &:hover {
    cursor: pointer;
  }
`;
const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
  &.avatar {
    background-size: cover;
  }
`;

const PopularItem = ({
  account,
  avatar,
  followerCount,
  followingId,
  followingUser,
  isFollowed,
  isFollow,
  setIsFollow,
  handleToggleFollow,
}) => {
  const { id, name } = { ...followingUser };
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const handleTargetUser = () => {
    if (id === userId) {
      return;
    }
    navigate(`/user/${id}`);
  };
setIsFollow(isFollowed);

  return (
    <>
      <StyledPopularItem>
        <AvatarContainer onClick={handleTargetUser}>
          <Avatar className='avatar' style={{ backgroundImage: `url('${avatar}')` }}></Avatar>
        </AvatarContainer>
        <StyledStyledNameContainer onClick={() => navigate(`/user/${id}`)}>
          <StyledName>{name}</StyledName>
          <StyledAccount>@{account}</StyledAccount>
        </StyledStyledNameContainer>
        {isFollow ? (
          <StyledPublicButton onClick={() => handleToggleFollow(id)}>正在跟隨</StyledPublicButton>
        ) : (
          <StyledPublicButton className='active' onClick={() => handleToggleFollow(id)}>
            跟隨
          </StyledPublicButton>
        )}
      </StyledPopularItem>
    </>
  );
};

export default PopularItem;
