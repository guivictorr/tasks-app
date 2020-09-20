import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Task from '../pages/Task';
import Edit from '../pages/Edit';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/task/:id" component={Task}/>
      <Route path="/edit/:id" component={Edit}/>
    </Switch>
  );
}

export default Routes;