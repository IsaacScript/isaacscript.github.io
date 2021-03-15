"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11331],{93660:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var d=t(31085),r=t(71184);const i={custom_edit_url:null},s="Weighted",l={id:"isaacscript-common/functions/weighted",title:"Weighted",description:"Functions",source:"@site/docs/isaacscript-common/functions/weighted.md",sourceDirName:"isaacscript-common/functions",slug:"/isaacscript-common/functions/weighted",permalink:"/isaacscript-common/functions/weighted",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"isaacScriptCommon",previous:{title:"Versus Screen",permalink:"/isaacscript-common/functions/versusScreen"},next:{title:"Extra Callbacks",permalink:"/isaacscript-common/extra-callbacks"}},c={},a=[{value:"Functions",id:"functions",level:2},{value:"getRandomFromWeightedArray",id:"getrandomfromweightedarray",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"getRandomIndexFromWeightedArray",id:"getrandomindexfromweightedarray",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"weighted",children:"Weighted"}),"\n",(0,d.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,d.jsx)(n.h3,{id:"getrandomfromweightedarray",children:"getRandomFromWeightedArray"}),"\n",(0,d.jsxs)(n.p,{children:["\u25b8 ",(0,d.jsx)(n.strong,{children:"getRandomFromWeightedArray"}),"<",(0,d.jsx)(n.code,{children:"T"}),">(",(0,d.jsx)(n.code,{children:"weightedArray"}),", ",(0,d.jsx)(n.code,{children:"seedOrRNG"}),"): ",(0,d.jsx)(n.code,{children:"T"})]}),"\n",(0,d.jsxs)(n.p,{children:["Get a random value from a ",(0,d.jsx)(n.code,{children:"WeightedArray"}),". (A ",(0,d.jsx)(n.code,{children:"WeightedArray"})," is an array of tuples, where the\nfirst element in the tuple is a value, and the second element in the tuple is a float\ncorresponding to the value's weight.)"]}),"\n",(0,d.jsxs)(n.p,{children:["If you want to get an unseeded element, you must explicitly pass ",(0,d.jsx)(n.code,{children:"undefined"})," to the ",(0,d.jsx)(n.code,{children:"seedOrRNG"}),"\nparameter."]}),"\n",(0,d.jsx)(n.h4,{id:"type-parameters",children:"Type parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{style:{textAlign:"left"},children:"Name"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{style:{textAlign:"left"},children:(0,d.jsx)(n.code,{children:"T"})})})})]}),"\n",(0,d.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,d.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,d.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{style:{textAlign:"left"},children:(0,d.jsx)(n.code,{children:"weightedArray"})}),(0,d.jsxs)(n.td,{style:{textAlign:"left"},children:["readonly [",(0,d.jsx)(n.code,{children:"T"}),", ",(0,d.jsx)(n.code,{children:"float"}),"][]"]}),(0,d.jsx)(n.td,{style:{textAlign:"left"},children:"The array to pick from."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{style:{textAlign:"left"},children:(0,d.jsx)(n.code,{children:"seedOrRNG"})}),(0,d.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,d.jsx)(n.code,{children:"undefined"})," | ",(0,d.jsx)(n.code,{children:"RNG"})," | ",(0,d.jsx)(n.code,{children:"Seed"})]}),(0,d.jsxs)(n.td,{style:{textAlign:"left"},children:["The ",(0,d.jsx)(n.code,{children:"Seed"})," or ",(0,d.jsx)(n.code,{children:"RNG"})," object to use. If an ",(0,d.jsx)(n.code,{children:"RNG"})," object is provided, the ",(0,d.jsx)(n.code,{children:"RNG.Next"})," method will be called. If ",(0,d.jsx)(n.code,{children:"undefined"})," is provided, it will default to a random seed."]})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"T"})}),"\n",(0,d.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/weighted.ts#L19",children:"packages/isaacscript-common/src/functions/weighted.ts:19"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"getrandomindexfromweightedarray",children:"getRandomIndexFromWeightedArray"}),"\n",(0,d.jsxs)(n.p,{children:["\u25b8 ",(0,d.jsx)(n.strong,{children:"getRandomIndexFromWeightedArray"}),"<",(0,d.jsx)(n.code,{children:"T"}),">(",(0,d.jsx)(n.code,{children:"weightedArray"}),", ",(0,d.jsx)(n.code,{children:"seedOrRNG"}),"): ",(0,d.jsx)(n.code,{children:"int"})]}),"\n",(0,d.jsxs)(n.p,{children:["Get a random index from a ",(0,d.jsx)(n.code,{children:"WeightedArray"}),". (A ",(0,d.jsx)(n.code,{children:"WeightedArray"})," is an array of tuples, where the\nfirst element in the tuple is a value, and the second element in the tuple is a float\ncorresponding to the value's weight.)"]}),"\n",(0,d.jsxs)(n.p,{children:["If you want to get an unseeded index, you must explicitly pass ",(0,d.jsx)(n.code,{children:"undefined"})," to the ",(0,d.jsx)(n.code,{children:"seedOrRNG"}),"\nparameter."]}),"\n",(0,d.jsx)(n.h4,{id:"type-parameters-1",children:"Type parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{style:{textAlign:"left"},children:"Name"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{style:{textAlign:"left"},children:(0,d.jsx)(n.code,{children:"T"})})})})]}),"\n",(0,d.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,d.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,d.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{style:{textAlign:"left"},children:(0,d.jsx)(n.code,{children:"weightedArray"})}),(0,d.jsxs)(n.td,{style:{textAlign:"left"},children:["readonly [",(0,d.jsx)(n.code,{children:"T"}),", ",(0,d.jsx)(n.code,{children:"float"}),"][]"]}),(0,d.jsx)(n.td,{style:{textAlign:"left"},children:"The array to pick from."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{style:{textAlign:"left"},children:(0,d.jsx)(n.code,{children:"seedOrRNG"})}),(0,d.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,d.jsx)(n.code,{children:"undefined"})," | ",(0,d.jsx)(n.code,{children:"RNG"})," | ",(0,d.jsx)(n.code,{children:"Seed"})]}),(0,d.jsxs)(n.td,{style:{textAlign:"left"},children:["The ",(0,d.jsx)(n.code,{children:"Seed"})," or ",(0,d.jsx)(n.code,{children:"RNG"})," object to use. If an ",(0,d.jsx)(n.code,{children:"RNG"})," object is provided, the ",(0,d.jsx)(n.code,{children:"RNG.Next"})," method will be called. If ",(0,d.jsx)(n.code,{children:"undefined"})," is provided, it will default to a random seed."]})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"int"})}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/weighted.ts#L47",children:"packages/isaacscript-common/src/functions/weighted.ts:47"})})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},71184:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var d=t(14041);const r={},i=d.createContext(r);function s(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);