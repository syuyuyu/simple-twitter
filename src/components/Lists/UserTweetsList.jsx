import React, { useContext,useEffect } from "react";
import { TweetContext } from "../../contexts/TweetContext";
import { StyledTweetsList } from "../common/StyledGroup";
import TweetItem from "./TweetItem";
import { getUserTweets } from "../../api/tweets";

const TweetsList = () => {
  const { userTweets,setUserTweets } = useContext(TweetContext);

  //取得userTwieets資料
  useEffect(()=>{
    const UserTweets = async () => {
      try {
        const tweets = await getUserTweets();
        // console.log('Profile useEffect UserTweets :',tweets)
        setUserTweets(tweets)
      } catch (error) {
        console.error(error);
      }
    };
    UserTweets();
  }, [setUserTweets]);
  

  return (
    <StyledTweetsList>
      {userTweets.map((tweet) => {
        return <TweetItem key={tweet.id} tweet={tweet} />;
      })}
    </StyledTweetsList>
  );
};

export default TweetsList;
