import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StoreProvider from './components/Store/Provider';
import RoutesPrivate from './components/Routes/Private/Private';
import Home from './pages/Home/Home';
import ClientesRoute from './pages/Clientes/ClientesRoute';
import LoginRoute from './pages/Login/LoginRoute';
import Logged from './pages/Logged';

const App = () => {
  return (
    <Router>
      <StoreProvider>
        <Switch>
          <Route path="/login" component={LoginRoute} />
          <RoutesPrivate path="/" exact component={Logged} />
          <RoutesPrivate path="/clientes" exact component={ClientesRoute} />
        </Switch>
      </StoreProvider>
    </Router>
  );
};

export default App;
