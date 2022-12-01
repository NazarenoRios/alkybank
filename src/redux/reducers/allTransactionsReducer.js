import { ALL_TRANSACTIONS } from "../actions/getTransactions";

const initialState = {
  transactions: [],
};

export default function allTransactionsReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_TRANSACTIONS:
      console.log(action.payload, "hola");
      return {
        ...state,
        transactions: action.payload,
      };
    default:
      return state;
  }
}
