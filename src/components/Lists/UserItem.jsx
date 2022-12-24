import React from "react";
import styled from "styled-components";
import { StyledPublicButton } from "../../components/common/StyledGroup";

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

const UserItem = ({ User, isFollowed }) => {
  const {  avatar, introduction, name } = { ...User };
  
  return (
    <ItemContainer>
      <AvatarContainer>
        <Avatar className='avatar' style={{ margin: "0px", backgroundImage: `url('${avatar}')` }}></Avatar>
      </AvatarContainer>
      <TextContainer>
        <RowContainer>
          <Name>{name}</Name>
          {isFollowed ? (
            <StyledPublicButton whiteMode={true} style={{ marginRight: "0px" }}>
              跟隨
            </StyledPublicButton>
          ) : (
            <StyledPublicButton style={{ marginRight: "0px" }}>正在跟隨</StyledPublicButton>
          )}
        </RowContainer>
        <RowContainer>
          <TweetText>{introduction}</TweetText>
        </RowContainer>
      </TextContainer>
    </ItemContainer>
  );
};

export default UserItem;
