import axios from "axios";
//第三方跨域請求
// const corsURL = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api data

const authURL = "https://nameless-fortress-45508.herokuapp.com";

//登入功能
export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/api/auth/users/login`, { account, password });

    const { token,user } = data;
    if (token) {
      localStorage.setItem('authToken', token);
      localStorage.setItem("userId",user.id)
      return { success: true, token,user }; // 改成token與user
    }
    
  } catch (error) {
    console.log("[Login Failed]:", error);
    console.log(error);
  }
};

//註冊功能
export const register = async ({ account, name, email, password, checkPassword }) => {
  try {
    const { data } = await axios.post(`${authURL}/api/users`, {
      account,
      name,
      email,
      password,
      checkPassword,
    });
    const { token } = data;
    // console.log(data.data)
    if (token) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.log("[Register failed]:", error); //登入串接失敗
  }
};

//確認身分
export const checkPermission = async (authToken) => {
  try {
    const response = await axios.get(`${authURL}/api/auth/test-auth`, {
      headers: {
        Authorization: "Bearer " + authToken,
      },
    });
    return response.data.success;
  } catch (error) {
    console.error("[Check Permission Failed]:", error);
  }
};
