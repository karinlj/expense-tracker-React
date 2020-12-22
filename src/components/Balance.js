import React, { useContext } from "react";
import { GlobalContext } from "../contexts/globalState";

const Balance = () => {
  const context = useContext(GlobalContext);
  const transactions = context.transactions;

  //find all the amounts in the transactions-array
  const amounts = transactions.map((transaction) => {
    // console.log("transaction.amount", transaction.amount);
    return transaction.amount;
  });
  // console.log("amounts", amounts);

  //get the total (get the sum)
  // This works fine, but with reduce instead will not mutate our total variable.
  // let total = 0;
  // for (let i = 0; i < amounts.length; i++) {
  //   //increse the total with every amount in the array
  //   total += amounts[i];
  // }
  // total = total.toFixed(2);
  //console.log("total", total);

  //reduce()
  //functional programming
  // will not mutate initialValue variable
  // const initialValue = 0;
  // // reducer method that takes in the accumulator and next item
  // // The accumulator is the value that we end up with
  // const reducer = (accumulator, item) => {
  //   return accumulator + item;
  // };
  // // we give the reduce method our reducer function and our initial value
  // const total = amounts.reduce(reducer, initialValue).toFixed(2);
  // console.log("initialValue", initialValue);
  // console.log("total", total);

  //Traversy's version
  //const total = amounts.reduce((accumulator, item) => (accumulator += item), 0).toFixed(2);

  //const cats = [1, 2, 3];
  // The accumulator is the value that we end up with

  // const initialValue = 5;
  const total = amounts
    .reduce((banan, apple) => {
      return banan + apple;
    })
    // //to 2 decimals
    .toFixed(2);
  console.log("total", total);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </div>
  );
};
export default Balance;
