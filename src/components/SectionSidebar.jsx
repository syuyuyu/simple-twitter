import React from "react";
import { StyledSectionSidebar } from "../components/common/StyledGroup";
import SidebarContainer from "./SidebarContainer";
import SidebarLogout from './SidebarLogout';


const SectionSidebar=()=>{  
return (
  <>
    <StyledSectionSidebar>
      <SidebarContainer />
      <SidebarLogout />
    </StyledSectionSidebar>
  </>  
)
}
export default SectionSidebar;
