(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{106:function(e,t,c){},107:function(e,t,c){},109:function(e,t,c){},137:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(38),r=c.n(a),s=c(29),i=(c(106),c(107),c(1));var l=function(){return Object(i.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(i.jsxs)("div",{class:"container-fluid",children:[Object(i.jsx)("a",{class:"navbar-brand",href:"https://www.thesparksfoundationsingapore.org/",children:"Sparks Foundation"}),Object(i.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{class:"navbar-toggler-icon"})}),Object(i.jsx)("div",{class:"collapse navbar-collapse",id:"navbarText",children:Object(i.jsxs)("ul",{class:"navbar-nav me-auto me-2 mb-2 mb-lg-0",children:[Object(i.jsx)("li",{class:"nav-item me-3",children:Object(i.jsx)(s.b,{to:"/",children:"Home"})}),Object(i.jsx)("li",{class:"nav-item me-3",children:Object(i.jsx)(s.b,{to:"/customersList",children:"Customers"})}),Object(i.jsx)("li",{class:"nav-item",children:Object(i.jsx)(s.b,{to:"/transferHistory",children:"History"})})]})})]})})},j=(c(109),c(12)),o=c(68),b=c.n(o);var d=function(){return Object(i.jsx)("div",{className:b.a["home-page"],children:Object(i.jsxs)("div",{className:"text-center d-flex flex-column align-items-center justify-content-center",children:[Object(i.jsx)("h1",{className:"display-1 ".concat(b.a["welcome-text"]),children:"Welcome To Triangle Bank"}),Object(i.jsx)("h3",{className:"display-4",children:"Your interest is our Priority!!"}),Object(i.jsx)("p",{className:"lead blockquote-footer",children:"Presented By Suraj Mamdyal"})]})})},u=c(23),O=c.n(u),x=c(39),h=c(9),m=c(40),p=c.n(m);var f=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],a=t[1],r=Object(j.e)();return Object(n.useEffect)((function(){var e=function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:8000/listAllUsers");case 2:return e.next=4,e.sent.data;case 4:t=e.sent,console.log("All users =",t),a(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r.key]),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{children:"Customers"}),Object(i.jsxs)("table",{className:"table",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{className:"col",children:"Id"}),Object(i.jsx)("th",{className:"col",children:"Name"}),Object(i.jsx)("th",{className:"col",children:"Email"}),Object(i.jsx)("th",{className:"col",children:"Current Balance"})]})}),Object(i.jsx)("tbody",{children:c.map((function(e,t){return console.log(e),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{scope:"row",children:Object(i.jsx)(s.b,{to:"/transfer/".concat(e.accId),children:e.accId})}),Object(i.jsx)("td",{scope:"row",children:e.name}),Object(i.jsx)("td",{scope:"row",children:e.email}),Object(i.jsx)("td",{scope:"row",children:e.currentBalance})]},e.name)}))})]})]})},v=c(69),g=c(182),w=c(183),y=c(185);var N=function(){var e=Object(j.f)(),t=Object(n.useState)({}),c=Object(h.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)([]),l=Object(h.a)(s,2),o=l[0],b=l[1],d=Object(n.useState)(""),u=Object(h.a)(d,2),m=u[0],f=u[1],N=Object(n.useState)(0),k=Object(h.a)(N,2),T=k[0],S=k[1],I=Object(n.useState)(!1),A=Object(h.a)(I,2),B=A[0],H=A[1],C=Object(j.g)().id;console.log(C),Object(n.useEffect)((function(){var e=function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/user/".concat(C));case 2:return t=e.sent,e.next=5,t.data;case 5:t=e.sent,r(t.user);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e();var t=function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/listAllUsers");case 2:return t=e.sent,e.next=5,t.data;case 5:t=e.sent,b(t.map((function(e){return e.name})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t(),H(!1)}),[C]);var E=function(){var t=Object(x.a)(O.a.mark((function t(c){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return H(!0),c.preventDefault(),n={receiver:m,sender:a.name,amtTransfered:parseInt(T)},setTimeout((function(){e("/customersList")}),1e3),t.next=6,p.a.post("/transfer/".concat(C),n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"container d-flex mt-3",children:Object(i.jsxs)("form",{onSubmit:E,children:[Object(i.jsxs)("p",{children:["Id: ",a.accId]}),Object(i.jsxs)("p",{children:["Email: ",a.email]}),Object(i.jsxs)("p",{children:["Name: ",a.name]}),Object(i.jsxs)("p",{children:["Balance: ",a.currentBalance]}),Object(i.jsxs)("div",{className:"",children:[Object(i.jsx)(g.a,{disablePortal:!0,options:o,renderInput:function(e){return Object(i.jsx)(w.a,Object(v.a)(Object(v.a)({},e),{},{label:"Customer"}))},onChange:function(e){console.log(e.target.innerHTML),f(e.target.innerHTML)}}),Object(i.jsx)(w.a,{type:"number",id:"standard-basic",label:"Amount",variant:"standard",onChange:function(e){S(e.target.value)}})]}),Object(i.jsx)(y.a,{variant:"contained",type:"submit",className:"mt-3",children:"Make Transaction"})]})}),B&&Object(i.jsx)("div",{class:"alert alert-success container mt-3",role:"alert",children:"A simple success alert\u2014check it out!"})]})},k=c(88),T=c.n(k);var S=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],a=t[1],r=Object(j.e)();return Object(n.useEffect)((function(){var e=function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/listAllTransactions");case 2:return t=e.sent,e.next=5,t.data;case 5:t=e.sent,a(t.reverse());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r.key]),Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("table",{class:"table",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",children:"Sender"}),Object(i.jsx)("th",{scope:"col",children:"Receiver"}),Object(i.jsx)("th",{scope:"col",children:"Amount"}),Object(i.jsx)("th",{scope:"col",children:"Date"})]})}),Object(i.jsx)("tbody",{children:c.map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{scope:"row",children:e.sender}),Object(i.jsx)("td",{scope:"row",children:e.receiver}),Object(i.jsx)("td",{scope:"row",children:e.amtTransfered}),Object(i.jsx)("td",{scope:"row",children:T()(e.transferDate).fromNow()})]},e.sender)}))})]})})};var I=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{path:"/",element:Object(i.jsx)(d,{})}),Object(i.jsx)(j.a,{path:"/customersList",element:Object(i.jsx)(f,{})}),Object(i.jsx)(j.a,{path:"/transfer/:id",element:Object(i.jsx)(N,{})}),Object(i.jsx)(j.a,{path:"/transferHistory",element:Object(i.jsx)(S,{})})]})]})};r.a.render(Object(i.jsx)(s.a,{children:Object(i.jsx)(I,{})}),document.getElementById("root"))},68:function(e,t,c){e.exports={"welcome-text":"HomePage_welcome-text__3XNcW"}}},[[137,1,2]]]);
//# sourceMappingURL=main.a0e49c19.chunk.js.map