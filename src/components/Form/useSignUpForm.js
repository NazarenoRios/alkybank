import { createUser } from "../../api/account"

export const useSignUpForm = () => {
  const handleSubmit = values => {
    createUser(values)
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error))
  }

  return { handleSubmit }
}
