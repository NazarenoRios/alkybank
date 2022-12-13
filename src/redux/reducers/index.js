import { combineReducers } from "redux"
import allTransactionsReducer from "./allTransactionsReducer"
import walletReducer from "./walletReducer"
import topupReducer from "./topupReducer"
import paymentReducer from "./paymentReducer"

export default combineReducers({ allTransactionsReducer, walletReducer,topupReducer, paymentReducer })
