import axios from "axios";
//第三方跨域請求
// const corsURL = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api data
const authURL= 'https://nameless-fortress-45508.herokuapp.com';


//登入功能
export const login = async({ account, password })=>{
  try{
    //用解構的方式直接取出axios回傳的data
    const {data} = await axios.post(`${authURL}/api/users/login`,{
    account,
    password,
    });
    const {status}= data
    // const {authToken} = data;
    console.log(status)
    // 若有成功取得token，回傳success及data
    if(status==='success'){
      return{ ...data };
    }
    return{ status,...data}; //無取得token
  }catch(err){
    console.log('[Login failed]:',err); //登入串接失敗
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

    const {authToken} = data;
    // console.log(data.data)
    if(authToken){
      return{ success: true,...data };
    }
    return{ success: false,...data}; //無取得token
    // console.log(data)
  }catch(err){
    console.log('[Register failed]:',err); //登入串接失敗
  }
};
