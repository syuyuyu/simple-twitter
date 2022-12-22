import React, { useContext } from "react";
import { FollowerContext } from "../../contexts/TweetContext";
import { StyledTweetsList } from "../common/StyledGroup";
import UserItem from "./UserItem";

const FollowerList = () => {
  const { followers } = useContext(FollowerContext);
  return (
    <StyledTweetsList>
      {followers.map((user) => {
        return <UserItem 
        key={user.followerId} 
        user={user}
        followerUser={user.followerUser}
        />;
      })}
    </StyledTweetsList>
  );
};

export default FollowerList;
