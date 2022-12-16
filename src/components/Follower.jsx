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
  StyledTweetNavLink,
} from "./common/StyledGroup";
import UsersList from "./UsersList";
import {NavLink} from "react-router-dom";

const Follower =()=>{
return(
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
      <div style={{
        borderTop: '1px solid #E6ECF0'
        }}></div>
          <StyledTweetsNavbarWrapper>
            <StyledTweetsNavbar style={{width:'260px'}}>
              <StyledTweetNavLink activeStyle>追隨者</StyledTweetNavLink>
              {/* <NavLink to={'/following'} activeStyle> */}
                <StyledTweetNavLink activeStyle>正在追隨</StyledTweetNavLink>
              {/* </NavLink> */}
            </StyledTweetsNavbar>
          </StyledTweetsNavbarWrapper>
      <UsersList />
  </StyledMainContainer>
)
}

export default Follower;