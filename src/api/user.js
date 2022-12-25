import axios from "axios";

const baseURL = "https://nameless-fortress-45508.herokuapp.com";
// const baseURL = "https://protected-journey-43760.herokuapp.com";

//GET 使用者個人資料
export const getUser = async () => {
  try {
    const authToken = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");
    const res = await axios.get(`${baseURL}/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    return res.data;
  } catch (error) {
    console.error("[Get User failed]:", error);
  }
};

//PUT 使用者個人資料
export const putUser = async ({
  account,
  name,
  email,
  introduction,
  avatar,
  cover,
  password,
  checkedPassword}) => {
    const authToken = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId');
    const getdata =  await getUser()


    //新的判斷式
    const accountInput = `${account}`==="undefined"? `${getdata.account}`:`${account}`;
    const nametInput = `${name}`==="undefined"? `${getdata.name}`:`${name}`;
    const emailInput =`${email}`==="undefined"? `${getdata.email}`: `${email};`
    const introductionInput = `${introduction}`==="undefined"? `${getdata.introduction}` : `${introduction}`;

    const avatarInput = `${avatar}`==="undefined"? `${getdata.avatar}`: `${avatar}`;

    const coverInput = `${cover}`==="undefined"?  `${getdata.cover}`: `${cover}`;

    const passwordInput = `${password}`;

    const checkPasswordInput = `${checkedPassword}`;

    const formData = new FormData()
    formData.append('account',accountInput)
    formData.append('name',nametInput)
    formData.append('email',emailInput)
    formData.append('introduction',introductionInput)
    formData.append('avatar',avatarInput)
    formData.append('cover',coverInput)
    formData.append('password',passwordInput)
    formData.append('checkPassword',checkPasswordInput)
    try{
        const res = await axios({
          method :'PUT',
          url: `${baseURL}/api/users/${userId}`,
          data: formData,
          headers:{
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'multipart/form-data',
          },
        })
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
    return res.data;
  } catch (error) {
    console.error("[Get User failed]:", error);
  }
};

//GET 正在追蹤 名單
export const getFollowings = async () => {
  try {
    const authToken = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");
    const res = await axios.get(`${baseURL}/api/users/${userId}/followings`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    return res.data;
  } catch (error) {
    console.error("[Get User failed]:", error);
  }
};

//GET 其他使用者推文
export const getOtherUserTweets = async (userId) => {
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

//GET 其他使用者資料
export const getOtherUser = async ( userId ) => {
  try {
    const authToken = localStorage.getItem("authToken");
    const res = await axios.get(`${baseURL}/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    return res.data;
  } catch (error) {
    console.error("[Get User failed]:", error);
  }
};

//POST 開始追隨
export const postFollowing = async (id) => {
  try {
    console.log("開始追隨的ID", id);
    const authToken = localStorage.getItem("authToken");
    const res = await axios({
      method: "POST",
      url: `${baseURL}/api/followships`,
      data: {
        id: id,
      },
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("[Post Follow failed]:", error);
  }
};
//DELETE 取消追隨
export const deleteFollow = async (id) => {
  try {
    console.log("取消追隨的ID",id)
    const authToken = localStorage.getItem("authToken");
    const res = await axios({
      method: "DELETE",
      url: `${baseURL}/api/followships/${id}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("[Delete Follow failed]:", error);
  }
};