import Image from 'next/image'
import React from 'react'
import errorImg from "./../../public/screens/404.jpg"

const ErrorPage = () => {
  return (
    <div>
        <Image src={errorImg} alt='error image'/>
    </div>
  )
}

export default ErrorPage