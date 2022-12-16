import { LogoStyle } from './common/authstyled';
import { StyledSidebarContainer } from "../components/common/StyledGroup";
import SidebarItem from './SidebarItem';
import SidebarButton from './SidebarButton'

const SidebarContainer = ({ modal, toggleModal }) => {
  return (
    <>
      <StyledSidebarContainer>
        <LogoStyle style={{ padding: "13px  0 0 13px" }}>
          <div className='logo-icon'></div>
        </LogoStyle>
        <SidebarItem value={"首頁"} path={"/"} iconName={"mainIcon"} />
        <SidebarItem value={"個人資料"} path={"/profile/tweets"} iconName={"profileIcon"} />
        <SidebarItem value={"設定"} path={"/path"} iconName={"settingIcon"} />
        <SidebarButton modal={modal} toggleModal={toggleModal} />
      </StyledSidebarContainer>
    </>
  );
};

export default SidebarContainer;