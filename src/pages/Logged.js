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
import Logo from '../components/Logo';
import '../styles/Logged.css'

const Logged = () => {
  return (
    <Router>
      <div className="contentTrue">
        <nav className="contentNav">
          <Logo />
          <div className="avatar">
            <img src="https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/07/neytiri_in_avatar_2-wide-do-we-really-need-avatar-2.jpeg" alt="avatar.png" />
              <p>Username</p>
          </div>
          <ul className="menu">
            <li>
              <Link to="/" className="link">Home</Link>
            </li>
            <li>
              <Link to="/clientes" className="link">Clientes</Link>
            </li>
            <li>
              <Link to="/taxasetarifas" className="link">Taxas e Tarifas</Link>
            </li>
            <li>
              <Link to="/faq" className="link">FAQ App</Link>
            </li>
            <li>
              <Link to="/operadores" className="link">Operadores</Link>
            </li>
            <li>
              <Link to="/motivos" className="link">Motivo</Link>
            </li>
          </ul>
        </nav>
        <Switch className="ContentFull">
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