import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch } from "react-redux";
import { fetchWeather } from "../redux/actions/weather";
import { NewWeather } from '../constants/types'
import { cities } from '../constants/city'

type Props = {
  weather: NewWeather,
}

const CitySelect: React.FC<Props> = ({ weather }) => {
  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent): void => {
    dispatch(fetchWeather(event.target.value));
  };

  const selectedCity = (): string => {
    if (weather.city) {
      return weather.city
    } else {
      return cities[0].name
    }
  }
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cities</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCity()}
          label="Cities"
          onChange={handleChange}
        >
          {cities.map(city => <MenuItem
            selected={city.name === selectedCity()}
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