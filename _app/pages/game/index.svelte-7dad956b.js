var Ut=Object.defineProperty;var Ze=Object.getOwnPropertySymbols;var jt=Object.prototype.hasOwnProperty,Bt=Object.prototype.propertyIsEnumerable;var xe=(r,e,l)=>e in r?Ut(r,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):r[e]=l,Oe=(r,e)=>{for(var l in e||(e={}))jt.call(e,l)&&xe(r,l,e[l]);if(Ze)for(var l of Ze(e))Bt.call(e,l)&&xe(r,l,e[l]);return r};import{C as ce,S as le,i as ne,s as re,e as k,t as M,k as P,c as y,a as I,g as A,d,n as L,b as C,f as T,F as p,a2 as et,M as se,J as F,a3 as Ue,O as Q,a4 as $e,h as _e,_ as ue,r as oe,u as O,w as ae,x as V,a5 as be,j as z,m as Y,o as R,v as W,p as tt,q as lt,K as Mt,L as At,P as Gt,N as je,Q as zt,A as Be,B as nt,a6 as Me,$ as Ie,a0 as Se,a1 as Ce,a7 as Yt,l as rt,D as Rt,G as Wt,H as qt,I as Jt,a8 as Kt,a9 as Ft,aa as Qt,ab as Xt,ac as Zt,ad as st,ae as me}from"../../chunks/vendor-1d4857ed.js";import{g as ot,p as xt,C as ge,r as el,s as tl,O as ll}from"../../chunks/Card-ff5b529b.js";import"../../chunks/singletons-12a22614.js";const Ee=ce(!1),ke=ce("");let at="";at=localStorage.getItem("recovery")||"";const it=ce(at);it.subscribe(r=>{localStorage.setItem("recovery",r)});const Ae=ce(""),Te=ce({}),Ge=ce([]),De=ce({}),ve=ce({location:"",cardIndex:""}),ct=ce("profile"),pe=ce({show:!1,closable:!0,style:"",message:""}),Ve=ce({page:"",color:""}),ft=ce([]);var nl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",isHost:Ee,code:ke,recovery:it,nickname:Ae,hand:Te,players:Ge,discard:De,focused:ve,state:ct,overlay:pe,gamePage:Ve,log:ft});function rl(r){r.error?pe.set({style:"warning",closable:!0,message:r.error,show:!0}):r.type==="update"?nl[r.store].set(r.data):r.type==="redirect"&&ot(r.url+(r.message?"?message="+encodeURIComponent(r.message):""))}const sl="api-uno.venashial.games",ol=JSON.parse("true");let ze="";ke.subscribe(r=>{ze=r});let Ne;async function he(r="",e={},l=!1){try{(!Ne||Ne.readyState===3)&&(Ne=await ut()),Ne.send(JSON.stringify({route:r,body:Oe(Oe({},e),ze!==""?{code:ze}:{})}))}catch(t){console.error(t)}}function ut(r=0){return new Promise(function(e,l){console.log("Connecting...");const t=new WebSocket(`ws${ol?"s":""}://${sl}/ws`),n=setTimeout(()=>{l(new Error("WebSocket timeout")),console.log("Socket connection timed out."),clearTimeout(n),t.close()},2e3);t.onopen=()=>{clearTimeout(n),r>0&&(console.log(`Reconnected after ${r} tries`),pe.set({show:!1,closable:!0,style:"",message:""}),he("register",{recovery:localStorage.getItem("recovery")})),e(t)},t.onerror=o=>{console.log("Socket errored"),l(o)},t.onmessage=o=>{rl(JSON.parse(o.data))};let s=!1;window.onbeforeunload=()=>{s=!0},t.onclose=()=>{console.log("Socket closed!"),pe.set({show:!0,closable:!1,style:"error",message:"Womp womp. The server just went offline! You'll be reconnected as soon as possible"+".".repeat(r)}),s||setTimeout(()=>ut(r+1).catch(()=>console.log("Reconnect failed")),r<10?2e3:1e4)}})}function al(r){let e,l,t,n,s,o,a=(r[1]?"Create":"Join")+"",c,i,u,m;return{c(){e=k("p"),l=M("What's your name?"),t=P(),n=k("input"),s=P(),o=k("button"),c=M(a),i=M(" room"),this.h()},l(f){e=y(f,"P",{});var _=I(e);l=A(_,"What's your name?"),_.forEach(d),t=L(f),n=y(f,"INPUT",{type:!0,placeholder:!0}),s=L(f),o=y(f,"BUTTON",{});var h=I(o);c=A(h,a),i=A(h," room"),h.forEach(d),this.h()},h(){C(n,"type","text"),C(n,"placeholder","...")},m(f,_){T(f,e,_),p(e,l),T(f,t,_),T(f,n,_),et(n,r[0]),T(f,s,_),T(f,o,_),p(o,c),p(o,i),u||(m=[se(n,"input",r[3]),se(o,"click",r[4])],u=!0)},p(f,[_]){_&1&&n.value!==f[0]&&et(n,f[0])},i:F,o:F,d(f){f&&d(e),f&&d(t),f&&d(n),f&&d(s),f&&d(o),u=!1,Ue(m)}}}function il(r,e,l){let t,n,s,o;Q(r,ke,_=>l(5,t=_)),Q(r,pe,_=>l(6,n=_)),Q(r,xt,_=>l(7,s=_)),Q(r,Ee,_=>l(8,o=_));let a;!s.query.get("code")&&typeof s.query.get("create")!="string"&&ot("/");const c=typeof s.query.get("create")=="string";c&&$e(Ee,o=!0,o);const i=s.query.get("code");i&&$e(ke,t=i.toLowerCase(),t);async function u(){if(!a){$e(pe,n={show:!0,closable:!0,style:"warning",message:"Sorry, but you can't be nameless. Enter a name."},n);return}c||await he("join",{code:t,nickname:a}),c&&await he("create",{nickname:a})}function m(){a=this.value,l(0,a)}return[a,c,u,m,()=>{u()}]}class cl extends le{constructor(e){super();ne(this,e,il,al,re,{})}}function fl(r){let e;return{c(){e=M(r[0])},l(l){e=A(l,r[0])},m(l,t){T(l,e,t)},p(l,[t]){t&1&&_e(e,l[0])},i:F,o:F,d(l){l&&d(e)}}}function ul(r,e,l){let t="";return setInterval(()=>{t.length<6?l(0,t+="."):l(0,t="")},500),[t]}class hl extends le{constructor(e){super();ne(this,e,ul,fl,re,{})}}function ht(r,e,l){const t=r.slice();return t[9]=e[l],t}function dl(r){let e,l,t,n;return{c(){e=k("button"),l=M("Share link"),this.h()},l(s){e=y(s,"BUTTON",{class:!0});var o=I(e);l=A(o,"Share link"),o.forEach(d),this.h()},h(){C(e,"class","bg-red")},m(s,o){T(s,e,o),p(e,l),t||(n=se(e,"click",r[5]),t=!0)},p:F,d(s){s&&d(e),t=!1,n()}}}function dt(r){let e,l,t,n;function s(){return r[6](r[9])}return{c(){e=k("button"),l=M("Kick"),this.h()},l(o){e=y(o,"BUTTON",{class:!0});var a=I(e);l=A(a,"Kick"),a.forEach(d),this.h()},h(){C(e,"class","svelte-1om871g")},m(o,a){T(o,e,a),p(e,l),t||(n=se(e,"click",s),t=!0)},p(o,a){r=o},d(o){o&&d(e),t=!1,n()}}}function _t(r){let e,l,t,n=r[9].nickname+"",s,o,a=(r[9].nickname===r[2]?"(You)":"")+"",c,i,u=(r[9].isHost?"(Host)":"")+"",m,f,_,h=r[3]&&r[9].nickname!==r[2]&&dt(r);return{c(){e=k("div"),l=k("span"),t=k("b"),s=M(n),o=P(),c=M(a),i=P(),m=M(u),f=P(),h&&h.c(),_=P(),this.h()},l(E){e=y(E,"DIV",{class:!0});var D=I(e);l=y(D,"SPAN",{});var U=I(l);t=y(U,"B",{});var w=I(t);s=A(w,n),w.forEach(d),o=L(U),c=A(U,a),i=L(U),m=A(U,u),U.forEach(d),f=L(D),h&&h.l(D),_=L(D),D.forEach(d),this.h()},h(){C(e,"class","player svelte-1om871g")},m(E,D){T(E,e,D),p(e,l),p(l,t),p(t,s),p(l,o),p(l,c),p(l,i),p(l,m),p(e,f),h&&h.m(e,null),p(e,_)},p(E,D){D&2&&n!==(n=E[9].nickname+"")&&_e(s,n),D&6&&a!==(a=(E[9].nickname===E[2]?"(You)":"")+"")&&_e(c,a),D&2&&u!==(u=(E[9].isHost?"(Host)":"")+"")&&_e(m,u),E[3]&&E[9].nickname!==E[2]?h?h.p(E,D):(h=dt(E),h.c(),h.m(e,_)):h&&(h.d(1),h=null)},d(E){E&&d(e),h&&h.d()}}}function _l(r){let e,l,t,n;return t=new hl({}),{c(){e=k("span"),l=M("Wating for host"),z(t.$$.fragment),this.h()},l(s){e=y(s,"SPAN",{class:!0});var o=I(e);l=A(o,"Wating for host"),Y(t.$$.fragment,o),o.forEach(d),this.h()},h(){C(e,"class","dark-block")},m(s,o){T(s,e,o),p(e,l),R(t,e,null),n=!0},p:F,i(s){n||(V(t.$$.fragment,s),n=!0)},o(s){O(t.$$.fragment,s),n=!1},d(s){s&&d(e),W(t)}}}function ml(r){let e,l,t,n;return{c(){e=k("button"),l=M("Start game"),this.h()},l(s){e=y(s,"BUTTON",{class:!0});var o=I(e);l=A(o,"Start game"),o.forEach(d),this.h()},h(){C(e,"class","bg-yellow")},m(s,o){T(s,e,o),p(e,l),t||(n=se(e,"click",r[7]),t=!0)},p:F,i:F,o:F,d(s){s&&d(e),t=!1,n()}}}function pl(r){let e,l,t,n,s=`${window.location.origin}/game?code=${r[0].toUpperCase()}`,o,a,c,i,u,m,f,_,h,E,D,U,w,$,S,q,j,J,b,H=navigator.share&&dl(r),g=r[1],B=[];for(let v=0;v<g.length;v+=1)B[v]=_t(ht(r,g,v));const de=[ml,_l],ee=[];function K(v,G){return v[3]?0:1}return U=K(r),w=ee[U]=de[U](r),{c(){e=k("h2"),l=M("Invite"),t=P(),n=k("div"),o=M(s),a=P(),c=k("button"),i=M("Copy game link"),u=P(),H&&H.c(),m=P(),f=k("h2"),_=M("Players"),h=P(),E=k("div");for(let v=0;v<B.length;v+=1)B[v].c();D=P(),w.c(),$=P(),S=k("button"),q=M("Leave room"),this.h()},l(v){e=y(v,"H2",{class:!0});var G=I(e);l=A(G,"Invite"),G.forEach(d),t=L(v),n=y(v,"DIV",{class:!0});var x=I(n);o=A(x,s),x.forEach(d),a=L(v),c=y(v,"BUTTON",{class:!0});var X=I(c);i=A(X,"Copy game link"),X.forEach(d),u=L(v),H&&H.l(v),m=L(v),f=y(v,"H2",{style:!0,class:!0});var N=I(f);_=A(N,"Players"),N.forEach(d),h=L(v),E=y(v,"DIV",{class:!0});var Z=I(E);for(let ie=0;ie<B.length;ie+=1)B[ie].l(Z);Z.forEach(d),D=L(v),w.l(v),$=L(v),S=y(v,"BUTTON",{class:!0,style:!0});var we=I(S);q=A(we,"Leave room"),we.forEach(d),this.h()},h(){C(e,"class","svelte-1om871g"),C(n,"class","code svelte-1om871g"),C(c,"class","bg-green"),C(f,"style","m"),C(f,"class","svelte-1om871g"),C(E,"class","players-list svelte-1om871g"),C(S,"class","bg-blue"),ue(S,"margin-top","auto"),ue(S,"margin-bottom","2rem")},m(v,G){T(v,e,G),p(e,l),T(v,t,G),T(v,n,G),p(n,o),T(v,a,G),T(v,c,G),p(c,i),T(v,u,G),H&&H.m(v,G),T(v,m,G),T(v,f,G),p(f,_),T(v,h,G),T(v,E,G);for(let x=0;x<B.length;x+=1)B[x].m(E,null);T(v,D,G),ee[U].m(v,G),T(v,$,G),T(v,S,G),p(S,q),j=!0,J||(b=[se(c,"click",r[4]),se(S,"click",r[8])],J=!0)},p(v,[G]){if((!j||G&1)&&s!==(s=`${window.location.origin}/game?code=${v[0].toUpperCase()}`)&&_e(o,s),navigator.share&&H.p(v,G),G&14){g=v[1];let X;for(X=0;X<g.length;X+=1){const N=ht(v,g,X);B[X]?B[X].p(N,G):(B[X]=_t(N),B[X].c(),B[X].m(E,null))}for(;X<B.length;X+=1)B[X].d(1);B.length=g.length}let x=U;U=K(v),U===x?ee[U].p(v,G):(oe(),O(ee[x],1,1,()=>{ee[x]=null}),ae(),w=ee[U],w?w.p(v,G):(w=ee[U]=de[U](v),w.c()),V(w,1),w.m($.parentNode,$))},i(v){j||(V(w),j=!0)},o(v){O(w),j=!1},d(v){v&&d(e),v&&d(t),v&&d(n),v&&d(a),v&&d(c),v&&d(u),H&&H.d(v),v&&d(m),v&&d(f),v&&d(h),v&&d(E),be(B,v),v&&d(D),ee[U].d(v),v&&d($),v&&d(S),J=!1,Ue(b)}}}function gl(r,e,l){let t,n,s,o;return Q(r,ke,f=>l(0,t=f)),Q(r,Ge,f=>l(1,n=f)),Q(r,Ae,f=>l(2,s=f)),Q(r,Ee,f=>l(3,o=f)),[t,n,s,o,()=>{navigator.clipboard.writeText(`${window.location.origin}/game?code=${t.toUpperCase()}`)},()=>{navigator.share({title:"UNO Game Invite",url:`${window.location.origin}/game?code=${t.toUpperCase()}`})},f=>he("kick",{target:f.nickname}),async()=>{await he("startGame")},async()=>{await he("leave")}]}class vl extends le{constructor(e){super();ne(this,e,gl,pl,re,{})}}let te;ve.subscribe(r=>{te=r});let ye;Te.subscribe(r=>{ye=r});let fe;De.subscribe(r=>{fe=r});function Pe(r,e=""){te.location===""&&r==="discard"&&Object.keys(fe).length===0||(te.location===""||r==="hand"&&te.location==="hand"&&te.cardIndex!==e||te.location==="hand"&&te.cardIndex===""?ve.set({location:r,cardIndex:e}):r===te.location?ve.set({location:"",cardIndex:""}):(r==="discard"&&te.location==="hand"&&Object.keys(fe).length>0?(fe=Oe({[te.cardIndex]:ye[te.cardIndex]},fe),delete ye[te.cardIndex],De.set(fe),Te.set(ye)):r==="hand"&&te.location==="discard"&&(ye[Object.keys(fe)[0]]=fe[Object.keys(fe)[0]],delete fe[Object.keys(fe)[0]],Te.set(ye),De.set(fe)),he("move",{source:te.location,destination:r,cardIndex:te.cardIndex}),ve.set({location:"",cardIndex:""})))}function mt(r,e,l){const t=r.slice();return t[11]=e[l][0],t[12]=e[l][1],t[14]=l,t}function pt(r,e){let l,t,n,s,o=F,a;const c=[e[12],{cardIndex:e[11]},{focused:e[4].location==="hand"&&e[4].cardIndex===e[11]}];function i(){return e[8](e[11])}let u={};for(let m=0;m<c.length;m+=1)u=nt(u,c[m]);return t=new ge({props:u}),t.$on("click",i),{key:r,first:null,c(){l=k("div"),z(t.$$.fragment),n=P(),this.h()},l(m){l=y(m,"DIV",{style:!0});var f=I(l);Y(t.$$.fragment,f),n=L(f),f.forEach(d),this.h()},h(){ue(l,"margin-top",(e[14]!==0?e[3]:0)+"px"),this.first=l},m(m,f){T(m,l,f),R(t,l,null),p(l,n),a=!0},p(m,f){e=m;const _=f&18?tt(c,[f&2&&lt(e[12]),f&2&&{cardIndex:e[11]},{focused:e[4].location==="hand"&&e[4].cardIndex===e[11]}]):{};t.$set(_),(!a||f&10)&&ue(l,"margin-top",(e[14]!==0?e[3]:0)+"px")},r(){s=l.getBoundingClientRect()},f(){Mt(l),o()},a(){o(),o=At(l,s,Gt,{duration:500})},i(m){a||(V(t.$$.fragment,m),a=!0)},o(m){O(t.$$.fragment,m),a=!1},d(m){m&&d(l),W(t)}}}function $l(r){let e,l,t,n,s=[],o=new Map,a,c,i,u=r[1];const m=f=>f[11];for(let f=0;f<u.length;f+=1){let _=mt(r,u,f),h=m(_);o.set(h,s[f]=pt(h,_))}return{c(){e=k("div"),l=k("div"),t=P(),n=k("div");for(let f=0;f<s.length;f+=1)s[f].c();this.h()},l(f){e=y(f,"DIV",{class:!0});var _=I(e);l=y(_,"DIV",{class:!0}),I(l).forEach(d),t=L(_),n=y(_,"DIV",{class:!0,style:!0});var h=I(n);for(let E=0;E<s.length;E+=1)s[E].l(h);h.forEach(d),_.forEach(d),this.h()},h(){C(l,"class","hand-bg svelte-1n1k9b4"),C(n,"class","cards svelte-1n1k9b4"),C(n,"style",""),C(e,"class","hand svelte-1n1k9b4")},m(f,_){T(f,e,_),p(e,l),r[7](l),p(e,t),p(e,n);for(let h=0;h<s.length;h+=1)s[h].m(n,null);r[9](n),a=!0,c||(i=se(l,"click",r[6]),c=!0)},p(f,[_]){if(_&26){u=f[1],oe();for(let h=0;h<s.length;h+=1)s[h].r();s=je(s,_,m,1,f,u,o,n,zt,pt,null,mt);for(let h=0;h<s.length;h+=1)s[h].a();ae()}},i(f){if(!a){for(let _=0;_<u.length;_+=1)V(s[_]);a=!0}},o(f){for(let _=0;_<s.length;_+=1)O(s[_]);a=!1},d(f){f&&d(e),r[7](null);for(let _=0;_<s.length;_+=1)s[_].d();r[9](null),c=!1,i()}}}function bl(r=0){return r*parseFloat(getComputedStyle(document.documentElement).fontSize)}function kl(r,e,l){let t,n;Q(r,Te,h=>l(5,t=h)),Q(r,ve,h=>l(4,n=h));let s,o,a=0;function c(){if(o&&s){const h=o.clientHeight-bl(5),E=s.firstElementChild.offsetHeight,D=Object.entries(t).length;D*(E+30)-30<h?l(3,a=30):l(3,a=(h-E*D)/(-1+D))}}Be(()=>{window.addEventListener("resize",c)});let i=[];const u=()=>Pe("hand");function m(h){Me[h?"unshift":"push"](()=>{o=h,l(2,o)})}const f=h=>Pe("hand",h);function _(h){Me[h?"unshift":"push"](()=>{s=h,l(0,s)})}return r.$$.update=()=>{r.$$.dirty&34&&t&&Object.entries(t).length!==i.length&&l(1,i=Object.entries(t).sort((h,E)=>h[1].color===E[1].color?parseInt(E[1].symbol)-parseInt(h[1].symbol):h[1].color.charCodeAt(0)-E[1].color.charCodeAt(0))),r.$$.dirty&3&&s&&i&&i.length>0&&setTimeout(()=>{c()},100)},[s,i,o,a,n,t,u,m,f,_]}class yl extends le{constructor(e){super();ne(this,e,kl,$l,re,{})}}function gt(r,e,l){const t=r.slice();return t[5]=e[l][0],t[6]=e[l][1],t[8]=l,t}function vt(r,e,l){const t=r.slice();return t[9]=e[l],t[8]=l,t}function $t(r){let e,l,t,n;return l=new ge({props:{color:"black",symbol:"",floatLeft:!1,focused:r[1].location==="draw"&&r[8]===3}}),{c(){e=k("div"),z(l.$$.fragment),t=P(),this.h()},l(s){e=y(s,"DIV",{class:!0});var o=I(e);Y(l.$$.fragment,o),t=L(o),o.forEach(d),this.h()},h(){C(e,"class","svelte-hwypxs")},m(s,o){T(s,e,o),R(l,e,null),p(e,t),n=!0},p(s,o){const a={};o&2&&(a.focused=s[1].location==="draw"&&s[8]===3),l.$set(a)},i(s){n||(V(l.$$.fragment,s),n=!0)},o(s){O(l.$$.fragment,s),n=!1},d(s){s&&d(e),W(l)}}}function bt(r,e){let l,t,n,s,o,a;const c=[e[6],{floatLeft:!1},{focused:e[1].location==="discard"&&e[8]===e[0].length-1}];let i={};for(let u=0;u<c.length;u+=1)i=nt(i,c[u]);return t=new ge({props:i}),{key:r,first:null,c(){l=k("div"),z(t.$$.fragment),n=P(),this.h()},l(u){l=y(u,"DIV",{class:!0});var m=I(l);Y(t.$$.fragment,m),n=L(m),m.forEach(d),this.h()},h(){C(l,"class","svelte-hwypxs"),this.first=l},m(u,m){T(u,l,m),R(t,l,null),p(l,n),a=!0},p(u,m){e=u;const f=m&3?tt(c,[m&1&&lt(e[6]),c[1],{focused:e[1].location==="discard"&&e[8]===e[0].length-1}]):{};t.$set(f)},i(u){a||(V(t.$$.fragment,u),Ie(()=>{o&&o.end(1),s=Se(l,el,{key:e[5]}),s.start()}),a=!0)},o(u){O(t.$$.fragment,u),s&&s.invalidate(),o=Ce(l,tl,{key:e[5]}),a=!1},d(u){u&&d(l),W(t),u&&o&&o.end()}}}function wl(r){let e,l,t,n,s,o,a,c=[],i=new Map,u,m,f,_=[0,0,0,0],h=[];for(let w=0;w<4;w+=1)h[w]=$t(vt(r,_,w));const E=w=>O(h[w],1,1,()=>{h[w]=null});o=new ge({props:{color:"",symbol:"",style:"silhouette"}});let D=r[0];const U=w=>w[5];for(let w=0;w<D.length;w+=1){let $=gt(r,D,w),S=U($);i.set(S,c[w]=bt(S,$))}return{c(){e=k("div"),l=k("div");for(let w=0;w<4;w+=1)h[w].c();t=P(),n=k("div"),s=k("div"),z(o.$$.fragment),a=P();for(let w=0;w<c.length;w+=1)c[w].c();this.h()},l(w){e=y(w,"DIV",{class:!0});var $=I(e);l=y($,"DIV",{class:!0});var S=I(l);for(let J=0;J<4;J+=1)h[J].l(S);S.forEach(d),t=L($),n=y($,"DIV",{class:!0});var q=I(n);s=y(q,"DIV",{class:!0});var j=I(s);Y(o.$$.fragment,j),j.forEach(d),a=L(q);for(let J=0;J<c.length;J+=1)c[J].l(q);q.forEach(d),$.forEach(d),this.h()},h(){C(l,"class","svelte-hwypxs"),C(s,"class","svelte-hwypxs"),C(n,"class","svelte-hwypxs"),C(e,"class","piles svelte-hwypxs")},m(w,$){T(w,e,$),p(e,l);for(let S=0;S<4;S+=1)h[S].m(l,null);p(e,t),p(e,n),p(n,s),R(o,s,null),p(n,a);for(let S=0;S<c.length;S+=1)c[S].m(n,null);u=!0,m||(f=[se(l,"click",r[3]),se(n,"click",r[4])],m=!0)},p(w,[$]){if($&2){_=[0,0,0,0];let S;for(S=0;S<4;S+=1){const q=vt(w,_,S);h[S]?(h[S].p(q,$),V(h[S],1)):(h[S]=$t(q),h[S].c(),V(h[S],1),h[S].m(l,null))}for(oe(),S=4;S<4;S+=1)E(S);ae()}$&3&&(D=w[0],oe(),c=je(c,$,U,1,w,D,i,n,Yt,bt,null,gt),ae())},i(w){if(!u){for(let $=0;$<4;$+=1)V(h[$]);V(o.$$.fragment,w);for(let $=0;$<D.length;$+=1)V(c[$]);u=!0}},o(w){h=h.filter(Boolean);for(let $=0;$<4;$+=1)O(h[$]);O(o.$$.fragment,w);for(let $=0;$<c.length;$+=1)O(c[$]);u=!1},d(w){w&&d(e),be(h,w),W(o);for(let $=0;$<c.length;$+=1)c[$].d();m=!1,Ue(f)}}}function Il(r,e,l){let t,n;Q(r,De,c=>l(2,t=c)),Q(r,ve,c=>l(1,n=c));let s=[];const o=()=>Pe("draw"),a=()=>Pe("discard");return r.$$.update=()=>{if(r.$$.dirty&4&&t){const c=Object.entries(t).reverse();l(0,s=c.length>6?c.slice(c.length-5,c.length):c)}},[s,n,t,o,a]}class El extends le{constructor(e){super();ne(this,e,Il,wl,re,{})}}function kt(r,e,l){const t=r.slice();return t[4]=e[l],t}function yt(r,e,l){const t=r.slice();return t[7]=e[l],t}function wt(r,e,l){const t=r.slice();return t[7]=e[l],t}function It(r,e,l){const t=r.slice();return t[7]=e[l],t}function Et(r){let e,l,t=r[4].nickname+"",n,s,o,a,c,i,u,m,f,_,h=r[2]&&Tt(r),E=Array(Math.min(r[4].count,9)),D=[];for(let b=0;b<E.length;b+=1)D[b]=Dt(It(r,E,b));const U=b=>O(D[b],1,1,()=>{D[b]=null});let w=Array(r[4].count>9?9:0),$=[];for(let b=0;b<w.length;b+=1)$[b]=Vt(wt(r,w,b));const S=b=>O($[b],1,1,()=>{$[b]=null});let q=Array(r[4].count>18?9:0),j=[];for(let b=0;b<q.length;b+=1)j[b]=Ht(yt(r,q,b));const J=b=>O(j[b],1,1,()=>{j[b]=null});return{c(){e=k("div"),l=k("div"),n=M(t),s=P(),h&&h.c(),o=P(),a=k("div");for(let b=0;b<D.length;b+=1)D[b].c();c=P(),i=k("div");for(let b=0;b<$.length;b+=1)$[b].c();u=P(),m=k("div");for(let b=0;b<j.length;b+=1)j[b].c();f=P(),this.h()},l(b){e=y(b,"DIV",{class:!0});var H=I(e);l=y(H,"DIV",{class:!0});var g=I(l);n=A(g,t),s=L(g),h&&h.l(g),g.forEach(d),o=L(H),a=y(H,"DIV",{class:!0});var B=I(a);for(let K=0;K<D.length;K+=1)D[K].l(B);c=L(B),i=y(B,"DIV",{class:!0});var de=I(i);for(let K=0;K<$.length;K+=1)$[K].l(de);de.forEach(d),u=L(B),m=y(B,"DIV",{class:!0});var ee=I(m);for(let K=0;K<j.length;K+=1)j[K].l(ee);ee.forEach(d),B.forEach(d),f=L(H),H.forEach(d),this.h()},h(){C(l,"class","nickname svelte-lypbk0"),C(i,"class","layered-count svelte-lypbk0"),C(m,"class","layered-count svelte-lypbk0"),C(a,"class","count svelte-lypbk0"),C(e,"class","hand")},m(b,H){T(b,e,H),p(e,l),p(l,n),p(l,s),h&&h.m(l,null),p(e,o),p(e,a);for(let g=0;g<D.length;g+=1)D[g].m(a,null);p(a,c),p(a,i);for(let g=0;g<$.length;g+=1)$[g].m(i,null);p(a,u),p(a,m);for(let g=0;g<j.length;g+=1)j[g].m(m,null);p(e,f),_=!0},p(b,H){if((!_||H&1)&&t!==(t=b[4].nickname+"")&&_e(n,t),b[2]?h?h.p(b,H):(h=Tt(b),h.c(),h.m(l,null)):h&&(h.d(1),h=null),H&1){E=Array(Math.min(b[4].count,9));let g;for(g=0;g<E.length;g+=1){const B=It(b,E,g);D[g]?(D[g].p(B,H),V(D[g],1)):(D[g]=Dt(),D[g].c(),V(D[g],1),D[g].m(a,c))}for(oe(),g=E.length;g<D.length;g+=1)U(g);ae()}if(H&1){w=Array(b[4].count>9?9:0);let g;for(g=0;g<w.length;g+=1){const B=wt(b,w,g);$[g]?($[g].p(B,H),V($[g],1)):($[g]=Vt(),$[g].c(),V($[g],1),$[g].m(i,null))}for(oe(),g=w.length;g<$.length;g+=1)S(g);ae()}if(H&1){q=Array(b[4].count>18?9:0);let g;for(g=0;g<q.length;g+=1){const B=yt(b,q,g);j[g]?(j[g].p(B,H),V(j[g],1)):(j[g]=Ht(),j[g].c(),V(j[g],1),j[g].m(m,null))}for(oe(),g=q.length;g<j.length;g+=1)J(g);ae()}},i(b){if(!_){for(let H=0;H<E.length;H+=1)V(D[H]);for(let H=0;H<w.length;H+=1)V($[H]);for(let H=0;H<q.length;H+=1)V(j[H]);_=!0}},o(b){D=D.filter(Boolean);for(let H=0;H<D.length;H+=1)O(D[H]);$=$.filter(Boolean);for(let H=0;H<$.length;H+=1)O($[H]);j=j.filter(Boolean);for(let H=0;H<j.length;H+=1)O(j[H]);_=!1},d(b){b&&d(e),h&&h.d(),be(D,b),be($,b),be(j,b)}}}function Tt(r){let e,l,t,n;function s(){return r[3](r[4])}return{c(){e=k("button"),l=M("Kick"),this.h()},l(o){e=y(o,"BUTTON",{class:!0});var a=I(e);l=A(a,"Kick"),a.forEach(d),this.h()},h(){C(e,"class","svelte-lypbk0")},m(o,a){T(o,e,a),p(e,l),t||(n=se(e,"click",s),t=!0)},p(o,a){r=o},d(o){o&&d(e),t=!1,n()}}}function Dt(r){let e,l;return e=new ge({props:{color:"black",symbol:""}}),{c(){z(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,n){R(e,t,n),l=!0},p:F,i(t){l||(V(e.$$.fragment,t),l=!0)},o(t){O(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function Vt(r){let e,l;return e=new ge({props:{color:"black",symbol:""}}),{c(){z(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,n){R(e,t,n),l=!0},p:F,i(t){l||(V(e.$$.fragment,t),l=!0)},o(t){O(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function Ht(r){let e,l;return e=new ge({props:{color:"black",symbol:""}}),{c(){z(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,n){R(e,t,n),l=!0},p:F,i(t){l||(V(e.$$.fragment,t),l=!0)},o(t){O(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function Ot(r){let e,l,t=r[4].nickname!==r[1]&&Et(r);return{c(){t&&t.c(),e=rt()},l(n){t&&t.l(n),e=rt()},m(n,s){t&&t.m(n,s),T(n,e,s),l=!0},p(n,s){n[4].nickname!==n[1]?t?(t.p(n,s),s&3&&V(t,1)):(t=Et(n),t.c(),V(t,1),t.m(e.parentNode,e)):t&&(oe(),O(t,1,1,()=>{t=null}),ae())},i(n){l||(V(t),l=!0)},o(n){O(t),l=!1},d(n){t&&t.d(n),n&&d(e)}}}function Tl(r){let e,l,t,n=r[0],s=[];for(let a=0;a<n.length;a+=1)s[a]=Ot(kt(r,n,a));const o=a=>O(s[a],1,1,()=>{s[a]=null});return{c(){e=k("div"),l=k("div");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=y(a,"DIV",{class:!0});var c=I(e);l=y(c,"DIV",{class:!0});var i=I(l);for(let u=0;u<s.length;u+=1)s[u].l(i);i.forEach(d),c.forEach(d),this.h()},h(){C(l,"class","hands svelte-lypbk0"),C(e,"class","players svelte-lypbk0")},m(a,c){T(a,e,c),p(e,l);for(let i=0;i<s.length;i+=1)s[i].m(l,null);t=!0},p(a,[c]){if(c&7){n=a[0];let i;for(i=0;i<n.length;i+=1){const u=kt(a,n,i);s[i]?(s[i].p(u,c),V(s[i],1)):(s[i]=Ot(u),s[i].c(),V(s[i],1),s[i].m(l,null))}for(oe(),i=n.length;i<s.length;i+=1)o(i);ae()}},i(a){if(!t){for(let c=0;c<n.length;c+=1)V(s[c]);t=!0}},o(a){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)O(s[c]);t=!1},d(a){a&&d(e),be(s,a)}}}function Dl(r,e,l){let t,n,s;return Q(r,Ge,a=>l(0,t=a)),Q(r,Ae,a=>l(1,n=a)),Q(r,Ee,a=>l(2,s=a)),[t,n,s,a=>he("kick",{target:a.nickname})]}class Vl extends le{constructor(e){super();ne(this,e,Dl,Tl,re,{})}}function Hl(r){let e,l,t,n,s;const o=r[4].default,a=Rt(o,r,r[3],null);return{c(){e=k("div"),l=k("div"),a&&a.c(),this.h()},l(c){e=y(c,"DIV",{class:!0,style:!0});var i=I(e);l=y(i,"DIV",{class:!0});var u=I(l);a&&a.l(u),u.forEach(d),i.forEach(d),this.h()},h(){C(l,"class","icon svelte-11cx6hz"),C(e,"class","option svelte-11cx6hz"),ue(e,"background-color",r[2].page===r[0]?r[1]:"transparent")},m(c,i){T(c,e,i),p(e,l),a&&a.m(l,null),t=!0,n||(s=se(e,"click",r[5]),n=!0)},p(c,[i]){a&&a.p&&(!t||i&8)&&Wt(a,o,c,c[3],t?Jt(o,c[3],i,null):qt(c[3]),null),(!t||i&7)&&ue(e,"background-color",c[2].page===c[0]?c[1]:"transparent")},i(c){t||(V(a,c),t=!0)},o(c){O(a,c),t=!1},d(c){c&&d(e),a&&a.d(c),n=!1,s()}}}function Ol(r,e,l){let t;Q(r,Ve,i=>l(2,t=i));let{$$slots:n={},$$scope:s}=e,{page:o=""}=e,{color:a=""}=e;const c=()=>{t.page!==o?$e(Ve,t={page:o,color:a},t):$e(Ve,t={page:"",color:""},t)};return r.$$set=i=>{"page"in i&&l(0,o=i.page),"color"in i&&l(1,a=i.color),"$$scope"in i&&l(3,s=i.$$scope)},[o,a,t,s,n,c]}class Le extends le{constructor(e){super();ne(this,e,Ol,Hl,re,{page:0,color:1})}}function Sl(r){let e,l;return e=new Kt({}),{c(){z(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,n){R(e,t,n),l=!0},i(t){l||(V(e.$$.fragment,t),l=!0)},o(t){O(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function Cl(r){let e,l;return e=new Ft({}),{c(){z(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,n){R(e,t,n),l=!0},i(t){l||(V(e.$$.fragment,t),l=!0)},o(t){O(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function Nl(r){let e,l;return e=new Qt({}),{c(){z(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,n){R(e,t,n),l=!0},i(t){l||(V(e.$$.fragment,t),l=!0)},o(t){O(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function Pl(r){let e,l;return e=new Xt({}),{c(){z(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,n){R(e,t,n),l=!0},i(t){l||(V(e.$$.fragment,t),l=!0)},o(t){O(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function Ll(r){let e,l,t,n,s,o,a,c,i,u,m;return l=new Le({props:{page:"leave",color:"hsla(1, 60%, 60%, 1)",$$slots:{default:[Sl]},$$scope:{ctx:r}}}),n=new Le({props:{page:"help",color:"hsla(220, 50%, 60%, 1)",$$slots:{default:[Cl]},$$scope:{ctx:r}}}),o=new Le({props:{page:"history",color:"hsla(35, 90%, 60%, 1)",$$slots:{default:[Nl]},$$scope:{ctx:r}}}),c=new Le({props:{page:"",color:"hsla(8, 30%, 30%, 1)",$$slots:{default:[Pl]},$$scope:{ctx:r}}}),{c(){e=k("div"),z(l.$$.fragment),t=P(),z(n.$$.fragment),s=P(),z(o.$$.fragment),a=P(),z(c.$$.fragment),i=P(),u=k("div"),this.h()},l(f){e=y(f,"DIV",{class:!0});var _=I(e);Y(l.$$.fragment,_),t=L(_),Y(n.$$.fragment,_),s=L(_),Y(o.$$.fragment,_),a=L(_),Y(c.$$.fragment,_),_.forEach(d),i=L(f),u=y(f,"DIV",{class:!0}),I(u).forEach(d),this.h()},h(){C(e,"class","menu svelte-woevsr"),C(u,"class","bottom-bg svelte-woevsr")},m(f,_){T(f,e,_),R(l,e,null),p(e,t),R(n,e,null),p(e,s),R(o,e,null),p(e,a),R(c,e,null),T(f,i,_),T(f,u,_),m=!0},p(f,[_]){const h={};_&1&&(h.$$scope={dirty:_,ctx:f}),l.$set(h);const E={};_&1&&(E.$$scope={dirty:_,ctx:f}),n.$set(E);const D={};_&1&&(D.$$scope={dirty:_,ctx:f}),o.$set(D);const U={};_&1&&(U.$$scope={dirty:_,ctx:f}),c.$set(U)},i(f){m||(V(l.$$.fragment,f),V(n.$$.fragment,f),V(o.$$.fragment,f),V(c.$$.fragment,f),m=!0)},o(f){O(l.$$.fragment,f),O(n.$$.fragment,f),O(o.$$.fragment,f),O(c.$$.fragment,f),m=!1},d(f){f&&d(e),W(l),W(n),W(o),W(c),f&&d(i),f&&d(u)}}}class Ul extends le{constructor(e){super();ne(this,e,null,Ll,re,{})}}function jl(r){let e,l,t,n,s,o,a;return{c(){e=k("h3"),l=M("Are you sure you want to leave?"),t=P(),n=k("button"),s=M("Leave game"),this.h()},l(c){e=y(c,"H3",{});var i=I(e);l=A(i,"Are you sure you want to leave?"),i.forEach(d),t=L(c),n=y(c,"BUTTON",{class:!0});var u=I(n);s=A(u,"Leave game"),u.forEach(d),this.h()},h(){C(n,"class","bg-white")},m(c,i){T(c,e,i),p(e,l),T(c,t,i),T(c,n,i),p(n,s),o||(a=se(n,"click",r[0]),o=!0)},p:F,i:F,o:F,d(c){c&&d(e),c&&d(t),c&&d(n),o=!1,a()}}}function Bl(r){return[()=>he("leave")]}class Ml extends le{constructor(e){super();ne(this,e,Bl,jl,re,{})}}function Al(r){let e,l,t,n,s,o,a,c,i,u,m,f,_,h,E,D,U,w,$,S,q,j,J,b,H,g,B,de,ee,K,v,G,x,X;return{c(){e=k("h1"),l=M("How to play"),t=P(),n=k("h4"),s=M("1. The black bottom bar of your screen is for navigating between pages, and the game board."),o=P(),a=k("ul"),c=k("li"),i=M("The far left button, a door, is for leaving this game."),u=P(),m=k("li"),f=M("The book button is for viewing this page, which is to help players."),_=P(),h=k("li"),E=M(`The hour glass button is for the history page, showing all the events that have happened in the
		game. It records when players join, leave, and when they play cards.`),D=P(),U=k("li"),w=M(`The far right button, of the two people, is for the game board, where you play UNO. You'll spend
		most of your time there.`),$=P(),S=k("h4"),q=M("2. The game board is split into 2 main parts:"),j=P(),J=k("ul"),b=k("li"),H=M(`The table, on the left, where you can see everyone else's hands, and the two stacks, the discard
		and draw pile.`),g=P(),B=k("li"),de=M(`Your hand is on the right, in a vertical strip. You can't reorder the cards in your hand, but
		they should automagically end up in a pleasing order.`),ee=P(),K=k("h4"),v=M("3. Move cards by clicking one to move, and then a destination."),G=P(),x=k("p"),X=M(`Clicking a card will select it, seen by it rising and shining. Then, click another card or area to
	move it to. If you accidentally selected the card or want to change your mind, click the card again
	to deselect it.`),this.h()},l(N){e=y(N,"H1",{});var Z=I(e);l=A(Z,"How to play"),Z.forEach(d),t=L(N),n=y(N,"H4",{class:!0});var we=I(n);s=A(we,"1. The black bottom bar of your screen is for navigating between pages, and the game board."),we.forEach(d),o=L(N),a=y(N,"UL",{});var ie=I(a);c=y(ie,"LI",{});var Ye=I(c);i=A(Ye,"The far left button, a door, is for leaving this game."),Ye.forEach(d),u=L(ie),m=y(ie,"LI",{});var Re=I(m);f=A(Re,"The book button is for viewing this page, which is to help players."),Re.forEach(d),_=L(ie),h=y(ie,"LI",{});var We=I(h);E=A(We,`The hour glass button is for the history page, showing all the events that have happened in the
		game. It records when players join, leave, and when they play cards.`),We.forEach(d),D=L(ie),U=y(ie,"LI",{});var qe=I(U);w=A(qe,`The far right button, of the two people, is for the game board, where you play UNO. You'll spend
		most of your time there.`),qe.forEach(d),ie.forEach(d),$=L(N),S=y(N,"H4",{class:!0});var Je=I(S);q=A(Je,"2. The game board is split into 2 main parts:"),Je.forEach(d),j=L(N),J=y(N,"UL",{});var He=I(J);b=y(He,"LI",{});var Ke=I(b);H=A(Ke,`The table, on the left, where you can see everyone else's hands, and the two stacks, the discard
		and draw pile.`),Ke.forEach(d),g=L(He),B=y(He,"LI",{});var Fe=I(B);de=A(Fe,`Your hand is on the right, in a vertical strip. You can't reorder the cards in your hand, but
		they should automagically end up in a pleasing order.`),Fe.forEach(d),He.forEach(d),ee=L(N),K=y(N,"H4",{class:!0});var Qe=I(K);v=A(Qe,"3. Move cards by clicking one to move, and then a destination."),Qe.forEach(d),G=L(N),x=y(N,"P",{});var Xe=I(x);X=A(Xe,`Clicking a card will select it, seen by it rising and shining. Then, click another card or area to
	move it to. If you accidentally selected the card or want to change your mind, click the card again
	to deselect it.`),Xe.forEach(d),this.h()},h(){C(n,"class","svelte-6xyuhn"),C(S,"class","svelte-6xyuhn"),C(K,"class","svelte-6xyuhn")},m(N,Z){T(N,e,Z),p(e,l),T(N,t,Z),T(N,n,Z),p(n,s),T(N,o,Z),T(N,a,Z),p(a,c),p(c,i),p(a,u),p(a,m),p(m,f),p(a,_),p(a,h),p(h,E),p(a,D),p(a,U),p(U,w),T(N,$,Z),T(N,S,Z),p(S,q),T(N,j,Z),T(N,J,Z),p(J,b),p(b,H),p(J,g),p(J,B),p(B,de),T(N,ee,Z),T(N,K,Z),p(K,v),T(N,G,Z),T(N,x,Z),p(x,X)},p:F,i:F,o:F,d(N){N&&d(e),N&&d(t),N&&d(n),N&&d(o),N&&d(a),N&&d($),N&&d(S),N&&d(j),N&&d(J),N&&d(ee),N&&d(K),N&&d(G),N&&d(x)}}}class Gl extends le{constructor(e){super();ne(this,e,null,Al,re,{})}}function St(r,e){const l=new Date(e),t=Math.round((r-+l)/1e3),n=60,s=n*60,o=s*24;let a;return t<2?a="just now":t<n?a=t+" seconds ago":t<2*n?a="a minute ago":t<s?a=Math.floor(t/n)+" minutes ago":Math.floor(t/s)==1?a="1 hour ago":t<o?a=Math.floor(t/s)+" hours ago":t<o*2&&(a="yesterday"),a}function Ct(r,e,l){const t=r.slice();return t[4]=e[l],t}function Nt(r,e){let l,t,n=St(e[0],e[4].time)+"",s,o,a,c=e[4].message+"",i,u;return{key:r,first:null,c(){l=k("div"),t=k("span"),s=M(n),o=P(),a=k("div"),i=M(c),u=P(),this.h()},l(m){l=y(m,"DIV",{});var f=I(l);t=y(f,"SPAN",{});var _=I(t);s=A(_,n),_.forEach(d),o=L(f),a=y(f,"DIV",{});var h=I(a);i=A(h,c),h.forEach(d),u=L(f),f.forEach(d),this.h()},h(){this.first=l},m(m,f){T(m,l,f),p(l,t),p(t,s),p(l,o),p(l,a),p(a,i),p(l,u)},p(m,f){e=m,f&5&&n!==(n=St(e[0],e[4].time)+"")&&_e(s,n),f&4&&c!==(c=e[4].message+"")&&_e(i,c)},d(m){m&&d(l)}}}function zl(r){let e,l,t,n,s=[],o=new Map,a=r[2];const c=i=>i[4].time;for(let i=0;i<a.length;i+=1){let u=Ct(r,a,i),m=c(u);o.set(m,s[i]=Nt(m,u))}return{c(){e=k("h1"),l=M("History"),t=P(),n=k("div");for(let i=0;i<s.length;i+=1)s[i].c()},l(i){e=y(i,"H1",{});var u=I(e);l=A(u,"History"),u.forEach(d),t=L(i),n=y(i,"DIV",{});var m=I(n);for(let f=0;f<s.length;f+=1)s[f].l(m);m.forEach(d)},m(i,u){T(i,e,u),p(e,l),T(i,t,u),T(i,n,u);for(let m=0;m<s.length;m+=1)s[m].m(n,null);r[3](n)},p(i,[u]){u&5&&(a=i[2],s=je(s,u,c,1,i,a,o,n,Zt,Nt,null,Ct))},i:F,o:F,d(i){i&&d(e),i&&d(t),i&&d(n);for(let u=0;u<s.length;u+=1)s[u].d();r[3](null)}}}function Yl(r,e,l){let t;Q(r,ft,a=>l(2,t=a));let n=new Date,s;Be(()=>{s.scrollIntoView(!1),setInterval(()=>{l(0,n=new Date)},3e3+Math.random()*3e3)});function o(a){Me[a?"unshift":"push"](()=>{s=a,l(1,s)})}return[n,s,t,o]}class Rl extends le{constructor(e){super();ne(this,e,Yl,zl,re,{})}}function Pt(r){let e,l,t,n,s;const o=[Jl,ql,Wl],a=[];function c(i,u){return i[0].page==="leave"?0:i[0].page==="help"?1:i[0].page==="history"?2:-1}return~(l=c(r))&&(t=a[l]=o[l](r)),{c(){e=k("div"),t&&t.c(),this.h()},l(i){e=y(i,"DIV",{class:!0,style:!0});var u=I(e);t&&t.l(u),u.forEach(d),this.h()},h(){C(e,"class","page svelte-ntu70e"),ue(e,"background-color",r[0].color.replace("60%, 1)","40%, 0.8)"))},m(i,u){T(i,e,u),~l&&a[l].m(e,null),s=!0},p(i,u){let m=l;l=c(i),l!==m&&(t&&(oe(),O(a[m],1,1,()=>{a[m]=null}),ae()),~l?(t=a[l],t||(t=a[l]=o[l](i),t.c()),V(t,1),t.m(e,null)):t=null),(!s||u&1)&&ue(e,"background-color",i[0].color.replace("60%, 1)","40%, 0.8)"))},i(i){s||(V(t),Ie(()=>{n||(n=st(e,me,{y:-1e3,duration:1e3},!0)),n.run(1)}),s=!0)},o(i){O(t),n||(n=st(e,me,{y:-1e3,duration:1e3},!1)),n.run(0),s=!1},d(i){i&&d(e),~l&&a[l].d(),i&&n&&n.end()}}}function Wl(r){let e,l;return e=new Rl({}),{c(){z(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,n){R(e,t,n),l=!0},i(t){l||(V(e.$$.fragment,t),l=!0)},o(t){O(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function ql(r){let e,l;return e=new Gl({}),{c(){z(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,n){R(e,t,n),l=!0},i(t){l||(V(e.$$.fragment,t),l=!0)},o(t){O(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function Jl(r){let e,l;return e=new Ml({}),{c(){z(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,n){R(e,t,n),l=!0},i(t){l||(V(e.$$.fragment,t),l=!0)},o(t){O(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function Kl(r){let e,l,t,n,s,o,a,c,i,u,m,f,_=r[0].page&&Pt(r);return s=new Vl({}),a=new El({}),i=new yl({}),m=new Ul({}),{c(){e=k("div"),_&&_.c(),l=P(),t=k("div"),n=k("div"),z(s.$$.fragment),o=P(),z(a.$$.fragment),c=P(),z(i.$$.fragment),u=P(),z(m.$$.fragment),this.h()},l(h){e=y(h,"DIV",{class:!0,style:!0});var E=I(e);_&&_.l(E),l=L(E),t=y(E,"DIV",{class:!0});var D=I(t);n=y(D,"DIV",{class:!0});var U=I(n);Y(s.$$.fragment,U),o=L(U),Y(a.$$.fragment,U),U.forEach(d),c=L(D),Y(i.$$.fragment,D),D.forEach(d),u=L(E),Y(m.$$.fragment,E),E.forEach(d),this.h()},h(){C(n,"class","table svelte-ntu70e"),C(t,"class","hand-table svelte-ntu70e"),C(e,"class","game svelte-ntu70e"),ue(e,"height",window.innerHeight+"px"),ue(e,"max-height",window.innerHeight+"px")},m(h,E){T(h,e,E),_&&_.m(e,null),p(e,l),p(e,t),p(t,n),R(s,n,null),p(n,o),R(a,n,null),p(t,c),R(i,t,null),p(e,u),R(m,e,null),f=!0},p(h,[E]){h[0].page?_?(_.p(h,E),E&1&&V(_,1)):(_=Pt(h),_.c(),V(_,1),_.m(e,l)):_&&(oe(),O(_,1,1,()=>{_=null}),ae())},i(h){f||(V(_),V(s.$$.fragment,h),V(a.$$.fragment,h),V(i.$$.fragment,h),V(m.$$.fragment,h),f=!0)},o(h){O(_),O(s.$$.fragment,h),O(a.$$.fragment,h),O(i.$$.fragment,h),O(m.$$.fragment,h),f=!1},d(h){h&&d(e),_&&_.d(),W(s),W(a),W(i),W(m)}}}function Fl(r,e,l){let t;return Q(r,Ve,n=>l(0,t=n)),[t]}class Ql extends le{constructor(e){super();ne(this,e,Fl,Kl,re,{})}}function Lt(r){let e,l;return e=new ll({props:{style:r[1].style,message:r[1].message,closable:r[1].closable}}),e.$on("close",r[5]),{c(){z(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,n){R(e,t,n),l=!0},p(t,n){const s={};n&2&&(s.style=t[1].style),n&2&&(s.message=t[1].message),n&2&&(s.closable=t[1].closable),e.$set(s)},i(t){l||(V(e.$$.fragment,t),l=!0)},o(t){O(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function Xl(r){let e,l,t,n,s;return l=new Ql({}),{c(){e=k("div"),z(l.$$.fragment),this.h()},l(o){e=y(o,"DIV",{class:!0});var a=I(e);Y(l.$$.fragment,a),a.forEach(d),this.h()},h(){C(e,"class","svelte-12xkxee")},m(o,a){T(o,e,a),R(l,e,null),s=!0},p(o,a){r=o},i(o){s||(V(l.$$.fragment,o),Ie(()=>{n&&n.end(1),t=Se(e,me,r[2]),t.start()}),s=!0)},o(o){O(l.$$.fragment,o),t&&t.invalidate(),n=Ce(e,me,r[3]),s=!1},d(o){o&&d(e),W(l),o&&n&&n.end()}}}function Zl(r){let e,l,t,n,s;return l=new vl({}),{c(){e=k("div"),z(l.$$.fragment),this.h()},l(o){e=y(o,"DIV",{class:!0});var a=I(e);Y(l.$$.fragment,a),a.forEach(d),this.h()},h(){C(e,"class","svelte-12xkxee")},m(o,a){T(o,e,a),R(l,e,null),s=!0},p(o,a){r=o},i(o){s||(V(l.$$.fragment,o),Ie(()=>{n&&n.end(1),t=Se(e,me,r[2]),t.start()}),s=!0)},o(o){O(l.$$.fragment,o),t&&t.invalidate(),n=Ce(e,me,r[3]),s=!1},d(o){o&&d(e),W(l),o&&n&&n.end()}}}function xl(r){let e,l,t,n,s;return l=new cl({}),{c(){e=k("div"),z(l.$$.fragment),this.h()},l(o){e=y(o,"DIV",{class:!0});var a=I(e);Y(l.$$.fragment,a),a.forEach(d),this.h()},h(){C(e,"class","svelte-12xkxee")},m(o,a){T(o,e,a),R(l,e,null),s=!0},p(o,a){r=o},i(o){s||(V(l.$$.fragment,o),Ie(()=>{n&&n.end(1),t=Se(e,me,r[2]),t.start()}),s=!0)},o(o){O(l.$$.fragment,o),t&&t.invalidate(),n=Ce(e,me,r[3]),s=!1},d(o){o&&d(e),W(l),o&&n&&n.end()}}}function en(r){let e,l,t,n,s,o=r[1].show&&Lt(r);const a=[xl,Zl,Xl],c=[];function i(u,m){return u[0]==="profile"?0:u[0]==="lobby"?1:u[0]==="game"?2:-1}return~(t=i(r))&&(n=c[t]=a[t](r)),{c(){o&&o.c(),e=P(),l=k("div"),n&&n.c(),this.h()},l(u){o&&o.l(u),e=L(u),l=y(u,"DIV",{class:!0});var m=I(l);n&&n.l(m),m.forEach(d),this.h()},h(){C(l,"class","game svelte-12xkxee")},m(u,m){o&&o.m(u,m),T(u,e,m),T(u,l,m),~t&&c[t].m(l,null),s=!0},p(u,[m]){u[1].show?o?(o.p(u,m),m&2&&V(o,1)):(o=Lt(u),o.c(),V(o,1),o.m(e.parentNode,e)):o&&(oe(),O(o,1,1,()=>{o=null}),ae());let f=t;t=i(u),t===f?~t&&c[t].p(u,m):(n&&(oe(),O(c[f],1,1,()=>{c[f]=null}),ae()),~t?(n=c[t],n?n.p(u,m):(n=c[t]=a[t](u),n.c()),V(n,1),n.m(l,null)):n=null)},i(u){s||(V(o),V(n),s=!0)},o(u){O(o),O(n),s=!1},d(u){o&&o.d(u),u&&d(e),u&&d(l),~t&&c[t].d()}}}function tn(r,e,l){let t,n,s;Q(r,ke,i=>l(4,t=i)),Q(r,ct,i=>l(0,n=i)),Q(r,pe,i=>l(1,s=i)),Be(()=>{he("register",{recovery:localStorage.getItem("recovery")})});const o={x:400,duration:500},a={x:-400,duration:500},c=()=>{$e(pe,s.show=!1,s)};return r.$$.update=()=>{r.$$.dirty&17&&n==="lobby"&&window.history.replaceState(null,null,`?code=${t.toUpperCase()}`)},[n,s,o,a,t,c]}class on extends le{constructor(e){super();ne(this,e,tn,en,re,{})}}export{on as default};