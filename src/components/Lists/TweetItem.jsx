import React, { useContext } from "react";
import styled from "styled-components";
import { StyledAvatarDefault } from "../common/StyledGroup";
import ReplyIcon from "../../assets/icons/reply.svg";
import LikeIcon from "../../assets/icons/like.svg";
import ReplyModal from "../Modals/ReplyModal";
import { ReplyModalContext } from "../../contexts/ModalContext";
import { useNavigate } from 'react-router-dom';

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
    background-image: url(${ReplyIcon});
  }
  &.likeIcon {
    background-image: url(${LikeIcon});
  }
`;
const TweetItem = () => {
  const {toggleReplyModal} = useContext(ReplyModalContext);
  const navigate = useNavigate();

  return (
    <>
      <ItemContainer onClick={()=> navigate('/user/reply')} >
        <StyledAvatarDefault style={{ margin: "0px" }}>
          <div className='avatar'></div>
        </StyledAvatarDefault>
        <TextContainer>
          <RowContainer>
            <Name>Apple</Name>
            <Account>@apple · 3小時</Account>
          </RowContainer>
          <RowContainer>
            <TweetText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt non optio ipsam amet minima,
              perspiciatis, autem eaque iure voluptatibus odio beatae, impedit architecto nihil maiores aliquid commodi
              sapiente fugit possimus!
            </TweetText>
          </RowContainer>
          <RowContainer>
            <IconsContainer>
              <IconContainer>
                <StyledIcon className='replyIcon' onClick={toggleReplyModal}></StyledIcon>
                <p>13</p>
              </IconContainer>
              <IconContainer>
                <StyledIcon className='likeIcon'></StyledIcon>
                <p>76</p>
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
