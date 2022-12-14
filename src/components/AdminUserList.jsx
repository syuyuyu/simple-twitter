import AdminUserCard from "./AdminUserCard";
import {StyledAdminUserList,StyledHeader,StyledTitleH4} from "./common/StyledGroup";

const AdminUserList =()=>{
  return (
    <>
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
    </>
  )
}

export default AdminUserList;

