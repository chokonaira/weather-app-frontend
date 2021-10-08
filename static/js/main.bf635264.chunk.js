(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{154:function(e,t,a){},185:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/clouds.2b8ecda2.gif"},186:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/rain.ad71a4ef.gif"},187:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/sun.5e4ba486.gif"},188:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/clear-sky.07b94d03.gif"},189:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(19),i=a.n(c),s=(a(154),a(15)),o=a(130),u=a(2),d=function(e){var t=e.gifBackground,a=e.description,r=e.temperature,n=e.date;return Object(u.jsxs)("div",{className:"weather-card-wrapper",children:[Object(u.jsx)("img",{className:"weather-card-gif",src:t,alt:"weather-gif"}),Object(u.jsx)("h1",{className:"description",children:a}),Object(u.jsx)("h2",{className:"temperture",children:r}),Object(u.jsx)("h1",{className:"date",children:n})]})},l=a(270),h=a(261),j=a(271),b=a(256),p=a(22),f=a(36),m=a.n(f),O=a(85),v="WEATHER_LOADING",g="WEATHER_SUCCESS",x="WEATHER_ERROR",w="REFRESH_LOADING",y="REFRESH_ERROR",R="CONVERT_TEMPERATURE",D="CHART_DATA_SUCCESS",W=a(56),E=a(121),S=a.n(E),k=a(122);a.n(k).a.config();var N={baseURL:"https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast"},C=new function e(){Object(W.a)(this,e),this.key=void 0,this.axiosInstance=S.a.create(N),this.key="20bd2f8a6ea9d7894e942cd2d4c0dbd3"},F={addZero:function(e){return e<10&&(e="0".concat(e)),e},fullDate:function(e){var t=new Date(e),a=t.getDate(),r=t.getMonth(),n=t.getFullYear(),c=this.addZero(t.getHours()),i=this.addZero(t.getMinutes());return"".concat(a," ").concat({1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}[r+1],", ").concat(n,". ").concat(c,":").concat(i)},isSameDay:function(e,t){var a=new Date(e),r=new Date(t);return a.getFullYear()===r.getFullYear()&&a.getMonth()===r.getMonth()&&a.getDate()===r.getDate()},getTime:function(e){var t=new Date(e),a=this.addZero(t.getHours()),r=this.addZero(t.getMinutes());return"".concat(a,":").concat(r)}},T=[{time:"00:00",temperature:1},{time:"03:00",temperature:1},{time:"06:00",temperature:1},{time:"09:00",temperature:1},{time:"12:00",temperature:1},{time:"15:00",temperature:1},{time:"18:00",temperature:1},{time:"21:00",temperature:1}],A=function(){return{type:v}},M=function(e){return{type:x,payload:e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Munich",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"celcius";return function(){var a=Object(O.a)(m.a.mark((function a(r){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r(A()),a.abrupt("return",C.axiosInstance.get("?q=".concat(e,"&APPID=").concat(C.key,"&cnt=40")).then((function(e){var a=e.data;r(H(a,t))})).catch((function(e){r(M(e.message))})));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},H=function(e,t){return function(){var a=Object(O.a)(m.a.mark((function a(r){var n;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n=e.list.map((function(e){var a=P(e.main.temp,t);return Object(p.a)({convertedTemperature:a,date:e.dt_txt},e.weather[0])})),r((c={data:e,scale:t,city:e.city.name,newWeatherData:n},{type:g,payload:c}));case 2:case"end":return a.stop()}var c}),a)})));return function(e){return a.apply(this,arguments)}}()},_=function(e,t){return function(a){var r=[];t.newWeatherData.forEach((function(t){if(F.isSameDay(e.date,t.date)){var a=F.getTime(t.date),n=Number(t.convertedTemperature.substring(0,t.convertedTemperature.length-2));r.push({time:a,temperature:n})}})),a(function(){return{type:D,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:T}}(r))}},P=function(e,t){return{celcius:"".concat(Math.round(e-273.15),"\xb0C"),fahrenheit:"".concat(Math.round(9*(e-273.15)/5+32),"\xb0F")}[t]},G=a(30),L=function(e){var t=e.weather,a=Object(G.b)(),r=n.a.useState("celcius"),c=Object(s.a)(r,2),i=c[0],o=c[1];return Object(u.jsx)(l.a,{component:"fieldset",children:Object(u.jsxs)(h.a,{value:i,name:"controlled-radio-buttons-group",classes:{root:"radio"},onChange:function(e){var r=e.target.value;o(r),a(H(t.data,r))},children:[Object(u.jsx)(j.a,{label:"Celcius",value:"celcius",checked:"celcius"===i,control:Object(u.jsx)(b.a,{})}),Object(u.jsx)(j.a,{label:"Fahrenheit",value:"fahrenheit",checked:"fahrenheit"===i,control:Object(u.jsx)(b.a,{})})]})})},J=a(263),Z=a(125),z=a.n(Z),B=function(e){var t=e.title,a=e.variant,r=e.loading,n=e.weather,c=Object(G.b)();return Object(u.jsx)(J.a,{onClick:function(){var e,t;c((e=n.city,t=n.scale,function(){var a=Object(O.a)(m.a.mark((function a(r){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:w}),a.abrupt("return",C.axiosInstance.get("?q=".concat(e,"&APPID=").concat(C.key,"&cnt=40")).then((function(e){var a=e.data;r(H(a,t))})).catch((function(e){var t;r((t=e.message,{type:y,payload:t}))})));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()))},loading:r,loadingPosition:"end",variant:a,endIcon:Object(u.jsx)(z.a,{}),children:t})},U=a(265),Y=a(266),q=function(){return Object(u.jsx)(Y.a,{sx:{display:"flex"},children:Object(u.jsx)(U.a,{color:"primary",size:60})})},V=new function e(){var t=this;Object(W.a)(this,e),this.Image=void 0,this.selectGif=function(e){return t.Image[e]},this.Image={Clouds:a(185).default,Rain:a(186).default,Sun:a(187).default,Clear:a(188).default}},K=a(253),Q=a(63),X=a(17),$=function(e){var t=e.chartData;return Object(u.jsx)(K.a,{children:Object(u.jsxs)(Q.c,{data:(null===t||void 0===t?void 0:t.length)>0?t:T,children:[Object(u.jsx)(Q.a,{}),Object(u.jsx)(Q.e,{}),Object(u.jsx)(Q.b,{valueField:"temperature",argumentField:"time"}),Object(u.jsx)(Q.d,{text:"Click card to see daily weather time and temperature preview"}),Object(u.jsx)(X.a,{})]})})},ee=a(267),te=a(268),ae=a(262),re=a(264),ne=a(269),ce=a(259),ie=a(258),se=a(255),oe=[{id:1,name:"Munich"},{id:2,name:"Berlin"},{id:3,name:"Hamburg"},{id:5,name:"Stuttgart"},{id:4,name:"Leipzig"}],ue=function(e){var t=e.weather,a=Object(G.b)(),r=function(){return t.city?t.city:oe[0].name};return Object(u.jsx)("div",{className:"select-dropdown",children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(ce.a,{id:"demo-simple-select-label",children:"Cities"}),Object(u.jsx)(se.a,{classes:{root:"classes-state-root"},labelId:"demo-simple-select-label",id:"demo-simple-select",value:r(),label:"Cities",onChange:function(e){a(I(e.target.value))},children:oe.map((function(e){return Object(u.jsx)(ie.a,{selected:e.name===r(),value:e.name,children:e.name},e.id)}))})]})})},de=function(e){var t=e.weather;return Object(u.jsx)(Y.a,{sx:{flexGrow:1,width:"100%"},children:Object(u.jsx)(ee.a,{color:"inherit",position:"fixed",children:Object(u.jsxs)(te.a,{children:[Object(u.jsx)(ae.a,{variant:"h6",component:"div",sx:{mr:2,color:"#333"},children:"Pay-Weather"}),Object(u.jsx)(ne.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{flexGrow:1},children:Object(u.jsx)(ue,{weather:t})}),Object(u.jsx)(re.a,{color:"inherit"})]})})})},le=function(){var e,t=Object(G.b)(),a=n.a.useState(window.innerWidth),r=Object(s.a)(a,2),c=r[0],i=r[1],l=Object(G.c)((function(e){return e.fetchWeather})),h=l.isFetchingWeather,j=l.isRefreshingWeather,b=l.errors,p=l.weather,f=l.chartData;n.a.useEffect((function(){t(I()),window.addEventListener("resize",(function(){return i(window.innerWidth)}))}),[t]);return Object(u.jsx)(u.Fragment,{children:h?Object(u.jsx)("div",{className:"spinner",children:Object(u.jsx)(q,{})}):Object(u.jsx)(u.Fragment,{children:b?Object(u.jsx)("div",{className:"error",children:b}):Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(de,{weather:p}),Object(u.jsxs)("div",{className:"App-header",children:[Object(u.jsxs)("div",{className:"control-wrapper",children:[Object(u.jsx)(L,{weather:p}),Object(u.jsx)(B,{variant:"outlined",title:"Refresh",loading:j,weather:p})]}),Object(u.jsx)(o.a,{enableSwipe:!1,isRTL:!1,itemsToShow:c>800?3:1,transitionMs:1e3,children:null===p||void 0===p||null===(e=p.newWeatherData)||void 0===e?void 0:e.map((function(e,a){return Object(u.jsx)("div",{onClick:function(){return function(e,a){t(_(e,a))}(e,p)},className:"weather-card",children:Object(u.jsx)(d,{gifBackground:V.selectGif(e.main),description:e.description,temperature:e.convertedTemperature,date:F.fullDate(e.date)})},a)}))})]}),Object(u.jsx)("div",{className:"bar-chart",children:Object(u.jsx)($,{chartData:f})})]})})})},he=a(59),je=a(127),be={isFetchingWeather:!1,isRefreshingWeather:!1,weather:[],chartData:[],errors:""},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(p.a)(Object(p.a)({},e),{},{isFetchingWeather:!0});case g:return Object(p.a)(Object(p.a)({},e),{},{isFetchingWeather:!1,isRefreshingWeather:!1,weather:t.payload});case x:return Object(p.a)(Object(p.a)({},e),{},{isFetchingWeather:!1,isRefreshingWeather:!1,errors:t.payload});case w:return Object(p.a)(Object(p.a)({},e),{},{isRefreshingWeather:!0});case y:return Object(p.a)(Object(p.a)({},e),{},{isRefreshingWeather:!1,errors:t.payload});case R:return Object(p.a)(Object(p.a)({},e),{},{weather:t.payload});case D:return Object(p.a)(Object(p.a)({},e),{},{chartData:t.payload});default:return e}},fe=Object(he.combineReducers)({fetchWeather:pe}),me=a(128),Oe=[je.a],ve=Object(he.createStore)(fe,Object(me.composeWithDevTools)(he.applyMiddleware.apply(void 0,Oe)));i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(G.a,{store:ve,children:Object(u.jsx)(le,{})})}),document.getElementById("root"))}},[[189,1,2]]]);
//# sourceMappingURL=main.bf635264.chunk.js.map