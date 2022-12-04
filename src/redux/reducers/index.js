import { combineReducers } from "redux"
import allTransactionsReducer from "./allTransactionsReducer"
import walletReducer from "./walletReducer"

export default combineReducers({ allTransactionsReducer, walletReducer })
