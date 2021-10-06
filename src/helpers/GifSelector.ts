import { WeatherImage } from '../constants/types';
import cloudGif from "../assets/images/clouds.gif";
import RainGif from "../assets/images/rain.gif";
import SunGif from "../assets/images/sun.gif";
import ClearGif from "../assets/images/clear-sky.gif";

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
