import { useNavigate } from "react-router"
import { createUser } from "../../api/account"

export const useSignUpForm = () => {
  const navigate = useNavigate()

  const handleSubmit = values => {
    createUser(values)
      .then(response => {
        console.log(response)
        const userId = response.id
        const date = getDate()
        const token = localStorage.getItem("token")
        createWalletAccount(date)
        navigate("/login")
      })
      .catch(error => console.log(error))
  }

  const createWalletAccount = (date, token) => {
    fetch("http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts", {
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
        userId: 2310
      })
    })
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

  return { handleSubmit }
}
