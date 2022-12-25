import React, { useContext } from "react";
import { TweetContext } from "../../contexts/TweetContext";
import { StyledTweetsList } from "../common/StyledGroup";
import TweetItem from "./TweetItem";

const TweetsList = ({ activeLike, likeCount,handleToggleLike }) => {
  const { tweets } = useContext(TweetContext);

  return (
    <StyledTweetsList>
      {tweets.map((tweet, index) => {
        return (
          <TweetItem
            id={tweet.id}
            key={index}
            tweet={tweet}
            time={tweet.updatedAt}
            description={tweet.description}
            isLiked={tweet.isLiked}
            likedCount={tweet.likedCount}
            replyCount={tweet.replyCount}
            handleToggleLike={(tweet)=>{handleToggleLike?.(tweet)}}
          />
        );
      })}
    </StyledTweetsList>
  );
};

export default TweetsList;
