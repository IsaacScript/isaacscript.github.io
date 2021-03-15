"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86180],{38470:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var t=i(31085),s=i(71184);const r={custom_edit_url:null},c="Pickup Index Creation",a={id:"isaacscript-common/features/PickupIndexCreation",title:"Pickup Index Creation",description:"Hierarchy",source:"@site/docs/isaacscript-common/features/PickupIndexCreation.md",sourceDirName:"isaacscript-common/features",slug:"/isaacscript-common/features/PickupIndexCreation",permalink:"/isaacscript-common/features/PickupIndexCreation",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"isaacScriptCommon",previous:{title:"Persistent Entities",permalink:"/isaacscript-common/features/PersistentEntities"},next:{title:"Player Collectible Tracking",permalink:"/isaacscript-common/features/PlayerCollectibleTracking"}},d={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:"getPickupIndex",id:"getpickupindex",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"pickup-index-creation",children:"Pickup Index Creation"}),"\n",(0,t.jsx)(n.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Feature"})}),"\n",(0,t.jsxs)(n.p,{children:["\u21b3 ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"PickupIndexCreation"})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"getpickupindex",children:"getPickupIndex"}),"\n",(0,t.jsxs)(n.p,{children:["\u25b8 ",(0,t.jsx)(n.strong,{children:"getPickupIndex"}),"(",(0,t.jsx)(n.code,{children:"pickup"}),"): ",(0,t.jsx)(n.a,{href:"/isaacscript-common/other/types/PickupIndex#pickupindex",children:(0,t.jsx)(n.code,{children:"PickupIndex"})})]}),"\n",(0,t.jsxs)(n.p,{children:["Mods often have to track variables relating to a pickups. Finding an index for these kinds of\ndata structures is difficult, since pickups are respawned every time a player re-enters a room,\nso the ",(0,t.jsx)(n.code,{children:"PtrHash"})," will change."]}),"\n",(0,t.jsx)(n.p,{children:"Use this function to get a unique index for a pickup to use in these data structures."}),"\n",(0,t.jsxs)(n.p,{children:["Specifically, ",(0,t.jsx)(n.code,{children:"PickupIndex"})," is a number that represents the spawn order of the pickup on the\ncurrent run. For example, the first pickup spawned will have an index of 1, the second one will\nhave an index of 2, and so on."]}),"\n",(0,t.jsx)(n.p,{children:"Tracking pickups requires stateful tracking, so using pickup indexes requires an upgraded mod."}),"\n",(0,t.jsx)(n.p,{children:"Note that the pickup index will not change:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"When a pickup is rolled with e.g. D6 or D20."}),"\n",(0,t.jsx)(n.li,{children:'When an item is "rotated" via e.g. Tainted Isaac\'s mechanic.'}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In order to use this function, you must upgrade your mod with\n",(0,t.jsx)(n.code,{children:"ISCFeature.PICKUP_INDEX_CREATION"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"pickup"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"EntityPickup"})})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/isaacscript-common/other/types/PickupIndex#pickupindex",children:(0,t.jsx)(n.code,{children:"PickupIndex"})})}),"\n",(0,t.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/classes/features/other/PickupIndexCreation.ts#L262",children:"packages/isaacscript-common/src/classes/features/other/PickupIndexCreation.ts:262"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},71184:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>a});var t=i(14041);const s={},r=t.createContext(s);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);