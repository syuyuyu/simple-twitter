import axios from "axios";
//第三方跨域請求
// const corsURL = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api data

const authURL= 'https://nameless-fortress-45508.herokuapp.com';


//登入功能
export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/api/users/login`, { account, password });

    const { token,user } = data;
    if (token) {
      localStorage.setItem('authToken', token);
      localStorage.setItem("userId",user.id)
      return { status: "success", ...data };
    }
  } catch (error) {
    console.log("[Login Failed]:", error);
    console.log(error.response.data.message)
    alert('登入失敗')

  }
};


//註冊功能
export const register = async ({account,name,email,password,checkPassword})=>{
  try{
    const {data} = await axios.post(`${authURL}/api/users`,{
      account,
      name,
      email,
      password,
      checkPassword
    });
    const {token} = data;
    // console.log(data.data)
    if(token){
      return { status: "success", ...data };
    }
    return{ status: "error",...data}; //無取得token
  }catch(error){
    console.log('[Register failed]:',error); //登入串接失敗
  }
};

//check驗證通過
export const checkPermission = async (authToken) => {
  try {
    const res = await axios.get(`${authURL}/test-token`, {
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    });
    return res.data.success;
  } catch (err) {
    console.error('[CheckPermission failed]:', err);
  }
};
