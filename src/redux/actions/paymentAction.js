import axios from "axios";
// import Swal from "sweetalert2"
export function paymentAction( amount, concept ) {
  return async function () {
    try {
      amount = - Number(amount);
      let type = "payment";
      //let token = JSON.parse(localStorage.getItem("token"));
      let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MjMwNywicm9sZUlkIjoxfSwiaWF0IjoxNjY5ODY1MTU2LCJleHAiOjE2Njk5NTE1NTZ9.akLNx4kJgC_hUQDPEu7p2F7kerldQ2RVVMIjkxkYcio";
      let id = 1838;
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
      console.log(res.data)
      if (res.data.message === "OK") {
        Swal.fire("OK", "Payment Successfully", "success");
      }
    } catch (error) {
      console.log(error);
      if (error.response.status) {
        Swal.fire("Oops!", error.message, "error");
      }
    }
  };
}
