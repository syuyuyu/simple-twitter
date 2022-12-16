import React from "react";
import styled from "styled-components";
import { StyledAvatarDefault ,StyledPublicButton} from "./common/StyledGroup";


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
  `;

const RowContainer = styled.div`
  margin-bottom: 8px;
  width: 528px;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.p`
  height: 26px;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  color: var(--color-grayscale-dark100);
`;

const TweetText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
`;

const UserItem = ({id,name,avatar,個人簡介,isFollow}) => {
  return (
    <ItemContainer>
      <StyledAvatarDefault style={{ margin: "0px" }}>
        <div className='avatar'></div>
      </StyledAvatarDefault>
      <TextContainer>
        <RowContainer>
          <Name>{'Apple'}</Name>
          {isFollow ?
            <StyledPublicButton whiteMode ={true} style={{marginRight:'0px'}}>跟隨</StyledPublicButton> :
            <StyledPublicButton style={{marginRight:'0px'}}>正在跟隨</StyledPublicButton>
          }
        </RowContainer>
        <RowContainer>
          <TweetText>
            {'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. '}
          </TweetText>
        </RowContainer>
      </TextContainer>
    </ItemContainer>
  );
};

export default UserItem;
