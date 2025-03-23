import { DataGrid ,  GridToolbarContainer } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import DownloadIcon from "@mui/icons-material/Download"; // Import the icon

// import { createTheme, ThemeProvider } from "@mui/material/styles";



// eslint-disable-next-line react/prop-types
export default function Response({formname}) {
  const [records, setRecords] = useState([]);
  const [columns, setColumns] = useState([]);
  function CustomToolbar() {
    return (
        
     <div className="container">
       <GridToolbarContainer
        sx={{ display: "flex", justifyContent: "space-between",direction:"row", p: 1 }}
      >
        <h1>{formname}</h1>
        <Box
          sx={{
            "& .MuiButton-root": {
              backgroundColor: "#4EB100",
              color: "white", 
              fontWeight: "bold",
              border:"none",
              padding: "8px 16px",
              
              "&:hover": {
                backgroundColor: "#3E8E00",
              },
            },
          }}
        >
            <Button
        variant="contained"
        sx={{
          backgroundColor: "#1976d2",
          color: "white",
          fontWeight: "300",
          borderRadius: "8px",
          padding: "8px 16px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#135ba1",
          },
        }}
        startIcon={<DownloadIcon />}
        onClick={() => {
          document.querySelector('[aria-label="Export CSV"]').click(); // Simulates a click on the export button
        }}
      >
        Export Data
      </Button>
          {/* <GridToolbarExport  csvOptions={{ utf8WithBom: true, fileName: "exported_data", label: "Download CSV" }} /> */}

        </Box>
        

      </GridToolbarContainer>
     </div>
    );
  }
  
  async function getProducts() {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");

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

  useEffect(() => {
    getProducts();
  }, []);

  return (
    // <ThemeProvider theme={theme}>
  //  <div className="container">
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
               backgroundColor:"gray !important",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                "& .MuiDataGrid-row:nth-of-type(odd)": {
                backgroundColor: "#f9f9f9",
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "#e3f2fd",
              },
              
              },

              "& .MuiDataGrid-row:nth-of-type(odd)": {
                backgroundColor: "#f9f9f9",
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "#e3f2fd",
              },
              "& .MuiDataGrid-cell": {
                fontSize: "14px",
              },
            }}
  
  
  
  
            
          
          //   sx={{
          //     backgroundColor: "white !important",
          //     "& .MuiDataGrid-columnHeaders": {
          //       backgroundColor: "red !important",
                
          //       "--DataGrid-headerBackground": "red !important", // Override MUI variable
          //     },
          //     "& .MuiDataGrid-columnHeadersInner": {
          //       backgroundColor: "red !important",
          //     },
          //     "& .MuiDataGrid-columnSeparator": {
          //         display: "none", // Remove column separators
          //       },
          //   }}
            slots={{
              toolbar: CustomToolbar,
            }}
          />
        </Box>
      </Box>
  //  </div>
    // </ThemeProvider>
  );
}
