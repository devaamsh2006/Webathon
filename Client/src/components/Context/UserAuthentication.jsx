import { createContext, useEffect, useState } from "react";
export const userDetails=createContext();
const UserAuthentication = ({children}) => {
    const [currentUser,setCurrentUser]=useState({
        name:'',
        email:'',
        userType:'',
        userId:''
    });
    return(
    <userDetails.Provider value={{currentUser,setCurrentUser}}>
        {children}
    </userDetails.Provider>
    )
}

export default UserAuthentication