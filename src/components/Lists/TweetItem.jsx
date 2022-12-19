import React from "react";
import styled from "styled-components";
import { StyledAvatarDefault } from "../common/StyledGroup";
import replyIcon from "../../assets/icons/reply.svg";
import unLikeIcon from "../../assets/icons/like.svg";
import likeIcon from "../../assets/icons/like-active.svg";
import ReplyModal from "../Modals/ReplyModal";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-tw";
import clsx from "clsx";

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #e6ecf0;
  padding: 16px 29px 16px 24px;
  &:hover {
    cursor: pointer;
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
const TweetItem = ({ tweet, replyModal, toggleReplyModal,onToggleLike }) => {
  const navigate = useNavigate();
  dayjs.extend(relativeTime);
  return (
    <>
      <ItemContainer>
        <StyledAvatarDefault style={{ margin: "0px" }}>
          <div className='avatar'></div>
        </StyledAvatarDefault>
        <TextContainer>
          <RowContainer>
            <Name>{tweet.name}</Name>
            <Account>
              @{tweet.account} · {dayjs(`${tweet.createdAt}`).locale("zh-tw").fromNow("zh-tw")}
            </Account>
          </RowContainer>
          <RowContainer>
            <TweetText onClick={() => navigate("/user/reply")}>{tweet.description}</TweetText>
          </RowContainer>
          <RowContainer>
            <IconsContainer>
              <IconContainer>
                <StyledIcon className='replyIcon' onClick={toggleReplyModal}></StyledIcon>
                <p>{tweet.replyCount}</p>
              </IconContainer>
              <IconContainer>
                <StyledIcon
                  className={clsx("likeIcon",{like: tweet.isLike})}
                  onClick={() => {
                    onToggleLike?.(tweet.id);
                  }}
                ></StyledIcon>
                <p>{tweet.likeCount}</p>
              </IconContainer>
            </IconsContainer>
          </RowContainer>
        </TextContainer>
      </ItemContainer>
      <ReplyModal replyModal={replyModal} toggleReplyModal={toggleReplyModal} />
    </>
  );
};

export default TweetItem;
