"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{168:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var r=t(439),c=t(791),u=t(689),i=t(390),o="Reviews_item__DJKij",a=t(184),f=function(){var n=(0,u.UO)().movieId,e=(0,c.useState)([]),t=(0,r.Z)(e,2),f=t[0],h=t[1];return(0,c.useEffect)((function(){(0,i.tx)(n).then(h).catch((function(n){return console.log(n)}))}),[n]),(0,a.jsx)(a.Fragment,{children:f&&f.length?(0,a.jsx)("ul",{children:f.map((function(n){var e=n.id,t=n.content,r=n.author;return(0,a.jsxs)("li",{className:o,children:[(0,a.jsxs)("h3",{children:[r,":"]}),(0,a.jsx)("p",{children:t})]},e)}))}):(0,a.jsx)("h3",{children:"We don't have any reviews for this movie"})})}},390:function(n,e,t){function r(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=8a95c8805d5f43b82cb5bfd70a3069b5").then((function(n){return n.json().then((function(n){return n.results}))}))}function c(n){return fetch("https://api.themoviedb.org/3/search/movie?api_key=8a95c8805d5f43b82cb5bfd70a3069b5&language=en-US&query=".concat(n,"&page=1&include_adult=false")).then((function(n){return n.json().then((function(n){return n.results}))}))}function u(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=8a95c8805d5f43b82cb5bfd70a3069b5&language=en-US")).then((function(n){return n.json().then((function(n){return n}))}))}function i(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=8a95c8805d5f43b82cb5bfd70a3069b5&language=en-US")).then((function(n){return n.json().then((function(n){return n.cast}))}))}function o(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=8a95c8805d5f43b82cb5bfd70a3069b5&language=en-US&page=1")).then((function(n){return n.json().then((function(n){return n.results}))}))}t.d(e,{Hg:function(){return r},TP:function(){return u},qF:function(){return c},tx:function(){return o},zv:function(){return i}})}}]);
//# sourceMappingURL=168.03242b00.chunk.js.map