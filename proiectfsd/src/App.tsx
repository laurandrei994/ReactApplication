import React from "react";
import './App.css';
import Login from "./components/login";
import Table from "./components/table";
import Image from "./components/image";
import DatePicker from "./components/datePicker";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/table" component={Table} />
        <Route path="/image" component={Image} />
        <Route path ="/datePicker" component={DatePicker} />
      </Switch>
  </Router>
  );
}

export default App;
