import React from "react";
import { StyledSectionSidebar } from "../components/common/StyledGroup";
import SidebarContainer from "./SidebarContainer";
import SidebarLogout from './SidebarLogout';
import AdminSiderbarContainer from './AdminSiderbarContainer'


const SectionSidebar=()=>{  
return (
  <>
    <StyledSectionSidebar>
  {/* 若path為main就渲染SidebarContainer  */}
      {/* <SidebarContainer /> */}
  {/* 若path為admin就渲染SAdminSiderbarContainer */}
      <AdminSiderbarContainer />
      <SidebarLogout />
    </StyledSectionSidebar>
  </>  
)
}
export default SectionSidebar;
