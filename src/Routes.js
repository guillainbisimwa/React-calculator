import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Calculator from './screens/Calculator';
import Quote from './screens/Quote';

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/quote" component={Quote} />
      </Switch>
    </BrowserRouter>
);

export default Routes;
