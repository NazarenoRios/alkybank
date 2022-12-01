import { useNavigate } from "react-router"
import { createUser } from "../../api/account"

export const useSignUpForm = () => {
  const navigate = useNavigate()

  const handleSubmit = values => {
    createUser(values)
      .then(response => {
        console.log(response)
        const userId = response.id
        navigate("/login")
      })
      .catch(error => console.log(error))
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
