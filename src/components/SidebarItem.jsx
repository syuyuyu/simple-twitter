import styled from "styled-components";
import mainIcon from "../assets/icons/main.svg";
import mainActiveIcon from "../assets/icons/main-active.svg";
import profileIcon from "../assets/icons/profile.svg";
import profileActiveIcon from "../assets/icons/profile-active.svg";
import settingIcon from "../assets/icons/setting.svg";
import settingActiveIcon from "../assets/icons/setting-active.svg";
import { StyleSidebarItem } from "./common/StyledGroup";
import { NavLink as Link } from "react-router-dom";

const NavLink = styled(Link)`
  height: 26px;
  width: 100%;
  display: flex;
  align-items: center;
  &.active{
    h5{
      color:var(--color-main);
    }
    .mainIcon{
      background-image: url(${mainActiveIcon});
    }
    .profileIcon{
      background-image: url(${profileActiveIcon});
    }
    .settingIcon{
      background-image: url(${settingActiveIcon});
    }
  }
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

const SidebarItem = ({ value, path, iconName}) => {
  return (
    <StyleSidebarItem>
      <NavLink to={path}>
        <MainIcon className={iconName}></MainIcon>
        <h5>{value}</h5>
      </NavLink>
    </StyleSidebarItem>
  );
};

export default SidebarItem;
