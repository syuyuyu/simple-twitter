import axios from "axios";

const baseURL = "https://nameless-fortress-45508.herokuapp.com";
// const baseURL = "http://localhost:3001";

const authToken = localStorage.getItem('authToken');
const userId = localStorage.getItem('userId');

export const getUser = async () => {
  try {
    // console.log('user api id',userId)
    const res = await axios.get(`${baseURL}/api/users/${userId}`,{
      headers: {'Authorization': `Bearer ${authToken}`}
      });
      console.log('user GET api res:',res)
    return res.data;
  } catch (error) {
    console.error("[Get User failed]:", error);
  }
};

export const putUser = async ({account,name,email,introduction,avatar,cover}) => {
  try{
      const config ={
        headers: {
          Authorization: `Bearer ${authToken}`
        }};
    
      const data = {
        params: {
          "account": `${account}`,
          "name":` ${name}`,
          "email": `${email}`,
          "introduction":`${introduction}`,
          "avatar": `${avatar}`,
          "cover": `${cover}`,
        }
      };
    const res = await axios.put(`${baseURL}/api/users/${userId}`,data,config)

      console.log('user PUT api res:',res.data)
      return {...res.data};
  }catch(error){
    console.error("[Put User failed]:", error);
  }
}