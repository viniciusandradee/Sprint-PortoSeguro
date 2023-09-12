import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../AreaExclusiva/areaExclusiva.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import setaDireita from '../../assets/SetaDireita.png'


export default function NovoSeguro() {
  return (
    <>
    <Header />
        <main class="mainNovoSeguro">
            <h1 className='areaExTitulo'>Novo seguro</h1>

            <p className="info">Para ser um assegurado, verifique se preencheu todos os dados necessários</p>

            <Link to="/meusDados"><div className="areas"><p className="areaExText">Meus dados</p><img className="seta" src={setaDireita} alt="imagem de uma seta para a direita"/></div></Link>
            <Link to="/minhaBike"><div className="areas"><p className="areaExText">Bike</p><img className="seta" src={setaDireita} alt="imagem de uma seta para a direita"/></div>  </Link>    
            <Link to="/vistoriaOnline"><div className="areas"><p className="areaExText">Vistoria</p><img className="seta" src={setaDireita} alt="imagem de uma seta para a direita"/></div></Link>

            <Link to="/confiraDados"><div className="areas seguro"><p className="texto_seguro">Prosseguir</p><img className="seta" src={setaDireita} alt="imagem de uma seta para a direita"/></div></Link>
                
        </main>
    <Footer />
    </>
  );
}
