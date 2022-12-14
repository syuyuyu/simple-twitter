import React from "react";
import { StyledSectionMain } from "../components/common/StyledGroup";
import Main from "./Main";
import Profile from "./Profile";
import { Route, Routes } from "react-router-dom";

const SectionMain = () => {
  return (
    <StyledSectionMain>
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile' element={<Main />} />
      </Routes>
    </StyledSectionMain>
  );
};

export default SectionMain;
