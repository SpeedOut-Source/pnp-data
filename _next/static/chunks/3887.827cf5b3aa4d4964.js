(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3887],{86010:function(e,t,n){"use strict";t.Z=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(s&&(s+=" "),s+=r);else for(n in t)t[n]&&(s&&(s+=" "),s+=n)}return s}(e))&&(r&&(r+=" "),r+=t);return r}},48157:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{$k:function(){return h},S:function(){return b},bE:function(){return p},_y:function(){return c},LU:function(){return d},WR:function(){return f},LF:function(){return u}});var s=["","K","M","B"],i={digits:1,uppercase:!0},a=function(e,t){if(void 0===t&&(t={}),isNaN(e))return 0;var n=Math.abs(e);if(n<1e3)return Number(e);for(var a=r({},i,t),l=a.digits,o=a.uppercase,c=[0,1].includes(Math.sign(e))?1:-1,u=0,d="",f=0;f<=s.length;f++){var h=Math.pow(1e3,f);n>=h&&(u=n/h,d=o?s[f]:s[f].toLowerCase())}return""+(u-Math.floor(u)<=0||0===l?Math.floor(u*c):parseFloat(u*c).toFixed(l))+d},l=n(45645),o=n(26509);function c(e){return"whatText"in e}function u(e){return e.replace(/\b\w+/g,e=>e.charAt(0).toUpperCase()+e.substr(1).toLowerCase())}function d(e){return a(e,{digits:2,uppercase:!1})}function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:160;if(e.length>t){let n=e.slice(0,t),r=n.charAt(n.length-1);return" "!==r&&(n=n.substring(0,n.lastIndexOf(" ")),/[^\w\s]/.test(r)&&(n=n.substring(0,n.length-1))),n}return e}function h(e){return(0,o.Z)("https://github.com",e,"/blob/".concat(l.O.NEXT_PUBLIC_REPO_DATA_BRANCH))}function p(e){var t,n;let r=e.split("/");return{userName:null!==(t=r[1])&&void 0!==t?t:"",repo:null!==(n=r[2])&&void 0!==n?n:""}}function b(){return l.O.NEXT_PUBLIC_LOCALHOST_TEST?"":l.O.NEXT_PUBLIC_PREFIX_REPO}},45988:function(e,t,n){"use strict";n.d(t,{L:function(){return s}});var r=n(64529);let s=(0,r.Ue)(e=>({isOpen:!1,setIsOpen:t=>e({isOpen:t})}))},43887:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(85893),s=n(67294);let i=s.forwardRef(function({title:e,titleId:t,...n},r){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?s.createElement("title",{id:t},e):null,s.createElement("path",{fillRule:"evenodd",d:"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z",clipRule:"evenodd"}))});var a=n(5152),l=n.n(a),o=n(25675),c=n.n(o),u=n(2025),d=n(77496),f=n(49822),h=n(45645),p=n(11163),b=n(48157),g=n(86010);let m=l()(()=>Promise.all([n.e(1664),n.e(9755),n.e(2932)]).then(n.bind(n,32932)),{loadableGenerated:{webpack:()=>[32932]}}),w=l()(()=>n.e(7372).then(n.bind(n,47372)),{loadableGenerated:{webpack:()=>[47372]}}),v=l()(()=>n.e(1664).then(n.t.bind(n,41664,23)),{loadableGenerated:{webpack:()=>[41664]}});function x(){let e=(0,u.f)(),[t,n]=(0,s.useState)(u.u);(0,s.useEffect)(()=>{n("winter"===e.themeName)},[e]);let[a,l]=(0,s.useState)(!1),[o,x]=(0,s.useState)(!1),j=function(){let[e,t]=(0,s.useState)(0),n=(0,p.useRouter)();return(0,s.useEffect)(()=>{function e(){let e=window.scrollY,n=document.body.scrollHeight-window.innerHeight;n&&t(100*Number((e/n).toFixed(2)))}function r(){t(0)}return window.addEventListener("scroll",e),n.events.on("routeChangeStart",r),()=>{window.removeEventListener("scroll",e),n.events.off("routeChangeStart",r)}},[n]),e}();return(0,s.useEffect)(()=>{x(!0);let e=()=>{let e=window.scrollY>=16;e?l(!0):l(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,r.jsx)("header",{style:{backgroundSize:"".concat(j,"%"),backgroundRepeat:"no-repeat"},className:(0,g.Z)(o?"transition-all duration-500 ease-in-out":"",a?"bg-gradient-to-r from-30% from-base-300/30 to-base-content/50 to-100% shadow-2xl lg:mx-1 lg:translate-y-1 lg:rounded-xl lg:ring-1 lg:ring-base-300/40":"shadow-none","supports-backdrop-blur:bg-white/60 sticky top-0 z-50 h-14 backdrop-blur-sm"),children:(0,r.jsxs)("div",{className:"container mx-auto flex h-14 items-center justify-between overflow-visible px-4 py-2",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("span",{className:"tooltip tooltip-bottom","data-tip":"Go home",children:(0,r.jsxs)(v,{href:"/",className:"btn-ghost btn px-2 text-xl font-bold normal-case tracking-wider",children:[(0,r.jsx)(c(),{src:"".concat((0,b.S)(),"/images/logos/github-profile-dark").concat(t?"-light":"",".png"),width:"32",height:"32",alt:h.O.NEXT_PUBLIC_PERSON_NAME}),(0,r.jsx)("div",{className:"ml-2 hidden lg:flex",children:h.O.NEXT_PUBLIC_PERSON_NAME})]})}),(0,r.jsx)(w,{className:"hidden items-center gap-4 md:flex lg:flex xl:flex"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"hidden lg:inline ",children:(0,r.jsx)(m,{})}),(0,r.jsxs)("div",{className:"flex items-center justify-end lg:hidden",children:[(0,r.jsx)(d.Q,{}),(0,r.jsx)(f.Z,{}),(0,r.jsxs)("div",{className:"dropdown-end dropdown",children:[(0,r.jsx)("label",{tabIndex:0,className:"btn-ghost btn-circle btn",children:(0,r.jsx)(i,{className:"h-8 w-8"})}),(0,r.jsxs)("ul",{tabIndex:0,className:"dropdown-content menu rounded-box mt-2 w-fit bg-base-100/95 px-2 py-5 shadow-2xl ring ring-base-300",children:[(0,r.jsx)(w,{className:" flex justify-center space-x-4 rounded-lg bg-base-100/80 px-2 pb-2"}),(0,r.jsx)(m,{})]})]})]})]})]})})}},49822:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(85893),s=n(67294);let i=s.forwardRef(function({title:e,titleId:t,...n},r){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?s.createElement("title",{id:t},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"}))}),a=s.forwardRef(function({title:e,titleId:t,...n},r){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?s.createElement("title",{id:t},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"}))});var l=n(2025);function o(){let e=(0,l.f)(),[t,n]=(0,s.useState)(l.u);return(0,s.useEffect)(()=>{n("winter"===e.themeName)},[e]),(0,r.jsxs)("button",{onClick:e.toggleTheme,className:"".concat(t?"swap-active":""," swap-rotate btn btn-ghost btn-circle swap"),children:[(0,r.jsx)(i,{className:"swap-on h-6 w-6"}),(0,r.jsx)(a,{className:"swap-off h-6 w-6"})]})}},77496:function(e,t,n){"use strict";n.d(t,{Q:function(){return c}});var r=n(85893),s=n(49633),i=n(67294);let a=["Ctrl ","Control"],l=["⌘","Command"];var o=n(45988);function c(){let e=(0,i.useRef)(null),t=function(){let[e,t]=(0,i.useState)();return(0,i.useEffect)(()=>{"undefined"!=typeof navigator&&(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?t(l):t(a))},[]),e}(),n=(0,o.L)(),c=(0,i.useCallback)(e=>{e.preventDefault(),n.setIsOpen(!n.isOpen)},[n]);return(0,i.useEffect)(()=>{function t(t){e&&e.current&&(27===t.keyCode&&n.isOpen||"k"===t.key&&(t.metaKey||t.ctrlKey))&&c(t)}return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[n,e,c]),(0,r.jsx)("button",{className:"w-fit",type:"button",ref:e,onClick:e=>{c(e)},children:(0,r.jsxs)("div",{className:"p-card flex w-fit cursor-pointer items-center gap-3 overflow-visible rounded-full bg-transparent px-3 lg:rounded-xl lg:bg-base-300",children:[(0,r.jsx)(s.Z,{className:"h-5 w-5"}),t&&(0,r.jsxs)("div",{className:"hidden items-center gap-1 lg:flex",children:[(0,r.jsx)("kbd",{"data-tip":t[1],className:"kbd tooltip tooltip-bottom kbd-sm text-base-content no-underline",children:t[0]})," ",(0,r.jsx)("kbd",{className:"kbd kbd-sm",children:"k"})]})]})})}},11163:function(e,t,n){e.exports=n(96885)},49633:function(e,t,n){"use strict";var r=n(67294);let s=r.forwardRef(function({title:e,titleId:t,...n},s){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"}))});t.Z=s},26509:function(e,t,n){"use strict";function r(){var e;return e="object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments),function(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var n=e.shift();e[0]=n+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var s=e[r];if("string"!=typeof s)throw TypeError("Url must be a string. Received "+s);""!==s&&(r>0&&(s=s.replace(/^[\/]+/,"")),s=r<e.length-1?s.replace(/[\/]+$/,""):s.replace(/[\/]+$/,"/"),t.push(s))}var i=t.join("/"),a=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return a.shift()+(a.length>0?"?":"")+a.join("&")}(e)}n.d(t,{Z:function(){return r}})}}]);