import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import { dataset ,valueFormatter} from './dataset/weather';


import AppBar1 from '../../Components/DashboardComponent/AppBar/AppBar1';
import SideBar1 from '../../Components/DashboardComponent/SideBar/SideBar1';

import Paper from '@mui/material/Paper';
import styles from './FormPage.module.css'
import { Group, ListAlt, TrendingUp } from '@mui/icons-material';
import { PieChart } from '@mui/x-charts';


const drawerWidth = 240;
///////////
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft:`-${drawerWidth}px`,
    width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }),
);



////////////////
export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
///////////////////////////


  const DemoPaper = styled(Paper)(({ theme }) => ({
    width:"fit-content",
    height: "fit-content",
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));
  
/////////////////component
export default function FormPage() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* //////////nav  */}
      <AppBar1 handleDrawerOpen={handleDrawerOpen} open={open}/>
     

        {/* /////////////sidebar */}
        <SideBar1 handleDrawerClose={handleDrawerClose} theme={theme} open={open}/>
      

      {/* ////////////content/  */}
      <Main open={open}>
        <DrawerHeader >
               
            
        </DrawerHeader>
      {/* <FormTable /> */}
      <div className='d-flex align-items-center justify-content-center flex-column gap-5 mt-5'>
     
      <div className='d-flex align-items-center justify-content-center gap-5'>
      <DemoPaper className={`${styles.dashboard1paper} d-flex align-items-center justify-content-center gap-3  `} elevation={1}  >
      <ListAlt  sx={{
        color:"#4EB100",
        backgroundColor:"#4db1003d",
        padding:"8px",
        borderRadius:"50%",
        fontSize:"60px"
      }} />
       <div>
       <p>Numbers Of Forms</p>
       <h3>200 <TrendingUp/></h3>
       </div>
      </DemoPaper>

      <DemoPaper className={`${styles.dashboard1paper} d-flex align-items-center justify-content-center gap-3  `} elevation={1}  >
      <Group 
      sx={{
        color:"#4EB100",
        backgroundColor:"#4db1003d",
        padding:"8px",
        borderRadius:"50%",
        fontSize:"60px"
      }} 
      />
      <div>
      <p>Numbers Of Users</p>
      <h3>200 <TrendingUp/></h3>
      </div>
      </DemoPaper>
      </div>

      <div>
      <DemoPaper elevation={3} >
      <PieChart
      
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'saved forms' ,color:"#95D066"},
            { id: 1, value: 15, label: 'published Forms',color:"#E1C269" },
            
           
          ],
        },
      ]}
      slotProps={{
        legend: {
       
          position: {
            vertical: 'middle',
            horizontal: 'right',
          },
          itemMarkWidth: 20,
          itemMarkHeight: 2,
          markGap: 5,
          itemGap: 10,
        }
      }}
      width={400}
      height={200}
      margin={{ right: 200 }}
    />
      </DemoPaper>
      </div>


      </div>

     
      </Main>
    </Box>
  );
}
