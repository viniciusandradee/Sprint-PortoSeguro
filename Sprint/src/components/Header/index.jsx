import React from 'react';
import { Link } from 'react-router-dom'
import './header.css'
import logoPortoAzul from "../../assets/LogoPortoAzul.png"
import userIcon from "../../assets/UserIcon.png"

export default function Header() {
  return (  
    <>
      <header>
        <nav>
          <Link to="/"><img src={logoPortoAzul}  className="logo" alt="Logo Porto Seguro azul" /></Link>
          <Link to="/cadastro"><img className="user" src={userIcon} alt="icone de perfil que redireciona para o cadastro ou login" /></Link>
        </nav>
        
      </header>
    </>
  );
}
