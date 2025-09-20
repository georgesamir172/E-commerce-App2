"use server"


import { getMyToken } from "@/utilities/token"
import axios from "axios"


export async function removeWishListItemAction(id:string){
	const token = await getMyToken()
	if(!token){
		throw Error("Please! Login first")
	}
	const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}` , {
		headers:{
			token:token as string
		}
	}) //add here remove specific cart item api and do not forget to put id in its end
return data
}