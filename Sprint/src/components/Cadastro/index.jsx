import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Login/login.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import iconePessoa from '../../assets/IconePessoa.png'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object({
    CPF : yup.string().min(11, "O CPF deve ter pelo menos 11 dígitos")
              .required("O CPF do cartão é obrigatório"),
}).required();

export default function Cadastro() {
    const { register, handleSubmit, formState: { errors }, setFocus, setValue } = useForm({ resolver : yupResolver(schema) })
    const [cadastro, setCadastro] = useState({'CPF':''})
    const [listaCadastro, setListaCadastro] = useState([])

    function inserirCadastro(cadastro){
        setListaCadastro([...listaCadastro, cadastro])
        window.location.href = '/meusDados';
    }
  return (
    <>
    <Header />
        <main className='mainCadastro'>
            <section className="section">
                
                <h3 className='subTituloCadastro'>Cadastre-se</h3>
                <a href=""><img className="person" src={iconePessoa} alt="icone de uma pessoa"/></a> 
                <p className="dicaCadastro">Digite seus dados.</p>
                <form name="frmCadastro" action="/meusDados" method="" onSubmit={ handleSubmit(inserirCadastro) }>
                    <div className="pessoaisCadastro">
                        <input type="number" {...register('CPF')} id="txtCPFCadastro" placeholder="CPF:"/>
                        <br />
                        <span className='erro'>{ errors.CPF?.message }</span>
                        <br />
                        <input type="submit" value="Prosseguir" className="cadastrarCadastro"/>
                        <p className="infosLogin">Já possui uma conta?</p>
                        <Link to="/login"><a href="/" className="cadastroLogin">Logue aqui!</a></Link>
                    </div>
                </form>
            </section>
        </main>
    <Footer />
    
    </>
  );
}
