import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// Areas
import { App } from "app/App.";
import { Main } from "containers/Main/Main";
import { Patreon } from "containers/Patreon/Patreon";

function Navigation() {
  return (
    <App>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/patron" component={Patreon} exact />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </App>
  );
}

export { Navigation };
