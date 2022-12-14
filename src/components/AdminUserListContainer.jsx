import {Header,TitleH4} from './common/StyledGroup';
import AdminUserList from './AdminUserList'
import styled from 'styled-components';

const AdminUserListContainer =()=>{
  const StyleAdminUserListContainer=styled.div`
    displey: flex;
  `

  return (
    <StyleAdminUserListContainer>
      <Header>
        <TitleH4>使用者列表</TitleH4>
      </Header>
      <AdminUserList />
    </StyleAdminUserListContainer>
  )
}

export default AdminUserListContainer;