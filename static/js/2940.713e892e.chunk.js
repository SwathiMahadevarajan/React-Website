"use strict";(self.webpackChunksample=self.webpackChunksample||[]).push([[2940,2],{2940:function(e,r,n){n.r(r),n.d(r,{default:function(){return l}});var t=n(885),a=n(8683),s=n(2791),i=(n(2),n(184));function l(e){var r=e.formData,n=e.setFormData,l=(0,s.useReducer)((function(e,r){switch(r.type){case"ERROR_IN_EMAIL":return(0,a.Z)((0,a.Z)({},e),{},{email:!0});case"ERROR_IN_NAME":return(0,a.Z)((0,a.Z)({},e),{},{name:!0});case"ERROR_IN_NUMBER":return(0,a.Z)((0,a.Z)({},e),{},{number:!0});case"NO_ERROR_IN_EMAIL":return(0,a.Z)((0,a.Z)({},e),{},{email:!1});case"NO_ERROR_IN_NAME":return(0,a.Z)((0,a.Z)({},e),{},{name:!1});case"NO_ERROR_IN_NUMBER":return(0,a.Z)((0,a.Z)({},e),{},{number:!1});default:throw new Error("Unhandled exception of ".concat(r.type))}}),{name:!1,email:!1,number:!1}),u=(0,t.Z)(l,2),c=u[0],o=u[1];return(0,i.jsxs)("div",{className:"personalInfo",children:[(0,i.jsxs)("label",{children:[(0,i.jsxs)("div",{className:"inputLabel",children:[(0,i.jsx)("span",{children:"Name"}),(0,i.jsx)("span",{className:c.name?"errorMessage":"noerror",children:"This field is required"})]}),(0,i.jsx)("input",{type:"text",value:r.name,placeholder:"e.g. Swathi",onChange:function(e){o({type:"NO_ERROR_IN_NAME"}),n((0,a.Z)((0,a.Z)({},r),{},{name:e.target.value}))},onBlur:function(e){""==e.target.value&&o({type:"ERROR_IN_NAME"})},required:!0})]}),(0,i.jsxs)("label",{children:[(0,i.jsxs)("div",{className:"inputLabel",children:[(0,i.jsx)("span",{children:"Email Address"}),(0,i.jsx)("span",{className:c.email?"errorMessage":"noerror",children:"This field is required"})]}),(0,i.jsx)("input",{type:"email",required:!0,placeholder:"e.g.swathi123@gmail.com",value:r.email,onChange:function(e){o({type:"NO_ERROR_IN_EMAIL"}),n((0,a.Z)((0,a.Z)({},r),{},{email:e.target.value}))},onBlur:function(e){""==e.target.value&&o({type:"ERROR_IN_EMAIL"})}})]}),(0,i.jsxs)("label",{children:[(0,i.jsxs)("div",{className:"inputLabel",children:[(0,i.jsx)("span",{children:"Phone Number"}),(0,i.jsx)("span",{className:c.number?"errorMessage":"noerror",children:"This field is required"})]}),(0,i.jsx)("input",{type:"tel",required:!0,placeholder:"e.g. +91 1234567890",value:r.number,onChange:function(e){o({type:"NO_ERROR_IN_NUMBER"}),n((0,a.Z)((0,a.Z)({},r),{},{number:e.target.value}))},onBlur:function(e){""==e.target.value&&o({type:"ERROR_IN_NUMBER"})}})]})]})}},2:function(e,r,n){n.r(r),r.default={}},8683:function(e,r,n){n.d(r,{Z:function(){return i}});var t=n(2881);function a(e,r,n){return(r=(0,t.Z)(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}}}]);
//# sourceMappingURL=2940.713e892e.chunk.js.map