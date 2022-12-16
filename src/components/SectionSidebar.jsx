import React from "react";
import { StyledSectionSidebar } from "../components/common/StyledGroup";
import SidebarContainer from "./SidebarContainer";
import SidebarLogout from "./SidebarLogout";

const SectionSidebar = ({ toggleTweetModal }) => {
  return (
    <>
      <StyledSectionSidebar>
        <SidebarContainer toggleTweetModal={toggleTweetModal} />
        <SidebarLogout />
      </StyledSectionSidebar>
    </>
  );
};
export default SectionSidebar;
