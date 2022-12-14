import {StyledSidebarLogout} from './common/StyledGroup'
import styled from "styled-components";
import logoutIcon from "../icons/logout.svg";

const NavLink = styled.a`
  height: 26px;
  width: 100%;
  display: flex;
  align-items: center;
`
const LogoutIcon = styled.div`
    width: 24px;
    height: 24px;
    background-size: cover;
    margin-right: 18px;
    background-image: url(${logoutIcon});
`


const SidebarLogout =()=>{
  return (
    <StyledSidebarLogout>
      <NavLink to={'/logout'}>
        <LogoutIcon></LogoutIcon>
        <h5>登出</h5>
      </NavLink>
    </StyledSidebarLogout>
  )
}

export default SidebarLogout;