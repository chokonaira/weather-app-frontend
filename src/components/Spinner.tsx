import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress color="primary" size={100} />
    </Box>
  );
}

export default Spinner;