import React from 'react'
import Logo from '../components/Logo'
import  '../styles/Login.css'
const Login = () => {
  return (
    <form className="contentForm">
      <div className="contentLogin">
        <Logo />
        <div className="contentInfo">
          <span className="info">Digite suas credenciais para acessar</span>
          <input type="email" name="" id=""  />
          <input type="password" name="" id="" />
          <input type="submit" value="Entrar"/>
          <span className="forgotPassword">Esqueci minha senha</span>
        </div>
      </div>
    </form>
  )
}
export default Login;