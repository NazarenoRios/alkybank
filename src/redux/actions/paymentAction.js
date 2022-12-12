import {create, setToken} from "../../utils";

export const PAYMENT_SUCCESS = "PAYMENT_SUCCESS";

export function paymentAction( amount, concept ) {
  return async function (dispatch) {
    try {
      amount = - Number(amount);
      let type = "payment";
      let token = JSON.parse(sessionStorage.getItem("token"));
      setToken(token); 
      let id = JSON.parse(sessionStorage.getItem("walletId"));
      const data = {
        type,
        concept,
        amount,
      };
      
      dispatch({type: 'PAYMENT_LOADING', payload: true});

      const res = await create(data, `/accounts/${id}`);
      console.log(res.data)
      return dispatch({type: 'PAYMENT_SUCCESS', payload: {message:"Payment success", data: res.data}});
    }
    catch (err){
      console.log(err.message);
    }

  };
}
