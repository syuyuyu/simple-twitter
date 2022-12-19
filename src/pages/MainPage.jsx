import React,{ useContext } from "react";
import { StyledGroupContainer } from "../components/common/StyledGroup";
import SectionSidebar from "../components/SectionSidebar";
import SectionPopular from "../components/SectionPopular";
import { Outlet} from "react-router-dom";
import TweetModal from "../components/Modals/TweetModal";

const MainPage = () => {
  return (
    <>
    <StyledGroupContainer>
      <SectionSidebar />
      <Outlet />
      <SectionPopular />
    </StyledGroupContainer>
    <TweetModal />
    </>
    
  );
};

export default MainPage;
