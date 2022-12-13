import { LogoStyle } from './common/authstyled';
import { StyledSidebarContainer } from "../components/common/StyledGroup";
import SidebarItem from './SidebarItem';
import SidebarButton from './SidebarButton'



const SidebarContainer =()=>{
  return (
    <>
      <StyledSidebarContainer>
        <LogoStyle style={{padding:'13px  0 0 13px'}}>
          <div className='logo-icon'></div>
        </LogoStyle>
        <SidebarItem
        value={'首頁'}
        path={'/path'}
        iconName={'mainIcon'}
        />
        <SidebarItem
        value={'個人資料'}
        path={'/path'}
        iconName={'profileIcon'}
        />
        <SidebarItem
        value={'設定'}
        path={'/path'}
        iconName={'settingIcon'}
        />
      <SidebarButton />
      </StyledSidebarContainer>
    </>
  )
}

export default SidebarContainer;