import { useState } from 'react'
import { Link } from 'react-router-dom'
import './analise.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import setaDireita from '../../assets/SetaDireita.png'


export default function Analise() {
  return (
    <>
    <Header />
      <main className="mainAnalise">
            <h1 className="tituloAnalise" >Análise</h1>

            <p className="textAnalise">Sem alterações</p>
            <br/>

            <p className="textAnalise">Caso esteja aguardando resultado de uma vistoria, aguarde a atualização da pagina, e verifique o seu email. </p>

        </main>
      <Footer />
    </>
  );
}
