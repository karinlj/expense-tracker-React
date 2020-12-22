import React, { useContext } from "react";
import { GlobalContext } from "../contexts/globalState";

const Transaction = (props) => {
  //console.log("props", props);
  const { transaction } = props;

  //consume context
  const context = useContext(GlobalContext);
  const deleteTransaction = context.deleteTransaction;

  //sätter - eller + före summan
  const sign = transaction.amount < 0 ? "-" : "+";

  //delete
  const handleClick = (id) => {
    console.log("id", id);
    deleteTransaction(id);
  };

  return (
    //  //sätter röd eller grön färg på itemet
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {/* Math.abs() = absolute number = always + */}
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn" onClick={() => handleClick(transaction.id)}>
        x
      </button>
      {/* <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>
        x
      </button> */}
    </li>
  );
};
export default Transaction;
