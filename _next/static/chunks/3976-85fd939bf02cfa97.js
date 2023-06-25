"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3976,2404,440],{18786:function(e,t,a){a.d(t,{S:function(){return i},Z:function(){return n}});var i="__aa-highlight__",n="__/aa-highlight__"},47334:function(e,t,a){function i(e,t){return t.reduce(function(e,t){return e&&e[t]},e)}a.d(t,{T:function(){return l}});var n=a(18786);function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=Array(t);a<t;a++)i[a]=e[a];return i}function l(e){var t,a,l,s=e.hit,c=e.attribute,o=Array.isArray(c)?c:[c],d=i(s,["_highlightResult"].concat(function(e){if(Array.isArray(e))return r(e)}(o)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if("Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return r(e,t)}}(o)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),["value"]));return"string"!=typeof d&&(d=i(s,o)||""),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{get:function(){return e},add:function(t){var a=e[e.length-1];(null==a?void 0:a.isHighlighted)===t.isHighlighted?e[e.length-1]={value:a.value+t.value,isHighlighted:a.isHighlighted}:e.push(t)}}}((a=(t=d.split(n.S)).shift())?[{value:a,isHighlighted:!1}]:[]),t.forEach(function(e){var t=e.split(n.Z);l.add({value:t[0],isHighlighted:!0}),""!==t[1]&&l.add({value:t[1],isHighlighted:!1})}),l.get()}},48157:function(e,t,a){function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}a.d(t,{$k:function(){return u},S:function(){return x},bE:function(){return h},_y:function(){return c},LU:function(){return d},WR:function(){return m},LF:function(){return o}});var n=["","K","M","B"],r={digits:1,uppercase:!0},l=function(e,t){if(void 0===t&&(t={}),isNaN(e))return 0;var a=Math.abs(e);if(a<1e3)return Number(e);for(var l=i({},r,t),s=l.digits,c=l.uppercase,o=[0,1].includes(Math.sign(e))?1:-1,d=0,m="",u=0;u<=n.length;u++){var h=Math.pow(1e3,u);a>=h&&(d=a/h,m=c?n[u]:n[u].toLowerCase())}return""+(d-Math.floor(d)<=0||0===s?Math.floor(d*o):parseFloat(d*o).toFixed(s))+m},s=a(45645);function c(e){return"whatText"in e}function o(e){return e.replace(/\b\w+/g,e=>e.charAt(0).toUpperCase()+e.substr(1).toLowerCase())}function d(e){return l(e,{digits:2,uppercase:!1})}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:160;if(e.length>t){let a=e.slice(0,t),i=a.charAt(a.length-1);return" "!==i&&(a=a.substring(0,a.lastIndexOf(" ")),/[^\w\s]/.test(i)&&(a=a.substring(0,a.length-1))),a}return e}function u(e){return"https://github.com"+e+"/blob/data"}function h(e){var t,a;let i=e.split("/");return{userName:null!==(t=i[1])&&void 0!==t?t:"",repo:null!==(a=i[2])&&void 0!==a?a:""}}function x(){return s.O.NEXT_PUBLIC_PREFIX_REPO}},2404:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var i=a(85893),n=a(7814),r=a(5152),l=a.n(r),s=a(29842);let c=l()(()=>a.e(1664).then(a.t.bind(a,41664,23)),{loadableGenerated:{webpack:()=>[41664]}}),o=l()(()=>Promise.all([a.e(9755),a.e(508)]).then(a.t.bind(a,89755,23)),{loadableGenerated:{webpack:()=>[89755]}});function d(e){return(0,i.jsxs)(c,{className:"p-card h-48 cursor-pointer flex-row items-center justify-start py-3 hover:-translate-y-1 hover:shadow-lg",href:"/apps/view/".concat(e.fileName),children:[(0,i.jsx)("div",{className:"relative mx-auto h-24 w-24 overflow-hidden rounded-3xl px-0 text-justify",children:e.imgUrl?(0,i.jsx)(o,{blurDataURL:e.imgBlurData,placeholder:e.imgBlurData?"blur":"empty",loading:"lazy",objectFit:"cover",layout:"fill",src:e.imgUrl,alt:e.title}):(0,i.jsxs)("div",{className:"flex h-full flex-col justify-center text-center",children:[(0,i.jsx)(n.Z,{className:"mx-auto h-10 w-10"}),(0,i.jsx)("p",{children:"No logo"})]})}),(0,i.jsxs)("div",{className:"mx-0 mt-1 h-fit w-full px-2 text-center tracking-wider",children:[(0,i.jsx)("p",{className:"mb-1 font-semibold leading-4",children:(0,i.jsx)(s.y,{hit:e,attribute:"title"})}),(0,i.jsx)("p",{className:"text-xs text-base-content",children:(0,i.jsx)(s.y,{hit:e,attribute:"category"})})]})]})}},50440:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var i=a(85893),n=a(5152),r=a.n(n),l=a(67294),s=a(2025),c=a(29842);let o=r()(()=>a.e(1664).then(a.t.bind(a,41664,23)),{loadableGenerated:{webpack:()=>[41664]}}),d=r()(()=>Promise.all([a.e(9755),a.e(508)]).then(a.t.bind(a,89755,23)),{loadableGenerated:{webpack:()=>[89755]}}),m=r()(()=>a.e(9732).then(a.bind(a,69732)),{loadableGenerated:{webpack:()=>[69732]},ssr:!1});function u(e){let t=(0,s.f)(),[a,n]=(0,l.useState)(s.u),[r,u]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{n("winter"===t.themeName)},[t]),(0,i.jsx)("span",{className:"tooltip w-full","data-tip":"More details",children:(0,i.jsxs)(o,{href:"/company/view/".concat(e.fileName),onPointerEnter:()=>u(!0),onPointerLeave:()=>u(!1),className:"p-card flex h-full w-full cursor-pointer flex-col py-4",children:[(0,i.jsx)("div",{className:"relative mx-auto mb-2 h-10 w-10 overflow-hidden",children:(0,i.jsx)(d,{blurDataURL:e.imgBlurData?e.imgBlurData:void 0,placeholder:e.imgBlurData?"blur":void 0,className:a||r?"opacity-80":"invert-colors",alt:e.title,src:e.imgUrl,objectFit:"fill",layout:"fill"})}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("span",{className:"text-sm font-semibold tracking-widest",children:(0,i.jsx)(c.y,{hit:e,attribute:"title"})}),(0,i.jsx)(m,{start:e.start,end:e.end})]})]})})}},4417:function(e,t,a){a.d(t,{Z:function(){return n}});var i=a(85893);function n(){return(0,i.jsx)("div",{className:"p-card loading mx-auto flex w-fit justify-center",children:"Loading..."})}},29842:function(e,t,a){a.d(t,{y:function(){return r}});var i=a(47334),n=a(67294);function r(e){let{hit:t,attribute:a,tagName:r="mark"}=e;return(0,n.createElement)(n.Fragment,{},(0,i.T)({hit:t,attribute:a}).map((e,t)=>{let{value:a,isHighlighted:i}=e;return i?(0,n.createElement)(r,{key:t},a):a}))}},73976:function(e,t,a){a.r(t),a.d(t,{__N_SSG:function(){return E},default:function(){return V}});var i=a(85893),n=a(67294),r=a(45485),l=a(44414),s=a(5152),c=a.n(s),o=a(4417),d=a(2404),m=a(2025),u=a(311),h=a(48157),x=a(50440),f=a(45645);let p=c()(()=>Promise.all([a.e(2295),a.e(8425)]).then(a.bind(a,8425)),{loadableGenerated:{webpack:()=>[8425]}}),g=c()(()=>a.e(1664).then(a.t.bind(a,41664,23)),{loadableGenerated:{webpack:()=>[41664]}}),w=c()(()=>a.e(5675).then(a.t.bind(a,25675,23)),{loadableGenerated:{webpack:()=>[25675]}}),v=c()(()=>Promise.all([a.e(9755),a.e(508)]).then(a.t.bind(a,89755,23)),{loadableGenerated:{webpack:()=>[89755]}}),j=c()(()=>a.e(5432).then(a.bind(a,35432)),{loadableGenerated:{webpack:()=>[35432]}}),b=c()(()=>a.e(7055).then(a.bind(a,77055)),{loadableGenerated:{webpack:()=>[77055]},ssr:!1}),y=c()(()=>Promise.all([a.e(6481),a.e(4534)]).then(a.bind(a,98048)),{loadableGenerated:{webpack:()=>[98048]},loading:()=>(0,i.jsx)(o.Z,{})}),N=c()(()=>a.e(4744).then(a.bind(a,48190)),{loadableGenerated:{webpack:()=>[48190]}}),k=c()(()=>Promise.all([a.e(9861),a.e(4969)]).then(a.bind(a,91444)),{loadableGenerated:{webpack:()=>[91444]}});var E=!0;function V(e){let t,a,s,c;let o=(0,m.f)(),[E,V]=(0,n.useState)(m.u);switch((0,n.useEffect)(()=>{V("winter"===o.themeName)},[o]),e.type){case"projects":let _=e.itemView;t="".concat(_.whatText),a="".concat(_.result," | ").concat((0,h.LF)(e.type)," | ").concat(_.company.name," | ").concat(_.app.name),s="".concat(_.whatText," ").concat(_.result),c=_;break;case"blogs":let L=e.itemView;t=L.title,a="".concat(L.desc," | ").concat((0,h.LF)(e.type)," | ").concat(f.O.NEXT_PUBLIC_PERSON_NAME),s=L.desc;break;case"apps":let P=e.itemView;t=P.title,a="".concat(P.category," | ").concat((0,h.LF)(e.type)," | ").concat(P.platforms.map(e=>e.name).join(" | ")," | ").concat(f.O.NEXT_PUBLIC_PERSON_NAME),s=P.title;break;case"company":let S=e.itemView;t=S.title,a="".concat(t," | ").concat((0,h.LF)(e.type)),s=t}let A=(0,h.$k)(f.O.NEXT_PUBLIC_REPO_PATH)+"/"+e.type+"/"+e.itemView.fileName+"?plain=1";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p,{description:a,title:t,imgUrl:e.itemView.imgUrl,ogType:"article",itemView:e.itemView}),(0,i.jsxs)("div",{className:"container mx-auto max-w-3xl px-2",children:[(0,i.jsxs)("div",{className:"flex flex-wrap items-center gap-1",children:[(0,i.jsx)(g,{className:"title link-hover link-primary link capitalize",href:"/"+e.type,children:e.type})," ","/ ",e.itemView.fileName,(0,i.jsx)("div",{className:"tooltip tooltip-bottom","data-tip":"Edit this on Github",children:(0,i.jsx)(g,{href:A,target:"_blank",rel:"",children:(0,i.jsx)(u.Z,{className:"link-hover link h-4 w-4"})})})]}),(0,i.jsxs)("div",{className:"my-2 flex flex-col items-center justify-between gap-2 sm:flex-row sm:items-end",children:[(0,i.jsxs)("div",{className:"p-card flex h-fit w-full flex-col items-start py-2 text-xs text-slate-500 sm:w-fit",children:[("projects"===e.type||"company"===e.type)&&(0,i.jsxs)("div",{className:"flex items-center gap-1",children:["Company Name:"," ",(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"flex items-center gap-1",children:[(0,i.jsx)(w,{width:20,height:20,src:c?c.company.logoUrl:e.itemView.imgUrl,alt:c?c.company.name:e.itemView.title}),(0,i.jsx)("span",{children:c?c.company.name:e.itemView.title})]})})]}),(0,i.jsx)("div",{className:"flex items-center gap-1",children:function(){switch(e.type){case"projects":if(!c)return(0,i.jsx)(i.Fragment,{});return(0,i.jsxs)(i.Fragment,{children:["App Name:"," ",(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"flex items-center gap-1",children:[(0,i.jsx)(w,{width:20,height:20,src:c.app.logoUrl,alt:c.app.name}),(0,i.jsx)("span",{children:c.app.name})]})})]});case"apps":return(0,i.jsxs)(i.Fragment,{children:["App name: ",(0,i.jsx)("span",{children:e.itemView.title})]});case"company":let t=e.itemView;return(0,i.jsxs)("div",{className:"text-left",children:[(0,i.jsxs)("p",{children:["Start: ",(0,i.jsx)(b,{date:t.start})]}),(0,i.jsxs)("p",{children:["End:"," ",(0,i.jsx)("span",{children:t.end>0?(0,i.jsx)(b,{date:t.end}):"Present"})]})]})}}()}),(0,i.jsxs)("div",{className:"flex items-center gap-1",children:["Post date: ",(0,i.jsx)(b,{date:e.itemView.date})]}),"apps"!==e.type&&(0,i.jsxs)("div",{className:"flex items-center gap-1",children:["Read time:"," ",(0,i.jsxs)("span",{children:[e.itemView.readTime," min"]})]})]}),(0,i.jsx)(j,{text:s})]})]}),"apps"===e.type&&(0,i.jsxs)("div",{className:"container mx-auto mb-4 max-w-3xl space-y-4 px-2",children:[(0,i.jsxs)("div",{className:"flex w-full flex-col items-center justify-center",children:[(0,i.jsx)(w,{src:e.itemView.imgUrl,alt:e.itemView.title,width:100,height:100}),(0,i.jsx)("p",{className:"text-center text-4xl font-semibold tracking-wider",children:e.itemView.title})]}),(0,i.jsx)("div",{className:"flex flex-wrap justify-center gap-3",children:e.itemView.platforms.map(t=>(0,i.jsx)(g,{href:t.link,target:"_blank",className:"p-card flex h-fit w-fit cursor-pointer flex-col py-2",children:(0,i.jsxs)("div",{className:"h-24 space-y-2 py-2",children:[(0,i.jsx)("p",{className:"text-center",children:t.name}),(0,i.jsx)("div",{className:"flex h-fit w-40 justify-center overflow-hidden",children:function(e,t){switch(e.toLowerCase()){case"windows":case"microsoft":case"microsoft edge":return(0,i.jsx)(w,{src:"".concat((0,h.S)(),"/images/listing/microsoftstore.svg"),alt:e,height:10,width:135});case"android":return(0,i.jsx)(w,{src:"".concat((0,h.S)(),"/images/listing/playstore.svg"),alt:e,height:10,width:200});case"github release":return(0,i.jsx)(w,{className:"",src:"".concat((0,h.S)(),"/images/listing/github-mark").concat(E?"":"-white",".svg"),alt:e,height:10,width:50});default:return(0,i.jsx)(w,{src:null!=t?t:"".concat((0,h.S)(),"/images/logos/github-profile-dark").concat(E?"-light":"",".png"),alt:e,height:10,width:50})}}(t.name,e.itemView.imgUrl)})]})},t.link))}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"carousel-center carousel rounded-box my-0 space-x-4 bg-base-300/40 p-4",children:e.itemView.imgs.map((e,t)=>(0,i.jsx)("div",{id:"image".concat(t+1),className:"carousel-item relative h-72 w-[98%] xs:h-72 sm:h-80 md:h-[30rem]",children:(0,i.jsx)(v,{alt:t.toString(),layout:"fill",objectFit:"scale-down",src:e,className:"rounded-box"})},e))}),e.itemView.imgs.length>1&&(0,i.jsx)("div",{className:"my-2 flex w-full justify-center gap-2",children:e.itemView.imgs.map((e,t)=>(0,i.jsx)(g,{autoFocus:!1,scroll:!1,href:"#image".concat(t+1),className:"btn-xs btn my-0 py-0",children:t+1},t))})]})]}),"company"===e.type&&(0,i.jsx)("div",{className:"container mx-auto mb-4 max-w-3xl space-y-4 px-2",children:(0,i.jsxs)("div",{className:"flex w-full flex-col items-center justify-center",children:[(0,i.jsx)(w,{src:e.itemView.imgUrl,alt:e.itemView.title,width:100,height:100}),(0,i.jsx)("p",{className:"text-center text-4xl font-semibold tracking-wider",children:e.itemView.title}),(0,i.jsx)(g,{href:e.itemView.homePage,target:"_blank",className:"p-card mt-3 cursor-pointer",children:"Goto website"})]})}),(0,i.jsx)(y,{data:e.data},e.itemView.date),(0,i.jsx)("div",{className:"container divider mx-auto max-w-3xl px-2"}),(e.previous||e.next)&&(0,i.jsx)("div",{className:"container mx-auto max-w-3xl px-2",children:(0,i.jsxs)("div",{className:"flex w-full items-center justify-center gap-4",children:[e.previous&&(0,i.jsxs)("div",{className:"h-fit w-full",children:[(0,i.jsx)("div",{className:" mb-2 flex items-center text-2xl normal-case text-slate-400",children:(0,i.jsxs)(g,{href:"/".concat(e.type,"/view/").concat(e.previous.fileName),className:"link-hover link flex items-center ",children:[(0,i.jsx)(r.Z,{className:"h-6 w-6"}),"Previous"," "]})}),"apps"!==e.type&&"company"!==e.type&&(0,i.jsx)(N,{data:e.previous})]}),e.next&&(0,i.jsxs)("div",{className:"h-fit w-full",children:[(0,i.jsx)("div",{className:"mb-2 flex items-center justify-end text-2xl normal-case text-slate-400",children:(0,i.jsxs)(g,{href:"/".concat(e.type,"/view/").concat(e.next.fileName),className:"link-hover link flex items-center",children:["Next ",(0,i.jsx)(l.Z,{className:"h-6 w-6"})]})}),"apps"!==e.type&&"company"!==e.type&&(0,i.jsx)(N,{data:e.next})]})]})}),("apps"===e.type||"company"===e.type)&&e.more4&&(0,i.jsx)("div",{className:"mx-auto grid max-w-3xl gap-2 px-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",children:e.more4.map(t=>"apps"===e.type?(0,n.createElement)(d.default,{...t,key:t.date}):(0,n.createElement)(x.default,{...t,key:t.date}))},"".concat(e.itemView.fileName)),(0,i.jsx)("div",{className:"container divider mx-auto max-w-3xl px-2"}),(0,i.jsx)("div",{className:"container mx-auto max-w-3xl px-2",children:(0,i.jsx)(k,{theme:E?"light":"dark_dimmed"},A)})]})}},311:function(e,t,a){var i=a(67294);let n=i.forwardRef(function({title:e,titleId:t,...a},n){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?i.createElement("title",{id:t},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"}))});t.Z=n},7814:function(e,t,a){var i=a(67294);let n=i.forwardRef(function({title:e,titleId:t,...a},n){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?i.createElement("title",{id:t},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"}))});t.Z=n},45485:function(e,t,a){var i=a(67294);let n=i.forwardRef(function({title:e,titleId:t,...a},n){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?i.createElement("title",{id:t},e):null,i.createElement("path",{fillRule:"evenodd",d:"M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z",clipRule:"evenodd"}))});t.Z=n},44414:function(e,t,a){var i=a(67294);let n=i.forwardRef(function({title:e,titleId:t,...a},n){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?i.createElement("title",{id:t},e):null,i.createElement("path",{fillRule:"evenodd",d:"M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",clipRule:"evenodd"}))});t.Z=n}}]);