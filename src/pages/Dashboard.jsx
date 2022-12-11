import { useSelector } from "react-redux"
import { useDashboard } from "../hooks/useDashboard"
import { useDarkModeContext } from "../contexts/DarkModeContext"
import { useWalletList } from "../components/WalletList/useWalletList"
import WalletList from "../components/WalletList/WalletList"
import Loading from "../pages/Loading"
import walletIconDark from "../assets/wallet-icon-dark.svg"
import walletIcon from "../assets/wallet-icon.svg"
import graph from "../assets/graph.png"
import TransactionsList from "../components/TransactionsList/TransactionsList"
import MoneyCard from "../components/MoneyCard/MoneyCard"
import walletIconGreen from "../assets/wallet-icon-green.svg"

export default function Dashboard() {
  const transactions = useSelector(state => state.allTransactionsReducer.transactions)
  const isLoading = useSelector(state => state.allTransactionsReducer.isLoading)
  useWalletList()
  const { totalSpending } = useDashboard()
  const { darkMode } = useDarkModeContext()
  const walletState = useSelector(state => state.walletReducer)

  return (
    <section className="px-[10px] md:px-[60px] pt-[30px] box-border w-full h-max">
      <div className="w-full justify-between flex flex-col gap-y-10 gap-x-[50px] lg:flex-row">
        <div className="w-full max-w-[1000px] flex flex-col gap-12">
          <div className="w-full flex items-center justify-center sm:justify-start flex-wrap sm:flex-nowrap gap-10">
            <MoneyCard
              title="Total balance"
              icon={walletIconGreen}
              data={walletState.money ? walletState.money : 0}
              className="text-white"
            />
            <MoneyCard
              title="Wallet total spending"
              icon={darkMode ? walletIcon : walletIconDark}
              data={totalSpending ? totalSpending : 0}
              className=" bg-[#F8F8F8] dark:bg-[#201E34] dark:border-[#343152] text-white dark:text-white border-solid border-[1px] border-[#F2F2F2] box-border rounded-[10px]"
              imageClassName=" bg-[#EBE8E8] dark:bg-[#292642]"
            />
          </div>
          <div className="w-full max-w-[1000px] relative border-solid border-[1px] border-[#F2F2F2] dark:border-[#343152] rounded-[10px]">
            <div className="blur-[2px]">
              <img className="w-full max-h-[300px] object-cover" src={graph} alt="" />
            </div>
            <h3 className="absolute left-[30%] top-[40%] text-4xl">Coming soon...</h3>
          </div>
          <div className="w-full max-w-[1000px] flex flex-col gap-4 border-solid border-[1px] border-[#F2F2F2] dark:border-[#343152] p-5 box-border rounded-[10px]">
            <h2 className="text-[18px] font-semibold dark:text-white">Recent Transaction</h2>
            <div className="flex flex-col gap-2 w-full max-w-[1000px]">
              <ul className="flex flex-col gap-5">
                {isLoading && <Loading />}
                {transactions.slice(0, 5).map(transaction => (
                  <TransactionsList transaction={transaction} />
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
