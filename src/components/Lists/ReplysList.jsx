import React from 'react'
import { StyledTweetsList } from '../common/StyledGroup'
import ReplyItem from './ReplyItem'


const ReplysList = () => {
  return (
    <StyledTweetsList>
      <ReplyItem />
      <ReplyItem />
      <ReplyItem />
      <ReplyItem />
      <ReplyItem />
    </StyledTweetsList>
  );
}

export default ReplysList