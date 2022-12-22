import axios from "axios";

const baseURL = "https://nameless-fortress-45508.herokuapp.com";

//全部正在追蹤推文
export const getTweets = async () => {
  try {
    const authToken = localStorage.getItem('authToken')
    const res = await axios.get(`${baseURL}/api/tweets/`, { headers: { Authorization: `Bearer ${authToken}` } });
    return res.data;
  } catch (error) {
    console.error("[Get Tweets failed]:", error);
  }
};
//POST發送推文
export const createTweet = async (payload) => {
  try {
    const { description, isLike, likeCount, replyCount, name, account, createdAt } = payload;
    const res = await axios.post(`${baseURL}/api/tweets`, {
      description,
      replyCount,
      likeCount,
      isLike,
      name,
      account,
      createdAt,
    });
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
