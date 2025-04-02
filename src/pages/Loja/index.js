import { Link } from "react-router-dom";

function Loja(){
    return (
        <div>
            <h1> Bem-vindo a loja</h1>
            <span>siga os lins abaixo para ir ao produto</span> <br/><br/>

            <Link to="/Produtos/playstation"> PlayStation 5</Link> <br/><br/>
            <Link to="/Produtos/xbox"> Xbox Series S</Link> <br/><br/>
            <Link to="/Produtos/atari"> Atari</Link> <br/><br/>
            <Link to="/Produtos/nintendo"> Super Nintendo</Link> <br/><br/>
        </div>
    )
};

export default Loja;