function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}function l(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function s(t,n,e,o,r,i,c){const a=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,i);if(a){const r=l(n,e,o,c);t.p(r,a)}}let u,f=!1;function d(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function h(t,n){if(f){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const t=n[l].claim_order,i=(r>0&&n[e[r]].claim_order<=t?r+1:d(1,r,(t=>n[e[t]].claim_order),t))-1;o[l]=e[i]+1;const c=i+1;e[c]=l,r=Math.max(c,r)}const i=[],c=[];let a=n.length-1;for(let l=e[r]+1;0!=l;l=o[l-1]){for(i.push(n[l-1]);a>=l;a--)c.push(n[a]);a--}for(;a>=0;a--)c.push(n[a]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let l=0,s=0;l<c.length;l++){for(;s<i.length&&c[l].claim_order>=i[s].claim_order;)s++;const n=s<i.length?i[s]:null;t.insertBefore(c[l],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode!==t&&t.appendChild(n)}function _(t,n,e){f&&!e?h(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function p(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function $(){return g(" ")}function x(){return g("")}function y(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function b(t){return Array.from(t.childNodes)}function v(t,n,e,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),i}}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,i}}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function w(t,n,e,o){return v(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):m(n)))}function E(t,n){return v(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>g(n)),!0)}function N(t){return E(t," ")}function k(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function A(t){u=t}function S(){if(!u)throw new Error("Function called outside component initialization");return u}function j(t){S().$$.on_mount.push(t)}function B(t){S().$$.after_update.push(t)}function C(t,n){S().$$.context.set(t,n)}const O=[],T=[],M=[],q=[],z=Promise.resolve();let D=!1;function F(t){M.push(t)}let I=!1;const G=new Set;function H(){if(!I){I=!0;do{for(let t=0;t<O.length;t+=1){const n=O[t];A(n),P(n.$$)}for(A(null),O.length=0;T.length;)T.pop()();for(let t=0;t<M.length;t+=1){const n=M[t];G.has(n)||(G.add(n),n())}M.length=0}while(O.length);for(;q.length;)q.pop()();D=!1,I=!1,G.clear()}}function P(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(F)}}const W=new Set;let J;function K(){J={r:0,c:[],p:J}}function L(){J.r||r(J.c),J=J.p}function Q(t,n){t&&t.i&&(W.delete(t),t.i(n))}function R(t,n,e,o){if(t&&t.o){if(W.has(t))return;W.add(t),J.c.push((()=>{W.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function U(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],a=n[i];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[i]=a}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function V(t){return"object"==typeof t&&null!==t?t:{}}function X(t){t&&t.c()}function Y(t,n){t&&t.l(n)}function Z(t,n,o,c){const{fragment:a,on_mount:l,on_destroy:s,after_update:u}=t.$$;a&&a.m(n,o),c||F((()=>{const n=l.map(e).filter(i);s?s.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(F)}function tt(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function nt(t,n){-1===t.$$.dirty[0]&&(O.push(t),D||(D=!0,z.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function et(n,e,i,c,a,l,s,d=[-1]){const h=u;A(n);const _=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:e.context||[]),callbacks:o(),dirty:d,skip_bound:!1,root:e.target||h.$$.root};s&&s(_.root);let m=!1;if(_.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return _.ctx&&a(_.ctx[t],_.ctx[t]=r)&&(!_.skip_bound&&_.bound[t]&&_.bound[t](r),m&&nt(n,t)),e})):[],_.update(),m=!0,r(_.before_update),_.fragment=!!c&&c(_.ctx),e.target){if(e.hydrate){f=!0;const t=b(e.target);_.fragment&&_.fragment.l(t),t.forEach(p)}else _.fragment&&_.fragment.c();e.intro&&Q(n.$$.fragment),Z(n,e.target,e.anchor,e.customElement),f=!1,H()}A(h)}class ot{$destroy(){tt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const rt=[];function it(n,e=t){let o;const r=[];function i(t){if(c(n,t)&&(n=t,o)){const t=!rt.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),rt.push(t,n)}if(t){for(let t=0;t<rt.length;t+=2)rt[t][0](rt[t+1]);rt.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,a=t){const l=[c,a];return r.push(l),1===r.length&&(o=e(i)||t),c(n),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{j as A,n as B,it as C,a as D,s as E,h as F,t as G,ot as S,b as a,y as b,w as c,p as d,m as e,_ as f,E as g,k as h,et as i,X as j,$ as k,x as l,Y as m,N as n,Z as o,U as p,V as q,K as r,c as s,g as t,R as u,tt as v,L as w,Q as x,C as y,B as z};
