import React from "react";
import { useAuth } from "../../hooks/useAuth";
export const Sidebar = ({ children }) => {
  const { signout } = useAuth();

  return (
    <div className="flex w-full h-max">
      <div className="md:flex flex-col h-full p-3 shadow w-60 hidden">
        <aside aria-label="Sidebar">
          <div className="overflow-y-auto py-4 px-3 max-w-fit h-fit bg-gray-200 dark:bg-dark2 -xs:px-0">
            <ul className="space-y-2">
              <li>
                <a
                  href="/topup"
                  className="flex items-center p-2 text-base font-normal text-gray-800 rounded-lg dark:text-white hover:bg-primary dark:hover:text-black w-full min-w-[60px] max-w-[200px]"
                >
                  <svg
                    className="w-6 h-6 hidden sm:block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <span className="flex-1 ml-3 -xs:text-xs whitespace-nowrap -xs:ml-0">
                    Add funds
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/balance"
                  className="flex items-center p-2 text-base font-normal text-gray-800 rounded-lg dark:text-white hover:bg-primary dark:hover:text-black w-full min-w-[60px] max-w-[200px]"
                >
                  <svg
                    className="w-6 h-6 hidden sm:block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                  <span className="ml-3 -xs:text-xs -xs:ml-0">Balance</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-800 rounded-lg dark:text-white hover:bg-primary dark:hover:text-black w-full min-w-[60px] max-w-[200px]"
                >
                  <svg
                    className="w-6 h-6 hidden sm:block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                    />
                  </svg>
                  <span className="flex-1 ml-3 -xs:text-xs whitespace-nowrap -xs:ml-0">
                    Expenses
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/movements"
                  className="flex items-center p-2 text-base font-normal text-gray-800 rounded-lg dark:text-white hover:bg-primary dark:hover:text-black w-full min-w-[60px] max-w-[200px]"
                >
                  <svg
                    className="w-6 h-6 hidden sm:block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                  <span className="flex-1 ml-3 -xs:text-xs whitespace-nowrap -xs:ml-0">
                    Last movements
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/payments"
                  className="flex items-center p-2 text-base font-normal text-gray-800 rounded-lg dark:text-white hover:bg-primary dark:hover:text-black w-full min-w-[60px] max-w-[200px]"
                >
                  <svg
                    className="w-6 h-6 hidden sm:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="flex-1 ml-3 -xs:text-xs whitespace-nowrap -xs:ml-0">
                    Send funds
                  </span>
                </a>
              </li>
            </ul>
            <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
              <li>
                <a
                  onClick={signout}
                  href="/"
                  className="flex items-center p-2 text-base font-normal text-gray-800 rounded-lg transition duration-75 hover:bg-primary dark:hover:text-black dark:text-white group w-full min-w-[60px] max-w-[200px]"
                >
                  <svg
                    className="w-6 h-6 hidden sm:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3 -xs:text-xs -xs:ml-0">Log out</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <div class="z-20">{children}</div>
    </div>
  );
};
