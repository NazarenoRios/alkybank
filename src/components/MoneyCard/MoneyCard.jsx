export default function MoneyCard({ title, icon, className, data, imageClassName }) {
  return (
    <div
      className={`w-full max-w-[350px] md:max-w-[250px] flex gap-4 rounded-[10px] bg-key_black dark:bg-dark2 pl-[20px] pr-[20px] pt-[24px] pb-[24px] ${className}`}
    >
      <div className={`w-fit h-fit p-3 rounded-[100px] bg-[#4E5257] ${imageClassName}`}>
        <img className="min-w-[21px]" src={icon} alt="Wallet total balance" />
      </div>
      <div className="flex flex-col">
        <span className="text-[14px] font-semibold text-[#929EAE]">{title}</span>
        <span className="text-[20px] font-semibold">${data}</span>
      </div>
    </div>
  )
}
