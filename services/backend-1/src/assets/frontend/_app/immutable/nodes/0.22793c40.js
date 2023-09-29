import{S as q,i as K,s as R,e as ae,b as z,g as b,v as be,d as _,f as _e,h as g,C as N,D as he,E as v,F as I,G as W,k as w,l as A,m as p,H as fe,I as Ge,J as T,K as Y,L as J,M as Q,N as x,O as Ae,P as Ie,Q as ce,R as Pe,T as H,w as Be,U as Me,a as X,c as Z,V,W as P,q as $,r as ee,n as S,u as se,X as Oe,Y as ne,Z as oe,_ as re,$ as Re,y as U,z as G,A as B,a0 as Ne,B as O,a1 as ve,a2 as Ve,o as qe}from"../chunks/index.98bf2b65.js";import{t as D}from"../chunks/Indicator.svelte_svelte_type_style_lang.97fd6b4f.js";import{a as ke,i as Ke,g as je}from"../chunks/runtime.esm.33f53ff5.js";const We={navigation:{home:"Home",github:"GitHub"}},Ye={home:{"header-1":"Use Golang and SvelteKit in a standalone app!",text:"This open-source repository provides a SvelteKit frontend template that has been specifically adapted for integration with a Golang Fiber API. Using the binary compilation process, the frontend is fully integrated into the API, allowing for a very lightweight installation for server administrators who cannot or do not want to use Docker (due to the virtualization method). Thanks to dynamic routing, the template can be flexibly adapted to different URL structures."}},Je={http:{404:{text:"Page Not Found"}}},Qe={endpoints:{"pokemon-all":"https://www.pokemon.com/us/api/pokedex/kalos"}},Xe={header:We,page:Ye,error:Je,api:Qe},Ze={navigation:{home:"Startseite",github:"GitHub"}},xe={home:{"header-1":"Nutze Golang und SvelteKit in einem Binary!",text:"Dieses OpenSource Repository bietet ein SvelteKit Frontend Template, das speziell für die Integration in eine Golang Fiber API angepasst wurde. Mit dem Binary-Kompilierungsprozess wird das Frontend vollständig in die API integriert, wodurch auch eine sehr leichte Installation für die Serveradministratoren ermöglicht wird, welche kein Docker nutzen können (aufgrund der Virtualisierungsart), oder möchten. Dank des dynamischen Routings kann das Template flexibel auf verschiedene URL-Strukturen angepasst werden."}},$e={http:{404:{text:"Seite Nicht Gefunden"}}},et={endpoints:{"pokemon-all":"https://www.pokemon.com/de/api/pokedex/kalos"}},tt={header:Ze,page:xe,error:$e,api:et};function de(l){let e,t,a,s,r,i;const n=l[14].default,o=W(n,l,l[13],null);let u=[l[8],{class:l[7]},{role:l[6]}],f={};for(let c=0;c<u.length;c+=1)f=v(f,u[c]);return{c(){e=w(l[1]),o&&o.c(),this.h()},l(c){e=A(c,(l[1]||"null").toUpperCase(),{class:!0,role:!0});var d=p(e);o&&o.l(d),d.forEach(g),this.h()},h(){fe(l[1])(e,f)},m(c,d){z(c,e,d),o&&o.m(e,null),l[20](e),s=!0,r||(i=[Ge(t=l[4].call(null,e,l[5])),T(e,"click",l[15]),T(e,"mouseenter",l[16]),T(e,"mouseleave",l[17]),T(e,"focusin",l[18]),T(e,"focusout",l[19])],r=!0)},p(c,d){l=c,o&&o.p&&(!s||d&8192)&&Y(o,n,l,l[13],s?Q(n,l[13],d,null):J(l[13]),null),fe(l[1])(e,f=x(u,[d&256&&l[8],(!s||d&128)&&{class:l[7]},(!s||d&64)&&{role:l[6]}])),t&&Ae(t.update)&&d&32&&t.update.call(null,l[5])},i(c){s||(b(o,c),Ie(()=>{s&&(a||(a=ce(e,l[2],l[3],!0)),a.run(1))}),s=!0)},o(c){_(o,c),a||(a=ce(e,l[2],l[3],!1)),a.run(0),s=!1},d(c){c&&g(e),o&&o.d(c),l[20](null),c&&a&&a.end(),r=!1,Pe(i)}}}function lt(l){let e=l[1],t,a=!1,s,r=l[1]&&de(l);return{c(){r&&r.c(),t=ae()},l(i){r&&r.l(i),t=ae()},m(i,n){r&&r.m(i,n),z(i,t,n),s=!0},p(i,[n]){i[1]?e?R(e,i[1])?(r.d(1),r=de(i),e=i[1],r.c(),a&&(a=!1,b(r)),r.m(t.parentNode,t)):(a&&(a=!1,b(r)),r.p(i,n)):(r=de(i),e=i[1],r.c(),b(r),r.m(t.parentNode,t)):e&&(a=!0,be(),_(r,1,1,()=>{r=null,e=i[1],a=!1}),_e())},i(i){s||(b(r),s=!0)},o(i){_(r),s=!1},d(i){i&&g(t),r&&r.d(i)}}}function at(l,e,t){const a=["tag","color","rounded","border","shadow","transition","params","node","use","options","role"];let s=N(e,a),{$$slots:r={},$$scope:i}=e;const n=()=>({duration:0}),o=()=>{};he("background",!0);let{tag:u=s.href?"a":"div"}=e,{color:f="default"}=e,{rounded:c=!1}=e,{border:d=!1}=e,{shadow:h=!1}=e,{transition:m=n}=e,{params:j={}}=e,{node:E=void 0}=e,{use:L=o}=e,{options:M={}}=e,{role:te=void 0}=e;const y={gray:"bg-gray-50 dark:bg-gray-800",red:"bg-red-50 dark:bg-gray-800",yellow:"bg-yellow-50 dark:bg-gray-800 ",green:"bg-green-50 dark:bg-gray-800 ",indigo:"bg-indigo-50 dark:bg-gray-800 ",purple:"bg-purple-50 dark:bg-gray-800 ",pink:"bg-pink-50 dark:bg-gray-800 ",blue:"bg-blue-50 dark:bg-gray-800 ",light:"bg-gray-50 dark:bg-gray-700",dark:"bg-gray-50 dark:bg-gray-800",default:"bg-white dark:bg-gray-800",dropdown:"bg-white dark:bg-gray-700",navbar:"bg-white dark:bg-gray-900",navbarUl:"bg-gray-50 dark:bg-gray-800",form:"bg-gray-50 dark:bg-gray-700",primary:"bg-primary-50 dark:bg-gray-800 ",orange:"bg-orange-50 dark:bg-orange-800",none:""},F={gray:"text-gray-800 dark:text-gray-300",red:"text-red-800 dark:text-red-400",yellow:"text-yellow-800 dark:text-yellow-300",green:"text-green-800 dark:text-green-400",indigo:"text-indigo-800 dark:text-indigo-400",purple:"text-purple-800 dark:text-purple-400",pink:"text-pink-800 dark:text-pink-400",blue:"text-blue-800 dark:text-blue-400",light:"text-gray-700 dark:text-gray-300",dark:"text-gray-700 dark:text-gray-300",default:"text-gray-500 dark:text-gray-400",dropdown:"text-gray-700 dark:text-gray-200",navbar:"text-gray-700 dark:text-gray-200",navbarUl:"text-gray-700 dark:text-gray-400",form:"text-gray-900 dark:text-white",primary:"text-primary-800 dark:text-primary-400",orange:"text-orange-800 dark:text-orange-400",none:""},le={gray:"border-gray-300 dark:border-gray-800",red:"border-red-300 dark:border-red-800",yellow:"border-yellow-300 dark:border-yellow-800",green:"border-green-300 dark:border-green-800",indigo:"border-indigo-300 dark:border-indigo-800",purple:"border-purple-300 dark:border-purple-800",pink:"border-pink-300 dark:border-pink-800",blue:"border-blue-300 dark:border-blue-800",light:"border-gray-500",dark:"border-gray-500",default:"border-gray-200 dark:border-gray-700",dropdown:"border-gray-100 dark:border-gray-700",navbar:"border-gray-100 dark:border-gray-700",navbarUl:"border-gray-100 dark:border-gray-700",form:"border-gray-300 dark:border-gray-700",primary:"border-primary-500 dark:border-primary-200 ",orange:"border-orange-300 dark:border-orange-800",none:""};let k;function ie(C){H.call(this,l,C)}function ue(C){H.call(this,l,C)}function Fe(C){H.call(this,l,C)}function Te(C){H.call(this,l,C)}function He(C){H.call(this,l,C)}function Ue(C){Be[C?"unshift":"push"](()=>{E=C,t(0,E)})}return l.$$set=C=>{t(26,e=v(v({},e),I(C))),t(8,s=N(e,a)),"tag"in C&&t(1,u=C.tag),"color"in C&&t(9,f=C.color),"rounded"in C&&t(10,c=C.rounded),"border"in C&&t(11,d=C.border),"shadow"in C&&t(12,h=C.shadow),"transition"in C&&t(2,m=C.transition),"params"in C&&t(3,j=C.params),"node"in C&&t(0,E=C.node),"use"in C&&t(4,L=C.use),"options"in C&&t(5,M=C.options),"role"in C&&t(6,te=C.role),"$$scope"in C&&t(13,i=C.$$scope)},l.$$.update=()=>{l.$$.dirty&512&&t(9,f=f??"default"),l.$$.dirty&512&&he("color",f),t(7,k=D(y[f],F[f],c&&"rounded-lg",d&&"border",le[f],h&&"shadow-md",e.class))},e=I(e),[E,u,m,j,L,M,te,k,s,f,c,d,h,i,r,ie,ue,Fe,Te,He,Ue]}class De extends q{constructor(e){super(),K(this,e,at,lt,R,{tag:1,color:9,rounded:10,border:11,shadow:12,transition:2,params:3,node:0,use:4,options:5,role:6})}}function rt(l){const e=l-1;return e*e*e+1}function st(l){return--l*l*l*l*l+1}function ye(l,{delay:e=0,duration:t=400,easing:a=rt,axis:s="y"}={}){const r=getComputedStyle(l),i=+r.opacity,n=s==="y"?"height":"width",o=parseFloat(r[n]),u=s==="y"?["top","bottom"]:["left","right"],f=u.map(L=>`${L[0].toUpperCase()}${L.slice(1)}`),c=parseFloat(r[`padding${f[0]}`]),d=parseFloat(r[`padding${f[1]}`]),h=parseFloat(r[`margin${f[0]}`]),m=parseFloat(r[`margin${f[1]}`]),j=parseFloat(r[`border${f[0]}Width`]),E=parseFloat(r[`border${f[1]}Width`]);return{delay:e,duration:t,easing:a,css:L=>`overflow: hidden;opacity: ${Math.min(L*20,1)*i};${n}: ${L*o}px;padding-${u[0]}: ${L*c}px;padding-${u[1]}: ${L*d}px;margin-${u[0]}: ${L*h}px;margin-${u[1]}: ${L*m}px;border-${u[0]}-width: ${L*j}px;border-${u[1]}-width: ${L*E}px;`}}const nt=l=>({svgSize:l&4}),Ce=l=>({svgSize:l[5][l[2]]}),ot=l=>({svgSize:l&4}),ze=l=>({svgSize:l[5][l[2]]});function it(l){let e,t,a,s,r,i,n=l[0]&&Ee(l);const o=l[9].default,u=W(o,l,l[8],Ce);let f=[{type:"button"},l[6],{class:l[4]},{"aria-label":a=l[1]??l[0]}],c={};for(let d=0;d<f.length;d+=1)c=v(c,f[d]);return{c(){e=w("button"),n&&n.c(),t=X(),u&&u.c(),this.h()},l(d){e=A(d,"BUTTON",{type:!0,class:!0,"aria-label":!0});var h=p(e);n&&n.l(h),t=Z(h),u&&u.l(h),h.forEach(g),this.h()},h(){V(e,c)},m(d,h){z(d,e,h),n&&n.m(e,null),P(e,t),u&&u.m(e,null),e.autofocus&&e.focus(),s=!0,r||(i=T(e,"click",l[10]),r=!0)},p(d,h){d[0]?n?n.p(d,h):(n=Ee(d),n.c(),n.m(e,t)):n&&(n.d(1),n=null),u&&u.p&&(!s||h&260)&&Y(u,o,d,d[8],s?Q(o,d[8],h,nt):J(d[8]),Ce),V(e,c=x(f,[{type:"button"},h&64&&d[6],(!s||h&16)&&{class:d[4]},(!s||h&3&&a!==(a=d[1]??d[0]))&&{"aria-label":a}]))},i(d){s||(b(u,d),s=!0)},o(d){_(u,d),s=!1},d(d){d&&g(e),n&&n.d(),u&&u.d(d),r=!1,i()}}}function ut(l){let e,t,a,s,r=l[0]&&Se(l);const i=l[9].default,n=W(i,l,l[8],ze);let o=[{href:l[3]},l[6],{class:l[4]},{"aria-label":a=l[1]??l[0]}],u={};for(let f=0;f<o.length;f+=1)u=v(u,o[f]);return{c(){e=w("a"),r&&r.c(),t=X(),n&&n.c(),this.h()},l(f){e=A(f,"A",{href:!0,class:!0,"aria-label":!0});var c=p(e);r&&r.l(c),t=Z(c),n&&n.l(c),c.forEach(g),this.h()},h(){V(e,u)},m(f,c){z(f,e,c),r&&r.m(e,null),P(e,t),n&&n.m(e,null),s=!0},p(f,c){f[0]?r?r.p(f,c):(r=Se(f),r.c(),r.m(e,t)):r&&(r.d(1),r=null),n&&n.p&&(!s||c&260)&&Y(n,i,f,f[8],s?Q(i,f[8],c,ot):J(f[8]),ze),V(e,u=x(o,[(!s||c&8)&&{href:f[3]},c&64&&f[6],(!s||c&16)&&{class:f[4]},(!s||c&3&&a!==(a=f[1]??f[0]))&&{"aria-label":a}]))},i(f){s||(b(n,f),s=!0)},o(f){_(n,f),s=!1},d(f){f&&g(e),r&&r.d(),n&&n.d(f)}}}function Ee(l){let e,t;return{c(){e=w("span"),t=$(l[0]),this.h()},l(a){e=A(a,"SPAN",{class:!0});var s=p(e);t=ee(s,l[0]),s.forEach(g),this.h()},h(){S(e,"class","sr-only")},m(a,s){z(a,e,s),P(e,t)},p(a,s){s&1&&se(t,a[0])},d(a){a&&g(e)}}}function Se(l){let e,t;return{c(){e=w("span"),t=$(l[0]),this.h()},l(a){e=A(a,"SPAN",{class:!0});var s=p(e);t=ee(s,l[0]),s.forEach(g),this.h()},h(){S(e,"class","sr-only")},m(a,s){z(a,e,s),P(e,t)},p(a,s){s&1&&se(t,a[0])},d(a){a&&g(e)}}}function ft(l){let e,t,a,s;const r=[ut,it],i=[];function n(o,u){return o[3]?0:1}return e=n(l),t=i[e]=r[e](l),{c(){t.c(),a=ae()},l(o){t.l(o),a=ae()},m(o,u){i[e].m(o,u),z(o,a,u),s=!0},p(o,[u]){let f=e;e=n(o),e===f?i[e].p(o,u):(be(),_(i[f],1,1,()=>{i[f]=null}),_e(),t=i[e],t?t.p(o,u):(t=i[e]=r[e](o),t.c()),b(t,1),t.m(a.parentNode,a))},i(o){s||(b(t),s=!0)},o(o){_(t),s=!1},d(o){i[e].d(o),o&&g(a)}}}function ct(l,e,t){const a=["color","name","ariaLabel","size","href"];let s=N(e,a),{$$slots:r={},$$scope:i}=e;const n=Me("background");let{color:o="default"}=e,{name:u=void 0}=e,{ariaLabel:f=void 0}=e,{size:c="md"}=e,{href:d=void 0}=e;const h={dark:"text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",gray:"text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",red:"text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",yellow:"text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",green:"text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",indigo:"text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",purple:"text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",pink:"text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",blue:"text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",primary:"text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",default:"focus:ring-gray-400"},m={xs:"m-0.5 rounded-sm focus:ring-1 p-0.5",sm:"m-0.5 rounded focus:ring-1 p-0.5",md:"m-0.5 rounded-lg focus:ring-2 p-1.5",lg:"m-0.5 rounded-lg focus:ring-2 p-2.5"};let j;const E={xs:"w-3 h-3",sm:"w-3.5 h-3.5",md:"w-5 h-5",lg:"w-5 h-5"};function L(M){H.call(this,l,M)}return l.$$set=M=>{t(14,e=v(v({},e),I(M))),t(6,s=N(e,a)),"color"in M&&t(7,o=M.color),"name"in M&&t(0,u=M.name),"ariaLabel"in M&&t(1,f=M.ariaLabel),"size"in M&&t(2,c=M.size),"href"in M&&t(3,d=M.href),"$$scope"in M&&t(8,i=M.$$scope)},l.$$.update=()=>{t(4,j=D("focus:outline-none whitespace-normal",m[c],h[o],o==="default"&&(n?"hover:bg-gray-100 dark:hover:bg-gray-600":"hover:bg-gray-100 dark:hover:bg-gray-700"),e.class))},e=I(e),[u,f,c,d,j,E,s,o,i,r,L]}class dt extends q{constructor(e){super(),K(this,e,ct,ft,R,{color:7,name:0,ariaLabel:1,size:2,href:3})}}const gt=l=>({}),Le=l=>({}),mt=l=>({}),pe=l=>({});function ht(l){let e,t,a;return{c(){e=ne("svg"),t=ne("path"),this.h()},l(s){e=oe(s,"svg",{class:!0,fill:!0,viewBox:!0,xmlns:!0});var r=p(e);t=oe(r,"path",{d:!0,"fill-rule":!0,"clip-rule":!0}),p(t).forEach(g),r.forEach(g),this.h()},h(){S(t,"d",`M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
  0 100-2H3a1 1 0 000 2h1z`),S(t,"fill-rule","evenodd"),S(t,"clip-rule","evenodd"),S(e,"class",a=l[2][l[1]]),S(e,"fill","currentColor"),S(e,"viewBox","0 0 20 20"),S(e,"xmlns","http://www.w3.org/2000/svg")},m(s,r){z(s,e,r),P(e,t)},p(s,r){r&2&&a!==(a=s[2][s[1]])&&S(e,"class",a)},d(s){s&&g(e)}}}function bt(l){let e,t,a;return{c(){e=ne("svg"),t=ne("path"),this.h()},l(s){e=oe(s,"svg",{class:!0,fill:!0,viewBox:!0,xmlns:!0});var r=p(e);t=oe(r,"path",{d:!0}),p(t).forEach(g),r.forEach(g),this.h()},h(){S(t,"d","M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"),S(e,"class",a=l[2][l[1]]),S(e,"fill","currentColor"),S(e,"viewBox","0 0 20 20"),S(e,"xmlns","http://www.w3.org/2000/svg")},m(s,r){z(s,e,r),P(e,t)},p(s,r){r&2&&a!==(a=s[2][s[1]])&&S(e,"class",a)},d(s){s&&g(e)}}}function _t(l){let e,t,a,s,r,i,n,o,u,f,c;const d=l[7].lightIcon,h=W(d,l,l[6],pe),m=h||ht(l),j=l[7].darkIcon,E=W(j,l,l[6],Le),L=E||bt(l);let M=[{"aria-label":"Dark mode"},{type:"button"},l[4],{class:o=D(l[0],l[5].class)}],te={};for(let y=0;y<M.length;y+=1)te=v(te,M[y]);return{c(){e=w("script"),t=$(`localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? window.document.documentElement.classList.add('dark')
      : window.document.documentElement.classList.remove('dark');`),a=X(),s=w("button"),r=w("span"),m&&m.c(),i=X(),n=w("span"),L&&L.c(),this.h()},l(y){const F=Oe("svelte-7ajg2y",document.head);e=A(F,"SCRIPT",{});var le=p(e);t=ee(le,`localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? window.document.documentElement.classList.add('dark')
      : window.document.documentElement.classList.remove('dark');`),le.forEach(g),F.forEach(g),a=Z(y),s=A(y,"BUTTON",{"aria-label":!0,type:!0,class:!0});var k=p(s);r=A(k,"SPAN",{class:!0});var ie=p(r);m&&m.l(ie),ie.forEach(g),i=Z(k),n=A(k,"SPAN",{class:!0});var ue=p(n);L&&L.l(ue),ue.forEach(g),k.forEach(g),this.h()},h(){S(r,"class","hidden dark:block"),S(n,"class","block dark:hidden"),V(s,te)},m(y,F){P(document.head,e),P(e,t),z(y,a,F),z(y,s,F),P(s,r),m&&m.m(r,null),P(s,i),P(s,n),L&&L.m(n,null),s.autofocus&&s.focus(),u=!0,f||(c=T(s,"click",l[3]),f=!0)},p(y,[F]){h?h.p&&(!u||F&64)&&Y(h,d,y,y[6],u?Q(d,y[6],F,mt):J(y[6]),pe):m&&m.p&&(!u||F&2)&&m.p(y,u?F:-1),E?E.p&&(!u||F&64)&&Y(E,j,y,y[6],u?Q(j,y[6],F,gt):J(y[6]),Le):L&&L.p&&(!u||F&2)&&L.p(y,u?F:-1),V(s,te=x(M,[{"aria-label":"Dark mode"},{type:"button"},F&16&&y[4],(!u||F&33&&o!==(o=D(y[0],y[5].class)))&&{class:o}]))},i(y){u||(b(m,y),b(L,y),u=!0)},o(y){_(m,y),_(L,y),u=!1},d(y){g(e),y&&g(a),y&&g(s),m&&m.d(y),L&&L.d(y),f=!1,c()}}}function vt(l,e,t){const a=["btnClass","size"];let s=N(e,a),{$$slots:r={},$$scope:i}=e,{btnClass:n="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"}=e,{size:o="md"}=e;const u={sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6"},f=()=>{const c=window.document.documentElement.classList.toggle("dark");localStorage.setItem("color-theme",c?"dark":"light")};return l.$$set=c=>{t(5,e=v(v({},e),I(c))),t(4,s=N(e,a)),"btnClass"in c&&t(0,n=c.btnClass),"size"in c&&t(1,o=c.size),"$$scope"in c&&t(6,i=c.$$scope)},e=I(e),[n,o,u,f,s,e,i,r]}class kt extends q{constructor(e){super(),K(this,e,vt,_t,R,{btnClass:0,size:1})}}function yt(l){let e,t;const a=l[4].default,s=W(a,l,l[3],null);let r=[l[1],{class:l[0]}],i={};for(let n=0;n<r.length;n+=1)i=v(i,r[n]);return{c(){e=w("footer"),s&&s.c(),this.h()},l(n){e=A(n,"FOOTER",{class:!0});var o=p(e);s&&s.l(o),o.forEach(g),this.h()},h(){V(e,i)},m(n,o){z(n,e,o),s&&s.m(e,null),t=!0},p(n,[o]){s&&s.p&&(!t||o&8)&&Y(s,a,n,n[3],t?Q(a,n[3],o,null):J(n[3]),null),V(e,i=x(r,[o&2&&n[1],{class:n[0]}]))},i(n){t||(b(s,n),t=!0)},o(n){_(s,n),t=!1},d(n){n&&g(e),s&&s.d(n)}}}function Ct(l,e,t){const a=["footerType"];let s=N(e,a),{$$slots:r={},$$scope:i}=e,{footerType:n="default"}=e,o=D(n==="sitemap"&&"bg-gray-800",n==="socialmedia"&&"p-4 bg-white sm:p-6 dark:bg-gray-800",n==="logo"&&"p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800",n==="default"&&"p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800",e.class);return l.$$set=u=>{t(5,e=v(v({},e),I(u))),t(1,s=N(e,a)),"footerType"in u&&t(2,n=u.footerType),"$$scope"in u&&t(3,i=u.$$scope)},e=I(e),[o,s,n,i,r]}class zt extends q{constructor(e){super(),K(this,e,Ct,yt,R,{footerType:2})}}function Et(l){let e,t;return{c(){e=w("span"),t=$(l[2]),this.h()},l(a){e=A(a,"SPAN",{class:!0});var s=p(e);t=ee(s,l[2]),s.forEach(g),this.h()},h(){S(e,"class","ml-1")},m(a,s){z(a,e,s),P(e,t)},p(a,s){s&4&&se(t,a[2])},d(a){a&&g(e)}}}function St(l){let e,t,a=[l[7],{href:l[1]},{target:l[3]},{class:l[6]}],s={};for(let r=0;r<a.length;r+=1)s=v(s,a[r]);return{c(){e=w("a"),t=$(l[2]),this.h()},l(r){e=A(r,"A",{href:!0,target:!0,class:!0});var i=p(e);t=ee(i,l[2]),i.forEach(g),this.h()},h(){V(e,s)},m(r,i){z(r,e,i),P(e,t)},p(r,i){i&4&&Re(t,r[2],s.contenteditable),V(e,s=x(a,[i&128&&r[7],i&2&&{href:r[1]},i&8&&{target:r[3]},{class:r[6]}]))},d(r){r&&g(e)}}}function Lt(l){let e,t,a,s,r,i;function n(f,c){return f[1]?St:Et}let o=n(l),u=o(l);return{c(){e=w("span"),t=$("© "),a=$(l[0]),s=X(),u.c(),r=X(),i=$(l[4]),this.h()},l(f){e=A(f,"SPAN",{class:!0});var c=p(e);t=ee(c,"© "),a=ee(c,l[0]),s=Z(c),u.l(c),r=Z(c),i=ee(c,l[4]),c.forEach(g),this.h()},h(){S(e,"class",l[5])},m(f,c){z(f,e,c),P(e,t),P(e,a),P(e,s),u.m(e,null),P(e,r),P(e,i)},p(f,[c]){c&1&&se(a,f[0]),o===(o=n(f))&&u?u.p(f,c):(u.d(1),u=o(f),u&&(u.c(),u.m(e,r))),c&16&&se(i,f[4])},i:re,o:re,d(f){f&&g(e),u.d()}}}function pt(l,e,t){const a=["spanClass","aClass","year","href","by","target","copyrightMessage"];let s=N(e,a),{spanClass:r="block text-sm text-gray-500 sm:text-center dark:text-gray-400"}=e,{aClass:i="hover:underline"}=e,{year:n=new Date().getFullYear()}=e,{href:o=""}=e,{by:u=""}=e,{target:f=void 0}=e,{copyrightMessage:c="All Rights Reserved."}=e,d=D(r,e.classSpan),h=D(i,e.classA);return l.$$set=m=>{t(10,e=v(v({},e),I(m))),t(7,s=N(e,a)),"spanClass"in m&&t(8,r=m.spanClass),"aClass"in m&&t(9,i=m.aClass),"year"in m&&t(0,n=m.year),"href"in m&&t(1,o=m.href),"by"in m&&t(2,u=m.by),"target"in m&&t(3,f=m.target),"copyrightMessage"in m&&t(4,c=m.copyrightMessage)},e=I(e),[n,o,u,f,c,d,h,s,r,i]}class wt extends q{constructor(e){super(),K(this,e,pt,Lt,R,{spanClass:8,aClass:9,year:0,href:1,by:2,target:3,copyrightMessage:4})}}function At(l){let e,t,a;const s=l[8].default,r=W(s,l,l[7],null);let i=[l[4],{href:l[0]},{class:l[3]},{target:l[1]}],n={};for(let o=0;o<i.length;o+=1)n=v(n,i[o]);return{c(){e=w("li"),t=w("a"),r&&r.c(),this.h()},l(o){e=A(o,"LI",{class:!0});var u=p(e);t=A(u,"A",{href:!0,class:!0,target:!0});var f=p(t);r&&r.l(f),f.forEach(g),u.forEach(g),this.h()},h(){V(t,n),S(e,"class",l[2])},m(o,u){z(o,e,u),P(e,t),r&&r.m(t,null),a=!0},p(o,[u]){r&&r.p&&(!a||u&128)&&Y(r,s,o,o[7],a?Q(s,o[7],u,null):J(o[7]),null),V(t,n=x(i,[u&16&&o[4],(!a||u&1)&&{href:o[0]},{class:o[3]},(!a||u&2)&&{target:o[1]}]))},i(o){a||(b(r,o),a=!0)},o(o){_(r,o),a=!1},d(o){o&&g(e),r&&r.d(o)}}}function It(l,e,t){const a=["liClass","aClass","href","target"];let s=N(e,a),{$$slots:r={},$$scope:i}=e,{liClass:n="mr-4 last:mr-0 md:mr-6"}=e,{aClass:o="hover:underline"}=e,{href:u=""}=e,{target:f=void 0}=e,c=D(n,e.classLi),d=D(o,e.classA);return l.$$set=h=>{t(9,e=v(v({},e),I(h))),t(4,s=N(e,a)),"liClass"in h&&t(5,n=h.liClass),"aClass"in h&&t(6,o=h.aClass),"href"in h&&t(0,u=h.href),"target"in h&&t(1,f=h.target),"$$scope"in h&&t(7,i=h.$$scope)},e=I(e),[u,f,c,d,s,n,o,i,r]}class Pt extends q{constructor(e){super(),K(this,e,It,At,R,{liClass:5,aClass:6,href:0,target:1})}}function Mt(l){let e,t,a;const s=l[3].default,r=W(s,l,l[2],null);return{c(){e=w("ul"),r&&r.c(),this.h()},l(i){e=A(i,"UL",{class:!0});var n=p(e);r&&r.l(n),n.forEach(g),this.h()},h(){S(e,"class",t=D(l[0],l[1].class))},m(i,n){z(i,e,n),r&&r.m(e,null),a=!0},p(i,[n]){r&&r.p&&(!a||n&4)&&Y(r,s,i,i[2],a?Q(s,i[2],n,null):J(i[2]),null),(!a||n&3&&t!==(t=D(i[0],i[1].class)))&&S(e,"class",t)},i(i){a||(b(r,i),a=!0)},o(i){_(r,i),a=!1},d(i){i&&g(e),r&&r.d(i)}}}function Nt(l,e,t){let{$$slots:a={},$$scope:s}=e,{ulClass:r="text-gray-600 dark:text-gray-400"}=e;return l.$$set=i=>{t(1,e=v(v({},e),I(i))),"ulClass"in i&&t(0,r=i.ulClass),"$$scope"in i&&t(2,s=i.$$scope)},e=I(e),[r,e,s,a]}class Dt extends q{constructor(e){super(),K(this,e,Nt,Mt,R,{ulClass:0})}}const Ft=l=>({hidden:l&8}),we=l=>({hidden:l[3],toggle:l[4]});function Tt(l){let e,t,a;const s=l[7].default,r=W(s,l,l[8],we);return{c(){e=w("div"),r&&r.c(),this.h()},l(i){e=A(i,"DIV",{class:!0});var n=p(e);r&&r.l(n),n.forEach(g),this.h()},h(){S(e,"class",t=D(l[1],l[6].classNavDiv,l[2]&&"w-full"||"container"))},m(i,n){z(i,e,n),r&&r.m(e,null),a=!0},p(i,n){r&&r.p&&(!a||n&264)&&Y(r,s,i,i[8],a?Q(s,i[8],n,Ft):J(i[8]),we),(!a||n&70&&t!==(t=D(i[1],i[6].classNavDiv,i[2]&&"w-full"||"container")))&&S(e,"class",t)},i(i){a||(b(r,i),a=!0)},o(i){_(r,i),a=!1},d(i){i&&g(e),r&&r.d(i)}}}function Ht(l){let e,t;const a=[{tag:"nav"},l[5],{class:D(l[0],l[6].class)}];let s={$$slots:{default:[Tt]},$$scope:{ctx:l}};for(let r=0;r<a.length;r+=1)s=v(s,a[r]);return e=new De({props:s}),{c(){U(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,i){B(e,r,i),t=!0},p(r,[i]){const n=i&97?x(a,[a[0],i&32&&Ne(r[5]),i&65&&{class:D(r[0],r[6].class)}]):{};i&334&&(n.$$scope={dirty:i,ctx:r}),e.$set(n)},i(r){t||(b(e.$$.fragment,r),t=!0)},o(r){_(e.$$.fragment,r),t=!1},d(r){O(e,r)}}}function Ut(l,e,t){const a=["navClass","navDivClass","fluid"];let s=N(e,a),{$$slots:r={},$$scope:i}=e,{navClass:n="px-2 sm:px-4 py-2.5 w-full"}=e,{navDivClass:o="mx-auto flex flex-wrap justify-between items-center "}=e,{fluid:u=!1}=e,f=!0,c=()=>{t(3,f=!f)};return l.$$set=d=>{t(6,e=v(v({},e),I(d))),t(5,s=N(e,a)),"navClass"in d&&t(0,n=d.navClass),"navDivClass"in d&&t(1,o=d.navDivClass),"fluid"in d&&t(2,u=d.fluid),"$$scope"in d&&t(8,i=d.$$scope)},l.$$.update=()=>{t(5,s.color=s.color??"navbar",s)},e=I(e),[n,o,u,f,c,s,e,r,i]}class Gt extends q{constructor(e){super(),K(this,e,Ut,Ht,R,{navClass:0,navDivClass:1,fluid:2})}}function Bt(l){let e,t,a;const s=l[4].default,r=W(s,l,l[3],null);let i=[{href:l[0]},l[1],{class:t=D("flex items-center",l[2].class)}],n={};for(let o=0;o<i.length;o+=1)n=v(n,i[o]);return{c(){e=w("a"),r&&r.c(),this.h()},l(o){e=A(o,"A",{href:!0,class:!0});var u=p(e);r&&r.l(u),u.forEach(g),this.h()},h(){V(e,n)},m(o,u){z(o,e,u),r&&r.m(e,null),a=!0},p(o,[u]){r&&r.p&&(!a||u&8)&&Y(r,s,o,o[3],a?Q(s,o[3],u,null):J(o[3]),null),V(e,n=x(i,[(!a||u&1)&&{href:o[0]},u&2&&o[1],(!a||u&4&&t!==(t=D("flex items-center",o[2].class)))&&{class:t}]))},i(o){a||(b(r,o),a=!0)},o(o){_(r,o),a=!1},d(o){o&&g(e),r&&r.d(o)}}}function Ot(l,e,t){const a=["href"];let s=N(e,a),{$$slots:r={},$$scope:i}=e,{href:n=""}=e;return l.$$set=o=>{t(2,e=v(v({},e),I(o))),t(1,s=N(e,a)),"href"in o&&t(0,n=o.href),"$$scope"in o&&t(3,i=o.$$scope)},e=I(e),[n,s,e,i,r]}class Rt extends q{constructor(e){super(),K(this,e,Ot,Bt,R,{href:0})}}function Vt(l){let e,t,a,s,r=[{xmlns:"http://www.w3.org/2000/svg"},{role:"button"},{tabindex:"0"},{width:l[0]},{height:l[0]},{class:t=l[4].class},l[5],{"aria-label":l[1]},{fill:"none"},{viewBox:l[2]},{"stroke-width":"2"}],i={};for(let n=0;n<r.length;n+=1)i=v(i,r[n]);return{c(){e=ne("svg"),this.h()},l(n){e=oe(n,"svg",{xmlns:!0,role:!0,tabindex:!0,width:!0,height:!0,class:!0,"aria-label":!0,fill:!0,viewBox:!0,"stroke-width":!0});var o=p(e);o.forEach(g),this.h()},h(){ve(e,i)},m(n,o){z(n,e,o),e.innerHTML=l[3],a||(s=T(e,"click",l[8]),a=!0)},p(n,[o]){o&8&&(e.innerHTML=n[3]),ve(e,i=x(r,[{xmlns:"http://www.w3.org/2000/svg"},{role:"button"},{tabindex:"0"},o&1&&{width:n[0]},o&1&&{height:n[0]},o&16&&t!==(t=n[4].class)&&{class:t},o&32&&n[5],o&2&&{"aria-label":n[1]},{fill:"none"},o&4&&{viewBox:n[2]},{"stroke-width":"2"}]))},i:re,o:re,d(n){n&&g(e),a=!1,s()}}}function qt(l,e,t){const a=["size","color","variation","ariaLabel"];let s=N(e,a),{size:r="24"}=e,{color:i="currentColor"}=e,{variation:n="outline"}=e,{ariaLabel:o="bars 3"}=e,u,f,c=`<path stroke="${i}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `,d=`<path fill="${i}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;function h(m){H.call(this,l,m)}return l.$$set=m=>{t(4,e=v(v({},e),I(m))),t(5,s=N(e,a)),"size"in m&&t(0,r=m.size),"color"in m&&t(6,i=m.color),"variation"in m&&t(7,n=m.variation),"ariaLabel"in m&&t(1,o=m.ariaLabel)},l.$$.update=()=>{if(l.$$.dirty&128)switch(n){case"outline":t(3,f=c),t(2,u="0 0 24 24");break;case"solid":t(3,f=d),t(2,u="0 0 24 24");break;default:t(3,f=c),t(2,u="0 0 24 24")}},e=I(e),[r,o,u,f,e,s,i,n,h]}class Kt extends q{constructor(e){super(),K(this,e,qt,Vt,R,{size:0,color:6,variation:7,ariaLabel:1})}}function jt(l){let e,t;return e=new Kt({props:{class:D(l[1],l[3].classMenu)}}),{c(){U(e.$$.fragment)},l(a){G(e.$$.fragment,a)},m(a,s){B(e,a,s),t=!0},p(a,s){const r={};s&10&&(r.class=D(a[1],a[3].classMenu)),e.$set(r)},i(a){t||(b(e.$$.fragment,a),t=!0)},o(a){_(e.$$.fragment,a),t=!1},d(a){O(e,a)}}}function Wt(l){let e,t;const a=[{name:"Open main menu"},l[2],{class:D(l[0],l[3].class)}];let s={$$slots:{default:[jt]},$$scope:{ctx:l}};for(let r=0;r<a.length;r+=1)s=v(s,a[r]);return e=new dt({props:s}),e.$on("click",l[4]),{c(){U(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,i){B(e,r,i),t=!0},p(r,[i]){const n=i&13?x(a,[a[0],i&4&&Ne(r[2]),i&9&&{class:D(r[0],r[3].class)}]):{};i&42&&(n.$$scope={dirty:i,ctx:r}),e.$set(n)},i(r){t||(b(e.$$.fragment,r),t=!0)},o(r){_(e.$$.fragment,r),t=!1},d(r){O(e,r)}}}function Yt(l,e,t){const a=["btnClass","menuClass"];let s=N(e,a),{btnClass:r="ml-3 md:hidden"}=e,{menuClass:i="h-6 w-6 shrink-0"}=e;function n(o){H.call(this,l,o)}return l.$$set=o=>{t(3,e=v(v({},e),I(o))),t(2,s=N(e,a)),"btnClass"in o&&t(0,r=o.btnClass),"menuClass"in o&&t(1,i=o.menuClass)},e=I(e),[r,i,s,e,n]}class Jt extends q{constructor(e){super(),K(this,e,Yt,Wt,R,{btnClass:0,menuClass:1})}}function ge(l){let e,t,a,s,r;const i=l[7].default,n=W(i,l,l[6],null);let o=[{role:t=l[0]?void 0:"link"},{href:l[0]},l[2],{class:l[1]}],u={};for(let f=0;f<o.length;f+=1)u=v(u,o[f]);return{c(){e=w(l[0]?"a":"div"),n&&n.c(),this.h()},l(f){e=A(f,((l[0]?"a":"div")||"null").toUpperCase(),{role:!0,href:!0,class:!0});var c=p(e);n&&n.l(c),c.forEach(g),this.h()},h(){fe(l[0]?"a":"div")(e,u)},m(f,c){z(f,e,c),n&&n.m(e,null),a=!0,s||(r=[T(e,"blur",l[8]),T(e,"change",l[9]),T(e,"click",l[10]),T(e,"focus",l[11]),T(e,"keydown",l[12]),T(e,"keypress",l[13]),T(e,"keyup",l[14]),T(e,"mouseenter",l[15]),T(e,"mouseleave",l[16]),T(e,"mouseover",l[17])],s=!0)},p(f,c){n&&n.p&&(!a||c&64)&&Y(n,i,f,f[6],a?Q(i,f[6],c,null):J(f[6]),null),fe(f[0]?"a":"div")(e,u=x(o,[(!a||c&1&&t!==(t=f[0]?void 0:"link"))&&{role:t},(!a||c&1)&&{href:f[0]},c&4&&f[2],(!a||c&2)&&{class:f[1]}]))},i(f){a||(b(n,f),a=!0)},o(f){_(n,f),a=!1},d(f){f&&g(e),n&&n.d(f),s=!1,Pe(r)}}}function Qt(l){let e,t=l[0]?"a":"div",a,s=(l[0]?"a":"div")&&ge(l);return{c(){e=w("li"),s&&s.c()},l(r){e=A(r,"LI",{});var i=p(e);s&&s.l(i),i.forEach(g)},m(r,i){z(r,e,i),s&&s.m(e,null),a=!0},p(r,[i]){r[0],t?R(t,r[0]?"a":"div")?(s.d(1),s=ge(r),t=r[0]?"a":"div",s.c(),s.m(e,null)):s.p(r,i):(s=ge(r),t=r[0]?"a":"div",s.c(),s.m(e,null))},i(r){a||(b(s),a=!0)},o(r){_(s),a=!1},d(r){r&&g(e),s&&s.d(r)}}}function Xt(l,e,t){const a=["href","active","activeClass","nonActiveClass"];let s=N(e,a),{$$slots:r={},$$scope:i}=e,{href:n=""}=e,{active:o=!1}=e,{activeClass:u=void 0}=e,{nonActiveClass:f=void 0}=e;const c=Me("navbar")??{};let d;function h(k){H.call(this,l,k)}function m(k){H.call(this,l,k)}function j(k){H.call(this,l,k)}function E(k){H.call(this,l,k)}function L(k){H.call(this,l,k)}function M(k){H.call(this,l,k)}function te(k){H.call(this,l,k)}function y(k){H.call(this,l,k)}function F(k){H.call(this,l,k)}function le(k){H.call(this,l,k)}return l.$$set=k=>{t(19,e=v(v({},e),I(k))),t(2,s=N(e,a)),"href"in k&&t(0,n=k.href),"active"in k&&t(3,o=k.active),"activeClass"in k&&t(4,u=k.activeClass),"nonActiveClass"in k&&t(5,f=k.nonActiveClass),"$$scope"in k&&t(6,i=k.$$scope)},l.$$.update=()=>{t(1,d=D("block py-2 pr-4 pl-3 md:p-0 rounded md:border-0",o?u??c.activeClass:f??c.nonActiveClass,e.class))},e=I(e),[n,d,s,o,u,f,i,r,h,m,j,E,L,M,te,y,F,le]}class me extends q{constructor(e){super(),K(this,e,Xt,Qt,R,{href:0,active:3,activeClass:4,nonActiveClass:5})}}function Zt(l){let e,t,a;const s=l[9].default,r=W(s,l,l[11],null);let i=[l[4],{class:l[2]},{hidden:l[0]}],n={};for(let o=0;o<i.length;o+=1)n=v(n,i[o]);return{c(){e=w("div"),t=w("ul"),r&&r.c(),this.h()},l(o){e=A(o,"DIV",{class:!0});var u=p(e);t=A(u,"UL",{class:!0});var f=p(t);r&&r.l(f),f.forEach(g),u.forEach(g),this.h()},h(){S(t,"class",l[3]),V(e,n)},m(o,u){z(o,e,u),P(e,t),r&&r.m(t,null),a=!0},p(o,u){r&&r.p&&(!a||u&2048)&&Y(r,s,o,o[11],a?Q(s,o[11],u,null):J(o[11]),null),(!a||u&8)&&S(t,"class",o[3]),V(e,n=x(i,[u&16&&o[4],(!a||u&4)&&{class:o[2]},(!a||u&1)&&{hidden:o[0]}]))},i(o){a||(b(r,o),a=!0)},o(o){_(r,o),a=!1},d(o){o&&g(e),r&&r.d(o)}}}function xt(l){let e,t,a,s,r,i;t=new De({props:{tag:"ul",border:!0,rounded:!0,color:"navbarUl",class:l[3],$$slots:{default:[$t]},$$scope:{ctx:l}}});let n=[l[4],{class:l[2]},{role:"button"},{tabindex:"0"}],o={};for(let u=0;u<n.length;u+=1)o=v(o,n[u]);return{c(){e=w("div"),U(t.$$.fragment),this.h()},l(u){e=A(u,"DIV",{class:!0,role:!0,tabindex:!0});var f=p(e);G(t.$$.fragment,f),f.forEach(g),this.h()},h(){V(e,o)},m(u,f){z(u,e,f),B(t,e,null),s=!0,r||(i=T(e,"click",l[10]),r=!0)},p(u,f){l=u;const c={};f&8&&(c.class=l[3]),f&2048&&(c.$$scope={dirty:f,ctx:l}),t.$set(c),V(e,o=x(n,[f&16&&l[4],(!s||f&4)&&{class:l[2]},{role:"button"},{tabindex:"0"}]))},i(u){s||(b(t.$$.fragment,u),Ie(()=>{s&&(a||(a=ce(e,ye,l[1],!0)),a.run(1))}),s=!0)},o(u){_(t.$$.fragment,u),a||(a=ce(e,ye,l[1],!1)),a.run(0),s=!1},d(u){u&&g(e),O(t),u&&a&&a.end(),r=!1,i()}}}function $t(l){let e;const t=l[9].default,a=W(t,l,l[11],null);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,r){a&&a.m(s,r),e=!0},p(s,r){a&&a.p&&(!e||r&2048)&&Y(a,t,s,s[11],e?Q(t,s[11],r,null):J(s[11]),null)},i(s){e||(b(a,s),e=!0)},o(s){_(a,s),e=!1},d(s){a&&a.d(s)}}}function el(l){let e,t,a,s;const r=[xt,Zt],i=[];function n(o,u){return o[0]?1:0}return e=n(l),t=i[e]=r[e](l),{c(){t.c(),a=ae()},l(o){t.l(o),a=ae()},m(o,u){i[e].m(o,u),z(o,a,u),s=!0},p(o,[u]){let f=e;e=n(o),e===f?i[e].p(o,u):(be(),_(i[f],1,1,()=>{i[f]=null}),_e(),t=i[e],t?t.p(o,u):(t=i[e]=r[e](o),t.c()),b(t,1),t.m(a.parentNode,a))},i(o){s||(b(t),s=!0)},o(o){_(t),s=!1},d(o){i[e].d(o),o&&g(a)}}}function tl(l,e,t){const a=["divClass","ulClass","hidden","slideParams","activeClass","nonActiveClass"];let s=N(e,a),{$$slots:r={},$$scope:i}=e,{divClass:n="w-full md:block md:w-auto"}=e,{ulClass:o="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"}=e,{hidden:u=!0}=e,{slideParams:f={delay:250,duration:500,easing:st}}=e,{activeClass:c="text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent"}=e,{nonActiveClass:d="text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}=e;he("navbar",{activeClass:c,nonActiveClass:d});let h,m;function j(E){H.call(this,l,E)}return l.$$set=E=>{t(12,e=v(v({},e),I(E))),t(4,s=N(e,a)),"divClass"in E&&t(5,n=E.divClass),"ulClass"in E&&t(6,o=E.ulClass),"hidden"in E&&t(0,u=E.hidden),"slideParams"in E&&t(1,f=E.slideParams),"activeClass"in E&&t(7,c=E.activeClass),"nonActiveClass"in E&&t(8,d=E.nonActiveClass),"$$scope"in E&&t(11,i=E.$$scope)},l.$$.update=()=>{t(2,h=D(n,e.class)),t(3,m=D(o,e.classUl))},e=I(e),[u,f,h,m,s,n,o,c,d,r,j,i]}class ll extends q{constructor(e){super(),K(this,e,tl,el,R,{divClass:5,ulClass:6,hidden:0,slideParams:1,activeClass:7,nonActiveClass:8})}}function al(l){let e,t;return e=new kt({props:{btnClass:rl}}),{c(){U(e.$$.fragment)},l(a){G(e.$$.fragment,a)},m(a,s){B(e,a,s),t=!0},p:re,i(a){t||(b(e.$$.fragment,a),t=!0)},o(a){_(e.$$.fragment,a),t=!1},d(a){O(e,a)}}}const rl="";class sl extends q{constructor(e){super(),K(this,e,null,al,R,{})}}function nl(l){let e,t,a,s,r;return{c(){e=w("img"),a=X(),s=w("span"),r=$("Go Svelte!"),this.h()},l(i){e=A(i,"IMG",{src:!0,class:!0,alt:!0}),a=Z(i),s=A(i,"SPAN",{class:!0});var n=p(s);r=ee(n,"Go Svelte!"),n.forEach(g),this.h()},h(){Ve(e.src,t="/assets/gifs/gopher-dance.gif")||S(e,"src",t),S(e,"class","mr-3 h-6 sm:h-9"),S(e,"alt","Dancing Gopher as a Logo"),S(s,"class","self-center whitespace-nowrap text-xl font-semibold dark:text-white")},m(i,n){z(i,e,n),z(i,a,n),z(i,s,n),P(s,r)},p:re,d(i){i&&g(e),i&&g(a),i&&g(s)}}}function ol(l){let e;return{c(){e=$("Home")},l(t){e=ee(t,"Home")},m(t,a){z(t,e,a)},d(t){t&&g(e)}}}function il(l){let e;return{c(){e=$("GitHub")},l(t){e=ee(t,"GitHub")},m(t,a){z(t,e,a)},d(t){t&&g(e)}}}function ul(l){let e,t;return e=new sl({}),{c(){U(e.$$.fragment)},l(a){G(e.$$.fragment,a)},m(a,s){B(e,a,s),t=!0},i(a){t||(b(e.$$.fragment,a),t=!0)},o(a){_(e.$$.fragment,a),t=!1},d(a){O(e,a)}}}function fl(l){let e,t,a,s,r,i;return e=new me({props:{href:"/",$$slots:{default:[ol]},$$scope:{ctx:l}}}),a=new me({props:{href:"/github",$$slots:{default:[il]},$$scope:{ctx:l}}}),r=new me({props:{$$slots:{default:[ul]},$$scope:{ctx:l}}}),{c(){U(e.$$.fragment),t=X(),U(a.$$.fragment),s=X(),U(r.$$.fragment)},l(n){G(e.$$.fragment,n),t=Z(n),G(a.$$.fragment,n),s=Z(n),G(r.$$.fragment,n)},m(n,o){B(e,n,o),z(n,t,o),B(a,n,o),z(n,s,o),B(r,n,o),i=!0},p(n,o){const u={};o&4&&(u.$$scope={dirty:o,ctx:n}),e.$set(u);const f={};o&4&&(f.$$scope={dirty:o,ctx:n}),a.$set(f);const c={};o&4&&(c.$$scope={dirty:o,ctx:n}),r.$set(c)},i(n){i||(b(e.$$.fragment,n),b(a.$$.fragment,n),b(r.$$.fragment,n),i=!0)},o(n){_(e.$$.fragment,n),_(a.$$.fragment,n),_(r.$$.fragment,n),i=!1},d(n){O(e,n),n&&g(t),O(a,n),n&&g(s),O(r,n)}}}function cl(l){let e,t,a,s,r,i;return e=new Rt({props:{href:"/",$$slots:{default:[nl]},$$scope:{ctx:l}}}),a=new Jt({}),a.$on("click",function(){Ae(l[1])&&l[1].apply(this,arguments)}),r=new ll({props:{hidden:l[0],$$slots:{default:[fl]},$$scope:{ctx:l}}}),{c(){U(e.$$.fragment),t=X(),U(a.$$.fragment),s=X(),U(r.$$.fragment)},l(n){G(e.$$.fragment,n),t=Z(n),G(a.$$.fragment,n),s=Z(n),G(r.$$.fragment,n)},m(n,o){B(e,n,o),z(n,t,o),B(a,n,o),z(n,s,o),B(r,n,o),i=!0},p(n,o){l=n;const u={};o&4&&(u.$$scope={dirty:o,ctx:l}),e.$set(u);const f={};o&1&&(f.hidden=l[0]),o&4&&(f.$$scope={dirty:o,ctx:l}),r.$set(f)},i(n){i||(b(e.$$.fragment,n),b(a.$$.fragment,n),b(r.$$.fragment,n),i=!0)},o(n){_(e.$$.fragment,n),_(a.$$.fragment,n),_(r.$$.fragment,n),i=!1},d(n){O(e,n),n&&g(t),O(a,n),n&&g(s),O(r,n)}}}function dl(l){let e,t;return e=new Gt({props:{$$slots:{default:[cl,({hidden:a,toggle:s})=>({0:a,1:s}),({hidden:a,toggle:s})=>(a?1:0)|(s?2:0)]},$$scope:{ctx:l}}}),{c(){U(e.$$.fragment)},l(a){G(e.$$.fragment,a)},m(a,s){B(e,a,s),t=!0},p(a,[s]){const r={};s&7&&(r.$$scope={dirty:s,ctx:a}),e.$set(r)},i(a){t||(b(e.$$.fragment,a),t=!0)},o(a){_(e.$$.fragment,a),t=!1},d(a){O(e,a)}}}class gl extends q{constructor(e){super(),K(this,e,null,dl,R,{})}}function ml(l){let e;return{c(){e=$("GitHub")},l(t){e=ee(t,"GitHub")},m(t,a){z(t,e,a)},d(t){t&&g(e)}}}function hl(l){let e,t;return e=new Pt({props:{href:"/github",$$slots:{default:[ml]},$$scope:{ctx:l}}}),{c(){U(e.$$.fragment)},l(a){G(e.$$.fragment,a)},m(a,s){B(e,a,s),t=!0},p(a,s){const r={};s&1&&(r.$$scope={dirty:s,ctx:a}),e.$set(r)},i(a){t||(b(e.$$.fragment,a),t=!0)},o(a){_(e.$$.fragment,a),t=!1},d(a){O(e,a)}}}function bl(l){let e,t,a,s;return e=new wt({props:{href:"/",by:"uVulpos",year:2023}}),a=new Dt({props:{ulClass:"flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0",$$slots:{default:[hl]},$$scope:{ctx:l}}}),{c(){U(e.$$.fragment),t=X(),U(a.$$.fragment)},l(r){G(e.$$.fragment,r),t=Z(r),G(a.$$.fragment,r)},m(r,i){B(e,r,i),z(r,t,i),B(a,r,i),s=!0},p(r,i){const n={};i&1&&(n.$$scope={dirty:i,ctx:r}),a.$set(n)},i(r){s||(b(e.$$.fragment,r),b(a.$$.fragment,r),s=!0)},o(r){_(e.$$.fragment,r),_(a.$$.fragment,r),s=!1},d(r){O(e,r),r&&g(t),O(a,r)}}}function _l(l){let e,t;return e=new zt({props:{$$slots:{default:[bl]},$$scope:{ctx:l}}}),{c(){U(e.$$.fragment)},l(a){G(e.$$.fragment,a)},m(a,s){B(e,a,s),t=!0},p(a,[s]){const r={};s&1&&(r.$$scope={dirty:s,ctx:a}),e.$set(r)},i(a){t||(b(e.$$.fragment,a),t=!0)},o(a){_(e.$$.fragment,a),t=!1},d(a){O(e,a)}}}class vl extends q{constructor(e){super(),K(this,e,null,_l,R,{})}}function kl(){const l=localStorage.getItem("color-theme"),e="color-theme"in localStorage,t=document.documentElement.classList,a=window.matchMedia("(prefers-color-scheme: dark)").matches;e&&l==="dark"||!e&&a?(t.add("dark"),localStorage.setItem("color-theme","dark")):(t.remove("dark"),localStorage.setItem("color-theme","light"))}function yl(l){let e,t,a,s,r,i,n,o;a=new gl({});const u=l[1].default,f=W(u,l,l[0],null);return n=new vl({}),{c(){e=w("div"),t=w("header"),U(a.$$.fragment),s=X(),f&&f.c(),r=X(),i=w("footer"),U(n.$$.fragment),this.h()},l(c){e=A(c,"DIV",{class:!0});var d=p(e);t=A(d,"HEADER",{});var h=p(t);G(a.$$.fragment,h),h.forEach(g),s=Z(d),f&&f.l(d),r=Z(d),i=A(d,"FOOTER",{class:!0});var m=p(i);G(n.$$.fragment,m),m.forEach(g),d.forEach(g),this.h()},h(){S(i,"class","svelte-1mzq52"),S(e,"class","root bg-white dark:bg-gray-900 svelte-1mzq52")},m(c,d){z(c,e,d),P(e,t),B(a,t,null),P(e,s),f&&f.m(e,null),P(e,r),P(e,i),B(n,i,null),o=!0},p(c,[d]){f&&f.p&&(!o||d&1)&&Y(f,u,c,c[0],o?Q(u,c[0],d,null):J(c[0]),null)},i(c){o||(b(a.$$.fragment,c),b(f,c),b(n.$$.fragment,c),o=!0)},o(c){_(a.$$.fragment,c),_(f,c),_(n.$$.fragment,c),o=!1},d(c){c&&g(e),O(a),f&&f.d(c),O(n)}}}function Cl(l,e,t){let{$$slots:a={},$$scope:s}=e;return ke("en",Xe),ke("de",tt),Ke({fallbackLocale:"en",initialLocale:je()}),qe(()=>{kl()}),l.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,a]}class Ll extends q{constructor(e){super(),K(this,e,Cl,yl,R,{})}}export{Ll as component};