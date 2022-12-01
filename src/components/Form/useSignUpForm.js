import { useNavigate } from "react-router"
import { createUser } from "../../api/account"

export const useSignUpForm = () => {
  const navigate = useNavigate()

  const handleSubmit = values => {
    createUser(values)
      .then(async response => {
        console.log(response)
        navigate("/login")
      })
      .catch(error => console.log(error))
  }

  return { handleSubmit }
}
