import Breadcrumbs from '@mui/material/Breadcrumbs';
import { ListItemButton, ListItemText } from '@mui/material';
import {  KeyboardDoubleArrowRight } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function EditBreadcrumbs() {
  return (
   <>
  <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" separator={<KeyboardDoubleArrowRight/>}>
      <NavLink
               
               sx={{ display: 'flex', alignItems: 'center' }}
               className="nav-link" 
               to="/formpage/usertable"
            //    style={({ isActive }) => isActive ? {fontWeight:"bold", color:' #4EB100' } : {}}
              >
              
                  <ListItemButton>
                    {/* <ListItemIcon sx={{minWidth:"fit-content"}}>
                      <Group sx={{
                        color:"black",
                        width:"20px",
                        marginRight:"5px"
                      }}/>
                    </ListItemIcon> */}
                    <ListItemText primary="Users" />
                  </ListItemButton>
                
              </NavLink>
              <NavLink
               
               sx={{ display: 'flex', alignItems: 'center' }}
               className="nav-link" 
               to="/formpage/usertable/:id"
               style={ {fontWeight:"bold", color:' #4EB100' } }
              >
              
                  <ListItemButton>
                    {/* <ListItemIcon sx={{minWidth:"fit-content"}}>
                      <Edit sx={{
                       color:"#4EB100",
                       fontWeight:"bold",
                       width:"20px",
                       marginRight:"5px"
                      }}/>
                    </ListItemIcon> */}
                    <ListItemText primary="Edit Users" />
                  </ListItemButton>
                
              </NavLink>

     

        
     
      </Breadcrumbs>
    </div>
   </>
  )
}



