"use server"
import { getMyToken } from "@/utilities/token"
//this component calls api to add product to cart

import axios from "axios"

            //  eslint-disable-next-line @typescript-eslint/ban-ts-comment
	        //  @ts-ignore
export async function AddToCartAction(id){
    const token = await getMyToken()

    const values = {
    productId: id
}
    const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/cart" , values ,{
        headers:{
        token:token as string
    }
    } )
    return data
}