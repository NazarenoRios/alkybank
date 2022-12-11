import { useContext } from "react"
import { createContext, useState } from "react"

const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: () => {}
})

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

const useDarkModeContext = () => useContext(DarkModeContext)

export { DarkModeProvider, useDarkModeContext }
