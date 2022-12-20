import axios from "axios";

const baseURL = "https://nameless-fortress-45508.herokuapp.com"

const authToken = localStorage.getItem("authToken");
const userId = localStorage.getItem("userId");

export const getReplys = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/users/${userId}/replied_tweets`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    return res.data;
  } catch (error) {
    console.error("[Get Replys failed]:", error);
  }
};
