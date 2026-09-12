(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[124],{3187:function(e,t,r){Promise.resolve().then(r.bind(r,3333)),Promise.resolve().then(r.t.bind(r,231,23))},3333:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(7437),a=r(5601),l=r.n(a),o=r(2265);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,r(8030).Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);var u=r(7592);function c(e){let{images:t,alt:r,sizes:a,priority:c=!1}=e,s=t&&t.length?t:[],[d,f]=(0,o.useState)(0),h=(0,o.useRef)(null),g=s.length;if(0===g)return null;let m=e=>f(t=>(t+e+g)%g);return(0,n.jsxs)("div",{className:"gallery",onTouchStart:e=>{h.current=e.changedTouches[0]?e.changedTouches[0].clientX:null},onTouchEnd:e=>{if(g<2||null===h.current)return;let t=(e.changedTouches[0]?e.changedTouches[0].clientX:0)-h.current;h.current=null,40>Math.abs(t)||m(t>0?-1:1)},children:[s.map((e,t)=>(0,n.jsx)(l(),{className:"gallery__slide",src:e,alt:g>1?"".concat(r," (image ").concat(t+1," of ").concat(g,")"):r,fill:!0,priority:c&&0===t,sizes:a,style:{opacity:t===d?1:0}},e)),g>1&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{type:"button",className:"gallery__nav gallery__nav--prev",onClick:()=>m(-1),"aria-label":"Previous product image",children:(0,n.jsx)(i,{"aria-hidden":"true"})}),(0,n.jsx)("button",{type:"button",className:"gallery__nav gallery__nav--next",onClick:()=>m(1),"aria-label":"Next product image",children:(0,n.jsx)(u.Z,{"aria-hidden":"true"})}),(0,n.jsx)("span",{className:"gallery__dots",children:s.map((e,t)=>(0,n.jsx)("button",{type:"button",className:"gallery__dot","aria-current":t===d,"aria-label":"Show image ".concat(t+1),onClick:()=>f(t)},e))})]})]})}},8030:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(2265);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:u,className:c="",children:s,iconNode:d,...f}=e;return(0,n.createElement)("svg",{ref:t,...o,width:a,height:a,stroke:r,strokeWidth:u?24*Number(i)/Number(a):i,className:l("lucide",c),...f},[...d.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(s)?s:[s]])}),u=(e,t)=>{let r=(0,n.forwardRef)((r,o)=>{let{className:u,...c}=r;return(0,n.createElement)(i,{ref:o,iconNode:t,className:l("lucide-".concat(a(e)),u),...c})});return r.displayName="".concat(e),r}},7592:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},5601:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return u},getImageProps:function(){return i}});let n=r(9920),a=r(497),l=r(8173),o=n._(r(1241));function i(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let u=l.Image}},function(e){e.O(0,[231,173,971,23,744],function(){return e(e.s=3187)}),_N_E=e.O()}]);