import React from "react";
import { StyledGroupContainer } from "../components/common/StyledGroup";
import SectionSidebar from "../components/SectionSidebar";
import SectionPopular from "../components/SectionPopular";
import { Route, Routes } from "react-router-dom";
import Profile from "../components/Profile";
import Main from "../components/Main";
import Follower from "../components/Follower";
import Following from "../components/Following";
import Setting from "../components/Setting";

const MainPage = () => {
  return (
    <StyledGroupContainer>
      <SectionSidebar />
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/*' element={<Main />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/follower' element={<Follower />} />
        <Route path='/following' element={<Following />} />
      </Routes>
      {/* <SectionMain /> */}
      <SectionPopular />
    </StyledGroupContainer>
  );
};

export default MainPage;
