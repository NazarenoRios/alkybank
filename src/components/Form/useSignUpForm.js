import { useNavigate } from "react-router"
import { createUser } from "../../api/account"

export const useSignUpForm = () => {
  const navigate = useNavigate()

  const handleSubmit = values => {
    createUser(values)
      .then(response => {
        console.log(response)
        // navigate("/login") uncomment when routing has been added
      })
      .catch(error => console.log(error))
  }

  return { handleSubmit }
}
