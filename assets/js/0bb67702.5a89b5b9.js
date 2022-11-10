"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1996],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,g=m["".concat(d,".").concat(u)]||m[u]||p[u]||a;return n?o.createElement(g,l(l({ref:t},c),{},{components:n})):o.createElement(g,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=n(6600),r=(n(9496),n(9613));const a={},l=void 0,i={unversionedId:"ox_target/Usage/Target",id:"ox_target/Usage/Target",title:"Target",description:"addModel",source:"@site/docs/ox_target/Usage/Target.md",sourceDirName:"ox_target/Usage",slug:"/ox_target/Usage/Target",permalink:"/docs/ox_target/Usage/Target",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_target/Usage/Target.md",tags:[],version:"current",lastUpdatedAt:1668115148,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{},sidebar:"ox_target",previous:{title:"Globals",permalink:"/docs/ox_target/Usage/Globals"},next:{title:"Zones",permalink:"/docs/ox_target/Usage/Zones"}},d={},s=[{value:"addModel",id:"addmodel",level:2},{value:"removeModel",id:"removemodel",level:2},{value:"addEntity",id:"addentity",level:2},{value:"removeEntity",id:"removeentity",level:2},{value:"addLocalEntity",id:"addlocalentity",level:2},{value:"removeLocalEntity",id:"removelocalentity",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local options = {\n  {\n        name = 'ox:option1',\n        event = 'ox_target:debug',\n        icon = 'fa-solid fa-road',\n        label = 'Option 1',\n        canInteract = function(entity, distance, coords, name, bone)\n            return math.random(0, 100) < 51\n        end\n    },\n    {\n        name = 'ox:option2',\n        event = 'ox_target:debug',\n        icon = 'fa-solid fa-road',\n        label = 'Option 2',\n        canInteract = function(entity, distance, coords, name, bone)\n            return math.random(0, 100) < 51\n        end\n    }\n}\n\nlocal models = { `prop_atm_01`, `prop_atm_02` }\nlocal optionsNames = { 'ox:option1', 'ox:option2' }\n")),(0,r.kt)("h2",{id:"addmodel"},"addModel"),(0,r.kt)("p",null,"Add new options when targeting a specific model or list of models."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_target:addModel(models, options)\n")),(0,r.kt)("h2",{id:"removemodel"},"removeModel"),(0,r.kt)("p",null,"Remove options from a specific model or list of models."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_target:removeModel(models, optionNames)\n")),(0,r.kt)("h2",{id:"addentity"},"addEntity"),(0,r.kt)("p",null,"Add new options when targeting a networked entity or list of entities."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_target:addEntity(entities, options)\n")),(0,r.kt)("h2",{id:"removeentity"},"removeEntity"),(0,r.kt)("p",null,"Remove options from a networked entity or list of entities."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_target:removeEntity(entities, optionNames)\n")),(0,r.kt)("h2",{id:"addlocalentity"},"addLocalEntity"),(0,r.kt)("p",null,"Add new options when targeting a local entity or list of entities."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_target:addLocalEntity(entities, options)\n")),(0,r.kt)("h2",{id:"removelocalentity"},"removeLocalEntity"),(0,r.kt)("p",null,"Remove options from a local entity or list of entities."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_target:removeLocalEntity(entities, optionNames)\n")))}p.isMDXComponent=!0}}]);