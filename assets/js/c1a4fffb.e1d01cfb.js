"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81008],{53961:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=t(31085),n=t(71184);const a={title:"Features",hide_table_of_contents:!0},o=void 0,r={id:"main/features",title:"Features",description:"IsaacScript is a framework that allows you to code The Binding of Isaac: Repentance mods using the TypeScript programming language instead of the Lua programming language. It automatically converts your TypeScript code into Lua, similar to how a C++ compiler automatically converts C++ code into X86.",source:"@site/docs/main/features.md",sourceDirName:"main",slug:"/main/features",permalink:"/main/features",draft:!1,unlisted:!1,editUrl:"https://github.com/IsaacScript/isaacscript/edit/main/packages/docs/docs/main/features.md",tags:[],version:"current",frontMatter:{title:"Features",hide_table_of_contents:!0},sidebar:"docs",next:{title:"Is IsaacScript Right for Me?",permalink:"/main/right-for-me"}},c={},l=[{value:'<img src="/img/lua.png" className="features-language-icon" /> The Downsides of Lua',id:"-the-downsides-of-lua",level:2},{value:'<img src="/img/items/error.png" className="features-icon" /> No Type Safety',id:"-no-type-safety",level:3},{value:'<img src="/img/items/sad-onion.png" className="features-icon" /> Limited Language Constructs',id:"-limited-language-constructs",level:3},{value:'<img src="/img/items/finger.png" className="features-icon" /> No Automatic Importing',id:"-no-automatic-importing",level:3},{value:'<img src="/img/items/wooden-spoon.png" className="features-icon" /> Bad In-Editor Tooling',id:"-bad-in-editor-tooling",level:3},{value:'<img src="/img/typescript.png" className="features-language-icon" /> The Upsides of TypeScript',id:"-the-upsides-of-typescript",level:2},{value:'<img src="/img/items/magic-mushroom.png" className="features-icon" /> The Entire Isaac API, Strongly Typed',id:"-the-entire-isaac-api-strongly-typed",level:3},{value:'<img src="/img/items/marked.png" className="features-icon" /> Mouseover Documentation',id:"-mouseover-documentation",level:3},{value:'<img src="/img/items/clockwork-assembly.png" className="features-icon" /> Automatic Mod Reloading',id:"-automatic-mod-reloading",level:3},{value:'<img src="/img/items/pencil.png" className="features-icon" /> Automatic Formatting',id:"-automatic-formatting",level:3},{value:'<img src="/img/items/spider-mod.png" className="features-icon" /> Automatic Linting',id:"-automatic-linting",level:3},{value:'<img src="/img/items/humbling-bundle.png" className="features-icon" /> Extra Enums',id:"-extra-enums",level:3},{value:'<img src="/img/items/book-of-virtues.png" className="features-icon" /> Expanded Standard Library',id:"-expanded-standard-library",level:3},{value:'<img src="/img/items/poke-go.png" className="features-icon" /> Extra Callbacks',id:"-extra-callbacks",level:3}];function m(e){const i={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["IsaacScript is a framework that allows you to code ",(0,s.jsx)(i.a,{href:"https://store.steampowered.com/app/1426300/The_Binding_of_Isaac_Repentance/",children:(0,s.jsx)(i.em,{children:"The Binding of Isaac: Repentance"})})," mods using the ",(0,s.jsx)(i.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})," programming language instead of the ",(0,s.jsx)(i.a,{href:"https://www.lua.org/",children:"Lua"})," programming language. It automatically converts your TypeScript code into Lua, similar to how a C++ compiler automatically converts C++ code into X86."]}),"\n",(0,s.jsx)(i.br,{}),"\n",(0,s.jsxs)(i.h2,{id:"-the-downsides-of-lua",children:[(0,s.jsx)(i.img,{src:"/img/lua.png",className:"features-language-icon"})," The Downsides of Lua"]}),"\n",(0,s.jsx)(i.p,{children:"The vast majority of Isaac mods are programmed in Lua. So why would you want to use TypeScript over Lua? Why would you want to introduce a compiler into your workflow and make things more complicated for yourself?"}),"\n",(0,s.jsx)(i.p,{children:"Programming mods in Lua can be really painful:"}),"\n",(0,s.jsxs)(i.h3,{id:"-no-type-safety",children:[(0,s.jsx)(i.img,{src:"/img/items/error.png",className:"features-icon"})," No Type Safety"]}),"\n",(0,s.jsx)(i.p,{children:'With Lua, it is easy to shoot yourself in the foot after making even the smallest typo. When building an Isaac mod, you end up wasting an enormous amount of time running around in-game debugging run-time errors, and pouring through the "log.txt" file. Not my idea of fun, and probably not yours either.'}),"\n",(0,s.jsxs)(i.h3,{id:"-limited-language-constructs",children:[(0,s.jsx)(i.img,{src:"/img/items/sad-onion.png",className:"features-icon"})," Limited Language Constructs"]}),"\n",(0,s.jsxs)(i.p,{children:["In Lua, you type ",(0,s.jsx)(i.code,{children:"x = x + 1"}),". In TypeScript, you type ",(0,s.jsx)(i.code,{children:"x++"}),". Lua doesn't have increment/decrement operators, assignment operators, switch statements, optional function arguments, array/object destructuring, or map/filter/reduce. And that's just to start with."]}),"\n",(0,s.jsxs)(i.h3,{id:"-no-automatic-importing",children:[(0,s.jsx)(i.img,{src:"/img/items/finger.png",className:"features-icon"})," No Automatic Importing"]}),"\n",(0,s.jsx)(i.p,{children:'In Lua, you can\'t just start typing a function and have it magically be imported from where it lives. So you are stuck between using monolithic files (messy), or manually typing "require" over and over (tedious).'}),"\n",(0,s.jsxs)(i.h3,{id:"-bad-in-editor-tooling",children:[(0,s.jsx)(i.img,{src:"/img/items/wooden-spoon.png",className:"features-icon"})," Bad In-Editor Tooling"]}),"\n",(0,s.jsxs)(i.p,{children:["Lua has gotten some nifty improvements in the past few years, like ",(0,s.jsx)(i.a,{href:"https://github.com/sumneko/lua-language-server",children:"Sumneko's Lua language server"}),". Using the language server brings us some of the in-editor goodies that we are used to from other languages, like variable renaming. But the experience still pales in comparison to other modern programming languages like TypeScript and Rust."]}),"\n",(0,s.jsx)(i.br,{}),"\n",(0,s.jsxs)(i.h2,{id:"-the-upsides-of-typescript",children:[(0,s.jsx)(i.img,{src:"/img/typescript.png",className:"features-language-icon"})," The Upsides of TypeScript"]}),"\n",(0,s.jsxs)(i.p,{children:["After five years of programming Isaac mods in Lua, I got frustrated enough to take a ",(0,s.jsx)(i.a,{href:"https://www.lesswrong.com/posts/guDcrPqLsnhEjrPZj/levels-of-action",children:"level 2 action"})," - to build the ultimate Isaac developer experience, using TypeScript as a basis. The improvement is so significant that once you start, you will never go back. Here's a short list of features:"]}),"\n",(0,s.jsxs)(i.h3,{id:"-the-entire-isaac-api-strongly-typed",children:[(0,s.jsx)(i.img,{src:"/img/items/magic-mushroom.png",className:"features-icon"})," The Entire Isaac API, Strongly Typed"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Code fearlessly without having to worry about the format of the API call or whether using it incorrectly will crash the game."}),"\n",(0,s.jsx)(i.li,{children:"The compiler catches every possible type error, making refactoring your code easier than you ever imagined that it could be."}),"\n"]}),"\n",(0,s.jsxs)(i.h3,{id:"-mouseover-documentation",children:[(0,s.jsx)(i.img,{src:"/img/items/marked.png",className:"features-icon"})," Mouseover Documentation"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Don't waste time looking up API methods in the docs. Instead, hover over the classes and functions in your actual code editor to see what they do and what parameters they expect."}),"\n",(0,s.jsx)(i.li,{children:"Many methods have extensive documentation written inside of the mouseover tooltip."}),"\n"]}),"\n",(0,s.jsxs)(i.h3,{id:"-automatic-mod-reloading",children:[(0,s.jsx)(i.img,{src:"/img/items/clockwork-assembly.png",className:"features-icon"})," Automatic Mod Reloading"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Never close and reopen your game again when working on your mods. Never type the ",(0,s.jsx)(i.code,{children:"luamod"})," console command again."]}),"\n",(0,s.jsxs)(i.li,{children:["With the IsaacScript watcher, as soon as you press ",(0,s.jsx)(i.code,{children:"Ctrl + s"})," to save a file, you can instantly view the changes in-game without having to do anything else."]}),"\n",(0,s.jsxs)(i.li,{children:["If you use ",(0,s.jsx)(i.code,{children:"require"})," hacks to get around the limitations of ",(0,s.jsx)(i.code,{children:"include"})," + ",(0,s.jsx)(i.code,{children:"luamod"}),", don't bother - that isn't needed here."]}),"\n"]}),"\n",(0,s.jsxs)(i.h3,{id:"-automatic-formatting",children:[(0,s.jsx)(i.img,{src:"/img/items/pencil.png",className:"features-icon"})," Automatic Formatting"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Never waste time formatting a file again. Automatic file formatting with ",(0,s.jsx)(i.a,{href:"https://prettier.io/",children:"Prettier"})," comes running out-of-the-box."]}),"\n"]}),"\n",(0,s.jsxs)(i.h3,{id:"-automatic-linting",children:[(0,s.jsx)(i.img,{src:"/img/items/spider-mod.png",className:"features-icon"})," Automatic Linting"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Squash all the bugs and ensure code consistency with the world's best linter, ",(0,s.jsx)(i.a,{href:"https://eslint.org/",children:"ESLint"}),". It comes running out-of-the-box."]}),"\n"]}),"\n",(0,s.jsxs)(i.h3,{id:"-extra-enums",children:[(0,s.jsx)(i.img,{src:"/img/items/humbling-bundle.png",className:"features-icon"})," Extra Enums"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Seamlessly utilize ",(0,s.jsx)(i.a,{href:"/isaac-typescript-definitions",children:"community-contributed enums"}),' for things that the developers forgot to include in the "enums.lua" file.']}),"\n"]}),"\n",(0,s.jsxs)(i.h3,{id:"-expanded-standard-library",children:[(0,s.jsx)(i.img,{src:"/img/items/book-of-virtues.png",className:"features-icon"})," Expanded Standard Library"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Seamlessly utilize hundreds of helper functions and features from the ",(0,s.jsx)(i.a,{href:"/isaacscript-common",children:"expanded standard library"}),", allowing you to write high-level code that is concise and easy to read."]}),"\n"]}),"\n",(0,s.jsxs)(i.h3,{id:"-extra-callbacks",children:[(0,s.jsx)(i.img,{src:"/img/items/poke-go.png",className:"features-icon"})," Extra Callbacks"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Seamlessly utilize ",(0,s.jsx)(i.a,{href:"/isaacscript-common/other/enums/ModCallbackCustom",children:"many extra callbacks"})," as part of the expanded standard library."]}),"\n"]}),"\n",(0,s.jsx)(i.br,{}),"\n",(0,s.jsx)(i.p,{children:"There are plenty of reasons to use IsaacScript, but it isn't for everyone. Read on."})]})}function d(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},71184:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>r});var s=t(14041);const n={},a=s.createContext(n);function o(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);