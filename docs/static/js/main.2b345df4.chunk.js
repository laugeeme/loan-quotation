(this["webpackJsonploan-quotation-react"]=this["webpackJsonploan-quotation-react"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(11)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(3),r=t.n(c),i=(t(9),t(1));var s=function(e){var a=e.title;return n.a.createElement(l.Fragment,null,n.a.createElement("h1",null,a))};var m=function(e){var a=e.quantity,t=e.saveQuantity,c=e.deadline,r=e.saveDeadline,s=e.saveTotal,m=e.saveLoading,o=Object(l.useState)(!1),u=Object(i.a)(o,2),d=u[0],v=u[1];return n.a.createElement(l.Fragment,null,n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),0!==a&&""!==c?(v(!1),m(!0),setTimeout((function(){var e=function(e,a){var t;t=e<=1e3?.25*e:e>1e3&&e<=5e3?.2*e:e>5e3&&e<=1e4?.15*e:.1*e;var l=0;switch(a){case 3:l=.05*e;break;case 6:l=.1*e;break;case 12:l=.15*e;break;case 24:l=.2*e}return l+t+e}(a,c);s(e),m(!1)}),3e3)):v(!0)}},n.a.createElement("div",{className:"row"},n.a.createElement("div",null,n.a.createElement("label",null,"Loan amount"),n.a.createElement("input",{className:"u-full-width",type:"number",placeholder:"Example: 3000",onChange:function(e){t(parseInt(e.target.value))}})),n.a.createElement("div",null,n.a.createElement("label",null,"Time to pay"),n.a.createElement("select",{className:"u-full-width",onChange:function(e){r(parseInt(e.target.value))}},n.a.createElement("option",{value:""},"Select"),n.a.createElement("option",{value:"3"},"3 months"),n.a.createElement("option",{value:"6"},"6 months"),n.a.createElement("option",{value:"12"},"12 months"),n.a.createElement("option",{value:"24"},"24 months"))),n.a.createElement("div",null,n.a.createElement("input",{type:"submit",value:"Calculate",className:"button-primary u-full-width"})))),d?n.a.createElement("p",{className:"error"},"All fields are required"):null)},o=function(){return n.a.createElement("p",null,"Add an amount and a term to be paid to make the quote.")},u=function(e){var a=e.total,t=e.deadline,l=e.quantity;return n.a.createElement("div",{className:"u-full-width resultado"},n.a.createElement("h2",null,"Summary"),n.a.createElement("p",null,"The requested quantity is ",l," $"),n.a.createElement("p",null,"Payable in ",t," months "),n.a.createElement("p",null,"Your monthly payment is: ",(a/t).toFixed(2)," $"),n.a.createElement("p",null,"Total to be paid: ",a.toFixed(2)," $"))},d=(t(10),function(){return n.a.createElement("div",{className:"sk-circle"},n.a.createElement("div",{className:"sk-circle1 sk-child"}),n.a.createElement("div",{className:"sk-circle2 sk-child"}),n.a.createElement("div",{className:"sk-circle3 sk-child"}),n.a.createElement("div",{className:"sk-circle4 sk-child"}),n.a.createElement("div",{className:"sk-circle5 sk-child"}),n.a.createElement("div",{className:"sk-circle6 sk-child"}),n.a.createElement("div",{className:"sk-circle7 sk-child"}),n.a.createElement("div",{className:"sk-circle8 sk-child"}),n.a.createElement("div",{className:"sk-circle9 sk-child"}),n.a.createElement("div",{className:"sk-circle10 sk-child"}),n.a.createElement("div",{className:"sk-circle11 sk-child"}),n.a.createElement("div",{className:"sk-circle12 sk-child"}))});var v=function(){var e,a=Object(l.useState)(0),t=Object(i.a)(a,2),c=t[0],r=t[1],v=Object(l.useState)(""),E=Object(i.a)(v,2),h=E[0],k=E[1],p=Object(l.useState)(0),b=Object(i.a)(p,2),f=b[0],N=b[1],y=Object(l.useState)(!1),g=Object(i.a)(y,2),w=g[0],j=g[1];return e=w?n.a.createElement(d,null):0===f?n.a.createElement(o,null):n.a.createElement(u,{total:f,deadline:h,quantity:c}),n.a.createElement(l.Fragment,null,n.a.createElement(s,{title:"Loan quotation"}),n.a.createElement("div",{className:"container"},n.a.createElement(m,{quantity:c,saveQuantity:r,deadline:h,saveDeadline:k,saveTotal:N,saveLoading:j}),n.a.createElement("div",{className:"mensajes"},e)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.2b345df4.chunk.js.map