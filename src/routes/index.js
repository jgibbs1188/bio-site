import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default function Routes() {
  return (
    <Switch>
      <Route exact path={['/', '/home']} />
      <Route exact path="/projects" />
      <Route exact path="/projects/:key" />
      <Route exact path="/contact" />
      <Route exact path="/tech/" />
      <Route exact path="/about/" />
    </Switch>
  );
}
