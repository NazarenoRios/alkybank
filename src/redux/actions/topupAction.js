import axios from "axios";
import { toast } from "react-toastify";

export const TOPUP_SUCCESS = "TOPUP_SUCCESS";
export function topupAction( amount, concept ) {
  return async function (dispatch) {
    try {
      amount = Number(amount);
      let type = "topup";
      let token = sessionStorage.getItem("token");
      let id = JSON.parse(sessionStorage.getItem("walletId"));
      const data = {
        type,
        concept,
        amount,
      };

      dispatch({ type: "TOPUP_LOADING", payload: true })
      
      const res = await axios.post(
        `http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/${id}`,
        data,
         { headers: { Authorization: "Bearer " + token } }
      );
      return dispatch({type: TOPUP_SUCCESS, payload: {message:"Topup success", data: res.data}})


    } catch (error) {

    console.log(error)
        toast.error(error.message);
     
    }
  };
}
