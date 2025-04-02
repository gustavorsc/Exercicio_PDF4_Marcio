import { useParams } from "react-router-dom";

function Produtos () {

    const {id} = useParams();
    if(id === 'playstation'){ 
    return(
        <div>
            <h1>Console Playstation 5</h1><br/>
            <h2>R$ 3.999,99</h2><br/>
            <h3>À vista no pix e no boleto (10% off)</h3><br/>
            <img src='https://imgs.casasbahia.com.br/1569856541/2xg.jpg?imwidth=500' alt='Console de PS5'/>
        </div>
    )
};

if (id === 'xbox'){
    return (
        <div>
            <h1>Console Xbox Series S 1 TB, preto</h1><br/>
            <h2>R$ 3.799,99</h2><br/>
            <h3>À vista no pix e no boleto (10% off)</h3><br/>
            <img src='https://img.odcdn.com.br/wp-content/uploads/2023/09/xbox-carbon-black-1.jpg' alt='Console Xbox Series S' />
        </div>
    )
};

if (id === 'atari'){
    return(
        <div>
            <h1>Console Atari</h1><br/>
            <h2>R$ 799,99</h2><br/>
            <h3>Pagamento à vista ou no boleto leva 1 jogo de graça!</h3><br/>
            <img src="https://tm.ibxk.com.br/2023/08/22/22145351693266.jpg" alt='Console Atari'/>
        </div>
    )
};

if( id === 'nintendo'){
    return(
        <div>
            <h1>Console Super Nintendo</h1>
            <h2>R$999,99</h2>
            <h3>Na compra à vista ou no boleto leve junto o jogo Super Mario</h3>
            <img src="https://cdn.awsli.com.br/600x700/17/17021/produto/8797712/72e663cc03.jpg" alt='Console de Super Nintendo'/>
        </div>
    )
}
};

export default Produtos;