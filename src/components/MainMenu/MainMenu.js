import React, { useContext } from 'react';
import StoreContext from '../Store/Context';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  const { setToken } = useContext(StoreContext);
  return (
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
  );
};

export default MainMenu;
