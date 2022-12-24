import React from "react";
import styled from "styled-components";
import { StyledAvatarDefault } from "./common/StyledGroup";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-tw";


const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #e6ecf0;
  padding: 16px 29px 0 24px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-flow: row;
  /* margin-bottom: 8px; */
  &:nth-child(2)::before {
    content: "";
    position: absolute;
    left: 48px;
    top: 139px;
    width: 2px;
    height: 13%;
    background-color: var(--color-grayscale-dark60);
  }
`;

const Name = styled.p`
  height: 26px;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  color: var(--color-grayscale-dark100);
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

const Span = styled.p`
color:var(--color-secondary);
  font-size: 14px;
  font-weight: 4;
  line-height: 22px;
  margin-right: 3px;
`;

const ReplyTweet = ({tweet}) => {
  dayjs.extend(relativeTime);
  const {account,avatar,name}={...tweet.User}

  return (
    <ItemContainer style={{ border: "none" }}>
      <StyledAvatarDefault style={{ margin: "0px" }}>
        <div className='avatar' style={{ backgroundImage:`url('${avatar}')`,borderRadius:'50%'}}></div>
      </StyledAvatarDefault>
      <TextContainer>
        <RowContainer>
          <Name>{name}</Name>
          <Account>@{account} · {dayjs(`${tweet.createdAt}`).locale("zh-tw").fromNow()}</Account>
        </RowContainer>
        <RowContainer>
          <TweetText>
            {tweet.description}
          </TweetText>
        </RowContainer>
        <RowContainer style={{ margin: "8px 0", padding: "3px 0" }}>
          <Span>回覆給</Span>
          <Span style={{ color: "var(--color-main)" }}>@{account}</Span>
        </RowContainer>
      </TextContainer>
    </ItemContainer>
  );
};

export default ReplyTweet;
