import React, { useState } from "react";
import {
  StyledHeader,
  StyledMainContainer,
  StyledTitleH4,
  StyledContentContainer,
  StyledContentWrapper,
  StyledAvatarDefault,
  StyledButtonContainer,
  StyledPublicButton,
  StyledError,
} from "./common/StyledGroup";
import ContentInput from "./ContentTextarea";
import TweetsList from "./TweetsList";


const Main = () => {
  const [content, setContevt] = useState("");
  return (
    <StyledMainContainer>
      <StyledHeader>
        <StyledTitleH4>首頁</StyledTitleH4>
      </StyledHeader>
      <StyledContentContainer>
        <StyledContentWrapper>
          <StyledAvatarDefault>
            <div className='avatar'></div>
          </StyledAvatarDefault>
          <ContentInput
            placeholder='有什麼新鮮事？'
            value={content}
            onChange={(accountInputValue) => setContevt(accountInputValue)}
          />
        </StyledContentWrapper>
        <StyledButtonContainer>
          <StyledError>字數不可超過140字</StyledError>
          <StyledPublicButton>推文</StyledPublicButton>
        </StyledButtonContainer>
      </StyledContentContainer>
      <TweetsList />
    </StyledMainContainer>
  );
};

export default Main;
