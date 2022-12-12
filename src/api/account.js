export const createUser = async formData => {
  const response = await fetch(
    "http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(formData)
    }
  )
  return response.json()
}

export const logUser = async formData => {
  const response = await fetch(
    "http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/login",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(formData)
    }
  )
  return response.json()
}

export const getWallet = async token => {
  const response = await fetch(
    "http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/me",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    }
  )
  return await response.json()
}
