import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

// create context
export const GlobalContext = createContext(initialState);

//provider component
const GlobalProvider = (props) => {
  const [state, dispach] = useReducer(AppReducer, initialState);

  //actions that make calls to the reducer
  const deleteTransaction = (id) => {
    //dispach an object/action with a type and a payload to the reducer
    dispach({
      type: "DELETE_TRANSACTION",
      //data that we need to send
      payload: id,
    });
  };
  const addTransaction = (transaction) => {
    //dispach an object/action with a type and a payload to the reducer
    dispach({
      type: "ADD_TRANSACTION",
      //data that we need to send
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {/* whatever we wrap */}
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
