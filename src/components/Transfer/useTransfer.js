import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { getWallet } from "../../api/account"

export const useTransfer = () => {
  const dispatch = useDispatch()

  const handleSubmit = async (values, walletState) => {
    if (walletState < values.amount) return toast.error("You don't have enough money")
    getWalletByAccountId(values.accountId).then(error => {
      if (error.status === 500) return toast.error("The wallet id is not valid")
      transferToAccountId(values).then(error => {
        if (error.status === 500) return toast.error("The wallet id is not valid")
        const token = sessionStorage.getItem("token")
        getWallet(token)
          .then(wallets => dispatch({ type: "UPDATE_WALLET", payload: wallets[0] }))
          .catch(error => {
            console.log(error)
            return toast.error("An error has occurred. Try again later")
          })
        return toast.success("Transfer successfully")
      })
    })
  }

  const getWalletByAccountId = async accountId => {
    const response = await fetch(
      `http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/${accountId}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${sessionStorage.token}`
        }
      }
    )
    return await response.json()
  }

  const transferToAccountId = async values => {
    const body = {
      type: values.type,
      concept: "string",
      amount: values.amount
    }
    const response = await fetch(
      `http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/${values.accountId}`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${sessionStorage.token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    )
    return await response.json()
  }

  return { handleSubmit }
}
