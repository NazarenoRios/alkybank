import axios from "axios";
import Swal from "sweetalert2"
const TOPUP_MONEY = "TOPUP_MONEY"
export default function topupAction({ amount, concept }) {
  return async function (dispatch) {
    try {
      amount = Number(amount);
      let type = "topup";
      let token = JSON.parse(localStorage.getItem("token"));
      let id = 1831;
      const data = {
        type,
        concept,
        amount,
      };
      const res = await axios.post(
        `http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/${id}`,
        data,
        { headers: { Authorization: "Bearer " + token } }
      );
      if (res.data.status === 200) {
        Swal.fire("OK", res.data.error, "success");
      }
    } catch (error) {
      console.log(error);
      if (error.response.status) {
        Swal.fire("Oops!", error.message, "error");
      }
    }
  };
}
