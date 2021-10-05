import { WeatherImage } from '../constants/types';
import cloudGif from "../assets/clouds.gif";
import RainGif from "../assets/rain.gif";
import SunGif from "../assets/sun.gif";
import ClearGif from "../assets/clear-sky.gif";

class GifSelector {
  Image: WeatherImage;
  constructor() {
    this.Image = {
      Clouds: cloudGif,
      Rain: RainGif,
      Sun: SunGif,
      Clear: ClearGif,
    };
  }

  selectGif = (weather: string): string => {
    return this.Image[weather];
  };
}

export default new GifSelector();
