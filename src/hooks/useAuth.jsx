import { useState, useContext, createContext, useEffect, ReactNode } from "react"
import axios from "axios"

const API_URL = import.meta.env.VITE_API_AUTH_URL

const AuthContextDefaultValues = {
  token: null,
  signin: () => {},
  signout: () => {},
  isAuthenticated: false,
  isLoading: false
}

//Creo el contexto con valores por defecto
const AuthContext = createContext(AuthContextDefaultValues)

//Creo el provider que va a ser el que provea los valores a los componentes
export const useAuth = () => {
  return useContext(AuthContext)
}

function useProvideAuth() {
  const [token, setToken] = useState(null)
  const [isLoading, setLoading] = useState(true)

  const signin = async (email, password) => {
    try {
      const {
        status,
        data: { accessToken }
      } = await axios.post(API_URL + "login", { email, password })
      if (status === 200) {
        setToken(accessToken)
        sessionStorage.setItem("token", accessToken)
      }

      const api_user_data = await axios.get(API_URL + "me", {
        headers: { Authorization: `Bearer ${accessToken}` }
      })

      if (api_user_data.status === 200) {
        sessionStorage.setItem("first_name", api_user_data.data.first_name)
        sessionStorage.setItem("last_name", api_user_data.data.last_name)
        sessionStorage.setItem("email", api_user_data.data.email)
        sessionStorage.setItem("id", api_user_data.data.id)
      }

      return { status: 200, message: "Welcome!" }
    } catch (err) {
      return { status: err.response.status, message: "Invalid Credentials, please try again" }
    }
  }

  const signout = () => {
    setToken(null)
    sessionStorage.clear()
    window.location.reload();
  }

  useEffect(() => {
    const token1 = sessionStorage.getItem("token")
    if (token1) {
      setToken(token1)
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [token])

  const isAuthenticated = token ? true : false

  const returnValues = {
    token,
    signin,
    signout,
    isAuthenticated,
    isLoading
  }

  return returnValues
}

export function AuthProvider({ children }) {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}> {children} </AuthContext.Provider>
}
