import { useEffect } from "react"
import { provider } from "../../../firebase/authGoogleProvider"
import { getAuth, signInWithRedirect, getRedirectResult } from "firebase/auth"
import { useNavigate } from "react-router"

export const useGoogleSignIn = authMethod => {
  const auth = getAuth()
  const navigate = useNavigate()

  useEffect(() => {
    getRedirectResult(auth).then(result => {
      if (!result) return
      const user = result.user
      const email = user.email
      const username = user.displayName
      console.log(user, email, username)
      authMethod === "signup" ? navigate("/login") : navigate("/signup")
    })
  }, [authMethod])

  const signInWithGoogle = () => signInWithRedirect(auth, provider)

  return { signInWithGoogle }
}
