import React, { useContext } from "react";
import { FollowerContext } from "../../contexts/TweetContext";
import { StyledTweetsList } from "../common/StyledGroup";
import FollowerUserItem from "./FollowerUserItem";

const FollowerList = () => {
  const { followers } = useContext(FollowerContext);
  return (
    <StyledTweetsList>
      {followers.map((user,index) => {
        return (
          <FollowerUserItem
            key={index}
            UserId={user.followingId}
            otherUser={user.followerUser}
            isFollowed={user.isFollowed}
          />
        );
      })}
    </StyledTweetsList>
  );
};

export default FollowerList;
