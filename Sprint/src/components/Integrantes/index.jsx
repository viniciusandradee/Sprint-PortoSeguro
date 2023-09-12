import { useState } from 'react'
import { Link } from 'react-router-dom'
import './integrantes.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'



export default function Integrantes() {
  return (
    <>
    <Header />
        <main className="mainIntegrantes">
            <p className='textIntegrantes'>
            Leonardo Bruno de Sousa - RM 552408
            <br/>
            Marco Antônio Araujo - RM 550128
            <br/>
            Samara de Oliveira Moreira - RM 552302
            <br/>
            Vinícius Monteiro Manfrin - RM 552293
            <br/>
            Vinicius Andrade Castro Lopes - RM 99343
            </p>
            <p className='textIntegrantes'>
              <Link target='_blank' to="https://github.com/viniciusandradee/Sprint-PortoSeguro">https://github.com/viniciusandradee/Sprint-PortoSeguro</Link>
            </p>
        </main>
    <Footer />
    </>
  );
}
