import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { ClerkProvider } from '@clerk/clerk-react'
import ChatBot from './pages/ChatBot'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const RootLayout = () => {
  return (
    <div className='flex flex-col relative'>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <Header />
    <div className='mt-8 pt-8'>
    <Outlet />
    </div>
    <Footer />
    <ChatBot />
    </ClerkProvider>
    </div> 
  )
}

export default RootLayout