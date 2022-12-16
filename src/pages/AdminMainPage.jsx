import { StyledAdminGroupContainer } from "../components/common/StyledGroup";
import SectionAdminSidebar from '../components/SectionAdminSidebar'
// import SectionAdminMain from '../components/SectionAdminMain'
import { Route, Routes } from "react-router-dom";
import AdminUserList from "../components/AdminUserList";
import AdminTweetsList from "../components/AdminTweetsList";

const AdminMainPage =()=>{
  return(
    <>
      <StyledAdminGroupContainer>
        <SectionAdminSidebar />
        <Routes>
          <Route path="/*" element={<AdminTweetsList />} />
          <Route path='/main' element={<AdminTweetsList />} />
          <Route path='/users' element={<AdminUserList />} />
        </Routes>
        {/* <SectionAdminMain /> */}
      </StyledAdminGroupContainer>
    </>  
  )
}

export default AdminMainPage;