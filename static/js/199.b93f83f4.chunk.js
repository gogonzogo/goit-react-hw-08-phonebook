"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[199],{1799:function(a,e,n){n.d(e,{Z:function(){return p}});var t={validationPopup:"ValidationPopup_validationPopup__-i5Rs",validationPopupItem:"ValidationPopup_validationPopupItem__H+yOa",validationPopupIcon:"ValidationPopup_validationPopupIcon__THSxl"},i=n(493),s=n(4852),o=n(6259),r=n(8946),l=n(5146),d=n(5527),u=n(184),p=function(a){var e=a.validationData;return(0,u.jsx)(d.Z,{elevation:8,className:t.validationPopup,children:(0,u.jsx)(i.Z,{className:t.validationPopupList,sx:{width:"100%",maxWidth:360},children:e.map((function(a,e){var n=a[Object.keys(a)[0]],i=n.id,d=n.message,p=n.met,c=p?r.Z:l.Z,m=p?"green":"red";return(0,u.jsxs)(s.ZP,{className:t.validationPopupItem,disableGutters:!0,children:[(0,u.jsx)(c,{className:t.validationPopupIcon,style:{color:m}}),(0,u.jsx)(o.Z,{disableTypography:!0,primary:d,sx:{fontSize:"12px"}})]},i)}))})})}},778:function(a,e,n){n.r(e),n.d(e,{default:function(){return C}});var t=n(4942),i=n(1413),s=n(9439),o="Register_registerForm__uD5pr",r="Register_registerSection__Pmq8N",l=n(2791),d=n(1799),u=n(9434),p=n(7689),c=n(5823),m=n(5264),v=n(8223),x=n(8096),f=n(4925),h=n(7078),Z=n(3466),w=n(3400),j=n(3746),g=n(165),P=n(6151),_=n(521),y=n(5822),b=n(184),C=function(){var a=(0,l.useState)({name:"",email:"",password:"",password2:""}),e=(0,s.Z)(a,2),n=e[0],C=e[1],k=n.name,D=n.email,N=n.password,I=n.password2,S=(0,l.useState)(!1),T=(0,s.Z)(S,2),F=T[0],O=T[1],R=(0,l.useState)(""),z=(0,s.Z)(R,2),B=z[0],W=z[1],E=(0,u.I0)(),G=(0,u.v9)((function(a){return a.validation.validationReqs})),V=(0,p.s0)(),q=function(a){a.preventDefault();var e=a.target.id,n=a.target.value;C((function(a){return(0,i.Z)((0,i.Z)({},a),{},(0,t.Z)({},e,n))})),E((0,c.Zv)((0,t.Z)({},e,n))),E((0,c.o5)((0,t.Z)({},a.target.id,a.target.value)))},A=function(a){var e=a.target.id;W(e)},H=function(){W("")},L=function(){return O((function(a){return!a}))},M=function(a){a.preventDefault()};return m.Notify.init({position:"center-center",distance:"15px",timeout:1e3,showOnlyTheLastOne:!0,fontSize:"20px"}),(0,b.jsx)("section",{className:r,children:(0,b.jsxs)("form",{className:o,children:[(0,b.jsx)(v.Z,{sx:{marginTop:"20px"},id:"name",label:"Username",variant:"standard",fullWidth:!0,size:"large",value:k,onChange:q,onFocus:A,onBlur:H}),"name"===B&&(0,b.jsx)(d.Z,{validationData:G.name}),(0,b.jsx)(v.Z,{sx:{marginTop:"20px"},id:"email",label:"Email",variant:"standard",fullWidth:!0,size:"small",value:D,onChange:q,onFocus:A,onBlur:H}),"email"===B&&(0,b.jsx)(d.Z,{validationData:G.email}),(0,b.jsxs)(x.Z,{sx:{width:"100%",marginTop:"20px"},variant:"standard",children:[(0,b.jsx)(f.Z,{htmlFor:"standard-adornment-password",children:"Password"}),(0,b.jsx)(h.Z,{id:"password",type:F?"text":"password",autoComplete:"off",value:N,onChange:q,onFocus:A,onBlur:H,endAdornment:(0,b.jsx)(Z.Z,{position:"end",children:(0,b.jsx)(w.Z,{"aria-label":"toggle password visibility",onClick:L,onMouseDown:M,children:F?(0,b.jsx)(g.Z,{}):(0,b.jsx)(j.Z,{})})})})]}),"password"===B&&(0,b.jsx)(d.Z,{validationData:G.password}),(0,b.jsxs)(x.Z,{sx:{width:"100%",marginTop:"20px"},variant:"standard",children:[(0,b.jsx)(f.Z,{htmlFor:"standard-adornment-password",children:"Confirm Password"}),(0,b.jsx)(h.Z,{id:"password2",type:F?"text":"password",autoComplete:"off",value:I,onChange:q,onFocus:A,onBlur:H,endAdornment:(0,b.jsx)(Z.Z,{position:"end",children:(0,b.jsx)(w.Z,{"aria-label":"toggle password visibility",onClick:L,onMouseDown:M,children:F?(0,b.jsx)(g.Z,{}):(0,b.jsx)(j.Z,{})})})})]}),"password2"===B&&(0,b.jsx)(d.Z,{validationData:G.password2}),(0,b.jsx)(P.Z,{sx:{marginTop:"40px"},variant:"contained",fullWidth:!0,startIcon:(0,b.jsx)(_.Z,{}),onClick:function(a){a.preventDefault();var e=Object.values(G).every((function(a){return a.every((function(a){return a[Object.keys(a)[0]].met}))}));k&&D&&N?e?(m.Notify.success("Success! You are registered"),E((0,y.z2)({name:k,email:D,password:N})),C({name:"",email:"",password:"",password2:""}),E((0,c.vG)()),E((0,c.pg)()),V("/login")):m.Notify.warning("Please correct the fields with errors"):m.Notify.warning("Please fill in all the fields")},children:"REGISTER"})]})})}}}]);
//# sourceMappingURL=199.b93f83f4.chunk.js.map