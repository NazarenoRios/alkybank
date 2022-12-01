import { useSelector } from "react-redux"

export const useCreateWallet = setShowModal => {
  // const loggedUser = useSelector(state => state.loggedUser) uncomment when redux provider has been implemented

  const createNewWallet = async () => {
    const userId = loggedUser.id
    const date = getDate()
    const token = localStorage.getItem("token")
    const createdWallet = await createWalletAccount(userId, date, token)
    if (createdWallet.error) {
      //informar que no se pudo crear la wallet
    }
    // hacer un dispatch para actualizar el estado de las wallets
    setShowModal(false)
  }

  const createWalletAccount = async (userId, date, token) => {
    try {
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
    } catch (error) {
      console.log(error)
    }
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
