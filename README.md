# Weather App

A Weather App with React and Typescript, using the open weather API, that you can preview the weather across 5 different cities in Germany and has functionality to toggle between 2 different temperature scales as preferred.

### Github Actions CI Badges

[![Build CI](https://github.com/chokonaira/weather-app/actions/workflows/build.yml/badge.svg)](https://github.com/chokonaira/weather-app/actions/workflows/build.yml) [![Linter](https://github.com/chokonaira/weather-app/actions/workflows/linter.yml/badge.svg)](https://github.com/chokonaira/weather-app/actions/workflows/linter.yml)


### Run app locally
- Run `npm install`
- Create a `.env` file in the root directory
- Copy the variable in `.env.example` file and provide and a `APPID` from [open weather map](http://api.openweathermap.org) as the value and also add `SKIP_PREFLIGHT_CHECK=true` to skip `babel-jest` dependencies flagging
- Run `npm run dev` to open app locally on port 3000
### Live URL

[Heroku](https://pay-weather.herokuapp.com/)

[gh-pages](https://chokonaira.github.io/weather-app/)

### Things to Note:
- Using `!important` to enforce styles, is not an ideal approach to overiding styles of third party component, in this case - `Material UI` and `@devexpress/dx-react-chart-material-ui` components, however from further studies, I can see that one can set styles using the `clasess` object and assinging the css class selector as the `root` value. I intend to refactor my code to remove `!important` from everywhere it is being used in future.
