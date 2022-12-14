import React from "react";
import {
  StyledMainContainer,
  StyledHeader,
  StyledTitleContainer,
  StyledBackIcon,
  StyledTitleH5,
  StyledTitleTweetCount,
  StyledProfileContainer,
} from "./common/StyledGroup";
import styled from "styled-components";

const Titlecontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Profile = () => {
  return (
    <StyledMainContainer>
      <StyledHeader style={{ border: "0px" }}>
        <StyledTitleContainer>
          <StyledBackIcon className='backIcon'></StyledBackIcon>
          <Titlecontainer>
            <StyledTitleH5>John Doe</StyledTitleH5>
            <StyledTitleTweetCount>25推文</StyledTitleTweetCount>
          </Titlecontainer>
        </StyledTitleContainer>
      </StyledHeader>
      <StyledProfileContainer>
        
      </StyledProfileContainer>
    </StyledMainContainer>
  );
};

export default Profile;
