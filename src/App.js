import Slides from './components/Slides';
import { NavBar } from './components/NavBar';

function App() {

  return (
    <div className="App">
      { 
        <NavBar />
      }
      <Slides />
    </div>
  );
}

export default App;
