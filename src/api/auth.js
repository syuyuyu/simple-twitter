import axios from "axios";

const authURL = "https://nameless-fortress-45508.herokuapp.com/api/users/login";

export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}`, { account, password });

    console.log(data);

    const { token } = data;

    if (token) {
      return { status: "success", ...data };
    }

  } catch (error) {
    console.log("[Login Failed]:", error);
    console.log(error.response.data.message)
  }
};
