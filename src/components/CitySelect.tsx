import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { cities } from '../constants/city'

const CitySelect: React.FC = () => {
  const [city, setCity] = React.useState<any>("Munich");
  
  const handleChange = (event: SelectChangeEvent): void => {
    setCity(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cities</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="Cities"
          onChange={handleChange}
        >
          {cities.map((city:any) => <MenuItem
            selected={city.name === city}
            key={city.id}
            value={city.name}>
            {city.name}
          </MenuItem>)
          }
        </Select>
      </FormControl>
    </Box>
  );
}

export default CitySelect;
