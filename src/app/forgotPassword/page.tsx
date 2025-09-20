"use client"
import forgotPasswordAction from '@/apis/forgotPassword'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

const ForgotPassword = () => {

    const forgotPasswordMail = useRef("")
    const[forgotPasswordData , setForgotPasswordData] = useState("")


    
    async function getForgotPassword(){
        const values ={
            //   eslint-disable-next-line @typescript-eslint/ban-ts-comment 
	        //   @ts-ignore	
            email:forgotPasswordMail.current?.value
        }
        try{
            const data = await forgotPasswordAction(values)	
            // setForgotPasswordData(data.numOfCartItems)

            console.log(values)
            	if(data.statusMsg==="success"){
				toast.success(data.message , {   
					position:"top-center" , 
					duration:3000
				})}	
            
            window.location.href = "/verifyResetCode"
            
            return data
            
            
        } catch(error){
            console.log(error)
            console.log(values , "from error")
            //   eslint-disable-next-line @typescript-eslint/ban-ts-comment 
	        //   @ts-ignore				
            toast.error(error , {   
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
		<h1 className="text-center font-bold text-2xl">Forgot Password</h1>
		<div  className="my-10">
            	 {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
	 {/* @ts-ignore				 */}
			<label htmlfor="email">Enter Your Email</label>
            	 {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
	 {/* @ts-ignore				 */}
			<Input ref={forgotPasswordMail} type="email" id="email" className="my-3"/> 

			<Button onClick={getForgotPassword} className="">Reset</Button> 	
		</div>	
	</div>
  )
}

export default ForgotPassword