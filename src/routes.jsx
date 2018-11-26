// Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import App from "./components/App";

import Coins from "./components/Coins";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Coins} exact />
    </Switch>
  </App>
);

export default AppRoutes;
