  import Paper from '@mui/material/Paper';
  import styles from '../../../Pages/DashboardPages/FormPage.module.css'
  import { Group, ListAlt, TrendingUp } from '@mui/icons-material';
  import { PieChart } from '@mui/x-charts';
  import { styled } from '@mui/material/styles';
  
  const DemoPaper = styled(Paper)(({ theme }) => ({
    width:"fit-content",
    height: "fit-content",
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));
  
export default function DashboardLayout() {
  return (
    <>
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



    </>
  )
}
