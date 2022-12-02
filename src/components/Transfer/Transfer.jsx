import Button from "../Button"

export default function Transfer() {
  return (
    <section className="flex flex-col justify-center gap-5 w-full max-w-[375px] h-full ml-[40px] mt-[30px] mr-[30px]">
      <h1 className="font-semibold text-[25px]">Transfer</h1>
      <div className="w-full p-5 bg-[#fafafa] rounded-[10px]">
        <h2 className="text-[#929eae]">Your Balance</h2>
        <span className="font-bold">$5240.00</span>
      </div>
      <div>
        <form className="flex flex-col justify-center gap-10 max-w-[400px]" action="">
          <div>
            <h2 className="font-semibold text-[18px]">Enter CVU</h2>
            <input
              className="h-[48px] w-full rounded-[15px] focus:outline outline-1 outline-primary border-solid border-[1px] border-[#F5F5F5] bg-[#f8f8f8] pl-3"
              placeholder="Example: 4281"
              type="text"
            />
          </div>
          <div className="flex flex-col justify-center gap-3">
            <h2 className="font-semibold text-[18px]">Choose the transfer type</h2>
            <div className="flex items-center gap-2">
              <input type="radio" id="topup" name="type" value="topup"></input>
              <label for="topup">Topup</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" id="payment" name="type" value="payment"></input>
              <label for="payment">Payment</label>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <h2 className="font-semibold text-[18px]">¿How much do you want to transfer?</h2>
            <div className="w-full flex justify-center items-center h-[48px] rounded-[15px] focus:outline outline-1 outline-primary border-solid border-[1px] border-[#F5F5F5] bg-[#f8f8f8] relative">
              <span className="absolute left-[10px] top-[10px]">$</span>
              <input
                className="h-full w-full rounded-[15px] focus:outline outline-1 outline-primary border-solid border-[1px] border-[#F5F5F5] bg-[#f8f8f8] pl-7"
                placeholder="Example: $2000"
                type="text"
                name="amount"
              />
            </div>
          </div>
          <Button variant="primary" text="Send transfer" />
        </form>
      </div>
    </section>
  )
}
