import React from "react";
import { StyledGroupContainer } from "../components/common/StyledGroup";
import SectionSidebar from "../components/SectionSidebar";
import SectionPopular from "../components/SectionPopular";
import { Outlet} from "react-router-dom";
import TweetModal from "../components/Modals/TweetModal";


const MainPage = ({ tweetModal, toggleTweetModal }) => {
  return (
    <>
    <StyledGroupContainer>
      <SectionSidebar tweetModal={tweetModal} toggleTweetModal={toggleTweetModal} />
      <Outlet />
      <SectionPopular />
    </StyledGroupContainer>
    <TweetModal tweetModal={tweetModal} toggleTweetModal={toggleTweetModal} />
    </>
    
  );
};

export default MainPage;
