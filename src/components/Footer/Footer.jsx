import React from "react";
import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../contexts/DarkModeContext";
import alkybankLogoWhite from "../../assets/alkemy-logo-white.png";
import alkybankLogo from "../../assets/alkemy-logo.png";

const Footer = () => {

    const { darkMode, setDarkMode } = useDarkModeContext();
    
  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-dark2">
      <div className="sm:flex sm:items-center sm:justify-between">
        
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


        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Alkybank
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
