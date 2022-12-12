import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { getWallet } from "../../api/account"

export const useWalletList = setShowModal => {
  const dispatch = useDispatch()
  const walletState = useSelector(state => state.walletReducer)

  useEffect(() => {
    const token = sessionStorage.getItem("token")
    getWallet(token)
      .then(wallets => {
        sessionStorage.setItem("walletId", JSON.stringify(wallets[0].id))

        dispatch({ type: "UPDATE_WALLET", payload: wallets[0] })
      })
      .catch(error => {
        console.log(error)
        return toast.error("An error has occurred. Try again later")
      })
  }, [])

  const createNewWallet = async () => {
    const userId = sessionStorage.getItem("id")
    const date = getDate()
    const token = sessionStorage.getItem("token")
    if (walletState) return toast.error("You can't create more than one wallet")
    createWalletAccount(userId, date, token)
      .then(createdWallet => {
        console.log(createdWallet)
        toast.success("You have successfully created a wallet")
        dispatch({ type: "UPDATE_WALLET", payload: createdWallet })
      })
      .catch(error => {
        console.log(error)
        return toast.error("An error has occurred. Try again later")
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
