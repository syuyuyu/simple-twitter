import React, { useContext } from "react";
import { FollowerContext } from "../../contexts/TweetContext";
import { StyledTweetsList } from "../common/StyledGroup";
import UserItem from "./UserItem";

const FollowerList = (handleToggleFollow) => {
  const { followers } = useContext(FollowerContext);
  return (
    <StyledTweetsList>
      {followers.map((user,index) => {
        return (
          <UserItem
            id={user.id}
            key={index}
            User={user.followerUser}
            isFollowed={user.isFollowed}
            // setIsFollow={setIsFollow}
            handleToggleFollow={(User)=>{handleToggleFollow?.(User)}}
          />
        );
      })}
    </StyledTweetsList>
  );
};

export default FollowerList;
