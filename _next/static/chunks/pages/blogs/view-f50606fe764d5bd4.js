(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1483],{79448:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/view",function(){return n(93349)}])},48157:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{$k:function(){return d},S:function(){return h},bE:function(){return p},_y:function(){return o},LU:function(){return u},WR:function(){return f},LF:function(){return s}});var a=["","K","M","B"],i={digits:1,uppercase:!0},l=function(e,t){if(void 0===t&&(t={}),isNaN(e))return 0;var n=Math.abs(e);if(n<1e3)return Number(e);for(var l=r({},i,t),c=l.digits,o=l.uppercase,s=[0,1].includes(Math.sign(e))?1:-1,u=0,f="",d=0;d<=a.length;d++){var p=Math.pow(1e3,d);n>=p&&(u=n/p,f=o?a[d]:a[d].toLowerCase())}return""+(u-Math.floor(u)<=0||0===c?Math.floor(u*s):parseFloat(u*s).toFixed(c))+f},c=n(45645);function o(e){return"whatText"in e}function s(e){return e.replace(/\b\w+/g,e=>e.charAt(0).toUpperCase()+e.substr(1).toLowerCase())}function u(e){return l(e,{digits:2,uppercase:!1})}function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:160;if(e.length>t){let n=e.slice(0,t),r=n.charAt(n.length-1);return" "!==r&&(n=n.substring(0,n.lastIndexOf(" ")),/[^\w\s]/.test(r)&&(n=n.substring(0,n.length-1))),n}return e}function d(e){return"https://github.com"+e+"/blob/data"}function p(e){var t,n;let r=e.split("/");return{userName:null!==(t=r[1])&&void 0!==t?t:"",repo:null!==(n=r[2])&&void 0!==n?n:""}}function h(){return c.O.NEXT_PUBLIC_PREFIX_REPO}},67259:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return a}});var r=n(50160),a=!0;t.default=r.default},93349:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return a}});var r=n(67259),a=!0;t.default=r.default},50160:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h},default:function(){return g}});var r=n(85893),a=n(45485),i=n(44414),l=n(5152),c=n.n(l),o=n(67294),s=n(48157),u=n(45645);let f=c()(()=>Promise.all([n.e(2295),n.e(8425)]).then(n.bind(n,8425)),{loadableGenerated:{webpack:()=>[8425]}}),d=c()(()=>n.e(8187).then(n.bind(n,88187)),{loadableGenerated:{webpack:()=>[88187]}}),p=c()(()=>n.e(2034).then(n.bind(n,32034)),{loadableGenerated:{webpack:()=>[32034]}});var h=!0;function g(e){let t=(0,s.LF)(e.type),n="".concat(t," | ").concat(u.O.NEXT_PUBLIC_PERSON_NAME),[l,c]=(0,o.useState)(!1),[h,g]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{c(e.pageInfo.no<=1),g(e.pageInfo.size*e.pageInfo.no>=e.pageInfo.total)},[e]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{description:"See all ".concat(n),title:n}),(0,r.jsxs)("div",{className:"container mx-auto",children:[(0,r.jsx)("p",{className:"text-center text-3xl uppercase",children:t}),(0,r.jsx)("div",{className:"mx-auto w-full max-w-6xl",children:(0,r.jsx)("div",{className:"m-2",children:(0,r.jsx)(d,{data:e.data,type:e.type},"".concat(e.type,"-").concat(e.pageInfo.no))})}),(0,r.jsxs)("div",{className:"flex w-full items-center justify-center gap-2 pt-2",children:[(0,r.jsx)(p,{disabled:l,href:l?"#":"/".concat(t.toLowerCase(),"/page/").concat(e.pageInfo.no-1),className:"p-card h-fit w-fit cursor-pointer",children:(0,r.jsx)(a.Z,{className:"h-5 w-5"})}),(0,r.jsx)(p,{href:h?"#":"/".concat(t.toLowerCase(),"/page/").concat(e.pageInfo.no+1),disabled:h,className:"p-card h-fit w-fit cursor-pointer",children:(0,r.jsx)(i.Z,{className:"h-5 w-5"})})]}),(0,r.jsxs)("div",{className:"my-2 text-center text-xs font-thin tracking-wider text-slate-500",children:["Total ",e.pageInfo.total," ",(0,r.jsx)("span",{className:"text-base-content/40",children:" | "}),"Page no ",e.pageInfo.no]})]})]})}},45485:function(e,t,n){"use strict";var r=n(67294);let a=r.forwardRef(function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z",clipRule:"evenodd"}))});t.Z=a},44414:function(e,t,n){"use strict";var r=n(67294);let a=r.forwardRef(function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",clipRule:"evenodd"}))});t.Z=a}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=79448)}),_N_E=e.O()}]);