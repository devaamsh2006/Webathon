import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex flex-row justify-between p-5 fixed w-full items-center bg-white shadow-md shadow-slate-300 z-50 h-16'>
    <NavLink to="" className='p-3 rounded-xl bg-slate-100 hover:bg-slate-300'>Home</NavLink>
    <NavLink to="login" className='p-3 rounded-xl bg-slate-100 hover:bg-slate-300'>Login</NavLink>
    </div>
  )
}

export default Header