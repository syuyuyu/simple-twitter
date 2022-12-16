import {
  StyledHeader,
  StyledTitleH4,
  StyledTweetsList,
  StyledAdminTweetsList,
  StyleSectionAdminMain,
} from "../common/StyledGroup";
import AdminTweetItem from "./AdminTweetItem";

const AdminTweetsList = () => {
  return (
    <>
      <StyleSectionAdminMain>
        <StyledAdminTweetsList>
          <StyledHeader>
            <StyledTitleH4>推文清單</StyledTitleH4>
          </StyledHeader>
          <StyledTweetsList>
            <AdminTweetItem />
            <AdminTweetItem />
            <AdminTweetItem />
            <AdminTweetItem />
            <AdminTweetItem />
            <AdminTweetItem />
            <AdminTweetItem />
            <AdminTweetItem />
          </StyledTweetsList>
        </StyledAdminTweetsList>
      </StyleSectionAdminMain>
    </>
  );
};

export default AdminTweetsList;
