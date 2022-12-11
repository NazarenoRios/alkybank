import React from "react"
import { useDarkModeContext } from "../../contexts/DarkModeContext"
import Header from "../Header/Header"
import { Sidebar } from "../sidebar"

export const Layout = ({ children }) => {
  const { darkMode } = useDarkModeContext()

  return (
    <div className={` relative ${darkMode === true ? "dark" : "light"}`}>
      <div className="dark:bg-dark1 h-screen overflow-y-auto">
        <Header />
        <Sidebar children={children} />
      </div>
    </div>
  )
}
