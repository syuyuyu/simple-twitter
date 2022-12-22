import { LogoStyle } from './common/authstyled';
import { StyledSidebarContainer } from "../components/common/StyledGroup";
import SidebarItem from './SidebarItem';
import SidebarButton from './SidebarButton'
// import EditModal from './Modals/EditModal';
import TweetModal from './Modals/TweetModal';
// import EditModal from './Modals/EditModal';


const SidebarContainer = () => {

  return (
    <>
      <StyledSidebarContainer>
        <LogoStyle style={{ padding: "13px  0 0 13px" }}>
          <div className='logo-icon'></div>
        </LogoStyle>
        <SidebarItem value={"首頁"} path={"/user/main/"} iconName={"mainIcon"} />
        <SidebarItem value={"個人資料"} path={"/user/profile/tweets"} iconName={"profileIcon"} />
        <SidebarItem value={"設定"} path={"/setting"} iconName={"settingIcon"} />
        <SidebarButton />
      </StyledSidebarContainer>
      <TweetModal />
      {/* <EditModal /> */}
    </>
  );
};

export default SidebarContainer;