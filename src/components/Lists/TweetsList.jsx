import React from 'react'
import { StyledTweetsList } from '../common/StyledGroup'
import TweetItem from './TweetItem'


const TweetsList = ({ tweets, onToggleLike }) => {
  return (
    <StyledTweetsList>
      {/* {tweets.map((tweet) => {
        return <TweetItem 
        key={tweet.id} 
        tweet={tweet} 
        onToggleLike={(id) => onToggleLike?.(id)} />;
      })} */}
      <TweetItem />
    </StyledTweetsList>
  );
};

export default TweetsList