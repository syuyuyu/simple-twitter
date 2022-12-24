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
import AdminTweetItem from "./AdminTweetItem.jsx";
import { TweetContext } from "../../contexts/TweetContext";
import { useContext } from "react";
import { adminDeleteTweets, adminGetTweets } from "../../api/admin";


const AdminTweetsList = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAdmin();
  const {tweets,setTweets}= useContext(TweetContext);

  //DELETE 刪除事件
  const handleRemoveClick = async(id)=>{
    const newTweets = tweets.filter((tweet) => tweet.id !== id);
    try{
      const deleteItem = await adminDeleteTweets(id);
      console.log(id)
      console.log('delete tweets List : ',deleteItem)
      setTweets(newTweets);
    }catch(err){
      console.error('delete tweet error:',err)
    }
  };

//GET 所有推文
  useEffect(() => {
    const getTweetsAsync = async () => {
      try {
        const tweets = await adminGetTweets();
        setTweets(tweets.map((tweet) => ({ ...tweet })));
        // console.log('tweets',tweets)
        return;
      } catch (error) {
        console.error(error);
      }
    };
    getTweetsAsync();
  }, [tweets,setTweets]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/admin");
    }
  }, [navigate, isAuthenticated]);

// tweetList
  return (
    <>
      <StyleSectionAdminMain>
        <StyledAdminTweetsList>
          <StyledHeader>
            <StyledTitleH4>推文清單</StyledTitleH4>
          </StyledHeader>
          <StyledTweetsList>
          { tweets.map((tweet,index) => 
            <AdminTweetItem 
              handleRemoveClick={handleRemoveClick}
              id={tweet.id}
              key={index}
              tweet={tweet}
              time={tweet.updatedAt}
              description={tweet.description}
            />
          )}
          </StyledTweetsList>
        </StyledAdminTweetsList>
      </StyleSectionAdminMain>
    </>
  );
};

export default AdminTweetsList;