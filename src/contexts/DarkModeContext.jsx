import { useContext } from "react"
import { createContext, useState } from "react"

const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: () => {}
})

const DarkModeProvider = ({ children }) => {

  const [darkMode, setDarkMode] = useState(true)
  
  localStorage.setItem("darkMode",darkMode)

  return (
    <div className="h-screen">
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
    </div>
    
  )
}

const useDarkModeContext = () => useContext(DarkModeContext)

export { DarkModeProvider, useDarkModeContext }
