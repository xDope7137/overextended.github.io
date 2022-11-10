"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5390],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(y,i(i({ref:t},u),{},{components:n})):o.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(6600),r=(n(9496),n(9613));const a={},i="QBCore",l={unversionedId:"ox_inventory/Getting Started/qb",id:"ox_inventory/Getting Started/qb",title:"QBCore",description:"Compatibility",source:"@site/docs/ox_inventory/Getting Started/qb.md",sourceDirName:"ox_inventory/Getting Started",slug:"/ox_inventory/Getting Started/qb",permalink:"/docs/ox_inventory/Getting Started/qb",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Getting Started/qb.md",tags:[],version:"current",lastUpdatedAt:1668115148,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{},sidebar:"ox_inventory",previous:{title:"ESX",permalink:"/docs/ox_inventory/Getting Started/esx"},next:{title:"Search",permalink:"/docs/ox_inventory/Functions/Client/Inventory/Search"}},s={},c=[{value:"Compatibility",id:"compatibility",level:2},{value:"Installation",id:"installation",level:2},{value:"Convert QBCore",id:"convert-qbcore",level:3},{value:"Optional optimisation",id:"optional-optimisation",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=u("Tabs"),p=u("TabItem"),m={toc:c};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"qbcore"},"QBCore"),(0,r.kt)("h2",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null,"Ox Inventory provides a complete suite of tools to replace the built-in items and inventory system from QBCore, and is not intended to be used with resources designed around it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stashes from resources such as qb-policejob, qb-ambulancejob, etc. should be removed, they are not compatible"),(0,r.kt)("li",{parentName:"ul"},"qb-inventory should be removed for optimal compatibility, if you didn't remove it, qb-core will not function properly and will show errors."),(0,r.kt)("li",{parentName:"ul"},"qb-shops and qb-weapons automatically get stopped by Ox Inventory, so you don't have to worry about those, just don't start them manually after as they will conflict.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the latest source code of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/qbcore-framework/qb-core"},"qb-core"),"."),(0,r.kt)("li",{parentName:"ul"},"Modify your ",(0,r.kt)("inlineCode",{parentName:"li"},"server.cfg"),", starting ox_inventory immediately after qb-core."),(0,r.kt)("li",{parentName:"ul"},"To disable the weapon animation of qb-smallresources, use the latest source code of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/qbcore-framework/qb-smallresources"},"qb-smallresources")," (it will only disable if qb-inventory is ",(0,r.kt)("strong",{parentName:"li"},"not")," present inside the resources folder)")),(0,r.kt)("h3",{id:"convert-qbcore"},"Convert QBCore"),(0,r.kt)("p",null,"If you have existing player data, you will need to convert it to a compatible format."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start the server and type ",(0,r.kt)("inlineCode",{parentName:"li"},"convertinventory qb")," into the server console."),(0,r.kt)("li",{parentName:"ul"},"Restart the server once conversion is complete.")),(0,r.kt)("h2",{id:"optional-optimisation"},"Optional optimisation"),(0,r.kt)("p",null,"All item related functions from Player, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"xPlayer.Functions.GetItemByName"),", have been modified for compatibility purposes; however they are considered deprecated."),(0,r.kt)("p",null,"The reasoning is fairly simple - there's now additional function references and overhead to consider. Fortunately, the new Inventory functions can be used directly and offer a great deal of improvements over the old ones."),(0,r.kt)("p",null,"You should read through the functions section for further information, but the following should give you a decent idea."),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(p,{value:"qb",label:"QBCore",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local acetone = Player.Functions.GetItemByName('acetone')\nlocal antifreeze = Player.Functions.GetItemByName('antifreeze')\nlocal sudo = Player.Functions.GetItemByName('sudo')\nif acetone?.amount > 2 and antifreeze?.amount > 4 and sudo?.amount > 9 then\n    Player.Functions.RemoveItem(\"acetone\", 3)\n    Player.Functions.RemoveItem(\"antifreeze\", 5)\n    Player.Functions.RemoveItem(\"sudo\", 10)\nend\n"))),(0,r.kt)(p,{value:"inventory",label:"Inventory",mdxType:"TabItem"},(0,r.kt)("p",null,"Add the following code somewhere in your resource to cache the exports metatable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local ox_inventory = exports.ox_inventory\n")),(0,r.kt)("p",null,"You will be able to reference any functions exposed through the export."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local items = ox_inventory:Search(source, 'count', {'acetone', 'antifreeze', 'sudo'})\nif items and items.acetone > 2 and items.antifreeze > 4 and items.sudo > 9 then\n    ox_inventory:RemoveItem(source, 'acetone', 3)\n    ox_inventory:RemoveItem(source, 'antifreeze', 5)\n    ox_inventory:RemoveItem(source, 'sudo', 10)\nend\n")))))}y.isMDXComponent=!0}}]);