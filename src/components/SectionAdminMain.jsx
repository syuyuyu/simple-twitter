import AdminUserList from "./AdminUserList";
import AdminTweetsList from "./AdminTweetsList";
import {StyleSectionAdminMain} from "./common/StyledGroup";

const SectionAdminMain =()=>{
  return (
    <>
      <StyleSectionAdminMain>
        {/* <AdminTweetsList /> */}
        <AdminUserList />
      </StyleSectionAdminMain>
    </>
  )
}

export default SectionAdminMain;