import React, { useContext, useEffect } from "react";
import { getTop10 } from "../api/user";
import {
  StyledPopularContainer,
  StyledSectionPopular,
  StyledPopularList,
  StyledTitleH4,
} from "../components/common/StyledGroup";
import { Top10Context } from "../contexts/TweetContext";

import PopularItem from "./PopularItem";

const SectionPopular = () => {
  const { top10List, setTop10List } = useContext(Top10Context);

  useEffect(() => {
    const getUersAsync = async () => {
      try {
        const top10 = await getTop10();
        setTop10List(top10.map((user) => ({ ...user })));
      } catch (error) {
        console.error(error);
      }
    };
    getUersAsync();
  }, [setTop10List]);

  return (
    <StyledSectionPopular>
      <StyledPopularContainer>
        <StyledTitleH4>推薦跟隨</StyledTitleH4>
        <StyledPopularList>
          {top10List.map((user) => {
            return (
              <PopularItem
                account={user.account}
                avatar={user.avatar}
                followerCount={user.followerCount}
                followingId={user.followingId}
                followingUser={user.followingUser}
                isFollowed={user.isFollowed}
              />
            );
          })}
        </StyledPopularList>
      </StyledPopularContainer>
    </StyledSectionPopular>
  );
};

export default SectionPopular;
