import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const Login = () => {
  return (
    <div className='flex w-full justify-center'>
    <SignIn />
    </div>
  )
}

export default Login