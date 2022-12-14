import styled from 'styled-components';
import AdminUserListContainer from './AdminUserListContainer';
import AdminTweetsContainer from './AdminTweetsContainer';

const StyleSectionAdminMain = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

const SectionAdminMain =()=>{
  return (
    <>
      <StyleSectionAdminMain>
      {/* <AdminTweetsContainer /> */}
      <AdminUserListContainer />
      </StyleSectionAdminMain>
    </>
  )
}

export default SectionAdminMain;