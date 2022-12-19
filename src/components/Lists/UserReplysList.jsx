import React, { useContext } from 'react'
import { UserReplyContext } from "../../contexts/TweetContext";
import { StyledTweetsList } from '../common/StyledGroup'
import ReplyItem from './ReplyItem'


const ReplysList = () => {
  const { userReplys } = useContext(UserReplyContext);
  return (
    <StyledTweetsList>
      {userReplys.map((reply) => {
        return <ReplyItem key={reply.id} reply={reply} />;
      })}
    </StyledTweetsList>
  );
}

export default ReplysList