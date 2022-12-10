import walletIconGreen from "../assets/wallet-icon-green.png"
import walletIconDark from "../assets/wallet-icon-dark.png"
import graph from "../assets/graph.png"
import arrowIcon from "../assets/arrow-icon.png"
import WalletList from "../components/WalletList/WalletList"
import { useWalletList } from "../components/WalletList/useWalletList"
import { useSelector } from "react-redux"
import { useDashboard } from "../hooks/useDashboard"
import Header from "../components/Header/Header"

export default function Dashboard() {
  const walletState = useSelector(state => state.walletReducer)
  const transactions = useSelector(state => state.allTransactionsReducer.transactions)
  useWalletList()
  const { totalSpending } = useDashboard()

  return (
    <section className="ml-[290px] pt-[30px] px-4 box-border">
      <Header title="Dashboard" />
      <div className="w-full max-w-[1450px] flex gap-x-[50px] flex-wrap">
        <div className="w-full max-w-[1000px] flex flex-col gap-12">
          <div>
            <div className="w-full flex items-center justify-center flex-wrap gap-10">
              <div className="w-full max-w-[250px] flex gap-4 rounded-[10px] bg-key_black pl-[20px] pr-[20px] pt-[24px] pb-[24px]">
                <div className="w-fit h-fit p-3 rounded-[100px] bg-[#4E5257]">
                  <img src={walletIconGreen} alt="Wallet total balance" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-semibold text-[#929EAE]">Total balance</span>
                  <span className="text-[20px] font-semibold text-white">${walletState.money}</span>
                </div>
              </div>
              <div className="w-full max-w-[250px] flex gap-4 rounded-[10px] bg-[#F8F8F8] pl-[20px] pr-[20px] pt-[24px] pb-[24px]">
                <div className="w-fit h-fit p-3 rounded-[100px] bg-[#EBE8E8]">
                  <img src={walletIconDark} alt="Wallet total spending" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-semibold text-[#929EAE]">Total spending</span>
                  <span className="text-[20px] font-semibold text-black">${totalSpending}</span>
                </div>
              </div>
              <div className="w-full max-w-[300px] flex flex-col gap-2">
                <div className="w-full max-w-[300px] h-[45px] flex items-center gap-4 rounded-[10px] bg-[#F8F8F8] p-[5px] px-[20px]">
                  <div className="w-full flex justify-between">
                    <span className="text-[14px] font-semibold text-[#929EAE]">
                      Create a new transfer
                    </span>
                    <div className="flex items-center justify-center rounded-[100px] bg-[#EBE8E8] w-[20px] h-[20px]">
                      <img src={arrowIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-[300px] h-[45px] flex items-center gap-4 rounded-[10px] bg-[#F8F8F8] p-[5px] px-[20px]">
                  <div className="w-full flex justify-between">
                    <span className="text-[14px] font-semibold text-[#929EAE]">
                      Create a new topup
                    </span>
                    <div className="flex items-center justify-center rounded-[100px] bg-[#EBE8E8] w-[20px] h-[20px]">
                      <img src={arrowIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[1000px] relative border-solid border-[1px] border-[#F2F2F2] rounded-[10px]">
            <div className="blur-[2px]">
              <img src={graph} alt="" />
            </div>
            <h3 className="absolute left-[15%] top-[50%] text-[40px]">Coming soon...</h3>
          </div>
          <div className="w-full max-w-[1000px] flex flex-col gap-4 border-solid border-[1px] border-[#F2F2F2] p-5 rounded-[10px]">
            <h2 className="text-[18px] font-semibold">Recent Transaction</h2>
            <div className="flex flex-col gap-2 w-full max-w-[1000px]">
              <div className="flex justify-between uppercase text-[#929EAE]">
                <span className="w-full max-w-[200px]">Wallet id</span>
                <span className="w-full max-w-[200px]">Type</span>
                <span className="w-full max-w-[200px]">Amount</span>
                <span className="w-full max-w-[200px]">Date</span>
              </div>
              <ul className="flex flex-col gap-4">
                {transactions.slice(0, 10).map(transaction => (
                  <li className="flex justify-between items-center" key={transaction.id}>
                    <div className="w-full max-w-[200px] flex items-center gap-3">
                      <div className="w-fit h-fit p-2 rounded-[10px] bg-[#4E5257]">
                        <img src={walletIconGreen} alt="Wallet total balance" />
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
