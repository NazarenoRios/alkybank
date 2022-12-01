import { useState } from "react"
import Button from "../Button"
import Wallet from "../Wallet/Wallet"
import CreateWalletModal from "./CreateWalletModal"
import { useCreateWallet } from "./useCreateWallet"

export default function WalletList() {
  const [showModal, setShowModal] = useState(false)
  const { createNewWallet } = useCreateWallet(setShowModal)

  return (
    <section className="w-full max-w-[354px] flex flex-col justify-center gap-5 px-2 box-border">
      <header className="flex justify-between items-center">
        <h2 className="font-semibold text-[18px]">Wallet</h2>
        <Button variant="primary" text="Create new wallet" action={() => setShowModal(true)} />
      </header>
      <ul className="flex flex-col justify-center">
        <li>
          <Wallet />
        </li>
      </ul>
      {showModal ? (
        <CreateWalletModal
          showModal={showModal}
          setShowModal={setShowModal}
          createNewWallet={createNewWallet}
        />
      ) : null}
    </section>
  )
}
