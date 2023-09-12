import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../MeusDados/meusDados.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function MeusSeguros() {
  return (
    <>
    <Header />
      <main className='mainMeusSeguros'>

        <div className="infosMeusDados">
            <h1 className='tituloMeusDados'>Meus seguros</h1>
        </div>

        <form name="frmSeguros" action="">
            <div className="dados">

                <input type="text" name="txtSituacao" id="txtSituacao" placeholder="Situação:"/>
                <br/>

                <input type="number" name="txtNumeracao" id="txtNumeracao" placeholder="Numeração da apólice:"/>
                <br/>

                <input type="text" name="txtPagamento" id="txtPagamento" placeholder="Forma de pagamento:"/>
            </div>

            <div className="bikeAssegurada">
                <h3>Informações da bike assegurada:</h3>
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

            <div className="endereco">
                <h3>Endereço do seguro:</h3>

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

        </form>

      </main>

    <Footer />
    </>
  );
}
