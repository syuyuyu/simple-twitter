import axios from "axios";

const baseURL = "https://nameless-fortress-45508.herokuapp.com"

// const axiosInstance = axios.create({
//   baseURL: baseURL,
// });
const userId = ''//獲取userID

export const getReplys = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/users/${userId}/replied_tweets`);
    return res.data;
  } catch (error) {
    console.error("[Get Replys failed]:", error);
  }
};
