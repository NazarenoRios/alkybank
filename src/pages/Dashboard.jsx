import walletIconGreen from "../assets/wallet-icon-green.png"
import walletIconDark from "../assets/wallet-icon-dark.png"
import graph from "../assets/graph.png"

export default function Dashboard() {
  return (
    <section className="ml-[290px] pt-[30px] px-4 box-border">
      <div className="flex flex-col gap-12 ">
        <h1 className="text-[25px] font-semibold">Dashboard</h1>
        <div>
          <div className="flex items-center gap-8">
            <div className="w-full max-w-[250px] flex gap-4 rounded-[10px] bg-key_black pl-[20px] pr-[20px] pt-[24px] pb-[24px]">
              <div className="w-fit h-fit p-3 rounded-[100px] bg-[#4E5257]">
                <img src={walletIconGreen} alt="Wallet total balance" />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-semibold text-[#929EAE]">Total balance</span>
                <span className="text-[20px] font-semibold text-white">$0.00</span>
              </div>
            </div>
            <div className="w-full max-w-[250px] flex gap-4 rounded-[10px] bg-[#F8F8F8] pl-[20px] pr-[20px] pt-[24px] pb-[24px]">
              <div className="w-fit h-fit p-3 rounded-[100px] bg-[#EBE8E8]">
                <img src={walletIconDark} alt="Wallet total spending" />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-semibold text-[#929EAE]">Total spending</span>
                <span className="text-[20px] font-semibold text-black">$0.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="blur-[2px]">
            <img src={graph} alt="" />
          </div>
          <h3 className="absolute left-[15%] top-[50%] text-[40px]">Coming soon...</h3>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-[18px] font-semibold">Recent Transaction</h2>
          <div className="flex flex-col gap-2 w-full max-w-[716px]">
            <div className="flex justify-between">
              <span className="w-full max-w-[179px]">Wallet id</span>
              <span className="w-full max-w-[179px]">Type</span>
              <span className="w-full max-w-[179px]">Amount</span>
              <span className="w-full max-w-[179px]">Date</span>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex justify-between items-center">
                <div className="w-full max-w-[179px] flex items-center gap-3">
                  <div className="w-fit h-fit p-2 rounded-[10px] bg-[#4E5257]">
                    <img src={walletIconGreen} alt="Wallet total balance" />
                  </div>
                  <span>1234</span>
                </div>
                <span className="w-full max-w-[179px]">Payment</span>
                <span className="w-full max-w-[179px]">$420.82</span>
                <span className="w-full max-w-[179px]">14/02/2022</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
