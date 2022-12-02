import { useNavigate } from "react-router"
import { createUser } from "../../api/account"

export const useSignUpForm = () => {
  const navigate = useNavigate()

  const handleSubmit = values => {
    const first_name = values.fullName.split(" ")[0]
    const last_name = values.fullName.split(" ")[1]
    const user = {
      first_name,
      last_name,
      email: values.email,
      password: values.password
    }
    createUser(user)
      .then(response => {
        console.log(response)
        // navigate("/login") uncomment when routing has been added
      })
      .catch(error => console.log(error))
  }

  return { handleSubmit }
}
