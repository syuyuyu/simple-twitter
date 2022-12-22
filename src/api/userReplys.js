import axios from "axios";

const baseURL = "https://nameless-fortress-45508.herokuapp.com"


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
