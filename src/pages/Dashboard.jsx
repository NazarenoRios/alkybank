import walletIconGreen from "../assets/wallet-icon-green.png"
import walletIconDark from "../assets/wallet-icon-dark.png"
import graph from "../assets/graph.png"

export default function Dashboard() {
  return (
    <section className="ml-[290px] pt-[30px]">
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
      </div>
    </section>
  )
}
