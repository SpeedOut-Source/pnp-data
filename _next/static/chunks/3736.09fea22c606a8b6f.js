"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3736],{18786:function(e,t,r){r.d(t,{S:function(){return i},Z:function(){return n}});var i="__aa-highlight__",n="__/aa-highlight__"},47334:function(e,t,r){function i(e,t){return t.reduce(function(e,t){return e&&e[t]},e)}r.d(t,{T:function(){return a}});var n=r(18786);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=Array(t);r<t;r++)i[r]=e[r];return i}function a(e){var t,r,a,u=e.hit,s=e.attribute,o=Array.isArray(s)?s:[s],c=i(u,["_highlightResult"].concat(function(e){if(Array.isArray(e))return l(e)}(o)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}}(o)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),["value"]));return"string"!=typeof c&&(c=i(u,o)||""),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{get:function(){return e},add:function(t){var r=e[e.length-1];(null==r?void 0:r.isHighlighted)===t.isHighlighted?e[e.length-1]={value:r.value+t.value,isHighlighted:r.isHighlighted}:e.push(t)}}}((r=(t=c.split(n.S)).shift())?[{value:r,isHighlighted:!1}]:[]),t.forEach(function(e){var t=e.split(n.Z);a.add({value:t[0],isHighlighted:!0}),""!==t[1]&&a.add({value:t[1],isHighlighted:!1})}),a.get()}},29842:function(e,t,r){r.d(t,{y:function(){return l}});var i=r(47334),n=r(67294);function l(e){let{hit:t,attribute:r,tagName:l="mark"}=e;return(0,n.createElement)(n.Fragment,{},(0,i.T)({hit:t,attribute:r}).map((e,t)=>{let{value:r,isHighlighted:i}=e;return i?(0,n.createElement)(l,{key:t},r):r}))}},13736:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var i=r(85893),n=r(5152),l=r.n(n),a=r(29842);let u=l()(()=>r.e(1664).then(r.t.bind(r,41664,23)),{loadableGenerated:{webpack:()=>[41664]}}),s=l()(()=>Promise.all([r.e(9755),r.e(508)]).then(r.t.bind(r,89755,23)),{loadableGenerated:{webpack:()=>[89755]}});function o(e){var t,r;return(0,i.jsxs)("div",{className:"p-card group relative mx-0 h-fit w-full space-y-3 overflow-visible px-0 py-4 text-justify hover:bg-base-200",children:[(0,i.jsx)("div",{className:"w-full px-3",children:(0,i.jsxs)(u,{"data-tip":"Visit website",target:"_blank",href:null!==(r=null!==(t=e.link)&&void 0!==t?t:e.addUrl)&&void 0!==r?r:"#",className:"tooltip flex w-full items-center gap-2 lg:items-start",children:[(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:"relative h-12 w-12 overflow-hidden rounded-full ring ring-base-300",children:(0,i.jsx)(s,{placeholder:"blur",blurDataURL:e.imgBlurData,src:e.imgUrl,alt:e.fullName,objectFit:"cover",layout:"fill"})})}),(0,i.jsxs)("div",{className:"text-left tracking-wider",children:[(0,i.jsx)("p",{style:{whiteSpace:"pre-line"},className:"text-sm font-bold",children:(0,i.jsx)(a.y,{hit:e,attribute:"fullName"})}),(0,i.jsx)("p",{style:{whiteSpace:"pre-line"},className:"text-xs",children:(0,i.jsx)(a.y,{hit:e,attribute:"position"})})]})]})}),(0,i.jsx)("p",{style:{whiteSpace:"pre-line"},className:"mx-4 text-xs leading-relaxed md:mx-3",children:(0,i.jsx)(a.y,{hit:e,attribute:"text"})})]})}}}]);