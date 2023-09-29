import{o as qe,t as be}from"../chunks/index.6840f6e3.js";import{w as Re}from"../chunks/index.7d8f7407.js";function at(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function rt(e){return e.split("%25").map(decodeURI).join("%25")}function ot(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}const it=["href","pathname","search","searchParams","toString","toJSON"];function st(e,n){const s=new URL(e);for(const i of it)Object.defineProperty(s,i,{get(){return n(),e[i]},enumerable:!0,configurable:!0});return lt(s),s}function lt(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const ct="/__data.json";function ft(e){return e.replace(/\/$/,"")+ct}var ze;const G=((ze=globalThis.__sveltekit_1mdwa7u)==null?void 0:ze.base)??"";var We;const ut=((We=globalThis.__sveltekit_1mdwa7u)==null?void 0:We.assets)??G,dt="1688236059751",Ye="sveltekit:snapshot",Xe="sveltekit:scroll",V="sveltekit:index",de={tap:1,hover:2,viewport:3,eager:4,off:-1};function Fe(e){let n=e.baseURI;if(!n){const s=e.getElementsByTagName("base");n=s.length?s[0].href:e.URL}return n}function ee(){return{x:pageXOffset,y:pageYOffset}}function W(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Me={...de,"":de.hover};function Ze(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Ge(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ze(e)}}function ve(e,n){let s;try{s=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const i=e instanceof SVGAElement?e.target.baseVal:e.target,d=!s||!!i||ue(s,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),c=(s==null?void 0:s.origin)===location.origin&&e.hasAttribute("download");return{url:s,external:d,target:i,download:c}}function fe(e){let n=null,s=null,i=null,d=null,c=null,h=null,l=e;for(;l&&l!==document.documentElement;)i===null&&(i=W(l,"preload-code")),d===null&&(d=W(l,"preload-data")),n===null&&(n=W(l,"keepfocus")),s===null&&(s=W(l,"noscroll")),c===null&&(c=W(l,"reload")),h===null&&(h=W(l,"replacestate")),l=Ze(l);return{preload_code:Me[i??"off"],preload_data:Me[d??"off"],keep_focus:n==="off"?!1:n===""?!0:null,noscroll:s==="off"?!1:s===""?!0:null,reload:c==="off"?!1:c===""?!0:null,replace_state:h==="off"?!1:h===""?!0:null}}function He(e){const n=Re(e);let s=!0;function i(){s=!0,n.update(h=>h)}function d(h){s=!1,n.set(h)}function c(h){let l;return n.subscribe(g=>{(l===void 0||s&&g!==l)&&h(l=g)})}return{notify:i,set:d,subscribe:c}}function pt(){const{set:e,subscribe:n}=Re(!1);let s;async function i(){clearTimeout(s);try{const d=await fetch(`${ut}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!d.ok)return!1;const h=(await d.json()).version!==dt;return h&&(e(!0),clearTimeout(s)),h}catch{return!1}}return{subscribe:n,check:i}}function ue(e,n){return e.origin!==location.origin||!e.pathname.startsWith(n)}function Qe(e){try{return JSON.parse(sessionStorage[e])}catch{}}function Be(e,n){const s=JSON.stringify(n);try{sessionStorage[e]=s}catch{}}function ht(...e){let n=5381;for(const s of e)if(typeof s=="string"){let i=s.length;for(;i;)n=n*33^s.charCodeAt(--i)}else if(ArrayBuffer.isView(s)){const i=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);let d=i.length;for(;d;)n=n*33^i[--d]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}const pe=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&ne.delete(Ae(e)),pe(e,n));const ne=new Map;function gt(e,n){const s=Ae(e,n),i=document.querySelector(s);if(i!=null&&i.textContent){const{body:d,...c}=JSON.parse(i.textContent),h=i.getAttribute("data-ttl");return h&&ne.set(s,{body:d,init:c,ttl:1e3*Number(h)}),Promise.resolve(new Response(d,c))}return pe(e,n)}function mt(e,n,s){if(ne.size>0){const i=Ae(e,s),d=ne.get(i);if(d){if(performance.now()<d.ttl&&["default","force-cache","only-if-cached",void 0].includes(s==null?void 0:s.cache))return new Response(d.body,d.init);ne.delete(i)}}return pe(n,s)}function Ae(e,n){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const d=[];n.headers&&d.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&d.push(n.body),i+=`[data-hash="${ht(...d)}"]`}return i}const yt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function _t(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${bt(e).map(i=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(d)return n.push({name:d[1],matcher:d[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const c=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(c)return n.push({name:c[1],matcher:c[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const h=i.split(/\[(.+?)\](?!\])/);return"/"+h.map((g,b)=>{if(b%2){if(g.startsWith("x+"))return Ee(String.fromCharCode(parseInt(g.slice(2),16)));if(g.startsWith("u+"))return Ee(String.fromCharCode(...g.slice(2).split("-").map(U=>parseInt(U,16))));const p=yt.exec(g);if(!p)throw new Error(`Invalid param: ${g}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,C,P,S,N]=p;return n.push({name:S,matcher:N,optional:!!C,rest:!!P,chained:P?b===1&&h[0]==="":!1}),P?"(.*?)":C?"([^/]*)?":"([^/]+?)"}return Ee(g)}).join("")}).join("")}/?$`),params:n}}function wt(e){return!/^\([^)]+\)$/.test(e)}function bt(e){return e.slice(1).split("/").filter(wt)}function vt(e,n,s){const i={},d=e.slice(1);let c=0;for(let h=0;h<n.length;h+=1){const l=n[h],g=d[h-c];if(l.chained&&l.rest&&c){i[l.name]=d.slice(h-c,h+1).filter(b=>b).join("/"),c=0;continue}if(g===void 0){l.rest&&(i[l.name]="");continue}if(!l.matcher||s[l.matcher](g)){i[l.name]=g;const b=n[h+1],p=d[h+1];b&&!b.rest&&b.optional&&p&&(c=0);continue}if(l.optional&&l.chained){c++;continue}return}if(!c)return i}function Ee(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Et({nodes:e,server_loads:n,dictionary:s,matchers:i}){const d=new Set(n);return Object.entries(s).map(([l,[g,b,p]])=>{const{pattern:C,params:P}=_t(l),S={id:l,exec:N=>{const U=C.exec(N);if(U)return vt(U,P,i)},errors:[1,...p||[]].map(N=>e[N]),layouts:[0,...b||[]].map(h),leaf:c(g)};return S.errors.length=S.layouts.length=Math.max(S.errors.length,S.layouts.length),S});function c(l){const g=l<0;return g&&(l=~l),[g,e[l]]}function h(l){return l===void 0?l:[d.has(l),e[l]]}}let te=class{constructor(n,s){this.status=n,typeof s=="string"?this.body={message:s}:s?this.body=s:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}},Je=class{constructor(n,s){this.status=n,this.location=s}};function kt(e){e.client}const M={url:He({}),page:He({}),navigating:Re(null),updated:pt()};async function St(e){var n;for(const s in e)if(typeof((n=e[s])==null?void 0:n.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(e).map(async([i,d])=>[i,await d])));return e}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Rt=-1,At=-2,Lt=-3,Ot=-4,It=-5,Ut=-6;function Tt(e,n){if(typeof e=="number")return d(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const s=e,i=Array(s.length);function d(c,h=!1){if(c===Rt)return;if(c===Lt)return NaN;if(c===Ot)return 1/0;if(c===It)return-1/0;if(c===Ut)return-0;if(h)throw new Error("Invalid input");if(c in i)return i[c];const l=s[c];if(!l||typeof l!="object")i[c]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const g=l[0],b=n==null?void 0:n[g];if(b)return i[c]=b(d(l[1]));switch(g){case"Date":i[c]=new Date(l[1]);break;case"Set":const p=new Set;i[c]=p;for(let S=1;S<l.length;S+=1)p.add(d(l[S]));break;case"Map":const C=new Map;i[c]=C;for(let S=1;S<l.length;S+=2)C.set(d(l[S]),d(l[S+1]));break;case"RegExp":i[c]=new RegExp(l[1],l[2]);break;case"Object":i[c]=Object(l[1]);break;case"BigInt":i[c]=BigInt(l[1]);break;case"null":const P=Object.create(null);i[c]=P;for(let S=1;S<l.length;S+=2)P[l[S]]=d(l[S+1]);break;default:throw new Error(`Unknown type ${g}`)}}else{const g=new Array(l.length);i[c]=g;for(let b=0;b<l.length;b+=1){const p=l[b];p!==At&&(g[b]=d(p))}}else{const g={};i[c]=g;for(const b in l){const p=l[b];g[b]=d(p)}}return i[c]}return d(0)}const et=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...et];const Pt=new Set([...et,"actions"]);[...Pt];function Nt(e){return e.filter(n=>n!=null)}const xt="x-sveltekit-invalidated",J=Qe(Xe)??{},Q=Qe(Ye)??{};function ke(e){J[e]=ee()}function jt(e,n){var Ce;const s=Et(e),i=e.nodes[0],d=e.nodes[1];i(),d();const c=document.documentElement,h=[],l=[];let g=null;const b={before_navigate:[],after_navigate:[]};let p={branch:[],error:null,url:null},C=!1,P=!1,S=!0,N=!1,U=!1,K=!1,H=!1,q,j=(Ce=history.state)==null?void 0:Ce[V];j||(j=Date.now(),history.replaceState({...history.state,[V]:j},"",location.href));const he=J[j];he&&(history.scrollRestoration="manual",scrollTo(he.x,he.y));let F,ae,re;async function Le(){re=re||Promise.resolve(),await re,re=null;const t=new URL(location.href),a=X(t,!0);g=null;const o=ae={},r=a&&await ye(a);if(o===ae&&r){if(r.type==="redirect")return oe(new URL(r.location,t).href,{},[t.pathname],o);r.props.page!==void 0&&(F=r.props.page),q.$set(r.props)}}function Oe(t){l.some(a=>a==null?void 0:a.snapshot)&&(Q[t]=l.map(a=>{var o;return(o=a==null?void 0:a.snapshot)==null?void 0:o.capture()}))}function Ie(t){var a;(a=Q[t])==null||a.forEach((o,r)=>{var f,u;(u=(f=l[r])==null?void 0:f.snapshot)==null||u.restore(o)})}function Ue(){ke(j),Be(Xe,J),Oe(j),Be(Ye,Q)}async function oe(t,{noScroll:a=!1,replaceState:o=!1,keepFocus:r=!1,state:f={},invalidateAll:u=!1},y,_){return typeof t=="string"&&(t=new URL(t,Fe(document))),ce({url:t,scroll:a?ee():null,keepfocus:r,redirect_chain:y,details:{state:f,replaceState:o},nav_token:_,accepted:()=>{u&&(H=!0)},blocked:()=>{},type:"goto"})}async function Te(t){return g={id:t.id,promise:ye(t).then(a=>(a.type==="loaded"&&a.state.error&&(g=null),a))},g.promise}async function ie(...t){const o=s.filter(r=>t.some(f=>r.exec(f))).map(r=>Promise.all([...r.layouts,r.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(o)}function Pe(t){var r;p=t.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),F=t.props.page,q=new e.root({target:n,props:{...t.props,stores:M,components:l},hydrate:!0}),Ie(j);const o={from:null,to:{params:p.params,route:{id:((r=p.route)==null?void 0:r.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};b.after_navigate.forEach(f=>f(o)),P=!0}async function Y({url:t,params:a,branch:o,status:r,error:f,route:u,form:y}){let _="never";for(const v of o)(v==null?void 0:v.slash)!==void 0&&(_=v.slash);t.pathname=at(t.pathname,_),t.search=t.search;const E={type:"loaded",state:{url:t,params:a,branch:o,error:f,route:u},props:{constructors:Nt(o).map(v=>v.node.component)}};y!==void 0&&(E.props.form=y);let w={},R=!F,L=0;for(let v=0;v<Math.max(o.length,p.branch.length);v+=1){const m=o[v],T=p.branch[v];(m==null?void 0:m.data)!==(T==null?void 0:T.data)&&(R=!0),m&&(w={...w,...m.data},R&&(E.props[`data_${L}`]=w),L+=1)}return(!p.url||t.href!==p.url.href||p.error!==f||y!==void 0&&y!==F.form||R)&&(E.props.page={error:f,params:a,route:{id:(u==null?void 0:u.id)??null},status:r,url:new URL(t),form:y??null,data:R?w:F.data}),E}async function ge({loader:t,parent:a,url:o,params:r,route:f,server_data_node:u}){var w,R,L;let y=null;const _={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await t();if((w=E.universal)!=null&&w.load){let I=function(...m){for(const T of m){const{href:x}=new URL(T,o);_.dependencies.add(x)}};const v={route:{get id(){return _.route=!0,f.id}},params:new Proxy(r,{get:(m,T)=>(_.params.add(T),m[T])}),data:(u==null?void 0:u.data)??null,url:st(o,()=>{_.url=!0}),async fetch(m,T){let x;m instanceof Request?(x=m.url,T={body:m.method==="GET"||m.method==="HEAD"?void 0:await m.blob(),cache:m.cache,credentials:m.credentials,headers:m.headers,integrity:m.integrity,keepalive:m.keepalive,method:m.method,mode:m.mode,redirect:m.redirect,referrer:m.referrer,referrerPolicy:m.referrerPolicy,signal:m.signal,...T}):x=m;const D=new URL(x,o);return I(D.href),D.origin===o.origin&&(x=D.href.slice(o.origin.length)),P?mt(x,D.href,T):gt(x,T)},setHeaders:()=>{},depends:I,parent(){return _.parent=!0,a()}};y=await E.universal.load.call(null,v)??null,y=y?await St(y):null}return{node:E,loader:t,server:u,universal:(R=E.universal)!=null&&R.load?{type:"data",data:y,uses:_}:null,data:y??(u==null?void 0:u.data)??null,slash:((L=E.universal)==null?void 0:L.trailingSlash)??(u==null?void 0:u.slash)}}function Ne(t,a,o,r,f){if(H)return!0;if(!r)return!1;if(r.parent&&t||r.route&&a||r.url&&o)return!0;for(const u of r.params)if(f[u]!==p.params[u])return!0;for(const u of r.dependencies)if(h.some(y=>y(new URL(u))))return!0;return!1}function me(t,a){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?a??null:null}async function ye({id:t,invalidating:a,url:o,params:r,route:f}){if((g==null?void 0:g.id)===t)return g.promise;const{errors:u,layouts:y,leaf:_}=f,E=[...y,_];u.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let w=null;const R=p.url?t!==p.url.pathname+p.url.search:!1,L=p.route?f.id!==p.route.id:!1;let I=!1;const v=E.map((k,O)=>{var B;const A=p.branch[O],$=!!(k!=null&&k[0])&&((A==null?void 0:A.loader)!==k[1]||Ne(I,L,R,(B=A.server)==null?void 0:B.uses,r));return $&&(I=!0),$});if(v.some(Boolean)){try{w=await Ke(o,v)}catch(k){return se({status:k instanceof te?k.status:500,error:await Z(k,{url:o,params:r,route:{id:f.id}}),url:o,route:f})}if(w.type==="redirect")return w}const m=w==null?void 0:w.nodes;let T=!1;const x=E.map(async(k,O)=>{var _e;if(!k)return;const A=p.branch[O],$=m==null?void 0:m[O];if((!$||$.type==="skip")&&k[1]===(A==null?void 0:A.loader)&&!Ne(T,L,R,(_e=A.universal)==null?void 0:_e.uses,r))return A;if(T=!0,($==null?void 0:$.type)==="error")throw $;return ge({loader:k[1],url:o,params:r,route:f,parent:async()=>{var Ve;const De={};for(let we=0;we<O;we+=1)Object.assign(De,(Ve=await x[we])==null?void 0:Ve.data);return De},server_data_node:me($===void 0&&k[0]?{type:"skip"}:$??null,k[0]?A==null?void 0:A.server:void 0)})});for(const k of x)k.catch(()=>{});const D=[];for(let k=0;k<E.length;k+=1)if(E[k])try{D.push(await x[k])}catch(O){if(O instanceof Je)return{type:"redirect",location:O.location};let A=500,$;if(m!=null&&m.includes(O))A=O.status??A,$=O.error;else if(O instanceof te)A=O.status,$=O.body;else{if(await M.updated.check())return await z(o);$=await Z(O,{params:r,url:o,route:{id:f.id}})}const B=await xe(k,D,u);return B?await Y({url:o,params:r,branch:D.slice(0,B.idx).concat(B.node),status:A,error:$,route:f}):await $e(o,{id:f.id},$,A)}else D.push(void 0);return await Y({url:o,params:r,branch:D,status:200,error:null,route:f,form:a?void 0:null})}async function xe(t,a,o){for(;t--;)if(o[t]){let r=t;for(;!a[r];)r-=1;try{return{idx:r+1,node:{node:await o[t](),loader:o[t],data:{},server:null,universal:null}}}catch{continue}}}async function se({status:t,error:a,url:o,route:r}){const f={};let u=null;if(e.server_loads[0]===0)try{const w=await Ke(o,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;u=w.nodes[0]??null}catch{(o.origin!==location.origin||o.pathname!==location.pathname||C)&&await z(o)}const _=await ge({loader:i,url:o,params:f,route:r,parent:()=>Promise.resolve({}),server_data_node:me(u)}),E={node:await d(),loader:d,universal:null,server:null,data:null};return await Y({url:o,params:f,branch:[_,E],status:t,error:a,route:null})}function X(t,a){if(ue(t,G))return;const o=le(t);for(const r of s){const f=r.exec(o);if(f)return{id:t.pathname+t.search,invalidating:a,route:r,params:ot(f),url:t}}}function le(t){return rt(t.pathname.slice(G.length)||"/")}function je({url:t,type:a,intent:o,delta:r}){var _,E;let f=!1;const u={from:{params:p.params,route:{id:((_=p.route)==null?void 0:_.id)??null},url:p.url},to:{params:(o==null?void 0:o.params)??null,route:{id:((E=o==null?void 0:o.route)==null?void 0:E.id)??null},url:t},willUnload:!o,type:a};r!==void 0&&(u.delta=r);const y={...u,cancel:()=>{f=!0}};return U||b.before_navigate.forEach(w=>w(y)),f?null:u}async function ce({url:t,scroll:a,keepfocus:o,redirect_chain:r,details:f,type:u,delta:y,nav_token:_={},accepted:E,blocked:w}){var x,D,k;const R=X(t,!1),L=je({url:t,type:u,delta:y,intent:R});if(!L){w();return}const I=j;E(),U=!0,P&&M.navigating.set(L),ae=_;let v=R&&await ye(R);if(!v){if(ue(t,G))return await z(t);v=await $e(t,{id:null},await Z(new Error(`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(R==null?void 0:R.url)||t,ae!==_)return!1;if(v.type==="redirect")if(r.length>10||r.includes(t.pathname))v=await se({status:500,error:await Z(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return oe(new URL(v.location,t).href,{},[...r,t.pathname],_),!1;else((x=v.props.page)==null?void 0:x.status)>=400&&await M.updated.check()&&await z(t);if(h.length=0,H=!1,N=!0,ke(I),Oe(I),(D=v.props.page)!=null&&D.url&&v.props.page.url.pathname!==t.pathname&&(t.pathname=(k=v.props.page)==null?void 0:k.url.pathname),f){const O=f.replaceState?0:1;if(f.state[V]=j+=O,history[f.replaceState?"replaceState":"pushState"](f.state,"",t),!f.replaceState){let A=j+1;for(;Q[A]||J[A];)delete Q[A],delete J[A],A+=1}}g=null,P?(p=v.state,v.props.page&&(v.props.page.url=t),q.$set(v.props)):Pe(v);const{activeElement:m}=document;if(await be(),S){const O=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));a?scrollTo(a.x,a.y):O?O.scrollIntoView():scrollTo(0,0)}const T=document.activeElement!==m&&document.activeElement!==document.body;!o&&!T&&Se(),S=!0,v.props.page&&(F=v.props.page),U=!1,u==="popstate"&&Ie(j),b.after_navigate.forEach(O=>O(L)),M.navigating.set(null),N=!1}async function $e(t,a,o,r){return t.origin===location.origin&&t.pathname===location.pathname&&!C?await se({status:r,error:o,url:t,route:a}):await z(t)}function z(t){return location.href=t.href,new Promise(()=>{})}function nt(){let t;c.addEventListener("mousemove",u=>{const y=u.target;clearTimeout(t),t=setTimeout(()=>{r(y,2)},20)});function a(u){r(u.composedPath()[0],1)}c.addEventListener("mousedown",a),c.addEventListener("touchstart",a,{passive:!0});const o=new IntersectionObserver(u=>{for(const y of u)y.isIntersecting&&(ie(le(new URL(y.target.href))),o.unobserve(y.target))},{threshold:0});function r(u,y){const _=Ge(u,c);if(!_)return;const{url:E,external:w,download:R}=ve(_,G);if(w||R)return;const L=fe(_);if(!L.reload)if(y<=L.preload_data){const I=X(E,!1);I&&Te(I)}else y<=L.preload_code&&ie(le(E))}function f(){o.disconnect();for(const u of c.querySelectorAll("a")){const{url:y,external:_,download:E}=ve(u,G);if(_||E)continue;const w=fe(u);w.reload||(w.preload_code===de.viewport&&o.observe(u),w.preload_code===de.eager&&ie(le(y)))}}b.after_navigate.push(f),f()}function Z(t,a){return t instanceof te?t.body:e.hooks.handleError({error:t,event:a})??{message:a.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:t=>{qe(()=>(b.after_navigate.push(t),()=>{const a=b.after_navigate.indexOf(t);b.after_navigate.splice(a,1)}))},before_navigate:t=>{qe(()=>(b.before_navigate.push(t),()=>{const a=b.before_navigate.indexOf(t);b.before_navigate.splice(a,1)}))},disable_scroll_handling:()=>{(N||!P)&&(S=!1)},goto:(t,a={})=>oe(t,a,[]),invalidate:t=>{if(typeof t=="function")h.push(t);else{const{href:a}=new URL(t,location.href);h.push(o=>o.href===a)}return Le()},invalidate_all:()=>(H=!0,Le()),preload_data:async t=>{const a=new URL(t,Fe(document)),o=X(a,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);await Te(o)},preload_code:ie,apply_action:async t=>{if(t.type==="error"){const a=new URL(location.href),{branch:o,route:r}=p;if(!r)return;const f=await xe(p.branch.length,o,r.errors);if(f){const u=await Y({url:a,params:p.params,branch:o.slice(0,f.idx).concat(f.node),status:t.status??500,error:t.error,route:r});p=u.state,q.$set(u.props),be().then(Se)}}else t.type==="redirect"?oe(t.location,{invalidateAll:!0},[]):(q.$set({form:null,page:{...F,form:t.data,status:t.status}}),await be(),q.$set({form:t.data}),t.type==="success"&&Se())},_start_router:()=>{var t;history.scrollRestoration="manual",addEventListener("beforeunload",a=>{var r;let o=!1;if(Ue(),!U){const f={from:{params:p.params,route:{id:((r=p.route)==null?void 0:r.id)??null},url:p.url},to:null,willUnload:!0,type:"leave",cancel:()=>o=!0};b.before_navigate.forEach(u=>u(f))}o?(a.preventDefault(),a.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ue()}),(t=navigator.connection)!=null&&t.saveData||nt(),c.addEventListener("click",a=>{if(a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const o=Ge(a.composedPath()[0],c);if(!o)return;const{url:r,external:f,target:u,download:y}=ve(o,G);if(!r)return;if(u==="_parent"||u==="_top"){if(window.parent!==window)return}else if(u&&u!=="_self")return;const _=fe(o);if(!(o instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||y)return;if(f||_.reload){je({url:r,type:"link"})?U=!0:a.preventDefault();return}const[w,R]=r.href.split("#");if(R!==void 0&&w===location.href.split("#")[0]){if(K=!0,ke(j),p.url=r,M.page.set({...F,url:r}),M.page.notify(),!_.replace_state)return;K=!1,a.preventDefault()}ce({url:r,scroll:_.noscroll?ee():null,keepfocus:_.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:_.replace_state??r.href===location.href},accepted:()=>a.preventDefault(),blocked:()=>a.preventDefault(),type:"link"})}),c.addEventListener("submit",a=>{if(a.defaultPrevented)return;const o=HTMLFormElement.prototype.cloneNode.call(a.target),r=a.submitter;if(((r==null?void 0:r.formMethod)||o.method)!=="get")return;const u=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||o.action);if(ue(u,G))return;const y=a.target,{keep_focus:_,noscroll:E,reload:w,replace_state:R}=fe(y);if(w)return;a.preventDefault(),a.stopPropagation();const L=new FormData(y),I=r==null?void 0:r.getAttribute("name");I&&L.append(I,(r==null?void 0:r.getAttribute("value"))??""),u.search=new URLSearchParams(L).toString(),ce({url:u,scroll:E?ee():null,keepfocus:_??!1,redirect_chain:[],details:{state:{},replaceState:R??u.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async a=>{var o;if((o=a.state)!=null&&o[V]){if(a.state[V]===j)return;const r=J[a.state[V]];if(p.url.href.split("#")[0]===location.href.split("#")[0]){J[j]=ee(),j=a.state[V],scrollTo(r.x,r.y);return}const f=a.state[V]-j;await ce({url:new URL(location.href),scroll:r,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=a.state[V]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{K&&(K=!1,history.replaceState({...history.state,[V]:++j},"",location.href))});for(const a of document.querySelectorAll("link"))a.rel==="icon"&&(a.href=a.href);addEventListener("pageshow",a=>{a.persisted&&M.navigating.set(null)})},_hydrate:async({status:t=200,error:a,node_ids:o,params:r,route:f,data:u,form:y})=>{C=!0;const _=new URL(location.href);({params:r={},route:f={id:null}}=X(_,!1)||{});let E;try{const w=o.map(async(I,v)=>{const m=u[v];return m!=null&&m.uses&&(m.uses=tt(m.uses)),ge({loader:e.nodes[I],url:_,params:r,route:f,parent:async()=>{const T={};for(let x=0;x<v;x+=1)Object.assign(T,(await w[x]).data);return T},server_data_node:me(m)})}),R=await Promise.all(w),L=s.find(({id:I})=>I===f.id);if(L){const I=L.layouts;for(let v=0;v<I.length;v++)I[v]||R.splice(v,0,void 0)}E=await Y({url:_,params:r,branch:R,status:t,error:a,form:y,route:L??null})}catch(w){if(w instanceof Je){await z(new URL(w.location,location.href));return}E=await se({status:w instanceof te?w.status:500,error:await Z(w,{url:_,params:r,route:f}),url:_,route:f})}Pe(E)}}}async function Ke(e,n){const s=new URL(e);s.pathname=ft(e.pathname),s.searchParams.append(xt,n.map(d=>d?"1":"0").join(""));const i=await pe(s.href);if(!i.ok)throw new te(i.status,await i.json());return new Promise(async d=>{var p;const c=new Map,h=i.body.getReader(),l=new TextDecoder;function g(C){return Tt(C,{Promise:P=>new Promise((S,N)=>{c.set(P,{fulfil:S,reject:N})})})}let b="";for(;;){const{done:C,value:P}=await h.read();if(C&&!b)break;for(b+=!P&&b?`
`:l.decode(P);;){const S=b.indexOf(`
`);if(S===-1)break;const N=JSON.parse(b.slice(0,S));if(b=b.slice(S+1),N.type==="redirect")return d(N);if(N.type==="data")(p=N.nodes)==null||p.forEach(U=>{(U==null?void 0:U.type)==="data"&&(U.uses=tt(U.uses),U.data=g(U.data))}),d(N);else if(N.type==="chunk"){const{id:U,data:K,error:H}=N,q=c.get(U);c.delete(U),H?q.reject(g(H)):q.fulfil(g(K))}}}})}function tt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url)}}function Se(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,s=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),s!==null?n.setAttribute("tabindex",s):n.removeAttribute("tabindex");const i=getSelection();if(i&&i.type!=="None"){const d=[];for(let c=0;c<i.rangeCount;c+=1)d.push(i.getRangeAt(c));setTimeout(()=>{if(i.rangeCount===d.length){for(let c=0;c<i.rangeCount;c+=1){const h=d[c],l=i.getRangeAt(c);if(h.commonAncestorContainer!==l.commonAncestorContainer||h.startContainer!==l.startContainer||h.endContainer!==l.endContainer||h.startOffset!==l.startOffset||h.endOffset!==l.endOffset)return}i.removeAllRanges()}})}}}async function qt(e,n,s){const i=jt(e,n);kt({client:i}),s?await i._hydrate(s):i.goto(location.href,{replaceState:!0}),i._start_router()}export{qt as start};
