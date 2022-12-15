import { LogoStyle } from './common/authstyled';
import { StyledSidebarContainer } from "./common/StyledGroup";
import SidebarItem from './SidebarItem';

const AdminSidebarContainer=()=>{
  return (
    <>
      <StyledSidebarContainer>
        <LogoStyle style={{padding:'13px  0 0 13px'}}>
          <div className='logo-icon'></div>
        </LogoStyle>
        <SidebarItem
        value={'推文清單'}
        path={'/admin-main'}
        iconName={'mainIcon'}
        active={'active'}
        />
        <SidebarItem
        value={'使用者列表'}
        path={'/admin-users'}
        iconName={'profileIcon'}
        />
      </StyledSidebarContainer>
    </>
  )
}

export default AdminSidebarContainer;