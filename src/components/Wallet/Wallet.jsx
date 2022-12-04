import mastercardIcon from "../../assets/mastercard-icon.png"
import chipIcon from "../../assets/chip-icon.png"
import wifiIcon from "../../assets/wifi-icon.png"
import { useSelector } from "react-redux"

export default function Wallet() {
  const walletState = useSelector(state => state.walletReducer)

  return (
    <div
      className="w-full max-w-[400px] h-[210px] rounded-[15px] relative p-[20px]"
      style={{ background: "linear-gradient(104.3deg, #4A4A49 2.66%, #20201F 90.57%)" }}
    >
      <div className="flex flex-col gap-4">
        <h4 className="text-white font-bold">
          AlkyBank <span className="text-[#626260] font-normal">| Universal Bank</span>
        </h4>
        <div className="flex justify-between">
          <img className="w-[37.92px]" src={chipIcon} alt="" />
          <img className="w-[30px]" src={wifiIcon} alt="" />
        </div>
        <div className="flex flex-col ">
          <span className="text-white font-bold text-[22px] tracking-[0.1em]">
            **** **** **** {walletState.id}
          </span>
          <span className="text-[#929EAE]">
            {" "}
            {new Date(walletState.createdAt).toLocaleDateString("es-AR", {
              month: "2-digit",
              day: "2-digit"
            })}
          </span>
        </div>
      </div>
      <img className="absolute right-5 bottom-5" src={mastercardIcon} alt="" />
    </div>
  )
}
