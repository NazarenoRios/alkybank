import walletIconGreen from "../../assets/wallet-icon-green.svg"

export default function Transaction({ transaction }) {
  return (
    <>
      <li className="flex justify-between items-center gap-5 dark:text-white" key={transaction.id}>
        <div className="w-full max-w-[200px] flex items-center gap-3">
          <div className="hidden md:inline-block w-fit h-fit p-2 rounded-[10px] bg-[#4E5257]">
            <img className="min-w-[21px]" src={walletIconGreen} alt="Wallet total balance" />
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
    </>
  )
}
