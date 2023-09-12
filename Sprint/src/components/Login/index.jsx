import { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import out from '../../assets/Out.png'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object({
    email : yup.string()
              .required("O email é obrigatório"),
    senha : yup.string()
              .required("A senha é obrigatório"),
}).required();

export default function Login() {
    const { register, handleSubmit, formState: { errors }, setFocus, setValue } = useForm({ resolver : yupResolver(schema) })
    const [login, setLogin] = useState({'email':'', 'senha':''})
    const [listaLogin, setListaLogin] = useState([])

    function inserirLogin(login){
        setListaLogin([...listaLogin, login])
        window.location.href = '/areaExclusiva';
    }
  return (
    <>
    <Header />
        <main className="mainLogin mainCadastro">
            <section className="section">
                <h3 className='subTituloLogin'>Login</h3>
                <Link to="/"><img className="out" src={out} alt="imagem de um simbolo para sair da pagina"/></Link>
                <p className="dicaLogin">Digite seu email e senha.</p>
                <form name="frmLogin" action="/areaExclusiva" method="" onSubmit={ handleSubmit(inserirLogin) }>
                    <div className="pessoaisLogin">
                        <input type="email" {...register('email')} id="txtEmailLogin" placeholder="Email:"/>
                        <br/>
                        <input type="password" {...register('senha')} id="txtPwd" placeholder="Senha:"/>
                        <br />
                        <span className='erro'>{ errors.email?.message }</span>
                        <br />
                        <span className='erro'>{ errors.senha?.message }</span>
                        <br />
                        <input type="submit" value="Entrar" className="loginLogin"/> 
                        <p className="infosLogin">Não tem cadastro?</p>
                        <Link to="/cadastro"><a href="/" className="cadastroLogin">Cadastre-se aqui!</a></Link>
                    </div>
                    <div><span id="erro"></span></div>
                </form>
            </section>
        </main>
    <Footer />
    </>
  );
}
