(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();const he=(e,n)=>e===n,M={equals:he};let le=fe;const x=1,q=2,ie={owned:null,cleanups:null,context:null,owner:null};var m=null;let U=null,de=null,g=null,v=null,E=null,G=0;function ge(e,n){const t=g,s=m,l=e.length===0,i=n===void 0?s:n,o=l?ie:{owned:null,cleanups:null,context:i?i.context:null,owner:i},r=l?e:()=>e(()=>T(()=>I(o)));m=o,g=null;try{return k(r,!0)}finally{g=t,m=s}}function N(e,n){n=n?Object.assign({},M,n):M;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=l=>(typeof l=="function"&&(l=l(t.value)),oe(t,l));return[re.bind(t),s]}function C(e,n,t){const s=W(e,n,!1,x);P(s)}function pe(e,n,t){le=me;const s=W(e,n,!1,x);s.user=!0,E?E.push(s):P(s)}function j(e,n,t){t=t?Object.assign({},M,t):M;const s=W(e,n,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,P(s),re.bind(s)}function T(e){if(g===null)return e();const n=g;g=null;try{return e()}finally{g=n}}function we(e,n,t){const s=Array.isArray(e);let l,i=t&&t.defer;return o=>{let r;if(s){r=Array(e.length);for(let d=0;d<e.length;d++)r[d]=e[d]()}else r=e();if(i)return i=!1,o;const a=T(()=>n(r,l,o));return l=r,a}}function re(){if(this.sources&&this.state)if(this.state===x)P(this);else{const e=v;v=null,k(()=>D(this),!1),v=e}if(g){const e=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(e)):(g.sources=[this],g.sourceSlots=[e]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function oe(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&k(()=>{for(let l=0;l<e.observers.length;l+=1){const i=e.observers[l],o=U&&U.running;o&&U.disposed.has(i),(o?!i.tState:!i.state)&&(i.pure?v.push(i):E.push(i),i.observers&&ue(i)),o||(i.state=x)}if(v.length>1e6)throw v=[],new Error},!1)),n}function P(e){if(!e.fn)return;I(e);const n=G;ye(e,e.value,n)}function ye(e,n,t){let s;const l=m,i=g;g=m=e;try{s=e.fn(n)}catch(o){return e.pure&&(e.state=x,e.owned&&e.owned.forEach(I),e.owned=null),e.updatedAt=t+1,ce(o)}finally{g=i,m=l}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?oe(e,s):e.value=s,e.updatedAt=t)}function W(e,n,t,s=x,l){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:m,context:m?m.context:null,pure:t};return m===null||m!==ie&&(m.owned?m.owned.push(i):m.owned=[i]),i}function X(e){if(e.state===0)return;if(e.state===q)return D(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<G);)e.state&&n.push(e);for(let t=n.length-1;t>=0;t--)if(e=n[t],e.state===x)P(e);else if(e.state===q){const s=v;v=null,k(()=>D(e,n[0]),!1),v=s}}function k(e,n){if(v)return e();let t=!1;n||(v=[]),E?t=!0:E=[],G++;try{const s=e();return ve(t),s}catch(s){t||(E=null),v=null,ce(s)}}function ve(e){if(v&&(fe(v),v=null),e)return;const n=E;E=null,n.length&&k(()=>le(n),!1)}function fe(e){for(let n=0;n<e.length;n++)X(e[n])}function me(e){let n,t=0;for(n=0;n<e.length;n++){const s=e[n];s.user?e[t++]=s:X(s)}for(n=0;n<t;n++)X(e[n])}function D(e,n){e.state=0;for(let t=0;t<e.sources.length;t+=1){const s=e.sources[t];if(s.sources){const l=s.state;l===x?s!==n&&(!s.updatedAt||s.updatedAt<G)&&X(s):l===q&&D(s,n)}}}function ue(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=q,t.pure?v.push(t):E.push(t),t.observers&&ue(t))}}function I(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),l=t.observers;if(l&&l.length){const i=l.pop(),o=t.observerSlots.pop();s<l.length&&(i.sourceSlots[o]=s,l[s]=i,t.observerSlots[s]=o)}}if(e.owned){for(n=e.owned.length-1;n>=0;n--)I(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}e.state=0}function be(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ce(e,n=m){throw be(e)}function R(e,n){return T(()=>e(n||{}))}const Se=e=>`Stale read from <${e}>.`;function Ae(e){const n=e.keyed,t=j(()=>e.when,void 0,{equals:(s,l)=>n?s===l:!s==!l});return j(()=>{const s=t();if(s){const l=e.children;return typeof l=="function"&&l.length>0?T(()=>l(n?s:()=>{if(!T(t))throw Se("Show");return e.when})):l}return e.fallback},void 0,void 0)}function Ee(e,n,t){let s=t.length,l=n.length,i=s,o=0,r=0,a=n[l-1].nextSibling,d=null;for(;o<l||r<i;){if(n[o]===t[r]){o++,r++;continue}for(;n[l-1]===t[i-1];)l--,i--;if(l===o){const w=i<s?r?t[r-1].nextSibling:t[i-r]:a;for(;r<i;)e.insertBefore(t[r++],w)}else if(i===r)for(;o<l;)(!d||!d.has(n[o]))&&n[o].remove(),o++;else if(n[o]===t[i-1]&&t[r]===n[l-1]){const w=n[--l].nextSibling;e.insertBefore(t[r++],n[o++].nextSibling),e.insertBefore(t[--i],w),n[l]=t[i]}else{if(!d){d=new Map;let A=r;for(;A<i;)d.set(t[A],A++)}const w=d.get(n[o]);if(w!=null)if(r<w&&w<i){let A=o,$=1,B;for(;++A<l&&A<i&&!((B=d.get(n[A]))==null||B!==w+$);)$++;if($>w-r){const S=n[o];for(;r<w;)e.insertBefore(t[r++],S)}else e.replaceChild(t[r++],n[o++])}else o++;else n[o++].remove()}}}const z="_$DX_DELEGATE";function xe(e,n,t,s={}){let l;return ge(i=>{l=i,n===document?e():b(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{l(),n.textContent=""}}function H(e,n,t){let s;const l=()=>{const o=document.createElement("template");return o.innerHTML=e,o.content.firstChild},i=()=>(s||(s=l())).cloneNode(!0);return i.cloneNode=i,i}function K(e,n=window.document){const t=n[z]||(n[z]=new Set);for(let s=0,l=e.length;s<l;s++){const i=e[s];t.has(i)||(t.add(i),n.addEventListener(i,Ce))}}function b(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return F(e,n,s,t);C(l=>F(e,n(),l,t),s)}function Ce(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}});t;){const s=t[n];if(s&&!t.disabled){const l=t[`${n}Data`];if(l!==void 0?s.call(t,l,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function F(e,n,t,s,l){for(;typeof t=="function";)t=t();if(n===t)return t;const i=typeof n,o=s!==void 0;if(e=o&&t[0]&&t[0].parentNode||e,i==="string"||i==="number"){if(i==="number"&&(n=n.toString(),n===t))return t;if(o){let r=t[0];r&&r.nodeType===3?r.data!==n&&(r.data=n):r=document.createTextNode(n),t=_(e,t,s,r)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||i==="boolean")t=_(e,t,s);else{if(i==="function")return C(()=>{let r=n();for(;typeof r=="function";)r=r();t=F(e,r,t,s)}),()=>t;if(Array.isArray(n)){const r=[],a=t&&Array.isArray(t);if(V(r,n,t,l))return C(()=>t=F(e,r,t,s,!0)),()=>t;if(r.length===0){if(t=_(e,t,s),o)return t}else a?t.length===0?ee(e,r,s):Ee(e,t,r):(t&&_(e),ee(e,r));t=r}else if(n.nodeType){if(Array.isArray(t)){if(o)return t=_(e,t,s,n);_(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function V(e,n,t,s){let l=!1;for(let i=0,o=n.length;i<o;i++){let r=n[i],a=t&&t[e.length],d;if(!(r==null||r===!0||r===!1))if((d=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))l=V(e,r,a)||l;else if(d==="function")if(s){for(;typeof r=="function";)r=r();l=V(e,Array.isArray(r)?r:[r],Array.isArray(a)?a:[a])||l}else e.push(r),l=!0;else{const w=String(r);a&&a.nodeType===3&&a.data===w?e.push(a):e.push(document.createTextNode(w))}}return l}function ee(e,n,t=null){for(let s=0,l=n.length;s<l;s++)e.insertBefore(n[s],t)}function _(e,n,t,s){if(t===void 0)return e.textContent="";const l=s||document.createTextNode("");if(n.length){let i=!1;for(let o=n.length-1;o>=0;o--){const r=n[o];if(l!==r){const a=r.parentNode===e;!i&&!o?a?e.replaceChild(l,r):e.insertBefore(l,t):a&&r.remove()}else i=!0}}else e.insertBefore(l,t);return[l]}const $e="_app_1k06g_1",_e="_status_1k06g_9",Ne="_square_1k06g_19",L={app:$e,status:_e,"board-row":"_board-row_1k06g_15",square:Ne};var Te=H("<button>"),Oe=H("<div><div></div><div></div><div></div><div>");function Le({xNext:e,player:n}){const[t,s]=N(Array(9).fill(0)),[l,i]=N(e),[o,r]=N(!1),a=()=>l()?1:-1,d=f=>{const u=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(const[c,h,p]of u)if(f[c]!==0&&f[c]===f[h]&&f[h]===f[p])return f[c];return 0},w=(f,u)=>{const c=d(f);if(c!==0)return c*u;let h=-1,p=-2;for(let y=0;y<9;y++)if(f[y]===0){f[y]=u;const O=-w(f,u*-1);f[y]=0,O>p&&(p=O,h=y)}return h===-1?0:p},A=f=>{let u=[],c=-2;for(let h=0;h<9;++h)if(f[h]===0){f[h]=1;const p=-w(f,-1);f[h]=0,p>c?(c=p,u=[h]):p===c&&u.push(h)}return u},$=f=>{d(t())===0&&(r(!0),t().filter(u=>u===0).length!==0&&setTimeout(()=>{const u=t().slice(),c=A(u.map(h=>l()?h:-h));u[c[Math.floor(Math.random()*c.length)]]=f,s(u),i(!l()),r(!1)},500))},B=f=>{if(t()[f]!==0||d(t())!==0)return;const u=t().slice();u[f]=a(),s(u),i(!l())},S=f=>(()=>{var u=Te();return u.$$click=()=>B(f),b(u,(()=>{var c=j(()=>t()[f]===1);return()=>c()?"X":t()[f]===-1?"O":null})()),C(c=>{var h=L.square,p=o();return h!==c.e&&(u.className=c.e=h),p!==c.t&&(u.disabled=c.t=p),c},{e:void 0,t:void 0}),u})(),Q=()=>d(t()),ae=()=>Q()!==0?`Winner: ${Q()===1?"X":"O"}`:t().filter(f=>f===0).length===0?"DRAW":`Next player: ${l()?"X":"O"}`;return(!n||l())&&$(a()),pe(we(l,f=>{(f||!n)&&$(a())},{defer:!0})),(()=>{var f=Oe(),u=f.firstChild,c=u.nextSibling,h=c.nextSibling,p=h.nextSibling;return b(u,ae),b(c,()=>S(0),null),b(c,()=>S(1),null),b(c,()=>S(2),null),b(h,()=>S(3),null),b(h,()=>S(4),null),b(h,()=>S(5),null),b(p,()=>S(6),null),b(p,()=>S(7),null),b(p,()=>S(8),null),C(y=>{var O=L.status,J=L["board-row"],Y=L["board-row"],Z=L["board-row"];return O!==y.e&&(u.className=y.e=O),J!==y.t&&(c.className=y.t=J),Y!==y.a&&(h.className=y.a=Y),Z!==y.o&&(p.className=y.o=Z),y},{e:void 0,t:void 0,a:void 0,o:void 0}),f})()}K(["click"]);K(["click"]);var Pe=H("<div class=app><div><label><input type=checkbox>PVE</label></div><div><label><input type=checkbox>X Goes First</label></div><button>reset");const[te,ke]=N(!1),[ne,Be]=N(!0),[Me,se]=N(!0);function qe(){return(()=>{var e=Pe(),n=e.firstChild,t=n.firstChild,s=t.firstChild,l=n.nextSibling,i=l.firstChild,o=i.firstChild,r=l.nextSibling;return s.addEventListener("change",a=>ke(a.target.checked)),o.addEventListener("change",a=>Be(a.target.checked)),r.$$click=()=>{se(!1),se(!0)},b(e,R(Ae,{get when(){return Me()},keyed:!1,children:()=>R(Le,{get xNext(){return ne()},get player(){return te()}})}),null),C(()=>s.checked=te()),C(()=>o.checked=ne()),e})()}K(["click"]);const Xe=document.getElementById("root");xe(()=>R(qe,{}),Xe);
//# sourceMappingURL=index-CZDGB46k.js.map
