const e="gcds";const t={allRenderFn:true,appendChildSlotFix:false,asyncLoading:true,asyncQueue:false,attachStyles:true,cloneNodeFix:false,cmpDidLoad:true,cmpDidRender:false,cmpDidUnload:false,cmpDidUpdate:true,cmpShouldUpdate:false,cmpWillLoad:true,cmpWillRender:false,cmpWillUpdate:true,connectedCallback:false,constructableCSS:true,cssAnnotations:true,devTools:false,disconnectedCallback:false,element:false,event:true,experimentalSlotFixes:false,formAssociated:false,hasRenderFn:true,hostListener:true,hostListenerTarget:true,hostListenerTargetBody:true,hostListenerTargetDocument:true,hostListenerTargetParent:false,hostListenerTargetWindow:false,hotModuleReplacement:false,hydrateClientSide:false,hydrateServerSide:false,hydratedAttribute:false,hydratedClass:true,initializeNextTick:false,invisiblePrehydration:true,isDebug:false,isDev:false,isTesting:false,lazyLoad:true,lifecycle:true,lifecycleDOMEvents:false,member:true,method:true,mode:false,observeAttribute:true,profile:false,prop:true,propBoolean:true,propMutable:true,propNumber:true,propString:true,reflect:true,scoped:true,scopedSlotTextContentFix:false,scriptDataOpts:false,shadowDelegatesFocus:false,shadowDom:true,slot:true,slotChildNodesFix:false,slotRelocation:true,state:true,style:true,svg:false,taskQueue:true,transformTagName:false,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:true,vdomKey:true,vdomListener:true,vdomPropOrAttr:true,vdomRef:true,vdomRender:true,vdomStyle:true,vdomText:true,vdomXlink:true,watchCallback:true};let n;let s;let l;let o=false;let i=false;let c=false;let f=false;let r=false;const u=(e,t="")=>{{return()=>{}}};const a=(e,t)=>{{return()=>{}}};const d="{visibility:hidden}.hydrated{visibility:inherit}";const p="slot-fb{display:contents}slot-fb[hidden]{display:none}";const m="http://www.w3.org/1999/xlink";const h={};const v=e=>e!=null;const y=e=>{e=typeof e;return e==="object"||e==="function"};function b(e){var t,n,s;return(s=(n=(t=e.head)===null||t===void 0?void 0:t.querySelector('meta[name="csp-nonce"]'))===null||n===void 0?void 0:n.getAttribute("content"))!==null&&s!==void 0?s:undefined}const $=(e,t,...n)=>{let s=null;let l=null;let o=null;let i=false;let c=false;const f=[];const r=t=>{for(let n=0;n<t.length;n++){s=t[n];if(Array.isArray(s)){r(s)}else if(s!=null&&typeof s!=="boolean"){if(i=typeof e!=="function"&&!y(s)){s=String(s)}if(i&&c){f[f.length-1].t+=s}else{f.push(i?w(null,s):s)}c=i}}};r(n);if(t){if(t.key){l=t.key}if(t.name){o=t.name}{const e=t.className||t.class;if(e){t.class=typeof e!=="object"?e:Object.keys(e).filter((t=>e[t])).join(" ")}}}if(typeof e==="function"){return e(t===null?{}:t,f,k)}const u=w(e,null);u.l=t;if(f.length>0){u.o=f}{u.i=l}{u.u=o}return u};const w=(e,t)=>{const n={p:0,m:e,t,h:null,o:null};{n.l=null}{n.i=null}{n.u=null}return n};const g={};const S=e=>e&&e.m===g;const k={forEach:(e,t)=>e.map(C).forEach(t),map:(e,t)=>e.map(C).map(t).map(x)};const C=e=>({vattrs:e.l,vchildren:e.o,vkey:e.i,vname:e.u,vtag:e.m,vtext:e.t});const x=e=>{if(typeof e.vtag==="function"){const t=Object.assign({},e.vattrs);if(e.vkey){t.key=e.vkey}if(e.vname){t.name=e.vname}return $(e.vtag,t,...e.vchildren||[])}const t=w(e.vtag,e.vtext);t.l=e.vattrs;t.o=e.vchildren;t.i=e.vkey;t.u=e.vname;return t};const T=(e,t)=>{if(e!=null&&!y(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};const L=e=>De(e).$hostElement$;const R=(e,t,n)=>{const s=L(e);return{emit:e=>j(s,t,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:e})}};const j=(e,t,n)=>{const s=ze.ce(t,n);e.dispatchEvent(s);return s};const D=new WeakMap;const O=(e,t,n)=>{let s=Pe.get(e);if(He&&n){s=s||new CSSStyleSheet;if(typeof s==="string"){s=t}else{s.replaceSync(t)}}else{s=t}Pe.set(e,s)};const F=(e,t,n)=>{var s;const l=U(t);const o=Pe.get(l);e=e.nodeType===11?e:Ee;if(o){if(typeof o==="string"){e=e.head||e;let n=D.get(e);let i;if(!n){D.set(e,n=new Set)}if(!n.has(l)){{i=Ee.createElement("style");i.innerHTML=o;const t=(s=ze.v)!==null&&s!==void 0?s:b(Ee);if(t!=null){i.setAttribute("nonce",t)}e.insertBefore(i,e.querySelector("link"))}if(t.p&4){i.innerHTML+=p}if(n){n.add(l)}}}else if(!e.adoptedStyleSheets.includes(o)){e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]}}return l};const M=e=>{const t=e.$;const n=e.$hostElement$;const s=t.p;const l=u("attachStyles",t.S);const o=F(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);if(s&10){n["s-sc"]=o;n.classList.add(o+"-h");if(s&2){n.classList.add(o+"-s")}}l()};const U=(e,t)=>"sc-"+e.S;const A=(e,t,n,s,l,o)=>{if(n!==s){let i=Me(e,t);let c=t.toLowerCase();if(t==="class"){const t=e.classList;const l=P(n);const o=P(s);t.remove(...l.filter((e=>e&&!o.includes(e))));t.add(...o.filter((e=>e&&!l.includes(e))))}else if(t==="style"){{for(const t in n){if(!s||s[t]==null){if(t.includes("-")){e.style.removeProperty(t)}else{e.style[t]=""}}}}for(const t in s){if(!n||s[t]!==n[t]){if(t.includes("-")){e.style.setProperty(t,s[t])}else{e.style[t]=s[t]}}}}else if(t==="key");else if(t==="ref"){if(s){s(e)}}else if(!i&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(Me(We,c)){t=c.slice(2)}else{t=c[2]+t.slice(3)}if(n||s){const l=t.endsWith(W);t=t.replace(E,"");if(n){ze.rel(e,t,n,l)}if(s){ze.ael(e,t,s,l)}}}else{const f=y(s);if((i||f&&s!==null)&&!l){try{if(!e.tagName.includes("-")){const l=s==null?"":s;if(t==="list"){i=false}else if(n==null||e[t]!=l){e[t]=l}}else{e[t]=s}}catch(e){}}let r=false;{if(c!==(c=c.replace(/^xlink\:?/,""))){t=c;r=true}}if(s==null||s===false){if(s!==false||e.getAttribute(t)===""){if(r){e.removeAttributeNS(m,t)}else{e.removeAttribute(t)}}}else if((!i||o&4||l)&&!f){s=s===true?"":s;if(r){e.setAttributeNS(m,t,s)}else{e.setAttribute(t,s)}}}}};const N=/\s/;const P=e=>!e?[]:e.split(N);const W="Capture";const E=new RegExp(W+"$");const z=(e,t,n,s)=>{const l=t.h.nodeType===11&&t.h.host?t.h.host:t.h;const o=e&&e.l||h;const i=t.l||h;{for(s in o){if(!(s in i)){A(l,s,o[s],undefined,n,t.p)}}}for(s in i){A(l,s,o[s],i[s],n,t.p)}};const B=(e,t,i,r)=>{var u;const a=t.o[i];let d=0;let p;let m;let h;if(!o){c=true;if(a.m==="slot"){if(n){r.classList.add(n+"-s")}a.p|=a.o?2:1}}if(a.t!==null){p=a.h=Ee.createTextNode(a.t)}else if(a.p&1){p=a.h=Ee.createTextNode("")}else{p=a.h=Ee.createElement(a.p&2?"slot-fb":a.m);{z(null,a,f)}if(v(n)&&p["s-si"]!==n){p.classList.add(p["s-si"]=n)}if(a.o){for(d=0;d<a.o.length;++d){m=B(e,a,d,p);if(m){p.appendChild(m)}}}}{p["s-hn"]=l;if(a.p&(2|1)){p["s-sr"]=true;p["s-fs"]=(u=a.l)===null||u===void 0?void 0:u.slot;p["s-cr"]=s;p["s-sn"]=a.u||"";h=e&&e.o&&e.o[i];if(h&&h.m===a.m&&e.h){H(e.h,false)}}}return p};const H=(e,t)=>{var n;ze.p|=1;const s=e.childNodes;for(let e=s.length-1;e>=0;e--){const o=s[e];if(o["s-hn"]!==l&&o["s-ol"]){X(o).insertBefore(o,V(o));o["s-ol"].remove();o["s-ol"]=undefined;o["s-sh"]=undefined;if(o.nodeType===1){o.setAttribute("slot",(n=o["s-sn"])!==null&&n!==void 0?n:"")}c=true}if(t){H(o,t)}}ze.p&=~1};const Q=(e,t,n,s,o,i)=>{let c=e["s-cr"]&&e["s-cr"].parentNode||e;let f;if(c.shadowRoot&&c.tagName===l){c=c.shadowRoot}for(;o<=i;++o){if(s[o]){f=B(null,n,o,e);if(f){s[o].h=f;c.insertBefore(f,V(t))}}}};const q=(e,t,n)=>{for(let s=t;s<=n;++s){const t=e[s];if(t){const e=t.h;ee(t);if(e){{i=true;if(e["s-ol"]){e["s-ol"].remove()}else{H(e,true)}}e.remove()}}}};const I=(e,t,n,s)=>{let l=0;let o=0;let i=0;let c=0;let f=t.length-1;let r=t[0];let u=t[f];let a=s.length-1;let d=s[0];let p=s[a];let m;let h;while(l<=f&&o<=a){if(r==null){r=t[++l]}else if(u==null){u=t[--f]}else if(d==null){d=s[++o]}else if(p==null){p=s[--a]}else if(K(r,d)){_(r,d);r=t[++l];d=s[++o]}else if(K(u,p)){_(u,p);u=t[--f];p=s[--a]}else if(K(r,p)){if(r.m==="slot"||p.m==="slot"){H(r.h.parentNode,false)}_(r,p);e.insertBefore(r.h,u.h.nextSibling);r=t[++l];p=s[--a]}else if(K(u,d)){if(r.m==="slot"||p.m==="slot"){H(u.h.parentNode,false)}_(u,d);e.insertBefore(u.h,r.h);u=t[--f];d=s[++o]}else{i=-1;{for(c=l;c<=f;++c){if(t[c]&&t[c].i!==null&&t[c].i===d.i){i=c;break}}}if(i>=0){h=t[i];if(h.m!==d.m){m=B(t&&t[o],n,i,e)}else{_(h,d);t[i]=undefined;m=h.h}d=s[++o]}else{m=B(t&&t[o],n,o,e);d=s[++o]}if(m){{X(r.h).insertBefore(m,V(r.h))}}}}if(l>f){Q(e,s[a+1]==null?null:s[a+1].h,n,s,o,a)}else if(o>a){q(t,l,f)}};const K=(e,t)=>{if(e.m===t.m){if(e.m==="slot"){return e.u===t.u}{return e.i===t.i}}return false};const V=e=>e&&e["s-ol"]||e;const X=e=>(e["s-ol"]?e["s-ol"]:e).parentNode;const _=(e,t)=>{const n=t.h=e.h;const s=e.o;const l=t.o;const o=t.m;const i=t.t;let c;if(i===null){{if(o==="slot");else{z(e,t,f)}}if(s!==null&&l!==null){I(n,s,t,l)}else if(l!==null){if(e.t!==null){n.textContent=""}Q(n,null,t,l,0,l.length-1)}else if(s!==null){q(s,0,s.length-1)}}else if(c=n["s-cr"]){c.parentNode.textContent=i}else if(e.t!==i){n.data=i}};const G=e=>{const t=e.childNodes;for(const e of t){if(e.nodeType===1){if(e["s-sr"]){const n=e["s-sn"];e.hidden=false;for(const s of t){if(s!==e){if(s["s-hn"]!==e["s-hn"]||n!==""){if(s.nodeType===1&&(n===s.getAttribute("slot")||n===s["s-sn"])){e.hidden=true;break}}else{if(s.nodeType===1||s.nodeType===3&&s.textContent.trim()!==""){e.hidden=true;break}}}}}G(e)}}};const J=[];const Y=e=>{let n;let s;let l;for(const o of e.childNodes){if(o["s-sr"]&&(n=o["s-cr"])&&n.parentNode){s=n.parentNode.childNodes;const e=o["s-sn"];for(l=s.length-1;l>=0;l--){n=s[l];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==o["s-hn"]&&!t.experimentalSlotFixes){if(Z(n,e)){let t=J.find((e=>e.k===n));i=true;n["s-sn"]=n["s-sn"]||e;if(t){t.k["s-sh"]=o["s-hn"];t.C=o}else{n["s-sh"]=o["s-hn"];J.push({C:o,k:n})}if(n["s-sr"]){J.map((e=>{if(Z(e.k,n["s-sn"])){t=J.find((e=>e.k===n));if(t&&!e.C){e.C=t.C}}}))}}else if(!J.some((e=>e.k===n))){J.push({k:n})}}}}if(o.nodeType===1){Y(o)}}};const Z=(e,t)=>{if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};const ee=e=>{{e.l&&e.l.ref&&e.l.ref(null);e.o&&e.o.map(ee)}};const te=(e,t,f=false)=>{var r,u;const a=e.$hostElement$;const d=e.$;const p=e.T||w(null,null);const m=S(t)?t:$(null,null,t);l=a.tagName;if(d.L){m.l=m.l||{};d.L.map((([e,t])=>m.l[t]=a[e]))}if(f&&m.l){for(const e of Object.keys(m.l)){if(a.hasAttribute(e)&&!["key","ref","style","class"].includes(e)){m.l[e]=a[e]}}}m.m=null;m.p|=4;e.T=m;m.h=p.h=a.shadowRoot||a;{n=a["s-sc"]}{s=a["s-cr"];o=(d.p&1)!==0;i=false}_(p,m);{ze.p|=1;if(c){Y(m.h);for(const e of J){const t=e.k;if(!t["s-ol"]){const e=Ee.createTextNode("");e["s-nr"]=t;t.parentNode.insertBefore(t["s-ol"]=e,t)}}for(const e of J){const t=e.k;const n=e.C;if(n){const e=n.parentNode;let s=n.nextSibling;{let n=(r=t["s-ol"])===null||r===void 0?void 0:r.previousSibling;while(n){let l=(u=n["s-nr"])!==null&&u!==void 0?u:null;if(l&&l["s-sn"]===t["s-sn"]&&e===l.parentNode){l=l.nextSibling;if(!l||!l["s-nr"]){s=l;break}}n=n.previousSibling}}if(!s&&e!==t.parentNode||t.nextSibling!==s){if(t!==s){if(!t["s-hn"]&&t["s-ol"]){t["s-hn"]=t["s-ol"].parentNode.nodeName}e.insertBefore(t,s)}}}else{if(t.nodeType===1){t.hidden=true}}}}if(i){G(m.h)}ze.p&=~1;J.length=0}};const ne=(e,t)=>{if(t&&!e.R&&t["s-p"]){t["s-p"].push(new Promise((t=>e.R=t)))}};const se=(e,t)=>{{e.p|=16}if(e.p&4){e.p|=512;return}ne(e,e.j);const n=()=>le(e,t);return _e(n)};const le=(e,t)=>{const n=u("scheduleUpdate",e.$.S);const s=e.D;let l;if(t){{e.p|=256;if(e.O){e.O.map((([e,t])=>ae(s,e,t)));e.O=undefined}}{l=ae(s,"componentWillLoad")}}else{{l=ae(s,"componentWillUpdate")}}n();return oe(l,(()=>ce(e,s,t)))};const oe=(e,t)=>ie(e)?e.then(t):t();const ie=e=>e instanceof Promise||e&&e.then&&typeof e.then==="function";const ce=async(e,t,n)=>{var s;const l=e.$hostElement$;const o=u("update",e.$.S);const i=l["s-rc"];if(n){M(e)}const c=u("render",e.$.S);{fe(e,t,l,n)}if(i){i.map((e=>e()));l["s-rc"]=undefined}c();o();{const t=(s=l["s-p"])!==null&&s!==void 0?s:[];const n=()=>re(e);if(t.length===0){n()}else{Promise.all(t).then(n);e.p|=4;t.length=0}}};const fe=(e,t,n,s)=>{try{t=t.render();{e.p&=~16}{e.p|=2}{{{te(e,t,s)}}}}catch(t){Ue(t,e.$hostElement$)}return null};const re=e=>{const t=e.$.S;const n=e.$hostElement$;const s=u("postUpdate",t);const l=e.D;const o=e.j;if(!(e.p&64)){e.p|=64;{de(n)}{ae(l,"componentDidLoad")}s();{e.F(n);if(!o){ue()}}}else{{ae(l,"componentDidUpdate")}s()}{e.M(n)}{if(e.R){e.R();e.R=undefined}if(e.p&512){Xe((()=>se(e,false)))}e.p&=~(4|512)}};const ue=t=>{{de(Ee.documentElement)}Xe((()=>j(We,"appload",{detail:{namespace:e}})))};const ae=(e,t,n)=>{if(e&&e[t]){try{return e[t](n)}catch(e){Ue(e)}}return undefined};const de=e=>e.classList.add("hydrated");const pe=(e,t)=>De(e).U.get(t);const me=(e,t,n,s)=>{const l=De(e);const o=l.$hostElement$;const i=l.U.get(t);const c=l.p;const f=l.D;n=T(n,s.A[t][0]);const r=Number.isNaN(i)&&Number.isNaN(n);const u=n!==i&&!r;if((!(c&8)||i===undefined)&&u){l.U.set(t,n);if(f){if(s.N&&c&128){const e=s.N[t];if(e){e.map((e=>{try{f[e](n,i,t)}catch(e){Ue(e,o)}}))}}if((c&(2|16))===2){se(l,false)}}}};const he=(e,t,n)=>{var s;if(t.A){if(e.watchers){t.N=e.watchers}const l=Object.entries(t.A);const o=e.prototype;l.map((([e,[s]])=>{if(s&31||n&2&&s&32){Object.defineProperty(o,e,{get(){return pe(this,e)},set(n){me(this,e,n,t)},configurable:true,enumerable:true})}else if(n&1&&s&64){Object.defineProperty(o,e,{value(...t){const n=De(this);return n.P.then((()=>n.D[e](...t)))}})}}));if(n&1){const n=new Map;o.attributeChangedCallback=function(e,s,l){ze.jmp((()=>{const i=n.get(e);if(this.hasOwnProperty(i)){l=this[i];delete this[i]}else if(o.hasOwnProperty(i)&&typeof this[i]==="number"&&this[i]==l){return}else if(i==null){const n=De(this);const o=n===null||n===void 0?void 0:n.p;if(!(o&8)&&o&128&&l!==s){const o=n.D;const i=t.N[e];i===null||i===void 0?void 0:i.forEach((t=>{if(o[t]!=null){o[t].call(o,l,s,e)}}))}return}this[i]=l===null&&typeof this[i]==="boolean"?false:l}))};e.observedAttributes=Array.from(new Set([...Object.keys((s=t.N)!==null&&s!==void 0?s:{}),...l.filter((([e,t])=>t[0]&15)).map((([e,s])=>{const l=s[1]||e;n.set(l,e);if(s[0]&512){t.L.push([e,l])}return l}))]))}}return e};const ve=async(e,t,n,s)=>{let l;if((t.p&32)===0){t.p|=32;{l=Ne(n);if(l.then){const e=a();l=await l;e()}if(!l.isProxied){{n.N=l.watchers}he(l,n,2);l.isProxied=true}const e=u("createInstance",n.S);{t.p|=8}try{new l(t)}catch(e){Ue(e)}{t.p&=~8}{t.p|=128}e()}if(l.style){let e=l.style;const t=U(n);if(!Pe.has(t)){const s=u("registerStyles",n.S);O(t,e,!!(n.p&1));s()}}}const o=t.j;const i=()=>se(t,true);if(o&&o["s-rc"]){o["s-rc"].push(i)}else{i()}};const ye=e=>{};const be=e=>{if((ze.p&1)===0){const t=De(e);const n=t.$;const s=u("connectedCallback",n.S);if(!(t.p&1)){t.p|=1;{if(n.p&(4|8)){$e(e)}}{let n=e;while(n=n.parentNode||n.host){if(n["s-p"]){ne(t,t.j=n);break}}}if(n.A){Object.entries(n.A).map((([t,[n]])=>{if(n&31&&e.hasOwnProperty(t)){const n=e[t];delete e[t];e[t]=n}}))}{ve(e,t,n)}}else{Ce(e,t,n.W);if(t===null||t===void 0?void 0:t.D);else if(t===null||t===void 0?void 0:t.B){t.B.then((()=>ye()))}}s()}};const $e=e=>{const t=e["s-cr"]=Ee.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};const we=e=>{};const ge=async e=>{if((ze.p&1)===0){const t=De(e);{if(t.H){t.H.map((e=>e()));t.H=undefined}}if(t===null||t===void 0?void 0:t.D);else if(t===null||t===void 0?void 0:t.B){t.B.then((()=>we()))}}};const Se=(e,t={})=>{var n;const s=u();const l=[];const o=t.exclude||[];const i=We.customElements;const c=Ee.head;const f=c.querySelector("meta[charset]");const r=Ee.createElement("style");const a=[];let m;let h=true;Object.assign(ze,t);ze.q=new URL(t.resourcesUrl||"./",Ee.baseURI).href;let v=false;e.map((e=>{e[1].map((t=>{var n;const s={p:t[0],S:t[1],A:t[2],W:t[3]};if(s.p&4){v=true}{s.A=t[2]}{s.W=t[3]}{s.L=[]}{s.N=(n=t[4])!==null&&n!==void 0?n:{}}const c=s.S;const f=class extends HTMLElement{constructor(e){super(e);e=this;Fe(e,s);if(s.p&1){{{e.attachShadow({mode:"open"})}}}}connectedCallback(){if(m){clearTimeout(m);m=null}if(h){a.push(this)}else{ze.jmp((()=>be(this)))}}disconnectedCallback(){ze.jmp((()=>ge(this)))}componentOnReady(){return De(this).B}};s.I=e[0];if(!o.includes(c)&&!i.get(c)){l.push(c);i.define(c,he(f,s,1))}}))}));if(v){r.innerHTML+=p}{r.innerHTML+=l+d}if(r.innerHTML.length){r.setAttribute("data-styles","");c.insertBefore(r,f?f.nextSibling:c.firstChild);const e=(n=ze.v)!==null&&n!==void 0?n:b(Ee);if(e!=null){r.setAttribute("nonce",e)}}h=false;if(a.length){a.map((e=>e.connectedCallback()))}else{{ze.jmp((()=>m=setTimeout(ue,30)))}}s()};const ke=(e,t)=>t;const Ce=(e,t,n,s)=>{if(n){n.map((([n,s,l])=>{const o=Te(e,n);const i=xe(t,l);const c=Le(n);ze.ael(o,s,i,c);(t.H=t.H||[]).push((()=>ze.rel(o,s,i,c)))}))}};const xe=(e,t)=>n=>{try{{if(e.p&256){e.D[t](n)}else{(e.O=e.O||[]).push([t,n])}}}catch(e){Ue(e)}};const Te=(e,t)=>{if(t&4)return Ee;if(t&16)return Ee.body;return e};const Le=e=>(e&2)!==0;const Re=e=>ze.v=e;const je=new WeakMap;const De=e=>je.get(e);const Oe=(e,t)=>je.set(t.D=e,t);const Fe=(e,t)=>{const n={p:0,$hostElement$:e,$:t,U:new Map};{n.P=new Promise((e=>n.M=e))}{n.B=new Promise((e=>n.F=e));e["s-p"]=[];e["s-rc"]=[]}Ce(e,n,t.W);return je.set(e,n)};const Me=(e,t)=>t in e;const Ue=(e,t)=>(0,console.error)(e,t);const Ae=new Map;const Ne=(e,t,n)=>{const s=e.S.replace(/-/g,"_");const l=e.I;const o=Ae.get(l);if(o){return o[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${l}.entry.js${""}`).then((e=>{{Ae.set(l,e)}return e[s]}),Ue)};const Pe=new Map;const We=typeof window!=="undefined"?window:{};const Ee=We.document||{head:{}};const ze={p:0,q:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s),ce:(e,t)=>new CustomEvent(e,t)};const Be=e=>Promise.resolve(e);const He=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false})();const Qe=[];const qe=[];const Ie=(e,t)=>n=>{e.push(n);if(!r){r=true;if(t&&ze.p&4){Xe(Ve)}else{ze.raf(Ve)}}};const Ke=e=>{for(let t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){Ue(e)}}e.length=0};const Ve=()=>{Ke(Qe);{Ke(qe);if(r=Qe.length>0){ze.raf(Ve)}}};const Xe=e=>Be().then(e);const _e=Ie(qe,true);export{ke as F,g as H,Se as b,R as c,L as g,$ as h,Be as p,Oe as r,Re as s};
//# sourceMappingURL=p-bdd8e945.js.map