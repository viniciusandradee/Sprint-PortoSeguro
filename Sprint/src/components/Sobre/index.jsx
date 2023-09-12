import { useState } from 'react'
import { Link } from 'react-router-dom'
import './sobre.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'


export default function Sobre() {
  return (
    <>
    <Header />
        <main className="mainSobre">
            <h1 className="tituloSobre" >Sobre</h1>
            <p className="textoSobre ">Com o Seguro Bike você tem solução completa que oferece proteção e serviços para você se aventurar sem medo.</p>
            <br/>
            <p className="textoSobre ">Contrate agora, realize sua vistoria de acordo com a sua disponibilidade, sem agendamento e do seu próprio dispositivo.</p>
            
        </main>
    <Footer />
    </>
  );
}
