"use strict";(self.webpackChunksample=self.webpackChunksample||[]).push([[5883,5559,1170],{7418:function(n,e,s){s.r(e),s.d(e,{GameBoard:function(){return x}});var t=s(8683),r=s(885),a=s(2791),l=s(430),c=s(4370),i=s(6437),o=s(5987),u=s(184),d=["children","show","onClose"],m=function(n){var e=n.children,s=(n.show,n.onClose);(0,o.Z)(n,d);return(0,u.jsx)("div",{className:"modal",children:(0,u.jsxs)("div",{className:"modal-content",children:[(0,u.jsx)("button",{className:"close",onClick:s,children:"\xd7"}),e]})})},h=s(2e3),x=function(n){var e=n.score,s=n.setScore,o=(0,a.useState)(!0),d=(0,r.Z)(o,2),x=d[0],f=d[1],j=(0,a.useState)({user:null,computer:null,userWon:null}),p=(0,r.Z)(j,2),g=p[0],v=p[1],k=(0,a.useState)(!1),Z=(0,r.Z)(k,2),C=Z[0],N=Z[1];return(0,u.jsxs)("div",{className:"gameBoard",children:[x?(0,u.jsx)("div",{className:"gameElements",children:l.gameElements.map((function(n,r){return(0,u.jsx)(c.IE,(0,t.Z)((0,t.Z)({},n),{},{clickable:x,index:r,setIsPlaying:f,onClick:function(n){!function(n,e,s,t){var r=Math.floor(3*Math.random()),a=l.gameElements.findIndex((function(e){return e.name===n.name})),c={user:n,computer:l.gameElements[r],userWon:null},i=l.gameElements.findIndex((function(n){return n.name===l.gameElements[r].name}));c.userWon=a===i?null:0===a&&2===i||1===a&&0===i||2===a&&1===i,e(c),c.userWon&&t(s+1)}(n,v,e,s),f(!1)}}))}))}):(0,u.jsx)(i.WinnersBoard,(0,t.Z)((0,t.Z)({},g),{},{setIsPlaying:f})),C&&(0,u.jsx)(m,{show:C,onClose:function(){return N(!1)},children:(0,u.jsx)(h._p,{height:"300px",width:"50px"})}),(0,u.jsx)("button",{onClick:function(){return N(!0)},children:"Rules"})]})}},6437:function(n,e,s){s.r(e),s.d(e,{WinnersBoard:function(){return l}});var t=s(8683),r=s(3921),a=(s(1170),s(184)),l=function(n){var e=n.user,s=n.computer,l=n.userWon,c=n.setIsPlaying;return(0,a.jsxs)("div",{className:"winnersboard",children:[(0,a.jsxs)("div",{className:"choice ".concat(l&&"spotlight"),children:["You Picked",(0,a.jsx)(r.I,(0,t.Z)((0,t.Z)({},e),{},{clickable:!1}))]}),(0,a.jsxs)("div",{className:"winnerDeclaration",children:[(0,a.jsx)("span",{children:null===l?"It's a tie":l?"You Won":"You Lost"}),(0,a.jsx)("button",{className:"playAgainButton",onClick:function(){return c(!0)},children:"Play Again"})]}),(0,a.jsxs)("div",{className:"choice ".concat(!1===l&&"spotlight"),children:["Computer Picked",(0,a.jsx)(r.I,(0,t.Z)({},s))]})]})}},1170:function(n,e,s){s.r(e),e.default={}}}]);
//# sourceMappingURL=5883.c913f002.chunk.js.map