"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{368:function(n,t,e){e.d(t,{O:function(){return u}});var r=e(689),c=e(87),i=e(184),u=function(n){var t=n.movies,e=(0,r.TH)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{children:t&&t.map((function(n){var t=n.id,r=n.name,u=n.title,o=n.poster_path;return(0,i.jsx)("li",{children:(0,i.jsxs)(c.rU,{to:"/movies/".concat(t),state:{location:e},children:[(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(o),alt:u,width:"150",height:"200"}),(0,i.jsx)("span",{children:r||u})]})},t)}))})})}},415:function(n,t,e){e.r(t);var r=e(439),c=e(368),i=e(791),u=e(390),o=e(184);t.default=function(){var n=(0,i.useState)([]),t=(0,r.Z)(n,2),e=t[0],a=t[1];return(0,i.useEffect)((function(){(0,u.Hg)().then((function(n){return a(n)}))}),[]),e?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Tranding Today"}),(0,o.jsx)(c.O,{movies:e})]}):(0,o.jsx)("p",{children:"404 Not Found"})}},390:function(n,t,e){function r(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=8a95c8805d5f43b82cb5bfd70a3069b5").then((function(n){return n.json().then((function(n){return n.results}))}))}function c(n){return fetch("https://api.themoviedb.org/3/search/movie?api_key=8a95c8805d5f43b82cb5bfd70a3069b5&language=en-US&query=".concat(n,"&page=1&include_adult=false")).then((function(n){return n.json().then((function(n){return n.results}))}))}function i(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=8a95c8805d5f43b82cb5bfd70a3069b5&language=en-US")).then((function(n){return n.json().then((function(n){return n}))}))}function u(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=8a95c8805d5f43b82cb5bfd70a3069b5&language=en-US")).then((function(n){return n.json().then((function(n){return n.cast}))}))}function o(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=8a95c8805d5f43b82cb5bfd70a3069b5&language=en-US&page=1")).then((function(n){return n.json().then((function(n){return n.results}))}))}e.d(t,{Hg:function(){return r},TP:function(){return i},qF:function(){return c},tx:function(){return o},zv:function(){return u}})}}]);
//# sourceMappingURL=415.54f6a003.chunk.js.map