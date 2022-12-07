export const useTransfer = () => {
  const handleSubmit = (values, walletState) => {
    getWalletByAccountId(values.accountId).then(() => {
      if (walletState < values.amount) {
        // return Swal.fire({
        //   icon: "error",
        //   title: "You don't have enough money",
        //   showConfirmButton: true
        // })
      } else {
        transferToAccountId(values).catch(() => {
          // return Swal.fire({
          //   icon: "error",
          //   title: "An error has occurred. Try again later",
          //   showConfirmButton: true
          // })
        })
      }
    }).catch = error => {
      if (error.status === 500) {
        // return Swal.fire({
        //   icon: "error",
        //   title: "The wallet id is not valid",
        //   showConfirmButton: true
        // })
      } else {
        // return Swal.fire({
        //   icon: "error",
        //   title: "An error has occurred. Try again later",
        //   showConfirmButton: true
        // })
      }
    }
  }

  const getWalletByAccountId = async accountId => {
    const response = await fetch(
      `http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/${accountId}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.token}`
        }
      }
    )
    return await response.json()
  }

  const transferToAccountId = async values => {
    const body = {
      type: values.type,
      concept: "string",
      amount: values.amount
    }
    const response = await fetch(
      `http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/${values.accountId}`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    )
    return await response.json()
  }

  return { handleSubmit }
}
