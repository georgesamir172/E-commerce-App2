"use client"
import React , {useContext, useState}  from 'react'
// import '@coreui/coreui/dist/css/coreui.min.css'
// import '@coreui/coreui/dist/css/coreui.navonly.css'
// import '@coreui/coreui/dist/css/coreui-utilities.css'
// import '@coreui/coreui/dist/css/coreuiwithoutreboot.min.css'
// import '@coreui/coreui/dist/css/coreuiwithoutrebootwithoututilities.min.css'
import './coreuiwithoutrebootwithoututilities.min.css'
import {
  CButton,
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import logo from "./../../../../public/screens/freshcart-logo.svg"
import  Image  from 'next/image';
import Link from 'next/link';
import { signOut, useSession } from "next-auth/react"
import { Button } from '@/components/ui/button'
import { cartContext } from '@/Context/CartContext'
// import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Badge } from "@/components/ui/badge"
const Navbar = () => {

    const {status} = useSession()
    console.log(status)
    	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
    const {numOfCartItems} = useContext(cartContext)


  
    const [visible, setVisible] = useState(false)
  return (
     <CNavbar expand="lg" className="bg-body-tertiary">
      <CContainer>
        <CNavbarBrand className='text-center p-2'>
            <Link href="/"><Image src={logo} alt="freshcart logo"/></Link>
        </CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          
            {(status === "authenticated") && <>
              <CNavbarNav className="mx-auto flex items-center">
                <CNavItem className='text-center p-2'>
                <Link href="/">
                  Home
                </Link>
                </CNavItem>
                <CNavItem className='text-center p-2'>
                  <Link href="/cart">Cart</Link>
                </CNavItem>    
                <CNavItem className='text-center p-2'>
                  <Link className='' href="/wishList">Wish List</Link>
                </CNavItem>
                <CNavItem className='text-center p-2'>
                  <Link href="/products">Products</Link>
                </CNavItem>
                <CNavItem className='text-center p-2'>
                  <Link href="/categories">Categories</Link>
                </CNavItem>
                <CNavItem className='text-center p-2'>
                  <Link href="/brands">Brands</Link>
                </CNavItem>
                 <CNavItem className='text-center p-2'>
                  <Link href="/allorders">All Orders</Link>
                </CNavItem>
              </CNavbarNav>
              <CNavItem className='text-center p-4 list-none relative'>
                <Link href="/cart">
                  {/* <Image src={logo} alt="freshcart logo" className='mx-auto my-2'/> */}
                  <i className="fa-solid text-3xl fa-cart-shopping"></i>   
                   <Badge className='absolute -top-[5%]'>
                    {numOfCartItems}
                  </Badge>
                </Link>
              </CNavItem>
              <CNavItem className='text-center p-2 list-none'>
                {/* <Link href="#">Logout</Link> */}
                <button onClick={() => signOut({callbackUrl : "/login"})} className='bg-transparent text-[#080a0ca6]'>Logout</button>
              </CNavItem>

            </> }

            {status === "unauthenticated" && <>
              <CNavbarNav className="mx-auto flex items-center">

              </CNavbarNav>
              <CNavItem className='text-center p-2 list-none'>
                <Link href="/register">Register</Link>
              </CNavItem>
              <CNavItem className='text-center p-2 list-none'>
                <Link href="/login">Login</Link>
              </CNavItem>
            
            </>}

              {status === "loading" && <>
              <CNavbarNav className="mx-auto flex items-center">

              </CNavbarNav>
            
            </>}


        </CCollapse>
      </CContainer>
    </CNavbar>
  )
}

export default Navbar