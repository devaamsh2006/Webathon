import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const Login = () => {
  return (
    <div className='flex w-full justify-center mt-2'>
    <SignIn />
    </div>
  )
}

export default Login