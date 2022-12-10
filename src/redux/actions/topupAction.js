import axios from "axios";
import { toast } from "react-toastify";

export const TOPUP_SUCCESS = "TOPUP_SUCCESS";
export function topupAction( amount, concept ) {
  return async function (dispatch) {
    try {
      amount = Number(amount);
      let type = "topup";
      // let token = JSON.parse(sessionStorage.getItem("token"));
      let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MjMwNywicm9sZUlkIjoxfSwiaWF0IjoxNjcwMDEwOTMzLCJleHAiOjE2NzAwOTczMzN9.LIFf-tm8PhKQd5-nyFiliadFsAadv7cFc3cYWbFPjP0"
      let id = 1838;
      const data = {
        type,
        concept,
        amount,
      };
      console.log(data)
      
      const res = await axios.post(
        `http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/${id}`,
        data,
         { headers: { Authorization: "Bearer " + token } }
      );
      return dispatch({type: TOPUP_SUCCESS, payload: true})


    } catch (error) {
      console.log(error);
      if (error.response.status) {
        toast.error(error.message);
      }
    }
  };
}
