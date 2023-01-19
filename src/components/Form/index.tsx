import { useContext } from "react"
import { TransactionsContext } from "../../contexts/transactionsContext"
import TotalMoney from "../TotalMoney"
import { FormStyle } from "./style"

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
        <FormStyle>
            <div className="containerForm">
                <form className="formAdd" onSubmit={(event) => {return (event.preventDefault(), addTransaction())}} action="">
                    <label className="Body labelFormAdd" htmlFor="">Descrição</label>
                    <input className="inputFomAdd" value={transactionDescription} onChange={(event) => setTransactionDescription(event.target.value)} type="text" placeholder="Digite aqui sua descrição" />
                    <span>Ex: Compra de roupas</span>
                    <div>
                        <div>
                            <label className="Body labelFormAdd" htmlFor="">Valor</label>
                            <input className="inputFomAdd" value={transactionValue} onChange={(event) => setTransactionValue(event.target.value)} type="text" placeholder="Ex: 100,00" />
                        </div>
                        <div>
                            <label className="Body labelFormAdd" htmlFor="">Tipo de valor</label>
                            <select className="inputFomAdd" value={transactionType} onChange={(event) => setTransactionType(event.target.value)} name="" id="">
                                <option value="Entrada">Entrada</option>
                                <option value="Despesa">Despesa</option>
                            </select>
                        </div>
                    </div>
                    <button>Inserir valor</button>
                </form>
            </div>
            <TotalMoney/>
        </FormStyle>
    ) 
}

export default Form