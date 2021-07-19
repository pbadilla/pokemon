import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '~/pages/Home';
import Pokemon from '~/pages/Pokemon';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/pokemon" />
    </Route>
    <Route path="/pokemon" exact component={Home} />
    <Route path="/pokemon/:name" component={Pokemon} />
  </Switch>
);

export default Routes;
