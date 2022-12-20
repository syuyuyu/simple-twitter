import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../../contexts/AdminContext";
import {
  StyledHeader,
  StyledTitleH4,
  StyledTweetsList,
  StyledAdminTweetsList,
  StyleSectionAdminMain,
} from "../common/StyledGroup";
import AdminTweetItem from "./AdminTweetItem";

const AdminTweetsList = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAdmin();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [navigate, isAuthenticated]);

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
