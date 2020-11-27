import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Home from "./components/Home";
import Player from "./components/Player"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      
      <Home />
      <NavBar />
      <Player />
    </div>
  );
}

export default App;
