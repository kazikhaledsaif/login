import React from 'react';
import './App.css';
import Login from "./component/Login"
import Dashboard from "./component/Dashboard"
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashbaord" component={Dashboard} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
