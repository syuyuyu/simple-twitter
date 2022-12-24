import axios from "axios";

// const authURL = "https://nameless-fortress-45508.herokuapp.com";
const authURL = "https://protected-journey-43760.herokuapp.com";


export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/api/auth/admin/login`, { account, password });
    console.log(data);
    const { token } = data;
    if (token) {
      return { success: true, ...data };
    }
  } catch (error) {
    console.log("[Login Failed]:", error);
    console.log(error.response.data.message);
  }
};

export const checkAdminPermission = async (authToken) => {
  try {
    const response = await axios.get(`${authURL}/api/auth/test-admin`, {
      headers: {
        Authorization: "Bearer " + authToken,
      },
    });
    return response.data.success;
  } catch (error) {
    console.error("[Check Permission Failed]:", error);
  }
};

export const adminGetUsers = async()=>{
  try{
    const authToken = localStorage.getItem('authToken')
    const res = await axios.get(`${authURL}/api/admin/users`,{
      headers: {
        Authorization: "Bearer " + authToken,
      },
    });
    // console.log('adminGetUsers:',res)
    return res.data
  }catch(error){
    console.error("[Get Users Failed]:", error);
  }
}

export const adminGetTweets = async () => {
  try {
    const authToken = localStorage.getItem('authToken')
    const res = await axios.get(`${authURL}/api/admin/tweets`, { headers: { Authorization: `Bearer ${authToken}` } });
    // console.log('get admin tweets',res)
    return res.data;
  } catch (error) {
    console.error("[Get Tweets failed]:", error);
  }
};

export const adminDeleteTweets = async (tweetId) => {
  try {
    const authToken = localStorage.getItem('authToken')
    const res = await axios.delete(`${authURL}/api/admin/tweets/${tweetId}`, { headers: { Authorization: `Bearer ${authToken}` } });
    console.log('delete admin tweets',res)
    return res.data;
  } catch (error) {
    console.error("[Get Delete failed]:", error);
  }
};
