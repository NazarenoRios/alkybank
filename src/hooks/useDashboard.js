import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTransactions } from "../redux/actions/getTransactions"

export const useDashboard = () => {
  const [totalSpending, setTotalSpending] = useState()
  const [totalTopup, setTotalTopup] = useState()
  const [totalBalance, setTotalBalance] = useState()
  const dispatch = useDispatch()
  const transactions = useSelector(state => state.allTransactionsReducer.transactions)

  useEffect(() => {
    dispatch(getTransactions())
  }, [])

  useEffect(() => {
    getAmounts()
  }, [transactions])

  const getAmounts = () => {
    getTotalBalanceAmount()
    getTotalSpendingAmount()
    getTotalTopupAmount()
  }

  const getTotalBalanceAmount = () => {
    const topUpTransactions = getTransactionsType("topup")
    const paymentsTransactions = getTransactionsType("payment")
    setTotalBalance(topUpTransactions - paymentsTransactions)
  }

  const getTotalSpendingAmount = () => {
    if (transactions.length <= 0) return
    const total = transactions.reduce((acc, curr) => {
      if (curr.type === "payment") acc += parseInt(curr.amount)
      return acc
    }, 0)
    setTotalSpending(total)
  }
  const getTotalTopupAmount = () => {
    if (transactions.length <= 0) return
    const total = transactions.reduce((acc, curr) => {
      if (curr.type === "topup") acc += parseInt(curr.amount)
      return acc
    }, 0)
    setTotalTopup(total)
    console.log(transactions, "total")
  }

  const getTransactionsType = type => {
    return transactions
      .filter(transaction => transaction.type == type && transaction.amount !== null)
      .reduce((acc, current) => (acc += Number(current.amount)), 0)
  }

  return { totalSpending, totalBalance, totalTopup, transactions, getAmounts }
}
