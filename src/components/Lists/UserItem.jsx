import React from "react";
import styled from "styled-components";
import { StyledAvatarDefault, StyledPublicButton } from "../../components/common/StyledGroup";

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #e6ecf0;
  padding: 16px 29px 16px 24px;
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

const UserItem = ({ key,user,followerUser }) => {
  return (
    <ItemContainer>
      <StyledAvatarDefault style={{ margin: "0px" }}>
        <div className={"followerUser.avatar"}></div>
      </StyledAvatarDefault>
      <TextContainer>
        <RowContainer>
          <Name>{"followerUser.name"}</Name>
          {user.isFollowed ? (
            <StyledPublicButton whiteMode={true} style={{ marginRight: "0px" }}>
              跟隨
            </StyledPublicButton>
          ) : (
            <StyledPublicButton style={{ marginRight: "0px" }}>正在跟隨</StyledPublicButton>
          )}
        </RowContainer>
        <RowContainer>
          <TweetText>{"followerUser.introduction"}</TweetText>
        </RowContainer>
      </TextContainer>
    </ItemContainer>
  );
};

export default UserItem;
