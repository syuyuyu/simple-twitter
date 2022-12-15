import { StyledAdminGroupContainer } from "../components/common/StyledGroup";
import SectionAdminSidebar from '../components/SectionAdminSidebar'
import SectionAdminMain from '../components/SectionAdminMain'


const AdminMainPage =()=>{

  return(
    <>
    <StyledAdminGroupContainer>
      <SectionAdminSidebar />
      <SectionAdminMain />
    </StyledAdminGroupContainer>
    </>  
  )
}

export default AdminMainPage;