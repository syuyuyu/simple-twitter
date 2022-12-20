import axios from "axios";

const baseURL = "https://nameless-fortress-45508.herokuapp.com";

const authToken = localStorage.getItem('authToken')

export const getTweets = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/tweets/`, { headers: { Authorization: `Bearer ${authToken}` } });
    return res.data;
  } catch (error) {
    console.error("[Get Tweets failed]:", error);
  }
};

export const createTweet = async (payload) => {
  try {
    const { description, isLike, likeCount, replyCount, name, account, createdAt } = payload;
    const res = await axios.post(`${baseURL}/tweets`, {
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

export const deleteTweet = () => {};
