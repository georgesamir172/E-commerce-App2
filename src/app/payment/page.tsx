"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cartContext } from '@/Context/CartContext'
import { cashPaymentAction } from '@/PaymentActions/cashPayment'
import { onlinePaymentAction } from '@/PaymentActions/onlinePayment'
import { useRouter } from 'next/navigation'
import React, { useContext, useRef } from 'react'
import { toast } from 'sonner'

const Payment = () => {
	const router = useRouter()  //Fatal Mistake: make sure that use Router is imported from next/navigation not next/router
	            //   eslint-disable-next-line @typescript-eslint/ban-ts-comment 
	        //   @ts-ignore	
	const {cartId , afterPayment} = useContext(cartContext) //watch p2 from start to 2:00 to make the cartId in context

	const details = useRef("")
	const phone = useRef("") 
	const city = useRef("")

	async function cashPayment(){
		const values ={
    	shippingAddress:{
			            //   eslint-disable-next-line @typescript-eslint/ban-ts-comment 
	        //   @ts-ignore	
        details: details.current?.value,
		            //   eslint-disable-next-line @typescript-eslint/ban-ts-comment 
	        //   @ts-ignore	
        phone: phone.current?.value,
		            //   eslint-disable-next-line @typescript-eslint/ban-ts-comment 
	        //   @ts-ignore	
        city: city.current?.value
        }
		}
		console.log(values)


			// 		shippingAddress:{
			// 	details: details.current?.value,
			// 	phone: phone.current?.value,
			// 	city:city.current?.value
				
			// }

		
		try{
			const data = await cashPaymentAction(cartId , values)
			console.log(data , "my data")

			if(data.status==="success"){
				toast.success(data.status , {   
					position:"top-center" , 
					duration:1000
				})}	
				console.log("error")
				afterPayment()
				router.push("/allorders") //to direct the user to the cart page
			
		} catch(error){
			console.log(error,"myerror")
		}
		
		console.log(values)
	}


	async function onlinePayment(){
	const values = { // checkfrom api
		shippingAddress:{
			            //   eslint-disable-next-line @typescript-eslint/ban-ts-comment 
	        //   @ts-ignore	
			details : details.current?.value,
			            //   eslint-disable-next-line @typescript-eslint/ban-ts-comment 
	        //   @ts-ignore	
			phone : phone.current?.value,
			            //   eslint-disable-next-line @typescript-eslint/ban-ts-comment 
	        //   @ts-ignore	
			city:city.current?.value
			
		}
	}
	const currentUrl = window.location.origin
	// console.log(currentUrl , "from payment comp")
	try{
		const data = await onlinePaymentAction(cartId , values , currentUrl )
		console.log(data)

		if(data.status==="success"){
			window.location.href = data.session.url
		}
	} catch(error){
		console.log(error)
	}
	
	console.log(values)
	}

return(
 //add in middleware in router the route "/payment" and in matcher at the end of middleware
 //add in cart below the clear button

	<div className="w-[80%] mx-auto my-10 px-5">
		<h1 className="text-center font-bold text-2xl">Payment</h1>
		<div>
			   {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment  */}
	           {/* @ts-ignore	 */}
			<label htmlfor="details">Details</label>
			{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment  */}
	        {/* @ts-ignore	 */}
			<Input ref={details} type="text" id="details" className="mb-3"/> 
				{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment  */}
	        {/* @ts-ignore	 */}
			<label htmlfor="phone">Phone</label>
						{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment  */}
	        {/* @ts-ignore	 */}
			<Input ref={phone} type="tel" id="phone" className="mb-3"/>
				{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment  */}
	        {/* @ts-ignore	 */}
			<label htmlfor="city">City</label>
						{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment  */}
	        {/* @ts-ignore	 */}
			<Input ref={city} type="text" id="city" className="mb-3"/>

			<Button onClick={cashPayment} className="">Cash Payment</Button> 	
			<Button onClick={onlinePayment} className="mx-2">Online Payment</Button>
		</div>	
	</div> 


) }
export default Payment
