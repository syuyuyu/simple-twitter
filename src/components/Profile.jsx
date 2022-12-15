import React from "react";
import {
  StyledMainContainer,
  StyledHeader,
  StyledTitleContainer,
  StyledBackIcon,
  StyledTitleH5,
  StyledTitleTweetCount,
  StyledProfileContainer,
  StyledBackgroundImage,
  StyledEditContainer,
  StyledPublicButton,
  StyledAvatarImage,
  StyledTitleWrapper,
  StyledInfoWrapper,
  StyledAccount,
  StyledContent,
  StyledFollowsWrapper,
  StyledFollowWrapper,
  StyledTweetsNavbar,
  StyledTweetsNavbarWrapper,
  StyledTweetNavLink,
} from "./common/StyledGroup";
import TweetsList from "./TweetsList";

const Profile = () => {
  return (
    <StyledMainContainer>
      <StyledHeader style={{ border: "0px" }}>
        <StyledTitleContainer>
          <StyledBackIcon className='backIcon'></StyledBackIcon>
          <StyledTitleWrapper>
            <StyledTitleH5>John Doe</StyledTitleH5>
            <StyledTitleTweetCount>25推文</StyledTitleTweetCount>
          </StyledTitleWrapper>
        </StyledTitleContainer>
      </StyledHeader>
      <StyledProfileContainer>
        <StyledBackgroundImage></StyledBackgroundImage>
        <StyledAvatarImage className='avatar'></StyledAvatarImage>
        <StyledEditContainer>
          <StyledPublicButton whiteMode={true}>編輯個人資料</StyledPublicButton>
        </StyledEditContainer>
        <StyledInfoWrapper>
          <StyledTitleH5>John Doe</StyledTitleH5>
          <StyledAccount style={{ fontSize: "14px", fontWeight: "400" }}>@heyjohn</StyledAccount>
          <StyledContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam impedit vel Quisquam impedit vel Quisquam
            impedit vel
          </StyledContent>
          <StyledFollowsWrapper>
            <StyledFollowWrapper>
              <p style={{ color: "var(--color-grayscale-dark100)" }}>34個</p>
              <p>跟隨中</p>
            </StyledFollowWrapper>
            <StyledFollowWrapper>
              <p style={{ color: "var(--color-grayscale-dark100)" }}>59位</p>
              <p>跟隨者</p>
            </StyledFollowWrapper>
          </StyledFollowsWrapper>
        </StyledInfoWrapper>
      </StyledProfileContainer>
      <StyledTweetsNavbarWrapper>
        <StyledTweetsNavbar>
          <StyledTweetNavLink activeStyle>推文</StyledTweetNavLink>
          <StyledTweetNavLink activeStyle>回覆</StyledTweetNavLink>
          <StyledTweetNavLink activeStyle>喜歡的內容</StyledTweetNavLink>
        </StyledTweetsNavbar>
      </StyledTweetsNavbarWrapper>
      <TweetsList />
    </StyledMainContainer>
  );
};

export default Profile;
