import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../views/About';
import Contact from '../views/Contact';
import Projects from '../views/Projects';
import Tech from '../views/Tech';

export default function Routes() {
  return (
    <Switch>
      <Route exact path={['/', '/home']} />
      <Route exact path="/projects" component={Projects} />
      {/* <Route exact path="/projects/:key" /> */}
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/tech/" component={Tech} />
      <Route exact path="/about/" component={About} />
    </Switch>
  );
}
