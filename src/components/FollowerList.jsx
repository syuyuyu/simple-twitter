import React from "react";
import { StyledTweetsList } from "./common/StyledGroup";
import UserItem from "./UserItem";

const FollowerList = () => {
  return (
    <StyledTweetsList>
      <UserItem />
    </StyledTweetsList>
  );
};

export default FollowerList;
