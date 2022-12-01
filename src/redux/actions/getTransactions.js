import axios from "axios"
export const ALL_TRANSACTIONS = "ALL_TRANSACTIONS";
export function getTransactions () {
    return async function (dispatch) {
        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MjMwNywicm9sZUlkIjoxfSwiaWF0IjoxNjY5ODY1MTU2LCJleHAiOjE2Njk5NTE1NTZ9.akLNx4kJgC_hUQDPEu7p2F7kerldQ2RVVMIjkxkYcio";
        let res = await axios.get(`http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions`,
          { headers: { Authorization: "Bearer " + token } })
        return dispatch({type: ALL_TRANSACTIONS, payload: res.data.data})
    }
};