import {create, setToken} from "../../utils";
// import { toast } from "react-toastify";
export function paymentAction( amount, concept ) {
  return async function () {
    // try {
      amount = - Number(amount);
      let type = "payment";
      let token = JSON.parse(sessionStorage.getItem("token"));
      setToken(token); 
      let id = 1838;
      const data = {
        type,
        concept,
        amount,
      };
      const res = await create(data, `/accounts/${id}`);
      console.log(res.data)

  };
}
