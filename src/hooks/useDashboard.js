import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTransactions } from "../redux/actions/getTransactions"

export const useDashboard = () => {
  const [totalSpending, setTotalSpending] = useState()
  const dispatch = useDispatch()
  const transactions = useSelector(state => state.allTransactionsReducer.transactions)

  useEffect(() => {
    dispatch(getTransactions())
  }, [])

  useEffect(() => {
    if (transactions.length <= 0) return
    const total = transactions.reduce((acc, curr) => acc + curr.amount, 0)[1]
    setTotalSpending(total)
  }, [transactions])

  return { totalSpending }
}
