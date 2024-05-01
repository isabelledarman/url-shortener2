import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Home'
import GoLink from './GoLink'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
            <Route exact path = "/" Component={Home}/>
            <Route exact path = "/l/:code" Component={GoLink}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;