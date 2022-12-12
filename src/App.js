import "./App.css";
import {ResetStyle} from "./components/globalStyle";
import RegistPage from "./pages/RegistPage";


function App() {
  return (
    <div className='app'>
      <ResetStyle />
        <RegistPage />
    </div>
  );
}

export default App;
