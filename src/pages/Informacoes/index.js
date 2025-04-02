import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import GoogleMap from "./mapa";

function Informacoes () {

    const {id} = useParams();

    if(id === 'contato'){
    return (
        <div>
            <h1> Pagina de contatos</h1>
            <br/><br/>

            <Link to="/">Pagina Home</Link><br/>
            <h2>Nosso Endereço</h2>
            <GoogleMap/>
        </div>
    )
}
};

export default Informacoes;