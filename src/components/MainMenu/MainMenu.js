import React, { useContext } from 'react';
import StoreContext from '../Store/Context';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  const { setToken } = useContext(StoreContext);
  return (
    <ul className="menu">
      <li>
        <Link to="/boots/" className="link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/boots/clientes" className="link">
          Clientes
        </Link>
      </li>
      <li>
        <Link to="/boots/taxasetarifas" className="link">
          Taxas e Tarifas
        </Link>
      </li>
      <li>
        <Link to="/boots/faq" className="link">
          FAQ App
        </Link>
      </li>
      <li>
        <Link to="/boots/operadores" className="link">
          Operadores
        </Link>
      </li>
      <li>
        <Link to="/boots/motivos" className="link">
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
