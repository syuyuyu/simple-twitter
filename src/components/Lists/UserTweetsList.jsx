import React, { useContext } from "react";
import {  UserTweetContext } from "../../contexts/TweetContext";
import { StyledTweetsList } from "../common/StyledGroup";
import TweetItem from "./TweetItem";

const UserTweetsList = () => {
  const { userTweets } = useContext(UserTweetContext);

  return (
    <StyledTweetsList>
      {userTweets.map((tweet) => {
        return (
          <TweetItem
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

export default UserTweetsList;
