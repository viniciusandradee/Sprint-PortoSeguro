import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import bannerBike from '../../assets/BannerBike.png'
import hardBike from '../../assets/HardBike.png'
import sportBike from '../../assets/SportBike.png'
import hobbyBike from '../../assets/HobbyBike.png'

import bannerLarge from '../../assets/BannerLarge.png'
import bike1 from '../../assets/Bike1.png'
import bike2 from '../../assets/Bike2.png'
import bike3 from '../../assets/Bike3.png'

export default function Index() {
  return (
    <>
    <Header/>
        <main className='mainIndex'>
            <section className='smallBanner'>
              
              <img className='bikeBanner' src={bannerBike} alt="Ciclista pedalando em uma estrada"/>
              <div className="centralizar">
                <h1>Seguro Bike da Porto Seguro</h1>
                <p>Uma solução completa que oferece proteção e serviços para você se aventurar sem medo</p>
              </div>
            </section>

            <section className='largeBanner'>
              <img className='bikeBanner' src={bannerLarge} alt="Ciclista pedalando em uma estrada"/>
              <div className="centralizar">
                <h1>Seguro Bike da Porto Seguro</h1>
                <p>Uma solução completa que oferece proteção e serviços para você se aventurar sem medo</p>
              </div>
            </section>


            <section className='smallService'>
                <div className="centralizar">
                  <h3>Independente da sua necessidade conte com a Porto Seguro Bike</h3>
                </div>

                <img className='bikes' src={hardBike} alt="Imagem de um praticante de esportes radicais com bikes"/>
                <img className='bikes' src={sportBike} alt="Ciclista que pratica esporte como corrida na bike"/>
                <img className='bikes' src={hobbyBike} alt="Homem comum pedalando sua bicicleta"/>


                <div className="centralizar">
                  <Link to="/cadastro"><input className='botaoIndex' type="submit" value="Faça o seu seguro já!" /></Link>
                </div>
            </section>

            <section className='largeService'>
                <div className="centralizar">
                  <h3>Independente da sua necessidade conte com a Porto Seguro Bike</h3>
                </div>


                <div className="bicicletas">
                  <img className='bike1' src={bike1} alt="Imagem de um praticante de esportes radicais com bikes"/>

                  <img className='bikes' src={bike2} alt="Ciclista que pratica esporte como corrida na bike"/>

                  <img className='bikes' src={bike3} alt="Homem comum pedalando sua bicicleta"/>
                </div>

                <div className="centralizar">
                  <Link to="/cadastro"><input className='botaoIndex' type="submit" value="Faça o seu seguro já!" /></Link>
                </div>

            </section>


        </main>
    <Footer/>
    </>
  );
}
