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
        {/* 引入API使用下面這個 */}
        {/* {isFollow ? (
          <StyledPublicButton>正在跟隨</StyledPublicButton>
        ) : (
          <StyledPublicButton className='active'>跟隨</StyledPublicButton>
        )} */}
        {/* 引入API刪除下面這個 */}
        <StyledPublicButton className='active'>跟隨</StyledPublicButton>
      </StyledPopularItem>
    </>
  );
};

export default PopularItem;
