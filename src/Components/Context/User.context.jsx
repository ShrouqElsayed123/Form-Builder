import { createContext, useState } from "react";



// eslint-disable-next-line react-refresh/only-export-components
export const userContext=createContext(null);

// eslint-disable-next-line react/prop-types
export default function UserProvider({children}){
     
    let [token,setToken]=useState(localStorage.getItem("token"));
    let role="adminu";
    function logout(){
       setToken(null);
        localStorage.removeItem("token");

    }
    return <userContext.Provider value={{token,setToken,logout,role}}>
    {children}
    </userContext.Provider>
}