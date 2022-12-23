import axios from "axios";

const baseURL = "https://nameless-fortress-45508.herokuapp.com";

//GET 全部正在追蹤推文
export const getTweets = async () => {
  try {
    const authToken = localStorage.getItem('authToken')
    const res = await axios.get(`${baseURL}/api/tweets/`, { headers: { Authorization: `Bearer ${authToken}` } });
    // console.log('get tweets',res)
    return res.data;
  } catch (error) {
    console.error("[Get Tweets failed]:", error);
  }
};
//GET 單篇推文內容
export const getTweet = async ({tweetId}) => {
  try {
    const authToken = localStorage.getItem('authToken')
    const res = await axios.get(`${baseURL}/api/tweets/${tweetId}`, { headers: { Authorization: `Bearer ${authToken}` } });
    // console.log('get tweet ',res)
    return res.data;
  } catch (error) {
    console.error("[Get Tweets failed]:", error);
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
    console.error("[Get Tweets failed]:", error);
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
    // console.log('api : ',res)
    return res.data;
  } catch (error) {
    console.error("[Create Tweet failed]:", error);
  }
};

//POST發送推文
export const createReply = async ({comment,tweetId}) => {
  const authToken = localStorage.getItem('authToken')
  try {
    const config ={
        headers: {
          Authorization: `Bearer ${authToken}`
        }};
    const data = {
        "description": `${comment}`,
      };
    const res = await axios.post(`${baseURL}/api/tweets/${tweetId}/replies`,data,config );
    // console.log('api : ',res)
    return res.data;
  } catch (error) {
    console.error("[Create Tweet failed]:", error);
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
    console.error("[Get Replys failed]:", error);
  }
};

//GET otherUser的推文
export const getOtherUserTweets = async ( userId ) => {
  try {
    const authToken = localStorage.getItem('authToken')
    const res = await axios.get(`${baseURL}/api/users/${userId}/tweets`, {headers: { Authorization: `Bearer ${authToken}` } });
    return res.data;
  } catch (error) {
    console.error("[Get UserTweets failed]:", error);
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
    console.error("[Get Replys failed]:", error);
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
    console.error("[Get Tweets failed]:", error);
  }
};

//POST 正在追隨
export const postFollowing = async (userId) => {
  try {
    const authToken = localStorage.getItem("authToken");
    const res = await axios.post(
      `${baseURL}/api/followships`,
      { id: userId },
      {headers: { Authorization: `Bearer ${authToken}` }}
    );
    return res.data;
  } catch (error) {
    console.error("[Get Tweets failed]:", error);
  }
};
//DELETE 取消追隨
export const postUnFollow = async (followingId) => {
  try {
    const authToken = localStorage.getItem("authToken");
    const res = await axios.delete(`${baseURL}/api/followships/${followingId}`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    return res.data;
  } catch (error) {
    console.error("[Get Tweets failed]:", error);
  }
};
