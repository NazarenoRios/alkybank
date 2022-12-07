import { useEffect } from "react"
import { useDispatch } from "react-redux"
// import Swal from "sweetalert2"

export const useWalletList = setShowModal => {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem("token")
    getWallet(token)
      .then(wallets => {
        dispatch({ type: "UPDATE_WALLET", payload: wallets[0] })
      })
      .catch(error => {
        console.log(error)
        // Swal.fire({
        //   icon: "error",
        //   title: "An error has occurred while getting your wallet. Try again later",
        //   showConfirmButton: true
        // })
      })
  }, [])

  const getWallet = async token => {
    const response = await fetch(
      "http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/me",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    )
    return await response.json()
  }

  const createNewWallet = async () => {
    const userId = localStorage.getItem("id")
    const date = getDate()
    const token = localStorage.getItem("token")
    createWalletAccount(userId, date, token)
      .then(createdWallet => {
        console.log(createdWallet)
        // Swal.fire({
        //   icon: "success",
        //   title: "You have successfully created a wallet",
        //   showConfirmButton: false
        // })
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

  return { createNewWallet, getWallet }
}
