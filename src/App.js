import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminTweetsList from "./components/sectionAdminMain/AdminTweetsList";
import AdminUserList from "./components/sectionAdminMain/AdminUserList";
import { ResetStyle, GlobalStyle } from "./components/globalStyle";
import { AdminPage, HomePage, LoginPage, MainPage, RegistPage, AdminMainPage } from "./pages";

function App() {
  return (
    <div className='app'>
      <ResetStyle />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<LoginPage />} />
          <Route path='regist' element={<RegistPage />} />
          <Route path='admin' element={<AdminPage />} />
          <Route path='*' element={<MainPage />} />
          <Route path='home' element={<HomePage />} />
          <Route path='admin_main/*' element={<AdminMainPage />}>
            <Route path='*' element={<AdminTweetsList />} />
            <Route path='admin_users' element={<AdminUserList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
