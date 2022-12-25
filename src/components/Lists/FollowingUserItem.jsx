import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteFollow, postFollowing } from "../../api/user";
import { StyledPublicButton } from "../common/StyledGroup";

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #e6ecf0;
  padding: 16px 29px 16px 24px;
`;

const AvatarContainer = styled.div`
  width: 50px;
  height: 50px;
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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

const RowContainer = styled.div`
  margin-bottom: 8px;
  width: 528px;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.p`
  height: 26px;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  color: var(--color-grayscale-dark100);
`;

const TweetText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
`;

const FollowingUserItem = ({ UserId, otherUser, isFollowed }) => {
  const navigate = useNavigate();
  const { id,avatar, introduction, name } = { ...otherUser };
  const [isFollow, setIsFollow] = useState(isFollowed);

  //跳轉其他使用者個人資料頁面
  const handleTargetUser = () => {
    const userId = localStorage.getItem("userId");
    if (Number(UserId) === Number(userId)) {
      return navigate("/user/profile");
    }
    navigate(`/user/${id}`);
  };

  //跟隨功能
  const handleToggleFollow = async (targetUser) => {
    const userId = localStorage.getItem("userId");
    if (Number(userId) === Number(targetUser.id)) {
      return;
    }
    //開始跟隨
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
      //取消追隨
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
  return (
    <ItemContainer>
      <AvatarContainer onClick={handleTargetUser}>
        <Avatar className='avatar' style={{ margin: "0px", backgroundImage: `url('${avatar}')` }}></Avatar>
      </AvatarContainer>
      <TextContainer>
        <RowContainer>
          <Name>{name}</Name>
          {isFollow ? (
            <StyledPublicButton onClick={() => handleToggleFollow(otherUser)}>正在跟隨</StyledPublicButton>
          ) : (
            <StyledPublicButton className='active' onClick={() => handleToggleFollow(otherUser)}>
              跟隨
            </StyledPublicButton>
          )}
        </RowContainer>
        <RowContainer>
          <TweetText>{introduction}</TweetText>
        </RowContainer>
      </TextContainer>
    </ItemContainer>
  );
};

export default FollowingUserItem;
