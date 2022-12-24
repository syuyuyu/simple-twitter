import React, { useContext } from "react";
import { LikeTweetContext } from "../../contexts/TweetContext";
import { StyledTweetsList } from "../common/StyledGroup";
import TweetItem from "./TweetItem";

const LikeTweetsList = () => {
  const { likeTweets } = useContext(LikeTweetContext);
  return (
    <StyledTweetsList>
      {likeTweets.map((tweet, index) => {
        return (
          <TweetItem
            key={index}
            id={tweet.id}
            tweet={tweet}
            time={tweet.updatedAt}
            description={tweet.description}
            isLiked={tweet.isLiked}
            likedCount={tweet.likedCount}
            replyCount={tweet.replyCount}
          />
        );
      })}
    </StyledTweetsList>
  );
};

export default LikeTweetsList;
