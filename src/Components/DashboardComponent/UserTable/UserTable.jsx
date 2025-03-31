import { DataGrid } from "@mui/x-data-grid";
import { Box, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";

export default function FormTable() {
  const [records, setRecords] = useState([]);
  const [columns, setColumns] = useState([]);

  async function getProducts() {
    const { data } = await axios.get("https://fakestoreapi.com/users");

    if (data.length > 0) {
      const dynamicColumns = Object.keys(data[0]).map((key) => ({
        field: key,
        headerName: key.toUpperCase(),
        flex: 1,
        align: "center",
        headerAlign: "center",
      }));

      // Add action column
      dynamicColumns.push({
        field: "actions",
        headerName: "Actions",
        flex: 1,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => (
          <>
            <IconButton color="primary" onClick={() => console.log("Add action", params.row)}>
              <Edit />
            </IconButton>
            <IconButton color="error" onClick={() => handleDelete(params.row.id)}>
              <DeleteIcon />
            </IconButton>
          </>
        ),
      });

      setColumns(dynamicColumns);
    }
    setRecords(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = (id) => {
    setRecords((prevRecords) => prevRecords.filter((record) => record.id !== id));
  };

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  return (
    <div style={{ margin: "24px" }}>
      <Box>
        <Box sx={{ height: 600, mx: "auto" }}>
          <DataGrid
            disableColumnMenu
            rows={records}
            columns={columns}
            getRowId={(row) => row.id}
            sx={{
              backgroundColor: "white",
              border: "none",
              "& .MuiDataGrid-container--top [role=row]": {
                backgroundColor: "#F5F5F5 !important",
                color: "black",
                fontSize: "16px",
                fontWeight: "bold",
              },
              "& .MuiTablePagination-root:last-child": {
                backgroundColor: "#F5F5F5",
                display: "flex",
                justifyContent: "center",
              },
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
          />
        </Box>
      </Box>
    </div>
  );
}
