import { useContext } from 'react';
import { TweetReplysContext } from '../../contexts/TweetContext';
import { StyledTweetsList } from '../common/StyledGroup'
import ReplyItem from './ReplyItem'

const ReplysList = () => {
  const {tweetReplyList} = useContext(TweetReplysContext);
console.log('tweetReplyList',tweetReplyList)

  return (
    <StyledTweetsList>
    {tweetReplyList.map((reply)=>{
      return <ReplyItem
          Tweet={reply.Tweet}
          User={reply.User}
          UserId={reply.UserId}
          comment={reply.comment}
          key={reply.id}
          time={reply.updatedAt}
      />
    })}  
    </StyledTweetsList>
  );
}

export default ReplysList