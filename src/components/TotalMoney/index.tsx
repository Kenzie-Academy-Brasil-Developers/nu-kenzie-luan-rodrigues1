import { useContext } from "react"
import { TransactionsContext } from "../../contexts/transactionsContext"

const TotalMoney = () => {

    const {totalTransaction} = useContext(TransactionsContext)

    return (
        <div>
            <div>
                <h2>Valor total:</h2>
                <p>{totalTransaction.toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</p>
            </div>
            <h3>O valor se refere ao saldo</h3>
        </div>
    )
}

export default TotalMoney