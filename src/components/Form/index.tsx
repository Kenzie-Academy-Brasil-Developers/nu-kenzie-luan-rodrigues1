import { useContext } from "react"
import { TransactionsContext } from "../../contexts/transactionsContext"
import TotalMoney from "../TotalMoney"

const Form = () => {
    const {transactionDescription, 
        setTransactionDescription, 
        transactionValue, 
        setTransactionValue, 
        transactionType, 
        setTransactionType, 
        addTransaction} 
        = useContext(TransactionsContext)

    return (
        <section>
            <form onSubmit={(event) => {return (event.preventDefault(), addTransaction())}} action="">
                <label htmlFor="">Descrição</label>
                <input value={transactionDescription} onChange={(event) => setTransactionDescription(event.target.value)} type="text" placeholder="Digite aqui sua descrição" />
                <span>Ex: Compra de roupas</span>
                <label htmlFor="">Valor</label>
                <input value={transactionValue} onChange={(event) => setTransactionValue(event.target.value)} type="text" placeholder="Ex: 100,00" />
                <label htmlFor="">Tipo de valor</label>
                <select value={transactionType} onChange={(event) => setTransactionType(event.target.value)} name="" id="">
                    <option value="Entrada">Entrada</option>
                    <option value="Despesa">Despesa</option>
                </select>
                <button>Inserir valor</button>
            </form>
            <TotalMoney/>
        </section>
    ) 
}

export default Form