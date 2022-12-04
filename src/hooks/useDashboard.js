import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getTransactions } from "../redux/actions/getTransactions"

export const useDashboard = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTransactions())
  }, [])

  return {}
}
