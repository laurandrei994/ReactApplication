import React from "react";
import './App.css';
import Login from "./components/login";
import Table from "./components/table";
import Image from "./components/image";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/table" component={Table} />
        <Route path="/image" component={Image} />
      </Switch>
  </Router>
  );
}

export default App;
