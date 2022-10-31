"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[83],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6391:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Crypto Team Update",slug:"2022-10-27-crypto",authors:"iquerejeta",tags:["crypto"],hide_table_of_contents:!1},i="High level overview",s={permalink:"/cardano-updates/2022-10-27-crypto",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/blog/2022-10-27-crypto.md",source:"@site/blog/2022-10-27-crypto.md",title:"Crypto Team Update",description:"The crypto team is primarily focusing in enabling SECP primitives, and preparing the KES agent. We are close to",date:"2022-10-27T00:00:00.000Z",formattedDate:"October 27, 2022",tags:[{label:"crypto",permalink:"/cardano-updates/tags/crypto"}],readingTime:1.075,hasTruncateMarker:!1,authors:[{name:"I\xf1igo Querejeta Azurmendi",title:"Cardano Lead Cryptography Engineer",url:"https://github.com/iquerejeta",imageURL:"https://github.com/iquerejeta.png",key:"iquerejeta"}],frontMatter:{title:"Crypto Team Update",slug:"2022-10-27-crypto",authors:"iquerejeta",tags:["crypto"],hide_table_of_contents:!1},prevItem:{title:"SRE Team Update",permalink:"/cardano-updates/2022-08-12-sre"},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2022-10-21-hydra"}},l={authorsImageUrls:[void 0]},p=[{value:"SECP built-ins",id:"secp-built-ins",level:2},{value:"KES agent",id:"kes-agent",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The crypto team is primarily focusing in enabling SECP primitives, and preparing the KES agent. We are close to\nmeeting the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-base/issues/315"},"acceptance criteria")," in cardano-base,\nwhich lacks some editorial comments on the style of dQuandrant's PR, the inclusion of one additional test, and\nwe are good to mark it as done. For the KES agent, we are still iterating over the best design of the solution,\nbut also progressing on the implementation."),(0,a.kt)("h1",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("h2",{id:"secp-built-ins"},"SECP built-ins"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(missed last two weeks update) Audit was succesfully completed by bCryptic, and some minor changes where addressed in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/313"},"PR 313")),(0,a.kt)("li",{parentName:"ul"},"CIP-0049 was addressed in the editors meeting, and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cardano-foundation/CIPs/pull/250"},"PR 250")," was merged"),(0,a.kt)("li",{parentName:"ul"},"The unit-tests ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/320"},"PR 320")," is opened. Some editorial concerns still need to be addressed, and an additional (negative) test has been requested for addition.")),(0,a.kt)("h2",{id:"kes-agent"},"KES agent"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We were working in investigating how to send OpCerts to KES agents, but turns out to be not necessary. OpCerts can be stored on-disk, so the agent does not need to be aware of them."),(0,a.kt)("li",{parentName:"ul"},"We are redesigning the architecture. Instead of connecting the control server to the agent, and then the latter to the node, we are directly connecting the control server to the node, and the latter to the agent(s).")))}u.isMDXComponent=!0}}]);