"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(t,n,e){e.r(n),e.d(n,{default:function(){return h}});var r=e(439),c=e(791),i=e(689),a=e(390),o="Cast_list__GlWio",u=e(184),h=function(){var t=(0,i.UO)().movieId,n=(0,c.useState)([]),e=(0,r.Z)(n,2),h=e[0],s=e[1];return(0,c.useEffect)((function(){(0,a.zv)(t).then(s).catch((function(t){return console.log(t)}))}),[t]),(0,u.jsx)(u.Fragment,{children:h&&h.length?(0,u.jsx)("ul",{className:o,children:h.map((function(t){var n=t.character,e=t.profile_path,r=t.name,c=t.id;return(0,u.jsxs)("li",{children:[e?(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e),alt:r,width:"140",height:"175"}):(0,u.jsx)("img",{src:"https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-20.jpg",alt:r,width:"140",height:"175"}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{children:r}),(0,u.jsx)("h4",{children:"Character: "}),(0,u.jsx)("p",{children:n})]})]},c)}))}):(0,u.jsx)("h3",{children:"We don't have any casts for this movie"})})}},390:function(t,n,e){function r(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=8a95c8805d5f43b82cb5bfd70a3069b5").then((function(t){return t.json().then((function(t){return t.results}))}))}function c(t){return fetch("https://api.themoviedb.org/3/search/movie?api_key=8a95c8805d5f43b82cb5bfd70a3069b5&language=en-US&query=".concat(t,"&page=1&include_adult=false")).then((function(t){return t.json().then((function(t){return t.results}))}))}function i(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=8a95c8805d5f43b82cb5bfd70a3069b5&language=en-US")).then((function(t){return t.json().then((function(t){return t}))}))}function a(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=8a95c8805d5f43b82cb5bfd70a3069b5&language=en-US")).then((function(t){return t.json().then((function(t){return t.cast}))}))}function o(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=8a95c8805d5f43b82cb5bfd70a3069b5&language=en-US&page=1")).then((function(t){return t.json().then((function(t){return t.results}))}))}e.d(n,{Hg:function(){return r},TP:function(){return i},qF:function(){return c},tx:function(){return o},zv:function(){return a}})}}]);
//# sourceMappingURL=76.c675a7c1.chunk.js.map