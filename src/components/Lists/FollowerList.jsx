import React, { useContext } from "react";
import { FollowerContext } from "../../contexts/TweetContext";
import { StyledTweetsList } from "../common/StyledGroup";
import UserItem from "./UserItem";

const FollowerList = (handleToggleFollow) => {
  const { followers } = useContext(FollowerContext);
  return (
    <StyledTweetsList>
      {followers.map((user) => {
        return (
          <UserItem
            id={user.id}
            User={user.followerUser}
            isFollowed={user.isFollowed}
            handleToggleFollow={(User)=>{handleToggleFollow?.(User)}}
          />
        );
      })}
    </StyledTweetsList>
  );
};

export default FollowerList;
