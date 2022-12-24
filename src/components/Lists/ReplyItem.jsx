import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-tw";
import { useNavigate } from "react-router-dom";

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

const ReplyItem = ({ key, User, UserId, comment, time, Tweet }) => {
  const navigate = useNavigate();
  dayjs.extend(relativeTime);
  const abc = { ...Tweet.User };
  const {account: tweetUserAccount} = abc;
  const { account, avatar, name,id } = { ...User };
  const userId = localStorage.getItem("userId");
  const handleTargetUser = () => {
    if (id === userId) {
      return;
    }
    navigate(`/user/${id}`);
  };

  return (
    <ItemContainer>
      <AvatarContainer onClick={handleTargetUser}>
        <Avatar className='avatar' style={{ margin: "0px", backgroundImage: `url('${avatar}')` }}></Avatar>
      </AvatarContainer>
      <TextContainer>
        <RowContainer>
          <Name>{name}</Name>
          <Account>
            @{account} · {dayjs(`${time}`).locale("zh-tw").fromNow()}
          </Account>
        </RowContainer>
        <RowContainer>
          <p className='text'>回覆</p>
          <p className='account'>@{tweetUserAccount}</p>
        </RowContainer>
        <RowContainer>
          <TweetText>{comment}</TweetText>
        </RowContainer>
      </TextContainer>
    </ItemContainer>
  );
};

export default ReplyItem;