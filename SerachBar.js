import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Box display="flex" justifyContent="center" mt={3}>
      <TextField
        variant="outlined"
        label="Search Images"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" color="primary" size="large"  onClick={handleSearch} sx={{ ml: 2 }}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
