import React from "react";
import { StyledSectionSidebar } from "../components/common/StyledGroup";
import AdminSidebarContainer from "./AdminSidebarContainer";
import AdminLogout from "./AdminLogout";

const SectionAdminSidebar = () => {
  return (
    <>
      <StyledSectionSidebar>
        <AdminSidebarContainer />
        <AdminLogout />
      </StyledSectionSidebar>
    </>
  );
};
export default SectionAdminSidebar;
