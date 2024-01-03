var Od=Object.defineProperty;var Ad=(t,e,n)=>e in t?Od(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Vr=(t,e,n)=>(Ad(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function Yo(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function _s(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Le(i)?Md(i):_s(i);if(s)for(const o in s)e[o]=s[o]}return e}else{if(Le(t))return t;if(Se(t))return t}}const Rd=/;(?![^(]*\))/g,Dd=/:([^]+)/,Pd=/\/\*.*?\*\//gs;function Md(t){const e={};return t.replace(Pd,"").split(Rd).forEach(n=>{if(n){const i=n.split(Dd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function qi(t){let e="";if(Le(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const i=qi(t[n]);i&&(e+=i+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Bd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fd=Yo(Bd);function bl(t){return!!t||t===""}const Dt=t=>Le(t)?t:t==null?"":se(t)||Se(t)&&(t.toString===wl||!ae(t.toString))?JSON.stringify(t,vl,2):String(t),vl=(t,e)=>e&&e.__v_isRef?vl(t,e.value):Vn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:yl(e)?{[`Set(${e.size})`]:[...e.values()]}:Se(e)&&!se(e)&&!$l(e)?String(e):e,Ie={},Nn=[],Ct=()=>{},Ld=()=>!1,Hd=/^on[^a-z]/,Es=t=>Hd.test(t),Qo=t=>t.startsWith("onUpdate:"),je=Object.assign,Jo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Nd=Object.prototype.hasOwnProperty,ge=(t,e)=>Nd.call(t,e),se=Array.isArray,Vn=t=>Os(t)==="[object Map]",yl=t=>Os(t)==="[object Set]",ae=t=>typeof t=="function",Le=t=>typeof t=="string",Xo=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",xl=t=>Se(t)&&ae(t.then)&&ae(t.catch),wl=Object.prototype.toString,Os=t=>wl.call(t),Vd=t=>Os(t).slice(8,-1),$l=t=>Os(t)==="[object Object]",Zo=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,cs=Yo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),As=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},jd=/-(\w)/g,Mt=As(t=>t.replace(jd,(e,n)=>n?n.toUpperCase():"")),zd=/\B([A-Z])/g,ei=As(t=>t.replace(zd,"-$1").toLowerCase()),Rs=As(t=>t.charAt(0).toUpperCase()+t.slice(1)),Zs=As(t=>t?`on${Rs(t)}`:""),Oi=(t,e)=>!Object.is(t,e),Ks=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ms=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ko=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let jr;const Ud=()=>jr||(jr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let lt;class Cl{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=lt,!e&&lt&&(this.index=(lt.scopes||(lt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=lt;try{return lt=this,e()}finally{lt=n}}}on(){lt=this}off(){lt=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function kl(t){return new Cl(t)}function qd(t,e=lt){e&&e.active&&e.effects.push(t)}function Wd(){return lt}function Gd(t){lt&&lt.cleanups.push(t)}const er=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Tl=t=>(t.w&an)>0,Sl=t=>(t.n&an)>0,Yd=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=an},Qd=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Tl(s)&&!Sl(s)?s.delete(t):e[n++]=s,s.w&=~an,s.n&=~an}e.length=n}},So=new WeakMap;let yi=0,an=1;const Io=30;let yt;const Tn=Symbol(""),_o=Symbol("");class tr{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,qd(this,i)}run(){if(!this.active)return this.fn();let e=yt,n=nn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=yt,yt=this,nn=!0,an=1<<++yi,yi<=Io?Yd(this):zr(this),this.fn()}finally{yi<=Io&&Qd(this),an=1<<--yi,yt=this.parent,nn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){yt===this?this.deferStop=!0:this.active&&(zr(this),this.onStop&&this.onStop(),this.active=!1)}}function zr(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let nn=!0;const Il=[];function ti(){Il.push(nn),nn=!1}function ni(){const t=Il.pop();nn=t===void 0?!0:t}function ct(t,e,n){if(nn&&yt){let i=So.get(t);i||So.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=er()),_l(s)}}function _l(t,e){let n=!1;yi<=Io?Sl(t)||(t.n|=an,n=!Tl(t)):n=!t.has(yt),n&&(t.add(yt),yt.deps.push(t))}function jt(t,e,n,i,s,o){const r=So.get(t);if(!r)return;let a=[];if(e==="clear")a=[...r.values()];else if(n==="length"&&se(t)){const l=Ko(i);r.forEach((c,d)=>{(d==="length"||d>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(r.get(n)),e){case"add":se(t)?Zo(n)&&a.push(r.get("length")):(a.push(r.get(Tn)),Vn(t)&&a.push(r.get(_o)));break;case"delete":se(t)||(a.push(r.get(Tn)),Vn(t)&&a.push(r.get(_o)));break;case"set":Vn(t)&&a.push(r.get(Tn));break}if(a.length===1)a[0]&&Eo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Eo(er(l))}}function Eo(t,e){const n=se(t)?t:[...t];for(const i of n)i.computed&&Ur(i);for(const i of n)i.computed||Ur(i)}function Ur(t,e){(t!==yt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Jd=Yo("__proto__,__v_isRef,__isVue"),El=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Xo)),Xd=nr(),Zd=nr(!1,!0),Kd=nr(!0),qr=eu();function eu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=me(this);for(let o=0,r=this.length;o<r;o++)ct(i,"get",o+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(me)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ti();const i=me(this)[e].apply(this,n);return ni(),i}}),t}function nr(t=!1,e=!1){return function(i,s,o){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&o===(t?e?mu:Pl:e?Dl:Rl).get(i))return i;const r=se(i);if(!t&&r&&ge(qr,s))return Reflect.get(qr,s,o);const a=Reflect.get(i,s,o);return(Xo(s)?El.has(s):Jd(s))||(t||ct(i,"get",s),e)?a:Be(a)?r&&Zo(s)?a:a.value:Se(a)?t?Ml(a):ii(a):a}}const tu=Ol(),nu=Ol(!0);function Ol(t=!1){return function(n,i,s,o){let r=n[i];if(Wn(r)&&Be(r)&&!Be(s))return!1;if(!t&&(!bs(s)&&!Wn(s)&&(r=me(r),s=me(s)),!se(n)&&Be(r)&&!Be(s)))return r.value=s,!0;const a=se(n)&&Zo(i)?Number(i)<n.length:ge(n,i),l=Reflect.set(n,i,s,o);return n===me(o)&&(a?Oi(s,r)&&jt(n,"set",i,s):jt(n,"add",i,s)),l}}function iu(t,e){const n=ge(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&jt(t,"delete",e,void 0),i}function su(t,e){const n=Reflect.has(t,e);return(!Xo(e)||!El.has(e))&&ct(t,"has",e),n}function ou(t){return ct(t,"iterate",se(t)?"length":Tn),Reflect.ownKeys(t)}const Al={get:Xd,set:tu,deleteProperty:iu,has:su,ownKeys:ou},ru={get:Kd,set(t,e){return!0},deleteProperty(t,e){return!0}},au=je({},Al,{get:Zd,set:nu}),ir=t=>t,Ds=t=>Reflect.getPrototypeOf(t);function Xi(t,e,n=!1,i=!1){t=t.__v_raw;const s=me(t),o=me(e);n||(e!==o&&ct(s,"get",e),ct(s,"get",o));const{has:r}=Ds(s),a=i?ir:n?rr:Ai;if(r.call(s,e))return a(t.get(e));if(r.call(s,o))return a(t.get(o));t!==s&&t.get(e)}function Zi(t,e=!1){const n=this.__v_raw,i=me(n),s=me(t);return e||(t!==s&&ct(i,"has",t),ct(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ki(t,e=!1){return t=t.__v_raw,!e&&ct(me(t),"iterate",Tn),Reflect.get(t,"size",t)}function Wr(t){t=me(t);const e=me(this);return Ds(e).has.call(e,t)||(e.add(t),jt(e,"add",t,t)),this}function Gr(t,e){e=me(e);const n=me(this),{has:i,get:s}=Ds(n);let o=i.call(n,t);o||(t=me(t),o=i.call(n,t));const r=s.call(n,t);return n.set(t,e),o?Oi(e,r)&&jt(n,"set",t,e):jt(n,"add",t,e),this}function Yr(t){const e=me(this),{has:n,get:i}=Ds(e);let s=n.call(e,t);s||(t=me(t),s=n.call(e,t)),i&&i.call(e,t);const o=e.delete(t);return s&&jt(e,"delete",t,void 0),o}function Qr(){const t=me(this),e=t.size!==0,n=t.clear();return e&&jt(t,"clear",void 0,void 0),n}function es(t,e){return function(i,s){const o=this,r=o.__v_raw,a=me(r),l=e?ir:t?rr:Ai;return!t&&ct(a,"iterate",Tn),r.forEach((c,d)=>i.call(s,l(c),l(d),o))}}function ts(t,e,n){return function(...i){const s=this.__v_raw,o=me(s),r=Vn(o),a=t==="entries"||t===Symbol.iterator&&r,l=t==="keys"&&r,c=s[t](...i),d=n?ir:e?rr:Ai;return!e&&ct(o,"iterate",l?_o:Tn),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:a?[d(u[0]),d(u[1])]:d(u),done:f}},[Symbol.iterator](){return this}}}}function Gt(t){return function(...e){return t==="delete"?!1:this}}function lu(){const t={get(o){return Xi(this,o)},get size(){return Ki(this)},has:Zi,add:Wr,set:Gr,delete:Yr,clear:Qr,forEach:es(!1,!1)},e={get(o){return Xi(this,o,!1,!0)},get size(){return Ki(this)},has:Zi,add:Wr,set:Gr,delete:Yr,clear:Qr,forEach:es(!1,!0)},n={get(o){return Xi(this,o,!0)},get size(){return Ki(this,!0)},has(o){return Zi.call(this,o,!0)},add:Gt("add"),set:Gt("set"),delete:Gt("delete"),clear:Gt("clear"),forEach:es(!0,!1)},i={get(o){return Xi(this,o,!0,!0)},get size(){return Ki(this,!0)},has(o){return Zi.call(this,o,!0)},add:Gt("add"),set:Gt("set"),delete:Gt("delete"),clear:Gt("clear"),forEach:es(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=ts(o,!1,!1),n[o]=ts(o,!0,!1),e[o]=ts(o,!1,!0),i[o]=ts(o,!0,!0)}),[t,n,e,i]}const[cu,du,uu,hu]=lu();function sr(t,e){const n=e?t?hu:uu:t?du:cu;return(i,s,o)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(ge(n,s)&&s in i?n:i,s,o)}const fu={get:sr(!1,!1)},pu={get:sr(!1,!0)},gu={get:sr(!0,!1)},Rl=new WeakMap,Dl=new WeakMap,Pl=new WeakMap,mu=new WeakMap;function bu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vu(t){return t.__v_skip||!Object.isExtensible(t)?0:bu(Vd(t))}function ii(t){return Wn(t)?t:or(t,!1,Al,fu,Rl)}function yu(t){return or(t,!1,au,pu,Dl)}function Ml(t){return or(t,!0,ru,gu,Pl)}function or(t,e,n,i,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=s.get(t);if(o)return o;const r=vu(t);if(r===0)return t;const a=new Proxy(t,r===2?i:n);return s.set(t,a),a}function sn(t){return Wn(t)?sn(t.__v_raw):!!(t&&t.__v_isReactive)}function Wn(t){return!!(t&&t.__v_isReadonly)}function bs(t){return!!(t&&t.__v_isShallow)}function Bl(t){return sn(t)||Wn(t)}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function Gn(t){return ms(t,"__v_skip",!0),t}const Ai=t=>Se(t)?ii(t):t,rr=t=>Se(t)?Ml(t):t;function Fl(t){nn&&yt&&(t=me(t),_l(t.dep||(t.dep=er())))}function Ll(t,e){t=me(t),t.dep&&Eo(t.dep)}function Be(t){return!!(t&&t.__v_isRef===!0)}function Ri(t){return Hl(t,!1)}function xu(t){return Hl(t,!0)}function Hl(t,e){return Be(t)?t:new wu(t,e)}class wu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:me(e),this._value=n?e:Ai(e)}get value(){return Fl(this),this._value}set value(e){const n=this.__v_isShallow||bs(e)||Wn(e);e=n?e:me(e),Oi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ai(e),Ll(this))}}function $e(t){return Be(t)?t.value:t}const $u={get:(t,e,n)=>$e(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Be(s)&&!Be(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Nl(t){return sn(t)?t:new Proxy(t,$u)}function Cu(t){const e=se(t)?new Array(t.length):{};for(const n in t)e[n]=Tu(t,n);return e}class ku{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Tu(t,e,n){const i=t[e];return Be(i)?i:new ku(t,e,n)}var Vl;class Su{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Vl]=!1,this._dirty=!0,this.effect=new tr(e,()=>{this._dirty||(this._dirty=!0,Ll(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=me(this);return Fl(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Vl="__v_isReadonly";function Iu(t,e,n=!1){let i,s;const o=ae(t);return o?(i=t,s=Ct):(i=t.get,s=t.set),new Su(i,s,o||!s,n)}function on(t,e,n,i){let s;try{s=i?t(...i):t()}catch(o){Ps(o,e,n)}return s}function gt(t,e,n,i){if(ae(t)){const o=on(t,e,n,i);return o&&xl(o)&&o.catch(r=>{Ps(r,e,n)}),o}const s=[];for(let o=0;o<t.length;o++)s.push(gt(t[o],e,n,i));return s}function Ps(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let o=e.parent;const r=e.proxy,a=n;for(;o;){const c=o.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](t,r,a)===!1)return}o=o.parent}const l=e.appContext.config.errorHandler;if(l){on(l,null,10,[t,r,a]);return}}_u(t,n,s,i)}function _u(t,e,n,i=!0){console.error(t)}let Di=!1,Oo=!1;const qe=[];let Rt=0;const jn=[];let Lt=null,xn=0;const jl=Promise.resolve();let ar=null;function lr(t){const e=ar||jl;return t?e.then(this?t.bind(this):t):e}function Eu(t){let e=Rt+1,n=qe.length;for(;e<n;){const i=e+n>>>1;Pi(qe[i])<t?e=i+1:n=i}return e}function cr(t){(!qe.length||!qe.includes(t,Di&&t.allowRecurse?Rt+1:Rt))&&(t.id==null?qe.push(t):qe.splice(Eu(t.id),0,t),zl())}function zl(){!Di&&!Oo&&(Oo=!0,ar=jl.then(ql))}function Ou(t){const e=qe.indexOf(t);e>Rt&&qe.splice(e,1)}function Au(t){se(t)?jn.push(...t):(!Lt||!Lt.includes(t,t.allowRecurse?xn+1:xn))&&jn.push(t),zl()}function Jr(t,e=Di?Rt+1:0){for(;e<qe.length;e++){const n=qe[e];n&&n.pre&&(qe.splice(e,1),e--,n())}}function Ul(t){if(jn.length){const e=[...new Set(jn)];if(jn.length=0,Lt){Lt.push(...e);return}for(Lt=e,Lt.sort((n,i)=>Pi(n)-Pi(i)),xn=0;xn<Lt.length;xn++)Lt[xn]();Lt=null,xn=0}}const Pi=t=>t.id==null?1/0:t.id,Ru=(t,e)=>{const n=Pi(t)-Pi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ql(t){Oo=!1,Di=!0,qe.sort(Ru);const e=Ct;try{for(Rt=0;Rt<qe.length;Rt++){const n=qe[Rt];n&&n.active!==!1&&on(n,null,14)}}finally{Rt=0,qe.length=0,Ul(),Di=!1,ar=null,(qe.length||jn.length)&&ql()}}function Du(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ie;let s=n;const o=e.startsWith("update:"),r=o&&e.slice(7);if(r&&r in i){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:u,trim:f}=i[d]||Ie;f&&(s=n.map(m=>Le(m)?m.trim():m)),u&&(s=n.map(Ko))}let a,l=i[a=Zs(e)]||i[a=Zs(Mt(e))];!l&&o&&(l=i[a=Zs(ei(e))]),l&&gt(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,gt(c,t,6,s)}}function Wl(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const o=t.emits;let r={},a=!1;if(!ae(t)){const l=c=>{const d=Wl(c,e,!0);d&&(a=!0,je(r,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(Se(t)&&i.set(t,null),null):(se(o)?o.forEach(l=>r[l]=null):je(r,o),Se(t)&&i.set(t,r),r)}function Ms(t,e){return!t||!Es(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,ei(e))||ge(t,e))}let pt=null,Bs=null;function vs(t){const e=pt;return pt=t,Bs=t&&t.type.__scopeId||null,e}function Pu(t){Bs=t}function Mu(){Bs=null}function Gl(t,e=pt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&ra(-1);const o=vs(e);let r;try{r=t(...s)}finally{vs(o),i._d&&ra(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function eo(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:o,propsOptions:[r],slots:a,attrs:l,emit:c,render:d,renderCache:u,data:f,setupState:m,ctx:v,inheritAttrs:b}=t;let A,_;const F=vs(t);try{if(n.shapeFlag&4){const J=s||i;A=At(d.call(J,J,u,o,m,f,v)),_=l}else{const J=e;A=At(J.length>1?J(o,{attrs:l,slots:a,emit:c}):J(o,null)),_=e.props?l:Bu(l)}}catch(J){$i.length=0,Ps(J,t,1),A=ke(kt)}let D=A;if(_&&b!==!1){const J=Object.keys(_),{shapeFlag:Y}=D;J.length&&Y&7&&(r&&J.some(Qo)&&(_=Fu(_,r)),D=ln(D,_))}return n.dirs&&(D=ln(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),A=D,vs(F),A}const Bu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Es(n))&&((e||(e={}))[n]=t[n]);return e},Fu=(t,e)=>{const n={};for(const i in t)(!Qo(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Lu(t,e,n){const{props:i,children:s,component:o}=t,{props:r,children:a,patchFlag:l}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Xr(i,r,c):!!r;if(l&8){const d=e.dynamicProps;for(let u=0;u<d.length;u++){const f=d[u];if(r[f]!==i[f]&&!Ms(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===r?!1:i?r?Xr(i,r,c):!0:!!r;return!1}function Xr(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const o=i[s];if(e[o]!==t[o]&&!Ms(n,o))return!0}return!1}function Hu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Nu=t=>t.__isSuspense;function Vu(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):Au(t)}function ds(t,e){if(Ve){let n=Ve.provides;const i=Ve.parent&&Ve.parent.provides;i===n&&(n=Ve.provides=Object.create(i)),n[t]=e}}function Pt(t,e,n=!1){const i=Ve||pt;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ae(e)?e.call(i.proxy):e}}const ns={};function xi(t,e,n){return Yl(t,e,n)}function Yl(t,e,{immediate:n,deep:i,flush:s,onTrack:o,onTrigger:r}=Ie){const a=Ve;let l,c=!1,d=!1;if(Be(t)?(l=()=>t.value,c=bs(t)):sn(t)?(l=()=>t,i=!0):se(t)?(d=!0,c=t.some(D=>sn(D)||bs(D)),l=()=>t.map(D=>{if(Be(D))return D.value;if(sn(D))return Fn(D);if(ae(D))return on(D,a,2)})):ae(t)?e?l=()=>on(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return u&&u(),gt(t,a,3,[f])}:l=Ct,e&&i){const D=l;l=()=>Fn(D())}let u,f=D=>{u=_.onStop=()=>{on(D,a,4)}},m;if(Li)if(f=Ct,e?n&&gt(e,a,3,[l(),d?[]:void 0,f]):l(),s==="sync"){const D=Mh();m=D.__watcherHandles||(D.__watcherHandles=[])}else return Ct;let v=d?new Array(t.length).fill(ns):ns;const b=()=>{if(!!_.active)if(e){const D=_.run();(i||c||(d?D.some((J,Y)=>Oi(J,v[Y])):Oi(D,v)))&&(u&&u(),gt(e,a,3,[D,v===ns?void 0:d&&v[0]===ns?[]:v,f]),v=D)}else _.run()};b.allowRecurse=!!e;let A;s==="sync"?A=b:s==="post"?A=()=>nt(b,a&&a.suspense):(b.pre=!0,a&&(b.id=a.uid),A=()=>cr(b));const _=new tr(l,A);e?n?b():v=_.run():s==="post"?nt(_.run.bind(_),a&&a.suspense):_.run();const F=()=>{_.stop(),a&&a.scope&&Jo(a.scope.effects,_)};return m&&m.push(F),F}function ju(t,e,n){const i=this.proxy,s=Le(t)?t.includes(".")?Ql(i,t):()=>i[t]:t.bind(i,i);let o;ae(e)?o=e:(o=e.handler,n=e);const r=Ve;Yn(this);const a=Yl(s,o.bind(i),n);return r?Yn(r):Sn(),a}function Ql(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function Fn(t,e){if(!Se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Be(t))Fn(t.value,e);else if(se(t))for(let n=0;n<t.length;n++)Fn(t[n],e);else if(yl(t)||Vn(t))t.forEach(n=>{Fn(n,e)});else if($l(t))for(const n in t)Fn(t[n],e);return t}function Jl(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ur(()=>{t.isMounted=!0}),ec(()=>{t.isUnmounting=!0}),t}const ut=[Function,Array],zu={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ut,onEnter:ut,onAfterEnter:ut,onEnterCancelled:ut,onBeforeLeave:ut,onLeave:ut,onAfterLeave:ut,onLeaveCancelled:ut,onBeforeAppear:ut,onAppear:ut,onAfterAppear:ut,onAppearCancelled:ut},setup(t,{slots:e}){const n=gr(),i=Jl();let s;return()=>{const o=e.default&&dr(e.default(),!0);if(!o||!o.length)return;let r=o[0];if(o.length>1){for(const b of o)if(b.type!==kt){r=b;break}}const a=me(t),{mode:l}=a;if(i.isLeaving)return to(r);const c=Zr(r);if(!c)return to(r);const d=Mi(c,a,i,n);Bi(c,d);const u=n.subTree,f=u&&Zr(u);let m=!1;const{getTransitionKey:v}=c.type;if(v){const b=v();s===void 0?s=b:b!==s&&(s=b,m=!0)}if(f&&f.type!==kt&&(!wn(c,f)||m)){const b=Mi(f,a,i,n);if(Bi(f,b),l==="out-in")return i.isLeaving=!0,b.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},to(r);l==="in-out"&&c.type!==kt&&(b.delayLeave=(A,_,F)=>{const D=Xl(i,f);D[String(f.key)]=f,A._leaveCb=()=>{_(),A._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=F})}return r}}},Uu=zu;function Xl(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Mi(t,e,n,i){const{appear:s,mode:o,persisted:r=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:u,onLeave:f,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:b,onAppear:A,onAfterAppear:_,onAppearCancelled:F}=e,D=String(t.key),J=Xl(n,t),Y=(M,Q)=>{M&&gt(M,i,9,Q)},te=(M,Q)=>{const q=Q[1];Y(M,Q),se(M)?M.every(xe=>xe.length<=1)&&q():M.length<=1&&q()},ee={mode:o,persisted:r,beforeEnter(M){let Q=a;if(!n.isMounted)if(s)Q=b||a;else return;M._leaveCb&&M._leaveCb(!0);const q=J[D];q&&wn(t,q)&&q.el._leaveCb&&q.el._leaveCb(),Y(Q,[M])},enter(M){let Q=l,q=c,xe=d;if(!n.isMounted)if(s)Q=A||l,q=_||c,xe=F||d;else return;let z=!1;const L=M._enterCb=I=>{z||(z=!0,I?Y(xe,[M]):Y(q,[M]),ee.delayedLeave&&ee.delayedLeave(),M._enterCb=void 0)};Q?te(Q,[M,L]):L()},leave(M,Q){const q=String(t.key);if(M._enterCb&&M._enterCb(!0),n.isUnmounting)return Q();Y(u,[M]);let xe=!1;const z=M._leaveCb=L=>{xe||(xe=!0,Q(),L?Y(v,[M]):Y(m,[M]),M._leaveCb=void 0,J[q]===t&&delete J[q])};J[q]=t,f?te(f,[M,z]):z()},clone(M){return Mi(M,e,n,i)}};return ee}function to(t){if(Fs(t))return t=ln(t),t.children=null,t}function Zr(t){return Fs(t)?t.children?t.children[0]:void 0:t}function Bi(t,e){t.shapeFlag&6&&t.component?Bi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function dr(t,e=!1,n){let i=[],s=0;for(let o=0;o<t.length;o++){let r=t[o];const a=n==null?r.key:String(n)+String(r.key!=null?r.key:o);r.type===ht?(r.patchFlag&128&&s++,i=i.concat(dr(r.children,e,a))):(e||r.type!==kt)&&i.push(a!=null?ln(r,{key:a}):r)}if(s>1)for(let o=0;o<i.length;o++)i[o].patchFlag=-2;return i}function un(t){return ae(t)?{setup:t,name:t.name}:t}const us=t=>!!t.type.__asyncLoader,Fs=t=>t.type.__isKeepAlive;function qu(t,e){Zl(t,"a",e)}function Wu(t,e){Zl(t,"da",e)}function Zl(t,e,n=Ve){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ls(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Fs(s.parent.vnode)&&Gu(i,e,n,s),s=s.parent}}function Gu(t,e,n,i){const s=Ls(e,t,i,!0);tc(()=>{Jo(i[e],s)},n)}function Ls(t,e,n=Ve,i=!1){if(n){const s=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...r)=>{if(n.isUnmounted)return;ti(),Yn(n);const a=gt(e,n,t,r);return Sn(),ni(),a});return i?s.unshift(o):s.push(o),o}}const Ut=t=>(e,n=Ve)=>(!Li||t==="sp")&&Ls(t,(...i)=>e(...i),n),Yu=Ut("bm"),ur=Ut("m"),Qu=Ut("bu"),Kl=Ut("u"),ec=Ut("bum"),tc=Ut("um"),Ju=Ut("sp"),Xu=Ut("rtg"),Zu=Ut("rtc");function Ku(t,e=Ve){Ls("ec",t,e)}function gn(t,e,n,i){const s=t.dirs,o=e&&e.dirs;for(let r=0;r<s.length;r++){const a=s[r];o&&(a.oldValue=o[r].value);let l=a.dir[i];l&&(ti(),gt(l,n,8,[t.el,a,t,e]),ni())}}const nc="components";function eh(t,e){return nh(nc,t,!0,e)||t}const th=Symbol();function nh(t,e,n=!0,i=!1){const s=pt||Ve;if(s){const o=s.type;if(t===nc){const a=Rh(o,!1);if(a&&(a===e||a===Mt(e)||a===Rs(Mt(e))))return o}const r=Kr(s[t]||o[t],e)||Kr(s.appContext[t],e);return!r&&i?o:r}}function Kr(t,e){return t&&(t[e]||t[Mt(e)]||t[Rs(Mt(e))])}function ih(t,e,n,i){let s;const o=n&&n[i];if(se(t)||Le(t)){s=new Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=e(t[r],r,void 0,o&&o[r])}else if(typeof t=="number"){s=new Array(t);for(let r=0;r<t;r++)s[r]=e(r+1,r,void 0,o&&o[r])}else if(Se(t))if(t[Symbol.iterator])s=Array.from(t,(r,a)=>e(r,a,void 0,o&&o[a]));else{const r=Object.keys(t);s=new Array(r.length);for(let a=0,l=r.length;a<l;a++){const c=r[a];s[a]=e(t[c],c,a,o&&o[a])}}else s=[];return n&&(n[i]=s),s}const Ao=t=>t?pc(t)?mr(t)||t.proxy:Ao(t.parent):null,wi=je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ao(t.parent),$root:t=>Ao(t.root),$emit:t=>t.emit,$options:t=>hr(t),$forceUpdate:t=>t.f||(t.f=()=>cr(t.update)),$nextTick:t=>t.n||(t.n=lr.bind(t.proxy)),$watch:t=>ju.bind(t)}),no=(t,e)=>t!==Ie&&!t.__isScriptSetup&&ge(t,e),sh={get({_:t},e){const{ctx:n,setupState:i,data:s,props:o,accessCache:r,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=r[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return o[e]}else{if(no(i,e))return r[e]=1,i[e];if(s!==Ie&&ge(s,e))return r[e]=2,s[e];if((c=t.propsOptions[0])&&ge(c,e))return r[e]=3,o[e];if(n!==Ie&&ge(n,e))return r[e]=4,n[e];Ro&&(r[e]=0)}}const d=wi[e];let u,f;if(d)return e==="$attrs"&&ct(t,"get",e),d(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Ie&&ge(n,e))return r[e]=4,n[e];if(f=l.config.globalProperties,ge(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:o}=t;return no(s,e)?(s[e]=n,!0):i!==Ie&&ge(i,e)?(i[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:o}},r){let a;return!!n[r]||t!==Ie&&ge(t,r)||no(e,r)||(a=o[0])&&ge(a,r)||ge(i,r)||ge(wi,r)||ge(s.config.globalProperties,r)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ro=!0;function oh(t){const e=hr(t),n=t.proxy,i=t.ctx;Ro=!1,e.beforeCreate&&ea(e.beforeCreate,t,"bc");const{data:s,computed:o,methods:r,watch:a,provide:l,inject:c,created:d,beforeMount:u,mounted:f,beforeUpdate:m,updated:v,activated:b,deactivated:A,beforeDestroy:_,beforeUnmount:F,destroyed:D,unmounted:J,render:Y,renderTracked:te,renderTriggered:ee,errorCaptured:M,serverPrefetch:Q,expose:q,inheritAttrs:xe,components:z,directives:L,filters:I}=e;if(c&&rh(c,i,null,t.appContext.config.unwrapInjectedRef),r)for(const S in r){const N=r[S];ae(N)&&(i[S]=N.bind(n))}if(s){const S=s.call(n,n);Se(S)&&(t.data=ii(S))}if(Ro=!0,o)for(const S in o){const N=o[S],X=ae(N)?N.bind(n,n):ae(N.get)?N.get.bind(n,n):Ct,ce=!ae(N)&&ae(N.set)?N.set.bind(n):Ct,be=Me({get:X,set:ce});Object.defineProperty(i,S,{enumerable:!0,configurable:!0,get:()=>be.value,set:le=>be.value=le})}if(a)for(const S in a)ic(a[S],i,n,S);if(l){const S=ae(l)?l.call(n):l;Reflect.ownKeys(S).forEach(N=>{ds(N,S[N])})}d&&ea(d,t,"c");function V(S,N){se(N)?N.forEach(X=>S(X.bind(n))):N&&S(N.bind(n))}if(V(Yu,u),V(ur,f),V(Qu,m),V(Kl,v),V(qu,b),V(Wu,A),V(Ku,M),V(Zu,te),V(Xu,ee),V(ec,F),V(tc,J),V(Ju,Q),se(q))if(q.length){const S=t.exposed||(t.exposed={});q.forEach(N=>{Object.defineProperty(S,N,{get:()=>n[N],set:X=>n[N]=X})})}else t.exposed||(t.exposed={});Y&&t.render===Ct&&(t.render=Y),xe!=null&&(t.inheritAttrs=xe),z&&(t.components=z),L&&(t.directives=L)}function rh(t,e,n=Ct,i=!1){se(t)&&(t=Do(t));for(const s in t){const o=t[s];let r;Se(o)?"default"in o?r=Pt(o.from||s,o.default,!0):r=Pt(o.from||s):r=Pt(o),Be(r)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[s]=r}}function ea(t,e,n){gt(se(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function ic(t,e,n,i){const s=i.includes(".")?Ql(n,i):()=>n[i];if(Le(t)){const o=e[t];ae(o)&&xi(s,o)}else if(ae(t))xi(s,t.bind(n));else if(Se(t))if(se(t))t.forEach(o=>ic(o,e,n,i));else{const o=ae(t.handler)?t.handler.bind(n):e[t.handler];ae(o)&&xi(s,o,t)}}function hr(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=t.appContext,a=o.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>ys(l,c,r,!0)),ys(l,e,r)),Se(e)&&o.set(e,l),l}function ys(t,e,n,i=!1){const{mixins:s,extends:o}=e;o&&ys(t,o,n,!0),s&&s.forEach(r=>ys(t,r,n,!0));for(const r in e)if(!(i&&r==="expose")){const a=ah[r]||n&&n[r];t[r]=a?a(t[r],e[r]):e[r]}return t}const ah={data:ta,props:yn,emits:yn,methods:yn,computed:yn,beforeCreate:Je,created:Je,beforeMount:Je,mounted:Je,beforeUpdate:Je,updated:Je,beforeDestroy:Je,beforeUnmount:Je,destroyed:Je,unmounted:Je,activated:Je,deactivated:Je,errorCaptured:Je,serverPrefetch:Je,components:yn,directives:yn,watch:ch,provide:ta,inject:lh};function ta(t,e){return e?t?function(){return je(ae(t)?t.call(this,this):t,ae(e)?e.call(this,this):e)}:e:t}function lh(t,e){return yn(Do(t),Do(e))}function Do(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Je(t,e){return t?[...new Set([].concat(t,e))]:e}function yn(t,e){return t?je(je(Object.create(null),t),e):e}function ch(t,e){if(!t)return e;if(!e)return t;const n=je(Object.create(null),t);for(const i in e)n[i]=Je(t[i],e[i]);return n}function dh(t,e,n,i=!1){const s={},o={};ms(o,Ns,1),t.propsDefaults=Object.create(null),sc(t,e,s,o);for(const r in t.propsOptions[0])r in s||(s[r]=void 0);n?t.props=i?s:yu(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function uh(t,e,n,i){const{props:s,attrs:o,vnode:{patchFlag:r}}=t,a=me(s),[l]=t.propsOptions;let c=!1;if((i||r>0)&&!(r&16)){if(r&8){const d=t.vnode.dynamicProps;for(let u=0;u<d.length;u++){let f=d[u];if(Ms(t.emitsOptions,f))continue;const m=e[f];if(l)if(ge(o,f))m!==o[f]&&(o[f]=m,c=!0);else{const v=Mt(f);s[v]=Po(l,a,v,m,t,!1)}else m!==o[f]&&(o[f]=m,c=!0)}}}else{sc(t,e,s,o)&&(c=!0);let d;for(const u in a)(!e||!ge(e,u)&&((d=ei(u))===u||!ge(e,d)))&&(l?n&&(n[u]!==void 0||n[d]!==void 0)&&(s[u]=Po(l,a,u,void 0,t,!0)):delete s[u]);if(o!==a)for(const u in o)(!e||!ge(e,u)&&!0)&&(delete o[u],c=!0)}c&&jt(t,"set","$attrs")}function sc(t,e,n,i){const[s,o]=t.propsOptions;let r=!1,a;if(e)for(let l in e){if(cs(l))continue;const c=e[l];let d;s&&ge(s,d=Mt(l))?!o||!o.includes(d)?n[d]=c:(a||(a={}))[d]=c:Ms(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,r=!0)}if(o){const l=me(n),c=a||Ie;for(let d=0;d<o.length;d++){const u=o[d];n[u]=Po(s,l,u,c[u],t,!ge(c,u))}}return r}function Po(t,e,n,i,s,o){const r=t[n];if(r!=null){const a=ge(r,"default");if(a&&i===void 0){const l=r.default;if(r.type!==Function&&ae(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(Yn(s),i=c[n]=l.call(null,e),Sn())}else i=l}r[0]&&(o&&!a?i=!1:r[1]&&(i===""||i===ei(n))&&(i=!0))}return i}function oc(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const o=t.props,r={},a=[];let l=!1;if(!ae(t)){const d=u=>{l=!0;const[f,m]=oc(u,e,!0);je(r,f),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!o&&!l)return Se(t)&&i.set(t,Nn),Nn;if(se(o))for(let d=0;d<o.length;d++){const u=Mt(o[d]);na(u)&&(r[u]=Ie)}else if(o)for(const d in o){const u=Mt(d);if(na(u)){const f=o[d],m=r[u]=se(f)||ae(f)?{type:f}:Object.assign({},f);if(m){const v=oa(Boolean,m.type),b=oa(String,m.type);m[0]=v>-1,m[1]=b<0||v<b,(v>-1||ge(m,"default"))&&a.push(u)}}}const c=[r,a];return Se(t)&&i.set(t,c),c}function na(t){return t[0]!=="$"}function ia(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function sa(t,e){return ia(t)===ia(e)}function oa(t,e){return se(e)?e.findIndex(n=>sa(n,t)):ae(e)&&sa(e,t)?0:-1}const rc=t=>t[0]==="_"||t==="$stable",fr=t=>se(t)?t.map(At):[At(t)],hh=(t,e,n)=>{if(e._n)return e;const i=Gl((...s)=>fr(e(...s)),n);return i._c=!1,i},ac=(t,e,n)=>{const i=t._ctx;for(const s in t){if(rc(s))continue;const o=t[s];if(ae(o))e[s]=hh(s,o,i);else if(o!=null){const r=fr(o);e[s]=()=>r}}},lc=(t,e)=>{const n=fr(e);t.slots.default=()=>n},fh=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=me(e),ms(e,"_",n)):ac(e,t.slots={})}else t.slots={},e&&lc(t,e);ms(t.slots,Ns,1)},ph=(t,e,n)=>{const{vnode:i,slots:s}=t;let o=!0,r=Ie;if(i.shapeFlag&32){const a=e._;a?n&&a===1?o=!1:(je(s,e),!n&&a===1&&delete s._):(o=!e.$stable,ac(e,s)),r=e}else e&&(lc(t,e),r={default:1});if(o)for(const a in s)!rc(a)&&!(a in r)&&delete s[a]};function cc(){return{app:null,config:{isNativeTag:Ld,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gh=0;function mh(t,e){return function(i,s=null){ae(i)||(i=Object.assign({},i)),s!=null&&!Se(s)&&(s=null);const o=cc(),r=new Set;let a=!1;const l=o.app={_uid:gh++,_component:i,_props:s,_container:null,_context:o,_instance:null,version:Bh,get config(){return o.config},set config(c){},use(c,...d){return r.has(c)||(c&&ae(c.install)?(r.add(c),c.install(l,...d)):ae(c)&&(r.add(c),c(l,...d))),l},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),l},component(c,d){return d?(o.components[c]=d,l):o.components[c]},directive(c,d){return d?(o.directives[c]=d,l):o.directives[c]},mount(c,d,u){if(!a){const f=ke(i,s);return f.appContext=o,d&&e?e(f,c):t(f,c,u),a=!0,l._container=c,c.__vue_app__=l,mr(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,d){return o.provides[c]=d,l}};return l}}function Mo(t,e,n,i,s=!1){if(se(t)){t.forEach((f,m)=>Mo(f,e&&(se(e)?e[m]:e),n,i,s));return}if(us(i)&&!s)return;const o=i.shapeFlag&4?mr(i.component)||i.component.proxy:i.el,r=s?null:o,{i:a,r:l}=t,c=e&&e.r,d=a.refs===Ie?a.refs={}:a.refs,u=a.setupState;if(c!=null&&c!==l&&(Le(c)?(d[c]=null,ge(u,c)&&(u[c]=null)):Be(c)&&(c.value=null)),ae(l))on(l,a,12,[r,d]);else{const f=Le(l),m=Be(l);if(f||m){const v=()=>{if(t.f){const b=f?ge(u,l)?u[l]:d[l]:l.value;s?se(b)&&Jo(b,o):se(b)?b.includes(o)||b.push(o):f?(d[l]=[o],ge(u,l)&&(u[l]=d[l])):(l.value=[o],t.k&&(d[t.k]=l.value))}else f?(d[l]=r,ge(u,l)&&(u[l]=r)):m&&(l.value=r,t.k&&(d[t.k]=r))};r?(v.id=-1,nt(v,n)):v()}}}const nt=Vu;function bh(t){return vh(t)}function vh(t,e){const n=Ud();n.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:r,createText:a,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:f,setScopeId:m=Ct,insertStaticContent:v}=t,b=(h,p,y,w=null,C=null,O=null,H=!1,E=null,P=!!p.dynamicChildren)=>{if(h===p)return;h&&!wn(h,p)&&(w=R(h),le(h,C,O,!0),h=null),p.patchFlag===-2&&(P=!1,p.dynamicChildren=null);const{type:k,ref:Z,shapeFlag:G}=p;switch(k){case Hs:A(h,p,y,w);break;case kt:_(h,p,y,w);break;case io:h==null&&F(p,y,w,H);break;case ht:z(h,p,y,w,C,O,H,E,P);break;default:G&1?Y(h,p,y,w,C,O,H,E,P):G&6?L(h,p,y,w,C,O,H,E,P):(G&64||G&128)&&k.process(h,p,y,w,C,O,H,E,P,ne)}Z!=null&&C&&Mo(Z,h&&h.ref,O,p||h,!p)},A=(h,p,y,w)=>{if(h==null)i(p.el=a(p.children),y,w);else{const C=p.el=h.el;p.children!==h.children&&c(C,p.children)}},_=(h,p,y,w)=>{h==null?i(p.el=l(p.children||""),y,w):p.el=h.el},F=(h,p,y,w)=>{[h.el,h.anchor]=v(h.children,p,y,w,h.el,h.anchor)},D=({el:h,anchor:p},y,w)=>{let C;for(;h&&h!==p;)C=f(h),i(h,y,w),h=C;i(p,y,w)},J=({el:h,anchor:p})=>{let y;for(;h&&h!==p;)y=f(h),s(h),h=y;s(p)},Y=(h,p,y,w,C,O,H,E,P)=>{H=H||p.type==="svg",h==null?te(p,y,w,C,O,H,E,P):Q(h,p,C,O,H,E,P)},te=(h,p,y,w,C,O,H,E)=>{let P,k;const{type:Z,props:G,shapeFlag:K,transition:oe,dirs:de}=h;if(P=h.el=r(h.type,O,G&&G.is,G),K&8?d(P,h.children):K&16&&M(h.children,P,null,w,C,O&&Z!=="foreignObject",H,E),de&&gn(h,null,w,"created"),G){for(const Ce in G)Ce!=="value"&&!cs(Ce)&&o(P,Ce,null,G[Ce],O,h.children,w,C,B);"value"in G&&o(P,"value",null,G.value),(k=G.onVnodeBeforeMount)&&Ot(k,w,h)}ee(P,h,h.scopeId,H,w),de&&gn(h,null,w,"beforeMount");const Te=(!C||C&&!C.pendingBranch)&&oe&&!oe.persisted;Te&&oe.beforeEnter(P),i(P,p,y),((k=G&&G.onVnodeMounted)||Te||de)&&nt(()=>{k&&Ot(k,w,h),Te&&oe.enter(P),de&&gn(h,null,w,"mounted")},C)},ee=(h,p,y,w,C)=>{if(y&&m(h,y),w)for(let O=0;O<w.length;O++)m(h,w[O]);if(C){let O=C.subTree;if(p===O){const H=C.vnode;ee(h,H,H.scopeId,H.slotScopeIds,C.parent)}}},M=(h,p,y,w,C,O,H,E,P=0)=>{for(let k=P;k<h.length;k++){const Z=h[k]=E?Zt(h[k]):At(h[k]);b(null,Z,p,y,w,C,O,H,E)}},Q=(h,p,y,w,C,O,H)=>{const E=p.el=h.el;let{patchFlag:P,dynamicChildren:k,dirs:Z}=p;P|=h.patchFlag&16;const G=h.props||Ie,K=p.props||Ie;let oe;y&&mn(y,!1),(oe=K.onVnodeBeforeUpdate)&&Ot(oe,y,p,h),Z&&gn(p,h,y,"beforeUpdate"),y&&mn(y,!0);const de=C&&p.type!=="foreignObject";if(k?q(h.dynamicChildren,k,E,y,w,de,O):H||N(h,p,E,null,y,w,de,O,!1),P>0){if(P&16)xe(E,p,G,K,y,w,C);else if(P&2&&G.class!==K.class&&o(E,"class",null,K.class,C),P&4&&o(E,"style",G.style,K.style,C),P&8){const Te=p.dynamicProps;for(let Ce=0;Ce<Te.length;Ce++){const Fe=Te[Ce],vt=G[Fe],Rn=K[Fe];(Rn!==vt||Fe==="value")&&o(E,Fe,vt,Rn,C,h.children,y,w,B)}}P&1&&h.children!==p.children&&d(E,p.children)}else!H&&k==null&&xe(E,p,G,K,y,w,C);((oe=K.onVnodeUpdated)||Z)&&nt(()=>{oe&&Ot(oe,y,p,h),Z&&gn(p,h,y,"updated")},w)},q=(h,p,y,w,C,O,H)=>{for(let E=0;E<p.length;E++){const P=h[E],k=p[E],Z=P.el&&(P.type===ht||!wn(P,k)||P.shapeFlag&70)?u(P.el):y;b(P,k,Z,null,w,C,O,H,!0)}},xe=(h,p,y,w,C,O,H)=>{if(y!==w){if(y!==Ie)for(const E in y)!cs(E)&&!(E in w)&&o(h,E,y[E],null,H,p.children,C,O,B);for(const E in w){if(cs(E))continue;const P=w[E],k=y[E];P!==k&&E!=="value"&&o(h,E,k,P,H,p.children,C,O,B)}"value"in w&&o(h,"value",y.value,w.value)}},z=(h,p,y,w,C,O,H,E,P)=>{const k=p.el=h?h.el:a(""),Z=p.anchor=h?h.anchor:a("");let{patchFlag:G,dynamicChildren:K,slotScopeIds:oe}=p;oe&&(E=E?E.concat(oe):oe),h==null?(i(k,y,w),i(Z,y,w),M(p.children,y,Z,C,O,H,E,P)):G>0&&G&64&&K&&h.dynamicChildren?(q(h.dynamicChildren,K,y,C,O,H,E),(p.key!=null||C&&p===C.subTree)&&dc(h,p,!0)):N(h,p,y,Z,C,O,H,E,P)},L=(h,p,y,w,C,O,H,E,P)=>{p.slotScopeIds=E,h==null?p.shapeFlag&512?C.ctx.activate(p,y,w,H,P):I(p,y,w,C,O,H,P):T(h,p,P)},I=(h,p,y,w,C,O,H)=>{const E=h.component=Ih(h,w,C);if(Fs(h)&&(E.ctx.renderer=ne),_h(E),E.asyncDep){if(C&&C.registerDep(E,V),!h.el){const P=E.subTree=ke(kt);_(null,P,p,y)}return}V(E,h,p,y,C,O,H)},T=(h,p,y)=>{const w=p.component=h.component;if(Lu(h,p,y))if(w.asyncDep&&!w.asyncResolved){S(w,p,y);return}else w.next=p,Ou(w.update),w.update();else p.el=h.el,w.vnode=p},V=(h,p,y,w,C,O,H)=>{const E=()=>{if(h.isMounted){let{next:Z,bu:G,u:K,parent:oe,vnode:de}=h,Te=Z,Ce;mn(h,!1),Z?(Z.el=de.el,S(h,Z,H)):Z=de,G&&Ks(G),(Ce=Z.props&&Z.props.onVnodeBeforeUpdate)&&Ot(Ce,oe,Z,de),mn(h,!0);const Fe=eo(h),vt=h.subTree;h.subTree=Fe,b(vt,Fe,u(vt.el),R(vt),h,C,O),Z.el=Fe.el,Te===null&&Hu(h,Fe.el),K&&nt(K,C),(Ce=Z.props&&Z.props.onVnodeUpdated)&&nt(()=>Ot(Ce,oe,Z,de),C)}else{let Z;const{el:G,props:K}=p,{bm:oe,m:de,parent:Te}=h,Ce=us(p);if(mn(h,!1),oe&&Ks(oe),!Ce&&(Z=K&&K.onVnodeBeforeMount)&&Ot(Z,Te,p),mn(h,!0),G&&re){const Fe=()=>{h.subTree=eo(h),re(G,h.subTree,h,C,null)};Ce?p.type.__asyncLoader().then(()=>!h.isUnmounted&&Fe()):Fe()}else{const Fe=h.subTree=eo(h);b(null,Fe,y,w,h,C,O),p.el=Fe.el}if(de&&nt(de,C),!Ce&&(Z=K&&K.onVnodeMounted)){const Fe=p;nt(()=>Ot(Z,Te,Fe),C)}(p.shapeFlag&256||Te&&us(Te.vnode)&&Te.vnode.shapeFlag&256)&&h.a&&nt(h.a,C),h.isMounted=!0,p=y=w=null}},P=h.effect=new tr(E,()=>cr(k),h.scope),k=h.update=()=>P.run();k.id=h.uid,mn(h,!0),k()},S=(h,p,y)=>{p.component=h;const w=h.vnode.props;h.vnode=p,h.next=null,uh(h,p.props,w,y),ph(h,p.children,y),ti(),Jr(),ni()},N=(h,p,y,w,C,O,H,E,P=!1)=>{const k=h&&h.children,Z=h?h.shapeFlag:0,G=p.children,{patchFlag:K,shapeFlag:oe}=p;if(K>0){if(K&128){ce(k,G,y,w,C,O,H,E,P);return}else if(K&256){X(k,G,y,w,C,O,H,E,P);return}}oe&8?(Z&16&&B(k,C,O),G!==k&&d(y,G)):Z&16?oe&16?ce(k,G,y,w,C,O,H,E,P):B(k,C,O,!0):(Z&8&&d(y,""),oe&16&&M(G,y,w,C,O,H,E,P))},X=(h,p,y,w,C,O,H,E,P)=>{h=h||Nn,p=p||Nn;const k=h.length,Z=p.length,G=Math.min(k,Z);let K;for(K=0;K<G;K++){const oe=p[K]=P?Zt(p[K]):At(p[K]);b(h[K],oe,y,null,C,O,H,E,P)}k>Z?B(h,C,O,!0,!1,G):M(p,y,w,C,O,H,E,P,G)},ce=(h,p,y,w,C,O,H,E,P)=>{let k=0;const Z=p.length;let G=h.length-1,K=Z-1;for(;k<=G&&k<=K;){const oe=h[k],de=p[k]=P?Zt(p[k]):At(p[k]);if(wn(oe,de))b(oe,de,y,null,C,O,H,E,P);else break;k++}for(;k<=G&&k<=K;){const oe=h[G],de=p[K]=P?Zt(p[K]):At(p[K]);if(wn(oe,de))b(oe,de,y,null,C,O,H,E,P);else break;G--,K--}if(k>G){if(k<=K){const oe=K+1,de=oe<Z?p[oe].el:w;for(;k<=K;)b(null,p[k]=P?Zt(p[k]):At(p[k]),y,de,C,O,H,E,P),k++}}else if(k>K)for(;k<=G;)le(h[k],C,O,!0),k++;else{const oe=k,de=k,Te=new Map;for(k=de;k<=K;k++){const at=p[k]=P?Zt(p[k]):At(p[k]);at.key!=null&&Te.set(at.key,k)}let Ce,Fe=0;const vt=K-de+1;let Rn=!1,Lr=0;const ui=new Array(vt);for(k=0;k<vt;k++)ui[k]=0;for(k=oe;k<=G;k++){const at=h[k];if(Fe>=vt){le(at,C,O,!0);continue}let Et;if(at.key!=null)Et=Te.get(at.key);else for(Ce=de;Ce<=K;Ce++)if(ui[Ce-de]===0&&wn(at,p[Ce])){Et=Ce;break}Et===void 0?le(at,C,O,!0):(ui[Et-de]=k+1,Et>=Lr?Lr=Et:Rn=!0,b(at,p[Et],y,null,C,O,H,E,P),Fe++)}const Hr=Rn?yh(ui):Nn;for(Ce=Hr.length-1,k=vt-1;k>=0;k--){const at=de+k,Et=p[at],Nr=at+1<Z?p[at+1].el:w;ui[k]===0?b(null,Et,y,Nr,C,O,H,E,P):Rn&&(Ce<0||k!==Hr[Ce]?be(Et,y,Nr,2):Ce--)}}},be=(h,p,y,w,C=null)=>{const{el:O,type:H,transition:E,children:P,shapeFlag:k}=h;if(k&6){be(h.component.subTree,p,y,w);return}if(k&128){h.suspense.move(p,y,w);return}if(k&64){H.move(h,p,y,ne);return}if(H===ht){i(O,p,y);for(let G=0;G<P.length;G++)be(P[G],p,y,w);i(h.anchor,p,y);return}if(H===io){D(h,p,y);return}if(w!==2&&k&1&&E)if(w===0)E.beforeEnter(O),i(O,p,y),nt(()=>E.enter(O),C);else{const{leave:G,delayLeave:K,afterLeave:oe}=E,de=()=>i(O,p,y),Te=()=>{G(O,()=>{de(),oe&&oe()})};K?K(O,de,Te):Te()}else i(O,p,y)},le=(h,p,y,w=!1,C=!1)=>{const{type:O,props:H,ref:E,children:P,dynamicChildren:k,shapeFlag:Z,patchFlag:G,dirs:K}=h;if(E!=null&&Mo(E,null,y,h,!0),Z&256){p.ctx.deactivate(h);return}const oe=Z&1&&K,de=!us(h);let Te;if(de&&(Te=H&&H.onVnodeBeforeUnmount)&&Ot(Te,p,h),Z&6)x(h.component,y,w);else{if(Z&128){h.suspense.unmount(y,w);return}oe&&gn(h,null,p,"beforeUnmount"),Z&64?h.type.remove(h,p,y,C,ne,w):k&&(O!==ht||G>0&&G&64)?B(k,p,y,!1,!0):(O===ht&&G&384||!C&&Z&16)&&B(P,p,y),w&&Ae(h)}(de&&(Te=H&&H.onVnodeUnmounted)||oe)&&nt(()=>{Te&&Ot(Te,p,h),oe&&gn(h,null,p,"unmounted")},y)},Ae=h=>{const{type:p,el:y,anchor:w,transition:C}=h;if(p===ht){rt(y,w);return}if(p===io){J(h);return}const O=()=>{s(y),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(h.shapeFlag&1&&C&&!C.persisted){const{leave:H,delayLeave:E}=C,P=()=>H(y,O);E?E(h.el,O,P):P()}else O()},rt=(h,p)=>{let y;for(;h!==p;)y=f(h),s(h),h=y;s(p)},x=(h,p,y)=>{const{bum:w,scope:C,update:O,subTree:H,um:E}=h;w&&Ks(w),C.stop(),O&&(O.active=!1,le(H,h,p,y)),E&&nt(E,p),nt(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},B=(h,p,y,w=!1,C=!1,O=0)=>{for(let H=O;H<h.length;H++)le(h[H],p,y,w,C)},R=h=>h.shapeFlag&6?R(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),W=(h,p,y)=>{h==null?p._vnode&&le(p._vnode,null,null,!0):b(p._vnode||null,h,p,null,null,null,y),Jr(),Ul(),p._vnode=h},ne={p:b,um:le,m:be,r:Ae,mt:I,mc:M,pc:N,pbc:q,n:R,o:t};let ve,re;return e&&([ve,re]=e(ne)),{render:W,hydrate:ve,createApp:mh(W,ve)}}function mn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function dc(t,e,n=!1){const i=t.children,s=e.children;if(se(i)&&se(s))for(let o=0;o<i.length;o++){const r=i[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=Zt(s[o]),a.el=r.el),n||dc(r,a)),a.type===Hs&&(a.el=r.el)}}function yh(t){const e=t.slice(),n=[0];let i,s,o,r,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(o=0,r=n.length-1;o<r;)a=o+r>>1,t[n[a]]<c?o=a+1:r=a;c<t[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,r=n[o-1];o-- >0;)n[o]=r,r=e[r];return n}const xh=t=>t.__isTeleport,ht=Symbol(void 0),Hs=Symbol(void 0),kt=Symbol(void 0),io=Symbol(void 0),$i=[];let $t=null;function Ne(t=!1){$i.push($t=t?null:[])}function wh(){$i.pop(),$t=$i[$i.length-1]||null}let Fi=1;function ra(t){Fi+=t}function uc(t){return t.dynamicChildren=Fi>0?$t||Nn:null,wh(),Fi>0&&$t&&$t.push(t),t}function Ue(t,e,n,i,s,o){return uc(fe(t,e,n,i,s,o,!0))}function hc(t,e,n,i,s){return uc(ke(t,e,n,i,s,!0))}function Bo(t){return t?t.__v_isVNode===!0:!1}function wn(t,e){return t.type===e.type&&t.key===e.key}const Ns="__vInternal",fc=({key:t})=>t??null,hs=({ref:t,ref_key:e,ref_for:n})=>t!=null?Le(t)||Be(t)||ae(t)?{i:pt,r:t,k:e,f:!!n}:t:null;function fe(t,e=null,n=null,i=0,s=null,o=t===ht?0:1,r=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fc(e),ref:e&&hs(e),scopeId:Bs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:pt};return a?(pr(l,n),o&128&&t.normalize(l)):n&&(l.shapeFlag|=Le(n)?8:16),Fi>0&&!r&&$t&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&$t.push(l),l}const ke=$h;function $h(t,e=null,n=null,i=0,s=null,o=!1){if((!t||t===th)&&(t=kt),Bo(t)){const a=ln(t,e,!0);return n&&pr(a,n),Fi>0&&!o&&$t&&(a.shapeFlag&6?$t[$t.indexOf(t)]=a:$t.push(a)),a.patchFlag|=-2,a}if(Dh(t)&&(t=t.__vccOpts),e){e=Ch(e);let{class:a,style:l}=e;a&&!Le(a)&&(e.class=qi(a)),Se(l)&&(Bl(l)&&!se(l)&&(l=je({},l)),e.style=_s(l))}const r=Le(t)?1:Nu(t)?128:xh(t)?64:Se(t)?4:ae(t)?2:0;return fe(t,e,n,i,s,r,o,!0)}function Ch(t){return t?Bl(t)||Ns in t?je({},t):t:null}function ln(t,e,n=!1){const{props:i,ref:s,patchFlag:o,children:r}=t,a=e?kh(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&fc(a),ref:e&&e.ref?n&&s?se(s)?s.concat(hs(e)):[s,hs(e)]:hs(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ht?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ln(t.ssContent),ssFallback:t.ssFallback&&ln(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function xs(t=" ",e=0){return ke(Hs,null,t,e)}function tn(t="",e=!1){return e?(Ne(),hc(kt,null,t)):ke(kt,null,t)}function At(t){return t==null||typeof t=="boolean"?ke(kt):se(t)?ke(ht,null,t.slice()):typeof t=="object"?Zt(t):ke(Hs,null,String(t))}function Zt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ln(t)}function pr(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),pr(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ns in e)?e._ctx=pt:s===3&&pt&&(pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:pt},n=32):(e=String(e),i&64?(n=16,e=[xs(e)]):n=8);t.children=e,t.shapeFlag|=n}function kh(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=qi([e.class,i.class]));else if(s==="style")e.style=_s([e.style,i.style]);else if(Es(s)){const o=e[s],r=i[s];r&&o!==r&&!(se(o)&&o.includes(r))&&(e[s]=o?[].concat(o,r):r)}else s!==""&&(e[s]=i[s])}return e}function Ot(t,e,n,i=null){gt(t,e,7,[n,i])}const Th=cc();let Sh=0;function Ih(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Th,o={uid:Sh++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Cl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oc(i,s),emitsOptions:Wl(i,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:i.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Du.bind(null,o),t.ce&&t.ce(o),o}let Ve=null;const gr=()=>Ve||pt,Yn=t=>{Ve=t,t.scope.on()},Sn=()=>{Ve&&Ve.scope.off(),Ve=null};function pc(t){return t.vnode.shapeFlag&4}let Li=!1;function _h(t,e=!1){Li=e;const{props:n,children:i}=t.vnode,s=pc(t);dh(t,n,s,e),fh(t,i);const o=s?Eh(t,e):void 0;return Li=!1,o}function Eh(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Gn(new Proxy(t.ctx,sh));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?Ah(t):null;Yn(t),ti();const o=on(i,t,0,[t.props,s]);if(ni(),Sn(),xl(o)){if(o.then(Sn,Sn),e)return o.then(r=>{aa(t,r,e)}).catch(r=>{Ps(r,t,0)});t.asyncDep=o}else aa(t,o,e)}else gc(t,e)}function aa(t,e,n){ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=Nl(e)),gc(t,n)}let la;function gc(t,e,n){const i=t.type;if(!t.render){if(!e&&la&&!i.render){const s=i.template||hr(t).template;if(s){const{isCustomElement:o,compilerOptions:r}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=je(je({isCustomElement:o,delimiters:a},r),l);i.render=la(s,c)}}t.render=i.render||Ct}Yn(t),ti(),oh(t),ni(),Sn()}function Oh(t){return new Proxy(t.attrs,{get(e,n){return ct(t,"get","$attrs"),e[n]}})}function Ah(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=Oh(t))},slots:t.slots,emit:t.emit,expose:e}}function mr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Nl(Gn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in wi)return wi[n](t)},has(e,n){return n in e||n in wi}}))}function Rh(t,e=!0){return ae(t)?t.displayName||t.name:t.name||e&&t.__name}function Dh(t){return ae(t)&&"__vccOpts"in t}const Me=(t,e)=>Iu(t,e,Li);function mc(t,e,n){const i=arguments.length;return i===2?Se(e)&&!se(e)?Bo(e)?ke(t,null,[e]):ke(t,e):ke(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Bo(n)&&(n=[n]),ke(t,e,n))}const Ph=Symbol(""),Mh=()=>Pt(Ph),Bh="3.2.45",Fh="http://www.w3.org/2000/svg",$n=typeof document<"u"?document:null,ca=$n&&$n.createElement("template"),Lh={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?$n.createElementNS(Fh,t):$n.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>$n.createTextNode(t),createComment:t=>$n.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$n.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,o){const r=n?n.previousSibling:e.lastChild;if(s&&(s===o||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{ca.innerHTML=i?`<svg>${t}</svg>`:t;const a=ca.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[r?r.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Hh(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Nh(t,e,n){const i=t.style,s=Le(n);if(n&&!s){for(const o in n)Fo(i,o,n[o]);if(e&&!Le(e))for(const o in e)n[o]==null&&Fo(i,o,"")}else{const o=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=o)}}const da=/\s*!important$/;function Fo(t,e,n){if(se(n))n.forEach(i=>Fo(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Vh(t,e);da.test(n)?t.setProperty(ei(i),n.replace(da,""),"important"):t[i]=n}}const ua=["Webkit","Moz","ms"],so={};function Vh(t,e){const n=so[e];if(n)return n;let i=Mt(e);if(i!=="filter"&&i in t)return so[e]=i;i=Rs(i);for(let s=0;s<ua.length;s++){const o=ua[s]+i;if(o in t)return so[e]=o}return e}const ha="http://www.w3.org/1999/xlink";function jh(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ha,e.slice(6,e.length)):t.setAttributeNS(ha,e,n);else{const o=Fd(e);n==null||o&&!bl(n)?t.removeAttribute(e):t.setAttribute(e,o?"":n)}}function zh(t,e,n,i,s,o,r){if(e==="innerHTML"||e==="textContent"){i&&r(i,s,o),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=bl(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Uh(t,e,n,i){t.addEventListener(e,n,i)}function qh(t,e,n,i){t.removeEventListener(e,n,i)}function Wh(t,e,n,i,s=null){const o=t._vei||(t._vei={}),r=o[e];if(i&&r)r.value=i;else{const[a,l]=Gh(e);if(i){const c=o[e]=Jh(i,s);Uh(t,a,c,l)}else r&&(qh(t,a,r,l),o[e]=void 0)}}const fa=/(?:Once|Passive|Capture)$/;function Gh(t){let e;if(fa.test(t)){e={};let i;for(;i=t.match(fa);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ei(t.slice(2)),e]}let oo=0;const Yh=Promise.resolve(),Qh=()=>oo||(Yh.then(()=>oo=0),oo=Date.now());function Jh(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;gt(Xh(i,n.value),e,5,[i])};return n.value=t,n.attached=Qh(),n}function Xh(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const pa=/^on[a-z]/,Zh=(t,e,n,i,s=!1,o,r,a,l)=>{e==="class"?Hh(t,i,s):e==="style"?Nh(t,n,i):Es(e)?Qo(e)||Wh(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Kh(t,e,i,s))?zh(t,e,i,o,r,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),jh(t,e,i,s))};function Kh(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&pa.test(e)&&ae(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||pa.test(e)&&Le(n)?!1:e in t}const Yt="transition",hi="animation",bc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ef=je({},Uu.props,bc),bn=(t,e=[])=>{se(t)?t.forEach(n=>n(...e)):t&&t(...e)},ga=t=>t?se(t)?t.some(e=>e.length>1):t.length>1:!1;function tf(t){const e={};for(const z in t)z in bc||(e[z]=t[z]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:c=r,appearToClass:d=a,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,v=nf(s),b=v&&v[0],A=v&&v[1],{onBeforeEnter:_,onEnter:F,onEnterCancelled:D,onLeave:J,onLeaveCancelled:Y,onBeforeAppear:te=_,onAppear:ee=F,onAppearCancelled:M=D}=e,Q=(z,L,I)=>{Xt(z,L?d:a),Xt(z,L?c:r),I&&I()},q=(z,L)=>{z._isLeaving=!1,Xt(z,u),Xt(z,m),Xt(z,f),L&&L()},xe=z=>(L,I)=>{const T=z?ee:F,V=()=>Q(L,z,I);bn(T,[L,V]),ma(()=>{Xt(L,z?l:o),Ft(L,z?d:a),ga(T)||ba(L,i,b,V)})};return je(e,{onBeforeEnter(z){bn(_,[z]),Ft(z,o),Ft(z,r)},onBeforeAppear(z){bn(te,[z]),Ft(z,l),Ft(z,c)},onEnter:xe(!1),onAppear:xe(!0),onLeave(z,L){z._isLeaving=!0;const I=()=>q(z,L);Ft(z,u),yc(),Ft(z,f),ma(()=>{!z._isLeaving||(Xt(z,u),Ft(z,m),ga(J)||ba(z,i,A,I))}),bn(J,[z,I])},onEnterCancelled(z){Q(z,!1),bn(D,[z])},onAppearCancelled(z){Q(z,!0),bn(M,[z])},onLeaveCancelled(z){q(z),bn(Y,[z])}})}function nf(t){if(t==null)return null;if(Se(t))return[ro(t.enter),ro(t.leave)];{const e=ro(t);return[e,e]}}function ro(t){return Ko(t)}function Ft(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Xt(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function ma(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let sf=0;function ba(t,e,n,i){const s=t._endId=++sf,o=()=>{s===t._endId&&i()};if(n)return setTimeout(o,n);const{type:r,timeout:a,propCount:l}=vc(t,e);if(!r)return i();const c=r+"end";let d=0;const u=()=>{t.removeEventListener(c,f),o()},f=m=>{m.target===t&&++d>=l&&u()};setTimeout(()=>{d<l&&u()},a+1),t.addEventListener(c,f)}function vc(t,e){const n=window.getComputedStyle(t),i=v=>(n[v]||"").split(", "),s=i(`${Yt}Delay`),o=i(`${Yt}Duration`),r=va(s,o),a=i(`${hi}Delay`),l=i(`${hi}Duration`),c=va(a,l);let d=null,u=0,f=0;e===Yt?r>0&&(d=Yt,u=r,f=o.length):e===hi?c>0&&(d=hi,u=c,f=l.length):(u=Math.max(r,c),d=u>0?r>c?Yt:hi:null,f=d?d===Yt?o.length:l.length:0);const m=d===Yt&&/\b(transform|all)(,|$)/.test(i(`${Yt}Property`).toString());return{type:d,timeout:u,propCount:f,hasTransform:m}}function va(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>ya(n)+ya(t[i])))}function ya(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function yc(){return document.body.offsetHeight}const xc=new WeakMap,wc=new WeakMap,of={name:"TransitionGroup",props:je({},ef,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=gr(),i=Jl();let s,o;return Kl(()=>{if(!s.length)return;const r=t.moveClass||`${t.name||"v"}-move`;if(!df(s[0].el,n.vnode.el,r))return;s.forEach(af),s.forEach(lf);const a=s.filter(cf);yc(),a.forEach(l=>{const c=l.el,d=c.style;Ft(c,r),d.transform=d.webkitTransform=d.transitionDuration="";const u=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",u),c._moveCb=null,Xt(c,r))};c.addEventListener("transitionend",u)})}),()=>{const r=me(t),a=tf(r);let l=r.tag||ht;s=o,o=e.default?dr(e.default()):[];for(let c=0;c<o.length;c++){const d=o[c];d.key!=null&&Bi(d,Mi(d,a,i,n))}if(s)for(let c=0;c<s.length;c++){const d=s[c];Bi(d,Mi(d,a,i,n)),xc.set(d,d.el.getBoundingClientRect())}return ke(l,null,o)}}},rf=of;function af(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function lf(t){wc.set(t,t.el.getBoundingClientRect())}function cf(t){const e=xc.get(t),n=wc.get(t),i=e.left-n.left,s=e.top-n.top;if(i||s){const o=t.el.style;return o.transform=o.webkitTransform=`translate(${i}px,${s}px)`,o.transitionDuration="0s",t}}function df(t,e,n){const i=t.cloneNode();t._vtc&&t._vtc.forEach(r=>{r.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),n.split(/\s+/).forEach(r=>r&&i.classList.add(r)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:o}=vc(i);return s.removeChild(i),o}const uf=je({patchProp:Zh},Lh);let xa;function hf(){return xa||(xa=bh(uf))}const ff=(...t)=>{const e=hf().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=pf(i);if(!s)return;const o=e._component;!ae(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const r=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},e};function pf(t){return Le(t)?document.querySelector(t):t}var gf=!1;let $c;const Vs=t=>$c=t,Cc=Symbol();function Lo(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ci;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ci||(Ci={}));function mf(){const t=kl(!0),e=t.run(()=>Ri({}));let n=[],i=[];const s=Gn({install(o){Vs(s),s._a=o,o.provide(Cc,s),o.config.globalProperties.$pinia=s,i.forEach(r=>n.push(r)),i=[]},use(o){return!this._a&&!gf?i.push(o):n.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const kc=()=>{};function wa(t,e,n,i=kc){t.push(e);const s=()=>{const o=t.indexOf(e);o>-1&&(t.splice(o,1),i())};return!n&&Wd()&&Gd(s),s}function Dn(t,...e){t.slice().forEach(n=>{n(...e)})}function Ho(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];Lo(s)&&Lo(i)&&t.hasOwnProperty(n)&&!Be(i)&&!sn(i)?t[n]=Ho(s,i):t[n]=i}return t}const bf=Symbol();function vf(t){return!Lo(t)||!t.hasOwnProperty(bf)}const{assign:Kt}=Object;function yf(t){return!!(Be(t)&&t.effect)}function xf(t,e,n,i){const{state:s,actions:o,getters:r}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const d=Cu(n.state.value[t]);return Kt(d,o,Object.keys(r||{}).reduce((u,f)=>(u[f]=Gn(Me(()=>{Vs(n);const m=n._s.get(t);return r[f].call(m,m)})),u),{}))}return l=Tc(t,c,e,n,i,!0),l.$reset=function(){const u=s?s():{};this.$patch(f=>{Kt(f,u)})},l}function Tc(t,e,n={},i,s,o){let r;const a=Kt({actions:{}},n),l={deep:!0};let c,d,u=Gn([]),f=Gn([]),m;const v=i.state.value[t];!o&&!v&&(i.state.value[t]={}),Ri({});let b;function A(ee){let M;c=d=!1,typeof ee=="function"?(ee(i.state.value[t]),M={type:Ci.patchFunction,storeId:t,events:m}):(Ho(i.state.value[t],ee),M={type:Ci.patchObject,payload:ee,storeId:t,events:m});const Q=b=Symbol();lr().then(()=>{b===Q&&(c=!0)}),d=!0,Dn(u,M,i.state.value[t])}const _=kc;function F(){r.stop(),u=[],f=[],i._s.delete(t)}function D(ee,M){return function(){Vs(i);const Q=Array.from(arguments),q=[],xe=[];function z(T){q.push(T)}function L(T){xe.push(T)}Dn(f,{args:Q,name:ee,store:Y,after:z,onError:L});let I;try{I=M.apply(this&&this.$id===t?this:Y,Q)}catch(T){throw Dn(xe,T),T}return I instanceof Promise?I.then(T=>(Dn(q,T),T)).catch(T=>(Dn(xe,T),Promise.reject(T))):(Dn(q,I),I)}}const J={_p:i,$id:t,$onAction:wa.bind(null,f),$patch:A,$reset:_,$subscribe(ee,M={}){const Q=wa(u,ee,M.detached,()=>q()),q=r.run(()=>xi(()=>i.state.value[t],xe=>{(M.flush==="sync"?d:c)&&ee({storeId:t,type:Ci.direct,events:m},xe)},Kt({},l,M)));return Q},$dispose:F},Y=ii(J);i._s.set(t,Y);const te=i._e.run(()=>(r=kl(),r.run(()=>e())));for(const ee in te){const M=te[ee];if(Be(M)&&!yf(M)||sn(M))o||(v&&vf(M)&&(Be(M)?M.value=v[ee]:Ho(M,v[ee])),i.state.value[t][ee]=M);else if(typeof M=="function"){const Q=D(ee,M);te[ee]=Q,a.actions[ee]=M}}return Kt(Y,te),Kt(me(Y),te),Object.defineProperty(Y,"$state",{get:()=>i.state.value[t],set:ee=>{A(M=>{Kt(M,ee)})}}),i._p.forEach(ee=>{Kt(Y,r.run(()=>ee({store:Y,app:i._a,pinia:i,options:a})))}),v&&o&&n.hydrate&&n.hydrate(Y.$state,v),c=!0,d=!0,Y}function Sc(t,e,n){let i,s;const o=typeof e=="function";typeof t=="string"?(i=t,s=o?n:e):(s=t,i=t.id);function r(a,l){const c=gr();return a=a||c&&Pt(Cc,null),a&&Vs(a),a=$c,a._s.has(i)||(o?Tc(i,e,s,a):xf(i,s,a)),a._s.get(i)}return r.$id=i,r}const Nt=un({__name:"CodeIcon",props:{icon:null},setup(t){return(e,n)=>(Ne(),Ue("span",{class:qi(["codicon",`codicon-${t.icon}`])},null,2))}}),Wi=Sc("app",{state:()=>({workspaceOpen:!1,clientVersion:"",notifications:[]})});class wf{constructor(){Vr(this,"vsCodeApi");typeof acquireVsCodeApi=="function"&&(this.vsCodeApi=acquireVsCodeApi())}postMessage(e,n){this.vsCodeApi?this.vsCodeApi.postMessage({command:e,data:n}):window.parent.postMessage({command:e,data:n},"*")}getState(){if(this.vsCodeApi)return this.vsCodeApi.getState();{const e=localStorage.getItem("vscodeState");return e?JSON.parse(e):void 0}}setState(e){return this.vsCodeApi?this.vsCodeApi.setState(e):(localStorage.setItem("vscodeState",JSON.stringify(e)),e)}}const xt=new wf,cn=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();cn.trustedTypes===void 0&&(cn.trustedTypes={createPolicy:(t,e)=>e});const Ic={configurable:!1,enumerable:!1,writable:!1};cn.FAST===void 0&&Reflect.defineProperty(cn,"FAST",Object.assign({value:Object.create(null)},Ic));const Hi=cn.FAST;if(Hi.getById===void 0){const t=Object.create(null);Reflect.defineProperty(Hi,"getById",Object.assign({value(e,n){let i=t[e];return i===void 0&&(i=n?t[e]=n():null),i}},Ic))}const In=Object.freeze([]);function _c(){const t=new WeakMap;return function(e){let n=t.get(e);if(n===void 0){let i=Reflect.getPrototypeOf(e);for(;n===void 0&&i!==null;)n=t.get(i),i=Reflect.getPrototypeOf(i);n=n===void 0?[]:n.slice(0),t.set(e,n)}return n}}const ao=cn.FAST.getById(1,()=>{const t=[],e=[];function n(){if(e.length)throw e.shift()}function i(r){try{r.call()}catch(a){e.push(a),setTimeout(n,0)}}function s(){let a=0;for(;a<t.length;)if(i(t[a]),a++,a>1024){for(let l=0,c=t.length-a;l<c;l++)t[l]=t[l+a];t.length-=a,a=0}t.length=0}function o(r){t.length<1&&cn.requestAnimationFrame(s),t.push(r)}return Object.freeze({enqueue:o,process:s})}),Ec=cn.trustedTypes.createPolicy("fast-html",{createHTML:t=>t});let lo=Ec;const ki=`fast-${Math.random().toString(36).substring(2,8)}`,Oc=`${ki}{`,br=`}${ki}`,he=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(t){if(lo!==Ec)throw new Error("The HTML policy can only be set once.");lo=t},createHTML(t){return lo.createHTML(t)},isMarker(t){return t&&t.nodeType===8&&t.data.startsWith(ki)},extractDirectiveIndexFromMarker(t){return parseInt(t.data.replace(`${ki}:`,""))},createInterpolationPlaceholder(t){return`${Oc}${t}${br}`},createCustomAttributePlaceholder(t,e){return`${t}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(t){return`<!--${ki}:${t}-->`},queueUpdate:ao.enqueue,processUpdates:ao.process,nextUpdate(){return new Promise(ao.enqueue)},setAttribute(t,e,n){n==null?t.removeAttribute(e):t.setAttribute(e,n)},setBooleanAttribute(t,e,n){n?t.setAttribute(e,""):t.removeAttribute(e)},removeChildNodes(t){for(let e=t.firstChild;e!==null;e=t.firstChild)t.removeChild(e)},createTemplateWalker(t){return document.createTreeWalker(t,133,null,!1)}});class ws{constructor(e,n){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=n}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){const n=this.spillover;if(n===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else n.indexOf(e)===-1&&n.push(e)}unsubscribe(e){const n=this.spillover;if(n===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const i=n.indexOf(e);i!==-1&&n.splice(i,1)}}notify(e){const n=this.spillover,i=this.source;if(n===void 0){const s=this.sub1,o=this.sub2;s!==void 0&&s.handleChange(i,e),o!==void 0&&o.handleChange(i,e)}else for(let s=0,o=n.length;s<o;++s)n[s].handleChange(i,e)}}class Ac{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var n;const i=this.subscribers[e];i!==void 0&&i.notify(e),(n=this.sourceSubscribers)===null||n===void 0||n.notify(e)}subscribe(e,n){var i;if(n){let s=this.subscribers[n];s===void 0&&(this.subscribers[n]=s=new ws(this.source)),s.subscribe(e)}else this.sourceSubscribers=(i=this.sourceSubscribers)!==null&&i!==void 0?i:new ws(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,n){var i;if(n){const s=this.subscribers[n];s!==void 0&&s.unsubscribe(e)}else(i=this.sourceSubscribers)===null||i===void 0||i.unsubscribe(e)}}const ue=Hi.getById(2,()=>{const t=/(:|&&|\|\||if)/,e=new WeakMap,n=he.queueUpdate;let i,s=c=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function o(c){let d=c.$fastController||e.get(c);return d===void 0&&(Array.isArray(c)?d=s(c):e.set(c,d=new Ac(c))),d}const r=_c();class a{constructor(d){this.name=d,this.field=`_${d}`,this.callback=`${d}Changed`}getValue(d){return i!==void 0&&i.watch(d,this.name),d[this.field]}setValue(d,u){const f=this.field,m=d[f];if(m!==u){d[f]=u;const v=d[this.callback];typeof v=="function"&&v.call(d,m,u),o(d).notify(this.name)}}}class l extends ws{constructor(d,u,f=!1){super(d,u),this.binding=d,this.isVolatileBinding=f,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(d,u){this.needsRefresh&&this.last!==null&&this.disconnect();const f=i;i=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const m=this.binding(d,u);return i=f,m}disconnect(){if(this.last!==null){let d=this.first;for(;d!==void 0;)d.notifier.unsubscribe(this,d.propertyName),d=d.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(d,u){const f=this.last,m=o(d),v=f===null?this.first:{};if(v.propertySource=d,v.propertyName=u,v.notifier=m,m.subscribe(this,u),f!==null){if(!this.needsRefresh){let b;i=void 0,b=f.propertySource[f.propertyName],i=this,d===b&&(this.needsRefresh=!0)}f.next=v}this.last=v}handleChange(){this.needsQueue&&(this.needsQueue=!1,n(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let d=this.first;return{next:()=>{const u=d;return u===void 0?{value:void 0,done:!0}:(d=d.next,{value:u,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(c){s=c},getNotifier:o,track(c,d){i!==void 0&&i.watch(c,d)},trackVolatile(){i!==void 0&&(i.needsRefresh=!0)},notify(c,d){o(c).notify(d)},defineProperty(c,d){typeof d=="string"&&(d=new a(d)),r(c).push(d),Reflect.defineProperty(c,d.name,{enumerable:!0,get:function(){return d.getValue(this)},set:function(u){d.setValue(this,u)}})},getAccessors:r,binding(c,d,u=this.isVolatileBinding(c)){return new l(c,d,u)},isVolatileBinding(c){return t.test(c.toString())}})});function U(t,e){ue.defineProperty(t,e)}function $f(t,e,n){return Object.assign({},n,{get:function(){return ue.trackVolatile(),n.get.apply(this)}})}const $a=Hi.getById(3,()=>{let t=null;return{get(){return t},set(e){t=e}}});class Ni{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return $a.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){$a.set(e)}}ue.defineProperty(Ni.prototype,"index");ue.defineProperty(Ni.prototype,"length");const Ti=Object.seal(new Ni);class js{constructor(){this.targetIndex=0}}class Rc extends js{constructor(){super(...arguments),this.createPlaceholder=he.createInterpolationPlaceholder}}class vr extends js{constructor(e,n,i){super(),this.name=e,this.behavior=n,this.options=i}createPlaceholder(e){return he.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function Cf(t,e){this.source=t,this.context=e,this.bindingObserver===null&&(this.bindingObserver=ue.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(t,e))}function kf(t,e){this.source=t,this.context=e,this.target.addEventListener(this.targetName,this)}function Tf(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Sf(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.unbind(),t.needsBindOnly=!0)}function If(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function _f(t){he.setAttribute(this.target,this.targetName,t)}function Ef(t){he.setBooleanAttribute(this.target,this.targetName,t)}function Of(t){if(t==null&&(t=""),t.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=t.create():this.target.$fastTemplate!==t&&(e.isComposed&&(e.remove(),e.unbind()),e=t.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=t)}else{const e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=t}}function Af(t){this.target[this.targetName]=t}function Rf(t){const e=this.classVersions||Object.create(null),n=this.target;let i=this.version||0;if(t!=null&&t.length){const s=t.split(/\s+/);for(let o=0,r=s.length;o<r;++o){const a=s[o];a!==""&&(e[a]=i,n.classList.add(a))}}if(this.classVersions=e,this.version=i+1,i!==0){i-=1;for(const s in e)e[s]===i&&n.classList.remove(s)}}class yr extends Rc{constructor(e){super(),this.binding=e,this.bind=Cf,this.unbind=Tf,this.updateTarget=_f,this.isBindingVolatile=ue.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Af,this.cleanedTargetName==="innerHTML"){const n=this.binding;this.binding=(i,s)=>he.createHTML(n(i,s))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Ef;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=kf,this.unbind=If;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=Rf);break}}targetAtContent(){this.updateTarget=Of,this.unbind=Sf}createBehavior(e){return new Df(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Df{constructor(e,n,i,s,o,r,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=n,this.isBindingVolatile=i,this.bind=s,this.unbind=o,this.updateTarget=r,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Ni.setEvent(e);const n=this.binding(this.source,this.context);Ni.setEvent(null),n!==!0&&e.preventDefault()}}let co=null;class xr{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){co=this}static borrow(e){const n=co||new xr;return n.directives=e,n.reset(),co=null,n}}function Pf(t){if(t.length===1)return t[0];let e;const n=t.length,i=t.map(r=>typeof r=="string"?()=>r:(e=r.targetName||e,r.binding)),s=(r,a)=>{let l="";for(let c=0;c<n;++c)l+=i[c](r,a);return l},o=new yr(s);return o.targetName=e,o}const Mf=br.length;function Dc(t,e){const n=e.split(Oc);if(n.length===1)return null;const i=[];for(let s=0,o=n.length;s<o;++s){const r=n[s],a=r.indexOf(br);let l;if(a===-1)l=r;else{const c=parseInt(r.substring(0,a));i.push(t.directives[c]),l=r.substring(a+Mf)}l!==""&&i.push(l)}return i}function Ca(t,e,n=!1){const i=e.attributes;for(let s=0,o=i.length;s<o;++s){const r=i[s],a=r.value,l=Dc(t,a);let c=null;l===null?n&&(c=new yr(()=>a),c.targetName=r.name):c=Pf(l),c!==null&&(e.removeAttributeNode(r),s--,o--,t.addFactory(c))}}function Bf(t,e,n){const i=Dc(t,e.textContent);if(i!==null){let s=e;for(let o=0,r=i.length;o<r;++o){const a=i[o],l=o===0?e:s.parentNode.insertBefore(document.createTextNode(""),s.nextSibling);typeof a=="string"?l.textContent=a:(l.textContent=" ",t.captureContentBinding(a)),s=l,t.targetIndex++,l!==e&&n.nextNode()}t.targetIndex--}}function Ff(t,e){const n=t.content;document.adoptNode(n);const i=xr.borrow(e);Ca(i,t,!0);const s=i.behaviorFactories;i.reset();const o=he.createTemplateWalker(n);let r;for(;r=o.nextNode();)switch(i.targetIndex++,r.nodeType){case 1:Ca(i,r);break;case 3:Bf(i,r,o);break;case 8:he.isMarker(r)&&i.addFactory(e[he.extractDirectiveIndexFromMarker(r)])}let a=0;(he.isMarker(n.firstChild)||n.childNodes.length===1&&e.length)&&(n.insertBefore(document.createComment(""),n.firstChild),a=-1);const l=i.behaviorFactories;return i.release(),{fragment:n,viewBehaviorFactories:l,hostBehaviorFactories:s,targetOffset:a}}const uo=document.createRange();class Pc{constructor(e,n){this.fragment=e,this.behaviors=n,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const n=this.lastChild;if(e.previousSibling===n)return;const i=e.parentNode;let s=this.firstChild,o;for(;s!==n;)o=s.nextSibling,i.insertBefore(s,e),s=o;i.insertBefore(n,e)}}remove(){const e=this.fragment,n=this.lastChild;let i=this.firstChild,s;for(;i!==n;)s=i.nextSibling,e.appendChild(i),i=s;e.appendChild(n)}dispose(){const e=this.firstChild.parentNode,n=this.lastChild;let i=this.firstChild,s;for(;i!==n;)s=i.nextSibling,e.removeChild(i),i=s;e.removeChild(n);const o=this.behaviors,r=this.source;for(let a=0,l=o.length;a<l;++a)o[a].unbind(r)}bind(e,n){const i=this.behaviors;if(this.source!==e)if(this.source!==null){const s=this.source;this.source=e,this.context=n;for(let o=0,r=i.length;o<r;++o){const a=i[o];a.unbind(s),a.bind(e,n)}}else{this.source=e,this.context=n;for(let s=0,o=i.length;s<o;++s)i[s].bind(e,n)}}unbind(){if(this.source===null)return;const e=this.behaviors,n=this.source;for(let i=0,s=e.length;i<s;++i)e[i].unbind(n);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){uo.setStartBefore(e[0].firstChild),uo.setEndAfter(e[e.length-1].lastChild),uo.deleteContents();for(let n=0,i=e.length;n<i;++n){const s=e[n],o=s.behaviors,r=s.source;for(let a=0,l=o.length;a<l;++a)o[a].unbind(r)}}}}class ka{constructor(e,n){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=n}create(e){if(this.fragment===null){let c;const d=this.html;if(typeof d=="string"){c=document.createElement("template"),c.innerHTML=he.createHTML(d);const f=c.content.firstElementChild;f!==null&&f.tagName==="TEMPLATE"&&(c=f)}else c=d;const u=Ff(c,this.directives);this.fragment=u.fragment,this.viewBehaviorFactories=u.viewBehaviorFactories,this.hostBehaviorFactories=u.hostBehaviorFactories,this.targetOffset=u.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const n=this.fragment.cloneNode(!0),i=this.viewBehaviorFactories,s=new Array(this.behaviorCount),o=he.createTemplateWalker(n);let r=0,a=this.targetOffset,l=o.nextNode();for(let c=i.length;r<c;++r){const d=i[r],u=d.targetIndex;for(;l!==null;)if(a===u){s[r]=d.createBehavior(l);break}else l=o.nextNode(),a++}if(this.hasHostBehaviors){const c=this.hostBehaviorFactories;for(let d=0,u=c.length;d<u;++d,++r)s[r]=c[d].createBehavior(e)}return new Pc(n,s)}render(e,n,i){typeof n=="string"&&(n=document.getElementById(n)),i===void 0&&(i=n);const s=this.create(i);return s.bind(e,Ti),s.appendTo(n),s}}const Lf=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function ye(t,...e){const n=[];let i="";for(let s=0,o=t.length-1;s<o;++s){const r=t[s];let a=e[s];if(i+=r,a instanceof ka){const l=a;a=()=>l}if(typeof a=="function"&&(a=new yr(a)),a instanceof Rc){const l=Lf.exec(r);l!==null&&(a.targetName=l[2])}a instanceof js?(i+=a.createPlaceholder(n.length),n.push(a)):i+=a}return i+=t[t.length-1],new ka(i,n)}class it{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}}it.create=(()=>{if(he.supportsAdoptedStyleSheets){const t=new Map;return e=>new Hf(e,t)}return t=>new jf(t)})();function wr(t){return t.map(e=>e instanceof it?wr(e.styles):[e]).reduce((e,n)=>e.concat(n),[])}function Mc(t){return t.map(e=>e instanceof it?e.behaviors:null).reduce((e,n)=>n===null?e:(e===null&&(e=[]),e.concat(n)),null)}class Hf extends it{constructor(e,n){super(),this.styles=e,this.styleSheetCache=n,this._styleSheets=void 0,this.behaviors=Mc(e)}get styleSheets(){if(this._styleSheets===void 0){const e=this.styles,n=this.styleSheetCache;this._styleSheets=wr(e).map(i=>{if(i instanceof CSSStyleSheet)return i;let s=n.get(i);return s===void 0&&(s=new CSSStyleSheet,s.replaceSync(i),n.set(i,s)),s})}return this._styleSheets}addStylesTo(e){e.adoptedStyleSheets=[...e.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(e)}removeStylesFrom(e){const n=this.styleSheets;e.adoptedStyleSheets=e.adoptedStyleSheets.filter(i=>n.indexOf(i)===-1),super.removeStylesFrom(e)}}let Nf=0;function Vf(){return`fast-style-class-${++Nf}`}class jf extends it{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=Mc(e),this.styleSheets=wr(e),this.styleClass=Vf()}addStylesTo(e){const n=this.styleSheets,i=this.styleClass;e=this.normalizeTarget(e);for(let s=0;s<n.length;s++){const o=document.createElement("style");o.innerHTML=n[s],o.className=i,e.append(o)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);const n=e.querySelectorAll(`.${this.styleClass}`);for(let i=0,s=n.length;i<s;++i)e.removeChild(n[i]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const $s=Object.freeze({locate:_c()}),Bc={toView(t){return t?"true":"false"},fromView(t){return!(t==null||t==="false"||t===!1||t===0)}},St={toView(t){if(t==null)return null;const e=t*1;return isNaN(e)?null:e.toString()},fromView(t){if(t==null)return null;const e=t*1;return isNaN(e)?null:e}};class Cs{constructor(e,n,i=n.toLowerCase(),s="reflect",o){this.guards=new Set,this.Owner=e,this.name=n,this.attribute=i,this.mode=s,this.converter=o,this.fieldName=`_${n}`,this.callbackName=`${n}Changed`,this.hasCallback=this.callbackName in e.prototype,s==="boolean"&&o===void 0&&(this.converter=Bc)}setValue(e,n){const i=e[this.fieldName],s=this.converter;s!==void 0&&(n=s.fromView(n)),i!==n&&(e[this.fieldName]=n,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](i,n),e.$fastController.notify(this.name))}getValue(e){return ue.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,n){this.guards.has(e)||(this.guards.add(e),this.setValue(e,n),this.guards.delete(e))}tryReflectToAttribute(e){const n=this.mode,i=this.guards;i.has(e)||n==="fromView"||he.queueUpdate(()=>{i.add(e);const s=e[this.fieldName];switch(n){case"reflect":const o=this.converter;he.setAttribute(e,this.attribute,o!==void 0?o.toView(s):s);break;case"boolean":he.setBooleanAttribute(e,this.attribute,s);break}i.delete(e)})}static collect(e,...n){const i=[];n.push($s.locate(e));for(let s=0,o=n.length;s<o;++s){const r=n[s];if(r!==void 0)for(let a=0,l=r.length;a<l;++a){const c=r[a];typeof c=="string"?i.push(new Cs(e,c)):i.push(new Cs(e,c.property,c.attribute,c.mode,c.converter))}}return i}}function $(t,e){let n;function i(s,o){arguments.length>1&&(n.property=o),$s.locate(s.constructor).push(n)}if(arguments.length>1){n={},i(t,e);return}return n=t===void 0?{}:t,i}const Ta={mode:"open"},Sa={},No=Hi.getById(4,()=>{const t=new Map;return Object.freeze({register(e){return t.has(e.type)?!1:(t.set(e.type,e),!0)},getByType(e){return t.get(e)}})});class zs{constructor(e,n=e.definition){typeof n=="string"&&(n={name:n}),this.type=e,this.name=n.name,this.template=n.template;const i=Cs.collect(e,n.attributes),s=new Array(i.length),o={},r={};for(let a=0,l=i.length;a<l;++a){const c=i[a];s[a]=c.attribute,o[c.name]=c,r[c.attribute]=c}this.attributes=i,this.observedAttributes=s,this.propertyLookup=o,this.attributeLookup=r,this.shadowOptions=n.shadowOptions===void 0?Ta:n.shadowOptions===null?void 0:Object.assign(Object.assign({},Ta),n.shadowOptions),this.elementOptions=n.elementOptions===void 0?Sa:Object.assign(Object.assign({},Sa),n.elementOptions),this.styles=n.styles===void 0?void 0:Array.isArray(n.styles)?it.create(n.styles):n.styles instanceof it?n.styles:it.create([n.styles])}get isDefined(){return!!No.getByType(this.type)}define(e=customElements){const n=this.type;if(No.register(this)){const i=this.attributes,s=n.prototype;for(let o=0,r=i.length;o<r;++o)ue.defineProperty(s,i[o]);Reflect.defineProperty(n,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,n,this.elementOptions),this}}zs.forType=No.getByType;const Fc=new WeakMap,zf={bubbles:!0,composed:!0,cancelable:!0};function ho(t){return t.shadowRoot||Fc.get(t)||null}class $r extends Ac{constructor(e,n){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=n;const i=n.shadowOptions;if(i!==void 0){const o=e.attachShadow(i);i.mode==="closed"&&Fc.set(e,o)}const s=ue.getAccessors(e);if(s.length>0){const o=this.boundObservables=Object.create(null);for(let r=0,a=s.length;r<a;++r){const l=s[r].name,c=e[l];c!==void 0&&(delete e[l],o[l]=c)}}}get isConnected(){return ue.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,ue.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){const n=ho(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)n.append(e);else if(!e.isAttachedTo(n)){const i=e.behaviors;e.addStylesTo(n),i!==null&&this.addBehaviors(i)}}removeStyles(e){const n=ho(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)n.removeChild(e);else if(e.isAttachedTo(n)){const i=e.behaviors;e.removeStylesFrom(n),i!==null&&this.removeBehaviors(i)}}addBehaviors(e){const n=this.behaviors||(this.behaviors=new Map),i=e.length,s=[];for(let o=0;o<i;++o){const r=e[o];n.has(r)?n.set(r,n.get(r)+1):(n.set(r,1),s.push(r))}if(this._isConnected){const o=this.element;for(let r=0;r<s.length;++r)s[r].bind(o,Ti)}}removeBehaviors(e,n=!1){const i=this.behaviors;if(i===null)return;const s=e.length,o=[];for(let r=0;r<s;++r){const a=e[r];if(i.has(a)){const l=i.get(a)-1;l===0||n?i.delete(a)&&o.push(a):i.set(a,l)}}if(this._isConnected){const r=this.element;for(let a=0;a<o.length;++a)o[a].unbind(r)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,Ti);const n=this.behaviors;if(n!==null)for(const[i]of n)i.bind(e,Ti);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;e!==null&&e.unbind();const n=this.behaviors;if(n!==null){const i=this.element;for(const[s]of n)s.unbind(i)}}onAttributeChangedCallback(e,n,i){const s=this.definition.attributeLookup[e];s!==void 0&&s.onAttributeChangedCallback(this.element,i)}emit(e,n,i){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:n},zf),i))):!1}finishInitialization(){const e=this.element,n=this.boundObservables;if(n!==null){const s=Object.keys(n);for(let o=0,r=s.length;o<r;++o){const a=s[o];e[a]=n[a]}this.boundObservables=null}const i=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const n=this.element,i=ho(n)||n;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||he.removeChildNodes(i),e&&(this.view=e.render(n,i,n))}static forCustomElement(e){const n=e.$fastController;if(n!==void 0)return n;const i=zs.forType(e.constructor);if(i===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new $r(e,i)}}function Ia(t){return class extends t{constructor(){super(),$r.forCustomElement(this)}$emit(e,n,i){return this.$fastController.emit(e,n,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,n,i){this.$fastController.onAttributeChangedCallback(e,n,i)}}}const Us=Object.assign(Ia(HTMLElement),{from(t){return Ia(t)},define(t,e){return new zs(t,e).define().type}});class Lc{createCSS(){return""}createBehavior(){}}function Uf(t,e){const n=[];let i="";const s=[];for(let o=0,r=t.length-1;o<r;++o){i+=t[o];let a=e[o];if(a instanceof Lc){const l=a.createBehavior();a=a.createCSS(),l&&s.push(l)}a instanceof it||a instanceof CSSStyleSheet?(i.trim()!==""&&(n.push(i),i=""),n.push(a)):i+=a}return i+=t[t.length-1],i.trim()!==""&&n.push(i),{styles:n,behaviors:s}}function De(t,...e){const{styles:n,behaviors:i}=Uf(t,e),s=it.create(n);return i.length&&s.withBehaviors(...i),s}function wt(t,e,n){return{index:t,removed:e,addedCount:n}}const Hc=0,Nc=1,Vo=2,jo=3;function qf(t,e,n,i,s,o){const r=o-s+1,a=n-e+1,l=new Array(r);let c,d;for(let u=0;u<r;++u)l[u]=new Array(a),l[u][0]=u;for(let u=0;u<a;++u)l[0][u]=u;for(let u=1;u<r;++u)for(let f=1;f<a;++f)t[e+f-1]===i[s+u-1]?l[u][f]=l[u-1][f-1]:(c=l[u-1][f]+1,d=l[u][f-1]+1,l[u][f]=c<d?c:d);return l}function Wf(t){let e=t.length-1,n=t[0].length-1,i=t[e][n];const s=[];for(;e>0||n>0;){if(e===0){s.push(Vo),n--;continue}if(n===0){s.push(jo),e--;continue}const o=t[e-1][n-1],r=t[e-1][n],a=t[e][n-1];let l;r<a?l=r<o?r:o:l=a<o?a:o,l===o?(o===i?s.push(Hc):(s.push(Nc),i=o),e--,n--):l===r?(s.push(jo),e--,i=r):(s.push(Vo),n--,i=a)}return s.reverse(),s}function Gf(t,e,n){for(let i=0;i<n;++i)if(t[i]!==e[i])return i;return n}function Yf(t,e,n){let i=t.length,s=e.length,o=0;for(;o<n&&t[--i]===e[--s];)o++;return o}function Qf(t,e,n,i){return e<n||i<t?-1:e===n||i===t?0:t<n?e<i?e-n:i-n:i<e?i-t:e-t}function Vc(t,e,n,i,s,o){let r=0,a=0;const l=Math.min(n-e,o-s);if(e===0&&s===0&&(r=Gf(t,i,l)),n===t.length&&o===i.length&&(a=Yf(t,i,l-r)),e+=r,s+=r,n-=a,o-=a,n-e===0&&o-s===0)return In;if(e===n){const v=wt(e,[],0);for(;s<o;)v.removed.push(i[s++]);return[v]}else if(s===o)return[wt(e,[],n-e)];const c=Wf(qf(t,e,n,i,s,o)),d=[];let u,f=e,m=s;for(let v=0;v<c.length;++v)switch(c[v]){case Hc:u!==void 0&&(d.push(u),u=void 0),f++,m++;break;case Nc:u===void 0&&(u=wt(f,[],0)),u.addedCount++,f++,u.removed.push(i[m]),m++;break;case Vo:u===void 0&&(u=wt(f,[],0)),u.addedCount++,f++;break;case jo:u===void 0&&(u=wt(f,[],0)),u.removed.push(i[m]),m++;break}return u!==void 0&&d.push(u),d}const _a=Array.prototype.push;function Jf(t,e,n,i){const s=wt(e,n,i);let o=!1,r=0;for(let a=0;a<t.length;a++){const l=t[a];if(l.index+=r,o)continue;const c=Qf(s.index,s.index+s.removed.length,l.index,l.index+l.addedCount);if(c>=0){t.splice(a,1),a--,r-=l.addedCount-l.removed.length,s.addedCount+=l.addedCount-c;const d=s.removed.length+l.removed.length-c;if(!s.addedCount&&!d)o=!0;else{let u=l.removed;if(s.index<l.index){const f=s.removed.slice(0,l.index-s.index);_a.apply(f,u),u=f}if(s.index+s.removed.length>l.index+l.addedCount){const f=s.removed.slice(l.index+l.addedCount-s.index);_a.apply(u,f)}s.removed=u,l.index<s.index&&(s.index=l.index)}}else if(s.index<l.index){o=!0,t.splice(a,0,s),a++;const d=s.addedCount-s.removed.length;l.index+=d,r+=d}}o||t.push(s)}function Xf(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];Jf(e,s.index,s.removed,s.addedCount)}return e}function Zf(t,e){let n=[];const i=Xf(e);for(let s=0,o=i.length;s<o;++s){const r=i[s];if(r.addedCount===1&&r.removed.length===1){r.removed[0]!==t[r.index]&&n.push(r);continue}n=n.concat(Vc(t,r.index,r.index+r.addedCount,r.removed,0,r.removed.length))}return n}let Ea=!1;function fo(t,e){let n=t.index;const i=e.length;return n>i?n=i-t.addedCount:n<0&&(n=i+t.removed.length+n-t.addedCount),n<0&&(n=0),t.index=n,t}class Kf extends ws{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){this.splices===void 0?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,he.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,he.queueUpdate(this))}flush(){const e=this.splices,n=this.oldCollection;if(e===void 0&&n===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const i=n===void 0?Zf(this.source,e):Vc(this.source,0,this.source.length,n,0,n.length);this.notify(i)}}function ep(){if(Ea)return;Ea=!0,ue.setArrayObserverFactory(l=>new Kf(l));const t=Array.prototype;if(t.$fastPatch)return;Reflect.defineProperty(t,"$fastPatch",{value:1,enumerable:!1});const e=t.pop,n=t.push,i=t.reverse,s=t.shift,o=t.sort,r=t.splice,a=t.unshift;t.pop=function(){const l=this.length>0,c=e.apply(this,arguments),d=this.$fastController;return d!==void 0&&l&&d.addSplice(wt(this.length,[c],0)),c},t.push=function(){const l=n.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(fo(wt(this.length-arguments.length,[],arguments.length),this)),l},t.reverse=function(){let l;const c=this.$fastController;c!==void 0&&(c.flush(),l=this.slice());const d=i.apply(this,arguments);return c!==void 0&&c.reset(l),d},t.shift=function(){const l=this.length>0,c=s.apply(this,arguments),d=this.$fastController;return d!==void 0&&l&&d.addSplice(wt(0,[c],0)),c},t.sort=function(){let l;const c=this.$fastController;c!==void 0&&(c.flush(),l=this.slice());const d=o.apply(this,arguments);return c!==void 0&&c.reset(l),d},t.splice=function(){const l=r.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(fo(wt(+arguments[0],l,arguments.length>2?arguments.length-2:0),this)),l},t.unshift=function(){const l=a.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(fo(wt(0,[],arguments.length),this)),l}}class tp{constructor(e,n){this.target=e,this.propertyName=n}bind(e){e[this.propertyName]=this.target}unbind(){}}function Ke(t){return new vr("fast-ref",tp,t)}function ks(t,e){const n=typeof e=="function"?e:()=>e;return(i,s)=>t(i,s)?n(i,s):null}function np(t,e,n,i){t.bind(e[n],i)}function ip(t,e,n,i){const s=Object.create(i);s.index=n,s.length=e.length,t.bind(e[n],s)}class sp{constructor(e,n,i,s,o,r){this.location=e,this.itemsBinding=n,this.templateBinding=s,this.options=r,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=np,this.itemsBindingObserver=ue.binding(n,this,i),this.templateBindingObserver=ue.binding(s,this,o),r.positioning&&(this.bindView=ip)}bind(e,n){this.source=e,this.originalContext=n,this.childContext=Object.create(n),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,n){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(n)}observeItems(e=!1){if(!this.items){this.items=In;return}const n=this.itemsObserver,i=this.itemsObserver=ue.getNotifier(this.items),s=n!==i;s&&n!==null&&n.unsubscribe(this),(s||e)&&i.subscribe(this)}updateViews(e){const n=this.childContext,i=this.views,s=this.bindView,o=this.items,r=this.template,a=this.options.recycle,l=[];let c=0,d=0;for(let u=0,f=e.length;u<f;++u){const m=e[u],v=m.removed;let b=0,A=m.index;const _=A+m.addedCount,F=i.splice(m.index,v.length),D=d=l.length+F.length;for(;A<_;++A){const J=i[A],Y=J?J.firstChild:this.location;let te;a&&d>0?(b<=D&&F.length>0?(te=F[b],b++):(te=l[c],c++),d--):te=r.create(),i.splice(A,0,te),s(te,o,A,n),te.insertBefore(Y)}F[b]&&l.push(...F.slice(b))}for(let u=c,f=l.length;u<f;++u)l[u].dispose();if(this.options.positioning)for(let u=0,f=i.length;u<f;++u){const m=i[u].context;m.length=f,m.index=u}}refreshAllViews(e=!1){const n=this.items,i=this.childContext,s=this.template,o=this.location,r=this.bindView;let a=n.length,l=this.views,c=l.length;if((a===0||e||!this.options.recycle)&&(Pc.disposeContiguousBatch(l),c=0),c===0){this.views=l=new Array(a);for(let d=0;d<a;++d){const u=s.create();r(u,n,d,i),l[d]=u,u.insertBefore(o)}}else{let d=0;for(;d<a;++d)if(d<c){const f=l[d];r(f,n,d,i)}else{const f=s.create();r(f,n,d,i),l.push(f),f.insertBefore(o)}const u=l.splice(d,c-d);for(d=0,a=u.length;d<a;++d)u[d].dispose()}}unbindAllViews(){const e=this.views;for(let n=0,i=e.length;n<i;++n)e[n].unbind()}}class jc extends js{constructor(e,n,i){super(),this.itemsBinding=e,this.templateBinding=n,this.options=i,this.createPlaceholder=he.createBlockPlaceholder,ep(),this.isItemsBindingVolatile=ue.isVolatileBinding(e),this.isTemplateBindingVolatile=ue.isVolatileBinding(n)}createBehavior(e){return new sp(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function Cr(t){return t?function(e,n,i){return e.nodeType===1&&e.matches(t)}:function(e,n,i){return e.nodeType===1}}class zc{constructor(e,n){this.target=e,this.options=n,this.source=null}bind(e){const n=this.options.property;this.shouldUpdate=ue.getAccessors(e).some(i=>i.name===n),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(In),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class op extends zc{constructor(e,n){super(e,n)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function mt(t){return typeof t=="string"&&(t={property:t}),new vr("fast-slotted",op,t)}class rp extends zc{constructor(e,n){super(e,n),this.observer=null,n.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function Uc(t){return typeof t=="string"&&(t={property:t}),new vr("fast-children",rp,t)}class si{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const oi=(t,e)=>ye`
    <span
        part="end"
        ${Ke("endContainer")}
        class=${n=>e.end?"end":void 0}
    >
        <slot name="end" ${Ke("end")} @slotchange="${n=>n.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,ri=(t,e)=>ye`
    <span
        part="start"
        ${Ke("startContainer")}
        class="${n=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Ke("start")}
            @slotchange="${n=>n.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`;ye`
    <span part="end" ${Ke("endContainer")}>
        <slot
            name="end"
            ${Ke("end")}
            @slotchange="${t=>t.handleEndContentChange()}"
        ></slot>
    </span>
`;ye`
    <span part="start" ${Ke("startContainer")}>
        <slot
            name="start"
            ${Ke("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        ></slot>
    </span>
`;function g(t,e,n,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o}const po=new Map;"metadata"in Reflect||(Reflect.metadata=function(t,e){return function(n){Reflect.defineMetadata(t,e,n)}},Reflect.defineMetadata=function(t,e,n){let i=po.get(n);i===void 0&&po.set(n,i=new Map),i.set(t,e)},Reflect.getOwnMetadata=function(t,e){const n=po.get(e);if(n!==void 0)return n.get(t)});class ap{constructor(e,n){this.container=e,this.key=n}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Wc(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,n){const{container:i,key:s}=this;return this.container=this.key=void 0,i.registerResolver(s,new ft(s,e,n))}}function fi(t){const e=t.slice(),n=Object.keys(t),i=n.length;let s;for(let o=0;o<i;++o)s=n[o],Gc(s)||(e[s]=t[s]);return e}const lp=Object.freeze({none(t){throw Error(`${t.toString()} not registered, did you forget to add @singleton()?`)},singleton(t){return new ft(t,1,t)},transient(t){return new ft(t,2,t)}}),go=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:lp.singleton})}),Oa=new Map;function Aa(t){return e=>Reflect.getOwnMetadata(t,e)}let Ra=null;const Re=Object.freeze({createContainer(t){return new Si(null,Object.assign({},go.default,t))},findResponsibleContainer(t){const e=t.$$container$$;return e&&e.responsibleForOwnerRequests?e:Re.findParentContainer(t)},findParentContainer(t){const e=new CustomEvent(qc,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return t.dispatchEvent(e),e.detail.container||Re.getOrCreateDOMContainer()},getOrCreateDOMContainer(t,e){return t?t.$$container$$||new Si(t,Object.assign({},go.default,e,{parentLocator:Re.findParentContainer})):Ra||(Ra=new Si(null,Object.assign({},go.default,e,{parentLocator:()=>null})))},getDesignParamtypes:Aa("design:paramtypes"),getAnnotationParamtypes:Aa("di:paramtypes"),getOrCreateAnnotationParamTypes(t){let e=this.getAnnotationParamtypes(t);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],t),e},getDependencies(t){let e=Oa.get(t);if(e===void 0){const n=t.inject;if(n===void 0){const i=Re.getDesignParamtypes(t),s=Re.getAnnotationParamtypes(t);if(i===void 0)if(s===void 0){const o=Object.getPrototypeOf(t);typeof o=="function"&&o!==Function.prototype?e=fi(Re.getDependencies(o)):e=[]}else e=fi(s);else if(s===void 0)e=fi(i);else{e=fi(i);let o=s.length,r;for(let c=0;c<o;++c)r=s[c],r!==void 0&&(e[c]=r);const a=Object.keys(s);o=a.length;let l;for(let c=0;c<o;++c)l=a[c],Gc(l)||(e[l]=s[l])}}else e=fi(n);Oa.set(t,e)}return e},defineProperty(t,e,n,i=!1){const s=`$di_${e}`;Reflect.defineProperty(t,e,{get:function(){let o=this[s];if(o===void 0&&(o=(this instanceof HTMLElement?Re.findResponsibleContainer(this):Re.getOrCreateDOMContainer()).get(n),this[s]=o,i&&this instanceof Us)){const a=this.$fastController,l=()=>{const d=Re.findResponsibleContainer(this).get(n),u=this[s];d!==u&&(this[s]=o,a.notify(e))};a.subscribe({handleChange:l},"isConnected")}return o}})},createInterface(t,e){const n=typeof t=="function"?t:e,i=typeof t=="string"?t:t&&"friendlyName"in t&&t.friendlyName||Ba,s=typeof t=="string"?!1:t&&"respectConnection"in t&&t.respectConnection||!1,o=function(r,a,l){if(r==null||new.target!==void 0)throw new Error(`No registration for interface: '${o.friendlyName}'`);if(a)Re.defineProperty(r,a,o,s);else{const c=Re.getOrCreateAnnotationParamTypes(r);c[l]=o}};return o.$isInterface=!0,o.friendlyName=i??"(anonymous)",n!=null&&(o.register=function(r,a){return n(new ap(r,a??o))}),o.toString=function(){return`InterfaceSymbol<${o.friendlyName}>`},o},inject(...t){return function(e,n,i){if(typeof i=="number"){const s=Re.getOrCreateAnnotationParamTypes(e),o=t[0];o!==void 0&&(s[i]=o)}else if(n)Re.defineProperty(e,n,t[0]);else{const s=i?Re.getOrCreateAnnotationParamTypes(i.value):Re.getOrCreateAnnotationParamTypes(e);let o;for(let r=0;r<t.length;++r)o=t[r],o!==void 0&&(s[r]=o)}}},transient(t){return t.register=function(n){return Vi.transient(t,t).register(n)},t.registerInRequestor=!1,t},singleton(t,e=dp){return t.register=function(i){return Vi.singleton(t,t).register(i)},t.registerInRequestor=e.scoped,t}}),cp=Re.createInterface("Container");Re.inject;const dp={scoped:!1};class ft{constructor(e,n,i){this.key=e,this.strategy=n,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,n){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(n),this.strategy=0,this.resolving=!1,this.state}case 2:{const i=e.getFactory(this.state);if(i===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return i.construct(n)}case 3:return this.state(e,n,this);case 4:return this.state[0].resolve(e,n);case 5:return n.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var n,i,s;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(s=(i=(n=e.getResolver(this.state))===null||n===void 0?void 0:n.getFactory)===null||i===void 0?void 0:i.call(n,e))!==null&&s!==void 0?s:null;default:return null}}}function Da(t){return this.get(t)}function up(t,e){return e(t)}class hp{constructor(e,n){this.Type=e,this.dependencies=n,this.transformers=null}construct(e,n){let i;return n===void 0?i=new this.Type(...this.dependencies.map(Da,e)):i=new this.Type(...this.dependencies.map(Da,e),...n),this.transformers==null?i:this.transformers.reduce(up,i)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const fp={$isResolver:!0,resolve(t,e){return e}};function fs(t){return typeof t.register=="function"}function pp(t){return fs(t)&&typeof t.registerInRequestor=="boolean"}function Pa(t){return pp(t)&&t.registerInRequestor}function gp(t){return t.prototype!==void 0}const mp=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),qc="__DI_LOCATE_PARENT__",mo=new Map;class Si{constructor(e,n){this.owner=e,this.config=n,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(cp,fp),e instanceof Node&&e.addEventListener(qc,i=>{i.composedPath()[0]!==this.owner&&(i.detail.container=this,i.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...n){return this.context=e,this.register(...n),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let n,i,s,o,r;const a=this.context;for(let l=0,c=e.length;l<c;++l)if(n=e[l],!!Fa(n))if(fs(n))n.register(this,a);else if(gp(n))Vi.singleton(n,n).register(this);else for(i=Object.keys(n),o=0,r=i.length;o<r;++o)s=n[i[o]],Fa(s)&&(fs(s)?s.register(this,a):this.register(s));return--this.registerDepth,this}registerResolver(e,n){is(e);const i=this.resolvers,s=i.get(e);return s==null?i.set(e,n):s instanceof ft&&s.strategy===4?s.state.push(n):i.set(e,new ft(e,4,[s,n])),n}registerTransformer(e,n){const i=this.getResolver(e);if(i==null)return!1;if(i.getFactory){const s=i.getFactory(this);return s==null?!1:(s.registerTransformer(n),!0)}return!1}getResolver(e,n=!0){if(is(e),e.resolve!==void 0)return e;let i=this,s;for(;i!=null;)if(s=i.resolvers.get(e),s==null){if(i.parent==null){const o=Pa(e)?this:i;return n?this.jitRegister(e,o):null}i=i.parent}else return s;return null}has(e,n=!1){return this.resolvers.has(e)?!0:n&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(is(e),e.$isResolver)return e.resolve(this,this);let n=this,i;for(;n!=null;)if(i=n.resolvers.get(e),i==null){if(n.parent==null){const s=Pa(e)?this:n;return i=this.jitRegister(e,s),i.resolve(n,this)}n=n.parent}else return i.resolve(n,this);throw new Error(`Unable to resolve key: ${e}`)}getAll(e,n=!1){is(e);const i=this;let s=i,o;if(n){let r=In;for(;s!=null;)o=s.resolvers.get(e),o!=null&&(r=r.concat(Ma(o,s,i))),s=s.parent;return r}else for(;s!=null;)if(o=s.resolvers.get(e),o==null){if(s=s.parent,s==null)return In}else return Ma(o,s,i);return In}getFactory(e){let n=mo.get(e);if(n===void 0){if(bp(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);mo.set(e,n=new hp(e,Re.getDependencies(e)))}return n}registerFactory(e,n){mo.set(e,n)}createChild(e){return new Si(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,n){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(mp.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(fs(e)){const i=e.register(n);if(!(i instanceof Object)||i.resolve==null){const s=n.resolvers.get(e);if(s!=null)return s;throw new Error("A valid resolver was not returned from the static register method")}return i}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const i=this.config.defaultResolver(e,n);return n.resolvers.set(e,i),i}}}}const bo=new WeakMap;function Wc(t){return function(e,n,i){if(bo.has(i))return bo.get(i);const s=t(e,n,i);return bo.set(i,s),s}}const Vi=Object.freeze({instance(t,e){return new ft(t,0,e)},singleton(t,e){return new ft(t,1,e)},transient(t,e){return new ft(t,2,e)},callback(t,e){return new ft(t,3,e)},cachedCallback(t,e){return new ft(t,3,Wc(e))},aliasTo(t,e){return new ft(e,5,t)}});function is(t){if(t==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Ma(t,e,n){if(t instanceof ft&&t.strategy===4){const i=t.state;let s=i.length;const o=new Array(s);for(;s--;)o[s]=i[s].resolve(e,n);return o}return[t.resolve(e,n)]}const Ba="(anonymous)";function Fa(t){return typeof t=="object"&&t!==null||typeof t=="function"}const bp=function(){const t=new WeakMap;let e=!1,n="",i=0;return function(s){return e=t.get(s),e===void 0&&(n=s.toString(),i=n.length,e=i>=29&&i<=100&&n.charCodeAt(i-1)===125&&n.charCodeAt(i-2)<=32&&n.charCodeAt(i-3)===93&&n.charCodeAt(i-4)===101&&n.charCodeAt(i-5)===100&&n.charCodeAt(i-6)===111&&n.charCodeAt(i-7)===99&&n.charCodeAt(i-8)===32&&n.charCodeAt(i-9)===101&&n.charCodeAt(i-10)===118&&n.charCodeAt(i-11)===105&&n.charCodeAt(i-12)===116&&n.charCodeAt(i-13)===97&&n.charCodeAt(i-14)===110&&n.charCodeAt(i-15)===88,t.set(s,e)),e}}(),ss={};function Gc(t){switch(typeof t){case"number":return t>=0&&(t|0)===t;case"string":{const e=ss[t];if(e!==void 0)return e;const n=t.length;if(n===0)return ss[t]=!1;let i=0;for(let s=0;s<n;++s)if(i=t.charCodeAt(s),s===0&&i===48&&n>1||i<48||i>57)return ss[t]=!1;return ss[t]=!0}default:return!1}}function La(t){return`${t.toLowerCase()}:presentation`}const os=new Map,Yc=Object.freeze({define(t,e,n){const i=La(t);os.get(i)===void 0?os.set(i,e):os.set(i,!1),n.register(Vi.instance(i,e))},forTag(t,e){const n=La(t),i=os.get(n);return i===!1?Re.findResponsibleContainer(e).get(n):i||null}});class vp{constructor(e,n){this.template=e||null,this.styles=n===void 0?null:Array.isArray(n)?it.create(n):n instanceof it?n:it.create([n])}applyTo(e){const n=e.$fastController;n.template===null&&(n.template=this.template),n.styles===null&&(n.styles=this.styles)}}class Ee extends Us{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Yc.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(n={})=>new yp(this===Ee?class extends Ee{}:this,e,n)}}g([U],Ee.prototype,"template",void 0);g([U],Ee.prototype,"styles",void 0);function pi(t,e,n){return typeof t=="function"?t(e,n):t}class yp{constructor(e,n,i){this.type=e,this.elementDefinition=n,this.overrideDefinition=i,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,n){const i=this.definition,s=this.overrideDefinition,r=`${i.prefix||n.elementPrefix}-${i.baseName}`;n.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{const l=new vp(pi(i.template,a,i),pi(i.styles,a,i));a.definePresentation(l);let c=pi(i.shadowOptions,a,i);a.shadowRootMode&&(c?s.shadowOptions||(c.mode=a.shadowRootMode):c!==null&&(c={mode:a.shadowRootMode})),a.defineElement({elementOptions:pi(i.elementOptions,a,i),shadowOptions:c,attributes:pi(i.attributes,a,i)})}})}}function ot(t,...e){const n=$s.locate(t);e.forEach(i=>{Object.getOwnPropertyNames(i.prototype).forEach(o=>{o!=="constructor"&&Object.defineProperty(t.prototype,o,Object.getOwnPropertyDescriptor(i.prototype,o))}),$s.locate(i).forEach(o=>n.push(o))})}const kr={horizontal:"horizontal",vertical:"vertical"};function xp(t,e){let n=t.length;for(;n--;)if(e(t[n],n,t))return n;return-1}function wp(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function $p(...t){return t.every(e=>e instanceof HTMLElement)}function Cp(){const t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}let vn;function kp(){if(typeof vn=="boolean")return vn;if(!wp())return vn=!1,vn;const t=document.createElement("style"),e=Cp();e!==null&&t.setAttribute("nonce",e),document.head.appendChild(t);try{t.sheet.insertRule("foo:focus-visible {color:inherit}",0),vn=!0}catch{vn=!1}finally{document.head.removeChild(t)}return vn}const Ha="focus",Na="focusin",Qn="focusout",Jn="keydown";var Va;(function(t){t[t.alt=18]="alt",t[t.arrowDown=40]="arrowDown",t[t.arrowLeft=37]="arrowLeft",t[t.arrowRight=39]="arrowRight",t[t.arrowUp=38]="arrowUp",t[t.back=8]="back",t[t.backSlash=220]="backSlash",t[t.break=19]="break",t[t.capsLock=20]="capsLock",t[t.closeBracket=221]="closeBracket",t[t.colon=186]="colon",t[t.colon2=59]="colon2",t[t.comma=188]="comma",t[t.ctrl=17]="ctrl",t[t.delete=46]="delete",t[t.end=35]="end",t[t.enter=13]="enter",t[t.equals=187]="equals",t[t.equals2=61]="equals2",t[t.equals3=107]="equals3",t[t.escape=27]="escape",t[t.forwardSlash=191]="forwardSlash",t[t.function1=112]="function1",t[t.function10=121]="function10",t[t.function11=122]="function11",t[t.function12=123]="function12",t[t.function2=113]="function2",t[t.function3=114]="function3",t[t.function4=115]="function4",t[t.function5=116]="function5",t[t.function6=117]="function6",t[t.function7=118]="function7",t[t.function8=119]="function8",t[t.function9=120]="function9",t[t.home=36]="home",t[t.insert=45]="insert",t[t.menu=93]="menu",t[t.minus=189]="minus",t[t.minus2=109]="minus2",t[t.numLock=144]="numLock",t[t.numPad0=96]="numPad0",t[t.numPad1=97]="numPad1",t[t.numPad2=98]="numPad2",t[t.numPad3=99]="numPad3",t[t.numPad4=100]="numPad4",t[t.numPad5=101]="numPad5",t[t.numPad6=102]="numPad6",t[t.numPad7=103]="numPad7",t[t.numPad8=104]="numPad8",t[t.numPad9=105]="numPad9",t[t.numPadDivide=111]="numPadDivide",t[t.numPadDot=110]="numPadDot",t[t.numPadMinus=109]="numPadMinus",t[t.numPadMultiply=106]="numPadMultiply",t[t.numPadPlus=107]="numPadPlus",t[t.openBracket=219]="openBracket",t[t.pageDown=34]="pageDown",t[t.pageUp=33]="pageUp",t[t.period=190]="period",t[t.print=44]="print",t[t.quote=222]="quote",t[t.scrollLock=145]="scrollLock",t[t.shift=16]="shift",t[t.space=32]="space",t[t.tab=9]="tab",t[t.tilde=192]="tilde",t[t.windowsLeft=91]="windowsLeft",t[t.windowsOpera=219]="windowsOpera",t[t.windowsRight=92]="windowsRight"})(Va||(Va={}));const _n="ArrowDown",ji="ArrowLeft",zi="ArrowRight",En="ArrowUp",Gi="Enter",qs="Escape",ai="Home",li="End",Tp="F2",Sp="PageDown",Ip="PageUp",Yi=" ",Tr="Tab",_p={ArrowDown:_n,ArrowLeft:ji,ArrowRight:zi,ArrowUp:En};var Xn;(function(t){t.ltr="ltr",t.rtl="rtl"})(Xn||(Xn={}));function Ep(t,e,n){return n<t?e:n>e?t:n}function rs(t,e,n=0){return[e,n]=[e,n].sort((i,s)=>i-s),e<=t&&t<n}let Op=0;function Ts(t=""){return`${t}${Op++}`}const Ap=(t,e)=>ye`
    <a
        class="control"
        part="control"
        download="${n=>n.download}"
        href="${n=>n.href}"
        hreflang="${n=>n.hreflang}"
        ping="${n=>n.ping}"
        referrerpolicy="${n=>n.referrerpolicy}"
        rel="${n=>n.rel}"
        target="${n=>n.target}"
        type="${n=>n.type}"
        aria-atomic="${n=>n.ariaAtomic}"
        aria-busy="${n=>n.ariaBusy}"
        aria-controls="${n=>n.ariaControls}"
        aria-current="${n=>n.ariaCurrent}"
        aria-describedby="${n=>n.ariaDescribedby}"
        aria-details="${n=>n.ariaDetails}"
        aria-disabled="${n=>n.ariaDisabled}"
        aria-errormessage="${n=>n.ariaErrormessage}"
        aria-expanded="${n=>n.ariaExpanded}"
        aria-flowto="${n=>n.ariaFlowto}"
        aria-haspopup="${n=>n.ariaHaspopup}"
        aria-hidden="${n=>n.ariaHidden}"
        aria-invalid="${n=>n.ariaInvalid}"
        aria-keyshortcuts="${n=>n.ariaKeyshortcuts}"
        aria-label="${n=>n.ariaLabel}"
        aria-labelledby="${n=>n.ariaLabelledby}"
        aria-live="${n=>n.ariaLive}"
        aria-owns="${n=>n.ariaOwns}"
        aria-relevant="${n=>n.ariaRelevant}"
        aria-roledescription="${n=>n.ariaRoledescription}"
        ${Ke("control")}
    >
        ${ri(t,e)}
        <span class="content" part="content">
            <slot ${mt("defaultSlottedContent")}></slot>
        </span>
        ${oi(t,e)}
    </a>
`;class Oe{}g([$({attribute:"aria-atomic"})],Oe.prototype,"ariaAtomic",void 0);g([$({attribute:"aria-busy"})],Oe.prototype,"ariaBusy",void 0);g([$({attribute:"aria-controls"})],Oe.prototype,"ariaControls",void 0);g([$({attribute:"aria-current"})],Oe.prototype,"ariaCurrent",void 0);g([$({attribute:"aria-describedby"})],Oe.prototype,"ariaDescribedby",void 0);g([$({attribute:"aria-details"})],Oe.prototype,"ariaDetails",void 0);g([$({attribute:"aria-disabled"})],Oe.prototype,"ariaDisabled",void 0);g([$({attribute:"aria-errormessage"})],Oe.prototype,"ariaErrormessage",void 0);g([$({attribute:"aria-flowto"})],Oe.prototype,"ariaFlowto",void 0);g([$({attribute:"aria-haspopup"})],Oe.prototype,"ariaHaspopup",void 0);g([$({attribute:"aria-hidden"})],Oe.prototype,"ariaHidden",void 0);g([$({attribute:"aria-invalid"})],Oe.prototype,"ariaInvalid",void 0);g([$({attribute:"aria-keyshortcuts"})],Oe.prototype,"ariaKeyshortcuts",void 0);g([$({attribute:"aria-label"})],Oe.prototype,"ariaLabel",void 0);g([$({attribute:"aria-labelledby"})],Oe.prototype,"ariaLabelledby",void 0);g([$({attribute:"aria-live"})],Oe.prototype,"ariaLive",void 0);g([$({attribute:"aria-owns"})],Oe.prototype,"ariaOwns",void 0);g([$({attribute:"aria-relevant"})],Oe.prototype,"ariaRelevant",void 0);g([$({attribute:"aria-roledescription"})],Oe.prototype,"ariaRoledescription",void 0);class It extends Ee{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&((e=this.$fastController.definition.shadowOptions)===null||e===void 0?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}g([$],It.prototype,"download",void 0);g([$],It.prototype,"href",void 0);g([$],It.prototype,"hreflang",void 0);g([$],It.prototype,"ping",void 0);g([$],It.prototype,"referrerpolicy",void 0);g([$],It.prototype,"rel",void 0);g([$],It.prototype,"target",void 0);g([$],It.prototype,"type",void 0);g([U],It.prototype,"defaultSlottedContent",void 0);class Sr{}g([$({attribute:"aria-expanded"})],Sr.prototype,"ariaExpanded",void 0);ot(Sr,Oe);ot(It,si,Sr);const Rp=t=>{const e=t.closest("[dir]");return e!==null&&e.dir==="rtl"?Xn.rtl:Xn.ltr},Qc=(t,e)=>ye`
    <template class="${n=>n.circular?"circular":""}">
        <div class="control" part="control" style="${n=>n.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;let Qi=class extends Ee{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,n=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?n:`${n} ${e}`}}};g([$({attribute:"fill"})],Qi.prototype,"fill",void 0);g([$({attribute:"color"})],Qi.prototype,"color",void 0);g([$({mode:"boolean"})],Qi.prototype,"circular",void 0);const Dp=(t,e)=>ye`
    <button
        class="control"
        part="control"
        ?autofocus="${n=>n.autofocus}"
        ?disabled="${n=>n.disabled}"
        form="${n=>n.formId}"
        formaction="${n=>n.formaction}"
        formenctype="${n=>n.formenctype}"
        formmethod="${n=>n.formmethod}"
        formnovalidate="${n=>n.formnovalidate}"
        formtarget="${n=>n.formtarget}"
        name="${n=>n.name}"
        type="${n=>n.type}"
        value="${n=>n.value}"
        aria-atomic="${n=>n.ariaAtomic}"
        aria-busy="${n=>n.ariaBusy}"
        aria-controls="${n=>n.ariaControls}"
        aria-current="${n=>n.ariaCurrent}"
        aria-describedby="${n=>n.ariaDescribedby}"
        aria-details="${n=>n.ariaDetails}"
        aria-disabled="${n=>n.ariaDisabled}"
        aria-errormessage="${n=>n.ariaErrormessage}"
        aria-expanded="${n=>n.ariaExpanded}"
        aria-flowto="${n=>n.ariaFlowto}"
        aria-haspopup="${n=>n.ariaHaspopup}"
        aria-hidden="${n=>n.ariaHidden}"
        aria-invalid="${n=>n.ariaInvalid}"
        aria-keyshortcuts="${n=>n.ariaKeyshortcuts}"
        aria-label="${n=>n.ariaLabel}"
        aria-labelledby="${n=>n.ariaLabelledby}"
        aria-live="${n=>n.ariaLive}"
        aria-owns="${n=>n.ariaOwns}"
        aria-pressed="${n=>n.ariaPressed}"
        aria-relevant="${n=>n.ariaRelevant}"
        aria-roledescription="${n=>n.ariaRoledescription}"
        ${Ke("control")}
    >
        ${ri(t,e)}
        <span class="content" part="content">
            <slot ${mt("defaultSlottedContent")}></slot>
        </span>
        ${oi(t,e)}
    </button>
`,ja="form-associated-proxy",za="ElementInternals",Ua=za in window&&"setFormValue"in window[za].prototype,qa=new WeakMap;function Ji(t){const e=class extends t{constructor(...n){super(...n),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Ua}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const n=this.proxy.labels,i=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),s=n?i.concat(Array.from(n)):i;return Object.freeze(s)}else return In}valueChanged(n,i){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(n,i){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(n,i){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),he.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(n,i){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(n,i){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),he.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Ua)return null;let n=qa.get(this);return n||(n=this.attachInternals(),qa.set(this,n)),n}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(n=>this.proxy.removeEventListener(n,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(n,i,s){this.elementInternals?this.elementInternals.setValidity(n,i,s):typeof i=="string"&&this.proxy.setCustomValidity(i)}formDisabledCallback(n){this.disabled=n}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var n;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(i=>this.proxy.addEventListener(i,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",ja),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",ja)),(n=this.shadowRoot)===null||n===void 0||n.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var n;this.removeChild(this.proxy),(n=this.shadowRoot)===null||n===void 0||n.removeChild(this.proxySlot)}validate(n){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,n)}setFormValue(n,i){this.elementInternals&&this.elementInternals.setFormValue(n,i||n)}_keypressHandler(n){switch(n.key){case Gi:if(this.form instanceof HTMLFormElement){const i=this.form.querySelector("[type=submit]");i==null||i.click()}break}}stopPropagation(n){n.stopPropagation()}};return $({mode:"boolean"})(e.prototype,"disabled"),$({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),$({attribute:"current-value"})(e.prototype,"currentValue"),$(e.prototype,"name"),$({mode:"boolean"})(e.prototype,"required"),U(e.prototype,"value"),e}function Jc(t){class e extends Ji(t){}class n extends e{constructor(...s){super(s),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(s,o){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),s!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(s,o){this.checked=this.currentChecked}updateForm(){const s=this.checked?this.value:null;this.setFormValue(s,s)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return $({attribute:"checked",mode:"boolean"})(n.prototype,"checkedAttribute"),$({attribute:"current-checked",converter:Bc})(n.prototype,"currentChecked"),U(n.prototype,"defaultChecked"),U(n.prototype,"checked"),n}class Pp extends Ee{}class Mp extends Ji(Pp){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let _t=class extends Mp{constructor(){super(...arguments),this.handleClick=e=>{var n;this.disabled&&((n=this.defaultSlottedContent)===null||n===void 0?void 0:n.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;(e=this.form)===null||e===void 0||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&((e=this.$fastController.definition.shadowOptions)===null||e===void 0?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,n){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),n==="submit"&&this.addEventListener("click",this.handleSubmission),e==="submit"&&this.removeEventListener("click",this.handleSubmission),n==="reset"&&this.addEventListener("click",this.handleFormReset),e==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const n=Array.from((e=this.control)===null||e===void 0?void 0:e.children);n&&n.forEach(i=>{i.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();const n=Array.from((e=this.control)===null||e===void 0?void 0:e.children);n&&n.forEach(i=>{i.removeEventListener("click",this.handleClick)})}};g([$({mode:"boolean"})],_t.prototype,"autofocus",void 0);g([$({attribute:"form"})],_t.prototype,"formId",void 0);g([$],_t.prototype,"formaction",void 0);g([$],_t.prototype,"formenctype",void 0);g([$],_t.prototype,"formmethod",void 0);g([$({mode:"boolean"})],_t.prototype,"formnovalidate",void 0);g([$],_t.prototype,"formtarget",void 0);g([$],_t.prototype,"type",void 0);g([U],_t.prototype,"defaultSlottedContent",void 0);class Ws{}g([$({attribute:"aria-expanded"})],Ws.prototype,"ariaExpanded",void 0);g([$({attribute:"aria-pressed"})],Ws.prototype,"ariaPressed",void 0);ot(Ws,Oe);ot(_t,si,Ws);const as={none:"none",default:"default",sticky:"sticky"},Qt={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},Ii={default:"default",header:"header",stickyHeader:"sticky-header"};let Ye=class extends Ee{constructor(){super(...arguments),this.rowType=Ii.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new jc(e=>e.columnDefinitions,e=>e.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(Qn,this.handleFocusout),this.addEventListener(Jn,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(Qn,this.handleFocusout),this.removeEventListener(Jn,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let n=0;switch(e.key){case ji:n=Math.max(0,this.focusColumnIndex-1),this.cellElements[n].focus(),e.preventDefault();break;case zi:n=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[n].focus(),e.preventDefault();break;case ai:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case li:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===Ii.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===Ii.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}};g([$({attribute:"grid-template-columns"})],Ye.prototype,"gridTemplateColumns",void 0);g([$({attribute:"row-type"})],Ye.prototype,"rowType",void 0);g([U],Ye.prototype,"rowData",void 0);g([U],Ye.prototype,"columnDefinitions",void 0);g([U],Ye.prototype,"cellItemTemplate",void 0);g([U],Ye.prototype,"headerCellItemTemplate",void 0);g([U],Ye.prototype,"rowIndex",void 0);g([U],Ye.prototype,"isActiveRow",void 0);g([U],Ye.prototype,"activeCellItemTemplate",void 0);g([U],Ye.prototype,"defaultCellItemTemplate",void 0);g([U],Ye.prototype,"defaultHeaderCellItemTemplate",void 0);g([U],Ye.prototype,"cellElements",void 0);function Bp(t){const e=t.tagFor(Ye);return ye`
    <${e}
        :rowData="${n=>n}"
        :cellItemTemplate="${(n,i)=>i.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(n,i)=>i.parent.headerCellItemTemplate}"
    ></${e}>
`}const Fp=(t,e)=>{const n=Bp(t),i=t.tagFor(Ye);return ye`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>i}"
            :defaultRowItemTemplate="${n}"
            ${Uc({property:"rowElements",filter:Cr("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};let ze=class extends Ee{constructor(){super(),this.noTabbing=!1,this.generateHeader=as.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,n,i)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const s=Math.max(0,Math.min(this.rowElements.length-1,e)),r=this.rowElements[s].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),a=Math.max(0,Math.min(r.length-1,n)),l=r[a];i&&this.scrollHeight!==this.clientHeight&&(s<this.focusRowIndex&&this.scrollTop>0||s>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&l.scrollIntoView({block:"center",inline:"center"}),l.focus()},this.onChildListChange=(e,n)=>{e&&e.length&&(e.forEach(i=>{i.addedNodes.forEach(s=>{s.nodeType===1&&s.getAttribute("role")==="row"&&(s.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,he.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(e===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){const n=this.rowElements[0];this.generatedGridTemplateColumns=new Array(n.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach((n,i)=>{const s=n;s.rowIndex=i,s.gridTemplateColumns=e,this.columnDefinitionsStale&&(s.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let n="";return e.forEach(i=>{n=`${n}${n===""?"":" "}1fr`}),n}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=ze.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=ze.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new jc(e=>e.rowsData,e=>e.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Ha,this.handleFocus),this.addEventListener(Jn,this.handleKeydown),this.addEventListener(Qn,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),he.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Ha,this.handleFocus),this.removeEventListener(Jn,this.handleKeydown),this.removeEventListener(Qn,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const n=e.target;this.focusRowIndex=this.rowElements.indexOf(n),this.focusColumnIndex=n.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){(e.relatedTarget===null||!this.contains(e.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let n;const i=this.rowElements.length-1,s=this.offsetHeight+this.scrollTop,o=this.rowElements[i];switch(e.key){case En:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case _n:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case Ip:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(n=this.focusRowIndex-1,n;n>=0;n--){const r=this.rowElements[n];if(r.offsetTop<this.scrollTop){this.scrollTop=r.offsetTop+r.clientHeight-this.clientHeight;break}}this.focusOnCell(n,this.focusColumnIndex,!1);break;case Sp:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=i||o.offsetTop+o.offsetHeight<=s){this.focusOnCell(i,this.focusColumnIndex,!1);return}for(n=this.focusRowIndex+1,n;n<=i;n++){const r=this.rowElements[n];if(r.offsetTop+r.offsetHeight>s){let a=0;this.generateHeader===as.sticky&&this.generatedHeader!==null&&(a=this.generatedHeader.clientHeight),this.scrollTop=r.offsetTop-a;break}}this.focusOnCell(n,this.focusColumnIndex,!1);break;case ai:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case li:e.ctrlKey&&this.columnDefinitions!==null&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,he.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==as.none&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===as.sticky?Ii.stickyHeader:Ii.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(e,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}};ze.generateColumns=t=>Object.getOwnPropertyNames(t).map((e,n)=>({columnDataKey:e,gridColumn:`${n}`}));g([$({attribute:"no-tabbing",mode:"boolean"})],ze.prototype,"noTabbing",void 0);g([$({attribute:"generate-header"})],ze.prototype,"generateHeader",void 0);g([$({attribute:"grid-template-columns"})],ze.prototype,"gridTemplateColumns",void 0);g([U],ze.prototype,"rowsData",void 0);g([U],ze.prototype,"columnDefinitions",void 0);g([U],ze.prototype,"rowItemTemplate",void 0);g([U],ze.prototype,"cellItemTemplate",void 0);g([U],ze.prototype,"headerCellItemTemplate",void 0);g([U],ze.prototype,"focusRowIndex",void 0);g([U],ze.prototype,"focusColumnIndex",void 0);g([U],ze.prototype,"defaultRowItemTemplate",void 0);g([U],ze.prototype,"rowElementTag",void 0);g([U],ze.prototype,"rowElements",void 0);const Lp=ye`
    <template>
        ${t=>t.rowData===null||t.columnDefinition===null||t.columnDefinition.columnDataKey===null?null:t.rowData[t.columnDefinition.columnDataKey]}
    </template>
`,Hp=ye`
    <template>
        ${t=>t.columnDefinition===null?null:t.columnDefinition.title===void 0?t.columnDefinition.columnDataKey:t.columnDefinition.title}
    </template>
`;let hn=class extends Ee{constructor(){super(...arguments),this.cellType=Qt.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,n){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(Na,this.handleFocusin),this.addEventListener(Qn,this.handleFocusout),this.addEventListener(Jn,this.handleKeydown),this.style.gridColumn=`${((e=this.columnDefinition)===null||e===void 0?void 0:e.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Na,this.handleFocusin),this.removeEventListener(Qn,this.handleFocusout),this.removeEventListener(Jn,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case Qt.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const n=this.columnDefinition.headerCellFocusTargetCallback(this);n!==null&&n.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const n=this.columnDefinition.cellFocusTargetCallback(this);n!==null&&n.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(e){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||this.columnDefinition===null||this.cellType===Qt.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===Qt.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(e.key){case Gi:case Tp:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case Qt.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const n=this.columnDefinition.headerCellFocusTargetCallback(this);n!==null&&n.focus(),e.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const n=this.columnDefinition.cellFocusTargetCallback(this);n!==null&&n.focus(),e.preventDefault()}break}break;case qs:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case Qt.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=Hp.render(this,this);break;case void 0:case Qt.rowHeader:case Qt.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=Lp.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}};g([$({attribute:"cell-type"})],hn.prototype,"cellType",void 0);g([$({attribute:"grid-column"})],hn.prototype,"gridColumn",void 0);g([U],hn.prototype,"rowData",void 0);g([U],hn.prototype,"columnDefinition",void 0);function Np(t){const e=t.tagFor(hn);return ye`
    <${e}
        cell-type="${n=>n.isRowHeader?"rowheader":void 0}"
        grid-column="${(n,i)=>i.index+1}"
        :rowData="${(n,i)=>i.parent.rowData}"
        :columnDefinition="${n=>n}"
    ></${e}>
`}function Vp(t){const e=t.tagFor(hn);return ye`
    <${e}
        cell-type="columnheader"
        grid-column="${(n,i)=>i.index+1}"
        :columnDefinition="${n=>n}"
    ></${e}>
`}const jp=(t,e)=>{const n=Np(t),i=Vp(t);return ye`
        <template
            role="row"
            class="${s=>s.rowType!=="default"?s.rowType:""}"
            :defaultCellItemTemplate="${n}"
            :defaultHeaderCellItemTemplate="${i}"
            ${Uc({property:"cellElements",filter:Cr('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${mt("slottedCellElements")}></slot>
        </template>
    `},zp=(t,e)=>ye`
        <template
            tabindex="-1"
            role="${n=>!n.cellType||n.cellType==="default"?"gridcell":n.cellType}"
            class="
            ${n=>n.cellType==="columnheader"?"column-header":n.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,Up=(t,e)=>ye`
    <template
        role="checkbox"
        aria-checked="${n=>n.checked}"
        aria-required="${n=>n.required}"
        aria-disabled="${n=>n.disabled}"
        aria-readonly="${n=>n.readOnly}"
        tabindex="${n=>n.disabled?null:0}"
        @keypress="${(n,i)=>n.keypressHandler(i.event)}"
        @click="${(n,i)=>n.clickHandler(i.event)}"
        class="${n=>n.readOnly?"readonly":""} ${n=>n.checked?"checked":""} ${n=>n.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${e.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${n=>n.defaultSlottedNodes&&n.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${mt("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class qp extends Ee{}class Wp extends Jc(qp){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Gs=class extends Wp{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case Yi:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}};g([$({attribute:"readonly",mode:"boolean"})],Gs.prototype,"readOnly",void 0);g([U],Gs.prototype,"defaultSlottedNodes",void 0);g([U],Gs.prototype,"indeterminate",void 0);function Xc(t){return $p(t)&&(t.getAttribute("role")==="option"||t instanceof HTMLOptionElement)}class qt extends Ee{constructor(e,n,i,s){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),n&&(this.initialValue=n),i&&(this.defaultSelected=i),s&&(this.selected=s),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,n){if(typeof n=="boolean"){this.ariaChecked=n?"true":"false";return}this.ariaChecked=null}contentChanged(e,n){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,n){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,n){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,n;return(n=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&n!==void 0?n:""}set value(e){const n=`${e??""}`;this._value=n,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=n),ue.notify(this,"value")}get value(){var e;return ue.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}}g([U],qt.prototype,"checked",void 0);g([U],qt.prototype,"content",void 0);g([U],qt.prototype,"defaultSelected",void 0);g([$({mode:"boolean"})],qt.prototype,"disabled",void 0);g([$({attribute:"selected",mode:"boolean"})],qt.prototype,"selectedAttribute",void 0);g([U],qt.prototype,"selected",void 0);g([$({attribute:"value",mode:"fromView"})],qt.prototype,"initialValue",void 0);class ci{}g([U],ci.prototype,"ariaChecked",void 0);g([U],ci.prototype,"ariaPosInSet",void 0);g([U],ci.prototype,"ariaSelected",void 0);g([U],ci.prototype,"ariaSetSize",void 0);ot(ci,Oe);ot(qt,si,ci);class Ze extends Ee{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,n;return(n=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&n!==void 0?n:0}get options(){return ue.track(this,"options"),this._options}set options(e){this._options=e,ue.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const n=e.target.closest("option,[role=option]");if(n&&!n.disabled)return this.selectedIndex=this.options.indexOf(n),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),n=new RegExp(`^${e}`,"gi");return this.options.filter(i=>i.text.trim().match(n))}getSelectableIndex(e=this.selectedIndex,n){const i=e>n?-1:e<n?1:0,s=e+i;let o=null;switch(i){case-1:{o=this.options.reduceRight((r,a,l)=>!r&&!a.disabled&&l<s?a:r,o);break}case 1:{o=this.options.reduce((r,a,l)=>!r&&!a.disabled&&l>s?a:r,o);break}}return this.options.indexOf(o)}handleChange(e,n){switch(n){case"selected":{Ze.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions();break}}}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,Ze.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const n=e.key;switch(n){case ai:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case _n:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case En:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case li:{e.preventDefault(),this.selectLastOption();break}case Tr:return this.focusAndScrollOptionIntoView(),!0;case Gi:case qs:return!0;case Yi:if(this.typeaheadExpired)return!0;default:return n.length===1&&this.handleTypeAhead(`${n}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,n){this.ariaMultiSelectable=n?"true":null}selectedIndexChanged(e,n){var i;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(((i=this.options[this.selectedIndex])===null||i===void 0?void 0:i.disabled)&&typeof e=="number"){const s=this.getSelectableIndex(e,n),o=s>-1?s:e;this.selectedIndex=o,n===o&&this.selectedIndexChanged(n,o);return}this.setSelectedOptions()}selectedOptionsChanged(e,n){var i;const s=n.filter(Ze.slottedOptionFilter);(i=this.options)===null||i===void 0||i.forEach(o=>{const r=ue.getNotifier(o);r.unsubscribe(this,"selected"),o.selected=s.includes(o),r.subscribe(this,"selected")})}selectFirstOption(){var e,n;this.disabled||(this.selectedIndex=(n=(e=this.options)===null||e===void 0?void 0:e.findIndex(i=>!i.disabled))!==null&&n!==void 0?n:-1)}selectLastOption(){this.disabled||(this.selectedIndex=xp(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,n;this.selectedIndex=(n=(e=this.options)===null||e===void 0?void 0:e.findIndex(i=>i.defaultSelected))!==null&&n!==void 0?n:-1}setSelectedOptions(){var e,n,i;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(i=(n=this.firstSelectedOption)===null||n===void 0?void 0:n.id)!==null&&i!==void 0?i:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,n){this.options=n.reduce((s,o)=>(Xc(o)&&s.push(o),s),[]);const i=`${this.options.length}`;this.options.forEach((s,o)=>{s.id||(s.id=Ts("option-")),s.ariaPosInSet=`${o+1}`,s.ariaSetSize=i}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,n){if(this.$fastController.isConnected){const i=this.getTypeaheadMatches();if(i.length){const s=this.options.indexOf(i[0]);s>-1&&(this.selectedIndex=s)}this.typeaheadExpired=!1}}}Ze.slottedOptionFilter=t=>Xc(t)&&!t.hidden;Ze.TYPE_AHEAD_TIMEOUT_MS=1e3;g([$({mode:"boolean"})],Ze.prototype,"disabled",void 0);g([U],Ze.prototype,"selectedIndex",void 0);g([U],Ze.prototype,"selectedOptions",void 0);g([U],Ze.prototype,"slottedOptions",void 0);g([U],Ze.prototype,"typeaheadBuffer",void 0);class On{}g([U],On.prototype,"ariaActiveDescendant",void 0);g([U],On.prototype,"ariaDisabled",void 0);g([U],On.prototype,"ariaExpanded",void 0);g([U],On.prototype,"ariaMultiSelectable",void 0);ot(On,Oe);ot(Ze,On);const vo={above:"above",below:"below"};function zo(t){const e=t.parentElement;if(e)return e;{const n=t.getRootNode();if(n.host instanceof HTMLElement)return n.host}return null}function Gp(t,e){let n=e;for(;n!==null;){if(n===t)return!0;n=zo(n)}return!1}const Vt=document.createElement("div");function Yp(t){return t instanceof Us}class Ir{setProperty(e,n){he.queueUpdate(()=>this.target.setProperty(e,n))}removeProperty(e){he.queueUpdate(()=>this.target.removeProperty(e))}}class Qp extends Ir{constructor(e){super();const n=new CSSStyleSheet;this.target=n.cssRules[n.insertRule(":host{}")].style,e.$fastController.addStyles(it.create([n]))}}class Jp extends Ir{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class Xp extends Ir{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const n=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[n].style}}}class Zc{constructor(e){this.store=new Map,this.target=null;const n=e.$fastController;this.style=document.createElement("style"),n.addStyles(this.style),ue.getNotifier(n).subscribe(this,"isConnected"),this.handleChange(n,"isConnected")}targetChanged(){if(this.target!==null)for(const[e,n]of this.store.entries())this.target.setProperty(e,n)}setProperty(e,n){this.store.set(e,n),he.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,n)})}removeProperty(e){this.store.delete(e),he.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,n){const{sheet:i}=this.style;if(i){const s=i.insertRule(":host{}",i.cssRules.length);this.target=i.cssRules[s].style}else this.target=null}}g([U],Zc.prototype,"target",void 0);class Zp{constructor(e){this.target=e.style}setProperty(e,n){he.queueUpdate(()=>this.target.setProperty(e,n))}removeProperty(e){he.queueUpdate(()=>this.target.removeProperty(e))}}class He{setProperty(e,n){He.properties[e]=n;for(const i of He.roots.values())Ln.getOrCreate(He.normalizeRoot(i)).setProperty(e,n)}removeProperty(e){delete He.properties[e];for(const n of He.roots.values())Ln.getOrCreate(He.normalizeRoot(n)).removeProperty(e)}static registerRoot(e){const{roots:n}=He;if(!n.has(e)){n.add(e);const i=Ln.getOrCreate(this.normalizeRoot(e));for(const s in He.properties)i.setProperty(s,He.properties[s])}}static unregisterRoot(e){const{roots:n}=He;if(n.has(e)){n.delete(e);const i=Ln.getOrCreate(He.normalizeRoot(e));for(const s in He.properties)i.removeProperty(s)}}static normalizeRoot(e){return e===Vt?document:e}}He.roots=new Set;He.properties={};const yo=new WeakMap,Kp=he.supportsAdoptedStyleSheets?Qp:Zc,Ln=Object.freeze({getOrCreate(t){if(yo.has(t))return yo.get(t);let e;return t===Vt?e=new He:t instanceof Document?e=he.supportsAdoptedStyleSheets?new Jp:new Xp:Yp(t)?e=new Kp(t):e=new Zp(t),yo.set(t,e),e}});class Xe extends Lc{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Xe.uniqueId(),Xe.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new Xe({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return Xe.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const n=Pe.getOrCreate(e).get(this);if(n!==void 0)return n;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,n){return this._appliedTo.add(e),n instanceof Xe&&(n=this.alias(n)),Pe.getOrCreate(e).set(this,n),this}deleteValueFor(e){return this._appliedTo.delete(e),Pe.existsFor(e)&&Pe.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Vt,e),this}subscribe(e,n){const i=this.getOrCreateSubscriberSet(n);n&&!Pe.existsFor(n)&&Pe.getOrCreate(n),i.has(e)||i.add(e)}unsubscribe(e,n){const i=this.subscribers.get(n||this);i&&i.has(e)&&i.delete(e)}notify(e){const n=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(i=>i.handleChange(n)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(i=>i.handleChange(n))}alias(e){return n=>e.getValueFor(n)}}Xe.uniqueId=(()=>{let t=0;return()=>(t++,t.toString(16))})();Xe.tokensById=new Map;class eg{startReflection(e,n){e.subscribe(this,n),this.handleChange({token:e,target:n})}stopReflection(e,n){e.unsubscribe(this,n),this.remove(e,n)}handleChange(e){const{token:n,target:i}=e;this.add(n,i)}add(e,n){Ln.getOrCreate(n).setProperty(e.cssCustomProperty,this.resolveCSSValue(Pe.getOrCreate(n).get(e)))}remove(e,n){Ln.getOrCreate(n).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}}class tg{constructor(e,n,i){this.source=e,this.token=n,this.node=i,this.dependencies=new Set,this.observer=ue.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,Ti))}}class ng{constructor(){this.values=new Map}set(e,n){this.values.get(e)!==n&&(this.values.set(e,n),ue.getNotifier(this).notify(e.id))}get(e){return ue.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const gi=new WeakMap,mi=new WeakMap;class Pe{constructor(e){this.target=e,this.store=new ng,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(n,i)=>{const s=Xe.getTokenById(i);if(s&&(s.notify(this.target),Xe.isCSSDesignToken(s))){const o=this.parent,r=this.isReflecting(s);if(o){const a=o.get(s),l=n.get(s);a!==l&&!r?this.reflectToCSS(s):a===l&&r&&this.stopReflectToCSS(s)}else r||this.reflectToCSS(s)}}},gi.set(e,this),ue.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Us?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return gi.get(e)||new Pe(e)}static existsFor(e){return gi.has(e)}static findParent(e){if(Vt!==e.target){let n=zo(e.target);for(;n!==null;){if(gi.has(n))return gi.get(n);n=zo(n)}return Pe.getOrCreate(Vt)}return null}static findClosestAssignedNode(e,n){let i=n;do{if(i.has(e))return i;i=i.parent?i.parent:i.target!==Vt?Pe.getOrCreate(Vt):null}while(i!==null);return null}get parent(){return mi.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const n=this.store.get(e);if(n!==void 0)return n;const i=this.getRaw(e);if(i!==void 0)return this.hydrate(e,i),this.get(e)}getRaw(e){var n;return this.assignedValues.has(e)?this.assignedValues.get(e):(n=Pe.findClosestAssignedNode(e,this))===null||n===void 0?void 0:n.getRaw(e)}set(e,n){Xe.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,n),Xe.isDerivedDesignTokenValue(n)?this.setupBindingObserver(e,n):this.store.set(e,n)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const n=this.getRaw(e);n?this.hydrate(e,n):this.store.delete(e)}bind(){const e=Pe.findParent(this);e&&e.appendChild(this);for(const n of this.assignedValues.keys())n.notify(this.target)}unbind(){this.parent&&mi.get(this).removeChild(this)}appendChild(e){e.parent&&mi.get(e).removeChild(e);const n=this.children.filter(i=>e.contains(i));mi.set(e,this),this.children.push(e),n.forEach(i=>e.appendChild(i)),ue.getNotifier(this.store).subscribe(e);for(const[i,s]of this.store.all())e.hydrate(i,this.bindingObservers.has(i)?this.getRaw(i):s)}removeChild(e){const n=this.children.indexOf(e);return n!==-1&&this.children.splice(n,1),ue.getNotifier(this.store).unsubscribe(e),e.parent===this?mi.delete(e):!1}contains(e){return Gp(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),Pe.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),Pe.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,n){const i=Xe.getTokenById(n);!i||this.hydrate(i,this.getRaw(i))}hydrate(e,n){if(!this.has(e)){const i=this.bindingObservers.get(e);Xe.isDerivedDesignTokenValue(n)?i?i.source!==n&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,n)):this.setupBindingObserver(e,n):(i&&this.tearDownBindingObserver(e),this.store.set(e,n))}}setupBindingObserver(e,n){const i=new tg(n,e,this);return this.bindingObservers.set(e,i),i}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}}Pe.cssCustomPropertyReflector=new eg;g([U],Pe.prototype,"children",void 0);function ig(t){return Xe.from(t)}const Kc=Object.freeze({create:ig,notifyConnection(t){return!t.isConnected||!Pe.existsFor(t)?!1:(Pe.getOrCreate(t).bind(),!0)},notifyDisconnection(t){return t.isConnected||!Pe.existsFor(t)?!1:(Pe.getOrCreate(t).unbind(),!0)},registerRoot(t=Vt){He.registerRoot(t)},unregisterRoot(t=Vt){He.unregisterRoot(t)}}),xo=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),wo=new Map,ps=new Map;let zn=null;const bi=Re.createInterface(t=>t.cachedCallback(e=>(zn===null&&(zn=new td(null,e)),zn))),ed=Object.freeze({tagFor(t){return ps.get(t)},responsibleFor(t){const e=t.$$designSystem$$;return e||Re.findResponsibleContainer(t).get(bi)},getOrCreate(t){if(!t)return zn===null&&(zn=Re.getOrCreateDOMContainer().get(bi)),zn;const e=t.$$designSystem$$;if(e)return e;const n=Re.getOrCreateDOMContainer(t);if(n.has(bi,!1))return n.get(bi);{const i=new td(t,n);return n.register(Vi.instance(bi,i)),i}}});function sg(t,e,n){return typeof t=="string"?{name:t,type:e,callback:n}:t}class td{constructor(e,n){this.owner=e,this.container=n,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>xo.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const n=this.container,i=[],s=this.disambiguate,o=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(a,l,c){const d=sg(a,l,c),{name:u,callback:f,baseClass:m}=d;let{type:v}=d,b=u,A=wo.get(b),_=!0;for(;A;){const F=s(b,v,A);switch(F){case xo.ignoreDuplicate:return;case xo.definitionCallbackOnly:_=!1,A=void 0;break;default:b=F,A=wo.get(b);break}}_&&((ps.has(v)||v===Ee)&&(v=class extends v{}),wo.set(b,v),ps.set(v,b),m&&ps.set(m,b)),i.push(new og(n,b,v,o,f,_))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&Kc.registerRoot(this.designTokenRoot)),n.registerWithContext(r,...e);for(const a of i)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}}class og{constructor(e,n,i,s,o,r){this.container=e,this.name=n,this.type=i,this.shadowRootMode=s,this.callback=o,this.willDefine=r,this.definition=null}definePresentation(e){Yc.define(this.name,e,this.container)}defineElement(e){this.definition=new zs(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return ed.tagFor(e)}}const rg=(t,e)=>ye`
    <template role="${n=>n.role}" aria-orientation="${n=>n.orientation}"></template>
`,ag={separator:"separator",presentation:"presentation"};let _r=class extends Ee{constructor(){super(...arguments),this.role=ag.separator,this.orientation=kr.horizontal}};g([$],_r.prototype,"role",void 0);g([$],_r.prototype,"orientation",void 0);const lg=(t,e)=>ye`
    <template
        aria-checked="${n=>n.ariaChecked}"
        aria-disabled="${n=>n.ariaDisabled}"
        aria-posinset="${n=>n.ariaPosInSet}"
        aria-selected="${n=>n.ariaSelected}"
        aria-setsize="${n=>n.ariaSetSize}"
        class="${n=>[n.checked&&"checked",n.selected&&"selected",n.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${ri(t,e)}
        <span class="content" part="content">
            <slot ${mt("content")}></slot>
        </span>
        ${oi(t,e)}
    </template>
`;class Ys extends Ze{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(n=>n.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,n){var i,s;this.ariaActiveDescendant=(s=(i=this.options[n])===null||i===void 0?void 0:i.id)!==null&&s!==void 0?s:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((n,i)=>{n.checked=rs(i,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((n,i)=>{n.checked=rs(i,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((n,i)=>{n.checked=rs(i,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((n,i)=>{n.checked=rs(i,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var n;if(!this.multiple)return super.clickHandler(e);const i=(n=e.target)===null||n===void 0?void 0:n.closest("[role=option]");if(!(!i||i.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(i),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:n,shiftKey:i}=e;switch(this.shouldSkipFocus=!1,n){case ai:{this.checkFirstOption(i);return}case _n:{this.checkNextOption(i);return}case En:{this.checkPreviousOption(i);return}case li:{this.checkLastOption(i);return}case Tr:return this.focusAndScrollOptionIntoView(),!0;case qs:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case Yi:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return n.length===1&&this.handleTypeAhead(`${n}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,n){var i;this.ariaMultiSelectable=n?"true":null,(i=this.options)===null||i===void 0||i.forEach(s=>{s.checked=n?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,n){var i;const s=Math.max(0,parseInt((i=n==null?void 0:n.toFixed())!==null&&i!==void 0?i:"",10));s!==n&&he.queueUpdate(()=>{this.size=s})}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter(i=>!i.disabled),n=!e.every(i=>i.selected);e.forEach(i=>i.selected=n),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,n){if(!this.multiple){super.typeaheadBufferChanged(e,n);return}if(this.$fastController.isConnected){const i=this.getTypeaheadMatches(),s=this.options.indexOf(i[0]);s>-1&&(this.activeIndex=s,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(n=>n.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}}g([U],Ys.prototype,"activeIndex",void 0);g([$({mode:"boolean"})],Ys.prototype,"multiple",void 0);g([$({converter:St})],Ys.prototype,"size",void 0);class cg extends Ee{}class dg extends Ji(cg){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const ug={email:"email",password:"password",tel:"tel",text:"text",url:"url"};let dt=class extends dg{constructor(){super(...arguments),this.type=ug.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&he.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};g([$({attribute:"readonly",mode:"boolean"})],dt.prototype,"readOnly",void 0);g([$({mode:"boolean"})],dt.prototype,"autofocus",void 0);g([$],dt.prototype,"placeholder",void 0);g([$],dt.prototype,"type",void 0);g([$],dt.prototype,"list",void 0);g([$({converter:St})],dt.prototype,"maxlength",void 0);g([$({converter:St})],dt.prototype,"minlength",void 0);g([$],dt.prototype,"pattern",void 0);g([$({converter:St})],dt.prototype,"size",void 0);g([$({mode:"boolean"})],dt.prototype,"spellcheck",void 0);g([U],dt.prototype,"defaultSlottedNodes",void 0);class Er{}ot(Er,Oe);ot(dt,si,Er);const Wa=44,hg=(t,e)=>ye`
    <template
        role="progressbar"
        aria-valuenow="${n=>n.value}"
        aria-valuemin="${n=>n.min}"
        aria-valuemax="${n=>n.max}"
        class="${n=>n.paused?"paused":""}"
    >
        ${ks(n=>typeof n.value=="number",ye`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${n=>Wa*n.percentComplete/100}px ${Wa}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `)}
        ${ks(n=>typeof n.value!="number",ye`
                <slot name="indeterminate" slot="indeterminate">
                    ${e.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class di extends Ee{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e=typeof this.min=="number"?this.min:0,n=typeof this.max=="number"?this.max:100,i=typeof this.value=="number"?this.value:0,s=n-e;this.percentComplete=s===0?0:Math.fround((i-e)/s*100)}}g([$({converter:St})],di.prototype,"value",void 0);g([$({converter:St})],di.prototype,"min",void 0);g([$({converter:St})],di.prototype,"max",void 0);g([$({mode:"boolean"})],di.prototype,"paused",void 0);g([U],di.prototype,"percentComplete",void 0);const fg=(t,e)=>ye`
    <template
        role="radiogroup"
        aria-disabled="${n=>n.disabled}"
        aria-readonly="${n=>n.readOnly}"
        @click="${(n,i)=>n.clickHandler(i.event)}"
        @keydown="${(n,i)=>n.keydownHandler(i.event)}"
        @focusout="${(n,i)=>n.focusOutHandler(i.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${n=>n.orientation===kr.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${mt({property:"slottedRadioButtons",filter:Cr("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;let fn=class extends Ee{constructor(){super(...arguments),this.orientation=kr.horizontal,this.radioChangeHandler=e=>{const n=e.target;n.checked&&(this.slottedRadioButtons.forEach(i=>{i!==n&&(i.checked=!1,this.isInsideFoundationToolbar||i.setAttribute("tabindex","-1"))}),this.selectedRadio=n,this.value=n.value,n.setAttribute("tabindex","0"),this.focusedRadio=n),e.stopPropagation()},this.moveToRadioByIndex=(e,n)=>{const i=e[n];this.isInsideToolbar||(i.setAttribute("tabindex","0"),i.readOnly?this.slottedRadioButtons.forEach(s=>{s!==i&&s.setAttribute("tabindex","-1")}):(i.checked=!0,this.selectedRadio=i)),this.focusedRadio=i,i.focus()},this.moveRightOffGroup=()=>{var e;(e=this.nextElementSibling)===null||e===void 0||e.focus()},this.moveLeftOffGroup=()=>{var e;(e=this.previousElementSibling)===null||e===void 0||e.focus()},this.focusOutHandler=e=>{const n=this.slottedRadioButtons,i=e.target,s=i!==null?n.indexOf(i):0,o=this.focusedRadio?n.indexOf(this.focusedRadio):-1;return(o===0&&s===o||o===n.length-1&&o===s)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),n.forEach(r=>{r!==this.selectedRadio&&r.setAttribute("tabindex","-1")}))):(this.focusedRadio=n[0],this.focusedRadio.setAttribute("tabindex","0"),n.forEach(r=>{r!==this.focusedRadio&&r.setAttribute("tabindex","-1")}))),!0},this.clickHandler=e=>{const n=e.target;if(n){const i=this.slottedRadioButtons;n.checked||i.indexOf(n)===0?(n.setAttribute("tabindex","0"),this.selectedRadio=n):(n.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=n}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,n,i)=>e===n.length&&this.isInsideToolbar&&i===zi,this.shouldMoveOffGroupToTheLeft=(e,n)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&n===ji,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const n=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?n.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(i,n,e.key)){this.moveRightOffGroup();return}else i===n.length&&(i=0);for(;i<n.length&&n.length>1;)if(n[i].disabled){if(this.focusedRadio&&i===n.indexOf(this.focusedRadio))break;if(i+1>=n.length){if(this.isInsideToolbar)break;i=0}else i+=1}else{this.moveToRadioByIndex(n,i);break}},this.moveLeft=e=>{const n=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?n.indexOf(this.focusedRadio)-1:0,i=i<0?n.length-1:i,this.shouldMoveOffGroupToTheLeft(n,e.key)){this.moveLeftOffGroup();return}for(;i>=0&&n.length>1;)if(n[i].disabled){if(this.focusedRadio&&i===n.indexOf(this.focusedRadio))break;i-1<0?i=n.length-1:i-=1}else{this.moveToRadioByIndex(n,i);break}},this.keydownHandler=e=>{const n=e.key;if(n in _p&&this.isInsideFoundationToolbar)return!0;switch(n){case Gi:{this.checkFocusedRadio();break}case zi:case _n:{this.direction===Xn.ltr?this.moveRight(e):this.moveLeft(e);break}case ji:case En:{this.direction===Xn.ltr?this.moveLeft(e):this.moveRight(e);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.disabled?e.disabled=!0:e.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)}),this.$emit("change")}slottedRadioButtonsChanged(e,n){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return(e=this.parentToolbar)!==null&&e!==void 0?e:!1}get isInsideFoundationToolbar(){var e;return!!(!((e=this.parentToolbar)===null||e===void 0)&&e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=Rp(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(e=>{e.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const e=this.slottedRadioButtons.filter(s=>s.hasAttribute("checked")),n=e?e.length:0;if(n>1){const s=e[n-1];s.checked=!0}let i=!1;if(this.slottedRadioButtons.forEach(s=>{this.name!==void 0&&s.setAttribute("name",this.name),this.disabled&&(s.disabled=!0),this.readOnly&&(s.readOnly=!0),this.value&&this.value===s.value?(this.selectedRadio=s,this.focusedRadio=s,s.checked=!0,s.setAttribute("tabindex","0"),i=!0):(this.isInsideFoundationToolbar||s.setAttribute("tabindex","-1"),s.checked=!1),s.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const s=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),o=s!==null?s.length:0;if(o>0&&!i){const r=s[o-1];r.checked=!0,this.focusedRadio=r,r.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}};g([$({attribute:"readonly",mode:"boolean"})],fn.prototype,"readOnly",void 0);g([$({attribute:"disabled",mode:"boolean"})],fn.prototype,"disabled",void 0);g([$],fn.prototype,"name",void 0);g([$],fn.prototype,"value",void 0);g([$],fn.prototype,"orientation",void 0);g([U],fn.prototype,"childItems",void 0);g([U],fn.prototype,"slottedRadioButtons",void 0);const pg=(t,e)=>ye`
    <template
        role="radio"
        class="${n=>n.checked?"checked":""} ${n=>n.readOnly?"readonly":""}"
        aria-checked="${n=>n.checked}"
        aria-required="${n=>n.required}"
        aria-disabled="${n=>n.disabled}"
        aria-readonly="${n=>n.readOnly}"
        @keypress="${(n,i)=>n.keypressHandler(i.event)}"
        @click="${(n,i)=>n.clickHandler(i.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${n=>n.defaultSlottedNodes&&n.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${mt("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class gg extends Ee{}class mg extends Jc(gg){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Qs=class extends mg{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{switch(e.key){case Yi:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}connectedCallback(){var e,n;super.connectedCallback(),this.validate(),((e=this.parentElement)===null||e===void 0?void 0:e.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(n=this.defaultChecked)!==null&&n!==void 0?n:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(e){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}};g([$({attribute:"readonly",mode:"boolean"})],Qs.prototype,"readOnly",void 0);g([U],Qs.prototype,"name",void 0);g([U],Qs.prototype,"defaultSlottedNodes",void 0);function bg(t,e,n){return t.nodeType!==Node.TEXT_NODE?!0:typeof t.nodeValue=="string"&&!!t.nodeValue.trim().length}class vg extends Ys{}class yg extends Ji(vg){constructor(){super(...arguments),this.proxy=document.createElement("select")}}class pn extends yg{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Ts("listbox-"),this.maxHeight=0}openChanged(e,n){if(!!this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,he.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return ue.track(this,"value"),this._value}set value(e){var n,i,s,o,r,a,l;const c=`${this._value}`;if(!((n=this._options)===null||n===void 0)&&n.length){const d=this._options.findIndex(m=>m.value===e),u=(s=(i=this._options[this.selectedIndex])===null||i===void 0?void 0:i.value)!==null&&s!==void 0?s:null,f=(r=(o=this._options[d])===null||o===void 0?void 0:o.value)!==null&&r!==void 0?r:null;(d===-1||u!==f)&&(e="",this.selectedIndex=d),e=(l=(a=this.firstSelectedOption)===null||a===void 0?void 0:a.value)!==null&&l!==void 0?l:e}c!==e&&(this._value=e,super.valueChanged(c,e),ue.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var n,i;this.$fastController.isConnected&&(this.value=(i=(n=this.firstSelectedOption)===null||n===void 0?void 0:n.value)!==null&&i!==void 0?i:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,n){super.selectedIndexChanged(e,n),this.updateValue()}positionChanged(e,n){this.positionAttribute=n,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),i=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>i?vo.above:vo.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===vo.above?~~e.top:~~i}get displayValue(){var e,n;return ue.track(this,"displayValue"),(n=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&n!==void 0?n:""}disabledChanged(e,n){super.disabledChanged&&super.disabledChanged(e,n),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const n=e.target.closest("option,[role=option]");if(n&&n.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var n;if(super.focusoutHandler(e),!this.open)return!0;const i=e.relatedTarget;if(this.isSameNode(i)){this.focus();return}!((n=this.options)===null||n===void 0)&&n.includes(i)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,n){super.handleChange(e,n),n==="value"&&this.updateValue()}slottedOptionsChanged(e,n){this.options.forEach(i=>{ue.getNotifier(i).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,n),this.options.forEach(i=>{ue.getNotifier(i).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var n;return e.offsetX>=0&&e.offsetX<=((n=this.listbox)===null||n===void 0?void 0:n.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,n){super.multipleChanged(e,n),this.proxy&&(this.proxy.multiple=n)}selectedOptionsChanged(e,n){var i;super.selectedOptionsChanged(e,n),(i=this.options)===null||i===void 0||i.forEach((s,o)=>{var r;const a=(r=this.proxy)===null||r===void 0?void 0:r.options.item(o);a&&(a.selected=s.selected)})}setDefaultSelectedOption(){var e;const n=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter(Ze.slottedOptionFilter),i=n==null?void 0:n.findIndex(s=>s.hasAttribute("selected")||s.selected||s.value===this.value);if(i!==-1){this.selectedIndex=i;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{const n=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);n&&this.proxy.options.add(n)}))}keydownHandler(e){super.keydownHandler(e);const n=e.key||e.key.charCodeAt(0);switch(n){case Yi:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case ai:case li:{e.preventDefault();break}case Gi:{e.preventDefault(),this.open=!this.open;break}case qs:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case Tr:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(n===_n||n===En)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,n){super.sizeChanged(e,n),this.proxy&&(this.proxy.size=n)}updateDisplayValue(){this.collapsible&&ue.notify(this,"displayValue")}}g([$({attribute:"open",mode:"boolean"})],pn.prototype,"open",void 0);g([$f],pn.prototype,"collapsible",null);g([U],pn.prototype,"control",void 0);g([$({attribute:"position"})],pn.prototype,"positionAttribute",void 0);g([U],pn.prototype,"position",void 0);g([U],pn.prototype,"maxHeight",void 0);class Or{}g([U],Or.prototype,"ariaControls",void 0);ot(Or,On);ot(pn,si,Or);const xg=(t,e)=>ye`
    <template
        class="${n=>[n.collapsible&&"collapsible",n.collapsible&&n.open&&"open",n.disabled&&"disabled",n.collapsible&&n.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${n=>n.ariaActiveDescendant}"
        aria-controls="${n=>n.ariaControls}"
        aria-disabled="${n=>n.ariaDisabled}"
        aria-expanded="${n=>n.ariaExpanded}"
        aria-haspopup="${n=>n.collapsible?"listbox":null}"
        aria-multiselectable="${n=>n.ariaMultiSelectable}"
        ?open="${n=>n.open}"
        role="combobox"
        tabindex="${n=>n.disabled?null:"0"}"
        @click="${(n,i)=>n.clickHandler(i.event)}"
        @focusin="${(n,i)=>n.focusinHandler(i.event)}"
        @focusout="${(n,i)=>n.focusoutHandler(i.event)}"
        @keydown="${(n,i)=>n.keydownHandler(i.event)}"
        @mousedown="${(n,i)=>n.mousedownHandler(i.event)}"
    >
        ${ks(n=>n.collapsible,ye`
                <div
                    class="control"
                    part="control"
                    ?disabled="${n=>n.disabled}"
                    ${Ke("control")}
                >
                    ${ri(t,e)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${n=>n.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${e.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${oi(t,e)}
                </div>
            `)}
        <div
            class="listbox"
            id="${n=>n.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${n=>n.disabled}"
            ?hidden="${n=>n.collapsible?!n.open:!1}"
            ${Ke("listbox")}
        >
            <slot
                ${mt({filter:Ze.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,wg=(t,e)=>ye`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class $g extends Ee{}const Cg=(t,e)=>ye`
    <template slot="tab" role="tab" aria-disabled="${n=>n.disabled}">
        <slot></slot>
    </template>
`;class nd extends Ee{}g([$({mode:"boolean"})],nd.prototype,"disabled",void 0);const kg=(t,e)=>ye`
    <template class="${n=>n.orientation}">
        ${ri(t,e)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${mt("tabs")}></slot>

            ${ks(n=>n.showActiveIndicator,ye`
                    <div
                        ${Ke("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${oi(t,e)}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${mt("tabpanels")}></slot>
        </div>
    </template>
`,Uo={vertical:"vertical",horizontal:"horizontal"};class Wt extends Ee{constructor(){super(...arguments),this.orientation=Uo.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>e.getAttribute("aria-disabled")==="true",this.isFocusableElement=e=>!this.isDisabledElement(e),this.setTabs=()=>{const e="gridColumn",n="gridRow",i=this.isHorizontal()?e:n;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((s,o)=>{if(s.slot==="tab"){const r=this.activeTabIndex===o&&this.isFocusableElement(s);this.activeindicator&&this.isFocusableElement(s)&&(this.showActiveIndicator=!0);const a=this.tabIds[o],l=this.tabpanelIds[o];s.setAttribute("id",a),s.setAttribute("aria-selected",r?"true":"false"),s.setAttribute("aria-controls",l),s.addEventListener("click",this.handleTabClick),s.addEventListener("keydown",this.handleTabKeyDown),s.setAttribute("tabindex",r?"0":"-1"),r&&(this.activetab=s)}s.style[e]="",s.style[n]="",s.style[i]=`${o+1}`,this.isHorizontal()?s.classList.remove("vertical"):s.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((e,n)=>{const i=this.tabIds[n],s=this.tabpanelIds[n];e.setAttribute("id",s),e.setAttribute("aria-labelledby",i),this.activeTabIndex!==n?e.setAttribute("hidden",""):e.removeAttribute("hidden")})},this.handleTabClick=e=>{const n=e.currentTarget;n.nodeType===1&&this.isFocusableElement(n)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(n),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case ji:e.preventDefault(),this.adjustBackward(e);break;case zi:e.preventDefault(),this.adjustForward(e);break}else switch(e.key){case En:e.preventDefault(),this.adjustBackward(e);break;case _n:e.preventDefault(),this.adjustForward(e);break}switch(e.key){case ai:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case li:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=e=>{const n=this.tabs;let i=0;for(i=this.activetab?n.indexOf(this.activetab)+1:1,i===n.length&&(i=0);i<n.length&&n.length>1;)if(this.isFocusableElement(n[i])){this.moveToTabByIndex(n,i);break}else{if(this.activetab&&i===n.indexOf(this.activetab))break;i+1>=n.length?i=0:i+=1}},this.adjustBackward=e=>{const n=this.tabs;let i=0;for(i=this.activetab?n.indexOf(this.activetab)-1:0,i=i<0?n.length-1:i;i>=0&&n.length>1;)if(this.isFocusableElement(n[i])){this.moveToTabByIndex(n,i);break}else i-1<0?i=n.length-1:i-=1},this.moveToTabByIndex=(e,n)=>{const i=e[n];this.activetab=i,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=n,i.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,n){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(i=>i.id===e),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(e=>{var n;return(n=e.getAttribute("id"))!==null&&n!==void 0?n:`tab-${Ts()}`})}getTabPanelIds(){return this.tabpanels.map(e=>{var n;return(n=e.getAttribute("id"))!==null&&n!==void 0?n:`panel-${Ts()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Uo.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",n=this.isHorizontal()?"translateX":"translateY",i=this.isHorizontal()?"offsetLeft":"offsetTop",s=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const r=o-s;this.activeIndicatorRef.style.transform=`${n}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${n}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(e){this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=Ep(0,this.tabs.length-1,this.activeTabIndex+e),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}g([$],Wt.prototype,"orientation",void 0);g([$],Wt.prototype,"activeid",void 0);g([U],Wt.prototype,"tabs",void 0);g([U],Wt.prototype,"tabpanels",void 0);g([$({mode:"boolean"})],Wt.prototype,"activeindicator",void 0);g([U],Wt.prototype,"activeIndicatorRef",void 0);g([U],Wt.prototype,"showActiveIndicator",void 0);ot(Wt,si);class Tg extends Ee{}class Sg extends Ji(Tg){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const id={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};let tt=class extends Sg{constructor(){super(...arguments),this.resize=id.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};g([$({mode:"boolean"})],tt.prototype,"readOnly",void 0);g([$],tt.prototype,"resize",void 0);g([$({mode:"boolean"})],tt.prototype,"autofocus",void 0);g([$({attribute:"form"})],tt.prototype,"formId",void 0);g([$],tt.prototype,"list",void 0);g([$({converter:St})],tt.prototype,"maxlength",void 0);g([$({converter:St})],tt.prototype,"minlength",void 0);g([$],tt.prototype,"name",void 0);g([$],tt.prototype,"placeholder",void 0);g([$({converter:St,mode:"fromView"})],tt.prototype,"cols",void 0);g([$({converter:St,mode:"fromView"})],tt.prototype,"rows",void 0);g([$({mode:"boolean"})],tt.prototype,"spellcheck",void 0);g([U],tt.prototype,"defaultSlottedNodes",void 0);ot(tt,Er);const Ig=(t,e)=>ye`
    <template
        class="
            ${n=>n.readOnly?"readonly":""}
            ${n=>n.resize!==id.none?`resize-${n.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${n=>n.defaultSlottedNodes&&n.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${mt("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${n=>n.autofocus}"
            cols="${n=>n.cols}"
            ?disabled="${n=>n.disabled}"
            form="${n=>n.form}"
            list="${n=>n.list}"
            maxlength="${n=>n.maxlength}"
            minlength="${n=>n.minlength}"
            name="${n=>n.name}"
            placeholder="${n=>n.placeholder}"
            ?readonly="${n=>n.readOnly}"
            ?required="${n=>n.required}"
            rows="${n=>n.rows}"
            ?spellcheck="${n=>n.spellcheck}"
            :value="${n=>n.value}"
            aria-atomic="${n=>n.ariaAtomic}"
            aria-busy="${n=>n.ariaBusy}"
            aria-controls="${n=>n.ariaControls}"
            aria-current="${n=>n.ariaCurrent}"
            aria-describedby="${n=>n.ariaDescribedby}"
            aria-details="${n=>n.ariaDetails}"
            aria-disabled="${n=>n.ariaDisabled}"
            aria-errormessage="${n=>n.ariaErrormessage}"
            aria-flowto="${n=>n.ariaFlowto}"
            aria-haspopup="${n=>n.ariaHaspopup}"
            aria-hidden="${n=>n.ariaHidden}"
            aria-invalid="${n=>n.ariaInvalid}"
            aria-keyshortcuts="${n=>n.ariaKeyshortcuts}"
            aria-label="${n=>n.ariaLabel}"
            aria-labelledby="${n=>n.ariaLabelledby}"
            aria-live="${n=>n.ariaLive}"
            aria-owns="${n=>n.ariaOwns}"
            aria-relevant="${n=>n.ariaRelevant}"
            aria-roledescription="${n=>n.ariaRoledescription}"
            @input="${(n,i)=>n.handleTextInput()}"
            @change="${n=>n.handleChange()}"
            ${Ke("control")}
        ></textarea>
    </template>
`,_g=(t,e)=>ye`
    <template
        class="
            ${n=>n.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${n=>n.defaultSlottedNodes&&n.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${mt({property:"defaultSlottedNodes",filter:bg})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${ri(t,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${n=>n.handleTextInput()}"
                @change="${n=>n.handleChange()}"
                ?autofocus="${n=>n.autofocus}"
                ?disabled="${n=>n.disabled}"
                list="${n=>n.list}"
                maxlength="${n=>n.maxlength}"
                minlength="${n=>n.minlength}"
                pattern="${n=>n.pattern}"
                placeholder="${n=>n.placeholder}"
                ?readonly="${n=>n.readOnly}"
                ?required="${n=>n.required}"
                size="${n=>n.size}"
                ?spellcheck="${n=>n.spellcheck}"
                :value="${n=>n.value}"
                type="${n=>n.type}"
                aria-atomic="${n=>n.ariaAtomic}"
                aria-busy="${n=>n.ariaBusy}"
                aria-controls="${n=>n.ariaControls}"
                aria-current="${n=>n.ariaCurrent}"
                aria-describedby="${n=>n.ariaDescribedby}"
                aria-details="${n=>n.ariaDetails}"
                aria-disabled="${n=>n.ariaDisabled}"
                aria-errormessage="${n=>n.ariaErrormessage}"
                aria-flowto="${n=>n.ariaFlowto}"
                aria-haspopup="${n=>n.ariaHaspopup}"
                aria-hidden="${n=>n.ariaHidden}"
                aria-invalid="${n=>n.ariaInvalid}"
                aria-keyshortcuts="${n=>n.ariaKeyshortcuts}"
                aria-label="${n=>n.ariaLabel}"
                aria-labelledby="${n=>n.ariaLabelledby}"
                aria-live="${n=>n.ariaLive}"
                aria-owns="${n=>n.ariaOwns}"
                aria-relevant="${n=>n.ariaRelevant}"
                aria-roledescription="${n=>n.ariaRoledescription}"
                ${Ke("control")}
            />
            ${oi(t,e)}
        </div>
    </template>
`,dn="not-allowed",Eg=":host([hidden]){display:none}";function Qe(t){return`${Eg}:host{display:${t}}`}const Ge=kp()?"focus-visible":"focus";function Ar(t){return ed.getOrCreate(t).withPrefix("vscode")}function Og(t){window.addEventListener("load",()=>{new MutationObserver(()=>{Ga(t)}).observe(document.body,{attributes:!0,attributeFilter:["class"]}),Ga(t)})}function Ga(t){const e=getComputedStyle(document.body),n=document.querySelector("body");if(n){const i=n.getAttribute("data-vscode-theme-kind");for(const[s,o]of t){let r=e.getPropertyValue(s).toString();i==="vscode-high-contrast"?(r.length===0&&o.name.includes("background")&&(r="transparent"),o.name==="button-icon-hover-background"&&(r="transparent")):o.name==="contrast-active-border"&&(r="transparent"),o.setValueFor(n,r)}}}const Ya=new Map;let Qa=!1;function j(t,e){const n=Kc.create(t);if(e){if(e.includes("--fake-vscode-token")){const i="id"+Math.random().toString(16).slice(2);e=`${e}-${i}`}Ya.set(e,n)}return Qa||(Og(Ya),Qa=!0),n}const Ag=j("background","--vscode-editor-background").withDefault("#1e1e1e"),pe=j("border-width").withDefault(1),sd=j("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518");j("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df");const zt=j("corner-radius").withDefault(0),ie=j("design-unit").withDefault(4),An=j("disabled-opacity").withDefault(.4),_e=j("focus-border","--vscode-focusBorder").withDefault("#007fd4"),bt=j("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol");j("font-weight","--vscode-font-weight").withDefault("400");const We=j("foreground","--vscode-foreground").withDefault("#cccccc"),gs=j("input-height").withDefault("26"),Rr=j("input-min-width").withDefault("100px"),et=j("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),st=j("type-ramp-base-line-height").withDefault("normal"),od=j("type-ramp-minus1-font-size").withDefault("11px"),rd=j("type-ramp-minus1-line-height").withDefault("16px");j("type-ramp-minus2-font-size").withDefault("9px");j("type-ramp-minus2-line-height").withDefault("16px");j("type-ramp-plus1-font-size").withDefault("16px");j("type-ramp-plus1-line-height").withDefault("24px");const Rg=j("scrollbarWidth").withDefault("10px"),Dg=j("scrollbarHeight").withDefault("10px"),Pg=j("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),Mg=j("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),Bg=j("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),ad=j("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),ld=j("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),Dr=j("button-border","--vscode-button-border").withDefault("transparent"),Ja=j("button-icon-background").withDefault("transparent"),Fg=j("button-icon-corner-radius").withDefault("5px"),Lg=j("button-icon-outline-offset").withDefault(0),Xa=j("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),Hg=j("button-icon-padding").withDefault("3px"),Un=j("button-primary-background","--vscode-button-background").withDefault("#0e639c"),cd=j("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),dd=j("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),$o=j("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),Ng=j("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),Vg=j("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),jg=j("button-padding-horizontal").withDefault("11px"),zg=j("button-padding-vertical").withDefault("4px"),Ht=j("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),Hn=j("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),Ug=j("checkbox-corner-radius").withDefault(3);j("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0");const Cn=j("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771"),qn=j("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),qg=j("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),Wg=j("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),ls=j("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),rn=j("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c");j("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0");const Gg=j("dropdown-list-max-height").withDefault("200px"),kn=j("input-background","--vscode-input-background").withDefault("#3c3c3c"),ud=j("input-foreground","--vscode-input-foreground").withDefault("#cccccc");j("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc");const Za=j("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),Yg=j("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),Qg=j("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),Jg=j("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),Mn=j("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),Xg=j("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799");j("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e");j("panel-view-border","--vscode-panel-border").withDefault("#80808059");const Zg=j("tag-corner-radius").withDefault("2px"),Kg=(t,e)=>De`
	${Qe("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${bt};
		font-size: ${od};
		line-height: ${rd};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${ad};
		border: calc(${pe} * 1px) solid ${Dr};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${ld};
		display: flex;
		height: calc(${ie} * 4px);
		justify-content: center;
		min-width: calc(${ie} * 4px + 2px);
		min-height: calc(${ie} * 4px + 2px);
		padding: 3px 6px;
	}
`;class em extends Qi{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}const oy=em.compose({baseName:"badge",template:Qc,styles:Kg}),tm=De`
	${Qe("inline-flex")} :host {
		outline: none;
		font-family: ${bt};
		font-size: ${et};
		line-height: ${st};
		color: ${cd};
		background: ${Un};
		border-radius: 2px;
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${zg} ${jg};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${pe} * 1px) solid ${Dr};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${dd};
	}
	:host(:active) {
		background: ${Un};
	}
	.control:${Ge} {
		outline: calc(${pe} * 1px) solid ${_e};
		outline-offset: calc(${pe} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${An};
		background: ${Un};
		cursor: ${dn};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${ie} * 4px);
		height: calc(${ie} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,nm=De`
	:host([appearance='primary']) {
		background: ${Un};
		color: ${cd};
	}
	:host([appearance='primary']:hover) {
		background: ${dd};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${Un};
	}
	:host([appearance='primary']) .control:${Ge} {
		outline: calc(${pe} * 1px) solid ${_e};
		outline-offset: calc(${pe} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${Un};
	}
`,im=De`
	:host([appearance='secondary']) {
		background: ${$o};
		color: ${Ng};
	}
	:host([appearance='secondary']:hover) {
		background: ${Vg};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${$o};
	}
	:host([appearance='secondary']) .control:${Ge} {
		outline: calc(${pe} * 1px) solid ${_e};
		outline-offset: calc(${pe} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${$o};
	}
`,sm=De`
	:host([appearance='icon']) {
		background: ${Ja};
		border-radius: ${Fg};
		color: ${We};
	}
	:host([appearance='icon']:hover) {
		background: ${Xa};
		outline: 1px dotted ${sd};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${Hg};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${Xa};
	}
	:host([appearance='icon']) .control:${Ge} {
		outline: calc(${pe} * 1px) solid ${_e};
		outline-offset: ${Lg};
	}
	:host([appearance='icon'][disabled]) {
		background: ${Ja};
	}
`,om=(t,e)=>De`
	${tm}
	${nm}
	${im}
	${sm}
`;class hd extends _t{connectedCallback(){if(super.connectedCallback(),!this.appearance){const e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,n,i){e==="appearance"&&i==="icon"&&(this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")),e==="aria-label"&&(this.ariaLabel=i),e==="disabled"&&(this.disabled=i!==null)}}g([$],hd.prototype,"appearance",void 0);const fd=hd.compose({baseName:"button",template:Dp,styles:om,shadowOptions:{delegatesFocus:!0}}),rm=(t,e)=>De`
	${Qe("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${ie} * 1px) 0;
		user-select: none;
		font-size: ${et};
		line-height: ${st};
	}
	.control {
		position: relative;
		width: calc(${ie} * 4px + 2px);
		height: calc(${ie} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${Ug} * 1px);
		border: calc(${pe} * 1px) solid ${Hn};
		background: ${Ht};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${bt};
		color: ${We};
		padding-inline-start: calc(${ie} * 2px + 2px);
		margin-inline-end: calc(${ie} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${We};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${We};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${Ht};
		border-color: ${Hn};
	}
	:host(:enabled) .control:active {
		background: ${Ht};
		border-color: ${_e};
	}
	:host(:${Ge}) .control {
		border: calc(${pe} * 1px) solid ${_e};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${dn};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${An};
	}
`;class am extends Gs{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}}const lm=am.compose({baseName:"checkbox",template:Up,styles:rm,checkedIndicator:`
		<svg 
			part="checked-indicator"
			class="checked-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
			/>
		</svg>
	`,indeterminateIndicator:`
		<div part="indeterminate-indicator" class="indeterminate-indicator"></div>
	`}),cm=(t,e)=>De`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`,dm=(t,e)=>De`
	:host {
		display: grid;
		padding: calc((${ie} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${Ag};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${qg};
		outline: 1px dotted ${sd};
		outline-offset: -1px;
	}
`,um=(t,e)=>De`
	:host {
		padding: calc(${ie} * 1px) calc(${ie} * 3px);
		color: ${We};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${bt};
		font-size: ${et};
		line-height: ${st};
		font-weight: 400;
		border: solid calc(${pe} * 1px) transparent;
		border-radius: calc(${zt} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${Ge}),
	:host(:focus),
	:host(:active) {
		background: ${Cn};
		border: solid calc(${pe} * 1px) ${_e};
		color: ${qn};
		outline: none;
	}
	:host(:${Ge}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${qn} !important;
	}
`;class hm extends ze{connectedCallback(){super.connectedCallback(),this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}const ry=hm.compose({baseName:"data-grid",baseClass:ze,template:Fp,styles:cm});class fm extends Ye{}const ay=fm.compose({baseName:"data-grid-row",baseClass:Ye,template:jp,styles:dm});class pm extends hn{}const ly=pm.compose({baseName:"data-grid-cell",baseClass:hn,template:zp,styles:um}),gm=(t,e)=>De`
	${Qe("block")} :host {
		border: none;
		border-top: calc(${pe} * 1px) solid ${Wg};
		box-sizing: content-box;
		height: 0;
		margin: calc(${ie} * 1px) 0;
		width: 100%;
	}
`;class mm extends _r{}const cy=mm.compose({baseName:"divider",template:rg,styles:gm}),bm=(t,e)=>De`
	${Qe("inline-flex")} :host {
		background: ${ls};
		box-sizing: border-box;
		color: ${We};
		contain: contents;
		font-family: ${bt};
		height: calc(${gs} * 1px);
		position: relative;
		user-select: none;
		min-width: ${Rr};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${pe} * 1px) solid ${rn};
		border-radius: calc(${zt} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${et};
		line-height: ${st};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${ls};
		border: calc(${pe} * 1px) solid ${_e};
		border-radius: calc(${zt} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${Gg};
		padding: 0 0 calc(${ie} * 1px) 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${Ge}) .control {
		border-color: ${_e};
	}
	:host(:not([disabled]):hover) {
		background: ${ls};
		border-color: ${rn};
	}
	:host(:${Ge}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${Cn};
		border: calc(${pe} * 1px) solid ${_e};
		color: ${qn};
	}
	:host([disabled]) {
		cursor: ${dn};
		opacity: ${An};
	}
	:host([disabled]) .control {
		cursor: ${dn};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${ls};
		color: ${We};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${_e};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${_e};
	}
	:host([open][position='above']) .listbox,
	:host([open][position='below']) .control {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='above']) .control,
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${gs} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${gs} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${ie} * 4px);
		min-width: calc(${ie} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`;class vm extends pn{}const dy=vm.compose({baseName:"dropdown",template:xg,styles:bm,indicator:`
		<svg 
			class="select-indicator"
			part="select-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
			/>
		</svg>
	`}),ym=(t,e)=>De`
	${Qe("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${Yg};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${bt};
		font-size: ${et};
		line-height: ${st};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${pe} * 1px) solid transparent;
		border-radius: calc(${zt} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		word-break: break-word;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${Za};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${Za};
	}
	:host(:${Ge}) .control,
	:host(:focus) .control {
		border: calc(${pe} * 1px) solid ${_e};
	}
`;class xm extends It{}const uy=xm.compose({baseName:"link",template:Ap,styles:ym,shadowOptions:{delegatesFocus:!0}}),wm=(t,e)=>De`
	${Qe("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${zt};
		border: calc(${pe} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${We};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${et};
		line-height: ${st};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${ie} / 2) * 1px)
			calc((${ie} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${Ge}) {
		border-color: ${_e};
		background: ${Cn};
		color: ${We};
	}
	:host([aria-selected='true']) {
		background: ${Cn};
		border: calc(${pe} * 1px) solid ${_e};
		color: ${qn};
	}
	:host(:active) {
		background: ${Cn};
		color: ${qn};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${Cn};
		border: calc(${pe} * 1px) solid ${_e};
		color: ${qn};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${Cn};
		color: ${We};
	}
	:host([disabled]) {
		cursor: ${dn};
		opacity: ${An};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;let $m=class extends qt{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}};const fy=$m.compose({baseName:"option",template:lg,styles:wm}),Cm=(t,e)=>De`
	${Qe("grid")} :host {
		box-sizing: border-box;
		font-family: ${bt};
		font-size: ${et};
		line-height: ${st};
		color: ${We};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${ie} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${ie} * 1px) calc(${ie} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${ie} / 4) * 1px);
		justify-self: center;
		background: ${Mn};
		margin: 0;
		border-radius: calc(${zt} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`,km=(t,e)=>De`
	${Qe("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${bt};
		font-size: ${et};
		line-height: ${st};
		height: calc(${ie} * 7px);
		padding: calc(${ie} * 1px) 0;
		color: ${Xg};
		fill: currentcolor;
		border-radius: calc(${zt} * 1px);
		border: solid calc(${pe} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${Mn};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${Mn};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${Mn};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${Mn};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${Mn};
		fill: currentcolor;
	}
	:host(:${Ge}) {
		outline: none;
		border: solid calc(${pe} * 1px) ${Jg};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${ie} * 2px);
	}
`,Tm=(t,e)=>De`
	${Qe("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${pe} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${et};
		line-height: ${st};
		padding: 10px calc((${ie} + 2) * 1px);
	}
`;class Sm extends Wt{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=Uo.horizontal),this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}const py=Sm.compose({baseName:"panels",template:kg,styles:Cm});class Im extends nd{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}const gy=Im.compose({baseName:"panel-tab",template:Cg,styles:km});class _m extends $g{}const my=_m.compose({baseName:"panel-view",template:wg,styles:Tm}),Em=(t,e)=>De`
	${Qe("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${ie} * 7px);
		width: calc(${ie} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${ie} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${Qg};
		stroke-width: calc(${ie} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`;class Om extends di{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,n,i){e==="value"&&this.removeAttribute("value")}}const Am=Om.compose({baseName:"progress-ring",template:hg,styles:Em,indeterminateIndicator:`
		<svg class="progress" part="progress" viewBox="0 0 16 16">
			<circle
				class="background"
				part="background"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
			<circle
				class="indeterminate-indicator-1"
				part="indeterminate-indicator-1"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
		</svg>
	`}),Rm=(t,e)=>De`
	${Qe("flex")} :host {
		align-items: flex-start;
		margin: calc(${ie} * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: ${We};
		font-size: ${et};
		margin: calc(${ie} * 1px) 0;
	}
`;class Dm extends fn{connectedCallback(){super.connectedCallback();const e=this.querySelector("label");if(e){const n="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",n),this.setAttribute("aria-labelledby",n)}}}const by=Dm.compose({baseName:"radio-group",template:fg,styles:Rm}),Pm=(t,e)=>De`
	${Qe("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${et};
		line-height: ${st};
		margin: calc(${ie} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${Ht};
		border-radius: 999px;
		border: calc(${pe} * 1px) solid ${Hn};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${ie} * 4px);
		position: relative;
		outline: none;
		width: calc(${ie} * 4px);
	}
	.label {
		color: ${We};
		cursor: pointer;
		font-family: ${bt};
		margin-inline-end: calc(${ie} * 2px + 2px);
		padding-inline-start: calc(${ie} * 2px + 2px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		background: ${We};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${ie} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${Ht};
		border-color: ${Hn};
	}
	:host(:not([disabled])) .control:active {
		background: ${Ht};
		border-color: ${_e};
	}
	:host(:${Ge}) .control {
		border: calc(${pe} * 1px) solid ${_e};
	}
	:host([aria-checked='true']) .control {
		background: ${Ht};
		border: calc(${pe} * 1px) solid ${Hn};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${Ht};
		border: calc(${pe} * 1px) solid ${Hn};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${Ht};
		border: calc(${pe} * 1px) solid ${_e};
	}
	:host([aria-checked="true"]:${Ge}:not([disabled])) .control {
		border: calc(${pe} * 1px) solid ${_e};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${dn};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${An};
	}
`;class Mm extends Qs{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}}const vy=Mm.compose({baseName:"radio",template:pg,styles:Pm,checkedIndicator:`
		<div part="checked-indicator" class="checked-indicator"></div>
	`}),Bm=(t,e)=>De`
	${Qe("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${bt};
		font-size: ${od};
		line-height: ${rd};
	}
	.control {
		background-color: ${ad};
		border: calc(${pe} * 1px) solid ${Dr};
		border-radius: ${Zg};
		color: ${ld};
		padding: calc(${ie} * 0.5px) calc(${ie} * 1px);
		text-transform: uppercase;
	}
`;class Fm extends Qi{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}const yy=Fm.compose({baseName:"tag",template:Qc,styles:Bm}),Lm=(t,e)=>De`
	${Qe("inline-block")} :host {
		font-family: ${bt};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${ud};
		background: ${kn};
		border-radius: calc(${zt} * 1px);
		border: calc(${pe} * 1px) solid ${rn};
		font: inherit;
		font-size: ${et};
		line-height: ${st};
		padding: calc(${ie} * 2px + 1px);
		width: 100%;
		min-width: ${Rr};
		resize: none;
	}
	.control:hover:enabled {
		background: ${kn};
		border-color: ${rn};
	}
	.control:active:enabled {
		background: ${kn};
		border-color: ${_e};
	}
	.control:hover,
	.control:${Ge},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${Rg};
		height: ${Dg};
	}
	.control::-webkit-scrollbar-corner {
		background: ${kn};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${Pg};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${Mg};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${Bg};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${_e};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${We};
		cursor: pointer;
		font-size: ${et};
		line-height: ${st};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${dn};
	}
	:host([disabled]) {
		opacity: ${An};
	}
	:host([disabled]) .control {
		border-color: ${rn};
	}
`;class Hm extends tt{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}}const xy=Hm.compose({baseName:"text-area",template:Ig,styles:Lm,shadowOptions:{delegatesFocus:!0}}),Nm=(t,e)=>De`
	${Qe("inline-block")} :host {
		font-family: ${bt};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${ud};
		background: ${kn};
		border-radius: calc(${zt} * 1px);
		border: calc(${pe} * 1px) solid ${rn};
		height: calc(${gs} * 1px);
		min-width: ${Rr};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${ie} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${ie} * 2px + 1px);
		font-size: ${et};
		line-height: ${st};
	}
	.control:hover,
	.control:${Ge},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${We};
		cursor: pointer;
		font-size: ${et};
		line-height: ${st};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${ie} * 4px);
		height: calc(${ie} * 4px);
	}
	.start {
		margin-inline-start: calc(${ie} * 2px);
	}
	.end {
		margin-inline-end: calc(${ie} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${kn};
		border-color: ${rn};
	}
	:host(:active:not([disabled])) .root {
		background: ${kn};
		border-color: ${_e};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${_e};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${dn};
	}
	:host([disabled]) {
		opacity: ${An};
	}
	:host([disabled]) .control {
		border-color: ${rn};
	}
`;class Vm extends dt{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}}const jm=Vm.compose({baseName:"text-field",template:_g,styles:Nm,shadowOptions:{delegatesFocus:!0}}),zm={key:0,id:"notifications"},Um={class:"message"},qm={class:"level"},Wm={class:"message"},Gm={class:"buttons"},Ym=un({__name:"Notifications",setup(t){Ar().register(fd());const e=["Error","Warning","Info"],n=Wi(),i=Me(()=>n.notifications[0]),s=Me(()=>e[i.value.level]),o=Me(()=>i.value.message);return(r,a)=>$e(i)?(Ne(),Ue("div",zm,[fe("div",null,[fe("div",Um,[fe("div",qm,Dt($e(s)),1),fe("div",Wm,Dt($e(o)),1)]),fe("div",Gm,[fe("vscode-button",{onClick:a[0]||(a[0]=l=>$e(n).notifications.splice(0,1))}," Okay "),fe("vscode-button",{appearance:"secondary",onClick:a[1]||(a[1]=l=>$e(xt).postMessage("openLog"))}," Open Log ")])])])):tn("",!0)}});const Qm="carsakiller",Jm="LLS-Addons",Xm="addons",Zm="https://github.com/LuaLS/vscode-lua-webvue/discussions",Km={class:"content"},eb={key:0,id:"dev-warn"},tb={class:"versions"},nb={title:"WebVue Version"},ib={title:"Lua Extension Version"},sb=["href"],ob=un({__name:"App",setup(t){const e=Wi(),n=!1,i="0.1.2",s=()=>xt.postMessage("openLog");return(o,r)=>{const a=eh("RouterView");return Ne(),Ue("div",Km,[ke(a),ke(Ym),fe("footer",null,[$e(n)?(Ne(),Ue("div",eb,"Development Mode Active")):tn("",!0),fe("span",tb,[fe("span",nb,[ke(Nt,{icon:"preview"}),xs(" v"+Dt($e(i)),1)]),fe("span",ib,[ke(Nt,{icon:"server"}),xs("v"+Dt($e(e).clientVersion),1)])]),fe("span",null,[fe("a",{href:$e(Zm),target:"_blank",rel:"nofollow noreferrer noopener external",title:"Feedback"},[ke(Nt,{icon:"feedback"})],8,sb),fe("button",{onClick:s,title:"Open Log File",role:"Open Log File"},[ke(Nt,{icon:"output"})])])])])}}});const Bn=typeof window<"u";function rb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function Co(t,e){const n={};for(const i in e){const s=e[i];n[i]=Tt(s)?s.map(t):t(s)}return n}const _i=()=>{},Tt=Array.isArray,ab=/\/$/,lb=t=>t.replace(ab,"");function ko(t,e,n="/"){let i,s={},o="",r="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),o=e.slice(l+1,a>-1?a:e.length),s=t(o)),a>-1&&(i=i||e.slice(0,a),r=e.slice(a,e.length)),i=hb(i??e,n),{fullPath:i+(o&&"?")+o+r,path:i,query:s,hash:r}}function cb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ka(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function db(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Zn(e.matched[i],n.matched[s])&&pd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function pd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!ub(t[n],e[n]))return!1;return!0}function ub(t,e){return Tt(t)?el(t,e):Tt(e)?el(e,t):t===e}function el(t,e){return Tt(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function hb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let s=n.length-1,o,r;for(o=0;o<i.length;o++)if(r=i[o],r!==".")if(r==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var Ui;(function(t){t.pop="pop",t.push="push"})(Ui||(Ui={}));var Ei;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ei||(Ei={}));function fb(t){if(!t)if(Bn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),lb(t)}const pb=/^[^#]+#/;function gb(t,e){return t.replace(pb,"#")+e}function mb(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Js=()=>({left:window.pageXOffset,top:window.pageYOffset});function bb(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=mb(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function tl(t,e){return(history.state?history.state.position-e:-1)+t}const qo=new Map;function vb(t,e){qo.set(t,e)}function yb(t){const e=qo.get(t);return qo.delete(t),e}let xb=()=>location.protocol+"//"+location.host;function gd(t,e){const{pathname:n,search:i,hash:s}=e,o=t.indexOf("#");if(o>-1){let a=s.includes(t.slice(o))?t.slice(o).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Ka(l,"")}return Ka(n,t)+i+s}function wb(t,e,n,i){let s=[],o=[],r=null;const a=({state:f})=>{const m=gd(t,location),v=n.value,b=e.value;let A=0;if(f){if(n.value=m,e.value=f,r&&r===v){r=null;return}A=b?f.position-b.position:0}else i(m);s.forEach(_=>{_(n.value,v,{delta:A,type:Ui.pop,direction:A?A>0?Ei.forward:Ei.back:Ei.unknown})})};function l(){r=n.value}function c(f){s.push(f);const m=()=>{const v=s.indexOf(f);v>-1&&s.splice(v,1)};return o.push(m),m}function d(){const{history:f}=window;!f.state||f.replaceState(we({},f.state,{scroll:Js()}),"")}function u(){for(const f of o)f();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d),{pauseListeners:l,listen:c,destroy:u}}function nl(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Js():null}}function $b(t){const{history:e,location:n}=window,i={value:gd(t,n)},s={value:e.state};s.value||o(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(l,c,d){const u=t.indexOf("#"),f=u>-1?(n.host&&document.querySelector("base")?t:t.slice(u))+l:xb()+t+l;try{e[d?"replaceState":"pushState"](c,"",f),s.value=c}catch(m){console.error(m),n[d?"replace":"assign"](f)}}function r(l,c){const d=we({},e.state,nl(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});o(l,d,!0),i.value=l}function a(l,c){const d=we({},s.value,e.state,{forward:l,scroll:Js()});o(d.current,d,!0);const u=we({},nl(i.value,l,null),{position:d.position+1},c);o(l,u,!1),i.value=l}return{location:i,state:s,push:a,replace:r}}function Cb(t){t=fb(t);const e=$b(t),n=wb(t,e.state,e.location,e.replace);function i(o,r=!0){r||n.pauseListeners(),history.go(o)}const s=we({location:"",base:t,go:i,createHref:gb.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function kb(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Cb(t)}function Tb(t){return typeof t=="string"||t&&typeof t=="object"}function md(t){return typeof t=="string"||typeof t=="symbol"}const Jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},bd=Symbol("");var il;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(il||(il={}));function Kn(t,e){return we(new Error,{type:t,[bd]:!0},e)}function Bt(t,e){return t instanceof Error&&bd in t&&(e==null||!!(t.type&e))}const sl="[^/]+?",Sb={sensitive:!1,strict:!1,start:!0,end:!0},Ib=/[.+*?^${}()[\]/\\]/g;function _b(t,e){const n=we({},Sb,e),i=[];let s=n.start?"^":"";const o=[];for(const c of t){const d=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let u=0;u<c.length;u++){const f=c[u];let m=40+(n.sensitive?.25:0);if(f.type===0)u||(s+="/"),s+=f.value.replace(Ib,"\\$&"),m+=40;else if(f.type===1){const{value:v,repeatable:b,optional:A,regexp:_}=f;o.push({name:v,repeatable:b,optional:A});const F=_||sl;if(F!==sl){m+=10;try{new RegExp(`(${F})`)}catch(J){throw new Error(`Invalid custom RegExp for param "${v}" (${F}): `+J.message)}}let D=b?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;u||(D=A&&c.length<2?`(?:/${D})`:"/"+D),A&&(D+="?"),s+=D,m+=20,A&&(m+=-8),b&&(m+=-20),F===".*"&&(m+=-50)}d.push(m)}i.push(d)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const r=new RegExp(s,n.sensitive?"":"i");function a(c){const d=c.match(r),u={};if(!d)return null;for(let f=1;f<d.length;f++){const m=d[f]||"",v=o[f-1];u[v.name]=m&&v.repeatable?m.split("/"):m}return u}function l(c){let d="",u=!1;for(const f of t){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const m of f)if(m.type===0)d+=m.value;else if(m.type===1){const{value:v,repeatable:b,optional:A}=m,_=v in c?c[v]:"";if(Tt(_)&&!b)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const F=Tt(_)?_.join("/"):_;if(!F)if(A)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${v}"`);d+=F}}return d||"/"}return{re:r,score:i,keys:o,parse:a,stringify:l}}function Eb(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Ob(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const o=Eb(i[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-i.length)===1){if(ol(i))return 1;if(ol(s))return-1}return s.length-i.length}function ol(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ab={type:0,value:""},Rb=/[a-zA-Z0-9_]/;function Db(t){if(!t)return[[]];if(t==="/")return[[Ab]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,i=n;const s=[];let o;function r(){o&&s.push(o),o=[]}let a=0,l,c="",d="";function u(){!c||(n===0?o.push({type:0,value:c}):n===1||n===2||n===3?(o.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&u(),r()):l===":"?(u(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:Rb.test(l)?f():(u(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:u(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),u(),r(),s}function Pb(t,e,n){const i=_b(Db(t.path),n),s=we(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Mb(t,e){const n=[],i=new Map;e=ll({strict:!1,end:!0,sensitive:!1},e);function s(d){return i.get(d)}function o(d,u,f){const m=!f,v=Bb(d);v.aliasOf=f&&f.record;const b=ll(e,d),A=[v];if("alias"in d){const D=typeof d.alias=="string"?[d.alias]:d.alias;for(const J of D)A.push(we({},v,{components:f?f.record.components:v.components,path:J,aliasOf:f?f.record:v}))}let _,F;for(const D of A){const{path:J}=D;if(u&&J[0]!=="/"){const Y=u.record.path,te=Y[Y.length-1]==="/"?"":"/";D.path=u.record.path+(J&&te+J)}if(_=Pb(D,u,b),f?f.alias.push(_):(F=F||_,F!==_&&F.alias.push(_),m&&d.name&&!al(_)&&r(d.name)),v.children){const Y=v.children;for(let te=0;te<Y.length;te++)o(Y[te],_,f&&f.children[te])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return F?()=>{r(F)}:_i}function r(d){if(md(d)){const u=i.get(d);u&&(i.delete(d),n.splice(n.indexOf(u),1),u.children.forEach(r),u.alias.forEach(r))}else{const u=n.indexOf(d);u>-1&&(n.splice(u,1),d.record.name&&i.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function a(){return n}function l(d){let u=0;for(;u<n.length&&Ob(d,n[u])>=0&&(d.record.path!==n[u].record.path||!vd(d,n[u]));)u++;n.splice(u,0,d),d.record.name&&!al(d)&&i.set(d.record.name,d)}function c(d,u){let f,m={},v,b;if("name"in d&&d.name){if(f=i.get(d.name),!f)throw Kn(1,{location:d});b=f.record.name,m=we(rl(u.params,f.keys.filter(F=>!F.optional).map(F=>F.name)),d.params&&rl(d.params,f.keys.map(F=>F.name))),v=f.stringify(m)}else if("path"in d)v=d.path,f=n.find(F=>F.re.test(v)),f&&(m=f.parse(v),b=f.record.name);else{if(f=u.name?i.get(u.name):n.find(F=>F.re.test(u.path)),!f)throw Kn(1,{location:d,currentLocation:u});b=f.record.name,m=we({},u.params,d.params),v=f.stringify(m)}const A=[];let _=f;for(;_;)A.unshift(_.record),_=_.parent;return{name:b,path:v,params:m,matched:A,meta:Lb(A)}}return t.forEach(d=>o(d)),{addRoute:o,resolve:c,removeRoute:r,getRoutes:a,getRecordMatcher:s}}function rl(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Bb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Fb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Fb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function al(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Lb(t){return t.reduce((e,n)=>we(e,n.meta),{})}function ll(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function vd(t,e){return e.children.some(n=>n===t||vd(t,n))}const yd=/#/g,Hb=/&/g,Nb=/\//g,Vb=/=/g,jb=/\?/g,xd=/\+/g,zb=/%5B/g,Ub=/%5D/g,wd=/%5E/g,qb=/%60/g,$d=/%7B/g,Wb=/%7C/g,Cd=/%7D/g,Gb=/%20/g;function Pr(t){return encodeURI(""+t).replace(Wb,"|").replace(zb,"[").replace(Ub,"]")}function Yb(t){return Pr(t).replace($d,"{").replace(Cd,"}").replace(wd,"^")}function Wo(t){return Pr(t).replace(xd,"%2B").replace(Gb,"+").replace(yd,"%23").replace(Hb,"%26").replace(qb,"`").replace($d,"{").replace(Cd,"}").replace(wd,"^")}function Qb(t){return Wo(t).replace(Vb,"%3D")}function Jb(t){return Pr(t).replace(yd,"%23").replace(jb,"%3F")}function Xb(t){return t==null?"":Jb(t).replace(Nb,"%2F")}function Ss(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Zb(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const o=i[s].replace(xd," "),r=o.indexOf("="),a=Ss(r<0?o:o.slice(0,r)),l=r<0?null:Ss(o.slice(r+1));if(a in e){let c=e[a];Tt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function cl(t){let e="";for(let n in t){const i=t[n];if(n=Qb(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Tt(i)?i.map(o=>o&&Wo(o)):[i&&Wo(i)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function Kb(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Tt(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const ev=Symbol(""),dl=Symbol(""),Mr=Symbol(""),kd=Symbol(""),Go=Symbol("");function vi(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function en(t,e,n,i,s){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((r,a)=>{const l=u=>{u===!1?a(Kn(4,{from:n,to:e})):u instanceof Error?a(u):Tb(u)?a(Kn(2,{from:e,to:u})):(o&&i.enterCallbacks[s]===o&&typeof u=="function"&&o.push(u),r())},c=t.call(i&&i.instances[s],e,n,l);let d=Promise.resolve(c);t.length<3&&(d=d.then(l)),d.catch(u=>a(u))})}function To(t,e,n,i){const s=[];for(const o of t)for(const r in o.components){let a=o.components[r];if(!(e!=="beforeRouteEnter"&&!o.instances[r]))if(tv(a)){const c=(a.__vccOpts||a)[e];c&&s.push(en(c,n,i,o,r))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${o.path}"`));const d=rb(c)?c.default:c;o.components[r]=d;const f=(d.__vccOpts||d)[e];return f&&en(f,n,i,o,r)()}))}}return s}function tv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ul(t){const e=Pt(Mr),n=Pt(kd),i=Me(()=>e.resolve($e(t.to))),s=Me(()=>{const{matched:l}=i.value,{length:c}=l,d=l[c-1],u=n.matched;if(!d||!u.length)return-1;const f=u.findIndex(Zn.bind(null,d));if(f>-1)return f;const m=hl(l[c-2]);return c>1&&hl(d)===m&&u[u.length-1].path!==m?u.findIndex(Zn.bind(null,l[c-2])):f}),o=Me(()=>s.value>-1&&ov(n.params,i.value.params)),r=Me(()=>s.value>-1&&s.value===n.matched.length-1&&pd(n.params,i.value.params));function a(l={}){return sv(l)?e[$e(t.replace)?"replace":"push"]($e(t.to)).catch(_i):Promise.resolve()}return{route:i,href:Me(()=>i.value.href),isActive:o,isExactActive:r,navigate:a}}const nv=un({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ul,setup(t,{slots:e}){const n=ii(ul(t)),{options:i}=Pt(Mr),s=Me(()=>({[fl(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[fl(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&e.default(n);return t.custom?o:mc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),iv=nv;function sv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ov(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Tt(s)||s.length!==i.length||i.some((o,r)=>o!==s[r]))return!1}return!0}function hl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const fl=(t,e,n)=>t??e??n,rv=un({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Pt(Go),s=Me(()=>t.route||i.value),o=Pt(dl,0),r=Me(()=>{let c=$e(o);const{matched:d}=s.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),a=Me(()=>s.value.matched[r.value]);ds(dl,Me(()=>r.value+1)),ds(ev,a),ds(Go,s);const l=Ri();return xi(()=>[l.value,a.value,t.name],([c,d,u],[f,m,v])=>{d&&(d.instances[u]=c,m&&m!==d&&c&&c===f&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),c&&d&&(!m||!Zn(d,m)||!f)&&(d.enterCallbacks[u]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=s.value,d=t.name,u=a.value,f=u&&u.components[d];if(!f)return pl(n.default,{Component:f,route:c});const m=u.props[d],v=m?m===!0?c.params:typeof m=="function"?m(c):m:null,A=mc(f,we({},v,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return pl(n.default,{Component:A,route:c})||A}}});function pl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const av=rv;function lv(t){const e=Mb(t.routes,t),n=t.parseQuery||Zb,i=t.stringifyQuery||cl,s=t.history,o=vi(),r=vi(),a=vi(),l=xu(Jt);let c=Jt;Bn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Co.bind(null,x=>""+x),u=Co.bind(null,Xb),f=Co.bind(null,Ss);function m(x,B){let R,W;return md(x)?(R=e.getRecordMatcher(x),W=B):W=x,e.addRoute(W,R)}function v(x){const B=e.getRecordMatcher(x);B&&e.removeRoute(B)}function b(){return e.getRoutes().map(x=>x.record)}function A(x){return!!e.getRecordMatcher(x)}function _(x,B){if(B=we({},B||l.value),typeof x=="string"){const h=ko(n,x,B.path),p=e.resolve({path:h.path},B),y=s.createHref(h.fullPath);return we(h,p,{params:f(p.params),hash:Ss(h.hash),redirectedFrom:void 0,href:y})}let R;if("path"in x)R=we({},x,{path:ko(n,x.path,B.path).path});else{const h=we({},x.params);for(const p in h)h[p]==null&&delete h[p];R=we({},x,{params:u(x.params)}),B.params=u(B.params)}const W=e.resolve(R,B),ne=x.hash||"";W.params=d(f(W.params));const ve=cb(i,we({},x,{hash:Yb(ne),path:W.path})),re=s.createHref(ve);return we({fullPath:ve,hash:ne,query:i===cl?Kb(x.query):x.query||{}},W,{redirectedFrom:void 0,href:re})}function F(x){return typeof x=="string"?ko(n,x,l.value.path):we({},x)}function D(x,B){if(c!==x)return Kn(8,{from:B,to:x})}function J(x){return ee(x)}function Y(x){return J(we(F(x),{replace:!0}))}function te(x){const B=x.matched[x.matched.length-1];if(B&&B.redirect){const{redirect:R}=B;let W=typeof R=="function"?R(x):R;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=F(W):{path:W},W.params={}),we({query:x.query,hash:x.hash,params:"path"in W?{}:x.params},W)}}function ee(x,B){const R=c=_(x),W=l.value,ne=x.state,ve=x.force,re=x.replace===!0,h=te(R);if(h)return ee(we(F(h),{state:typeof h=="object"?we({},ne,h.state):ne,force:ve,replace:re}),B||R);const p=R;p.redirectedFrom=B;let y;return!ve&&db(i,W,R)&&(y=Kn(16,{to:p,from:W}),ce(W,W,!0,!1)),(y?Promise.resolve(y):Q(p,W)).catch(w=>Bt(w)?Bt(w,2)?w:X(w):S(w,p,W)).then(w=>{if(w){if(Bt(w,2))return ee(we({replace:re},F(w.to),{state:typeof w.to=="object"?we({},ne,w.to.state):ne,force:ve}),B||p)}else w=xe(p,W,!0,re,ne);return q(p,W,w),w})}function M(x,B){const R=D(x,B);return R?Promise.reject(R):Promise.resolve()}function Q(x,B){let R;const[W,ne,ve]=cv(x,B);R=To(W.reverse(),"beforeRouteLeave",x,B);for(const h of W)h.leaveGuards.forEach(p=>{R.push(en(p,x,B))});const re=M.bind(null,x,B);return R.push(re),Pn(R).then(()=>{R=[];for(const h of o.list())R.push(en(h,x,B));return R.push(re),Pn(R)}).then(()=>{R=To(ne,"beforeRouteUpdate",x,B);for(const h of ne)h.updateGuards.forEach(p=>{R.push(en(p,x,B))});return R.push(re),Pn(R)}).then(()=>{R=[];for(const h of x.matched)if(h.beforeEnter&&!B.matched.includes(h))if(Tt(h.beforeEnter))for(const p of h.beforeEnter)R.push(en(p,x,B));else R.push(en(h.beforeEnter,x,B));return R.push(re),Pn(R)}).then(()=>(x.matched.forEach(h=>h.enterCallbacks={}),R=To(ve,"beforeRouteEnter",x,B),R.push(re),Pn(R))).then(()=>{R=[];for(const h of r.list())R.push(en(h,x,B));return R.push(re),Pn(R)}).catch(h=>Bt(h,8)?h:Promise.reject(h))}function q(x,B,R){for(const W of a.list())W(x,B,R)}function xe(x,B,R,W,ne){const ve=D(x,B);if(ve)return ve;const re=B===Jt,h=Bn?history.state:{};R&&(W||re?s.replace(x.fullPath,we({scroll:re&&h&&h.scroll},ne)):s.push(x.fullPath,ne)),l.value=x,ce(x,B,R,re),X()}let z;function L(){z||(z=s.listen((x,B,R)=>{if(!rt.listening)return;const W=_(x),ne=te(W);if(ne){ee(we(ne,{replace:!0}),W).catch(_i);return}c=W;const ve=l.value;Bn&&vb(tl(ve.fullPath,R.delta),Js()),Q(W,ve).catch(re=>Bt(re,12)?re:Bt(re,2)?(ee(re.to,W).then(h=>{Bt(h,20)&&!R.delta&&R.type===Ui.pop&&s.go(-1,!1)}).catch(_i),Promise.reject()):(R.delta&&s.go(-R.delta,!1),S(re,W,ve))).then(re=>{re=re||xe(W,ve,!1),re&&(R.delta&&!Bt(re,8)?s.go(-R.delta,!1):R.type===Ui.pop&&Bt(re,20)&&s.go(-1,!1)),q(W,ve,re)}).catch(_i)}))}let I=vi(),T=vi(),V;function S(x,B,R){X(x);const W=T.list();return W.length?W.forEach(ne=>ne(x,B,R)):console.error(x),Promise.reject(x)}function N(){return V&&l.value!==Jt?Promise.resolve():new Promise((x,B)=>{I.add([x,B])})}function X(x){return V||(V=!x,L(),I.list().forEach(([B,R])=>x?R(x):B()),I.reset()),x}function ce(x,B,R,W){const{scrollBehavior:ne}=t;if(!Bn||!ne)return Promise.resolve();const ve=!R&&yb(tl(x.fullPath,0))||(W||!R)&&history.state&&history.state.scroll||null;return lr().then(()=>ne(x,B,ve)).then(re=>re&&bb(re)).catch(re=>S(re,x,B))}const be=x=>s.go(x);let le;const Ae=new Set,rt={currentRoute:l,listening:!0,addRoute:m,removeRoute:v,hasRoute:A,getRoutes:b,resolve:_,options:t,push:J,replace:Y,go:be,back:()=>be(-1),forward:()=>be(1),beforeEach:o.add,beforeResolve:r.add,afterEach:a.add,onError:T.add,isReady:N,install(x){const B=this;x.component("RouterLink",iv),x.component("RouterView",av),x.config.globalProperties.$router=B,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>$e(l)}),Bn&&!le&&l.value===Jt&&(le=!0,J(s.location).catch(ne=>{}));const R={};for(const ne in Jt)R[ne]=Me(()=>l.value[ne]);x.provide(Mr,B),x.provide(kd,ii(R)),x.provide(Go,l);const W=x.unmount;Ae.add(x),x.unmount=function(){Ae.delete(x),Ae.size<1&&(c=Jt,z&&z(),z=null,l.value=Jt,le=!1,V=!1),W()}}};return rt}function Pn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function cv(t,e){const n=[],i=[],s=[],o=Math.max(e.matched.length,t.matched.length);for(let r=0;r<o;r++){const a=e.matched[r];a&&(t.matched.find(c=>Zn(c,a))?i.push(a):n.push(a));const l=t.matched[r];l&&(e.matched.find(c=>Zn(c,l))||s.push(l))}return[n,i,s]}const Xs=Sc("addons",{state:()=>({loading:!0,addons:[],page:1,total:null}),getters:{sortedByName(t){return[...t.addons].sort((e,n)=>{var o,r;if(e.hasUpdate)return-1;const i=e.displayName??e.name,s=n.displayName??n.name;return Number((o=n.enabled)==null?void 0:o.some(a=>a))-Number((r=e.enabled)==null?void 0:r.some(a=>a))+Number(n.installed)-Number(e.installed)+i.localeCompare(s)*.9})}},actions:{getPage(){xt.postMessage("getAddons",{page:this.page}),this.page++},refresh(){this.page=1,xt.postMessage("refreshAddons"),this.getPage()},getAddon(t){return this.addons.find(e=>e.name===t)}}});var Br=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Td={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(Br,function(){var n=1e3,i=6e4,s=36e5,o="millisecond",r="second",a="minute",l="hour",c="day",d="week",u="month",f="quarter",m="year",v="date",b="Invalid Date",A=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,_=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,F={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(L){var I=["th","st","nd","rd"],T=L%100;return"["+L+(I[(T-20)%10]||I[T]||I[0])+"]"}},D=function(L,I,T){var V=String(L);return!V||V.length>=I?L:""+Array(I+1-V.length).join(T)+L},J={s:D,z:function(L){var I=-L.utcOffset(),T=Math.abs(I),V=Math.floor(T/60),S=T%60;return(I<=0?"+":"-")+D(V,2,"0")+":"+D(S,2,"0")},m:function L(I,T){if(I.date()<T.date())return-L(T,I);var V=12*(T.year()-I.year())+(T.month()-I.month()),S=I.clone().add(V,u),N=T-S<0,X=I.clone().add(V+(N?-1:1),u);return+(-(V+(T-S)/(N?S-X:X-S))||0)},a:function(L){return L<0?Math.ceil(L)||0:Math.floor(L)},p:function(L){return{M:u,y:m,w:d,d:c,D:v,h:l,m:a,s:r,ms:o,Q:f}[L]||String(L||"").toLowerCase().replace(/s$/,"")},u:function(L){return L===void 0}},Y="en",te={};te[Y]=F;var ee=function(L){return L instanceof xe},M=function L(I,T,V){var S;if(!I)return Y;if(typeof I=="string"){var N=I.toLowerCase();te[N]&&(S=N),T&&(te[N]=T,S=N);var X=I.split("-");if(!S&&X.length>1)return L(X[0])}else{var ce=I.name;te[ce]=I,S=ce}return!V&&S&&(Y=S),S||!V&&Y},Q=function(L,I){if(ee(L))return L.clone();var T=typeof I=="object"?I:{};return T.date=L,T.args=arguments,new xe(T)},q=J;q.l=M,q.i=ee,q.w=function(L,I){return Q(L,{locale:I.$L,utc:I.$u,x:I.$x,$offset:I.$offset})};var xe=function(){function L(T){this.$L=M(T.locale,null,!0),this.parse(T)}var I=L.prototype;return I.parse=function(T){this.$d=function(V){var S=V.date,N=V.utc;if(S===null)return new Date(NaN);if(q.u(S))return new Date;if(S instanceof Date)return new Date(S);if(typeof S=="string"&&!/Z$/i.test(S)){var X=S.match(A);if(X){var ce=X[2]-1||0,be=(X[7]||"0").substring(0,3);return N?new Date(Date.UTC(X[1],ce,X[3]||1,X[4]||0,X[5]||0,X[6]||0,be)):new Date(X[1],ce,X[3]||1,X[4]||0,X[5]||0,X[6]||0,be)}}return new Date(S)}(T),this.$x=T.x||{},this.init()},I.init=function(){var T=this.$d;this.$y=T.getFullYear(),this.$M=T.getMonth(),this.$D=T.getDate(),this.$W=T.getDay(),this.$H=T.getHours(),this.$m=T.getMinutes(),this.$s=T.getSeconds(),this.$ms=T.getMilliseconds()},I.$utils=function(){return q},I.isValid=function(){return this.$d.toString()!==b},I.isSame=function(T,V){var S=Q(T);return this.startOf(V)<=S&&S<=this.endOf(V)},I.isAfter=function(T,V){return Q(T)<this.startOf(V)},I.isBefore=function(T,V){return this.endOf(V)<Q(T)},I.$g=function(T,V,S){return q.u(T)?this[V]:this.set(S,T)},I.unix=function(){return Math.floor(this.valueOf()/1e3)},I.valueOf=function(){return this.$d.getTime()},I.startOf=function(T,V){var S=this,N=!!q.u(V)||V,X=q.p(T),ce=function(W,ne){var ve=q.w(S.$u?Date.UTC(S.$y,ne,W):new Date(S.$y,ne,W),S);return N?ve:ve.endOf(c)},be=function(W,ne){return q.w(S.toDate()[W].apply(S.toDate("s"),(N?[0,0,0,0]:[23,59,59,999]).slice(ne)),S)},le=this.$W,Ae=this.$M,rt=this.$D,x="set"+(this.$u?"UTC":"");switch(X){case m:return N?ce(1,0):ce(31,11);case u:return N?ce(1,Ae):ce(0,Ae+1);case d:var B=this.$locale().weekStart||0,R=(le<B?le+7:le)-B;return ce(N?rt-R:rt+(6-R),Ae);case c:case v:return be(x+"Hours",0);case l:return be(x+"Minutes",1);case a:return be(x+"Seconds",2);case r:return be(x+"Milliseconds",3);default:return this.clone()}},I.endOf=function(T){return this.startOf(T,!1)},I.$set=function(T,V){var S,N=q.p(T),X="set"+(this.$u?"UTC":""),ce=(S={},S[c]=X+"Date",S[v]=X+"Date",S[u]=X+"Month",S[m]=X+"FullYear",S[l]=X+"Hours",S[a]=X+"Minutes",S[r]=X+"Seconds",S[o]=X+"Milliseconds",S)[N],be=N===c?this.$D+(V-this.$W):V;if(N===u||N===m){var le=this.clone().set(v,1);le.$d[ce](be),le.init(),this.$d=le.set(v,Math.min(this.$D,le.daysInMonth())).$d}else ce&&this.$d[ce](be);return this.init(),this},I.set=function(T,V){return this.clone().$set(T,V)},I.get=function(T){return this[q.p(T)]()},I.add=function(T,V){var S,N=this;T=Number(T);var X=q.p(V),ce=function(Ae){var rt=Q(N);return q.w(rt.date(rt.date()+Math.round(Ae*T)),N)};if(X===u)return this.set(u,this.$M+T);if(X===m)return this.set(m,this.$y+T);if(X===c)return ce(1);if(X===d)return ce(7);var be=(S={},S[a]=i,S[l]=s,S[r]=n,S)[X]||1,le=this.$d.getTime()+T*be;return q.w(le,this)},I.subtract=function(T,V){return this.add(-1*T,V)},I.format=function(T){var V=this,S=this.$locale();if(!this.isValid())return S.invalidDate||b;var N=T||"YYYY-MM-DDTHH:mm:ssZ",X=q.z(this),ce=this.$H,be=this.$m,le=this.$M,Ae=S.weekdays,rt=S.months,x=function(ne,ve,re,h){return ne&&(ne[ve]||ne(V,N))||re[ve].slice(0,h)},B=function(ne){return q.s(ce%12||12,ne,"0")},R=S.meridiem||function(ne,ve,re){var h=ne<12?"AM":"PM";return re?h.toLowerCase():h},W={YY:String(this.$y).slice(-2),YYYY:this.$y,M:le+1,MM:q.s(le+1,2,"0"),MMM:x(S.monthsShort,le,rt,3),MMMM:x(rt,le),D:this.$D,DD:q.s(this.$D,2,"0"),d:String(this.$W),dd:x(S.weekdaysMin,this.$W,Ae,2),ddd:x(S.weekdaysShort,this.$W,Ae,3),dddd:Ae[this.$W],H:String(ce),HH:q.s(ce,2,"0"),h:B(1),hh:B(2),a:R(ce,be,!0),A:R(ce,be,!1),m:String(be),mm:q.s(be,2,"0"),s:String(this.$s),ss:q.s(this.$s,2,"0"),SSS:q.s(this.$ms,3,"0"),Z:X};return N.replace(_,function(ne,ve){return ve||W[ne]||X.replace(":","")})},I.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},I.diff=function(T,V,S){var N,X=q.p(V),ce=Q(T),be=(ce.utcOffset()-this.utcOffset())*i,le=this-ce,Ae=q.m(this,ce);return Ae=(N={},N[m]=Ae/12,N[u]=Ae,N[f]=Ae/3,N[d]=(le-be)/6048e5,N[c]=(le-be)/864e5,N[l]=le/s,N[a]=le/i,N[r]=le/n,N)[X]||le,S?Ae:q.a(Ae)},I.daysInMonth=function(){return this.endOf(u).$D},I.$locale=function(){return te[this.$L]},I.locale=function(T,V){if(!T)return this.$L;var S=this.clone(),N=M(T,V,!0);return N&&(S.$L=N),S},I.clone=function(){return q.w(this.$d,this)},I.toDate=function(){return new Date(this.valueOf())},I.toJSON=function(){return this.isValid()?this.toISOString():null},I.toISOString=function(){return this.$d.toISOString()},I.toString=function(){return this.$d.toUTCString()},L}(),z=xe.prototype;return Q.prototype=z,[["$ms",o],["$s",r],["$m",a],["$H",l],["$W",c],["$M",u],["$y",m],["$D",v]].forEach(function(L){z[L[1]]=function(I){return this.$g(I,L[0],L[1])}}),Q.extend=function(L,I){return L.$i||(L(I,xe,Q),L.$i=!0),Q},Q.locale=M,Q.isDayjs=ee,Q.unix=function(L){return Q(1e3*L)},Q.en=te[Y],Q.Ls=te,Q.p={},Q})})(Td);const Sd=Td.exports;var Id={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(Br,function(){return function(n,i,s){n=n||{};var o=i.prototype,r={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(c,d,u,f){return o.fromToBase(c,d,u,f)}s.en.relativeTime=r,o.fromToBase=function(c,d,u,f,m){for(var v,b,A,_=u.$locale().relativeTime||r,F=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],D=F.length,J=0;J<D;J+=1){var Y=F[J];Y.d&&(v=f?s(c).diff(u,Y.d,!0):u.diff(c,Y.d,!0));var te=(n.rounding||Math.round)(Math.abs(v));if(A=v>0,te<=Y.r||!Y.r){te<=1&&J>0&&(Y=F[J-1]);var ee=_[Y.l];m&&(te=m(""+te)),b=typeof ee=="string"?ee.replace("%d",te):ee(te,d,Y.l,A);break}}if(d)return b;var M=A?_.future:_.past;return typeof M=="function"?M(b):M.replace("%s",b)},o.to=function(c,d){return a(c,d,this,!0)},o.from=function(c,d){return a(c,d,this)};var l=function(c){return c.$u?s.utc():s()};o.toNow=function(c){return this.to(l(this),c)},o.fromNow=function(c){return this.from(l(this),c)}}})})(Id);const dv=Id.exports;var _d={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(Br,function(){var n="minute",i=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(o,r,a){var l=r.prototype;a.utc=function(b){var A={date:b,utc:!0,args:arguments};return new r(A)},l.utc=function(b){var A=a(this.toDate(),{locale:this.$L,utc:!0});return b?A.add(this.utcOffset(),n):A},l.local=function(){return a(this.toDate(),{locale:this.$L,utc:!1})};var c=l.parse;l.parse=function(b){b.utc&&(this.$u=!0),this.$utils().u(b.$offset)||(this.$offset=b.$offset),c.call(this,b)};var d=l.init;l.init=function(){if(this.$u){var b=this.$d;this.$y=b.getUTCFullYear(),this.$M=b.getUTCMonth(),this.$D=b.getUTCDate(),this.$W=b.getUTCDay(),this.$H=b.getUTCHours(),this.$m=b.getUTCMinutes(),this.$s=b.getUTCSeconds(),this.$ms=b.getUTCMilliseconds()}else d.call(this)};var u=l.utcOffset;l.utcOffset=function(b,A){var _=this.$utils().u;if(_(b))return this.$u?0:_(this.$offset)?u.call(this):this.$offset;if(typeof b=="string"&&(b=function(Y){Y===void 0&&(Y="");var te=Y.match(i);if(!te)return null;var ee=(""+te[0]).match(s)||["-",0,0],M=ee[0],Q=60*+ee[1]+ +ee[2];return Q===0?0:M==="+"?Q:-Q}(b),b===null))return this;var F=Math.abs(b)<=16?60*b:b,D=this;if(A)return D.$offset=F,D.$u=b===0,D;if(b!==0){var J=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(D=this.local().add(F+J,n)).$offset=F,D.$x.$localOffset=J}else D=this.utc();return D};var f=l.format;l.format=function(b){var A=b||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return f.call(this,A)},l.valueOf=function(){var b=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*b},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var m=l.toDate;l.toDate=function(b){return b==="s"&&this.$offset?a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():m.call(this)};var v=l.diff;l.diff=function(b,A,_){if(b&&this.$u===b.$u)return v.call(this,b,A,_);var F=this.local(),D=a(b).local();return v.call(F,D,A,_)}}})})(_d);const uv=_d.exports;Sd.extend(dv);Sd.extend(uv);const hv=t=>{const e=["B","KB","MB","GB","TB","PB","EB","ZB","YB"];let n=0;if(t<=1024)return`${t}B`;for(;t>=1024&&n<e.length-1;)t/=1024,n++;return`${t.toFixed(2)} ${e[n]}`},fv={class:"addon"},pv={class:"top"},gv={class:"badges"},mv={key:0,class:"badge"},bv={class:"description truncate"},vv={class:"bottom"},yv={class:"right"},xv={class:"top"},wv={class:"quick-actions"},$v={class:"controls"},Cv=["disabled"],kv=["disabled"],Tv=["disabled"],Sv=["disabled"],Iv=un({__name:"Addon",props:{addon:null},setup(t){const e=t;Ar().register(fd());const n=Xs(),i=`https://github.com/${Qm}/${Jm}/tree/main/${Xm}/${e.addon.name}`,s=Me(()=>e.addon.description??"No description"),o=Me(()=>e.addon.size?hv(e.addon.size):"? B"),r=Me(()=>{var v;return(v=e.addon.enabled)==null?void 0:v.some(b=>b===!1)}),a=Me(()=>{var v;return(v=e.addon.enabled)==null?void 0:v.some(b=>b===!0)}),l=()=>{const v=n.getAddon(e.addon.name);if(!v){console.warn(`Could not lock "${e.addon.name}" addon during operation`);return}v.processing=!0},c=()=>{xt.postMessage("open",{name:e.addon.name})},d=()=>{l(),xt.postMessage("update",{name:e.addon.name})},u=()=>{l(),xt.postMessage("enable",{name:e.addon.name})},f=()=>{l(),xt.postMessage("disable",{name:e.addon.name})},m=()=>{l(),xt.postMessage("uninstall",{name:e.addon.name})};return(v,b)=>(Ne(),Ue("div",fv,[fe("div",null,[fe("div",pv,[fe("h1",null,Dt(t.addon.displayName??t.addon.name),1),fe("span",gv,[t.addon.hasPlugin?(Ne(),Ue("span",mv,[ke(Nt,{icon:"plug"}),xs("Has Plugin")])):tn("",!0)])]),fe("p",bv,Dt($e(s)),1),fe("div",vv,Dt($e(o)),1)]),fe("div",yv,[fe("div",xv,[fe("div",wv,[fe("button",{onClick:c},[ke(Nt,{icon:"folder"})]),fe("a",{href:i,target:"_blank",rel:"nofollow noreferrer noopener external",title:"View on GitHub",class:"github-link"},[ke(Nt,{icon:"github"})])])]),fe("div",$v,[t.addon.hasUpdate?(Ne(),Ue("vscode-button",{key:0,onClick:d,disabled:t.addon.processing}," Update ",8,Cv)):tn("",!0),$e(r)?(Ne(),Ue("vscode-button",{key:1,onClick:u,disabled:t.addon.processing}," Enable ",8,kv)):tn("",!0),$e(a)?(Ne(),Ue("vscode-button",{key:2,onClick:f,appearance:"secondary",disabled:t.addon.processing}," Disable ",8,Tv)):tn("",!0),t.addon.installed?(Ne(),Ue("vscode-button",{key:3,appearance:"secondary",onClick:m,disabled:t.addon.processing}," Uninstall ",8,Sv)):tn("",!0)])])]))}});const _v=t=>(Pu("data-v-75aa3714"),t=t(),Mu(),t),Ev={id:"browse"},Ov={class:"controls"},Av=["disabled"],Rv={key:0},Dv=_v(()=>fe("h2",{class:"text-center"},"Nothing to show 🕳️",-1)),Pv=[Dv],Mv={key:2},Bv={id:"addon-list-count"},Fv=un({__name:"Addons",setup(t){Ar().register(Am(),jm(),lm());const e=Xs(),n=Me(()=>e.sortedByName.filter(d=>{if(i.value.installed&&!d.installed||i.value.enabled&&!(d.enabled??[]).some(u=>u))return!1;if(i.value.regex){const u=new RegExp(`.*${i.value.regex.split("").join(".*")}.*`,"gi");if(!u.test(d.displayName??d.name)&&!u.test(d.name))return!1}return!0})),i=Ri({enabled:!1,installed:!1,regex:""}),s=(l,c)=>{r.value=!1,i.value[c]=l.target.checked},o=()=>{e.loading||(e.addons=[],e.refresh())},r=Ri(!1),a=l=>{r.value=!0;let d=l.target.value;i.value.regex=d.trim()};return ur(()=>e.getPage()),(l,c)=>(Ne(),Ue("div",Ev,[fe("div",Ov,[fe("vscode-text-field",{type:"search",name:"search",autofocus:"true",id:"search",placeholder:"Search",onInput:a},[ke(Nt,{slot:"start",icon:"search"})],32),fe("vscode-checkbox",{onChange:c[0]||(c[0]=d=>s(d,"enabled"))}," Enabled ",32),fe("vscode-checkbox",{onChange:c[1]||(c[1]=d=>s(d,"installed"))},"Installed",32),fe("button",{class:"refresh",disabled:$e(e).loading,onClick:o},[ke(Nt,{icon:"refresh"})],8,Av)]),$e(n).length===0?(Ne(),Ue("div",Rv,Pv)):(Ne(),Ue("div",{key:1,class:qi(["addons",r.value?"noAnimate":""])},[ke(rf,{name:"fade"},{default:Gl(()=>[(Ne(!0),Ue(ht,null,ih($e(n),(d,u)=>(Ne(),hc(Iv,{key:d.name,addon:d,style:_s(`--duration: ${($e(n).length-u)/$e(n).length/3}s
          ;--reverse-duration: ${(u+1)/$e(n).length/3}s`)},null,8,["addon","style"]))),128))]),_:1})],2)),$e(e).loading?(Ne(),Ue("vscode-progress-ring",Mv)):tn("",!0),fe("div",Bv,Dt($e(n).length)+" / "+Dt($e(e).addons.length)+" / "+Dt($e(e).total),1)]))}});const Lv=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},Hv=Lv(Fv,[["__scopeId","data-v-75aa3714"]]),Nv=un({__name:"HomeView",setup(t){return(e,n)=>(Ne(),Ue("main",null,[ke(Hv)]))}}),Vv=lv({history:kb(),routes:[{path:"/",name:"home",component:Nv}]});const gl=t=>{const e=Xs(),{property:n,value:i}=t.data;e[n]=i};var Ed=(t=>(t[t.error=0]="error",t[t.warn=1]="warn",t[t.info=2]="info",t))(Ed||{});const jv=t=>{const e=Wi(),n=t.data.property,i=t.data.value;switch(n){case"workspaceState":e.workspaceOpen=i,i||e.notifications.push({level:Ed.warn,message:"A workspace is not currently open. Addons cannot be enabled/disabled when a workspace is not open!"});break;case"clientVersion":e.clientVersion=i;break;default:console.warn(`Unsupported appStore property "${n}"`);break}},zv=t=>{const e=Xs(),n=Array.isArray(t.data.addons)?t.data.addons:[t.data.addons];e.$patch(i=>{for(const s of n){const o=i.addons.findIndex(r=>r.name===s.name);o>-1?Object.assign(i.addons[o],s):i.addons.push(s)}})},Uv=t=>{Wi().notifications.push(t.data)},qv={localAddonStore:gl,appStore:jv,addAddon:zv,addonStore:gl,notify:Uv},Fr=ff(ob);Fr.use(mf());Fr.use(Vv);Fr.mount("#app");window.addEventListener("message",t=>{const e=t.data,n=e.command;if(!n){console.error("Command field not found in message");return}const i=qv[n];if(!i){console.error(`"${n}" could not be found!`);return}i(e)});const Is=Wi(),ml=xt.getState();ml&&(Is.$state=ml.appStore,Is.notifications=[]);const Wv=()=>{const t={appStore:Is.$state};xt.setState(t)};Is.$subscribe(()=>Wv());
