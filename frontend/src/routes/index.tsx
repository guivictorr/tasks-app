import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Task from '../pages/Task';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/task/:id" exact component={Task}/>
    </Switch>
  );
}

export default Routes;