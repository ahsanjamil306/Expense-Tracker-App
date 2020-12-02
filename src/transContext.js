import React, {createContext, useReducer} from 'react';
import TransactionReducer from './transReducer';


const initialtransactions = [

    { amount: 100, desc: "Cash" },
    { amount: -50, desc: "coldrink" },
    { amount: 100, desc: "Camera" }
]

export const TransactionContext = createContext(initialtransactions);



export const TransactionProvider = ({children})=> {

    let [state, dispatch] = useReducer(TransactionReducer ,initialtransactions)

   function addTransaction(transObj){

    dispatch({
        type: "ADD_TRANSACTION",
        payload: {
            amount: transObj.amount,
             desc:  transObj.desc
        },
    })
   }

   return (
       <TransactionContext.Provider value={{
           transactions: state,
           addTransaction
           
       }}>
           {children}
       </TransactionContext.Provider>
   )
}