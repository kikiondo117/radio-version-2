import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// Areas
import { App } from "app/App.";
import { Main } from "containers/Main/Main";
import { Patreon } from "containers/Patreon/Patreon";
import { Completed } from "containers/Completed/Completed";
import { Cancel } from "containers/Cancel/Cancel";

function Navigation() {
  return (
    <App>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/patron" component={Patreon} exact />
        <Route path="/cancel" component={Cancel} exact />
        <Route path="/completed" component={Completed} exact />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </App>
  );
}

export { Navigation };
