(this.webpackJsonpoffline_todoapp=this.webpackJsonpoffline_todoapp||[]).push([[0],{70:function(e,t,a){},71:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(10),r=a.n(c),l=(a(70),a(35)),i=a(39),s=a(19),d=(a(71),a(114)),p=a(120),u=a(117),b=a(84),g=a(123),f=["title","titleId"];function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function m(e,t){var a=e.title,o=e.titleId,c=h(e,f);return n.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"20pt",height:"20pt",viewBox:"0 0 20 20",style:{position:"absolute",left:10},ref:t,"aria-labelledby":o},c),a?n.createElement("title",{id:o},a):null,n.createElement("g",{id:"surface1"},n.createElement("path",{style:{stroke:"none",fillRule:"nonzero",fill:"#56d68b",fillOpacity:1},d:"M 15.71875 2.515625 C 15.65625 2.578125 15.625 3.023438 15.625 4.007812 L 15.625 5.414062 L 15.054688 4.867188 C 14.109375 3.96875 13.226562 3.453125 11.976562 3.070312 C 11.351562 2.882812 11.179688 2.859375 10 2.859375 C 8.820312 2.859375 8.648438 2.882812 8.023438 3.070312 C 5.539062 3.835938 3.835938 5.539062 3.070312 8.023438 C 2.882812 8.648438 2.859375 8.820312 2.859375 10 C 2.859375 11.179688 2.882812 11.351562 3.070312 11.976562 C 3.835938 14.460938 5.539062 16.164062 8.023438 16.929688 C 8.648438 17.117188 8.820312 17.140625 10 17.140625 C 11.179688 17.140625 11.351562 17.117188 11.976562 16.929688 C 14.015625 16.304688 15.523438 15.054688 16.4375 13.226562 C 16.828125 12.445312 17.109375 11.421875 17.164062 10.570312 C 17.21875 9.757812 17.15625 9.609375 16.789062 9.609375 C 16.53125 9.609375 16.40625 9.789062 16.40625 10.179688 C 16.40625 10.328125 16.351562 10.742188 16.28125 11.101562 C 15.78125 13.742188 13.742188 15.78125 11.101562 16.28125 C 10.28125 16.4375 9.71875 16.4375 8.90625 16.28125 C 6.390625 15.804688 4.476562 14.015625 3.78125 11.484375 C 3.585938 10.78125 3.585938 9.21875 3.78125 8.515625 C 4.476562 5.984375 6.390625 4.195312 8.90625 3.71875 C 9.65625 3.570312 10.226562 3.5625 10.9375 3.679688 C 12.226562 3.882812 13.476562 4.523438 14.40625 5.429688 L 14.960938 5.976562 L 13.601562 6 C 12.757812 6.007812 12.195312 6.054688 12.132812 6.101562 C 12.007812 6.210938 12 6.578125 12.125 6.703125 C 12.195312 6.773438 12.789062 6.796875 14.3125 6.796875 L 16.40625 6.796875 L 16.40625 4.757812 C 16.40625 3.507812 16.375 2.664062 16.328125 2.570312 C 16.234375 2.398438 15.867188 2.367188 15.71875 2.515625 Z M 15.71875 2.515625 "})))}var O=n.forwardRef(m),x=(a.p,a(121)),C=a(122),k=a(125),v=a(119),y=a(124),S=a(6),T=Object(d.a)((function(e){return{selectorSection:{width:"90%",marginBottom:"10px  !important",backgroundColor:"#f9f6ff"},inputField:{width:"90%"},checkBoxGrid:{margin:"2%"},markAsComplete:{color:"#56d68b",cursor:"pointer","&:hover":{color:"#f50057"}},tagContainer:{color:"#9e87e9",backgroundColor:"#ede8fb",margin:"10px",cursor:"pointer"}}}));var w=function(e){var t=e.todoData,a=e.selectedValue,n=e.clickedMarkAscompleted,o=(e.inprocessTodoData,e.disabled),c=e.handleTagClick,r=T();return Object(S.jsxs)(u.a,{className:r.selectorSection,children:[Object(S.jsx)(v.a,{value:t.key,control:Object(S.jsx)(y.a,{}),label:t.todo,disabled:o}),t.tags.map((function(e,t){return Object(S.jsxs)(b.a,{variant:"subtitle1",className:r.tagContainer,align:"center",display:"inline",onClick:function(){return c(e)},children:["#",e]},t)})),a===t.key&&!o&&Object(S.jsx)(b.a,{variant:"subtitle1",className:r.markAsComplete,align:"center",color:"secondary",onClick:function(){n(),console.log(a)},children:"Mark as completed"})]})},D=a(59),I=a.n(D),N=Object(d.a)((function(e){return{selectorSection:{width:"90%"},inputField:{width:"90%"},checkBoxGrid:{margin:"2%",marginTop:"20px"},completedLable:{marginTop:"30px",marginBottom:"10px"},tagContainer:{color:"#9e87e9",backgroundColor:"#ede8fb",margin:"10px",cursor:"pointer",width:"fit-content",padding:"3px"},filterGrid:{paddingBottom:"15px"}}}));var L=function(e){var t=e.inprocessTodoData,a=e.changeInprocessTodoData,o=e.changeCompletedTodoData,c=e.completedTodoData,r=e.selectedValue,l=e.changeSelectedValue,d=N(),u=Object(n.useState)(""),g=Object(s.a)(u,2),f=g[0],j=g[1],h=Object(n.useState)(""),m=Object(s.a)(h,2),O=m[0],v=m[1],y=function(){o([].concat(Object(i.a)(t.filter((function(e){return e.key===r}))),Object(i.a)(c))),a(t.filter((function(e){return e.key!==r})))},T=function(e){v(e),j(t.filter((function(t){return t.tags.find((function(t){return t==e}))})))};return Object(S.jsxs)(p.a,{align:"left",className:d.checkBoxGrid,children:[f&&Object(S.jsxs)(p.a,{className:d.filterGrid,children:[Object(S.jsxs)(b.a,{variant:"subtitle1",className:d.tagContainer,display:"inline",align:"left",color:"secondary",children:["#",O]}),Object(S.jsx)(I.a,{color:"secondary",onClick:function(){j(""),v("")},cursor:"pointer",children:"cancel"})]}),Object(S.jsxs)(x.a,{component:"fieldset",children:[Object(S.jsx)(C.a,{className:d.completedLable,component:"legend",children:0!==t.length?"In-Complete Tasks":"No Pending Tasks"}),Object(S.jsxs)(k.a,{value:r,onChange:function(e){l(parseInt(e.target.value))},children:[f&&f.map((function(e){return Object(S.jsx)(w,{clickedMarkAscompleted:y,todoData:e,handleTagClick:T,inprocessTodoData:t,selectedValue:r},e.key)})),!f&&t.map((function(e){return Object(S.jsx)(w,{clickedMarkAscompleted:y,todoData:e,handleTagClick:T,inprocessTodoData:t,selectedValue:r},e.key)})),!f&&0!==c.length&&Object(S.jsx)(C.a,{className:d.completedLable,component:"legend",children:"Completed Tasks"}),!f&&c.map((function(e){return Object(S.jsx)(w,{clickedMarkAscompleted:y,disabled:!0,todoData:e,handleTagClick:T,inprocessTodoData:t,selectedValue:r},e.key)}))]})]})]})},B=Object(d.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,minHeight:"80vh"},paperReset:{color:"#56d68b",position:"relative",width:"120px",paddingInline:"24px",borderRadius:"40px",cursor:"pointer","&:hover":{backgroundColor:"#dffdff",boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"}},selectorSection:{width:"90%"},inputField:{width:"90%"},checkBoxGrid:{margin:"2%"}}}));var V=function(){var e,t=B(),a=Object(n.useState)([]),o=Object(s.a)(a,2),c=o[0],r=o[1],d=Object(n.useState)([]),f=Object(s.a)(d,2),j=f[0],h=f[1],m=Object(n.useState)(""),x=Object(s.a)(m,2),C=x[0],k=x[1],v=Object(n.useState)(0),y=Object(s.a)(v,2),T=y[0],w=y[1],D=Object(n.useState)(""),I=Object(s.a)(D,2),N=I[0],V=I[1];return Object(n.useEffect)((function(){if(0===c.length&&0===j.length){console.log("bye");var e=JSON.parse(localStorage.getItem("inprocessTodoData"));console.log(e),e&&r(e),console.log("bye");var t=JSON.parse(localStorage.getItem("completedTodoData"));t&&h(t);var a=JSON.parse(localStorage.getItem("todoIndex"));a&&w(a)}else localStorage.setItem("inprocessTodoData",JSON.stringify(c)),localStorage.setItem("completedTodoData",JSON.stringify(j)),localStorage.setItem("todoIndex",JSON.stringify(T))}),[c,j]),Object(S.jsx)(p.a,(e={container:!0,spacing:3},Object(l.a)(e,"spacing",0),Object(l.a)(e,"alignItems","center"),Object(l.a)(e,"justify","center"),Object(l.a)(e,"style",{minHeight:"100vh"}),Object(l.a)(e,"children",Object(S.jsx)(p.a,{item:!0,xs:10,children:Object(S.jsxs)(u.a,{className:t.paper,children:[Object(S.jsx)(b.a,{variant:"h4",align:"left",children:"To do list"}),Object(S.jsx)(p.a,{align:"right",children:Object(S.jsxs)(u.a,{className:t.paperReset,align:"right",elevation:0,onClick:function(e){localStorage.clear(),w(0),h([]),r([]),V("")},children:[Object(S.jsx)(O,{display:"inline"}),Object(S.jsx)(b.a,{variant:"subtitle1",display:"inline",children:"Reset all tasks"})]})}),Object(S.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault();var t=C.split("#"),a=t[0];t.shift(),r([{key:T+1,todo:a,tags:t}].concat(Object(i.a)(c))),w(T+1),k("")},children:Object(S.jsx)(g.a,{id:"standard-search",className:t.inputField,label:"+ Add a task",value:C,onChange:function(e){k(e.target.value)},type:"input"})}),Object(S.jsx)(L,{changeInprocessTodoData:r,inprocessTodoData:c,completedTodoData:j,changeCompletedTodoData:h,selectedValue:N,changeSelectedValue:V})]})})),e))},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,127)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),c(e),r(e)}))};r.a.render(Object(S.jsx)(o.a.StrictMode,{children:Object(S.jsx)(V,{})}),document.getElementById("root")),A()}},[[82,1,2]]]);
//# sourceMappingURL=main.eeff6cdd.chunk.js.map