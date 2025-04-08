import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'

import Home1 from './Pages/Home1/Home1'
import LogIn from './Components/LogIn/LogIn'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
// import UserDasboard1 from './Pages/UserDasboard1/UserDasboard1'
import UserDasboard2 from './Pages/UserDasboard2/UserDasboard2'
import Loading from './Components/Loading/Loading'
import SideBar from './Components/SideBar/SideBar'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword'
import FormResponse from './Components/FormResponse/FormResponse'
import { Toaster } from 'react-hot-toast'
import UserProvider from './Components/Context/User.context'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import GuestRoute from './Components/GuestRoute/GuestRoute'
import FormPage from './Pages/DashboardPages/FormPage'
import AdminRoute from './Components/AdminRoute/AdminRoute'
import DashboardCharts from './Components/DashboardComponent/DashboardCharts/DashboardCharts'
import FormTable from './Components/DashboardComponent/FormTable/FormTable'
import UserTable from './Components/DashboardComponent/UserTable/UserTable'
import EditUser from './Components/DashboardComponent/EditUser/EditUser'
import AddUser from './Components/DashboardComponent/AddUser/AddUser'
// import DashboardLayout from './Components/DashboardComponent/DashboardLayout/DashboardLayout'
// import AdminRoute from './Components/AdminRoute/AdminRoute'

// import Search from './Components/Search/Search'

function App() {

 const router =createBrowserRouter([
  {path:"/",element:<Layout />,
    children:[
          {index:true,element:<Home1 />},
         
          
          {path:'userdashboard2',element:<ProtectedRoute><UserDasboard2 /></ProtectedRoute>},
          {path:'loading',element:<Loading />},
          {path:'sidebar',element:<SideBar />},
          {path:'forgetpassword',element:<ForgetPassword />},

          {path:'formpage',element:<AdminRoute><FormPage /></AdminRoute>,
            children:[
              {index:true,element:<DashboardCharts />},
              {path:'chart',element:<DashboardCharts />},
              {path:'formtable',element:<FormTable />},
              {path:'usertable',element:<UserTable />},
              {path:'usertable/:id',element:<AddUser />},
              {path:'usertable/:id',element:<EditUser />}
            ]
          },

          {path:'formresponse',element:<FormResponse formname="formname"/>},
          // {path:'search',element:<Search/>},
          
        ]
  },
  {
    path:"/",
    element:<GuestRoute><Layout /></GuestRoute>,
    children:[
      {index:true,element:<Home1 />},
     
      {path:'login',element:<LogIn />},
    ]
  },
  // {
  //   path:"/",
  //   element:<AdminRoute><DashboardLayout /></AdminRoute>,
  //   children:[
  //     {index:true,element:<Loading />},
  //     {path:'formpage',element:<FormPage />},
     
  //   ]
  // }
])
  
  // مثال على بيانات المستخدم (يجب جلبها من السياق أو Redux)
  
    // {
    //   path: "/",
    //   element: <Layout />,
    // },
  //   {
  //     path: "/",
  //     element: <GuestRoute><Layout /></GuestRoute>,
  //     children: [{ index: true, element: <Home1 /> },
  //       { path: "login", element: <LogIn /> }],
  //   },
 
  //   {
  //     path: "/",
  //     element: <ProtectedRoute><Layout /></ProtectedRoute>,
  //     children: [
  //         {index: true, element: <Home1 /> },
  //         {path:'userdashboard2',element:<UserDasboard2 />},
  //         {path:'loading',element:<Loading />},
  //         {path:'sidebar',element:<SideBar />},
  //         {path:'forgetpassword',element:<ForgetPassword />},
  //         {path:'formpage',element:<FormPage />},
  //         {path:'formresponse',element:<FormResponse formname="formname"/>}
  //     ],
  //   },
  //   // {
  //   //   path: "/",
  //   //   element: <ProtectedRoute><Layout /></ProtectedRoute>,
  //   //   children: [{ index: true, element: <Home1 /> }],
  //   // },
  //   // {
  //   //   path: "*",
  //   //   element: <NotFound />,
  //   // },
  // ]);
  

  



// const router=createBrowserRouter([
//   {path:"/",element:<Layout />,children:[
//     {index:true,element:<Home1 />},
//     {path:'login',element:<LogIn />},
//     {path:'userdashboard',element:<UserDasboard1 />},
//     {path:'userdashboard2',element:<UserDasboard2 />},
//     {path:'loading',element:<Loading />},
//     {path:'sidebar',element:<SideBar />},
//     {path:'forgetpassword',element:<ForgetPassword />},
//     {path:'formresponse',element:<FormResponse formname="vhjvj"/>},
//     // {path:'search',element:<Search/>},
    
//   ]}
// ])
  return (
    <>
    <UserProvider>
    <RouterProvider router={router}/>
    <Toaster />
    </UserProvider>

 
    </>
  )
}

export default App
