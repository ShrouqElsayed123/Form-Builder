import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

// add style to search bar 
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 5, // More rounded
  border: '1px solid #ccc', // Light border, can customize
  backgroundColor: 'transparent', // No background
  marginLeft: 0,
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));


// eslint-disable-next-line react/prop-types
export default function AppBar1({ handleDrawerOpen, open }) {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[{ mr: 2 }, open && { display: 'none' }]}
        >
          <MenuIcon />
        </IconButton>
        {/* Search Bar */}
        <Box sx={{ width: '300px' }}>
  <Search noWrap component="div">
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
  </Search>
</Box>


        {/* Spacer to push search & avatar to the right */}
        <Box sx={{ flexGrow: 1 }} />

        
        {/* Avatar */}
       <div className='d-flex align-items-center justify-content-center gap-2'>
       <Avatar
        
        src="/broken-image.jpg"
        sx={{ width: 50, height: 50 }}
      />
      <p className='p-0 m-0'>Admin Name</p>
       </div>
      </Toolbar>
    </AppBar>
  );
}
