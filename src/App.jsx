import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'

import Home1 from './Pages/Home1/Home1'
import LogIn from './Components/LogIn/LogIn'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import UserDasboard1 from './Pages/UserDasboard1/UserDasboard1'
import UserDasboard2 from './Pages/UserDasboard2/UserDasboard2'
import Loading from './Components/Loading/Loading'
import SideBar from './Components/SideBar/SideBar'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword'
import FormResponse from './Components/FormResponse/FormResponse'
import { Toaster } from 'react-hot-toast'

// import Search from './Components/Search/Search'

function App() {
 
const router=createBrowserRouter([
  {path:"/",element:<Layout />,children:[
    {index:true,element:<Home1 />},
    {path:'login',element:<LogIn />},
    {path:'userdashboard',element:<UserDasboard1 />},
    {path:'userdashboard2',element:<UserDasboard2 />},
    {path:'loading',element:<Loading />},
    {path:'sidebar',element:<SideBar />},
    {path:'forgetpassword',element:<ForgetPassword />},
    {path:'formresponse',element:<FormResponse formname="vhjvj"/>},
    // {path:'search',element:<Search/>},
    
  ]}
])
  return (
    <>
  <RouterProvider router={router}/>
  <Toaster />
    </>
  )
}

export default App
