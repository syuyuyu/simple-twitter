import { LogoStyle } from './common/authstyled';
import { StyledSidebarContainer } from "../components/common/StyledGroup";
import SidebarItem from './SidebarItem';

const SidebarContainer=()=>{
  return (
    <>
      <StyledSidebarContainer>
        <LogoStyle style={{padding:'13px  0 0 13px'}}>
          <div className='logo-icon'></div>
        </LogoStyle>
        <SidebarItem
        value={'推文清單'}
        path={'/path'}
        iconName={'mainIcon'}
        active={'active'}
        />
        <SidebarItem
        value={'使用者列表'}
        path={'/path'}
        iconName={'profileIcon'}
        />
      </StyledSidebarContainer>
    </>
  )
}

export default SidebarContainer;