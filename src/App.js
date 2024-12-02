
import './App.css';
import Buttons from './Components/Buttons';
import ColorContext from './Components/ColorContext';
import Fetch from './Components/Fetch';

function App() {
  return (
    <div className="App">
     <h1>hello world</h1>
     <ColorContext>
      <Buttons />
      <Fetch />
    </ColorContext>
    </div>
  );
}

export default App;
