import './footer.css'

import { Link } from 'react-router-dom'


import logoPortoBranca from "../../assets/LogoPortoBranca.png"
import logoYoutube from "../../assets/LogoYoutube.png"
import logoInstagram from "../../assets/LogoInstagram.png"
import logoTwitter from "../../assets/LogoTwitter.png"
import logoFacebook from "../../assets/LogoFacebook.png"

export default function Footer() {
  return (
    <>
      <footer>
        <div className='icones'>
            <a href="/">
            <img src={logoPortoBranca}  alt="Logo Porto Branca" className="logoBranca" />
            </a>
            <a href="https://www.youtube.com/porto" target='_blank'>
            <img src={logoYoutube}  alt="Logo YouTube" className="icons" />
            </a>
            <a href="https://www.instagram.com/portoseguro" target='_blank'>
            <img src={logoInstagram}  alt="Logo Instagram" className="icons" />
            </a>
            <a href="https://www.twitter.com/portoseguro" target='_blank'>
            <img src={logoTwitter}  alt="Logo Twitter" className="icons" />
            </a>
            <a href="https://www.facebook.com/portoseguro" target='_blank'>
            <img src={logoFacebook}  alt="Logo Facebook" className="icons" />
            </a>
        </div>
        <Link to="/sobre"><a href=""><p>Sobre</p></a></Link>
        <Link to="/suporte"><a href="/"><p>Fale conosco</p></a></Link>
        <Link to="/integrantes"><a href="/"><p>Integrantes</p></a></Link>
      </footer>
    </>
  );
}
