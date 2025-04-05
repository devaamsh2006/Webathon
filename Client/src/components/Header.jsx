import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { useClerk, useUser } from '@clerk/clerk-react'
import { userDetails } from './Context/UserAuthentication'

const Header = () => {
  const {signOut}=useClerk()
  const {currentUser,setCurrentUser}=useContext(userDetails);
  const handleSignOut=async()=>{
    await signOut();
    setCurrentUser({
      name:'',
      email:'',
      userType:'',
      userId:''
    });
    Navigate('/');
  }

  const {isSignedIn}=useUser();
  return (
    <div className='flex flex-row justify-between p-5 fixed w-full items-center bg-white shadow-md shadow-slate-300 z-50 h-16'>
    <h1 className='heading text-xl'>STUEVENT</h1>
    <div className='w-1/3 flex justify-around'>
    <NavLink to="" className='p-3 rounded-xl hover:bg-slate-300'>Home</NavLink>
    {isSignedIn ? 
    <button className='p-3 rounded-xl hover:bg-slate-300' onClick={handleSignOut}>SignOut</button>
    :
    <NavLink to="login" className='p-3 rounded-xl hover:bg-slate-300'>Login</NavLink>
    }
    {
      currentUser.userType==='user'?
      <NavLink to="events" className='p-3 rounded-xl hover:bg-slate-300'>Events</NavLink>
      :
      <NavLink to="clubevents" className='p-3 rounded-xl hover:bg-slate-300'>Events</NavLink>
    }
    
    <NavLink to="volunteer/12345" className='p-3 rounded-xl hover:bg-slate-300'>Volunteer</NavLink>
    </div>
    </div>
  )
}

export default Header