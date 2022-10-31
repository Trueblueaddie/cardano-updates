"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[4310],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=i.createContext({}),p=function(e){var t=i.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||r;return a?i.createElement(h,l(l({ref:t},s),{},{components:a})):i.createElement(h,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2530:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=a(7462),n=(a(7294),a(3905));const r={title:"SRE Team Update",slug:"2022-08-12-sre",authors:"manveru",tags:["sre"],hide_table_of_contents:!1},l="High level summary",o={permalink:"/cardano-updates/2022-08-12-sre",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/blog/2022-10-28-sre.md",source:"@site/blog/2022-10-28-sre.md",title:"SRE Team Update",description:"The SRE team is heavily working on the Equinix Metal migration, replacing Hydra",date:"2022-10-28T00:00:00.000Z",formattedDate:"October 28, 2022",tags:[{label:"sre",permalink:"/cardano-updates/tags/sre"}],readingTime:3.02,hasTruncateMarker:!1,authors:[{name:"Michael Fellinger",title:"SRE Team Lead",url:"https://github.com/manveru",imageURL:"https://github.com/manveru.png",key:"manveru"}],frontMatter:{title:"SRE Team Update",slug:"2022-08-12-sre",authors:"manveru",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"Network Team Update",permalink:"/cardano-updates/2022-10-28-network"},nextItem:{title:"Crypto Team Update",permalink:"/cardano-updates/2022-10-27-crypto"}},u={authorsImageUrls:[void 0]},p=[{value:"OpenZiti",id:"openziti",level:2},{value:"Cicero &amp; Tullia Integrations",id:"cicero--tullia-integrations",level:2},{value:"Cicero &amp; Tullia Features",id:"cicero--tullia-features",level:2},{value:"Spongix",id:"spongix",level:2},{value:"Bugs",id:"bugs",level:2}],s={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The SRE team is heavily working on the Equinix Metal migration, replacing Hydra\nwith Cicero, and a new version of Spongix."),(0,n.kt)("h1",{id:"lower-level-summary"},"Lower level summary"),(0,n.kt)("h2",{id:"openziti"},"OpenZiti"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Work is ongoing on our OpenZiti integration into Bitte in [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/bitte/compare/zt"},"bitte-zt"),"]."),(0,n.kt)("li",{parentName:"ul"},"CI-World deployment of Darwin CI Ziti service in [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ci-world/commit/d40f4d19187a2128b6f0d63bde7e3f9a33071994"},"ci-world-commit-d40f4d"),"]."),(0,n.kt)("li",{parentName:"ul"},"Multiple issues filed, and a lot of discussion with the OpenZiti developers,\nwe're making pretty rapid progress thanks to them."),(0,n.kt)("li",{parentName:"ul"},"Work on getting Equinix baremetal machines integrated into AWS World Bitte\nclusters utilizing a Ziti ZTNA network overlay to bridge the networking of\nthe two environments and get IAM extension to Equinix machine for Nomad\nclient onboarding."),(0,n.kt)("li",{parentName:"ul"},"A Nix Flake for most of our OpenZiti dependencies including the Console,\nController, Edge Tunnel, and Router is now at [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/johnalotoski/openziti-bins"},"openziti-bins"),"]."),(0,n.kt)("li",{parentName:"ul"},"The Flake also includes a WiP NixOS modules for these components."),(0,n.kt)("li",{parentName:"ul"},"Tested Ziti Desktop Edge official app for Darwin x86_64 w/ GUI -- works with\nno issues seen so far"),(0,n.kt)("li",{parentName:"ul"},"Moved the console to traefik routing service (",(0,n.kt)("inlineCode",{parentName:"li"},"zac.$DOMAIN"),") and\ncontroller/edge router stay at ",(0,n.kt)("inlineCode",{parentName:"li"},"zt.$DOMAIN"),", but have registered consul\nservices")),(0,n.kt)("h2",{id:"cicero--tullia-integrations"},"Cicero & Tullia Integrations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added webhook for [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/haskell.nix"},"haskell.nix"),"]."),(0,n.kt)("li",{parentName:"ul"},"Finished Cicero CI action for [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-addresses/pull/205"},"cardano-addresses-pull-205"),"]."),(0,n.kt)("li",{parentName:"ul"},"Fixed cardano-prelude cicero action in [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-prelude/pull/176#issuecomment-1280947946"},"cardano-prelude-pull-176"),"]."),(0,n.kt)("li",{parentName:"ul"},"Fixed the ",(0,n.kt)("inlineCode",{parentName:"li"},"abcird-stdlib/publish")," action [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/abcirdc/pull/104"},"abcirdc-pull-104"),"]"),(0,n.kt)("li",{parentName:"ul"},"fix error on vm-bigdisk flake configs [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cicero/pull/66"},"cicero-pull-66"),"]."),(0,n.kt)("li",{parentName:"ul"},"Helped with Cicero actions and answered questions for [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/plutus"},"plutus"),"]\n[",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-prelude"},"cardano-prelude"),"], and [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/abcirdc"},"abcirdc"),"]."),(0,n.kt)("li",{parentName:"ul"},"Merged [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/323"},"cardano-base-pull-323"),"] for Tullia on cardano-base."),(0,n.kt)("li",{parentName:"ul"},"Merged Cicero action in [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ogmios/pull/5"},"cardano-ogmios-pull-5"),"]."),(0,n.kt)("li",{parentName:"ul"},"Opened [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-explorer-app/pull/427"},"cardano-explorer-app-pull-427"),"] to add Tullia and Cicero."),(0,n.kt)("li",{parentName:"ul"},"Opened [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3097"},"cardano-ledger-pull-3097"),"] to add Cicero CI action."),(0,n.kt)("li",{parentName:"ul"},"Opened [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4489"},"cardano-node-pull-4489"),"] to add Tullia and Cicero, including\nOS-agnostic jobs."),(0,n.kt)("li",{parentName:"ul"},"Opened [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4108"},"ouroboros-network-pull-4108"),"] to add Cicero action."),(0,n.kt)("li",{parentName:"ul"},"Reviewed [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/plutus/pull/4918"},"plutus-pull-4918"),"] and helped test it."),(0,n.kt)("li",{parentName:"ul"},"Update Tullia in [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/abcirdc/pull/97"},"abcirdc-pull-97"),"] to build if a tag is given.")),(0,n.kt)("h2",{id:"cicero--tullia-features"},"Cicero & Tullia Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Improvements to Tullia task aggregation to make [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-addresses"},"cardano-addresses"),"] build\ncorrectly."),(0,n.kt)("li",{parentName:"ul"},"Better tullia CUE lib default for tags [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/tullia/commit/4df3c5d956f1b062b950643da12768ae71acf245"},"tullia-commit-4df3c5d"),"]."),(0,n.kt)("li",{parentName:"ul"},"Put ",(0,n.kt)("inlineCode",{parentName:"li"},"cache.nixos.org")," back in ",(0,n.kt)("inlineCode",{parentName:"li"},"cache.iog.io"),"'s upstreams. This is now\nconsidered a public cache again, and without it some Cicero evaluations had\nto build huge packages."),(0,n.kt)("li",{parentName:"ul"},"Started working on a flake-parts module for Tullia."),(0,n.kt)("li",{parentName:"ul"},"Started working on cutting down Tullia task build time by putting facts in\nJSON files."),(0,n.kt)("li",{parentName:"ul"},"Fixed running into kernel arg limit by reading tullia's DAG from a file"),(0,n.kt)("li",{parentName:"ul"},"Merged [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/tullia/pull/9"},"tullia-pull-9"),"] that fixes several issues related to error reporting.\nand escaping."),(0,n.kt)("li",{parentName:"ul"},"Added Mac builders in Cicero on CI-World."),(0,n.kt)("li",{parentName:"ul"},"Started work on Tullia invocation caching.")),(0,n.kt)("h2",{id:"spongix"},"Spongix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A lot of progress on an SQlite backed version of Spongix, it already supports\nthe full HTTP binary cache protocol but still lacks comprehensive testing and\nsome tuning, as well as recursive lookups."),(0,n.kt)("li",{parentName:"ul"},"First steps in the implementation of the ",(0,n.kt)("inlineCode",{parentName:"li"},"nix-daemon")," ",(0,n.kt)("inlineCode",{parentName:"li"},"ssh-ng")," protocol so\nSpongix can be used via SSH and we can get rid of basic auth.")),(0,n.kt)("h2",{id:"bugs"},"Bugs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Discovered Cicero bug where Nomad reschedules cause the Github commit status\nto get stuck in ",(0,n.kt)("inlineCode",{parentName:"li"},"pending")),(0,n.kt)("li",{parentName:"ul"},"Discovered Cicero race condition bug around concurrent transactions for\ncodependent actions."),(0,n.kt)("li",{parentName:"ul"},"Fixed tullia task order bug in [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-addresses"},"cardano-addresses"),"]"),(0,n.kt)("li",{parentName:"ul"},"Diagnose Cicero action not triggered in [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/abcirdc"},"abcirdc"),"]"),(0,n.kt)("li",{parentName:"ul"},"Fixed meta/description of the Tullia package in [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/tullia/pull/7"},"tullia-pull-7"),"]"),(0,n.kt)("li",{parentName:"ul"},"Add Vault token loop alerts in [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/bitte-cells/pull/40"},"bitte-cells-pull-40"),"]"),(0,n.kt)("li",{parentName:"ul"},"Ongoing investigation on recurring Patroni and nomad-follower issues related\nto token rotation.")))}c.isMDXComponent=!0}}]);