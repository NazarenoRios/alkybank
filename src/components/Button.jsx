const variants = {
  primary: "bg-[#0092BE] hover:bg-[#145C95]",
  secundary: "bg-[#FF7085] hover:bg-[#832232]"
}

export default function Button({ variant, action, text, children }) {
  return (
    <button
      className={`w-full max-w-[200px] h-[56px] flex justify-center items-center font-bold transition-all duration-300 border-none ${variants[variant]}`}
      onClick={() => action()}
    >
      {children ? children : text}
    </button>
  )
}
