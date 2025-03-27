import { useContext } from "react"
import { userContext } from "../Context/User.context"
import { Navigate } from "react-router-dom"
// eslint-disable-next-line react/prop-types
export default function GuestRoute({children}) {
    let {token}=useContext(userContext)
   if(!token){
    return children 
   }
   else{
    return <Navigate to="/"  />
   }
}
