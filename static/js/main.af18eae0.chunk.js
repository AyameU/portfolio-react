(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),i=n(15),r=n.n(i),a=(n(22),n(23),n(7)),o=n(2),l=n(0),j=function(e){var t=e.project;return Object(l.jsxs)("div",{id:t.id,className:"project",children:[Object(l.jsxs)("div",{className:"project-content",children:[Object(l.jsx)("span",{className:"accent",children:t.category}),Object(l.jsx)("h4",{id:t.id,children:t.name}),Object(l.jsx)("p",{children:t.text})]}),Object(l.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("figure",{className:"project-tile ".concat(t.id),children:""!==t.image&&Object(l.jsx)("img",{src:"../images/"+t.image,alt:t.name})})})]})},d=function(e){var t=e.projects;return Object(l.jsx)("div",{className:"grid",children:t.map((function(e){return Object(l.jsx)(j,{project:e})}))})},h=[{id:"project1",name:"Hello, Trivia",category:"Website + Trivia Game // React, Bulma",text:"Do you want to play a game? A React-based trivia game based on questions from the Open Trivia DB API.",link:"https://ayameu.github.io/HelloTrivia/",image:"hellotrivia.png"},{id:"project2",name:"Historical Resources",category:"Website // Open Data, JS, HTML, Bulma",text:"Uses the City of Winnipeg's Historical Resources Open Data API to retrieve records based on a street address.",link:"https://historicalresources.ayamekea.com",image:"historicalresources.png"},{id:"project3",name:"RTX Unicorn",category:"Website // HTML, CSS, JS",text:"Parody website for an ultra rare GPU line-up. A tongue-in-cheek take on the state of the GPU market.",link:"https://unicorn.ayamekea.com",image:"rtxunicorn.png"},{id:"project4",name:"Personal Portfolio v1",category:"Website // HTML, CSS, JS",text:"This is the first version of my personal portfolio. Built with HTML, CSS and a wee bit of JavaScript.",link:"https://ayameu.github.io/Portfolio/",image:"portfoliov1.png"}],b=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{id:"projects",children:[Object(l.jsx)("header",{className:"section-header",children:Object(l.jsx)("h3",{children:"Projects"})}),Object(l.jsx)(d,{projects:h})]})})},m=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{id:"design",children:[Object(l.jsx)("header",{className:"section-header",children:Object(l.jsx)("h3",{children:"Design"})}),Object(l.jsx)("p",{children:"I was a graphic-slash-web-designer for 11 years. Some of the projects I worked on:"}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{role:"img","aria-label":"soup",children:"\ud83c\udf72"})," Designed two soup ",Object(l.jsx)("a",{href:"https://crafted.wag.ca/cookbook",target:"_blank",children:"cookbooks"}),", ",Object(l.jsx)("i",{children:"Down to Earth"}),", for the Winnipeg Art Gallery (",Object(l.jsx)("b",{children:"bonus"}),": I got to taste a lot of soup and the project has raised $30,000 for Winnipeg Harvest). You can still buy copies from my old company, ",Object(l.jsx)("a",{href:"https://www.ayokodesign.com/shop/",target:"_blank",children:"Ayoko Design"}),"."]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{role:"img","aria-label":"laptop",children:"\ud83d\udcbb"})," 30+ Websites for restaurants, tradeshows, production companies, accountants and a ton of other small to medium-sized businesses."]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{role:"img","aria-label":"magazine",children:"\ud83d\udcd3"})," 20+ magazines ranging from trade publications to wedding magazines."]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{role:"img","aria-label":"newspaper",children:"\ud83d\udcf0"})," Designed ",Object(l.jsx)("a",{href:"https://www.uniter.ca",target:"_blank",children:"The Uniter's"})," website (sadly changed since then) and weekly print newspaper from 2010-2014."]})]}),Object(l.jsx)("h4",{children:"Clients"}),Object(l.jsx)("p",{children:"I designed/coded the front-end of the websites for the following clients:"}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:["Wonderful Wedding Show | ",Object(l.jsx)("a",{href:"https://wonderfulweddingshow.com/",target:"_blank",title:"The Wonderful Wedding Show",children:"Website"})]}),Object(l.jsxs)("li",{children:["Perths | ",Object(l.jsx)("a",{href:"http://perths.ca/",target:"_blank",title:"Perth's Drycleaners",children:"Website"})]})]})]})})},g=n(10),x=n(14);function p(){document.querySelectorAll(".navbar__Items").forEach((function(e){return e.classList.toggle("navbar__ToggleShow")}))}var u=function(e){var t=e.projects;return Object(l.jsxs)("div",{id:"navbar",className:"navbar flex-center",children:[Object(l.jsx)("div",{className:"navbar__Link navbar__Link-toggle",onClick:p,children:Object(l.jsx)("i",{className:"fas fa-bars",children:"Menu"})}),Object(l.jsxs)("nav",{className:"navbar__Items social flex-center",children:[Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{className:"navbar__link",children:Object(l.jsx)(a.b,{to:"/",children:"Hello"})}),Object(l.jsx)("li",{className:"navbar__link",children:Object(l.jsx)(g.a,{to:"#projects",children:"Projects"})}),Object(l.jsx)("ul",{className:"sub-menu",children:t.map((function(e){return Object(l.jsx)("li",{className:"navbar__link",children:Object(l.jsx)(g.a,{to:"#".concat(e.id),children:e.name})})}))}),Object(l.jsx)("li",{className:"navbar__link",children:Object(l.jsx)(g.a,{to:"#design",children:"Design"})})]}),Object(l.jsxs)("ul",{className:"social-icons",children:[Object(l.jsx)("li",{className:"navbar__social",children:Object(l.jsx)("a",{href:"https://github.com/AyameU",target:"_blank",children:Object(l.jsx)(x.a,{})})}),Object(l.jsx)("li",{className:"navbar__social",children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/ayameulrich/",target:"_blank",children:Object(l.jsx)(x.b,{})})})]})]})]})},O=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("footer",{children:Object(l.jsx)("p",{className:"copyright",children:"Designed + Coded by Ayame Ulrich"})})})},f=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{projects:h}),Object(l.jsxs)("main",{children:[Object(l.jsxs)("section",{id:"welcome-section",children:[Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"Hello!"})}),Object(l.jsx)("figure",{className:"welcome"}),Object(l.jsx)("p",{children:"My name is Ayame Ulrich. I used to be a print/web designer and got to design a lot of pretty things for some very cool clients. These days, I prefer slinging code to designing branding. I've hung up my Pantone deck and am now a Business Information Technology student (finishing term 3) at RRC Polytech."}),Object(l.jsxs)("ul",{className:"list",children:[Object(l.jsx)("li",{children:"Information Technology Student"}),Object(l.jsx)("li",{children:"Former print/web designer"}),Object(l.jsx)("li",{children:"I like colourful things"}),Object(l.jsx)("li",{children:"Nerd"})]})]}),Object(l.jsx)(b,{}),Object(l.jsx)(m,{})]}),Object(l.jsx)(O,{})]})};var v=function(){return Object(l.jsx)(a.a,{basename:"/portfolio-react",children:Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(o.c,{children:Object(l.jsx)(o.a,{path:"/",component:f})})})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),w()}},[[33,1,2]]]);
//# sourceMappingURL=main.af18eae0.chunk.js.map