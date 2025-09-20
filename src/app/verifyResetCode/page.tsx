"use client"
import verifyResetCodeAction from '@/apis/verifyResetCode'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

const VerifyResetCode = () => {

    const myResetCode= useRef("")
    const[passwordResetCode , setpasswordResetCode] = useState("")


    
    async function getVerifyResetCode(){
        const values ={
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
	        // @ts-ignore
            resetCode:myResetCode.current?.value
        }
        try{
            const data = await verifyResetCodeAction(values)	
            // setForgotPasswordData(data.numOfCartItems)

            console.log(values)
				toast.success(data.status , {   
					position:"top-center" , 
					duration:1000
				})
            
            window.location.href = "/resetPassword"
            
            return data
            
            
        } catch(error){
            console.log(error)
            console.log(values , "from error")
                    			//  eslint-disable-next-line @typescript-eslint/ban-ts-comment  
	        //  @ts-ignore	 
            toast.error(error.response.data.message , {   
                position:"top-center" , 
                duration:3000
            })
    
        }
        
    }

    // useEffect(function (){
    //     getForgotPassword()
    // } , [])
  return (
    <div className="w-[80%] mx-auto my-10 px-5">
		<h1 className="text-center font-bold text-2xl">Verify Reset Code</h1>
		<div className="my-10">
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment   */}
	        {/* @ts-ignore	  */}
			<label htmlfor="myResetCode">Enter the Received Reset Code</label>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment   */}
	        {/* @ts-ignore	  */}
			<Input ref={myResetCode} type="text" id="myResetCode" className="my-3"/> 

			<Button onClick={getVerifyResetCode} className="">Verify</Button> 	
		</div>	
	</div>
  )
}

export default VerifyResetCode