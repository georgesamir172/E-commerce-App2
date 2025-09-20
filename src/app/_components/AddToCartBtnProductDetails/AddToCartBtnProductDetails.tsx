"use client"
import React from 'react'
import {AddToCartAction } from '@/CartActions/addToCart'
import { toast } from 'sonner'
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
const AddToCartBtnProductDetails = ({id}) => {
    async function callingAddToCart(){
        const response = await AddToCartAction(id)
        console.log(response)
        console.log(id ,'product id')
        console.log(response ,"add to cart responce")
    
        if(response.status === "success"){
            toast.success(response.message,{
            position:'top-center',
            duration:3000
        })
        }else{
            toast.error("Error! Product is not added to cart",{
            position:'top-center',
            duration:3000
        })
        }



    }
  return (
    <div>
        <button onClick={callingAddToCart} className="w-full mx-auto rounded-xl text-white py-1.5 px-3 bg-[#22db14] hover:bg-[#31bd91] transition-all duration-100 ">Add To Cart</button>
    </div>
  )
}

export default AddToCartBtnProductDetails