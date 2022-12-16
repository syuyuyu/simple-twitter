import React from "react";
import { StyledGroupContainer } from "../components/common/StyledGroup";
import SectionSidebar from "../components/SectionSidebar";
import Setting from "../components/Setting";

const SettingPage = () => {
  return (
    <StyledGroupContainer>
      <SectionSidebar />
      <Setting />
    </StyledGroupContainer>
  );
};

export default SettingPage;
