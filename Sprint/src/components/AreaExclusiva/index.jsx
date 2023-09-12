import { useState } from 'react'
import { Link } from 'react-router-dom'
import './areaExclusiva.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import setaDireita from '../../assets/SetaDireita.png'


export default function AreaExclusiva() {
  return (
    <>
    <Header />
        <main className="mainAreaEx" >
            <section>
                <h1 className="areaExTitulo">Área exclusiva</h1>
                <Link to="/meusDados"><div className="areas"><p className="areaExText">Meus dados</p><img className="seta" src={setaDireita} alt="imagem de uma seta para a direita"/></div></Link>    
                <Link to="/meusSeguros"><div className="areas"><p className="areaExText">Meus seguros</p><img className="seta" src={setaDireita} alt="imagem de uma seta para a direita"/></div></Link> 
                <Link to="/vistoriaOnline"><div className="areas"><p className="areaExText">Vistoria</p><img className="seta" src={setaDireita} alt="imagem de uma seta para a direita"/></div> </Link>      

                <Link to="/novoSeguro"><div className="areas seguro"><p className="texto_seguro">Novo seguro</p><img className="seta" src={setaDireita} alt="imagem de uma seta para a direita"/></div></Link>   

            
            </section>
        </main>
    <Footer />
    </>
  );
}
