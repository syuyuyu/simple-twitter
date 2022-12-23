import React, { useContext, useEffect } from "react";
import {
  StyledHeader,
  StyledMainContainer,
  StyledTitleH4,
  StyledContentContainer,
  StyledButtonContainer,
} from "../common/StyledGroup";
import ContentTextarea from "../ContentTextarea";
import TweetsList from "../Lists/TweetsList";
import { getTweets } from "../../api/tweets";
import { OtherUserContext, TweetContext } from "../../contexts/TweetContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { getUser } from "../../api/user";
import styled from "styled-components";
import avatarDefault from "../../assets/icons/avatar-default.svg";

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

const Main = () => {
  
  // const [inputValue, setInputValue] = useState("");
  const { setTweets } = useContext(TweetContext);
  // const [isUpdating, setIsUpdating] = useState(false);
  const { otherUser, setOtherUser } = useContext(OtherUserContext);

  // const handleChange = (value) => {
  //   setInputValue(value);
  // };
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // const handleAddTweet = async () => {
  //   if (inputValue.length === 0) {
  //     return; //不可為空白
  //   }
  //   if (inputValue.length > 140) {
  //     return; //字數上限140個字
  //   }
  // };

  //取得全部推文
  useEffect(() => {
    const getTweetsAsync = async () => {
      try {
        const tweets = await getTweets();
        setTweets(tweets.map((tweet) => ({ ...tweet })));
      } catch (error) {
        console.error(error);
      }
    };
    getTweetsAsync();
  }, [setTweets]);

  //GET 個人資料
  useEffect(() => {
    const getUserAsync = async () => {
      try {
        const user = await getUser();
        setOtherUser(user);
      } catch (error) {
        console.error(error);
      }
    };
    getUserAsync();
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
            <ContentTextarea
              placeholder='有什麼新鮮事？'
              // value={inputValue}
              // onChange={value=> setInputValue(value)}
            />
          </ContentWrapper>
          <StyledButtonContainer>
            {/* {inputValue.length > 140 ? (
              <StyledError>字數不可超過140字</StyledError>
            ) : (
              <StyledError>內容不可為空白</StyledError>
            )}
            <StyledPublicButton onClick={() => handleAddTweet?.()}>推文</StyledPublicButton> */}
          </StyledButtonContainer>
        </StyledContentContainer>
        <TweetsList />
      </StyledMainContainer>
    </>
  );
};

export default Main;
