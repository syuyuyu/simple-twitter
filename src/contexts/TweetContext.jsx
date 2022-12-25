import { createContext, useState } from "react";

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
const initTweet = {
  tweet: [],
};
const initFollowShips = {
  followShips: [],
};
const initTweetReplys = {
  tweetReplys: [],
};
const initActiveLike = {
  activeLike: null,
};
const initLikeCount = {
  LikeCount: 0,
};

export const TweetContext = createContext(initTweets);
export const UserReplyContext = createContext(initUserReplys);
export const LikeTweetContext = createContext(initLikeTweets);
export const Top10Context = createContext(initTop10List);
export const FollowerContext = createContext(initFollowers);
export const FollowingContext = createContext(initFollowings);
export const OtherUserContext = createContext(initOtherUser);
export const UserTweetContext = createContext(initUserTweets);
export const TargetTweetContext = createContext(initUserTweets);
// export const FollowShipContext = createContext(initFollowShips);
export const TweetReplysContext = createContext(initUserTweets);
export const ActiveLikeContext = createContext(initActiveLike);
export const LikeCountContext = createContext(initLikeCount);


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

//單篇推文內容
export const TargetTweetProvider = ({ children }) => {
  const [targetTweet, setTargetTweet] = useState([initTweet]);
  const value = {
    targetTweet,
    setTargetTweet,
  };

  return <TargetTweetContext.Provider value={value}>{children}</TargetTweetContext.Provider>;
};

//特定推文回覆串
export const TweetReplysProvider = ({ children }) => {
  const [tweetReplyList, setTweetReplyList] = useState([initTweetReplys]);
  
  const value = {
    tweetReplyList,
    setTweetReplyList,
  };
  return <TweetReplysContext.Provider value={value}>{children}</TweetReplysContext.Provider>;
};
//按讚 active
export const ActiveLikeProvider = ({ children }) => {
  const [activeLike, setActiveLike] = useState(null);

  const value = {
    activeLike,
    setActiveLike,
  };
  return <ActiveLikeContext.Provider value={value}>{children}</ActiveLikeContext.Provider>;
};
//按讚功能
export const LikeCountProvider = ({ children }) => {
  const [likeCount, setLikeCount] = useState(0);

  const value = {
    likeCount,
    setLikeCount,
  };
  return <LikeCountContext.Provider value={value}>{children}</LikeCountContext.Provider>;
};