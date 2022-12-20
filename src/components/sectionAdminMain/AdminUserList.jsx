import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../../contexts/AdminContext";
import AdminUserCard from "../AdminUserCard";
import { StyledAdminUserList, StyledHeader, StyledTitleH4, StyleSectionAdminMain } from "../common/StyledGroup";

const AdminUserList = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAdmin();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [navigate, isAuthenticated]);
  return (
    <>
      <StyleSectionAdminMain>
        <StyledHeader>
          <StyledTitleH4>使用者列表</StyledTitleH4>
        </StyledHeader>
        <StyledAdminUserList>
          <AdminUserCard />
          <AdminUserCard />
          <AdminUserCard />
          <AdminUserCard />
          <AdminUserCard />
          <AdminUserCard />
          <AdminUserCard />
          <AdminUserCard />
          <AdminUserCard />
          <AdminUserCard />
        </StyledAdminUserList>
      </StyleSectionAdminMain>
    </>
  );
};

export default AdminUserList;
