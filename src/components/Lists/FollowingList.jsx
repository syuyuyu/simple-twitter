import React, { useContext } from "react";
import { FollowingContext } from "../../contexts/TweetContext";
import { StyledTweetsList } from "../common/StyledGroup";
import UserItem from "./UserItem";

const FollowingList = (handleToggleFollow) => {
  const { followings } = useContext(FollowingContext);


  return (
    <StyledTweetsList>
      {followings?.map((user) => {
        return (
          <UserItem
            id={user.id}
            User={user.followingUser}
            isFollowed={user.isFollowed}
            // setIsFollow={setIsFollow}
            handleToggleFollow={(User)=>{handleToggleFollow?.(User)}}
          />
        );
      })}
    </StyledTweetsList>
  );
};

export default FollowingList;
