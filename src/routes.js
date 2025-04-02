import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sobre from "./pages/Sobre";
import Home from "./pages/Home";
import Informacoes from "./pages/Informacoes";
import Error from "./pages/Error";
import Produtos from "./pages/Produtos";
import Loja from "./pages/Loja";

import Header from "./components/Header";

//configurando componente de roteamento
function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Sobre" element={<Sobre/>}/>
                    <Route path="/Informacoes/:id" element={<Informacoes/>}/>
                    <Route path="*" element={<Error/>}/>
                    <Route path="/Produtos/:id" element={<Produtos/>}/>
                    <Route path="/Contato" element={<Informacoes/>}/>
                    <Route path="/Loja" element={<Loja/>}/>
                </Routes>
        </BrowserRouter>
    )
};

export default RoutesApp;


