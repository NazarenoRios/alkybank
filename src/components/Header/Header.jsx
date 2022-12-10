import avatar from "../../assets/avatar.png"
import arrowIcon from "../../assets/arrow-icon.png"

export default function Header({ title }) {
  return (
    <header className="w-full max-w-[1450px] h-[100px] flex justify-between">
      <h1 className="text-[25px] font-semibold">{title}</h1>
      <div className="w-full max-w-[300px] h-[48px] flex items-center gap-4 rounded-[100px] bg-[#FAFAFA] px-5 box-border">
        <img className="w-[36px]" src={avatar} alt="avatar" />
        <div className="w-full flex justify-between">
          <span>
            {sessionStorage.first_name} {sessionStorage.last_name}
          </span>
          <img className="transform rotate-90" src={arrowIcon} alt="" />
        </div>
      </div>
    </header>
  )
}
