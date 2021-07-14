import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from '../../components/Store/Context';
import Logo from '../../components/Logo';
import '../../styles/Login.css';

function initialState() {
  return { email: '', password: '' };
}

function login({ email, password }) {
  if (email === 'admin@admin.com' && password === 'admin123@') {
    console.log('hello');
    return { token: '1234' };
  }
  return { error: 'Email ou Senha inválido' };
}

const Login = () => {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  }
  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = login(data);

    if (token) {
      setToken(token);
      console.log('submit');
      return history.push('/');
    }

    setError(error);
    console.log('erro');
    setData(initialState);
  }

  return (
    <form className="contentForm" onSubmit={onSubmit}>
      <div className="contentLogin">
        <Logo />
        <div className="contentInfo">
          <span className="info">Digite suas credenciais para acessar</span>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={onChange}
          />

          <input
            type="password"
            name="password"
            value={data.password}
            onChange={onChange}
          />
          <button type="submit">Entrar</button>
          <span className="forgotPassword">Esqueci minha senha</span>
        </div>
      </div>
    </form>
  );
};
export default Login;
