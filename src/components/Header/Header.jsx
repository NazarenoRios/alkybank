import { useDarkModeContext } from "../../contexts/DarkModeContext"
import alkybankLogoWhite from "../../assets/alkemy-logo-white.png"
import alkybankLogo from "../../assets/alkemy-logo.png"
import avatarDark from "../../assets/avatar-dark.svg"
import arrowIcon from "../../assets/arrow-icon.svg"
import moonIcon from "../../assets/moon-icon.svg"
import sunIcon from "../../assets/sun-icon.svg"
import avatar from "../../assets/avatar.svg"
import "flowbite"
import { useAuth } from "../../hooks/useAuth"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Dropdown } from "../dropdown"

export default function Header() {
  const { darkMode, setDarkMode } = useDarkModeContext()
  const token = sessionStorage.getItem("token")
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  useEffect(() => {
    axios
      .get("http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/me", {
        headers: { Authorization: "Bearer " + token }
      })
      .then(res => {
        setName(res.data.first_name)
        setLastName(res.data.last_name)
      })
  }, [])
  return (
    <header className="w-full h-[100px] flex items-center justify-between px-5 box-border lg:pr-[60px]">
      <Link to="/" className="hidden md:flex items-center pl-2.5 mb-5">
        {!darkMode ? (
          <img src={alkybankLogo} className="mr-3 w-40 h-auto" alt="Alkemy bank Logo" />
        ) : (
          <img
            src={alkybankLogoWhite}
            className="mr-3 w-40 min-w-[100px] h-auto"
            alt="Alkemy bank Logo Black Mode"
          />
        )}
      </Link>

      <div className="w-full flex justify-between md:justify-end z-50">
        <button
          className="w-[50px] flex justify-center items-center bg-dark2 dark:bg-[#f8f8f8] dark:text-white rounded-[10px] p-3 box-border"
          onClick={() => setDarkMode(!darkMode)}
        >
          <img
            className="w-[20px] min-w-[20px]"
            src={darkMode ? sunIcon : moonIcon}
            alt="Toggle dark mode"
          />
        </button>
        <div className="flex gap-5 h-[40px] bg-[#FAFAFA] dark:bg-dark2 dark:text-white">
          <div className="w-full max-w-[300px] h-[40px] flex items-center gap-5 rounded-[100px] px-5 box-border">
            <img
              className="w-[20px] hidden sm:inline-block"
              src={darkMode ? avatar : avatarDark}
              alt="avatar"
            />
            <div
              id="dropdownDividerButton"
              data-dropdown-toggle="dropdownDivider"
              className="w-full flex justify-between gap-5"
            >
              <span>
                {name} {lastName === "" ? "" : lastName}
              </span>
            </div>
          </div>
          <Dropdown />
        </div>
      </div>
    </header>
  )
}
