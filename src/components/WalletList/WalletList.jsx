import Button from "../Button"
import Wallet from "../Wallet/Wallet"

export default function WalletList() {
  return (
    <section className="w-full max-w-[354px] flex flex-col justify-center gap-5 px-2 box-border">
      <header className="flex justify-between items-center">
        <h2 className="font-semibold text-[18px]">Wallet</h2>
        <Button variant="primary" text="Create new wallet" />
      </header>
      <ul className="flex flex-col justify-center">
        <li>
          <Wallet />
        </li>
      </ul>
    </section>
  )
}
