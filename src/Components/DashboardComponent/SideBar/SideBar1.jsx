/* eslint-disable react/prop-types */
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Drawer from '@mui/material/Drawer';

import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Group, ListAlt, Logout } from '@mui/icons-material';
import { DrawerHeader } from '../../../Pages/DashboardPages/FormPage';

const drawerWidth = 240;

 
export default function SideBar1({handleDrawerClose,theme,open}) {
  
  return (
    <>
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >

        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        
        <Divider />
        
        <nav aria-label="main mailbox folders">
        <List sx={{marginTop:"20px"}}>
        <ListItem disablePadding >
            <ListItemButton>
              <ListItemIcon>
                <ListAlt />
              </ListItemIcon>
              <ListItemText primary="Forms" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{marginTop:"10px"}}>
            <ListItemButton>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>

         
        </List>
      </nav>
      <Divider />
     <ListItem disablePadding sx={{marginTop:"50px"}}>
            <ListItemButton>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItemButton>
          </ListItem>
       
      </Drawer>
    </>
  )
}
