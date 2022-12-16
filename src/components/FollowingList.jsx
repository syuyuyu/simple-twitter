import React from "react";
import { StyledTweetsList } from "./common/StyledGroup";
import UserItem from "./UserItem";

const FollowingList = () => {
  return (
    <StyledTweetsList>
      <UserItem />
      <UserItem />
      <UserItem />
    </StyledTweetsList>
  );
};

export default FollowingList;
