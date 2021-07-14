import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StoreProvider from '../components/Store/Provider';
import RoutesPrivate from '../components/Routes/Private/Private';
import Home from './Home/Home';
import ClientesRoute from './Clientes/ClientesRoute';
import LoginRoute from './Login/LoginRoute';

const PagesRoot = () => {
  return (
    <Router>
      <StoreProvider>
        <Switch>
          <Route path="/login" component={LoginRoute} />
          <RoutesPrivate path="/" exact component={Home} />
          <RoutesPrivate path="/clientes" exact component={ClientesRoute} />
        </Switch>
      </StoreProvider>
    </Router>
  );
};

export default PagesRoot;
