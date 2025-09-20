"use server"


import { getMyToken } from "@/utilities/token"
import axios from "axios"
import { jwtDecode } from "jwt-decode"


export async function getUserOrder(){
	
	const token = await getMyToken()
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const {id} = jwtDecode(token)
	if(!token){
		throw new Error("Login First")
	}
	const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)  //put here the api of get user orders and in its end put the id of the user
	
	return data
}