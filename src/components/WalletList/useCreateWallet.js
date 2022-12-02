import Swal from "sweetalert2"

export const useCreateWallet = setShowModal => {
  const createNewWallet = async () => {
    const loggedUser = localStorage.getItem("loggedUser")
    const userId = loggedUser.id
    const date = getDate()
    const token = localStorage.getItem("token")
    const createdWallet = await createWalletAccount(userId, date, token)
    if (createdWallet.error) {
      Swal.fire({
        icon: "error",
        title: "An error has occurred. Try again later",
        showConfirmButton: true
      })
    }
    Swal.fire({
      icon: "success",
      title: "You have successfully created a wallet",
      showConfirmButton: false
    })
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
      Swal.fire("Error", createdWallet.error, "error")
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
