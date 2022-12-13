import React from 'react'
import { GroupContainer } from "../components/common/StyledGroup";
import SectionSidebar from "../components/SectionSidebar";
import SectionMain from "../components/SectionMain";
import SectionPopular from "../components/SectionPopular";

const MainPage = () => {
  return (
    <GroupContainer>
      <SectionSidebar />
      <SectionMain />
      <SectionPopular />
    </GroupContainer>
  );
}

export default MainPage