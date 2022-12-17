import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminTweetsList from "./components/sectionAdminMain/AdminTweetsList";
import AdminUserList from "./components/sectionAdminMain/AdminUserList";
import { ResetStyle, GlobalStyle } from "./components/globalStyle";
import { AdminPage, HomePage, LoginPage, MainPage, RegistPage, AdminMainPage, SettingPage } from "./pages";
import Main from "./components/sectionMain/Main";
import Profile from "./components/sectionMain/Profile";
import TweetsList from "./components/Lists/TweetsList";
import ReplysList from "./components/Lists/ReplysList";
import LikeTweetsList from "./components/Lists/LikeTweetsList";
import OtherUser from "./components/sectionMain/OtherUser";
import Reply from "./components/sectionMain/Reply";
import { useState } from "react";
import Setting from "./components/Setting";
import Follow from "./components/sectionMain/Follow";
import FollowerList from "./components/Lists/FollowerList";
import FollowingList from "./components/Lists/FollowingList";



function App() {
  const [tweetModal, setTweetModal] = useState(false);
  const [replyModal, setReplyModal] = useState(false);

  const toggleTweetModal = () => {
    setTweetModal(!tweetModal);
  };
  const toggleReplyModal = () => {
    setReplyModal(!replyModal);
  };


  return (
    <div className='app'>
      <ResetStyle />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='regist' element={<RegistPage />} />
          <Route path='user' element={<MainPage tweetModal={tweetModal} toggleTweetModal={toggleTweetModal} />}>
            <Route path='main' element={<Main />} />
            <Route path='profile' element={<Profile />}>
              <Route path='tweets' element={<TweetsList />} />
              <Route path='replys' element={<ReplysList />} />
              <Route path='likes' element={<LikeTweetsList />} />
            </Route>
            <Route path=':d/follow' element={<Follow />}>
              <Route path='follower' element={<FollowerList />} />
              <Route path='following' element={<FollowingList />} />
            </Route>
            <Route path='otheruser' element={<OtherUser />}>
              <Route path='tweets' element={<TweetsList />} />
              <Route path='replys' element={<ReplysList />} />
              <Route path='likes' element={<LikeTweetsList />} />
            </Route>
            <Route path='reply' element={<Reply replyModal={replyModal} toggleReplyModal={toggleReplyModal} />} />
            <Route path='setting' element={<Setting />} />
          </Route>
          <Route path='home' element={<HomePage />} />
          <Route path='admin/*' element={<AdminMainPage />}>
            <Route path='main' element={<AdminTweetsList />} />
            <Route path='users' element={<AdminUserList />} />
          </Route>
          <Route path='setting' element={<SettingPage />} />
          <Route path='admin' element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
