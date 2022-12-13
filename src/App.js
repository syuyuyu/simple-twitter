import './App.css';
import { ResetStyle,GlobalStyle } from './components/globalStyle'
import Sidebar from "./component/common/Sidebar.jsx";


function App() {
  return (
    <div className='app'>
      <ResetStyle />
      <GlobalStyle />
      <Sidebar />
    </div>
  );
}

export default App;
