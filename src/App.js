import './App.css';
import { ResetStyle,GlobalStyle } from './components/globalStyle'
import RegistPage from "./pages/RegistPage";


function App() {
  return (
    <div className='app'>
      <ResetStyle />
      <GlobalStyle />
      <RegistPage />
    </div>
  );
}

export default App;
