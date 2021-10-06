import { WeatherImage } from '../constants/types';
class GifSelector {
  Image: WeatherImage;
  constructor() {
    this.Image = {
      Clouds: require("../assets/clouds.gif").default,
      Rain: require("../assets/rain.gif").default,
      Sun: require("../assets/sun.gif").default,
      Clear: require("../assets/clear-sky.gif").default,
    };
  }

  selectGif = (weather: string): string => {
    return this.Image[weather];
  };
}

export default new GifSelector();
