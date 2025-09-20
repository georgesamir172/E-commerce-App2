"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, registerSchemaType } from '@/schema/register.schema'
import { log } from 'console'
import axios from 'axios'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const Register = () => {

  const router = useRouter()

  const form = useForm<registerSchemaType>({
    defaultValues:{
      name: "",
      email:"",
      password:"",
      rePassword:"",
      phone:""
    },resolver : zodResolver(registerSchema)
  })
  async function handleRegister(values : registerSchemaType){
      console.log(values , "my values")
      try {
        const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values)
        console.log(data)
        toast.success(data.message,{
          position:'top-center',
          duration:4000
        })

        router.push("/login")
      } catch (error) {
        			//  eslint-disable-next-line @typescript-eslint/ban-ts-comment  
	        //  @ts-ignore	 
        toast.error(error.response.data.message,{
          position:'top-center',
          duration:4000
        })
        console.log(error)
      }
  }
  function my_log(){
    console.log("on my change")
  }
  return (
    <div className='w-[80%] mx-auto'>
      <h1 className='font-bold text-4xl text-center my-3'>Register Now</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleRegister)} className="space-y-8">
          <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className='mb-2'>
              <FormLabel className='my-2'>Name :</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter Your Name" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
          />

          <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className='mb-2'>
              <FormLabel className='my-2'>Email :</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter Your Email" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
          />

          <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className='mb-2'>
              <FormLabel className='my-2'>Password :</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter Your Password" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
          />

          <FormField
          control={form.control}
          name="rePassword"
          render={({ field }) => (
            <FormItem className='mb-2'>
              <FormLabel className='my-2'>Re-Password :</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter Your Re-Password" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
          />

          <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className='mb-2'>
              <FormLabel className='my-2'>Phone :</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Enter Your Phone" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
          />
          <Button type="submit" className='w-full mt-4'>Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default Register