import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouteList from "./RouteList";
import NavBar from "./NavBar";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <RouteList />
        </div>
      </BrowserRouter>
  );
}

export default App;
