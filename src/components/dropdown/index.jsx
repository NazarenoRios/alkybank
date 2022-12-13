import { useAuth } from "../../hooks/useAuth";
import arrowIcon from "../../assets/arrow-icon.svg";
import { Link } from "react-router-dom";

export function Dropdown() {
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
              to="/payments"
              className="block py-2 px-4 hover:bg-primary dark:hover:bg-primary dark:hover:text-black"
            >
              Payments
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
  