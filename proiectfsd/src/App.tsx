import React from "react";
import './App.css';
import Login from "./components/login";
import Table from "./components/table";
import Image from "./components/image";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/table">Table</Link>
          </li>
          <li>
            <Link to="/image">Image</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/table">
          <Table />
        </Route>
        <Route path="/image">
         <Image/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
