import {
  StyledMainContainer,
  StyledHeader,
  StyledTitleContainer,
  StyledBackIcon,
  StyledTitleWrapper,
  StyledTitleH5,
  StyledTitleTweetCount,
  StyledTweetsNavbarWrapper,
  StyledTweetsNavbar,
} from "./common/StyledGroup";
import {NavLink as Link, Outlet} from "react-router-dom";
import styled from "styled-components";


const Follow =()=>{
  const NavLink = styled(Link)`
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
    &.active {
      border-bottom: 2px solid var(--color-main);
      color: var(--color-main);
    }
  `;
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
    <div
      style={{
        borderTop: "1px solid #E6ECF0",
      }}
    ></div>
    <StyledTweetsNavbarWrapper>
      <StyledTweetsNavbar style={{ width: "260px" }}>
        <NavLink to='follower' activeStyle>
          追隨者
        </NavLink>
        <NavLink to='following' activeStyle>
          正在追隨
        </NavLink>
      </StyledTweetsNavbar>
    </StyledTweetsNavbarWrapper>
    <Outlet />
  </StyledMainContainer>
);
}

export default Follow;