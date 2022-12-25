import React, { useContext } from "react";
import styled from "styled-components";
import replyIcon from "../../assets/icons/reply.svg";
import unLikeIcon from "../../assets/icons/like.svg";
import likeIcon from "../../assets/icons/like-active.svg";
import ReplyModal from "../Modals/ReplyModal";
import { ReplyModalContext } from "../../contexts/ModalContext";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-tw";
import clsx from "clsx";
import { TweetContext, TargetTweetContext } from "../../contexts/TweetContext";
// import { getTweetReplys } from "../../api/tweets";

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
  &:hover {
    cursor: pointer;
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex-flow: row;
  margin-bottom: 8px;
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
const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 120px;
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  p {
    font-family: montserrat;
    font-size: 14px;
    line-height: 14px;
    font-weight: 600;
    color: var(--color-secondary);
  }
`;

const StyledIcon = styled.div`
  width: 16px;
  height: 16px;
  background-size: cover;
  margin-right: 9px;
  &:hover {
    cursor: pointer;
  }
  &.replyIcon {
    background-image: url(${replyIcon});
  }
  &.likeIcon {
    background-image: url(${unLikeIcon});
    &.like {
      background-image: url(${likeIcon});
    }
  }
`;

const TweetItem = ({ tweet, time, description, isLiked, likedCount, replyCount, tweetId }) => {
  const { toggleReplyModal } = useContext(ReplyModalContext);
  const navigate = useNavigate();
  dayjs.extend(relativeTime);
  const { account, avatar, id, name } = { ...tweet.User };
  const { setTargetTweet } = useContext(TargetTweetContext);
  
  const handleClick = (data) => {
    setTargetTweet(data);
    toggleReplyModal();
  };
  
  const handleTargetUser = () => {
    const userId = localStorage.getItem("userId");
    if (id === userId) {
      return;
    }
    navigate(`/user/${id}`);
  };

  return (
    <>
      <ItemContainer>
        <AvatarContainer onClick={handleTargetUser}>
          <Avatar className='avatar' style={{ margin: "0px", backgroundImage: `url('${avatar}')` }}></Avatar>
        </AvatarContainer>
        <TextContainer>
          <RowContainer onClick={handleTargetUser}>
            <Name>{name}</Name>
            <Account>
              @{account} · {dayjs(`${time}`).locale("zh-tw").fromNow()}
            </Account>
          </RowContainer>
          <RowContainer>
            <TweetText onClick={() => navigate(`/user/reply/${tweet.id}`)}>{description}</TweetText>
          </RowContainer>
          <RowContainer>
            <IconsContainer>
              <IconContainer>
                <StyledIcon className='replyIcon' onClick={() => handleClick(tweet)}></StyledIcon>
                <p>{replyCount}</p>
              </IconContainer>
              <IconContainer>
                <StyledIcon></StyledIcon>
                <p>{likedCount}</p>
              </IconContainer>
            </IconsContainer>
          </RowContainer>
        </TextContainer>
      </ItemContainer>
      <ReplyModal />
    </>
  );
};

export default TweetItem;
