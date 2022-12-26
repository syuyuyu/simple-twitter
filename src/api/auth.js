import axios from "axios";
import Swal from "sweetalert2";


const authURL = "https://nameless-fortress-45508.herokuapp.com";
// const authURL = "https://protected-journey-43760.herokuapp.com";

//登入功能
export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/api/auth/users/login`, { account, password });

    const { token, user, role } = data;
    if (token) {
      localStorage.setItem("authToken", token);
      localStorage.setItem("userId", user.id);
      localStorage.setItem("role", role);
      return { success: true, token, user }; // 改成token與user
    }
  } catch (error) {
    console.log("[Login Failed]:", error);
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
        showCloseButton: false,
        timer: 1000,
        position: "top",
      });
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
    if (token) {
      return { ...data };
    }
    return data;
  } catch (error) {
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
        showCloseButton: false,
        timer: 1000,
        position: "top",
      });
    console.log("[Register failed]:", error); //登入串接失敗
  }
};

//確認身分  //測試
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
