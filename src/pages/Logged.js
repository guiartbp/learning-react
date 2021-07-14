import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import StoreProvider from '../components/Store/Provider';
import Logo from '../components/Logo';
import RoutesPrivate from '../components/Routes/Private/Private';
import StoreContext from '../components/Store/Context';

import '../styles/Logged.css';
import Home from './Home/Home';
import Clientes from './Clientes/Clientes';
import TaxasTarifas from './TaxasTarifas/TaxasTarifas';
import Faq from './Faq/Faq';
import Operadores from './Operadores/Operadores';
import Motivos from './Motivos/Motivos';
import Login from './Login/Login';

const Logged = () => {
  const { setToken } = useContext(StoreContext);
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
              <li>
                <button type="button" onClick={() => setToken(null)}>
                  Sair
                </button>
              </li>
            </ul>
          </nav>
          <Switch className="ContentFull">
            <RoutesPrivate path="/" exact component={Home} />
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
