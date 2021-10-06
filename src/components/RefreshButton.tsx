import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Refresh from '@mui/icons-material/Refresh';
import { useDispatch } from "react-redux";
import { refreshCurrentCityWeather } from "../redux/actions/weather";
import { NewWeather } from "../constants/types";

type Props = {
  title: string,
  variant: "text" | "outlined" | "contained",
  loading: boolean,
  weather: NewWeather,
}

const RefreshButton: React.FC<Props> = ({ title, variant, loading, weather }) => {
  const dispatch = useDispatch();

  const handleRefresh = () => {
    dispatch(refreshCurrentCityWeather(weather.city, weather.scale))
  };

  return (
    <LoadingButton
      onClick={handleRefresh}
      loading={loading}
      loadingPosition="end"
      variant={variant}
      endIcon={<Refresh />} >
      {title}
    </LoadingButton>
  )
}
export default RefreshButton;