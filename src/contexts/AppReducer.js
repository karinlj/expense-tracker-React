//reducer = a away to change the state and send it to the components
const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        //send current state
        // action.payload = id
        ...state,
        transactions: state.transactions.filter((transaction) => {
          return transaction.id !== action.payload;
        }),
      };
    case "ADD_TRANSACTION":
      return {
        // action.payload = transaction
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    default:
      return state;
  }
};
export default AppReducer;
