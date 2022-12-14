import styled, { css } from "styled-components";
import avatarDefault from "../../icons/avatar-default.svg";
import backIcon from "../../icons/back.svg";

const StyledGroupContainer = styled.div`
  max-width: 1140px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3.5fr 1.5fr;
  gap: 24px;
`;

const StyledSectionSidebar = styled.div`
  height: 100vh;
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const StyledSectionMain = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const StyledSectionPopular = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StyledPopularContainer = styled.div`
  max-width: 273px;
  height: 100vh;
  background: var(--color-grayscale-dark20);
  border-radius: 16px;
  margin-top: 16px;
  padding-top: 4px;
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const StyledSidebarContainer = styled.div`
  width: 100%;
  height: 330px;
`;
const StyleSidebarItem = styled.div`
  padding: 13px 0 0 13px;
  &:not(:nth-child(4)) {
    margin-bottom: 40px;
  }
  h5 {
    color: var(--color-grayscale-dark100);
  }
`;
const StyledSidebarLogout = styled.div`
  width: 100%;
  height: 45px;
  padding: 0 0 0 13px;
  h5 {
    color: var(--color-grayscale-dark100);
  }
`;
const StyledTitleH4 = styled.h4`
  max-height: 24px;
  margin: 24px;
  font-size: 24px;
  font-weight: 700;
  line-height: 26px;
  color: var(--color-grayscale-dark100);
`;
const StyledPopularList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid #e6ecf0;
`;
const StyledPopularItem = styled.div`
  width: 100%;
  height: 82px;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
const StyledAvatarDefault = styled.div`
  width: 50px;
  height: 50px;
  margin: 16px 8px 16px 16px;
  .avatar {
    width: 50px;
    height: 50px;
    background-image: url(${avatarDefault});
    background-size: cover;
  }
`;

const StyledStyledNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;
const StyledName = styled.p`
  height: 26px;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  color: var(--color-grayscale-dark100);
`;

const StyledAccount = styled.p`
  height: 22px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: var(--color-grayscale-dark70);
`;

const StyledPublicButton = styled.button`
  border-radius: 50px;
  background-color: var(--color-main);
  border: none;
  color: var(--color-white);
  height: 40px;
  line-height: 24px;
  font-family: "Noto Sans TC", sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 8px 16px;
  margin-right: 16px;
  &:hover {
    cursor: pointer;
  }
  .active {
    background-color: var(--color-white);
    color: var(--color-main);
    border: 1px solid var(--color-main);
  }
  ${({ whiteMode }) =>
    whiteMode &&
    css`
      background-color: var(--color-white);
      border: 1px solid var(--color-main);
      color: var(--color-main);
    `}
`;

const StyledMainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #e6ecf0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const StyledHeader = styled.nav`
  /* position: fixed; */
  background: #ffffffa3;
  height: 74px;
  border: 1px solid #e6ecf0;
`;
const StyledContentContainer = styled.div`
  position: relative;
  min-height: 136px;
  border-bottom: 10px solid #e6ecf0;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-left: 8.2px;
`;
const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 16px;
`;
const StyledError = styled.p`
  height: 15px;
  font-size: 15px;
  font-weight: 500;
  line-height: 15px;
  color: var(--color-error);
  margin-right: 20px;
`;

const StyledTweetsList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 25px;
`;
const StyledBackIcon = styled.div`
  width: 24px;
  height: 24px;
  background-size: cover;
  margin-right: 16px;
  &.backIcon {
    background-image: url(${backIcon});
  }
`;
const StyledTitleH5 = styled.h5`
  height: 26px;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  color: var(--color-grayscale-dark100);
`;
const StyledTitleTweetCount = styled.div`
  height: 19px;
  font-size: 13px;
  font-weight: 500;
  line-height: 19px;
  color: var(--color-grayscale-dark70);
`;

const StyledProfileContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledBackgroundImage = styled.div`
  width: 100%;
  height: 200px;
  background: #aaa;
`;
const StyledEditContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding: 16px;
`;
const StyledAvatarImage = styled.div`
  position: absolute;
  width: 140px;
  height: 140px;
  border: 4px solid #fff;
  border-radius: 50%;
  top:124px;
  left: 16.1px;
  &.avatar {
    width: 140px;
    height: 140px;
    background-image: url(${avatarDefault});
    background-size: cover;
  }
`;
const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding:16px;
`
const StyledContent = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 6px 0 8px;
`
const StyledFollowsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 180px;
`
const StyledFollowWrapper = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: var(--color-secondary);
`;
const StyledTweetsNavbarWrapper = styled.div`
  width: 100%;
  height: 52px;
`;
const StyledTweetsNavbar = styled.div`
  width: 390px;
  display: flex;
  justify-content: space-between;
`
const StyledTweetNavLink = styled.div`
  height: 52px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-line-default);
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid var(--color-main);
    color: var(--color-main);
  }

  ${({ activeMode }) =>
    activeMode &&
    css`
      border-bottom: 2px solid var(--color-main);
      color: var(--color-main);
    `};
`;
export {
  StyledGroupContainer,
  StyledSectionSidebar,
  StyledSectionMain,
  StyledSectionPopular,
  StyledPopularContainer,
  StyledTitleH4,
  StyledPopularList,
  StyledPopularItem,
  StyledAvatarDefault,
  StyledStyledNameContainer,
  StyledName,
  StyledAccount,
  StyledPublicButton,
  StyledMainContainer,
  StyledHeader,
  StyledContentContainer,
  StyledContentWrapper,
  StyledButtonContainer,
  StyledError,
  StyledSidebarContainer,
  StyledSidebarLogout,
  StyleSidebarItem,
  StyledTweetsList,
  StyledTitleContainer,
  StyledBackIcon,
  StyledTitleH5,
  StyledTitleTweetCount,
  StyledProfileContainer,
  StyledBackgroundImage,
  StyledEditContainer,
  StyledAvatarImage,
  StyledTitleWrapper,
  StyledInfoWrapper,
  StyledContent,
  StyledFollowsWrapper,
  StyledFollowWrapper,
  StyledTweetsNavbarWrapper,
  StyledTweetsNavbar,
  StyledTweetNavLink,
};
