import AdminUserCard from "../AdminUserCard";
import { StyledAdminUserList, StyledHeader, StyledTitleH4, StyleSectionAdminMain } from "../common/StyledGroup";

const AdminUserList = () => {
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
