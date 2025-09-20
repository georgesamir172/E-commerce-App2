import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-[150px] bg-slate-100 mt-40 '>
        <div className='flex flex-col justify-center items-center h-full'>
            <ul className='flex justify-center items-center'>
                <li className='mx-3'><Link href="www.facebook.com"><i className="fa-brands fa-facebook text-4xl"></i></Link></li>
                <li className='mx-3'><Link href="www.facebook.com"><i className="fa-brands fa-google-plus-g text-4xl"></i></Link></li>
                <li className='mx-3'><Link href="www.facebook.com"><i className="fa-brands fa-square-instagram text-4xl"></i></Link></li>
            </ul>
            <p className='mt-4'>Copyright &copy; 2025. All rights reserved.</p>
        </div>
        
    </footer>
  )
}

export default Footer