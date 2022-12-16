import React from "react";
import { StyledSectionMain } from "../components/common/StyledGroup";
import Main from "./Main";
import Profile from "./Profile";
import { Route, Routes } from "react-router-dom";
import Follower from "../components/Follower";
import Following from "../components/Following";


const SectionMain = () => {
  return (
    <StyledSectionMain>
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/*' element={<Main />} />
        <Route path='/follower' element={<Follower />} />
        <Route path='/following' element={<Following />} />
      </Routes>
    </StyledSectionMain>
  );
};

export default SectionMain;
