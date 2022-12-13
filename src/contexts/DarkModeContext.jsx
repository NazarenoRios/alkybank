import { useContext } from "react"
import { createContext, useState, useEffect } from "react"

const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: () => {}
})

const DarkModeProvider = ({ children }) => {

  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode"))
  
  localStorage.setItem("darkMode",darkMode)
  useEffect(() => {
    if (localStorage.getItem("darkMode") === "true") {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    } 
  }, [])

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
