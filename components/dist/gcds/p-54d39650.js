let e,t,n,l=!1,o=!1,s=!1,i=!1;const c="http://www.w3.org/1999/xlink",r={},f=e=>"object"==(e=typeof e)||"function"===e;function u(e){var t,n,l;return null!==(l=null===(n=null===(t=e.head)||void 0===t?void 0:t.querySelector('meta[name="csp-nonce"]'))||void 0===n?void 0:n.getAttribute("content"))&&void 0!==l?l:void 0}const a=(e,t,...n)=>{let l=null,o=null,s=null,i=!1,c=!1;const r=[],u=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?u(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!f(l))&&(l+=""),i&&c?r[r.length-1].t+=l:r.push(i?d(null,l):l),c=i)};if(u(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,r,p);const a=d(e,null);return a.l=t,r.length>0&&(a.o=r),a.i=o,a.u=s,a},d=(e,t)=>({$:0,p:e,t,m:null,o:null,l:null,i:null,u:null}),$={},p={forEach:(e,t)=>e.map(m).forEach(t),map:(e,t)=>e.map(m).map(t).map(y)},m=e=>({vattrs:e.l,vchildren:e.o,vkey:e.i,vname:e.u,vtag:e.p,vtext:e.t}),y=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),a(e.vtag,t,...e.vchildren||[])}const t=d(e.vtag,e.vtext);return t.l=e.vattrs,t.o=e.vchildren,t.i=e.vkey,t.u=e.vname,t},h=e=>oe(e).h,b=(e,t,n)=>{const l=h(e);return{emit:e=>v(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},v=(e,t,n)=>{const l=pe.ce(t,n);return e.dispatchEvent(l),l},w=new WeakMap,g=e=>"sc-"+e.v,k=(e,t,n,l,o,s)=>{if(n!==l){let i=ce(e,t),r=t.toLowerCase();if("class"===t){const t=e.classList,o=j(n),s=j(l);t.remove(...o.filter((e=>e&&!s.includes(e)))),t.add(...s.filter((e=>e&&!o.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const u=f(l);if((i||u&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{const o=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(e){}let a=!1;r!==(r=r.replace(/^xlink\:?/,""))&&(t=r,a=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(a?e.removeAttributeNS(c,t):e.removeAttribute(t)):(!i||4&s||o)&&!u&&(l=!0===l?"":l,a?e.setAttributeNS(c,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):ce(de,r)?r.slice(2):r[2]+t.slice(3),n&&pe.rel(e,t,n,!1),l&&pe.ael(e,t,l,!1)}},S=/\s/,j=e=>e?e.split(S):[],M=(e,t,n,l)=>{const o=11===t.m.nodeType&&t.m.host?t.m.host:t.m,s=e&&e.l||r,i=t.l||r;for(l in s)l in i||k(o,l,s[l],void 0,n,t.$);for(l in i)k(o,l,s[l],i[l],n,t.$)},O=(o,i,c,r)=>{const f=i.o[c];let u,a,d,$=0;if(l||(s=!0,"slot"===f.p&&(e&&r.classList.add(e+"-s"),f.$|=f.o?2:1)),null!==f.t)u=f.m=$e.createTextNode(f.t);else if(1&f.$)u=f.m=$e.createTextNode("");else if(u=f.m=$e.createElement(2&f.$?"slot-fb":f.p),M(null,f,!1),null!=e&&u["s-si"]!==e&&u.classList.add(u["s-si"]=e),f.o)for($=0;$<f.o.length;++$)a=O(o,f,$,u),a&&u.appendChild(a);return u["s-hn"]=n,3&f.$&&(u["s-sr"]=!0,u["s-cr"]=t,u["s-sn"]=f.u||"",d=o&&o.o&&o.o[c],d&&d.p===f.p&&o.m&&x(o.m,!1)),u},x=(e,t)=>{pe.$|=1;const l=e.childNodes;for(let e=l.length-1;e>=0;e--){const o=l[e];o["s-hn"]!==n&&o["s-ol"]&&(E(o).insertBefore(o,T(o)),o["s-ol"].remove(),o["s-ol"]=void 0,s=!0),t&&x(o,t)}pe.$&=-2},C=(e,t,l,o,s,i)=>{let c,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(r.shadowRoot&&r.tagName===n&&(r=r.shadowRoot);s<=i;++s)o[s]&&(c=O(null,l,s,e),c&&(o[s].m=c,r.insertBefore(c,T(t))))},P=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.m,A(l),o=!0,s["s-ol"]?s["s-ol"].remove():x(s,!0),s.remove())},R=(e,t)=>e.p===t.p&&("slot"===e.p?e.u===t.u:e.i===t.i),T=e=>e&&e["s-ol"]||e,E=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,L=(e,t)=>{const n=t.m=e.m,l=e.o,o=t.o,s=t.t;let i;null===s?("slot"===t.p||M(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s,i=0,c=0,r=0,f=0,u=t.length-1,a=t[0],d=t[u],$=l.length-1,p=l[0],m=l[$];for(;i<=u&&c<=$;)if(null==a)a=t[++i];else if(null==d)d=t[--u];else if(null==p)p=l[++c];else if(null==m)m=l[--$];else if(R(a,p))L(a,p),a=t[++i],p=l[++c];else if(R(d,m))L(d,m),d=t[--u],m=l[--$];else if(R(a,m))"slot"!==a.p&&"slot"!==m.p||x(a.m.parentNode,!1),L(a,m),e.insertBefore(a.m,d.m.nextSibling),a=t[++i],m=l[--$];else if(R(d,p))"slot"!==a.p&&"slot"!==m.p||x(d.m.parentNode,!1),L(d,p),e.insertBefore(d.m,a.m),d=t[--u],p=l[++c];else{for(r=-1,f=i;f<=u;++f)if(t[f]&&null!==t[f].i&&t[f].i===p.i){r=f;break}r>=0?(s=t[r],s.p!==p.p?o=O(t&&t[c],n,r,e):(L(s,p),t[r]=void 0,o=s.m),p=l[++c]):(o=O(t&&t[c],n,c,e),p=l[++c]),o&&E(a.m).insertBefore(o,T(a.m))}i>u?C(e,null==l[$+1]?null:l[$+1].m,n,l,c,$):c>$&&P(t,i,u)})(n,l,t,o):null!==o?(null!==e.t&&(n.textContent=""),C(n,null,t,o,0,o.length-1)):null!==l&&P(l,0,l.length-1)):(i=n["s-cr"])?i.parentNode.textContent=s:e.t!==s&&(n.data=s)},N=e=>{const t=e.childNodes;let n,l,o,s,i,c;for(l=0,o=t.length;l<o;l++)if(n=t[l],1===n.nodeType){if(n["s-sr"])for(i=n["s-sn"],n.hidden=!1,s=0;s<o;s++)if(c=t[s].nodeType,t[s]["s-hn"]!==n["s-hn"]||""!==i){if(1===c&&i===t[s].getAttribute("slot")){n.hidden=!0;break}}else if(1===c||3===c&&""!==t[s].textContent.trim()){n.hidden=!0;break}N(n)}},U=[],W=e=>{let t,n,l,s,i,c,r=0;const f=e.childNodes,u=f.length;for(;r<u;r++){if(t=f[r],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(l=n.parentNode.childNodes,s=t["s-sn"],c=l.length-1;c>=0;c--)n=l[c],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(F(n,s)?(i=U.find((e=>e.g===n)),o=!0,n["s-sn"]=n["s-sn"]||s,i?i.k=t:U.push({k:t,g:n}),n["s-sr"]&&U.map((e=>{F(e.g,n["s-sn"])&&(i=U.find((e=>e.g===n)),i&&!e.k&&(e.k=i.k))}))):U.some((e=>e.g===n))||U.push({g:n}));1===t.nodeType&&W(t)}},F=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,A=e=>{e.l&&e.l.ref&&e.l.ref(null),e.o&&e.o.map(A)},D=(e,t)=>{t&&!e.S&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.S=t)))},H=(e,t)=>{if(e.$|=16,!(4&e.$))return D(e,e.j),Se((()=>q(e,t)));e.$|=512},q=(e,t)=>{const n=e.M;let l;return t?(e.$|=256,e.O&&(e.O.map((([e,t])=>G(n,e,t))),e.O=null),l=G(n,"componentWillLoad")):l=G(n,"componentWillUpdate"),I(l,(()=>V(e,n,t)))},V=async(e,t,n)=>{const l=e.h,o=l["s-rc"];n&&(e=>{const t=e.C,n=e.h,l=t.$,o=((e,t)=>{var n;let l=g(t);const o=ae.get(l);if(e=11===e.nodeType?e:$e,o)if("string"==typeof o){let t,s=w.get(e=e.head||e);if(s||w.set(e,s=new Set),!s.has(l)){{t=$e.createElement("style"),t.innerHTML=o;const l=null!==(n=pe.P)&&void 0!==n?n:u($e);null!=l&&t.setAttribute("nonce",l),e.insertBefore(t,e.querySelector("link"))}s&&s.add(l)}}else e.adoptedStyleSheets.includes(o)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]);return l})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"),2&l&&n.classList.add(o+"-s"))})(e);_(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>z(e);0===t.length?n():(Promise.all(t).then(n),e.$|=4,t.length=0)}},_=(i,c)=>{try{c=c.render(),i.$&=-17,i.$|=2,((i,c)=>{const r=i.h,f=i.C,u=i.R||d(null,null),p=(e=>e&&e.p===$)(c)?c:a(null,null,c);if(n=r.tagName,f.T&&(p.l=p.l||{},f.T.map((([e,t])=>p.l[t]=r[e]))),p.p=null,p.$|=4,i.R=p,p.m=u.m=r.shadowRoot||r,e=r["s-sc"],t=r["s-cr"],l=0!=(1&f.$),o=!1,L(u,p),pe.$|=1,s){let e,t,n,l,o,s;W(p.m);let i=0;for(;i<U.length;i++)e=U[i],t=e.g,t["s-ol"]||(n=$e.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<U.length;i++)if(e=U[i],t=e.g,e.k){for(l=e.k.parentNode,o=e.k.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}o&&N(p.m),pe.$&=-2,U.length=0})(i,c)}catch(e){re(e,i.h)}return null},z=e=>{const t=e.h,n=e.M,l=e.j;64&e.$?G(n,"componentDidUpdate"):(e.$|=64,J(t),G(n,"componentDidLoad"),e.L(t),l||B()),e.N(t),e.S&&(e.S(),e.S=void 0),512&e.$&&ke((()=>H(e,!1))),e.$&=-517},B=()=>{J($e.documentElement),ke((()=>v(de,"appload",{detail:{namespace:"gcds"}})))},G=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){re(e)}},I=(e,t)=>e&&e.then?e.then(t):t(),J=e=>e.classList.add("hydrated"),K=(e,t,n)=>{if(t.U){e.watchers&&(t.W=e.watchers);const l=Object.entries(t.U),o=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return((e,t)=>oe(this).F.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=oe(e),s=o.h,i=o.F.get(t),c=o.$,r=o.M;if(n=((e,t)=>null==e||f(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.U[t][0]),(!(8&c)||void 0===i)&&n!==i&&(!Number.isNaN(i)||!Number.isNaN(n))&&(o.F.set(t,n),r)){if(l.W&&128&c){const e=l.W[t];e&&e.map((e=>{try{r[e](n,i,t)}catch(e){re(e,s)}}))}2==(18&c)&&H(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=oe(this);return n.A.then((()=>n.M[e](...t)))}})})),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){pe.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(o.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.T.push([e,o]),o}))}}return e},Q=(e,t={})=>{var n;const l=[],o=t.exclude||[],s=de.customElements,i=$e.head,c=i.querySelector("meta[charset]"),r=$e.createElement("style"),f=[];let a,d=!0;Object.assign(pe,t),pe.D=new URL(t.resourcesUrl||"./",$e.baseURI).href,e.map((e=>{e[1].map((t=>{const n={$:t[0],v:t[1],U:t[2],H:t[3]};n.U=t[2],n.H=t[3],n.T=[],n.W={};const i=n.v,c=class extends HTMLElement{constructor(e){super(e),ie(e=this,n),1&n.$&&e.attachShadow({mode:"open"})}connectedCallback(){a&&(clearTimeout(a),a=null),d?f.push(this):pe.jmp((()=>(e=>{if(0==(1&pe.$)){const t=oe(e),n=t.C,l=()=>{};if(1&t.$)Y(e,t,n.H);else{t.$|=1,12&n.$&&(e=>{const t=e["s-cr"]=$e.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){D(t,t.j=n);break}}n.U&&Object.entries(n.U).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,o)=>{if(0==(32&t.$)){{if(t.$|=32,(o=ue(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.W=o.watchers,K(o,n,2),o.isProxied=!0);const e=()=>{};t.$|=8;try{new o(t)}catch(e){re(e)}t.$&=-9,t.$|=128,e()}if(o.style){let e=o.style;const t=g(n);if(!ae.has(t)){const l=()=>{};((e,t,n)=>{let l=ae.get(e);ye&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=t:l.replaceSync(t)):l=t,ae.set(e,l)})(t,e,!!(1&n.$)),l()}}}const s=t.j,i=()=>H(t,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(0,t,n)}l()}})(this)))}disconnectedCallback(){pe.jmp((()=>(()=>{if(0==(1&pe.$)){const e=oe(this);e.q&&(e.q.map((e=>e())),e.q=void 0)}})()))}componentOnReady(){return oe(this).V}};n._=e[0],o.includes(i)||s.get(i)||(l.push(i),s.define(i,K(c,n,1)))}))}));{r.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles","");const e=null!==(n=pe.P)&&void 0!==n?n:u($e);null!=e&&r.setAttribute("nonce",e),i.insertBefore(r,c?c.nextSibling:i.firstChild)}d=!1,f.length?f.map((e=>e.connectedCallback())):pe.jmp((()=>a=setTimeout(B,30)))},X=(e,t)=>t,Y=(e,t,n)=>{n&&n.map((([n,l,o])=>{const s=ee(e,n),i=Z(t,o),c=te(n);pe.ael(s,l,i,c),(t.q=t.q||[]).push((()=>pe.rel(s,l,i,c)))}))},Z=(e,t)=>n=>{try{256&e.$?e.M[t](n):(e.O=e.O||[]).push([t,n])}catch(e){re(e)}},ee=(e,t)=>4&t?$e:16&t?$e.body:e,te=e=>0!=(2&e),ne=e=>pe.P=e,le=new WeakMap,oe=e=>le.get(e),se=(e,t)=>le.set(t.M=e,t),ie=(e,t)=>{const n={$:0,h:e,C:t,F:new Map};return n.A=new Promise((e=>n.N=e)),n.V=new Promise((e=>n.L=e)),e["s-p"]=[],e["s-rc"]=[],Y(e,n,t.H),le.set(e,n)},ce=(e,t)=>t in e,re=(e,t)=>(0,console.error)(e,t),fe=new Map,ue=e=>{const t=e.v.replace(/-/g,"_"),n=e._,l=fe.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(fe.set(n,e),e[t])),re)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},ae=new Map,de="undefined"!=typeof window?window:{},$e=de.document||{head:{}},pe={$:0,D:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},me=e=>Promise.resolve(e),ye=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),he=[],be=[],ve=(e,t)=>n=>{e.push(n),i||(i=!0,t&&4&pe.$?ke(ge):pe.raf(ge))},we=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){re(e)}e.length=0},ge=()=>{we(he),we(be),(i=he.length>0)&&pe.raf(ge)},ke=e=>me().then(e),Se=ve(be,!0);export{X as F,$ as H,Q as b,b as c,h as g,a as h,me as p,se as r,ne as s}