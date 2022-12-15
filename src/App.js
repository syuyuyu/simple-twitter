import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ResetStyle, GlobalStyle } from "./components/globalStyle";
import { AdminPage, HomePage, LoginPage, MainPage, RegistPage,AdminMainPage } from "./pages";

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
          <Route path='admin-main' element={<AdminMainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
