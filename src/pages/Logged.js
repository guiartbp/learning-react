import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Clientes from './Clientes';
import Faq from './Faq';
import HomeLogged from './HomeLogged';
import Motivos from './Motivos';
import Operadores from './Operadores';
import TaxasTarifas from './TaxasTarifas';

const Logged = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/clientes">Clientes</Link>
            </li>
            <li>
              <Link to="/taxasetarifas">Taxas e Tarifas</Link>
            </li>
            <li>
              <Link to="/faq">FAQ App</Link>
            </li>
            <li>
              <Link to="/operadores">Operadores</Link>
            </li>
            <li>
              <Link to="/motivos">Motivo</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <HomeLogged />
          </Route>
          <Route path="/clientes">
            <Clientes />
          </Route>
          <Route path="/taxasetarifas">
            <TaxasTarifas />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/operadores">
            <Operadores />
          </Route>
          <Route path="/motivos">
            <Motivos />
          </Route>
        </Switch>
      </div>
    </Router>  

  )
}

export default Logged