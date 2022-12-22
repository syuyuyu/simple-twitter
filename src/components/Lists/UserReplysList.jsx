import React, { useContext } from 'react'
import { UserReplyContext } from "../../contexts/TweetContext";
import { StyledTweetsList } from '../common/StyledGroup'
import ReplyItem from './ReplyItem'



const ReplysList = () => {
  const { userReplys } = useContext(UserReplyContext);
  return (
    <StyledTweetsList>
      {userReplys.map((userReply) => {
        return (
          <ReplyItem
          Tweet={userReply.Tweet}
          User={userReply.User}
          UserId={userReply.UserId}
          comment={userReply.comment}
          key={userReply.id}
          time={userReply.updatedAt}
          />
        );
      })}
    </StyledTweetsList>
  );
}

export default ReplysList