import { combineReducers } from "redux"
import allTransactionsReducer from "./allTransactionsReducer"
import walletReducer from "./walletReducer"
import topupReducer from "./topupReducer"

export default combineReducers({ allTransactionsReducer, walletReducer,topupReducer })
