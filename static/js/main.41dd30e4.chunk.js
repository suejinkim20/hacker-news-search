(this["webpackJsonphacker-news-search"]=this["webpackJsonphacker-news-search"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(31),a=n.n(s),i=(n(87),n(71)),l=n(15),j=n(13),o=n(67),h=n.n(o),x=n(145),d=n(151),b=n(152),p=n(147),u=n(148),O=n(146),f=n(149),y=n(141),g=n(2),S=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),a=Object(j.a)(s,2),i=a[0],l=a[1],o=h()("http://hn.algolia.com/api/v1/search_by_date?query="+n+"&tags=story"),S=o.isLoading,m=o.data,v=(o.error,[]),w=JSON.parse(localStorage.getItem("stories"))||[];if(S)return"loading...";return n&&(v=m.hits||[]),Object(g.jsxs)("div",{children:[Object(g.jsx)(x.a,{sx:{display:"flex",justifyContent:"center"},children:Object(g.jsxs)(O.a,{component:"span",sx:{display:"block",m:"10px",p:"25px",justifyContent:"center",textAlign:"center",width:"500px"},children:[Object(g.jsx)("h1",{children:" Hacker News Search App"}),Object(g.jsxs)(f.a,{sx:{flexWrap:"wrap",m:"5px",p:"15px"},children:[Object(g.jsx)(y.a,{type:"text",placeholder:"type here to search...",onChange:function(e){!function(e){e.preventDefault();var t=e.target.value;t.toLowerCase(),l(t)}(e)}}),Object(g.jsx)(p.a,{type:"button",onClick:function(e){e.preventDefault(),r(i),-1==w.indexOf(i)&&(w.push(i),localStorage.setItem("stories",JSON.stringify(w))),l(null)},children:"Search"}),Object(g.jsx)(p.a,{type:"button",href:"/history",children:"View Search History"})]})]})}),Object(g.jsx)(x.a,{sx:{display:"block"},children:v.map((function(e){return Object(g.jsx)(O.a,{component:"span",sx:{display:"block",mx:"2px"},children:Object(g.jsx)(d.a,{children:Object(g.jsxs)(b.a,{children:[Object(g.jsx)(u.a,{variant:"h5",children:e.title}),Object(g.jsx)(u.a,{variant:"body2",children:e.story_text}),Object(g.jsx)(p.a,{href:e.url,children:"Click to View Story"})]})})},e.objectID)}))})]})},m=n(153),v=n(150),w=n(143),C=function(){var e=JSON.parse(localStorage.getItem("stories"));return Object(g.jsx)("div",{children:Object(g.jsx)(m.a,{sx:{display:"flex",justifyContent:"center",textAlign:"center"},children:Object(g.jsxs)(O.a,{sx:{width:"500px",p:"20px",m:"10px"},children:[Object(g.jsx)(x.a,{sx:{display:"flex",justifyContent:"center"},children:Object(g.jsx)("h1",{children:"Search History"})}),Object(g.jsx)(x.a,{children:Object(g.jsx)(v.a,{children:e.map((function(e,t){return Object(g.jsxs)(w.a,{children:[" ",e," "]},t)}))})}),Object(g.jsx)(p.a,{onClick:function(){localStorage.setItem("stories",JSON.stringify([])),window.location.reload()},variant:"outlined",sx:{mx:"7px"},children:"Clear History"}),Object(g.jsx)(p.a,{href:"/search",variant:"outlined",sx:{mx:"7px"},children:"Return to Search"})]})})})};var k=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(i.a,{children:Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{path:"/search",children:Object(g.jsx)(S,{})}),Object(g.jsx)(l.a,{path:"/history",children:Object(g.jsx)(C,{})})]})})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(k,{})}),document.getElementById("root")),I()},87:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.41dd30e4.chunk.js.map