import axios from "axios";

const baseURL = "https://nameless-fortress-45508.herokuapp.com";

//GET 使用者個人資料
export const getUser = async () => {
  try {
    const authToken = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");
    const res = await axios.get(`${baseURL}/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    console.log("user GET api res:", res);
    return res.data;
  } catch (error) {
    console.error("[Get User failed]:", error);
  }
};
//PUT 使用者個人資料
export const putUser = async ({ account, name, email, introduction, avatar, cover }) => {
  try {
    const authToken = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };

    const data = {
      account: `${account}`,
      name: ` ${name}`,
      email: `${email}`,
      introduction: `${introduction}`,
      avatar: `${avatar}`,
      cover: `${cover}`,
    };
    const res = await axios.put(`${baseURL}/api/users/${userId}`, data, config);

    console.log("user PUT api res:", res.data);
    return { ...res.data };
  } catch (error) {
    console.error("[Put User failed]:", error);
  }
};
//GET Top10
export const getTop10 = async () => {
  try {
    const authToken = localStorage.getItem("authToken");
    const res = await axios.get(`${baseURL}/api/followships?top=10`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    return res.data;
  } catch (error) {
    console.error("[Get User failed]:", error);
  }
};
//GET追隨者名單
export const getFollowers = async () => {
  try {
    const authToken = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");
    const res = await axios.get(`${baseURL}/api/users/${userId}/followers`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    console.log("user GET api res:", res);
    return res.data;
  } catch (error) {
    console.error("[Get User failed]:", error);
  }
};

//GET正在追蹤名單
export const getFollowings = async () => {
  try {
    const authToken = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");
    const res = await axios.get(`${baseURL}/api/users/${userId}/followings`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    console.log("user GET api res:", res);
    return res.data;
  } catch (error) {
    console.error("[Get User failed]:", error);
  }
};
//GET 其他使用者推文
export const getOtherUserTweets = async () => {
  try {
    const authToken = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");
    const res = await axios.get(`${baseURL}/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    console.log("user GET api res:", res);
    return res.data;
  } catch (error) {
    console.error("[Get User failed]:", error);
  }
};

//GET 其他使用者資料
export const getOtherUser = async (userId) => {
  try {
    const authToken = localStorage.getItem("authToken");
    const res = await axios.get(`${baseURL}/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    console.log("user GET api res:", res);
    return res.data;
  } catch (error) {
    console.error("[Get User failed]:", error);
  }
};