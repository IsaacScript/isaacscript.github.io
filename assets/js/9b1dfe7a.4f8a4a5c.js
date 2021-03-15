"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35006],{27330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(31085),l=n(71184);const r={custom_edit_url:null},i="Stats",c={id:"isaacscript-common/functions/stats",title:"Stats",description:"Functions",source:"@site/docs/isaacscript-common/functions/stats.md",sourceDirName:"isaacscript-common/functions",slug:"/isaacscript-common/functions/stats",permalink:"/isaacscript-common/functions/stats",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"isaacScriptCommon",previous:{title:"Stage",permalink:"/isaacscript-common/functions/stage"},next:{title:"Story Bosses",permalink:"/isaacscript-common/functions/storyBosses"}},a={},d=[{value:"Functions",id:"functions",level:2},{value:"addPlayerStat",id:"addplayerstat",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"getDefaultPlayerStat",id:"getdefaultplayerstat",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getPlayerStat",id:"getplayerstat",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getPlayerStats",id:"getplayerstats",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"stats",children:"Stats"}),"\n",(0,s.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(t.h3,{id:"addplayerstat",children:"addPlayerStat"}),"\n",(0,s.jsxs)(t.p,{children:["\u25b8 ",(0,s.jsx)(t.strong,{children:"addPlayerStat"}),"(",(0,s.jsx)(t.code,{children:"player"}),", ",(0,s.jsx)(t.code,{children:"cacheFlag"}),", ",(0,s.jsx)(t.code,{children:"amount"}),"): ",(0,s.jsx)(t.code,{children:"void"})]}),"\n",(0,s.jsxs)(t.p,{children:["Helper function to add a stat to a player based on the ",(0,s.jsx)(t.code,{children:"CacheFlag"})," provided. Call this function\nfrom the ",(0,s.jsx)(t.code,{children:"EVALUATE_CACHE"})," callback."]}),"\n",(0,s.jsxs)(t.p,{children:["Note that for ",(0,s.jsx)(t.code,{children:"CacheFlag.FIRE_DELAY"}),', the "amount" argument will be interpreted as the tear stat\nto add (and not the amount to mutate ',(0,s.jsx)(t.code,{children:"EntityPlayer.MaxFireDelay"})," by)."]}),"\n",(0,s.jsx)(t.p,{children:"This function supports the following cache flags:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"CacheFlag.DAMAGE (1 << 0)"}),"\n",(0,s.jsx)(t.li,{children:"CacheFlag.FIRE_DELAY (1 << 1)"}),"\n",(0,s.jsx)(t.li,{children:"CacheFlag.SHOT_SPEED (1 << 2)"}),"\n",(0,s.jsx)(t.li,{children:"CacheFlag.RANGE (1 << 3)"}),"\n",(0,s.jsx)(t.li,{children:"CacheFlag.SPEED (1 << 4)"}),"\n",(0,s.jsx)(t.li,{children:"CacheFlag.LUCK (1 << 10)"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"player"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"EntityPlayer"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"cacheFlag"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"CacheFlagValue"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"amount"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"number"})})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"void"})}),"\n",(0,s.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/stats.ts#L32",children:"packages/isaacscript-common/src/functions/stats.ts:32"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"getdefaultplayerstat",children:"getDefaultPlayerStat"}),"\n",(0,s.jsxs)(t.p,{children:["\u25b8 ",(0,s.jsx)(t.strong,{children:"getDefaultPlayerStat"}),"(",(0,s.jsx)(t.code,{children:"cacheFlag"}),"): ",(0,s.jsx)(t.code,{children:"number"})," | ",(0,s.jsx)(t.code,{children:"undefined"})]}),"\n",(0,s.jsxs)(t.p,{children:["Returns the starting stat that Isaac (the default character) starts with. For example, if you\npass this function ",(0,s.jsx)(t.code,{children:"CacheFlag.DAMAGE"}),", it will return 3.5."]}),"\n",(0,s.jsxs)(t.p,{children:["Note that the default fire delay is represented in the tear stat, not the ",(0,s.jsx)(t.code,{children:"MaxFireDelay"})," value."]}),"\n",(0,s.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"cacheFlag"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"CacheFlagValue"})})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"number"})," | ",(0,s.jsx)(t.code,{children:"undefined"})]}),"\n",(0,s.jsx)(t.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/stats.ts#L92",children:"packages/isaacscript-common/src/functions/stats.ts:92"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"getplayerstat",children:"getPlayerStat"}),"\n",(0,s.jsxs)(t.p,{children:["\u25b8 ",(0,s.jsx)(t.strong,{children:"getPlayerStat"}),"<",(0,s.jsx)(t.code,{children:"T"}),">(",(0,s.jsx)(t.code,{children:"player"}),", ",(0,s.jsx)(t.code,{children:"playerStat"}),"): ",(0,s.jsx)(t.a,{href:"/isaacscript-common/other/interfaces/PlayerStats",children:(0,s.jsx)(t.code,{children:"PlayerStats"})}),"[",(0,s.jsx)(t.code,{children:"T"}),"]"]}),"\n",(0,s.jsxs)(t.p,{children:["Helper function to get the stat for a player corresponding to the ",(0,s.jsx)(t.code,{children:"StatType"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"type-parameters",children:"Type parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"T"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["extends ",(0,s.jsx)(t.a,{href:"/isaacscript-common/other/enums/PlayerStat",children:(0,s.jsx)(t.code,{children:"PlayerStat"})})]})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"parameters-2",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"player"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"EntityPlayer"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"playerStat"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"T"})})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/isaacscript-common/other/interfaces/PlayerStats",children:(0,s.jsx)(t.code,{children:"PlayerStats"})}),"[",(0,s.jsx)(t.code,{children:"T"}),"]"]}),"\n",(0,s.jsx)(t.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/stats.ts#L97",children:"packages/isaacscript-common/src/functions/stats.ts:97"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"getplayerstats",children:"getPlayerStats"}),"\n",(0,s.jsxs)(t.p,{children:["\u25b8 ",(0,s.jsx)(t.strong,{children:"getPlayerStats"}),"(",(0,s.jsx)(t.code,{children:"player"}),"): ",(0,s.jsx)(t.a,{href:"/isaacscript-common/other/interfaces/PlayerStats",children:(0,s.jsx)(t.code,{children:"PlayerStats"})})]}),"\n",(0,s.jsx)(t.p,{children:"Helper function to get all of the stat for a player."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-3",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"player"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"EntityPlayer"})})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/isaacscript-common/other/interfaces/PlayerStats",children:(0,s.jsx)(t.code,{children:"PlayerStats"})})}),"\n",(0,s.jsx)(t.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/stats.ts#L106",children:"packages/isaacscript-common/src/functions/stats.ts:106"})})]})}function o(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},71184:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(14041);const l={},r=s.createContext(l);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);