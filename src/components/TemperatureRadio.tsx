import React from 'react';
import { Radio, FormControlLabel, RadioGroup, FormControl } from '@mui/material';
import { NewWeather } from '../constants/types'

type Props = {
  weather: NewWeather,
}

const TemperatureRadio: React.FC<Props> = ({ weather }) => {

  const [scale, setScale] = React.useState<string>('celcius');

  const handleChange = (event: React.SyntheticEvent<Element, Event>) => {
    const value = (event.target as HTMLInputElement).value;
    setScale(value);
  }

  return (
    <FormControl component="fieldset">
      <RadioGroup
        value={scale}
        name="controlled-radio-buttons-group"
        className="radio"
        onChange={handleChange}
      >
        <FormControlLabel
          label="Celcius"
          value="celcius"
          checked={scale === 'celcius'}
          control={
            <Radio />
          }
        />
        <FormControlLabel
          label="Fahrenheit"
          value="fahrenheit"
          checked={scale === 'fahrenheit'}
          control={
            <Radio />
          }
        />
      </RadioGroup>
    </FormControl>
  );
}

export default TemperatureRadio;