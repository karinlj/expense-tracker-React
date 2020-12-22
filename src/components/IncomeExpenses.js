import React, { useContext } from "react";
import { GlobalContext } from "../contexts/globalState";

const IncomeExpenses = () => {
  const context = useContext(GlobalContext);
  const transactions = context.transactions;

  //find all the amounts in the transactions-array
  const amounts = transactions.map((transaction) => {
    return transaction.amount;
  });
  //get incomes
  let income = 0;
  const plusAmounts = amounts.filter((amount) => {
    return amount > 0;
  });
  // console.log("plusAmounts", plusAmounts);

  // for (let i = 0; i < plusAmounts.length; i++) {
  //   //increse for amount
  //   income += plusAmounts[i];
  // }
  // income = income.toFixed(2);
  // console.log("income", income);

  plusAmounts.forEach((amount) => {
    income += amount;
  });
  income = income.toFixed(2);
  //console.log("income", income);

  //Traversy's version
  // const income = amounts
  //   //get anything > 0
  //   .filter((item) => item > 0)
  //   //add all together
  //   .reduce((acc, item) => (acc += item), 0)
  //   .toFixed(2);

  //get expenses
  let expense = 0;
  const minusAmounts = amounts.filter((amount) => {
    return amount < 0;
  });
  //console.log("minusAmounts", minusAmounts);

  minusAmounts.forEach((amount) => {
    expense += amount;
  });
  expense = expense.toFixed(2);
  //console.log("expense", expense);

  // for (let i = 0; i < minusAmounts.length; i++) {
  //   expense += minusAmounts[i];
  // }
  // expense = expense.toFixed(2);

  //Traversy's version
  // const expense = amounts
  //   //get anything < 0
  //   .filter((item) => item < 0)
  //   //add all together
  //   .reduce((acc, item) => (acc += item), 0)
  //   .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          {income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          {expense}
        </p>
      </div>
    </div>
  );
};
export default IncomeExpenses;
