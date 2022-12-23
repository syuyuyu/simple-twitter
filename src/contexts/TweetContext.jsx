import { createContext, useState } from "react";
// import { useParams } from "react-router-dom";
// import { postFollowing } from "../api/tweets";

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
const initFollowShips = {
  followShips: [],
};


export const TweetContext = createContext(initTweets);
export const UserReplyContext = createContext(initUserReplys);
export const LikeTweetContext = createContext(initLikeTweets);
export const Top10Context = createContext(initTop10List);
export const FollowerContext = createContext(initFollowers);
export const FollowingContext = createContext(initFollowings);
export const OtherUserContext = createContext(initOtherUser);
export const UserTweetContext = createContext(initUserTweets);
// export const FollowShipContext = createContext(initFollowShips);

//所有推文
export const TweetProvider = ({ children }) => {
  const [tweets, setTweets] = useState([initTweets]);
  
  const value = {
    tweets,
    setTweets,
  };
  return <TweetContext.Provider value={value}>{children}</TweetContext.Provider>;
};
//使用者回覆串
export const UserReplyProvider = ({ children }) => {
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
  const [followers, setFollowers] = useState([initFollowShips]);
  // const [followingship, setFollowingship] = useState([initFollowers]);
  // const param = useParams()

  // const handleFollow = async () => {
  //   try {
  //     const followShipData = await postFollowing(param.userId);
  //     console.log("這是正在追隨者清單",followShipData);
  //     // setFollowingship(followShipData.find((following) => following.id === userId));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const value = {
    followers,
    setFollowers,
    // followingship,
    // setFollowingship,
    // handleFollow,
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
//GET 其他使用者資料
export const OtherUserProvider = ({ children }) => {
  const [otherUser, setOtherUser] = useState([initOtherUser]);
  const value = {
    otherUser,
    setOtherUser,
  };

  return <OtherUserContext.Provider value={value}>{children}</OtherUserContext.Provider>;
};
//GET 使用者自己的所有推文
export const UserTweetProvider = ({ children }) => {
  const [userTweets, setUserTweets] = useState([initUserTweets]);
  const value = {
    userTweets,
    setUserTweets,
  };

  return <UserTweetContext.Provider value={value}>{children}</UserTweetContext.Provider>;
};