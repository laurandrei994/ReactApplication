import React, { useState } from "react";
import './App.scss';
import Login from "./components/login";
import Table from "./components/table";
import Image from "./components/image";
import AuthentificationContext from "./dataContexts/AuthentificationContext";
import DatePicker from "./components/datePicker";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  const [isAuth, setAuth] = useState(false);

  return (
    <AuthentificationContext.Provider value={{ isAuth, setAuth }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/TablePage" exact component={Table} />
          <Route path="/ImageUpload" exact component={Image} />
          <Route path ="/DatePicker" exact component={DatePicker} />
        </Switch>
    </Router>
  </AuthentificationContext.Provider>
  );
}

export default App;
