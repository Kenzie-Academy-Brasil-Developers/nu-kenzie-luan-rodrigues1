import { useContext } from "react"
import { ITransaction, TransactionsContext } from "../../contexts/transactionsContext"
import Card from "../Card"
import noCard from "../../assets/NoCard.png"

const List = () => {

    const {listTransaction, 
        filteredList, 
        filterList, 
        filterOn, 
        setFilterOn} 
        = useContext(TransactionsContext)

    return (
        <section>
            <div>
                <h2>Resumo financeiro</h2>
                <div>
                    <button onClick={() => {return (setFilterOn(false), filterList(""))}}>Todos</button>
                    <button onClick={() => {return (setFilterOn(true), filterList("Entrada"))}}>Entradas</button>
                    <button onClick={() => {return (setFilterOn(true), filterList("Despesa"))}}>Despesas</button>
                </div>
            </div>
            <ul>
                {(!filterOn && listTransaction[0] === undefined) || (filterOn && filteredList[0] === undefined) ?
                <>
                    <li><img src={noCard} alt="card sem valor"/></li>
                    <li><img src={noCard} alt="card sem valor"/></li>
                    <li><img src={noCard} alt="card sem valor"/></li>
                </>
                : 
                !filterOn ? 
                listTransaction.map((el: ITransaction) => <Card infoCard={el} key={el.id}/>)
                :
                filteredList.map((el: ITransaction) => <Card infoCard={el} key={el.id}/>)}
            </ul>
        </section>
    )
}

export default List