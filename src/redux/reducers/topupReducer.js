import { TOPUP_SUCCESS } from "../actions/topupAction";

const initialState = {
  isLoading: false,
};

export default function topupReducer(state = initialState, action) {
  switch (action.type) {
    case TOPUP_SUCCESS:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}
