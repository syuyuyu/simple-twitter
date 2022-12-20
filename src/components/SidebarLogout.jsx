import styled from "styled-components";
import logoutIcon from "../assets/icons/logout.svg";
import { useAuth } from "../contexts/AuthContext";

const StyledSidebarLogout = styled.div`
  width: 100%;
  height: 45px;
  padding: 0 0 0 13px;
  cursor: pointer;
  h5 {
    color: var(--color-grayscale-dark100);
  }
`;

const StyledLink = styled.button`
  height: 26px;
  width: 100%;
  display: flex;
  align-items: center;
  &:hover{
    cursor: pointer;
  }
`;
const LogoutIcon = styled.div`
  width: 24px;
  height: 24px;
  background-size: cover;
  margin-right: 18px;
  background-image: url(${logoutIcon});
`;


const SidebarLogout = () => {
  const { logout } = useAuth();
  const handleClick = () => {
    logout();
  };
  return (
    <StyledSidebarLogout>
      <StyledLink onClick={handleClick}>
        <LogoutIcon></LogoutIcon>
        <h5>登出</h5>
      </StyledLink>
     </StyledSidebarLogout>
  );
};

export default SidebarLogout;
