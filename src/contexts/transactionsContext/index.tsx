import { createContext } from "react";

interface ITransactionsContextProps {
    children: React.ReactNode
}
export interface ITransaction {
    description: string;
    value: string;
    type: string;
    id: number
}
export interface ITransactionsContext {
    
}

export const TransactionsContext = createContext<ITransactionsContext>({} as ITransactionsContext)


export const TransactionsProvider = ({children}:ITransactionsContextProps) => {

    return( <TransactionsContext.Provider 
    value={{
        
    }}>{children}</TransactionsContext.Provider>)
}


