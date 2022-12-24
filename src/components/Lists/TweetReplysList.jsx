import { useContext } from "react";
import { TweetReplysContext } from "../../contexts/TweetContext";
import { StyledTweetsList } from "../common/StyledGroup";
import ReplyItem from "./ReplyItem";

const TweetReplysList = () => {
  const { tweetReplyList } = useContext(TweetReplysContext);
  console.log("tweetReplyList>>>", tweetReplyList);

  return (
    <StyledTweetsList>
      {tweetReplyList.map((reply,index) => {
        return (
          <ReplyItem
            key={index}
            Tweet={reply.Tweet}
            User={reply.User}
            UserId={reply.UserId}
            comment={reply.comment}
            time={reply.updatedAt}
          />
        );
      })}
    </StyledTweetsList>
  );
};

export default TweetReplysList;
