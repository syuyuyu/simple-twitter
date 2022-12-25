import React, { useContext } from "react";
import { FollowingContext } from "../../contexts/TweetContext";
import { StyledTweetsList } from "../common/StyledGroup";
import FollowingUserItem from "./FollowingUserItem";

const FollowingList = () => {
  const { followings } = useContext(FollowingContext);

  return (
    <StyledTweetsList>
      {followings?.map((user, index) => {
        return (
          <FollowingUserItem
            key={index}
            UserId={user.followerId}
            otherUser={user.followingUser}
            isFollowed={user.isFollowed}
          />
        );
      })}
    </StyledTweetsList>
  );
};

export default FollowingList;
