import { DataGrid } from "@mui/x-data-grid";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function FormTable() {
  const [records, setRecords] = useState([]);
  const [columns, setColumns] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  async function getProducts() {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");

    // Fetch additional data for links
    const linkData = await axios.get("https://jsonplaceholder.typicode.com/users");

    if (data.length > 0) {
      const dynamicColumns = Object.keys(data[0]).map((key) => ({
        field: key,
        headerName: key.toUpperCase(),
        flex: 1,
        align: "center",
        headerAlign: "center",
      }));

      // Add an "Actions" column with a dropdown menu
      dynamicColumns.push({
        field: "actions",
        headerName: "Actions",
        flex: 1,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => {
          const user = linkData.data.find((user) => user.id === params.row.userId);
          return (
            <Box>
              <IconButton onClick={(event) => handleMenuOpen(event, params.row)}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl) && selectedRow?.id === params.row.id}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>
                  <a
                    href={`/details/${params.row.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    View Details
                  </a>
                </MenuItem>
                {user && (
                  <MenuItem onClick={handleMenuClose}>
                    <a
                      href={`https://example.com/user/${user.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {user.name}s Profile
                    </a>
                  </MenuItem>
                )}
                <MenuItem onClick={() => handleDelete(params.row.id)}>Delete</MenuItem>
              </Menu>
            </Box>
          );
        },
      });

      setColumns(dynamicColumns);
    }

    setRecords(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  // Open the dropdown menu
  const handleMenuOpen = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  // Close the dropdown menu
  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  // Delete action
  const handleDelete = (id) => {
    console.log("Deleting row ID:", id);
    setRecords((prev) => prev.filter((record) => record.id !== id));
    handleMenuClose();
  };

  return (
    <Box>
      <Box sx={{ height: 600, mx: "auto" }}>
        <DataGrid
          rows={records}
          columns={columns}
          getRowId={(row) => row.id}
        />
      </Box>
    </Box>
  );
}
