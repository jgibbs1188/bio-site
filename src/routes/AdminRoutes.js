import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateProject from '../views/CreateProject';
import EditProject from '../views/EditProject';

export default function AdminRoutes() {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path="/create" component={CreateProject} />
          <Route exact path="/edit/:firebaseKey" component={EditProject} />
        </Switch>
      </div>
    </div>
  );
}
