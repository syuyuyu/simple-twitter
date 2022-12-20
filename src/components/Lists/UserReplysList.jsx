import React, { useContext, useEffect } from 'react'
import { getReplys } from '../../api/userReplys';
import { UserReplyContext } from "../../contexts/TweetContext";
import { StyledTweetsList } from '../common/StyledGroup'
import ReplyItem from './ReplyItem'



const ReplysList = () => {
  const { userReplys } = useContext(UserReplyContext);
  
  return (
    <StyledTweetsList>
      {userReplys.map((userReply) => {
        return <ReplyItem key={userReply.id} userReply={userReply} />;
      })}
    </StyledTweetsList>
  );
}

export default ReplysList