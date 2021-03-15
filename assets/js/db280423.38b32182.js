"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22070],{14479:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var i=s(31085),t=s(71184);const c={custom_edit_url:null},r="UI",d={id:"isaacscript-common/functions/ui",title:"UI",description:"Functions",source:"@site/docs/isaacscript-common/functions/ui.md",sourceDirName:"isaacscript-common/functions",slug:"/isaacscript-common/functions/ui",permalink:"/isaacscript-common/functions/ui",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"isaacScriptCommon",previous:{title:"Types",permalink:"/isaacscript-common/functions/types"},next:{title:"Utils",permalink:"/isaacscript-common/functions/utils"}},l={},o=[{value:"Functions",id:"functions",level:2},{value:"getHUDOffsetVector",id:"gethudoffsetvector",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"getHeartRowLength",id:"getheartrowlength",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getHeartsUIWidth",id:"getheartsuiwidth",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getScreenBottomCenterPos",id:"getscreenbottomcenterpos",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getScreenBottomLeftPos",id:"getscreenbottomleftpos",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getScreenBottomRightPos",id:"getscreenbottomrightpos",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"getScreenBottomY",id:"getscreenbottomy",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"getScreenCenterPos",id:"getscreencenterpos",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"getScreenRightX",id:"getscreenrightx",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"getScreenTopCenterPos",id:"getscreentopcenterpos",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"getScreenTopLeftPos",id:"getscreentopleftpos",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"getScreenTopRightPos",id:"getscreentoprightpos",level:3},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"getVisibleHearts",id:"getvisiblehearts",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Defined in",id:"defined-in-12",level:4}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"ui",children:"UI"}),"\n",(0,i.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(n.h3,{id:"gethudoffsetvector",children:"getHUDOffsetVector"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"getHUDOffsetVector"}),"(): ",(0,i.jsx)(n.code,{children:"Readonly"}),"<",(0,i.jsx)(n.code,{children:"Vector"}),">"]}),"\n",(0,i.jsxs)(n.p,{children:["In the options menu, players have the ability to set a HUD offset (which gets written to the\n",(0,i.jsx)(n.code,{children:"HudOffset"}),' attribute in the "options.ini" file). This function uses the current HUD offset to\ngenerate a vector that should be added to the corresponding position that you want to draw a UI\nelement at.']}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If the user does not have a HUD offset configured, this function will return ",(0,i.jsx)(n.code,{children:"Vector(0, 0)"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["If the user has a HUD offset of 1.0 configured, this function will return ",(0,i.jsx)(n.code,{children:"Vector(20, 12)"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Readonly"}),"<",(0,i.jsx)(n.code,{children:"Vector"}),">"]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/ui.ts#L16",children:"packages/isaacscript-common/src/functions/ui.ts:16"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"getheartrowlength",children:"getHeartRowLength"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"getHeartRowLength"}),"(",(0,i.jsx)(n.code,{children:"player"}),"): ",(0,i.jsx)(n.code,{children:"int"})]}),"\n",(0,i.jsx)(n.p,{children:"Returns how many hearts are in the heart UI row. If the player has more than 6 hearts, this\nfunction will return 6."}),"\n",(0,i.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"player"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"EntityPlayer"})})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"int"})}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/ui.ts#L41",children:"packages/isaacscript-common/src/functions/ui.ts:41"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"getheartsuiwidth",children:"getHeartsUIWidth"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"getHeartsUIWidth"}),"(): ",(0,i.jsx)(n.code,{children:"int"})]}),"\n",(0,i.jsxs)(n.p,{children:["Helper function to get the width of the first player's hearts on the UI. This is useful for\ndrawing UI elements to the right of where the player's hearts are. Make sure to use this in\ncombination with the ",(0,i.jsx)(n.code,{children:"getHUDOffsetVector"})," helper function."]}),"\n",(0,i.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"int"})}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/ui.ts#L61",children:"packages/isaacscript-common/src/functions/ui.ts:61"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"getscreenbottomcenterpos",children:"getScreenBottomCenterPos"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"getScreenBottomCenterPos"}),"(): ",(0,i.jsx)(n.code,{children:"Readonly"}),"<",(0,i.jsx)(n.code,{children:"Vector"}),">"]}),"\n",(0,i.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Readonly"}),"<",(0,i.jsx)(n.code,{children:"Vector"}),">"]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/ui.ts#L95",children:"packages/isaacscript-common/src/functions/ui.ts:95"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"getscreenbottomleftpos",children:"getScreenBottomLeftPos"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"getScreenBottomLeftPos"}),"(): ",(0,i.jsx)(n.code,{children:"Readonly"}),"<",(0,i.jsx)(n.code,{children:"Vector"}),">"]}),"\n",(0,i.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Readonly"}),"<",(0,i.jsx)(n.code,{children:"Vector"}),">"]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/ui.ts#L100",children:"packages/isaacscript-common/src/functions/ui.ts:100"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"getscreenbottomrightpos",children:"getScreenBottomRightPos"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"getScreenBottomRightPos"}),"(): ",(0,i.jsx)(n.code,{children:"Readonly"}),"<",(0,i.jsx)(n.code,{children:"Vector"}),">"]}),"\n",(0,i.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Readonly"}),"<",(0,i.jsx)(n.code,{children:"Vector"}),">"]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/ui.ts#L105",children:"packages/isaacscript-common/src/functions/ui.ts:105"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"getscreenbottomy",children:"getScreenBottomY"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"getScreenBottomY"}),"(): ",(0,i.jsx)(n.code,{children:"float"})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-6",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"float"})}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/ui.ts#L112",children:"packages/isaacscript-common/src/functions/ui.ts:112"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"getscreencenterpos",children:"getScreenCenterPos"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"getScreenCenterPos"}),"(): ",(0,i.jsx)(n.code,{children:"Readonly"}),"<",(0,i.jsx)(n.code,{children:"Vector"}),">"]}),"\n",(0,i.jsx)(n.h4,{id:"returns-7",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Readonly"}),"<",(0,i.jsx)(n.code,{children:"Vector"}),">"]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/ui.ts#L117",children:"packages/isaacscript-common/src/functions/ui.ts:117"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"getscreenrightx",children:"getScreenRightX"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"getScreenRightX"}),"(): ",(0,i.jsx)(n.code,{children:"float"})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-8",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"float"})}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/ui.ts#L122",children:"packages/isaacscript-common/src/functions/ui.ts:122"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"getscreentopcenterpos",children:"getScreenTopCenterPos"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"getScreenTopCenterPos"}),"(): ",(0,i.jsx)(n.code,{children:"Readonly"}),"<",(0,i.jsx)(n.code,{children:"Vector"}),">"]}),"\n",(0,i.jsx)(n.h4,{id:"returns-9",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Readonly"}),"<",(0,i.jsx)(n.code,{children:"Vector"}),">"]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/ui.ts#L127",children:"packages/isaacscript-common/src/functions/ui.ts:127"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"getscreentopleftpos",children:"getScreenTopLeftPos"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"getScreenTopLeftPos"}),"(): ",(0,i.jsx)(n.code,{children:"Readonly"}),"<",(0,i.jsx)(n.code,{children:"Vector"}),">"]}),"\n",(0,i.jsx)(n.h4,{id:"returns-10",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Readonly"}),"<",(0,i.jsx)(n.code,{children:"Vector"}),">"]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/ui.ts#L132",children:"packages/isaacscript-common/src/functions/ui.ts:132"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"getscreentoprightpos",children:"getScreenTopRightPos"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"getScreenTopRightPos"}),"(): ",(0,i.jsx)(n.code,{children:"Readonly"}),"<",(0,i.jsx)(n.code,{children:"Vector"}),">"]}),"\n",(0,i.jsx)(n.h4,{id:"returns-11",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Readonly"}),"<",(0,i.jsx)(n.code,{children:"Vector"}),">"]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-11",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/ui.ts#L136",children:"packages/isaacscript-common/src/functions/ui.ts:136"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"getvisiblehearts",children:"getVisibleHearts"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"getVisibleHearts"}),"(",(0,i.jsx)(n.code,{children:"player"}),"): ",(0,i.jsx)(n.code,{children:"int"})]}),"\n",(0,i.jsx)(n.p,{children:"Get how many hearts are currently being shown on the hearts UI."}),"\n",(0,i.jsx)(n.p,{children:"This function is originally from piber20 Helper."}),"\n",(0,i.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"player"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"EntityPlayer"})})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-12",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"int"})}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-12",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/ui.ts#L146",children:"packages/isaacscript-common/src/functions/ui.ts:146"})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},71184:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var i=s(14041);const t={},c=i.createContext(t);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);