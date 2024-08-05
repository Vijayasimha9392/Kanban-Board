import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/actions';
import { TextField } from '@mui/material';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      margin: '16px',
      width: '100%',
    }}>
      <TextField
        label="Search Tasks"
        variant="outlined"
        margin="normal"
        onChange={handleSearch}
        style={{
          maxWidth: '600px',
          width: '100%',
          height: '40px',  // Decrease height here
        }}
        InputProps={{
          style: {
            height: '40px',  // Ensure input fits within the adjusted height
          }
        }}
        InputLabelProps={{
          style: {
            
            fontSize: '15px',  // Adjust font size for the placeholder text
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
