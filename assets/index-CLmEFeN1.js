var Ky=Object.defineProperty;var Zy=(n,e,t)=>e in n?Ky(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Je=(n,e,t)=>Zy(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Dp(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Gt={},ga=[],Pr=()=>{},x0=()=>!1,xf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),yf=n=>n.startsWith("onUpdate:"),un=Object.assign,Lp=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Jy=Object.prototype.hasOwnProperty,Ut=(n,e)=>Jy.call(n,e),it=Array.isArray,va=n=>fc(n)==="[object Map]",y0=n=>fc(n)==="[object Set]",Fm=n=>fc(n)==="[object Date]",ct=n=>typeof n=="function",jt=n=>typeof n=="string",er=n=>typeof n=="symbol",Dt=n=>n!==null&&typeof n=="object",b0=n=>(Dt(n)||ct(n))&&ct(n.then)&&ct(n.catch),S0=Object.prototype.toString,fc=n=>S0.call(n),Qy=n=>fc(n).slice(8,-1),M0=n=>fc(n)==="[object Object]",bf=n=>jt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,yl=Dp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sf=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},e1=/-\w/g,ii=Sf(n=>n.replace(e1,e=>e.slice(1).toUpperCase())),t1=/\B([A-Z])/g,Oo=Sf(n=>n.replace(t1,"-$1").toLowerCase()),Mf=Sf(n=>n.charAt(0).toUpperCase()+n.slice(1)),$f=Sf(n=>n?`on${Mf(n)}`:""),Er=(n,e)=>!Object.is(n,e),_u=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},E0=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Ip=n=>{const e=parseFloat(n);return isNaN(e)?n:e},n1=n=>{const e=jt(n)?Number(n):NaN;return isNaN(e)?n:e};let km;const Ef=()=>km||(km=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mn(n){if(it(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=jt(i)?o1(i):mn(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(jt(n)||Dt(n))return n}const i1=/;(?![^(]*\))/g,r1=/:([^]+)/,s1=/\/\*[^]*?\*\//g;function o1(n){const e={};return n.replace(s1,"").split(i1).forEach(t=>{if(t){const i=t.split(r1);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Fo(n){let e="";if(jt(n))e=n;else if(it(n))for(let t=0;t<n.length;t++){const i=Fo(n[t]);i&&(e+=i+" ")}else if(Dt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const a1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",l1=Dp(a1);function T0(n){return!!n||n===""}function c1(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Np(n[i],e[i]);return t}function Np(n,e){if(n===e)return!0;let t=Fm(n),i=Fm(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=er(n),i=er(e),t||i)return n===e;if(t=it(n),i=it(e),t||i)return t&&i?c1(n,e):!1;if(t=Dt(n),i=Dt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Np(n[o],e[o]))return!1}}return String(n)===String(e)}const w0=n=>!!(n&&n.__v_isRef===!0),Pe=n=>jt(n)?n:n==null?"":it(n)||Dt(n)&&(n.toString===S0||!ct(n.toString))?w0(n)?Pe(n.value):JSON.stringify(n,A0,2):String(n),A0=(n,e)=>w0(e)?A0(n,e.value):va(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Yf(i,s)+" =>"]=r,t),{})}:y0(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Yf(t))}:er(e)?Yf(e):Dt(e)&&!it(e)&&!M0(e)?String(e):e,Yf=(n,e="")=>{var t;return er(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xn;class C0{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&xn&&(xn.active?(this.parent=xn,this.index=(xn.scopes||(xn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=xn;try{return xn=this,e()}finally{xn=t}}}on(){++this._on===1&&(this.prevScope=xn,xn=this)}off(){if(this._on>0&&--this._on===0){if(xn===this)xn=this.prevScope;else{let e=xn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function R0(n){return new C0(n)}function Up(){return xn}function P0(n,e=!1){xn&&xn.cleanups.push(n)}let Wt;const qf=new WeakSet;class D0{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xn&&(xn.active?xn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qf.has(this)&&(qf.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||I0(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bm(this),N0(this);const e=Wt,t=cr;Wt=this,cr=!0;try{return this.fn()}finally{U0(this),Wt=e,cr=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)kp(e);this.deps=this.depsTail=void 0,Bm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qf.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){id(this)&&this.run()}get dirty(){return id(this)}}let L0=0,bl,Sl;function I0(n,e=!1){if(n.flags|=8,e){n.next=Sl,Sl=n;return}n.next=bl,bl=n}function Op(){L0++}function Fp(){if(--L0>0)return;if(Sl){let e=Sl;for(Sl=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;bl;){let e=bl;for(bl=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function N0(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function U0(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),kp(i),u1(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function id(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(O0(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function O0(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Hl)||(n.globalVersion=Hl,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!id(n))))return;n.flags|=2;const e=n.dep,t=Wt,i=cr;Wt=n,cr=!0;try{N0(n);const r=n.fn(n._value);(e.version===0||Er(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Wt=t,cr=i,U0(n),n.flags&=-3}}function kp(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)kp(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function u1(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let cr=!0;const F0=[];function is(){F0.push(cr),cr=!1}function rs(){const n=F0.pop();cr=n===void 0?!0:n}function Bm(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Wt;Wt=void 0;try{e()}finally{Wt=t}}}let Hl=0;class f1{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Tf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Wt||!cr||Wt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Wt)t=this.activeLink=new f1(Wt,this),Wt.deps?(t.prevDep=Wt.depsTail,Wt.depsTail.nextDep=t,Wt.depsTail=t):Wt.deps=Wt.depsTail=t,k0(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Wt.depsTail,t.nextDep=void 0,Wt.depsTail.nextDep=t,Wt.depsTail=t,Wt.deps===t&&(Wt.deps=i)}return t}trigger(e){this.version++,Hl++,this.notify(e)}notify(e){Op();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Fp()}}}function k0(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)k0(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ou=new WeakMap,yo=Symbol(""),rd=Symbol(""),Vl=Symbol("");function Fn(n,e,t){if(cr&&Wt){let i=Ou.get(n);i||Ou.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Tf),r.map=i,r.key=t),r.track()}}function Yr(n,e,t,i,r,s){const o=Ou.get(n);if(!o){Hl++;return}const a=l=>{l&&l.trigger()};if(Op(),e==="clear")o.forEach(a);else{const l=it(n),c=l&&bf(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Vl||!er(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Vl)),e){case"add":l?c&&a(o.get("length")):(a(o.get(yo)),va(n)&&a(o.get(rd)));break;case"delete":l||(a(o.get(yo)),va(n)&&a(o.get(rd)));break;case"set":va(n)&&a(o.get(yo));break}}Fp()}function h1(n,e){const t=Ou.get(n);return t&&t.get(e)}function zo(n){const e=Ct(n);return e===n?e:(Fn(e,"iterate",Vl),Ii(n)?e:e.map(hr))}function wf(n){return Fn(n=Ct(n),"iterate",Vl),n}function br(n,e){return ss(n)?Ra(Qr(n)?hr(e):e):hr(e)}const d1={__proto__:null,[Symbol.iterator](){return jf(this,Symbol.iterator,n=>br(this,n))},concat(...n){return zo(this).concat(...n.map(e=>it(e)?zo(e):e))},entries(){return jf(this,"entries",n=>(n[1]=br(this,n[1]),n))},every(n,e){return Nr(this,"every",n,e,void 0,arguments)},filter(n,e){return Nr(this,"filter",n,e,t=>t.map(i=>br(this,i)),arguments)},find(n,e){return Nr(this,"find",n,e,t=>br(this,t),arguments)},findIndex(n,e){return Nr(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Nr(this,"findLast",n,e,t=>br(this,t),arguments)},findLastIndex(n,e){return Nr(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Nr(this,"forEach",n,e,void 0,arguments)},includes(...n){return Kf(this,"includes",n)},indexOf(...n){return Kf(this,"indexOf",n)},join(n){return zo(this).join(n)},lastIndexOf(...n){return Kf(this,"lastIndexOf",n)},map(n,e){return Nr(this,"map",n,e,void 0,arguments)},pop(){return Ya(this,"pop")},push(...n){return Ya(this,"push",n)},reduce(n,...e){return zm(this,"reduce",n,e)},reduceRight(n,...e){return zm(this,"reduceRight",n,e)},shift(){return Ya(this,"shift")},some(n,e){return Nr(this,"some",n,e,void 0,arguments)},splice(...n){return Ya(this,"splice",n)},toReversed(){return zo(this).toReversed()},toSorted(n){return zo(this).toSorted(n)},toSpliced(...n){return zo(this).toSpliced(...n)},unshift(...n){return Ya(this,"unshift",n)},values(){return jf(this,"values",n=>br(this,n))}};function jf(n,e,t){const i=wf(n),r=i[e]();return i!==n&&!Ii(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const p1=Array.prototype;function Nr(n,e,t,i,r,s){const o=wf(n),a=o!==n&&!Ii(n),l=o[e];if(l!==p1[e]){const f=l.apply(n,s);return a?hr(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,br(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function zm(n,e,t,i){const r=wf(n),s=r!==n&&!Ii(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=br(n,c)),t.call(this,c,br(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](o,...i);return a?br(n,l):l}function Kf(n,e,t){const i=Ct(n);Fn(i,"iterate",Vl);const r=i[e](...t);return(r===-1||r===!1)&&Cf(t[0])?(t[0]=Ct(t[0]),i[e](...t)):r}function Ya(n,e,t=[]){is(),Op();const i=Ct(n)[e].apply(n,t);return Fp(),rs(),i}const m1=Dp("__proto__,__v_isRef,__isVue"),B0=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(er));function _1(n){er(n)||(n=String(n));const e=Ct(this);return Fn(e,"has",n),e.hasOwnProperty(n)}class z0{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?w1:W0:s?G0:V0).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=it(e);if(!r){let l;if(o&&(l=d1[t]))return l;if(t==="hasOwnProperty")return _1}const a=Reflect.get(e,t,Qt(e)?e:i);if((er(t)?B0.has(t):m1(t))||(r||Fn(e,"get",t),s))return a;if(Qt(a)){const l=o&&bf(t)?a:a.value;return r&&Dt(l)?Gl(l):l}return Dt(a)?r?Gl(a):Af(a):a}}class H0 extends z0{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=it(e)&&bf(t);if(!this._isShallow){const c=ss(s);if(!Ii(i)&&!ss(i)&&(s=Ct(s),i=Ct(i)),!o&&Qt(s)&&!Qt(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:Ut(e,t),l=Reflect.set(e,t,i,Qt(e)?e:r);return e===Ct(r)&&l&&(a?Er(i,s)&&Yr(e,"set",t,i):Yr(e,"add",t,i)),l}deleteProperty(e,t){const i=Ut(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Yr(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!er(t)||!B0.has(t))&&Fn(e,"has",t),i}ownKeys(e){return Fn(e,"iterate",it(e)?"length":yo),Reflect.ownKeys(e)}}class g1 extends z0{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const v1=new H0,x1=new g1,y1=new H0(!0);const sd=n=>n,bc=n=>Reflect.getPrototypeOf(n);function b1(n,e,t){return function(...i){const r=this.__v_raw,s=Ct(r),o=va(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?sd:e?Ra:hr;return!e&&Fn(s,"iterate",l?rd:yo),un(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Sc(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function S1(n,e){const t={get(r){const s=this.__v_raw,o=Ct(s),a=Ct(r);n||(Er(r,a)&&Fn(o,"get",r),Fn(o,"get",a));const{has:l}=bc(o),c=e?sd:n?Ra:hr;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Fn(Ct(r),"iterate",yo),r.size},has(r){const s=this.__v_raw,o=Ct(s),a=Ct(r);return n||(Er(r,a)&&Fn(o,"has",r),Fn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Ct(a),c=e?sd:n?Ra:hr;return!n&&Fn(l,"iterate",yo),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return un(t,n?{add:Sc("add"),set:Sc("set"),delete:Sc("delete"),clear:Sc("clear")}:{add(r){const s=Ct(this),o=bc(s),a=Ct(r),l=!e&&!Ii(r)&&!ss(r)?a:r;return o.has.call(s,l)||Er(r,l)&&o.has.call(s,r)||Er(a,l)&&o.has.call(s,a)||(s.add(l),Yr(s,"add",l,l)),this},set(r,s){!e&&!Ii(s)&&!ss(s)&&(s=Ct(s));const o=Ct(this),{has:a,get:l}=bc(o);let c=a.call(o,r);c||(r=Ct(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Er(s,u)&&Yr(o,"set",r,s):Yr(o,"add",r,s),this},delete(r){const s=Ct(this),{has:o,get:a}=bc(s);let l=o.call(s,r);l||(r=Ct(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Yr(s,"delete",r,void 0),c},clear(){const r=Ct(this),s=r.size!==0,o=r.clear();return s&&Yr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=b1(r,n,e)}),t}function Bp(n,e){const t=S1(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ut(t,r)&&r in i?t:i,r,s)}const M1={get:Bp(!1,!1)},E1={get:Bp(!1,!0)},T1={get:Bp(!0,!1)};const V0=new WeakMap,G0=new WeakMap,W0=new WeakMap,w1=new WeakMap;function A1(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Af(n){return ss(n)?n:zp(n,!1,v1,M1,V0)}function C1(n){return zp(n,!1,y1,E1,G0)}function Gl(n){return zp(n,!0,x1,T1,W0)}function zp(n,e,t,i,r){if(!Dt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const o=A1(Qy(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Qr(n){return ss(n)?Qr(n.__v_raw):!!(n&&n.__v_isReactive)}function ss(n){return!!(n&&n.__v_isReadonly)}function Ii(n){return!!(n&&n.__v_isShallow)}function Cf(n){return n?!!n.__v_raw:!1}function Ct(n){const e=n&&n.__v_raw;return e?Ct(e):n}function Hp(n){return!Ut(n,"__v_skip")&&Object.isExtensible(n)&&E0(n,"__v_skip",!0),n}const hr=n=>Dt(n)?Af(n):n,Ra=n=>Dt(n)?Gl(n):n;function Qt(n){return n?n.__v_isRef===!0:!1}function dt(n){return X0(n,!1)}function Ml(n){return X0(n,!0)}function X0(n,e){return Qt(n)?n:new R1(n,e)}class R1{constructor(e,t){this.dep=new Tf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ct(e),this._value=t?e:hr(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Ii(e)||ss(e);e=i?e:Ct(e),Er(e,t)&&(this._rawValue=e,this._value=i?e:hr(e),this.dep.trigger())}}function ce(n){return Qt(n)?n.value:n}function Rs(n){return ct(n)?n():ce(n)}const P1={get:(n,e,t)=>e==="__v_raw"?n:ce(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Qt(r)&&!Qt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function $0(n){return Qr(n)?n:new Proxy(n,P1)}class D1{constructor(e){this.__v_isRef=!0,this._value=void 0;const t=this.dep=new Tf,{get:i,set:r}=e(t.track.bind(t),t.trigger.bind(t));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function L1(n){return new D1(n)}function I1(n){const e=it(n)?new Array(n.length):{};for(const t in n)e[t]=Y0(n,t);return e}class N1{constructor(e,t,i){this._object=e,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=er(t)?t:String(t),this._raw=Ct(e);let r=!0,s=e;if(!it(e)||er(this._key)||!bf(this._key))do r=!Cf(s)||Ii(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=ce(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Qt(this._raw[this._key])){const t=this._object[this._key];if(Qt(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return h1(this._raw,this._key)}}class U1{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function O1(n,e,t){return Qt(n)?n:ct(n)?new U1(n):Dt(n)&&arguments.length>1?Y0(n,e,t):dt(n)}function Y0(n,e,t){return new N1(n,e,t)}class F1{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Tf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hl-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Wt!==this)return I0(this,!0),!0}get value(){const e=this.dep.track();return O0(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function k1(n,e,t=!1){let i,r;return ct(n)?i=n:(i=n.get,r=n.set),new F1(i,r,t)}const Mc={},Fu=new WeakMap;let so;function B1(n,e=!1,t=so){if(t){let i=Fu.get(t);i||Fu.set(t,i=[]),i.push(n)}}function z1(n,e,t=Gt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=v=>r?v:Ii(v)||r===!1||r===0?qr(v,1):qr(v);let u,f,h,d,_=!1,g=!1;if(Qt(n)?(f=()=>n.value,_=Ii(n)):Qr(n)?(f=()=>c(n),_=!0):it(n)?(g=!0,_=n.some(v=>Qr(v)||Ii(v)),f=()=>n.map(v=>{if(Qt(v))return v.value;if(Qr(v))return c(v);if(ct(v))return l?l(v,2):v()})):ct(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){is();try{h()}finally{rs()}}const v=so;so=u;try{return l?l(n,3,[d]):n(d)}finally{so=v}}:f=Pr,e&&r){const v=f,w=r===!0?1/0:r;f=()=>qr(v(),w)}const m=Up(),p=()=>{u.stop(),m&&m.active&&Lp(m.effects,u)};if(s&&e){const v=e;e=(...w)=>{const R=v(...w);return p(),R}}let S=g?new Array(n.length).fill(Mc):Mc;const b=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const w=u.run();if(v||r||_||(g?w.some((R,T)=>Er(R,S[T])):Er(w,S))){h&&h();const R=so;so=u;try{const T=[w,S===Mc?void 0:g&&S[0]===Mc?[]:S,d];S=w,l?l(e,3,T):e(...T)}finally{so=R}}}else u.run()};return a&&a(b),u=new D0(f),u.scheduler=o?()=>o(b,!1):b,d=v=>B1(v,!1,u),h=u.onStop=()=>{const v=Fu.get(u);if(v){if(l)l(v,4);else for(const w of v)w();Fu.delete(u)}},e?i?b(!0):S=u.run():o?o(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function qr(n,e=1/0,t){if(e<=0||!Dt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Qt(n))qr(n.value,e,t);else if(it(n))for(let i=0;i<n.length;i++)qr(n[i],e,t);else if(y0(n)||va(n))n.forEach(i=>{qr(i,e,t)});else if(M0(n)){for(const i in n)qr(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&qr(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hc(n,e,t,i){try{return i?n(...i):n()}catch(r){Rf(r,e,t)}}function tr(n,e,t,i){if(ct(n)){const r=hc(n,e,t,i);return r&&b0(r)&&r.catch(s=>{Rf(s,e,t)}),r}if(it(n)){const r=[];for(let s=0;s<n.length;s++)r.push(tr(n[s],e,t,i));return r}}function Rf(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Gt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){is(),hc(s,null,10,[n,l,c]),rs();return}}H1(n,t,r,i,o)}function H1(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const ei=[];let vr=-1;const xa=[];let Ss=null,la=0;const q0=Promise.resolve();let ku=null;function dr(n){const e=ku||q0;return n?e.then(this?n.bind(this):n):e}function V1(n){let e=vr+1,t=ei.length;for(;e<t;){const i=e+t>>>1,r=ei[i],s=Wl(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Vp(n){if(!(n.flags&1)){const e=Wl(n),t=ei[ei.length-1];!t||!(n.flags&2)&&e>=Wl(t)?ei.push(n):ei.splice(V1(e),0,n),n.flags|=1,j0()}}function j0(){ku||(ku=q0.then(Z0))}function G1(n){if(!it(n))Ss&&n.id===-1?Ss.splice(la+1,0,n):n.flags&1||(xa.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)xa.push(n[e]);j0()}function Hm(n,e,t=vr+1){for(;t<ei.length;t++){const i=ei[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;ei.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function K0(n){if(xa.length){const e=[...new Set(xa)].sort((t,i)=>Wl(t)-Wl(i));if(xa.length=0,Ss){for(let t=0;t<e.length;t++)Ss.push(e[t]);return}for(Ss=e,la=0;la<Ss.length;la++){const t=Ss[la];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ss=null,la=0}}const Wl=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Z0(n){try{for(vr=0;vr<ei.length;vr++){const e=ei[vr];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),hc(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;vr<ei.length;vr++){const e=ei[vr];e&&(e.flags&=-2)}vr=-1,ei.length=0,K0(),ku=null,(ei.length||xa.length)&&Z0()}}let Ri=null,J0=null;function Bu(n){const e=Ri;return Ri=n,J0=n&&n.type.__scopeId||null,e}function Gp(n,e=Ri,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Gu(-1);const s=Bu(e),o=So.length;let a;try{a=n(...r)}finally{for(let l=So.length;l>o;l--)Tv();Bu(s),i._d&&Gu(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Vm(n,e){if(Ri===null)return n;const t=Uf(Ri),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=Gt]=e[r];s&&(ct(s)&&(s={mounted:s,updated:s}),s.deep&&qr(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ys(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(is(),tr(l,t,8,[n.el,a,n,e]),rs())}}function W1(n,e){if(kn){let t=kn.provides;const i=kn.parent&&kn.parent.provides;i===t&&(t=kn.provides=Object.create(i)),t[n]=e}}function ya(n,e,t=!1){const i=Ha();if(i||bo){let r=bo?bo._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ct(e)?e.call(i&&i.proxy):e}}function Wp(){return!!(Ha()||bo)}const X1=Symbol.for("v-scx"),$1=()=>ya(X1);function Q0(n,e){return Xp(n,null,e)}function es(n,e,t){return Xp(n,e,t)}function Xp(n,e,t=Gt){const{immediate:i,deep:r,flush:s,once:o}=t,a=un({},t),l=e&&i||!e&&s!=="post";let c;if(jl){if(s==="sync"){const d=$1();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Pr,d.resume=Pr,d.pause=Pr,d}}const u=kn;a.call=(d,_,g)=>tr(d,u,_,g);let f=!1;s==="post"?a.scheduler=d=>{ci(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,_)=>{_?d():Vp(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=z1(n,e,a);return jl&&(c?c.push(h):l&&h()),h}function Y1(n,e,t){const i=this.proxy,r=jt(n)?n.includes(".")?ev(i,n):()=>i[n]:n.bind(i,i);let s;ct(e)?s=e:(s=e.handler,t=e);const o=dc(this),a=Xp(r,s.bind(i),t);return o(),a}function ev(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const q1=Symbol("_vte"),Pf=n=>n.__isTeleport,Xi=Symbol("_leaveCb"),qa=Symbol("_enterCb");function j1(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ri(()=>{n.isMounted=!0}),pr(()=>{n.isUnmounting=!0}),n}const Hi=[Function,Array],tv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Hi,onEnter:Hi,onAfterEnter:Hi,onEnterCancelled:Hi,onBeforeLeave:Hi,onLeave:Hi,onAfterLeave:Hi,onLeaveCancelled:Hi,onBeforeAppear:Hi,onAppear:Hi,onAfterAppear:Hi,onAppearCancelled:Hi},nv=n=>{const e=n.subTree;return e.component?nv(e.component):e},K1={name:"BaseTransition",props:tv,setup(n,{slots:e}){const t=Ha(),i=j1();return()=>{const r=e.default&&sv(e.default(),!0),s=r&&r.length?iv(r):t.subTree?Fs():void 0;if(!s)return;const o=Ct(n),{mode:a}=o;if(i.isLeaving)return Zf(s);const l=zu(s);if(!l)return Zf(s);let c=od(l,o,i,t,f=>c=f);l.type!==ti&&Xl(l,c);let u=t.subTree&&zu(t.subTree);if(u&&u.type!==ti&&!fo(u,l)&&nv(t).type!==ti){let f=od(u,o,i,t);if(Xl(u,f),a==="out-in"&&l.type!==ti)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},Zf(s);a==="in-out"&&l.type!==ti?f.delayLeave=(h,d,_)=>{const g=rv(i,u);g[String(u.key)]=u,h[Xi]=()=>{d(),h[Xi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function iv(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==ti){e=t;break}}return e}const Z1=K1;function rv(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function od(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:m,onAppear:p,onAfterAppear:S,onAppearCancelled:b}=e,v=String(n.key),w=rv(t,n),R=(y,x)=>{y&&tr(y,i,9,x)},T=(y,x)=>{const N=x[1];R(y,x),it(y)?y.every(L=>L.length<=1)&&N():y.length<=1&&N()},P={mode:o,persisted:a,beforeEnter(y){let x=l;if(!t.isMounted)if(s)x=m||l;else return;y[Xi]&&y[Xi](!0);const N=w[v];N&&fo(n,N)&&N.el[Xi]&&N.el[Xi](),R(x,[y])},enter(y){if(w[v]===n)return;let x=c,N=u,L=f;if(!t.isMounted)if(s)x=p||c,N=S||u,L=b||f;else return;let B=!1;y[qa]=j=>{B||(B=!0,j?R(L,[y]):R(N,[y]),P.delayedLeave&&P.delayedLeave(),y[qa]=void 0)};const F=y[qa].bind(null,!1);x?T(x,[y,F]):F()},leave(y,x){const N=String(n.key);if(y[qa]&&y[qa](!0),t.isUnmounting)return x();R(h,[y]);let L=!1;y[Xi]=F=>{L||(L=!0,x(),F?R(g,[y]):R(_,[y]),y[Xi]=void 0,w[N]===n&&delete w[N])};const B=y[Xi].bind(null,!1);w[N]=n,d?T(d,[y,B]):B()},clone(y){const x=od(y,e,t,i,r);return r&&r(x),x}};return P}function Zf(n){if(Df(n))return n=Os(n),n.children=null,n}function zu(n){if(!Df(n))return Pf(n.type)&&n.children?iv(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ct(t.default))return t.default()}}function Xl(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Xl(Pf(t.type)&&zu(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function sv(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Rt?(o.patchFlag&128&&r++,i=i.concat(sv(o.children,e,a))):(e||o.type!==ti)&&i.push(a!=null?Os(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function ki(n,e){return ct(n)?un({name:n.name},e,{setup:n}):n}function ov(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Gm(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Hu=new WeakMap;function El(n,e,t,i,r=!1){if(it(n)){n.forEach((g,m)=>El(g,e&&(it(e)?e[m]:e),t,i,r));return}if(Tl(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&El(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Uf(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Gt?a.refs={}:a.refs,f=a.setupState,h=Ct(f),d=f===Gt?x0:g=>Gm(u,g)?!1:Ut(h,g),_=(g,m)=>!(m&&Gm(u,m));if(c!=null&&c!==l){if(Wm(e),jt(c))u[c]=null,d(c)&&(f[c]=null);else if(Qt(c)){const g=e;_(c,g.k)&&(c.value=null),g.k&&(u[g.k]=null)}}if(ct(l))hc(l,a,12,[o,u]);else{const g=jt(l),m=Qt(l);if(g||m){const p=()=>{if(n.f){const S=g?d(l)?f[l]:u[l]:_()||!n.k?l.value:u[n.k];if(r)it(S)&&Lp(S,s);else if(it(S))S.includes(s)||S.push(s);else if(g)u[l]=[s],d(l)&&(f[l]=u[l]);else{const b=[s];_(l,n.k)&&(l.value=b),n.k&&(u[n.k]=b)}}else g?(u[l]=o,d(l)&&(f[l]=o)):m&&(_(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const S=()=>{p(),Hu.delete(n)};S.id=-1,Hu.set(n,S),ci(S,t)}else Wm(n),p()}}}function Wm(n){const e=Hu.get(n);e&&(e.flags|=8,Hu.delete(n))}Ef().requestIdleCallback;Ef().cancelIdleCallback;const Tl=n=>!!n.type.__asyncLoader,Df=n=>n.type.__isKeepAlive;function J1(n,e){av(n,"a",e)}function Q1(n,e){av(n,"da",e)}function av(n,e,t=kn){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Lf(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Df(r.parent.vnode)&&eb(i,e,t,r),r=r.parent}}function eb(n,e,t,i){const r=Lf(e,n,i,!0);$p(()=>{Lp(i[e],r)},t)}function Lf(n,e,t=kn,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{is();const a=dc(t),l=tr(e,t,n,o);return a(),rs(),l});return i?r.unshift(s):r.push(s),s}}const cs=n=>(e,t=kn)=>{(!jl||n==="sp")&&Lf(n,(...i)=>e(...i),t)},tb=cs("bm"),ri=cs("m"),nb=cs("bu"),ib=cs("u"),pr=cs("bum"),$p=cs("um"),rb=cs("sp"),sb=cs("rtg"),ob=cs("rtc");function ab(n,e=kn){Lf("ec",n,e)}const lb="components",lv=Symbol.for("v-ndc");function $l(n){return jt(n)?cb(lb,n,!1)||n:n||lv}function cb(n,e,t=!0,i=!1){const r=Ri||kn;if(r){const s=r.type;{const a=$b(s,!1);if(a&&(a===e||a===ii(e)||a===Mf(ii(e))))return s}const o=Xm(r[n]||s[n],e)||Xm(r.appContext[n],e);return!o&&i?s:o}}function Xm(n,e){return n&&(n[e]||n[ii(e)]||n[Mf(ii(e))])}function an(n,e,t,i){let r;const s=t,o=it(n);if(o||jt(n)){const a=o&&Qr(n);let l=!1,c=!1;a&&(l=!Ii(n),c=ss(n),n=wf(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?Ra(hr(n[u])):hr(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(Dt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const ad=n=>n?Cv(n)?Uf(n):ad(n.parent):null,wl=un(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ad(n.parent),$root:n=>ad(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Yp(n),$forceUpdate:n=>n.f||(n.f=()=>{Vp(n.update)}),$nextTick:n=>n.n||(n.n=dr.bind(n.proxy)),$watch:n=>Y1.bind(n)}),Jf=(n,e)=>n!==Gt&&!n.__isScriptSetup&&Ut(n,e),ub={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Jf(i,e))return o[e]=1,i[e];if(r!==Gt&&Ut(r,e))return o[e]=2,r[e];if(Ut(s,e))return o[e]=3,s[e];if(t!==Gt&&Ut(t,e))return o[e]=4,t[e];ld&&(o[e]=0)}}const c=wl[e];let u,f;if(c)return e==="$attrs"&&Fn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Gt&&Ut(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Ut(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Jf(r,e)?(r[e]=t,!0):i!==Gt&&Ut(i,e)?(i[e]=t,!0):Ut(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==Gt&&a[0]!=="$"&&Ut(n,a)||Jf(e,a)||Ut(s,a)||Ut(i,a)||Ut(wl,a)||Ut(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ut(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function $m(n){return it(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ld=!0;function fb(n){const e=Yp(n),t=n.proxy,i=n.ctx;ld=!1,e.beforeCreate&&Ym(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:S,destroyed:b,unmounted:v,render:w,renderTracked:R,renderTriggered:T,errorCaptured:P,serverPrefetch:y,expose:x,inheritAttrs:N,components:L,directives:B,filters:F}=e;if(c&&hb(c,i,null),o)for(const $ in o){const W=o[$];ct(W)&&(i[$]=W.bind(t))}if(r){const $=r.call(t,t);Dt($)&&(n.data=Af($))}if(ld=!0,s)for(const $ in s){const W=s[$],me=ct(W)?W.bind(t,t):ct(W.get)?W.get.bind(t,t):Pr,O=!ct(W)&&ct(W.set)?W.set.bind(t):Pr,ye=An({get:me,set:O});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>ye.value,set:ze=>ye.value=ze})}if(a)for(const $ in a)cv(a[$],i,t,$);if(l){const $=ct(l)?l.call(t):l;Reflect.ownKeys($).forEach(W=>{W1(W,$[W])})}u&&Ym(u,n,"c");function X($,W){it(W)?W.forEach(me=>$(me.bind(t))):W&&$(W.bind(t))}if(X(tb,f),X(ri,h),X(nb,d),X(ib,_),X(J1,g),X(Q1,m),X(ab,P),X(ob,R),X(sb,T),X(pr,S),X($p,v),X(rb,y),it(x))if(x.length){const $=n.exposed||(n.exposed={});x.forEach(W=>{Object.defineProperty($,W,{get:()=>t[W],set:me=>t[W]=me,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===Pr&&(n.render=w),N!=null&&(n.inheritAttrs=N),L&&(n.components=L),B&&(n.directives=B),y&&ov(n)}function hb(n,e,t=Pr){it(n)&&(n=cd(n));for(const i in n){const r=n[i];let s;Dt(r)?"default"in r?s=ya(r.from||i,r.default,!0):s=ya(r.from||i):s=ya(r),Qt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Ym(n,e,t){tr(it(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function cv(n,e,t,i){let r=i.includes(".")?ev(t,i):()=>t[i];if(jt(n)){const s=e[n];ct(s)&&es(r,s)}else if(ct(n))es(r,n.bind(t));else if(Dt(n))if(it(n))n.forEach(s=>cv(s,e,t,i));else{const s=ct(n.handler)?n.handler.bind(t):e[n.handler];ct(s)&&es(r,s,n)}}function Yp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Vu(l,c,o,!0)),Vu(l,e,o)),Dt(e)&&s.set(e,l),l}function Vu(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Vu(n,s,t,!0),r&&r.forEach(o=>Vu(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=db[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const db={data:qm,props:jm,emits:jm,methods:cl,computed:cl,beforeCreate:$n,created:$n,beforeMount:$n,mounted:$n,beforeUpdate:$n,updated:$n,beforeDestroy:$n,beforeUnmount:$n,destroyed:$n,unmounted:$n,activated:$n,deactivated:$n,errorCaptured:$n,serverPrefetch:$n,components:cl,directives:cl,watch:mb,provide:qm,inject:pb};function qm(n,e){return e?n?function(){return un(ct(n)?n.call(this,this):n,ct(e)?e.call(this,this):e)}:e:n}function pb(n,e){return cl(cd(n),cd(e))}function cd(n){if(it(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function $n(n,e){return n?[...new Set([].concat(n,e))]:e}function cl(n,e){return n?un(Object.create(null),n,e):e}function jm(n,e){return n?it(n)&&it(e)?[...new Set([...n,...e])]:un(Object.create(null),$m(n),$m(e??{})):e}function mb(n,e){if(!n)return e;if(!e)return n;const t=un(Object.create(null),n);for(const i in e)t[i]=$n(n[i],e[i]);return t}function uv(){return{app:null,config:{isNativeTag:x0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _b=0;function gb(n,e){return function(i,r=null){ct(i)||(i=un({},i)),r!=null&&!Dt(r)&&(r=null);const s=uv(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:_b++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:qb,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&ct(u.install)?(o.add(u),u.install(c,...f)):ct(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||$e(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(d,u):n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Uf(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(tr(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=bo;bo=c;try{return u()}finally{bo=f}}};return c}}let bo=null;const vb=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ii(e)}Modifiers`]||n[`${Oo(e)}Modifiers`];function xb(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Gt;let r=t;const s=e.startsWith("update:"),o=s&&vb(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>jt(u)?u.trim():u)),o.number&&(r=t.map(Ip)));let a,l=i[a=$f(e)]||i[a=$f(ii(e))];!l&&s&&(l=i[a=$f(Oo(e))]),l&&tr(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,tr(c,n,6,r)}}const yb=new WeakMap;function fv(n,e,t=!1){const i=t?yb:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!ct(n)){const l=c=>{const u=fv(c,e,!0);u&&(a=!0,un(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(Dt(n)&&i.set(n,null),null):(it(s)?s.forEach(l=>o[l]=null):un(o,s),Dt(n)&&i.set(n,o),o)}function If(n,e){return!n||!xf(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Ut(n,e[0].toLowerCase()+e.slice(1))||Ut(n,Oo(e))||Ut(n,e))}function Qf(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:g}=n,m=Bu(n);let p,S;try{if(t.shapeFlag&4){const v=r||i,w=v;p=Sr(c.call(w,v,u,f,d,h,_)),S=a}else{const v=e;p=Sr(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),S=e.props?a:bb(a)}}catch(v){So.length=0,Rf(v,n,1),p=$e(ti)}let b=p;if(S&&g!==!1){const v=Object.keys(S),{shapeFlag:w}=b;v.length&&w&7&&(s&&v.some(yf)&&(S=Sb(S,s)),b=Os(b,S,!1,!0))}if(t.dirs&&(b=Os(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition){const v=Pf(b.type)&&zu(b)||b;Xl(v,t.transition)}return p=b,Bu(m),p}const bb=n=>{let e;for(const t in n)(t==="class"||t==="style"||xf(t))&&((e||(e={}))[t]=n[t]);return e},Sb=(n,e)=>{const t={};for(const i in n)(!yf(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Mb(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Km(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(hv(o,i,h)&&!If(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Km(i,o,c):!0:!!o;return!1}function Km(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(hv(e,n,s)&&!If(t,s))return!0}return!1}function hv(n,e,t){const i=n[t],r=e[t];return t==="style"&&Dt(i)&&Dt(r)?!Np(i,r):i!==r}function Eb({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const dv={},pv=()=>Object.create(dv),mv=n=>Object.getPrototypeOf(n)===dv;function Tb(n,e,t,i=!1){const r={},s=pv();n.propsDefaults=Object.create(null),_v(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:C1(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function wb(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ct(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(If(n.emitsOptions,h))continue;const d=e[h];if(l)if(Ut(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const _=ii(h);r[_]=ud(l,a,_,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{_v(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ut(e,f)&&((u=Oo(f))===f||!Ut(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ud(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ut(e,f))&&(delete s[f],c=!0)}c&&Yr(n.attrs,"set","")}function _v(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(yl(l))continue;const c=e[l];let u;r&&Ut(r,u=ii(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:If(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ct(t),c=a||Gt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ud(r,l,f,c[f],n,!Ut(c,f))}}return o}function ud(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ut(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ct(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=dc(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Oo(t))&&(i=!0))}return i}const Ab=new WeakMap;function gv(n,e,t=!1){const i=t?Ab:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!ct(n)){const u=f=>{l=!0;const[h,d]=gv(f,e,!0);un(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Dt(n)&&i.set(n,ga),ga;if(it(s))for(let u=0;u<s.length;u++){const f=ii(s[u]);Zm(f)&&(o[f]=Gt)}else if(s)for(const u in s){const f=ii(u);if(Zm(f)){const h=s[u],d=o[f]=it(h)||ct(h)?{type:h}:un({},h),_=d.type;let g=!1,m=!0;if(it(_))for(let p=0;p<_.length;++p){const S=_[p],b=ct(S)&&S.name;if(b==="Boolean"){g=!0;break}else b==="String"&&(m=!1)}else g=ct(_)&&_.name==="Boolean";d[0]=g,d[1]=m,(g||Ut(d,"default"))&&a.push(f)}}const c=[o,a];return Dt(n)&&i.set(n,c),c}function Zm(n){return n[0]!=="$"&&!yl(n)}const qp=n=>n==="_"||n==="_ctx"||n==="$stable",jp=n=>it(n)?n.map(Sr):[Sr(n)],Cb=(n,e,t)=>{if(e._n)return e;const i=Gp((...r)=>jp(e(...r)),t);return i._c=!1,i},vv=(n,e,t)=>{const i=n._ctx;for(const r in n){if(qp(r))continue;const s=n[r];if(ct(s))e[r]=Cb(r,s,i);else if(s!=null){const o=jp(s);e[r]=()=>o}}},xv=(n,e)=>{const t=jp(e);n.slots.default=()=>t},yv=(n,e,t)=>{for(const i in e)(t||!qp(i))&&(n[i]=e[i])},Rb=(n,e,t)=>{const i=n.slots=pv();if(n.vnode.shapeFlag&32){const r=e._;r?(yv(i,e,t),t&&E0(i,"_",r,!0)):vv(e,i)}else e&&xv(n,e)},Pb=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Gt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:yv(r,e,t):(s=!e.$stable,vv(e,r)),o=e}else e&&(xv(n,e),o={default:1});if(s)for(const a in r)!qp(a)&&o[a]==null&&delete r[a]},ci=Ub;function Db(n){return Lb(n)}function Lb(n,e){const t=Ef();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Pr,insertStaticContent:_}=n,g=(I,E,ee,te=null,U=null,K=null,ge=void 0,ie=null,A=!!E.dynamicChildren)=>{if(I===E)return;I&&!fo(I,E)&&(te=Se(I),ze(I,U,K,!0),I=null),E.patchFlag===-2&&(A=!1,E.dynamicChildren=null);const{type:M,ref:z,shapeFlag:V}=E;switch(M){case Nf:m(I,E,ee,te);break;case ti:p(I,E,ee,te);break;case gu:I==null&&S(E,ee,te,ge);break;case Rt:L(I,E,ee,te,U,K,ge,ie,A);break;default:V&1?w(I,E,ee,te,U,K,ge,ie,A):V&6?B(I,E,ee,te,U,K,ge,ie,A):(V&64||V&128)&&M.process(I,E,ee,te,U,K,ge,ie,A,qe)}z!=null&&U?El(z,I&&I.ref,K,E||I,!E):z==null&&I&&I.ref!=null&&El(I.ref,null,K,I,!0)},m=(I,E,ee,te)=>{if(I==null)i(E.el=a(E.children),ee,te);else{const U=E.el=I.el;E.children!==I.children&&c(U,E.children)}},p=(I,E,ee,te)=>{I==null?i(E.el=l(E.children||""),ee,te):E.el=I.el},S=(I,E,ee,te)=>{[I.el,I.anchor]=_(I.children,E,ee,te,I.el,I.anchor)},b=({el:I,anchor:E},ee,te)=>{let U;for(;I&&I!==E;)U=h(I),i(I,ee,te),I=U;i(E,ee,te)},v=({el:I,anchor:E})=>{let ee;for(;I&&I!==E;)ee=h(I),r(I),I=ee;r(E)},w=(I,E,ee,te,U,K,ge,ie,A)=>{if(E.type==="svg"?ge="svg":E.type==="math"&&(ge="mathml"),I==null)R(E,ee,te,U,K,ge,ie,A);else{const M=I.el&&I.el._isVueCE?I.el:null;try{M&&M._beginPatch(),y(I,E,U,K,ge,ie,A)}finally{M&&M._endPatch()}}},R=(I,E,ee,te,U,K,ge,ie)=>{let A,M;const{props:z,shapeFlag:V,transition:q,dirs:Z}=I;if(A=I.el=o(I.type,K,z&&z.is,z),V&8?u(A,I.children):V&16&&P(I.children,A,null,te,U,eh(I,K),ge,ie),Z&&Ys(I,null,te,"created"),T(A,I,I.scopeId,ge,te),z){for(const _e in z)_e!=="value"&&!yl(_e)&&s(A,_e,null,z[_e],K,te);"value"in z&&s(A,"value",null,z.value,K),(M=z.onVnodeBeforeMount)&&_r(M,te,I)}Z&&Ys(I,null,te,"beforeMount");const fe=Ib(U,q);fe&&q.beforeEnter(A),i(A,E,ee),((M=z&&z.onVnodeMounted)||fe||Z)&&ci(()=>{try{M&&_r(M,te,I),fe&&q.enter(A),Z&&Ys(I,null,te,"mounted")}finally{}},U)},T=(I,E,ee,te,U)=>{if(ee&&d(I,ee),te)for(let K=0;K<te.length;K++)d(I,te[K]);if(U){let K=U.subTree;if(E===K||Ev(K.type)&&(K.ssContent===E||K.ssFallback===E)){const ge=U.vnode;T(I,ge,ge.scopeId,ge.slotScopeIds,U.parent)}}},P=(I,E,ee,te,U,K,ge,ie,A=0)=>{for(let M=A;M<I.length;M++){const z=I[M]=ie?Xr(I[M]):Sr(I[M]);g(null,z,E,ee,te,U,K,ge,ie)}},y=(I,E,ee,te,U,K,ge)=>{const ie=E.el=I.el;let{patchFlag:A,dynamicChildren:M,dirs:z}=E;A|=I.patchFlag&16;const V=I.props||Gt,q=E.props||Gt;let Z;if(ee&&qs(ee,!1),(Z=q.onVnodeBeforeUpdate)&&_r(Z,ee,E,I),z&&Ys(E,I,ee,"beforeUpdate"),ee&&qs(ee,!0),M&&(!I.dynamicChildren||I.dynamicChildren.length!==M.length)&&(A=0,ge=!1,M=null),(V.innerHTML&&q.innerHTML==null||V.textContent&&q.textContent==null)&&u(ie,""),M?x(I.dynamicChildren,M,ie,ee,te,eh(E,U),K):ge||W(I,E,ie,null,ee,te,eh(E,U),K,!1),A>0){if(A&16)N(ie,V,q,ee,U);else if(A&2&&V.class!==q.class&&s(ie,"class",null,q.class,U),A&4&&s(ie,"style",V.style,q.style,U),A&8){const fe=E.dynamicProps;for(let _e=0;_e<fe.length;_e++){const ve=fe[_e],He=V[ve],he=q[ve];(he!==He||ve==="value")&&s(ie,ve,He,he,U,ee)}}A&1&&I.children!==E.children&&u(ie,E.children)}else!ge&&M==null&&N(ie,V,q,ee,U);((Z=q.onVnodeUpdated)||z)&&ci(()=>{Z&&_r(Z,ee,E,I),z&&Ys(E,I,ee,"updated")},te)},x=(I,E,ee,te,U,K,ge)=>{for(let ie=0;ie<E.length;ie++){const A=I[ie],M=E[ie],z=A.el&&(A.type===Rt||!fo(A,M)||A.shapeFlag&198)?f(A.el):ee;g(A,M,z,null,te,U,K,ge,!0)}},N=(I,E,ee,te,U)=>{if(E!==ee){if(E!==Gt)for(const K in E)!yl(K)&&!(K in ee)&&s(I,K,E[K],null,U,te);for(const K in ee){if(yl(K))continue;const ge=ee[K],ie=E[K];ge!==ie&&K!=="value"&&s(I,K,ie,ge,U,te)}"value"in ee&&s(I,"value",E.value,ee.value,U)}},L=(I,E,ee,te,U,K,ge,ie,A)=>{const M=E.el=I?I.el:a(""),z=E.anchor=I?I.anchor:a("");let{patchFlag:V,dynamicChildren:q,slotScopeIds:Z}=E;Z&&(ie=ie?ie.concat(Z):Z),I==null?(i(M,ee,te),i(z,ee,te),P(E.children||[],ee,z,U,K,ge,ie,A)):V>0&&V&64&&q&&I.dynamicChildren&&I.dynamicChildren.length===q.length?(x(I.dynamicChildren,q,ee,U,K,ge,ie),(E.key!=null||U&&E===U.subTree)&&bv(I,E,!0)):W(I,E,ee,z,U,K,ge,ie,A)},B=(I,E,ee,te,U,K,ge,ie,A)=>{E.slotScopeIds=ie,I==null?E.shapeFlag&512?U.ctx.activate(E,ee,te,ge,A):F(E,ee,te,U,K,ge,A):j(I,E,A)},F=(I,E,ee,te,U,K,ge)=>{const ie=I.component=Hb(I,te,U);if(Df(I)&&(ie.ctx.renderer=qe),Vb(ie,!1,ge),ie.asyncDep){if(U&&U.registerDep(ie,X,ge),!I.el){const A=ie.subTree=$e(ti);p(null,A,E,ee),I.placeholder=A.el}}else X(ie,I,E,ee,U,K,ge)},j=(I,E,ee)=>{const te=E.component=I.component;if(Mb(I,E,ee))if(te.asyncDep&&!te.asyncResolved){$(te,E,ee);return}else te.next=E,te.update();else E.el=I.el,te.vnode=E},X=(I,E,ee,te,U,K,ge)=>{const ie=()=>{if(I.isMounted){let{next:V,bu:q,u:Z,parent:fe,vnode:_e}=I;{const We=Sv(I);if(We){V&&(V.el=_e.el,$(I,V,ge)),We.asyncDep.then(()=>{ci(()=>{I.isUnmounted||M()},U)});return}}let ve=V,He;qs(I,!1),V?(V.el=_e.el,$(I,V,ge)):V=_e,q&&_u(q),(He=V.props&&V.props.onVnodeBeforeUpdate)&&_r(He,fe,V,_e),qs(I,!0);const he=Qf(I),Me=I.subTree;I.subTree=he,g(Me,he,f(Me.el),Se(Me),I,U,K),V.el=he.el,ve===null&&Eb(I,he.el),Z&&ci(Z,U),(He=V.props&&V.props.onVnodeUpdated)&&ci(()=>_r(He,fe,V,_e),U)}else{let V;const{el:q,props:Z}=E,{bm:fe,m:_e,parent:ve,root:He,type:he}=I,Me=Tl(E);if(qs(I,!1),fe&&_u(fe),!Me&&(V=Z&&Z.onVnodeBeforeMount)&&_r(V,ve,E),qs(I,!0),q&&ot){const We=()=>{I.subTree=Qf(I),ot(q,I.subTree,I,U,null)};Me&&he.__asyncHydrate?he.__asyncHydrate(q,I,We):We()}else{He.ce&&He.ce._hasShadowRoot()&&He.ce._injectChildStyle(he,I.parent?I.parent.type:void 0);const We=I.subTree=Qf(I);g(null,We,ee,te,I,U,K),E.el=We.el}if(_e&&ci(_e,U),!Me&&(V=Z&&Z.onVnodeMounted)){const We=E;ci(()=>_r(V,ve,We),U)}(E.shapeFlag&256||ve&&Tl(ve.vnode)&&ve.vnode.shapeFlag&256)&&I.a&&ci(I.a,U),I.isMounted=!0,E=ee=te=null}};I.scope.on();const A=I.effect=new D0(ie);I.scope.off();const M=I.update=A.run.bind(A),z=I.job=A.runIfDirty.bind(A);z.i=I,z.id=I.uid,A.scheduler=()=>Vp(z),qs(I,!0),M()},$=(I,E,ee)=>{E.component=I;const te=I.vnode.props;I.vnode=E,I.next=null,wb(I,E.props,te,ee),Pb(I,E.children,ee),is(),Hm(I),rs()},W=(I,E,ee,te,U,K,ge,ie,A=!1)=>{const M=I&&I.children,z=I?I.shapeFlag:0,V=E.children,{patchFlag:q,shapeFlag:Z}=E;if(q>0){if(q&128){O(M,V,ee,te,U,K,ge,ie,A);return}else if(q&256){me(M,V,ee,te,U,K,ge,ie,A);return}}Z&8?(z&16&&we(M,U,K),V!==M&&u(ee,V)):z&16?Z&16?O(M,V,ee,te,U,K,ge,ie,A):we(M,U,K,!0):(z&8&&u(ee,""),Z&16&&P(V,ee,te,U,K,ge,ie,A))},me=(I,E,ee,te,U,K,ge,ie,A)=>{I=I||ga,E=E||ga;const M=I.length,z=E.length,V=Math.min(M,z);let q;for(q=0;q<V;q++){const Z=E[q]=A?Xr(E[q]):Sr(E[q]);g(I[q],Z,ee,null,U,K,ge,ie,A)}M>z?we(I,U,K,!0,!1,V):P(E,ee,te,U,K,ge,ie,A,V)},O=(I,E,ee,te,U,K,ge,ie,A)=>{let M=0;const z=E.length;let V=I.length-1,q=z-1;for(;M<=V&&M<=q;){const Z=I[M],fe=E[M]=A?Xr(E[M]):Sr(E[M]);if(fo(Z,fe))g(Z,fe,ee,null,U,K,ge,ie,A);else break;M++}for(;M<=V&&M<=q;){const Z=I[V],fe=E[q]=A?Xr(E[q]):Sr(E[q]);if(fo(Z,fe))g(Z,fe,ee,null,U,K,ge,ie,A);else break;V--,q--}if(M>V){if(M<=q){const Z=q+1,fe=Z<z?E[Z].el:te;for(;M<=q;)g(null,E[M]=A?Xr(E[M]):Sr(E[M]),ee,fe,U,K,ge,ie,A),M++}}else if(M>q)for(;M<=V;)ze(I[M],U,K,!0),M++;else{const Z=M,fe=M,_e=new Map;for(M=fe;M<=q;M++){const Qe=E[M]=A?Xr(E[M]):Sr(E[M]);Qe.key!=null&&_e.set(Qe.key,M)}let ve,He=0;const he=q-fe+1;let Me=!1,We=0;const je=new Array(he);for(M=0;M<he;M++)je[M]=0;for(M=Z;M<=V;M++){const Qe=I[M];if(He>=he){ze(Qe,U,K,!0);continue}let Ke;if(Qe.key!=null)Ke=_e.get(Qe.key);else for(ve=fe;ve<=q;ve++)if(je[ve-fe]===0&&fo(Qe,E[ve])){Ke=ve;break}Ke===void 0?ze(Qe,U,K,!0):(je[Ke-fe]=M+1,Ke>=We?We=Ke:Me=!0,g(Qe,E[Ke],ee,null,U,K,ge,ie,A),He++)}const Ie=Me?Nb(je):ga;for(ve=Ie.length-1,M=he-1;M>=0;M--){const Qe=fe+M,Ke=E[Qe],_t=E[Qe+1],k=Qe+1<z?_t.el||Mv(_t):te;je[M]===0?g(null,Ke,ee,k,U,K,ge,ie,A):Me&&(ve<0||M!==Ie[ve]?ye(Ke,ee,k,2):ve--)}}},ye=(I,E,ee,te,U=null)=>{const{el:K,type:ge,transition:ie,children:A,shapeFlag:M}=I;if(M&6){ye(I.component.subTree,E,ee,te);return}if(M&128){I.suspense.move(E,ee,te);return}if(M&64){ge.move(I,E,ee,qe);return}if(ge===Rt){i(K,E,ee);for(let V=0;V<A.length;V++)ye(A[V],E,ee,te);i(I.anchor,E,ee);return}if(ge===gu){b(I,E,ee);return}if(te!==2&&M&1&&ie)if(te===0)ie.persisted&&!K[Xi]?i(K,E,ee):(ie.beforeEnter(K),i(K,E,ee),ci(()=>ie.enter(K),U));else{const{leave:V,delayLeave:q,afterLeave:Z}=ie,fe=()=>{I.ctx.isUnmounted?r(K):i(K,E,ee)},_e=()=>{const ve=K._isLeaving||!!K[Xi];K._isLeaving&&K[Xi](!0),ie.persisted&&!ve?fe():V(K,()=>{fe(),Z&&Z()})};q?q(K,fe,_e):_e()}else i(K,E,ee)},ze=(I,E,ee,te=!1,U=!1)=>{const{type:K,props:ge,ref:ie,children:A,dynamicChildren:M,shapeFlag:z,patchFlag:V,dirs:q,cacheIndex:Z,memo:fe}=I;if(V===-2&&(U=!1),ie!=null&&(is(),El(ie,null,ee,I,!0),rs()),Z!=null&&(E.renderCache[Z]=void 0),z&256){E.ctx.deactivate(I);return}const _e=z&1&&q,ve=!Tl(I);let He;if(ve&&(He=ge&&ge.onVnodeBeforeUnmount)&&_r(He,E,I),z&6)xe(I.component,ee,te);else{if(z&128){I.suspense.unmount(ee,te);return}_e&&Ys(I,null,E,"beforeUnmount"),z&64?I.type.remove(I,E,ee,qe,te):M&&!M.hasOnce&&(K!==Rt||V>0&&V&64)?we(M,E,ee,!1,!0):(K===Rt&&V&384||!U&&z&16)&&we(A,E,ee),te&&st(I)}const he=fe!=null&&Z==null;(ve&&(He=ge&&ge.onVnodeUnmounted)||_e||he)&&ci(()=>{He&&_r(He,E,I),_e&&Ys(I,null,E,"unmounted"),he&&(I.el=null)},ee)},st=I=>{const{type:E,el:ee,anchor:te,transition:U}=I;if(E===Rt){se(ee,te);return}if(E===gu){v(I);return}const K=()=>{r(ee),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(I.shapeFlag&1&&U&&!U.persisted){const{leave:ge,delayLeave:ie}=U,A=()=>ge(ee,K);ie?ie(I.el,K,A):A()}else K()},se=(I,E)=>{let ee;for(;I!==E;)ee=h(I),r(I),I=ee;r(E)},xe=(I,E,ee)=>{const{bum:te,scope:U,job:K,subTree:ge,um:ie,m:A,a:M}=I;Jm(A),Jm(M),te&&_u(te),U.stop(),K&&(K.flags|=8,ze(ge,I,E,ee)),ie&&ci(ie,E),ci(()=>{I.isUnmounted=!0},E)},we=(I,E,ee,te=!1,U=!1,K=0)=>{for(let ge=K;ge<I.length;ge++)ze(I[ge],E,ee,te,U)},Se=I=>{if(I.shapeFlag&6)return Se(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const E=h(I.anchor||I.el),ee=E&&E[q1];return ee?h(ee):E};let ke=!1;const et=(I,E,ee)=>{let te;I==null?E._vnode&&(ze(E._vnode,null,null,!0),te=E._vnode.component):g(E._vnode||null,I,E,null,null,null,ee),E._vnode=I,ke||(ke=!0,Hm(te),K0(),ke=!1)},qe={p:g,um:ze,m:ye,r:st,mt:F,mc:P,pc:W,pbc:x,n:Se,o:n};let ft,ot;return{render:et,hydrate:ft,createApp:gb(et,ft)}}function eh({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function qs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Ib(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function bv(n,e,t=!1){const i=n.children,r=e.children;if(it(i)&&it(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Xr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&bv(o,a)),a.type===Nf&&(a.patchFlag===-1&&(a=r[s]=Xr(a)),a.el=o.el),a.type===ti&&!a.el&&(a.el=o.el)}}function Nb(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Sv(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Sv(e)}function Jm(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Mv(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Mv(e.subTree):null}const Ev=n=>n.__isSuspense;function Ub(n,e){e&&e.pendingBranch?it(n)?e.effects.push(...n):e.effects.push(n):G1(n)}const Rt=Symbol.for("v-fgt"),Nf=Symbol.for("v-txt"),ti=Symbol.for("v-cmt"),gu=Symbol.for("v-stc"),So=[];let Pi=null;function Ue(n=!1){So.push(Pi=n?null:[])}function Tv(){So.pop(),Pi=So[So.length-1]||null}let Yl=1;function Gu(n,e=!1){Yl+=n,n<0&&Pi&&e&&(Pi.hasOnce=!0)}function wv(n){return n.dynamicChildren=Yl>0?Pi||ga:null,Tv(),Yl>0&&Pi&&Pi.push(n),n}function Ze(n,e,t,i,r,s){return wv(C(n,e,t,i,r,s,!0))}function Qn(n,e,t,i,r){return wv($e(n,e,t,i,r,!0))}function Wu(n){return n?n.__v_isVNode===!0:!1}function fo(n,e){return n.type===e.type&&n.key===e.key}const Av=({key:n})=>n??null,vu=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?jt(n)||Qt(n)||ct(n)?{i:Ri,r:n,k:e,f:!!t}:n:null);function C(n,e=null,t=null,i=0,r=null,s=n===Rt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Av(e),ref:e&&vu(e),scopeId:J0,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ri};return a?($u(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=jt(t)?8:16),Yl>0&&!o&&Pi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Pi.push(l),l}const $e=Ob;function Ob(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===lv)&&(n=ti),Wu(n)){const a=Os(n,e,!0);return t&&$u(a,t),Yl>0&&!s&&Pi&&(a.shapeFlag&6?Pi[Pi.indexOf(n)]=a:Pi.push(a)),a.patchFlag=-2,a}if(Yb(n)&&(n=n.__vccOpts),e){e=Fb(e);let{class:a,style:l}=e;a&&!jt(a)&&(e.class=Fo(a)),Dt(l)&&(Cf(l)&&!it(l)&&(l=un({},l)),e.style=mn(l))}const o=jt(n)?1:Ev(n)?128:Pf(n)?64:Dt(n)?4:ct(n)?2:0;return C(n,e,t,i,r,o,s,!0)}function Fb(n){return n?Cf(n)||mv(n)?un({},n):n:null}function Os(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?kb(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Av(c),ref:e&&e.ref?t&&s?it(s)?s.concat(vu(e)):[s,vu(e)]:vu(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Rt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Os(n.ssContent),ssFallback:n.ssFallback&&Os(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Xl(u,l.clone(u)),u}function ur(n=" ",e=0){return $e(Nf,null,n,e)}function Xu(n,e){const t=$e(gu,null,n);return t.staticCount=e,t}function Fs(n="",e=!1){return e?(Ue(),Qn(ti,null,n)):$e(ti,null,n)}function Sr(n){return n==null||typeof n=="boolean"?$e(ti):it(n)?$e(Rt,null,n.slice()):Wu(n)?Xr(n):$e(Nf,null,String(n))}function Xr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Os(n)}function $u(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(it(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),$u(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!mv(e)?e._ctx=Ri:r===3&&Ri&&(Ri.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(ct(e)){if(i&65){$u(n,{default:e});return}e={default:e,_ctx:Ri},t=32}else e=String(e),i&64?(t=16,e=[ur(e)]):t=8;n.children=e,n.shapeFlag|=t}function kb(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Fo([e.class,i.class]));else if(r==="style")e.style=mn([e.style,i.style]);else if(xf(r)){const s=e[r],o=i[r];o&&s!==o&&!(it(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!yf(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function _r(n,e,t,i=null){tr(n,e,7,[t,i])}const Bb=uv();let zb=0;function Hb(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Bb,s={uid:zb++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new C0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gv(i,r),emitsOptions:fv(i,r),emit:null,emitted:null,propsDefaults:Gt,inheritAttrs:i.inheritAttrs,ctx:Gt,data:Gt,props:Gt,attrs:Gt,slots:Gt,refs:Gt,setupState:Gt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=xb.bind(null,s),n.ce&&n.ce(s),s}let kn=null;const Ha=()=>kn||Ri;let Yu,ql;{const n=Ef(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Yu=e("__VUE_INSTANCE_SETTERS__",t=>kn=t),ql=e("__VUE_SSR_SETTERS__",t=>jl=t)}const dc=n=>{const e=kn;return Yu(n),n.scope.on(),()=>{n.scope.off(),Yu(e)}},Qm=()=>{kn&&kn.scope.off(),Yu(null)};function Cv(n){return n.vnode.shapeFlag&4}let jl=!1;function Vb(n,e=!1,t=!1){e&&ql(e);const{props:i,children:r}=n.vnode,s=Cv(n);Tb(n,i,s,e),Rb(n,r,t||e);const o=s?Gb(n,e):void 0;return e&&ql(!1),o}function Gb(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ub);const{setup:i}=t;if(i){is();const r=n.setupContext=i.length>1?Xb(n):null,s=dc(n),o=hc(i,n,0,[n.props,r]),a=b0(o);if(rs(),s(),(a||n.sp)&&!Tl(n)&&ov(n),a){if(o.then(Qm,Qm),e)return o.then(l=>{ql(!0);try{e_(n,l,e)}finally{ql(!1)}}).catch(l=>{Rf(l,n,0)});n.asyncDep=o}else e_(n,o,e)}else Rv(n,e)}function e_(n,e,t){ct(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Dt(e)&&(n.setupState=$0(e)),Rv(n,t)}let t_;function Rv(n,e,t){const i=n.type;if(!n.render){if(!e&&t_&&!i.render){const r=i.template||Yp(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=un(un({isCustomElement:s,delimiters:a},o),l);i.render=t_(r,c)}}n.render=i.render||Pr}{const r=dc(n);is();try{fb(n)}finally{rs(),r()}}}const Wb={get(n,e){return Fn(n,"get",""),n[e]}};function Xb(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Wb),slots:n.slots,emit:n.emit,expose:e}}function Uf(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy($0(Hp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in wl)return wl[t](n)},has(e,t){return t in e||t in wl}})):n.proxy}function $b(n,e=!0){return ct(n)?n.displayName||n.name:n.name||e&&n.__name}function Yb(n){return ct(n)&&"__vccOpts"in n}const An=(n,e)=>k1(n,e,jl);function qu(n,e,t){try{Gu(-1);const i=arguments.length;return i===2?Dt(e)&&!it(e)?Wu(e)?$e(n,null,[e]):$e(n,e):$e(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Wu(t)&&(t=[t]),$e(n,e,t))}finally{Gu(1)}}const qb="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fd;const n_=typeof window<"u"&&window.trustedTypes;if(n_)try{fd=n_.createPolicy("vue",{createHTML:n=>n})}catch{}const Pv=fd?n=>fd.createHTML(n):n=>n,jb="http://www.w3.org/2000/svg",Kb="http://www.w3.org/1998/Math/MathML",Vr=typeof document<"u"?document:null,i_=Vr&&Vr.createElement("template"),Zb={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Vr.createElementNS(jb,n):e==="mathml"?Vr.createElementNS(Kb,n):t?Vr.createElement(n,{is:t}):Vr.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Vr.createTextNode(n),createComment:n=>Vr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Vr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{i_.innerHTML=Pv(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=i_.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},fs="transition",ja="animation",Kl=Symbol("_vtc"),Dv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Jb=un({},tv,Dv),Qb=n=>(n.displayName="Transition",n.props=Jb,n),Lv=Qb((n,{slots:e})=>qu(Z1,eS(n),e)),js=(n,e=[])=>{it(n)?n.forEach(t=>t(...e)):n&&n(...e)},r_=n=>n?it(n)?n.some(e=>e.length>1):n.length>1:!1;function eS(n){const e={};for(const L in n)L in Dv||(e[L]=n[L]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,_=tS(r),g=_&&_[0],m=_&&_[1],{onBeforeEnter:p,onEnter:S,onEnterCancelled:b,onLeave:v,onLeaveCancelled:w,onBeforeAppear:R=p,onAppear:T=S,onAppearCancelled:P=b}=e,y=(L,B,F,j)=>{L._enterCancelled=j,Ks(L,B?u:a),Ks(L,B?c:o),F&&F()},x=(L,B)=>{L._isLeaving=!1,Ks(L,f),Ks(L,d),Ks(L,h),B&&B()},N=L=>(B,F)=>{const j=L?T:S,X=()=>y(B,L,F);js(j,[B,X]),s_(()=>{Ks(B,L?l:s),Ur(B,L?u:a),r_(j)||o_(B,i,g,X)})};return un(e,{onBeforeEnter(L){js(p,[L]),Ur(L,s),Ur(L,o)},onBeforeAppear(L){js(R,[L]),Ur(L,l),Ur(L,c)},onEnter:N(!1),onAppear:N(!0),onLeave(L,B){L._isLeaving=!0;const F=()=>x(L,B);Ur(L,f),L._enterCancelled?(Ur(L,h),c_(L)):(c_(L),Ur(L,h)),s_(()=>{L._isLeaving&&(Ks(L,f),Ur(L,d),r_(v)||o_(L,i,m,F))}),js(v,[L,F])},onEnterCancelled(L){y(L,!1,void 0,!0),js(b,[L])},onAppearCancelled(L){y(L,!0,void 0,!0),js(P,[L])},onLeaveCancelled(L){x(L),js(w,[L])}})}function tS(n){if(n==null)return null;if(Dt(n))return[th(n.enter),th(n.leave)];{const e=th(n);return[e,e]}}function th(n){return n1(n)}function Ur(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Kl]||(n[Kl]=new Set)).add(e)}function Ks(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Kl];t&&(t.delete(e),t.size||(n[Kl]=void 0))}function s_(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let nS=0;function o_(n,e,t,i){const r=n._endId=++nS,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=iS(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=d=>{d.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function iS(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),r=i(`${fs}Delay`),s=i(`${fs}Duration`),o=a_(r,s),a=i(`${ja}Delay`),l=i(`${ja}Duration`),c=a_(a,l);let u=null,f=0,h=0;e===fs?o>0&&(u=fs,f=o,h=s.length):e===ja?c>0&&(u=ja,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?fs:ja:null,h=u?u===fs?s.length:l.length:0);const d=u===fs&&/\b(?:transform|all)(?:,|$)/.test(i(`${fs}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function a_(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>l_(t)+l_(n[i])))}function l_(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function c_(n){return(n?n.ownerDocument:document).body.offsetHeight}function rS(n,e,t){const i=n[Kl];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const u_=Symbol("_vod"),sS=Symbol("_vsh"),oS=Symbol(""),aS=/(?:^|;)\s*display\s*:/;function lS(n,e,t){const i=n.style,r=jt(t);let s=!1;if(t&&!r){if(e)if(jt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ul(i,a,"")}else for(const o in e)t[o]==null&&ul(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?uS(n,o,!jt(e)&&e?e[o]:void 0,a)||ul(i,o,a):ul(i,o,"")}}else if(r){if(e!==t){const o=i[oS];o&&(t+=";"+o),i.cssText=t,s=aS.test(t)}}else e&&n.removeAttribute("style");u_ in n&&(n[u_]=s?i.display:"",n[sS]&&(i.display="none"))}const f_=/\s*!important$/;function ul(n,e,t){if(it(t))t.forEach(i=>ul(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=cS(n,e);f_.test(t)?n.setProperty(Oo(i),t.replace(f_,""),"important"):n[i]=t}}const h_=["Webkit","Moz","ms"],nh={};function cS(n,e){const t=nh[e];if(t)return t;let i=ii(e);if(i!=="filter"&&i in n)return nh[e]=i;i=Mf(i);for(let r=0;r<h_.length;r++){const s=h_[r]+i;if(s in n)return nh[e]=s}return e}function uS(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&jt(i)&&t===i}const d_="http://www.w3.org/1999/xlink";function p_(n,e,t,i,r,s=l1(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(d_,e.slice(6,e.length)):n.setAttributeNS(d_,e,t):t==null||s&&!T0(t)?n.removeAttribute(e):n.setAttribute(e,s?"":er(t)?String(t):t)}function m_(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Pv(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=T0(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function ca(n,e,t,i){n.addEventListener(e,t,i)}function fS(n,e,t,i){n.removeEventListener(e,t,i)}const __=Symbol("_vei");function hS(n,e,t,i,r=null){const s=n[__]||(n[__]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=mS(e);if(i){const c=s[e]=vS(i,r);ca(n,a,c,l)}else o&&(fS(n,a,o,l),s[e]=void 0)}}const dS=/(Once|Passive|Capture)$/,pS=/^on:?(?:Once|Passive|Capture)$/;function mS(n){let e,t;for(;(t=n.match(dS))&&!pS.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Oo(n.slice(2)),e]}let ih=0;const _S=Promise.resolve(),gS=()=>ih||(_S.then(()=>ih=0),ih=Date.now());function vS(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(it(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&tr(c,e,5,a)}}else tr(r,e,5,[i])};return t.value=n,t.attached=gS(),t}const g_=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,xS=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?rS(n,i,o):e==="style"?lS(n,t,i):xf(e)?yf(e)||hS(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yS(n,e,i,o))?(m_(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&p_(n,e,i,o,s,e!=="value")):n._isVueCE&&(bS(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!jt(i)))?m_(n,ii(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),p_(n,e,i,o))};function yS(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&g_(e)&&ct(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return g_(e)&&jt(t)?!1:e in n}function bS(n,e){const t=n._def.props;if(!t)return!1;const i=ii(e);return Array.isArray(t)?t.some(r=>ii(r)===i):Object.keys(t).some(r=>ii(r)===i)}const v_=n=>{const e=n.props["onUpdate:modelValue"]||!1;return it(e)?t=>_u(e,t):e};function SS(n){n.target.composing=!0}function x_(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ec=Symbol("_assign"),Tc=Symbol("_initialValue");function rh(n,e,t){return e&&(n=n.trim()),t&&(n=Ip(n)),n}const y_={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n.parentNode&&(n.type==="text"?n[Tc]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Tc]=n.defaultValue.replace(/\r\n?/g,`
`))),n[Ec]=v_(r);const s=i||r.props&&r.props.type==="number";ca(n,e?"change":"input",o=>{o.target.composing||n[Ec](rh(n.value,t,s))}),(t||s)&&ca(n,"change",()=>{n.value=rh(n.value,t,s)}),e||(ca(n,"compositionstart",SS),ca(n,"compositionend",x_),ca(n,"change",x_))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const r=e??"",s=n[Tc];delete n[Tc],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[Ec](rh(n.value,t,i)):n.value=r},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Ec]=v_(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Ip(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},MS=["ctrl","shift","alt","meta"],ES={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>MS.some(t=>n[`${t}Key`]&&!e.includes(t))},ju=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=ES[e[o]];if(a&&a(r,e))return}return n(r,...s)})},TS=un({patchProp:xS},Zb);let b_;function wS(){return b_||(b_=Db(TS))}const AS=(...n)=>{const e=wS().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=RS(i);if(!r)return;const s=e._component;!ct(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,CS(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function CS(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function RS(n){return jt(n)?document.querySelector(n):n}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Iv;const Of=n=>Iv=n,Nv=Symbol();function hd(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Al;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Al||(Al={}));function PS(){const n=R0(!0),e=n.run(()=>dt({}));let t=[],i=[];const r=Hp({install(s){Of(r),r._a=s,s.provide(Nv,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return this._a?t.push(s):i.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const Uv=()=>{};function S_(n,e,t,i=Uv){n.add(e);const r=()=>{n.delete(e)&&i()};return!t&&Up()&&P0(r),r}function Ho(n,...e){n.forEach(t=>{t(...e)})}const DS=n=>n(),M_=Symbol(),sh=Symbol();function dd(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,i)=>n.set(i,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],r=n[t];hd(r)&&hd(i)&&n.hasOwnProperty(t)&&!Qt(i)&&!Qr(i)?n[t]=dd(r,i):n[t]=i}return n}const LS=Symbol();function IS(n){return!hd(n)||!Object.prototype.hasOwnProperty.call(n,LS)}const{assign:xs}=Object;function NS(n){return!!(Qt(n)&&n.effect)}function US(n,e,t,i){const{state:r,actions:s,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=r?r():{});const u=I1(t.state.value[n]);return xs(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=Hp(An(()=>{Of(t);const d=t._s.get(n);return o[h].call(d,d)})),f),{}))}return l=Ov(n,c,e,t,i,!0),l}function Ov(n,e,t={},i,r,s){let o;const a=xs({actions:{}},t),l={deep:!0};let c,u,f=new Set,h=new Set,d;const _=i.state.value[n];!s&&!_&&(i.state.value[n]={});let g;function m(P){let y;c=u=!1,typeof P=="function"?(P(i.state.value[n]),y={type:Al.patchFunction,storeId:n,events:d}):(dd(i.state.value[n],P),y={type:Al.patchObject,payload:P,storeId:n,events:d});const x=g=Symbol();dr().then(()=>{g===x&&(c=!0)}),u=!0,Ho(f,y,i.state.value[n])}const p=s?function(){const{state:y}=t,x=y?y():{};this.$patch(N=>{xs(N,x)})}:Uv;function S(){o.stop(),f.clear(),h.clear(),i._s.delete(n)}const b=(P,y="")=>{if(M_ in P)return P[sh]=y,P;const x=function(){Of(i);const N=Array.from(arguments),L=new Set,B=new Set;function F($){L.add($)}function j($){B.add($)}Ho(h,{args:N,name:x[sh],store:w,after:F,onError:j});let X;try{X=P.apply(this&&this.$id===n?this:w,N)}catch($){throw Ho(B,$),$}return X instanceof Promise?X.then($=>(Ho(L,$),$)).catch($=>(Ho(B,$),Promise.reject($))):(Ho(L,X),X)};return x[M_]=!0,x[sh]=y,x},v={_p:i,$id:n,$onAction:S_.bind(null,h),$patch:m,$reset:p,$subscribe(P,y={}){const x=S_(f,P,y.detached,()=>N()),N=o.run(()=>es(()=>i.state.value[n],L=>{(y.flush==="sync"?u:c)&&P({storeId:n,type:Al.direct,events:d},L)},xs({},l,y)));return x},$dispose:S},w=Af(v);i._s.set(n,w);const T=(i._a&&i._a.runWithContext||DS)(()=>i._e.run(()=>(o=R0()).run(()=>e({action:b}))));for(const P in T){const y=T[P];if(Qt(y)&&!NS(y)||Qr(y))s||(_&&IS(y)&&(Qt(y)?y.value=_[P]:dd(y,_[P])),i.state.value[n][P]=y);else if(typeof y=="function"){const x=b(y,P);T[P]=x,a.actions[P]=y}}return xs(w,T),xs(Ct(w),T),Object.defineProperty(w,"$state",{get:()=>i.state.value[n],set:P=>{m(y=>{xs(y,P)})}}),i._p.forEach(P=>{xs(w,o.run(()=>P({store:w,app:i._a,pinia:i,options:a})))}),_&&s&&t.hydrate&&t.hydrate(w.$state,_),c=!0,u=!0,w}/*! #__NO_SIDE_EFFECTS__ */function OS(n,e,t){let i;const r=typeof e=="function";i=r?t:e;function s(o,a){const l=Wp();return o=o||(l?ya(Nv,null):null),o&&Of(o),o=Iv,o._s.has(n)||(r?Ov(n,e,i,o):US(n,i,o)),o._s.get(n)}return s.$id=n,s}function FS(n){return Up()?(P0(n),!0):!1}const oh=new WeakMap,kS=(...n)=>{var e;const t=n[0],i=(e=Ha())==null?void 0:e.proxy;if(i==null&&!Wp())throw new Error("injectLocal must be called in setup");return i&&oh.has(i)&&t in oh.get(i)?oh.get(i)[t]:ya(...n)},BS=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const zS=Object.prototype.toString,HS=n=>zS.call(n)==="[object Object]",VS=()=>{};function GS(...n){if(n.length!==1)return O1(...n);const e=n[0];return typeof e=="function"?Gl(L1(()=>({get:e,set:VS}))):dt(e)}function WS(n,e){function t(...i){return new Promise((r,s)=>{Promise.resolve(n(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(s)})}return t}const Fv=n=>n();function XS(n=Fv,e={}){const{initialState:t="active"}=e,i=GS(t==="active");function r(){i.value=!1}function s(){i.value=!0}return{isActive:Gl(i),pause:r,resume:s,eventFilter:(...a)=>{i.value&&n(...a)}}}function E_(n){return n.endsWith("rem")?Number.parseFloat(n)*16:Number.parseFloat(n)}function ah(n){return Array.isArray(n)?n:[n]}function $S(n){return Ha()}function YS(n,e,t={}){const{eventFilter:i=Fv,...r}=t;return es(n,WS(i,e),r)}function qS(n,e,t={}){const{eventFilter:i,initialState:r="active",...s}=t,{eventFilter:o,pause:a,resume:l,isActive:c}=XS(i,{initialState:r});return{stop:YS(n,e,{...s,eventFilter:o}),pause:a,resume:l,isActive:c}}function jS(n,e=!0,t){$S()?ri(n,t):e?n():dr(n)}function KS(n,e,t){return es(n,e,{...t,immediate:!0})}const Ku=BS?window:void 0;function ZS(n){var e;const t=Rs(n);return(e=t==null?void 0:t.$el)!=null?e:t}function pd(...n){const e=[],t=()=>{e.forEach(a=>a()),e.length=0},i=(a,l,c,u)=>(a.addEventListener(l,c,u),()=>a.removeEventListener(l,c,u)),r=An(()=>{const a=ah(Rs(n[0])).filter(l=>l!=null);return a.every(l=>typeof l!="string")?a:void 0}),s=KS(()=>{var a,l;return[(l=(a=r.value)==null?void 0:a.map(c=>ZS(c)))!=null?l:[Ku].filter(c=>c!=null),ah(Rs(r.value?n[1]:n[0])),ah(ce(r.value?n[2]:n[1])),Rs(r.value?n[3]:n[2])]},([a,l,c,u])=>{if(t(),!(a!=null&&a.length)||!(l!=null&&l.length)||!(c!=null&&c.length))return;const f=HS(u)?{...u}:u;e.push(...a.flatMap(h=>l.flatMap(d=>c.map(_=>i(h,d,_,f)))))},{flush:"post"}),o=()=>{s(),t()};return FS(t),o}function JS(){const n=Ml(!1),e=Ha();return e&&ri(()=>{n.value=!0},e),n}function QS(n){const e=JS();return An(()=>(e.value,!!n()))}const eM=Symbol("vueuse-ssr-width");function tM(){const n=Wp()?kS(eM,null):null;return typeof n=="number"?n:void 0}function nM(n,e={}){const{window:t=Ku,ssrWidth:i=tM()}=e,r=QS(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function"),s=Ml(typeof i=="number"),o=Ml(),a=Ml(!1),l=c=>{a.value=c.matches};return Q0(()=>{if(s.value){s.value=!r.value;const c=Rs(n).split(",");a.value=c.some(u=>{const f=u.includes("not all"),h=u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),d=u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let _=!!(h||d);return h&&_&&(_=i>=E_(h[1])),d&&_&&(_=i<=E_(d[1])),f?!_:_});return}r.value&&(o.value=t.matchMedia(Rs(n)),a.value=o.value.matches)}),pd(o,"change",l,{passive:!0}),An(()=>a.value)}const wc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ac="__vueuse_ssr_handlers__",iM=rM();function rM(){return Ac in wc||(wc[Ac]=wc[Ac]||{}),wc[Ac]}function sM(n,e){return iM[n]||e}function oM(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}const aM={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},T_="vueuse-storage";function Cc(n,e,t,i={}){var r;const{flush:s="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:f=Ku,eventFilter:h,onError:d=F=>{console.error(F)},initOnMounted:_}=i,g=(u?Ml:dt)(typeof e=="function"?e():e),m=An(()=>Rs(n));if(!t)try{t=sM("getDefaultStorage",()=>{var F;return(F=Ku)==null?void 0:F.localStorage})()}catch(F){d(F)}if(!t)return g;const p=Rs(e),S=oM(p),b=(r=i.serializer)!=null?r:aM[S],{pause:v,resume:w}=qS(g,F=>x(F),{flush:s,deep:o,eventFilter:h});es(m,()=>L(),{flush:s});let R=!1;const T=F=>{_&&!R||L(F)},P=F=>{_&&!R||B(F)};f&&a&&(t instanceof Storage?pd(f,"storage",T,{passive:!0}):pd(f,T_,P)),_?jS(()=>{R=!0,L()}):L();function y(F,j){if(f){const X={key:m.value,oldValue:F,newValue:j,storageArea:t};f.dispatchEvent(t instanceof Storage?new StorageEvent("storage",X):new CustomEvent(T_,{detail:X}))}}function x(F){try{const j=t.getItem(m.value);if(F==null)y(j,null),t.removeItem(m.value);else{const X=b.write(F);j!==X&&(t.setItem(m.value,X),y(j,X))}}catch(j){d(j)}}function N(F){const j=F?F.newValue:t.getItem(m.value);if(j==null)return l&&p!=null&&t.setItem(m.value,b.write(p)),p;if(!F&&c){const X=b.read(j);return typeof c=="function"?c(X,p):S==="object"&&!Array.isArray(X)?{...p,...X}:X}else return typeof j!="string"?j:b.read(j)}function L(F){if(!(F&&F.storageArea!==t)){if(F&&F.key==null){g.value=p;return}if(!(F&&F.key!==m.value)){v();try{const j=b.write(g.value);(F===void 0||(F==null?void 0:F.newValue)!==j)&&(g.value=N(F))}catch(j){d(j)}finally{F?dr(w):w()}}}}function B(F){L(F.detail)}return g}function lM(n){const e=nM("(prefers-reduced-motion: reduce)",n);return An(()=>e.value?"reduce":"no-preference")}const us=OS("experience",()=>{const n=Cc("portfolio-theme","dark"),e=An(()=>n.value==="dark");function t(){n.value=n.value==="dark"?"light":"dark"}Q0(()=>{if(typeof document>"u")return;const L=document.documentElement;L.classList.add("theme-switching"),L.classList.toggle("dark",n.value==="dark"),L.offsetHeight,L.classList.remove("theme-switching")});const i=Cc("portfolio-mode","immersive"),r=dt(i.value),s=Cc("portfolio-animations",!0);lM().value==="reduce"&&(s.value=!1);const a=Cc("portfolio-sound",!1),l=dt(0),c=dt(11),u=dt(0),f=dt(0),h=dt(0),d=dt(0);es(r,L=>{i.value=L});function _(L,B=!0){r.value=L,B&&(i.value=L)}function g(){r.value=r.value==="immersive"?"clean":"immersive"}function m(){a.value=!a.value}function p(){s.value=!s.value}const S=dt(!1);let b=0,v=performance.now(),w=0,R=null;function T(){if(r.value!=="immersive")return;b=0,v=performance.now(),w=0;const L=()=>{b++;const B=performance.now();if(B-v>=1e3){const F=b;b=0,v=B,F<28?(w++,w>=3&&(S.value=!0)):w=Math.max(0,w-1)}r.value==="immersive"&&(R=requestAnimationFrame(L))};R=requestAnimationFrame(L)}function P(){R!==null&&(cancelAnimationFrame(R),R=null),S.value=!1}function y(){S.value=!1}const x=dt(0);function N(){if(typeof window>"u")return;const L=document.documentElement.scrollHeight-window.innerHeight;x.value=L>0?window.scrollY/L:0}return{theme:n,isDark:e,toggleDark:t,mode:r,setMode:_,toggleMode:g,animationsEnabled:s,toggleAnimations:p,soundEnabled:a,toggleSound:m,activeNodeIndex:l,totalNodes:c,carouselRotation:u,journeyProgress:f,activeSkillIndex:h,activeResearchIndex:d,scrollProgress:x,updateScrollProgress:N,showFpsWarning:S,startFpsMonitor:T,stopFpsMonitor:P,dismissFpsWarning:y}});var w_="1.3.26";function kv(n,e,t){return Math.max(n,Math.min(e,t))}function cM(n,e,t){return(1-t)*n+t*e}function uM(n,e,t,i){return cM(n,e,1-Math.exp(-t*i))}function fM(n,e){return(n%e+e)%e}var hM=class{constructor(){Je(this,"isRunning",!1);Je(this,"value",0);Je(this,"from",0);Je(this,"to",0);Je(this,"currentTime",0);Je(this,"lerp");Je(this,"duration");Je(this,"easing");Je(this,"onUpdate")}advance(n){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const i=kv(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=uM(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:r,onStart:s,onUpdate:o}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function dM(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,i)},e)}}var pM=class{constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){Je(this,"width",0);Je(this,"height",0);Je(this,"scrollHeight",0);Je(this,"scrollWidth",0);Je(this,"debouncedResize");Je(this,"wrapperResizeObserver");Je(this,"contentResizeObserver");Je(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Je(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Je(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=e,t&&(this.debouncedResize=dM(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,e;(n=this.wrapperResizeObserver)==null||n.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Bv=class{constructor(){Je(this,"events",{})}emit(n,...e){var i;const t=this.events[n]||[];for(let r=0,s=t.length;r<s;r++)(i=t[r])==null||i.call(t,...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}}off(n,e){var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}};const mM=100/6,hs={passive:!1};function A_(n,e){return n===1?mM:n===2?e:1}var _M=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){Je(this,"touchStart",{x:0,y:0});Je(this,"lastDelta",{x:0,y:0});Je(this,"window",{width:0,height:0});Je(this,"emitter",new Bv);Je(this,"onTouchStart",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});Je(this,"onTouchMove",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:n})});Je(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});Je(this,"onWheel",n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n;const r=A_(i,this.window.width),s=A_(i,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})});Je(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,hs),this.element.addEventListener("touchstart",this.onTouchStart,hs),this.element.addEventListener("touchmove",this.onTouchMove,hs),this.element.addEventListener("touchend",this.onTouchEnd,hs)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,hs),this.element.removeEventListener("touchstart",this.onTouchStart,hs),this.element.removeEventListener("touchmove",this.onTouchMove,hs),this.element.removeEventListener("touchend",this.onTouchEnd,hs)}};const C_=n=>Math.min(1,1.001-2**(-10*n));var gM=class{constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:S=!0,autoRaf:b=!1,anchors:v=!1,autoToggle:w=!1,allowNestedScroll:R=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:P=T,stopInertiaOnNavigate:y=!1,respectReducedMotion:x=!0}={}){Je(this,"_isScrolling",!1);Je(this,"_isStopped",!1);Je(this,"_isLocked",!1);Je(this,"_preventNextNativeScrollEvent",!1);Je(this,"_resetVelocityTimeout",null);Je(this,"_rafId",null);Je(this,"_isDraggingSelection",!1);Je(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Je(this,"isTouching");Je(this,"isIos");Je(this,"time",0);Je(this,"userData",{});Je(this,"lastVelocity",0);Je(this,"velocity",0);Je(this,"direction",0);Je(this,"options");Je(this,"targetScroll");Je(this,"animatedScroll");Je(this,"animate",new hM);Je(this,"emitter",new Bv);Je(this,"dimensions");Je(this,"virtualScroll");Je(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});Je(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Je(this,"onTransitionEnd",n=>{var e;(e=n.propertyName)!=null&&e.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});Je(this,"onClick",n=>{const e=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}});Je(this,"onPointerDown",n=>{n.button===1&&this.reset()});Je(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");if(r&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(_=>{var g,m,p,S,b;return _ instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(_))||((g=_.hasAttribute)==null?void 0:g.call(_,"data-lenis-prevent"))||u==="vertical"&&((m=_.hasAttribute)==null?void 0:m.call(_,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=_.hasAttribute)==null?void 0:p.call(_,"data-lenis-prevent-horizontal"))||r&&((S=_.hasAttribute)==null?void 0:S.call(_,"data-lenis-prevent-touch"))||s&&((b=_.hasAttribute)==null?void 0:b.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const h=r&&this.options.syncTouch,d=r&&i.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...h?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Je(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Je(this,"raf",n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=w_,window.lenis||(window.lenis={}),window.lenis.version=w_,f==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!n||n===document.documentElement)&&(n=window),typeof a=="number"&&typeof l!="function"?l=C_:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:m,virtualScroll:p,overscroll:S,autoRaf:b,anchors:v,autoToggle:w,allowNestedScroll:R,naiveDimensions:P,stopInertiaOnNavigate:y,respectReducedMotion:x},this.dimensions=new pM(n,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new _M(t,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}isTouchOnSelectionHandle(n){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=n.targetTouches[0]??n.changedTouches[0];if(!t)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const r=i[0],s=i[i.length-1],o=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if(this.prefersReducedMotion&&(r?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let h=n,d=e;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let _=null;if(typeof h=="string"?(_=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),_||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&(h!=null&&h.nodeType)&&(_=h),_){if(this.options.wrapper!==window){const v=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?v.left:v.top}const g=_.getBoundingClientRect(),m=getComputedStyle(_),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),S=getComputedStyle(this.rootElement),b=this.isHorizontal?Number.parseFloat(S.scrollPaddingLeft):Number.parseFloat(S.scrollPaddingTop);h=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(b)?0:b)}}if(typeof h=="number"){if(h+=d,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const _=h-this.animatedScroll;_>this.limit/2?h-=this.limit:_<-this.limit/2&&(h+=this.limit)}}else h=kv(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=h),typeof o=="number"&&typeof a!="function"?a=C_:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,h,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(_,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),r&&(this.targetScroll=_),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const i=Date.now();n._lenis||(n._lenis={});const r=n._lenis;let s,o,a,l,c,u,f,h,d,_;if(i-(r.time??0)>2e3){r.time=Date.now();const R=window.getComputedStyle(n);if(r.computedStyle=R,s=["auto","overlay","scroll"].includes(R.overflowX),o=["auto","overlay","scroll"].includes(R.overflowY),c=["auto"].includes(R.overscrollBehaviorX),u=["auto"].includes(R.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;f=n.scrollWidth,h=n.scrollHeight,d=n.clientWidth,_=n.clientHeight,a=f>d,l=h>_,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=f,r.scrollHeight=h,r.clientWidth=d,r.clientHeight=_,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,f=r.scrollWidth,h=r.scrollHeight,d=r.clientWidth,_=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,p,S,b,v,w;if(g==="horizontal")m=Math.round(n.scrollLeft),p=f-d,S=e,b=s,v=a,w=c;else if(g==="vertical")m=Math.round(n.scrollTop),p=h-_,S=t,b=o,v=l,w=u;else return!1;return!w&&(m>=p||m<=0)?!0:(S>0?m<p:m>0)&&b&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?fM(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};function Gr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function zv(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ni={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Zl={duration:.5,overwrite:!1,delay:0},Kp,Dn,qt,Ki=1e8,Vt=1/Ki,md=Math.PI*2,vM=md/4,xM=0,Hv=Math.sqrt,yM=Math.cos,bM=Math.sin,Cn=function(e){return typeof e=="string"},rn=function(e){return typeof e=="function"},os=function(e){return typeof e=="number"},Zp=function(e){return typeof e>"u"},Lr=function(e){return typeof e=="object"},hi=function(e){return e!==!1},Jp=function(){return typeof window<"u"},Rc=function(e){return rn(e)||Cn(e)},Vv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Hn=Array.isArray,SM=/random\([^)]+\)/g,MM=/,\s*/g,R_=/(?:-?\.?\d|\.)+/gi,Gv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ha=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,lh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Wv=/[+-]=-?[.\d]+/,EM=/[^,'"\[\]\s]+/gi,TM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Zt,xr,_d,Qp,Oi={},Zu={},Xv,$v=function(e){return(Zu=Pa(e,Oi))&&vi},em=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Jl=function(e,t){return!t&&console.warn(e)},Yv=function(e,t){return e&&(Oi[e]=t)&&Zu&&(Zu[e]=t)||Oi},Ql=function(){return 0},wM={suppressEvents:!0,isStart:!0,kill:!1},xu={suppressEvents:!0,kill:!1},AM={suppressEvents:!0},tm={},Ps=[],gd={},qv,Mi={},ch={},P_=30,yu=[],nm="",im=function(e){var t=e[0],i,r;if(Lr(t)||rn(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=yu.length;r--&&!yu[r].targetTest(t););i=yu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new _x(e[r],i)))||e.splice(r,1);return e},Mo=function(e){return e._gsap||im(Zi(e))[0]._gsap},jv=function(e,t,i){return(i=e[t])&&rn(i)?e[t]():Zp(i)&&e.getAttribute&&e.getAttribute(t)||i},di=function(e,t){return(e=e.split(",")).forEach(t)||e},ln=function(e){return Math.round(e*1e5)/1e5||0},Kt=function(e){return Math.round(e*1e7)/1e7||0},ba=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},CM=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Ju=function(){var e=Ps.length,t=Ps.slice(0),i,r;for(gd={},Ps.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},rm=function(e){return!!(e._initted||e._startAt||e.add)},Kv=function(e,t,i,r){Ps.length&&!Dn&&Ju(),e.render(t,i,!!(Dn&&t<0&&rm(e))),Ps.length&&!Dn&&Ju()},Zv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(EM).length<2?t:Cn(e)?e.trim():e},Jv=function(e){return e},Fi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},RM=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Pa=function(e,t){for(var i in t)e[i]=t[i];return e},D_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Lr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Qu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Cl=function(e){var t=e.parent||Zt,i=e.keyframes?RM(Hn(e.keyframes)):Fi;if(hi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},PM=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Qv=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Ff=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},ks=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Eo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},DM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},vd=function(e,t,i,r){return e._startAt&&(Dn?e._startAt.revert(xu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},LM=function n(e){return!e||e._ts&&n(e.parent)},L_=function(e){return e._repeat?Da(e._tTime,e=e.duration()+e._rDelay)*e:0},Da=function(e,t){var i=Math.floor(e=Kt(e/t));return e&&i===e?i-1:i},ef=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},kf=function(e){return e._end=Kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Vt)||0))},Bf=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Kt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),kf(e),i._dirty||Eo(i,e)),e},ex=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=ef(e.rawTime(),t),(!t._dur||pc(0,t.totalDuration(),i)-t._tTime>Vt)&&t.render(i,!0)),Eo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Vt}},Tr=function(e,t,i,r){return t.parent&&ks(t),t._start=Kt((os(i)?i:i||e!==Zt?Gi(e,i,t):e._time)+t._delay),t._end=Kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Qv(e,t,"_first","_last",e._sort?"_start":0),xd(t)||(e._recent=t),r||ex(e,t),e._ts<0&&Bf(e,e._tTime),e},tx=function(e,t){return(Oi.ScrollTrigger||em("scrollTrigger",t))&&Oi.ScrollTrigger.create(t,e)},nx=function(e,t,i,r,s){if(om(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Dn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&qv!==Ai.frame)return Ps.push(e),e._lazy=[s,r],1},IM=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},xd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},NM=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&IM(e)&&!(!e._initted&&xd(e))||(e._ts<0||e._dp._ts<0)&&!xd(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=pc(0,e._tDur,t),u=Da(l,a),e._yoyo&&u&1&&(o=1-o),u!==Da(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Dn||r||e._zTime===Vt||!t&&e._zTime){if(!e._initted&&nx(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?Vt:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&vd(e,t,i,!0),e._onUpdate&&!i&&Di(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Di(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ks(e,1),!i&&!Dn&&(Di(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},UM=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},La=function(e,t,i,r){var s=e._repeat,o=Kt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Kt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Bf(e,e._tTime=e._tDur*a),e.parent&&kf(e),i||Eo(e.parent,e),e},I_=function(e){return e instanceof fi?Eo(e):La(e,e._dur)},OM={_start:0,endTime:Ql,totalDuration:Ql},Gi=function n(e,t,i){var r=e.labels,s=e._recent||OM,o=e.duration()>=Ki?s.endTime(!1):e._dur,a,l,c;return Cn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Hn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Rl=function(e,t,i){var r=os(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=hi(l.vars.inherit)&&l.parent;o.immediateRender=hi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new dn(t[0],o,t[s+1])},Xs=function(e,t){return e||e===0?t(e):t},pc=function(e,t,i){return i<e?e:i>t?t:i},Bn=function(e,t){return!Cn(e)||!(t=TM.exec(e))?"":t[1]},FM=function(e,t,i){return Xs(i,function(r){return pc(e,t,r)})},yd=[].slice,ix=function(e,t){return e&&Lr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Lr(e[0]))&&!e.nodeType&&e!==xr},kM=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Cn(r)&&!t||ix(r,1)?(s=i).push.apply(s,Zi(r)):i.push(r)})||i},Zi=function(e,t,i){return qt&&!t&&qt.selector?qt.selector(e):Cn(e)&&!i&&(_d||!Ia())?yd.call((t||Qp).querySelectorAll(e),0):Hn(e)?kM(e,i):ix(e)?yd.call(e,0):e?[e]:[]},bd=function(e){return e=Zi(e)[0]||Jl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Zi(t,i.querySelectorAll?i:i===e?Jl("Invalid scope")||Qp.createElement("div"):e)}},rx=function(e){return e.sort(function(){return .5-Math.random()})},sx=function(e){if(rn(e))return e;var t=Lr(e)?e:{each:e},i=To(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return Cn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,_){var g=(_||t).length,m=o[g],p,S,b,v,w,R,T,P,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,Ki])[1],!y){for(T=-Ki;T<(T=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=o[g]=[],p=l?Math.min(y,g)*u-.5:r%y,S=y===Ki?0:l?g*f/y-.5:r/y|0,T=0,P=Ki,R=0;R<g;R++)b=R%y-p,v=S-(R/y|0),m[R]=w=c?Math.abs(c==="y"?v:b):Hv(b*b+v*v),w>T&&(T=w),w<P&&(P=w);r==="random"&&rx(m),m.max=T-P,m.min=P,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Bn(t.amount||t.each)||0,i=i&&g<0?ZM(i):i}return g=(m[h]-m.min)/m.max||0,Kt(m.b+(i?i(g):g)*m.v)+m.u}},Sd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Kt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(os(i)?0:Bn(i))}},ox=function(e,t){var i=Hn(e),r,s;return!i&&Lr(e)&&(r=i=e.radius||Ki,e.values?(e=Zi(e.values),(s=!os(e[0]))&&(r*=r)):e=Sd(e.increment)),Xs(t,i?rn(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ki,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||os(o)?u:u+Bn(o)}:Sd(e))},ax=function(e,t,i,r){return Xs(Hn(e)?!t:i===!0?!!(i=0):!r,function(){return Hn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},BM=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},zM=function(e,t){return function(i){return e(parseFloat(i))+(t||Bn(i))}},HM=function(e,t,i){return cx(e,t,0,1,i)},lx=function(e,t,i){return Xs(i,function(r){return e[~~t(r)]})},VM=function n(e,t,i){var r=t-e;return Hn(e)?lx(e,n(0,e.length),t):Xs(i,function(s){return(r+(s-e)%r)%r+e})},GM=function n(e,t,i){var r=t-e,s=r*2;return Hn(e)?lx(e,n(0,e.length-1),t):Xs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},ec=function(e){return e.replace(SM,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(MM);return ax(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},cx=function(e,t,i,r,s){var o=t-e,a=r-i;return Xs(s,function(l){return i+((l-e)/o*a||0)})},WM=function n(e,t,i,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Cn(e),a={},l,c,u,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Hn(e)&&!Hn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(_){_*=f;var g=Math.min(h,~~_);return u[g](_-g)},i=t}else r||(e=Pa(Hn(e)?[]:{},e));if(!u){for(l in t)sm.call(a,e,l,"get",t[l]);s=function(_){return cm(_,a)||(o?e.p:e)}}}return Xs(i,s)},N_=function(e,t,i){var r=e.labels,s=Ki,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Di=function(e,t,i){var r=e.vars,s=r[t],o=qt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Ps.length&&Ju(),a&&(qt=a),u=l?s.apply(c,l):s.call(c),qt=o,u},fl=function(e){return ks(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Dn),e.progress()<1&&Di(e,"onInterrupt"),e},da,ux=[],fx=function(e){if(e)if(e=!e.name&&e.default||e,Jp()||e.headless){var t=e.name,i=rn(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Ql,render:cm,add:sm,kill:aE,modifier:oE,rawVars:0},o={targetTest:0,get:0,getSetter:lm,aliases:{},register:0};if(Ia(),e!==r){if(Mi[t])return;Fi(r,Fi(Qu(e,s),o)),Pa(r.prototype,Pa(s,Qu(e,o))),Mi[r.prop=t]=r,e.targetTest&&(yu.push(r),tm[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Yv(t,r),e.register&&e.register(vi,r,pi)}else ux.push(e)},Ht=255,hl={aqua:[0,Ht,Ht],lime:[0,Ht,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ht],navy:[0,0,128],white:[Ht,Ht,Ht],olive:[128,128,0],yellow:[Ht,Ht,0],orange:[Ht,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ht,0,0],pink:[Ht,192,203],cyan:[0,Ht,Ht],transparent:[Ht,Ht,Ht,0]},uh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ht+.5|0},hx=function(e,t,i){var r=e?os(e)?[e>>16,e>>8&Ht,e&Ht]:0:hl.black,s,o,a,l,c,u,f,h,d,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),hl[e])r=hl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ht,r&Ht,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ht,e&Ht]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(R_),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=uh(l+1/3,s,o),r[1]=uh(l,s,o),r[2]=uh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Gv),i&&r.length<4&&(r[3]=1),r}else r=e.match(R_)||hl.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/Ht,o=r[1]/Ht,a=r[2]/Ht,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},dx=function(e){var t=[],i=[],r=-1;return e.split(Ds).forEach(function(s){var o=s.match(ha)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},U_=function(e,t,i){var r="",s=(e+r).match(Ds),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=hx(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=dx(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Ds,"1").split(ha),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Ds),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},Ds=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in hl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),XM=/hsl[a]?\(/,px=function(e){var t=e.join(" "),i;if(Ds.lastIndex=0,Ds.test(t))return i=XM.test(t),e[1]=U_(e[1],i),e[0]=U_(e[0],i,dx(e[1])),!0},tc,Ai=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,f,h,d,_=function g(m){var p=n()-r,S=m===!0,b,v,w,R;if((p>e||p<0)&&(i+=p-t),r+=p,w=r-i,b=w-o,(b>0||S)&&(R=++f.frame,h=w-f.time*1e3,f.time=w=w/1e3,o+=b+(b>=s?4:s-b),v=1),S||(l=c(g)),v)for(d=0;d<a.length;d++)a[d](w,h,R,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Xv&&(!_d&&Jp()&&(xr=_d=window,Qp=xr.document||{},Oi.gsap=vi,(xr.gsapVersions||(xr.gsapVersions=[])).push(vi.version),$v(Zu||xr.GreenSockGlobals||!xr.gsap&&xr||{}),ux.forEach(fx)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},tc=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),tc=0,c=Ql},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,S){var b=p?function(v,w,R,T){m(v,w,R,T),f.remove(b)}:m;return f.remove(m),a[S?"unshift":"push"](b),Ia(),b},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),Ia=function(){return!tc&&Ai.wake()},Et={},$M=/^[\d.\-M][\d.\-,\s]/,YM=/["']/g,qM=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(YM,"").trim():+c,r=l.substr(a+1).trim();return t},jM=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},KM=function(e){var t=(e+"").split("("),i=Et[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[qM(t[1])]:jM(e).split(",").map(Zv)):Et._CE&&$M.test(e)?Et._CE("",e):i},ZM=function(e){return function(t){return 1-e(1-t)}},To=function(e,t){return e&&(rn(e)?e:Et[e]||KM(e))||t},ko=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return di(e,function(a){Et[a]=Oi[a]=s,Et[o=a.toLowerCase()]=i;for(var l in s)Et[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Et[a+"."+l]=s[l]}),s},mx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},fh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/md*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*bM((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:mx(a);return s=md/s,l.config=function(c,u){return n(e,c,u)},l},hh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:mx(i);return r.config=function(s){return n(e,s)},r};di("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;ko(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Et.Linear.easeNone=Et.none=Et.Linear.easeIn;ko("Elastic",fh("in"),fh("out"),fh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};ko("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ko("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});ko("Circ",function(n){return-(Hv(1-n*n)-1)});ko("Sine",function(n){return n===1?1:-yM(n*vM)+1});ko("Back",hh("in"),hh("out"),hh());Et.SteppedEase=Et.steps=Oi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Vt;return function(a){return((r*pc(0,o,a)|0)+s)*i}}};Zl.ease=Et["quad.out"];di("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return nm+=n+","+n+"Params,"});var _x=function(e,t){this.id=xM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:jv,this.set=t?t.getSetter:lm},nc=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,La(this,+t.duration,1,1),this.data=t.data,qt&&(this._ctx=qt,qt.data.push(this)),tc||Ai.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,La(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ia(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Bf(this,i),!s._dp||s.parent||ex(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Tr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Vt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Kv(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+L_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+L_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Da(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Vt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?ef(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Vt?0:this._rts,this.totalTime(pc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),kf(this),DM(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ia(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Vt&&(this._tTime-=Vt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Kt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Tr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(hi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ef(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=AM);var r=Dn;return Dn=i,rm(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Dn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,I_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,I_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Gi(this,i),hi(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,hi(r)),this._dur||(this._zTime=-Vt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Vt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Vt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Vt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=rn(i)?i:Jv,l=function(){var u=r.then;r.then=null,s&&s(),rn(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){fl(this)},n}();Fi(nc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Vt,_prom:0,_ps:!1,_rts:1});var fi=function(n){zv(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=hi(i.sortChildren),Zt&&Tr(i.parent||Zt,Gr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&tx(Gr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Rl(0,arguments,this),this},t.from=function(r,s,o){return Rl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Rl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Cl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new dn(r,s,Gi(this,o),1),this},t.call=function(r,s,o){return Tr(this,dn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new dn(r,o,Gi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Cl(o).immediateRender=hi(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,Cl(a).immediateRender=hi(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Kt(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,_,g,m,p,S,b,v,w,R,T;if(this!==Zt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,v=this._start,b=this._ts,p=!b,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=Kt(u%m),u===l?(g=this._repeat,h=c):(w=Kt(u/m),g=~~w,g&&g===w&&(h=c,g--),h>c&&(h=c)),w=Da(this._tTime,m),!a&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),R&&g&1&&(h=c-h,T=1),g!==w&&!this._lock){var P=R&&w&1,y=P===(R&&g&1);if(g<w&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Kt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Di(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,w=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=UM(this,Kt(a),Kt(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!w&&(Di(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){S=0,_&&(u+=this._zTime=-Vt);break}}d=_}else{d=this._last;for(var x=r<0?r:h;d;){if(_=d._prev,(d._act||x<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,o||Dn&&rm(d)),h!==this._time||!this._ts&&!p){S=0,_&&(u+=this._zTime=x?-Vt:Vt);break}}d=_}}if(S&&!s&&(this.pause(),S.render(h>=a?0:-Vt)._zTime=h>=a?1:-1,this._ts))return this._start=v,kf(this),this.render(r,s,o);this._onUpdate&&!s&&Di(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ks(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Di(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(os(s)||(s=Gi(this,s,r)),!(r instanceof nc)){if(Hn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Cn(r))return this.addLabel(r,s);if(rn(r))r=dn.delayedCall(0,r);else return this}return this!==r?Tr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ki);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof dn?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Cn(r)?this.removeLabel(r):rn(r)?this.killTweensOf(r):(r.parent===this&&Ff(this,r),r===this._recent&&(this._recent=this._last),Eo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Kt(Ai.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Gi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=dn.delayedCall(0,s||Ql,o);return a.data="isPause",this._hasPause=1,Tr(this,a,Gi(this,r))},t.removePause=function(r){var s=this._first;for(r=Gi(this,r);s;)s._start===r&&s.data==="isPause"&&ks(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Es!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Zi(r),l=this._first,c=os(s),u;l;)l instanceof dn?CM(l._targets,a)&&(c?(!Es||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Gi(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,_=dn.to(o,Fi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Vt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&La(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Fi({startAt:{time:Gi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),N_(this,Gi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),N_(this,Gi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Vt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=Kt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Eo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Eo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Ki,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Tr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Kt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;La(o,o===Zt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Zt._ts&&(Kv(Zt,ef(r,Zt)),qv=Ai.frame),Ai.frame>=P_){P_+=Ni.autoSleep||120;var s=Zt._first;if((!s||!s._ts)&&Ni.autoSleep&&Ai._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ai.sleep()}}},e}(nc);Fi(fi.prototype,{_lock:0,_hasPause:0,_forcing:0});var JM=function(e,t,i,r,s,o,a){var l=new pi(this._pt,e,t,0,1,Sx,null,s),c=0,u=0,f,h,d,_,g,m,p,S;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=ec(r)),o&&(S=[i,r],o(S,e,t),i=S[0],r=S[1]),h=i.match(lh)||[];f=lh.exec(r);)_=f[0],g=r.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?ba(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=lh.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Wv.test(r)||p)&&(l.e=0),this._pt=l,l},sm=function(e,t,i,r,s,o,a,l,c,u){rn(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:rn(f)?c?e[t.indexOf("set")||!rn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=rn(f)?c?iE:yx:am,_;if(Cn(r)&&(~r.indexOf("random(")&&(r=ec(r)),r.charAt(1)==="="&&(_=ba(h,r)+(Bn(h)||0),(_||_===0)&&(r=_))),!u||h!==r||Md)return!isNaN(h*r)&&r!==""?(_=new pi(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?sE:bx,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&em(t,r),JM.call(this,e,t,h,r,d,l||Ni.stringFilter,c))},QM=function(e,t,i,r,s){if(rn(e)&&(e=Pl(e,s,t,i,r)),!Lr(e)||e.style&&e.nodeType||Hn(e)||Vv(e))return Cn(e)?Pl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Pl(e[a],s,t,i,r);return o},gx=function(e,t,i,r,s,o){var a,l,c,u;if(Mi[e]&&(a=new Mi[e]).init(s,a.rawVars?t[e]:QM(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new pi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==da))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Es,Md,om=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,b=e._overwrite==="auto"&&!Kp,v=e.timeline,w=r.easeReverse||f,R,T,P,y,x,N,L,B,F,j,X,$,W;if(v&&(!h||!s)&&(s="none"),e._ease=To(s,Zl.ease),e._rEase=w&&(To(w)||e._ease),e._from=!v&&!!r.runBackwards,e._from&&(e.ratio=1),!v||h&&!r.stagger){if(B=m[0]?Mo(m[0]).harness:0,$=B&&r[B.prop],R=Qu(r,tm),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?xu:wM),g._lazy=0),o){if(ks(e._startAt=dn.set(m,Fi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&hi(l),startAt:null,delay:0,onUpdate:c&&function(){return Di(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dn||!a&&!d)&&e._startAt.revert(xu),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),P=Fi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&hi(l),immediateRender:a,stagger:0,parent:p},R),$&&(P[B.prop]=$),ks(e._startAt=dn.set(m,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dn?e._startAt.revert(xu):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Vt,Vt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&hi(l)||l&&!_,T=0;T<m.length;T++){if(x=m[T],L=x._gsap||im(m)[T]._gsap,e._ptLookup[T]=j={},gd[L.id]&&Ps.length&&Ju(),X=S===m?T:S.indexOf(x),B&&(F=new B).init(x,$||R,e,X,S)!==!1&&(e._pt=y=new pi(e._pt,x,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(me){j[me]=y}),F.priority&&(N=1)),!B||$)for(P in R)Mi[P]&&(F=gx(P,R,e,X,x,S))?F.priority&&(N=1):j[P]=y=sm.call(e,x,P,"get",R[P],X,S,0,r.stringFilter);e._op&&e._op[T]&&e.kill(x,e._op[T]),b&&e._pt&&(Es=e,Zt.killTweensOf(x,j,e.globalTime(t)),W=!e.parent,Es=0),e._pt&&l&&(gd[L.id]=1)}N&&Mx(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!W,h&&t<=0&&v.render(Ki,!0,!0)},eE=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Md=1,e.vars[t]="+=0",om(e,a),Md=0,l?Jl(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,f.e&&(f.e=ln(i)+Bn(f.e)),f.b&&(f.b=u.s+Bn(f.b))},tE=function(e,t){var i=e[0]?Mo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Pa({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},nE=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Hn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Pl=function(e,t,i,r,s){return rn(e)?e.call(t,i,r,s):Cn(e)&&~e.indexOf("random(")?ec(e):e},vx=nm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",xx={};di(vx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return xx[n]=1});var dn=function(n){zv(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Cl(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=r.parent||Zt,S=(Hn(i)||Vv(i)?os(i[0]):"length"in r)?[i]:Zi(i),b,v,w,R,T,P,y,x;if(a._targets=S.length?im(S):Jl("GSAP target "+i+" not found. https://gsap.com",!Ni.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||h||Rc(c)||Rc(u)){r=a.vars;var N=r.easeReverse||r.yoyoEase;if(b=a.timeline=new fi({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:S}),b.kill(),b.parent=b._dp=Gr(a),b._start=0,h||Rc(c)||Rc(u)){if(R=S.length,y=h&&sx(h),Lr(h))for(T in h)~vx.indexOf(T)&&(x||(x={}),x[T]=h[T]);for(v=0;v<R;v++)w=Qu(r,xx),w.stagger=0,N&&(w.easeReverse=N),x&&Pa(w,x),P=S[v],w.duration=+Pl(c,Gr(a),v,P,S),w.delay=(+Pl(u,Gr(a),v,P,S)||0)-a._delay,!h&&R===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),b.to(P,w,y?y(v,P,S):0),b._ease=Et.none;b.duration()?c=u=0:a.timeline=0}else if(_){Cl(Fi(b.vars.defaults,{ease:"none"})),b._ease=To(_.ease||r.ease||"none");var L=0,B,F,j;if(Hn(_))_.forEach(function(X){return b.to(S,X,">")}),b.duration();else{w={};for(T in _)T==="ease"||T==="easeEach"||nE(T,_[T],w,_.easeEach);for(T in w)for(B=w[T].sort(function(X,$){return X.t-$.t}),L=0,v=0;v<B.length;v++)F=B[v],j={ease:F.e,duration:(F.t-(v?B[v-1].t:0))/100*c},j[T]=F.v,b.to(S,j,L),L+=j.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return d===!0&&!Kp&&(Es=Gr(a),Zt.killTweensOf(S),Es=0),Tr(p,Gr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!_&&a._start===Kt(p._time)&&hi(f)&&LM(Gr(a))&&p.data!=="nested")&&(a._tTime=-Vt,a.render(Math.max(0,-u)||0)),m&&tx(Gr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Vt&&!u?l:r<Vt?0:r,h,d,_,g,m,p,S,b;if(!c)NM(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,b=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(h=Kt(f%g),f===l?(_=this._repeat,h=c):(m=Kt(f/g),_=~~m,_&&_===m?(h=c,_--):h>c&&(h=c)),p=this._yoyo&&_&1,p&&(h=c-h),m=Da(this._tTime,g),h===a&&!o&&this._initted&&_===m)return this._tTime=f,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(Kt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(nx(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var v=h<a;if(v!==this._inv){var w=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=w?(v?-1:1)/w:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(h/c);if(this._from&&(this.ratio=S=1-S),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(Di(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;b&&b.render(r<0?r:b._dur*b._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&vd(this,r,s,o),Di(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Di(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&vd(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ks(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Di(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){tc||Ai.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||om(this,c),u=this._ease(c/this._dur),eE(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Bf(this,0),this.parent||Qv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?fl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Dn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Es&&Es.vars.overwrite!==!0)._first||fl(this),this.parent&&o!==this.timeline.totalDuration()&&La(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Zi(r):a,c=this._ptLookup,u=this._pt,f,h,d,_,g,m,p;if((!s||s==="all")&&PM(a,l))return s==="all"&&(this._pt=0),fl(this);for(f=this._op=this._op||[],s!=="all"&&(Cn(s)&&(g={},di(s,function(S){return g[S]=1}),s=g),s=tE(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,_=h,d={}):(d=f[p]=f[p]||{},_=s);for(g in _)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Ff(this,m,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&fl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Rl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Rl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Zt.killTweensOf(r,s,o)},e}(nc);Fi(dn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});di("staggerTo,staggerFrom,staggerFromTo",function(n){dn[n]=function(){var e=new fi,t=yd.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var am=function(e,t,i){return e[t]=i},yx=function(e,t,i){return e[t](i)},iE=function(e,t,i,r){return e[t](r.fp,i)},rE=function(e,t,i){return e.setAttribute(t,i)},lm=function(e,t){return rn(e[t])?yx:Zp(e[t])&&e.setAttribute?rE:am},bx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},sE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Sx=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},cm=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},oE=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},aE=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ff(this,t,"_pt"):t.dep||(i=1),t=r;return!i},lE=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Mx=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},pi=function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||bx,this.d=l||this,this.set=c||am,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=lE,this.m=i,this.mt=s,this.tween=r},n}();di(nm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return tm[n]=1});Oi.TweenMax=Oi.TweenLite=dn;Oi.TimelineLite=Oi.TimelineMax=fi;Zt=new fi({sortChildren:!1,defaults:Zl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ni.stringFilter=px;var wo=[],bu={},cE=[],O_=0,uE=0,dh=function(e){return(bu[e]||cE).map(function(t){return t()})},Ed=function(){var e=Date.now(),t=[];e-O_>2&&(dh("matchMediaInit"),wo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=xr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),dh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),O_=e,dh("matchMedia"))},Ex=function(){function n(t,i){this.selector=i&&bd(i),this.data=[],this._r=[],this.isReverted=!1,this.id=uE++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){rn(i)&&(s=r,r=i,i=rn);var o=this,a=function(){var c=qt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=bd(s)),qt=o,f=r.apply(o,arguments),rn(f)&&o._r.push(f),qt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,i===rn?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=qt;qt=null,i(this),qt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof dn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof fi?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof dn)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=wo.length;o--;)wo[o].id===this.id&&wo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),fE=function(){function n(t){this.contexts=[],this.scope=t,qt&&qt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Lr(i)||(i={matches:i});var o=new Ex(0,s||this.scope),a=o.conditions={},l,c,u;qt&&!o.selector&&(o.selector=qt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=xr.matchMedia(i[c]),l&&(wo.indexOf(o)<0&&wo.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ed):l.addEventListener("change",Ed)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),tf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return fx(r)})},timeline:function(e){return new fi(e)},getTweensOf:function(e,t){return Zt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Cn(e)&&(e=Zi(e)[0]);var s=Mo(e||{}).get,o=i?Jv:Zv;return i==="native"&&(i=""),e&&(t?o((Mi[t]&&Mi[t].get||s)(e,t,i,r)):function(a,l,c){return o((Mi[a]&&Mi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Zi(e),e.length>1){var r=e.map(function(u){return vi.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=Mi[t],a=Mo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;da._pt=0,f.init(e,i?u+i:u,da,0,[e]),f.render(1,f),da._pt&&cm(1,da)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=vi.to(e,Fi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=To(e.ease,Zl.ease)),D_(Zl,e||{})},config:function(e){return D_(Ni,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Mi[a]&&!Oi[a]&&Jl(t+" effect requires "+a+" plugin.")}),ch[t]=function(a,l,c){return i(Zi(a),Fi(l||{},s),c)},o&&(fi.prototype[t]=function(a,l,c){return this.add(ch[t](a,Lr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Et[e]=To(t)},parseEase:function(e,t){return arguments.length?To(e,t):Et},getById:function(e){return Zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new fi(e),r,s;for(i.smoothChildTiming=hi(e.smoothChildTiming),Zt.remove(i),i._dp=0,i._time=i._tTime=Zt._time,r=Zt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof dn&&r.vars.onComplete===r._targets[0]))&&Tr(i,r,r._start-r._delay),r=s;return Tr(Zt,i,0),i},context:function(e,t){return e?new Ex(e,t):qt},matchMedia:function(e){return new fE(e)},matchMediaRefresh:function(){return wo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Ed()},addEventListener:function(e,t){var i=bu[e]||(bu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=bu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:VM,wrapYoyo:GM,distribute:sx,random:ax,snap:ox,normalize:HM,getUnit:Bn,clamp:FM,splitColor:hx,toArray:Zi,selector:bd,mapRange:cx,pipe:BM,unitize:zM,interpolate:WM,shuffle:rx},install:$v,effects:ch,ticker:Ai,updateRoot:fi.updateRoot,plugins:Mi,globalTimeline:Zt,core:{PropTween:pi,globals:Yv,Tween:dn,Timeline:fi,Animation:nc,getCache:Mo,_removeLinkedListItem:Ff,reverting:function(){return Dn},context:function(e){return e&&qt&&(qt.data.push(e),e._ctx=qt),qt},suppressOverwrites:function(e){return Kp=e}}};di("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return tf[n]=dn[n]});Ai.add(fi.updateRoot);da=tf.to({},{duration:0});var hE=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},dE=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=hE(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},ph=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Cn(s)&&(l={},di(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}dE(a,s)}}}},vi=tf.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Dn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},ph("roundProps",Sd),ph("modifiers"),ph("snap",ox))||tf;dn.version=fi.version=vi.version="3.15.0";Xv=1;Jp()&&Ia();Et.Power0;Et.Power1;Et.Power2;Et.Power3;Et.Power4;Et.Linear;Et.Quad;Et.Cubic;Et.Quart;Et.Quint;Et.Strong;Et.Elastic;Et.Back;Et.SteppedEase;Et.Bounce;Et.Sine;Et.Expo;Et.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var F_,Ts,Sa,um,_o,k_,fm,pE=function(){return typeof window<"u"},as={},oo=180/Math.PI,Ma=Math.PI/180,Vo=Math.atan2,B_=1e8,hm=/([A-Z])/g,mE=/(left|right|width|margin|padding|x)/i,_E=/[\s,\(]\S/,wr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Td=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},xE=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},yE=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Tx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},wx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},bE=function(e,t,i){return e.style[t]=i},SE=function(e,t,i){return e.style.setProperty(t,i)},ME=function(e,t,i){return e._gsap[t]=i},EE=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},TE=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},wE=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Jt="transform",mi=Jt+"Origin",AE=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in as&&s){if(this.tfm=this.tfm||{},e!=="transform")e=wr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=$r(r,a)}):this.tfm[e]=o.x?o[e]:$r(r,e),e===mi&&(this.tfm.zOrigin=o.zOrigin);else return wr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Jt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(mi,t,"")),e=Jt}(s||t)&&this.props.push(e,t,s[e])},Ax=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},CE=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(hm,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=fm(),(!s||!s.isStart)&&!i[Jt]&&(Ax(i),r.zOrigin&&i[mi]&&(i[mi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Cx=function(e,t){var i={target:e,props:[],revert:CE,save:AE};return e._gsap||vi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Rx,wd=function(e,t){var i=Ts.createElementNS?Ts.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ts.createElement(e);return i&&i.style?i:Ts.createElement(e)},Li=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(hm,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Na(t)||t,1)||""},z_="O,Moz,ms,Ms,Webkit".split(","),Na=function(e,t,i){var r=t||_o,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(z_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?z_[o]:"")+e},Ad=function(){pE()&&window.document&&(F_=window,Ts=F_.document,Sa=Ts.documentElement,_o=wd("div")||{style:{}},wd("div"),Jt=Na(Jt),mi=Jt+"Origin",_o.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rx=!!Na("perspective"),fm=vi.core.reverting,um=1)},H_=function(e){var t=e.ownerSVGElement,i=wd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Sa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Sa.removeChild(i),s},V_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Px=function(e){var t,i;try{t=e.getBBox()}catch{t=H_(e),i=1}return t&&(t.width||t.height)||i||(t=H_(e)),t&&!t.width&&!t.x&&!t.y?{x:+V_(e,["x","cx","x1"])||0,y:+V_(e,["y","cy","y1"])||0,width:0,height:0}:t},Dx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Px(e))},Bs=function(e,t){if(t){var i=e.style,r;t in as&&t!==mi&&(t=Jt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(hm,"-$1").toLowerCase())):i.removeAttribute(t)}},ws=function(e,t,i,r,s,o){var a=new pi(e._pt,t,i,0,1,o?wx:Tx);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},G_={deg:1,rad:1,turn:1},RE={grid:1,flex:1},zs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=_o.style,l=mE.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",_,g,m,p;if(r===o||!s||G_[r]||G_[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),p=e.getCTM&&Dx(e),(d||o==="%")&&(as[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],ln(d?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(h?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Ts||!g.appendChild)&&(g=Ts.body),m=g._gsap,m&&d&&m.width&&l&&m.time===Ai.time&&!m.uncache)return ln(s/m.width*f);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=f+r,_=e[u],S?e.style[t]=S:Bs(e,t)}else(d||o==="%")&&!RE[Li(g,"display")]&&(a.position=Li(e,"position")),g===e&&(a.position="static"),g.appendChild(_o),_=_o[u],g.removeChild(_o),a.position="absolute";return l&&d&&(m=Mo(g),m.time=Ai.time,m.width=g[u]),ln(h?_*s/f:_&&s?f/_*s:0)},$r=function(e,t,i,r){var s;return um||Ad(),t in wr&&t!=="transform"&&(t=wr[t],~t.indexOf(",")&&(t=t.split(",")[0])),as[t]&&t!=="transform"?(s=rc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:rf(Li(e,mi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=nf[t]&&nf[t](e,t,i)||Li(e,t)||jv(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?zs(e,t,s,i)+i:s},PE=function(e,t,i,r){if(!i||i==="none"){var s=Na(t,e,1),o=s&&Li(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Li(e,"borderTopColor"))}var a=new pi(this._pt,e.style,t,0,1,Sx),l=0,c=0,u,f,h,d,_,g,m,p,S,b,v,w;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Li(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Li(e,t)||r,g?e.style[t]=g:Bs(e,t)),u=[i,r],px(u),i=u[0],r=u[1],h=i.match(ha)||[],w=r.match(ha)||[],w.length){for(;f=ha.exec(r);)m=f[0],S=r.substring(l,f.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),m!==(g=h[c++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),m.charAt(1)==="="&&(m=ba(d,m)+v),p=parseFloat(m),b=m.substr((p+"").length),l=ha.lastIndex-b.length,b||(b=b||Ni.units[t]||v,l===r.length&&(r+=b,a.e+=b)),v!==b&&(d=zs(e,t,g,b)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?wx:Tx;return Wv.test(r)&&(a.e=0),this._pt=a,a},W_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},DE=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=W_[i]||i,t[1]=W_[r]||r,t.join(" ")},LE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],as[a]&&(l=1,a=a==="transformOrigin"?mi:Jt),Bs(i,a);l&&(Bs(i,Jt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",rc(i,1),o.uncache=1,Ax(r)))}},nf={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new pi(e._pt,t,i,0,0,LE);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},ic=[1,0,0,1,0,0],Lx={},Ix=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},X_=function(e){var t=Li(e,Jt);return Ix(t)?ic:t.substr(7).match(Gv).map(ln)},dm=function(e,t){var i=e._gsap||Mo(e),r=e.style,s=X_(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ic:s):(s===ic&&!e.offsetParent&&e!==Sa&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Sa.appendChild(e)),s=X_(e),l?r.display=l:Bs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Sa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Cd=function(e,t,i,r,s,o){var a=e._gsap,l=s||dm(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],S=l[5],b=t.split(" "),v=parseFloat(b[0])||0,w=parseFloat(b[1])||0,R,T,P,y;i?l!==ic&&(T=d*m-_*g)&&(P=v*(m/T)+w*(-g/T)+(g*S-m*p)/T,y=v*(-_/T)+w*(d/T)-(d*S-_*p)/T,v=P,w=y):(R=Px(e),v=R.x+(~b[0].indexOf("%")?v/100*R.width:v),w=R.y+(~(b[1]||b[0]).indexOf("%")?w/100*R.height:w)),r||r!==!1&&a.smooth?(p=v-c,S=w-u,a.xOffset=f+(p*d+S*g)-p,a.yOffset=h+(p*_+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[mi]="0px 0px",o&&(ws(o,a,"xOrigin",c,v),ws(o,a,"yOrigin",u,w),ws(o,a,"xOffset",f,a.xOffset),ws(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+w)},rc=function(e,t){var i=e._gsap||new _x(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Li(e,mi)||"0",u,f,h,d,_,g,m,p,S,b,v,w,R,T,P,y,x,N,L,B,F,j,X,$,W,me,O,ye,ze,st,se,xe;return u=f=h=g=m=p=S=b=v=0,d=_=1,i.svg=!!(e.getCTM&&Dx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Jt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Jt]!=="none"?l[Jt]:"")),r.scale=r.rotate=r.translate="none"),T=dm(e,i.svg),i.svg&&(i.uncache?(W=e.getBBox(),c=i.xOrigin-W.x+"px "+(i.yOrigin-W.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),Cd(e,$||c,!!$||i.originIsAbsolute,i.smooth!==!1,T)),w=i.xOrigin||0,R=i.yOrigin||0,T!==ic&&(N=T[0],L=T[1],B=T[2],F=T[3],u=j=T[4],f=X=T[5],T.length===6?(d=Math.sqrt(N*N+L*L),_=Math.sqrt(F*F+B*B),g=N||L?Vo(L,N)*oo:0,S=B||F?Vo(B,F)*oo+g:0,S&&(_*=Math.abs(Math.cos(S*Ma))),i.svg&&(u-=w-(w*N+R*B),f-=R-(w*L+R*F))):(xe=T[6],st=T[7],O=T[8],ye=T[9],ze=T[10],se=T[11],u=T[12],f=T[13],h=T[14],P=Vo(xe,ze),m=P*oo,P&&(y=Math.cos(-P),x=Math.sin(-P),$=j*y+O*x,W=X*y+ye*x,me=xe*y+ze*x,O=j*-x+O*y,ye=X*-x+ye*y,ze=xe*-x+ze*y,se=st*-x+se*y,j=$,X=W,xe=me),P=Vo(-B,ze),p=P*oo,P&&(y=Math.cos(-P),x=Math.sin(-P),$=N*y-O*x,W=L*y-ye*x,me=B*y-ze*x,se=F*x+se*y,N=$,L=W,B=me),P=Vo(L,N),g=P*oo,P&&(y=Math.cos(P),x=Math.sin(P),$=N*y+L*x,W=j*y+X*x,L=L*y-N*x,X=X*y-j*x,N=$,j=W),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=ln(Math.sqrt(N*N+L*L+B*B)),_=ln(Math.sqrt(X*X+xe*xe)),P=Vo(j,X),S=Math.abs(P)>2e-4?P*oo:0,v=se?1/(se<0?-se:se):0),i.svg&&($=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Ix(Li(e,Jt)),$&&e.setAttribute("transform",$))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=ln(d),i.scaleY=ln(_),i.rotation=ln(g)+a,i.rotationX=ln(m)+a,i.rotationY=ln(p)+a,i.skewX=S+a,i.skewY=b+a,i.transformPerspective=v+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[mi]=rf(c)),i.xOffset=i.yOffset=0,i.force3D=Ni.force3D,i.renderTransform=i.svg?NE:Rx?Nx:IE,i.uncache=0,i},rf=function(e){return(e=e.split(" "))[0]+" "+e[1]},mh=function(e,t,i){var r=Bn(t);return ln(parseFloat(t)+parseFloat(zs(e,"x",i+"px",r)))+r},IE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Nx(e,t)},Zs="0deg",Ka="0px",Js=") ",Nx=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,p=i.force3D,S=i.target,b=i.zOrigin,v="",w=p==="auto"&&e&&e!==1||p===!0;if(b&&(f!==Zs||u!==Zs)){var R=parseFloat(u)*Ma,T=Math.sin(R),P=Math.cos(R),y;R=parseFloat(f)*Ma,y=Math.cos(R),o=mh(S,o,T*y*-b),a=mh(S,a,-Math.sin(R)*-b),l=mh(S,l,P*y*-b+b)}m!==Ka&&(v+="perspective("+m+Js),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(w||o!==Ka||a!==Ka||l!==Ka)&&(v+=l!==Ka||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Js),c!==Zs&&(v+="rotate("+c+Js),u!==Zs&&(v+="rotateY("+u+Js),f!==Zs&&(v+="rotateX("+f+Js),(h!==Zs||d!==Zs)&&(v+="skew("+h+", "+d+Js),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Js),S.style[Jt]=v||"translate(0, 0)"},NE=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,p=i.yOffset,S=i.forceCSS,b=parseFloat(o),v=parseFloat(a),w,R,T,P,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ma,c*=Ma,w=Math.cos(l)*f,R=Math.sin(l)*f,T=Math.sin(l-c)*-h,P=Math.cos(l-c)*h,c&&(u*=Ma,y=Math.tan(c-u),y=Math.sqrt(1+y*y),T*=y,P*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),w*=y,R*=y)),w=ln(w),R=ln(R),T=ln(T),P=ln(P)):(w=f,P=h,R=T=0),(b&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(b=zs(d,"x",o,"px"),v=zs(d,"y",a,"px")),(_||g||m||p)&&(b=ln(b+_-(_*w+g*T)+m),v=ln(v+g-(_*R+g*P)+p)),(r||s)&&(y=d.getBBox(),b=ln(b+r/100*y.width),v=ln(v+s/100*y.height)),y="matrix("+w+","+R+","+T+","+P+","+b+","+v+")",d.setAttribute("transform",y),S&&(d.style[Jt]=y)},UE=function(e,t,i,r,s){var o=360,a=Cn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?oo:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*B_)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*B_)%o-~~(c/o)*o)),e._pt=h=new pi(e._pt,t,i,r,c,gE),h.e=u,h.u="deg",e._props.push(i),h},$_=function(e,t){for(var i in t)e[i]=t[i];return e},OE=function(e,t,i){var r=$_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,f,h,d,_;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Jt]=t,a=rc(i,1),Bs(i,Jt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Jt],o[Jt]=t,a=rc(i,1),o[Jt]=c);for(l in as)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Bn(c),_=Bn(u),f=d!==_?zs(i,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new pi(e._pt,a,l,f,h-f,Td),e._pt.u=_||0,e._props.push(l));$_(a,r)};di("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});nf[e>1?"border"+n:n]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(_){return $r(a,_,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,d,f)}});var Ux={name:"css",register:Ad,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,f,h,d,_,g,m,p,S,b,v,w,R,T,P,y;um||Ad(),this.styles=this.styles||Cx(e),P=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Mi[g]&&gx(g,t,i,r,e,s)))){if(d=typeof u,_=nf[g],d==="function"&&(u=u.call(i,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ec(u)),_)_(this,e,g,u,i)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Ds.lastIndex=0,Ds.test(c)||(m=Bn(c),p=Bn(u),p?m!==p&&(c=zs(e,g,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],Cn(c)&&~c.indexOf("random(")&&(c=ec(c)),Bn(c+"")||c==="auto"||(c+=Ni.units[g]||Bn($r(e,g))||""),(c+"").charAt(1)==="="&&(c=$r(e,g))):c=$r(e,g),h=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),f=parseFloat(u),g in wr&&(g==="autoAlpha"&&(h===1&&$r(e,"visibility")==="hidden"&&f&&(h=0),P.push("visibility",0,a.visibility),ws(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=wr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),b=g in as,b){if(this.styles.save(g),y=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Li(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=u,u=Li(e,"perspective"),x?e.style.perspective=x:Bs(e,"perspective")}f=parseFloat(u)}if(v||(w=e._gsap,w.renderTransform&&!t.parseTransform||rc(e,t.parseTransform),R=t.smoothOrigin!==!1&&w.smooth,v=this._pt=new pi(this._pt,a,Jt,0,1,w.renderTransform,w,0,-1),v.dep=1),g==="scale")this._pt=new pi(this._pt,w,"scaleY",w.scaleY,(S?ba(w.scaleY,S+f):f)-w.scaleY||0,Td),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(mi,0,a[mi]),u=DE(u),w.svg?Cd(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&ws(this,w,"zOrigin",w.zOrigin,p),ws(this,a,g,rf(c),rf(u)));continue}else if(g==="svgOrigin"){Cd(e,u,1,R,0,this);continue}else if(g in Lx){UE(this,w,g,h,S?ba(h,S+u):u);continue}else if(g==="smoothOrigin"){ws(this,w,"smooth",w.smooth,u);continue}else if(g==="force3D"){w[g]=u;continue}else if(g==="transform"){OE(this,u,e);continue}}else g in a||(g=Na(g)||g);if(b||(f||f===0)&&(h||h===0)&&!_E.test(u)&&g in a)m=(c+"").substr((h+"").length),f||(f=0),p=Bn(u)||(g in Ni.units?Ni.units[g]:m),m!==p&&(h=zs(e,g,c,p)),this._pt=new pi(this._pt,b?w:a,g,h,(S?ba(h,S+f):f)-h,!b&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?yE:Td),this._pt.u=p||0,b&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=xE):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=vE);else if(g in a)PE.call(this,e,g,c,S?S+u:u);else if(g in e)this.add(e,g,c||e[g],S?S+u:u,r,s);else if(g!=="parseTransform"){em(g,u);continue}b||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,c||e[g])),o.push(g)}}T&&Mx(this)},render:function(e,t){if(t.tween._time||!fm())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:$r,aliases:wr,getSetter:function(e,t,i){var r=wr[t];return r&&r.indexOf(",")<0&&(t=r),t in as&&t!==mi&&(e._gsap.x||$r(e,"x"))?i&&k_===i?t==="scale"?EE:ME:(k_=i||{})&&(t==="scale"?TE:wE):e.style&&!Zp(e.style[t])?bE:~t.indexOf("-")?SE:lm(e,t)},core:{_removeProperty:Bs,_getMatrix:dm}};vi.utils.checkPrefix=Na;vi.core.getStyleSaver=Cx;(function(n,e,t,i){var r=di(n+","+e+","+t,function(s){as[s]=1});di(e,function(s){Ni.units[s]="deg",Lx[s]=1}),wr[r[13]]=n+","+e,di(i,function(s){var o=s.split(":");wr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");di("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ni.units[n]="px"});vi.registerPlugin(Ux);var Ui=vi.registerPlugin(Ux)||vi;Ui.core.Tween;function FE(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function kE(n,e,t){return e&&FE(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pn,Su,Ci,As,Cs,Ea,Ox,ao,Ta,Fx,Kr,or,kx,Bx=function(){return Pn||typeof window<"u"&&(Pn=window.gsap)&&Pn.registerPlugin&&Pn},zx=1,pa=[],yt=[],Dr=[],Dl=Date.now,Rd=function(e,t){return t},BE=function(){var e=Ta.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,yt),r.push.apply(r,Dr),yt=i,Dr=r,Rd=function(o,a){return t[o](a)}},Ls=function(e,t){return~Dr.indexOf(e)&&Dr[Dr.indexOf(e)+1][t]},Ll=function(e){return!!~Fx.indexOf(e)},Yn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Xn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Pc="scrollLeft",Dc="scrollTop",Pd=function(){return Kr&&Kr.isPressed||yt.cache++},sf=function(e,t){var i=function r(s){if(s||s===0){zx&&(Ci.history.scrollRestoration="manual");var o=Kr&&Kr.isPressed;s=r.v=Math.round(s)||(Kr&&Kr.iOS?1:0),e(s),r.cacheID=yt.cache,o&&Rd("ss",s)}else(t||yt.cache!==r.cacheID||Rd("ref"))&&(r.cacheID=yt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},ni={s:Pc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:sf(function(n){return arguments.length?Ci.scrollTo(n,yn.sc()):Ci.pageXOffset||As[Pc]||Cs[Pc]||Ea[Pc]||0})},yn={s:Dc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ni,sc:sf(function(n){return arguments.length?Ci.scrollTo(ni.sc(),n):Ci.pageYOffset||As[Dc]||Cs[Dc]||Ea[Dc]||0})},ui=function(e,t){return(t&&t._ctx&&t._ctx.selector||Pn.utils.toArray)(e)[0]||(typeof e=="string"&&Pn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},zE=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Hs=function(e,t){var i=t.s,r=t.sc;Ll(e)&&(e=As.scrollingElement||Cs);var s=yt.indexOf(e),o=r===yn.sc?1:2;!~s&&(s=yt.push(e)-1),yt[s+o]||Yn(e,"scroll",Pd);var a=yt[s+o],l=a||(yt[s+o]=sf(Ls(e,i),!0)||(Ll(e)?r:sf(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=Pn.getProperty(e,"scrollBehavior")==="smooth"),l},Dd=function(e,t,i){var r=e,s=e,o=Dl(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=Dl();g||m-o>l?(s=r,r=_,a=o,o=m):i?r+=_:r=s+(_-s)/(m-a)*(o-a)},f=function(){s=r=i?0:r,a=o=0},h=function(_){var g=a,m=s,p=Dl();return(_||_===0)&&_!==r&&u(_),o===a||p-a>c?0:(r+(i?m:-m))/((i?p:o)-g)*1e3};return{update:u,reset:f,getVelocity:h}},Za=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Y_=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},Hx=function(){Ta=Pn.core.globals().ScrollTrigger,Ta&&Ta.core&&BE()},Vx=function(e){return Pn=e||Bx(),!Su&&Pn&&typeof document<"u"&&document.body&&(Ci=window,As=document,Cs=As.documentElement,Ea=As.body,Fx=[Ci,As,Cs,Ea],Pn.utils.clamp,kx=Pn.core.context||function(){},ao="onpointerenter"in Ea?"pointer":"mouse",Ox=cn.isTouch=Ci.matchMedia&&Ci.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ci||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,or=cn.eventTypes=("ontouchstart"in Cs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Cs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return zx=0},500),Su=1),Ta||Hx(),Su};ni.op=yn;yt.cache=0;var cn=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){Su||Vx(Pn)||console.warn("Please gsap.registerPlugin(Observer)"),Ta||Hx();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,f=i.onStop,h=i.onStopDelay,d=i.ignore,_=i.wheelSpeed,g=i.event,m=i.onDragStart,p=i.onDragEnd,S=i.onDrag,b=i.onPress,v=i.onRelease,w=i.onRight,R=i.onLeft,T=i.onUp,P=i.onDown,y=i.onChangeX,x=i.onChangeY,N=i.onChange,L=i.onToggleX,B=i.onToggleY,F=i.onHover,j=i.onHoverEnd,X=i.onMove,$=i.ignoreCheck,W=i.isNormalizer,me=i.onGestureStart,O=i.onGestureEnd,ye=i.onWheel,ze=i.onEnable,st=i.onDisable,se=i.onClick,xe=i.scrollSpeed,we=i.capture,Se=i.allowClicks,ke=i.lockAxis,et=i.onLockAxis;this.target=a=ui(a)||Cs,this.vars=i,d&&(d=Pn.utils.toArray(d)),r=r||1e-9,s=s||0,_=_||1,xe=xe||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Ci.getComputedStyle(Ea).lineHeight)||22);var qe,ft,ot,I,E,ee,te,U=this,K=0,ge=0,ie=i.passive||!u&&i.passive!==!1,A=Hs(a,ni),M=Hs(a,yn),z=A(),V=M(),q=~o.indexOf("touch")&&!~o.indexOf("pointer")&&or[0]==="pointerdown",Z=Ll(a),fe=a.ownerDocument||As,_e=[0,0,0],ve=[0,0,0],He=0,he=function(){return He=Dl()},Me=function(Ee,De){return(U.event=Ee)&&d&&zE(Ee.target,d)||De&&q&&Ee.pointerType!=="touch"||$&&$(Ee,De)},We=function(){U._vx.reset(),U._vy.reset(),ft.pause(),f&&f(U)},je=function(){var Ee=U.deltaX=Y_(_e),De=U.deltaY=Y_(ve),pe=Math.abs(Ee)>=r,Be=Math.abs(De)>=r;N&&(pe||Be)&&N(U,Ee,De,_e,ve),pe&&(w&&U.deltaX>0&&w(U),R&&U.deltaX<0&&R(U),y&&y(U),L&&U.deltaX<0!=K<0&&L(U),K=U.deltaX,_e[0]=_e[1]=_e[2]=0),Be&&(P&&U.deltaY>0&&P(U),T&&U.deltaY<0&&T(U),x&&x(U),B&&U.deltaY<0!=ge<0&&B(U),ge=U.deltaY,ve[0]=ve[1]=ve[2]=0),(I||ot)&&(X&&X(U),ot&&(m&&ot===1&&m(U),S&&S(U),ot=0),I=!1),ee&&!(ee=!1)&&et&&et(U),E&&(ye(U),E=!1),qe=0},Ie=function(Ee,De,pe){_e[pe]+=Ee,ve[pe]+=De,U._vx.update(Ee),U._vy.update(De),c?qe||(qe=requestAnimationFrame(je)):je()},Qe=function(Ee,De){ke&&!te&&(U.axis=te=Math.abs(Ee)>Math.abs(De)?"x":"y",ee=!0),te!=="y"&&(_e[2]+=Ee,U._vx.update(Ee,!0)),te!=="x"&&(ve[2]+=De,U._vy.update(De,!0)),c?qe||(qe=requestAnimationFrame(je)):je()},Ke=function(Ee){if(!Me(Ee,1)){Ee=Za(Ee,u);var De=Ee.clientX,pe=Ee.clientY,Be=De-U.x,Re=pe-U.y,Oe=U.isDragging;U.x=De,U.y=pe,(Oe||(Be||Re)&&(Math.abs(U.startX-De)>=s||Math.abs(U.startY-pe)>=s))&&(ot||(ot=Oe?2:1),Oe||(U.isDragging=!0),Qe(Be,Re))}},_t=U.onPress=function(ae){Me(ae,1)||ae&&ae.button||(U.axis=te=null,ft.pause(),U.isPressed=!0,ae=Za(ae),K=ge=0,U.startX=U.x=ae.clientX,U.startY=U.y=ae.clientY,U._vx.reset(),U._vy.reset(),Yn(W?a:fe,or[1],Ke,ie,!0),U.deltaX=U.deltaY=0,b&&b(U))},k=U.onRelease=function(ae){if(!Me(ae,1)){Xn(W?a:fe,or[1],Ke,!0);var Ee=!isNaN(U.y-U.startY),De=U.isDragging,pe=De&&(Math.abs(U.x-U.startX)>3||Math.abs(U.y-U.startY)>3),Be=Za(ae);!pe&&Ee&&(U._vx.reset(),U._vy.reset(),u&&Se&&Pn.delayedCall(.08,function(){if(Dl()-He>300&&!ae.defaultPrevented){if(ae.target.click)ae.target.click();else if(fe.createEvent){var Re=fe.createEvent("MouseEvents");Re.initMouseEvent("click",!0,!0,Ci,1,Be.screenX,Be.screenY,Be.clientX,Be.clientY,!1,!1,!1,!1,0,null),ae.target.dispatchEvent(Re)}}})),U.isDragging=U.isGesturing=U.isPressed=!1,f&&De&&!W&&ft.restart(!0),ot&&je(),p&&De&&p(U),v&&v(U,pe)}},Ce=function(Ee){return Ee.touches&&Ee.touches.length>1&&(U.isGesturing=!0)&&me(Ee,U.isDragging)},re=function(){return(U.isGesturing=!1)||O(U)},le=function(Ee){if(!Me(Ee)){var De=A(),pe=M();Ie((De-z)*xe,(pe-V)*xe,1),z=De,V=pe,f&&ft.restart(!0)}},Ae=function(Ee){if(!Me(Ee)){Ee=Za(Ee,u),ye&&(E=!0);var De=(Ee.deltaMode===1?l:Ee.deltaMode===2?Ci.innerHeight:1)*_;Ie(Ee.deltaX*De,Ee.deltaY*De,0),f&&!W&&ft.restart(!0)}},J=function(Ee){if(!Me(Ee)){var De=Ee.clientX,pe=Ee.clientY,Be=De-U.x,Re=pe-U.y;U.x=De,U.y=pe,I=!0,f&&ft.restart(!0),(Be||Re)&&Qe(Be,Re)}},oe=function(Ee){U.event=Ee,F(U)},de=function(Ee){U.event=Ee,j(U)},be=function(Ee){return Me(Ee)||Za(Ee,u)&&se(U)};ft=U._dc=Pn.delayedCall(h||.25,We).pause(),U.deltaX=U.deltaY=0,U._vx=Dd(0,50,!0),U._vy=Dd(0,50,!0),U.scrollX=A,U.scrollY=M,U.isDragging=U.isGesturing=U.isPressed=!1,kx(this),U.enable=function(ae){return U.isEnabled||(Yn(Z?fe:a,"scroll",Pd),o.indexOf("scroll")>=0&&Yn(Z?fe:a,"scroll",le,ie,we),o.indexOf("wheel")>=0&&Yn(a,"wheel",Ae,ie,we),(o.indexOf("touch")>=0&&Ox||o.indexOf("pointer")>=0)&&(Yn(a,or[0],_t,ie,we),Yn(fe,or[2],k),Yn(fe,or[3],k),Se&&Yn(a,"click",he,!0,!0),se&&Yn(a,"click",be),me&&Yn(fe,"gesturestart",Ce),O&&Yn(fe,"gestureend",re),F&&Yn(a,ao+"enter",oe),j&&Yn(a,ao+"leave",de),X&&Yn(a,ao+"move",J)),U.isEnabled=!0,U.isDragging=U.isGesturing=U.isPressed=I=ot=!1,U._vx.reset(),U._vy.reset(),z=A(),V=M(),ae&&ae.type&&_t(ae),ze&&ze(U)),U},U.disable=function(){U.isEnabled&&(pa.filter(function(ae){return ae!==U&&Ll(ae.target)}).length||Xn(Z?fe:a,"scroll",Pd),U.isPressed&&(U._vx.reset(),U._vy.reset(),Xn(W?a:fe,or[1],Ke,!0)),Xn(Z?fe:a,"scroll",le,we),Xn(a,"wheel",Ae,we),Xn(a,or[0],_t,we),Xn(fe,or[2],k),Xn(fe,or[3],k),Xn(a,"click",he,!0),Xn(a,"click",be),Xn(fe,"gesturestart",Ce),Xn(fe,"gestureend",re),Xn(a,ao+"enter",oe),Xn(a,ao+"leave",de),Xn(a,ao+"move",J),U.isEnabled=U.isPressed=U.isDragging=!1,st&&st(U))},U.kill=U.revert=function(){U.disable();var ae=pa.indexOf(U);ae>=0&&pa.splice(ae,1),Kr===U&&(Kr=0)},pa.push(U),W&&Ll(a)&&(Kr=U),U.enable(g)},kE(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();cn.version="3.15.0";cn.create=function(n){return new cn(n)};cn.register=Vx;cn.getAll=function(){return pa.slice()};cn.getById=function(n){return pa.filter(function(e){return e.vars.id===n})[0]};Bx()&&Pn.registerPlugin(cn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ye,ua,xt,Ft,Ti,Nt,pm,of,sc,Il,dl,Lc,Un,zf,Ld,Zn,q_,j_,fa,Gx,_h,Wx,Kn,Id,Xx,$x,ys,Nd,mm,wa,_m,Nl,Ud,gh,Ic=1,On=Date.now,vh=On(),Ji=0,pl=0,K_=function(e,t,i){var r=Si(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Z_=function(e,t){return t&&(!Si(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},HE=function n(){return pl&&requestAnimationFrame(n)},J_=function(){return zf=1},Q_=function(){return zf=0},yr=function(e){return e},ml=function(e){return Math.round(e*1e5)/1e5||0},Yx=function(){return typeof window<"u"},qx=function(){return Ye||Yx()&&(Ye=window.gsap)&&Ye.registerPlugin&&Ye},Do=function(e){return!!~pm.indexOf(e)},jx=function(e){return(e==="Height"?_m:xt["inner"+e])||Ti["client"+e]||Nt["client"+e]},Kx=function(e){return Ls(e,"getBoundingClientRect")||(Do(e)?function(){return Au.width=xt.innerWidth,Au.height=_m,Au}:function(){return jr(e)})},VE=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Ls(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?jx(s):e["client"+s])||0}},GE=function(e,t){return!t||~Dr.indexOf(e)?Kx(e):function(){return Au}},Ar=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Ls(e,i))?o()-Kx(e)()[s]:Do(e)?(Ti[i]||Nt[i])-jx(r):e[i]-e["offset"+r])},Nc=function(e,t){for(var i=0;i<fa.length;i+=3)(!t||~t.indexOf(fa[i+1]))&&e(fa[i],fa[i+1],fa[i+2])},Si=function(e){return typeof e=="string"},zn=function(e){return typeof e=="function"},_l=function(e){return typeof e=="number"},lo=function(e){return typeof e=="object"},Ja=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Go=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},Wo=Math.abs,Zx="left",Jx="top",gm="right",vm="bottom",Ao="width",Co="height",Ul="Right",Ol="Left",Fl="Top",kl="Bottom",hn="padding",Yi="margin",Ua="Width",xm="Height",gn="px",qi=function(e){return xt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},WE=function(e){var t=qi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},eg=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},jr=function(e,t){var i=t&&qi(e)[Ld]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ye.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},af=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Qx=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},XE=function(e){return function(t){return Ye.utils.snap(Qx(e),t)}},ym=function(e){var t=Ye.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},$E=function(e){return function(t,i){return ym(Qx(e))(t,i.direction)}},Uc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},Tn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},En=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Oc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},tg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Fc={toggleActions:"play",anticipatePin:0},lf={top:0,left:0,center:.5,bottom:1,right:1},Mu=function(e,t){if(Si(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in lf?lf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},kc=function(e,t,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,_=Ft.createElement("div"),g=Do(i)||Ls(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?Nt:i.tagName==="IFRAME"?i.contentDocument.body:i,S=e.indexOf("start")!==-1,b=S?c:u,v="border-color:"+b+";font-size:"+f+";color:"+b+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(v+=(r===yn?gm:vm)+":"+(o+parseFloat(h))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=v,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+r.op.d2],Eu(_,0,r,S),_},Eu=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Ua]=1,s["border"+a+Ua]=0,s[i.p]=t+"px",Ye.set(e,s)},gt=[],Od={},oc,ng=function(){return On()-Ji>34&&(oc||(oc=requestAnimationFrame(ts)))},Xo=function(){(!Kn||!Kn.isPressed||Kn.startX>Nt.clientWidth)&&(yt.cache++,Kn?oc||(oc=requestAnimationFrame(ts)):ts(),Ji||Io("scrollStart"),Ji=On())},xh=function(){$x=xt.innerWidth,Xx=xt.innerHeight},gl=function(e){yt.cache++,(e===!0||!Un&&!Wx&&!Ft.fullscreenElement&&!Ft.webkitFullscreenElement&&(!Id||$x!==xt.innerWidth||Math.abs(xt.innerHeight-Xx)>xt.innerHeight*.25))&&of.restart(!0)},Lo={},YE=[],ey=function n(){return En(rt,"scrollEnd",n)||go(!0)},Io=function(e){return Lo[e]&&Lo[e].map(function(t){return t()})||YE},bi=[],ty=function(e){for(var t=0;t<bi.length;t+=5)(!e||bi[t+4]&&bi[t+4].query===e)&&(bi[t].style.cssText=bi[t+1],bi[t].getBBox&&bi[t].setAttribute("transform",bi[t+2]||""),bi[t+3].uncache=1)},ny=function(){return yt.forEach(function(e){return zn(e)&&++e.cacheID&&(e.rec=e())})},bm=function(e,t){var i;for(Zn=0;Zn<gt.length;Zn++)i=gt[Zn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Nl=!0,t&&ty(t),t||Io("revert")},iy=function(e,t){yt.cache++,(t||!Jn)&&yt.forEach(function(i){return zn(i)&&i.cacheID++&&(i.rec=0)}),Si(e)&&(xt.history.scrollRestoration=mm=e)},Jn,Ro=0,ig,qE=function(){if(ig!==Ro){var e=ig=Ro;requestAnimationFrame(function(){return e===Ro&&go(!0)})}},ry=function(){Nt.appendChild(wa),_m=!Kn&&wa.offsetHeight||xt.innerHeight,Nt.removeChild(wa)},rg=function(e){return sc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},go=function(e,t){if(Ti=Ft.documentElement,Nt=Ft.body,pm=[xt,Ft,Ti,Nt],Ji&&!e&&!Nl){Tn(rt,"scrollEnd",ey);return}ry(),Jn=rt.isRefreshing=!0,Nl||ny();var i=Io("refreshInit");Gx&&rt.sort(),t||bm(),yt.forEach(function(r){zn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),gt.slice(0).forEach(function(r){return r.refresh()}),Nl=!1,gt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Ud=1,rg(!0),gt.forEach(function(r){var s=Ar(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),rg(!1),Ud=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),yt.forEach(function(r){zn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),iy(mm,1),of.pause(),Ro++,Jn=2,ts(2),gt.forEach(function(r){return zn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Jn=rt.isRefreshing=!1,Io("refresh")},Fd=0,Tu=1,Bl,ts=function(e){if(e===2||!Jn&&!Nl){rt.isUpdating=!0,Bl&&Bl.update(0);var t=gt.length,i=On(),r=i-vh>=50,s=t&&gt[0].scroll();if(Tu=Fd>s?-1:1,Jn||(Fd=s),r&&(Ji&&!zf&&i-Ji>200&&(Ji=0,Io("scrollEnd")),dl=vh,vh=i),Tu<0){for(Zn=t;Zn-- >0;)gt[Zn]&&gt[Zn].update(0,r);Tu=1}else for(Zn=0;Zn<t;Zn++)gt[Zn]&&gt[Zn].update(0,r);rt.isUpdating=!1}oc=0},kd=[Zx,Jx,vm,gm,Yi+kl,Yi+Ul,Yi+Fl,Yi+Ol,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],wu=kd.concat([Ao,Co,"boxSizing","max"+Ua,"max"+xm,"position",Yi,hn,hn+Fl,hn+Ul,hn+kl,hn+Ol]),jE=function(e,t,i){Aa(i);var r=e._gsap;if(r.spacerIsNative)Aa(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},yh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=kd.length,o=t.style,a=e.style,l;s--;)l=kd[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[vm]=a[gm]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ao]=af(e,ni)+gn,o[Co]=af(e,yn)+gn,o[hn]=a[Yi]=a[Jx]=a[Zx]="0",Aa(r),a[Ao]=a["max"+Ua]=i[Ao],a[Co]=a["max"+xm]=i[Co],a[hn]=i[hn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},KE=/([A-Z])/g,Aa=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Ye.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(KE,"-$1").toLowerCase())}},Bc=function(e){for(var t=wu.length,i=e.style,r=[],s=0;s<t;s++)r.push(wu[s],i[wu[s]]);return r.t=e,r},ZE=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Au={left:0,top:0},sg=function(e,t,i,r,s,o,a,l,c,u,f,h,d,_){zn(e)&&(e=e(l)),Si(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Mu("0"+e.substr(3),i):0));var g=d?d.time():0,m,p,S;if(d&&d.seek(0),isNaN(e)||(e=+e),_l(e))d&&(e=Ye.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&Eu(a,i,r,!0);else{zn(t)&&(t=t(l));var b=(e||"0").split(" "),v,w,R,T;S=ui(t,l)||Nt,v=jr(S)||{},(!v||!v.left&&!v.top)&&qi(S).display==="none"&&(T=S.style.display,S.style.display="block",v=jr(S),T?S.style.display=T:S.style.removeProperty("display")),w=Mu(b[0],v[r.d]),R=Mu(b[1]||"0",i),e=v[r.p]-c[r.p]-u+w+s-R,a&&Eu(a,R,r,i-R<20||a._isStart&&R>20),i-=i-R}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var P=e+i,y=o._isStart;m="scroll"+r.d2,Eu(o,P,r,y&&P>20||!y&&(f?Math.max(Nt[m],Ti[m]):o.parentNode[m])<=P+1),f&&(c=jr(a),f&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+gn))}return d&&S&&(m=jr(S),d.seek(h),p=jr(S),d._caScrollDist=m[r.p]-p[r.p],e=e/d._caScrollDist*h),d&&d.seek(g),d?e:Math.round(e)},JE=/(webkit|moz|length|cssText|inset)/i,og=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Nt){e._stOrig=s.cssText,a=qi(e);for(o in a)!+o&&!JE.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ye.core.getCache(e).uncache=1,t.appendChild(e)}},sy=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},zc=function(e,t,i){var r={};r[t.p]="+="+i,Ye.set(e,r)},ag=function(e,t){var i=Hs(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,_={};c=c||i();var g=sy(i,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){yt.cache++,o.tween&&ts()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Ye.to(e,l),h};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Tn(e,"wheel",i.wheelHandler),rt.isTouch&&Tn(e,"touchmove",i.wheelHandler),s},rt=function(){function n(t,i){ua||n.register(Ye)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Nd(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!pl){this.update=this.refresh=this.kill=yr;return}i=eg(Si(i)||_l(i)||i.nodeType?{trigger:i}:i,Fc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,S=s.onSnapComplete,b=s.once,v=s.snap,w=s.pinReparent,R=s.pinSpacer,T=s.containerAnimation,P=s.fastScrollEnd,y=s.preventOverlaps,x=i.horizontal||i.containerAnimation&&i.horizontal!==!1?ni:yn,N=!f&&f!==0,L=ui(i.scroller||xt),B=Ye.core.getCache(L),F=Do(L),j=("pinType"in i?i.pinType:Ls(L,"pinType")||F&&"fixed")==="fixed",X=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],$=N&&i.toggleActions.split(" "),W="markers"in i?i.markers:Fc.markers,me=F?0:parseFloat(qi(L)["border"+x.p2+Ua])||0,O=this,ye=i.onRefreshInit&&function(){return i.onRefreshInit(O)},ze=VE(L,F,x),st=GE(L,F),se=0,xe=0,we=0,Se=Hs(L,x),ke,et,qe,ft,ot,I,E,ee,te,U,K,ge,ie,A,M,z,V,q,Z,fe,_e,ve,He,he,Me,We,je,Ie,Qe,Ke,_t,k,Ce,re,le,Ae,J,oe,de;if(O._startClamp=O._endClamp=!1,O._dir=x,m*=45,O.scroller=L,O.scroll=T?T.time.bind(T):Se,ft=Se(),O.vars=i,r=r||i.animation,"refreshPriority"in i&&(Gx=1,i.refreshPriority===-9999&&(Bl=O)),B.tweenScroll=B.tweenScroll||{top:ag(L,yn),left:ag(L,ni)},O.tweenTo=ke=B.tweenScroll[x.p],O.scrubDuration=function(pe){Ce=_l(pe)&&pe,Ce?k?k.duration(pe):k=Ye.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ce,paused:!0,onComplete:function(){return p&&p(O)}}):(k&&k.progress(1).kill(),k=0)},r&&(r.vars.lazy=!1,r._initted&&!O.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),O.animation=r.pause(),r.scrollTrigger=O,O.scrubDuration(f),Ke=0,l||(l=r.vars.id)),v&&((!lo(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Nt.style&&Ye.set(F?[Nt,Ti]:L,{scrollBehavior:"auto"}),yt.forEach(function(pe){return zn(pe)&&pe.target===(F?Ft.scrollingElement||Ti:L)&&(pe.smooth=!1)}),qe=zn(v.snapTo)?v.snapTo:v.snapTo==="labels"?XE(r):v.snapTo==="labelsDirectional"?$E(r):v.directional!==!1?function(pe,Be){return ym(v.snapTo)(pe,On()-xe<500?0:Be.direction)}:Ye.utils.snap(v.snapTo),re=v.duration||{min:.1,max:2},re=lo(re)?Il(re.min,re.max):Il(re,re),le=Ye.delayedCall(v.delay||Ce/2||.1,function(){var pe=Se(),Be=On()-xe<500,Re=ke.tween;if((Be||Math.abs(O.getVelocity())<10)&&!Re&&!zf&&se!==pe){var Oe=(pe-I)/A,lt=r&&!N?r.totalProgress():Oe,tt=Be?0:(lt-_t)/(On()-dl)*1e3||0,ut=Ye.utils.clamp(-Oe,1-Oe,Wo(tt/2)*tt/.185),Ot=Oe+(v.inertia===!1?0:ut),Lt,It,wt=v,Gn=wt.onStart,kt=wt.onInterrupt,Rn=wt.onComplete;if(Lt=qe(Ot,O),_l(Lt)||(Lt=Ot),It=Math.max(0,Math.round(I+Lt*A)),pe<=E&&pe>=I&&It!==pe){if(Re&&!Re._initted&&Re.data<=Wo(It-pe))return;v.inertia===!1&&(ut=Lt-Oe),ke(It,{duration:re(Wo(Math.max(Wo(Ot-lt),Wo(Lt-lt))*.185/tt/.05||0)),ease:v.ease||"power3",data:Wo(It-pe),onInterrupt:function(){return le.restart(!0)&&kt&&Go(O,kt)},onComplete:function(){O.update(),se=Se(),r&&!N&&(k?k.resetTo("totalProgress",Lt,r._tTime/r._tDur):r.progress(Lt)),Ke=_t=r&&!N?r.totalProgress():O.progress,S&&S(O),Rn&&Go(O,Rn)}},pe,ut*A,It-pe-ut*A),Gn&&Go(O,Gn,ke.tween)}}else O.isActive&&se!==pe&&le.restart(!0)}).pause()),l&&(Od[l]=O),h=O.trigger=ui(h||d!==!0&&d),de=h&&h._gsap&&h._gsap.stRevert,de&&(de=de(O)),d=d===!0?h:ui(d),Si(a)&&(a={targets:h,className:a}),d&&(_===!1||_===Yi||(_=!_&&d.parentNode&&d.parentNode.style&&qi(d.parentNode).display==="flex"?!1:hn),O.pin=d,et=Ye.core.getCache(d),et.spacer?M=et.pinState:(R&&(R=ui(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),et.spacerIsNative=!!R,R&&(et.spacerState=Bc(R))),et.spacer=q=R||Ft.createElement("div"),q.classList.add("pin-spacer"),l&&q.classList.add("pin-spacer-"+l),et.pinState=M=Bc(d)),i.force3D!==!1&&Ye.set(d,{force3D:!0}),O.spacer=q=et.spacer,Qe=qi(d),he=Qe[_+x.os2],fe=Ye.getProperty(d),_e=Ye.quickSetter(d,x.a,gn),yh(d,q,Qe),V=Bc(d)),W){ge=lo(W)?eg(W,tg):tg,U=kc("scroller-start",l,L,x,ge,0),K=kc("scroller-end",l,L,x,ge,0,U),Z=U["offset"+x.op.d2];var be=ui(Ls(L,"content")||L);ee=this.markerStart=kc("start",l,be,x,ge,Z,0,T),te=this.markerEnd=kc("end",l,be,x,ge,Z,0,T),T&&(oe=Ye.quickSetter([ee,te],x.a,gn)),!j&&!(Dr.length&&Ls(L,"fixedMarkers")===!0)&&(WE(F?Nt:L),Ye.set([U,K],{force3D:!0}),We=Ye.quickSetter(U,x.a,gn),Ie=Ye.quickSetter(K,x.a,gn))}if(T){var ae=T.vars.onUpdate,Ee=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){O.update(0,0,1),ae&&ae.apply(T,Ee||[])})}if(O.previous=function(){return gt[gt.indexOf(O)-1]},O.next=function(){return gt[gt.indexOf(O)+1]},O.revert=function(pe,Be){if(!Be)return O.kill(!0);var Re=pe!==!1||!O.enabled,Oe=Un;Re!==O.isReverted&&(Re&&(Ae=Math.max(Se(),O.scroll.rec||0),we=O.progress,J=r&&r.progress()),ee&&[ee,te,U,K].forEach(function(lt){return lt.style.display=Re?"none":"block"}),Re&&(Un=O,O.update(Re)),d&&(!w||!O.isActive)&&(Re?jE(d,q,M):yh(d,q,qi(d),Me)),Re||O.update(Re),Un=Oe,O.isReverted=Re)},O.refresh=function(pe,Be,Re,Oe){if(!((Un||!O.enabled)&&!Be)){if(d&&pe&&Ji){Tn(n,"scrollEnd",ey);return}!Jn&&ye&&ye(O),Un=O,ke.tween&&!Re&&(ke.tween.kill(),ke.tween=0),k&&k.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(at){return at.vars.immediateRender&&at.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),O.isReverted||O.revert(!0,!0),O._subPinOffset=!1;var lt=ze(),tt=st(),ut=T?T.duration():Ar(L,x),Ot=A<=.01||!A,Lt=0,It=Oe||0,wt=lo(Re)?Re.end:i.end,Gn=i.endTrigger||h,kt=lo(Re)?Re.start:i.start||(i.start===0||!h?0:d?"0 0":"0 100%"),Rn=O.pinnedContainer=i.pinnedContainer&&ui(i.pinnedContainer,O),si=h&&Math.max(0,gt.indexOf(O))||0,sn=si,on,D,Y,ne,Q,G,ue,Te,Ne,Le,Ve,Xe,Ge;for(W&&lo(Re)&&(Xe=Ye.getProperty(U,x.p),Ge=Ye.getProperty(K,x.p));sn-- >0;)G=gt[sn],G.end||G.refresh(0,1)||(Un=O),ue=G.pin,ue&&(ue===h||ue===d||ue===Rn)&&!G.isReverted&&(Le||(Le=[]),Le.unshift(G),G.revert(!0,!0)),G!==gt[sn]&&(si--,sn--);for(zn(kt)&&(kt=kt(O)),kt=K_(kt,"start",O),I=sg(kt,h,lt,x,Se(),ee,U,O,tt,me,j,ut,T,O._startClamp&&"_startClamp")||(d?-.001:0),zn(wt)&&(wt=wt(O)),Si(wt)&&!wt.indexOf("+=")&&(~wt.indexOf(" ")?wt=(Si(kt)?kt.split(" ")[0]:"")+wt:(Lt=Mu(wt.substr(2),lt),wt=Si(kt)?kt:(T?Ye.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,I):I)+Lt,Gn=h)),wt=K_(wt,"end",O),E=Math.max(I,sg(wt||(Gn?"100% 0":ut),Gn,lt,x,Se()+Lt,te,K,O,tt,me,j,ut,T,O._endClamp&&"_endClamp"))||-.001,Lt=0,sn=si;sn--;)G=gt[sn]||{},ue=G.pin,ue&&G.start-G._pinPush<=I&&!T&&G.end>0&&(on=G.end-(O._startClamp?Math.max(0,G.start):G.start),(ue===h&&G.start-G._pinPush<I||ue===Rn)&&isNaN(kt)&&(Lt+=on*(1-G.progress)),ue===d&&(It+=on));if(I+=Lt,E+=Lt,O._startClamp&&(O._startClamp+=Lt),O._endClamp&&!Jn&&(O._endClamp=E||-.001,E=Math.min(E,Ar(L,x))),A=E-I||(I-=.01)&&.001,Ot&&(we=Ye.utils.clamp(0,1,Ye.utils.normalize(I,E,Ae))),O._pinPush=It,ee&&Lt&&(on={},on[x.a]="+="+Lt,Rn&&(on[x.p]="-="+Se()),Ye.set([ee,te],on)),d&&!(Ud&&O.end>=Ar(L,x)))on=qi(d),ne=x===yn,Y=Se(),ve=parseFloat(fe(x.a))+It,!ut&&E>1&&(Ve=(F?Ft.scrollingElement||Ti:L).style,Ve={style:Ve,value:Ve["overflow"+x.a.toUpperCase()]},F&&qi(Nt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(Ve.style["overflow"+x.a.toUpperCase()]="scroll")),yh(d,q,on),V=Bc(d),D=jr(d,!0),Te=j&&Hs(L,ne?ni:yn)(),_?(Me=[_+x.os2,A+It+gn],Me.t=q,sn=_===hn?af(d,x)+A+It:0,sn&&(Me.push(x.d,sn+gn),q.style.flexBasis!=="auto"&&(q.style.flexBasis=sn+gn)),Aa(Me),Rn&&gt.forEach(function(at){at.pin===Rn&&at.vars.pinSpacing!==!1&&(at._subPinOffset=!0)}),j&&Se(Ae)):(sn=af(d,x),sn&&q.style.flexBasis!=="auto"&&(q.style.flexBasis=sn+gn)),j&&(Q={top:D.top+(ne?Y-I:Te)+gn,left:D.left+(ne?Te:Y-I)+gn,boxSizing:"border-box",position:"fixed"},Q[Ao]=Q["max"+Ua]=Math.ceil(D.width)+gn,Q[Co]=Q["max"+xm]=Math.ceil(D.height)+gn,Q[Yi]=Q[Yi+Fl]=Q[Yi+Ul]=Q[Yi+kl]=Q[Yi+Ol]="0",Q[hn]=on[hn],Q[hn+Fl]=on[hn+Fl],Q[hn+Ul]=on[hn+Ul],Q[hn+kl]=on[hn+kl],Q[hn+Ol]=on[hn+Ol],z=ZE(M,Q,w),Jn&&Se(0)),r?(Ne=r._initted,_h(1),r.render(r.duration(),!0,!0),He=fe(x.a)-ve+A+It,je=Math.abs(A-He)>1,j&&je&&z.splice(z.length-2,2),r.render(0,!0,!0),Ne||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),_h(0)):He=A,Ve&&(Ve.value?Ve.style["overflow"+x.a.toUpperCase()]=Ve.value:Ve.style.removeProperty("overflow-"+x.a));else if(h&&Se()&&!T)for(D=h.parentNode;D&&D!==Nt;)D._pinOffset&&(I-=D._pinOffset,E-=D._pinOffset),D=D.parentNode;Le&&Le.forEach(function(at){return at.revert(!1,!0)}),O.start=I,O.end=E,ft=ot=Jn?Ae:Se(),!T&&!Jn&&(ft<Ae&&Se(Ae),O.scroll.rec=0),O.revert(!1,!0),xe=On(),le&&(se=-1,le.restart(!0)),Un=0,r&&N&&(r._initted||J)&&r.progress()!==J&&r.progress(J||0,!0).render(r.time(),!0,!0),(Ot||we!==O.progress||T||g||r&&!r._initted)&&(r&&!N&&(r._initted||we||r.vars.immediateRender!==!1)&&r.totalProgress(T&&I<-.001&&!we?Ye.utils.normalize(I,E,0):we,!0),O.progress=Ot||(ft-I)/A===we?0:we),d&&_&&(q._pinOffset=Math.round(O.progress*He)),k&&k.invalidate(),isNaN(Xe)||(Xe-=Ye.getProperty(U,x.p),Ge-=Ye.getProperty(K,x.p),zc(U,x,Xe),zc(ee,x,Xe-(Oe||0)),zc(K,x,Ge),zc(te,x,Ge-(Oe||0))),Ot&&!Jn&&O.update(),u&&!Jn&&!ie&&(ie=!0,u(O),ie=!1)}},O.getVelocity=function(){return(Se()-ot)/(On()-dl)*1e3||0},O.endAnimation=function(){Ja(O.callbackAnimation),r&&(k?k.progress(1):r.paused()?N||Ja(r,O.direction<0,1):Ja(r,r.reversed()))},O.labelToScroll=function(pe){return r&&r.labels&&(I||O.refresh()||I)+r.labels[pe]/r.duration()*A||0},O.getTrailing=function(pe){var Be=gt.indexOf(O),Re=O.direction>0?gt.slice(0,Be).reverse():gt.slice(Be+1);return(Si(pe)?Re.filter(function(Oe){return Oe.vars.preventOverlaps===pe}):Re).filter(function(Oe){return O.direction>0?Oe.end<=I:Oe.start>=E})},O.update=function(pe,Be,Re){if(!(T&&!Re&&!pe)){var Oe=Jn===!0?Ae:O.scroll(),lt=pe?0:(Oe-I)/A,tt=lt<0?0:lt>1?1:lt||0,ut=O.progress,Ot,Lt,It,wt,Gn,kt,Rn,si;if(Be&&(ot=ft,ft=T?Se():Oe,v&&(_t=Ke,Ke=r&&!N?r.totalProgress():tt)),m&&d&&!Un&&!Ic&&Ji&&(!tt&&I<Oe+(Oe-ot)/(On()-dl)*m?tt=1e-4:tt===1&&E>Oe+(Oe-ot)/(On()-dl)*m&&(tt=.9999)),tt!==ut&&O.enabled){if(Ot=O.isActive=!!tt&&tt<1,Lt=!!ut&&ut<1,kt=Ot!==Lt,Gn=kt||!!tt!=!!ut,O.direction=tt>ut?1:-1,O.progress=tt,Gn&&!Un&&(It=tt&&!ut?0:tt===1?1:ut===1?2:3,N&&(wt=!kt&&$[It+1]!=="none"&&$[It+1]||$[It],si=r&&(wt==="complete"||wt==="reset"||wt in r))),y&&(kt||si)&&(si||f||!r)&&(zn(y)?y(O):O.getTrailing(y).forEach(function(Y){return Y.endAnimation()})),N||(k&&!Un&&!Ic?(k._dp._time-k._start!==k._time&&k.render(k._dp._time-k._start),k.resetTo?k.resetTo("totalProgress",tt,r._tTime/r._tDur):(k.vars.totalProgress=tt,k.invalidate().restart())):r&&r.totalProgress(tt,!!(Un&&(xe||pe)))),d){if(pe&&_&&(q.style[_+x.os2]=he),!j)_e(ml(ve+He*tt));else if(Gn){if(Rn=!pe&&tt>ut&&E+1>Oe&&Oe+1>=Ar(L,x),w)if(!pe&&(Ot||Rn)){var sn=jr(d,!0),on=Oe-I;og(d,Nt,sn.top+(x===yn?on:0)+gn,sn.left+(x===yn?0:on)+gn)}else og(d,q);Aa(Ot||Rn?z:V),je&&tt<1&&Ot||_e(ve+(tt===1&&!Rn?He:0))}}v&&!ke.tween&&!Un&&!Ic&&le.restart(!0),a&&(kt||b&&tt&&(tt<1||!gh))&&sc(a.targets).forEach(function(Y){return Y.classList[Ot||b?"add":"remove"](a.className)}),o&&!N&&!pe&&o(O),Gn&&!Un?(N&&(si&&(wt==="complete"?r.pause().totalProgress(1):wt==="reset"?r.restart(!0).pause():wt==="restart"?r.restart(!0):r[wt]()),o&&o(O)),(kt||!gh)&&(c&&kt&&Go(O,c),X[It]&&Go(O,X[It]),b&&(tt===1?O.kill(!1,1):X[It]=0),kt||(It=tt===1?1:3,X[It]&&Go(O,X[It]))),P&&!Ot&&Math.abs(O.getVelocity())>(_l(P)?P:2500)&&(Ja(O.callbackAnimation),k?k.progress(1):Ja(r,wt==="reverse"?1:!tt,1))):N&&o&&!Un&&o(O)}if(Ie){var D=T?Oe/T.duration()*(T._caScrollDist||0):Oe;We(D+(U._isFlipped?1:0)),Ie(D)}oe&&oe(-Oe/T.duration()*(T._caScrollDist||0))}},O.enable=function(pe,Be){O.enabled||(O.enabled=!0,Tn(L,"resize",gl),F||Tn(L,"scroll",Xo),ye&&Tn(n,"refreshInit",ye),pe!==!1&&(O.progress=we=0,ft=ot=se=Se()),Be!==!1&&O.refresh())},O.getTween=function(pe){return pe&&ke?ke.tween:k},O.setPositions=function(pe,Be,Re,Oe){if(T){var lt=T.scrollTrigger,tt=T.duration(),ut=lt.end-lt.start;pe=lt.start+ut*pe/tt,Be=lt.start+ut*Be/tt}O.refresh(!1,!1,{start:Z_(pe,Re&&!!O._startClamp),end:Z_(Be,Re&&!!O._endClamp)},Oe),O.update()},O.adjustPinSpacing=function(pe){if(Me&&pe){var Be=Me.indexOf(x.d)+1;Me[Be]=parseFloat(Me[Be])+pe+gn,Me[1]=parseFloat(Me[1])+pe+gn,Aa(Me)}},O.disable=function(pe,Be){if(pe!==!1&&O.revert(!0,!0),O.enabled&&(O.enabled=O.isActive=!1,Be||k&&k.pause(),Ae=0,et&&(et.uncache=1),ye&&En(n,"refreshInit",ye),le&&(le.pause(),ke.tween&&ke.tween.kill()&&(ke.tween=0)),!F)){for(var Re=gt.length;Re--;)if(gt[Re].scroller===L&&gt[Re]!==O)return;En(L,"resize",gl),F||En(L,"scroll",Xo)}},O.kill=function(pe,Be){O.disable(pe,Be),k&&!Be&&k.kill(),l&&delete Od[l];var Re=gt.indexOf(O);Re>=0&&gt.splice(Re,1),Re===Zn&&Tu>0&&Zn--,Re=0,gt.forEach(function(Oe){return Oe.scroller===O.scroller&&(Re=1)}),Re||Jn||(O.scroll.rec=0),r&&(r.scrollTrigger=null,pe&&r.revert({kill:!1}),Be||r.kill()),ee&&[ee,te,U,K].forEach(function(Oe){return Oe.parentNode&&Oe.parentNode.removeChild(Oe)}),Bl===O&&(Bl=0),d&&(et&&(et.uncache=1),Re=0,gt.forEach(function(Oe){return Oe.pin===d&&Re++}),Re||(et.spacer=0)),i.onKill&&i.onKill(O)},gt.push(O),O.enable(!1,!1),de&&de(O),r&&r.add&&!A){var De=O.update;O.update=function(){O.update=De,yt.cache++,I||E||O.refresh()},Ye.delayedCall(.01,O.update),A=.01,I=E=0}else O.refresh();d&&qE()},n.register=function(i){return ua||(Ye=i||qx(),Yx()&&window.document&&n.enable(),ua=pl),ua},n.defaults=function(i){if(i)for(var r in i)Fc[r]=i[r];return Fc},n.disable=function(i,r){pl=0,gt.forEach(function(o){return o[r?"kill":"disable"](i)}),En(xt,"wheel",Xo),En(Ft,"scroll",Xo),clearInterval(Lc),En(Ft,"touchcancel",yr),En(Nt,"touchstart",yr),Uc(En,Ft,"pointerdown,touchstart,mousedown",J_),Uc(En,Ft,"pointerup,touchend,mouseup",Q_),of.kill(),Nc(En);for(var s=0;s<yt.length;s+=3)Oc(En,yt[s],yt[s+1]),Oc(En,yt[s],yt[s+2])},n.enable=function(){if(xt=window,Ft=document,Ti=Ft.documentElement,Nt=Ft.body,Ye){if(sc=Ye.utils.toArray,Il=Ye.utils.clamp,Nd=Ye.core.context||yr,_h=Ye.core.suppressOverwrites||yr,mm=xt.history.scrollRestoration||"auto",Fd=xt.pageYOffset||0,Ye.core.globals("ScrollTrigger",n),Nt){pl=1,wa=document.createElement("div"),wa.style.height="100vh",wa.style.position="absolute",ry(),HE(),cn.register(Ye),n.isTouch=cn.isTouch,ys=cn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Id=cn.isTouch===1,Tn(xt,"wheel",Xo),pm=[xt,Ft,Ti,Nt],Ye.matchMedia?(n.matchMedia=function(u){var f=Ye.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},Ye.addEventListener("matchMediaInit",function(){ny(),bm()}),Ye.addEventListener("matchMediaRevert",function(){return ty()}),Ye.addEventListener("matchMedia",function(){go(0,1),Io("matchMedia")}),Ye.matchMedia().add("(orientation: portrait)",function(){return xh(),xh})):console.warn("Requires GSAP 3.11.0 or later"),xh(),Tn(Ft,"scroll",Xo);var i=Nt.hasAttribute("style"),r=Nt.style,s=r.borderTopStyle,o=Ye.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=jr(Nt),yn.m=Math.round(a.top+yn.sc())||0,ni.m=Math.round(a.left+ni.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(Nt.setAttribute("style",""),Nt.removeAttribute("style")),Lc=setInterval(ng,250),Ye.delayedCall(.5,function(){return Ic=0}),Tn(Ft,"touchcancel",yr),Tn(Nt,"touchstart",yr),Uc(Tn,Ft,"pointerdown,touchstart,mousedown",J_),Uc(Tn,Ft,"pointerup,touchend,mouseup",Q_),Ld=Ye.utils.checkPrefix("transform"),wu.push(Ld),ua=On(),of=Ye.delayedCall(.2,go).pause(),fa=[Ft,"visibilitychange",function(){var u=xt.innerWidth,f=xt.innerHeight;Ft.hidden?(q_=u,j_=f):(q_!==u||j_!==f)&&gl()},Ft,"DOMContentLoaded",go,xt,"load",go,xt,"resize",gl],Nc(Tn),gt.forEach(function(u){return u.enable(0,1)}),l=0;l<yt.length;l+=3)Oc(En,yt[l],yt[l+1]),Oc(En,yt[l],yt[l+2])}else if(Ft){var c=function u(){n.enable(),Ft.removeEventListener("DOMContentLoaded",u)};Ft.addEventListener("DOMContentLoaded",c)}}},n.config=function(i){"limitCallbacks"in i&&(gh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Lc)||(Lc=r)&&setInterval(ng,r),"ignoreMobileResize"in i&&(Id=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Nc(En)||Nc(Tn,i.autoRefreshEvents||"none"),Wx=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=ui(i),o=yt.indexOf(s),a=Do(s);~o&&yt.splice(o,a?6:2),r&&(a?Dr.unshift(xt,r,Nt,r,Ti,r):Dr.unshift(s,r))},n.clearMatchMedia=function(i){gt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(Si(i)?ui(i):i).getBoundingClientRect(),a=o[s?Ao:Co]*r||0;return s?o.right-a>0&&o.left+a<xt.innerWidth:o.bottom-a>0&&o.top+a<xt.innerHeight},n.positionInViewport=function(i,r,s){Si(i)&&(i=ui(i));var o=i.getBoundingClientRect(),a=o[s?Ao:Co],l=r==null?a/2:r in lf?lf[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/xt.innerWidth:(o.top+l)/xt.innerHeight},n.killAll=function(i){if(gt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Lo.killAll||[];Lo={},r.forEach(function(s){return s()})}},n}();rt.version="3.15.0";rt.saveStyles=function(n){return n?sc(n).forEach(function(e){if(e&&e.style){var t=bi.indexOf(e);t>=0&&bi.splice(t,5),bi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ye.core.getCache(e),Nd())}}):bi};rt.revert=function(n,e){return bm(!n,e)};rt.create=function(n,e){return new rt(n,e)};rt.refresh=function(n){return n?gl(!0):(ua||rt.register())&&go(!0)};rt.update=function(n){return++yt.cache&&ts(n===!0?2:0)};rt.clearScrollMemory=iy;rt.maxScroll=function(n,e){return Ar(n,e?ni:yn)};rt.getScrollFunc=function(n,e){return Hs(ui(n),e?ni:yn)};rt.getById=function(n){return Od[n]};rt.getAll=function(){return gt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};rt.isScrolling=function(){return!!Ji};rt.snapDirectional=ym;rt.addEventListener=function(n,e){var t=Lo[n]||(Lo[n]=[]);~t.indexOf(e)||t.push(e)};rt.removeEventListener=function(n,e){var t=Lo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};rt.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Ye.delayedCall(r,function(){u(f,h),f=[],h=[]}).pause();return function(_){f.length||d.restart(!0),f.push(_.trigger),h.push(_),s<=f.length&&d.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&zn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return zn(s)&&(s=s(),Tn(rt,"refresh",function(){return s=e.batchMax()})),sc(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(rt.create(c))}),t};var lg=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},bh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(cn.isTouch?" pinch-zoom":""):"none",e===Ti&&n(Nt,t)},Hc={auto:1,scroll:1},QE=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ye.core.getCache(s),a=On(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Nt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Hc[(l=qi(s)).overflowY]||Hc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Do(s)&&(Hc[(l=qi(s)).overflowY]||Hc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},oy=function(e,t,i,r){return cn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&QE,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&Tn(Ft,cn.eventTypes[0],ug,!1,!0)},onDisable:function(){return En(Ft,cn.eventTypes[0],ug,!0)}})},eT=/(input|label|select|textarea)/i,cg,ug=function(e){var t=eT.test(e.target.tagName);(t||cg)&&(e._gsapAllow=!0,cg=t)},tT=function(e){lo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=ui(e.target)||Ti,u=Ye.core.globals().ScrollSmoother,f=u&&u.get(),h=ys&&(e.content&&ui(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=Hs(c,yn),_=Hs(c,ni),g=1,m=(cn.isTouch&&xt.visualViewport?xt.visualViewport.scale*xt.visualViewport.width:xt.outerWidth)/xt.innerWidth,p=0,S=zn(r)?function(){return r(a)}:function(){return r||2.8},b,v,w=oy(c,e.type,!0,s),R=function(){return v=!1},T=yr,P=yr,y=function(){l=Ar(c,yn),P=Il(ys?1:0,l),i&&(T=Il(0,Ar(c,ni))),b=Ro},x=function(){h._gsap.y=ml(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},N=function(){if(v){requestAnimationFrame(R);var W=ml(a.deltaY/2),me=P(d.v-W);if(h&&me!==d.v+d.offset){d.offset=me-d.v;var O=ml((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+O+", 0, 1)",h._gsap.y=O+"px",d.cacheID=yt.cache,ts()}return!0}d.offset&&x(),v=!0},L,B,F,j,X=function(){y(),L.isActive()&&L.vars.scrollY>l&&(d()>l?L.progress(1)&&d(l):L.resetTo("scrollY",l))};return h&&Ye.set(h,{y:"+=0"}),e.ignoreCheck=function($){return ys&&$.type==="touchmove"&&N()||g>1.05&&$.type!=="touchstart"||a.isGesturing||$.touches&&$.touches.length>1},e.onPress=function(){v=!1;var $=g;g=ml((xt.visualViewport&&xt.visualViewport.scale||1)/m),L.pause(),$!==g&&bh(c,g>1.01?!0:i?!1:"x"),B=_(),F=d(),y(),b=Ro},e.onRelease=e.onGestureStart=function($,W){if(d.offset&&x(),!W)j.restart(!0);else{yt.cache++;var me=S(),O,ye;i&&(O=_(),ye=O+me*.05*-$.velocityX/.227,me*=lg(_,O,ye,Ar(c,ni)),L.vars.scrollX=T(ye)),O=d(),ye=O+me*.05*-$.velocityY/.227,me*=lg(d,O,ye,Ar(c,yn)),L.vars.scrollY=P(ye),L.invalidate().duration(me).play(.01),(ys&&L.vars.scrollY>=l||O>=l-1)&&Ye.to({},{onUpdate:X,duration:me})}o&&o($)},e.onWheel=function(){L._ts&&L.pause(),On()-p>1e3&&(b=0,p=On())},e.onChange=function($,W,me,O,ye){if(Ro!==b&&y(),W&&i&&_(T(O[2]===W?B+($.startX-$.x):_()+W-O[1])),me){d.offset&&x();var ze=ye[2]===me,st=ze?F+$.startY-$.y:d()+me-ye[1],se=P(st);ze&&st!==se&&(F+=se-st),d(se)}(me||W)&&ts()},e.onEnable=function(){bh(c,i?!1:"x"),rt.addEventListener("refresh",X),Tn(xt,"resize",X),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),w.enable()},e.onDisable=function(){bh(c,!0),En(xt,"resize",X),rt.removeEventListener("refresh",X),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new cn(e),a.iOS=ys,ys&&!d()&&d(1),ys&&Ye.ticker.add(yr),j=a._dc,L=Ye.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:sy(d,d(),function(){return L.pause()})},onUpdate:ts,onComplete:j.vars.onComplete}),a};rt.sort=function(n){if(zn(n))return gt.sort(n);var e=xt.pageYOffset||0;return rt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+xt.innerHeight}),gt.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};rt.observe=function(n){return new cn(n)};rt.normalizeScroll=function(n){if(typeof n>"u")return Kn;if(n===!0&&Kn)return Kn.enable();if(n===!1){Kn&&Kn.kill(),Kn=n;return}var e=n instanceof cn?n:tT(n);return Kn&&Kn.target===e.target&&Kn.kill(),Do(e.target)&&(Kn=e),e};rt.core={_getVelocityProp:Dd,_inputObserver:oy,_scrollers:yt,_proxies:Dr,bridge:{ss:function(){Ji||Io("scrollStart"),Ji=On()},ref:function(){return Un}}};qx()&&Ye.registerPlugin(rt);Ui.registerPlugin(rt);let nr=null;function nT(){ri(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const e=window.matchMedia("(hover: none) and (pointer: coarse)").matches;nr=new gM({duration:e?.8:1.2,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),touchMultiplier:e?1:1.5,infinite:!1}),nr.on("scroll",rt.update),Ui.ticker.add(t=>{nr==null||nr.raf(t*1e3)}),Ui.ticker.lagSmoothing(0)}),pr(()=>{nr&&(nr.destroy(),nr=null)});function n(e){nr==null||nr.scrollTo(e,{duration:1.5})}return{scrollTo:n}}const Ei=[{id:"journey-hero",hold:.5,dwell:9,lateralX:2.9,lateralY:.2,section:"#hero",frame:"#hero .artifact-frame",fill:.72},{id:"journey-about",hold:.52,dwell:10.6,lateralX:3,lateralY:-.4,section:"#about",frame:"#about .artifact-frame",fill:.74},{id:"journey-experience",hold:.62,dwell:13,lateralX:0,lateralY:0},{id:"journey-skills",hold:.6,dwell:7.5,lateralX:-3.1,lateralY:.3,section:"#skills",frame:"#skills .artifact-frame",fill:.66},{id:"journey-research",hold:.58,dwell:7,lateralX:-2.9,lateralY:-.3,section:"#research",frame:"#research .artifact-frame",fill:.64},{id:"journey-orgs",hold:1,dwell:9,lateralX:0,lateralY:0}],fg=Ei.map(n=>n.id),Cr=n=>n<0?0:n>1?1:n,Wi=n=>{const e=Cr(n);return e*e*(3-2*e)},ma=(n,e,t)=>n+(e-n)*t;function iT(n,e){const t=Ei[e];if(!t||t.hold>=1||e>=Ei.length-1)return 0;const i=Cr(n-e);return Cr((i-t.hold)/(1-t.hold))}const rT=n=>{var e;return((e=Ei[n])==null?void 0:e.hold)??.6},Sm=(n,e)=>Cr(e/(rT(n)*.9));function Bd(){if(typeof window>"u")return 0;const n=window.scrollY||window.pageYOffset||0,e=[];for(let r=0;r<fg.length;r++){const s=rt.getById(fg[r]);s&&e.push({start:s.start,end:s.end})}if(!e.length)return 0;let t=0,i=-1/0;for(let r=0;r<e.length;r++){const s=Math.max(e[r].start,i),o=e[r+1],a=Math.max(e[r].end,o?o.start:-1/0,s+1);if(i=a,n<=s)return r;if(n>=a){t=r+1;continue}return r+(n-s)/(a-s)}return t}function sT(){const n=us();let e=null;const t=()=>{const i=Bd();Math.abs(i-n.journeyProgress)>5e-4&&(n.journeyProgress=i),e=requestAnimationFrame(t)};ri(()=>{n.journeyProgress=Bd(),e=requestAnimationFrame(t)}),pr(()=>{e!==null&&cancelAnimationFrame(e),e=null})}function mc(n){const e=us(),t=An(()=>e.journeyProgress-n),i=An(()=>e.animationsEnabled&&e.mode==="immersive"),r=An(()=>{var h,d;const c=t.value;if(c>=0){const _=((h=Ei[n])==null?void 0:h.hold)??.65;if(c<=_)return 1;const g=Cr((c-_)/(1-_));return 1-Wi((g-.05)/.45)}if(c<=-1)return 0;const u=((d=Ei[n-1])==null?void 0:d.hold)??.65,f=Cr((c+1-u)/(1-u));return Wi((f-.68)/.32)}),s=An(()=>i.value?r.value:1),o=An(()=>{if(!i.value)return 1;const c=t.value,u=r.value;return c<0?ma(1.16,1,u):ma(1.5,1,u)}),a=An(()=>{if(!i.value)return 0;const c=t.value,u=r.value;return c<0?(1-u)*26:(1-u)*-34}),l=An(()=>`translate3d(0, ${a.value.toFixed(1)}px, 0) scale(${o.value.toFixed(3)})`);return{opacity:s,scale:o,shift:a,transform:l,presence:r}}const oT={class:"loader-counter"},aT=ki({__name:"LoadingScreen",setup(n){const e=dt(!0),t=dt(0),i=dt(null),r=dt(null),s=dt(null);return ri(async()=>{if(await dr(),!r.value||!s.value)return;const o=Ui.timeline({onComplete:()=>{s.value&&Ui.to(s.value,{y:-30,opacity:0,duration:.4,ease:"power2.in"}),r.value?Ui.to(r.value,{clipPath:"inset(0% 0% 100% 0%)",duration:.6,ease:"power4.inOut",delay:.2,onComplete:()=>{e.value=!1}}):e.value=!1}});o.to(t,{value:100,duration:1.2,ease:"power2.inOut",onUpdate:()=>{i.value&&(i.value.textContent=Math.round(t.value).toString())}}),o.to(".loader-line",{scaleX:1,duration:.8,stagger:.1,ease:"power3.out"},.2)}),(o,a)=>e.value?(Ue(),Ze("div",{key:0,ref_key:"screenEl",ref:r,class:"loader-screen"},[C("div",{ref_key:"contentEl",ref:s,class:"loader-content"},[a[1]||(a[1]=C("div",{class:"loader-circuit"},[C("div",{class:"loader-line"}),C("div",{class:"loader-line loader-line--mid"}),C("div",{class:"loader-line"})],-1)),C("div",oT,[C("span",{ref_key:"counterEl",ref:i,class:"loader-number"},"0",512),a[0]||(a[0]=C("span",{class:"loader-percent"},"%",-1))]),a[2]||(a[2]=C("p",{class:"loader-status"}," > BOOTING ROBOTICS_CYLINDER // MOHAMMAD AL FURQON ",-1))],512)],512)):Fs("",!0)}}),ay=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},lT=ay(aT,[["__scopeId","data-v-161b5c59"]]);let $o=null;function Sh(){if(typeof window>"u")return null;if(!$o){const n=window.AudioContext||window.webkitAudioContext;n&&($o=new n)}return $o&&$o.state==="suspended"&&$o.resume().catch(()=>{}),$o}function Va(){const n=us();function e(){if(!n.soundEnabled)return;const r=Sh();if(r)try{const s=r.createOscillator(),o=r.createGain();s.type="sine",s.frequency.setValueAtTime(880,r.currentTime),s.frequency.exponentialRampToValueAtTime(1760,r.currentTime+.03),o.gain.setValueAtTime(.04,r.currentTime),o.gain.exponentialRampToValueAtTime(.001,r.currentTime+.03),s.connect(o),o.connect(r.destination),s.start(),s.stop(r.currentTime+.03)}catch{}}function t(){if(!n.soundEnabled)return;const r=Sh();if(r)try{const s=r.createOscillator(),o=r.createGain();s.type="triangle",s.frequency.setValueAtTime(440,r.currentTime),s.frequency.exponentialRampToValueAtTime(660,r.currentTime+.08),o.gain.setValueAtTime(.06,r.currentTime),o.gain.exponentialRampToValueAtTime(.001,r.currentTime+.1),s.connect(o),o.connect(r.destination),s.start(),s.stop(r.currentTime+.1)}catch{}}function i(){if(!n.soundEnabled)return;const r=Sh();if(r)try{const s=r.createOscillator(),o=r.createGain();s.type="sawtooth",s.frequency.setValueAtTime(1200+Math.random()*200,r.currentTime),o.gain.setValueAtTime(.02,r.currentTime),o.gain.exponentialRampToValueAtTime(.001,r.currentTime+.02),s.connect(o),o.connect(r.destination),s.start(),s.stop(r.currentTime+.02)}catch{}}return{playTick:e,playLockOn:t,playKeyBlip:i}}/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=n=>n==="";/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase());/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=n=>{const e=fT(n);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=({name:n,iconNode:e,absoluteStrokeWidth:t,"absolute-stroke-width":i,strokeWidth:r,"stroke-width":s,size:o=Qa.width,color:a=Qa.stroke,...l},{slots:c})=>qu("svg",{...Qa,...l,width:o,height:o,stroke:a,"stroke-width":hg(t)||hg(i)||t===!0||i===!0?Number(r||s||Qa["stroke-width"])*24/Number(o):r||s||Qa["stroke-width"],class:uT("lucide",l.class,...n?[`lucide-${dg(hT(n))}-icon`,`lucide-${dg(n)}`]:["lucide-icon"]),...!c.default&&!cT(l)&&{"aria-hidden":"true"}},[...e.map(u=>qu(...u)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=(n,e)=>(t,{slots:i,attrs:r})=>qu(dT,{...r,...t,iconNode:e,name:n},i);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=vt("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=vt("award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=vt("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=vt("brain-circuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=vt("brain",[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=vt("briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=vt("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=vt("code-xml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=vt("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=vt("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=vt("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=vt("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=vt("earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=vt("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=vt("file-code-corner",[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=vt("file-terminal",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m8 16 2-2-2-2",key:"10vzyd"}],["path",{d:"M12 18h4",key:"1wd2n7"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=vt("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=vt("graduation-cap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=vt("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=vt("linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=vt("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=vt("maximize-2",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=vt("moon",[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=vt("orbit",[["path",{d:"M20.341 6.484A10 10 0 0 1 10.266 21.85",key:"1enhxb"}],["path",{d:"M3.659 17.516A10 10 0 0 1 13.74 2.152",key:"1crzgf"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=vt("panels-top-left",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=vt("radio",[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=vt("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=vt("server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=vt("shield-alert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=vt("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=vt("square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=vt("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=vt("terminal",[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=vt("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=vt("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=vt("volume-2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=vt("volume-x",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=vt("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=vt("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),BT={class:"fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3 bg-abyss/85 backdrop-blur-md border-b border-cyan-500/20"},zT={class:"max-w-7xl mx-auto flex items-center justify-between"},HT={class:"flex items-center gap-3"},VT={key:0,class:"hidden md:flex items-center gap-1 font-mono text-xs"},GT=["onClick"],WT={class:"flex items-center gap-3"},XT=["aria-pressed","title"],$T={class:"hidden sm:inline"},YT=["title","aria-pressed"],qT=["title"],jT=ki({__name:"Navbar",setup(n){const e=us(),t=Va();function i(){t.playLockOn(),e.toggleMode()}function r(){t.playTick(),e.toggleDark()}function s(){t.playLockOn(),e.toggleAnimations()}function o(){e.toggleSound(),e.soundEnabled&&t.playKeyBlip()}function a(c){t.playTick();const u=document.querySelector(c);u&&u.scrollIntoView({behavior:"smooth"})}const l=[{label:"DOSSIER",href:"#about",icon:my},{label:"EXPERIENCE",href:"#experience",icon:uy},{label:"ARSENAL",href:"#skills",icon:Mm},{label:"RESEARCH",href:"#research",icon:_T},{label:"TRANSMIT",href:"#contact",icon:uf}];return(c,u)=>(Ue(),Ze("nav",BT,[C("div",zT,[C("div",HT,[C("a",{href:"#",class:"flex items-center gap-2 font-mono text-sm font-bold tracking-wider text-white hover:text-neon-blue transition-colors",onClick:u[0]||(u[0]=ju(f=>a("#hero"),["prevent"]))},[...u[2]||(u[2]=[C("span",{class:"text-neon-blue"},"<",-1),C("span",null,"FURQON",-1),C("span",{class:"text-neon-blue"},"/>",-1)])]),u[3]||(u[3]=C("div",{class:"hidden lg:flex items-center gap-2 pl-3 border-l border-slate-800 text-[11px] font-mono text-slate-400"},[C("span",{class:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),C("span",null,"CORE_STABLE")],-1))]),ce(e).mode==="immersive"?(Ue(),Ze("div",VT,[(Ue(),Ze(Rt,null,an(l,f=>C("button",{key:f.href,type:"button",class:"px-3 py-1 text-slate-400 hover:text-neon-blue hover:bg-cyan-950/40 rounded transition-colors flex items-center gap-1.5 cursor-pointer",onClick:h=>a(f.href)},[(Ue(),Qn($l(f.icon),{size:12})),C("span",null,Pe(f.label),1)],8,GT)),64))])):Fs("",!0),C("div",WT,[ce(e).mode==="immersive"?(Ue(),Ze("button",{key:0,type:"button",class:Fo(["flex items-center gap-1.5 px-2.5 py-1.5 rounded font-mono text-[11px] tracking-wider border transition-colors cursor-pointer",ce(e).animationsEnabled?"text-neon-blue border-cyan-500/40 bg-cyan-950/40 hover:bg-cyan-900/40":"text-slate-500 border-slate-700 hover:text-slate-300 hover:border-slate-500"]),"aria-pressed":ce(e).animationsEnabled,title:ce(e).animationsEnabled?"Disable 3D flight and scroll motion":"Enable 3D flight and scroll motion",onClick:s},[ce(e).animationsEnabled?(Ue(),Qn(ce(RT),{key:0,size:14,class:"animate-spin-slow"})):(Ue(),Qn(ce(IT),{key:1,size:14})),C("span",$T,"3D "+Pe(ce(e).animationsEnabled?"ON":"OFF"),1)],10,XT)):Fs("",!0),C("button",{type:"button",class:"p-2 text-slate-400 hover:text-neon-blue hover:bg-cyan-950/40 rounded transition-colors cursor-pointer",title:ce(e).isDark?"Switch to light theme":"Switch to dark theme","aria-pressed":!ce(e).isDark,onClick:r},[ce(e).isDark?(Ue(),Qn(ce(NT),{key:0,size:16})):(Ue(),Qn(ce(CT),{key:1,size:16}))],8,YT),C("button",{type:"button",class:"p-2 text-slate-400 hover:text-neon-blue hover:bg-cyan-950/40 rounded transition-colors cursor-pointer",title:ce(e).soundEnabled?"Audio SFX Enabled":"Audio SFX Muted",onClick:o},[ce(e).soundEnabled?(Ue(),Qn(ce(UT),{key:0,size:16,class:"text-neon-blue"})):(Ue(),Qn(ce(OT),{key:1,size:16}))],8,qT),C("button",{type:"button",class:"hud-btn text-xs py-1.5 px-3 cursor-pointer",onClick:i},[ce(e).mode==="immersive"?(Ue(),Ze(Rt,{key:0},[$e(ce(TT),{size:14}),u[4]||(u[4]=C("span",{class:"hidden sm:inline"},"TERMINAL LOG (CLEAN)",-1)),u[5]||(u[5]=C("span",{class:"sm:hidden"},"CLEAN",-1))],64)):(Ue(),Ze(Rt,{key:1},[$e(ce(MT),{size:14}),u[6]||(u[6]=C("span",{class:"hidden sm:inline"},"CYBER-CAROUSEL (3D)",-1)),u[7]||(u[7]=C("span",{class:"sm:hidden"},"3D CAROUSEL",-1))],64))]),C("button",{type:"button",class:"hud-btn hud-btn-primary text-xs py-1.5 px-3 hidden sm:inline-flex cursor-pointer",onClick:u[1]||(u[1]=f=>a("#contact"))},[$e(ce(uf),{size:14}),u[8]||(u[8]=C("span",null,"TRANSMIT",-1))])])])]))}}),KT=ki({__name:"CyberCursor",setup(n){const e=dt(!1),t=dt(-100),i=dt(-100),r=dt(-100),s=dt(-100),o=dt(!1);let a=null;function l(u){r.value=u.clientX,s.value=u.clientY;const f=u.target;f&&(o.value=!!f.closest('button, a, input, [role="button"], .cyber-card'))}function c(){t.value+=(r.value-t.value)*.2,i.value+=(s.value-i.value)*.2,a=requestAnimationFrame(c)}return ri(()=>{typeof window<"u"&&(e.value=window.matchMedia("(pointer: fine)").matches,e.value&&(window.addEventListener("mousemove",l,{passive:!0}),a=requestAnimationFrame(c)))}),$p(()=>{typeof window<"u"&&window.removeEventListener("mousemove",l),a!==null&&cancelAnimationFrame(a)}),(u,f)=>e.value?(Ue(),Ze("div",{key:0,class:"fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out",style:mn({left:`${t.value}px`,top:`${i.value}px`}),"aria-hidden":"true"},[f[0]||(f[0]=C("div",{class:"w-1.5 h-1.5 rounded-full bg-neon-blue shadow-[0_0_8px_#00f3ff]"},null,-1)),C("div",{class:Fo(["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 border border-cyan-500/40",[o.value?"w-10 h-10 rounded-full border-neon-blue shadow-[0_0_12px_rgba(0,243,255,0.5)] rotate-45":"w-6 h-6 rounded-sm rotate-0"]])},null,2)],4)):Fs("",!0)}});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Em="175",ZT=0,pg=1,JT=2,gy=1,QT=2,Hr=3,Gs=0,_i=1,ji=2,Is=0,Po=1,zl=2,mg=3,_g=4,ew=5,ho=100,tw=101,nw=102,iw=103,rw=104,sw=200,ow=201,aw=202,lw=203,Hd=204,Vd=205,cw=206,uw=207,fw=208,hw=209,dw=210,pw=211,mw=212,_w=213,gw=214,Gd=0,Wd=1,Xd=2,Oa=3,$d=4,Yd=5,qd=6,jd=7,vy=0,vw=1,xw=2,Ns=0,yw=1,bw=2,Sw=3,Mw=4,Ew=5,Tw=6,ww=7,xy=300,Fa=301,ka=302,Kd=303,Zd=304,Hf=306,Jd=1e3,vo=1001,Qd=1002,fr=1003,Aw=1004,Vc=1005,Rr=1006,Mh=1007,xo=1008,ls=1009,yy=1010,by=1011,ac=1012,Tm=1013,No=1014,Zr=1015,_c=1016,wm=1017,Am=1018,lc=1020,Sy=35902,My=1021,Ey=1022,lr=1023,Ty=1024,wy=1025,cc=1026,uc=1027,Ay=1028,Cm=1029,Cy=1030,Rm=1031,Pm=1033,Cu=33776,Ru=33777,Pu=33778,Du=33779,ep=35840,tp=35841,np=35842,ip=35843,rp=36196,sp=37492,op=37496,ap=37808,lp=37809,cp=37810,up=37811,fp=37812,hp=37813,dp=37814,pp=37815,mp=37816,_p=37817,gp=37818,vp=37819,xp=37820,yp=37821,Lu=36492,bp=36494,Sp=36495,Ry=36283,Mp=36284,Ep=36285,Tp=36286,Cw=3200,Rw=3201,Py=0,Pw=1,Ms="",$i="srgb",Ba="srgb-linear",ff="linear",Bt="srgb",Yo=7680,gg=519,Dw=512,Lw=513,Iw=514,Dy=515,Nw=516,Uw=517,Ow=518,Fw=519,vg=35044,xg="300 es",Jr=2e3,hf=2001;class Ga{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eh=Math.PI/180,wp=180/Math.PI;function gc(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function kw(n,e){return(n%e+e)%e}function Th(n,e,t){return(1-t)*n+t*e}function el(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function li(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(e=0,t=0){Tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,i,r,s,o,a,l,c){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],g=r[0],m=r[3],p=r[6],S=r[1],b=r[4],v=r[7],w=r[2],R=r[5],T=r[8];return s[0]=o*g+a*S+l*w,s[3]=o*m+a*b+l*R,s[6]=o*p+a*v+l*T,s[1]=c*g+u*S+f*w,s[4]=c*m+u*b+f*R,s[7]=c*p+u*v+f*T,s[2]=h*g+d*S+_*w,s[5]=h*m+d*b+_*R,s[8]=h*p+d*v+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,_=t*f+i*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*c-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=h*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=d*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wh.makeScale(e,t)),this}rotate(e){return this.premultiply(wh.makeRotation(-e)),this}translate(e,t){return this.premultiply(wh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wh=new ht;function Ly(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function df(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bw(){const n=df("canvas");return n.style.display="block",n}const yg={};function Iu(n){n in yg||(yg[n]=!0,console.warn(n))}function zw(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Hw(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Vw(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bg=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sg=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gw(){const n={enabled:!0,workingColorSpace:Ba,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Bt&&(r.r=ns(r.r),r.g=ns(r.g),r.b=ns(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Bt&&(r.r=Ca(r.r),r.g=Ca(r.g),r.b=Ca(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ms?ff:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ba]:{primaries:e,whitePoint:i,transfer:ff,toXYZ:bg,fromXYZ:Sg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$i},outputColorSpaceConfig:{drawingBufferColorSpace:$i}},[$i]:{primaries:e,whitePoint:i,transfer:Bt,toXYZ:bg,fromXYZ:Sg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$i}}}),n}const Pt=Gw();function ns(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ca(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let qo;class Ww{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qo===void 0&&(qo=df("canvas")),qo.width=e.width,qo.height=e.height;const r=qo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=qo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=df("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ns(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ns(t[i]/255)*255):t[i]=ns(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xw=0;class Dm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xw++}),this.uuid=gc(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ah(r[o].image)):s.push(Ah(r[o]))}else s=Ah(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ah(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ww.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $w=0;class gi extends Ga{constructor(e=gi.DEFAULT_IMAGE,t=gi.DEFAULT_MAPPING,i=vo,r=vo,s=Rr,o=xo,a=lr,l=ls,c=gi.DEFAULT_ANISOTROPY,u=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$w++}),this.uuid=gc(),this.name="",this.source=new Dm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jd:e.x=e.x-Math.floor(e.x);break;case vo:e.x=e.x<0?0:1;break;case Qd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jd:e.y=e.y-Math.floor(e.y);break;case vo:e.y=e.y<0?0:1;break;case Qd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gi.DEFAULT_IMAGE=null;gi.DEFAULT_MAPPING=xy;gi.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,v=(d+1)/2,w=(p+1)/2,R=(u+h)/4,T=(f+g)/4,P=(_+m)/4;return b>v&&b>w?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=R/i,s=T/i):v>w?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=R/r,s=P/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=T/s,r=P/s),this.set(i,r,s,t),this}let S=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(f-g)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yw extends Ga{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new gi(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Dm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Uo extends Yw{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Iy extends gi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fr,this.minFilter=fr,this.wrapR=vo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qw extends gi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fr,this.minFilter=fr,this.wrapR=vo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vc{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==h||c!==d||u!==_){let m=1-a;const p=l*h+c*d+u*_+f*g,S=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const w=Math.sqrt(b),R=Math.atan2(w,p*S);m=Math.sin(m*R)/w,a=Math.sin(a*R)/w}const v=a*S;if(l=l*m+h*v,c=c*m+d*v,u=u*m+_*v,f=f*m+g*v,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-a*d,e[t+2]=c*_+u*d+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ch.copy(this).projectOnVector(e),this.sub(Ch)}reflect(e){return this.sub(Ch.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ch=new H,Mg=new vc;class xc{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ir.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ir.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ir.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ir):ir.fromBufferAttribute(s,o),ir.applyMatrix4(e.matrixWorld),this.expandByPoint(ir);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gc.copy(i.boundingBox)),Gc.applyMatrix4(e.matrixWorld),this.union(Gc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ir),ir.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tl),Wc.subVectors(this.max,tl),jo.subVectors(e.a,tl),Ko.subVectors(e.b,tl),Zo.subVectors(e.c,tl),ds.subVectors(Ko,jo),ps.subVectors(Zo,Ko),Qs.subVectors(jo,Zo);let t=[0,-ds.z,ds.y,0,-ps.z,ps.y,0,-Qs.z,Qs.y,ds.z,0,-ds.x,ps.z,0,-ps.x,Qs.z,0,-Qs.x,-ds.y,ds.x,0,-ps.y,ps.x,0,-Qs.y,Qs.x,0];return!Rh(t,jo,Ko,Zo,Wc)||(t=[1,0,0,0,1,0,0,0,1],!Rh(t,jo,Ko,Zo,Wc))?!1:(Xc.crossVectors(ds,ps),t=[Xc.x,Xc.y,Xc.z],Rh(t,jo,Ko,Zo,Wc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ir).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ir).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Or=[new H,new H,new H,new H,new H,new H,new H,new H],ir=new H,Gc=new xc,jo=new H,Ko=new H,Zo=new H,ds=new H,ps=new H,Qs=new H,tl=new H,Wc=new H,Xc=new H,eo=new H;function Rh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){eo.fromArray(n,s);const a=r.x*Math.abs(eo.x)+r.y*Math.abs(eo.y)+r.z*Math.abs(eo.z),l=e.dot(eo),c=t.dot(eo),u=i.dot(eo);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const jw=new xc,nl=new H,Ph=new H;class yc{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):jw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nl.subVectors(e,this.center);const t=nl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(nl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nl.copy(e.center).add(Ph)),this.expandByPoint(nl.copy(e.center).sub(Ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fr=new H,Dh=new H,$c=new H,ms=new H,Lh=new H,Yc=new H,Ih=new H;class Lm{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fr.copy(this.origin).addScaledVector(this.direction,t),Fr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Dh.copy(e).add(t).multiplyScalar(.5),$c.copy(t).sub(e).normalize(),ms.copy(this.origin).sub(Dh);const s=e.distanceTo(t)*.5,o=-this.direction.dot($c),a=ms.dot(this.direction),l=-ms.dot($c),c=ms.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Dh).addScaledVector($c,h),d}intersectSphere(e,t){Fr.subVectors(e.center,this.origin);const i=Fr.dot(this.direction),r=Fr.dot(Fr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Fr)!==null}intersectTriangle(e,t,i,r,s){Lh.subVectors(t,e),Yc.subVectors(i,e),Ih.crossVectors(Lh,Yc);let o=this.direction.dot(Ih),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ms.subVectors(this.origin,e);const l=a*this.direction.dot(Yc.crossVectors(ms,Yc));if(l<0)return null;const c=a*this.direction.dot(Lh.cross(ms));if(c<0||l+c>o)return null;const u=-a*ms.dot(Ih);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,_,g,m){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,_,g,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Jo.setFromMatrixColumn(e,0).length(),s=1/Jo.setFromMatrixColumn(e,1).length(),o=1/Jo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-g*c,t[9]=-a*l,t[2]=g-h*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,g=c*f;t[0]=h+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,g=c*f;t[0]=h-g*a,t[4]=-o*f,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-h*f,t[8]=_*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-g*f}else if(e.order==="XZY"){const h=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=o*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=a*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kw,e,Zw)}lookAt(e,t,i){const r=this.elements;return xi.subVectors(e,t),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),_s.crossVectors(i,xi),_s.lengthSq()===0&&(Math.abs(i.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),_s.crossVectors(i,xi)),_s.normalize(),qc.crossVectors(xi,_s),r[0]=_s.x,r[4]=qc.x,r[8]=xi.x,r[1]=_s.y,r[5]=qc.y,r[9]=xi.y,r[2]=_s.z,r[6]=qc.z,r[10]=xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],g=i[6],m=i[10],p=i[14],S=i[3],b=i[7],v=i[11],w=i[15],R=r[0],T=r[4],P=r[8],y=r[12],x=r[1],N=r[5],L=r[9],B=r[13],F=r[2],j=r[6],X=r[10],$=r[14],W=r[3],me=r[7],O=r[11],ye=r[15];return s[0]=o*R+a*x+l*F+c*W,s[4]=o*T+a*N+l*j+c*me,s[8]=o*P+a*L+l*X+c*O,s[12]=o*y+a*B+l*$+c*ye,s[1]=u*R+f*x+h*F+d*W,s[5]=u*T+f*N+h*j+d*me,s[9]=u*P+f*L+h*X+d*O,s[13]=u*y+f*B+h*$+d*ye,s[2]=_*R+g*x+m*F+p*W,s[6]=_*T+g*N+m*j+p*me,s[10]=_*P+g*L+m*X+p*O,s[14]=_*y+g*B+m*$+p*ye,s[3]=S*R+b*x+v*F+w*W,s[7]=S*T+b*N+v*j+w*me,s[11]=S*P+b*L+v*X+w*O,s[15]=S*y+b*B+v*$+w*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+g*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],S=f*m*c-g*h*c+g*l*d-a*m*d-f*l*p+a*h*p,b=_*h*c-u*m*c-_*l*d+o*m*d+u*l*p-o*h*p,v=u*g*c-_*f*c+_*a*d-o*g*d-u*a*p+o*f*p,w=_*f*l-u*g*l-_*a*h+o*g*h+u*a*m-o*f*m,R=t*S+i*b+r*v+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=S*T,e[1]=(g*h*s-f*m*s-g*r*d+i*m*d+f*r*p-i*h*p)*T,e[2]=(a*m*s-g*l*s+g*r*c-i*m*c-a*r*p+i*l*p)*T,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*T,e[4]=b*T,e[5]=(u*m*s-_*h*s+_*r*d-t*m*d-u*r*p+t*h*p)*T,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*p-t*l*p)*T,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*T,e[8]=v*T,e[9]=(_*f*s-u*g*s-_*i*d+t*g*d+u*i*p-t*f*p)*T,e[10]=(o*g*s-_*a*s+_*i*c-t*g*c-o*i*p+t*a*p)*T,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*T,e[12]=w*T,e[13]=(u*g*r-_*f*r+_*i*h-t*g*h-u*i*m+t*f*m)*T,e[14]=(_*a*r-o*g*r-_*i*l+t*g*l+o*i*m-t*a*m)*T,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,_=s*f,g=o*u,m=o*f,p=a*f,S=l*c,b=l*u,v=l*f,w=i.x,R=i.y,T=i.z;return r[0]=(1-(g+p))*w,r[1]=(d+v)*w,r[2]=(_-b)*w,r[3]=0,r[4]=(d-v)*R,r[5]=(1-(h+p))*R,r[6]=(m+S)*R,r[7]=0,r[8]=(_+b)*T,r[9]=(m-S)*T,r[10]=(1-(h+g))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Jo.set(r[0],r[1],r[2]).length();const o=Jo.set(r[4],r[5],r[6]).length(),a=Jo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],rr.copy(this);const c=1/s,u=1/o,f=1/a;return rr.elements[0]*=c,rr.elements[1]*=c,rr.elements[2]*=c,rr.elements[4]*=u,rr.elements[5]*=u,rr.elements[6]*=u,rr.elements[8]*=f,rr.elements[9]*=f,rr.elements[10]*=f,t.setFromRotationMatrix(rr),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Jr){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,_;if(a===Jr)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===hf)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Jr){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,d=(i+r)*u;let _,g;if(a===Jr)_=(o+s)*f,g=-2*f;else if(a===hf)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Jo=new H,rr=new Xt,Kw=new H(0,0,0),Zw=new H(1,1,1),_s=new H,qc=new H,xi=new H,Eg=new Xt,Tg=new vc;class Ir{constructor(e=0,t=0,i=0,r=Ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Eg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tg.setFromEuler(this),this.setFromQuaternion(Tg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ir.DEFAULT_ORDER="XYZ";class Ny{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jw=0;const wg=new H,Qo=new vc,kr=new Xt,jc=new H,il=new H,Qw=new H,eA=new vc,Ag=new H(1,0,0),Cg=new H(0,1,0),Rg=new H(0,0,1),Pg={type:"added"},tA={type:"removed"},ea={type:"childadded",child:null},Nh={type:"childremoved",child:null};class Vn extends Ga{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jw++}),this.uuid=gc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new H,t=new Ir,i=new vc,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xt},normalMatrix:{value:new ht}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ny,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qo.setFromAxisAngle(e,t),this.quaternion.multiply(Qo),this}rotateOnWorldAxis(e,t){return Qo.setFromAxisAngle(e,t),this.quaternion.premultiply(Qo),this}rotateX(e){return this.rotateOnAxis(Ag,e)}rotateY(e){return this.rotateOnAxis(Cg,e)}rotateZ(e){return this.rotateOnAxis(Rg,e)}translateOnAxis(e,t){return wg.copy(e).applyQuaternion(this.quaternion),this.position.add(wg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ag,e)}translateY(e){return this.translateOnAxis(Cg,e)}translateZ(e){return this.translateOnAxis(Rg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jc.copy(e):jc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),il.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kr.lookAt(il,jc,this.up):kr.lookAt(jc,il,this.up),this.quaternion.setFromRotationMatrix(kr),r&&(kr.extractRotation(r.matrixWorld),Qo.setFromRotationMatrix(kr),this.quaternion.premultiply(Qo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pg),ea.child=e,this.dispatchEvent(ea),ea.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tA),Nh.child=e,this.dispatchEvent(Nh),Nh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kr.multiply(e.parent.matrixWorld)),e.applyMatrix4(kr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pg),ea.child=e,this.dispatchEvent(ea),ea.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,e,Qw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,eA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vn.DEFAULT_UP=new H(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sr=new H,Br=new H,Uh=new H,zr=new H,ta=new H,na=new H,Dg=new H,Oh=new H,Fh=new H,kh=new H,Bh=new zt,zh=new zt,Hh=new zt;class ar{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),sr.subVectors(e,t),r.cross(sr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){sr.subVectors(r,t),Br.subVectors(i,t),Uh.subVectors(e,t);const o=sr.dot(sr),a=sr.dot(Br),l=sr.dot(Uh),c=Br.dot(Br),u=Br.dot(Uh),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-d-_,_,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zr)===null?!1:zr.x>=0&&zr.y>=0&&zr.x+zr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,zr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zr.x),l.addScaledVector(o,zr.y),l.addScaledVector(a,zr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Bh.setScalar(0),zh.setScalar(0),Hh.setScalar(0),Bh.fromBufferAttribute(e,t),zh.fromBufferAttribute(e,i),Hh.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Bh,s.x),o.addScaledVector(zh,s.y),o.addScaledVector(Hh,s.z),o}static isFrontFacing(e,t,i,r){return sr.subVectors(i,t),Br.subVectors(e,t),sr.cross(Br).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sr.subVectors(this.c,this.b),Br.subVectors(this.a,this.b),sr.cross(Br).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ar.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ar.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ar.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ar.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ar.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ta.subVectors(r,i),na.subVectors(s,i),Oh.subVectors(e,i);const l=ta.dot(Oh),c=na.dot(Oh);if(l<=0&&c<=0)return t.copy(i);Fh.subVectors(e,r);const u=ta.dot(Fh),f=na.dot(Fh);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ta,o);kh.subVectors(e,s);const d=ta.dot(kh),_=na.dot(kh);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(na,a);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return Dg.subVectors(s,r),a=(f-u)/(f-u+(d-_)),t.copy(r).addScaledVector(Dg,a);const p=1/(m+g+h);return o=g*p,a=h*p,t.copy(i).addScaledVector(ta,o).addScaledVector(na,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Uy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},Kc={h:0,s:0,l:0};function Vh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class mt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Pt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Pt.workingColorSpace){if(e=kw(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Vh(o,s,e+1/3),this.g=Vh(o,s,e),this.b=Vh(o,s,e-1/3)}return Pt.toWorkingColorSpace(this,r),this}setStyle(e,t=$i){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$i){const i=Uy[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}copyLinearToSRGB(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$i){return Pt.fromWorkingColorSpace(Nn.copy(this),e),Math.round(Mt(Nn.r*255,0,255))*65536+Math.round(Mt(Nn.g*255,0,255))*256+Math.round(Mt(Nn.b*255,0,255))}getHexString(e=$i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(Nn.copy(this),t);const i=Nn.r,r=Nn.g,s=Nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=$i){Pt.fromWorkingColorSpace(Nn.copy(this),e);const t=Nn.r,i=Nn.g,r=Nn.b;return e!==$i?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(gs),this.setHSL(gs.h+e,gs.s+t,gs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gs),e.getHSL(Kc);const i=Th(gs.h,Kc.h,t),r=Th(gs.s,Kc.s,t),s=Th(gs.l,Kc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new mt;mt.NAMES=Uy;let nA=0;class Bo extends Ga{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nA++}),this.uuid=gc(),this.name="",this.type="Material",this.blending=Po,this.side=Gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hd,this.blendDst=Vd,this.blendEquation=ho,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yo,this.stencilZFail=Yo,this.stencilZPass=Yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Po&&(i.blending=this.blending),this.side!==Gs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hd&&(i.blendSrc=this.blendSrc),this.blendDst!==Vd&&(i.blendDst=this.blendDst),this.blendEquation!==ho&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Oa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wr extends Bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.combine=vy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new H,Zc=new Tt;let iA=0;class Qi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vg,this.updateRanges=[],this.gpuType=Zr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zc.fromBufferAttribute(this,t),Zc.applyMatrix3(e),this.setXY(t,Zc.x,Zc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=el(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=li(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=el(t,this.array)),t}setX(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=el(t,this.array)),t}setY(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=el(t,this.array)),t}setZ(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=el(t,this.array)),t}setW(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),i=li(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),i=li(i,this.array),r=li(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),i=li(i,this.array),r=li(r,this.array),s=li(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vg&&(e.usage=this.usage),e}}class Oy extends Qi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Fy extends Qi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class en extends Qi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let rA=0;const Vi=new Xt,Gh=new Vn,ia=new H,yi=new xc,rl=new xc,Mn=new H;class pn extends Ga{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rA++}),this.uuid=gc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ly(e)?Fy:Oy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ht().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vi.makeRotationFromQuaternion(e),this.applyMatrix4(Vi),this}rotateX(e){return Vi.makeRotationX(e),this.applyMatrix4(Vi),this}rotateY(e){return Vi.makeRotationY(e),this.applyMatrix4(Vi),this}rotateZ(e){return Vi.makeRotationZ(e),this.applyMatrix4(Vi),this}translate(e,t,i){return Vi.makeTranslation(e,t,i),this.applyMatrix4(Vi),this}scale(e,t,i){return Vi.makeScale(e,t,i),this.applyMatrix4(Vi),this}lookAt(e){return Gh.lookAt(e),Gh.updateMatrix(),this.applyMatrix4(Gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ia).negate(),this.translate(ia.x,ia.y,ia.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new en(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];yi.setFromBufferAttribute(s),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];rl.setFromBufferAttribute(a),this.morphTargetsRelative?(Mn.addVectors(yi.min,rl.min),yi.expandByPoint(Mn),Mn.addVectors(yi.max,rl.max),yi.expandByPoint(Mn)):(yi.expandByPoint(rl.min),yi.expandByPoint(rl.max))}yi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Mn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Mn.fromBufferAttribute(a,c),l&&(ia.fromBufferAttribute(e,c),Mn.add(ia)),r=Math.max(r,i.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new H,l[P]=new H;const c=new H,u=new H,f=new H,h=new Tt,d=new Tt,_=new Tt,g=new H,m=new H;function p(P,y,x){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,x),h.fromBufferAttribute(s,P),d.fromBufferAttribute(s,y),_.fromBufferAttribute(s,x),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const N=1/(d.x*_.y-_.x*d.y);isFinite(N)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(N),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(N),a[P].add(g),a[y].add(g),a[x].add(g),l[P].add(m),l[y].add(m),l[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let P=0,y=S.length;P<y;++P){const x=S[P],N=x.start,L=x.count;for(let B=N,F=N+L;B<F;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new H,v=new H,w=new H,R=new H;function T(P){w.fromBufferAttribute(r,P),R.copy(w);const y=a[P];b.copy(y),b.sub(w.multiplyScalar(w.dot(y))).normalize(),v.crossVectors(R,y);const N=v.dot(l[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,N)}for(let P=0,y=S.length;P<y;++P){const x=S[P],N=x.start,L=x.count;for(let B=N,F=N+L;B<F;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new Qi(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lg=new Xt,to=new Lm,Jc=new yc,Ig=new H,Qc=new H,eu=new H,tu=new H,Wh=new H,nu=new H,Ng=new H,iu=new H;class nn extends Vn{constructor(e=new pn,t=new Wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){nu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Wh.fromBufferAttribute(f,e),o?nu.addScaledVector(Wh,u):nu.addScaledVector(Wh.sub(t),u))}t.add(nu)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jc.copy(i.boundingSphere),Jc.applyMatrix4(s),to.copy(e.ray).recast(e.near),!(Jc.containsPoint(to.origin)===!1&&(to.intersectSphere(Jc,Ig)===null||to.origin.distanceToSquared(Ig)>(e.far-e.near)**2))&&(Lg.copy(s).invert(),to.copy(e.ray).applyMatrix4(Lg),!(i.boundingBox!==null&&to.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,to)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=o[m.materialIndex],S=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,w=b;v<w;v+=3){const R=a.getX(v),T=a.getX(v+1),P=a.getX(v+2);r=ru(this,p,e,i,c,u,f,R,T,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const S=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);r=ru(this,o,e,i,c,u,f,S,b,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=o[m.materialIndex],S=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,w=b;v<w;v+=3){const R=v,T=v+1,P=v+2;r=ru(this,p,e,i,c,u,f,R,T,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const S=m,b=m+1,v=m+2;r=ru(this,o,e,i,c,u,f,S,b,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function sA(n,e,t,i,r,s,o,a){let l;if(e.side===_i?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Gs,a),l===null)return null;iu.copy(a),iu.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(iu);return c<t.near||c>t.far?null:{distance:c,point:iu.clone(),object:n}}function ru(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Qc),n.getVertexPosition(l,eu),n.getVertexPosition(c,tu);const u=sA(n,e,t,i,Qc,eu,tu,Ng);if(u){const f=new H;ar.getBarycoord(Ng,Qc,eu,tu,f),r&&(u.uv=ar.getInterpolatedAttribute(r,a,l,c,f,new Tt)),s&&(u.uv1=ar.getInterpolatedAttribute(s,a,l,c,f,new Tt)),o&&(u.normal=ar.getInterpolatedAttribute(o,a,l,c,f,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new H,materialIndex:0};ar.getNormal(Qc,eu,tu,h.normal),u.face=h,u.barycoord=f}return u}class Wa extends pn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(u,3)),this.setAttribute("uv",new en(f,2));function _(g,m,p,S,b,v,w,R,T,P,y){const x=v/T,N=w/P,L=v/2,B=w/2,F=R/2,j=T+1,X=P+1;let $=0,W=0;const me=new H;for(let O=0;O<X;O++){const ye=O*N-B;for(let ze=0;ze<j;ze++){const st=ze*x-L;me[g]=st*S,me[m]=ye*b,me[p]=F,c.push(me.x,me.y,me.z),me[g]=0,me[m]=0,me[p]=R>0?1:-1,u.push(me.x,me.y,me.z),f.push(ze/T),f.push(1-O/P),$+=1}}for(let O=0;O<P;O++)for(let ye=0;ye<T;ye++){const ze=h+ye+j*O,st=h+ye+j*(O+1),se=h+(ye+1)+j*(O+1),xe=h+(ye+1)+j*O;l.push(ze,st,xe),l.push(st,se,xe),W+=6}a.addGroup(d,W,y),d+=W,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function za(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function qn(n){const e={};for(let t=0;t<n.length;t++){const i=za(n[t]);for(const r in i)e[r]=i[r]}return e}function oA(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ky(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const aA={clone:za,merge:qn};var lA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ws extends Bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lA,this.fragmentShader=cA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=za(e.uniforms),this.uniformsGroups=oA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class By extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Jr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vs=new H,Ug=new Tt,Og=new Tt;class wi extends By{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Eh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wp*2*Math.atan(Math.tan(Eh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,t){return this.getViewBounds(e,Ug,Og),t.subVectors(Og,Ug)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Eh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ra=-90,sa=1;class uA extends Vn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wi(ra,sa,e,t);r.layers=this.layers,this.add(r);const s=new wi(ra,sa,e,t);s.layers=this.layers,this.add(s);const o=new wi(ra,sa,e,t);o.layers=this.layers,this.add(o);const a=new wi(ra,sa,e,t);a.layers=this.layers,this.add(a);const l=new wi(ra,sa,e,t);l.layers=this.layers,this.add(l);const c=new wi(ra,sa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Jr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hf)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class zy extends gi{constructor(e=[],t=Fa,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fA extends Uo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zy(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wa(5,5,5),s=new Ws({name:"CubemapFromEquirect",uniforms:za(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_i,blending:Is});s.uniforms.tEquirect.value=t;const o=new nn(r,s),a=t.minFilter;return t.minFilter===xo&&(t.minFilter=Rr),new uA(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class jn extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hA={type:"move"};class Xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new jn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Im{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new mt(e),this.density=t}clone(){return new Im(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class dA extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ir,this.environmentIntensity=1,this.environmentRotation=new Ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $h=new H,pA=new H,mA=new ht;class co{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=$h.subVectors(i,t).cross(pA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($h),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||mA.getNormalMatrix(e),r=this.coplanarPoint($h).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const no=new yc,su=new H;class Nm{constructor(e=new co,t=new co,i=new co,r=new co,s=new co,o=new co){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Jr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],_=r[9],g=r[10],m=r[11],p=r[12],S=r[13],b=r[14],v=r[15];if(i[0].setComponents(l-s,h-c,m-d,v-p).normalize(),i[1].setComponents(l+s,h+c,m+d,v+p).normalize(),i[2].setComponents(l+o,h+u,m+_,v+S).normalize(),i[3].setComponents(l-o,h-u,m-_,v-S).normalize(),i[4].setComponents(l-a,h-f,m-g,v-b).normalize(),t===Jr)i[5].setComponents(l+a,h+f,m+g,v+b).normalize();else if(t===hf)i[5].setComponents(a,f,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),no.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),no.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(no)}intersectsSprite(e){return no.center.set(0,0,0),no.radius=.7071067811865476,no.applyMatrix4(e.matrixWorld),this.intersectsSphere(no)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(su.x=r.normal.x>0?e.max.x:e.min.x,su.y=r.normal.y>0?e.max.y:e.min.y,su.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(su)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vl extends Bo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pf=new H,mf=new H,Fg=new Xt,sl=new Lm,ou=new yc,Yh=new H,kg=new H;class _A extends Vn{constructor(e=new pn,t=new vl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)pf.fromBufferAttribute(t,r-1),mf.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=pf.distanceTo(mf);e.setAttribute("lineDistance",new en(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ou.copy(i.boundingSphere),ou.applyMatrix4(r),ou.radius+=s,e.ray.intersectsSphere(ou)===!1)return;Fg.copy(r).invert(),sl.copy(e.ray).applyMatrix4(Fg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=c){const p=u.getX(g),S=u.getX(g+1),b=au(this,e,sl,l,p,S,g);b&&t.push(b)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(d),p=au(this,e,sl,l,g,m,_-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=c){const p=au(this,e,sl,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=au(this,e,sl,l,_-1,d,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function au(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(pf.fromBufferAttribute(a,r),mf.fromBufferAttribute(a,s),t.distanceSqToSegment(pf,mf,Yh,kg)>i)return;Yh.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Yh);if(!(c<e.near||c>e.far))return{distance:c,point:kg.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Bg=new H,zg=new H;class lu extends _A{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Bg.fromBufferAttribute(t,r),zg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Bg.distanceTo(zg);e.setAttribute("lineDistance",new en(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nu extends Bo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hg=new Xt,Ap=new Lm,cu=new yc,uu=new H;class qh extends Vn{constructor(e=new pn,t=new Nu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cu.copy(i.boundingSphere),cu.applyMatrix4(r),cu.radius+=s,e.ray.intersectsSphere(cu)===!1)return;Hg.copy(r).invert(),Ap.copy(e.ray).applyMatrix4(Hg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=h,g=d;_<g;_++){const m=c.getX(_);uu.fromBufferAttribute(f,m),Vg(uu,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let _=h,g=d;_<g;_++)uu.fromBufferAttribute(f,_),Vg(uu,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Vg(n,e,t,i,r,s,o){const a=Ap.distanceSqToPoint(n);if(a<t){const l=new H;Ap.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Hy extends gi{constructor(e,t,i=No,r,s,o,a=fr,l=fr,c,u=cc){if(u!==cc&&u!==uc)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class po extends pn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],d=[];let _=0;const g=[],m=i/2;let p=0;S(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new en(f,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(d,2));function S(){const v=new H,w=new H;let R=0;const T=(t-e)/i;for(let P=0;P<=s;P++){const y=[],x=P/s,N=x*(t-e)+e;for(let L=0;L<=r;L++){const B=L/r,F=B*l+a,j=Math.sin(F),X=Math.cos(F);w.x=N*j,w.y=-x*i+m,w.z=N*X,f.push(w.x,w.y,w.z),v.set(j,T,X).normalize(),h.push(v.x,v.y,v.z),d.push(B,1-x),y.push(_++)}g.push(y)}for(let P=0;P<r;P++)for(let y=0;y<s;y++){const x=g[y][P],N=g[y+1][P],L=g[y+1][P+1],B=g[y][P+1];(e>0||y!==0)&&(u.push(x,N,B),R+=3),(t>0||y!==s-1)&&(u.push(N,L,B),R+=3)}c.addGroup(p,R,0),p+=R}function b(v){const w=_,R=new Tt,T=new H;let P=0;const y=v===!0?e:t,x=v===!0?1:-1;for(let L=1;L<=r;L++)f.push(0,m*x,0),h.push(0,x,0),d.push(.5,.5),_++;const N=_;for(let L=0;L<=r;L++){const F=L/r*l+a,j=Math.cos(F),X=Math.sin(F);T.x=y*X,T.y=m*x,T.z=y*j,f.push(T.x,T.y,T.z),h.push(0,x,0),R.x=j*.5+.5,R.y=X*.5*x+.5,d.push(R.x,R.y),_++}for(let L=0;L<r;L++){const B=w+L,F=N+L;v===!0?u.push(F,F+1,B):u.push(F+1,F,B),P+=3}c.addGroup(p,P,v===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vf extends pn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new en(s,3)),this.setAttribute("normal",new en(s.slice(),3)),this.setAttribute("uv",new en(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const b=new H,v=new H,w=new H;for(let R=0;R<t.length;R+=3)d(t[R+0],b),d(t[R+1],v),d(t[R+2],w),l(b,v,w,S)}function l(S,b,v,w){const R=w+1,T=[];for(let P=0;P<=R;P++){T[P]=[];const y=S.clone().lerp(v,P/R),x=b.clone().lerp(v,P/R),N=R-P;for(let L=0;L<=N;L++)L===0&&P===R?T[P][L]=y:T[P][L]=y.clone().lerp(x,L/N)}for(let P=0;P<R;P++)for(let y=0;y<2*(R-P)-1;y++){const x=Math.floor(y/2);y%2===0?(h(T[P][x+1]),h(T[P+1][x]),h(T[P][x])):(h(T[P][x+1]),h(T[P+1][x+1]),h(T[P+1][x]))}}function c(S){const b=new H;for(let v=0;v<s.length;v+=3)b.x=s[v+0],b.y=s[v+1],b.z=s[v+2],b.normalize().multiplyScalar(S),s[v+0]=b.x,s[v+1]=b.y,s[v+2]=b.z}function u(){const S=new H;for(let b=0;b<s.length;b+=3){S.x=s[b+0],S.y=s[b+1],S.z=s[b+2];const v=m(S)/2/Math.PI+.5,w=p(S)/Math.PI+.5;o.push(v,1-w)}_(),f()}function f(){for(let S=0;S<o.length;S+=6){const b=o[S+0],v=o[S+2],w=o[S+4],R=Math.max(b,v,w),T=Math.min(b,v,w);R>.9&&T<.1&&(b<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),w<.2&&(o[S+4]+=1))}}function h(S){s.push(S.x,S.y,S.z)}function d(S,b){const v=S*3;b.x=e[v+0],b.y=e[v+1],b.z=e[v+2]}function _(){const S=new H,b=new H,v=new H,w=new H,R=new Tt,T=new Tt,P=new Tt;for(let y=0,x=0;y<s.length;y+=9,x+=6){S.set(s[y+0],s[y+1],s[y+2]),b.set(s[y+3],s[y+4],s[y+5]),v.set(s[y+6],s[y+7],s[y+8]),R.set(o[x+0],o[x+1]),T.set(o[x+2],o[x+3]),P.set(o[x+4],o[x+5]),w.copy(S).add(b).add(v).divideScalar(3);const N=m(w);g(R,x+0,S,N),g(T,x+2,b,N),g(P,x+4,v,N)}}function g(S,b,v,w){w<0&&S.x===1&&(o[b]=S.x-1),v.x===0&&v.z===0&&(o[b]=w/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vf(e.vertices,e.indices,e.radius,e.details)}}class _f extends Vf{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _f(e.radius,e.detail)}}class Um extends Vf{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Um(e.radius,e.detail)}}class Gf extends pn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const S=p*h-o;for(let b=0;b<c;b++){const v=b*f-s;_.push(v,-S,0),g.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const b=S+c*p,v=S+c*(p+1),w=S+1+c*(p+1),R=S+1+c*p;d.push(b,v,R),d.push(v,w,R)}this.setIndex(d),this.setAttribute("position",new en(_,3)),this.setAttribute("normal",new en(g,3)),this.setAttribute("uv",new en(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gf(e.width,e.height,e.widthSegments,e.heightSegments)}}class gf extends pn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new H,f=new H,h=new H;for(let d=0;d<=i;d++)for(let _=0;_<=r;_++){const g=_/r*s,m=d/i*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(g),f.y=(e+t*Math.cos(m))*Math.sin(g),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(_/r),c.push(d/i)}for(let d=1;d<=i;d++)for(let _=1;_<=r;_++){const g=(r+1)*d+_-1,m=(r+1)*(d-1)+_-1,p=(r+1)*(d-1)+_,S=(r+1)*d+_;o.push(g,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new en(a,3)),this.setAttribute("normal",new en(l,3)),this.setAttribute("uv",new en(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class vf extends pn{constructor(e=1,t=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);const a=[],l=[],c=[],u=[],f=new H,h=new H,d=new H,_=new H,g=new H,m=new H,p=new H;for(let b=0;b<=i;++b){const v=b/i*s*Math.PI*2;S(v,s,o,e,d),S(v+.01,s,o,e,_),m.subVectors(_,d),p.addVectors(_,d),g.crossVectors(m,p),p.crossVectors(g,m),g.normalize(),p.normalize();for(let w=0;w<=r;++w){const R=w/r*Math.PI*2,T=-t*Math.cos(R),P=t*Math.sin(R);f.x=d.x+(T*p.x+P*g.x),f.y=d.y+(T*p.y+P*g.y),f.z=d.z+(T*p.z+P*g.z),l.push(f.x,f.y,f.z),h.subVectors(f,d).normalize(),c.push(h.x,h.y,h.z),u.push(b/i),u.push(w/r)}}for(let b=1;b<=i;b++)for(let v=1;v<=r;v++){const w=(r+1)*(b-1)+(v-1),R=(r+1)*b+(v-1),T=(r+1)*b+v,P=(r+1)*(b-1)+v;a.push(w,R,P),a.push(R,T,P)}this.setIndex(a),this.setAttribute("position",new en(l,3)),this.setAttribute("normal",new en(c,3)),this.setAttribute("uv",new en(u,2));function S(b,v,w,R,T){const P=Math.cos(b),y=Math.sin(b),x=w/v*b,N=Math.cos(x);T.x=R*(2+N)*.5*P,T.y=R*(2+N)*y*.5,T.z=R*Math.sin(x)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vf(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class oa extends Bo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Py,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gA extends Bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vA extends Bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Vy extends Vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const jh=new Xt,Gg=new H,Wg=new H;class xA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nm,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Gg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gg),Wg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wg),t.updateMatrixWorld(),jh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xg=new Xt,ol=new H,Kh=new H;class yA extends xA{constructor(){super(new wi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new zt(2,1,1,1),new zt(0,1,1,1),new zt(3,1,1,1),new zt(1,1,1,1),new zt(3,0,1,1),new zt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ol.setFromMatrixPosition(e.matrixWorld),i.position.copy(ol),Kh.copy(i.position),Kh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Kh),i.updateMatrixWorld(),r.makeTranslation(-ol.x,-ol.y,-ol.z),Xg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xg)}}class bA extends Vy{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new yA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class SA extends By{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class MA extends Vy{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class EA extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function $g(n,e,t,i){const r=TA(i);switch(t){case My:return n*e;case Ty:return n*e;case wy:return n*e*2;case Ay:return n*e/r.components*r.byteLength;case Cm:return n*e/r.components*r.byteLength;case Cy:return n*e*2/r.components*r.byteLength;case Rm:return n*e*2/r.components*r.byteLength;case Ey:return n*e*3/r.components*r.byteLength;case lr:return n*e*4/r.components*r.byteLength;case Pm:return n*e*4/r.components*r.byteLength;case Cu:case Ru:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pu:case Du:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tp:case ip:return Math.max(n,16)*Math.max(e,8)/4;case ep:case np:return Math.max(n,8)*Math.max(e,8)/2;case rp:case sp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case op:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ap:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case cp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case up:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case fp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case hp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case dp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case pp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case mp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _p:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case gp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case vp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case xp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case yp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Lu:case bp:case Sp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ry:case Mp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ep:case Tp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function TA(n){switch(n){case ls:case yy:return{byteLength:1,components:1};case ac:case by:case _c:return{byteLength:2,components:1};case wm:case Am:return{byteLength:2,components:4};case No:case Tm:case Zr:return{byteLength:4,components:1};case Sy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Em}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Em);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gy(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function wA(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],g=f[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,f[h]=g)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const g=f[d];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var AA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,RA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,OA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,HA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,VA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,GA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$A=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,KA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ZA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,JA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,QA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i2="gl_FragColor = linearToOutputTexel( gl_FragColor );",r2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,o2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,a2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,l2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,u2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,m2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,x2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,y2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,T2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,w2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,A2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,C2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,O2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,G2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,X2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,K2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,J2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_C=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,SC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,TC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,IC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,NC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,UC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,OC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,HC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,XC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$C=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,YC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:AA,alphahash_pars_fragment:CA,alphamap_fragment:RA,alphamap_pars_fragment:PA,alphatest_fragment:DA,alphatest_pars_fragment:LA,aomap_fragment:IA,aomap_pars_fragment:NA,batching_pars_vertex:UA,batching_vertex:OA,begin_vertex:FA,beginnormal_vertex:kA,bsdfs:BA,iridescence_fragment:zA,bumpmap_pars_fragment:HA,clipping_planes_fragment:VA,clipping_planes_pars_fragment:GA,clipping_planes_pars_vertex:WA,clipping_planes_vertex:XA,color_fragment:$A,color_pars_fragment:YA,color_pars_vertex:qA,color_vertex:jA,common:KA,cube_uv_reflection_fragment:ZA,defaultnormal_vertex:JA,displacementmap_pars_vertex:QA,displacementmap_vertex:e2,emissivemap_fragment:t2,emissivemap_pars_fragment:n2,colorspace_fragment:i2,colorspace_pars_fragment:r2,envmap_fragment:s2,envmap_common_pars_fragment:o2,envmap_pars_fragment:a2,envmap_pars_vertex:l2,envmap_physical_pars_fragment:x2,envmap_vertex:c2,fog_vertex:u2,fog_pars_vertex:f2,fog_fragment:h2,fog_pars_fragment:d2,gradientmap_pars_fragment:p2,lightmap_pars_fragment:m2,lights_lambert_fragment:_2,lights_lambert_pars_fragment:g2,lights_pars_begin:v2,lights_toon_fragment:y2,lights_toon_pars_fragment:b2,lights_phong_fragment:S2,lights_phong_pars_fragment:M2,lights_physical_fragment:E2,lights_physical_pars_fragment:T2,lights_fragment_begin:w2,lights_fragment_maps:A2,lights_fragment_end:C2,logdepthbuf_fragment:R2,logdepthbuf_pars_fragment:P2,logdepthbuf_pars_vertex:D2,logdepthbuf_vertex:L2,map_fragment:I2,map_pars_fragment:N2,map_particle_fragment:U2,map_particle_pars_fragment:O2,metalnessmap_fragment:F2,metalnessmap_pars_fragment:k2,morphinstance_vertex:B2,morphcolor_vertex:z2,morphnormal_vertex:H2,morphtarget_pars_vertex:V2,morphtarget_vertex:G2,normal_fragment_begin:W2,normal_fragment_maps:X2,normal_pars_fragment:$2,normal_pars_vertex:Y2,normal_vertex:q2,normalmap_pars_fragment:j2,clearcoat_normal_fragment_begin:K2,clearcoat_normal_fragment_maps:Z2,clearcoat_pars_fragment:J2,iridescence_pars_fragment:Q2,opaque_fragment:eC,packing:tC,premultiplied_alpha_fragment:nC,project_vertex:iC,dithering_fragment:rC,dithering_pars_fragment:sC,roughnessmap_fragment:oC,roughnessmap_pars_fragment:aC,shadowmap_pars_fragment:lC,shadowmap_pars_vertex:cC,shadowmap_vertex:uC,shadowmask_pars_fragment:fC,skinbase_vertex:hC,skinning_pars_vertex:dC,skinning_vertex:pC,skinnormal_vertex:mC,specularmap_fragment:_C,specularmap_pars_fragment:gC,tonemapping_fragment:vC,tonemapping_pars_fragment:xC,transmission_fragment:yC,transmission_pars_fragment:bC,uv_pars_fragment:SC,uv_pars_vertex:MC,uv_vertex:EC,worldpos_vertex:TC,background_vert:wC,background_frag:AC,backgroundCube_vert:CC,backgroundCube_frag:RC,cube_vert:PC,cube_frag:DC,depth_vert:LC,depth_frag:IC,distanceRGBA_vert:NC,distanceRGBA_frag:UC,equirect_vert:OC,equirect_frag:FC,linedashed_vert:kC,linedashed_frag:BC,meshbasic_vert:zC,meshbasic_frag:HC,meshlambert_vert:VC,meshlambert_frag:GC,meshmatcap_vert:WC,meshmatcap_frag:XC,meshnormal_vert:$C,meshnormal_frag:YC,meshphong_vert:qC,meshphong_frag:jC,meshphysical_vert:KC,meshphysical_frag:ZC,meshtoon_vert:JC,meshtoon_frag:QC,points_vert:eR,points_frag:tR,shadow_vert:nR,shadow_frag:iR,sprite_vert:rR,sprite_frag:sR},Fe={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Mr={basic:{uniforms:qn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:qn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new mt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:qn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:qn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:qn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new mt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:qn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:qn([Fe.points,Fe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:qn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:qn([Fe.common,Fe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:qn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:qn([Fe.sprite,Fe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:qn([Fe.common,Fe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:qn([Fe.lights,Fe.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Mr.physical={uniforms:qn([Mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const fu={r:0,b:0,g:0},io=new Ir,oR=new Xt;function aR(n,e,t,i,r,s,o){const a=new mt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?t:e).get(v)),v}function g(b){let v=!1;const w=_(b);w===null?p(a,l):w&&w.isColor&&(p(w,1),v=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,v){const w=_(v);w&&(w.isCubeTexture||w.mapping===Hf)?(u===void 0&&(u=new nn(new Wa(1,1,1),new Ws({name:"BackgroundCubeMaterial",uniforms:za(Mr.backgroundCube.uniforms),vertexShader:Mr.backgroundCube.vertexShader,fragmentShader:Mr.backgroundCube.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),io.copy(v.backgroundRotation),io.x*=-1,io.y*=-1,io.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(io.y*=-1,io.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(oR.makeRotationFromEuler(io)),u.material.toneMapped=Pt.getTransfer(w.colorSpace)!==Bt,(f!==w||h!==w.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,h=w.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new nn(new Gf(2,2),new Ws({name:"BackgroundMaterial",uniforms:za(Mr.background.uniforms),vertexShader:Mr.background.vertexShader,fragmentShader:Mr.background.fragmentShader,side:Gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Pt.getTransfer(w.colorSpace)!==Bt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=w,h=w.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,v){b.getRGB(fu,ky(n)),i.buffers.color.setClear(fu.r,fu.g,fu.b,v,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:g,addToRenderList:m,dispose:S}}function lR(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(x,N,L,B,F){let j=!1;const X=f(B,L,N);s!==X&&(s=X,c(s.object)),j=d(x,B,L,F),j&&_(x,B,L,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,v(x,N,L,B),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function f(x,N,L){const B=L.wireframe===!0;let F=i[x.id];F===void 0&&(F={},i[x.id]=F);let j=F[N.id];j===void 0&&(j={},F[N.id]=j);let X=j[B];return X===void 0&&(X=h(l()),j[B]=X),X}function h(x){const N=[],L=[],B=[];for(let F=0;F<t;F++)N[F]=0,L[F]=0,B[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:L,attributeDivisors:B,object:x,attributes:{},index:null}}function d(x,N,L,B){const F=s.attributes,j=N.attributes;let X=0;const $=L.getAttributes();for(const W in $)if($[W].location>=0){const O=F[W];let ye=j[W];if(ye===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(ye=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(ye=x.instanceColor)),O===void 0||O.attribute!==ye||ye&&O.data!==ye.data)return!0;X++}return s.attributesNum!==X||s.index!==B}function _(x,N,L,B){const F={},j=N.attributes;let X=0;const $=L.getAttributes();for(const W in $)if($[W].location>=0){let O=j[W];O===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(O=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(O=x.instanceColor));const ye={};ye.attribute=O,O&&O.data&&(ye.data=O.data),F[W]=ye,X++}s.attributes=F,s.attributesNum=X,s.index=B}function g(){const x=s.newAttributes;for(let N=0,L=x.length;N<L;N++)x[N]=0}function m(x){p(x,0)}function p(x,N){const L=s.newAttributes,B=s.enabledAttributes,F=s.attributeDivisors;L[x]=1,B[x]===0&&(n.enableVertexAttribArray(x),B[x]=1),F[x]!==N&&(n.vertexAttribDivisor(x,N),F[x]=N)}function S(){const x=s.newAttributes,N=s.enabledAttributes;for(let L=0,B=N.length;L<B;L++)N[L]!==x[L]&&(n.disableVertexAttribArray(L),N[L]=0)}function b(x,N,L,B,F,j,X){X===!0?n.vertexAttribIPointer(x,N,L,F,j):n.vertexAttribPointer(x,N,L,B,F,j)}function v(x,N,L,B){g();const F=B.attributes,j=L.getAttributes(),X=N.defaultAttributeValues;for(const $ in j){const W=j[$];if(W.location>=0){let me=F[$];if(me===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(me=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(me=x.instanceColor)),me!==void 0){const O=me.normalized,ye=me.itemSize,ze=e.get(me);if(ze===void 0)continue;const st=ze.buffer,se=ze.type,xe=ze.bytesPerElement,we=se===n.INT||se===n.UNSIGNED_INT||me.gpuType===Tm;if(me.isInterleavedBufferAttribute){const Se=me.data,ke=Se.stride,et=me.offset;if(Se.isInstancedInterleavedBuffer){for(let qe=0;qe<W.locationSize;qe++)p(W.location+qe,Se.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let qe=0;qe<W.locationSize;qe++)m(W.location+qe);n.bindBuffer(n.ARRAY_BUFFER,st);for(let qe=0;qe<W.locationSize;qe++)b(W.location+qe,ye/W.locationSize,se,O,ke*xe,(et+ye/W.locationSize*qe)*xe,we)}else{if(me.isInstancedBufferAttribute){for(let Se=0;Se<W.locationSize;Se++)p(W.location+Se,me.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Se=0;Se<W.locationSize;Se++)m(W.location+Se);n.bindBuffer(n.ARRAY_BUFFER,st);for(let Se=0;Se<W.locationSize;Se++)b(W.location+Se,ye/W.locationSize,se,O,ye*xe,ye/W.locationSize*Se*xe,we)}}else if(X!==void 0){const O=X[$];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(W.location,O);break;case 3:n.vertexAttrib3fv(W.location,O);break;case 4:n.vertexAttrib4fv(W.location,O);break;default:n.vertexAttrib1fv(W.location,O)}}}}S()}function w(){P();for(const x in i){const N=i[x];for(const L in N){const B=N[L];for(const F in B)u(B[F].object),delete B[F];delete N[L]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const N=i[x.id];for(const L in N){const B=N[L];for(const F in B)u(B[F].object),delete B[F];delete N[L]}delete i[x.id]}function T(x){for(const N in i){const L=i[N];if(L[x.id]===void 0)continue;const B=L[x.id];for(const F in B)u(B[F].object),delete B[F];delete L[x.id]}}function P(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function cR(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g]*h[g];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function uR(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==lr&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===_c&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ls&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Zr&&!P)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:w,maxSamples:R}}function fR(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new co,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const S=s?0:i,b=S*4;let v=p.clippingState||null;l.value=v,v=u(_,h,b,d);for(let w=0;w!==b;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=d;b!==g;++b,v+=4)o.copy(f[b]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function hR(n){let e=new WeakMap;function t(o,a){return a===Kd?o.mapping=Fa:a===Zd&&(o.mapping=ka),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Kd||a===Zd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new fA(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const _a=4,Yg=[.125,.215,.35,.446,.526,.582],mo=20,Zh=new SA,qg=new mt;let Jh=null,Qh=0,ed=0,td=!1;const uo=(1+Math.sqrt(5))/2,aa=1/uo,jg=[new H(-uo,aa,0),new H(uo,aa,0),new H(-aa,0,uo),new H(aa,0,uo),new H(0,uo,-aa),new H(0,uo,aa),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],dR=new H;class Kg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=dR}=s;Jh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jh,Qh,ed),this._renderer.xr.enabled=td,e.scissorTest=!1,hu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fa||e.mapping===ka?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rr,minFilter:Rr,generateMipmaps:!1,type:_c,format:lr,colorSpace:Ba,depthBuffer:!1},r=Zg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zg(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pR(s)),this._blurMaterial=mR(s,e,t)}return r}_compileMaterial(e){const t=new nn(this._lodPlanes[0],e);this._renderer.compile(t,Zh)}_sceneToCubeUV(e,t,i,r,s){const l=new wi(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(qg),f.toneMapping=Ns,f.autoClear=!1;const _=new Wr({name:"PMREM.Background",side:_i,depthWrite:!1,depthTest:!1}),g=new nn(new Wa,_);let m=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,m=!0):(_.color.copy(qg),m=!0);for(let S=0;S<6;S++){const b=S%3;b===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):b===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const v=this._cubeSize;hu(r,b*v,S>2?v:0,v,v),f.setRenderTarget(r),m&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Fa||e.mapping===ka;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new nn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;hu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Zh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=jg[(r-s-1)%jg.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new nn(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*mo-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):mo;m>mo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mo}`);const p=[];let S=0;for(let T=0;T<mo;++T){const P=T/g,y=Math.exp(-P*P/2);p.push(y),T===0?S+=y:T<m&&(S+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=_,h.mipInt.value=b-i;const v=this._sizeLods[r],w=3*v*(r>b-_a?r-b+_a:0),R=4*(this._cubeSize-v);hu(t,w,R,3*v,2*v),l.setRenderTarget(t),l.render(f,Zh)}}function pR(n){const e=[],t=[],i=[];let r=n;const s=n-_a+1+Yg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-_a?l=Yg[o-n+_a-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,g=3,m=2,p=1,S=new Float32Array(g*_*d),b=new Float32Array(m*_*d),v=new Float32Array(p*_*d);for(let R=0;R<d;R++){const T=R%3*2/3-1,P=R>2?0:-1,y=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];S.set(y,g*_*R),b.set(h,m*_*R);const x=[R,R,R,R,R,R];v.set(x,p*_*R)}const w=new pn;w.setAttribute("position",new Qi(S,g)),w.setAttribute("uv",new Qi(b,m)),w.setAttribute("faceIndex",new Qi(v,p)),e.push(w),r>_a&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Zg(n,e,t){const i=new Uo(n,e,t);return i.texture.mapping=Hf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hu(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function mR(n,e,t){const i=new Float32Array(mo),r=new H(0,1,0);return new Ws({name:"SphericalGaussianBlur",defines:{n:mo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Om(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Is,depthTest:!1,depthWrite:!1})}function Jg(){return new Ws({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Om(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Is,depthTest:!1,depthWrite:!1})}function Qg(){return new Ws({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Om(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Is,depthTest:!1,depthWrite:!1})}function Om(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _R(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Kd||l===Zd,u=l===Fa||l===ka;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Kg(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Kg(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function gR(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Iu("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vR(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let b=0,v=S.length;b<v;b+=3){const w=S[b+0],R=S[b+1],T=S[b+2];h.push(w,R,R,T,T,w)}}else if(_!==void 0){const S=_.array;g=_.version;for(let b=0,v=S.length/3-1;b<v;b+=3){const w=b+0,R=b+1,T=b+2;h.push(w,R,R,T,T,w)}}else return;const m=new(Ly(h)?Fy:Oy)(h,1);m.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function xR(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,_){_!==0&&(n.drawElementsInstanced(i,d,s,h*o,_),t.update(d,i,_))}function u(h,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,i,1)}function f(h,d,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,g,0,_);let p=0;for(let S=0;S<_;S++)p+=d[S]*g[S];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function yR(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function bR(n,e,t){const i=new WeakMap,r=new zt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let x=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var d=x;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let w=a.attributes.position.count*v,R=1;w>e.maxTextureSize&&(R=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const T=new Float32Array(w*R*4*f),P=new Iy(T,w,R,f);P.type=Zr,P.needsUpdate=!0;const y=v*4;for(let N=0;N<f;N++){const L=p[N],B=S[N],F=b[N],j=w*R*4*N;for(let X=0;X<L.count;X++){const $=X*y;_===!0&&(r.fromBufferAttribute(L,X),T[j+$+0]=r.x,T[j+$+1]=r.y,T[j+$+2]=r.z,T[j+$+3]=0),g===!0&&(r.fromBufferAttribute(B,X),T[j+$+4]=r.x,T[j+$+5]=r.y,T[j+$+6]=r.z,T[j+$+7]=0),m===!0&&(r.fromBufferAttribute(F,X),T[j+$+8]=r.x,T[j+$+9]=r.y,T[j+$+10]=r.z,T[j+$+11]=F.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new Tt(w,R)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function SR(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Wy=new gi,e0=new Hy(1,1),Xy=new Iy,$y=new qw,Yy=new zy,t0=[],n0=[],i0=new Float32Array(16),r0=new Float32Array(9),s0=new Float32Array(4);function Xa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=t0[r];if(s===void 0&&(s=new Float32Array(r),t0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function bn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Sn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Wf(n,e){let t=n0[e];t===void 0&&(t=new Int32Array(e),n0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function MR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ER(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;n.uniform2fv(this.addr,e),Sn(t,e)}}function TR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bn(t,e))return;n.uniform3fv(this.addr,e),Sn(t,e)}}function wR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;n.uniform4fv(this.addr,e),Sn(t,e)}}function AR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Sn(t,e)}else{if(bn(t,i))return;s0.set(i),n.uniformMatrix2fv(this.addr,!1,s0),Sn(t,i)}}function CR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Sn(t,e)}else{if(bn(t,i))return;r0.set(i),n.uniformMatrix3fv(this.addr,!1,r0),Sn(t,i)}}function RR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Sn(t,e)}else{if(bn(t,i))return;i0.set(i),n.uniformMatrix4fv(this.addr,!1,i0),Sn(t,i)}}function PR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function DR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;n.uniform2iv(this.addr,e),Sn(t,e)}}function LR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;n.uniform3iv(this.addr,e),Sn(t,e)}}function IR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;n.uniform4iv(this.addr,e),Sn(t,e)}}function NR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function UR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;n.uniform2uiv(this.addr,e),Sn(t,e)}}function OR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;n.uniform3uiv(this.addr,e),Sn(t,e)}}function FR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;n.uniform4uiv(this.addr,e),Sn(t,e)}}function kR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(e0.compareFunction=Dy,s=e0):s=Wy,t.setTexture2D(e||s,r)}function BR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||$y,r)}function zR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Yy,r)}function HR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Xy,r)}function VR(n){switch(n){case 5126:return MR;case 35664:return ER;case 35665:return TR;case 35666:return wR;case 35674:return AR;case 35675:return CR;case 35676:return RR;case 5124:case 35670:return PR;case 35667:case 35671:return DR;case 35668:case 35672:return LR;case 35669:case 35673:return IR;case 5125:return NR;case 36294:return UR;case 36295:return OR;case 36296:return FR;case 35678:case 36198:case 36298:case 36306:case 35682:return kR;case 35679:case 36299:case 36307:return BR;case 35680:case 36300:case 36308:case 36293:return zR;case 36289:case 36303:case 36311:case 36292:return HR}}function GR(n,e){n.uniform1fv(this.addr,e)}function WR(n,e){const t=Xa(e,this.size,2);n.uniform2fv(this.addr,t)}function XR(n,e){const t=Xa(e,this.size,3);n.uniform3fv(this.addr,t)}function $R(n,e){const t=Xa(e,this.size,4);n.uniform4fv(this.addr,t)}function YR(n,e){const t=Xa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qR(n,e){const t=Xa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jR(n,e){const t=Xa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function KR(n,e){n.uniform1iv(this.addr,e)}function ZR(n,e){n.uniform2iv(this.addr,e)}function JR(n,e){n.uniform3iv(this.addr,e)}function QR(n,e){n.uniform4iv(this.addr,e)}function eP(n,e){n.uniform1uiv(this.addr,e)}function tP(n,e){n.uniform2uiv(this.addr,e)}function nP(n,e){n.uniform3uiv(this.addr,e)}function iP(n,e){n.uniform4uiv(this.addr,e)}function rP(n,e,t){const i=this.cache,r=e.length,s=Wf(t,r);bn(i,s)||(n.uniform1iv(this.addr,s),Sn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Wy,s[o])}function sP(n,e,t){const i=this.cache,r=e.length,s=Wf(t,r);bn(i,s)||(n.uniform1iv(this.addr,s),Sn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||$y,s[o])}function oP(n,e,t){const i=this.cache,r=e.length,s=Wf(t,r);bn(i,s)||(n.uniform1iv(this.addr,s),Sn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Yy,s[o])}function aP(n,e,t){const i=this.cache,r=e.length,s=Wf(t,r);bn(i,s)||(n.uniform1iv(this.addr,s),Sn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Xy,s[o])}function lP(n){switch(n){case 5126:return GR;case 35664:return WR;case 35665:return XR;case 35666:return $R;case 35674:return YR;case 35675:return qR;case 35676:return jR;case 5124:case 35670:return KR;case 35667:case 35671:return ZR;case 35668:case 35672:return JR;case 35669:case 35673:return QR;case 5125:return eP;case 36294:return tP;case 36295:return nP;case 36296:return iP;case 35678:case 36198:case 36298:case 36306:case 35682:return rP;case 35679:case 36299:case 36307:return sP;case 35680:case 36300:case 36308:case 36293:return oP;case 36289:case 36303:case 36311:case 36292:return aP}}class cP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=VR(t.type)}}class uP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lP(t.type)}}class fP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const nd=/(\w+)(\])?(\[|\.)?/g;function o0(n,e){n.seq.push(e),n.map[e.id]=e}function hP(n,e,t){const i=n.name,r=i.length;for(nd.lastIndex=0;;){const s=nd.exec(i),o=nd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){o0(t,c===void 0?new cP(a,n,e):new uP(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new fP(a),o0(t,f)),t=f}}}class Uu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);hP(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function a0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const dP=37297;let pP=0;function mP(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const l0=new ht;function _P(n){Pt._getMatrix(l0,Pt.workingColorSpace,n);const e=`mat3( ${l0.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(n)){case ff:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function c0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+mP(n.getShaderSource(e),o)}else return r}function gP(n,e){const t=_P(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vP(n,e){let t;switch(e){case yw:t="Linear";break;case bw:t="Reinhard";break;case Sw:t="Cineon";break;case Mw:t="ACESFilmic";break;case Tw:t="AgX";break;case ww:t="Neutral";break;case Ew:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const du=new H;function xP(){Pt.getLuminanceCoefficients(du);const n=du.x.toFixed(4),e=du.y.toFixed(4),t=du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xl).join(`
`)}function bP(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function SP(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function xl(n){return n!==""}function u0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function f0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cp(n){return n.replace(MP,TP)}const EP=new Map;function TP(n,e){let t=pt[e];if(t===void 0){const i=EP.get(e);if(i!==void 0)t=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cp(t)}const wP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h0(n){return n.replace(wP,AP)}function AP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function d0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===gy?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===QT?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hr&&(e="SHADOWMAP_TYPE_VSM"),e}function RP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fa:case ka:e="ENVMAP_TYPE_CUBE";break;case Hf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ka:e="ENVMAP_MODE_REFRACTION";break}return e}function DP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vy:e="ENVMAP_BLENDING_MULTIPLY";break;case vw:e="ENVMAP_BLENDING_MIX";break;case xw:e="ENVMAP_BLENDING_ADD";break}return e}function LP(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function IP(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=CP(t),c=RP(t),u=PP(t),f=DP(t),h=LP(t),d=yP(t),_=bP(s),g=r.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(xl).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(xl).join(`
`),p.length>0&&(p+=`
`)):(m=[d0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xl).join(`
`),p=[d0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ns?"#define TONE_MAPPING":"",t.toneMapping!==Ns?pt.tonemapping_pars_fragment:"",t.toneMapping!==Ns?vP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,gP("linearToOutputTexel",t.outputColorSpace),xP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xl).join(`
`)),o=Cp(o),o=u0(o,t),o=f0(o,t),a=Cp(a),a=u0(a,t),a=f0(a,t),o=h0(o),a=h0(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===xg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=S+m+o,v=S+p+a,w=a0(r,r.VERTEX_SHADER,b),R=a0(r,r.FRAGMENT_SHADER,v);r.attachShader(g,w),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(N){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(g).trim(),B=r.getShaderInfoLog(w).trim(),F=r.getShaderInfoLog(R).trim();let j=!0,X=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,w,R);else{const $=c0(r,w,"vertex"),W=c0(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+L+`
`+$+`
`+W)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(B===""||F==="")&&(X=!1);X&&(N.diagnostics={runnable:j,programLog:L,vertexShader:{log:B,prefix:m},fragmentShader:{log:F,prefix:p}})}r.deleteShader(w),r.deleteShader(R),P=new Uu(r,g),y=SP(r,g)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(g,dP)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pP++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=R,this}let NP=0;class UP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new OP(e),t.set(e,i)),i}}class OP{constructor(e){this.id=NP++,this.code=e,this.usedTimes=0}}function FP(n,e,t,i,r,s,o){const a=new Ny,l=new UP,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,N,L,B){const F=L.fog,j=B.geometry,X=y.isMeshStandardMaterial?L.environment:null,$=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),W=$&&$.mapping===Hf?$.image.height:null,me=_[y.type];y.precision!==null&&(d=r.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const O=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ye=O!==void 0?O.length:0;let ze=0;j.morphAttributes.position!==void 0&&(ze=1),j.morphAttributes.normal!==void 0&&(ze=2),j.morphAttributes.color!==void 0&&(ze=3);let st,se,xe,we;if(me){const ae=Mr[me];st=ae.vertexShader,se=ae.fragmentShader}else st=y.vertexShader,se=y.fragmentShader,l.update(y),xe=l.getVertexShaderID(y),we=l.getFragmentShaderID(y);const Se=n.getRenderTarget(),ke=n.state.buffers.depth.getReversed(),et=B.isInstancedMesh===!0,qe=B.isBatchedMesh===!0,ft=!!y.map,ot=!!y.matcap,I=!!$,E=!!y.aoMap,ee=!!y.lightMap,te=!!y.bumpMap,U=!!y.normalMap,K=!!y.displacementMap,ge=!!y.emissiveMap,ie=!!y.metalnessMap,A=!!y.roughnessMap,M=y.anisotropy>0,z=y.clearcoat>0,V=y.dispersion>0,q=y.iridescence>0,Z=y.sheen>0,fe=y.transmission>0,_e=M&&!!y.anisotropyMap,ve=z&&!!y.clearcoatMap,He=z&&!!y.clearcoatNormalMap,he=z&&!!y.clearcoatRoughnessMap,Me=q&&!!y.iridescenceMap,We=q&&!!y.iridescenceThicknessMap,je=Z&&!!y.sheenColorMap,Ie=Z&&!!y.sheenRoughnessMap,Qe=!!y.specularMap,Ke=!!y.specularColorMap,_t=!!y.specularIntensityMap,k=fe&&!!y.transmissionMap,Ce=fe&&!!y.thicknessMap,re=!!y.gradientMap,le=!!y.alphaMap,Ae=y.alphaTest>0,J=!!y.alphaHash,oe=!!y.extensions;let de=Ns;y.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(de=n.toneMapping);const be={shaderID:me,shaderType:y.type,shaderName:y.name,vertexShader:st,fragmentShader:se,defines:y.defines,customVertexShaderID:xe,customFragmentShaderID:we,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:qe,batchingColor:qe&&B._colorsTexture!==null,instancing:et,instancingColor:et&&B.instanceColor!==null,instancingMorph:et&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Se===null?n.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Ba,alphaToCoverage:!!y.alphaToCoverage,map:ft,matcap:ot,envMap:I,envMapMode:I&&$.mapping,envMapCubeUVHeight:W,aoMap:E,lightMap:ee,bumpMap:te,normalMap:U,displacementMap:h&&K,emissiveMap:ge,normalMapObjectSpace:U&&y.normalMapType===Pw,normalMapTangentSpace:U&&y.normalMapType===Py,metalnessMap:ie,roughnessMap:A,anisotropy:M,anisotropyMap:_e,clearcoat:z,clearcoatMap:ve,clearcoatNormalMap:He,clearcoatRoughnessMap:he,dispersion:V,iridescence:q,iridescenceMap:Me,iridescenceThicknessMap:We,sheen:Z,sheenColorMap:je,sheenRoughnessMap:Ie,specularMap:Qe,specularColorMap:Ke,specularIntensityMap:_t,transmission:fe,transmissionMap:k,thicknessMap:Ce,gradientMap:re,opaque:y.transparent===!1&&y.blending===Po&&y.alphaToCoverage===!1,alphaMap:le,alphaTest:Ae,alphaHash:J,combine:y.combine,mapUv:ft&&g(y.map.channel),aoMapUv:E&&g(y.aoMap.channel),lightMapUv:ee&&g(y.lightMap.channel),bumpMapUv:te&&g(y.bumpMap.channel),normalMapUv:U&&g(y.normalMap.channel),displacementMapUv:K&&g(y.displacementMap.channel),emissiveMapUv:ge&&g(y.emissiveMap.channel),metalnessMapUv:ie&&g(y.metalnessMap.channel),roughnessMapUv:A&&g(y.roughnessMap.channel),anisotropyMapUv:_e&&g(y.anisotropyMap.channel),clearcoatMapUv:ve&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:He&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:We&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:je&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&g(y.sheenRoughnessMap.channel),specularMapUv:Qe&&g(y.specularMap.channel),specularColorMapUv:Ke&&g(y.specularColorMap.channel),specularIntensityMapUv:_t&&g(y.specularIntensityMap.channel),transmissionMapUv:k&&g(y.transmissionMap.channel),thicknessMapUv:Ce&&g(y.thicknessMap.channel),alphaMapUv:le&&g(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(U||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(ft||le),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ke,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:ze,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:de,decodeVideoTexture:ft&&y.map.isVideoTexture===!0&&Pt.getTransfer(y.map.colorSpace)===Bt,decodeVideoTextureEmissive:ge&&y.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(y.emissiveMap.colorSpace)===Bt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ji,flipSided:y.side===_i,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:oe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&y.extensions.multiDraw===!0||qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function p(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)x.push(N),x.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(S(x,y),b(x,y),x.push(n.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function S(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function b(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const x=_[y.type];let N;if(x){const L=Mr[x];N=aA.clone(L.uniforms)}else N=y.uniforms;return N}function w(y,x){let N;for(let L=0,B=u.length;L<B;L++){const F=u[L];if(F.cacheKey===x){N=F,++N.usedTimes;break}}return N===void 0&&(N=new IP(n,x,y,s),u.push(N)),N}function R(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function T(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:R,releaseShaderCache:T,programs:u,dispose:P}}function kP(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function BP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function p0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function m0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,_,g,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function a(f,h,d,_,g,m){const p=o(f,h,d,_,g,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,_,g,m){const p=o(f,h,d,_,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||BP),i.length>1&&i.sort(h||p0),r.length>1&&r.sort(h||p0)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function zP(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new m0,n.set(i,[o])):r>=s.length?(o=new m0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function HP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new mt};break;case"SpotLight":t={position:new H,direction:new H,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function VP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let GP=0;function WP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function XP(n){const e=new HP,t=VP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new Xt,o=new Xt;function a(c){let u=0,f=0,h=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,S=0,b=0,v=0,w=0,R=0,T=0;c.sort(WP);for(let y=0,x=c.length;y<x;y++){const N=c[y],L=N.color,B=N.intensity,F=N.distance,j=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=L.r*B,f+=L.g*B,h+=L.b*B;else if(N.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(N.sh.coefficients[X],B);T++}else if(N.isDirectionalLight){const X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const $=N.shadow,W=t.get(N);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.directionalShadow[d]=W,i.directionalShadowMap[d]=j,i.directionalShadowMatrix[d]=N.shadow.matrix,S++}i.directional[d]=X,d++}else if(N.isSpotLight){const X=e.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(L).multiplyScalar(B),X.distance=F,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,i.spot[g]=X;const $=N.shadow;if(N.map&&(i.spotLightMap[w]=N.map,w++,$.updateMatrices(N),N.castShadow&&R++),i.spotLightMatrix[g]=$.matrix,N.castShadow){const W=t.get(N);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.spotShadow[g]=W,i.spotShadowMap[g]=j,v++}g++}else if(N.isRectAreaLight){const X=e.get(N);X.color.copy(L).multiplyScalar(B),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=X,m++}else if(N.isPointLight){const X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),X.distance=N.distance,X.decay=N.decay,N.castShadow){const $=N.shadow,W=t.get(N);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=j,i.pointShadowMatrix[_]=N.shadow.matrix,b++}i.point[_]=X,_++}else if(N.isHemisphereLight){const X=e.get(N);X.skyColor.copy(N.color).multiplyScalar(B),X.groundColor.copy(N.groundColor).multiplyScalar(B),i.hemi[p]=X,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==d||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==S||P.numPointShadows!==b||P.numSpotShadows!==v||P.numSpotMaps!==w||P.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=v+w-R,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,P.directionalLength=d,P.pointLength=_,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=S,P.numPointShadows=b,P.numSpotShadows=v,P.numSpotMaps=w,P.numLightProbes=T,i.version=GP++)}function l(c,u){let f=0,h=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const b=c[p];if(b.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(b.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const v=i.rectArea[_];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const v=i.hemi[g];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function _0(n){const e=new XP(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function $P(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new _0(n),e.set(r,[a])):s>=o.length?(a=new _0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const YP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jP(n,e,t){let i=new Nm;const r=new Tt,s=new Tt,o=new zt,a=new gA({depthPacking:Rw}),l=new vA,c={},u=t.maxTextureSize,f={[Gs]:_i,[_i]:Gs,[ji]:ji},h=new Ws({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:YP,fragmentShader:qP}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new pn;_.setAttribute("position",new Qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new nn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gy;let p=this.type;this.render=function(R,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=n.getRenderTarget(),x=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Is),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const B=p!==Hr&&this.type===Hr,F=p===Hr&&this.type!==Hr;for(let j=0,X=R.length;j<X;j++){const $=R[j],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const me=W.getFrameExtents();if(r.multiply(me),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/me.x),r.x=s.x*me.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/me.y),r.y=s.y*me.y,W.mapSize.y=s.y)),W.map===null||B===!0||F===!0){const ye=this.type!==Hr?{minFilter:fr,magFilter:fr}:{};W.map!==null&&W.map.dispose(),W.map=new Uo(r.x,r.y,ye),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const O=W.getViewportCount();for(let ye=0;ye<O;ye++){const ze=W.getViewport(ye);o.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),L.viewport(o),W.updateMatrices($,ye),i=W.getFrustum(),v(T,P,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===Hr&&S(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,x,N)};function S(R,T){const P=e.update(g);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Uo(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(T,null,P,h,g,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(T,null,P,d,g,null)}function b(R,T,P,y){let x=null;const N=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)x=N;else if(x=P.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const L=x.uuid,B=T.uuid;let F=c[L];F===void 0&&(F={},c[L]=F);let j=F[B];j===void 0&&(j=x.clone(),F[B]=j,T.addEventListener("dispose",w)),x=j}if(x.visible=T.visible,x.wireframe=T.wireframe,y===Hr?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:f[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const L=n.properties.get(x);L.light=P}return x}function v(R,T,P,y,x){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===Hr)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const B=e.update(R),F=R.material;if(Array.isArray(F)){const j=B.groups;for(let X=0,$=j.length;X<$;X++){const W=j[X],me=F[W.materialIndex];if(me&&me.visible){const O=b(R,me,y,x);R.onBeforeShadow(n,R,T,P,B,O,W),n.renderBufferDirect(P,null,B,O,R,W),R.onAfterShadow(n,R,T,P,B,O,W)}}}else if(F.visible){const j=b(R,F,y,x);R.onBeforeShadow(n,R,T,P,B,j,null),n.renderBufferDirect(P,null,B,j,R,null),R.onAfterShadow(n,R,T,P,B,j,null)}}const L=R.children;for(let B=0,F=L.length;B<F;B++)v(L[B],T,P,y,x)}function w(R){R.target.removeEventListener("dispose",w);for(const P in c){const y=c[P],x=R.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const KP={[Gd]:Wd,[Xd]:qd,[$d]:jd,[Oa]:Yd,[Wd]:Gd,[qd]:Xd,[jd]:$d,[Yd]:Oa};function ZP(n,e){function t(){let k=!1;const Ce=new zt;let re=null;const le=new zt(0,0,0,0);return{setMask:function(Ae){re!==Ae&&!k&&(n.colorMask(Ae,Ae,Ae,Ae),re=Ae)},setLocked:function(Ae){k=Ae},setClear:function(Ae,J,oe,de,be){be===!0&&(Ae*=de,J*=de,oe*=de),Ce.set(Ae,J,oe,de),le.equals(Ce)===!1&&(n.clearColor(Ae,J,oe,de),le.copy(Ce))},reset:function(){k=!1,re=null,le.set(-1,0,0,0)}}}function i(){let k=!1,Ce=!1,re=null,le=null,Ae=null;return{setReversed:function(J){if(Ce!==J){const oe=e.get("EXT_clip_control");J?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),Ce=J;const de=Ae;Ae=null,this.setClear(de)}},getReversed:function(){return Ce},setTest:function(J){J?Se(n.DEPTH_TEST):ke(n.DEPTH_TEST)},setMask:function(J){re!==J&&!k&&(n.depthMask(J),re=J)},setFunc:function(J){if(Ce&&(J=KP[J]),le!==J){switch(J){case Gd:n.depthFunc(n.NEVER);break;case Wd:n.depthFunc(n.ALWAYS);break;case Xd:n.depthFunc(n.LESS);break;case Oa:n.depthFunc(n.LEQUAL);break;case $d:n.depthFunc(n.EQUAL);break;case Yd:n.depthFunc(n.GEQUAL);break;case qd:n.depthFunc(n.GREATER);break;case jd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=J}},setLocked:function(J){k=J},setClear:function(J){Ae!==J&&(Ce&&(J=1-J),n.clearDepth(J),Ae=J)},reset:function(){k=!1,re=null,le=null,Ae=null,Ce=!1}}}function r(){let k=!1,Ce=null,re=null,le=null,Ae=null,J=null,oe=null,de=null,be=null;return{setTest:function(ae){k||(ae?Se(n.STENCIL_TEST):ke(n.STENCIL_TEST))},setMask:function(ae){Ce!==ae&&!k&&(n.stencilMask(ae),Ce=ae)},setFunc:function(ae,Ee,De){(re!==ae||le!==Ee||Ae!==De)&&(n.stencilFunc(ae,Ee,De),re=ae,le=Ee,Ae=De)},setOp:function(ae,Ee,De){(J!==ae||oe!==Ee||de!==De)&&(n.stencilOp(ae,Ee,De),J=ae,oe=Ee,de=De)},setLocked:function(ae){k=ae},setClear:function(ae){be!==ae&&(n.clearStencil(ae),be=ae)},reset:function(){k=!1,Ce=null,re=null,le=null,Ae=null,J=null,oe=null,de=null,be=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],_=null,g=!1,m=null,p=null,S=null,b=null,v=null,w=null,R=null,T=new mt(0,0,0),P=0,y=!1,x=null,N=null,L=null,B=null,F=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=$>=2);let me=null,O={};const ye=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),st=new zt().fromArray(ye),se=new zt().fromArray(ze);function xe(k,Ce,re,le){const Ae=new Uint8Array(4),J=n.createTexture();n.bindTexture(k,J),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let oe=0;oe<re;oe++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(Ce+oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return J}const we={};we[n.TEXTURE_2D]=xe(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[n.TEXTURE_2D_ARRAY]=xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Se(n.DEPTH_TEST),o.setFunc(Oa),te(!1),U(pg),Se(n.CULL_FACE),E(Is);function Se(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function ke(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function et(k,Ce){return f[k]!==Ce?(n.bindFramebuffer(k,Ce),f[k]=Ce,k===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ce),k===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function qe(k,Ce){let re=d,le=!1;if(k){re=h.get(Ce),re===void 0&&(re=[],h.set(Ce,re));const Ae=k.textures;if(re.length!==Ae.length||re[0]!==n.COLOR_ATTACHMENT0){for(let J=0,oe=Ae.length;J<oe;J++)re[J]=n.COLOR_ATTACHMENT0+J;re.length=Ae.length,le=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,le=!0);le&&n.drawBuffers(re)}function ft(k){return _!==k?(n.useProgram(k),_=k,!0):!1}const ot={[ho]:n.FUNC_ADD,[tw]:n.FUNC_SUBTRACT,[nw]:n.FUNC_REVERSE_SUBTRACT};ot[iw]=n.MIN,ot[rw]=n.MAX;const I={[sw]:n.ZERO,[ow]:n.ONE,[aw]:n.SRC_COLOR,[Hd]:n.SRC_ALPHA,[dw]:n.SRC_ALPHA_SATURATE,[fw]:n.DST_COLOR,[cw]:n.DST_ALPHA,[lw]:n.ONE_MINUS_SRC_COLOR,[Vd]:n.ONE_MINUS_SRC_ALPHA,[hw]:n.ONE_MINUS_DST_COLOR,[uw]:n.ONE_MINUS_DST_ALPHA,[pw]:n.CONSTANT_COLOR,[mw]:n.ONE_MINUS_CONSTANT_COLOR,[_w]:n.CONSTANT_ALPHA,[gw]:n.ONE_MINUS_CONSTANT_ALPHA};function E(k,Ce,re,le,Ae,J,oe,de,be,ae){if(k===Is){g===!0&&(ke(n.BLEND),g=!1);return}if(g===!1&&(Se(n.BLEND),g=!0),k!==ew){if(k!==m||ae!==y){if((p!==ho||v!==ho)&&(n.blendEquation(n.FUNC_ADD),p=ho,v=ho),ae)switch(k){case Po:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zl:n.blendFunc(n.ONE,n.ONE);break;case mg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _g:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Po:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case mg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _g:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}S=null,b=null,w=null,R=null,T.set(0,0,0),P=0,m=k,y=ae}return}Ae=Ae||Ce,J=J||re,oe=oe||le,(Ce!==p||Ae!==v)&&(n.blendEquationSeparate(ot[Ce],ot[Ae]),p=Ce,v=Ae),(re!==S||le!==b||J!==w||oe!==R)&&(n.blendFuncSeparate(I[re],I[le],I[J],I[oe]),S=re,b=le,w=J,R=oe),(de.equals(T)===!1||be!==P)&&(n.blendColor(de.r,de.g,de.b,be),T.copy(de),P=be),m=k,y=!1}function ee(k,Ce){k.side===ji?ke(n.CULL_FACE):Se(n.CULL_FACE);let re=k.side===_i;Ce&&(re=!re),te(re),k.blending===Po&&k.transparent===!1?E(Is):E(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const le=k.stencilWrite;a.setTest(le),le&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ge(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(k){x!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),x=k)}function U(k){k!==ZT?(Se(n.CULL_FACE),k!==N&&(k===pg?n.cullFace(n.BACK):k===JT?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ke(n.CULL_FACE),N=k}function K(k){k!==L&&(X&&n.lineWidth(k),L=k)}function ge(k,Ce,re){k?(Se(n.POLYGON_OFFSET_FILL),(B!==Ce||F!==re)&&(n.polygonOffset(Ce,re),B=Ce,F=re)):ke(n.POLYGON_OFFSET_FILL)}function ie(k){k?Se(n.SCISSOR_TEST):ke(n.SCISSOR_TEST)}function A(k){k===void 0&&(k=n.TEXTURE0+j-1),me!==k&&(n.activeTexture(k),me=k)}function M(k,Ce,re){re===void 0&&(me===null?re=n.TEXTURE0+j-1:re=me);let le=O[re];le===void 0&&(le={type:void 0,texture:void 0},O[re]=le),(le.type!==k||le.texture!==Ce)&&(me!==re&&(n.activeTexture(re),me=re),n.bindTexture(k,Ce||we[k]),le.type=k,le.texture=Ce)}function z(){const k=O[me];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function V(){try{n.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function q(){try{n.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{n.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{n.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{n.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{n.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function He(){try{n.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{n.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{n.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function We(){try{n.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function je(k){st.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),st.copy(k))}function Ie(k){se.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),se.copy(k))}function Qe(k,Ce){let re=c.get(Ce);re===void 0&&(re=new WeakMap,c.set(Ce,re));let le=re.get(k);le===void 0&&(le=n.getUniformBlockIndex(Ce,k.name),re.set(k,le))}function Ke(k,Ce){const le=c.get(Ce).get(k);l.get(Ce)!==le&&(n.uniformBlockBinding(Ce,le,k.__bindingPointIndex),l.set(Ce,le))}function _t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},me=null,O={},f={},h=new WeakMap,d=[],_=null,g=!1,m=null,p=null,S=null,b=null,v=null,w=null,R=null,T=new mt(0,0,0),P=0,y=!1,x=null,N=null,L=null,B=null,F=null,st.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Se,disable:ke,bindFramebuffer:et,drawBuffers:qe,useProgram:ft,setBlending:E,setMaterial:ee,setFlipSided:te,setCullFace:U,setLineWidth:K,setPolygonOffset:ge,setScissorTest:ie,activeTexture:A,bindTexture:M,unbindTexture:z,compressedTexImage2D:V,compressedTexImage3D:q,texImage2D:Me,texImage3D:We,updateUBOMapping:Qe,uniformBlockBinding:Ke,texStorage2D:He,texStorage3D:he,texSubImage2D:Z,texSubImage3D:fe,compressedTexSubImage2D:_e,compressedTexSubImage3D:ve,scissor:je,viewport:Ie,reset:_t}}function JP(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return d?new OffscreenCanvas(A,M):df("canvas")}function g(A,M,z){let V=1;const q=ie(A);if((q.width>z||q.height>z)&&(V=z/Math.max(q.width,q.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(V*q.width),fe=Math.floor(V*q.height);f===void 0&&(f=_(Z,fe));const _e=M?_(Z,fe):f;return _e.width=Z,_e.height=fe,_e.getContext("2d").drawImage(A,0,0,Z,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+Z+"x"+fe+")."),_e}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(A,M,z,V,q=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=M;if(M===n.RED&&(z===n.FLOAT&&(Z=n.R32F),z===n.HALF_FLOAT&&(Z=n.R16F),z===n.UNSIGNED_BYTE&&(Z=n.R8)),M===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.R8UI),z===n.UNSIGNED_SHORT&&(Z=n.R16UI),z===n.UNSIGNED_INT&&(Z=n.R32UI),z===n.BYTE&&(Z=n.R8I),z===n.SHORT&&(Z=n.R16I),z===n.INT&&(Z=n.R32I)),M===n.RG&&(z===n.FLOAT&&(Z=n.RG32F),z===n.HALF_FLOAT&&(Z=n.RG16F),z===n.UNSIGNED_BYTE&&(Z=n.RG8)),M===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RG8UI),z===n.UNSIGNED_SHORT&&(Z=n.RG16UI),z===n.UNSIGNED_INT&&(Z=n.RG32UI),z===n.BYTE&&(Z=n.RG8I),z===n.SHORT&&(Z=n.RG16I),z===n.INT&&(Z=n.RG32I)),M===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),z===n.UNSIGNED_INT&&(Z=n.RGB32UI),z===n.BYTE&&(Z=n.RGB8I),z===n.SHORT&&(Z=n.RGB16I),z===n.INT&&(Z=n.RGB32I)),M===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),z===n.UNSIGNED_INT&&(Z=n.RGBA32UI),z===n.BYTE&&(Z=n.RGBA8I),z===n.SHORT&&(Z=n.RGBA16I),z===n.INT&&(Z=n.RGBA32I)),M===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),M===n.RGBA){const fe=q?ff:Pt.getTransfer(V);z===n.FLOAT&&(Z=n.RGBA32F),z===n.HALF_FLOAT&&(Z=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Z=fe===Bt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(A,M){let z;return A?M===null||M===No||M===lc?z=n.DEPTH24_STENCIL8:M===Zr?z=n.DEPTH32F_STENCIL8:M===ac&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===No||M===lc?z=n.DEPTH_COMPONENT24:M===Zr?z=n.DEPTH_COMPONENT32F:M===ac&&(z=n.DEPTH_COMPONENT16),z}function w(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==fr&&A.minFilter!==Rr?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function R(A){const M=A.target;M.removeEventListener("dispose",R),P(M),M.isVideoTexture&&u.delete(M)}function T(A){const M=A.target;M.removeEventListener("dispose",T),x(M)}function P(A){const M=i.get(A);if(M.__webglInit===void 0)return;const z=A.source,V=h.get(z);if(V){const q=V[M.__cacheKey];q.usedTimes--,q.usedTimes===0&&y(A),Object.keys(V).length===0&&h.delete(z)}i.remove(A)}function y(A){const M=i.get(A);n.deleteTexture(M.__webglTexture);const z=A.source,V=h.get(z);delete V[M.__cacheKey],o.memory.textures--}function x(A){const M=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(M.__webglFramebuffer[V]))for(let q=0;q<M.__webglFramebuffer[V].length;q++)n.deleteFramebuffer(M.__webglFramebuffer[V][q]);else n.deleteFramebuffer(M.__webglFramebuffer[V]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[V])}else{if(Array.isArray(M.__webglFramebuffer))for(let V=0;V<M.__webglFramebuffer.length;V++)n.deleteFramebuffer(M.__webglFramebuffer[V]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let V=0;V<M.__webglColorRenderbuffer.length;V++)M.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[V]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=A.textures;for(let V=0,q=z.length;V<q;V++){const Z=i.get(z[V]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(z[V])}i.remove(A)}let N=0;function L(){N=0}function B(){const A=N;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),N+=1,A}function F(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function j(A,M){const z=i.get(A);if(A.isVideoTexture&&K(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const V=A.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(z,A,M);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+M)}function X(A,M){const z=i.get(A);if(A.version>0&&z.__version!==A.version){se(z,A,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+M)}function $(A,M){const z=i.get(A);if(A.version>0&&z.__version!==A.version){se(z,A,M);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+M)}function W(A,M){const z=i.get(A);if(A.version>0&&z.__version!==A.version){xe(z,A,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+M)}const me={[Jd]:n.REPEAT,[vo]:n.CLAMP_TO_EDGE,[Qd]:n.MIRRORED_REPEAT},O={[fr]:n.NEAREST,[Aw]:n.NEAREST_MIPMAP_NEAREST,[Vc]:n.NEAREST_MIPMAP_LINEAR,[Rr]:n.LINEAR,[Mh]:n.LINEAR_MIPMAP_NEAREST,[xo]:n.LINEAR_MIPMAP_LINEAR},ye={[Dw]:n.NEVER,[Fw]:n.ALWAYS,[Lw]:n.LESS,[Dy]:n.LEQUAL,[Iw]:n.EQUAL,[Ow]:n.GEQUAL,[Nw]:n.GREATER,[Uw]:n.NOTEQUAL};function ze(A,M){if(M.type===Zr&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Rr||M.magFilter===Mh||M.magFilter===Vc||M.magFilter===xo||M.minFilter===Rr||M.minFilter===Mh||M.minFilter===Vc||M.minFilter===xo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,me[M.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,me[M.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,me[M.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,O[M.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,O[M.minFilter]),M.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ye[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===fr||M.minFilter!==Vc&&M.minFilter!==xo||M.type===Zr&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function st(A,M){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",R));const V=M.source;let q=h.get(V);q===void 0&&(q={},h.set(V,q));const Z=F(M);if(Z!==A.__cacheKey){q[Z]===void 0&&(q[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),q[Z].usedTimes++;const fe=q[A.__cacheKey];fe!==void 0&&(q[A.__cacheKey].usedTimes--,fe.usedTimes===0&&y(M)),A.__cacheKey=Z,A.__webglTexture=q[Z].texture}return z}function se(A,M,z){let V=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(V=n.TEXTURE_3D);const q=st(A,M),Z=M.source;t.bindTexture(V,A.__webglTexture,n.TEXTURE0+z);const fe=i.get(Z);if(Z.version!==fe.__version||q===!0){t.activeTexture(n.TEXTURE0+z);const _e=Pt.getPrimaries(Pt.workingColorSpace),ve=M.colorSpace===Ms?null:Pt.getPrimaries(M.colorSpace),He=M.colorSpace===Ms||_e===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let he=g(M.image,!1,r.maxTextureSize);he=ge(M,he);const Me=s.convert(M.format,M.colorSpace),We=s.convert(M.type);let je=b(M.internalFormat,Me,We,M.colorSpace,M.isVideoTexture);ze(V,M);let Ie;const Qe=M.mipmaps,Ke=M.isVideoTexture!==!0,_t=fe.__version===void 0||q===!0,k=Z.dataReady,Ce=w(M,he);if(M.isDepthTexture)je=v(M.format===uc,M.type),_t&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,je,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,je,he.width,he.height,0,Me,We,null));else if(M.isDataTexture)if(Qe.length>0){Ke&&_t&&t.texStorage2D(n.TEXTURE_2D,Ce,je,Qe[0].width,Qe[0].height);for(let re=0,le=Qe.length;re<le;re++)Ie=Qe[re],Ke?k&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Ie.width,Ie.height,Me,We,Ie.data):t.texImage2D(n.TEXTURE_2D,re,je,Ie.width,Ie.height,0,Me,We,Ie.data);M.generateMipmaps=!1}else Ke?(_t&&t.texStorage2D(n.TEXTURE_2D,Ce,je,he.width,he.height),k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he.width,he.height,Me,We,he.data)):t.texImage2D(n.TEXTURE_2D,0,je,he.width,he.height,0,Me,We,he.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ke&&_t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,je,Qe[0].width,Qe[0].height,he.depth);for(let re=0,le=Qe.length;re<le;re++)if(Ie=Qe[re],M.format!==lr)if(Me!==null)if(Ke){if(k)if(M.layerUpdates.size>0){const Ae=$g(Ie.width,Ie.height,M.format,M.type);for(const J of M.layerUpdates){const oe=Ie.data.subarray(J*Ae/Ie.data.BYTES_PER_ELEMENT,(J+1)*Ae/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,J,Ie.width,Ie.height,1,Me,oe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Ie.width,Ie.height,he.depth,Me,Ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,je,Ie.width,Ie.height,he.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Ie.width,Ie.height,he.depth,Me,We,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,je,Ie.width,Ie.height,he.depth,0,Me,We,Ie.data)}else{Ke&&_t&&t.texStorage2D(n.TEXTURE_2D,Ce,je,Qe[0].width,Qe[0].height);for(let re=0,le=Qe.length;re<le;re++)Ie=Qe[re],M.format!==lr?Me!==null?Ke?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,Ie.width,Ie.height,Me,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,re,je,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?k&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Ie.width,Ie.height,Me,We,Ie.data):t.texImage2D(n.TEXTURE_2D,re,je,Ie.width,Ie.height,0,Me,We,Ie.data)}else if(M.isDataArrayTexture)if(Ke){if(_t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,je,he.width,he.height,he.depth),k)if(M.layerUpdates.size>0){const re=$g(he.width,he.height,M.format,M.type);for(const le of M.layerUpdates){const Ae=he.data.subarray(le*re/he.data.BYTES_PER_ELEMENT,(le+1)*re/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,he.width,he.height,1,Me,We,Ae)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Me,We,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,je,he.width,he.height,he.depth,0,Me,We,he.data);else if(M.isData3DTexture)Ke?(_t&&t.texStorage3D(n.TEXTURE_3D,Ce,je,he.width,he.height,he.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Me,We,he.data)):t.texImage3D(n.TEXTURE_3D,0,je,he.width,he.height,he.depth,0,Me,We,he.data);else if(M.isFramebufferTexture){if(_t)if(Ke)t.texStorage2D(n.TEXTURE_2D,Ce,je,he.width,he.height);else{let re=he.width,le=he.height;for(let Ae=0;Ae<Ce;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,je,re,le,0,Me,We,null),re>>=1,le>>=1}}else if(Qe.length>0){if(Ke&&_t){const re=ie(Qe[0]);t.texStorage2D(n.TEXTURE_2D,Ce,je,re.width,re.height)}for(let re=0,le=Qe.length;re<le;re++)Ie=Qe[re],Ke?k&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Me,We,Ie):t.texImage2D(n.TEXTURE_2D,re,je,Me,We,Ie);M.generateMipmaps=!1}else if(Ke){if(_t){const re=ie(he);t.texStorage2D(n.TEXTURE_2D,Ce,je,re.width,re.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,We,he)}else t.texImage2D(n.TEXTURE_2D,0,je,Me,We,he);m(M)&&p(V),fe.__version=Z.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function xe(A,M,z){if(M.image.length!==6)return;const V=st(A,M),q=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);const Z=i.get(q);if(q.version!==Z.__version||V===!0){t.activeTexture(n.TEXTURE0+z);const fe=Pt.getPrimaries(Pt.workingColorSpace),_e=M.colorSpace===Ms?null:Pt.getPrimaries(M.colorSpace),ve=M.colorSpace===Ms||fe===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const He=M.isCompressedTexture||M.image[0].isCompressedTexture,he=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let le=0;le<6;le++)!He&&!he?Me[le]=g(M.image[le],!0,r.maxCubemapSize):Me[le]=he?M.image[le].image:M.image[le],Me[le]=ge(M,Me[le]);const We=Me[0],je=s.convert(M.format,M.colorSpace),Ie=s.convert(M.type),Qe=b(M.internalFormat,je,Ie,M.colorSpace),Ke=M.isVideoTexture!==!0,_t=Z.__version===void 0||V===!0,k=q.dataReady;let Ce=w(M,We);ze(n.TEXTURE_CUBE_MAP,M);let re;if(He){Ke&&_t&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Qe,We.width,We.height);for(let le=0;le<6;le++){re=Me[le].mipmaps;for(let Ae=0;Ae<re.length;Ae++){const J=re[Ae];M.format!==lr?je!==null?Ke?k&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,0,0,J.width,J.height,je,J.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,Qe,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,0,0,J.width,J.height,je,Ie,J.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,Qe,J.width,J.height,0,je,Ie,J.data)}}}else{if(re=M.mipmaps,Ke&&_t){re.length>0&&Ce++;const le=ie(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Qe,le.width,le.height)}for(let le=0;le<6;le++)if(he){Ke?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Me[le].width,Me[le].height,je,Ie,Me[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Qe,Me[le].width,Me[le].height,0,je,Ie,Me[le].data);for(let Ae=0;Ae<re.length;Ae++){const oe=re[Ae].image[le].image;Ke?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,0,0,oe.width,oe.height,je,Ie,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,Qe,oe.width,oe.height,0,je,Ie,oe.data)}}else{Ke?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,je,Ie,Me[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Qe,je,Ie,Me[le]);for(let Ae=0;Ae<re.length;Ae++){const J=re[Ae];Ke?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,0,0,je,Ie,J.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,Qe,je,Ie,J.image[le])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),Z.__version=q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function we(A,M,z,V,q,Z){const fe=s.convert(z.format,z.colorSpace),_e=s.convert(z.type),ve=b(z.internalFormat,fe,_e,z.colorSpace),He=i.get(M),he=i.get(z);if(he.__renderTarget=M,!He.__hasExternalTextures){const Me=Math.max(1,M.width>>Z),We=Math.max(1,M.height>>Z);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,Z,ve,Me,We,M.depth,0,fe,_e,null):t.texImage2D(q,Z,ve,Me,We,0,fe,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),U(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,q,he.__webglTexture,0,te(M)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,q,he.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(A,M,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),M.depthBuffer){const V=M.depthTexture,q=V&&V.isDepthTexture?V.type:null,Z=v(M.stencilBuffer,q),fe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=te(M);U(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,Z,M.width,M.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,Z,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Z,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,A)}else{const V=M.textures;for(let q=0;q<V.length;q++){const Z=V[q],fe=s.convert(Z.format,Z.colorSpace),_e=s.convert(Z.type),ve=b(Z.internalFormat,fe,_e,Z.colorSpace),He=te(M);z&&U(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,He,ve,M.width,M.height):U(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,He,ve,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ve,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ke(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(M.depthTexture);V.__renderTarget=M,(!V.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const q=V.__webglTexture,Z=te(M);if(M.depthTexture.format===cc)U(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(M.depthTexture.format===uc)U(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function et(A){const M=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const V=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),V){const q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,V.removeEventListener("dispose",q)};V.addEventListener("dispose",q),M.__depthDisposeCallback=q}M.__boundDepthTexture=V}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ke(M.__webglFramebuffer,A)}else if(z){M.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[V]),M.__webglDepthbuffer[V]===void 0)M.__webglDepthbuffer[V]=n.createRenderbuffer(),Se(M.__webglDepthbuffer[V],A,!1);else{const q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Se(M.__webglDepthbuffer,A,!1);else{const V=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function qe(A,M,z){const V=i.get(A);M!==void 0&&we(V.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&et(A)}function ft(A){const M=A.texture,z=i.get(A),V=i.get(M);A.addEventListener("dispose",T);const q=A.textures,Z=A.isWebGLCubeRenderTarget===!0,fe=q.length>1;if(fe||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=M.version,o.memory.textures++),Z){z.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[_e]=[];for(let ve=0;ve<M.mipmaps.length;ve++)z.__webglFramebuffer[_e][ve]=n.createFramebuffer()}else z.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let _e=0;_e<M.mipmaps.length;_e++)z.__webglFramebuffer[_e]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(fe)for(let _e=0,ve=q.length;_e<ve;_e++){const He=i.get(q[_e]);He.__webglTexture===void 0&&(He.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&U(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let _e=0;_e<q.length;_e++){const ve=q[_e];z.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[_e]);const He=s.convert(ve.format,ve.colorSpace),he=s.convert(ve.type),Me=b(ve.internalFormat,He,he,ve.colorSpace,A.isXRRenderTarget===!0),We=te(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,We,Me,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,z.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),ze(n.TEXTURE_CUBE_MAP,M);for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)we(z.__webglFramebuffer[_e][ve],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ve);else we(z.__webglFramebuffer[_e],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let _e=0,ve=q.length;_e<ve;_e++){const He=q[_e],he=i.get(He);t.bindTexture(n.TEXTURE_2D,he.__webglTexture),ze(n.TEXTURE_2D,He),we(z.__webglFramebuffer,A,He,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,0),m(He)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(_e=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,V.__webglTexture),ze(_e,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)we(z.__webglFramebuffer[ve],A,M,n.COLOR_ATTACHMENT0,_e,ve);else we(z.__webglFramebuffer,A,M,n.COLOR_ATTACHMENT0,_e,0);m(M)&&p(_e),t.unbindTexture()}A.depthBuffer&&et(A)}function ot(A){const M=A.textures;for(let z=0,V=M.length;z<V;z++){const q=M[z];if(m(q)){const Z=S(A),fe=i.get(q).__webglTexture;t.bindTexture(Z,fe),p(Z),t.unbindTexture()}}}const I=[],E=[];function ee(A){if(A.samples>0){if(U(A)===!1){const M=A.textures,z=A.width,V=A.height;let q=n.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(A),_e=M.length>1;if(_e)for(let ve=0;ve<M.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[ve]);const He=i.get(M[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,He,0)}n.blitFramebuffer(0,0,z,V,0,0,z,V,q,n.NEAREST),l===!0&&(I.length=0,E.length=0,I.push(n.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.resolveDepthBuffer===!1&&(I.push(Z),E.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,E)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let ve=0;ve<M.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,fe.__webglColorRenderbuffer[ve]);const He=i.get(M[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function te(A){return Math.min(r.maxSamples,A.samples)}function U(A){const M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function K(A){const M=o.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function ge(A,M){const z=A.colorSpace,V=A.format,q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Ba&&z!==Ms&&(Pt.getTransfer(z)===Bt?(V!==lr||q!==ls)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function ie(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=L,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=qe,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=we,this.useMultisampledRTT=U}function QP(n,e){function t(i,r=Ms){let s;const o=Pt.getTransfer(r);if(i===ls)return n.UNSIGNED_BYTE;if(i===wm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Am)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sy)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yy)return n.BYTE;if(i===by)return n.SHORT;if(i===ac)return n.UNSIGNED_SHORT;if(i===Tm)return n.INT;if(i===No)return n.UNSIGNED_INT;if(i===Zr)return n.FLOAT;if(i===_c)return n.HALF_FLOAT;if(i===My)return n.ALPHA;if(i===Ey)return n.RGB;if(i===lr)return n.RGBA;if(i===Ty)return n.LUMINANCE;if(i===wy)return n.LUMINANCE_ALPHA;if(i===cc)return n.DEPTH_COMPONENT;if(i===uc)return n.DEPTH_STENCIL;if(i===Ay)return n.RED;if(i===Cm)return n.RED_INTEGER;if(i===Cy)return n.RG;if(i===Rm)return n.RG_INTEGER;if(i===Pm)return n.RGBA_INTEGER;if(i===Cu||i===Ru||i===Pu||i===Du)if(o===Bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Cu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ru)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Du)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Cu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ru)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Du)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ep||i===tp||i===np||i===ip)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ep)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===np)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ip)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rp||i===sp||i===op)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===rp||i===sp)return o===Bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===op)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ap||i===lp||i===cp||i===up||i===fp||i===hp||i===dp||i===pp||i===mp||i===_p||i===gp||i===vp||i===xp||i===yp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ap)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lp)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cp)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===up)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fp)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hp)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dp)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pp)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mp)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_p)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gp)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vp)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xp)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yp)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lu||i===bp||i===Sp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Lu)return o===Bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ry||i===Mp||i===Ep||i===Tp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Lu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Mp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ep)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lc?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const eD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new gi,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ws({vertexShader:eD,fragmentShader:tD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new Gf(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iD extends Ga{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const g=new nD,m=t.getContextAttributes();let p=null,S=null;const b=[],v=[],w=new Tt;let R=null;const T=new wi;T.viewport=new zt;const P=new wi;P.viewport=new zt;const y=[T,P],x=new EA;let N=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let xe=b[se];return xe===void 0&&(xe=new Xh,b[se]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(se){let xe=b[se];return xe===void 0&&(xe=new Xh,b[se]=xe),xe.getGripSpace()},this.getHand=function(se){let xe=b[se];return xe===void 0&&(xe=new Xh,b[se]=xe),xe.getHandSpace()};function B(se){const xe=v.indexOf(se.inputSource);if(xe===-1)return;const we=b[xe];we!==void 0&&(we.update(se.inputSource,se.frame,c||o),we.dispatchEvent({type:se.type,data:se.inputSource}))}function F(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",j);for(let se=0;se<b.length;se++){const xe=v[se];xe!==null&&(v[se]=null,b[se].disconnect(xe))}N=null,L=null,g.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,S=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",F),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(w),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Se=null,ke=null;m.depth&&(ke=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=m.stencil?uc:cc,Se=m.stencil?lc:No);const et={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(et),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Uo(h.textureWidth,h.textureHeight,{format:lr,type:ls,depthTexture:new Hy(h.textureWidth,h.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const we={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,we),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Uo(d.framebufferWidth,d.framebufferHeight,{format:lr,type:ls,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),st.setContext(r),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(se){for(let xe=0;xe<se.removed.length;xe++){const we=se.removed[xe],Se=v.indexOf(we);Se>=0&&(v[Se]=null,b[Se].disconnect(we))}for(let xe=0;xe<se.added.length;xe++){const we=se.added[xe];let Se=v.indexOf(we);if(Se===-1){for(let et=0;et<b.length;et++)if(et>=v.length){v.push(we),Se=et;break}else if(v[et]===null){v[et]=we,Se=et;break}if(Se===-1)break}const ke=b[Se];ke&&ke.connect(we)}}const X=new H,$=new H;function W(se,xe,we){X.setFromMatrixPosition(xe.matrixWorld),$.setFromMatrixPosition(we.matrixWorld);const Se=X.distanceTo($),ke=xe.projectionMatrix.elements,et=we.projectionMatrix.elements,qe=ke[14]/(ke[10]-1),ft=ke[14]/(ke[10]+1),ot=(ke[9]+1)/ke[5],I=(ke[9]-1)/ke[5],E=(ke[8]-1)/ke[0],ee=(et[8]+1)/et[0],te=qe*E,U=qe*ee,K=Se/(-E+ee),ge=K*-E;if(xe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(ge),se.translateZ(K),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),ke[10]===-1)se.projectionMatrix.copy(xe.projectionMatrix),se.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const ie=qe+K,A=ft+K,M=te-ge,z=U+(Se-ge),V=ot*ft/A*ie,q=I*ft/A*ie;se.projectionMatrix.makePerspective(M,z,V,q,ie,A),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function me(se,xe){xe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(xe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let xe=se.near,we=se.far;g.texture!==null&&(g.depthNear>0&&(xe=g.depthNear),g.depthFar>0&&(we=g.depthFar)),x.near=P.near=T.near=xe,x.far=P.far=T.far=we,(N!==x.near||L!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),N=x.near,L=x.far),T.layers.mask=se.layers.mask|2,P.layers.mask=se.layers.mask|4,x.layers.mask=T.layers.mask|P.layers.mask;const Se=se.parent,ke=x.cameras;me(x,Se);for(let et=0;et<ke.length;et++)me(ke[et],Se);ke.length===2?W(x,T,P):x.projectionMatrix.copy(T.projectionMatrix),O(se,x,Se)};function O(se,xe,we){we===null?se.matrix.copy(xe.matrixWorld):(se.matrix.copy(we.matrixWorld),se.matrix.invert(),se.matrix.multiply(xe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(xe.projectionMatrix),se.projectionMatrixInverse.copy(xe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=wp*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(se){l=se,h!==null&&(h.fixedFoveation=se),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=se)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let ye=null;function ze(se,xe){if(u=xe.getViewerPose(c||o),_=xe,u!==null){const we=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let Se=!1;we.length!==x.cameras.length&&(x.cameras.length=0,Se=!0);for(let qe=0;qe<we.length;qe++){const ft=we[qe];let ot=null;if(d!==null)ot=d.getViewport(ft);else{const E=f.getViewSubImage(h,ft);ot=E.viewport,qe===0&&(e.setRenderTargetTextures(S,E.colorTexture,E.depthStencilTexture),e.setRenderTarget(S))}let I=y[qe];I===void 0&&(I=new wi,I.layers.enable(qe),I.viewport=new zt,y[qe]=I),I.matrix.fromArray(ft.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(ft.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(ot.x,ot.y,ot.width,ot.height),qe===0&&(x.matrix.copy(I.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Se===!0&&x.cameras.push(I)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const qe=f.getDepthInformation(we[0]);qe&&qe.isValid&&qe.texture&&g.init(e,qe,r.renderState)}}for(let we=0;we<b.length;we++){const Se=v[we],ke=b[we];Se!==null&&ke!==void 0&&ke.update(Se,xe,c||o)}ye&&ye(se,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),_=null}const st=new Gy;st.setAnimationLoop(ze),this.setAnimationLoop=function(se){ye=se},this.dispose=function(){}}}const ro=new Ir,rD=new Xt;function sD(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ky(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===_i&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===_i&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),b=S.envMap,v=S.envMapRotation;b&&(m.envMap.value=b,ro.copy(v),ro.x*=-1,ro.y*=-1,ro.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ro.y*=-1,ro.z*=-1),m.envMapRotation.value.setFromMatrix4(rD.makeRotationFromEuler(ro)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_i&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function oD(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const v=b.program;i.uniformBlockBinding(S,v)}function c(S,b){let v=r[S.id];v===void 0&&(_(S),v=u(S),r[S.id]=v,S.addEventListener("dispose",m));const w=b.program;i.updateUBOMapping(S,w);const R=e.render.frame;s[S.id]!==R&&(h(S),s[S.id]=R)}function u(S){const b=f();S.__bindingPointIndex=b;const v=n.createBuffer(),w=S.__size,R=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,w,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,v),v}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const b=r[S.id],v=S.uniforms,w=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,T=v.length;R<T;R++){const P=Array.isArray(v[R])?v[R]:[v[R]];for(let y=0,x=P.length;y<x;y++){const N=P[y];if(d(N,R,y,w)===!0){const L=N.__offset,B=Array.isArray(N.value)?N.value:[N.value];let F=0;for(let j=0;j<B.length;j++){const X=B[j],$=g(X);typeof X=="number"||typeof X=="boolean"?(N.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,L+F,N.__data)):X.isMatrix3?(N.__data[0]=X.elements[0],N.__data[1]=X.elements[1],N.__data[2]=X.elements[2],N.__data[3]=0,N.__data[4]=X.elements[3],N.__data[5]=X.elements[4],N.__data[6]=X.elements[5],N.__data[7]=0,N.__data[8]=X.elements[6],N.__data[9]=X.elements[7],N.__data[10]=X.elements[8],N.__data[11]=0):(X.toArray(N.__data,F),F+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,b,v,w){const R=S.value,T=b+"_"+v;if(w[T]===void 0)return typeof R=="number"||typeof R=="boolean"?w[T]=R:w[T]=R.clone(),!0;{const P=w[T];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return w[T]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function _(S){const b=S.uniforms;let v=0;const w=16;for(let T=0,P=b.length;T<P;T++){const y=Array.isArray(b[T])?b[T]:[b[T]];for(let x=0,N=y.length;x<N;x++){const L=y[x],B=Array.isArray(L.value)?L.value:[L.value];for(let F=0,j=B.length;F<j;F++){const X=B[F],$=g(X),W=v%w,me=W%$.boundary,O=W+me;v+=me,O!==0&&w-O<$.storage&&(v+=w-O),L.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=$.storage}}}const R=v%w;return R>0&&(v+=w-R),S.__size=v,S.__cache={},this}function g(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){const b=S.target;b.removeEventListener("dispose",m);const v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class aD{constructor(e={}){const{canvas:t=Bw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const S=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ns,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1;this._outputColorSpace=$i;let R=0,T=0,P=null,y=-1,x=null;const N=new zt,L=new zt;let B=null;const F=new mt(0);let j=0,X=t.width,$=t.height,W=1,me=null,O=null;const ye=new zt(0,0,X,$),ze=new zt(0,0,X,$);let st=!1;const se=new Nm;let xe=!1,we=!1;const Se=new Xt,ke=new Xt,et=new H,qe=new zt,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function I(){return P===null?W:1}let E=i;function ee(D,Y){return t.getContext(D,Y)}try{const D={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Em}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",J,!1),E===null){const Y="webgl2";if(E=ee(Y,D),E===null)throw ee(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let te,U,K,ge,ie,A,M,z,V,q,Z,fe,_e,ve,He,he,Me,We,je,Ie,Qe,Ke,_t,k;function Ce(){te=new gR(E),te.init(),Ke=new QP(E,te),U=new uR(E,te,e,Ke),K=new ZP(E,te),U.reverseDepthBuffer&&h&&K.buffers.depth.setReversed(!0),ge=new yR(E),ie=new kP,A=new JP(E,te,K,ie,U,Ke,ge),M=new hR(v),z=new _R(v),V=new wA(E),_t=new lR(E,V),q=new vR(E,V,ge,_t),Z=new SR(E,q,V,ge),je=new bR(E,U,A),he=new fR(ie),fe=new FP(v,M,z,te,U,_t,he),_e=new sD(v,ie),ve=new zP,He=new $P(te),We=new aR(v,M,z,K,Z,d,l),Me=new jP(v,Z,U),k=new oD(E,ge,U,K),Ie=new cR(E,te,ge),Qe=new xR(E,te,ge),ge.programs=fe.programs,v.capabilities=U,v.extensions=te,v.properties=ie,v.renderLists=ve,v.shadowMap=Me,v.state=K,v.info=ge}Ce();const re=new iD(v,E);this.xr=re,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const D=te.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=te.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(D){D!==void 0&&(W=D,this.setSize(X,$,!1))},this.getSize=function(D){return D.set(X,$)},this.setSize=function(D,Y,ne=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=D,$=Y,t.width=Math.floor(D*W),t.height=Math.floor(Y*W),ne===!0&&(t.style.width=D+"px",t.style.height=Y+"px"),this.setViewport(0,0,D,Y)},this.getDrawingBufferSize=function(D){return D.set(X*W,$*W).floor()},this.setDrawingBufferSize=function(D,Y,ne){X=D,$=Y,W=ne,t.width=Math.floor(D*ne),t.height=Math.floor(Y*ne),this.setViewport(0,0,D,Y)},this.getCurrentViewport=function(D){return D.copy(N)},this.getViewport=function(D){return D.copy(ye)},this.setViewport=function(D,Y,ne,Q){D.isVector4?ye.set(D.x,D.y,D.z,D.w):ye.set(D,Y,ne,Q),K.viewport(N.copy(ye).multiplyScalar(W).round())},this.getScissor=function(D){return D.copy(ze)},this.setScissor=function(D,Y,ne,Q){D.isVector4?ze.set(D.x,D.y,D.z,D.w):ze.set(D,Y,ne,Q),K.scissor(L.copy(ze).multiplyScalar(W).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(D){K.setScissorTest(st=D)},this.setOpaqueSort=function(D){me=D},this.setTransparentSort=function(D){O=D},this.getClearColor=function(D){return D.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(D=!0,Y=!0,ne=!0){let Q=0;if(D){let G=!1;if(P!==null){const ue=P.texture.format;G=ue===Pm||ue===Rm||ue===Cm}if(G){const ue=P.texture.type,Te=ue===ls||ue===No||ue===ac||ue===lc||ue===wm||ue===Am,Ne=We.getClearColor(),Le=We.getClearAlpha(),Ve=Ne.r,Xe=Ne.g,Ge=Ne.b;Te?(_[0]=Ve,_[1]=Xe,_[2]=Ge,_[3]=Le,E.clearBufferuiv(E.COLOR,0,_)):(g[0]=Ve,g[1]=Xe,g[2]=Ge,g[3]=Le,E.clearBufferiv(E.COLOR,0,g))}else Q|=E.COLOR_BUFFER_BIT}Y&&(Q|=E.DEPTH_BUFFER_BIT),ne&&(Q|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",J,!1),We.dispose(),ve.dispose(),He.dispose(),ie.dispose(),M.dispose(),z.dispose(),Z.dispose(),_t.dispose(),k.dispose(),fe.dispose(),re.dispose(),re.removeEventListener("sessionstart",pe),re.removeEventListener("sessionend",Be),Re.stop()};function le(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const D=ge.autoReset,Y=Me.enabled,ne=Me.autoUpdate,Q=Me.needsUpdate,G=Me.type;Ce(),ge.autoReset=D,Me.enabled=Y,Me.autoUpdate=ne,Me.needsUpdate=Q,Me.type=G}function J(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function oe(D){const Y=D.target;Y.removeEventListener("dispose",oe),de(Y)}function de(D){be(D),ie.remove(D)}function be(D){const Y=ie.get(D).programs;Y!==void 0&&(Y.forEach(function(ne){fe.releaseProgram(ne)}),D.isShaderMaterial&&fe.releaseShaderCache(D))}this.renderBufferDirect=function(D,Y,ne,Q,G,ue){Y===null&&(Y=ft);const Te=G.isMesh&&G.matrixWorld.determinant()<0,Ne=Gn(D,Y,ne,Q,G);K.setMaterial(Q,Te);let Le=ne.index,Ve=1;if(Q.wireframe===!0){if(Le=q.getWireframeAttribute(ne),Le===void 0)return;Ve=2}const Xe=ne.drawRange,Ge=ne.attributes.position;let at=Xe.start*Ve,bt=(Xe.start+Xe.count)*Ve;ue!==null&&(at=Math.max(at,ue.start*Ve),bt=Math.min(bt,(ue.start+ue.count)*Ve)),Le!==null?(at=Math.max(at,0),bt=Math.min(bt,Le.count)):Ge!=null&&(at=Math.max(at,0),bt=Math.min(bt,Ge.count));const tn=bt-at;if(tn<0||tn===1/0)return;_t.setup(G,Q,Ne,ne,Le);let $t,St=Ie;if(Le!==null&&($t=V.get(Le),St=Qe,St.setIndex($t)),G.isMesh)Q.wireframe===!0?(K.setLineWidth(Q.wireframeLinewidth*I()),St.setMode(E.LINES)):St.setMode(E.TRIANGLES);else if(G.isLine){let nt=Q.linewidth;nt===void 0&&(nt=1),K.setLineWidth(nt*I()),G.isLineSegments?St.setMode(E.LINES):G.isLineLoop?St.setMode(E.LINE_LOOP):St.setMode(E.LINE_STRIP)}else G.isPoints?St.setMode(E.POINTS):G.isSprite&&St.setMode(E.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Iu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))St.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const nt=G._multiDrawStarts,_n=G._multiDrawCounts,At=G._multiDrawCount,oi=Le?V.get(Le).bytesPerElement:1,mr=ie.get(Q).currentProgram.getUniforms();for(let Ln=0;Ln<At;Ln++)mr.setValue(E,"_gl_DrawID",Ln),St.render(nt[Ln]/oi,_n[Ln])}else if(G.isInstancedMesh)St.renderInstances(at,tn,G.count);else if(ne.isInstancedBufferGeometry){const nt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,_n=Math.min(ne.instanceCount,nt);St.renderInstances(at,tn,_n)}else St.render(at,tn)};function ae(D,Y,ne){D.transparent===!0&&D.side===ji&&D.forceSinglePass===!1?(D.side=_i,D.needsUpdate=!0,Lt(D,Y,ne),D.side=Gs,D.needsUpdate=!0,Lt(D,Y,ne),D.side=ji):Lt(D,Y,ne)}this.compile=function(D,Y,ne=null){ne===null&&(ne=D),p=He.get(ne),p.init(Y),b.push(p),ne.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),D!==ne&&D.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const Q=new Set;return D.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ue=G.material;if(ue)if(Array.isArray(ue))for(let Te=0;Te<ue.length;Te++){const Ne=ue[Te];ae(Ne,ne,G),Q.add(Ne)}else ae(ue,ne,G),Q.add(ue)}),p=b.pop(),Q},this.compileAsync=function(D,Y,ne=null){const Q=this.compile(D,Y,ne);return new Promise(G=>{function ue(){if(Q.forEach(function(Te){ie.get(Te).currentProgram.isReady()&&Q.delete(Te)}),Q.size===0){G(D);return}setTimeout(ue,10)}te.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ee=null;function De(D){Ee&&Ee(D)}function pe(){Re.stop()}function Be(){Re.start()}const Re=new Gy;Re.setAnimationLoop(De),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(D){Ee=D,re.setAnimationLoop(D),D===null?Re.stop():Re.start()},re.addEventListener("sessionstart",pe),re.addEventListener("sessionend",Be),this.render=function(D,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(Y),Y=re.getCamera()),D.isScene===!0&&D.onBeforeRender(v,D,Y,P),p=He.get(D,b.length),p.init(Y),b.push(p),ke.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),se.setFromProjectionMatrix(ke),we=this.localClippingEnabled,xe=he.init(this.clippingPlanes,we),m=ve.get(D,S.length),m.init(),S.push(m),re.enabled===!0&&re.isPresenting===!0){const ue=v.xr.getDepthSensingMesh();ue!==null&&Oe(ue,Y,-1/0,v.sortObjects)}Oe(D,Y,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(me,O),ot=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,ot&&We.addToRenderList(m,D),this.info.render.frame++,xe===!0&&he.beginShadows();const ne=p.state.shadowsArray;Me.render(ne,D,Y),xe===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,G=m.transmissive;if(p.setupLights(),Y.isArrayCamera){const ue=Y.cameras;if(G.length>0)for(let Te=0,Ne=ue.length;Te<Ne;Te++){const Le=ue[Te];tt(Q,G,D,Le)}ot&&We.render(D);for(let Te=0,Ne=ue.length;Te<Ne;Te++){const Le=ue[Te];lt(m,D,Le,Le.viewport)}}else G.length>0&&tt(Q,G,D,Y),ot&&We.render(D),lt(m,D,Y);P!==null&&T===0&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),D.isScene===!0&&D.onAfterRender(v,D,Y),_t.resetDefaultState(),y=-1,x=null,b.pop(),b.length>0?(p=b[b.length-1],xe===!0&&he.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Oe(D,Y,ne,Q){if(D.visible===!1)return;if(D.layers.test(Y.layers)){if(D.isGroup)ne=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Y);else if(D.isLight)p.pushLight(D),D.castShadow&&p.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||se.intersectsSprite(D)){Q&&qe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ke);const Te=Z.update(D),Ne=D.material;Ne.visible&&m.push(D,Te,Ne,ne,qe.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||se.intersectsObject(D))){const Te=Z.update(D),Ne=D.material;if(Q&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),qe.copy(D.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),qe.copy(Te.boundingSphere.center)),qe.applyMatrix4(D.matrixWorld).applyMatrix4(ke)),Array.isArray(Ne)){const Le=Te.groups;for(let Ve=0,Xe=Le.length;Ve<Xe;Ve++){const Ge=Le[Ve],at=Ne[Ge.materialIndex];at&&at.visible&&m.push(D,Te,at,ne,qe.z,Ge)}}else Ne.visible&&m.push(D,Te,Ne,ne,qe.z,null)}}const ue=D.children;for(let Te=0,Ne=ue.length;Te<Ne;Te++)Oe(ue[Te],Y,ne,Q)}function lt(D,Y,ne,Q){const G=D.opaque,ue=D.transmissive,Te=D.transparent;p.setupLightsView(ne),xe===!0&&he.setGlobalState(v.clippingPlanes,ne),Q&&K.viewport(N.copy(Q)),G.length>0&&ut(G,Y,ne),ue.length>0&&ut(ue,Y,ne),Te.length>0&&ut(Te,Y,ne),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function tt(D,Y,ne,Q){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new Uo(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?_c:ls,minFilter:xo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const ue=p.state.transmissionRenderTarget[Q.id],Te=Q.viewport||N;ue.setSize(Te.z*v.transmissionResolutionScale,Te.w*v.transmissionResolutionScale);const Ne=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(F),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),ot&&We.render(ne);const Le=v.toneMapping;v.toneMapping=Ns;const Ve=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),xe===!0&&he.setGlobalState(v.clippingPlanes,Q),ut(D,ne,Q),A.updateMultisampleRenderTarget(ue),A.updateRenderTargetMipmap(ue),te.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Ge=0,at=Y.length;Ge<at;Ge++){const bt=Y[Ge],tn=bt.object,$t=bt.geometry,St=bt.material,nt=bt.group;if(St.side===ji&&tn.layers.test(Q.layers)){const _n=St.side;St.side=_i,St.needsUpdate=!0,Ot(tn,ne,Q,$t,St,nt),St.side=_n,St.needsUpdate=!0,Xe=!0}}Xe===!0&&(A.updateMultisampleRenderTarget(ue),A.updateRenderTargetMipmap(ue))}v.setRenderTarget(Ne),v.setClearColor(F,j),Ve!==void 0&&(Q.viewport=Ve),v.toneMapping=Le}function ut(D,Y,ne){const Q=Y.isScene===!0?Y.overrideMaterial:null;for(let G=0,ue=D.length;G<ue;G++){const Te=D[G],Ne=Te.object,Le=Te.geometry,Ve=Te.group;let Xe=Te.material;Xe.allowOverride===!0&&Q!==null&&(Xe=Q),Ne.layers.test(ne.layers)&&Ot(Ne,Y,ne,Le,Xe,Ve)}}function Ot(D,Y,ne,Q,G,ue){D.onBeforeRender(v,Y,ne,Q,G,ue),D.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),G.onBeforeRender(v,Y,ne,Q,D,ue),G.transparent===!0&&G.side===ji&&G.forceSinglePass===!1?(G.side=_i,G.needsUpdate=!0,v.renderBufferDirect(ne,Y,Q,G,D,ue),G.side=Gs,G.needsUpdate=!0,v.renderBufferDirect(ne,Y,Q,G,D,ue),G.side=ji):v.renderBufferDirect(ne,Y,Q,G,D,ue),D.onAfterRender(v,Y,ne,Q,G,ue)}function Lt(D,Y,ne){Y.isScene!==!0&&(Y=ft);const Q=ie.get(D),G=p.state.lights,ue=p.state.shadowsArray,Te=G.state.version,Ne=fe.getParameters(D,G.state,ue,Y,ne),Le=fe.getProgramCacheKey(Ne);let Ve=Q.programs;Q.environment=D.isMeshStandardMaterial?Y.environment:null,Q.fog=Y.fog,Q.envMap=(D.isMeshStandardMaterial?z:M).get(D.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&D.envMap===null?Y.environmentRotation:D.envMapRotation,Ve===void 0&&(D.addEventListener("dispose",oe),Ve=new Map,Q.programs=Ve);let Xe=Ve.get(Le);if(Xe!==void 0){if(Q.currentProgram===Xe&&Q.lightsStateVersion===Te)return wt(D,Ne),Xe}else Ne.uniforms=fe.getUniforms(D),D.onBeforeCompile(Ne,v),Xe=fe.acquireProgram(Ne,Le),Ve.set(Le,Xe),Q.uniforms=Ne.uniforms;const Ge=Q.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ge.clippingPlanes=he.uniform),wt(D,Ne),Q.needsLights=Rn(D),Q.lightsStateVersion=Te,Q.needsLights&&(Ge.ambientLightColor.value=G.state.ambient,Ge.lightProbe.value=G.state.probe,Ge.directionalLights.value=G.state.directional,Ge.directionalLightShadows.value=G.state.directionalShadow,Ge.spotLights.value=G.state.spot,Ge.spotLightShadows.value=G.state.spotShadow,Ge.rectAreaLights.value=G.state.rectArea,Ge.ltc_1.value=G.state.rectAreaLTC1,Ge.ltc_2.value=G.state.rectAreaLTC2,Ge.pointLights.value=G.state.point,Ge.pointLightShadows.value=G.state.pointShadow,Ge.hemisphereLights.value=G.state.hemi,Ge.directionalShadowMap.value=G.state.directionalShadowMap,Ge.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ge.spotShadowMap.value=G.state.spotShadowMap,Ge.spotLightMatrix.value=G.state.spotLightMatrix,Ge.spotLightMap.value=G.state.spotLightMap,Ge.pointShadowMap.value=G.state.pointShadowMap,Ge.pointShadowMatrix.value=G.state.pointShadowMatrix),Q.currentProgram=Xe,Q.uniformsList=null,Xe}function It(D){if(D.uniformsList===null){const Y=D.currentProgram.getUniforms();D.uniformsList=Uu.seqWithValue(Y.seq,D.uniforms)}return D.uniformsList}function wt(D,Y){const ne=ie.get(D);ne.outputColorSpace=Y.outputColorSpace,ne.batching=Y.batching,ne.batchingColor=Y.batchingColor,ne.instancing=Y.instancing,ne.instancingColor=Y.instancingColor,ne.instancingMorph=Y.instancingMorph,ne.skinning=Y.skinning,ne.morphTargets=Y.morphTargets,ne.morphNormals=Y.morphNormals,ne.morphColors=Y.morphColors,ne.morphTargetsCount=Y.morphTargetsCount,ne.numClippingPlanes=Y.numClippingPlanes,ne.numIntersection=Y.numClipIntersection,ne.vertexAlphas=Y.vertexAlphas,ne.vertexTangents=Y.vertexTangents,ne.toneMapping=Y.toneMapping}function Gn(D,Y,ne,Q,G){Y.isScene!==!0&&(Y=ft),A.resetTextureUnits();const ue=Y.fog,Te=Q.isMeshStandardMaterial?Y.environment:null,Ne=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ba,Le=(Q.isMeshStandardMaterial?z:M).get(Q.envMap||Te),Ve=Q.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Xe=!!ne.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ge=!!ne.morphAttributes.position,at=!!ne.morphAttributes.normal,bt=!!ne.morphAttributes.color;let tn=Ns;Q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(tn=v.toneMapping);const $t=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,St=$t!==void 0?$t.length:0,nt=ie.get(Q),_n=p.state.lights;if(xe===!0&&(we===!0||D!==x)){const Wn=D===x&&Q.id===y;he.setState(Q,D,Wn)}let At=!1;Q.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==_n.state.version||nt.outputColorSpace!==Ne||G.isBatchedMesh&&nt.batching===!1||!G.isBatchedMesh&&nt.batching===!0||G.isBatchedMesh&&nt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&nt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&nt.instancing===!1||!G.isInstancedMesh&&nt.instancing===!0||G.isSkinnedMesh&&nt.skinning===!1||!G.isSkinnedMesh&&nt.skinning===!0||G.isInstancedMesh&&nt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&nt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&nt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&nt.instancingMorph===!1&&G.morphTexture!==null||nt.envMap!==Le||Q.fog===!0&&nt.fog!==ue||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==he.numPlanes||nt.numIntersection!==he.numIntersection)||nt.vertexAlphas!==Ve||nt.vertexTangents!==Xe||nt.morphTargets!==Ge||nt.morphNormals!==at||nt.morphColors!==bt||nt.toneMapping!==tn||nt.morphTargetsCount!==St)&&(At=!0):(At=!0,nt.__version=Q.version);let oi=nt.currentProgram;At===!0&&(oi=Lt(Q,Y,G));let mr=!1,Ln=!1,$a=!1;const Yt=oi.getUniforms(),Bi=nt.uniforms;if(K.useProgram(oi.program)&&(mr=!0,Ln=!0,$a=!0),Q.id!==y&&(y=Q.id,Ln=!0),mr||x!==D){K.buffers.depth.getReversed()?(Se.copy(D.projectionMatrix),Hw(Se),Vw(Se),Yt.setValue(E,"projectionMatrix",Se)):Yt.setValue(E,"projectionMatrix",D.projectionMatrix),Yt.setValue(E,"viewMatrix",D.matrixWorldInverse);const ai=Yt.map.cameraPosition;ai!==void 0&&ai.setValue(E,et.setFromMatrixPosition(D.matrixWorld)),U.logarithmicDepthBuffer&&Yt.setValue(E,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Yt.setValue(E,"isOrthographic",D.isOrthographicCamera===!0),x!==D&&(x=D,Ln=!0,$a=!0)}if(G.isSkinnedMesh){Yt.setOptional(E,G,"bindMatrix"),Yt.setOptional(E,G,"bindMatrixInverse");const Wn=G.skeleton;Wn&&(Wn.boneTexture===null&&Wn.computeBoneTexture(),Yt.setValue(E,"boneTexture",Wn.boneTexture,A))}G.isBatchedMesh&&(Yt.setOptional(E,G,"batchingTexture"),Yt.setValue(E,"batchingTexture",G._matricesTexture,A),Yt.setOptional(E,G,"batchingIdTexture"),Yt.setValue(E,"batchingIdTexture",G._indirectTexture,A),Yt.setOptional(E,G,"batchingColorTexture"),G._colorsTexture!==null&&Yt.setValue(E,"batchingColorTexture",G._colorsTexture,A));const zi=ne.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&je.update(G,ne,oi),(Ln||nt.receiveShadow!==G.receiveShadow)&&(nt.receiveShadow=G.receiveShadow,Yt.setValue(E,"receiveShadow",G.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Bi.envMap.value=Le,Bi.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&Y.environment!==null&&(Bi.envMapIntensity.value=Y.environmentIntensity),Ln&&(Yt.setValue(E,"toneMappingExposure",v.toneMappingExposure),nt.needsLights&&kt(Bi,$a),ue&&Q.fog===!0&&_e.refreshFogUniforms(Bi,ue),_e.refreshMaterialUniforms(Bi,Q,W,$,p.state.transmissionRenderTarget[D.id]),Uu.upload(E,It(nt),Bi,A)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Uu.upload(E,It(nt),Bi,A),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Yt.setValue(E,"center",G.center),Yt.setValue(E,"modelViewMatrix",G.modelViewMatrix),Yt.setValue(E,"normalMatrix",G.normalMatrix),Yt.setValue(E,"modelMatrix",G.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Wn=Q.uniformsGroups;for(let ai=0,Xf=Wn.length;ai<Xf;ai++){const $s=Wn[ai];k.update($s,oi),k.bind($s,oi)}}return oi}function kt(D,Y){D.ambientLightColor.needsUpdate=Y,D.lightProbe.needsUpdate=Y,D.directionalLights.needsUpdate=Y,D.directionalLightShadows.needsUpdate=Y,D.pointLights.needsUpdate=Y,D.pointLightShadows.needsUpdate=Y,D.spotLights.needsUpdate=Y,D.spotLightShadows.needsUpdate=Y,D.rectAreaLights.needsUpdate=Y,D.hemisphereLights.needsUpdate=Y}function Rn(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(D,Y,ne){const Q=ie.get(D);Q.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),ie.get(D.texture).__webglTexture=Y,ie.get(D.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ne,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Y){const ne=ie.get(D);ne.__webglFramebuffer=Y,ne.__useDefaultFramebuffer=Y===void 0};const si=E.createFramebuffer();this.setRenderTarget=function(D,Y=0,ne=0){P=D,R=Y,T=ne;let Q=!0,G=null,ue=!1,Te=!1;if(D){const Le=ie.get(D);if(Le.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(E.FRAMEBUFFER,null),Q=!1;else if(Le.__webglFramebuffer===void 0)A.setupRenderTarget(D);else if(Le.__hasExternalTextures)A.rebindTextures(D,ie.get(D.texture).__webglTexture,ie.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Ge=D.depthTexture;if(Le.__boundDepthTexture!==Ge){if(Ge!==null&&ie.has(Ge)&&(D.width!==Ge.image.width||D.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(D)}}const Ve=D.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Te=!0);const Xe=ie.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Xe[Y])?G=Xe[Y][ne]:G=Xe[Y],ue=!0):D.samples>0&&A.useMultisampledRTT(D)===!1?G=ie.get(D).__webglMultisampledFramebuffer:Array.isArray(Xe)?G=Xe[ne]:G=Xe,N.copy(D.viewport),L.copy(D.scissor),B=D.scissorTest}else N.copy(ye).multiplyScalar(W).floor(),L.copy(ze).multiplyScalar(W).floor(),B=st;if(ne!==0&&(G=si),K.bindFramebuffer(E.FRAMEBUFFER,G)&&Q&&K.drawBuffers(D,G),K.viewport(N),K.scissor(L),K.setScissorTest(B),ue){const Le=ie.get(D.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Le.__webglTexture,ne)}else if(Te){const Le=ie.get(D.texture),Ve=Y;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Le.__webglTexture,ne,Ve)}else if(D!==null&&ne!==0){const Le=ie.get(D.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Le.__webglTexture,ne)}y=-1},this.readRenderTargetPixels=function(D,Y,ne,Q,G,ue,Te){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ie.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Te!==void 0&&(Ne=Ne[Te]),Ne){K.bindFramebuffer(E.FRAMEBUFFER,Ne);try{const Le=D.texture,Ve=Le.format,Xe=Le.type;if(!U.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=D.width-Q&&ne>=0&&ne<=D.height-G&&E.readPixels(Y,ne,Q,G,Ke.convert(Ve),Ke.convert(Xe),ue)}finally{const Le=P!==null?ie.get(P).__webglFramebuffer:null;K.bindFramebuffer(E.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(D,Y,ne,Q,G,ue,Te){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=ie.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Te!==void 0&&(Ne=Ne[Te]),Ne)if(Y>=0&&Y<=D.width-Q&&ne>=0&&ne<=D.height-G){K.bindFramebuffer(E.FRAMEBUFFER,Ne);const Le=D.texture,Ve=Le.format,Xe=Le.type;if(!U.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Ge),E.bufferData(E.PIXEL_PACK_BUFFER,ue.byteLength,E.STREAM_READ),E.readPixels(Y,ne,Q,G,Ke.convert(Ve),Ke.convert(Xe),0);const at=P!==null?ie.get(P).__webglFramebuffer:null;K.bindFramebuffer(E.FRAMEBUFFER,at);const bt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await zw(E,bt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Ge),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,ue),E.deleteBuffer(Ge),E.deleteSync(bt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Y=null,ne=0){const Q=Math.pow(2,-ne),G=Math.floor(D.image.width*Q),ue=Math.floor(D.image.height*Q),Te=Y!==null?Y.x:0,Ne=Y!==null?Y.y:0;A.setTexture2D(D,0),E.copyTexSubImage2D(E.TEXTURE_2D,ne,0,0,Te,Ne,G,ue),K.unbindTexture()};const sn=E.createFramebuffer(),on=E.createFramebuffer();this.copyTextureToTexture=function(D,Y,ne=null,Q=null,G=0,ue=null){ue===null&&(G!==0?(Iu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=G,G=0):ue=0);let Te,Ne,Le,Ve,Xe,Ge,at,bt,tn;const $t=D.isCompressedTexture?D.mipmaps[ue]:D.image;if(ne!==null)Te=ne.max.x-ne.min.x,Ne=ne.max.y-ne.min.y,Le=ne.isBox3?ne.max.z-ne.min.z:1,Ve=ne.min.x,Xe=ne.min.y,Ge=ne.isBox3?ne.min.z:0;else{const zi=Math.pow(2,-G);Te=Math.floor($t.width*zi),Ne=Math.floor($t.height*zi),D.isDataArrayTexture?Le=$t.depth:D.isData3DTexture?Le=Math.floor($t.depth*zi):Le=1,Ve=0,Xe=0,Ge=0}Q!==null?(at=Q.x,bt=Q.y,tn=Q.z):(at=0,bt=0,tn=0);const St=Ke.convert(Y.format),nt=Ke.convert(Y.type);let _n;Y.isData3DTexture?(A.setTexture3D(Y,0),_n=E.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(A.setTexture2DArray(Y,0),_n=E.TEXTURE_2D_ARRAY):(A.setTexture2D(Y,0),_n=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,Y.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,Y.unpackAlignment);const At=E.getParameter(E.UNPACK_ROW_LENGTH),oi=E.getParameter(E.UNPACK_IMAGE_HEIGHT),mr=E.getParameter(E.UNPACK_SKIP_PIXELS),Ln=E.getParameter(E.UNPACK_SKIP_ROWS),$a=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,$t.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,$t.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ve),E.pixelStorei(E.UNPACK_SKIP_ROWS,Xe),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ge);const Yt=D.isDataArrayTexture||D.isData3DTexture,Bi=Y.isDataArrayTexture||Y.isData3DTexture;if(D.isDepthTexture){const zi=ie.get(D),Wn=ie.get(Y),ai=ie.get(zi.__renderTarget),Xf=ie.get(Wn.__renderTarget);K.bindFramebuffer(E.READ_FRAMEBUFFER,ai.__webglFramebuffer),K.bindFramebuffer(E.DRAW_FRAMEBUFFER,Xf.__webglFramebuffer);for(let $s=0;$s<Le;$s++)Yt&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ie.get(D).__webglTexture,G,Ge+$s),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ie.get(Y).__webglTexture,ue,tn+$s)),E.blitFramebuffer(Ve,Xe,Te,Ne,at,bt,Te,Ne,E.DEPTH_BUFFER_BIT,E.NEAREST);K.bindFramebuffer(E.READ_FRAMEBUFFER,null),K.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(G!==0||D.isRenderTargetTexture||ie.has(D)){const zi=ie.get(D),Wn=ie.get(Y);K.bindFramebuffer(E.READ_FRAMEBUFFER,sn),K.bindFramebuffer(E.DRAW_FRAMEBUFFER,on);for(let ai=0;ai<Le;ai++)Yt?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,zi.__webglTexture,G,Ge+ai):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,zi.__webglTexture,G),Bi?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Wn.__webglTexture,ue,tn+ai):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Wn.__webglTexture,ue),G!==0?E.blitFramebuffer(Ve,Xe,Te,Ne,at,bt,Te,Ne,E.COLOR_BUFFER_BIT,E.NEAREST):Bi?E.copyTexSubImage3D(_n,ue,at,bt,tn+ai,Ve,Xe,Te,Ne):E.copyTexSubImage2D(_n,ue,at,bt,Ve,Xe,Te,Ne);K.bindFramebuffer(E.READ_FRAMEBUFFER,null),K.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Bi?D.isDataTexture||D.isData3DTexture?E.texSubImage3D(_n,ue,at,bt,tn,Te,Ne,Le,St,nt,$t.data):Y.isCompressedArrayTexture?E.compressedTexSubImage3D(_n,ue,at,bt,tn,Te,Ne,Le,St,$t.data):E.texSubImage3D(_n,ue,at,bt,tn,Te,Ne,Le,St,nt,$t):D.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,ue,at,bt,Te,Ne,St,nt,$t.data):D.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,ue,at,bt,$t.width,$t.height,St,$t.data):E.texSubImage2D(E.TEXTURE_2D,ue,at,bt,Te,Ne,St,nt,$t);E.pixelStorei(E.UNPACK_ROW_LENGTH,At),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,oi),E.pixelStorei(E.UNPACK_SKIP_PIXELS,mr),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ln),E.pixelStorei(E.UNPACK_SKIP_IMAGES,$a),ue===0&&Y.generateMipmaps&&E.generateMipmap(_n),K.unbindTexture()},this.copyTextureToTexture3D=function(D,Y,ne=null,Q=null,G=0){return Iu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,Y,ne,Q,G)},this.initRenderTarget=function(D){ie.get(D).__webglFramebuffer===void 0&&A.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?A.setTextureCube(D,0):D.isData3DTexture?A.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?A.setTexture2DArray(D,0):A.setTexture2D(D,0),K.unbindTexture()},this.resetState=function(){R=0,T=0,P=null,K.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}const wn={name:"Mohammad Al Furqon",title:"Fullstack Web Developer & Software Engineer",tagline:"Building robust digital experiences with precision and creativity.",website:"lucialf.my.id",linkedin:"linkedin.com/in/lucialf",email:"mohammadalfurqon62@gmail.com",about:`A passionate Fullstack Developer and Software Engineer with extensive experience spanning Japanese industry, 
government agencies, academic institutions, and international cybersecurity operations. 
Graduated from Universitas Sebelas Maret in Program Study of Informatics with strong fundamentals in Machine Learning and Software Engineering. 
Skilled in building secure, scalable web applications and contributing to cutting-edge research 
in Machine Learning and Humanized Computing.`},Rp=[{institution:"Universitas Sebelas Maret",degree:"Bachelor of Informatics",gpa:"3.77 / 4.00",period:"Aug 2021 — Jan 2026"},{institution:"SMA Negeri 7 Bengkulu",degree:"Science and Mathematics",gpa:"93 / 100",period:"Sept 2018 — May 2021"}],Us=[{company:"Paragon Technology and Innovation",role:"Software Engineer (HR Technology) Intern",period:"Aug 2026 — Present",highlights:["Refactor and fix bugs from legacy codebase in HR application systems"],tags:["HR Tech","Software Engineering","Refactoring"]},{company:"Self Employed",role:"Freelance Fullstack Web Developer",period:"Aug 2024 — Present",highlights:["Handle various websites for diverse companies and individuals","Manage all requested features from clients and implement into production","Utilize various programming languages based on client requirements","Ensure security, optimization, and seamless deployment of all projects"],tags:["Freelance","Fullstack","Multi-language"]},{company:"LAMPTIP",role:"Web Developer — Part Time",period:"Nov 2025 — Present",highlights:["Fullstack Developer at Lembaga Akreditasi Mandiri Pendidikan Tinggi Ilmu Pertanian","Maintain and update the main website infrastructure","Identify potential bugs and refactor legacy code for improved performance","Develop new features based on user requirements and feedback"],tags:["Laravel","Fullstack","Maintenance"]},{company:"DISPERKIMTAN Bontang City",role:"Web Developer — Contract",period:"Sept 2025 — Feb 2026",highlights:["Created user authentication and authorization system using JWT Token","Built role management system for user access control","Implemented admin user impersonation feature","Integrated audit database tracking using Laravel Auditor","Designed REST API system for frontend-backend communication"],tags:["Laravel","JWT","REST API","Security"]},{company:"Meiwa Industry Japan (明和工業株式会社)",role:"Software Engineer — Internship",period:"June 2024 — June 2025",highlights:['Normalized database tables on "Meiwa Portal" web application',"Refactored code from bad practices to better practice standards","Recreated complete Inventory Management System","Developed Leave Request Application from scratch",'Participated in tech stack modernization of "Meiwa Portal"',"Managed CCTV systems and LAN cable infrastructure"],tags:["Japan","Database","Inventory System","Refactoring"]},{company:"Rapixus Taiwan",role:"VANS Operator",period:"Jan 2024 — March 2024",highlights:["Operated RAPIXUS RapixEngine VANS platform for vulnerability scans and risk assessments","Managed IT asset inventories using standardized CPE formats","Monitored CVSS vulnerability scores and deployed system patches","Generated post-installation inspection reports and resolved security loopholes"],tags:["Cybersecurity","CVSS","Vulnerability Assessment"]},{company:"SPMB Universitas Sebelas Maret",role:"Helpdesk Seleksi Mandiri",period:"June 2023 — July 2024",highlights:["Performed first-line troubleshooting for registration system glitches","Coordinated with Central Admissions Committee and IT team for issue resolution"],tags:["Support","Troubleshooting"]},{company:"Dinas Pendidikan Karanganyar",role:"Helpdesk PPDB",period:"June 2023",highlights:["Assisted students and parents with technical admissions inquiries across zonation, academic, affirmative, and transfer tracks"],tags:["Education","Support"]},{company:"UPT TIK UNS",role:"Software Developer — Internship",period:"Jan 2023 — Mar 2024",highlights:['Co-developed "Report-PBJ" — web app for managing university procurement workflows','Updated "Domain-MS" — domain management system for Universitas Sebelas Maret','Participated in "SEMANTIK" collaboration event with Indosat and Telkomsel',"Led cybersecurity awareness socialization with Karanganyar government"],tags:["Government","Web App","Procurement"]},{company:"Assistant Lecturer — S1 Informatika UNS",role:"Teaching Assistant",period:"Aug 2022 — June 2024",highlights:["Programming Concepts Course (Aug 2022 — Dec 2023)","Data Structure and Algorithm Course (Feb 2022 — July 2023)","Object Oriented Programming Course (Aug 2023 — Dec 2023)","Database Course (Aug 2023 — Dec 2023)","Web Programming Course (Jan 2024 — June 2024)","Shared knowledge, created materials, and evaluated student assignments"],tags:["Teaching","DSA","OOP","Database","Web"]},{company:"FATISDA UNS",role:"Accreditation Team & ISHC-RG Research Assistant",period:"Aug 2022 — Aug 2023",highlights:["Conducted exploratory research in cybersecurity and Humanized Computing","Collected, processed, and analyzed network security data for risk assessments","Documented research methodologies, testing scenarios, and findings","Authored technical reports and academic manuscripts for publication"],tags:["Research","Cybersecurity","Academic Writing"]}],g0=[{title:"Book Author",description:'"Strategi Membangun Portal Website Aman Dari Serangan Judi Online" with ISHC-RG, Faculty of Informatics and Data Science, Universitas Sebelas Maret.',icon:"book-open"},{title:"Undergraduate Thesis",description:'"Dual-View Radiographic Captioning for Chest X-ray Frontal and Lateral using DenseNet-LSTM" — Undergraduate Publication.',icon:"graduation-cap"}],qy=[{name:"Himpunan Mahasiswa Informatika UNS",role:"PSDM Staff",period:"Mar 2022 — Mar 2023",description:"Helped new students adapt to campus life and participate in organization activities."},{name:"PKKMB FATISDA 2022",role:"Head Division of Curriculum",period:"July 2022 — Aug 2022",description:"Managed Curriculum Division — evaluated tasks, organized orientation program for new students."},{name:"OSPRODI INFORMATIKA",role:"Head Division of Technology",period:"July 2022 — Aug 2022",description:"Managed ALGORITMARU TASK (web-based) and CODING TASK challenges for new students."},{name:"Bangkit Academy Batch 2",role:"Cohort — Machine Learning Path",period:"Aug 2023 — Jan 2024",description:'Studied Machine Learning with Python/JS, TensorFlow, TFD Certification. Capstone: "NutriChive" — ingredient scanning & recipe recommendation app.'}],bs=[{name:"Frontend",items:["Vue.js","React","HTML5","CSS3","TailwindCSS","JavaScript","TypeScript"]},{name:"Backend",items:["Laravel","Node.js","Express","REST API","PHP","Python"]},{name:"Database",items:["MySQL","PostgreSQL","MongoDB","Redis"]},{name:"DevOps & Tools",items:["Git","Docker","Linux","Nginx","CI/CD","Google Cloud"]},{name:"AI & ML",items:["TensorFlow","Machine Learning","Deep Learning","Computer Vision"]},{name:"Security",items:["JWT","OAuth","Vulnerability Assessment","CVSS","Penetration Testing"]}],Pp=[{name:"Bahasa Indonesia",level:"Native",percentage:100},{name:"English",level:"Proficient",percentage:85},{name:"Japanese",level:"Beginner",percentage:25}],vn=new H,gr=new H,al=new H,lD=new H,cD=new H;function uD(n){var l;const e=n.geometry,t=(l=e==null?void 0:e.attributes)==null?void 0:l.position;if(!e||!t)return[];const i=[],r=e.index,s=n.matrixWorld,o=(c,u)=>c.fromBufferAttribute(t,u).applyMatrix4(s),a=c=>r?r.getX(c):c;if(n.isMesh){const c=r?r.count:t.count;for(let u=0;u+2<c;u+=3){o(vn,a(u)),o(gr,a(u+1)),o(al,a(u+2));const f=lD.copy(gr).sub(vn).cross(cD.copy(al).sub(vn)).length()*.5;f>1e-7&&i.push({w:f,p:[vn.x,vn.y,vn.z,gr.x,gr.y,gr.z,al.x,al.y,al.z]})}}else if(n.isLine){const c=r?r.count:t.count,u=n.isLineSegments?2:1;for(let f=0;f+1<c;f+=u){o(vn,a(f)),o(gr,a(f+1));const h=vn.distanceTo(gr);h>1e-5&&i.push({w:h,p:[vn.x,vn.y,vn.z,gr.x,gr.y,gr.z]})}}else if(n.isPoints)for(let c=0;c<t.count;c++)o(vn,c),i.push({w:1,p:[vn.x,vn.y,vn.z]});return i}function fD(n,e,t){const i=n.p;if(i.length===9){let r=Math.random(),s=Math.random();r+s>1&&(r=1-r,s=1-s);const o=1-r-s;e[t]=i[0]*o+i[3]*r+i[6]*s,e[t+1]=i[1]*o+i[4]*r+i[7]*s,e[t+2]=i[2]*o+i[5]*r+i[8]*s}else if(i.length===6){const r=Math.random();e[t]=i[0]+(i[3]-i[0])*r,e[t+1]=i[1]+(i[4]-i[1])*r,e[t+2]=i[2]+(i[5]-i[2])*r}else e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2]}function hD(n,e){n.updateMatrixWorld(!0);const t=[];n.traverse(s=>{if(s===n)return;const o=uD(s);o.length&&t.push(o)});const i=new Float32Array(e*3);if(!t.length){for(let s=0;s<e;s++)vn.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(1.2+Math.random()*5.3),i[s*3]=vn.x,i[s*3+1]=vn.y,i[s*3+2]=vn.z;return i}let r=0;for(let s=0;s<t.length;s++){const o=t[s],a=s===t.length-1?e-r:Math.floor(e/t.length),l=new Float64Array(o.length);let c=0;for(let u=0;u<o.length;u++)c+=o[u].w,l[u]=c;for(let u=0;u<a;u++){const f=Math.random()*c;let h=0,d=o.length-1;for(;h<d;){const _=h+d>>1;l[_]<f?h=_+1:d=_}fD(o[h],i,(r+u)*3)}r+=a}return i}const ll=5600,pu=260,v0=90,mu=34,dD=2,pD=.5,mD=.42,_D=16,gD=ki({__name:"GlobalCanvas",setup(n){const e=us(),t=dt(null);let i=null,r=null,s=null,o=null,a=null,l=null,c=0,u=0,f=null,h=null,d=null,_=null,g=null,m=null,p=null,S=null,b=[],v=null,w=null,R=null,T=[],P=[],y=[],x=0,N=null,L=null,B=null,F=null,j=[],X=[],$=[],W=null,me=null,O=null,ye=null,ze=0,st=0,se=0,xe=9,we=0,Se=0,ke=0,et=0,qe=0,ft=0;const ot=new H,I=new H,E=new H;function ee(J){const oe=window.innerWidth,de=window.innerHeight;qe=(J.clientX-oe/2)/(oe/2),ft=(J.clientY-de/2)/(de/2)}const te=(J,oe,de,be)=>J+(oe-J)*(1-Math.exp(-de*be));function U(){const J=new jn,oe=new Wr({color:62463,wireframe:!0,transparent:!0,opacity:.75});S=new nn(new _f(.95,1),oe),J.add(S);const de=new oa({color:38655,emissive:62463,emissiveIntensity:.6,roughness:.3,metalness:.9});J.add(new nn(new _f(.62,0),de)),b=[{r:1.35,c:62463,rot:[Math.PI/4,0,0]},{r:1.6,c:38655,rot:[0,Math.PI/3,0]},{r:1.86,c:62463,rot:[0,0,Math.PI/6]}].map(De=>{const pe=new gf(De.r,.022,12,56),Be=new Wr({color:De.c,transparent:!0,opacity:.8}),Re=new nn(pe,Be);return Re.rotation.set(De.rot[0],De.rot[1],De.rot[2]),J.add(Re),Re});const ae=new pn,Ee=[];for(let De=0;De<90;De++){const pe=Math.random()*Math.PI*2,Be=Math.acos(Math.random()*2-1),Re=1.1+Math.random()*.8;Ee.push(Re*Math.sin(Be)*Math.cos(pe),Re*Math.sin(Be)*Math.sin(pe),Re*Math.cos(Be))}return ae.setAttribute("position",new en(Ee,3)),J.add(new qh(ae,new Nu({color:62463,size:.04,transparent:!0,opacity:.75}))),J}function K(){const J=new jn,oe=new jn;oe.rotation.set(-.5,0,.32),J.add(oe),v=new nn(new vf(1.1,.13,128,10,2,3),new Wr({color:62463,wireframe:!0,transparent:!0,opacity:.6})),oe.add(v),w=new nn(new vf(1.1,.06,96,8,2,3),new oa({color:38655,emissive:62463,emissiveIntensity:.9,roughness:.35,metalness:.8,transparent:!0,opacity:.9})),oe.add(w);const de=new pn,be=[];for(let ae=0;ae<70;ae++){const Ee=Math.random()*Math.PI*2,De=Math.acos(Math.random()*2-1),pe=1.3+Math.random()*.55;be.push(pe*Math.sin(De)*Math.cos(Ee),pe*Math.sin(De)*Math.sin(Ee),pe*Math.cos(De)*.5)}return de.setAttribute("position",new en(be,3)),oe.add(new qh(de,new Nu({color:62463,size:.045,transparent:!0,opacity:.7}))),J}function ge(){const J=new jn,oe=new po(1.5,1.5,10,32,1,!0),de=new oa({color:38655,emissive:62463,emissiveIntensity:.8,transparent:!0,opacity:.75,side:ji});R=new nn(oe,de),J.add(R);const be=new po(2.6,2.6,10,8,14,!0),ae=new Wr({color:62463,wireframe:!0,transparent:!0,opacity:.35});J.add(new nn(be,ae));const Ee=Math.max(2,Us.length);T=[];for(let Oe=0;Oe<Ee;Oe++){const lt=new jn;lt.position.y=-4.4+Oe/(Ee-1)*8.8;const tt=new gf(2.85,.04,10,40),ut=new Wr({color:38655,transparent:!0,opacity:.55}),Ot=new nn(tt,ut);Ot.rotation.x=Math.PI/2,lt.add(Ot),J.add(lt),T.push(lt)}const De=12,pe=[];for(let Oe=0;Oe<De;Oe++){const lt=Oe/De*Math.PI*2,tt=Math.cos(lt)*2.6,ut=Math.sin(lt)*2.6;pe.push(new H(tt,-5,ut),new H(tt,5,ut))}const Be=new pn().setFromPoints(pe),Re=new vl({color:62463,transparent:!0,opacity:.6});return J.add(new lu(Be,Re)),J}function ie(){const J=new jn,oe=new jn;oe.rotation.set(-.42,0,0),J.add(oe);const de=.9,be=.45,ae=[-1.5,-.5,.5,1.5],Ee=new Wa(.24,.24,.24),De=new Wr({color:38655,wireframe:!0,transparent:!0,opacity:.5});for(const Oe of ae)for(const lt of ae)for(const tt of[-1,1]){const ut=new nn(Ee,De);ut.position.set(Oe*de,tt*be,lt*de),oe.add(ut)}const pe=[],Be=1.5*de;for(const Oe of ae){for(const lt of[-1,1])pe.push(new H(-Be,lt*be,Oe*de),new H(Be,lt*be,Oe*de),new H(Oe*de,lt*be,-Be),new H(Oe*de,lt*be,Be));pe.push(new H(Oe*de,-be,Oe*de),new H(Oe*de,be,Oe*de))}const Re=new pn().setFromPoints(pe);oe.add(new lu(Re,new vl({color:62463,transparent:!0,opacity:.28}))),P=[];for(let Oe=0;Oe<6;Oe++){const lt=Oe/6*Math.PI*2,tt=new oa({color:38655,emissive:8772,emissiveIntensity:.4,metalness:.8,roughness:.2}),ut=new nn(new Um(.24,0),tt);ut.position.set(Math.cos(lt)*1.85,0,Math.sin(lt)*1.85),P.push(ut),oe.add(ut)}return J}function A(){const J=new jn,oe=[];y=[];for(let be=0;be<dD;be++){const ae=new jn,Ee=1.9-be*.15;ae.position.y=-.45+be*.9,ae.rotation.y=be*.5,ae.add(new nn(new po(Ee,Ee,.06,6,1,!1),new Wr({color:62463,wireframe:!0,transparent:!0,opacity:.85}))),ae.add(new nn(new po(Ee*.9,Ee*.9,.02,6,1,!1),new oa({color:38655,emissive:62463,emissiveIntensity:.35,transparent:!0,opacity:.22,side:ji})));const De=[];for(let pe=0;pe<6;pe++){const Be=pe/6*Math.PI*2+Math.PI/6+ae.rotation.y;De.push(new H(Math.cos(Be)*Ee,ae.position.y,Math.sin(Be)*Ee))}oe.push(De),J.add(ae),y.push(ae)}const de=[];for(let be=0;be+1<oe.length;be++)for(let ae=0;ae<6;ae++)de.push(oe[be][ae],oe[be+1][ae]);return de.length&&J.add(new lu(new pn().setFromPoints(de),new vl({color:62463,transparent:!0,opacity:.4}))),J.add(new nn(new po(.05,.05,1.7,8,1,!0),new oa({color:38655,emissive:62463,emissiveIntensity:.9,transparent:!0,opacity:.9,side:ji}))),J}function M(){me=new pn,O=new Float32Array(pu*6),ye=new Float32Array(pu*3);for(let de=0;de<pu;de++)ye[de*3]=(Math.random()-.5)*mu*2,ye[de*3+1]=(Math.random()-.5)*mu*2,ye[de*3+2]=-Math.random()*v0;me.setAttribute("position",new Qi(O,3));const J=new vl({color:62463,transparent:!0,opacity:.25,blending:zl,depthWrite:!1}),oe=new lu(me,J);return oe.frustumCulled=!1,oe}function z(){L=new pn,B=new Float32Array(ll*3),F=new Float32Array(ll*6);for(let de=0;de<ll;de++){const be=de*6;F[be]=Math.random(),F[be+1]=Math.random(),F[be+2]=1.5+Math.random()*4,F[be+3]=Math.random()*Math.PI*2,F[be+4]=Math.acos(Math.random()*2-1),F[be+5]=.4+Math.random()*1.6}L.setAttribute("position",new Qi(B,3));const J=new Nu({color:62463,size:.03,sizeAttenuation:!0,transparent:!0,opacity:.9,blending:zl,depthWrite:!1}),oe=new qh(L,J);return oe.frustumCulled=!1,oe}let V=[];const q=new mt(736594),Z=new mt;function fe(J){return e.isDark?J:Z.copy(J).multiplyScalar(.42).lerp(q,.25)}const _e=[new mt(38655),new mt(62463)],ve=[new mt(8772),new mt(62463)];function He(J){const oe=[];return J.traverse(de=>{const be=de.material;if(!be)return;(Array.isArray(be)?be:[be]).forEach(Ee=>{var Be,Re;const De=Ee;De.transparent=!0;const pe=De;oe.push({mat:De,base:De.opacity??1,color:(Be=pe.color)==null?void 0:Be.clone(),emissive:(Re=pe.emissive)==null?void 0:Re.clone()})})}),oe}function he(){const J=e.isDark,oe=(de,be)=>{!de||!be||(be.copy(de),J||(be.multiplyScalar(.42),be.lerp(q,.25)))};for(const de of V)for(const be of de.mats){const ae=be.mat;oe(be.color,ae.color),oe(be.emissive,ae.emissive)}r&&(r.fog=new Im(J?198418:16054267,J?.014:.02)),o&&(o.color.set(J?62463:2846607),o.intensity=J?4:2.2);for(const de of[N,W]){if(!de)continue;const be=de.material;be.blending=J?zl:Po,be.color.set(J?62463:1007485),be.needsUpdate=!0}}function Me(){V=[{group:h,mats:He(h),detail:()=>{h&&(h.rotation.y+=.008,S&&(S.rotation.x+=.01),b[0]&&(b[0].rotation.x+=.015),b[1]&&(b[1].rotation.y+=.012),b[2]&&(b[2].rotation.z+=.018))}},{group:d,mats:He(d),detail:()=>{d&&(d.rotation.y+=.006)}},{group:_,mats:He(_),detail:()=>{if(!_)return;_.rotation.y=e.carouselRotation;const J=e.activeNodeIndex;T.forEach((oe,de)=>{oe.rotation.y+=de%2===0?.008:-.006;const be=de===J,ae=oe.scale.x+((be?1.13:1)-oe.scale.x)*.12;oe.scale.set(ae,1,ae),oe.children[0].material.color.lerp(fe(_e[be?1:0]),.12)})}},{group:g,mats:He(g),detail:()=>{if(!g)return;g.rotation.y+=.005;const J=e.activeSkillIndex;P.forEach((oe,de)=>{const be=oe.material,ae=de===J?1:0,Ee=oe.scale.x+((ae?1.6:1)-oe.scale.x)*.12;oe.scale.setScalar(Ee),oe.rotation.y+=.03,be.emissiveIntensity+=((ae?1.2:.4)-be.emissiveIntensity)*.12,be.emissive.lerp(fe(ve[ae]),.12),be.color.lerp(fe(_e[ae]),.12)})}},{group:m,mats:He(m),detail:J=>{m&&(x+=(e.activeResearchIndex*1.2-x)*.06,m.rotation.y=J*.18+x,y.forEach((oe,de)=>{const be=de===e.activeResearchIndex,ae=-.45+de*.9;oe.position.y+=(ae+(be?.22:0)-oe.position.y)*.08,oe.rotation.y+=(de*.5+(be?.4:0)-oe.rotation.y)*.06}))}},{group:p,mats:[],detail:()=>{p&&(p.rotation.y+=.0015,p.rotation.x+=7e-4)}}]}function We(){var oe;if(!t.value)return;je(),r=new dA,s=new wi(45,c/u,.1,220),i=new aD({antialias:!0,alpha:!0}),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(c,u),t.value.appendChild(i.domElement),W=M(),r.add(W),f=new jn,r.add(f),h=U(),d=K(),_=ge(),g=ie(),m=A(),p=new jn,f.add(h,d,_,g,m,p),Me(),j=V.map(de=>hD(de.group,ll)),X=j.map(de=>{let be=0;for(let ae=0;ae<de.length;ae+=3)be=Math.max(be,Math.abs(de[ae]),Math.abs(de[ae+1]));return be}),Ke();for(const de of V){de.group.visible=!1;for(const be of de.mats)be.mat.opacity=0}N=z(),f.add(N),o=new bA(62463,4,60),r.add(o),r.add(new MA(4386,1.2)),he(),st=Bd(),se=st;const J=Math.min(Ei.length-1,Math.floor(st));xe=((oe=$[J])==null?void 0:oe.dwell)??Ei[J].dwell,re()}function je(){const J=t.value,oe=(J==null?void 0:J.clientWidth)||window.innerWidth||0,de=(J==null?void 0:J.clientHeight)||window.innerHeight||0;return oe>0&&de>0&&(c=oe,u=de),c>0&&u>0}const Ie=Math.tan(45/2*(Math.PI/180));function Qe(J){let oe=0,de=0,be=J;for(;be;)oe+=be.offsetLeft,de+=be.offsetTop,be=be.offsetParent;return{x:oe,y:de}}function Ke(){!c||!u||($=Ei.map((J,oe)=>{if(!J.frame||!J.section)return null;const de=document.querySelector(J.frame),be=document.querySelector(J.section),ae=X[oe];if(!de||!be||!ae)return null;const Ee=Math.min(de.offsetWidth,de.offsetHeight);if(Ee<=1)return null;const De=Qe(de),pe=Qe(be),Be=(De.x-pe.x+de.offsetWidth/2)/c,Re=(De.y-pe.y+de.offsetHeight/2)/u,Oe=Ee*(J.fill??.7)/2,lt=ae*u/(2*Ie*Oe),tt=Ie*lt;return{dwell:lt,x:(Be-.5)*2*tt*(c/u),y:(.5-Re)*2*tt}}))}function _t(){const J=c>=1024;return{lateral:J?1:0,dwell:J?1:1.45}}let k=0,Ce=0;function re(J=0){var Q,G;const oe=Math.min(.05,Math.max(.001,(J-k)*.001));k=J;const de=J*.001;J>Ce&&(Ce=J+400,(Ei.some((Te,Ne)=>Te.frame&&!$[Ne])||J<6e3)&&Ke()),ke=te(ke,qe,3.5,oe),et=te(et,ft,3.5,oe),se=st,st=te(st,e.journeyProgress,7,oe);const be=st,ae=Ei.length-1,Ee=Math.min(ae,Math.max(0,Math.floor(be))),De=Math.min(ae,Ee+1),pe=iT(be,Ee),Be=De!==Ee&&pe>0,{lateral:Re,dwell:Oe}=_t(),lt=Ei[Ee],tt=Ei[De],ut=$[Ee],Ot=$[De],Lt=ut?ut.dwell:lt.dwell*Oe,It=Ot?Ot.dwell:tt.dwell*Oe,wt=Math.max(2.6,Math.min(Lt,It)*.45),Gn=pe<.45?ma(Lt,wt,Wi(pe/.45)):ma(wt,It,Wi((pe-.45)/.41));if(xe=te(xe,Gn,6.5,oe),s){s.position.set(ke*.5,-et*.4,xe),s.lookAt(0,0,0);const ue=45+Math.sin(Math.PI*Cr(pe/.86))*13;Math.abs(s.fov-ue)>.01&&(s.fov=ue,s.updateProjectionMatrix())}o&&o.position.set(0,2,xe+1);const kt=Wi(pe),Rn=ut?ut.x:lt.lateralX*Re,si=Ot?Ot.x:tt.lateralX*Re,sn=ut?ut.y:lt.lateralY*Re,on=Ot?Ot.y:tt.lateralY*Re,D=Ee>=ae?Wi((Cr(be-ae)-pD)/mD):0;we=te(we,ma(Rn,si,kt),5,oe),Se=te(Se,ma(sn,on,kt)+D*_D,5,oe),f&&(f.position.set(we,Se,0),f.rotation.x=et*.12,f.rotation.y=-ke*.12);const Y=1-Wi((pe-.05)/.45),ne=Wi((pe-.68)/.32);for(let ue=0;ue<V.length;ue++){const Te=V[ue],Ne=ue===Ee||Be&&ue===De;if(!Te.mats.length){Ne&&((Q=Te.detail)==null||Q.call(Te,de));continue}let Le=0;if(ue===Ee?Le=Be?Y:1:ue===De&&Be&&(Le=ne),Te.group.visible=Le>.004,!!Te.group.visible){for(let Ve=0;Ve<Te.mats.length;Ve++)Te.mats[Ve].mat.opacity=Te.mats[Ve].base*Le;(G=Te.detail)==null||G.call(Te,de)}}if(B&&F&&L&&N&&r){r.updateMatrixWorld(!0);const ue=V[Ee].group.matrix,Te=V[De].group.matrix,Ne=j[Ee],Le=j[De];for(let Ge=0;Ge<ll;Ge++){const at=Ge*3,bt=Ge*6,tn=Cr((pe-F[bt]*.22)/.28),$t=Cr((pe-(.52+F[bt+1]*.16))/.32),St=Wi(tn),nt=Wi($t);if(ot.fromArray(Ne,at).applyMatrix4(ue),St>5e-4){const _n=de*F[bt+5]*.5,At=F[bt+3]+_n,oi=F[bt+4],mr=F[bt+2],Ln=Math.sin(oi);E.set(mr*Ln*Math.cos(At),mr*Math.cos(oi),mr*Ln*Math.sin(At)),ot.lerp(E,St),nt>5e-4&&(I.fromArray(Le,at).applyMatrix4(Te),ot.lerp(I,nt))}B[at]=ot.x,B[at+1]=ot.y,B[at+2]=ot.z}L.attributes.position.needsUpdate=!0;const Ve=Wi(pe/.5)*(1-Wi((pe-.68)/.32)),Xe=N.material;Xe.size=.028+Ve*.034,Xe.opacity=.16+Ve*.8}if(O&&ye&&me&&W){const ue=Math.abs(be-se)/oe*26;ze=te(ze,Math.min(ue,150),8,oe);const Te=(.4+ze*.07)*.5,Ne=(4+ze*1.6)*oe;for(let Ve=0;Ve<pu;Ve++){const Xe=Ve*3;ye[Xe+2]+=Ne,ye[Xe+2]>xe&&(ye[Xe+2]-=v0,ye[Xe]=(Math.random()-.5)*mu*2,ye[Xe+1]=(Math.random()-.5)*mu*2);const Ge=Ve*6;O[Ge]=ye[Xe],O[Ge+1]=ye[Xe+1],O[Ge+2]=ye[Xe+2]-Te,O[Ge+3]=ye[Xe],O[Ge+4]=ye[Xe+1],O[Ge+5]=ye[Xe+2]+Te}me.attributes.position.needsUpdate=!0;const Le=W.material;Le.opacity=.14+Math.min(1,ze/70)*.4}i&&r&&s&&i.render(r,s),a=requestAnimationFrame(re)}function le(){!i||!s||je()&&(s.aspect=c/u,s.updateProjectionMatrix(),i.setSize(c,u),Ke())}function Ae(){if(a!==null&&(cancelAnimationFrame(a),a=null),i){i.dispose();const J=i.domElement;J!=null&&J.parentNode&&J.parentNode.removeChild(J),i=null}V=[],j=[],X=[],$=[],r=null,s=null,o=null,f=null,W=null,me=null,O=null,ye=null,N=null,L=null,B=null,F=null}return es(()=>e.isDark,()=>he()),ri(()=>{We(),t.value&&typeof ResizeObserver<"u"&&(l=new ResizeObserver(le),l.observe(t.value)),window.addEventListener("resize",le,{passive:!0}),window.addEventListener("mousemove",ee,{passive:!0})}),pr(()=>{l==null||l.disconnect(),l=null,window.removeEventListener("resize",le),window.removeEventListener("mousemove",ee),Ae()}),(J,oe)=>(Ue(),Ze("div",{ref_key:"containerRef",ref:t,class:"fixed inset-0 pointer-events-none z-0 overflow-hidden"},null,512))}}),vD={class:"relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"},xD={class:"flex flex-wrap items-center gap-4 mb-10"},yD={class:"grid grid-cols-3 gap-3 max-w-lg pt-4 border-t border-cyan-500/20"},bD={class:"p-3 bg-slate-900/50 border border-cyan-500/15 rounded"},SD={class:"text-2xl sm:text-3xl font-mono font-black text-neon-blue"},MD={class:"p-3 bg-slate-900/50 border border-cyan-500/15 rounded"},ED={class:"text-2xl sm:text-3xl font-mono font-black text-neon-blue"},TD=ki({__name:"CyberHeroSection",setup(n){Ui.registerPlugin(rt);const e=Va(),t=dt(null);let i=null;const{opacity:r,transform:s}=mc(0);ri(async()=>{await dr(),t.value&&(i=rt.create({id:"journey-hero",trigger:t.value,start:"top top",end:"+=1200",pin:!0,anticipatePin:1,scrub:1}))}),pr(()=>{i&&(i.kill(),i=null)});function o(a){e.playTick();const l=document.querySelector(a);l&&l.scrollIntoView({behavior:"smooth"})}return(a,l)=>(Ue(),Ze("section",{ref_key:"heroRef",ref:t,id:"hero",class:"relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-8 md:px-16 overflow-hidden bg-transparent"},[l[9]||(l[9]=C("div",{class:"absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-neon-blue/10 blur-[140px] pointer-events-none rounded-full"},null,-1)),C("div",vD,[C("div",{class:"lg:col-span-7 transition-all duration-100 ease-out",style:mn({opacity:ce(r).toFixed(2),transform:ce(s)})},[l[7]||(l[7]=Xu('<div class="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/60 border border-cyan-500/30 rounded-full font-mono text-xs text-neon-blue mb-6"><span class="w-2 h-2 rounded-full bg-neon-blue animate-ping"></span><span>CYBERNETICS // MOHAMMAD AL FURQON</span></div><h1 class="text-4xl sm:text-6xl md:text-7xl font-black font-rajdhani text-white uppercase tracking-tight leading-[0.92] mb-6"><span class="text-slate-400 block text-2xl sm:text-3xl font-light mb-1"> SOFTWARE ENGINEER &amp; </span><span class="text-gradient block"> MACHINE LEARNING </span><span class="text-white block text-3xl sm:text-5xl md:text-6xl font-bold"> RESEARCHER </span></h1><p class="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed mb-8"> Architecting high-performance web systems and deep learning models. International engineering background spanning <span class="text-neon-blue font-semibold">Japan</span>, <span class="text-neon-blue font-semibold">Taiwan</span>, and enterprise HR tech. </p>',3)),C("div",xD,[C("a",{href:"/Mohammad_Al_Furqon_CV.pdf",download:"Mohammad_Al_Furqon_CV.pdf",class:"hud-btn hud-btn-primary text-sm py-3 px-6 cursor-pointer group flex items-center gap-2",onClick:l[0]||(l[0]=c=>ce(e).playLockOn())},[$e(ce(ST),{size:16}),l[2]||(l[2]=C("span",null,"DOWNLOAD CV / RESUME",-1))]),C("button",{type:"button",class:"hud-btn text-sm py-3 px-6 cursor-pointer",onClick:l[1]||(l[1]=c=>o("#contact"))},[$e(ce(dy),{size:14}),l[3]||(l[3]=C("span",null,"TRANSMIT INQUIRY",-1))])]),C("div",yD,[C("div",bD,[C("p",SD,Pe(ce(Rp)[0].gpa.split("/")[0].trim()),1),l[4]||(l[4]=C("p",{class:"text-[10px] font-mono text-slate-400 uppercase"},"Informatics GPA",-1))]),C("div",MD,[C("p",ED,Pe(ce(Us).length),1),l[5]||(l[5]=C("p",{class:"text-[10px] font-mono text-slate-400 uppercase"},"Career Roles",-1))]),l[6]||(l[6]=C("div",{class:"p-3 bg-slate-900/50 border border-cyan-500/15 rounded"},[C("p",{class:"text-2xl sm:text-3xl font-mono font-black text-neon-blue"}," 2 "),C("p",{class:"text-[10px] font-mono text-slate-400 uppercase"},"Publications")],-1))])],4),C("div",{class:"lg:col-span-5 relative flex items-center justify-center pointer-events-none transition-all duration-100 ease-out",style:mn({opacity:ce(r).toFixed(2)})},[...l[8]||(l[8]=[Xu('<div class="artifact-frame w-full max-w-[420px] aspect-square relative flex items-center justify-center"><div class="absolute inset-0 rounded-full border border-cyan-500/25 animate-spin" style="animation-duration:35s;"></div><div class="absolute inset-4 rounded-full border border-dashed border-cyan-500/20 animate-spin" style="animation-duration:25s;animation-direction:reverse;"></div><div class="absolute inset-12 rounded-full border border-cyan-500/15"></div><div class="absolute bottom-2 right-2 px-2.5 py-1 bg-abyss/85 border border-cyan-500/30 rounded font-mono text-[10px] text-neon-blue backdrop-blur-sm"> GYRO_CORE // 3D_ACTIVE </div></div>',1)])],4)])],512))}}),wD={class:"lg:col-span-7 space-y-6"},AD={class:"flex items-center gap-2 font-mono text-xs text-neon-blue mb-1"},CD={class:"cyber-card p-6 border-cyan-500/30 bg-slate-950/70 backdrop-blur-md"},RD={class:"flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-4"},PD={class:"flex items-center gap-2 font-mono text-xs text-neon-blue font-bold"},DD={class:"grid grid-cols-3 gap-3 pt-3 border-t border-cyan-500/20 font-mono text-xs"},LD={class:"flex items-center justify-between text-[11px]"},ID={class:"text-slate-300"},ND={class:"text-neon-blue font-bold"},UD={class:"w-full h-1 bg-slate-900 rounded-full overflow-hidden border border-cyan-500/20"},OD={class:"grid grid-cols-1 md:grid-cols-3 gap-3"},FD={class:"flex items-center justify-between mb-2"},kD={class:"w-8 h-8 rounded bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform"},BD={class:"text-[10px] font-mono text-cyan-400 font-bold"},zD={class:"text-sm font-bold font-rajdhani text-white group-hover:text-neon-blue transition-colors leading-tight mb-1"},HD={class:"text-[11px] font-mono text-slate-400 leading-tight"},VD={class:"lg:col-span-5 relative flex items-center justify-center pointer-events-none"},GD={class:"artifact-frame w-full max-w-[420px] aspect-square relative flex items-center justify-center"},WD={class:"absolute bottom-3 left-3 px-2.5 py-1 bg-abyss/85 border border-cyan-500/30 rounded font-mono text-[10px] text-cyan-300 backdrop-blur-sm flex items-center gap-1.5"},XD=ki({__name:"CyberAboutSection",setup(n){Ui.registerPlugin(rt);const e=dt(null);let t=null;const{opacity:i,transform:r}=mc(1);ri(async()=>{await dr(),e.value&&(t=rt.create({id:"journey-about",trigger:e.value,start:"top top",end:"+=1400",pin:!0,anticipatePin:1,scrub:1}))}),pr(()=>{t&&(t.kill(),t=null)});const s=[{title:"Enterprise Architecture & Database Normalization",subtitle:"Meiwa Industry Japan & Paragon Tech",desc:"Database optimization, inventory subsystems, and HR technology refactoring.",icon:Mm},{title:"Machine Learning & Radiographic AI",subtitle:"DenseNet-LSTM & Bangkit Academy",desc:"Deep learning dual-view chest X-ray medical imaging report synthesis.",icon:ly},{title:"Cybersecurity Operations & VANS Audits",subtitle:"Rapixus Taiwan & ISHC-RG",desc:"Common Platform Enumeration (CPE), CVSS patch monitoring, and book authoring.",icon:py}];return(o,a)=>(Ue(),Ze("section",{ref_key:"sectionRef",ref:e,id:"about",class:"relative w-full h-screen flex items-center justify-center bg-transparent overflow-hidden px-4 sm:px-8 md:px-16 select-none"},[C("div",{class:"max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-100 ease-out",style:mn({opacity:ce(i).toFixed(2),transform:ce(r)})},[C("div",wD,[C("div",null,[C("div",AD,[$e(ce(Vs),{size:14}),a[0]||(a[0]=C("span",{class:"tracking-widest uppercase"},"01 // OPERATOR DOSSIER",-1))]),a[1]||(a[1]=C("h2",{class:"text-3xl sm:text-5xl font-bold font-rajdhani text-white uppercase leading-none"},[ur(" OPERATOR "),C("span",{class:"text-gradient"},"SPECIFICATIONS")],-1))]),C("div",CD,[C("div",RD,[C("div",PD,[$e(ce(my),{size:15}),a[2]||(a[2]=C("span",null,"IDENTITY // MOHAMMAD AL FURQON",-1))]),a[3]||(a[3]=C("span",{class:"telemetry-tag text-[10px]"},"VERIFIED_OPERATOR",-1))]),a[4]||(a[4]=C("p",{class:"text-sm text-slate-300 leading-relaxed font-sans mb-4"},[ur(" Fullstack Software Engineer & Machine Learning Specialist. Informatics graduate from "),C("strong",{class:"text-white"},"Universitas Sebelas Maret (GPA 3.77 / 4.00)"),ur(" with international engineering background spanning Japanese automotive manufacturing, cybersecurity vulnerability analysis in Taiwan, and enterprise HR tech. ")],-1)),C("div",DD,[(Ue(!0),Ze(Rt,null,an(ce(Pp),l=>(Ue(),Ze("div",{key:l.name,class:"space-y-1"},[C("div",LD,[C("span",ID,Pe(l.name),1),C("span",ND,Pe(l.percentage)+"%",1)]),C("div",UD,[C("div",{class:"h-full bg-neon-blue rounded-full shadow-[0_0_6px_#00f3ff]",style:mn({width:`${l.percentage}%`})},null,4)])]))),128))])]),C("div",OD,[(Ue(),Ze(Rt,null,an(s,(l,c)=>C("div",{key:c,class:"cyber-card p-4 border-slate-800/80 hover:border-neon-blue/60 transition-all duration-300 bg-slate-950/60 backdrop-blur-sm group"},[C("div",FD,[C("div",kD,[(Ue(),Qn($l(l.icon),{size:16}))]),C("span",BD,"0"+Pe(c+1),1)]),C("h4",zD,Pe(l.title),1),C("p",HD," // "+Pe(l.subtitle),1)])),64))])]),C("div",VD,[C("div",GD,[a[6]||(a[6]=Xu('<div class="absolute inset-0 rounded-full border border-cyan-500/25 animate-spin" style="animation-duration:25s;"></div><div class="absolute inset-4 rounded-full border border-dashed border-cyan-500/20 animate-spin" style="animation-duration:18s;animation-direction:reverse;"></div><div class="absolute inset-10 rounded-full border border-cyan-500/15"></div><div class="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-neon-blue/60"></div><div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-neon-blue/60"></div><div class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-neon-blue/60"></div><div class="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-neon-blue/60"></div><div class="absolute top-3 right-3 px-2.5 py-1 bg-abyss/85 border border-cyan-500/30 rounded font-mono text-[10px] text-neon-blue backdrop-blur-sm flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span><span>NEURAL_SYNC_100%</span></div>',8)),C("div",WD,[$e(ce(pT),{size:12,class:"text-neon-blue"}),a[5]||(a[5]=C("span",null,"BIO_CORE // 0.42_THz",-1))])])])],4)],512))}}),$D={class:"flex items-center gap-2 font-mono text-xs text-neon-blue mb-1"},YD={class:"flex items-center gap-3"},qD={class:"telemetry-tag"},jD={class:"relative w-full max-w-4xl h-[380px] flex items-center justify-center",style:{"transform-style":"preserve-3d"}},KD=["onClick"],ZD={class:"flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-3"},JD={class:"telemetry-tag text-[10px]"},QD={class:"text-xs font-mono text-neon-blue font-bold"},e3={class:"text-xl font-bold font-rajdhani text-white mb-0.5"},t3={class:"text-sm font-mono text-cyan-400 mb-3"},n3={class:"text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4 font-sans"},i3={class:"flex items-center justify-between pt-3 border-t border-cyan-500/20"},r3={class:"flex items-center gap-1.5 flex-wrap"},s3=["onClick"],o3={class:"cyber-card w-full max-w-2xl p-6 md:p-8 animate-fade-in border-neon-blue shadow-[0_0_45px_rgba(0,243,255,0.35)] max-h-[85vh] overflow-y-auto"},a3={class:"flex items-center justify-between border-b border-cyan-500/30 pb-3 mb-4"},l3={class:"flex items-center gap-2 text-neon-blue font-mono text-xs"},c3={class:"text-2xl font-bold font-rajdhani text-white mb-1"},u3={class:"text-sm font-mono text-neon-blue mb-6"},f3={class:"mb-6 space-y-2"},h3={class:"space-y-1.5"},d3={class:"pt-4 border-t border-cyan-500/20 flex items-center justify-between"},p3={class:"flex flex-wrap gap-2"},m3=ki({__name:"CylinderExperienceSection",setup(n){Ui.registerPlugin(rt);const e=Va(),t=us(),i=dt(null),r=dt(null),s=dt(620),o=dt(0),a=dt(0),l=Us.length,c=2*Math.PI/l;let u=null;function f(){if(typeof window>"u")return;const p=window.innerWidth;p<640?s.value=380:p<1024?s.value=500:s.value=620}const{opacity:h,scale:d}=mc(2);function _(p){const S=p*c+o.value,b=Math.sin(S),v=Math.cos(S),w=s.value*b,R=s.value*(v-1),T=-(S*180)/Math.PI,P=(v+1)/2,y=v>.55,x=Math.max(.08,Math.pow(P,1.8)),N=.82+.22*Math.max(0,v),L=Math.round(P*100);return{transform:`translate3d(${w.toFixed(2)}px, 0px, ${R.toFixed(2)}px) rotateY(${T.toFixed(2)}deg) scale(${N.toFixed(3)})`,opacity:x,zIndex:L,isFront:y}}ri(async()=>{if(f(),window.addEventListener("resize",f,{passive:!0}),await dr(),i.value){const p=(l-1)*c;u=rt.create({id:"journey-experience",trigger:i.value,start:"top top",end:"+=2400",pin:!0,anticipatePin:1,scrub:1.2,onUpdate:S=>{const b=Sm(2,S.progress);o.value=-b*p,t.carouselRotation=o.value;const v=Math.min(l-1,Math.round(b*(l-1)));v!==a.value&&(a.value=v,t.activeNodeIndex=v,e.playTick())}})}}),pr(()=>{window.removeEventListener("resize",f),u&&(u.kill(),u=null)});function g(p,S){if(a.value===p)e.playLockOn(),r.value=S;else if(u&&i.value){e.playTick();const b=p/(l-1),v=u.start+b*(u.end-u.start);window.scrollTo({top:v,behavior:"smooth"})}}function m(){r.value=null}return(p,S)=>(Ue(),Ze("div",{ref_key:"sectionRef",ref:i,id:"experience",class:"relative w-full h-screen overflow-hidden bg-transparent flex flex-col justify-between select-none"},[C("div",{class:"relative z-20 pt-20 px-6 md:px-16 max-w-6xl mx-auto w-full flex items-center justify-between pointer-events-none transition-opacity duration-150",style:mn({opacity:ce(h).toFixed(2)})},[C("div",null,[C("div",$D,[$e(ce(Vs),{size:14}),S[0]||(S[0]=C("span",{class:"tracking-widest uppercase"},"02 // WORK EXPERIENCE",-1))]),S[1]||(S[1]=C("h2",{class:"text-2xl sm:text-4xl md:text-5xl font-bold font-rajdhani text-white uppercase leading-none"},[ur(" CAREER TRAJECTORY & "),C("span",{class:"text-gradient"},"IMPACT")],-1))]),C("div",YD,[C("div",qD,[$e(ce(uy),{size:12}),C("span",null,"ROLE "+Pe(a.value+1)+" / "+Pe(ce(Us).length),1)])])],4),C("div",{class:"relative z-10 w-full flex-1 flex items-center justify-center overflow-visible transition-transform duration-100 ease-out",style:mn({perspective:"1200px",transformStyle:"preserve-3d",transform:`scale(${ce(d).toFixed(3)})`,opacity:ce(h).toFixed(2)})},[C("div",jD,[(Ue(!0),Ze(Rt,null,an(ce(Us),(b,v)=>(Ue(),Ze("article",{key:b.company+v,class:Fo(["absolute w-[310px] sm:w-[360px] md:w-[400px] p-6 cyber-card cursor-pointer transition-[box-shadow,border-color] duration-300 backdrop-blur-sm",[a.value===v?"border-neon-blue shadow-[0_0_35px_rgba(0,243,255,0.5)]":"border-slate-800/80 hover:border-cyan-500/50"]]),style:mn({transform:_(v).transform,opacity:_(v).opacity,zIndex:_(v).zIndex,pointerEvents:_(v).isFront?"auto":"none"}),onClick:w=>g(v,b)},[C("div",ZD,[C("span",JD," NODE_"+Pe(String(v+1).padStart(2,"0")),1),C("span",QD,Pe(b.period),1)]),C("h3",e3,Pe(b.role),1),C("p",t3," @ "+Pe(b.company),1),C("p",n3,Pe(b.highlights[0]),1),C("div",i3,[C("div",r3,[(Ue(!0),Ze(Rt,null,an((b.tags||[]).slice(0,2),w=>(Ue(),Ze("span",{key:w,class:"px-2 py-0.5 text-[10px] font-mono bg-cyan-950/80 text-neon-blue border border-cyan-500/30 rounded"},Pe(w),1))),128))]),C("button",{type:"button",class:"text-xs font-mono text-neon-blue flex items-center gap-1 hover:underline cursor-pointer",onClick:ju(w=>g(v,b),["stop"])},[$e(ce(AT),{size:12}),S[2]||(S[2]=C("span",null,"INSPECT",-1))],8,s3)])],14,KD))),128))])],4),C("div",{class:"relative z-20 pb-8 px-6 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-150",style:mn({opacity:ce(h).toFixed(2)})},[...S[3]||(S[3]=[C("div",{class:"flex items-center gap-2 text-xs font-mono text-slate-400 bg-abyss/85 px-4 py-1 border border-cyan-500/20 rounded-full backdrop-blur-sm"},[C("span",{class:"w-1.5 h-1.5 rounded-full bg-neon-blue animate-ping"}),C("span",null,"SCROLL TO EXPLORE TRAJECTORY")],-1)])],4),$e(Lv,{name:"fade"},{default:Gp(()=>[r.value?(Ue(),Ze("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-abyss/85 backdrop-blur-md",onClick:ju(m,["self"])},[C("div",o3,[C("div",a3,[C("div",l3,[$e(ce(Vs),{size:14}),C("span",null,"ROLE_INSPECTOR // "+Pe(r.value.company),1)]),C("button",{type:"button",class:"text-slate-400 hover:text-white p-1 rounded transition-colors cursor-pointer",onClick:m},[$e(ce(FT),{size:18})])]),C("h3",c3,Pe(r.value.role),1),C("p",u3,Pe(r.value.company)+" ("+Pe(r.value.period)+") ",1),C("div",f3,[S[5]||(S[5]=C("h4",{class:"text-xs font-mono text-neon-blue uppercase tracking-wider"}," KEY DELIVERABLES: ",-1)),C("ul",h3,[(Ue(!0),Ze(Rt,null,an(r.value.highlights,(b,v)=>(Ue(),Ze("li",{key:v,class:"text-xs text-slate-300 flex items-start gap-2 font-sans"},[S[4]||(S[4]=C("span",{class:"text-neon-blue font-mono font-bold mt-0.5"},"›",-1)),C("span",null,Pe(b),1)]))),128))])]),C("div",d3,[C("div",p3,[(Ue(!0),Ze(Rt,null,an(r.value.tags||[],b=>(Ue(),Ze("span",{key:b,class:"px-2 py-0.5 text-xs font-mono bg-cyan-950/80 text-neon-blue border border-cyan-500/30 rounded"}," #"+Pe(b),1))),128))]),C("button",{type:"button",class:"hud-btn text-xs py-1.5 px-4 cursor-pointer",onClick:m}," CLOSE ")])])])):Fs("",!0)]),_:1})],512))}}),_3={class:"flex items-center gap-2 font-mono text-xs text-neon-blue mb-1"},g3={class:"hidden sm:flex items-center gap-2 telemetry-tag"},v3={class:"lg:col-span-5 flex items-center justify-center relative pointer-events-none"},x3={class:"artifact-frame w-full max-w-[360px] aspect-square relative flex items-center justify-center"},y3={class:"absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-abyss/90 border border-cyan-500/30 rounded font-mono text-xs text-neon-blue whitespace-nowrap backdrop-blur-sm"},b3={class:"lg:col-span-7 space-y-5"},S3={class:"flex flex-wrap gap-2"},M3=["onClick"],E3={class:"cyber-card p-6 sm:p-8 border-neon-blue shadow-[0_0_35px_rgba(0,243,255,0.25)] laser-scan-container backdrop-blur-sm"},T3={class:"flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-6"},w3={class:"text-xs font-mono text-neon-blue uppercase tracking-wider block mb-0.5"},A3={class:"text-2xl sm:text-3xl font-bold font-rajdhani text-white"},C3={class:"w-10 h-10 rounded bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-neon-blue"},R3={class:"grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6"},P3={class:"font-sans font-medium text-sm text-slate-200 group-hover:text-neon-blue transition-colors"},D3={class:"pt-3 border-t border-cyan-500/15 flex items-center justify-between text-xs font-mono text-slate-400"},L3={class:"flex items-center gap-1.5 text-neon-blue"},I3=ki({__name:"CyberSkillsSection",setup(n){Ui.registerPlugin(rt);const e=Va(),t=us(),i=dt(null),r=dt(0);let s=null;const o={Frontend:PT,Backend:DT,Database:bT,"DevOps & Tools":Mm,"AI & ML":ly,Security:py},a=An(()=>bs[r.value]||bs[0]),{opacity:l,scale:c}=mc(3);ri(async()=>{await dr(),i.value&&(s=rt.create({id:"journey-skills",trigger:i.value,start:"top top",end:"+=1800",pin:!0,anticipatePin:1,scrub:1.2,onUpdate:f=>{const h=Sm(3,f.progress),d=Math.min(bs.length-1,Math.floor(h*bs.length));d!==r.value&&(r.value=d,t.activeSkillIndex=d,e.playTick())}}))}),pr(()=>{s&&(s.kill(),s=null)});function u(f){if(s&&i.value){e.playLockOn();const h=f/(bs.length-1),d=s.start+h*(s.end-s.start);window.scrollTo({top:d,behavior:"smooth"})}else r.value=f,t.activeSkillIndex=f}return(f,h)=>(Ue(),Ze("div",{ref_key:"sectionRef",ref:i,id:"skills",class:"relative w-full h-screen overflow-hidden bg-transparent flex flex-col justify-between select-none px-4 sm:px-8 md:px-16 border-t border-cyan-500/15"},[C("div",{class:"relative z-20 pt-20 max-w-6xl mx-auto w-full flex items-center justify-between pointer-events-none transition-opacity duration-150",style:mn({opacity:ce(l).toFixed(2)})},[C("div",null,[C("div",_3,[$e(ce(Vs),{size:14}),h[0]||(h[0]=C("span",{class:"tracking-widest uppercase"},"03 // TECHNICAL ARSENAL",-1))]),h[1]||(h[1]=C("h2",{class:"text-2xl sm:text-4xl md:text-5xl font-bold font-rajdhani text-white uppercase leading-none"},[ur(" CIRCUIT MATRIX & "),C("span",{class:"text-gradient"},"CAPABILITIES")],-1))]),C("div",g3,[$e(ce(hy),{size:12,class:"animate-pulse"}),C("span",null,"SATELLITE 0"+Pe(r.value+1)+" / 0"+Pe(ce(bs).length),1)])],4),C("div",{class:"relative z-10 max-w-6xl mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-transform duration-100 ease-out",style:mn({transform:`scale(${ce(c).toFixed(3)})`,opacity:ce(l).toFixed(2)})},[C("div",v3,[C("div",x3,[h[2]||(h[2]=C("div",{class:"w-64 h-64 rounded-full border border-cyan-500/20 animate-spin",style:{"animation-duration":"30s"}},null,-1)),h[3]||(h[3]=C("div",{class:"w-72 h-72 rounded-full border border-dashed border-cyan-500/15 animate-spin",style:{"animation-duration":"20s","animation-direction":"reverse"}},null,-1)),C("div",y3," LOCKED // "+Pe(a.value.name.toUpperCase()),1)])]),C("div",b3,[C("div",S3,[(Ue(!0),Ze(Rt,null,an(ce(bs),(d,_)=>(Ue(),Ze("button",{key:d.name,type:"button",class:Fo(["font-mono text-xs px-3 py-1.5 rounded transition-all duration-200 border cursor-pointer flex items-center gap-1.5 backdrop-blur-sm",[r.value===_?"bg-neon-blue/20 text-neon-blue border-neon-blue shadow-[0_0_12px_rgba(0,243,255,0.4)] font-bold":"bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:border-cyan-500/40"]]),onClick:g=>u(_)},[(Ue(),Qn($l(o[d.name]||ce(zd)),{size:12})),C("span",null,Pe(d.name),1)],10,M3))),128))]),C("div",E3,[C("div",T3,[C("div",null,[C("span",w3," // ACTIVE ARSENAL NODE 0"+Pe(r.value+1),1),C("h3",A3,Pe(a.value.name),1)]),C("div",C3,[(Ue(),Qn($l(o[a.value.name]||ce(zd)),{size:20}))])]),C("div",R3,[(Ue(!0),Ze(Rt,null,an(a.value.items,d=>(Ue(),Ze("div",{key:d,class:"p-3 bg-slate-950/60 border border-cyan-500/20 rounded hover:border-neon-blue hover:bg-cyan-950/30 transition-all duration-200 group flex items-center"},[C("span",P3,Pe(d),1)]))),128))]),C("div",D3,[C("span",L3,[$e(ce(kT),{size:14}),h[4]||(h[4]=C("span",null,"ENTERPRISE PRODUCTION DEPLOYED",-1))]),h[5]||(h[5]=C("span",null,"OK_200",-1))])])])],4),C("div",{class:"relative z-20 pb-8 px-6 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-150",style:mn({opacity:ce(l).toFixed(2)})},[...h[6]||(h[6]=[C("div",{class:"flex items-center gap-2 text-xs font-mono text-slate-400 bg-abyss/85 px-4 py-1 border border-cyan-500/20 rounded-full backdrop-blur-sm"},[C("span",{class:"w-1.5 h-1.5 rounded-full bg-neon-blue animate-ping"}),C("span",null,"SCROLL TO EXPLORE ARSENAL")],-1)])],4)],512))}}),N3={class:"flex items-center gap-2 font-mono text-xs text-neon-blue mb-1"},U3={class:"hidden sm:flex items-center gap-2 telemetry-tag"},O3={class:"lg:col-span-7"},F3={class:"cyber-card p-6 sm:p-8 border-neon-blue shadow-[0_0_35px_rgba(0,243,255,0.25)] laser-scan-container transition-all duration-300 backdrop-blur-sm"},k3={class:"flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-4 font-mono text-xs"},B3={class:"flex items-center gap-2 text-neon-blue font-bold"},z3={class:"telemetry-tag text-[10px]"},H3={class:"text-xl sm:text-2xl font-bold font-rajdhani text-white mb-1 leading-snug"},V3={class:"text-xs font-mono text-cyan-400 mb-5"},G3={class:"space-y-2 mb-6"},W3={class:"pt-4 border-t border-cyan-500/15 flex items-center justify-between"},X3={class:"flex flex-wrap gap-2"},$3=ki({__name:"CyberResearchSection",setup(n){Ui.registerPlugin(rt);const e=Va(),t=us(),i=dt(null),r=dt(0);let s=null;const{opacity:o,scale:a}=mc(4),l=[{type:"PUBLISHED BOOK",title:"Strategi Membangun Portal Website Aman Dari Serangan Judi Online",institution:"ISHC-RG, FATISDA UNS",period:"2023 — Published Work",highlights:["Comprehensive defense architecture against automated web attacks and exploit scripts.","Published with Intelligent System & Humanized Computing Research Group."],icon:LT,tags:["Cybersecurity","Web Defense","Book"],badge:"ARCHIVE_01"},{type:"UNDERGRADUATE THESIS",title:"Dual-View Radiographic Captioning using DenseNet-LSTM",institution:"Universitas Sebelas Maret",period:"2024 — 2026",highlights:["Deep learning multi-view chest X-ray medical diagnostic radiology report generation.","Combined DenseNet feature extraction with LSTM natural language sequence generation."],icon:gT,tags:["Deep Learning","Computer Vision","Medical AI"],badge:"ARCHIVE_02"}];return ri(async()=>{await dr(),i.value&&(s=rt.create({id:"journey-research",trigger:i.value,start:"top top",end:"+=1400",pin:!0,anticipatePin:1,scrub:1.2,onUpdate:c=>{const f=Sm(4,c.progress)>.5?1:0;f!==r.value&&(r.value=f,t.activeResearchIndex=f,e.playTick())}}))}),pr(()=>{s&&(s.kill(),s=null)}),(c,u)=>(Ue(),Ze("div",{ref_key:"sectionRef",ref:i,id:"research",class:"relative w-full h-screen overflow-hidden bg-transparent flex flex-col justify-between select-none px-4 sm:px-8 md:px-16 border-t border-cyan-500/15"},[C("div",{class:"relative z-20 pt-20 max-w-6xl mx-auto w-full flex items-center justify-between pointer-events-none transition-opacity duration-150",style:mn({opacity:ce(o).toFixed(2)})},[C("div",null,[C("div",N3,[$e(ce(Vs),{size:14}),u[0]||(u[0]=C("span",{class:"tracking-widest uppercase"},"04 // RESEARCH & PUBLICATIONS",-1))]),u[1]||(u[1]=C("h2",{class:"text-2xl sm:text-4xl md:text-5xl font-bold font-rajdhani text-white uppercase leading-none"},[ur(" ACADEMIC SCHEMATICS & "),C("span",{class:"text-gradient"},"PUBLICATIONS")],-1))]),C("div",U3,[$e(ce(ET),{size:12}),C("span",null,"ARCHIVE 0"+Pe(r.value+1)+" / 02",1)])],4),C("div",{class:"relative z-10 max-w-6xl mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-transform duration-100 ease-out",style:mn({transform:`scale(${ce(a).toFixed(3)})`,opacity:ce(o).toFixed(2)})},[u[4]||(u[4]=Xu('<div class="lg:col-span-5 flex items-center justify-center relative pointer-events-none"><div class="artifact-frame w-full max-w-[340px] aspect-square relative flex items-center justify-center"><div class="w-56 h-56 rounded-lg border border-cyan-500/25 animate-spin" style="animation-duration:25s;"></div><div class="w-64 h-64 rounded-full border border-dashed border-cyan-500/15 animate-spin" style="animation-duration:35s;animation-direction:reverse;"></div><div class="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-abyss/90 border border-cyan-500/30 rounded font-mono text-xs text-neon-blue whitespace-nowrap backdrop-blur-sm"> SCHEMATIC // 3D_ROTATING </div></div></div>',1)),C("div",O3,[C("article",F3,[C("div",k3,[C("div",B3,[(Ue(),Qn($l(l[r.value].icon),{size:16})),C("span",null,Pe(l[r.value].badge),1)]),C("span",z3,Pe(l[r.value].type),1)]),C("h3",H3,Pe(l[r.value].title),1),C("p",V3,Pe(l[r.value].institution)+" • "+Pe(l[r.value].period),1),C("div",G3,[(Ue(!0),Ze(Rt,null,an(l[r.value].highlights,(f,h)=>(Ue(),Ze("div",{key:h,class:"flex items-start gap-2 text-xs sm:text-sm text-slate-300 font-sans"},[u[2]||(u[2]=C("span",{class:"text-neon-blue font-mono font-bold mt-0.5"},"›",-1)),C("span",null,Pe(f),1)]))),128))]),C("div",W3,[C("div",X3,[(Ue(!0),Ze(Rt,null,an(l[r.value].tags,f=>(Ue(),Ze("span",{key:f,class:"text-[11px] font-mono px-2.5 py-0.5 bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 rounded"}," #"+Pe(f),1))),128))]),u[3]||(u[3]=C("span",{class:"text-[10px] font-mono text-slate-400"},"STATUS: VERIFIED",-1))])])])],4),C("div",{class:"relative z-20 pb-8 px-6 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-150",style:mn({opacity:ce(o).toFixed(2)})},[...u[5]||(u[5]=[C("div",{class:"flex items-center gap-2 text-xs font-mono text-slate-400 bg-abyss/85 px-4 py-1 border border-cyan-500/20 rounded-full backdrop-blur-sm"},[C("span",{class:"w-1.5 h-1.5 rounded-full bg-neon-blue animate-ping"}),C("span",null,"SCROLL TO EXPLORE ARCHIVES")],-1)])],4)],512))}}),Y3={class:"flex items-center gap-2 font-mono text-xs text-neon-blue mb-1"},q3={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},j3={class:"flex items-center justify-between border-b border-cyan-500/15 pb-3 mb-3"},K3={class:"flex items-center gap-2"},Z3={class:"font-mono text-xs text-neon-blue font-bold"},J3={class:"telemetry-tag text-[10px]"},Q3={class:"text-xl font-bold font-rajdhani text-white mb-1"},eL={class:"text-xs font-mono text-neon-blue mb-3"},tL={class:"text-sm text-slate-300 leading-relaxed font-sans mb-4"},nL=ki({__name:"CyberOrgsSection",setup(n){Ui.registerPlugin(rt);const e=dt(null),t=dt(0);let i=null;const r=An(()=>{const o=t.value;return o<.15?1.25-.25*(o/.15):1}),s=An(()=>{const o=t.value;return o<.1?Math.max(.2,o/.1):1});return ri(async()=>{await dr(),e.value&&(i=rt.create({id:"journey-orgs",trigger:e.value,start:"top 85%",end:"bottom top",scrub:1,onUpdate:o=>{t.value=o.progress}}))}),pr(()=>{i&&(i.kill(),i=null)}),(o,a)=>(Ue(),Ze("section",{ref_key:"sectionRef",ref:e,id:"community",class:"relative py-24 px-4 sm:px-8 md:px-16 bg-transparent border-t border-cyan-500/15 overflow-hidden"},[C("div",{class:"max-w-6xl mx-auto transition-transform duration-100 ease-out",style:mn({transform:`scale(${r.value.toFixed(3)})`,opacity:s.value.toFixed(2)})},[C("div",Y3,[$e(ce(Vs),{size:14}),a[0]||(a[0]=C("span",{class:"tracking-widest uppercase"},"05 // COMMUNITY & LEADERSHIP",-1))]),a[1]||(a[1]=C("h2",{class:"text-3xl sm:text-4xl md:text-5xl font-bold font-rajdhani text-white uppercase mb-4"},[ur(" COHORT MISSIONS & "),C("span",{class:"text-gradient"},"ORGANIZATIONAL IMPACT")],-1)),a[2]||(a[2]=C("p",{class:"text-slate-400 max-w-2xl text-sm sm:text-base mb-12 font-sans"}," Collaborative leadership, tech curriculum coordination, and Google Bangkit Machine Learning cohort achievements. ",-1)),C("div",q3,[(Ue(!0),Ze(Rt,null,an(ce(qy),(l,c)=>(Ue(),Ze("div",{key:l.name,class:"cyber-card p-6 border-slate-800 hover:border-neon-blue transition-all duration-300 flex flex-col justify-between"},[C("div",null,[C("div",j3,[C("div",K3,[$e(ce(_y),{size:16,class:"text-neon-blue"}),C("span",Z3," MISSION_"+Pe(String(c+1).padStart(2,"0")),1)]),C("span",J3,Pe(l.period),1)]),C("h3",Q3,Pe(l.name),1),C("p",eL," ROLE: "+Pe(l.role),1),C("p",tL,Pe(l.description),1)])]))),128))])],4)],512))}}),iL={id:"contact",class:"relative py-24 px-4 sm:px-8 md:px-16 bg-abyss border-t border-cyan-500/20"},rL={class:"max-w-6xl mx-auto"},sL={class:"flex items-center gap-2 font-mono text-xs text-neon-blue mb-1"},oL={class:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"},aL={class:"lg:col-span-7 cyber-card p-6 sm:p-8 border-cyan-500/40 shadow-[0_0_30px_rgba(0,243,255,0.15)]"},lL={class:"flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-6 font-mono text-xs text-neon-blue"},cL={class:"flex items-center gap-2"},uL={type:"submit",class:"w-full hud-btn hud-btn-primary py-3.5 text-sm cursor-pointer mt-2"},fL={class:"lg:col-span-5 space-y-4"},hL={class:"cyber-card p-6 border-slate-800 hover:border-cyan-500/60 transition-all"},dL={class:"flex items-center justify-between mb-2"},pL={class:"text-base sm:text-lg font-mono text-white font-semibold break-all mb-3"},mL={class:"flex items-center gap-2"},_L=["href"],gL={class:"cyber-card p-6 border-slate-800 hover:border-cyan-500/60 transition-all"},vL={class:"flex items-center justify-between mb-2"},xL={class:"text-base font-mono text-white font-semibold mb-3"},yL=["href"],bL={class:"cyber-card p-6 border-slate-800 hover:border-cyan-500/60 transition-all"},SL={class:"flex items-center justify-between mb-2"},ML={class:"text-base font-mono text-neon-blue font-semibold mb-3"},EL=ki({__name:"CyberContactSection",setup(n){const e=Va(),t=dt(!1),i=dt(""),r=dt("");function s(){e.playKeyBlip(),navigator.clipboard.writeText(wn.email),t.value=!0,setTimeout(()=>{t.value=!1},2500)}function o(){e.playLockOn();const a=encodeURIComponent(i.value||"Project Inquiry / Opportunity"),l=encodeURIComponent(r.value||"Hello Mohammad Al Furqon, I came across your portfolio...");window.location.href=`mailto:${wn.email}?subject=${a}&body=${l}`}return(a,l)=>(Ue(),Ze("section",iL,[C("div",rL,[C("div",sL,[$e(ce(hy),{size:14,class:"animate-pulse"}),l[2]||(l[2]=C("span",{class:"tracking-widest uppercase"},"06 // SECURE TRANSMISSION CONSOLE",-1))]),l[14]||(l[14]=C("h2",{class:"text-3xl sm:text-4xl md:text-5xl font-bold font-rajdhani text-white uppercase mb-4"},[ur(" INITIATE DIRECT "),C("span",{class:"text-gradient"},"COMMUNICATION")],-1)),l[15]||(l[15]=C("p",{class:"text-slate-400 max-w-2xl text-sm sm:text-base mb-12 font-sans"}," Available for full-time Software Engineering roles, Machine Learning engineering, and technical advisory projects. ",-1)),C("div",oL,[C("div",aL,[C("div",lL,[C("span",cL,[$e(ce(Vs),{size:14}),l[3]||(l[3]=C("span",null,"DISPATCH_TERMINAL // ENCRYPTED",-1))]),l[4]||(l[4]=C("span",{class:"text-emerald-400"},"CHANNEL: OPEN",-1))]),C("form",{onSubmit:ju(o,["prevent"]),class:"space-y-4 font-mono text-xs"},[C("div",null,[l[5]||(l[5]=C("label",{class:"block text-slate-400 uppercase mb-1.5 tracking-wider"}," // TRANSMISSION_SUBJECT ",-1)),Vm(C("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>i.value=c),type:"text",placeholder:"e.g. Fullstack Software Engineer Position / Research Collaboration",class:"w-full px-4 py-3 bg-slate-950/80 border border-cyan-500/30 rounded text-slate-200 focus:border-neon-blue focus:shadow-[0_0_12px_rgba(0,243,255,0.4)] outline-none transition-all"},null,512),[[y_,i.value]])]),C("div",null,[l[6]||(l[6]=C("label",{class:"block text-slate-400 uppercase mb-1.5 tracking-wider"}," // PACKET_PAYLOAD (MESSAGE) ",-1)),Vm(C("textarea",{"onUpdate:modelValue":l[1]||(l[1]=c=>r.value=c),rows:"4",placeholder:"Compose your transmission...",class:"w-full px-4 py-3 bg-slate-950/80 border border-cyan-500/30 rounded text-slate-200 focus:border-neon-blue focus:shadow-[0_0_12px_rgba(0,243,255,0.4)] outline-none transition-all resize-none"},null,512),[[y_,r.value]])]),C("button",uL,[$e(ce(dy),{size:16}),l[7]||(l[7]=C("span",null,"TRANSMIT PACKET TO OPERATOR",-1))])],32)]),C("div",fL,[C("div",hL,[C("div",dL,[l[8]||(l[8]=C("span",{class:"text-xs font-mono text-slate-400 uppercase"},"DIRECT EMAIL",-1)),$e(ce(uf),{size:16,class:"text-neon-blue"})]),C("p",pL,Pe(ce(wn).email),1),C("div",mL,[C("button",{type:"button",class:"hud-btn text-xs py-1 px-3 cursor-pointer",onClick:s},[t.value?(Ue(),Qn(ce(xT),{key:0,size:12,class:"text-emerald-400"})):(Ue(),Qn(ce(yT),{key:1,size:12})),C("span",null,Pe(t.value?"COPIED TO CLIPBOARD":"COPY ADDRESS"),1)]),C("a",{href:"mailto:"+ce(wn).email,class:"hud-btn hud-btn-primary text-xs py-1 px-3"},[$e(ce(cf),{size:12}),l[9]||(l[9]=C("span",null,"OPEN CLIENT",-1))],8,_L)])]),C("div",gL,[C("div",vL,[l[10]||(l[10]=C("span",{class:"text-xs font-mono text-slate-400 uppercase"},"PROFESSIONAL NETWORK",-1)),$e(ce(fy),{size:16,class:"text-neon-blue"})]),C("p",xL,Pe(ce(wn).linkedin),1),C("a",{href:"https://"+ce(wn).linkedin,target:"_blank",class:"hud-btn text-xs py-1 px-3 inline-flex items-center gap-1.5"},[l[11]||(l[11]=C("span",null,"CONNECT ON LINKEDIN",-1)),$e(ce(cf),{size:12})],8,yL)]),C("div",bL,[C("div",SL,[l[12]||(l[12]=C("span",{class:"text-xs font-mono text-slate-400 uppercase"},"PORTAL DOMAIN",-1)),$e(ce(cy),{size:16,class:"text-neon-blue"})]),C("p",ML,Pe(ce(wn).website),1),l[13]||(l[13]=C("span",{class:"text-xs font-mono text-slate-400"}," Personal Web Space & Portfolio ",-1))])])]),l[16]||(l[16]=C("div",{class:"mt-16 pt-8 border-t border-cyan-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500"},[C("div",null,[C("span",null,"© 2026 MOHAMMAD AL FURQON. ALL SYSTEMS ACTIVE.")]),C("div",{class:"flex items-center gap-4"},[C("span",{class:"text-neon-blue"},"ARCHITECTURE: VUE 3 + THREE.JS + VITE"),C("span",null,"// NO_BACKEND_STATIC")])],-1))])]))}}),TL={class:"min-h-screen bg-abyss text-slate-200 pt-28 pb-20 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto"},wL={class:"cyber-card p-6 md:p-8 mb-10 border-neon-blue/40 shadow-[0_0_30px_rgba(0,243,255,0.15)]"},AL={class:"flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-6 font-mono text-xs text-neon-blue"},CL={class:"flex items-center gap-2"},RL={class:"grid grid-cols-1 lg:grid-cols-3 gap-6 items-center"},PL={class:"lg:col-span-2"},DL={class:"text-3xl sm:text-4xl md:text-5xl font-bold font-rajdhani text-white mb-2 text-gradient"},LL={class:"text-lg text-neon-blue font-mono mb-4"},IL={class:"text-sm text-slate-300 leading-relaxed max-w-2xl"},NL={class:"cyber-card p-4 border-cyan-500/20 bg-slate-950/60 font-mono text-xs space-y-2.5"},UL={class:"flex items-center justify-between"},OL=["href"],FL={class:"flex items-center justify-between"},kL=["href"],BL={class:"flex items-center justify-between"},zL=["href"],HL={class:"grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-cyan-500/20"},VL={class:"p-3 bg-slate-900/50 border border-cyan-500/15 rounded"},GL={class:"text-2xl sm:text-3xl font-black font-mono text-neon-blue"},WL={class:"p-3 bg-slate-900/50 border border-cyan-500/15 rounded"},XL={class:"text-2xl sm:text-3xl font-black font-mono text-neon-blue"},$L={class:"p-3 bg-slate-900/50 border border-cyan-500/15 rounded"},YL={class:"text-2xl sm:text-3xl font-black font-mono text-neon-blue"},qL={class:"p-3 bg-slate-900/50 border border-cyan-500/15 rounded"},jL={class:"text-2xl sm:text-3xl font-black font-mono text-neon-blue"},KL={class:"cyber-card p-6 mb-10"},ZL={class:"flex items-center gap-3 mb-4 border-b border-cyan-500/20 pb-3"},JL={class:"grid grid-cols-1 sm:grid-cols-3 gap-4"},QL={class:"flex items-center justify-between text-xs font-mono mb-1.5"},eI={class:"text-white font-bold"},tI={class:"text-neon-blue"},nI={class:"w-full h-2 bg-slate-800 rounded-full overflow-hidden"},iI={class:"text-[10px] text-slate-400 font-mono mt-1.5 block"},rI={class:"mb-12"},sI={class:"flex items-center gap-3 mb-6"},oI={class:"text-2xl font-bold font-rajdhani text-white uppercase tracking-wider"},aI={class:"space-y-6"},lI={class:"flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-cyan-500/15 pb-3 mb-4"},cI={class:"font-mono text-xs text-neon-blue font-bold tracking-wider mr-2"},uI={class:"inline text-xl font-bold text-white font-rajdhani"},fI={class:"text-sm font-semibold text-cyan-400 font-mono mt-0.5"},hI={class:"telemetry-tag self-start md:self-auto"},dI={class:"space-y-2 text-sm text-slate-300 mb-4"},pI={class:"leading-relaxed"},mI={key:0,class:"flex flex-wrap gap-2 pt-2 border-t border-cyan-500/10"},_I={class:"grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"},gI={class:"cyber-card p-6"},vI={class:"flex items-center gap-3 mb-5 border-b border-cyan-500/20 pb-3"},xI={class:"space-y-5"},yI={class:"flex items-center justify-between mb-1"},bI={class:"text-base font-bold text-white font-rajdhani"},SI={class:"text-xs font-mono text-neon-blue"},MI={class:"text-sm text-slate-300 font-mono"},EI={class:"text-xs text-slate-400 font-mono mt-1"},TI={class:"cyber-card p-6"},wI={class:"flex items-center gap-3 mb-5 border-b border-cyan-500/20 pb-3"},AI={class:"space-y-4"},CI={class:"text-xs font-mono text-neon-blue uppercase tracking-wider mb-2"},RI={class:"flex flex-wrap gap-1.5"},PI={class:"cyber-card p-6 mb-12"},DI={class:"flex items-center gap-3 mb-5 border-b border-cyan-500/20 pb-3"},LI={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},II={class:"flex items-center justify-between mb-1"},NI={class:"text-base font-bold text-white font-rajdhani"},UI={class:"text-xs font-mono text-neon-blue"},OI={class:"text-xs font-mono text-cyan-400 mb-2"},FI={class:"text-sm text-slate-300 leading-relaxed"},kI={class:"cyber-card p-6 mb-12"},BI={class:"flex items-center gap-3 mb-5 border-b border-cyan-500/20 pb-3"},zI={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},HI={class:"text-xs font-mono text-neon-blue mb-1 uppercase tracking-wider"},VI={class:"text-sm text-slate-300 leading-relaxed"},GI={class:"cyber-card p-6 text-center border-neon-blue/30"},WI={class:"flex flex-wrap items-center justify-center gap-4"},XI=["href"],$I=["href"],YI=ki({__name:"TerminalLogView",setup(n){return(e,t)=>(Ue(),Ze("div",TL,[C("div",wL,[C("div",AL,[C("div",CL,[$e(ce(Vs),{size:16}),t[0]||(t[0]=C("span",null,"TERMINAL_LOG // RECRUITER_SYS_v2.0",-1))]),t[1]||(t[1]=C("div",{class:"flex items-center gap-2"},[C("span",{class:"w-2 h-2 rounded-full bg-emerald-400 animate-ping"}),C("span",{class:"text-emerald-400"},"SYS_OPTIMIZED // ZERO_LATENCY")],-1))]),C("div",RL,[C("div",PL,[t[2]||(t[2]=C("span",{class:"telemetry-tag mb-2"},"OPERATOR DOSSIER",-1)),C("h1",DL,Pe(ce(wn).name),1),C("p",LL,Pe(ce(wn).title),1),C("p",IL,Pe(ce(wn).about),1)]),C("div",NL,[C("div",UL,[t[3]||(t[3]=C("span",{class:"text-slate-400"},"DOMAIN:",-1)),C("a",{href:"https://"+ce(wn).website,target:"_blank",class:"text-neon-blue hover:underline flex items-center gap-1"},[ur(Pe(ce(wn).website)+" ",1),$e(ce(cf),{size:10})],8,OL)]),C("div",FL,[t[4]||(t[4]=C("span",{class:"text-slate-400"},"LINKEDIN:",-1)),C("a",{href:"https://"+ce(wn).linkedin,target:"_blank",class:"text-neon-blue hover:underline flex items-center gap-1"},[ur(Pe(ce(wn).linkedin)+" ",1),$e(ce(cf),{size:10})],8,kL)]),C("div",BL,[t[5]||(t[5]=C("span",{class:"text-slate-400"},"EMAIL:",-1)),C("a",{href:"mailto:"+ce(wn).email,class:"text-neon-blue hover:underline"},Pe(ce(wn).email),9,zL)])])]),C("div",HL,[C("div",VL,[C("p",GL,Pe(ce(Rp)[0].gpa.split("/")[0].trim()),1),t[6]||(t[6]=C("p",{class:"text-[10px] font-mono text-slate-400 mt-1 uppercase"}," UNS Informatics GPA ",-1))]),C("div",WL,[C("p",XL,Pe(ce(Us).length),1),t[7]||(t[7]=C("p",{class:"text-[10px] font-mono text-slate-400 mt-1 uppercase"}," Industry & Academic Roles ",-1))]),C("div",$L,[C("p",YL,Pe(ce(g0).length),1),t[8]||(t[8]=C("p",{class:"text-[10px] font-mono text-slate-400 mt-1 uppercase"}," Book & Thesis Publications ",-1))]),C("div",qL,[C("p",jL,Pe(ce(Pp).length),1),t[9]||(t[9]=C("p",{class:"text-[10px] font-mono text-slate-400 mt-1 uppercase"}," Languages Spoken ",-1))])])]),C("section",KL,[C("div",ZL,[$e(ce(cy),{class:"text-neon-blue",size:20}),t[10]||(t[10]=C("h2",{class:"text-xl font-bold font-rajdhani text-white uppercase tracking-wider"}," Linguistic Proficiencies ",-1))]),C("div",JL,[(Ue(!0),Ze(Rt,null,an(ce(Pp),i=>(Ue(),Ze("div",{key:i.name,class:"p-3.5 bg-slate-900/50 border border-cyan-500/15 rounded"},[C("div",QL,[C("span",eI,Pe(i.name),1),C("span",tI,Pe(i.percentage)+"%",1)]),C("div",nI,[C("div",{class:"h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-[0_0_8px_#00f3ff]",style:mn({width:`${i.percentage}%`})},null,4)]),C("span",iI," Level: "+Pe(i.level),1)]))),128))])]),C("section",rI,[C("div",sI,[$e(ce(vT),{class:"text-neon-blue",size:22}),C("h2",oI," Work Experience Log ("+Pe(ce(Us).length)+" NODES) ",1)]),C("div",aI,[(Ue(!0),Ze(Rt,null,an(ce(Us),(i,r)=>{var s;return Ue(),Ze("article",{key:i.company+r,class:"cyber-card p-6 border-slate-800 hover:border-cyan-500/50 transition-all duration-200"},[C("div",lI,[C("div",null,[C("span",cI," [NODE_"+Pe(String(r+1).padStart(2,"0"))+"] ",1),C("h3",uI,Pe(i.role),1),C("p",fI,Pe(i.company),1)]),C("span",hI,Pe(i.period),1)]),C("ul",dI,[(Ue(!0),Ze(Rt,null,an(i.highlights,(o,a)=>(Ue(),Ze("li",{key:a,class:"flex items-start gap-2"},[t[11]||(t[11]=C("span",{class:"text-neon-blue font-mono mt-0.5"},"›",-1)),C("span",pI,Pe(o),1)]))),128))]),(s=i.tags)!=null&&s.length?(Ue(),Ze("div",mI,[(Ue(!0),Ze(Rt,null,an(i.tags,o=>(Ue(),Ze("span",{key:o,class:"text-xs font-mono px-2.5 py-0.5 bg-cyan-950/40 text-cyan-300 border border-cyan-500/20 rounded"}," #"+Pe(o),1))),128))])):Fs("",!0)])}),128))])]),C("div",_I,[C("section",gI,[C("div",vI,[$e(ce(wT),{class:"text-neon-blue",size:20}),t[12]||(t[12]=C("h2",{class:"text-xl font-bold font-rajdhani text-white uppercase"}," Education Record ",-1))]),C("div",xI,[(Ue(!0),Ze(Rt,null,an(ce(Rp),(i,r)=>(Ue(),Ze("div",{key:r,class:"p-4 bg-slate-900/50 border border-cyan-500/15 rounded"},[C("div",yI,[C("h3",bI,Pe(i.institution),1),C("span",SI,Pe(i.period),1)]),C("p",MI,Pe(i.degree),1),C("p",EI,"GPA: "+Pe(i.gpa),1)]))),128))])]),C("section",TI,[C("div",wI,[$e(ce(zd),{class:"text-neon-blue",size:20}),t[13]||(t[13]=C("h2",{class:"text-xl font-bold font-rajdhani text-white uppercase"}," Technical Arsenal ",-1))]),C("div",AI,[(Ue(!0),Ze(Rt,null,an(ce(bs),i=>(Ue(),Ze("div",{key:i.name,class:"p-3 bg-slate-900/40 border border-cyan-500/15 rounded"},[C("h4",CI," // "+Pe(i.name),1),C("div",RI,[(Ue(!0),Ze(Rt,null,an(i.items,r=>(Ue(),Ze("span",{key:r,class:"text-xs font-mono px-2 py-0.5 bg-slate-800 text-slate-200 border border-slate-700 rounded"},Pe(r),1))),128))])]))),128))])])]),C("section",PI,[C("div",DI,[$e(ce(_y),{class:"text-neon-blue",size:20}),t[14]||(t[14]=C("h2",{class:"text-xl font-bold font-rajdhani text-white uppercase"}," Organizations & Leadership Roles ",-1))]),C("div",LI,[(Ue(!0),Ze(Rt,null,an(ce(qy),(i,r)=>(Ue(),Ze("div",{key:r,class:"p-4 bg-slate-900/50 border border-cyan-500/15 rounded"},[C("div",II,[C("h3",NI,Pe(i.name),1),C("span",UI,Pe(i.period),1)]),C("p",OI,Pe(i.role),1),C("p",FI,Pe(i.description),1)]))),128))])]),C("section",kI,[C("div",BI,[$e(ce(mT),{class:"text-neon-blue",size:20}),t[15]||(t[15]=C("h2",{class:"text-xl font-bold font-rajdhani text-white uppercase"}," Research & Publications ",-1))]),C("div",zI,[(Ue(!0),Ze(Rt,null,an(ce(g0),(i,r)=>(Ue(),Ze("div",{key:r,class:"p-4 bg-slate-900/50 border border-cyan-500/20 rounded"},[C("div",HI," ★ "+Pe(i.title),1),C("p",VI,Pe(i.description),1)]))),128))])]),C("footer",GI,[t[18]||(t[18]=C("h3",{class:"text-xl font-bold font-rajdhani text-white mb-2"}," INITIALIZE DIRECT TRANSMISSION ",-1)),t[19]||(t[19]=C("p",{class:"text-sm text-slate-400 font-mono mb-4"}," Ready for Fullstack Engineering, ML/AI Systems, and Advanced Web Applications. ",-1)),C("div",WI,[C("a",{href:"mailto:"+ce(wn).email,class:"hud-btn hud-btn-primary"},[$e(ce(uf),{size:14}),t[16]||(t[16]=C("span",null,"TRANSMIT EMAIL",-1))],8,XI),C("a",{href:"https://"+ce(wn).linkedin,target:"_blank",class:"hud-btn"},[$e(ce(fy),{size:14}),t[17]||(t[17]=C("span",null,"LINKEDIN NETWORK",-1))],8,$I)])])]))}}),qI={class:"app-root min-h-screen bg-abyss text-slate-200 overflow-x-hidden font-rajdhani"},jI={class:"relative z-10"},KI={key:"mode-immersive",class:"w-full"},ZI={key:"mode-clean",class:"w-full"},JI=ki({__name:"App",setup(n){const e=us();return nT(),sT(),(t,i)=>(Ue(),Ze("div",qI,[$e(lT),$e(KT),ce(e).mode==="immersive"&&ce(e).animationsEnabled?(Ue(),Qn(gD,{key:0})):Fs("",!0),i[0]||(i[0]=C("div",{class:"cyber-scanlines pointer-events-none"},null,-1)),$e(jT),C("main",jI,[$e(Lv,{name:"mode-transition",mode:"out-in"},{default:Gp(()=>[ce(e).mode==="immersive"?(Ue(),Ze("div",KI,[$e(TD),$e(XD),$e(m3),$e(I3),$e($3),$e(nL),$e(EL)])):(Ue(),Ze("div",ZI,[$e(YI)]))]),_:1})])]))}}),QI=ay(JI,[["__scopeId","data-v-c470c39d"]]),jy=AS(QI);jy.use(PS());jy.mount("#app");
