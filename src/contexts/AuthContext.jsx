import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import * as jwt from "jsonwebtoken";
import { login,register,checkPermission } from "../api/auth";


export const LogoutContext = createContext();


const defaultAuthContext = {
  isAuthenticated: false, // 使用者是否登入的判斷依據，預設為 false，若取得後端的有效憑證，則切換為 true
  currentMember: null, // 當前使用者相關資料，預設為 null，成功登入後就會有使用者資料
  register: null, // 註冊方法
  login: null, // 登入方法
  logout: null, // 登出方法
};


const AuthContext = createContext(defaultAuthContext);
export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); //通行變數
  const [payload, setPayload] = useState(null); //currentMember用到的props

  // 判斷是否登入
  // 監聽Path location的name
  const { pathname } = useLocation();

  useEffect(() => {
    const checkTokenIsValid = async () => {
      // 確認localStorage是否有authToken這個token
      const authToken = localStorage.getItem('authToken');
      // 若沒有autoToken將isAuthenticated & payload狀態改為false, null
      if (!authToken) {
        setIsAuthenticated(false);
        setPayload(null);
        return;
      }
      // 若取得authToken，使用checkPremission取得authToken的通行資格
      const result = await checkPermission(authToken);
      // 若result為true
      if (result) {
        // 建立tempPayload變數，使用JWT將token解析取得payload
        // const tempPayload = jwt.decode(authToken);
        // setPayload(tempPayload);
        setIsAuthenticated(true);

        // 若result不是true，則相反
      } else {
        setPayload(null);
        setIsAuthenticated(false);
      }
    };

    checkTokenIsValid();
  }, [pathname]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentMember: payload,
        //註冊API
        register: async (data) => {
          const { success, authToken } = await register({
            username: data.username,
            email: data.email,
            password: data.password,
          });
          // 取得token後開一個變數tempPayload用JWT token將使用者資料解析出來
          // const tempPayload = jwt.decode(authToken);
          // // 若tempPayload is true
          // if (tempPayload) {
          //   // 將tempPayload放入setPayload裡
          //   setPayload(tempPayload);
          //   // 將通行變數狀態改為true
          //   setIsAuthenticated(true);
          //   // 將token儲存localStorage
          //   localStorage.setItem('authToken', authToken);

          //   // 若tempPayload is false
          // } else {
          //   // Payload狀態改為null
          //   setPayload(null);
          //   // 通行變數狀態也改為false
          //   setIsAuthenticated(false);
          // }
          return success;
        },
        // 登入API
        login: async (data) => {
          const { success, authToken } = await login({
            username: data.username,
            password: data.password,
          });
          // 取得token後開一個變數tempPayload用JWT token將使用者資料解析出來
          // const tempPayload = jwt.decode(authToken);
          // 若tempPayload is true
          // if (tempPayload) {
          //   // 將tempPayload放入setPayload裡
          //   setPayload(tempPayload);
          //   // 將通行變數狀態改為true
          //   setIsAuthenticated(true);
          //   // 將token儲存localStorage
          //   localStorage.setItem('authToken', authToken);

          //   // 若tempPayload is false
          // } else {
          //   // Payload狀態改為null
          //   setPayload(null);
          //   // 通行變數狀態也改為false
          //   setIsAuthenticated(false);
          // }
          return success;
        },
        // 登出
        logout: () => {
          // 用removeItem移除authToken
          localStorage.removeItem('authToken');
          // 將另外兩個狀態改為null and false
          setPayload(null);
          setIsAuthenticated(false);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


// const AuthContext = createContext(defaultAuthCotext);

// export const userAuth = () => useContext(AuthContext)

// export const AuthProvider = ({children}) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [payload, setPayload] = useState(null);

//   const { pathname } = useLocation(); //取得瀏覽器路徑

//   useEffect(() => {
  //   const checkTokenIsValid = async () => {
  //     const authToken = localStorage.getItem("authToken");
  //     if (!authToken) {
  //       setIsAuthenticated(false);
  //       setPayload(null);
  //       return;
  //     }
  //     const result = await checkPermission(authToken); //還沒引入api
  //     if (result) {
  //       setIsAuthenticated(true);
  //       const tempPayload = jwt.decode(authToken);
  //       setPayload(tempPayload);
  //     } else {
  //       setIsAuthenticated(false);
  //       setPayload(null);
  //     }
  //   };

  //   checkTokenIsValid();
  // }, [pathname]);

  // return (
  //   <AuthContext.Provider
      // value={{
      //   isAuthenticated,
      //   currentMember: payload && {
      //     id: payload.sub,
      //     name: payload.name,
      //   },
      //   register: async (data) => {
      //     const { success, authToken } = await register({
      //       //還沒引入api
      //       username: data.username,
      //       email: data.email,
      //       password: data.password,
      //     });
      //     const tempPayload = jwt.decode(authToken);
      //     if (tempPayload) {
      //       setPayload(tempPayload);
      //       setIsAuthenticated(true);
      //       localStorage.setItem("authToken", authToken);
      //     } else {
      //       setPayload(null);
      //       setIsAuthenticated(false);
      //     }
      //     return success;
      //   },
      //   login: async (data) => {
      //     const { success, authToken } = await login({
      //       //還沒引入api
      //       username: data.username,
      //       password: data.password,
      //     });
      //     const tempPayload = jwt.decode(authToken);
      //     if (tempPayload) {
      //       setPayload(tempPayload);
      //       setIsAuthenticated(true);
      //       localStorage.setItem("authToken", authToken);
      //     } else {
      //       setPayload(null);
      //       setIsAuthenticated(false);
      //     }
      //     return success;
      //   },
      //   logout: () => {
      //     localStorage.removeItem("authToken");
      //     setPayload(null);
      //     setIsAuthenticated(false);
      //   },
      // }}
    // >
//       {children}
//     </AuthContext.Provider>
//   );
// }
