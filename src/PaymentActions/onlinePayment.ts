"use server"


import { getMyToken } from "@/utilities/token"
import axios from "axios"


            //  eslint-disable-next-line @typescript-eslint/ban-ts-comment  
	        //  @ts-ignore	
export async function onlinePaymentAction(id:string , values:object , myurl){
	const token = await getMyToken()     

	if(!token){
		throw new Error("Login First")
	}
	const {data} = await axios.post (`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=${myurl}` , values, { 
							//get the api of checksession  and put in its middle the cart id and in its end window.locatin and import axios
		headers:{
			token : token as string		
		}
	})
return data 
} 