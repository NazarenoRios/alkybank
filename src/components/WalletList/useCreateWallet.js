import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"

export const useCreateWallet = setShowModal => {
  const dispatch = useDispatch()

  const walletState = useSelector(state => state.walletReducer)

  useEffect(() => {
    console.log(walletState)
  }, [walletState])

  const createNewWallet = async () => {
    const loggedUser = localStorage.getItem("loggedUser")
    const userId = 2326
    const date = getDate()
    const token = localStorage.getItem("token")
    createWalletAccount(userId, date, token)
      .then(createdWallet => {
        console.log(createdWallet)
        Swal.fire({
          icon: "success",
          title: "You have successfully created a wallet",
          showConfirmButton: false
        })
        dispatch({ type: "UPDATE_WALLET", payload: createdWallet })
      })
      .catch(error => {
        console.log(error)
        Swal.fire({
          icon: "error",
          title: "An error has occurred. Try again later",
          showConfirmButton: true
        })
      })
    setShowModal(false)
  }

  const createWalletAccount = async (userId, date, token) => {
    const response = await fetch(
      "http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          creationDate: date,
          money: 0,
          isBlocked: false,
          userId: userId
        })
      }
    )
    return await response.json()
  }

  const getDate = () => {
    const rawCurrentDate = new Date().toLocaleDateString("es-AR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    })
    const rawCurrentDay = new Date().toLocaleDateString("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    })
    const formatCurrentDate = rawCurrentDate.split("/").reverse().join("/").replaceAll("/", "-")
    const formatCurrentDay = rawCurrentDay.split(",")[1]
    return `${formatCurrentDate} ${formatCurrentDay}`
  }

  return { createNewWallet }
}
