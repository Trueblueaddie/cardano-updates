"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[3680],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),h=n,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1002:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={title:"Hydra Team Update",slug:"2022-10-21-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},i="High level summary",p={permalink:"/cardano-updates/2022-10-21-hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-10-21-hydra.md",source:"@site/blog/2022-10-21-hydra.md",title:"Hydra Team Update",description:"This week, the hydra team reviewed and addressed several open comments on the",date:"2022-10-21T00:00:00.000Z",formattedDate:"October 21, 2022",tags:[{label:"hydra",permalink:"/cardano-updates/tags/hydra"}],readingTime:.95,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2022-10-21-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Crypto Team Update",permalink:"/cardano-updates/2022-10-27-crypto"},nextItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2022-10-18-consensus"}},l={authorsImageUrls:[void 0]},s=[{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This week, the hydra team reviewed and addressed several open comments on the\nnew HeadV1 specification, completing a list the of identified gaps between\nspecification and implementation while doing so. In the wake of the recent\ndemonstration of SundaeSwap running their DEX in a Hydra Head, they met with\nthem to capture feature ideas & incorporate their feedback on the roadmap, as\nwell as potential research avenues."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Had the monthly review meeting, a bit earlier than expected: ",(0,n.kt)("a",{parentName:"li",href:"https://input-output.atlassian.net/wiki/spaces/HYDRA/pages/3650813953/Monthly+report+-+October+2022"},"https://input-output.atlassian.net/wiki/spaces/HYDRA/pages/3650813953/Monthly+report+-+October+2022")),(0,n.kt)("li",{parentName:"ul"},"Reviewed and addressed several open comments on HeadV1 specification."),(0,n.kt)("li",{parentName:"ul"},"Completed the list of identified gaps between specification and implementation ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/issues/452"},"#452")),(0,n.kt)("li",{parentName:"ul"},"Had two meetings with SundaeSwap to incorporate their feedback (on research and on the roadmap)."),(0,n.kt)("li",{parentName:"ul"},"Some small fixes on TUI and our docker images. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/issues/538"},"#538")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/pull/562"},"#562")),(0,n.kt)("li",{parentName:"ul"},"Met with the internal audit team and clarified scope.")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Complete the last two items required for a version ",(0,n.kt)("inlineCode",{parentName:"li"},"0.8.0"),"."),(0,n.kt)("li",{parentName:"ul"},"Cut the next release, version ",(0,n.kt)("inlineCode",{parentName:"li"},"0.8.0")),(0,n.kt)("li",{parentName:"ul"},"Get backup/recovery ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/issues/187"},"#187")," done with proper event sourcing (ADR18)"),(0,n.kt)("li",{parentName:"ul"},"Have the CI build macos artifacts")))}d.isMDXComponent=!0}}]);