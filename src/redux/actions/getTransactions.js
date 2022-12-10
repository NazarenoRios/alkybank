import axios from "axios"
export const ALL_TRANSACTIONS = "ALL_TRANSACTIONS";
export function getTransactions () {
    return async function (dispatch) {
        let token = sessionStorage.getItem("token")
        let res = await axios.get(`http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions`,
          { headers: { Authorization: "Bearer " + token } })
        let nextPage = res.data.nextPage
        let page = 1;
        while(nextPage){
          let newRes = await axios.get(`http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions?page=${page + 1}`,
          { headers: { Authorization: "Bearer " + token } })
          page = page + 1;
          newRes.data.data.map(obj => res.data.data.push(obj))
          nextPage = newRes.data.nextPage
        }
          return dispatch({type: ALL_TRANSACTIONS, payload: res.data.data})
    }
};