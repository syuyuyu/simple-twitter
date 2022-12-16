import React from "react";
import styled from "styled-components";
import { StyledAvatarDefault } from "../common/StyledGroup";
import deleteIcon from "../../assets/icons/delete.svg"

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
  position: relative;
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

const StyledRemoveIcon= styled.button`
  width: 24px;
  height: 24px;
  background-size: cover;
  background-image: url(${deleteIcon});
  position: absolute;
  right: 0px;
  transform: translateX(30px);
  cursor: pointer;
`
const AdminTweetItem = () => {
  return (
    <ItemContainer>
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
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. 
          </TweetText>
        </RowContainer>
        <StyledRemoveIcon></StyledRemoveIcon>
      </TextContainer>
    </ItemContainer>
  );
};

export default AdminTweetItem;
