(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9252],{88162:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(85893),a=n(4417);function i(){return(0,r.jsx)("span",{className:"absolute mx-auto w-full ",children:(0,r.jsx)(a.Z,{})})}},4417:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(85893);function a(){return(0,r.jsx)("div",{className:"p-card loading mx-auto flex w-fit justify-center",children:"Loading..."})}},79192:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(85893),a=n(54141);n(31742);var i=n(88162),l=n(67294),s=n(95314),o=n(36947),c=n(31398);let u=()=>{let e=e=>{e.status===a.LayerRenderStatus.DidRender&&e.ele.querySelectorAll(".rpv-core__text-layer-text").forEach(e=>{(0,c.Z)(e,{attributes:{target:"_blank"}})})},t=e=>{e.container.querySelectorAll(".rpv-core__annotation--link a").forEach(e=>{e.setAttribute("target","_blank")})};return{onTextLayerRender:e,onAnnotationLayerRender:t}};function d(e){let{resumeUrl:t}=e,[n,c]=(0,l.useState)(0),[d,f]=(0,l.useState)(!0),x=async()=>{let e=n;for(let t=0;t<30;t++){if(await (0,s.g)(2500),n==e){f(!1);break}e=n}f(!1)},m=u();return(0,r.jsx)("div",{className:"relative",children:(0,r.jsxs)(a.Worker,{workerUrl:"https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.min.js",children:[d&&(0,r.jsx)(i.Z,{}),(0,r.jsx)("div",{className:"container mx-auto h-full max-w-3xl text-gray-900",children:(0,r.jsx)("div",{className:"".concat(d?"invisible":"visible"," overflow-hidden rounded-md"),children:(0,r.jsx)(a.Viewer,{onZoom:e=>{c(e.scale)},onDocumentLoad:()=>{x()},renderError:()=>(f(!1),(0,r.jsx)("div",{className:"flex w-full justify-center",children:(0,r.jsxs)("div",{className:"p-card mx-5 flex h-full w-fit flex-col gap-2 py-4 text-base-content sm:flex-row",children:[(0,r.jsx)(o.Z,{className:"h-5 w-5"}),"Error: Unable to view PDF resume. Please download."]})})),defaultScale:a.SpecialZoomLevel.PageFit,theme:"dark",fileUrl:t,plugins:[m]})})})]})})}},95314:function(e,t,n){"use strict";async function r(e){return await new Promise(t=>setTimeout(t,e))}n.d(t,{g:function(){return r}})},93414:function(){},70172:function(){},2001:function(){},33779:function(){},82258:function(){}}]);