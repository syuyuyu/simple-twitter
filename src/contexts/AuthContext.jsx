import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as jwt from "jsonwebtoken";



const defaultAuthCotext = {
  isAuthenticated: false, // 使用者是否登入的判斷依據，預設為 false，若取得後端的有效憑證，則切換為 true
  currentMember: null, // 當前使用者相關資料，預設為 null，成功登入後就會有使用者資料
  register: null, // 註冊方法
  login: null, // 登入方法
  logout: null, // 登出方法
};

const AuthContext = createContext(defaultAuthCotext);

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [payload, setPayload] = useState(null);

  const { pathname } = useLocation(); //取得瀏覽器路徑

  // useEffect(() => {
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

  return (
    <AuthContext.Provider
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
    >
      {children}
    </AuthContext.Provider>
  );
}
