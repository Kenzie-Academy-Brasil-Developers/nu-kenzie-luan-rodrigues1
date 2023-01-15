import { createContext, useEffect, useState } from "react";

interface ITransactionsContextProps {
    children: React.ReactNode
}
export interface ITransactionsContext {
    transactionDescription: string
    setTransactionDescription: React.Dispatch<React.SetStateAction<string>>
    transactionValue: string
    setTransactionValue: React.Dispatch<React.SetStateAction<string>>
    transactionType: string
    setTransactionType: React.Dispatch<React.SetStateAction<string>>
    listTransaction: ITransaction[]
    setListTransaction: React.Dispatch<React.SetStateAction<ITransaction[]>>
    addTransaction: () => void
    totalTransaction: number
    setTotalTransaction: React.Dispatch<React.SetStateAction<number>>
    filteredList: ITransaction[]
    filterList: (typeFilter: string) => void
    filterOn: boolean
    setFilterOn: React.Dispatch<React.SetStateAction<boolean>>
    filterType: string
}

export interface ITransaction {
    description: string;
    value: string;
    type: string;
    id: number
}

export const TransactionsContext = createContext<ITransactionsContext>({} as ITransactionsContext)


export const TransactionsProvider = ({children}:ITransactionsContextProps) => {

    const [transactionDescription, setTransactionDescription] = useState<string>("")
    const [transactionValue, setTransactionValue] = useState<string>("")
    const [transactionType, setTransactionType] = useState<string>("Entrada")
    const [listTransaction, setListTransaction] = useState<ITransaction[]>([])
    const [totalTransaction, setTotalTransaction] = useState<number>(0)
    const [filteredList, setFilteredList] = useState<ITransaction[]>([])
    const [filterOn, setFilterOn] = useState<boolean>(false)
    const [filterType, setFilterType] = useState<string>("")

    const addTransaction = () => {

        const newTransaction = {
            description: transactionDescription,
            value: transactionValue,
            type: transactionType,
            id: new Date().getTime()
        }

        return setListTransaction([...listTransaction, newTransaction])
    }

    const filterList = (typeFilter: string) => {
        setFilterType(typeFilter)
        const resultFilter = listTransaction.filter(el => el.type === typeFilter)

        return (setFilteredList(resultFilter), setFilterType(typeFilter))
    }

    useEffect(() => {
        const expenseFilter = listTransaction.filter(element => element.type === "Despesa").reduce((previous, later) => {
            return parseFloat(later.value) + previous
        }, 0)

        const EntriesFilter = listTransaction.filter(element => element.type === "Entrada").reduce((previous, later) => {
            return parseFloat(later.value) + previous
        }, 0)

        const totalBalance = EntriesFilter - expenseFilter

        
        return setTotalTransaction(totalBalance)

    }, [listTransaction])

    return( <TransactionsContext.Provider 
    value={{
        transactionDescription,
        setTransactionDescription,
        transactionValue,
        setTransactionValue,
        transactionType,
        setTransactionType,
        listTransaction,
        setListTransaction,
        addTransaction,
        totalTransaction,
        setTotalTransaction,
        filteredList,
        filterList,
        filterOn,
        setFilterOn,
        filterType
    }}>{children}</TransactionsContext.Provider>)
}


