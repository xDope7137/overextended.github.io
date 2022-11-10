"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7499],{9613:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>m});var r=t(9496);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),u=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},i=function(e){var a=u(e.components);return r.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=l,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||n;return t?r.createElement(y,o(o({ref:a},i),{},{components:t})):r.createElement(y,o({ref:a},i))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var n=t.length,o=new Array(n);o[0]=d;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var u=2;u<n;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3645:(e,a,t)=>{t.d(a,{Z:()=>o});var r=t(9496),l=t(5924);const n="tabItem_x3QN";function o(e){let{children:a,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(n,o),hidden:t},a)}},537:(e,a,t)=>{t.d(a,{Z:()=>m});var r=t(6600),l=t(9496),n=t(5924),o=t(6885),s=t(6878),p=t(7496),u=t(8906);const i="tabList_HjGn",c="tabItem_R6JG";function d(e){var a;const{lazy:t,block:o,defaultValue:d,values:m,groupId:y,className:g}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??v.map((e=>{let{props:{value:a,label:t,attributes:r}}=e;return{value:a,label:t,attributes:r}})),k=(0,s.l)(b,((e,a)=>e.value===a.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??v[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:T}=(0,p.U)(),[x,N]=(0,l.useState)(h),S=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=y){const e=f[y];null!=e&&e!==x&&b.some((a=>a.value===e))&&N(e)}const Z=e=>{const a=e.currentTarget,t=S.indexOf(a),r=b[t].value;r!==x&&(w(a),N(r),null!=y&&T(y,String(r)))},O=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=S.indexOf(e.currentTarget)+1;t=S[a]??S[0];break}case"ArrowLeft":{const a=S.indexOf(e.currentTarget)-1;t=S[a]??S[S.length-1];break}}null==(a=t)||a.focus()};return l.createElement("div",{className:(0,n.Z)("tabs-container",i)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":o},g)},b.map((e=>{let{value:a,label:t,attributes:o}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===a?0:-1,"aria-selected":x===a,key:a,ref:e=>S.push(e),onKeyDown:O,onFocus:Z,onClick:Z},o,{className:(0,n.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":x===a})}),t??a)}))),t?(0,l.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==x})))))}function m(e){const a=(0,o.Z)();return l.createElement(d,(0,r.Z)({key:String(a)},e))}},525:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=t(6600),l=(t(9496),t(9613)),n=t(537),o=t(3645);const s={title:"Methods"},p=void 0,u={unversionedId:"ox_core/Player/Server/methods",id:"ox_core/Player/Server/methods",title:"Methods",description:"These functions are inherited by instances of CPlayer.",source:"@site/docs/ox_core/Player/Server/methods.md",sourceDirName:"ox_core/Player/Server",slug:"/ox_core/Player/Server/methods",permalink:"/docs/ox_core/Player/Server/methods",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_core/Player/Server/methods.md",tags:[],version:"current",lastUpdatedAt:1668115148,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{title:"Methods"},sidebar:"ox_core",previous:{title:"Events",permalink:"/docs/ox_core/Player/Server/events"},next:{title:"Server",permalink:"/docs/ox_core/Vehicle/Server/"}},i={},c=[{value:"player.set",id:"playerset",level:2},{value:"player.setdb",id:"playersetdb",level:2},{value:"player.get",id:"playerget",level:2},{value:"player.getCoords",id:"playergetcoords",level:2},{value:"player.setGroup",id:"playersetgroup",level:2},{value:"player.hasGroup",id:"playerhasgroup",level:2},{value:"player.isPlayerInScope",id:"playerisplayerinscope",level:2},{value:"player.triggerScopedEvent",id:"playertriggerscopedevent",level:2}],d={toc:c};function m(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"These functions are inherited by instances of ",(0,l.kt)("a",{parentName:"p",href:"../Server/"},"CPlayer"),"."),(0,l.kt)("h2",{id:"playerset"},"player.set"),(0,l.kt)("p",null,"Update the player's metadata, optionally syncing it with the client."),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local key, value = 'iq', 300\nplayer.set(key, value)\n"))),(0,l.kt)(o.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const [key, value] = ['iq', 300];\nplayer.set(key, value);\n")))),(0,l.kt)("h2",{id:"playersetdb"},"player.setdb"),(0,l.kt)("p",null,"Update the player's metadata and store in the DB, optionally syncing it with the client."),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local key, value = 'iq', 300\nplayer.setdb(key, value)\n"))),(0,l.kt)(o.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const [key, value] = ['iq', 300];\nplayer.setdb(key, value);\n")))),(0,l.kt)("h2",{id:"playerget"},"player.get"),(0,l.kt)("p",null,"Return the player's metadata. Sending an argument will retrieve a specific metadata key."),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local data = player.get()\nlocal iq = player.get('iq')\n"))),(0,l.kt)(o.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const data = player.get();\nconst iq = player.get('iq');\n")))),(0,l.kt)("h2",{id:"playergetcoords"},"player.getCoords"),(0,l.kt)("p",null,"Return the player's world position."),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local coords = player.getCoords()\n"))),(0,l.kt)(o.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const coords = player.getCoords();\n")))),(0,l.kt)("h2",{id:"playersetgroup"},"player.setGroup"),(0,l.kt)("p",null,"Updates the player's grade for the given group. Any value below 1 will remove the group from the player."),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local group, grade = 'police', 3\nplayer.setGroup(group, grade)\n"))),(0,l.kt)(o.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const [group, grade] = ['police', 3];\nplayer.setGroup(group, grade);\n")))),(0,l.kt)("h2",{id:"playerhasgroup"},"player.hasGroup"),(0,l.kt)("p",null,"Check if the player is a member of a given group, and returns the matching group name and grade.",(0,l.kt)("br",{parentName:"p"}),"\n","The filter can be a string, array, or object where key is the group, and value is the minimum grade."),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local filter = { police = 0, sheriff = 0 }\nlocal group, grade = player.hasGroup(filter)\n"))),(0,l.kt)(o.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const filter = { police: 0, sheriff: 0 };\nconst [group, grade] = player.hasGroup(filter);\n")))),(0,l.kt)("h2",{id:"playerisplayerinscope"},"player.isPlayerInScope"),(0,l.kt)("p",null,"Check if the given source is inside the player's scope."),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local target = 2\nlocal inScope = player.isPlayerInScope(target)\n"))),(0,l.kt)(o.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const target = 2;\nconst inScope = player.isPlayerInScope(target);\n")))),(0,l.kt)("h2",{id:"playertriggerscopedevent"},"player.triggerScopedEvent"),(0,l.kt)("p",null,"Trigger a client event for all players in the player's scope."),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"player.triggerScopedEvent(eventName, ...)\n"))),(0,l.kt)(o.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"player.triggerScopedEvent(eventName, ...)\n")))))}m.isMDXComponent=!0}}]);