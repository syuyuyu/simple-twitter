import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import {
  StyledAccount,
  StyledBackIcon,
  StyledHeader,
  StyledMainContainer,
  StyledName,
  StyledTitleContainer,
  StyledTitleH4,
} from "../common/StyledGroup";
import reply from "../../assets/icons/reply.svg";
import unlike from "../../assets/icons/like.svg";
import like from "../../assets/icons/like-active.svg";
import TweetReplysList from "../Lists/TweetReplysList";
import ReplyModal from "../Modals/ReplyModal";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { getTargetTweet, postLike, postUnLike } from "../../api/tweets";
import { TargetTweetContext } from "../../contexts/TweetContext";
import dayjs from "dayjs";
import { ReplyModalContext } from "../../contexts/ModalContext";
import { getTweetReplys } from "../../api/tweets";
import { TweetReplysContext } from "../../contexts/TweetContext";
// import { getDefaultNormalizer } from "@testing-library/react";

const TweetContainer = styled.div`
  margin: 0 16px;
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  flex-direction: row;
  .count-wrapper {
    padding: 16px 0;
    font-size: 19px;
    display: flex;
    flex-direction: row;
    margin-right: 24px;
    .count {
      font-family: montserrat;
      font-weight: 700;
      line-height: 23.16px;
      color: var(--color-grayscale-dark100);
      padding-right: 5px;
    }
    .text {
      font-weight: 500;
      line-height: 23.16px;
      color: #6c757d;
    }
  }
  .icon-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 188px;
    padding: 16px 0;
    .icon {
      width: 30px;
      height: 30px;
      &:hover {
        cursor: pointer;
      }
      &.reply {
        background-image: url(${reply});
        background-size: cover;
      }
      &.like {
        background-image: url(${unlike});
        background-size: cover;
        &.active {
          background-image: url(${like});
        }
      }
    }
  }
`;
const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 16px;
  .wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
  }
`;
const Avatar = styled.div`
  width: 50px;
  height: 50px;
  margin: 16px 8px 16px 16px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
  &.avatar {
    background-size: cover;
  }
`;

const Content = styled.p`
  padding-top: 8px;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  color: var(--color-grayscale-dark100);
`;
const Time = styled.p`
  padding: 8px 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: #6c757d;
`;

const Reply = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const params = useParams();
  const { setTweetReplyList } = useContext(TweetReplysContext);
  const { targetTweet, setTargetTweet } = useContext(TargetTweetContext);
  const { toggleReplyModal } = useContext(ReplyModalContext);
  const [activeLike, setActiveLike] = useState(targetTweet.isLiked);
  const [LikeCount, setLikeCount] = useState(targetTweet.likedCount);
  const { id, avatar, account, name } = { ...targetTweet.User };
  console.log("activeLike", activeLike);

  //點讚開關
  const handleToggleLike = async () => {
    const UserId = localStorage.getItem("userId");
    if (UserId === id) {
      return;
    }
    if (targetTweet.isLiked === false) {
      try {
        const res = await postLike(targetTweet.id);
        console.log("POST 按讚", res);
          setActiveLike(true);
          setLikeCount(LikeCount + 1);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const res = await postUnLike(targetTweet.id);
        console.log("POST 取消讚", res);
          setActiveLike(false);
          setLikeCount(LikeCount - 1);
      } catch (error) {
        console.error(error);
      }
    }
  };

  //身分驗證
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [navigate, isAuthenticated]);

  //GET 單篇推文資料
  useEffect(() => {
    const getTargetTweetAsync = async () => {
      try {
        const tweet = await getTargetTweet(params.replyId);
        setTargetTweet(tweet);
        console.log("targetTweet>>", tweet);
        return;
      } catch (error) {
        console.error(error);
      }
    };
    getTargetTweetAsync();
  }, [activeLike, setTargetTweet, params.replyId]);

  //取得特定貼文回覆串
  useEffect(() => {
    const getReplys = async () => {
      try {
        const res = await getTweetReplys(params.replyId);
        setTweetReplyList(res.map((tweet) => ({ ...tweet })));
      } catch (err) {
        console.error("tweetITem replyList error :", err);
      }
    };
    getReplys();
  }, [params.replyId, setTweetReplyList]);
  return (
    <>
      <StyledMainContainer>
        <StyledHeader>
          <StyledTitleContainer>
            <StyledBackIcon className='backIcon' onClick={() => navigate(-1)}></StyledBackIcon>
            <StyledTitleH4 style={{ marginLeft: "0px" }}>推文</StyledTitleH4>
          </StyledTitleContainer>
          <TweetContainer style={{ flexFlow: "column" }}>
            <AvatarWrapper>
              <Avatar
                className='avatar'
                style={{ backgroundImage: `url('${avatar}')` }}
                onClick={() => navigate(`/user/${id}`)}
              ></Avatar>
              <div className='wrapper' onClick={() => navigate(`/user/${id}`)}>
                <StyledName>{name}</StyledName>
                <StyledAccount>@{account}</StyledAccount>
              </div>
            </AvatarWrapper>
            <Content>{targetTweet.description}</Content>
            <Time>{dayjs(`${targetTweet.createdAt}`).locale("zh-tw").format("A hh:mm · YYYY[年]MM[月]DD[日]")}</Time>
          </TweetContainer>
          <TweetContainer>
            <div className='count-wrapper'>
              <p className='count'>{targetTweet.replyCount}</p>
              <p className='text'>回覆</p>
            </div>
            <div className='count-wrapper'>
              <p className='count'>{targetTweet.likedCount}</p>
              <p className='text'>喜歡次數</p>
            </div>
          </TweetContainer>
          <TweetContainer style={{ border: "none" }}>
            <div className='icon-wrapper'>
              <div className='icon reply' onClick={toggleReplyModal}></div>
              <div className={activeLike ? "icon like active" : "icon like"} onClick={handleToggleLike}></div>
            </div>
          </TweetContainer>
          <TweetReplysList />
        </StyledHeader>
      </StyledMainContainer>
      <ReplyModal />
    </>
  );
};

export default Reply;
