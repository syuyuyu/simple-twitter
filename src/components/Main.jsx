import React, { useState } from "react";
import {
  StyledHeader,
  StyledMainContainer,
  StyledTitleH4,
  StyledContent,
  StyledContentContainer,
  StyledAvatarDefault,
  StyledButtonContainer,
  StyledPublicButton,
  StyledError,
  StyledTweetsList,
} from "./common/StyledGroup";
import ContentInput from "./ContentTextarea";
import TweetItem from "./TweetItem";


const Main = () => {
  const [content, setContevt] = useState("");
  return (
    <StyledMainContainer>
      <StyledHeader>
        <StyledTitleH4>首頁</StyledTitleH4>
      </StyledHeader>
      <StyledContent>
        <StyledContentContainer>
          <StyledAvatarDefault>
            <div className='avatar'></div>
          </StyledAvatarDefault>
          <ContentInput
            placeholder='有什麼新鮮事？'
            value={content}
            onChange={(accountInputValue) => setContevt(accountInputValue)}
          />
        </StyledContentContainer>
        <StyledButtonContainer>
          <StyledError>字數不可超過140字</StyledError>
          <StyledPublicButton >推文</StyledPublicButton>
        </StyledButtonContainer>
      </StyledContent>
      <StyledTweetsList>
        <TweetItem/>
        <TweetItem/>
        <TweetItem/>
        <TweetItem/>
      </StyledTweetsList>
    </StyledMainContainer>
  );
};

export default Main;
