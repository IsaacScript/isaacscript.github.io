"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16633],{98467:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var i=t(31085),s=t(71184);const l={custom_edit_url:null},r="Math",c={id:"isaacscript-common/functions/math",title:"Math",description:"Functions",source:"@site/docs/isaacscript-common/functions/math.md",sourceDirName:"isaacscript-common/functions",slug:"/isaacscript-common/functions/math",permalink:"/isaacscript-common/functions/math",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"isaacScriptCommon",previous:{title:"Map",permalink:"/isaacscript-common/functions/map"},next:{title:"Merge",permalink:"/isaacscript-common/functions/merge"}},d={},h=[{value:"Functions",id:"functions",level:2},{value:"clamp",id:"clamp",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"getAngleDifference",id:"getangledifference",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getCircleDiscretizedPoints",id:"getcirclediscretizedpoints",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"inRectangle",id:"inrectangle",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"isCircleIntersectingRectangle",id:"iscircleintersectingrectangle",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"isEven",id:"iseven",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"isOdd",id:"isodd",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"lerp",id:"lerp",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"lerpAngleDegrees",id:"lerpangledegrees",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"round",id:"round",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"sign",id:"sign",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"splitNumber",id:"splitnumber",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"tanh",id:"tanh",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Defined in",id:"defined-in-12",level:4}];function x(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"math",children:"Math"}),"\n",(0,i.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(n.h3,{id:"clamp",children:"clamp"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"clamp"}),"(",(0,i.jsx)(n.code,{children:"num"}),", ",(0,i.jsx)(n.code,{children:"min"}),", ",(0,i.jsx)(n.code,{children:"max"}),"): ",(0,i.jsx)(n.code,{children:"number"})]}),"\n",(0,i.jsx)(n.p,{children:"Helper function to normalize a number, ensuring that it is within a certain range."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"num"})," is less than ",(0,i.jsx)(n.code,{children:"min"}),", then it will be clamped to ",(0,i.jsx)(n.code,{children:"min"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"num"})," is greater than ",(0,i.jsx)(n.code,{children:"max"}),", then it will be clamped to ",(0,i.jsx)(n.code,{children:"max"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"num"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"number"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"min"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"number"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"max"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"number"})})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"number"})}),"\n",(0,i.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/math.ts#L10",children:"packages/isaacscript-common/src/functions/math.ts:10"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"getangledifference",children:"getAngleDifference"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"getAngleDifference"}),"(",(0,i.jsx)(n.code,{children:"angle1"}),", ",(0,i.jsx)(n.code,{children:"angle2"}),"): ",(0,i.jsx)(n.code,{children:"float"})]}),"\n",(0,i.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"angle1"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"float"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"angle2"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"float"})})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"float"})}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/math.ts#L14",children:"packages/isaacscript-common/src/functions/math.ts:14"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"getcirclediscretizedpoints",children:"getCircleDiscretizedPoints"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"getCircleDiscretizedPoints"}),"(",(0,i.jsx)(n.code,{children:"centerPos"}),", ",(0,i.jsx)(n.code,{children:"radius"}),", ",(0,i.jsx)(n.code,{children:"numPoints"}),", ",(0,i.jsx)(n.code,{children:"xMultiplier?"}),", ",(0,i.jsx)(n.code,{children:"yMultiplier?"}),", ",(0,i.jsx)(n.code,{children:"initialDirection?"}),"): ",(0,i.jsx)(n.code,{children:"ReadonlyArray"}),"<",(0,i.jsx)(n.code,{children:"Readonly"}),"<",(0,i.jsx)(n.code,{children:"Vector"}),">>"]}),"\n",(0,i.jsx)(n.p,{children:"Helper function to get an array of equidistant points on the circumference around a circle.\nUseful for equally distributing things in a circle pattern."}),"\n",(0,i.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Default value"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"centerPos"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"Vector"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"A position that represents the center of the center to get the points from."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"radius"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"float"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The length of the radius of the circle."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"numPoints"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"int"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The number of points on the circumference of the circle to get."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"xMultiplier"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"1"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"An optional multiplier to get the points around an oval. Default is 1."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"yMultiplier"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"1"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"An optional multiplier to get the points around an oval. Default is 1."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"initialDirection"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"Direction"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"Direction.UP"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"By default, the first point on the circle will be on the top center, but this can be optionally changed by specifying this argument."})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ReadonlyArray"}),"<",(0,i.jsx)(n.code,{children:"Readonly"}),"<",(0,i.jsx)(n.code,{children:"Vector"}),">>"]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/math.ts#L31",children:"packages/isaacscript-common/src/functions/math.ts:31"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"inrectangle",children:"inRectangle"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"inRectangle"}),"(",(0,i.jsx)(n.code,{children:"position"}),", ",(0,i.jsx)(n.code,{children:"topLeft"}),", ",(0,i.jsx)(n.code,{children:"bottomRight"}),"): ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsx)(n.p,{children:"Helper function to check if a given position is within a given rectangle."}),"\n",(0,i.jsx)(n.p,{children:"This is an inclusive check, meaning that it will return true if the position is on the border of\nthe rectangle."}),"\n",(0,i.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"position"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"Vector"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"topLeft"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"Vector"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"bottomRight"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"Vector"})})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"boolean"})}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/math.ts#L59",children:"packages/isaacscript-common/src/functions/math.ts:59"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"iscircleintersectingrectangle",children:"isCircleIntersectingRectangle"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"isCircleIntersectingRectangle"}),"(",(0,i.jsx)(n.code,{children:"circleCenter"}),", ",(0,i.jsx)(n.code,{children:"circleRadius"}),", ",(0,i.jsx)(n.code,{children:"rectangleTopLeft"}),", ",(0,i.jsx)(n.code,{children:"rectangleBottomRight"}),"): ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.p,{children:["From: ",(0,i.jsx)(n.a,{href:"https://www.geeksforgeeks.org/check-if-any-point-overlaps-the-given-circle-and-rectangle/",children:"https://www.geeksforgeeks.org/check-if-any-point-overlaps-the-given-circle-and-rectangle/"})]}),"\n",(0,i.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"circleCenter"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"Vector"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"circleRadius"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"float"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"rectangleTopLeft"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"Vector"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"rectangleBottomRight"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"Vector"})})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"boolean"})}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/math.ts#L75",children:"packages/isaacscript-common/src/functions/math.ts:75"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"iseven",children:"isEven"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"isEven"}),"(",(0,i.jsx)(n.code,{children:"num"}),"): ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"num"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"int"})})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"boolean"})}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/math.ts#L98",children:"packages/isaacscript-common/src/functions/math.ts:98"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"isodd",children:"isOdd"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"isOdd"}),"(",(0,i.jsx)(n.code,{children:"num"}),"): ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsx)(n.h4,{id:"parameters-6",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"num"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"int"})})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-6",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"boolean"})}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/math.ts#L103",children:"packages/isaacscript-common/src/functions/math.ts:103"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"lerp",children:"lerp"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"lerp"}),"(",(0,i.jsx)(n.code,{children:"a"}),", ",(0,i.jsx)(n.code,{children:"b"}),", ",(0,i.jsx)(n.code,{children:"pos"}),"): ",(0,i.jsx)(n.code,{children:"number"})]}),"\n",(0,i.jsx)(n.h4,{id:"parameters-7",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"a"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"number"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"b"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"number"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"pos"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"float"})})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-7",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"number"})}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/math.ts#L108",children:"packages/isaacscript-common/src/functions/math.ts:108"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"lerpangledegrees",children:"lerpAngleDegrees"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"lerpAngleDegrees"}),"(",(0,i.jsx)(n.code,{children:"aStart"}),", ",(0,i.jsx)(n.code,{children:"aEnd"}),", ",(0,i.jsx)(n.code,{children:"percent"}),"): ",(0,i.jsx)(n.code,{children:"number"})]}),"\n",(0,i.jsx)(n.h4,{id:"parameters-8",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"aStart"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"number"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"aEnd"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"number"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"percent"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"float"})})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-8",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"number"})}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/math.ts#L112",children:"packages/isaacscript-common/src/functions/math.ts:112"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"round",children:"round"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"round"}),"(",(0,i.jsx)(n.code,{children:"num"}),", ",(0,i.jsx)(n.code,{children:"numDecimalPlaces?"}),"): ",(0,i.jsx)(n.code,{children:"float"})]}),"\n",(0,i.jsx)(n.p,{children:"If rounding fails, this function returns 0."}),"\n",(0,i.jsxs)(n.p,{children:["From: ",(0,i.jsx)(n.a,{href:"http://lua-users.org/wiki/SimpleRound",children:"http://lua-users.org/wiki/SimpleRound"})]}),"\n",(0,i.jsx)(n.h4,{id:"parameters-9",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Default value"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"num"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"float"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The number to round."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"numDecimalPlaces"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"0"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Optional. Default is 0."})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-9",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"float"})}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/math.ts#L128",children:"packages/isaacscript-common/src/functions/math.ts:128"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"sign",children:"sign"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"sign"}),"(",(0,i.jsx)(n.code,{children:"n"}),"): ",(0,i.jsx)(n.code,{children:"int"})]}),"\n",(0,i.jsx)(n.h4,{id:"parameters-10",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"n"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"number"})})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-10",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"int"})}),"\n",(0,i.jsx)(n.p,{children:"1 if n is positive, -1 if n is negative, or 0 if n is 0."}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/math.ts#L135",children:"packages/isaacscript-common/src/functions/math.ts:135"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"splitnumber",children:"splitNumber"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"splitNumber"}),"(",(0,i.jsx)(n.code,{children:"num"}),", ",(0,i.jsx)(n.code,{children:"size"}),", ",(0,i.jsx)(n.code,{children:"startAtZero?"}),"): ",(0,i.jsx)(n.code,{children:"ReadonlyArray"}),"<readonly [min: int, max: int]>"]}),"\n",(0,i.jsxs)(n.p,{children:["Breaks a number into chunks of a given size. This is similar to the ",(0,i.jsx)(n.code,{children:"String.split"})," method, but\nfor a number instead of a string."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, ",(0,i.jsx)(n.code,{children:"splitNumber(90, 25)"})," would return an array with four elements:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[1, 25]"}),"\n",(0,i.jsx)(n.li,{children:"[26, 50]"}),"\n",(0,i.jsx)(n.li,{children:"[51, 75]"}),"\n",(0,i.jsx)(n.li,{children:"[76, 90]"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"parameters-11",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Default value"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"num"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"int"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The number to split into chunks. This must be a positive integer."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"size"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"int"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The size of each chunk. This must be a positive integer."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"startAtZero"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Whether to start at 0. Defaults to false. If true, the chunks will start at 0 instead of 1."})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-11",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ReadonlyArray"}),"<readonly [min: int, max: int]>"]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-11",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/math.ts#L163",children:"packages/isaacscript-common/src/functions/math.ts:163"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"tanh",children:"tanh"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"tanh"}),"(",(0,i.jsx)(n.code,{children:"x"}),"): ",(0,i.jsx)(n.code,{children:"number"})]}),"\n",(0,i.jsx)(n.h4,{id:"parameters-12",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"x"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"number"})})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-12",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"number"})}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-12",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/IsaacScript/isaacscript/blob/54ef116/packages/isaacscript-common/src/functions/math.ts#L192",children:"packages/isaacscript-common/src/functions/math.ts:192"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},71184:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(14041);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);