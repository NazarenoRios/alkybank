import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../redux/actions/getTransactions";
import walletIconGreen from "../../assets/wallet-icon-green.svg";
import Loading from "../../pages/Loading";

export default function MovementsComponent() {
  const [state, setState] = useState([]);
  const [name, setName] = useState("");
  const [initialPage, setInitialPage] = useState(1)
  const [finalPage, setFinalPage] = useState(10)
  const [squip, setSquip] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  let allTransactions = useSelector(
    (state) => state.allTransactionsReducer.transactions
  );
  let isLoading = useSelector(
    (state) => state.allTransactionsReducer.isLoading
  );
  useEffect(() => {
    if(!isLoading){
      setState(allTransactions);
    }  
  }, [isLoading]);
  const transactionsTypes = (value) => {
    if (value === "all") {
      setState(allTransactions);
    } else {
      const filterTransactions = allTransactions.filter(
        (transactions) => transactions.type === value
      );
      setState(filterTransactions);
    }
  };

  const searchTransactions = (e) => {
    e.preventDefault();
    if (name === "") {
      dispatch(getTransactions());
      setState(allTransactions)
    } else {
      const filterTransactions = state.filter((transactions) => 
         transactions.concept.includes(name)
      );
      setState(filterTransactions);
      console.log(filterTransactions)
    }
  };

  function prevFunction () {
    if(initialPage < 11){
      return
    }else{
      setInitialPage(initialPage - 10)
      setFinalPage(finalPage - 10)
      setSquip(false);
    }
  };
  
  function nextFunction () {
    let finalP = finalPage + 10
    if(squip === true){
      return;
    } else{
      if(finalP > state.length){
        setInitialPage(initialPage + 10)
        setFinalPage(finalPage + 10)
        setSquip(true);
      }else{
        setInitialPage(initialPage + 10)
        setFinalPage(finalPage + 10)
      }
    }
  };

  return (
    <div className="w-screen h-screen">
      <div className="flex justify-center">
      <h1 className="text-3xl font-mono font-bold text-white">
        <u>Transactions</u>
      </h1>
      </div>
      <div className="flex justify-center flex-row gap-5 p-7 m-1">
        <form>
          <label htmlFor="types" className="text-primary mr-2">
            Select Type
          </label>
          <select
            name="types"
            onChange={(e) => transactionsTypes(e.target.value)}
          >
            <option value="all">All</option>
            <option value="topup">Topup</option>
            <option value="payment">Payment</option>
          </select>
        </form>
        <form onSubmit={searchTransactions} className="flex flex-row gap-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ border: "1px solid black" }}
          />
          <button type="submit" className="text-primary">
            Buscar
          </button>
        </form>
      </div>
      <div className="w-[90%] flex flex-col gap-4  justify-center items-center border-solid border-[1px] border-[#F2F2F2] p-5 rounded-[10px] text-primary">
        <div className="flex flex-col gap-4 w-[100%] h-screen p-5 ">
          <div className="flex justify-between uppercase text-[#929EAE]">
            <span className="w-full max-w-[200px] text-primary">Wallet id</span>
            <span className="w-full max-w-[200px] text-primary">Type</span>
            <span className="w-full max-w-[200px] text-primary">Amount</span>
            <span className="w-full max-w-[200px] text-primary">Concept</span>
            <span className="w-full max-w-[200px] text-primary">Date</span>
          </div>
          <ul className="flex flex-col gap-4">
            {isLoading && <Loading/>}
            {state &&
              state.slice(initialPage - 1, finalPage).map((transaction) => (
                <li
                  className="flex justify-between items-center"
                  key={transaction.id}
                >
                  <div className="w-full max-w-[200px] flex items-center gap-3">
                    <div className="w-fit h-fit p-2 rounded-[10px] bg-[#4E5257]">
                      <img src={walletIconGreen} alt="Wallet total balance" />
                    </div>
                    <span className="text-white">{transaction.accountId}</span>
                  </div>
                  <span className="w-full max-w-[200px] text-white">
                    {transaction.type}
                  </span>
                  <span className="w-full max-w-[200px] text-white">
                    ${transaction.amount}
                  </span>
                  <span className="w-full max-w-[200px] text-white">
                    "{transaction.concept}"
                  </span>
                  <span className="w-full max-w-[200px] text-white">
                    {new Date(transaction.createdAt).toLocaleDateString(
                      "es-AR",
                      {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      }
                    )}
                  </span>
                </li>
              ))}
          </ul>
          <div class="flex flex-col items-center pt-8">
            <span class="text-sm text-gray-700 dark:text-gray-400">
              Showing{" "}
              <span class="font-semibold text-gray-900 dark:text-white">{initialPage}</span>{" "}
              to{" "}
              <span class="font-semibold text-gray-900 dark:text-white">
                {finalPage}
              </span>{" "}
              of{" "}
              <span class="font-semibold text-gray-900 dark:text-white">
                {state.length}
              </span>{" "}
              Entries
            </span>
            <div class="inline-flex mt-2 xs:mt-0">
              <button onClick={prevFunction} class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-dark2 dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-dark1">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Prev
              </button>
              <button onClick={nextFunction} class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-dark2 dark:border-gray-700 dark:text-primary dark:hover:bg-primary dark:hover:text-dark1">
                Next
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
