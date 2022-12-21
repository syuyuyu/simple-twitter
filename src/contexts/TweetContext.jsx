import { createContext, useState } from "react";
import { patchTweet } from "../api/tweets";

const initTweets = {
  tweets: [],
};
const initUserReplys = {
  userReplys: [],
}
const initUserTweets = {
  usertweets: [],
};

export const TweetContext = createContext(initTweets);
export const UserReplyContext = createContext(initUserReplys);

export const TweetProvider = ({ children }) => {
  const [tweets, setTweets] = useState([initTweets]);
  const [userReplys, setUserReplys] = useState([initUserReplys]);
  const [userTweets,setUserTweets] = useState([initUserTweets]);

  const handleToggleLike = async (id) => {
    const currentTweet = tweets.find((tweet) => tweet.id === id);
    try {
      await patchTweet({
        id,
        isLike: !currentTweet.isLike,
      });
      setTweets((prevTweets) => {
        return prevTweets.map((tweet) => {
          if (tweet.id === id) {
            return {
              ...tweet,
              isLike: !tweet.isLike,
            };
          }
          return tweet;
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  const value = {
    tweets,
    setTweets,
    userReplys,
    setUserReplys,
    handleToggleLike,
    userTweets,
    setUserTweets,
  };
  return <TweetContext.Provider value={value}>{children}</TweetContext.Provider>;
};


export const UserReplyProvider = ({ children }) => {
  const [tweets, setTweets] = useState([initTweets]);
  const [userReplys, setUserReplys] = useState([initUserReplys]);

  const handleToggleLike = async (id) => {
    const currentTweet = tweets.find((tweet) => tweet.id === id);
    try {
      await patchTweet({
        id,
        isLike: !currentTweet.isLike,
      });
      setTweets((prevTweets) => {
        return prevTweets.map((tweet) => {
          if (tweet.id === id) {
            return {
              ...tweet,
              isLike: !tweet.isLike,
            };
          }
          return tweet;
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  const value = {
    tweets,
    setTweets,
    userReplys,
    setUserReplys,
    handleToggleLike,
  };
  
  return <UserReplyContext.Provider value={value}>{children}</UserReplyContext.Provider>;
};