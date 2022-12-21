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
import { TweetContext } from "../../contexts/TweetContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";



const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const { setTweets } = useContext(TweetContext);
  const handleChange = (value) => {
    setInputValue(value);
  };
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleAddTweet = async () => {
    if (inputValue.length === 0) {
      return; //不可為空白
    }
    if (inputValue.length === 140) {
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

  useEffect(() => {
    const getTweetsAsync = async () => {
      try {
        const tweets = await getTweets();
        setTweets(tweets.map((tweet) => ({ ...tweet })));
        // console.log(tweets);
      } catch (error) {
        console.error(error);
      }
    };
    getTweetsAsync();
  }, [setTweets]);

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
          <StyledContentWrapper>
            <StyledAvatarDefault>
              <div className='avatar'></div>
            </StyledAvatarDefault>
            <ContentTextarea placeholder='有什麼新鮮事？' value={inputValue} onChange={handleChange} />
          </StyledContentWrapper>
          <StyledButtonContainer>
            <StyledError>字數不可超過140字</StyledError>
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
