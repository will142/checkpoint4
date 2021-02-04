import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Global from "./components/Global";
import Admin from "./components/Admin";


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Global} />
      <Route  path="/admin" component={Admin} />
    </Switch>
  );
}

export default App;