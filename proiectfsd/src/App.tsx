import React, { useState, useEffect } from "react";
import './App.scss';
import Login from "./components/login";
import Table from "./components/table";
import Image from "./components/image";
import DatePicker from "./components/datePicker";
import AuthentificationContext from "./dataContexts/AuthentificationContext";
import {createBrowserHistory} from "history";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import interceptors from "./api/interceptors";


function App() {
  console.clear();
  
  const history = createBrowserHistory();
  const [isAuth, setAuth] = useState(false);
  interceptors.setupInterceptors(history);

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

