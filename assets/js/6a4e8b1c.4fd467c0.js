"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26579],{52087:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=s(31085),i=s(71184);const r={custom_edit_url:null},l="Custom Stages",c={id:"isaacscript-common/features/CustomStages",title:"Custom Stages",description:"Hierarchy",source:"@site/docs/isaacscript-common/features/CustomStages.md",sourceDirName:"isaacscript-common/features",slug:"/isaacscript-common/features/CustomStages",permalink:"/isaacscript-common/features/CustomStages",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"isaacScriptCommon",previous:{title:"Custom Pickups",permalink:"/isaacscript-common/features/CustomPickups"},next:{title:"Custom Trapdoors",permalink:"/isaacscript-common/features/CustomTrapdoors"}},o={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:"setCustomStage",id:"setcustomstage",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"disableCustomStage",id:"disablecustomstage",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"custom-stages",children:"Custom Stages"}),"\n",(0,n.jsx)(t.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"Feature"})}),"\n",(0,n.jsxs)(t.p,{children:["\u21b3 ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"CustomStages"})})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.h3,{id:"setcustomstage",children:"setCustomStage"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"setCustomStage"}),"(",(0,n.jsx)(t.code,{children:"name"}),", ",(0,n.jsx)(t.code,{children:"firstFloor?"}),", ",(0,n.jsx)(t.code,{children:"streakText?"}),", ",(0,n.jsx)(t.code,{children:"verbose?"}),"): ",(0,n.jsx)(t.code,{children:"void"})]}),"\n",(0,n.jsx)(t.p,{children:"Helper function to warp to a custom stage/level."}),"\n",(0,n.jsxs)(t.p,{children:['Custom stages/levels must first be defined in the "tsconfig.json" file. See the documentation\nfor more details: ',(0,n.jsx)(t.a,{href:"https://isaacscript.github.io/main/custom-stages/",children:"https://isaacscript.github.io/main/custom-stages/"})]}),"\n",(0,n.jsxs)(t.p,{children:["In order to use this function, you must upgrade your mod with ",(0,n.jsx)(t.code,{children:"ISCFeature.CUSTOM_STAGES"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Default value"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"name"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"undefined"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'The name of the custom stage, corresponding to what is in the "tsconfig.json" file.'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"firstFloor"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"true"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Optional. Whether to go to the first floor or the second floor. For example, if you have a custom stage emulating Caves, then the first floor would be Caves 1, and the second floor would be Caves 2. Default is true."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"streakText"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"true"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Optional. Whether to show the streak text at the top of the screen that announces the name of the level. Default is true."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"verbose"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"false"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Optional. Whether to log additional information about the rooms that are chosen. Default is false."})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"void"})}),"\n",(0,n.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/classes/features/other/CustomStages.ts#L494",children:"packages/isaacscript-common/src/classes/features/other/CustomStages.ts:494"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"disablecustomstage",children:"disableCustomStage"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"disableCustomStage"}),"(): ",(0,n.jsx)(t.code,{children:"void"})]}),"\n",(0,n.jsx)(t.p,{children:"Helper function to disable the custom stage. This is typically called before taking the player\nto a vanilla floor."}),"\n",(0,n.jsxs)(t.p,{children:["In order to use this function, you must upgrade your mod with ",(0,n.jsx)(t.code,{children:"ISCFeature.CUSTOM_STAGES"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"void"})}),"\n",(0,n.jsx)(t.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/classes/features/other/CustomStages.ts#L603",children:"packages/isaacscript-common/src/classes/features/other/CustomStages.ts:603"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},71184:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>c});var n=s(14041);const i={},r=n.createContext(i);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);