import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Analise/analise.css'
import '../MeusDados/meusDados.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import setaDireita from '../../assets/SetaDireita.png'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object({
    numSerie : yup.string()
              .required("O número de série é obrigatório"),
    codNotaFiscal : yup.string()
              .required("O código da nota fiscal é obrigatório"),
    anoCompra : yup.string()
            .required("O ano da compra é obrigatório"),
    cor     : yup.string()
            .required("A cor é obrigatória"),

    atividade : yup.string()
            .required("A bandeira é obrigatória")
}).required();


export default function VistoriaOnline() {
    const { register, handleSubmit, formState: { errors }, setFocus, setValue } = useForm({ resolver : yupResolver(schema) })
    const [bike, setBike] = useState({'numSerie':'', 'codNotaFiscal':'', 'anoCompra':'','cor':'','atividade':''})
    const [listaBike, setListaBike] = useState([])
  
    function inserirBike(bike){
        setListaBike([...listaBike, bike])
        window.location.href = '/analise';
    }
  return (
    <>
    <Header/>
        <main className="mainVistoria">

            <h1 className='tituloAnalise'>Vistoria online</h1>

            <p className="textAnalise textForte">Confira as informações da bike e prossiga</p>
            <br/>
            <p className="textAnalise">Lembre-se, para a vistoria é necessário tirar a foto no momento, de preferencia em um ambiente com boa iluminação.</p>
            <br/>
            <p className="textAnalise">Caso você não conclua o processo de vistoria, o processo realizado será desfeito e você terá que iniciar novamente.</p>



            <form name="frmVistoria" action="/analise" onSubmit={ handleSubmit(inserirBike)}>

            <div className="bikeInfo">
                    <h3>Informações:</h3>
                    <input type="number" {...register('numSerie')} id="txtNumSerie" placeholder="Número da série:"/>
                    <br/>
                    <span className='erro'>{ errors.numSerie?.message }</span>
                    <br />

                    <input type="number" {...register('codNotaFiscal')} id="txtCodNotaFiscal" placeholder="Código da nota fiscal:"/>
                    <br/>
                    <span className='erro'>{ errors.codNotaFiscal?.message }</span>
                    <br />

                    <input type="text" {...register('anoCompra')} id="txtAnoCompra" placeholder="Ano de compra:"/>
                    <input type="text" {...register('cor')} id="txtCor" placeholder="Cor:"/>
                    <br/>
                    <span className='erro'>{ errors.anoCompra?.message }</span>
                    <br />
                    <span className='erro'>{ errors.cor?.message }</span>
                    <br />
                    <input type="text" {...register('acessorio')} id="txtAcessorio" placeholder="Acessórios:"/>
                    <br/>
                    <span className='erro'>{ errors.acessorio?.message }</span>
                    <br />
                    <input type="text" {...register('atividade')} id="txtAtividade" placeholder="Atividade/Uso:"/>
                    <span className='erro'>{ errors.atividade?.message }</span>
                </div>
                <br/><br/>
                    <div className="botao">
                        <input type="submit" value="Vistoria Online" className='vistoria' />
                        <img className="seta" src={setaDireita} alt="imagem de uma seta para a direita"/>
                    </div>
            </form>

        </main>
    <Footer />
    </>
  );
}
