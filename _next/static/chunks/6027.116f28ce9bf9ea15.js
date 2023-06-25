"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6027,8187,2404,440],{18786:function(e,t,r){r.d(t,{S:function(){return n},Z:function(){return a}});var n="__aa-highlight__",a="__/aa-highlight__"},47334:function(e,t,r){function n(e,t){return t.reduce(function(e,t){return e&&e[t]},e)}r.d(t,{T:function(){return l}});var a=r(18786);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function l(e){var t,r,l,s=e.hit,o=e.attribute,c=Array.isArray(o)?o:[o],u=n(s,["_highlightResult"].concat(function(e){if(Array.isArray(e))return i(e)}(c)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(c)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}}(c)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),["value"]));return"string"!=typeof u&&(u=n(s,c)||""),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{get:function(){return e},add:function(t){var r=e[e.length-1];(null==r?void 0:r.isHighlighted)===t.isHighlighted?e[e.length-1]={value:r.value+t.value,isHighlighted:r.isHighlighted}:e.push(t)}}}((r=(t=u.split(a.S)).shift())?[{value:r,isHighlighted:!1}]:[]),t.forEach(function(e){var t=e.split(a.Z);l.add({value:t[0],isHighlighted:!0}),""!==t[1]&&l.add({value:t[1],isHighlighted:!1})}),l.get()}},48157:function(e,t,r){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{$k:function(){return f},S:function(){return m},bE:function(){return h},_y:function(){return o},LU:function(){return u},WR:function(){return d},LF:function(){return c}});var a=["","K","M","B"],i={digits:1,uppercase:!0},l=function(e,t){if(void 0===t&&(t={}),isNaN(e))return 0;var r=Math.abs(e);if(r<1e3)return Number(e);for(var l=n({},i,t),s=l.digits,o=l.uppercase,c=[0,1].includes(Math.sign(e))?1:-1,u=0,d="",f=0;f<=a.length;f++){var h=Math.pow(1e3,f);r>=h&&(u=r/h,d=o?a[f]:a[f].toLowerCase())}return""+(u-Math.floor(u)<=0||0===s?Math.floor(u*c):parseFloat(u*c).toFixed(s))+d},s=r(45645);function o(e){return"whatText"in e}function c(e){return e.replace(/\b\w+/g,e=>e.charAt(0).toUpperCase()+e.substr(1).toLowerCase())}function u(e){return l(e,{digits:2,uppercase:!1})}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:160;if(e.length>t){let r=e.slice(0,t),n=r.charAt(r.length-1);return" "!==n&&(r=r.substring(0,r.lastIndexOf(" ")),/[^\w\s]/.test(n)&&(r=r.substring(0,r.length-1))),r}return e}function f(e){return"https://github.com"+e+"/blob/data"}function h(e){var t,r;let n=e.split("/");return{userName:null!==(t=n[1])&&void 0!==t?t:"",repo:null!==(r=n[2])&&void 0!==r?r:""}}function m(){return s.O.NEXT_PUBLIC_PREFIX_REPO}},2404:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var n=r(85893),a=r(7814),i=r(5152),l=r.n(i),s=r(29842);let o=l()(()=>r.e(1664).then(r.t.bind(r,41664,23)),{loadableGenerated:{webpack:()=>[41664]}}),c=l()(()=>Promise.all([r.e(9755),r.e(508)]).then(r.t.bind(r,89755,23)),{loadableGenerated:{webpack:()=>[89755]}});function u(e){return(0,n.jsxs)(o,{className:"p-card h-48 cursor-pointer flex-row items-center justify-start py-3 hover:-translate-y-1 hover:shadow-lg",href:"/apps/view/".concat(e.fileName),children:[(0,n.jsx)("div",{className:"relative mx-auto h-24 w-24 overflow-hidden rounded-3xl px-0 text-justify",children:e.imgUrl?(0,n.jsx)(c,{blurDataURL:e.imgBlurData,placeholder:e.imgBlurData?"blur":"empty",loading:"lazy",objectFit:"cover",layout:"fill",src:e.imgUrl,alt:e.title}):(0,n.jsxs)("div",{className:"flex h-full flex-col justify-center text-center",children:[(0,n.jsx)(a.Z,{className:"mx-auto h-10 w-10"}),(0,n.jsx)("p",{children:"No logo"})]})}),(0,n.jsxs)("div",{className:"mx-0 mt-1 h-fit w-full px-2 text-center tracking-wider",children:[(0,n.jsx)("p",{className:"mb-1 font-semibold leading-4",children:(0,n.jsx)(s.y,{hit:e,attribute:"title"})}),(0,n.jsx)("p",{className:"text-xs text-base-content",children:(0,n.jsx)(s.y,{hit:e,attribute:"category"})})]})]})}},86027:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n=r(85893),a=r(88187),i=r(311),l=r(20352);function s(e){return(0,n.jsxs)("div",{className:"mx-auto h-fit max-w-6xl px-4 sm:pl-4 sm:pr-0",children:[(0,n.jsxs)("p",{className:"flex items-center gap-2 text-2xl normal-case text-slate-400",children:[(0,n.jsx)(i.Z,{className:"h-5 w-5"}),"Recent blogs"]}),(0,n.jsx)("div",{className:"py-3",children:(0,n.jsx)(a.default,{...e})}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(l.Z,{url:"/blogs",counts:e.total,name:"blogs"})})]})}},50440:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(85893),a=r(5152),i=r.n(a),l=r(67294),s=r(2025),o=r(29842);let c=i()(()=>r.e(1664).then(r.t.bind(r,41664,23)),{loadableGenerated:{webpack:()=>[41664]}}),u=i()(()=>Promise.all([r.e(9755),r.e(508)]).then(r.t.bind(r,89755,23)),{loadableGenerated:{webpack:()=>[89755]}}),d=i()(()=>r.e(9732).then(r.bind(r,69732)),{loadableGenerated:{webpack:()=>[69732]},ssr:!1});function f(e){let t=(0,s.f)(),[r,a]=(0,l.useState)(s.u),[i,f]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{a("winter"===t.themeName)},[t]),(0,n.jsx)("span",{className:"tooltip w-full","data-tip":"More details",children:(0,n.jsxs)(c,{href:"/company/view/".concat(e.fileName),onPointerEnter:()=>f(!0),onPointerLeave:()=>f(!1),className:"p-card flex h-full w-full cursor-pointer flex-col py-4",children:[(0,n.jsx)("div",{className:"relative mx-auto mb-2 h-10 w-10 overflow-hidden",children:(0,n.jsx)(u,{blurDataURL:e.imgBlurData?e.imgBlurData:void 0,placeholder:e.imgBlurData?"blur":void 0,className:r||i?"opacity-80":"invert-colors",alt:e.title,src:e.imgUrl,objectFit:"fill",layout:"fill"})}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("span",{className:"text-sm font-semibold tracking-widest",children:(0,n.jsx)(o.y,{hit:e,attribute:"title"})}),(0,n.jsx)(d,{start:e.start,end:e.end})]})]})})}},88187:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var n=r(85893),a=r(67294),i=r(5152),l=r.n(i),s=r(2404),o=r(50440);let c=l()(()=>r.e(8190).then(r.bind(r,48190)),{loadableGenerated:{webpack:()=>[48190]}});function u(e){return!e.data||e.data.length<0?(0,n.jsxs)("div",{className:"text-center",children:["No ",e.type]}):e.type&&("apps"===e.type||"company"===e.type)?(0,n.jsx)("div",{className:"mx-auto grid w-fit justify-center gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6",children:e.data.map(t=>"apps"===e.type?(0,a.createElement)(s.default,{...t,key:t.date}):(0,a.createElement)(o.default,{...t,key:t.date}))}):(0,n.jsx)("div",{className:"mx-auto grid w-fit justify-center gap-4 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3",children:e.data.map(e=>(0,n.jsx)(c,{data:e},e.date))})}},29842:function(e,t,r){r.d(t,{y:function(){return i}});var n=r(47334),a=r(67294);function i(e){let{hit:t,attribute:r,tagName:i="mark"}=e;return(0,a.createElement)(a.Fragment,{},(0,n.T)({hit:t,attribute:r}).map((e,t)=>{let{value:r,isHighlighted:n}=e;return n?(0,a.createElement)(i,{key:t},r):r}))}},20352:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(85893),a=r(5152),i=r.n(a),l=r(48157);let s=i()(()=>r.e(1664).then(r.t.bind(r,41664,23)),{loadableGenerated:{webpack:()=>[41664]}});function o(e){var t;let r=e.counts&&e.counts>0?(0,l.LU)(e.counts):void 0;return(0,n.jsxs)("div",{className:"indicator mt-3",children:[r&&e.name&&(0,n.jsx)("span",{className:"indicator-new",children:(0,n.jsx)("span",{className:"tooltip","data-tip":"".concat(r," ").concat(e.name),children:r})}),(0,n.jsx)(s,{href:e.url,className:"p-card cursor-pointer font-semibold uppercase",children:null!==(t=e.text)&&void 0!==t?t:"view more"})]})}},311:function(e,t,r){var n=r(67294);let a=n.forwardRef(function({title:e,titleId:t,...r},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"}))});t.Z=a},7814:function(e,t,r){var n=r(67294);let a=n.forwardRef(function({title:e,titleId:t,...r},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"}))});t.Z=a}}]);