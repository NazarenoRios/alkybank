import { useSelector } from "react-redux"
import { useDashboard } from "../hooks/useDashboard"
import { useDarkModeContext } from "../contexts/DarkModeContext"
import { useWalletList } from "../components/WalletList/useWalletList"
import WalletList from "../components/WalletList/WalletList"
import Loading from "../pages/Loading"
import walletIconGreen from "../assets/wallet-icon-green.svg"
import walletIconDark from "../assets/wallet-icon-dark.svg"
import walletIcon from "../assets/wallet-icon.svg"
import graph from "../assets/graph.png"

export default function Dashboard() {
  const walletState = useSelector(state => state.walletReducer)
  const transactions = useSelector(state => state.allTransactionsReducer.transactions)
  const isLoading = useSelector(state => state.allTransactionsReducer.isLoading)
  useWalletList()
  const { totalSpending } = useDashboard()
  const { darkMode } = useDarkModeContext()

  return (
    <section className="px-[60px] pt-[30px] box-border w-full h-max">
      <div className="w-full justify-between flex flex-col gap-y-10 gap-x-[50px] lg:flex-row">
        <div className="w-full max-w-[1000px] flex flex-col gap-12">
          <div className="w-full flex items-center flex-wrap gap-10">
            <div className="w-full max-w-[250px] flex gap-4 rounded-[10px] bg-key_black dark:bg-dark2 pl-[20px] pr-[20px] pt-[24px] pb-[24px]">
              <div className="w-fit h-fit p-3 rounded-[100px] bg-[#4E5257]">
                <img className="min-w-[21px]" src={walletIconGreen} alt="Wallet total balance" />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-semibold text-[#929EAE]">Total balance</span>
                <span className="text-[20px] font-semibold text-white">
                  ${walletState.money ? walletState.money : 0}
                </span>
              </div>
            </div>
            <div className="w-full max-w-[250px] flex gap-4 rounded-[10px] bg-[#F8F8F8] dark:bg-[#201E34] pl-[20px] pr-[20px] pt-[24px] pb-[24px] border-solid border-[1px] dark:border-[#343152] ">
              <div className="w-fit h-fit p-3 rounded-[100px] bg-[#EBE8E8] dark:bg-[#292642]">
                <img
                  className="min-w-[21px]"
                  src={darkMode ? walletIcon : walletIconDark}
                  alt="Wallet total spending"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-semibold text-[#929EAE]">Total spending</span>
                <span className="text-[20px] font-semibold text-black dark:text-white">
                  ${totalSpending ? totalSpending : 0}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[1000px] relative border-solid border-[1px] border-[#F2F2F2] dark:border-[#343152] rounded-[10px]">
            <div className="blur-[2px]">
              <img src={graph} alt="" />
            </div>
            <h3 className="absolute left-[15%] top-[50%] text-[40px]">Coming soon...</h3>
          </div>
          <div className="w-full max-w-[1000px] flex flex-col gap-4 border-solid border-[1px] border-[#F2F2F2] dark:border-[#343152] p-5 rounded-[10px]">
            <h2 className="text-[18px] font-semibold dark:text-white">Recent Transaction</h2>
            <div className="flex flex-col gap-2 w-full max-w-[1000px]">
              <div className="flex justify-between gap-5 uppercase text-[#929EAE]">
                <span className="w-full max-w-[200px]">Wallet id</span>
                <span className="w-full max-w-[200px]">Type</span>
                <span className="w-full max-w-[200px]">Amount</span>
                <span className="w-full max-w-[200px]">Date</span>
              </div>
              <ul className="flex flex-col gap-4">
                {isLoading && <Loading />}
                {transactions.slice(0, 5).map(transaction => (
                  <li
                    className="flex justify-between items-center gap-5 dark:text-white"
                    key={transaction.id}
                  >
                    <div className="w-full max-w-[200px] flex items-center gap-3">
                      <div className="w-fit h-fit p-2 rounded-[10px] bg-[#4E5257]">
                        <img
                          className="min-w-[21px]"
                          src={walletIconGreen}
                          alt="Wallet total balance"
                        />
                      </div>
                      <span>{transaction.accountId}</span>
                    </div>
                    <span className="w-full max-w-[200px]">Payment</span>
                    <span className="w-full max-w-[200px]">${transaction.amount}</span>
                    <span className="w-full max-w-[200px]">
                      {new Date(transaction.createdAt).toLocaleDateString("es-AR", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit"
                      })}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <WalletList />
      </div>
    </section>
  )
}
