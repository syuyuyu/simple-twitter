import styled from "styled-components";
import mainIcon from "../icons/main.svg";
import settingIcon from "../icons/setting.svg";
import profileIcon from "../icons/profile.svg";
import { StyleSidebarItem } from "./common/StyledGroup";
import { NavLink as Link } from "react-router-dom";

const NavLink = styled(Link)`
  height: 26px;
  width: 100%;
  display: flex;
  align-items: center;
`;
const MainIcon = styled.div`
  width: 24px;
  height: 24px;
  background-size: cover;
  margin-right: 18px;
  &.mainIcon {
    background-image: url(${mainIcon});
  }
  &.profileIcon {
    background-image: url(${profileIcon});
  }
  &.settingIcon {
    background-image: url(${settingIcon});
  }
`;

const SidebarItem = ({ value, path, iconName }) => {
  return (
    <StyleSidebarItem>
      <NavLink to={path} activeStyle>
        <MainIcon className={iconName}></MainIcon>
        <h5>{value}</h5>
      </NavLink>
    </StyleSidebarItem>
  );
};

export default SidebarItem;
