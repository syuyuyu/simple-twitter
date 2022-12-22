import React, { useContext } from "react";
import { FollowingContext } from "../../contexts/TweetContext";
import { StyledTweetsList } from "../common/StyledGroup";
import UserItem from "./UserItem";

const FollowingList = () => {
  const { followings } = useContext(FollowingContext);
  return (
    <StyledTweetsList>
      {followings.map((user) => {
        return (
          <UserItem
            id={user.id}
            User={user.followingUser}
          />
        );
      })}
    </StyledTweetsList>
  );
};

export default FollowingList;
