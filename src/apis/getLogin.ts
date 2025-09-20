"use server"
import axios from "axios"
        	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
export default async function getLogin(values) {
    const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",values)
    console.log(data)
  return data
}