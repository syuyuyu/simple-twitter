import React from "react";
import {
  StyledPopularContainer,
  StyledSectionPopular,
  StyledPopularList,
  StyledTitleH4,
} from "../components/common/StyledGroup";

import PopularItem from "./PopularItem";

const SectionPopular = () => {
  return (
    <StyledSectionPopular>
      <StyledPopularContainer>
        <StyledTitleH4>推薦跟隨</StyledTitleH4>
        <StyledPopularList>
          <PopularItem/>
          <PopularItem/>
          <PopularItem/>
          <PopularItem/>
          <PopularItem/>
          <PopularItem/>
          <PopularItem/>
          <PopularItem/>
          <PopularItem/>
        </StyledPopularList>
      </StyledPopularContainer>
    </StyledSectionPopular>
  );
};

export default SectionPopular;
