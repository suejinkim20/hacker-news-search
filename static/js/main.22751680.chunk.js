(this["webpackJsonphacker-news-search"]=this["webpackJsonphacker-news-search"]||[]).push([[0],{102:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(31),a=c.n(s),i=(c(87),c(71)),j=c(15),l=c(13),o=c(67),x=c.n(o),h=c(145),d=c(151),b=c(152),p=c(147),O=c(148),u=c(146),f=c(149),y=c(141),g=c(2),S=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(null),a=Object(l.a)(s,2),i=a[0],j=a[1],o=x()("http://hn.algolia.com/api/v1/search_by_date?query="+c+"&tags=story"),S=o.isLoading,m=o.data,v=(o.error,[]),w=JSON.parse(localStorage.getItem("stories"))||[];if(S)return"loading...";return c&&(v=m.hits||[]),Object(g.jsxs)("div",{children:[Object(g.jsx)(h.a,{sx:{display:"flex",justifyContent:"center"},children:Object(g.jsxs)(u.a,{component:"span",sx:{display:"block",m:"10px",p:"25px",justifyContent:"center",textAlign:"center",width:"500px"},children:[Object(g.jsx)("h1",{children:" Hacker News Search App"}),Object(g.jsxs)(f.a,{sx:{flexWrap:"wrap",m:"5px",p:"15px"},children:[Object(g.jsx)(y.a,{type:"text",placeholder:"type here to search...",onChange:function(e){!function(e){e.preventDefault();var t=e.target.value;t.toLowerCase(),j(t)}(e)}}),Object(g.jsx)(p.a,{type:"button",onClick:function(e){e.preventDefault(),r(i),-1==w.indexOf(i)&&(w.push(i),localStorage.setItem("stories",JSON.stringify(w))),j(null)},children:"Search"}),Object(g.jsx)(p.a,{type:"button",href:"/history",children:"View Search History"})]})]})}),Object(g.jsx)(h.a,{sx:{display:"block"},children:v.map((function(e){return Object(g.jsx)(u.a,{component:"span",sx:{display:"block",mx:"2px"},children:Object(g.jsx)(d.a,{children:Object(g.jsxs)(b.a,{children:[Object(g.jsx)(O.a,{variant:"h5",children:e.title}),Object(g.jsx)(O.a,{variant:"body2",children:e.story_text}),Object(g.jsx)(p.a,{href:e.url,children:"Click to View Story"})]})})},e.objectID)}))})]})},m=c(153),v=c(150),w=c(143),C=function(){var e=JSON.parse(localStorage.getItem("stories"));return Object(g.jsx)("div",{children:Object(g.jsx)(m.a,{sx:{display:"flex",justifyContent:"center",textAlign:"center"},children:Object(g.jsxs)(u.a,{sx:{width:"500px",p:"20px",m:"10px"},children:[Object(g.jsx)(h.a,{sx:{display:"flex",justifyContent:"center"},children:Object(g.jsx)("h1",{children:"Search History"})}),Object(g.jsx)(h.a,{children:Object(g.jsx)(v.a,{children:e.map((function(e,t){return Object(g.jsxs)(w.a,{children:[" ",e," "]},t)}))})}),Object(g.jsx)(p.a,{onClick:function(){localStorage.setItem("stories",JSON.stringify([])),window.location.reload()},variant:"outlined",sx:{mx:"7px"},children:"Clear History"}),Object(g.jsx)(p.a,{href:"/search",variant:"outlined",sx:{mx:"7px"},children:"Return to Search"})]})})})};var k=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(i.a,{children:Object(g.jsxs)(j.c,{children:[Object(g.jsx)(j.a,{exact:!0,path:"/",children:Object(g.jsx)(S,{})}),Object(g.jsx)(j.a,{path:"/search",children:Object(g.jsx)(S,{})}),Object(g.jsx)(j.a,{path:"/history",children:Object(g.jsx)(C,{})})]})})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,154)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(k,{})}),document.getElementById("root")),I()},87:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.22751680.chunk.js.map