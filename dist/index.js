"use strict";var g=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var q=g(function(h,l){
var b=require('@stdlib/array-base-flatten/dist'),p=require('@stdlib/array-base-slice/dist');function o(u,r,e,a,v){var s,i,f,n,c,t;if(c=e[a],a===r-1)return p(u,v,v+c);for(n=a+1,s=1,t=n;t<e.length;t++)s*=e[t];for(f=[],t=0;t<c;t++)i=o(u,r,e,n,v),f.push(i),v+=s;return f}function z(u,r,e,a){var v=b(u,r,a);return o(v,e.length,e,0,0)}l.exports=z
});var A=q();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
