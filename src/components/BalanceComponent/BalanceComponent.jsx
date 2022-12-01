import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../redux/actions/getTransactions";

export default function BalanceComponent() {
    const [state, setState] = useState([]);
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    let allTransactions = useSelector(
    (state) => state.allTransactionsReducer.transactions
  );
  const transactionsTypes = (value) =>{
    if(value === "all"){
        setState(allTransactions)
    }else{
        const filterTransactions = allTransactions.filter((transactions) => transactions.type === value)
        setState(filterTransactions)}
    }
    const searchTransactions = (e) => {
        e.preventDefault();
        const filterTransactions = allTransactions.filter((transactions) => transactions.concept)
    }
  useEffect(() => {
    dispatch(getTransactions());
  }, []);
  return (
    <>
      <form>
        <label htmlFor="types">Select Type</label>
        <select name="types" onChange={(e)=>transactionsTypes(e.target.value)}>
          <option selected="true" disabled="disabled">Select</option>
          <option value="all">All</option>
          <option value="topup">Topup</option>
          <option value="payment">Payment</option>
        </select>
      </form>
      <form onSubmit={(e)=>searchTransactions(e)}>
        <input type="text" value={name} onChange={((e) => setName(e.target.value))}/>
        <button type="submit">Buscar</button>
      </form>
      <div className="container mx-auto grid md:grid-cols-3 md:gap-2 text-center">
        {state &&
            state.map((element) => (
            <div key={element.id}>
              <h1>Transaction Num : {element.id}</h1>
              <h3>Type: {element.type}</h3>
              <h3>Amount: {element.amount}</h3>
              <h4>Concept: {element.concept}</h4>
            </div>
          ))}
      </div>
    </>
  );
}
