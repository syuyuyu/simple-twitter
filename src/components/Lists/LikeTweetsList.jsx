import React, { useContext } from 'react'
import { LikeTweetContext } from '../../contexts/TweetContext';
import { StyledTweetsList } from "../common/StyledGroup";
import TweetItem from "./TweetItem";


const LikeTweetsList = () => {
  const { likeTweets } = useContext(LikeTweetContext);
  return (
    <StyledTweetsList>
      {likeTweets.map((tweet) => {
        return <TweetItem id={tweet.id} tweet={tweet} Tweet={tweet.Tweet} TweetId={tweet.TweetId} />;
      })}
    </StyledTweetsList>
  );
}

export default LikeTweetsList