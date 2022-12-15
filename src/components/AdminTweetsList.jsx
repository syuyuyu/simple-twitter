import {StyledHeader,StyledTitleH4,StyledTweetsList,StyledAdminTweetsList} from "./common/StyledGroup";
import AdminTweetItem from "./AdminTweetItem";

const AdminTweetsList =()=>{
  return (
    <>
    <StyledAdminTweetsList>
      <StyledHeader>
        <StyledTitleH4>推文清單</StyledTitleH4>
      </StyledHeader>
      <StyledTweetsList>
        <AdminTweetItem/>
        <AdminTweetItem/>
        <AdminTweetItem/>
        <AdminTweetItem/>
        <AdminTweetItem/>
        <AdminTweetItem/>
        <AdminTweetItem/>
        <AdminTweetItem/>
      </StyledTweetsList>
    </StyledAdminTweetsList>
    </>
  )
}

export default AdminTweetsList;