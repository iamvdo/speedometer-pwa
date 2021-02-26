!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var t={},r={},n={},o={}.hasOwnProperty,a=/^\.\.?(\/|$)/,i=function(e,t){for(var r,n=[],o=(a.test(t)?e+"/"+t:t).split("/"),i=0,u=o.length;i<u;i++)r=o[i],".."===r?n.pop():"."!==r&&""!==r&&n.push(r);return n.join("/")},u=function(e){return e.split("/").slice(0,-1).join("/")},c=function(t){return function(r){var n=i(u(t),r);return e.require(n,t)}},s=function(e,t){var n=m&&m.createHot(e),o={id:e,exports:{},hot:n};return r[e]=o,t(o.exports,c(e),o),o.exports},l=function(e){var t=n[e];return t&&e!==t?l(t):e},f=function(e,t){return l(i(u(e),t))},p=function(e,n){null==n&&(n="/");var a=l(e);if(o.call(r,a))return r[a].exports;if(o.call(t,a))return s(a,t[a]);throw new Error("Cannot find module '"+e+"' from '"+n+"'")};p.alias=function(e,t){n[t]=e};var d=/\.[^.\/]+$/,y=/\/index(\.[^\/]+)?$/,h=function(e){if(d.test(e)){var t=e.replace(d,"");o.call(n,t)&&n[t].replace(d,"")!==t+"/index"||(n[t]=e)}if(y.test(e)){var r=e.replace(y,"");o.call(n,r)||(n[r]=e)}};p.register=p.define=function(e,n){if(e&&"object"==typeof e)for(var a in e)o.call(e,a)&&p.register(a,e[a]);else t[e]=n,delete r[e],h(e)},p.list=function(){var e=[];for(var r in t)o.call(t,r)&&e.push(r);return e};var m=e._hmr&&new e._hmr(f,p,t,r);p._cache=r,p.hmr=m&&m.wrap,p.brunch=!0,e.require=p}}(),function(){var e;"undefined"==typeof window?this:window;require.register("components/App.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=t("react"),s=n(c),l=t("./Speedometer"),f=n(l),p=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){return s["default"].createElement("main",{className:"Main"},s["default"].createElement(f["default"],null))}}]),t}(s["default"].Component);e["default"]=p}),require.register("components/Speedometer.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=t("react"),s=n(c),l=t("react-dom"),f=(n(l),t("./Store.js")),p=n(f),d=t("react-switch-button"),y=n(d),h=function(e){function t(e){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={speed:0,accuracy:10,unit:!0,geoStatus:!1},r}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation&&navigator.geolocation.watchPosition(function(t){return e._onPosition(t)},function(t){return e._onErrorPosition(t)},{enableHighAccuracy:!0})}},{key:"render",value:function(){var e=this,t=this._setSpeed(),r=this.state.geoStatus?"on":"off",n=Math.min(this.state.accuracy,50),o=180,a=1.5,i=.4,u=0;return u=t<o?t%o*a:o*a+(t-o)*i,u=Math.min(u,340),s["default"].createElement("div",{className:"Speedometer"},s["default"].createElement("div",{className:"Speedometer-speed"},s["default"].createElement("div",{className:"Speedometer-status"},s["default"].createElement("div",{className:"Speedometer-accuracy",style:{transform:"scale("+n/40+")"}}),s["default"].createElement("div",{className:"Speedometer-led Speedometer-led--"+r})),t,s["default"].createElement(y["default"],{theme:"Speedometer-unit",name:"switch-units",label:"mph",labelRight:"km/h",checked:this.state.unit?"checked":"",onChange:function(t){return e._onSwitch(t)}})),s["default"].createElement("div",{className:"Speedometer-speedo"},s["default"].createElement("div",{className:"Speedometer-arrow",style:{transform:"rotate("+u+"deg)"}})))}},{key:"_onPosition",value:function(e){this.setState({speed:e.coords.speed,accuracy:e.coords.accuracy,geoStatus:!0})}},{key:"_onErrorPosition",value:function(e){this.setState({geoStatus:!1})}},{key:"_onSwitch",value:function(e){var t=e.currentTarget.checked;this.setState({unit:t})}},{key:"_setSpeed",value:function(){var e=this.state.speed;return null==e||this.state.accuracy>=30?0:(e*=3.6,this.state.unit||(e/=1.609344),parseFloat(e).toFixed(0))}}]),t}(s["default"].Component);h.displayName="Speedometer",e["default"]=(0,p["default"])(h,["unit"])}),require.register("components/Store.js",function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=localStorage;if(u){var c="react-localstorage.hoc.test-key";try{localStorage.setItem(c,"foo"),localStorage.removeItem(c)}catch(s){u=!1}}var l=function(e,t){if(!u)return e;var r=e.displayName,c=function(e){function u(){n(this,u);var e=o(this,(u.__proto__||Object.getPrototypeOf(u)).call(this));return e.keys=t,e}return a(u,e),i(u,[{key:"componentWillMount",value:function(){var e=localStorage.getItem(r);e&&this.setState(JSON.parse(e))}},{key:"componentWillUpdate",value:function(e,t){localStorage.setItem(r,JSON.stringify(this._filterKeys(t)))}},{key:"_filterKeys",value:function(e){var t={};if(this.keys){var r={};this.keys.map(function(t){return r[t]=e[t]}),t=r}else t=e;return t}}]),u}(e);return c.displayName=r,c};e["default"]=l}),require.register("initialize.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=t("react-dom"),a=n(o),i=t("react"),u=n(i),c=t("components/App"),s=n(c);document.addEventListener("DOMContentLoaded",function(){a["default"].render(u["default"].createElement(s["default"],null),document.querySelector("#app"))}),"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js")}),require.alias("process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,t,r){})}(),require("___globals___");