import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-tw";
import { useNavigate } from "react-router-dom";
import avatarDefault from "../../assets/icons/avatar-default.svg";

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

const ReplyItem = ({ userReply }) => {
  const navigate = useNavigate();
  dayjs.extend(relativeTime);
  return (
    <ItemContainer>
      <AvatarContainer onClick={() => navigate("/user/:id")}>
        <Avatar className='avatar' style={{ margin: "0px", backgroundImage: `url('${avatarDefault}')` }}></Avatar>
      </AvatarContainer>
      <TextContainer>
        <RowContainer>
          <Name>wefwef</Name>
          <Account>
            {/* @wetfrf · {dayjs(`${userReply.updatedAt}`).locale("zh-tw").fromNow()} */}
          </Account>
        </RowContainer>
        <RowContainer>
          <p className='text'>回覆</p>
          <p className='account'>@1321</p>
        </RowContainer>
        <RowContainer>
          <TweetText>weffwef</TweetText>
          {/* <TweetText>{userReply.comment}</TweetText> */}
        </RowContainer>
      </TextContainer>
    </ItemContainer>
  );
};

export default ReplyItem;
