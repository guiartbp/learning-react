import React from 'react'
import  '../styles/Login.css'
const Login = () => {
  return (
    <form className="contentForm">
      <div className="contentLogin">
        <div className="contentLogo">
          <img src="https://doy2mn9upadnk.cloudfront.net/uploads/default/original/3X/9/c/9cb8db10f91b9c2b386f92a0629b290b114102e9.png" alt="logo" className="logo" />
        </div>
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