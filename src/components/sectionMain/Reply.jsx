import React, { useEffect } from "react";
import styled from "styled-components";
import {
  StyledAccount,
  StyledAvatarDefault,
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
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

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

const Reply = ({ replyModal, toggleReplyModal }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  //GET 個人資料
  // useEffect(() => {
  //   const getOtherUserAsync = async () => {
  //     try {
  //       const user = await getOtherUser(param.userId);
  //       setPersonalInfo(user);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getOtherUserAsync();
  // }, [param.userId]);

  //身分驗證
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [navigate, isAuthenticated]);

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
              <StyledAvatarDefault style={{ margin: "0" }}>
                <div className='avatar'></div>
              </StyledAvatarDefault>
              <div className='wrapper'>
                <StyledName>Apple</StyledName>
                <StyledAccount>@apple</StyledAccount>
              </div>
            </AvatarWrapper>
            <Content>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nam eligendi ab, culpa illum vero
              aliquam atque adipisci quam ullam.
            </Content>
            <Time>上午10:05 · 2021年11月10日</Time>
          </TweetContainer>
          <TweetContainer>
            <div className='count-wrapper'>
              <p className='count'>1234</p>
              <p className='text'>回覆</p>
            </div>
            <div className='count-wrapper'>
              <p className='count'>5678</p>
              <p className='text'>喜歡次數</p>
            </div>
          </TweetContainer>
          <TweetContainer style={{ border: "none" }}>
            <div className='icon-wrapper'>
              <div className='icon reply' onClick={toggleReplyModal}></div>
              <div className='icon like'></div>
            </div>
          </TweetContainer>
          <TweetReplysList />
        </StyledHeader>
      </StyledMainContainer>
      <ReplyModal replyModal={replyModal} toggleReplyModal={toggleReplyModal} />
    </>
  );
};

export default Reply;
