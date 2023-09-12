import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../MeusDados/meusDados.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
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


export default function MinhaBike() {
    const { register, handleSubmit, formState: { errors }, setFocus, setValue } = useForm({ resolver : yupResolver(schema) })
    const [bile, setBike] = useState({'numSerie':'', 'codNotaFiscal':'', 'anoCompra':'','cor':'','atividade':''})
    const [listaBike, setListaBike] = useState([])
  
    function inserirBike(bike){
        setListaBike([...listaBike, bike])
        alert("Bike cadastrada com sucesso")
        window.location.href = '/novoSeguro';
    }
  return (
    <>

    <Header />
        <main className='mainMinhaBike'>

            <div className="infosMeusDados">
                <h1 className='tituloMeusDados'>Minha bike</h1>
            </div>

            <form name="frmBike" action="/novoSeguro" onSubmit={ handleSubmit(inserirBike)}>

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

                <div className="cadastrar">
                    <input type="submit" value="Cadastrar Bike" className="botaoDados"/> 
                </div>

            </form>

        </main>
    <Footer />
    </>
  );
}
