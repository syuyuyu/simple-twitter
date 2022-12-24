import React, { useContext, useEffect, useState } from "react";
import { deleteFollow, getTop10, postFollowing } from "../api/user";
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
  const [isFollow, setIsFollow] = useState("");

  //取得 Top 10
  useEffect(() => {
    const getUersAsync = async () => {
      try {
        const top10 = await getTop10();
        setTop10List(top10.map((user) => ({ ...user })));
        return;
      } catch (error) {
        console.error(error);
      }
    };
    getUersAsync();
    return () => {};
  }, [isFollow, setTop10List]);

  //追隨開關
  const handleToggleFollow = async (id) => {
    const userId = localStorage.getItem("userId");
    console.log("isFollow>>", isFollow);
    if (id === userId) {
      return;
    }
    //開始跟隨
    if (isFollow === false) {
      try {
        const res = await postFollowing(id);
        console.log("POST 開始追隨", res);
        setIsFollow(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      //取消追隨
      try {
        const res = await deleteFollow(id);
        console.log("POST 取消追隨", res);
        setIsFollow(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <StyledSectionPopular>
      <StyledPopularContainer>
        <StyledTitleH4>推薦跟隨</StyledTitleH4>
        <StyledPopularList>
          {top10List.map((user, i) => {
            return (
              <PopularItem
                key={i}
                account={user.account}
                avatar={user.avatar}
                followerCount={user.followerCount}
                followingId={user.followingId}
                followingUser={user.followingUser}
                isFollowed={user.isFollowed}
                isFollow={isFollow}
                setIsFollow={setIsFollow}
                handleToggleFollow={handleToggleFollow}
              />
            );
          })}
        </StyledPopularList>
      </StyledPopularContainer>
    </StyledSectionPopular>
  );
};

export default SectionPopular;
