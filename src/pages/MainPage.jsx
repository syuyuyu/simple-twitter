import React from 'react'
import { StyledGroupContainer } from "../components/common/StyledGroup";
import SectionSidebar from "../components/SectionSidebar";
import SectionMain from "../components/SectionMain";
import SectionPopular from "../components/SectionPopular";

const MainPage = () => {
  return (
    <StyledGroupContainer>
      <SectionSidebar />
      <SectionMain />
      <SectionPopular />
    </StyledGroupContainer>
  );
}

export default MainPage