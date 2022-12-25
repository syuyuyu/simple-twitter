import React, { useContext, useState } from "react";
import { deleteFollow, postFollowing } from "../../api/user";
import { FollowingContext } from "../../contexts/TweetContext";
import { StyledTweetsList } from "../common/StyledGroup";
import UserItem from "./UserItem";

const FollowingList = () => {
  const { followings } = useContext(FollowingContext);
  const [isFollow, setIsFollow] = useState("");

  //追隨開關
  const handleToggleFollow = async (id) => {
    const userId = localStorage.getItem("userId");
    console.log("isFollow>>", isFollow);
    console.log("id>>", id);
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
    <StyledTweetsList>
      {followings.map((user) => {
        return (
          <UserItem
            id={user.id}
            User={user.followingUser}
            isFollow={isFollow}
            setIsFollow={setIsFollow}
            handleToggleFollow={handleToggleFollow}
          />
        );
      })}
    </StyledTweetsList>
  );
};

export default FollowingList;
