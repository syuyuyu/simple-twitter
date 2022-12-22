import axios from "axios";

const authURL = "https://nameless-fortress-45508.herokuapp.com";

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

export const checkPermission = async (authToken) => {
  try {
    const response = await axios.get(`${authURL}/api/test-admin`, {
      headers: {
        Authorization: "Bearer " + authToken,
      },
    });
    return response.data.success;
  } catch (error) {
    console.error("[Check Permission Failed]:", error);
  }
};
