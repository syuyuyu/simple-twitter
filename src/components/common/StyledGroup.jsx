import styled from "styled-components";
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

const StyledAdminGroupContainer = styled.div`
  max-width: 1140px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 6fr;
  gap: 24px;
`

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
  justify-content: space-between;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
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
`;
const StyledSidebarLogout = styled.div`
  width: 100%;
  height: 45px;
  padding: 0 0 0 13px;
`;
const StyledTitleH4 = styled.h4`
  height: 24px;
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
`;

const StyledMainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #e6ecf0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
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
const StyledContent = styled.div`
  position: relative;
  min-height: 136px;
  border-bottom: 10px solid #e6ecf0;
`;

const StyledContentContainer = styled.div`
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
  width: 100%;
`;

const StyleSectionAdminMain = styled.div`
    width: 100%;
    height: 100%;
`
const StyledAdminUserList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-gap: 16px;
  grid-auto-rows: min-content;
  `
const StyledAdminUserCard = styled.div`
  max-width: 249px;
  height: 285px;
  border-radius: 10px;
  background-color: #F6F7F8;
`
const StyledAdminUserBackground = styled.div`
    height: 125px;
    width: 100%;
    background-color: grey;
    border-radius: 10px 10px 0 0;
    background-size:cover;
    position: relative;
`
const StyledAdminUserAvatar= styled.img`
    height:100px;
    width: 100px;
    background-color: black;
    border-radius: 50%;
    border: 3px solid var(--color-white);
    position: absolute;
    top: 0;
    transform: translateY(-105px);
    background-size:cover;
`
const StyledAdminTweetsList=styled.div`
  display: flex;
  flex-direction: column;
`

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
  StyledContent,
  StyledContentContainer,
  StyledButtonContainer,
  StyledError,
  StyledSidebarContainer,
  StyledSidebarLogout,
  StyleSidebarItem,
  StyledAdminGroupContainer,
  StyledTweetsList,
  StyledTitleContainer,
  StyledBackIcon,
  StyledTitleH5,
  StyledTitleTweetCount,
  StyledProfileContainer,
  StyledAdminUserList,
  StyledAdminUserCard,
  StyledAdminUserBackground,
  StyledAdminUserAvatar,
  StyleSectionAdminMain,
  StyledAdminTweetsList,
};
