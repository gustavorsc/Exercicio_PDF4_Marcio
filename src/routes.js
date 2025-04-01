import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sobre from "./pages/Sobre";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Error from "./pages/Error";

import Header from "./components/Header";

//configurando componente de roteamento
function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Sobre" element={<Sobre/>}/>
                    <Route path="/Contato" element={<Contato/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
        </BrowserRouter>
    )
};

export default RoutesApp;