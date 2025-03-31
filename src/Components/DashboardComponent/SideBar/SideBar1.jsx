/* eslint-disable react/prop-types */
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import logo from '../../../assets/imgs/Logo.png'
import Drawer from '@mui/material/Drawer';

import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Group, Home, ListAlt, Logout } from '@mui/icons-material';
import { DrawerHeader } from '../../../Pages/DashboardPages/FormPage';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../Context/User.context';

const drawerWidth = 240;

 
export default function SideBar1({handleDrawerClose,theme,open}) {
  let {logout}=useContext(userContext)
  
  return (
    <>
    
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:"#F5F5F5",

            

          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >

        <DrawerHeader>
        <NavLink className="navbar-brand d-flex align-items-center gap-1" to="/">
    <img src={logo} alt="Logo" width="40"  className="d-inline-block align-text-top"/>
      <span className=' fw-bold'>MNU Form Builder</span>
    </NavLink>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        
        </DrawerHeader>
       
        <Divider />
        
        <nav aria-label="main mailbox folders">
        <List sx={{marginTop:"20px"}}>

        <NavLink className="nav-link mx-3" 
             style={({ isActive }) => isActive ? { backgroundColor: 'white', borderLeft:'5px solid #4EB100' } : {}}
              to="chart" >
        <ListItem disablePadding >
            <ListItemButton>
              <ListItemIcon>
                <Home sx={{
                  color:"black"
                }} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        <NavLink className="nav-link mx-3" 
             style={({ isActive }) => isActive ? { backgroundColor: 'white', borderLeft:'5px solid #4EB100' } : {}}
              to="formtable" >
        <ListItem disablePadding >
            <ListItemButton>
              <ListItemIcon>
                <ListAlt sx={{
                  color:"black"
                }} />
              </ListItemIcon>
              <ListItemText primary="Forms" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        <NavLink
         className="nav-link mx-3" 
         style={({ isActive }) => isActive ? { backgroundColor: 'white', borderLeft:'5px solid #4EB100' } : {}}
         to="usertable" 
        >
        <ListItem disablePadding sx={{marginTop:"10px"}}>
            <ListItemButton>
              <ListItemIcon>
                <Group sx={{
                  color:"black"
                }}/>
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        

         
        </List>
      </nav>
      <Divider />
      <NavLink  className="nav-link mx-3" onClick={logout}>
      <ListItem disablePadding sx={{marginTop:"50px"}}>
            <ListItemButton>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItemButton>
          </ListItem>
       

      </NavLink>
    
      </Drawer>
    </>
  )
}
