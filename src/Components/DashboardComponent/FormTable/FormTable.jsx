import { DataGrid } from "@mui/x-data-grid";
import { Box, IconButton, Popover, MenuItem, Button } from "@mui/material";
import { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import { Add, Delete, Edit, GridOn, Link, Publish, Visibility } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function FormTable() {
  const [records, setRecords] = useState([]);
  const [columns, setColumns] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  ///////////// Get data from API ///////////
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

      // Add action column with popover
      dynamicColumns.push({
        field: "actions",
        headerName: "Action",
        sortable: false,
        filterable: false,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => (
          <>
            <IconButton
              onClick={(event) => {
                setAnchorEl(event.currentTarget);
                setSelectedRow(params.row);
              }}
            >
              <MoreVertIcon />
            </IconButton>
          </>
        ),
        width: 80,
      });

      setColumns(dynamicColumns);
    }

    setRecords(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <div style={{ margin: "24px" }}>
        <Box>
        <div  className="d-flex justify-content-end mb-3">
   <NavLink to="">
   <Button variant="contained" style={{backgroundColor:"#4EB100"}} startIcon={<Add />}>
  Create Form
</Button>
   </NavLink>
    </div>
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
                  "& .MuiDataGrid-row:hover": {
                    backgroundColor: "#e3f2fd",
                  },
                },
                "& .MuiTablePagination-root:last-child": {
                  backgroundColor: "#F5F5F5",
                  display: "flex",
                  justifyContent: "center",
                },
                "& .MuiTablePagination-displayedRows": {
                  margin: 0,
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

      {/* Popover Menu */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        
      >
        {/* // menu items ////////////// */}
                {/* 1 */}
        <MenuItem
          onClick={() => {
            console.log("preview", selectedRow);
            handleClose();
          }}
        >
          <Visibility style={{marginRight:"5px",width:"20px"}}/>
          preview
        </MenuItem>
        {/* 2 */}
        <MenuItem
          onClick={() => {
            console.log("Publish", selectedRow);
            handleClose();
          }}
        >
          <Publish style={{marginRight:"5px",width:"20px"}} />
          Publish
        </MenuItem>
        {/* 3 */}
        <MenuItem
          onClick={() => {
            console.log("Copy Url", selectedRow);
            handleClose();
          }}
        >
          <Link style={{marginRight:"5px",width:"20px"}} />
          Copy Url
        </MenuItem>
        {/* 4 */}
        <MenuItem
          onClick={() => {
            console.log("Delete", selectedRow);
            handleClose();
          }}
        >
          <Delete style={{marginRight:"5px",width:"20px"}} />
          Delete
        </MenuItem>
        {/* 5 */}
        <MenuItem
          onClick={() => {
            console.log("Edit", selectedRow);
            handleClose();
          }}
        >
          <Edit style={{marginRight:"5px",width:"20px"}} />
          Edit
        </MenuItem>
        {/* 6 */}
        <MenuItem
          onClick={() => {
            console.log("Response", selectedRow);
            handleClose();
          }}
        >
          <GridOn style={{marginRight:"5px",width:"20px"}} />
          Response
        </MenuItem>
      </Popover>
    </>
  );
}
