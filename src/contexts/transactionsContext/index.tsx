import { createContext, ReactNode } from "react";

interface ITransactionsContextProps {
    children: React.ReactNode
}

export interface ITransactionsContext {
    name: string
}

export const TransactionsContext = createContext<ITransactionsContext>({} as ITransactionsContext)


export const TransactionsProvider = ({children}:ITransactionsContextProps) => {

    return( <TransactionsContext.Provider 
    value={{
        name: "luan"
    }}>{children}</TransactionsContext.Provider>)
}


