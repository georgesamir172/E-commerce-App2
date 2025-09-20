import axios from "axios"

export default async function forgotPasswordAction(values:object) {
    const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords" , values)
    console.log(data)
  return data
}