"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[508],{80508:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let r=n(67294),l=n(10029),u="function"==typeof IntersectionObserver,o=new Map,i=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,c=a||!u,[f,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),b=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(u){if(c||f)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:l,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=o.get(r)))return t;let l=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:u,elements:l},i.push(n),o.set(n,t),t}(n);return u.set(e,t),l.observe(e),function(){if(u.delete(e),l.unobserve(e),0===u.size){l.disconnect(),o.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!f){let e=(0,l.requestIdleCallback)(()=>s(!0));return()=>(0,l.cancelIdleCallback)(e)}},[c,n,t,f,d.current]);let p=(0,r.useCallback)(()=>{s(!1)},[]);return[b,f,p]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}}]);