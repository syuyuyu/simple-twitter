import styled from "styled-components";
import logoutIcon from "../assets/icons/logout.svg";
import { NavLink as Link } from "react-router-dom";
import { LogoutContext } from "../contexts/AuthContext";
import React,{useContext} from "react";

const StyledSidebarLogout = styled.div`
  width: 100%;
  height: 45px;
  padding: 0 0 0 13px;
  cursor: pointer;
  h5 {
    color: var(--color-grayscale-dark100);
  }
`;
const NavLink = styled(Link)`
  height: 26px;
  width: 100%;
  display: flex;
  align-items: center;
`;
const LogoutIcon = styled.div`
  width: 24px;
  height: 24px;
  background-size: cover;
  margin-right: 18px;
  background-image: url(${logoutIcon});
`;





const SidebarLogout = () => {
  const {handleToggleAuth} = useContext(LogoutContext)

  const handleLogoutClick = ()=>{
    handleToggleAuth()
    localStorage.setItem("authToken", '');
  };

  return (
    <StyledSidebarLogout >
        <NavLink to={"/"} onClick={handleLogoutClick}>
          <LogoutIcon></LogoutIcon>
          <h5>登出</h5>
        </NavLink>
    </StyledSidebarLogout>
  );
};

export default SidebarLogout;
