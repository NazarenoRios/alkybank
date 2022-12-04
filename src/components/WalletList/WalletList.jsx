import { useState } from "react"
import { useSelector } from "react-redux"
import Button from "../Button"
import Wallet from "../Wallet/Wallet"
import CreateWalletModal from "./CreateWalletModal"
import { useWalletList } from "./useWalletList"

export default function WalletList() {
  const [showModal, setShowModal] = useState(false)
  const { createNewWallet } = useWalletList(setShowModal)
  const walletState = useSelector(state => state.walletReducer)

  return (
    <section className="w-full max-w-[354px] flex flex-col justify-center gap-5 px-2 box-border">
      <header className="flex justify-between items-center">
        <h2 className="font-semibold text-[18px]">Wallet</h2>
        <Button variant="primary" text="Create new wallet" action={() => setShowModal(true)} />
      </header>
      {Object.keys(walletState).length !== 0 ? (
        <Wallet />
      ) : (
        <p className="text-center">You don't have any wallet</p>
      )}
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
