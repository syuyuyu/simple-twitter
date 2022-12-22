import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useAdmin } from "../../contexts/AdminContext";
import AdminUserCard from "../AdminUserCard";
import { StyledAdminUserList, StyledHeader, StyledTitleH4, StyleSectionAdminMain } from "../common/StyledGroup";
import { adminGetUsers } from "../../api/admin";
import { useAdmin } from "../../contexts/AdminContext";

const AdminUserList = () => {
  const navigate = useNavigate();
  const { isAuthenticated,setGetUsers } = useAdmin();
  // const {setGetUsers} = useAdmin();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/admin");
    }
  }, [navigate, isAuthenticated]);

  useEffect(() => {
    const getUsers = async()=>{
        try{
          const res = await adminGetUsers()
          // console.log('AdminUserList :',res)
          setGetUsers(res.map((item)=>({ ...item })))
        }catch(error){
          console.error(error)
        }
    };
    getUsers();
  },[setGetUsers])


  return (
    <>
      <StyleSectionAdminMain>
        <StyledHeader>
          <StyledTitleH4>使用者列表</StyledTitleH4>
        </StyledHeader>
        <StyledAdminUserList>
          <AdminUserCard />
        </StyledAdminUserList>
      </StyleSectionAdminMain>
    </>
  );
};

export default AdminUserList;
