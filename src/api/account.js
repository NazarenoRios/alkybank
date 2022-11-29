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
