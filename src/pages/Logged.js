import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import StoreProvider from '../components/Store/Provider';
import Clientes from '../components/pages/Clientes';
import Faq from '../components/pages/Faq';
import HomeLogged from '../components/pages/HomeLogged';
import Motivos from '../components/pages/Motivos';
import Operadores from '../components/pages/Operadores';
import TaxasTarifas from '../components/pages/TaxasTarifas';
import Logo from '../components/Logo';
import '../styles/Logged.css';
import RoutesPrivate from '../components/Routes/Private/Private';
import Login from '../components/pages/Login';

const Logged = () => {
  return (
    <Router>
      <StoreProvider>
        <div className="contentTrue">
          <nav className="contentNav">
            <Logo />
            <div className="avatar">
              <img
                src="https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/07/neytiri_in_avatar_2-wide-do-we-really-need-avatar-2.jpeg"
                alt="avatar.png"
              />
              <p className="UserAvatarName">Username</p>
            </div>
            <ul className="menu">
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/clientes" className="link">
                  Clientes
                </Link>
              </li>
              <li>
                <Link to="/taxasetarifas" className="link">
                  Taxas e Tarifas
                </Link>
              </li>
              <li>
                <Link to="/faq" className="link">
                  FAQ App
                </Link>
              </li>
              <li>
                <Link to="/operadores" className="link">
                  Operadores
                </Link>
              </li>
              <li>
                <Link to="/motivos" className="link">
                  Motivo
                </Link>
              </li>
            </ul>
          </nav>
          <Switch className="ContentFull">
            <RoutesPrivate path="/" exact component={HomeLogged} />
            <RoutesPrivate path="/clientes" component={Clientes} />
            <RoutesPrivate path="/taxasetarifas" component={TaxasTarifas} />
            <RoutesPrivate path="/faq" component={Faq} />
            <RoutesPrivate path="/operadores" component={Operadores} />
            <RoutesPrivate path="/motivos" component={Motivos} />

            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </StoreProvider>
    </Router>
  );
};

export default Logged;
