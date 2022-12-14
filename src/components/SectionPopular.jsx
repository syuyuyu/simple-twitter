import React from "react";
import {
  PopularContainer,
  StyledSectionPopular,
  PopularList,
  TitleH4,
} from "../components/common/StyledGroup";

import PopularItem from "./PopularItem";

const SectionPopular = () => {
  return (
    <StyledSectionPopular>
      <PopularContainer>
        <TitleH4>推薦跟隨</TitleH4>
        <PopularList>
          <PopularItem/>
          <PopularItem/>
          <PopularItem/>
          <PopularItem/>
          <PopularItem/>
          <PopularItem/>
          <PopularItem/>
          <PopularItem/>
          <PopularItem/>
        </PopularList>
      </PopularContainer>
    </StyledSectionPopular>
  );
};

export default SectionPopular;
