import React, { useContext } from "react";
import {  UserTweetContext } from "../../contexts/TweetContext";
import { StyledTweetsList } from "../common/StyledGroup";
import TweetItem from "./TweetItem";

const UserTweetsList = ({ handleToggleLike, activeLike, likeCount }) => {
  const { userTweets } = useContext(UserTweetContext);

  return (
    <StyledTweetsList>
      {userTweets.map((tweet, index) => {
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
            handleToggleLike={handleToggleLike}
            activeLike={activeLike}
            likeCount={likeCount}
          />
        );
      })}
    </StyledTweetsList>
  );
};

export default UserTweetsList;
