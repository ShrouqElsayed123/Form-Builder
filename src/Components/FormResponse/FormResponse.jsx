import { DataGrid ,  GridToolbarContainer ,GridToolbarExport} from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
// import { Button } from "@mui/material";
import axios from "axios";
// import DownloadIcon from "@mui/icons-material/Download"; // Import the icon
import './FormResponse.module.css'
// import { createTheme, ThemeProvider } from "@mui/material/styles";



// eslint-disable-next-line react/prop-types
export default function Response({formname}) {
  const [records, setRecords] = useState([]);
  const [columns, setColumns] = useState([]);
  function CustomToolbar() {
    return (
        
     <div>
     <GridToolbarContainer
      sx={{ display: "flex", justifyContent: "space-between", p: 1 }}
    >
      <h1>{formname}</h1>
      <Box sx={{
        "& .css-1ccsd5i-MuiButtonBase-root-MuiButton-root":{
          color:"white"
        }
      }}>
        <div
          style={{
            backgroundColor: 'var(--main-color)',
            color: "white",
            fontWeight: "300",
            borderRadius: "8px",
            padding: "8px 16px",
            textTransform: "none",
            "&:hover": { backgroundColor: "#135ba1" },
          }}
         
        >
        <GridToolbarExport
       
        
        csvOptions={{
          utf8WithBom: true,
          fileName: "exported_data",
          delimiter: ",",
        }}
      ></GridToolbarExport>
        </div>
        {/* Ensure GridToolbarExport is inside the toolbar */}
       
      </Box>
    </GridToolbarContainer>
     </div>
    );
  }
  /////////////start get data from api//////////////
  
  async function getProducts() {
    const { data } = await axios.get("https://fakestoreapi.com/users");

    if (data.length > 0) {
      const dynamicColumns = Object.keys(data[0]).map((key) => ({
        field: key,
        headerName: key.toUpperCase(), // Capitalizing header names
        flex: 1,
        align: "center",
        headerAlign: "center",
      }));

      setColumns(dynamicColumns);
    }

    setRecords(data);
  }
  ///////////// end get data from api//////////////
  useEffect(() => {
    getProducts();
  }, []);


  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  return (

  <>
  <div style={{margin:"24px"}}>

  <Box>
        
        <Box sx={{ height: 600, mx: "auto" }}> 
          <DataGrid
          
          disableColumnMenu
            rows={records}
            columns={columns}
            getRowId={(row) => row.id}
            sx={{
              backgroundColor: "white",   //خلفية ال container   كلها
              border: "none",
              "& .MuiDataGrid-container--top [role=row]": {
               backgroundColor:"#F5F5F5 !important",
                color: "black",
                fontSize: "16px",
                fontWeight: "bold",
              //   "& .MuiDataGrid-row:nth-of-type(odd)": {
              //   backgroundColor: "#f9f9f9",
              // },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "#e3f2fd",
              },
              
              },
              "& .MuiTablePagination-root:last-child":{
                backgroundColor:"#F5F5F5",
                display:"flex",
                justifyContent:"center"
              },
              "& .MuiTablePagination-displayedRows":{
                margin:0
              },
              // "& .MuiDataGrid-row:nth-of-type(odd)": {
              //   backgroundColor: "#f9f9f9",
              // },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "#e3f2fd",
              },
              "& .MuiDataGrid-cell": {
                fontSize: "14px",
              },
            }}
            paginationModel={paginationModel}
            pageSizeOptions={[10]}
            autoHeight 
            onPaginationModelChange={setPaginationModel}
            slots={{
              toolbar: CustomToolbar,
            }}
          />
        </Box>
      </Box>
  </div>
  </>
  
  );
}
