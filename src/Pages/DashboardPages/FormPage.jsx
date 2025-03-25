import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import { dataset ,valueFormatter} from './dataset/weather';


import AppBar1 from '../../Components/DashboardComponent/AppBar/AppBar1';
import SideBar1 from '../../Components/DashboardComponent/SideBar/SideBar1';
import { BarChart } from '@mui/x-charts/BarChart'
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { dataset, valueFormatter } from './weather';
import Paper from '@mui/material/Paper';



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

const chartSetting = {
    yAxis: [
      {
        label: 'rainfall (mm)',
        
      },
    ],
    
    
    series: [{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }],
    width: 500,
    height: 400,
    sx: {
      [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
        transform: 'translateX(-10px)',
      },
    },
  };
  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 120,
    height: 120,
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
      <div className='d-flex align-items-center justify-content-center'>
      <DemoPaper square={false}>rounded corners</DemoPaper>
      <BarChart
        dataset={dataset}
        xAxis={[
          { scaleType: 'band', dataKey: 'month'},
        ]}
        {...chartSetting}
      />
      </div>
      </Main>
    </Box>
  );
}
