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
      // console.log('user GET api res:',res)
    return res.data;
  } catch (error) {
    console.error("[Get User failed]:", error);
  }
};

export const putUser = async ({account,name,email,introduction,avatar,cover}) => {
  try{
      const authToken = localStorage.getItem('authToken');
      const userId = localStorage.getItem('userId');
      const getdata =  await getUser()
      // console.log('getdata:',getdata)
      const config ={
        headers: {
          Authorization: `Bearer ${authToken}`
        }};
    
      const data = {
          "account": `${account}`==="undefined"? `${getdata.account}`:`${account}`,
          "name":` ${name}`==="undefined"? `${getdata.name}` : `${name}`,
          "email": `${email}`==="undefined"? `${getdata.email}`: `${email}`,
          "introduction": `${introduction}`==="undefined"? `${getdata.introduction}` : `${introduction}` ,
          "avatar": `${avatar}`==="undefined"? `${getdata.avatar}`: `${avatar}` ,
          "cover": `${cover}`==="undefined"?  `${getdata.cover}`: `${cover}` ,
      };
      console.log('put data : ',data)
    const res = await axios.put(`${baseURL}/api/users/${userId}`,data,config)

      console.log('user PUT api res:',res.data)
      return {...res.data};
  }catch(error){
    console.error("[Put User failed]:", error);
  }
}