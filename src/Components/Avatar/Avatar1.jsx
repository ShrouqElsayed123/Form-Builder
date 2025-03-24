import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar } from '@mui/material';
import { Logout, Password } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
// import { red } from '@mui/material/colors';
import { useContext } from 'react'
import { userContext } from '../Context/User.context'
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[300],
    }),
  },
}));



export default function Avatar1() {
    let {logout}=useContext(userContext)
    //function to close and open
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button 
        sx={{backgroundColor:"transparent"}}
          id="demo-customized-button"
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon sx={{ width: "25px", height: "25px", color: "gray" }} />}
        >
        <Avatar src="/broken-image.jpg" sx={{width:"60px",height:"60px"}} />
        </Button>
        <StyledMenu
          
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
         <NavLink  to="/"  onClick={logout} style={{textDecoration:"none",color:"inherit"}}>
         <MenuItem onClick={handleClose} >
            <Logout />
            Logout
          </MenuItem>
         </NavLink>
         <NavLink to="forgetpassword" style={{textDecoration:"none",color:"inherit"}}>
          <MenuItem onClick={handleClose} >
            <Password />
            Forget Password
          </MenuItem>
          </NavLink>
        </StyledMenu>
      </div>
    );
}


