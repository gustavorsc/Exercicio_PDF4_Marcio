import { Link } from "react-router-dom";

function Error () {
    return(
        <div>
            <h2>Ops, parece que a pagina que você esta acessando não existe!</h2>
            <br/>

            <span>Encontramos as seguintes paginas</span><br/>
            <Link to="/">Home</Link><br/>
            <Link to="/Sobre">Sobre</Link><br/>
            <Link to="/Contato">Contato</Link>
        </div>
    )
};

export default Error;