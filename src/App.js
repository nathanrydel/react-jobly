import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import RouteList from "./RouteList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <RouteList />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
