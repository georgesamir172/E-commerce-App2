"use client"
import { cartContext } from '@/Context/CartContext'
import Link from 'next/link'
import React, { useContext } from 'react'
import { toast } from 'sonner'
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
const AddToCartBtnForWishList = ({id}) => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
    const{addProductToCart} = useContext(cartContext)
    async function callingAddToCart(){
        const response = await addProductToCart(id)
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
    <div className='w-full mx-auto mt-3'>
            <button onClick={callingAddToCart} className="w-full mx-auto rounded-xl text-white py-1.5 px-3 bg-[#4fa74f] ">Add To Cart</button>
    </div>
  )
}

export default AddToCartBtnForWishList