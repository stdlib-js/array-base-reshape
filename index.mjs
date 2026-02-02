// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-flatten@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-slice@v0.3.0-esm/index.mjs";function e(t,s,n,i,a){var d,f,l,o,m,h;if(m=n[i],i===s-1)return r(t,a,a+m);for(d=1,h=o=i+1;h<n.length;h++)d*=n[h];for(l=[],h=0;h<m;h++)f=e(t,s,n,o,a),l.push(f),a+=d;return l}function s(r,s,n,i){return e(t(r,s,i),n.length,n,0,0)}export{s as default};
//# sourceMappingURL=index.mjs.map
