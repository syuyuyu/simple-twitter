import React ,{ useEffect }from "react";
import styled from "styled-components";
import { StyledAvatarDefault } from "../common/StyledGroup";
import deleteIcon from "../../assets/icons/delete.svg"
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-tw";
import { TweetContext } from "../../contexts/TweetContext";
import { useContext } from "react";
import { adminDeleteTweets, adminGetTweets } from "../../api/admin";



const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #e6ecf0;
  padding: 16px 0px 16px 24px;
  width: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  position: relative;
  width: 100%;
`;

const RowContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
  /* align-items: center; */
  justify-content: space-between;
  /* width: 100%; */
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
  width: 100%;
`;

const StyledRemoveIcon= styled.button`
  width: 24px;
  height: 24px;
  background-size: cover;
  background-image: url(${deleteIcon});
  position: relative;
  right: 0px;
  top: 0px;
  /* transform: translateX(30px); */
  cursor: pointer;
`
const Container = styled.div`
  display: flex;
  width: 100%;
`

const AvatarImg =styled.img`
    width: 50px;
    height: 50px;
    background-size: cover;
    border-radius: 50%;
`

const AdminTweetItem = ({
  handleRemoveClick,
  tweet,
  id,
  time,
  description
  }) => {
  dayjs.extend(relativeTime);
  const {account,avatar,name} = {...tweet.User}


// tweetItem
  return (
    <>
      <ItemContainer key={id}>
        <StyledAvatarDefault style={{ margin: "0px"}} >
          <AvatarImg style={{ backgroundImage:`url('${avatar}')`}}></AvatarImg>
        </StyledAvatarDefault>
        <TextContainer>
          <RowContainer>
            <Container>
              <Name>{name}</Name>
              <Account>@{account} · {dayjs(`${time}`).locale("zh-tw").fromNow()}</Account>
            </Container>
            <StyledRemoveIcon onClick={()=>handleRemoveClick?.(id)}></StyledRemoveIcon>
          </RowContainer>
          <RowContainer>
            <TweetText>
              {description}
            </TweetText>
          </RowContainer>
        </TextContainer>
      </ItemContainer>
    </>
  )
}

export default AdminTweetItem;
