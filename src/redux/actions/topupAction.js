import axios from "axios";
// import Swal from "sweetalert2"
export function topupAction( amount, concept ) {
  return async function () {
    try {
      amount = Number(amount);
      let type = "topup";
      // let token = JSON.parse(localStorage.getItem("token"));
      let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MjMwNywicm9sZUlkIjoxfSwiaWF0IjoxNjY5ODY1MTU2LCJleHAiOjE2Njk5NTE1NTZ9.akLNx4kJgC_hUQDPEu7p2F7kerldQ2RVVMIjkxkYcio"
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
