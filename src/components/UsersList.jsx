import React from 'react'
import { StyledTweetsList } from './common/StyledGroup'
import UserItem from './UserItem'


const UsersList = () => {
  return (
    // 篩選isfollow再傳入userItem
    <StyledTweetsList>
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
    </StyledTweetsList>
  );
}

export default UsersList;