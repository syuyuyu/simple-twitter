import React from "react";
import { StyledGroupContainer } from "../components/common/StyledGroup";
import SectionSidebar from "../components/SectionSidebar";
import Setting from "../components/Setting";
import TweetModal from "../components/Modals/TweetModal";


const SettingPage = () => {
  return (
    <>
      <StyledGroupContainer>
        <SectionSidebar />
        <Setting />
      </StyledGroupContainer>
      <TweetModal />
    </>
  );
};

export default SettingPage;
