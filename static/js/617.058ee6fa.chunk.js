"use strict";(self.webpackChunkreact_app_wallet=self.webpackChunkreact_app_wallet||[]).push([[617],{9560:function(n,t,a){a.r(t),a.d(t,{default:function(){return C}});var e=a(9434),s=a(3553),c=a(2791),r=a(8805),i=a(7156),o=a(9439),l="TransactionsItem_transactionEl__rSoX7",u="TransactionsItem_transactionElTimeCategory__X1SEi",d="TransactionsItem_transactionElDate__WV857",m="TransactionsItem_transactionElCategory__7efVq",_="TransactionsItem_transactionElAmount__gCR-K",f="TransactionsItem_expense__5FsSM",x="TransactionsItem_income__N+XXG",h="TransactionsItem_btnMore__5nW7B";var j=a.p+"static/media/more.19d85f860ee9db09c1acd61c73d1e9b6.svg",p=a(2426),v=a.n(p),I="ItemModal_itemModal__FM-X2",E="ItemModal_itemModalBtn__K7ltZ",N=a(7689),b=a(184),M=function(n){var t=n.transactionId,a=n.handleDelete,e=(0,N.s0)();return(0,b.jsxs)("div",{className:I,children:[(0,b.jsx)("button",{className:E,onClick:function(){return e("/edit/"+t)},children:"Edit"}),(0,b.jsx)("button",{className:E,onClick:a,children:"Delete"})]})},T=a(3255),g=function(n){var t=n.transactionEl,a=(0,c.useState)(null),s=(0,o.Z)(a,2),r=s[0],i=s[1],p=(0,e.I0)();return(0,b.jsxs)("div",{className:l,children:[(0,b.jsxs)("p",{className:u,children:[(0,b.jsx)("span",{className:d,children:v()(t.date).format("ddd")}),(0,b.jsx)("span",{className:d,children:v()(t.date).format("DD MMM. YY")}),t.time," ",(0,b.jsx)("br",{}),(0,b.jsx)("span",{className:m,children:t.category}),t.comment]}),(0,b.jsxs)("p",{className:"".concat(_," ").concat("Expense"===t.transaction?f:x),children:["Expense"===t.transaction?"- ":"+ ",t.amount]}),(0,b.jsx)("button",{type:"button",className:h,onClick:function(){i(t.id)},children:(0,b.jsx)("img",{src:j,alt:"icon More"})}),r===t.id&&(0,b.jsx)(M,{transactionId:t.id,handleDelete:function(){return p((0,T.aI)(t.id))}})]})},k="TransactionsList_transactionsList__1bz2k",C=function(){var n=(0,e.v9)(s.i),t=(0,e.v9)(s.c),a=(0,e.v9)(r.A),o=(0,e.I0)();(0,c.useEffect)((function(){t||o((0,T.f1)())}),[o,t]);var l=function(n,t){return n.filter((function(n){return n.transaction.includes(t)}))}(n,a);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.Z,{title:a}),(0,b.jsx)("ul",{className:k,children:l.map((function(n){return(0,b.jsx)("li",{children:(0,b.jsx)(g,{transactionEl:n})},n.id)}))})]})}},8805:function(n,t,a){a.d(t,{A:function(){return e}});var e=function(n){return n.filter.value}},3553:function(n,t,a){a.d(t,{c:function(){return s},i:function(){return e}});var e=function(n){return n.transactions.transactions},s=function(n){return Boolean(n.transactions.transactions.length)}}}]);
//# sourceMappingURL=617.058ee6fa.chunk.js.map