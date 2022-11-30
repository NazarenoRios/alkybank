const variants = {
  primary: "bg-primary hover:bg-[#3E6A00] hover:text-white text-text1",
  secondary: "bg-secondary hover:bg-[#007E7E] text-white"
}

export default function Button({ variant, action, text, children }) {
  return (
    <button
      className={`w-full max-w-[200px] h-[48px] flex justify-center items-center font-bold transition-all duration-300 border-none rounded-[10px]  ${variants[variant]}`}
      onClick={() => action()}
    >
      {children ? children : text}
    </button>
  )
}
