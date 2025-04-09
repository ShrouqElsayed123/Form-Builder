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
// import EditUser from './Components/DashboardComponent/EditUser/EditUser'
import AddUser from './Components/DashboardComponent/AddUser/AddUser'
import EditUser from './Components/DashboardComponent/EditUser/EditUser'
import NotFound from './Components/NotFound/NotFound'
// import DashboardLayout from './Components/DashboardComponent/DashboardLayout/DashboardLayout'
// import AdminRoute from './Components/AdminRoute/AdminRoute'

// import Search from './Components/Search/Search'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        // Public Routes
        { index: true, element: <Home1 /> },
        { path: "login", element: <GuestRoute><LogIn /></GuestRoute> },
        { path: "forgetpassword", element: <ForgetPassword /> },
        { path: "loading", element: <Loading /> },

        // Protected Routes
        {
          path: "userdashboard2",
          element: <ProtectedRoute><UserDasboard2 /></ProtectedRoute>,
        },
        {
          path: "sidebar",
          element: <ProtectedRoute><SideBar /></ProtectedRoute>,
        },

        // Admin-Only Routes
        {
          path: "formpage",
          element: <AdminRoute><FormPage /></AdminRoute>,
          children: [
            { index: true, element: <DashboardCharts /> },
            { path: "chart", element: <DashboardCharts /> },
            { path: "formtable", element: <FormTable /> },
            
            // User Management
            {
              path: "usertable",
              children: [
                { index: true, element: <UserTable /> }, // /formpage/usertable
                { path: "adduser", element: <AddUser /> },   // /formpage/usertable/add
                { path: ":id", element: <EditUser /> },  // /formpage/usertable/:id
              ],
            },
          ],
        },
        

        // Shared Route
        {
          path: "formresponse",
          element: <ProtectedRoute><FormResponse formname="formname" /></ProtectedRoute>,
        },

        // Optional: 404 fallback
        {
          path: "*",
          element:<NotFound />,
        },
      ],
    },
  ]);

  return (
    <UserProvider>
      <RouterProvider router={router} />
      <Toaster />
    </UserProvider>
  );
}

export default App
