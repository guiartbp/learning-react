import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import StoreProvider from '../components/Store/Provider';
import RoutesPrivate from '../components/Routes/Private/Private';

import { Container, Row, Col } from 'react-bootstrap';
import MainSidebar from '../components/MainSidebar/MainSidebar';

import Home from './Home/Home';
import Clientes from './Clientes/Clientes';
import TaxasTarifas from './TaxasTarifas/TaxasTarifas';
import Faq from './Faq/Faq';
import Operadores from './Operadores/Operadores';
import Motivos from './Motivos/Motivos';
import { MainTopBar } from '../components/MainTopBar/MainTopBar';

const Layout = () => {
  const p0 = {
    padding: '0px',
  };
  return (
    <Container fluid>
      <Router>
        <StoreProvider>
          <Row>
            <Col xs="2" style={p0}>
              <MainSidebar />
            </Col>
            <Col style={p0}>
              <MainTopBar />
              <Switch>
                <RoutesPrivate path="/boots/" exact component={Home} />
                <RoutesPrivate path="/boots/clientes" component={Clientes} />
                <RoutesPrivate
                  path="/boots/taxasetarifas"
                  component={TaxasTarifas}
                />
                <RoutesPrivate path="/boots/faq" component={Faq} />
                <RoutesPrivate
                  path="/boots/operadores"
                  component={Operadores}
                />
                <RoutesPrivate path="/boots/motivos" component={Motivos} />
              </Switch>
            </Col>
          </Row>
        </StoreProvider>
      </Router>
    </Container>
  );
};
export default Layout;
