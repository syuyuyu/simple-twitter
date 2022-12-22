import { createContext, useState } from "react";
import { patchTweet } from "../api/tweets";

const initTweets = {
  tweets: [],
};
const initUserReplys = {
  userReplys: [],
}

const initLikeTweets = {
  likeTweets: [],
};
const initTop10List = {
  Top10List: [],
};
const initFollowers = {
  followers: [],
};
const initFollowings = {
  followers: [],
};
const initOtherUser = {
  otherUser: [],
};
const initUserTweets = {
  usertweets: [],
};


export const TweetContext = createContext(initTweets);
export const UserReplyContext = createContext(initUserReplys);
export const LikeTweetContext = createContext(initLikeTweets);
export const Top10Context = createContext(initTop10List);
export const FollowerContext = createContext(initFollowers);
export const FollowingContext = createContext(initFollowings);
export const OtherUserContext = createContext(initOtherUser);

//所有推文
export const TweetProvider = ({ children }) => {
  const [tweets, setTweets] = useState([initTweets]);
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
    handleToggleLike,
    userTweets,
    setUserTweets,
  };
  return <TweetContext.Provider value={value}>{children}</TweetContext.Provider>;
};
//使用者回覆串
export const ReplyProvider = ({ children }) => {
  const [userReplys, setUserReplys] = useState([initUserReplys]);
  const value = {
    userReplys,
    setUserReplys,
  };

  return <UserReplyContext.Provider value={value}>{children}</UserReplyContext.Provider>;
};
//喜歡的內容
export const LikeTweetProvider = ({ children }) => {
  const [likeTweets, setLikeTweets] = useState([initLikeTweets]);
  const value = {
    likeTweets,
    setLikeTweets,
  };

  return <LikeTweetContext.Provider value={value}>{children}</LikeTweetContext.Provider>;
};
//Top 10
export const Top10Provider = ({ children }) => {
  const [top10List, setTop10List] = useState([initTop10List]);
  const value = {
    top10List,
    setTop10List,
  };

  return <Top10Context.Provider value={value}>{children}</Top10Context.Provider>;
};
//追隨者
export const FollowerProvider = ({ children }) => {
  const [followers, setFollowers] = useState([initFollowers]);
  const value = {
    followers,
    setFollowers,
  };

  return <FollowerContext.Provider value={value}>{children}</FollowerContext.Provider>;
};
//正在追蹤ing
export const FollowingProvider = ({ children }) => {
  const [followings, setFollowings] = useState([initFollowings]);
  const value = {
    followings,
    setFollowings,
  };

  return <FollowingContext.Provider value={value}>{children}</FollowingContext.Provider>;
};
//GET 其他使用者
export const OtherUserProvider = ({ children }) => {
  const [otherUser, setOtherUser] = useState([initOtherUser]);
  const value = {
    otherUser,
    setOtherUser,
  };

  return <OtherUserContext.Provider value={value}>{children}</OtherUserContext.Provider>;
};