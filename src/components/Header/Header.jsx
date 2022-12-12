import { useDarkModeContext } from "../../contexts/DarkModeContext";
import alkybankLogoWhite from "../../assets/alkemy-logo-white.png";
import alkybankLogo from "../../assets/alkemy-logo.png";
import avatarDark from "../../assets/avatar-dark.svg";
import arrowIcon from "../../assets/arrow-icon.svg";
import moonIcon from "../../assets/moon-icon.svg";
import sunIcon from "../../assets/sun-icon.svg";
import avatar from "../../assets/avatar.svg";
import "flowbite";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

export default function Header() {
  const { darkMode, setDarkMode } = useDarkModeContext();

  return (
    <header className="w-full h-[100px] flex items-center justify-between px-5 box-border lg:pr-[60px]">
      <Link to="/" className="hidden md:flex items-center pl-2.5 mb-5">
        {!darkMode ? (
          <img
            src={alkybankLogo}
            className="mr-3 w-40 h-auto"
            alt="Alkemy bank Logo"
          />
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
          <button className="w-full max-w-[300px] h-[40px] flex items-center gap-5 rounded-[100px]  px-5 box-border">
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
                {sessionStorage.first_name}{" "}
                {sessionStorage.last_name === "null"
                  ? ""
                  : sessionStorage.last_name}
              </span>
              {/* <img className="w-[20px] h-auto transform" src={arrowIcon} alt="" /> */}
            </div>
          </button>
          <Dropdown />
        </div>
      </div>
    </header>
  );
}

function Dropdown() {
  const { signout } = useAuth();

  return (
    <>
      <button
        id="dropdownDividerButton"
        data-dropdown-toggle="dropdownDivider"
        className="md:hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <img
          className="w-[20px] h-auto transform"
          src={arrowIcon}
          alt="arrow icon"
        />
      </button>

      <div
        id="dropdownDivider"
        className="hidden w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-dark2 dark:divide-gray-600"
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDividerButton"
        >
          <li>
            <Link
              to="/topup"
              className="block py-2 px-4 hover:bg-primary dark:hover:bg-primary dark:hover:text-black"
            >
              Add funds
            </Link>
          </li>
          <li>
            <Link
              to="/balance"
              className="block py-2 px-4 hover:bg-primary dark:hover:bg-primary dark:hover:text-black"
            >
              Balance
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block py-2 px-4 hover:bg-primary dark:hover:bg-primary dark:hover:text-black"
            >
              Expenses
            </Link>
          </li>
          <li>
            <Link
              to="/movements"
              className="block py-2 px-4 hover:bg-primary dark:hover:bg-primary dark:hover:text-black"
            >
              Last movements
            </Link>
          </li>
          <li>
            <Link
              to="/payments"
              className="block py-2 px-4 hover:bg-primary dark:hover:bg-primary dark:hover:text-black"
            >
              Send funds
            </Link>
          </li>
        </ul>
        <div className="py-1" onClick={signout}>
          <Link
            to="#"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-primary dark:hover:bg-primary dark:text-gray-200 dark:hover:text-black"
          >
            Log out
          </Link>
        </div>
      </div>
    </>
  );
}
