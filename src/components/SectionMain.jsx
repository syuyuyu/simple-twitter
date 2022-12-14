import React from "react";
import { StyledSectionMain } from "../components/common/StyledGroup";
import Main from "./Main";
import Profile from "./Profile";

const SectionMain = () => {
  return (
    <StyledSectionMain>
      {/* <Main/> */}
      <Profile />
    </StyledSectionMain>
  );
};

export default SectionMain;
