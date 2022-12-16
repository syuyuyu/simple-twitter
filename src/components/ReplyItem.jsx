import React from 'react'
import styled from "styled-components";
import { StyledAvatarDefault } from "./common/StyledGroup";

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
  display: flex;
  flex-flow: row;
  margin-bottom: 8px;
  .text {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #6c757d;
  }
  .account {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: var(--color-main);
    cursor: pointer;
  }
`;

const Name = styled.p`
  height: 26px;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  color: var(--color-grayscale-dark100);
  &:hover {
    cursor: pointer;
  }
`;

const Account = styled.p`
  height: 22px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: var(--color-grayscale-dark70);
  margin-left: 8px;
`;

const TweetText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
`;

const ReplyItem = () => {
  return (
    <ItemContainer>
      <StyledAvatarDefault style={{ margin: "0px" }}>
        <div className='avatar'></div>
      </StyledAvatarDefault>
      <TextContainer>
        <RowContainer>
          <Name>Watermaloon</Name>
          <Account>@Watermaloon · 12小時</Account>
        </RowContainer>
        <RowContainer>
          <p className='text'>回覆</p>
          <p className='account'>@Watermaloon</p>
        </RowContainer>
        <RowContainer>
          <TweetText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore et ex commodi odit deserunt. Vel.
          </TweetText>
        </RowContainer>
      </TextContainer>
    </ItemContainer>
  );
}

export default ReplyItem