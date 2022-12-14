import React from "react";
import {
  StyledAvatarDefault,
  StyledStyledNameContainer,
  StyledName,
  StyledAccount,
  StyledPublicButton,
  StyledPopularItem,
} from "../components/common/StyledGroup";

const PopularItem = () => {
  return (
    <>
      <StyledPopularItem>
        <StyledAvatarDefault>
          <div className='avatar'></div>
        </StyledAvatarDefault>
        <StyledStyledNameContainer>
          <StyledName>Pizza Hut</StyledName>
          <StyledAccount>@pizzahut</StyledAccount>
        </StyledStyledNameContainer>
        <StyledPublicButton>正在跟隨</StyledPublicButton>
      </StyledPopularItem>
    </>
  );
};

export default PopularItem;
