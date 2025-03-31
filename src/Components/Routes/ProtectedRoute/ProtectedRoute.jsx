import { useContext } from "react"
import { userContext } from "../../Context/User.context"
import { Navigate } from "react-router-dom"
// import Layout from "../Layout/Layout"
// import FormPage from "../../Pages/DashboardPages/FormPage"

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({children}) {
    let {token,role}=useContext(userContext)
    if(token && role!="admin"){
        return children
    }
    else if(token && role=="admin"){
        return <Navigate to="/formpage" replace/>

    }
    else {
        return <Navigate to="/login" replace/>
    }
 
}
