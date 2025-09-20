"use server"

import { getMyToken } from "@/utilities/token"





export async function getUserCartAction(){
	const token = await getMyToken()

if(!token){
	throw Error("Please! Login First")
}

const response = await fetch("https://ecommerce.routemisr.com/api/v1/cart" , {    //get the api of get logged user cart
	headers:{
	token:token as string
}
})
const data = await response.json()

return data
}
