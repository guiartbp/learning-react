import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import StoreProvider from '../components/Store/Provider';
import RoutesPrivate from '../components/Routes/Private/Private';

import Home from './Home/Home';
import Clientes from './Clientes/Clientes';
import TaxasTarifas from './TaxasTarifas/TaxasTarifas';
import Faq from './Faq/Faq';
import Operadores from './Operadores/Operadores';
import Motivos from './Motivos/Motivos';

import '../styles/Logged.css';
import MainSidebar from '../components/MainSidebar/MainSidebar';

const Logged = () => {
  return (
    <Router>
      <StoreProvider>
        <div className="contentTrue">
          <MainSidebar />
          <Switch className="ContentFull">
            <RoutesPrivate path="/" exact component={Home} />
            <RoutesPrivate path="/clientes" component={Clientes} />
            <RoutesPrivate path="/taxasetarifas" component={TaxasTarifas} />
            <RoutesPrivate path="/faq" component={Faq} />
            <RoutesPrivate path="/operadores" component={Operadores} />
            <RoutesPrivate path="/motivos" component={Motivos} />
          </Switch>
        </div>
      </StoreProvider>
    </Router>
  );
};

export default Logged;
