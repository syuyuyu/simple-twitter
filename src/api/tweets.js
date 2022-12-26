import axios from "axios";


const baseURL = "https://nameless-fortress-45508.herokuapp.com";
// const baseURL = "https://protected-journey-43760.herokuapp.com";

//GET 全部正在追蹤推文 新的
export const getTweets = async () => {
  const authToken = localStorage.getItem("authToken");
  try {
    const res = await axios({
      method :'GET',
      url: `${baseURL}/api/tweets`,
      headers:{
        Authorization: `Bearer ${authToken}`,
      },
    })
      return res.data;
    }catch (error) {
    console.error("[Get Tweets failed]:", error);
  }
};
//GET 單篇推文內容
export const getTargetTweet = async ( tweetId ) => {
  try {
    const authToken = localStorage.getItem('authToken')
    const res = await axios.get(`${baseURL}/api/tweets/${tweetId}`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    return res.data;
  } catch (error) {
    console.error("[Get One Tweet failed]:", error);
  }
};

//GET User的推文
export const getUserTweets = async () => {
  try {
    const authToken = localStorage.getItem('authToken')
    const userId = localStorage.getItem('userId');
    const res = await axios.get(`${baseURL}/api/users/${userId}/tweets`, {headers: { Authorization: `Bearer ${authToken}` } });
    return res.data;
  } catch (error) {
    console.error("[Get UserTweets failed]:", error);
  }
};

//GET喜歡的內容
export const getLikeTweets = async () => {
  try {
    const authToken = localStorage.getItem("authToken");
    const id = localStorage.getItem("userId");
    const res = await axios.get(`${baseURL}/api/users/${id}/likes`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    return res.data;
  } catch (error) {
    console.error("[Get LikeTweets failed]:", error);
  }
};

//GET 特定推文回覆串
export const getTweetReplys = async (tweetId) => {
  try {
    const authToken = localStorage.getItem("authToken");
    const res = await axios.get(`${baseURL}/api/tweets/${tweetId}/replies`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    return res.data;
  } catch (error) {
    console.error("[Get TweetReplys failed]:", error);
  }
};

//POST發送推文
export const createTweet = async (description) => {
  const authToken = localStorage.getItem('authToken')
  try {
    const config ={
        headers: {
          Authorization: `Bearer ${authToken}`
        }};
    const data = {
        "description": `${description}`,
      };
    const res = await axios.post(`${baseURL}/api/tweets`,data,config );
    return res.data;
  } catch (error) {
    console.error("[Create Tweet failed]:", error);
  }
};

//POST發送回覆
export const createReply = async ({comment,tweetId}) => {
  const authToken = localStorage.getItem('authToken')
  try {
    const config ={
        headers: {
          Authorization: `Bearer ${authToken}`
        }};
    const data = {
        "comment": `${comment}`,
      };
    const res = await axios.post(`${baseURL}/api/tweets/${tweetId}/replies`,data,config );
    return res.data;
  } catch (error) {
    console.error("[Create Reply failed]:", error);
  }
};


//GET User的回覆串
export const getReplys = async () => {
  try {
    const authToken = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");
    const res = await axios.get(`${baseURL}/api/users/${userId}/replied_tweets`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    return res.data;
  } catch (error) {
    console.error("[Get UserReplys failed]:", error);
  }
};

//GET otherUser的推文
export const getOtherUserTweets = async ( userId ) => {
  try {
    const authToken = localStorage.getItem('authToken')
    const res = await axios.get(`${baseURL}/api/users/${userId}/tweets`, {headers: { Authorization: `Bearer ${authToken}` } });
    return res.data;
  } catch (error) {
    console.error("[Get OtherUserTweets failed]:", error);
  }
};

//GET otherUser的回覆串
export const getOtherReplys = async (userId) => {
  try {
    const authToken = localStorage.getItem("authToken");
    const res = await axios.get(`${baseURL}/api/users/${userId}/replied_tweets`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    return res.data;
  } catch (error) {
    console.error("[Get OtherUserReplys failed]:", error);
  }
};

//GET otherUser喜歡的內容
export const getOtherLikeTweets = async (userId) => {
  try {
    const authToken = localStorage.getItem("authToken");
    const res = await axios.get(`${baseURL}/api/users/${userId}/likes`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    return res.data;
  } catch (error) {
    console.error("[Get OtherUserLikeTweets failed]:", error);
  }
};


//POST 按讚 新的
export const postLike = async (tweetId) => {
  const authToken = localStorage.getItem("authToken");
  try {
    const res = await axios({
      method :'POST',
      url: `${baseURL}/api/tweets/${tweetId}/like`,
      headers:{
        Authorization: `Bearer ${authToken}`,
      },
    })
      return res.data;
    }catch (error) {
    console.error("[POST Like failed]:", error);
  }
};

//POST 取消讚 新的
export const postUnLike = async (tweetId) => {
  const authToken = localStorage.getItem("authToken");
  try {
    const res = await axios({
      method :'POST',
      url: `${baseURL}/api/tweets/${tweetId}/unlike`,
      headers:{
        Authorization: `Bearer ${authToken}`,
      },
    })
      return res.data;
    }catch (error) {
    console.error("[POST unLike failed]:", error);
  }
};