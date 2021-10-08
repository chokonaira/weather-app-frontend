# Weather App

A Weather App with React and Typescript, using the open weather API, that you can preview the weather across 5 different cities in Germany and has functionality to toggle between 2 different temperature scales as preferred.

### Github Actions CI Badges

[![Build CI](https://github.com/chokonaira/weather-app/actions/workflows/build.yml/badge.svg)](https://github.com/chokonaira/weather-app/actions/workflows/build.yml) [![Linter](https://github.com/chokonaira/weather-app/actions/workflows/linter.yml/badge.svg)](https://github.com/chokonaira/weather-app/actions/workflows/linter.yml)

### Live URL

[Heroku](https://pay-weather.herokuapp.com/)

[gh-pages](https://chokonaira.github.io/weather-app/)

### Run app locally
- Run `npm install`
- Create a `.env` file in the root directory
- Copy the variables in `.env.example` file. 
- Provide a `APPID` from Open Weather, If you do not already have one, please navigate to [open weather map](http://api.openweathermap.org) to create one and add as the value to `REACT_APP_API_KEY`. 
- Also add `SKIP_PREFLIGHT_CHECK=true` to skip `babel-jest` dependencies flagging.
- Now within `./src/helpers/api` file, on `Line 8`, remove `https://cors-anywhere.herokuapp.com/` from the `baseUrl` and only have it as `http://api.openweathermap.org/data/2.5/forecast`
- Run `npm run dev` to serve app locally on port 3000

### Run Jest Test locally
- Run `npm install`
- Create a `.env` file in the root directory
- Copy the variables in `.env.example` file. 
- Provide a `APPID` from Open Weather, If you do not already have one, please navigate to [open weather map](http://api.openweathermap.org) to create one and add as the value to `REACT_APP_API_KEY`. 

### Steps to Deploy
- Weather App is currently deployed on two different environments. `Heroku` and `Github pages`
- Heroku deploys are auctomatic when new changes are pushed from `main branch` and all `CI jobs` have passed succefully
- To deploy app to `gh-pages`, while on the main branch. 
- Run `npm run build` to bundle latest code, 
- Run `npm run deploy` to deploy. 

### Things to Note:
- I used `Typescript with React` because I love how it enforces style checks as I code.
- I added `CI automation` and `Super Linter` using `Github actions`, because it is best practice to ensure all test are green before deploying (Heroku in this case).
- I deployed this app in two seperate environments, `Heroku` and `Github pages` (Please see `Live URL` section above to access links).
- I Used and customised the carousel from `react-elastic-carousel` to render the weather card with Arrows, because I find it similar to expected wireframe the design.
- Using `!important` to enforce styles, is not an ideal approach to overiding styles of third party component, in this case - `@MUI` and `@devexpress/dx-react-chart-material-ui` components, I can see `[classes](https://v1.mui.com/customization/overrides/)` object to overrides material ui styles and inject custom styles by assinging the css class selector as the `root` value. I intend to refactor later on to remove `!important` from everywhere it is being used in future.
- There's always room to add more test 😁