import { BrowserRouter, Routes, Route } from  "react-router-dom";

import Index from "./pages/index";
import AnalisePage from "./pages/analise";
import AreaExclusivaPage from "./pages/areaExclusiva";
import CadastroPage from "./pages/cadastro";
import LoginPage from "./pages/login";
import MeusDadosPage from "./pages/meusDados";
import MeusSegurosPage from "./pages/meusSeguros";
import MinhaBikePage from "./pages/minhaBike";
import NovoSeguroPage from "./pages/novoSeguro";
import SobrePage from "./pages/sobre";
import SuportePage from "./pages/suporte";
import VistoriaOnlinePage from "./pages/vistoriaOnline";
import IntegrantesPage from "./pages/integrantes";
import AlterarDadosPage from "./pages/alterarDados";
import ConfiraDadosPage from "./pages/confiraDados";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Sprint-PortoSeguro" element={ <Index /> }></Route>
                <Route path="/analise" element={ <AnalisePage /> }></Route>
                <Route path="/areaExclusiva" element={ <AreaExclusivaPage /> }></Route>
                <Route path="/cadastro" element={ <CadastroPage /> }></Route>
                <Route path="/login" element={ <LoginPage /> }></Route>
                <Route path="/meusDados" element={ <MeusDadosPage /> }></Route>
                <Route path="/meusSeguros" element={ <MeusSegurosPage /> }></Route>
                <Route path="/minhaBike" element={ <MinhaBikePage /> }></Route>
                <Route path="/novoSeguro" element={ <NovoSeguroPage /> }></Route>
                <Route path="/sobre" element={ <SobrePage /> }></Route>
                <Route path="/suporte" element={ <SuportePage /> }></Route>
                <Route path="/vistoriaOnline" element={ <VistoriaOnlinePage /> }></Route>
                <Route path="/integrantes" element={ <IntegrantesPage /> }></Route>
                <Route path="/confiraDados" element={ <ConfiraDadosPage /> }></Route>
                <Route path="/alterarDados" element={ <AlterarDadosPage /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes