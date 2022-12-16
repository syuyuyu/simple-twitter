import React from "react";
import { StyledSectionSidebar } from "../components/common/StyledGroup";
import SidebarContainer from "./SidebarContainer";
import SidebarLogout from "./SidebarLogout";

const SectionSidebar = ({ modal, toggleModal }) => {
  return (
    <>
      <StyledSectionSidebar>
        <SidebarContainer modal={modal} toggleModal={toggleModal} />
        <SidebarLogout />
      </StyledSectionSidebar>
    </>
  );
};
export default SectionSidebar;
