import React, { useState, useContext } from "react";
import { GlobalContext } from "../contexts/globalState";

const AddTransaction = () => {
  //local state
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  //consume context
  const context = useContext(GlobalContext);
  const addTransaction = context.addTransaction;
  // console.log("addTransaction", addTransaction);

  //add
  const handleSubmit = (e) => {
    e.preventDefault();

    //new object
    const newTransaction = {
      id: Math.random(),
      text: text,
      amount: parseInt(amount),
      //amount: +amount,
    };
    //console.log("newTransaction", newTransaction);
    //console.log("newTransaction.amount-add", newTransaction.amount);

    addTransaction(newTransaction);
    // setText("");
    // setAmount(0);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            //setText-func
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            //setAmount-func
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
export default AddTransaction;
