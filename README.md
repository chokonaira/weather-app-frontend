# Weather App

A Weather App with React and Typscript, using the open weather API, that you can preview the weather across 5 different cities in Germany and has functionality to toggle between 2 differnet temperature scales as preferred.

### Github Actions CI Badges

[![Build CI](https://github.com/chokonaira/weather-app/actions/workflows/build.yml/badge.svg)](https://github.com/chokonaira/weather-app/actions/workflows/build.yml)

[![Linter](https://github.com/chokonaira/weather-app/actions/workflows/linter.yml/badge.svg)](https://github.com/chokonaira/weather-app/actions/workflows/linter.yml)


### Run app locally
- Run `npm install`
- Create a `.env` file in the root directory
- Copy the variable in `.env.example` file and provide and a `APPID` from [open weather map](http://api.openweathermap.org) as the value and also add `SKIP_PREFLIGHT_CHECK=true` to skip `babel-jest` dependencies flagging
- Run `npm run dev` to open app locally on port 3000
### Live URL

[Heroku](https://payoneer-weather.herokuapp.com/)
