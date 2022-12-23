import axios from "axios";

const baseURL = "https://nameless-fortress-45508.herokuapp.com";

//全部正在追蹤推文
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
//PATCH個人資料
export const patchTweet = async (payload) => {
  try {
    const { id, isLike } = payload;
    const res = await axios.patch(`${baseURL}/tweets/${id}`, {
      isLike,
    });
    return res.data;
  } catch (error) {
    console.error("[Patch Tweet failed]:", error);
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
