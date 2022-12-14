import { StyledAdminGroupContainer } from "../components/common/StyledGroup";
import SectionSidebar from '../components/SectionSidebar'
import SectionAdminMain from '../components/SectionAdminMain'


const AdminMainPage =()=>{

  return(
    <>
    <StyledAdminGroupContainer>
      <SectionSidebar />
      <SectionAdminMain />
    </StyledAdminGroupContainer>
    </>  
  )
}

export default AdminMainPage;