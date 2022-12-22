import React, { useContext, useEffect, useState } from "react";
import {
  StyledHeader,
  StyledMainContainer,
  StyledTitleH4,
  StyledContentContainer,
  StyledContentWrapper,
  StyledAvatarDefault,
  StyledButtonContainer,
  StyledPublicButton,
  StyledError,
} from "../common/StyledGroup";
import ContentTextarea from "../ContentTextarea";
import TweetModal from "../Modals/TweetModal";
import TweetsList from "../Lists/TweetsList";
import { createTweet, getTweets } from "../../api/tweets";
import { Top10Context, TweetContext } from "../../contexts/TweetContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { getTop10 } from "../../api/user";
import styled from "styled-components";
import avatarDefault from "../../assets/icons/avatar-default.svg";


const Main = () => {

  const Avatar = styled.div`
    width: 50px;
    height: 50px;
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

  const [inputValue, setInputValue] = useState("");
  const { setTweets } = useContext(TweetContext);
  const { setTop10List } = useContext(Top10Context);
  const [isUpdating, setIsUpdating] = useState(false);
  
  const handleChange = (value) => {
    setInputValue(value);
  };
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleAddTweet = async () => {
    if (inputValue.length === 0) {
      return; //不可為空白
    }
    if (inputValue.length > 140) {
      return; //字數上限140個字
    }
    try {
      const data = await createTweet({
        description: inputValue,
        UserId: 4,
        name: "大白",
        account: "qwer1122",
        isLike: false,
        replyCount: 0,
        likeCount: 0,
        createdAt: new Date(),
      });

      setTweets((prevTweets) => {
        return [
          ...prevTweets,
          {
            id: data.id,
            description: data.description,
            UserId: 4,
            name: data.name,
            account: data.account,
            isLike: false,
            replyCount: data.replyCount,
            likeCount: data.likeCount,
            createdAt: new Date(),
          },
        ];
      });
      setInputValue("");
    } catch (error) {
      console.error(error);
    }
  };
//取得全部推文
  useEffect(() => {
    const getTweetsAsync = async () => {
      try {
        const tweets = await getTweets();
        setTweets(tweets.map((tweet) => ({ ...tweet  })));
        console.log("主頁-全部推文",tweets);
      } catch (error) {
        console.error(error);
      }
    };
    getTweetsAsync();
  }, [setTweets]);

  
//身分驗證
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
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
            <Avatar className='avatar'></Avatar>
            <ContentTextarea
            placeholder='有什麼新鮮事？' 
            // value={inputValue} 
            // onChange={value=> setInputValue(value)}
            />
          </ContentWrapper>
          <StyledButtonContainer>
            {inputValue.length > 140 ? (
              <StyledError>字數不可超過140字</StyledError>
            ) : (
              <StyledError>內容不可為空白</StyledError>
            )}
            <StyledPublicButton onClick={() => handleAddTweet?.()}>推文</StyledPublicButton>
          </StyledButtonContainer>
        </StyledContentContainer>
        <TweetsList />
      </StyledMainContainer>
      <TweetModal />
    </>
  );
};

export default Main;
