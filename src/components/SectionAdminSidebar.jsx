import React from "react";
import { StyledSectionSidebar } from "../components/common/StyledGroup";
import AdminSidebarContainer from "./AdminSidebarContainer";
import SidebarLogout from "./SidebarLogout";

const SectionAdminSidebar = () => {
  return (
    <>
      <StyledSectionSidebar>
        <AdminSidebarContainer />
        <SidebarLogout />
      </StyledSectionSidebar>
    </>
  );
};
export default SectionAdminSidebar;
