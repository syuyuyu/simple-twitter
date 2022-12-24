import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { checkAdminPermission, login } from "../api/admin";

// const initUsers = {
//   users: [],
// };

const defaultAdminCotext = {
  isAuthenticated: false, // 使用者是否登入的判斷依據，預設為 false，若取得後端的有效憑證，則切換為 true
  currentMember: null, // 當前使用者相關資料，預設為 null，成功登入後就會有使用者資料
  login: null, // 登入方法
  logout: null, // 登出方法
  getUsers: null,
  setGetUsers: null,
};

const AdminContext = createContext(defaultAdminCotext);

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [payload, setPayload] = useState(null);
  const [getUsers, setGetUsers] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const token = localStorage.getItem("authToken");
      const role = localStorage.getItem("role");
      if (!token || role === "user") {
        setIsAuthenticated(false);
        setPayload(null);
        return;
      }
      const result = await checkAdminPermission(token);
      if (result) {
        setIsAuthenticated(true);
        const tempPayload = jwt_decode(token);
        setPayload(tempPayload);
      } else {
        setIsAuthenticated(false);
        setPayload(null);
      }
    };
    checkTokenIsValid();
  }, [pathname]);

  return (
    <AdminContext.Provider
      value={{
        getUsers,
        setGetUsers,
        isAuthenticated,
        currentMember: payload && {
          id: payload.sub,
          name: payload.name,
          role: payload.role,
        },
        login: async (data) => {
          const { success, token } = await login({
            account: data.account,
            password: data.password,
          });
          const tempPayload = jwt_decode(token);
          if (tempPayload) {
            setPayload(tempPayload);
            setIsAuthenticated(true);
            localStorage.setItem("authToken", token);
          } else {
            setPayload(null);
            setIsAuthenticated(false);
          }
          return success;
        },
        logout: () => {
          localStorage.removeItem("authToken");
          localStorage.removeItem("userId");
          localStorage.removeItem("role");
          setPayload(null);
          setIsAuthenticated(false);
        },
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
