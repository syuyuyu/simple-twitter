import styled from "styled-components";
import mainIcon from "../icons/main.svg";
import mainActiveIcon from "../icons/main-active.svg";
import profileIcon from "../icons/profile.svg";
import profileActiveIcon from "../icons/profile-active.svg";
import settingIcon from "../icons/setting.svg";
import { StyleSidebarItem } from './common/StyledGroup';


const NavLink = styled.a`
  height: 26px;
  width: 100%;
  display: flex;
  align-items: center;
    &.active{
      color: var(--color-main);
      .mainIcon{
          background-image: url(${mainActiveIcon});
      .profileIcon{
        background-image: url(${profileActiveIcon});
      }
    }
  }
`
const MainIcon = styled.div`
    width: 24px;
    height: 24px;
    background-size: cover;
    margin-right: 18px;
    &.mainIcon {
      background-image: url(${mainIcon});
    }
    &.profileIcon{
      background-image: url(${profileIcon});
    }
    &.settingIcon{
      background-image: url(${settingIcon});
    }
`

const SidebarItem=({value, path, iconName,active }) =>{
  return(
    <StyleSidebarItem>
      <NavLink to={path} className={active}>
        <MainIcon className={iconName}></MainIcon>
        <h5>{value}</h5>
      </NavLink>
    </StyleSidebarItem>
  );
}

export default SidebarItem;