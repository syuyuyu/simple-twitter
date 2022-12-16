import { StyledAdminGroupContainer } from "../components/common/StyledGroup";
import SectionAdminSidebar from "../components/SectionAdminSidebar";
import { Outlet } from "react-router-dom";

const AdminMainPage = () => {
  return (
    <>
      <StyledAdminGroupContainer>
        <SectionAdminSidebar />
        <Outlet />
      </StyledAdminGroupContainer>
    </>
  );
};

export default AdminMainPage;
