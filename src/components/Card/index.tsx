import trash from "../../assets/trash.png"

const Card = ({infoCard}: any) => {
    return (
        <li>
            <h2>{infoCard.description}</h2>
            <span>{infoCard.type}</span>
            <p>{parseFloat(infoCard.value).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</p>
            <button><img src={trash} alt="imagem lixo" /></button>
        </li>
    )
}

export default Card