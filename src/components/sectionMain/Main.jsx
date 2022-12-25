import React, { useContext, useEffect ,useState } from "react";
import {
  StyledHeader,
  StyledMainContainer,
  StyledTitleH4,
  StyledContentContainer,
  StyledButtonContainer,
  StyledError,
  StyledPublicButton,
} from "../common/StyledGroup";
import TweetsList from "../Lists/TweetsList";
import { getTweets, postLike, postUnLike } from "../../api/tweets";
import {  OtherUserContext, TweetContext } from "../../contexts/TweetContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { getUser } from "../../api/user";
import styled from "styled-components";
import avatarDefault from "../../assets/icons/avatar-default.svg";
import { createTweet } from "../../api/tweets";
import Swal from "sweetalert2";

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
  &.avatar {
    width: 50px;
    height: 50px;
    background-image: url(${avatarDefault});
    background-size: cover;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 8px 0 8.2px;
  width: 100%;
  margin-left: 8.2px;
`;
const StyledContainer = styled.div`
  position: relative;
  flex-grow: 0.9;
  padding: 15px 0 0 8px;
  height: 100%;
`;
const StyledTextarea = styled.textarea`
  width: 100%;
  font-size: 18px;
  line-height: 26px;
  outline: none;
  border: none;
  min-height: 150px;
`;


const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const { setTweets } = useContext(TweetContext);
  const [isUpdating, setIsUpdating] = useState(false);
  const { otherUser, setOtherUser } = useContext(OtherUserContext);
  const [activeLike, setActiveLike] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  //上傳推文
  const handleSubmit = async () => {
    if (!inputValue) {
      Swal.fire({
        title: "推文不可為空白",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        position: "top",
      });
      return;
    }
    if (isUpdating) {
      Swal.fire({
        title: "上傳中請稍等",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        position: "top",
      });
    }
    try {
      setIsUpdating(true);
      const res = await createTweet(inputValue);
      // console.log('res:',res);
      if (res) {
        await Swal.fire({
          title: "資料儲存中",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
          position: "top",
        });
        setIsUpdating(false);
        setInputValue("");
      }
    } catch (err) {
      Swal.fire({
        title: "儲存失敗",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        position: "top",
      });
    }
  };

  //點讚開關
  const handleToggleLike = async (targetTweet) => {
    const UserId = localStorage.getItem("userId");
    console.log(targetTweet);
    const { id } = { ...targetTweet.User };
    if (UserId === id) {
      return;
    }
    if (targetTweet.isLiked === false) {
      try {
        const res = await postLike(targetTweet.id);
        console.log("POST 按讚", res);
        setActiveLike(true);
        setLikeCount(likeCount + 1);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const res = await postUnLike(targetTweet.id);
        console.log("POST 取消讚", res);
        setActiveLike(false);
        setLikeCount(likeCount - 1);
      } catch (error) {
        console.error(error);
      }
    }
  };

  //取得全部推文
  useEffect(() => {
    const getTweetsAsync = async () => {
      try {
        const tweets = await getTweets();
        setTweets(tweets.map((tweet) => ({ ...tweet })));
        return;
      } catch (error) {
        console.error(error);
      }
    };
    getTweetsAsync();
    return;
  }, [activeLike, likeCount, setTweets]);

  //GET 個人資料
  useEffect(() => {
    const getUserAsync = async () => {
      try {
        const user = await getUser();
        setOtherUser(user);
        return;
      } catch (error) {
        console.error(error);
      }
    };
    getUserAsync();
    return;
  }, [setOtherUser]);

  //身分驗證
  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/");
    }
  }, [navigate, isAuthenticated]);

  return (
    <>
      <StyledMainContainer>
        <StyledHeader>
          <StyledTitleH4>首頁</StyledTitleH4>
        </StyledHeader>
        <StyledContentContainer>
          <ContentWrapper>
            <Avatar className='avatar' style={{ backgroundImage: `url('${otherUser.avatar}')` }}></Avatar>
            <StyledContainer>
              <StyledTextarea
                type='text'
                value={inputValue}
                placeholder={"有什麼新鮮事？"}
                maxLength={140}
                onChange={(event) => setInputValue(event.target.value)}
              />
            </StyledContainer>
          </ContentWrapper>
          <StyledButtonContainer>
            {inputValue.length >= 140 && <StyledError>字數不可超過140字</StyledError>}
            {inputValue.length === 0 && <StyledError>內容不可為空白</StyledError>}
            <StyledPublicButton onClick={handleSubmit}>推文</StyledPublicButton>
          </StyledButtonContainer>
        </StyledContentContainer>
        <TweetsList handleToggleLike={handleToggleLike} />
      </StyledMainContainer>
    </>
  );
};

export default Main;
