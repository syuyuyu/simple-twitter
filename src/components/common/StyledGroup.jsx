import styled from "styled-components";
import avatarDefault from "../../icons/avatar-default.svg";

const StyledGroupContainer = styled.div`
  max-width: 1140px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3.5fr 1.5fr;
  gap: 24px;
`;

const StyledSectionSidebar = styled.div`
  background: #f00;
`;
const StyledSectionMain = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const StyledSectionPopular = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledPopularContainer = styled.div`
  max-width: 273px;
  background: var(--color-grayscale-dark20);
  border-radius: 16px;
  margin-top: 16px;
  padding-top: 4px;
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  `
const StyledSidebarContainer = styled.div`
  width: 100%;
  height : 330px;
  `
const StyleSidebarItem = styled.div`
  padding: 13px  0 0 13px;
  &:not(:nth-child(4)){
    margin-bottom: 40px;
  }
`
const StyledSidebarLogout = styled.div`
  width: 100%;
  height: 45px;
  padding:0 0 0 13px;

`
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
const AvatarDefault = styled.div`
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

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;
const Name = styled.p`
  height: 26px;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  color: var(--color-grayscale-dark100);
`;

const Account = styled.p`
  height: 22px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: var(--color-grayscale-dark70);
`;

const PublicButton = styled.button`
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

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #e6ecf0;
`;
const Header = styled.nav`
  /* position: fixed; */
  background: #ffffffa3;
  height: 74px;
  border: 1px solid #e6ecf0;
`;
const Content = styled.div`
  position: relative;
  min-height: 136px;
  border-bottom: 10px solid #e6ecf0;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-left: 8.2px;
`;
const ButtonContainer = styled.div`
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

export {
  StyledGroupContainer as GroupContainer,
  StyledSectionSidebar,
  StyledSectionMain,
  StyledSectionPopular,
  StyledPopularContainer as PopularContainer,
  StyledTitleH4 as TitleH4,
  StyledPopularList as PopularList,
  StyledPopularItem,
  AvatarDefault,
  NameContainer,
  Name,
  Account,
  PublicButton,
  MainContainer,
  Header,
  Content,
  ContentContainer,
  ButtonContainer,
  StyledError,
  StyledGroupContainer,
  StyledSidebarContainer,
  StyledSidebarLogout,
  StyleSidebarItem,
};
