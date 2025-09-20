import axios from "axios"
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
export default async function resetPasswordAction(values) {
    const {data} = await axios.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword" , values)
    console.log(data)
  return data
}