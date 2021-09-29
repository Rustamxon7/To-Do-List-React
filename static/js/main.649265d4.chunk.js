(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{17:function(e,t,c){e.exports={item:"TodoItem_item__27ikB",checkbox:"TodoItem_checkbox__IlV_I",textInput:"TodoItem_textInput__1Oe9l","input-submit":"TodoItem_input-submit__2Fov2"}},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),i=c(22),a=c.n(i),s=c(8),r=c(21),l=c(11),d=c(9),u=c(3),j=c(43),b=c(2),h=function(){return Object(b.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(b.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},p=c(15),x=c(16),O=c(0),m=function(e){var t=Object(n.useState)({title:""}),c=Object(d.a)(t,2),o=c[0],i=c[1];return Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o.title.trim()?(e.addTodoProps(o.title),i({title:""})):alert("Please write item")},className:"form-container",children:[Object(b.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:o.title,name:"title",onChange:function(e){i(Object(l.a)(Object(l.a)({},o),{},Object(p.a)({},e.target.name,e.target.value)))}}),Object(b.jsx)(O.b.Provider,{value:{color:"darkcyan",style:{fontSize:"20px",color:"#ff0000"},className:"submit-iconn"},children:Object(b.jsx)("button",{className:"input-submit",children:Object(b.jsx)(x.a,{})})})]})},f=c(17),g=c.n(f),v=function(e){var t=Object(n.useState)(!1),c=Object(d.a)(t,2),o=c[0],i=c[1],a=e.todo,s=a.completed,r=a.id,l=a.title,u={},j={};return o?u.display="none":j.display="none",Object(n.useEffect)((function(){return function(){console.log("Cleaning up...")}}),[]),Object(b.jsxs)("li",{className:g.a.item,children:[Object(b.jsxs)("div",{onDoubleClick:function(){i(!0)},style:u,children:[Object(b.jsx)("input",{type:"checkbox",className:g.a.checkbox,checked:s,onChange:function(){return e.handleChangeProps(r)}}),Object(b.jsx)("span",{style:s?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:l}),Object(b.jsx)("button",{onClick:function(){return e.deleteTodoProps(r)},children:Object(b.jsx)(x.b,{style:{color:"orangered",fontSize:"16px"}})})]}),Object(b.jsx)("input",{type:"text",style:j,className:g.a.textInput,value:l,onChange:function(t){e.setUpdate(t.target.value,r)},onKeyDown:function(e){"Enter"===e.key&&i(!1)}})]})},y=function(e){return Object(b.jsx)("ul",{children:e.todos.map((function(t){return Object(b.jsx)(v,{todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps,setUpdate:e.setUpdate},t.id)}))})},_=function(){var e=Object(u.f)().slug,t=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic."}].find((function(t){return t.slug===e})),c=t.title,n=t.description;return Object(b.jsxs)("div",{className:"main__content",children:[Object(b.jsx)("h1",{children:c}),Object(b.jsx)("p",{children:n})]})},N=function(){var e=Object(u.g)(),t=e.url,c=e.path;return Object(b.jsxs)("div",{className:"about__content",children:[Object(b.jsxs)("ul",{className:"about__list",children:[Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"".concat(t,"/about-app"),children:"About App"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"".concat(t,"/about-author"),children:"About Author"})})]}),Object(b.jsx)(u.a,{path:"".concat(c,"/:slug"),children:Object(b.jsx)(_,{})})]})},k=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h3",{children:"No match for this page"})})},w=c(25),T=c(26),S=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],o=t[1];return Object(b.jsxs)("nav",{className:"navBar",children:[Object(b.jsx)("button",{onClick:function(){o(!c)},children:c?Object(b.jsx)(w.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(b.jsx)(T.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})})," ",Object(b.jsx)("ul",{className:"menuNav ".concat(c?" showMenu":""),children:[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:e.path,activeClassName:"active-link",onClick:function(){o(!1)},exact:!0,children:e.text})},e.id)}))})]})},C=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],o=t[1];Object(n.useEffect)((function(){var e=JSON.stringify(c);localStorage.setItem("todos",e)}),[c]);return Object(b.jsxs)("div",{children:[Object(b.jsx)(S,{}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{exact:!0,path:"/",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"inner",children:[Object(b.jsx)(h,{}),Object(b.jsx)(m,{addTodoProps:function(e){var t={id:Object(j.a)(),title:e,completed:!1};o([].concat(Object(r.a)(c),[t]))}}),Object(b.jsx)(y,{todos:c,handleChangeProps:function(e){o((function(t){return t.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}))}))},deleteTodoProps:function(e){o(Object(r.a)(c.filter((function(t){return t.id!==e}))))},setUpdate:function(e,t){o(c.map((function(c){return c.id===t&&(c.title=e),c})))}})]})})}),Object(b.jsx)(u.a,{path:"/about",children:Object(b.jsx)(N,{})}),Object(b.jsx)(u.a,{path:"*",children:Object(b.jsx)(k,{})})]})]})};c(40);a.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(s.a,{children:Object(b.jsx)(C,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.649265d4.chunk.js.map