import { useState } from 'react'
import { Link } from 'react-router-dom'
import './meusDados.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object({
    nome : yup.string()
              .required("O nome é obrigatório"),
    email : yup.string()
              .required("O email é obrigatório"),
    senha : yup.string()
            .required("A senha é obrigatória"),
    confSenha     : yup.string()
            .required("A confirmação de senha é obrigatória"),
    RG : yup.string()
            .required("O RG é obrigatória"),
    OE : yup.string()
            .required("O Orgão emissor é obrigatório"),
    filiaP : yup.string()
            .required("A filiação paterna é obrigatória"),
    filiaM : yup.string()
            .required("A filiação materna é obrigatória"),
    cep : yup.string()
            .required("O CEP  é obrigatório"),
    rua : yup.string()
            .required("A rua é obrigatória"),
    cidade : yup.string()
            .required("A cidade é obrigatória"),
    estado : yup.string()
            .required("O estado é obrigatório"),
    complemento : yup.string()
            .required("O complemento é obrigatório"),
    numero : yup.string()
            .required("O número é obrigatório"),
            
}).required();


export default function MeusDados() {
  const { register, handleSubmit, formState: { errors }, setFocus, setValue } = useForm({ resolver : yupResolver(schema) })
  const [dados, setDados] = useState({'nome':'', 'senha':'', 'confSenha':'','RG':'', 'OE':'','filiaP':'', 'filiaM':'', 'cep':'', 'rua':'','cidade':'','estado':'','complemento':'','numero':''})
  const [listaDados, setListaDados] = useState([])

  function inserirDados(dados){
      setListaDados([...listaDados, dados])
      window.location.href = '/areaExclusiva';
  }
  return (
    <>
    <Header />
      <main className='mainMeusDados'>

        <div className="infosMeusDados">
            <h1 className="tituloMeusDados">Meus dados</h1>
        </div>

        <form name="frmDados" action="/areaExclusiva" onSubmit={ handleSubmit(inserirDados)}>
            <div className="dados">
                <h3>Dados pessoais:</h3>

                <input type="text" {...register('nome')} id="txtNomeMD" placeholder="Nome:"/>
                <br/>
                <span className='erro'>{ errors.nome?.message }</span>
                <br />

                <input type="email" {...register('email')} id="txtEmailMD" placeholder="Email:"/>
                <br/>
                <span className='erro'>{ errors.email?.message }</span>
                <br />

                <input type="password" {...register('senha')} id="txtSenha" placeholder="Senha:"/>
                <input type="password" {...register('confSenha')} id="txtConfSenha" placeholder="Confirmar senha:"/>
                <br />
                <span className='erro'>{ errors.senha?.message }</span>
                <br />
                <span className='erro'>{ errors.confSenha?.message }</span>
                <br />

                <input type="number" {...register('RG')} id="txtRGMD" placeholder="RG:"/>
                <input type="text" {...register('OE')} id="txtOrgaoEmissorMD" placeholder="Órgão emissor:"/>
                <br/>
                <span className='erro'>{ errors.RG?.message }</span>
                <br />
                <span className='erro'>{ errors.OE?.message }</span>
                <br />

                <input type="text" {...register('filiaP')} id="txtFiliaP" placeholder="Filiação paterna:"/>
                <br/>
                <span className='erro'>{ errors.filiaP?.message }</span>
                <br />

                <input type="text" {...register('filiaM')} id="txtFiliaM" placeholder="Filiação materna:"/>
                <br/>
                <span className='erro'>{ errors.filiaM?.message }</span>
                <br />
            </div>

            <div className="endereco">
                <h3>Endereço:</h3>

                <input type="number" {...register('cep')} id="txtCEP" placeholder="CEP"/>
                <br/>
                <span className='erro'>{ errors.cep?.message }</span>
                <br />

                <input type="text" {...register('rua')} id="txtRua" placeholder="Rua"/>
                <br/>
                <span className='erro'>{ errors.rua?.message }</span>
                <br />

                <input type="text" {...register('cidade')} id="txtCidMD" placeholder="Cidade"/>
                <input type="text" {...register('estado')} id="txtEstMD" placeholder="Estado"/>
                <br/>
                <span className='erro'>{ errors.cidade?.message }</span>
                <br />
                <span className='erro'>{ errors.estado?.message }</span>
                <br />

                <input type="text" {...register('complemento')} id="txtComplemento" placeholder="Complemento"/>
                <input type="text" {...register('numero')} id="txtNum" placeholder="Número"/>
                <br />
                <span className='erro'>{ errors.complemento?.message }</span>
                <br />
                <span className='erro'>{ errors.numero?.message }</span>
                <br />
            </div>

            <br/><br/>

            <div className="cadastrar">
                <input type="submit" value="cadastrar dados" className="botaoDados"/>
            </div>
        </form>

      </main>

    <Footer />
    </>
  );
}
