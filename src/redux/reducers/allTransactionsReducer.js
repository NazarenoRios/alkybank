import { EDIT_CONCEPT } from "../actions/editConcept";
import { ALL_TRANSACTIONS } from "../actions/getTransactions";

const initialState = {
  transactions: [],
  isLoading : true
};

export default function allTransactionsReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
        isLoading: false
      };

      case "IS_LOADING":
        return {
          ...state,
          isLoading: true
        };
        
      case EDIT_CONCEPT:
        return {
          ...state,
          isLoading:false,
          transactions: state.transactions.map((transaction) => {
            if (transaction.id === action.payload.id) {
              return action.payload;
            } else {
              return transaction;
            }
          }),
        };
    default:
      return state;
  }
}
