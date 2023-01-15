import { useContext } from "react"
import trash from "../../assets/trash.png"
import { TransactionsContext } from "../../contexts/transactionsContext"

const Card = ({infoCard}: any) => {

    const {deleteTransaction} = useContext(TransactionsContext)
    return (
        <li>
            <h2>{infoCard.description}</h2>
            <span>{infoCard.type}</span>
            <p>{parseFloat(infoCard.value).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</p>
            <button onClick={() => deleteTransaction(infoCard.id)}><img src={trash} alt="imagem lixo" /></button>
        </li>
    )
}

export default Card