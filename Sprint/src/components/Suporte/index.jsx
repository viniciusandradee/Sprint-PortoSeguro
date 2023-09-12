import { useState } from 'react'
import { Link } from 'react-router-dom'
import './suporte.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object({
    motivo : yup.string()
              .required("O motivo é obrigatório"),
    nome : yup.string()
              .required("O nome é obrigatório"),
    cpf : yup.string()
            .required("O CPF é obrigatório"),
    tel     : yup.string()
            .required("O telefone é obrigatório"),
    email : yup.string()
            .required("O email é obrigatório"),
    cidade : yup.string()
            .required("A cidade é obrigatória"),
    estado : yup.string()
            .required("O estado é obrigatório"),
    msg : yup.string()
            .required("A mensagem é obrigatória")
}).required();


export default function Suporte() {
    const { register, handleSubmit, formState: { errors }, setFocus, setValue } = useForm({ resolver : yupResolver(schema) })
    const [suporte, setSuporte] = useState({'motivo':'', 'nome':'','cpf':'', 'tel':'', 'email':'', 'cidade':'', 'estado':'', 'msg':''})
    const [listaSuporte, setListaSuporte] = useState([])

    function inserirSuporte(suporte){
        setListaSuporte([...listaSuporte, suporte])
        alert("Enviado com sucesso")
        window.location.href = '/suporte';
    }
  return (
    <>
    <Header />
        <main className="suporte">

            <h1 className="tituloSuporte">Fale Conosco</h1>
            <p className="textSuporte">Acesse nossos canais de ouvidoria</p>

            <p className="infosSuporte">4090-****</p>
            <p className="text_infosSuporte">Para o estado de São Paulo.</p>
            <p className="infosSuporte">0800.000.0000</p>
            <p className="text_infosSuporte">Para as demais regiões.</p>

            <p className="outras_infosSuporte">Para outras informações, sugestões, dúvidas ou suporte para acesso, deixe sua mensagem no formulário abaixo:</p>

            <form name="frmSuporte" method="" onSubmit={ handleSubmit(inserirSuporte)}>

                <div className="pessoaisSuporte">
                    <input type="text" {...register('motivo')} id="txtMotivo" placeholder="Motivo:"/>
                    <br/>
                    <span className='erro'>{ errors.motivo?.message }</span>
                    <br />

                    <input type="text" {...register('nome')} id="txtNome" placeholder="Nome completo:"/>
                    <br/>
                    <span className='erro'>{ errors.nome?.message }</span>
                    <br />

                    <input type="number" {...register('cpf')} id="txtCPFSup" placeholder="CPF:"/>
                    <input type="number" {...register('tel')} id="txtTelSup" placeholder="Telefone:"/>
                    <br/>
                    <span className='erro'>{ errors.cpf?.message }</span>
                    <br />
                    <span className='erro'>{ errors.tel?.message }</span>
                    <br />

                    <input type="email" {...register('email')} id="txtEmail" placeholder="Email:"/>
                    <br/>
                    <span className='erro'>{ errors.email?.message }</span>
                    <br />

                    <input type="text" {...register('cidade')} id="txtCid" placeholder="Cidade:"/>
                    <input type="text" {...register('estado')} id="txtEst" placeholder="Estado:"/>
                    <br/>
                    <span className='erro'>{ errors.cidade?.message }</span>
                    <br />
                    <span className='erro'>{ errors.estado?.message }</span>
                    <br />

                    <input type="text" {...register('msg')} id="txtMsg" placeholder="Mensagem"/>
                    <br />
                    <span className='erro'>{ errors.msg?.message }</span>

                    <div className="confirmarSuporte">
                        <input type="submit" value="Enviar" className="botaoConfSuporte"/>
                    </div>
                    <br/>
                </div>
            </form>

        </main>
    <Footer />
    </>
  );
}
