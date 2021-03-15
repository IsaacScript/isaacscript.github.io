"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13498],{20454:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var s=t(31085),i=t(71184);const c={custom_edit_url:null},l="Sound",r={id:"isaacscript-common/functions/sound",title:"Sound",description:"Functions",source:"@site/docs/isaacscript-common/functions/sound.md",sourceDirName:"isaacscript-common/functions",slug:"/isaacscript-common/functions/sound",permalink:"/isaacscript-common/functions/sound",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"isaacScriptCommon",previous:{title:"Sort",permalink:"/isaacscript-common/functions/sort"},next:{title:"Spawn Collectible",permalink:"/isaacscript-common/functions/spawnCollectible"}},o={},d=[{value:"Functions",id:"functions",level:2},{value:"getMusicForStage",id:"getmusicforstage",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"stopAllSoundEffects",id:"stopallsoundeffects",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sound",children:"Sound"}),"\n",(0,s.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(n.h3,{id:"getmusicforstage",children:"getMusicForStage"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"getMusicForStage"}),"(",(0,s.jsx)(n.code,{children:"stage?"}),", ",(0,s.jsx)(n.code,{children:"stageType?"}),"): ",(0,s.jsx)(n.code,{children:"Music"})]}),"\n",(0,s.jsx)(n.p,{children:"Helper function to get the corresponding music value for a stage and stage type combination."}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"stage?"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"LevelStage"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Optional. The stage to get the music for. If not specified, the current stage will be used."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"stageType?"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"StageType"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Optional. The stage type to get the music for. If not specified, the current stage type will be used."})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Music"})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/sound.ts#L21",children:"packages/isaacscript-common/src/functions/sound.ts:21"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"stopallsoundeffects",children:"stopAllSoundEffects"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"stopAllSoundEffects"}),"(",(0,s.jsx)(n.code,{children:"soundEffectCustom?"}),"): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n",(0,s.jsxs)(n.p,{children:["Helper function to manually stop every vanilla sound effect. If you also want to stop custom\nsound effects in addition to vanilla ones, then pass the ",(0,s.jsx)(n.code,{children:"SoundEffectCustom"})," enum for your mod."]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"soundEffectCustom?"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/isaacscript-common/functions/enums#transpiledenum",children:(0,s.jsx)(n.code,{children:"TranspiledEnum"})})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Optional. The enum that represents all of the custom sound effects for your mod."})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/sound.ts#L46",children:"packages/isaacscript-common/src/functions/sound.ts:46"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},71184:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var s=t(14041);const i={},c=s.createContext(i);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);