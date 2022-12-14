import './App.css';
import { ResetStyle,GlobalStyle } from './components/globalStyle'
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RegistPage from "./pages/RegistPage";
import AdminMainPage from './pages/AdminMainPage';

function App() {
  return (
    <div className='app'>
      <ResetStyle />
      <GlobalStyle />
      {/* <MainPage /> */}
      {/* <RegistPage /> */}
      {/* <LoginPage /> */}
      {/* <AdminPage/> */}
      <AdminMainPage />
    </div>
  );
}

export default App;
