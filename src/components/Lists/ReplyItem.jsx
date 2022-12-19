import React from 'react'
import styled from "styled-components";
import { StyledAvatarDefault } from "../common/StyledGroup";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-tw";

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

const ReplyItem = ({ reply }) => {
  dayjs.extend(relativeTime);
  return (
    <ItemContainer>
      <StyledAvatarDefault style={{ margin: "0px" }}>
        <div className={reply.User.avatar}></div>
      </StyledAvatarDefault>
      <TextContainer>
        <RowContainer>
          <Name>{reply.name}</Name>
          <Account>
            @{reply.account} · {dayjs(`${reply.createdAt}`).locale("zh-tw").fromNow("zh-tw")}
          </Account>
        </RowContainer>
        <RowContainer>
          <p className='text'>回覆</p>
          <p className='account'>@{reply.User.name}</p>
        </RowContainer>
        <RowContainer>
          <TweetText>
            {reply.comment}
          </TweetText>
        </RowContainer>
      </TextContainer>
    </ItemContainer>
  );
};

export default ReplyItem