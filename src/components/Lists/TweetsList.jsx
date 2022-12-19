import React from 'react'
import { StyledTweetsList } from '../common/StyledGroup'
import TweetItem from './TweetItem'

const TweetsList = () => {
  return (
    <StyledTweetsList>
      <TweetItem />
      <TweetItem />
      <TweetItem />
    </StyledTweetsList>
  );
}

export default TweetsList