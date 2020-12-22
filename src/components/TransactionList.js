import React, { useContext } from "react";
import { GlobalContext } from "../contexts/globalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const context = useContext(GlobalContext);
  // console.log("context.transactions", context.transactions);
  const transactions = context.transactions;
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {/* loop trough transactions */}
        {transactions.map((transaction) => {
          return <Transaction transaction={transaction} key={transaction.id} />;
        })}
      </ul>
    </div>
  );
};
export default TransactionList;
