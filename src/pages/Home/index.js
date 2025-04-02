import { Link } from "react-router-dom";

function Home(){
    return (
        <div>
            <h1> Bem-vindo a pagina Home</h1>
            <span>nossa primeira aplicação em REACT</span> <br/><br/>

            <Link to="/Sobre"> Sobre</Link> <br/><br/>
            <Link to="/Contato">Contato</Link> <br/><br/> 
            <Link to="/Loja">Loja</Link>
        </div>
    )
};

export default Home;