import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginContainer from "../containers/LoginContainer";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <LoginContainer />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
