import './App.css';
import { ResetStyle,GlobalStyle } from './components/globalStyle'
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import RegistPage from "./pages/RegistPage";


function App() {
  return (
    <div className='app'>
      <ResetStyle />
      <GlobalStyle />
      <RegistPage />
      {/* <LoginPage /> */}
      {/* <AdminPage/> */}
    </div>
  );
}

export default App;
