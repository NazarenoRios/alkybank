import React from "react"
import { useDarkModeContext } from "../../contexts/DarkModeContext"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { Sidebar } from "../sidebar"

export const Layout = ({ children }) => {
  const { darkMode } = useDarkModeContext()

  return (
    <div className={`relative ${darkMode === true ? "dark" : "light"}`}>
      <div className="h-full dark:bg-dark1 pb-32">
        <Header />
        <Sidebar children={children} />
      </div>
      <Footer />
    </div>
  )
}
