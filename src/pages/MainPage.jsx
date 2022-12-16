import React, { useState } from "react";
import { StyledGroupContainer } from "../components/common/StyledGroup";
import SectionSidebar from "../components/SectionSidebar";
import SectionPopular from "../components/SectionPopular";
import { Route, Routes } from "react-router-dom";
import Profile from "../components/sectionMain/Profile";
import Main from "../components/sectionMain/Main";
import OtherUser from "../components/sectionMain/OtherUser";
import TweetsList from "../components/TweetsList";
import Reply from "../components/sectionMain/Reply";
import ReplysList from "../components/ReplysList";
import LikeTweetsList from "../components/LikeTweetsList";
import Follower from "../components/Follower";
import Following from "../components/Following";
import Setting from "../components/Setting";

const MainPage = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <StyledGroupContainer>
      <SectionSidebar modal={modal} toggleModal={toggleModal} />
      <Routes>
        <Route path='/' element={<Main modal={modal} toggleModal={toggleModal} />} />
        <Route path='profile' element={<Profile />}>
          <Route path='tweets' element={<TweetsList />} />
          <Route path='replys' element={<ReplysList />} />
          <Route path='likes' element={<LikeTweetsList />} />
        </Route>
        <Route path='otheruser' element={<OtherUser />}>
          <Route path='tweets' element={<TweetsList />} />
          <Route path='replys' element={<ReplysList />} />
          <Route path='likes' element={<LikeTweetsList />} />
        </Route>
        <Route path='/reply' element={<Reply modal={modal} toggleModal={toggleModal} />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/follower' element={<Follower />} />
        <Route path='/following' element={<Following />} />
      </Routes>
      <SectionPopular />
    </StyledGroupContainer>
  );
};

export default MainPage;
