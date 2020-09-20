import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//components

//pages
import Home from "./containers/Home";

const App = () => {
  return (
    <div className="Darrellbor__App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
