import React, { useState } from "react";
import {
  Header,
  MainContainer,
  TitleH4,
  Content,
  ContentContainer,
  AvatarDefault,
  ButtonContainer,
  PublicButton,
  StyledError,
} from "./common/StyledGroup";
import ContentInput from "./ContentTextarea";

const Main = () => {
  const [content, setContevt] = useState("");
  return (
    <MainContainer>
      <Header>
        <TitleH4>首頁</TitleH4>
      </Header>
      <Content>
        <ContentContainer>
          <AvatarDefault>
            <div className='avatar'></div>
          </AvatarDefault>
          <ContentInput
            placeholder='有什麼新鮮事？'
            value={content}
            onChange={(accountInputValue) => setContevt(accountInputValue)}
          />
        </ContentContainer>
        <ButtonContainer>
          <StyledError>字數不可超過140字</StyledError>
          <PublicButton >推文</PublicButton>
        </ButtonContainer>
      </Content>
    </MainContainer>
  );
};

export default Main;
