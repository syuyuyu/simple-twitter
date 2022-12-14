import AdminUserList from "./AdminUserList";
import AdminTweetsList from "./AdminTweetsList";
import {StyleSectionAdminMain} from "./common/StyledGroup";
import { Route, Routes } from "react-router-dom";



const SectionAdminMain =()=>{
  return (
    <>
      <StyleSectionAdminMain>
        {/* <Routes>
          <Route path='/admin-main' element={<AdminTweetsList />} />
          <Route path='/admin-users' element={<AdminUserList />} />
        </Routes> */}
      <AdminTweetsList />
      {/* <AdminUserList /> */}
      </StyleSectionAdminMain>
    </>
  )
}

export default SectionAdminMain;