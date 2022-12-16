import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ResetStyle, GlobalStyle } from "./components/globalStyle";
import { AdminPage, HomePage, LoginPage, MainPage, RegistPage,AdminMainPage,SettingPage } from "./pages";

function App() {
  return (
    <div className='app'>
      <ResetStyle />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<LoginPage />} />
          <Route path='regist' element={<RegistPage />} />
          <Route path='*' element={<MainPage />} />
          <Route path='home' element={<HomePage />} />
          <Route path='setting' element={<SettingPage />} />
          <Route path='admin' element={<AdminPage />} />
          <Route path='admin/*' element={<AdminMainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
