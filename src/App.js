import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouteList from "./RouteList";
import NavBar from "./NavBar";

/** Main App component
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App -> { NavBar, RouteList }
 */

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
