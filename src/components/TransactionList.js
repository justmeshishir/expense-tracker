import React, { useContext } from "react";
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    
    return (
        <>
        { transactions.length > 0 && 
            <div>
                <h3>History</h3>
                <ul className="list">
                    {transactions.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction}/>
                    ))}
                </ul>
            </div>
        }
        </>
    )
}