import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './Components/Dashboard';
import Groups from './Components/Groups';
import Profile from './Components/Profile';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/"><Dashboard /></Route>
      <Route path="/groups"><Groups /></Route>
      <Route path="/profile"><Profile /></Route>
    </Switch>
  );
};

export default AppRouter;