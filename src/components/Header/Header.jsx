import avatar from "../../assets/avatar.png"
import arrowIcon from "../../assets/arrow-icon.png"
import alkybankLogo from "../../assets/alkemy-logo.png"
import moonIcon from "../../assets/moon-icon.svg"
import sunIcon from "../../assets/sun-icon.svg"

import { useDarkModeContext } from "../../contexts/DarkModeContext"

export default function Header({ title }) {
  const { darkMode, setDarkMode } = useDarkModeContext()

  return (
    <header className="w-full max-w-[1450px] h-[100px] flex items-center justify-between">
      {/* <h1 className="text-[25px] font-semibold">{title}</h1>
       */}
      <a href="/" class="flex items-center pl-2.5 mb-5">
        <img src={alkybankLogo} class="mr-3 w-40 h-auto" alt="Alkemy bank Logo" />
      </a>
      <div className="w-full max-w-[300px] h-[48px] flex items-center gap-4 rounded-[100px] bg-[#FAFAFA] px-5 box-border">
        <img className="w-[36px]" src={avatar} alt="avatar" />
        <div className="w-full flex justify-between">
          <span>
            {localStorage.first_name}
            {localStorage.last_name === "null" ? "" : localStorage.last_name}
          </span>
          <img className="transform rotate-90" src={arrowIcon} alt="" />
        </div>
      </div>
      <button
        className="bg-dark2 dark:bg-[#f8f8f8] dark:text-white rounded-[10px] p-3 box-border"
        onClick={() => setDarkMode(!darkMode)}
      >
        <img className="w-[20px]" src={darkMode ? sunIcon : moonIcon} alt="Toggle dark mode" />
      </button>
    </header>
  )
}
