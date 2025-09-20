"use client"

import { SessionProvider } from 'next-auth/react';
import React from 'react'
import CartContextProvider from './Context/CartContext';

const Providers = ({children} : {children : React.ReactNode}) => {
  return (
    <SessionProvider>
      {/* <CartContextProvider> */}
      <CartContextProvider>
        {children}
      </CartContextProvider>
        {/* </CartContextProvider> */}
    </SessionProvider>
  )
}

export default Providers