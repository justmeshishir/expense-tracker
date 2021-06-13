import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc +=item), 0).toFixed(2);

    const sign = total < 0 ? '-' : (total == 0 ? '' : '+')
    return (
        <>
            <h4>Your Balance</h4>
            <h1 style={{color: total > 0 ? '#efa62d' : '#000'}}>{sign}${Math.abs(total)}</h1>
        </>
    )
}