
import  { useState } from 'react';
import { TextField, InputAdornment, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
export default function Search(onSearch) {
    const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (onSearch) onSearch(searchText);
  };

  const handleClear = () => {
    setSearchText('');
    if (onSearch) onSearch('');
  };
    return (
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <TextField
            fullWidth
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
            placeholder="Search..."
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {searchText ? (
                    <IconButton onClick={handleClear}>
                      <ClearIcon />
                    </IconButton>
                  ) : (
                    <IconButton onClick={handleSearch}>
                      <SearchIcon />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />
        </Box>
      );
}
