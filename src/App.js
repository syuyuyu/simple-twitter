import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminTweetsList from "./components/sectionAdminMain/AdminTweetsList";
import AdminUserList from "./components/sectionAdminMain/AdminUserList";
import { ResetStyle, GlobalStyle } from "./components/globalStyle";
import { AdminPage, HomePage, LoginPage, MainPage, RegistPage, AdminMainPage, SettingPage } from "./pages";
import Main from "./components/sectionMain/Main";
import Profile from "./components/sectionMain/Profile";
import TweetsList from "./components/Lists/TweetsList";
import UserReplysList from "./components/Lists/UserReplysList";
import LikeTweetsList from "./components/Lists/LikeTweetsList";
import OtherUser from "./components/sectionMain/OtherUser";
import Reply from "./components/sectionMain/Reply";
import { useState } from "react";
import Setting from "./components/Setting";
import Follow from "./components/sectionMain/Follow";
import FollowerList from "./components/Lists/FollowerList";
import FollowingList from "./components/Lists/FollowingList";
import {
  EditModalContext,
  TweetModalContext,
  // ReplyModalContext
} from "./contexts/ModalContext";
import {
  FollowerProvider,
  FollowingProvider,
  LikeTweetProvider,
  OtherUserProvider,
  ReplyProvider,
  Top10Provider,
  TweetProvider,
} from "./contexts/TweetContext";
import { AuthProvider } from "./contexts/AuthContext";
import { AdminProvider } from "./contexts/AdminContext";

function App() {
  const [tweetModal, setTweetModal] = useState(false);
  const [replyModal, setReplyModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const toggleTweetModal = () => {
    setTweetModal(!tweetModal);
  };
  const toggleReplyModal = () => {
    setReplyModal(!replyModal);
  };
  const toggleEditModal = () => {
    setEditModal(!editModal);
  };

  return (
    <div className='app'>
      <ResetStyle />
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <AdminProvider>
            <TweetModalContext.Provider value={{ tweetModal, toggleTweetModal }}>
              {/* <ReplyModalContext.Provider value={{replyModal,toggleReplyModal}}> */}
              <EditModalContext.Provider value={{ editModal, toggleEditModal }}>
                <TweetProvider>
                  <ReplyProvider>
                    <LikeTweetProvider>
                      <Top10Provider>
                        <FollowerProvider>
                          <FollowingProvider>
                            <OtherUserProvider>
                              <Routes>
                                <Route path='' element={<HomePage />} />
                                <Route path='login' element={<LoginPage />} />
                                <Route path='regist' element={<RegistPage />} />
                                <Route path='user' element={<MainPage />}>
                                  <Route path='main' element={<Main />} />
                                  <Route path='profile' element={<Profile />}>
                                    <Route path='tweets' element={<TweetsList />} />
                                    <Route path='replys' element={<UserReplysList />} />
                                    <Route path='likes' element={<LikeTweetsList />} />
                                  </Route>
                                  <Route path=':id/follow' element={<Follow />}>
                                    <Route path='follower' element={<FollowerList />} />
                                    <Route path='following' element={<FollowingList />} />
                                  </Route>
                                  <Route path=':userIid' element={<OtherUser />}>
                                    <Route path='tweets' element={<TweetsList />} />
                                    <Route path='replys' element={<UserReplysList />} />
                                    <Route path='likes' element={<LikeTweetsList />} />
                                  </Route>

                                  <Route path='setting' element={<Setting />} />
                                </Route>
                                <Route
                                  path='reply'
                                  element={<Reply replyModal={replyModal} toggleReplyModal={toggleReplyModal} />}
                                />
                                <Route path='home' element={<HomePage />} />
                                <Route path='admin/*' element={<AdminMainPage />}>
                                  <Route path='main' element={<AdminTweetsList />} />
                                  <Route path='users' element={<AdminUserList />} />
                                </Route>
                                <Route path='setting' element={<SettingPage />} />
                                <Route path='admin' element={<AdminPage />} />
                              </Routes>
                            </OtherUserProvider>
                          </FollowingProvider>
                        </FollowerProvider>
                      </Top10Provider>
                    </LikeTweetProvider>
                  </ReplyProvider>
                </TweetProvider>
              </EditModalContext.Provider>
              {/* </ReplyModalContext.Provider> */}
            </TweetModalContext.Provider>
          </AdminProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
