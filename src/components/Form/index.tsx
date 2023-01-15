import { useContext } from "react"
import { TransactionsContext } from "../../contexts/transactionsContext"
import TotalMoney from "../TotalMoney"

const Form = () => {
    const {} = useContext(TransactionsContext)

    return (
        <section>
            <form action="">
                <label htmlFor="">Descrição</label>
                <input type="text" placeholder="Digite aqui sua descrição" />
                <span>Ex: Compra de roupas</span>
                <label htmlFor="">Valor</label>
                <input type="text" placeholder="Ex: 100,00" />
                <label htmlFor="">Tipo de valor</label>
                <select name="" id="">
                    <option value="Entrada">Entrada</option>
                    <option value="Entrada">Despesa</option>
                </select>
                <button>Inserir valor</button>
            </form>
            <TotalMoney/>
        </section>
    ) 
}

export default Form