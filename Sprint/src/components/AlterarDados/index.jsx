import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../MeusDados/meusDados.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object({
    nomeTitular : yup.string()
              .required("O nome do titular do cartão é obrigatório"),
    numCartao : yup.string()
              .required("O número do cartão é obrigatório"),
    dataVal : yup.string()
            .required("O CPF é obrigatório"),
    cvv     : yup.string()
            .required("O cvv é obrigatório"),
    bandeira : yup.string()
            .required("A bandeira é obrigatória"),
}).required();


export default function AlterarDados() {
  
  return (
    <>
    <Header />
      <main className='mainMeusDados'>

        <div className="infosMeusDados">
            <h1 className="tituloMeusDados">Alterar Dados</h1>
        </div>

        <form name="frmDados" action="/areaExclusiva">
            <div className="dados">
                <h3>Dados pessoais:</h3>

                <input type="text" name="txtNomeMD" id="txtNomeMD" placeholder="Nome:"/>
                <br/>

                <input type="number" name="txtRGMD" id="txtRGMD" placeholder="RG:"/>
                <input type="text" name="txtOrgaoEmissorMD" id="txtOrgaoEmissorMD" placeholder="Órgão emissor:"/>
                <br/>

                <input type="text" name="txtFiliaP" id="txtFiliaP" placeholder="Filiação paterna:"/>
                <br/>

                <input type="text" name="txtFiliaM" id="txtFiliaM" placeholder="Filiação materna:"/>
                <br/>

                <input type="email" name="txtEmailMD" id="txtEmailMD" placeholder="Email:"/>
            </div>

            <div className="endereco">
                <h3>Endereço:</h3>

                <input type="number" name="txtCEP" id="txtCEP" placeholder="CEP"/>
                <br/>

                <input type="text" name="txtRua" id="txtRua" placeholder="Rua"/>
                <br/>

                <input type="text" name="txtCidMD" id="txtCidMD" placeholder="Cidade"/>
                <input type="text" name="txtEstMD" id="txtEstMD" placeholder="Estado"/>
                <br/>

                <input type="text" name="txtComplemento" id="txtComplemento" placeholder="Complemento"/>
                <input type="text" name="txtNum" id="txtNum" placeholder="Número"/>
            </div>

            <div className="bikeInfo">
                    <h3>Informações da bike:</h3>
                    <input type="number" name="txtNumSerie" id="txtNumSerie" placeholder="Número da série:"/>
                    <br/>

                    <input type="number" name="txtCodNotaFiscal" id="txtCodNotaFiscal" placeholder="Código da nota fiscal:"/>
                    <br/>
                    
                    <input type="text" name="txtAnoCompra" id="txtAnoCompra" placeholder="Ano de compra:"/>
                    <input type="text" name="txtCor" id="txtCor" placeholder="Cor:"/>
                    <br/>

                    <input type="text" name="txtAcessorio" id="txtAcessorio" placeholder="Acessórios:"/>
                    <br/>

                    <input type="text" name="txtAtividade" id="txtAtividade" placeholder="Atividade/Uso:"/>
                </div>

            <br/><br/>

            <div className="cadastrar">
                <input type="submit" value="Confirmar alteração" className="botaoDados"/>
            </div>
            <div><span id="erro"></span></div>

        </form>

      </main>

    <Footer />
    </>
  );
}
