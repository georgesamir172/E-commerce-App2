"use client"
import { AddToWishListAction } from '@/WishListActions/addToWishList'
import { getWishListForHeart } from '@/WishListActions/getWishListForHeart'
// import { cartContext } from '@/Context/CartContext'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'sonner'
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
 const AddToWishListBtn = ({id , mycolor}) => {
    
    const [heartColor, setHeartColor] = useState(mycolor);
    // const receivedHeartColor = params.mycolor
    // console.log(receivedHeartColor)
    // setHeartColor(`"${receivedHeartColor}"`)
    // if(mycolor === "red"){
    //     setHeartColor('text-red-600')
    // }
// setHeartColor('text-red-600')

    async function callingAddToWishListAction(){
        setHeartColor('text-red-600')
        try{
            const data = await AddToWishListAction(id) //check on this name
                console.log(data , "add wishlist response")
                toast.success(data.message,{
                position:'top-center',
                duration:3000
            })
            
            return data
            }catch(error){
                console.log(error , "add wishlist error")
                toast.error("Error! Product is not added to cart",{
                position:'top-center',
                duration:3000
        })
            }

    }

  return (
    // <div className='w-[80%] mx-auto mt-3 opacity-0 translate-y-44 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500'>
            <button id="heartBtn" onClick={callingAddToWishListAction} className="w-fit ms-auto mt-3 me-6"><i id="heart" className={`fa-solid fa-heart text-3xl ${heartColor}`}></i></button>
    // </div>
  )
}

export default AddToWishListBtn