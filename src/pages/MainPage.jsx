import React, {  useEffect } from "react";
import { StyledGroupContainer } from "../components/common/StyledGroup";
import SectionSidebar from "../components/SectionSidebar";
import SectionPopular from "../components/SectionPopular";
import { Outlet ,useNavigate } from "react-router-dom";
import TweetModal from "../components/Modals/TweetModal";
import { useAuth } from "../contexts/AuthContext";
import ReplyModal from "../components/Modals/ReplyModal";

const MainPage = () => {
  const {isAuthenticated} =  useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    if(!isAuthenticated){
      return navigate('/');
    }
  },[navigate, isAuthenticated])

  return (
    <>
    <StyledGroupContainer>
      <SectionSidebar />
      <Outlet />
      <SectionPopular />
    </StyledGroupContainer>
    <TweetModal />
    <ReplyModal/>
    </>
    
  );
};

export default MainPage;
