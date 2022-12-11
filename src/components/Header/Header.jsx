import avatar from "../../assets/avatar.svg"
import avatarDark from "../../assets/avatar-dark.svg"
import arrowIcon from "../../assets/arrow-icon.png"
import alkybankLogo from "../../assets/alkemy-logo.png"
import alkybankLogoWhite from "../../assets/alkemy-logo-white.png"
import moonIcon from "../../assets/moon-icon.svg"
import sunIcon from "../../assets/sun-icon.svg"

import { useDarkModeContext } from "../../contexts/DarkModeContext"

export default function Header({ title }) {
  const { darkMode, setDarkMode } = useDarkModeContext()

  return (
    <header className="w-full h-[100px] flex items-center justify-between px-5 box-border pr-[60px]">
      <a href="/" class="flex items-center pl-2.5 mb-5">
        {!darkMode ? (
          <img src={alkybankLogo} class="mr-3 w-40 h-auto" alt="Alkemy bank Logo" />
        ) : (
          <img src={alkybankLogoWhite} class="mr-3 w-40 h-auto" alt="Alkemy bank Logo Black Mode" />
        )}
      </a>
      <div className="flex gap-5 h-[40px] bg-[#FAFAFA] dark:bg-dark2 dark:text-white">
        <button
          className="w-[50px] flex justify-center items-center bg-dark2 dark:bg-[#f8f8f8] dark:text-white rounded-[10px] p-3 box-border"
          onClick={() => setDarkMode(!darkMode)}
        >
          <img className="w-[20px]" src={darkMode ? sunIcon : moonIcon} alt="Toggle dark mode" />
        </button>
        <button className="w-full max-w-[300px] h-[40px] flex items-center gap-5 rounded-[100px]  px-5 box-border">
          <img className="w-[20px]" src={darkMode ? avatar : avatarDark} alt="avatar" />
          <div className="w-full flex justify-between gap-5">
            <span>
              {sessionStorage.first_name}{" "}
              {sessionStorage.last_name === "null" ? "" : sessionStorage.last_name}
            </span>
            <img className="transform rotate-90" src={arrowIcon} alt="" />
          </div>
        </button>
      </div>
    </header>
  )
}
