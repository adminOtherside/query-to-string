import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home';
import Fundamento from '../Fundamento';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/fundamento" component={Fundamento} />
    </Switch>
  );
};

export default Routes;
