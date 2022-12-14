import React from "react";
import {
  AvatarDefault,
  NameContainer,
  Name,
  Account,
  PublicButton,
  StyledPopularItem,
} from "../components/common/StyledGroup";

const PopularItem = () => {
  return (
    <>
      <StyledPopularItem>
        <AvatarDefault>
          <div className='avatar'></div>
        </AvatarDefault>
        <NameContainer>
          <Name>Pizza Hut</Name>
          <Account>@pizzahut</Account>
        </NameContainer>
        <PublicButton>正在跟隨</PublicButton>
      </StyledPopularItem>
    </>
  );
};

export default PopularItem;
