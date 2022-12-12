import { PAYMENT_SUCCESS } from "../actions/paymentAction"

const initialState = {
  isLoading: false,
};

export default function topupReducer(state = initialState, action) {
  switch (action.type) {
    case PAYMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data:action.payload
      };
    case "PAYMENT_LOADING":
      return {
        ...state,
        isLoading: action.payload,
    };
    default:
      return state;
  }
}
