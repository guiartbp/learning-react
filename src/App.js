import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StoreProvider from './components/Store/Provider';
import RoutesPrivate from './components/Routes/Private/Private';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Logged from './pages/Logged';
import Layout from './pages/Layout';

const App = () => {
  return (
    <Router>
      <StoreProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <RoutesPrivate path="/" exact component={Logged} />
          <RoutesPrivate path="/boots" component={Layout} />
        </Switch>
      </StoreProvider>
    </Router>
  );
};

export default App;
