import React from 'react'
import { StyledTweetsList } from "./common/StyledGroup";
import TweetItem from "./TweetItem";

const LikeTweetsList = () => {
  return (
    <StyledTweetsList>
      <TweetItem />
      <TweetItem />
      <TweetItem />
      <TweetItem />
    </StyledTweetsList>
  );
}

export default LikeTweetsList