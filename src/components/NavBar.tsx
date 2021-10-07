import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { NewWeather } from '../constants/types'
import CitySelect from './CitySelect';

type Props = {
  weather: NewWeather,
}

const NavBar: React.FC<Props> = ({ weather }) => {
  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <AppBar color="inherit" position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ mr: 2, color: '#333' }}>
            Pay-Weather
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ flexGrow: 1 }}
          >
            <CitySelect weather={weather} />
          </IconButton>
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;