"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8263,8425],{48157:function(t,e,n){function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{$k:function(){return _},S:function(){return h},bE:function(){return p},_y:function(){return c},LU:function(){return l},WR:function(){return f},LF:function(){return s}});var i=["","K","M","B"],a={digits:1,uppercase:!0},u=function(t,e){if(void 0===e&&(e={}),isNaN(t))return 0;var n=Math.abs(t);if(n<1e3)return Number(t);for(var u=r({},a,e),o=u.digits,c=u.uppercase,s=[0,1].includes(Math.sign(t))?1:-1,l=0,f="",_=0;_<=i.length;_++){var p=Math.pow(1e3,_);n>=p&&(l=n/p,f=c?i[_]:i[_].toLowerCase())}return""+(l-Math.floor(l)<=0||0===o?Math.floor(l*s):parseFloat(l*s).toFixed(o))+f},o=n(45645);function c(t){return"whatText"in t}function s(t){return t.replace(/\b\w+/g,t=>t.charAt(0).toUpperCase()+t.substr(1).toLowerCase())}function l(t){return u(t,{digits:2,uppercase:!1})}function f(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:160;if(t.length>e){let n=t.slice(0,e),r=n.charAt(n.length-1);return" "!==r&&(n=n.substring(0,n.lastIndexOf(" ")),/[^\w\s]/.test(r)&&(n=n.substring(0,n.length-1))),n}return t}function _(t){return"https://github.com"+t+"/blob/data"}function p(t){var e,n;let r=t.split("/");return{userName:null!==(e=r[1])&&void 0!==e?e:"",repo:null!==(n=r[2])&&void 0!==n?n:""}}function h(){return"production"===o.O.NODE_ENV?o.O.PREFIX_REPO:""}},8425:function(t,e,n){n.r(e);var r=n(85893),i=n(84973),a=n.n(i),u=n(2962),o=n(11163),c=n(48157),s=n(45645);e.default=function(t){let{imgUrl:e,title:n,description:i,itemView:l,ogType:f="website"}=t,_=(0,o.useRouter)(),p=(0,c.WR)(i),h="".concat(s.O.NEXT_PUBLIC_BASE_URL).concat(_.asPath),d=a().extract((l?l.fileName:"")+" "+i,{language:"english",remove_digits:!0,return_changed_case:!0,remove_duplicates:!0}).filter(t=>!/[^\w\s]/.test(t));return(0,r.jsx)(u.PB,{title:n,description:p,canonical:h,additionalLinkTags:[{rel:"icon",href:"".concat(s.O.NEXT_PUBLIC_BASE_URL,"/favicon.ico")}],openGraph:{url:h,title:n,description:p,images:e?[{url:e,alt:"".concat(p)}]:void 0,site_name:s.O.NEXT_PUBLIC_PERSON_NAME,type:f,article:l&&{publishedTime:new Date(l.date).toISOString(),authors:[s.O.NEXT_PUBLIC_BASE_URL],tags:d}},facebook:{appId:s.O.NEXT_PUBLIC_FACEBOOK_APPID},twitter:{handle:s.O.NEXT_PUBLIC_TWITTER_HANDLE,site:s.O.NEXT_PUBLIC_TWITTER_HANDLE,cardType:"summary_large_image"}})}}}]);