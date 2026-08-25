var eS=Object.defineProperty;var tS=(n,e,t)=>e in n?eS(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Be=(n,e,t)=>tS(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fp(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const kt={},la=[],Er=()=>{},r0=()=>!1,ef=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),tf=n=>n.startsWith("onUpdate:"),rn=Object.assign,hp=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},nS=Object.prototype.hasOwnProperty,Ct=(n,e)=>nS.call(n,e),$e=Array.isArray,ca=n=>ic(n)==="[object Map]",s0=n=>ic(n)==="[object Set]",ym=n=>ic(n)==="[object Date]",Je=n=>typeof n=="function",Wt=n=>typeof n=="string",$i=n=>typeof n=="symbol",Mt=n=>n!==null&&typeof n=="object",o0=n=>(Mt(n)||Je(n))&&Je(n.then)&&Je(n.catch),a0=Object.prototype.toString,ic=n=>a0.call(n),iS=n=>ic(n).slice(8,-1),l0=n=>ic(n)==="[object Object]",nf=n=>Wt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,fl=fp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rf=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},rS=/-\w/g,Kn=rf(n=>n.replace(rS,e=>e.slice(1).toUpperCase())),sS=/\B([A-Z])/g,Co=rf(n=>n.replace(sS,"-$1").toLowerCase()),sf=rf(n=>n.charAt(0).toUpperCase()+n.slice(1)),Rf=rf(n=>n?`on${sf(n)}`:""),vr=(n,e)=>!Object.is(n,e),iu=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},c0=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},dp=n=>{const e=parseFloat(n);return isNaN(e)?n:e},oS=n=>{const e=Wt(n)?Number(n):NaN;return isNaN(e)?n:e};let Sm;const of=()=>Sm||(Sm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vi(n){if($e(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Wt(i)?uS(i):Vi(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Wt(n)||Mt(n))return n}const aS=/;(?![^(]*\))/g,lS=/:([^]+)/,cS=/\/\*[^]*?\*\//g;function uS(n){const e={};return n.replace(cS,"").split(aS).forEach(t=>{if(t){const i=t.split(lS);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Gr(n){let e="";if(Wt(n))e=n;else if($e(n))for(let t=0;t<n.length;t++){const i=Gr(n[t]);i&&(e+=i+" ")}else if(Mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const fS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hS=fp(fS);function u0(n){return!!n||n===""}function dS(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=pp(n[i],e[i]);return t}function pp(n,e){if(n===e)return!0;let t=ym(n),i=ym(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=$i(n),i=$i(e),t||i)return n===e;if(t=$e(n),i=$e(e),t||i)return t&&i?dS(n,e):!1;if(t=Mt(n),i=Mt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!pp(n[o],e[o]))return!1}}return String(n)===String(e)}const f0=n=>!!(n&&n.__v_isRef===!0),gt=n=>Wt(n)?n:n==null?"":$e(n)||Mt(n)&&(n.toString===a0||!Je(n.toString))?f0(n)?gt(n.value):JSON.stringify(n,h0,2):String(n),h0=(n,e)=>f0(e)?h0(n,e.value):ca(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Pf(i,s)+" =>"]=r,t),{})}:s0(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Pf(t))}:$i(e)?Pf(e):Mt(e)&&!$e(e)&&!l0(e)?String(e):e,Pf=(n,e="")=>{var t;return $i(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pn;class d0{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&pn&&(pn.active?(this.parent=pn,this.index=(pn.scopes||(pn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=pn;try{return pn=this,e()}finally{pn=t}}}on(){++this._on===1&&(this.prevScope=pn,pn=this)}off(){if(this._on>0&&--this._on===0){if(pn===this)pn=this.prevScope;else{let e=pn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function p0(n){return new d0(n)}function mp(){return pn}function m0(n,e=!1){pn&&pn.cleanups.push(n)}let zt;const Df=new WeakSet;class g0{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,pn&&(pn.active?pn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Df.has(this)&&(Df.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||v0(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Mm(this),x0(this);const e=zt,t=sr;zt=this,sr=!0;try{return this.fn()}finally{y0(this),zt=e,sr=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)vp(e);this.deps=this.depsTail=void 0,Mm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Df.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){kh(this)&&this.run()}get dirty(){return kh(this)}}let _0=0,hl,dl;function v0(n,e=!1){if(n.flags|=8,e){n.next=dl,dl=n;return}n.next=hl,hl=n}function gp(){_0++}function _p(){if(--_0>0)return;if(dl){let e=dl;for(dl=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;hl;){let e=hl;for(hl=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function x0(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function y0(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),vp(i),pS(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function kh(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(S0(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function S0(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ll)||(n.globalVersion=Ll,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!kh(n))))return;n.flags|=2;const e=n.dep,t=zt,i=sr;zt=n,sr=!0;try{x0(n);const r=n.fn(n._value);(e.version===0||vr(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{zt=t,sr=i,y0(n),n.flags&=-3}}function vp(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)vp(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function pS(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let sr=!0;const M0=[];function Qr(){M0.push(sr),sr=!1}function es(){const n=M0.pop();sr=n===void 0?!0:n}function Mm(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=zt;zt=void 0;try{e()}finally{zt=t}}}let Ll=0;class mS{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class af{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!zt||!sr||zt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==zt)t=this.activeLink=new mS(zt,this),zt.deps?(t.prevDep=zt.depsTail,zt.depsTail.nextDep=t,zt.depsTail=t):zt.deps=zt.depsTail=t,b0(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=zt.depsTail,t.nextDep=void 0,zt.depsTail.nextDep=t,zt.depsTail=t,zt.deps===t&&(zt.deps=i)}return t}trigger(e){this.version++,Ll++,this.notify(e)}notify(e){gp();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{_p()}}}function b0(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)b0(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Eu=new WeakMap,fo=Symbol(""),Bh=Symbol(""),Il=Symbol("");function Pn(n,e,t){if(sr&&zt){let i=Eu.get(n);i||Eu.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new af),r.map=i,r.key=t),r.track()}}function Wr(n,e,t,i,r,s){const o=Eu.get(n);if(!o){Ll++;return}const a=l=>{l&&l.trigger()};if(gp(),e==="clear")o.forEach(a);else{const l=$e(n),c=l&&nf(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Il||!$i(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Il)),e){case"add":l?c&&a(o.get("length")):(a(o.get(fo)),ca(n)&&a(o.get(Bh)));break;case"delete":l||(a(o.get(fo)),ca(n)&&a(o.get(Bh)));break;case"set":ca(n)&&a(o.get(fo));break}}_p()}function gS(n,e){const t=Eu.get(n);return t&&t.get(e)}function Do(n){const e=vt(n);return e===n?e:(Pn(e,"iterate",Il),Ai(n)?e:e.map(cr))}function lf(n){return Pn(n=vt(n),"iterate",Il),n}function mr(n,e){return ts(n)?Ma(Kr(n)?cr(e):e):cr(e)}const _S={__proto__:null,[Symbol.iterator](){return Lf(this,Symbol.iterator,n=>mr(this,n))},concat(...n){return Do(this).concat(...n.map(e=>$e(e)?Do(e):e))},entries(){return Lf(this,"entries",n=>(n[1]=mr(this,n[1]),n))},every(n,e){return Pr(this,"every",n,e,void 0,arguments)},filter(n,e){return Pr(this,"filter",n,e,t=>t.map(i=>mr(this,i)),arguments)},find(n,e){return Pr(this,"find",n,e,t=>mr(this,t),arguments)},findIndex(n,e){return Pr(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Pr(this,"findLast",n,e,t=>mr(this,t),arguments)},findLastIndex(n,e){return Pr(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Pr(this,"forEach",n,e,void 0,arguments)},includes(...n){return If(this,"includes",n)},indexOf(...n){return If(this,"indexOf",n)},join(n){return Do(this).join(n)},lastIndexOf(...n){return If(this,"lastIndexOf",n)},map(n,e){return Pr(this,"map",n,e,void 0,arguments)},pop(){return Ga(this,"pop")},push(...n){return Ga(this,"push",n)},reduce(n,...e){return bm(this,"reduce",n,e)},reduceRight(n,...e){return bm(this,"reduceRight",n,e)},shift(){return Ga(this,"shift")},some(n,e){return Pr(this,"some",n,e,void 0,arguments)},splice(...n){return Ga(this,"splice",n)},toReversed(){return Do(this).toReversed()},toSorted(n){return Do(this).toSorted(n)},toSpliced(...n){return Do(this).toSpliced(...n)},unshift(...n){return Ga(this,"unshift",n)},values(){return Lf(this,"values",n=>mr(this,n))}};function Lf(n,e,t){const i=lf(n),r=i[e]();return i!==n&&!Ai(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const vS=Array.prototype;function Pr(n,e,t,i,r,s){const o=lf(n),a=o!==n&&!Ai(n),l=o[e];if(l!==vS[e]){const f=l.apply(n,s);return a?cr(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,mr(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function bm(n,e,t,i){const r=lf(n),s=r!==n&&!Ai(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=mr(n,c)),t.call(this,c,mr(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](o,...i);return a?mr(n,l):l}function If(n,e,t){const i=vt(n);Pn(i,"iterate",Il);const r=i[e](...t);return(r===-1||r===!1)&&uf(t[0])?(t[0]=vt(t[0]),i[e](...t)):r}function Ga(n,e,t=[]){Qr(),gp();const i=vt(n)[e].apply(n,t);return _p(),es(),i}const xS=fp("__proto__,__v_isRef,__isVue"),E0=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter($i));function yS(n){$i(n)||(n=String(n));const e=vt(this);return Pn(e,"has",n),e.hasOwnProperty(n)}class T0{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?PS:R0:s?C0:A0).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=$e(e);if(!r){let l;if(o&&(l=_S[t]))return l;if(t==="hasOwnProperty")return yS}const a=Reflect.get(e,t,Xt(e)?e:i);if(($i(t)?E0.has(t):xS(t))||(r||Pn(e,"get",t),s))return a;if(Xt(a)){const l=o&&nf(t)?a:a.value;return r&&Mt(l)?Ul(l):l}return Mt(a)?r?Ul(a):cf(a):a}}class w0 extends T0{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=$e(e)&&nf(t);if(!this._isShallow){const c=ts(s);if(!Ai(i)&&!ts(i)&&(s=vt(s),i=vt(i)),!o&&Xt(s)&&!Xt(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:Ct(e,t),l=Reflect.set(e,t,i,Xt(e)?e:r);return e===vt(r)&&l&&(a?vr(i,s)&&Wr(e,"set",t,i):Wr(e,"add",t,i)),l}deleteProperty(e,t){const i=Ct(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Wr(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!$i(t)||!E0.has(t))&&Pn(e,"has",t),i}ownKeys(e){return Pn(e,"iterate",$e(e)?"length":fo),Reflect.ownKeys(e)}}class SS extends T0{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const MS=new w0,bS=new SS,ES=new w0(!0);const zh=n=>n,hc=n=>Reflect.getPrototypeOf(n);function TS(n,e,t){return function(...i){const r=this.__v_raw,s=vt(r),o=ca(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?zh:e?Ma:cr;return!e&&Pn(s,"iterate",l?Bh:fo),rn(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function dc(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function wS(n,e){const t={get(r){const s=this.__v_raw,o=vt(s),a=vt(r);n||(vr(r,a)&&Pn(o,"get",r),Pn(o,"get",a));const{has:l}=hc(o),c=e?zh:n?Ma:cr;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Pn(vt(r),"iterate",fo),r.size},has(r){const s=this.__v_raw,o=vt(s),a=vt(r);return n||(vr(r,a)&&Pn(o,"has",r),Pn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=vt(a),c=e?zh:n?Ma:cr;return!n&&Pn(l,"iterate",fo),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return rn(t,n?{add:dc("add"),set:dc("set"),delete:dc("delete"),clear:dc("clear")}:{add(r){const s=vt(this),o=hc(s),a=vt(r),l=!e&&!Ai(r)&&!ts(r)?a:r;return o.has.call(s,l)||vr(r,l)&&o.has.call(s,r)||vr(a,l)&&o.has.call(s,a)||(s.add(l),Wr(s,"add",l,l)),this},set(r,s){!e&&!Ai(s)&&!ts(s)&&(s=vt(s));const o=vt(this),{has:a,get:l}=hc(o);let c=a.call(o,r);c||(r=vt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?vr(s,u)&&Wr(o,"set",r,s):Wr(o,"add",r,s),this},delete(r){const s=vt(this),{has:o,get:a}=hc(s);let l=o.call(s,r);l||(r=vt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Wr(s,"delete",r,void 0),c},clear(){const r=vt(this),s=r.size!==0,o=r.clear();return s&&Wr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=TS(r,n,e)}),t}function xp(n,e){const t=wS(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ct(t,r)&&r in i?t:i,r,s)}const AS={get:xp(!1,!1)},CS={get:xp(!1,!0)},RS={get:xp(!0,!1)};const A0=new WeakMap,C0=new WeakMap,R0=new WeakMap,PS=new WeakMap;function DS(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cf(n){return ts(n)?n:yp(n,!1,MS,AS,A0)}function LS(n){return yp(n,!1,ES,CS,C0)}function Ul(n){return yp(n,!0,bS,RS,R0)}function yp(n,e,t,i,r){if(!Mt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const o=DS(iS(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Kr(n){return ts(n)?Kr(n.__v_raw):!!(n&&n.__v_isReactive)}function ts(n){return!!(n&&n.__v_isReadonly)}function Ai(n){return!!(n&&n.__v_isShallow)}function uf(n){return n?!!n.__v_raw:!1}function vt(n){const e=n&&n.__v_raw;return e?vt(e):n}function Sp(n){return!Ct(n,"__v_skip")&&Object.isExtensible(n)&&c0(n,"__v_skip",!0),n}const cr=n=>Mt(n)?cf(n):n,Ma=n=>Mt(n)?Ul(n):n;function Xt(n){return n?n.__v_isRef===!0:!1}function Lt(n){return P0(n,!1)}function ua(n){return P0(n,!0)}function P0(n,e){return Xt(n)?n:new IS(n,e)}class IS{constructor(e,t){this.dep=new af,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:vt(e),this._value=t?e:cr(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Ai(e)||ts(e);e=i?e:vt(e),vr(e,t)&&(this._rawValue=e,this._value=i?e:cr(e),this.dep.trigger())}}function Ae(n){return Xt(n)?n.value:n}function Tr(n){return Je(n)?n():Ae(n)}const US={get:(n,e,t)=>e==="__v_raw"?n:Ae(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Xt(r)&&!Xt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function D0(n){return Kr(n)?n:new Proxy(n,US)}class NS{constructor(e){this.__v_isRef=!0,this._value=void 0;const t=this.dep=new af,{get:i,set:r}=e(t.track.bind(t),t.trigger.bind(t));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function OS(n){return new NS(n)}function FS(n){const e=$e(n)?new Array(n.length):{};for(const t in n)e[t]=L0(n,t);return e}class kS{constructor(e,t,i){this._object=e,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=$i(t)?t:String(t),this._raw=vt(e);let r=!0,s=e;if(!$e(e)||$i(this._key)||!nf(this._key))do r=!uf(s)||Ai(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=Ae(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Xt(this._raw[this._key])){const t=this._object[this._key];if(Xt(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return gS(this._raw,this._key)}}class BS{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function zS(n,e,t){return Xt(n)?n:Je(n)?new BS(n):Mt(n)&&arguments.length>1?L0(n,e,t):Lt(n)}function L0(n,e,t){return new kS(n,e,t)}class HS{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new af(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ll-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&zt!==this)return v0(this,!0),!0}get value(){const e=this.dep.track();return S0(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function VS(n,e,t=!1){let i,r;return Je(n)?i=n:(i=n.get,r=n.set),new HS(i,r,t)}const pc={},Tu=new WeakMap;let Ks;function GS(n,e=!1,t=Ks){if(t){let i=Tu.get(t);i||Tu.set(t,i=[]),i.push(n)}}function WS(n,e,t=kt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=x=>r?x:Ai(x)||r===!1||r===0?Xr(x,1):Xr(x);let u,f,h,d,g=!1,_=!1;if(Xt(n)?(f=()=>n.value,g=Ai(n)):Kr(n)?(f=()=>c(n),g=!0):$e(n)?(_=!0,g=n.some(x=>Kr(x)||Ai(x)),f=()=>n.map(x=>{if(Xt(x))return x.value;if(Kr(x))return c(x);if(Je(x))return l?l(x,2):x()})):Je(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Qr();try{h()}finally{es()}}const x=Ks;Ks=u;try{return l?l(n,3,[d]):n(d)}finally{Ks=x}}:f=Er,e&&r){const x=f,w=r===!0?1/0:r;f=()=>Xr(x(),w)}const m=mp(),p=()=>{u.stop(),m&&m.active&&hp(m.effects,u)};if(s&&e){const x=e;e=(...w)=>{const C=x(...w);return p(),C}}let M=_?new Array(n.length).fill(pc):pc;const b=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const w=u.run();if(x||r||g||(_?w.some((C,T)=>vr(C,M[T])):vr(w,M))){h&&h();const C=Ks;Ks=u;try{const T=[w,M===pc?void 0:_&&M[0]===pc?[]:M,d];M=w,l?l(e,3,T):e(...T)}finally{Ks=C}}}else u.run()};return a&&a(b),u=new g0(f),u.scheduler=o?()=>o(b,!1):b,d=x=>GS(x,!1,u),h=u.onStop=()=>{const x=Tu.get(u);if(x){if(l)l(x,4);else for(const w of x)w();Tu.delete(u)}},e?i?b(!0):M=u.run():o?o(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Xr(n,e=1/0,t){if(e<=0||!Mt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Xt(n))Xr(n.value,e,t);else if($e(n))for(let i=0;i<n.length;i++)Xr(n[i],e,t);else if(s0(n)||ca(n))n.forEach(i=>{Xr(i,e,t)});else if(l0(n)){for(const i in n)Xr(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Xr(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rc(n,e,t,i){try{return i?n(...i):n()}catch(r){ff(r,e,t)}}function qi(n,e,t,i){if(Je(n)){const r=rc(n,e,t,i);return r&&o0(r)&&r.catch(s=>{ff(s,e,t)}),r}if($e(n)){const r=[];for(let s=0;s<n.length;s++)r.push(qi(n[s],e,t,i));return r}}function ff(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||kt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Qr(),rc(s,null,10,[n,l,c]),es();return}}XS(n,t,r,i,o)}function XS(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const $n=[];let hr=-1;const fa=[];let _s=null,Jo=0;const I0=Promise.resolve();let wu=null;function Ua(n){const e=wu||I0;return n?e.then(this?n.bind(this):n):e}function $S(n){let e=hr+1,t=$n.length;for(;e<t;){const i=e+t>>>1,r=$n[i],s=Nl(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Mp(n){if(!(n.flags&1)){const e=Nl(n),t=$n[$n.length-1];!t||!(n.flags&2)&&e>=Nl(t)?$n.push(n):$n.splice($S(e),0,n),n.flags|=1,U0()}}function U0(){wu||(wu=I0.then(O0))}function qS(n){if(!$e(n))_s&&n.id===-1?_s.splice(Jo+1,0,n):n.flags&1||(fa.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)fa.push(n[e]);U0()}function Em(n,e,t=hr+1){for(;t<$n.length;t++){const i=$n[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;$n.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function N0(n){if(fa.length){const e=[...new Set(fa)].sort((t,i)=>Nl(t)-Nl(i));if(fa.length=0,_s){for(let t=0;t<e.length;t++)_s.push(e[t]);return}for(_s=e,Jo=0;Jo<_s.length;Jo++){const t=_s[Jo];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}_s=null,Jo=0}}const Nl=n=>n.id==null?n.flags&2?-1:1/0:n.id;function O0(n){try{for(hr=0;hr<$n.length;hr++){const e=$n[hr];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),rc(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;hr<$n.length;hr++){const e=$n[hr];e&&(e.flags&=-2)}hr=-1,$n.length=0,N0(),wu=null,($n.length||fa.length)&&O0()}}let Mi=null,F0=null;function Au(n){const e=Mi;return Mi=n,F0=n&&n.type.__scopeId||null,e}function k0(n,e=Mi,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Du(-1);const s=Au(e),o=po.length;let a;try{a=n(...r)}finally{for(let l=po.length;l>o;l--)uv();Au(s),i._d&&Du(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Uf(n,e){if(Mi===null)return n;const t=_f(Mi),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=kt]=e[r];s&&(Je(s)&&(s={mounted:s,updated:s}),s.deep&&Xr(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ks(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Qr(),qi(l,t,8,[n.el,a,n,e]),es())}}function YS(n,e){if(Dn){let t=Dn.provides;const i=Dn.parent&&Dn.parent.provides;i===t&&(t=Dn.provides=Object.create(i)),t[n]=e}}function ha(n,e,t=!1){const i=Oa();if(i||ho){let r=ho?ho._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Je(e)?e.call(i&&i.proxy):e}}function bp(){return!!(Oa()||ho)}const jS=Symbol.for("v-scx"),KS=()=>ha(jS);function ZS(n,e){return Ep(n,null,e)}function wr(n,e,t){return Ep(n,e,t)}function Ep(n,e,t=kt){const{immediate:i,deep:r,flush:s,once:o}=t,a=rn({},t),l=e&&i||!e&&s!=="post";let c;if(Bl){if(s==="sync"){const d=KS();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Er,d.resume=Er,d.pause=Er,d}}const u=Dn;a.call=(d,g,_)=>qi(d,u,g,_);let f=!1;s==="post"?a.scheduler=d=>{Qn(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():Mp(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=WS(n,e,a);return Bl&&(c?c.push(h):l&&h()),h}function JS(n,e,t){const i=this.proxy,r=Wt(n)?n.includes(".")?B0(i,n):()=>i[n]:n.bind(i,i);let s;Je(e)?s=e:(s=e.handler,t=e);const o=sc(this),a=Ep(r,s.bind(i),t);return o(),a}function B0(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const QS=Symbol("_vte"),hf=n=>n.__isTeleport,ki=Symbol("_leaveCb"),Wa=Symbol("_enterCb");function eM(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Di(()=>{n.isMounted=!0}),os(()=>{n.isUnmounting=!0}),n}const Ni=[Function,Array],z0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ni,onEnter:Ni,onAfterEnter:Ni,onEnterCancelled:Ni,onBeforeLeave:Ni,onLeave:Ni,onAfterLeave:Ni,onLeaveCancelled:Ni,onBeforeAppear:Ni,onAppear:Ni,onAfterAppear:Ni,onAppearCancelled:Ni},H0=n=>{const e=n.subTree;return e.component?H0(e.component):e},tM={name:"BaseTransition",props:z0,setup(n,{slots:e}){const t=Oa(),i=eM();return()=>{const r=e.default&&W0(e.default(),!0),s=r&&r.length?V0(r):t.subTree?Na():void 0;if(!s)return;const o=vt(n),{mode:a}=o;if(i.isLeaving)return Nf(s);const l=Cu(s);if(!l)return Nf(s);let c=Hh(l,o,i,t,f=>c=f);l.type!==Yn&&Ol(l,c);let u=t.subTree&&Cu(t.subTree);if(u&&u.type!==Yn&&!no(u,l)&&H0(t).type!==Yn){let f=Hh(u,o,i,t);if(Ol(u,f),a==="out-in"&&l.type!==Yn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},Nf(s);a==="in-out"&&l.type!==Yn?f.delayLeave=(h,d,g)=>{const _=G0(i,u);_[String(u.key)]=u,h[ki]=()=>{d(),h[ki]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function V0(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Yn){e=t;break}}return e}const nM=tM;function G0(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Hh(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:M,onAppearCancelled:b}=e,x=String(n.key),w=G0(t,n),C=(y,v)=>{y&&qi(y,i,9,v)},T=(y,v)=>{const D=v[1];C(y,v),$e(y)?y.every(I=>I.length<=1)&&D():y.length<=1&&D()},P={mode:o,persisted:a,beforeEnter(y){let v=l;if(!t.isMounted)if(s)v=m||l;else return;y[ki]&&y[ki](!0);const D=w[x];D&&no(n,D)&&D.el[ki]&&D.el[ki](),C(v,[y])},enter(y){if(w[x]===n)return;let v=c,D=u,I=f;if(!t.isMounted)if(s)v=p||c,D=M||u,I=b||f;else return;let k=!1;y[Wa]=q=>{k||(k=!0,q?C(I,[y]):C(D,[y]),P.delayedLeave&&P.delayedLeave(),y[Wa]=void 0)};const F=y[Wa].bind(null,!1);v?T(v,[y,F]):F()},leave(y,v){const D=String(n.key);if(y[Wa]&&y[Wa](!0),t.isUnmounting)return v();C(h,[y]);let I=!1;y[ki]=F=>{I||(I=!0,v(),F?C(_,[y]):C(g,[y]),y[ki]=void 0,w[D]===n&&delete w[D])};const k=y[ki].bind(null,!1);w[D]=n,d?T(d,[y,k]):k()},clone(y){const v=Hh(y,e,t,i,r);return r&&r(v),v}};return P}function Nf(n){if(df(n))return n=Rs(n),n.children=null,n}function Cu(n){if(!df(n))return hf(n.type)&&n.children?V0(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Je(t.default))return t.default()}}function Ol(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Ol(hf(t.type)&&Cu(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function W0(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===jt?(o.patchFlag&128&&r++,i=i.concat(W0(o.children,e,a))):(e||o.type!==Yn)&&i.push(a!=null?Rs(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function ur(n,e){return Je(n)?rn({name:n.name},e,{setup:n}):n}function X0(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Tm(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Ru=new WeakMap;function pl(n,e,t,i,r=!1){if($e(n)){n.forEach((_,m)=>pl(_,e&&($e(e)?e[m]:e),t,i,r));return}if(ml(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&pl(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?_f(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===kt?a.refs={}:a.refs,f=a.setupState,h=vt(f),d=f===kt?r0:_=>Tm(u,_)?!1:Ct(h,_),g=(_,m)=>!(m&&Tm(u,m));if(c!=null&&c!==l){if(wm(e),Wt(c))u[c]=null,d(c)&&(f[c]=null);else if(Xt(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Je(l))rc(l,a,12,[o,u]);else{const _=Wt(l),m=Xt(l);if(_||m){const p=()=>{if(n.f){const M=_?d(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(r)$e(M)&&hp(M,s);else if($e(M))M.includes(s)||M.push(s);else if(_)u[l]=[s],d(l)&&(f[l]=u[l]);else{const b=[s];g(l,n.k)&&(l.value=b),n.k&&(u[n.k]=b)}}else _?(u[l]=o,d(l)&&(f[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const M=()=>{p(),Ru.delete(n)};M.id=-1,Ru.set(n,M),Qn(M,t)}else wm(n),p()}}}function wm(n){const e=Ru.get(n);e&&(e.flags|=8,Ru.delete(n))}of().requestIdleCallback;of().cancelIdleCallback;const ml=n=>!!n.type.__asyncLoader,df=n=>n.type.__isKeepAlive;function iM(n,e){$0(n,"a",e)}function rM(n,e){$0(n,"da",e)}function $0(n,e,t=Dn){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(pf(e,i,t),t){let r=t.parent;for(;r&&r.parent;)df(r.parent.vnode)&&sM(i,e,t,r),r=r.parent}}function sM(n,e,t,i){const r=pf(e,n,i,!0);Tp(()=>{hp(i[e],r)},t)}function pf(n,e,t=Dn,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Qr();const a=sc(t),l=qi(e,t,n,o);return a(),es(),l});return i?r.unshift(s):r.push(s),s}}const ss=n=>(e,t=Dn)=>{(!Bl||n==="sp")&&pf(n,(...i)=>e(...i),t)},oM=ss("bm"),Di=ss("m"),aM=ss("bu"),lM=ss("u"),os=ss("bum"),Tp=ss("um"),cM=ss("sp"),uM=ss("rtg"),fM=ss("rtc");function hM(n,e=Dn){pf("ec",n,e)}const dM="components",q0=Symbol.for("v-ndc");function Am(n){return Wt(n)?pM(dM,n,!1)||n:n||q0}function pM(n,e,t=!0,i=!1){const r=Mi||Dn;if(r){const s=r.type;{const a=ZM(s,!1);if(a&&(a===e||a===Kn(e)||a===sf(Kn(e))))return s}const o=Cm(r[n]||s[n],e)||Cm(r.appContext[n],e);return!o&&i?s:o}}function Cm(n,e){return n&&(n[e]||n[Kn(e)]||n[sf(Kn(e))])}function ir(n,e,t,i){let r;const s=t,o=$e(n);if(o||Wt(n)){const a=o&&Kr(n);let l=!1,c=!1;a&&(l=!Ai(n),c=ts(n),n=lf(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?Ma(cr(n[u])):cr(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(Mt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Vh=n=>n?pv(n)?_f(n):Vh(n.parent):null,gl=rn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Vh(n.parent),$root:n=>Vh(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>wp(n),$forceUpdate:n=>n.f||(n.f=()=>{Mp(n.update)}),$nextTick:n=>n.n||(n.n=Ua.bind(n.proxy)),$watch:n=>JS.bind(n)}),Of=(n,e)=>n!==kt&&!n.__isScriptSetup&&Ct(n,e),mM={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Of(i,e))return o[e]=1,i[e];if(r!==kt&&Ct(r,e))return o[e]=2,r[e];if(Ct(s,e))return o[e]=3,s[e];if(t!==kt&&Ct(t,e))return o[e]=4,t[e];Gh&&(o[e]=0)}}const c=gl[e];let u,f;if(c)return e==="$attrs"&&Pn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==kt&&Ct(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Ct(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Of(r,e)?(r[e]=t,!0):i!==kt&&Ct(i,e)?(i[e]=t,!0):Ct(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==kt&&a[0]!=="$"&&Ct(n,a)||Of(e,a)||Ct(s,a)||Ct(i,a)||Ct(gl,a)||Ct(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ct(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Rm(n){return $e(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Gh=!0;function gM(n){const e=wp(n),t=n.proxy,i=n.ctx;Gh=!1,e.beforeCreate&&Pm(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:b,unmounted:x,render:w,renderTracked:C,renderTriggered:T,errorCaptured:P,serverPrefetch:y,expose:v,inheritAttrs:D,components:I,directives:k,filters:F}=e;if(c&&_M(c,i,null),o)for(const V in o){const H=o[V];Je(H)&&(i[V]=H.bind(t))}if(r){const V=r.call(t,t);Mt(V)&&(n.data=cf(V))}if(Gh=!0,s)for(const V in s){const H=s[V],se=Je(H)?H.bind(t,t):Je(H.get)?H.get.bind(t,t):Er,N=!Je(H)&&Je(H.set)?H.set.bind(t):Er,ge=Zn({get:se,set:N});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>ge.value,set:Ee=>ge.value=Ee})}if(a)for(const V in a)Y0(a[V],i,t,V);if(l){const V=Je(l)?l.call(t):l;Reflect.ownKeys(V).forEach(H=>{YS(H,V[H])})}u&&Pm(u,n,"c");function O(V,H){$e(H)?H.forEach(se=>V(se.bind(t))):H&&V(H.bind(t))}if(O(oM,f),O(Di,h),O(aM,d),O(lM,g),O(iM,_),O(rM,m),O(hM,P),O(fM,C),O(uM,T),O(os,M),O(Tp,x),O(cM,y),$e(v))if(v.length){const V=n.exposed||(n.exposed={});v.forEach(H=>{Object.defineProperty(V,H,{get:()=>t[H],set:se=>t[H]=se,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===Er&&(n.render=w),D!=null&&(n.inheritAttrs=D),I&&(n.components=I),k&&(n.directives=k),y&&X0(n)}function _M(n,e,t=Er){$e(n)&&(n=Wh(n));for(const i in n){const r=n[i];let s;Mt(r)?"default"in r?s=ha(r.from||i,r.default,!0):s=ha(r.from||i):s=ha(r),Xt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Pm(n,e,t){qi($e(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Y0(n,e,t,i){let r=i.includes(".")?B0(t,i):()=>t[i];if(Wt(n)){const s=e[n];Je(s)&&wr(r,s)}else if(Je(n))wr(r,n.bind(t));else if(Mt(n))if($e(n))n.forEach(s=>Y0(s,e,t,i));else{const s=Je(n.handler)?n.handler.bind(t):e[n.handler];Je(s)&&wr(r,s,n)}}function wp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Pu(l,c,o,!0)),Pu(l,e,o)),Mt(e)&&s.set(e,l),l}function Pu(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Pu(n,s,t,!0),r&&r.forEach(o=>Pu(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=vM[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const vM={data:Dm,props:Lm,emits:Lm,methods:tl,computed:tl,beforeCreate:Bn,created:Bn,beforeMount:Bn,mounted:Bn,beforeUpdate:Bn,updated:Bn,beforeDestroy:Bn,beforeUnmount:Bn,destroyed:Bn,unmounted:Bn,activated:Bn,deactivated:Bn,errorCaptured:Bn,serverPrefetch:Bn,components:tl,directives:tl,watch:yM,provide:Dm,inject:xM};function Dm(n,e){return e?n?function(){return rn(Je(n)?n.call(this,this):n,Je(e)?e.call(this,this):e)}:e:n}function xM(n,e){return tl(Wh(n),Wh(e))}function Wh(n){if($e(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Bn(n,e){return n?[...new Set([].concat(n,e))]:e}function tl(n,e){return n?rn(Object.create(null),n,e):e}function Lm(n,e){return n?$e(n)&&$e(e)?[...new Set([...n,...e])]:rn(Object.create(null),Rm(n),Rm(e??{})):e}function yM(n,e){if(!n)return e;if(!e)return n;const t=rn(Object.create(null),n);for(const i in e)t[i]=Bn(n[i],e[i]);return t}function j0(){return{app:null,config:{isNativeTag:r0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let SM=0;function MM(n,e){return function(i,r=null){Je(i)||(i=rn({},i)),r!=null&&!Mt(r)&&(r=null);const s=j0(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:SM++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:QM,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Je(u.install)?(o.add(u),u.install(c,...f)):Je(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Qe(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(d,u):n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,_f(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(qi(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=ho;ho=c;try{return u()}finally{ho=f}}};return c}}let ho=null;const bM=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Kn(e)}Modifiers`]||n[`${Co(e)}Modifiers`];function EM(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||kt;let r=t;const s=e.startsWith("update:"),o=s&&bM(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Wt(u)?u.trim():u)),o.number&&(r=t.map(dp)));let a,l=i[a=Rf(e)]||i[a=Rf(Kn(e))];!l&&s&&(l=i[a=Rf(Co(e))]),l&&qi(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,qi(c,n,6,r)}}const TM=new WeakMap;function K0(n,e,t=!1){const i=t?TM:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Je(n)){const l=c=>{const u=K0(c,e,!0);u&&(a=!0,rn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(Mt(n)&&i.set(n,null),null):($e(s)?s.forEach(l=>o[l]=null):rn(o,s),Mt(n)&&i.set(n,o),o)}function mf(n,e){return!n||!ef(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Ct(n,e[0].toLowerCase()+e.slice(1))||Ct(n,Co(e))||Ct(n,e))}function Ff(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n,m=Au(n);let p,M;try{if(t.shapeFlag&4){const x=r||i,w=x;p=gr(c.call(w,x,u,f,d,h,g)),M=a}else{const x=e;p=gr(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),M=e.props?a:wM(a)}}catch(x){po.length=0,ff(x,n,1),p=Qe(Yn)}let b=p;if(M&&_!==!1){const x=Object.keys(M),{shapeFlag:w}=b;x.length&&w&7&&(s&&x.some(tf)&&(M=AM(M,s)),b=Rs(b,M,!1,!0))}if(t.dirs&&(b=Rs(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition){const x=hf(b.type)&&Cu(b)||b;Ol(x,t.transition)}return p=b,Au(m),p}const wM=n=>{let e;for(const t in n)(t==="class"||t==="style"||ef(t))&&((e||(e={}))[t]=n[t]);return e},AM=(n,e)=>{const t={};for(const i in n)(!tf(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function CM(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Im(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Z0(o,i,h)&&!mf(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Im(i,o,c):!0:!!o;return!1}function Im(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Z0(e,n,s)&&!mf(t,s))return!0}return!1}function Z0(n,e,t){const i=n[t],r=e[t];return t==="style"&&Mt(i)&&Mt(r)?!pp(i,r):i!==r}function RM({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const J0={},Q0=()=>Object.create(J0),ev=n=>Object.getPrototypeOf(n)===J0;function PM(n,e,t,i=!1){const r={},s=Q0();n.propsDefaults=Object.create(null),tv(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:LS(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function DM(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=vt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(mf(n.emitsOptions,h))continue;const d=e[h];if(l)if(Ct(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=Kn(h);r[g]=Xh(l,a,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{tv(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ct(e,f)&&((u=Co(f))===f||!Ct(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Xh(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ct(e,f))&&(delete s[f],c=!0)}c&&Wr(n.attrs,"set","")}function tv(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(fl(l))continue;const c=e[l];let u;r&&Ct(r,u=Kn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:mf(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=vt(t),c=a||kt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Xh(r,l,f,c[f],n,!Ct(c,f))}}return o}function Xh(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ct(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Je(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=sc(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Co(t))&&(i=!0))}return i}const LM=new WeakMap;function nv(n,e,t=!1){const i=t?LM:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Je(n)){const u=f=>{l=!0;const[h,d]=nv(f,e,!0);rn(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Mt(n)&&i.set(n,la),la;if($e(s))for(let u=0;u<s.length;u++){const f=Kn(s[u]);Um(f)&&(o[f]=kt)}else if(s)for(const u in s){const f=Kn(u);if(Um(f)){const h=s[u],d=o[f]=$e(h)||Je(h)?{type:h}:rn({},h),g=d.type;let _=!1,m=!0;if($e(g))for(let p=0;p<g.length;++p){const M=g[p],b=Je(M)&&M.name;if(b==="Boolean"){_=!0;break}else b==="String"&&(m=!1)}else _=Je(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||Ct(d,"default"))&&a.push(f)}}const c=[o,a];return Mt(n)&&i.set(n,c),c}function Um(n){return n[0]!=="$"&&!fl(n)}const Ap=n=>n==="_"||n==="_ctx"||n==="$stable",Cp=n=>$e(n)?n.map(gr):[gr(n)],IM=(n,e,t)=>{if(e._n)return e;const i=k0((...r)=>Cp(e(...r)),t);return i._c=!1,i},iv=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Ap(r))continue;const s=n[r];if(Je(s))e[r]=IM(r,s,i);else if(s!=null){const o=Cp(s);e[r]=()=>o}}},rv=(n,e)=>{const t=Cp(e);n.slots.default=()=>t},sv=(n,e,t)=>{for(const i in e)(t||!Ap(i))&&(n[i]=e[i])},UM=(n,e,t)=>{const i=n.slots=Q0();if(n.vnode.shapeFlag&32){const r=e._;r?(sv(i,e,t),t&&c0(i,"_",r,!0)):iv(e,i)}else e&&rv(n,e)},NM=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=kt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:sv(r,e,t):(s=!e.$stable,iv(e,r)),o=e}else e&&(rv(n,e),o={default:1});if(s)for(const a in r)!Ap(a)&&o[a]==null&&delete r[a]},Qn=zM;function OM(n){return FM(n)}function FM(n,e){const t=of();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Er,insertStaticContent:g}=n,_=(L,E,Q,te=null,U=null,j=null,ue=void 0,ne=null,A=!!E.dynamicChildren)=>{if(L===E)return;L&&!no(L,E)&&(te=pe(L),Ee(L,U,j,!0),L=null),E.patchFlag===-2&&(A=!1,E.dynamicChildren=null);const{type:S,ref:z,shapeFlag:W}=E;switch(S){case gf:m(L,E,Q,te);break;case Yn:p(L,E,Q,te);break;case ru:L==null&&M(E,Q,te,ue);break;case jt:I(L,E,Q,te,U,j,ue,ne,A);break;default:W&1?w(L,E,Q,te,U,j,ue,ne,A):W&6?k(L,E,Q,te,U,j,ue,ne,A):(W&64||W&128)&&S.process(L,E,Q,te,U,j,ue,ne,A,Ue)}z!=null&&U?pl(z,L&&L.ref,j,E||L,!E):z==null&&L&&L.ref!=null&&pl(L.ref,null,j,L,!0)},m=(L,E,Q,te)=>{if(L==null)i(E.el=a(E.children),Q,te);else{const U=E.el=L.el;E.children!==L.children&&c(U,E.children)}},p=(L,E,Q,te)=>{L==null?i(E.el=l(E.children||""),Q,te):E.el=L.el},M=(L,E,Q,te)=>{[L.el,L.anchor]=g(L.children,E,Q,te,L.el,L.anchor)},b=({el:L,anchor:E},Q,te)=>{let U;for(;L&&L!==E;)U=h(L),i(L,Q,te),L=U;i(E,Q,te)},x=({el:L,anchor:E})=>{let Q;for(;L&&L!==E;)Q=h(L),r(L),L=Q;r(E)},w=(L,E,Q,te,U,j,ue,ne,A)=>{if(E.type==="svg"?ue="svg":E.type==="math"&&(ue="mathml"),L==null)C(E,Q,te,U,j,ue,ne,A);else{const S=L.el&&L.el._isVueCE?L.el:null;try{S&&S._beginPatch(),y(L,E,U,j,ue,ne,A)}finally{S&&S._endPatch()}}},C=(L,E,Q,te,U,j,ue,ne)=>{let A,S;const{props:z,shapeFlag:W,transition:Y,dirs:K}=L;if(A=L.el=o(L.type,j,z&&z.is,z),W&8?u(A,L.children):W&16&&P(L.children,A,null,te,U,kf(L,j),ue,ne),K&&ks(L,null,te,"created"),T(A,L,L.scopeId,ue,te),z){for(const ce in z)ce!=="value"&&!fl(ce)&&s(A,ce,null,z[ce],j,te);"value"in z&&s(A,"value",null,z.value,j),(S=z.onVnodeBeforeMount)&&fr(S,te,L)}K&&ks(L,null,te,"beforeMount");const ae=kM(U,Y);ae&&Y.beforeEnter(A),i(A,E,Q),((S=z&&z.onVnodeMounted)||ae||K)&&Qn(()=>{try{S&&fr(S,te,L),ae&&Y.enter(A),K&&ks(L,null,te,"mounted")}finally{}},U)},T=(L,E,Q,te,U)=>{if(Q&&d(L,Q),te)for(let j=0;j<te.length;j++)d(L,te[j]);if(U){let j=U.subTree;if(E===j||cv(j.type)&&(j.ssContent===E||j.ssFallback===E)){const ue=U.vnode;T(L,ue,ue.scopeId,ue.slotScopeIds,U.parent)}}},P=(L,E,Q,te,U,j,ue,ne,A=0)=>{for(let S=A;S<L.length;S++){const z=L[S]=ne?Hr(L[S]):gr(L[S]);_(null,z,E,Q,te,U,j,ue,ne)}},y=(L,E,Q,te,U,j,ue)=>{const ne=E.el=L.el;let{patchFlag:A,dynamicChildren:S,dirs:z}=E;A|=L.patchFlag&16;const W=L.props||kt,Y=E.props||kt;let K;if(Q&&Bs(Q,!1),(K=Y.onVnodeBeforeUpdate)&&fr(K,Q,E,L),z&&ks(E,L,Q,"beforeUpdate"),Q&&Bs(Q,!0),S&&(!L.dynamicChildren||L.dynamicChildren.length!==S.length)&&(A=0,ue=!1,S=null),(W.innerHTML&&Y.innerHTML==null||W.textContent&&Y.textContent==null)&&u(ne,""),S?v(L.dynamicChildren,S,ne,Q,te,kf(E,U),j):ue||H(L,E,ne,null,Q,te,kf(E,U),j,!1),A>0){if(A&16)D(ne,W,Y,Q,U);else if(A&2&&W.class!==Y.class&&s(ne,"class",null,Y.class,U),A&4&&s(ne,"style",W.style,Y.style,U),A&8){const ae=E.dynamicProps;for(let ce=0;ce<ae.length;ce++){const fe=ae[ce],Ie=W[fe],le=Y[fe];(le!==Ie||fe==="value")&&s(ne,fe,Ie,le,U,Q)}}A&1&&L.children!==E.children&&u(ne,E.children)}else!ue&&S==null&&D(ne,W,Y,Q,U);((K=Y.onVnodeUpdated)||z)&&Qn(()=>{K&&fr(K,Q,E,L),z&&ks(E,L,Q,"updated")},te)},v=(L,E,Q,te,U,j,ue)=>{for(let ne=0;ne<E.length;ne++){const A=L[ne],S=E[ne],z=A.el&&(A.type===jt||!no(A,S)||A.shapeFlag&198)?f(A.el):Q;_(A,S,z,null,te,U,j,ue,!0)}},D=(L,E,Q,te,U)=>{if(E!==Q){if(E!==kt)for(const j in E)!fl(j)&&!(j in Q)&&s(L,j,E[j],null,U,te);for(const j in Q){if(fl(j))continue;const ue=Q[j],ne=E[j];ue!==ne&&j!=="value"&&s(L,j,ne,ue,U,te)}"value"in Q&&s(L,"value",E.value,Q.value,U)}},I=(L,E,Q,te,U,j,ue,ne,A)=>{const S=E.el=L?L.el:a(""),z=E.anchor=L?L.anchor:a("");let{patchFlag:W,dynamicChildren:Y,slotScopeIds:K}=E;K&&(ne=ne?ne.concat(K):K),L==null?(i(S,Q,te),i(z,Q,te),P(E.children||[],Q,z,U,j,ue,ne,A)):W>0&&W&64&&Y&&L.dynamicChildren&&L.dynamicChildren.length===Y.length?(v(L.dynamicChildren,Y,Q,U,j,ue,ne),(E.key!=null||U&&E===U.subTree)&&ov(L,E,!0)):H(L,E,Q,z,U,j,ue,ne,A)},k=(L,E,Q,te,U,j,ue,ne,A)=>{E.slotScopeIds=ne,L==null?E.shapeFlag&512?U.ctx.activate(E,Q,te,ue,A):F(E,Q,te,U,j,ue,A):q(L,E,A)},F=(L,E,Q,te,U,j,ue)=>{const ne=L.component=$M(L,te,U);if(df(L)&&(ne.ctx.renderer=Ue),qM(ne,!1,ue),ne.asyncDep){if(U&&U.registerDep(ne,O,ue),!L.el){const A=ne.subTree=Qe(Yn);p(null,A,E,Q),L.placeholder=A.el}}else O(ne,L,E,Q,U,j,ue)},q=(L,E,Q)=>{const te=E.component=L.component;if(CM(L,E,Q))if(te.asyncDep&&!te.asyncResolved){V(te,E,Q);return}else te.next=E,te.update();else E.el=L.el,te.vnode=E},O=(L,E,Q,te,U,j,ue)=>{const ne=()=>{if(L.isMounted){let{next:W,bu:Y,u:K,parent:ae,vnode:ce}=L;{const De=av(L);if(De){W&&(W.el=ce.el,V(L,W,ue)),De.asyncDep.then(()=>{Qn(()=>{L.isUnmounted||S()},U)});return}}let fe=W,Ie;Bs(L,!1),W?(W.el=ce.el,V(L,W,ue)):W=ce,Y&&iu(Y),(Ie=W.props&&W.props.onVnodeBeforeUpdate)&&fr(Ie,ae,W,ce),Bs(L,!0);const le=Ff(L),me=L.subTree;L.subTree=le,_(me,le,f(me.el),pe(me),L,U,j),W.el=le.el,fe===null&&RM(L,le.el),K&&Qn(K,U),(Ie=W.props&&W.props.onVnodeUpdated)&&Qn(()=>fr(Ie,ae,W,ce),U)}else{let W;const{el:Y,props:K}=E,{bm:ae,m:ce,parent:fe,root:Ie,type:le}=L,me=ml(E);if(Bs(L,!1),ae&&iu(ae),!me&&(W=K&&K.onVnodeBeforeMount)&&fr(W,fe,E),Bs(L,!0),Y&&et){const De=()=>{L.subTree=Ff(L),et(Y,L.subTree,L,U,null)};me&&le.__asyncHydrate?le.__asyncHydrate(Y,L,De):De()}else{Ie.ce&&Ie.ce._hasShadowRoot()&&Ie.ce._injectChildStyle(le,L.parent?L.parent.type:void 0);const De=L.subTree=Ff(L);_(null,De,Q,te,L,U,j),E.el=De.el}if(ce&&Qn(ce,U),!me&&(W=K&&K.onVnodeMounted)){const De=E;Qn(()=>fr(W,fe,De),U)}(E.shapeFlag&256||fe&&ml(fe.vnode)&&fe.vnode.shapeFlag&256)&&L.a&&Qn(L.a,U),L.isMounted=!0,E=Q=te=null}};L.scope.on();const A=L.effect=new g0(ne);L.scope.off();const S=L.update=A.run.bind(A),z=L.job=A.runIfDirty.bind(A);z.i=L,z.id=L.uid,A.scheduler=()=>Mp(z),Bs(L,!0),S()},V=(L,E,Q)=>{E.component=L;const te=L.vnode.props;L.vnode=E,L.next=null,DM(L,E.props,te,Q),NM(L,E.children,Q),Qr(),Em(L),es()},H=(L,E,Q,te,U,j,ue,ne,A=!1)=>{const S=L&&L.children,z=L?L.shapeFlag:0,W=E.children,{patchFlag:Y,shapeFlag:K}=E;if(Y>0){if(Y&128){N(S,W,Q,te,U,j,ue,ne,A);return}else if(Y&256){se(S,W,Q,te,U,j,ue,ne,A);return}}K&8?(z&16&&_e(S,U,j),W!==S&&u(Q,W)):z&16?K&16?N(S,W,Q,te,U,j,ue,ne,A):_e(S,U,j,!0):(z&8&&u(Q,""),K&16&&P(W,Q,te,U,j,ue,ne,A))},se=(L,E,Q,te,U,j,ue,ne,A)=>{L=L||la,E=E||la;const S=L.length,z=E.length,W=Math.min(S,z);let Y;for(Y=0;Y<W;Y++){const K=E[Y]=A?Hr(E[Y]):gr(E[Y]);_(L[Y],K,Q,null,U,j,ue,ne,A)}S>z?_e(L,U,j,!0,!1,W):P(E,Q,te,U,j,ue,ne,A,W)},N=(L,E,Q,te,U,j,ue,ne,A)=>{let S=0;const z=E.length;let W=L.length-1,Y=z-1;for(;S<=W&&S<=Y;){const K=L[S],ae=E[S]=A?Hr(E[S]):gr(E[S]);if(no(K,ae))_(K,ae,Q,null,U,j,ue,ne,A);else break;S++}for(;S<=W&&S<=Y;){const K=L[W],ae=E[Y]=A?Hr(E[Y]):gr(E[Y]);if(no(K,ae))_(K,ae,Q,null,U,j,ue,ne,A);else break;W--,Y--}if(S>W){if(S<=Y){const K=Y+1,ae=K<z?E[K].el:te;for(;S<=Y;)_(null,E[S]=A?Hr(E[S]):gr(E[S]),Q,ae,U,j,ue,ne,A),S++}}else if(S>Y)for(;S<=W;)Ee(L[S],U,j,!0),S++;else{const K=S,ae=S,ce=new Map;for(S=ae;S<=Y;S++){const Ve=E[S]=A?Hr(E[S]):gr(E[S]);Ve.key!=null&&ce.set(Ve.key,S)}let fe,Ie=0;const le=Y-ae+1;let me=!1,De=0;const Ne=new Array(le);for(S=0;S<le;S++)Ne[S]=0;for(S=K;S<=W;S++){const Ve=L[S];if(Ie>=le){Ee(Ve,U,j,!0);continue}let Fe;if(Ve.key!=null)Fe=ce.get(Ve.key);else for(fe=ae;fe<=Y;fe++)if(Ne[fe-ae]===0&&no(Ve,E[fe])){Fe=fe;break}Fe===void 0?Ee(Ve,U,j,!0):(Ne[Fe-ae]=S+1,Fe>=De?De=Fe:me=!0,_(Ve,E[Fe],Q,null,U,j,ue,ne,A),Ie++)}const Te=me?BM(Ne):la;for(fe=Te.length-1,S=le-1;S>=0;S--){const Ve=ae+S,Fe=E[Ve],ht=E[Ve+1],B=Ve+1<z?ht.el||lv(ht):te;Ne[S]===0?_(null,Fe,Q,B,U,j,ue,ne,A):me&&(fe<0||S!==Te[fe]?ge(Fe,Q,B,2):fe--)}}},ge=(L,E,Q,te,U=null)=>{const{el:j,type:ue,transition:ne,children:A,shapeFlag:S}=L;if(S&6){ge(L.component.subTree,E,Q,te);return}if(S&128){L.suspense.move(E,Q,te);return}if(S&64){ue.move(L,E,Q,Ue);return}if(ue===jt){i(j,E,Q);for(let W=0;W<A.length;W++)ge(A[W],E,Q,te);i(L.anchor,E,Q);return}if(ue===ru){b(L,E,Q);return}if(te!==2&&S&1&&ne)if(te===0)ne.persisted&&!j[ki]?i(j,E,Q):(ne.beforeEnter(j),i(j,E,Q),Qn(()=>ne.enter(j),U));else{const{leave:W,delayLeave:Y,afterLeave:K}=ne,ae=()=>{L.ctx.isUnmounted?r(j):i(j,E,Q)},ce=()=>{const fe=j._isLeaving||!!j[ki];j._isLeaving&&j[ki](!0),ne.persisted&&!fe?ae():W(j,()=>{ae(),K&&K()})};Y?Y(j,ae,ce):ce()}else i(j,E,Q)},Ee=(L,E,Q,te=!1,U=!1)=>{const{type:j,props:ue,ref:ne,children:A,dynamicChildren:S,shapeFlag:z,patchFlag:W,dirs:Y,cacheIndex:K,memo:ae}=L;if(W===-2&&(U=!1),ne!=null&&(Qr(),pl(ne,null,Q,L,!0),es()),K!=null&&(E.renderCache[K]=void 0),z&256){E.ctx.deactivate(L);return}const ce=z&1&&Y,fe=!ml(L);let Ie;if(fe&&(Ie=ue&&ue.onVnodeBeforeUnmount)&&fr(Ie,E,L),z&6)de(L.component,Q,te);else{if(z&128){L.suspense.unmount(Q,te);return}ce&&ks(L,null,E,"beforeUnmount"),z&64?L.type.remove(L,E,Q,Ue,te):S&&!S.hasOnce&&(j!==jt||W>0&&W&64)?_e(S,E,Q,!1,!0):(j===jt&&W&384||!U&&z&16)&&_e(A,E,Q),te&&je(L)}const le=ae!=null&&K==null;(fe&&(Ie=ue&&ue.onVnodeUnmounted)||ce||le)&&Qn(()=>{Ie&&fr(Ie,E,L),ce&&ks(L,null,E,"unmounted"),le&&(L.el=null)},Q)},je=L=>{const{type:E,el:Q,anchor:te,transition:U}=L;if(E===jt){re(Q,te);return}if(E===ru){x(L);return}const j=()=>{r(Q),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(L.shapeFlag&1&&U&&!U.persisted){const{leave:ue,delayLeave:ne}=U,A=()=>ue(Q,j);ne?ne(L.el,j,A):A()}else j()},re=(L,E)=>{let Q;for(;L!==E;)Q=h(L),r(L),L=Q;r(E)},de=(L,E,Q)=>{const{bum:te,scope:U,job:j,subTree:ue,um:ne,m:A,a:S}=L;Nm(A),Nm(S),te&&iu(te),U.stop(),j&&(j.flags|=8,Ee(ue,L,E,Q)),ne&&Qn(ne,E),Qn(()=>{L.isUnmounted=!0},E)},_e=(L,E,Q,te=!1,U=!1,j=0)=>{for(let ue=j;ue<L.length;ue++)Ee(L[ue],E,Q,te,U)},pe=L=>{if(L.shapeFlag&6)return pe(L.component.subTree);if(L.shapeFlag&128)return L.suspense.next();const E=h(L.anchor||L.el),Q=E&&E[QS];return Q?h(Q):E};let Re=!1;const We=(L,E,Q)=>{let te;L==null?E._vnode&&(Ee(E._vnode,null,null,!0),te=E._vnode.component):_(E._vnode||null,L,E,null,null,null,Q),E._vnode=L,Re||(Re=!0,Em(te),N0(),Re=!1)},Ue={p:_,um:Ee,m:ge,r:je,mt:F,mc:P,pc:H,pbc:v,n:pe,o:n};let st,et;return{render:We,hydrate:st,createApp:MM(We,st)}}function kf({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Bs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function kM(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function ov(n,e,t=!1){const i=n.children,r=e.children;if($e(i)&&$e(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Hr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&ov(o,a)),a.type===gf&&(a.patchFlag===-1&&(a=r[s]=Hr(a)),a.el=o.el),a.type===Yn&&!a.el&&(a.el=o.el)}}function BM(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function av(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:av(e)}function Nm(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function lv(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?lv(e.subTree):null}const cv=n=>n.__isSuspense;function zM(n,e){e&&e.pendingBranch?$e(n)?e.effects.push(...n):e.effects.push(n):qS(n)}const jt=Symbol.for("v-fgt"),gf=Symbol.for("v-txt"),Yn=Symbol.for("v-cmt"),ru=Symbol.for("v-stc"),po=[];let bi=null;function qe(n=!1){po.push(bi=n?null:[])}function uv(){po.pop(),bi=po[po.length-1]||null}let Fl=1;function Du(n,e=!1){Fl+=n,n<0&&bi&&e&&(bi.hasOnce=!0)}function fv(n){return n.dynamicChildren=Fl>0?bi||la:null,uv(),Fl>0&&bi&&bi.push(n),n}function at(n,e,t,i,r,s){return fv(X(n,e,t,i,r,s,!0))}function zr(n,e,t,i,r){return fv(Qe(n,e,t,i,r,!0))}function Lu(n){return n?n.__v_isVNode===!0:!1}function no(n,e){return n.type===e.type&&n.key===e.key}const hv=({key:n})=>n??null,su=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Wt(n)||Xt(n)||Je(n)?{i:Mi,r:n,k:e,f:!!t}:n:null);function X(n,e=null,t=null,i=0,r=null,s=n===jt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&hv(e),ref:e&&su(e),scopeId:F0,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Mi};return a?(Iu(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Wt(t)?8:16),Fl>0&&!o&&bi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&bi.push(l),l}const Qe=HM;function HM(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===q0)&&(n=Yn),Lu(n)){const a=Rs(n,e,!0);return t&&Iu(a,t),Fl>0&&!s&&bi&&(a.shapeFlag&6?bi[bi.indexOf(n)]=a:bi.push(a)),a.patchFlag=-2,a}if(JM(n)&&(n=n.__vccOpts),e){e=VM(e);let{class:a,style:l}=e;a&&!Wt(a)&&(e.class=Gr(a)),Mt(l)&&(uf(l)&&!$e(l)&&(l=rn({},l)),e.style=Vi(l))}const o=Wt(n)?1:cv(n)?128:hf(n)?64:Mt(n)?4:Je(n)?2:0;return X(n,e,t,i,r,o,s,!0)}function VM(n){return n?uf(n)||ev(n)?rn({},n):n:null}function Rs(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?GM(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&hv(c),ref:e&&e.ref?t&&s?$e(s)?s.concat(su(e)):[s,su(e)]:su(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==jt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Rs(n.ssContent),ssFallback:n.ssFallback&&Rs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ol(u,l.clone(u)),u}function Ei(n=" ",e=0){return Qe(gf,null,n,e)}function dv(n,e){const t=Qe(ru,null,n);return t.staticCount=e,t}function Na(n="",e=!1){return e?(qe(),zr(Yn,null,n)):Qe(Yn,null,n)}function gr(n){return n==null||typeof n=="boolean"?Qe(Yn):$e(n)?Qe(jt,null,n.slice()):Lu(n)?Hr(n):Qe(gf,null,String(n))}function Hr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Rs(n)}function Iu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if($e(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Iu(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!ev(e)?e._ctx=Mi:r===3&&Mi&&(Mi.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Je(e)){if(i&65){Iu(n,{default:e});return}e={default:e,_ctx:Mi},t=32}else e=String(e),i&64?(t=16,e=[Ei(e)]):t=8;n.children=e,n.shapeFlag|=t}function GM(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Gr([e.class,i.class]));else if(r==="style")e.style=Vi([e.style,i.style]);else if(ef(r)){const s=e[r],o=i[r];o&&s!==o&&!($e(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!tf(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function fr(n,e,t,i=null){qi(n,e,7,[t,i])}const WM=j0();let XM=0;function $M(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||WM,s={uid:XM++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new d0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nv(i,r),emitsOptions:K0(i,r),emit:null,emitted:null,propsDefaults:kt,inheritAttrs:i.inheritAttrs,ctx:kt,data:kt,props:kt,attrs:kt,slots:kt,refs:kt,setupState:kt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=EM.bind(null,s),n.ce&&n.ce(s),s}let Dn=null;const Oa=()=>Dn||Mi;let Uu,kl;{const n=of(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Uu=e("__VUE_INSTANCE_SETTERS__",t=>Dn=t),kl=e("__VUE_SSR_SETTERS__",t=>Bl=t)}const sc=n=>{const e=Dn;return Uu(n),n.scope.on(),()=>{n.scope.off(),Uu(e)}},Om=()=>{Dn&&Dn.scope.off(),Uu(null)};function pv(n){return n.vnode.shapeFlag&4}let Bl=!1;function qM(n,e=!1,t=!1){e&&kl(e);const{props:i,children:r}=n.vnode,s=pv(n);PM(n,i,s,e),UM(n,r,t||e);const o=s?YM(n,e):void 0;return e&&kl(!1),o}function YM(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,mM);const{setup:i}=t;if(i){Qr();const r=n.setupContext=i.length>1?KM(n):null,s=sc(n),o=rc(i,n,0,[n.props,r]),a=o0(o);if(es(),s(),(a||n.sp)&&!ml(n)&&X0(n),a){if(o.then(Om,Om),e)return o.then(l=>{kl(!0);try{Fm(n,l,e)}finally{kl(!1)}}).catch(l=>{ff(l,n,0)});n.asyncDep=o}else Fm(n,o,e)}else mv(n,e)}function Fm(n,e,t){Je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Mt(e)&&(n.setupState=D0(e)),mv(n,t)}let km;function mv(n,e,t){const i=n.type;if(!n.render){if(!e&&km&&!i.render){const r=i.template||wp(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=rn(rn({isCustomElement:s,delimiters:a},o),l);i.render=km(r,c)}}n.render=i.render||Er}{const r=sc(n);Qr();try{gM(n)}finally{es(),r()}}}const jM={get(n,e){return Pn(n,"get",""),n[e]}};function KM(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,jM),slots:n.slots,emit:n.emit,expose:e}}function _f(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(D0(Sp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in gl)return gl[t](n)},has(e,t){return t in e||t in gl}})):n.proxy}function ZM(n,e=!0){return Je(n)?n.displayName||n.name:n.name||e&&n.__name}function JM(n){return Je(n)&&"__vccOpts"in n}const Zn=(n,e)=>VS(n,e,Bl);function Nu(n,e,t){try{Du(-1);const i=arguments.length;return i===2?Mt(e)&&!$e(e)?Lu(e)?Qe(n,null,[e]):Qe(n,e):Qe(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Lu(t)&&(t=[t]),Qe(n,e,t))}finally{Du(1)}}const QM="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $h;const Bm=typeof window<"u"&&window.trustedTypes;if(Bm)try{$h=Bm.createPolicy("vue",{createHTML:n=>n})}catch{}const gv=$h?n=>$h.createHTML(n):n=>n,e1="http://www.w3.org/2000/svg",t1="http://www.w3.org/1998/Math/MathML",kr=typeof document<"u"?document:null,zm=kr&&kr.createElement("template"),n1={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?kr.createElementNS(e1,n):e==="mathml"?kr.createElementNS(t1,n):t?kr.createElement(n,{is:t}):kr.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>kr.createTextNode(n),createComment:n=>kr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>kr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{zm.innerHTML=gv(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=zm.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},as="transition",Xa="animation",zl=Symbol("_vtc"),_v={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},i1=rn({},z0,_v),r1=n=>(n.displayName="Transition",n.props=i1,n),s1=r1((n,{slots:e})=>Nu(nM,o1(n),e)),zs=(n,e=[])=>{$e(n)?n.forEach(t=>t(...e)):n&&n(...e)},Hm=n=>n?$e(n)?n.some(e=>e.length>1):n.length>1:!1;function o1(n){const e={};for(const I in n)I in _v||(e[I]=n[I]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,g=a1(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:M,onEnterCancelled:b,onLeave:x,onLeaveCancelled:w,onBeforeAppear:C=p,onAppear:T=M,onAppearCancelled:P=b}=e,y=(I,k,F,q)=>{I._enterCancelled=q,Hs(I,k?u:a),Hs(I,k?c:o),F&&F()},v=(I,k)=>{I._isLeaving=!1,Hs(I,f),Hs(I,d),Hs(I,h),k&&k()},D=I=>(k,F)=>{const q=I?T:M,O=()=>y(k,I,F);zs(q,[k,O]),Vm(()=>{Hs(k,I?l:s),Dr(k,I?u:a),Hm(q)||Gm(k,i,_,O)})};return rn(e,{onBeforeEnter(I){zs(p,[I]),Dr(I,s),Dr(I,o)},onBeforeAppear(I){zs(C,[I]),Dr(I,l),Dr(I,c)},onEnter:D(!1),onAppear:D(!0),onLeave(I,k){I._isLeaving=!0;const F=()=>v(I,k);Dr(I,f),I._enterCancelled?(Dr(I,h),$m(I)):($m(I),Dr(I,h)),Vm(()=>{I._isLeaving&&(Hs(I,f),Dr(I,d),Hm(x)||Gm(I,i,m,F))}),zs(x,[I,F])},onEnterCancelled(I){y(I,!1,void 0,!0),zs(b,[I])},onAppearCancelled(I){y(I,!0,void 0,!0),zs(P,[I])},onLeaveCancelled(I){v(I),zs(w,[I])}})}function a1(n){if(n==null)return null;if(Mt(n))return[Bf(n.enter),Bf(n.leave)];{const e=Bf(n);return[e,e]}}function Bf(n){return oS(n)}function Dr(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[zl]||(n[zl]=new Set)).add(e)}function Hs(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[zl];t&&(t.delete(e),t.size||(n[zl]=void 0))}function Vm(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let l1=0;function Gm(n,e,t,i){const r=n._endId=++l1,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=c1(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=d=>{d.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function c1(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${as}Delay`),s=i(`${as}Duration`),o=Wm(r,s),a=i(`${Xa}Delay`),l=i(`${Xa}Duration`),c=Wm(a,l);let u=null,f=0,h=0;e===as?o>0&&(u=as,f=o,h=s.length):e===Xa?c>0&&(u=Xa,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?as:Xa:null,h=u?u===as?s.length:l.length:0);const d=u===as&&/\b(?:transform|all)(?:,|$)/.test(i(`${as}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function Wm(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Xm(t)+Xm(n[i])))}function Xm(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function $m(n){return(n?n.ownerDocument:document).body.offsetHeight}function u1(n,e,t){const i=n[zl];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const qm=Symbol("_vod"),f1=Symbol("_vsh"),h1=Symbol(""),d1=/(?:^|;)\s*display\s*:/;function p1(n,e,t){const i=n.style,r=Wt(t);let s=!1;if(t&&!r){if(e)if(Wt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&nl(i,a,"")}else for(const o in e)t[o]==null&&nl(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?g1(n,o,!Wt(e)&&e?e[o]:void 0,a)||nl(i,o,a):nl(i,o,"")}}else if(r){if(e!==t){const o=i[h1];o&&(t+=";"+o),i.cssText=t,s=d1.test(t)}}else e&&n.removeAttribute("style");qm in n&&(n[qm]=s?i.display:"",n[f1]&&(i.display="none"))}const Ym=/\s*!important$/;function nl(n,e,t){if($e(t))t.forEach(i=>nl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=m1(n,e);Ym.test(t)?n.setProperty(Co(i),t.replace(Ym,""),"important"):n[i]=t}}const jm=["Webkit","Moz","ms"],zf={};function m1(n,e){const t=zf[e];if(t)return t;let i=Kn(e);if(i!=="filter"&&i in n)return zf[e]=i;i=sf(i);for(let r=0;r<jm.length;r++){const s=jm[r]+i;if(s in n)return zf[e]=s}return e}function g1(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Wt(i)&&t===i}const Km="http://www.w3.org/1999/xlink";function Zm(n,e,t,i,r,s=hS(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Km,e.slice(6,e.length)):n.setAttributeNS(Km,e,t):t==null||s&&!u0(t)?n.removeAttribute(e):n.setAttribute(e,s?"":$i(t)?String(t):t)}function Jm(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?gv(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=u0(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Qo(n,e,t,i){n.addEventListener(e,t,i)}function _1(n,e,t,i){n.removeEventListener(e,t,i)}const Qm=Symbol("_vei");function v1(n,e,t,i,r=null){const s=n[Qm]||(n[Qm]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=S1(e);if(i){const c=s[e]=E1(i,r);Qo(n,a,c,l)}else o&&(_1(n,a,o,l),s[e]=void 0)}}const x1=/(Once|Passive|Capture)$/,y1=/^on:?(?:Once|Passive|Capture)$/;function S1(n){let e,t;for(;(t=n.match(x1))&&!y1.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Co(n.slice(2)),e]}let Hf=0;const M1=Promise.resolve(),b1=()=>Hf||(M1.then(()=>Hf=0),Hf=Date.now());function E1(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if($e(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&qi(c,e,5,a)}}else qi(r,e,5,[i])};return t.value=n,t.attached=b1(),t}const eg=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,T1=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?u1(n,i,o):e==="style"?p1(n,t,i):ef(e)?tf(e)||v1(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):w1(n,e,i,o))?(Jm(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Zm(n,e,i,o,s,e!=="value")):n._isVueCE&&(A1(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Wt(i)))?Jm(n,Kn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Zm(n,e,i,o))};function w1(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&eg(e)&&Je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return eg(e)&&Wt(t)?!1:e in n}function A1(n,e){const t=n._def.props;if(!t)return!1;const i=Kn(e);return Array.isArray(t)?t.some(r=>Kn(r)===i):Object.keys(t).some(r=>Kn(r)===i)}const tg=n=>{const e=n.props["onUpdate:modelValue"]||!1;return $e(e)?t=>iu(e,t):e};function C1(n){n.target.composing=!0}function ng(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const mc=Symbol("_assign"),gc=Symbol("_initialValue");function Vf(n,e,t){return e&&(n=n.trim()),t&&(n=dp(n)),n}const Gf={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n.parentNode&&(n.type==="text"?n[gc]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[gc]=n.defaultValue.replace(/\r\n?/g,`
`))),n[mc]=tg(r);const s=i||r.props&&r.props.type==="number";Qo(n,e?"change":"input",o=>{o.target.composing||n[mc](Vf(n.value,t,s))}),(t||s)&&Qo(n,"change",()=>{n.value=Vf(n.value,t,s)}),e||(Qo(n,"compositionstart",C1),Qo(n,"compositionend",ng),Qo(n,"change",ng))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const r=e??"",s=n[gc];delete n[gc],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[mc](Vf(n.value,t,i)):n.value=r},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[mc]=tg(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?dp(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},R1=["ctrl","shift","alt","meta"],P1={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>R1.some(t=>n[`${t}Key`]&&!e.includes(t))},ou=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=P1[e[o]];if(a&&a(r,e))return}return n(r,...s)})},D1=rn({patchProp:T1},n1);let ig;function L1(){return ig||(ig=OM(D1))}const I1=(...n)=>{const e=L1().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=N1(i);if(!r)return;const s=e._component;!Je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,U1(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function U1(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function N1(n){return Wt(n)?document.querySelector(n):n}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let vv;const vf=n=>vv=n,xv=Symbol();function qh(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var _l;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(_l||(_l={}));function O1(){const n=p0(!0),e=n.run(()=>Lt({}));let t=[],i=[];const r=Sp({install(s){vf(r),r._a=s,s.provide(xv,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return this._a?t.push(s):i.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const yv=()=>{};function rg(n,e,t,i=yv){n.add(e);const r=()=>{n.delete(e)&&i()};return!t&&mp()&&m0(r),r}function Lo(n,...e){n.forEach(t=>{t(...e)})}const F1=n=>n(),sg=Symbol(),Wf=Symbol();function Yh(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,i)=>n.set(i,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],r=n[t];qh(r)&&qh(i)&&n.hasOwnProperty(t)&&!Xt(i)&&!Kr(i)?n[t]=Yh(r,i):n[t]=i}return n}const k1=Symbol();function B1(n){return!qh(n)||!Object.prototype.hasOwnProperty.call(n,k1)}const{assign:ms}=Object;function z1(n){return!!(Xt(n)&&n.effect)}function H1(n,e,t,i){const{state:r,actions:s,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=r?r():{});const u=FS(t.state.value[n]);return ms(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=Sp(Zn(()=>{vf(t);const d=t._s.get(n);return o[h].call(d,d)})),f),{}))}return l=Sv(n,c,e,t,i,!0),l}function Sv(n,e,t={},i,r,s){let o;const a=ms({actions:{}},t),l={deep:!0};let c,u,f=new Set,h=new Set,d;const g=i.state.value[n];!s&&!g&&(i.state.value[n]={});let _;function m(P){let y;c=u=!1,typeof P=="function"?(P(i.state.value[n]),y={type:_l.patchFunction,storeId:n,events:d}):(Yh(i.state.value[n],P),y={type:_l.patchObject,payload:P,storeId:n,events:d});const v=_=Symbol();Ua().then(()=>{_===v&&(c=!0)}),u=!0,Lo(f,y,i.state.value[n])}const p=s?function(){const{state:y}=t,v=y?y():{};this.$patch(D=>{ms(D,v)})}:yv;function M(){o.stop(),f.clear(),h.clear(),i._s.delete(n)}const b=(P,y="")=>{if(sg in P)return P[Wf]=y,P;const v=function(){vf(i);const D=Array.from(arguments),I=new Set,k=new Set;function F(V){I.add(V)}function q(V){k.add(V)}Lo(h,{args:D,name:v[Wf],store:w,after:F,onError:q});let O;try{O=P.apply(this&&this.$id===n?this:w,D)}catch(V){throw Lo(k,V),V}return O instanceof Promise?O.then(V=>(Lo(I,V),V)).catch(V=>(Lo(k,V),Promise.reject(V))):(Lo(I,O),O)};return v[sg]=!0,v[Wf]=y,v},x={_p:i,$id:n,$onAction:rg.bind(null,h),$patch:m,$reset:p,$subscribe(P,y={}){const v=rg(f,P,y.detached,()=>D()),D=o.run(()=>wr(()=>i.state.value[n],I=>{(y.flush==="sync"?u:c)&&P({storeId:n,type:_l.direct,events:d},I)},ms({},l,y)));return v},$dispose:M},w=cf(x);i._s.set(n,w);const T=(i._a&&i._a.runWithContext||F1)(()=>i._e.run(()=>(o=p0()).run(()=>e({action:b}))));for(const P in T){const y=T[P];if(Xt(y)&&!z1(y)||Kr(y))s||(g&&B1(y)&&(Xt(y)?y.value=g[P]:Yh(y,g[P])),i.state.value[n][P]=y);else if(typeof y=="function"){const v=b(y,P);T[P]=v,a.actions[P]=y}}return ms(w,T),ms(vt(w),T),Object.defineProperty(w,"$state",{get:()=>i.state.value[n],set:P=>{m(y=>{ms(y,P)})}}),i._p.forEach(P=>{ms(w,o.run(()=>P({store:w,app:i._a,pinia:i,options:a})))}),g&&s&&t.hydrate&&t.hydrate(w.$state,g),c=!0,u=!0,w}/*! #__NO_SIDE_EFFECTS__ */function V1(n,e,t){let i;const r=typeof e=="function";i=r?t:e;function s(o,a){const l=bp();return o=o||(l?ha(xv,null):null),o&&vf(o),o=vv,o._s.has(n)||(r?Sv(n,e,i,o):H1(n,i,o)),o._s.get(n)}return s.$id=n,s}function G1(n){return mp()?(m0(n),!0):!1}const Xf=new WeakMap,W1=(...n)=>{var e;const t=n[0],i=(e=Oa())==null?void 0:e.proxy;if(i==null&&!bp())throw new Error("injectLocal must be called in setup");return i&&Xf.has(i)&&t in Xf.get(i)?Xf.get(i)[t]:ha(...n)},X1=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const $1=Object.prototype.toString,q1=n=>$1.call(n)==="[object Object]",Y1=()=>{};function Mv(...n){if(n.length!==1)return zS(...n);const e=n[0];return typeof e=="function"?Ul(OS(()=>({get:e,set:Y1}))):Lt(e)}function j1(n,e){function t(...i){return new Promise((r,s)=>{Promise.resolve(n(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(s)})}return t}const bv=n=>n();function K1(n=bv,e={}){const{initialState:t="active"}=e,i=Mv(t==="active");function r(){i.value=!1}function s(){i.value=!0}return{isActive:Ul(i),pause:r,resume:s,eventFilter:(...a)=>{i.value&&n(...a)}}}function og(n){return n.endsWith("rem")?Number.parseFloat(n)*16:Number.parseFloat(n)}function $f(n){return Array.isArray(n)?n:[n]}function Z1(n){return Oa()}function J1(n,e,t={}){const{eventFilter:i=bv,...r}=t;return wr(n,j1(i,e),r)}function Q1(n,e,t={}){const{eventFilter:i,initialState:r="active",...s}=t,{eventFilter:o,pause:a,resume:l,isActive:c}=K1(i,{initialState:r});return{stop:J1(n,e,{...s,eventFilter:o}),pause:a,resume:l,isActive:c}}function Ev(n,e=!0,t){Z1()?Di(n,t):e?n():Ua(n)}function eb(n=!1,e={}){const{truthyValue:t=!0,falsyValue:i=!1}=e,r=Xt(n),s=ua(n);function o(a){if(arguments.length)return s.value=a,s.value;{const l=Tr(t);return s.value=s.value===l?Tr(i):l,s.value}}return r?o:[s,o]}function tb(n,e,t){return wr(n,e,{...t,immediate:!0})}const Hl=X1?window:void 0;function Tv(n){var e;const t=Tr(n);return(e=t==null?void 0:t.$el)!=null?e:t}function jh(...n){const e=[],t=()=>{e.forEach(a=>a()),e.length=0},i=(a,l,c,u)=>(a.addEventListener(l,c,u),()=>a.removeEventListener(l,c,u)),r=Zn(()=>{const a=$f(Tr(n[0])).filter(l=>l!=null);return a.every(l=>typeof l!="string")?a:void 0}),s=tb(()=>{var a,l;return[(l=(a=r.value)==null?void 0:a.map(c=>Tv(c)))!=null?l:[Hl].filter(c=>c!=null),$f(Tr(r.value?n[1]:n[0])),$f(Ae(r.value?n[2]:n[1])),Tr(r.value?n[3]:n[2])]},([a,l,c,u])=>{if(t(),!(a!=null&&a.length)||!(l!=null&&l.length)||!(c!=null&&c.length))return;const f=q1(u)?{...u}:u;e.push(...a.flatMap(h=>l.flatMap(d=>c.map(g=>i(h,d,g,f)))))},{flush:"post"}),o=()=>{s(),t()};return G1(t),o}function nb(){const n=ua(!1),e=Oa();return e&&Di(()=>{n.value=!0},e),n}function ib(n){const e=nb();return Zn(()=>(e.value,!!n()))}const rb=Symbol("vueuse-ssr-width");function sb(){const n=bp()?W1(rb,null):null;return typeof n=="number"?n:void 0}function wv(n,e={}){const{window:t=Hl,ssrWidth:i=sb()}=e,r=ib(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function"),s=ua(typeof i=="number"),o=ua(),a=ua(!1),l=c=>{a.value=c.matches};return ZS(()=>{if(s.value){s.value=!r.value;const c=Tr(n).split(",");a.value=c.some(u=>{const f=u.includes("not all"),h=u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),d=u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let g=!!(h||d);return h&&g&&(g=i>=og(h[1])),d&&g&&(g=i<=og(d[1])),f?!g:g});return}r.value&&(o.value=t.matchMedia(Tr(n)),a.value=o.value.matches)}),jh(o,"change",l,{passive:!0}),Zn(()=>a.value)}const _c=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vc="__vueuse_ssr_handlers__",ob=ab();function ab(){return vc in _c||(_c[vc]=_c[vc]||{}),_c[vc]}function Av(n,e){return ob[n]||e}function lb(n){return wv("(prefers-color-scheme: dark)",n)}function cb(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}const ub={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},ag="vueuse-storage";function Cv(n,e,t,i={}){var r;const{flush:s="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:f=Hl,eventFilter:h,onError:d=F=>{console.error(F)},initOnMounted:g}=i,_=(u?ua:Lt)(typeof e=="function"?e():e),m=Zn(()=>Tr(n));if(!t)try{t=Av("getDefaultStorage",()=>{var F;return(F=Hl)==null?void 0:F.localStorage})()}catch(F){d(F)}if(!t)return _;const p=Tr(e),M=cb(p),b=(r=i.serializer)!=null?r:ub[M],{pause:x,resume:w}=Q1(_,F=>v(F),{flush:s,deep:o,eventFilter:h});wr(m,()=>I(),{flush:s});let C=!1;const T=F=>{g&&!C||I(F)},P=F=>{g&&!C||k(F)};f&&a&&(t instanceof Storage?jh(f,"storage",T,{passive:!0}):jh(f,ag,P)),g?Ev(()=>{C=!0,I()}):I();function y(F,q){if(f){const O={key:m.value,oldValue:F,newValue:q,storageArea:t};f.dispatchEvent(t instanceof Storage?new StorageEvent("storage",O):new CustomEvent(ag,{detail:O}))}}function v(F){try{const q=t.getItem(m.value);if(F==null)y(q,null),t.removeItem(m.value);else{const O=b.write(F);q!==O&&(t.setItem(m.value,O),y(q,O))}}catch(q){d(q)}}function D(F){const q=F?F.newValue:t.getItem(m.value);if(q==null)return l&&p!=null&&t.setItem(m.value,b.write(p)),p;if(!F&&c){const O=b.read(q);return typeof c=="function"?c(O,p):M==="object"&&!Array.isArray(O)?{...p,...O}:O}else return typeof q!="string"?q:b.read(q)}function I(F){if(!(F&&F.storageArea!==t)){if(F&&F.key==null){_.value=p;return}if(!(F&&F.key!==m.value)){x();try{const q=b.write(_.value);(F===void 0||(F==null?void 0:F.newValue)!==q)&&(_.value=D(F))}catch(q){d(q)}finally{F?Ua(w):w()}}}}function k(F){I(F.detail)}return _}const fb="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function hb(n={}){const{selector:e="html",attribute:t="class",initialValue:i="auto",window:r=Hl,storage:s,storageKey:o="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:l,emitAuto:c,disableTransition:u=!0}=n,f={auto:"",light:"light",dark:"dark",...n.modes||{}},h=lb({window:r}),d=Zn(()=>h.value?"dark":"light"),g=l||(o==null?Mv(i):Cv(o,i,s,{window:r,listenToStorageChanges:a})),_=Zn(()=>g.value==="auto"?d.value:g.value),m=Av("updateHTMLAttrs",(x,w,C)=>{const T=typeof x=="string"?r==null?void 0:r.document.querySelector(x):Tv(x);if(!T)return;const P=new Set,y=new Set;let v=null;if(w==="class"){const I=C.split(/\s/g);Object.values(f).flatMap(k=>(k||"").split(/\s/g)).filter(Boolean).forEach(k=>{I.includes(k)?P.add(k):y.add(k)})}else v={key:w,value:C};if(P.size===0&&y.size===0&&v===null)return;let D;u&&(D=r.document.createElement("style"),D.appendChild(document.createTextNode(fb)),r.document.head.appendChild(D));for(const I of P)T.classList.add(I);for(const I of y)T.classList.remove(I);v&&T.setAttribute(v.key,v.value),u&&(r.getComputedStyle(D).opacity,document.head.removeChild(D))});function p(x){var w;m(e,t,(w=f[x])!=null?w:x)}function M(x){n.onChanged?n.onChanged(x,p):p(x)}wr(_,M,{flush:"post",immediate:!0}),Ev(()=>M(_.value));const b=Zn({get(){return c?g.value:_.value},set(x){g.value=x}});return Object.assign(b,{store:g,system:d,state:_})}function db(n={}){const{valueDark:e="dark",valueLight:t=""}=n,i=hb({...n,onChanged:(o,a)=>{var l;n.onChanged?(l=n.onChanged)==null||l.call(n,o==="dark",a,o):a(o)},modes:{dark:e,light:t}}),r=Zn(()=>i.system.value);return Zn({get(){return i.value==="dark"},set(o){const a=o?"dark":"light";r.value===a?i.value="auto":i.value=a}})}function pb(n){const e=wv("(prefers-reduced-motion: reduce)",n);return Zn(()=>e.value?"reduce":"no-preference")}const Fa=V1("experience",()=>{const n=db({selector:"body",attribute:"class",valueDark:"dark",valueLight:""}),e=eb(n),t=Cv("portfolio-mode","immersive"),i=Lt(t.value);pb().value==="reduce"&&(i.value="clean",t.value="clean"),wr(i,p=>{t.value=p});function s(p){i.value=p}function o(){i.value=i.value==="immersive"?"clean":"immersive"}const a=Lt(0);function l(){const p=document.documentElement.scrollHeight-window.innerHeight;a.value=p>0?window.scrollY/p:0}const c=Lt(!1);let u=0,f=performance.now(),h=0,d=null;function g(){if(i.value!=="immersive")return;u=0,f=performance.now(),h=0;const p=()=>{u++;const M=performance.now();if(M-f>=1e3){const b=u;u=0,f=M,b<30?(h++,h>=3&&(c.value=!0)):h=Math.max(0,h-1)}i.value==="immersive"&&(d=requestAnimationFrame(p))};d=requestAnimationFrame(p)}function _(){d!==null&&(cancelAnimationFrame(d),d=null),c.value=!1}function m(){c.value=!1}return{isDark:n,toggleDark:e,mode:i,setMode:s,toggleMode:o,scrollProgress:a,updateScrollProgress:l,showFpsWarning:c,startFpsMonitor:g,stopFpsMonitor:_,dismissFpsWarning:m}});var lg="1.3.26";function Rv(n,e,t){return Math.max(n,Math.min(e,t))}function mb(n,e,t){return(1-t)*n+t*e}function gb(n,e,t,i){return mb(n,e,1-Math.exp(-t*i))}function _b(n,e){return(n%e+e)%e}var vb=class{constructor(){Be(this,"isRunning",!1);Be(this,"value",0);Be(this,"from",0);Be(this,"to",0);Be(this,"currentTime",0);Be(this,"lerp");Be(this,"duration");Be(this,"easing");Be(this,"onUpdate")}advance(n){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const i=Rv(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=gb(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:r,onStart:s,onUpdate:o}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function xb(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,i)},e)}}var yb=class{constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){Be(this,"width",0);Be(this,"height",0);Be(this,"scrollHeight",0);Be(this,"scrollWidth",0);Be(this,"debouncedResize");Be(this,"wrapperResizeObserver");Be(this,"contentResizeObserver");Be(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Be(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Be(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=e,t&&(this.debouncedResize=xb(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,e;(n=this.wrapperResizeObserver)==null||n.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Pv=class{constructor(){Be(this,"events",{})}emit(n,...e){var i;const t=this.events[n]||[];for(let r=0,s=t.length;r<s;r++)(i=t[r])==null||i.call(t,...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}}off(n,e){var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}};const Sb=100/6,ls={passive:!1};function cg(n,e){return n===1?Sb:n===2?e:1}var Mb=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){Be(this,"touchStart",{x:0,y:0});Be(this,"lastDelta",{x:0,y:0});Be(this,"window",{width:0,height:0});Be(this,"emitter",new Pv);Be(this,"onTouchStart",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});Be(this,"onTouchMove",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:n})});Be(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});Be(this,"onWheel",n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n;const r=cg(i,this.window.width),s=cg(i,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})});Be(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ls),this.element.addEventListener("touchstart",this.onTouchStart,ls),this.element.addEventListener("touchmove",this.onTouchMove,ls),this.element.addEventListener("touchend",this.onTouchEnd,ls)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,ls),this.element.removeEventListener("touchstart",this.onTouchStart,ls),this.element.removeEventListener("touchmove",this.onTouchMove,ls),this.element.removeEventListener("touchend",this.onTouchEnd,ls)}};const ug=n=>Math.min(1,1.001-2**(-10*n));var bb=class{constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:M=!0,autoRaf:b=!1,anchors:x=!1,autoToggle:w=!1,allowNestedScroll:C=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:P=T,stopInertiaOnNavigate:y=!1,respectReducedMotion:v=!0}={}){Be(this,"_isScrolling",!1);Be(this,"_isStopped",!1);Be(this,"_isLocked",!1);Be(this,"_preventNextNativeScrollEvent",!1);Be(this,"_resetVelocityTimeout",null);Be(this,"_rafId",null);Be(this,"_isDraggingSelection",!1);Be(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Be(this,"isTouching");Be(this,"isIos");Be(this,"time",0);Be(this,"userData",{});Be(this,"lastVelocity",0);Be(this,"velocity",0);Be(this,"direction",0);Be(this,"options");Be(this,"targetScroll");Be(this,"animatedScroll");Be(this,"animate",new vb);Be(this,"emitter",new Pv);Be(this,"dimensions");Be(this,"virtualScroll");Be(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});Be(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Be(this,"onTransitionEnd",n=>{var e;(e=n.propertyName)!=null&&e.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});Be(this,"onClick",n=>{const e=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}});Be(this,"onPointerDown",n=>{n.button===1&&this.reset()});Be(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");if(r&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(g=>{var _,m,p,M,b;return g instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(g))||((_=g.hasAttribute)==null?void 0:_.call(g,"data-lenis-prevent"))||u==="vertical"&&((m=g.hasAttribute)==null?void 0:m.call(g,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=g.hasAttribute)==null?void 0:p.call(g,"data-lenis-prevent-horizontal"))||r&&((M=g.hasAttribute)==null?void 0:M.call(g,"data-lenis-prevent-touch"))||s&&((b=g.hasAttribute)==null?void 0:b.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const h=r&&this.options.syncTouch,d=r&&i.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...h?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Be(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Be(this,"raf",n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=lg,window.lenis||(window.lenis={}),window.lenis.version=lg,f==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!n||n===document.documentElement)&&(n=window),typeof a=="number"&&typeof l!="function"?l=ug:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:M,autoRaf:b,anchors:x,autoToggle:w,allowNestedScroll:C,naiveDimensions:P,stopInertiaOnNavigate:y,respectReducedMotion:v},this.dimensions=new yb(n,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Mb(t,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}isTouchOnSelectionHandle(n){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=n.targetTouches[0]??n.changedTouches[0];if(!t)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const r=i[0],s=i[i.length-1],o=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if(this.prefersReducedMotion&&(r?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let h=n,d=e;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let g=null;if(typeof h=="string"?(g=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),g||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&(h!=null&&h.nodeType)&&(g=h),g){if(this.options.wrapper!==window){const x=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?x.left:x.top}const _=g.getBoundingClientRect(),m=getComputedStyle(g),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),M=getComputedStyle(this.rootElement),b=this.isHorizontal?Number.parseFloat(M.scrollPaddingLeft):Number.parseFloat(M.scrollPaddingTop);h=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(b)?0:b)}}if(typeof h=="number"){if(h+=d,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const g=h-this.animatedScroll;g>this.limit/2?h-=this.limit:g<-this.limit/2&&(h+=this.limit)}}else h=Rv(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=h),typeof o=="number"&&typeof a!="function"?a=ug:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,h,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),r&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const i=Date.now();n._lenis||(n._lenis={});const r=n._lenis;let s,o,a,l,c,u,f,h,d,g;if(i-(r.time??0)>2e3){r.time=Date.now();const C=window.getComputedStyle(n);if(r.computedStyle=C,s=["auto","overlay","scroll"].includes(C.overflowX),o=["auto","overlay","scroll"].includes(C.overflowY),c=["auto"].includes(C.overscrollBehaviorX),u=["auto"].includes(C.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;f=n.scrollWidth,h=n.scrollHeight,d=n.clientWidth,g=n.clientHeight,a=f>d,l=h>g,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=f,r.scrollHeight=h,r.clientWidth=d,r.clientHeight=g,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,f=r.scrollWidth,h=r.scrollHeight,d=r.clientWidth,g=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,p,M,b,x,w;if(_==="horizontal")m=Math.round(n.scrollLeft),p=f-d,M=e,b=s,x=a,w=c;else if(_==="vertical")m=Math.round(n.scrollTop),p=h-g,M=t,b=o,x=l,w=u;else return!1;return!w&&(m>=p||m<=0)?!0:(M>0?m<p:m>0)&&b&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?_b(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};function Br(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Dv(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ci={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Vl={duration:.5,overwrite:!1,delay:0},Rp,En,Gt,Gi=1e8,Ft=1/Gi,Kh=Math.PI*2,Eb=Kh/4,Tb=0,Lv=Math.sqrt,wb=Math.cos,Ab=Math.sin,Sn=function(e){return typeof e=="string"},Qt=function(e){return typeof e=="function"},ns=function(e){return typeof e=="number"},Pp=function(e){return typeof e>"u"},Cr=function(e){return typeof e=="object"},ri=function(e){return e!==!1},Dp=function(){return typeof window<"u"},xc=function(e){return Qt(e)||Sn(e)},Iv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Un=Array.isArray,Cb=/random\([^)]+\)/g,Rb=/,\s*/g,fg=/(?:-?\.?\d|\.)+/gi,Uv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ia=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Nv=/[+-]=-?[.\d]+/,Pb=/[^,'"\[\]\s]+/gi,Db=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Yt,dr,Zh,Lp,Ri={},Ou={},Ov,Fv=function(e){return(Ou=ba(e,Ri))&&ui},Ip=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Gl=function(e,t){return!t&&console.warn(e)},kv=function(e,t){return e&&(Ri[e]=t)&&Ou&&(Ou[e]=t)||Ri},Wl=function(){return 0},Lb={suppressEvents:!0,isStart:!0,kill:!1},au={suppressEvents:!0,kill:!1},Ib={suppressEvents:!0},Up={},Es=[],Jh={},Bv,_i={},Yf={},hg=30,lu=[],Np="",Op=function(e){var t=e[0],i,r;if(Cr(t)||Qt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=lu.length;r--&&!lu[r].targetTest(t););i=lu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new ax(e[r],i)))||e.splice(r,1);return e},mo=function(e){return e._gsap||Op(Wi(e))[0]._gsap},zv=function(e,t,i){return(i=e[t])&&Qt(i)?e[t]():Pp(i)&&e.getAttribute&&e.getAttribute(t)||i},si=function(e,t){return(e=e.split(",")).forEach(t)||e},tn=function(e){return Math.round(e*1e5)/1e5||0},qt=function(e){return Math.round(e*1e7)/1e7||0},da=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},Ub=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Fu=function(){var e=Es.length,t=Es.slice(0),i,r;for(Jh={},Es.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Fp=function(e){return!!(e._initted||e._startAt||e.add)},Hv=function(e,t,i,r){Es.length&&!En&&Fu(),e.render(t,i,!!(En&&t<0&&Fp(e))),Es.length&&!En&&Fu()},Vv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Pb).length<2?t:Sn(e)?e.trim():e},Gv=function(e){return e},Pi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Nb=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},ba=function(e,t){for(var i in t)e[i]=t[i];return e},dg=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Cr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},ku=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},vl=function(e){var t=e.parent||Yt,i=e.keyframes?Nb(Un(e.keyframes)):Pi;if(ri(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Ob=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Wv=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},xf=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ps=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},go=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Fb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Qh=function(e,t,i,r){return e._startAt&&(En?e._startAt.revert(au):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},kb=function n(e){return!e||e._ts&&n(e.parent)},pg=function(e){return e._repeat?Ea(e._tTime,e=e.duration()+e._rDelay)*e:0},Ea=function(e,t){var i=Math.floor(e=qt(e/t));return e&&i===e?i-1:i},Bu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},yf=function(e){return e._end=qt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ft)||0))},Sf=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=qt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),yf(e),i._dirty||go(i,e)),e},Xv=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Bu(e.rawTime(),t),(!t._dur||oc(0,t.totalDuration(),i)-t._tTime>Ft)&&t.render(i,!0)),go(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Ft}},xr=function(e,t,i,r){return t.parent&&Ps(t),t._start=qt((ns(i)?i:i||e!==Yt?Fi(e,i,t):e._time)+t._delay),t._end=qt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Wv(e,t,"_first","_last",e._sort?"_start":0),ed(t)||(e._recent=t),r||Xv(e,t),e._ts<0&&Sf(e,e._tTime),e},$v=function(e,t){return(Ri.ScrollTrigger||Ip("scrollTrigger",t))&&Ri.ScrollTrigger.create(t,e)},qv=function(e,t,i,r,s){if(Bp(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!En&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Bv!==yi.frame)return Es.push(e),e._lazy=[s,r],1},Bb=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},ed=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},zb=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&Bb(e)&&!(!e._initted&&ed(e))||(e._ts<0||e._dp._ts<0)&&!ed(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=oc(0,e._tDur,t),u=Ea(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ea(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||En||r||e._zTime===Ft||!t&&e._zTime){if(!e._initted&&qv(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?Ft:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Qh(e,t,i,!0),e._onUpdate&&!i&&Ti(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ti(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ps(e,1),!i&&!En&&(Ti(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Hb=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ta=function(e,t,i,r){var s=e._repeat,o=qt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:qt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Sf(e,e._tTime=e._tDur*a),e.parent&&yf(e),i||go(e.parent,e),e},mg=function(e){return e instanceof ni?go(e):Ta(e,e._dur)},Vb={_start:0,endTime:Wl,totalDuration:Wl},Fi=function n(e,t,i){var r=e.labels,s=e._recent||Vb,o=e.duration()>=Gi?s.endTime(!1):e._dur,a,l,c;return Sn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Un(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},xl=function(e,t,i){var r=ns(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ri(l.vars.inherit)&&l.parent;o.immediateRender=ri(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new ln(t[0],o,t[s+1])},Os=function(e,t){return e||e===0?t(e):t},oc=function(e,t,i){return i<e?e:i>t?t:i},Ln=function(e,t){return!Sn(e)||!(t=Db.exec(e))?"":t[1]},Gb=function(e,t,i){return Os(i,function(r){return oc(e,t,r)})},td=[].slice,Yv=function(e,t){return e&&Cr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Cr(e[0]))&&!e.nodeType&&e!==dr},Wb=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Sn(r)&&!t||Yv(r,1)?(s=i).push.apply(s,Wi(r)):i.push(r)})||i},Wi=function(e,t,i){return Gt&&!t&&Gt.selector?Gt.selector(e):Sn(e)&&!i&&(Zh||!wa())?td.call((t||Lp).querySelectorAll(e),0):Un(e)?Wb(e,i):Yv(e)?td.call(e,0):e?[e]:[]},nd=function(e){return e=Wi(e)[0]||Gl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Wi(t,i.querySelectorAll?i:i===e?Gl("Invalid scope")||Lp.createElement("div"):e)}},jv=function(e){return e.sort(function(){return .5-Math.random()})},Kv=function(e){if(Qt(e))return e;var t=Cr(e)?e:{each:e},i=_o(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return Sn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||t).length,m=o[_],p,M,b,x,w,C,T,P,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,Gi])[1],!y){for(T=-Gi;T<(T=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=o[_]=[],p=l?Math.min(y,_)*u-.5:r%y,M=y===Gi?0:l?_*f/y-.5:r/y|0,T=0,P=Gi,C=0;C<_;C++)b=C%y-p,x=M-(C/y|0),m[C]=w=c?Math.abs(c==="y"?x:b):Lv(b*b+x*x),w>T&&(T=w),w<P&&(P=w);r==="random"&&jv(m),m.max=T-P,m.min=P,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Ln(t.amount||t.each)||0,i=i&&_<0?iE(i):i}return _=(m[h]-m.min)/m.max||0,qt(m.b+(i?i(_):_)*m.v)+m.u}},id=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=qt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(ns(i)?0:Ln(i))}},Zv=function(e,t){var i=Un(e),r,s;return!i&&Cr(e)&&(r=i=e.radius||Gi,e.values?(e=Wi(e.values),(s=!ns(e[0]))&&(r*=r)):e=id(e.increment)),Os(t,i?Qt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Gi,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||ns(o)?u:u+Ln(o)}:id(e))},Jv=function(e,t,i,r){return Os(Un(e)?!t:i===!0?!!(i=0):!r,function(){return Un(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},Xb=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},$b=function(e,t){return function(i){return e(parseFloat(i))+(t||Ln(i))}},qb=function(e,t,i){return ex(e,t,0,1,i)},Qv=function(e,t,i){return Os(i,function(r){return e[~~t(r)]})},Yb=function n(e,t,i){var r=t-e;return Un(e)?Qv(e,n(0,e.length),t):Os(i,function(s){return(r+(s-e)%r)%r+e})},jb=function n(e,t,i){var r=t-e,s=r*2;return Un(e)?Qv(e,n(0,e.length-1),t):Os(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Xl=function(e){return e.replace(Cb,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Rb);return Jv(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},ex=function(e,t,i,r,s){var o=t-e,a=r-i;return Os(s,function(l){return i+((l-e)/o*a||0)})},Kb=function n(e,t,i,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Sn(e),a={},l,c,u,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Un(e)&&!Un(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},i=t}else r||(e=ba(Un(e)?[]:{},e));if(!u){for(l in t)kp.call(a,e,l,"get",t[l]);s=function(g){return Vp(g,a)||(o?e.p:e)}}}return Os(i,s)},gg=function(e,t,i){var r=e.labels,s=Gi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ti=function(e,t,i){var r=e.vars,s=r[t],o=Gt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Es.length&&Fu(),a&&(Gt=a),u=l?s.apply(c,l):s.call(c),Gt=o,u},il=function(e){return Ps(e),e.scrollTrigger&&e.scrollTrigger.kill(!!En),e.progress()<1&&Ti(e,"onInterrupt"),e},ra,tx=[],nx=function(e){if(e)if(e=!e.name&&e.default||e,Dp()||e.headless){var t=e.name,i=Qt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Wl,render:Vp,add:kp,kill:dE,modifier:hE,rawVars:0},o={targetTest:0,get:0,getSetter:Hp,aliases:{},register:0};if(wa(),e!==r){if(_i[t])return;Pi(r,Pi(ku(e,s),o)),ba(r.prototype,ba(s,ku(e,o))),_i[r.prop=t]=r,e.targetTest&&(lu.push(r),Up[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}kv(t,r),e.register&&e.register(ui,r,oi)}else tx.push(e)},Ot=255,rl={aqua:[0,Ot,Ot],lime:[0,Ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ot],navy:[0,0,128],white:[Ot,Ot,Ot],olive:[128,128,0],yellow:[Ot,Ot,0],orange:[Ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ot,0,0],pink:[Ot,192,203],cyan:[0,Ot,Ot],transparent:[Ot,Ot,Ot,0]},jf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ot+.5|0},ix=function(e,t,i){var r=e?ns(e)?[e>>16,e>>8&Ot,e&Ot]:0:rl.black,s,o,a,l,c,u,f,h,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),rl[e])r=rl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ot,r&Ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ot,e&Ot]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(fg),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=jf(l+1/3,s,o),r[1]=jf(l,s,o),r[2]=jf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Uv),i&&r.length<4&&(r[3]=1),r}else r=e.match(fg)||rl.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Ot,o=r[1]/Ot,a=r[2]/Ot,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},rx=function(e){var t=[],i=[],r=-1;return e.split(Ts).forEach(function(s){var o=s.match(ia)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},_g=function(e,t,i){var r="",s=(e+r).match(Ts),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=ix(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=rx(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Ts,"1").split(ia),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Ts),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},Ts=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in rl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),Zb=/hsl[a]?\(/,sx=function(e){var t=e.join(" "),i;if(Ts.lastIndex=0,Ts.test(t))return i=Zb.test(t),e[1]=_g(e[1],i),e[0]=_g(e[0],i,rx(e[1])),!0},$l,yi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(m){var p=n()-r,M=m===!0,b,x,w,C;if((p>e||p<0)&&(i+=p-t),r+=p,w=r-i,b=w-o,(b>0||M)&&(C=++f.frame,h=w-f.time*1e3,f.time=w=w/1e3,o+=b+(b>=s?4:s-b),x=1),M||(l=c(_)),x)for(d=0;d<a.length;d++)a[d](w,h,C,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Ov&&(!Zh&&Dp()&&(dr=Zh=window,Lp=dr.document||{},Ri.gsap=ui,(dr.gsapVersions||(dr.gsapVersions=[])).push(ui.version),Fv(Ou||dr.GreenSockGlobals||!dr.gsap&&dr||{}),tx.forEach(nx)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},$l=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),$l=0,c=Wl},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,M){var b=p?function(x,w,C,T){m(x,w,C,T),f.remove(b)}:m;return f.remove(m),a[M?"unshift":"push"](b),wa(),b},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),wa=function(){return!$l&&yi.wake()},_t={},Jb=/^[\d.\-M][\d.\-,\s]/,Qb=/["']/g,eE=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(Qb,"").trim():+c,r=l.substr(a+1).trim();return t},tE=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},nE=function(e){var t=(e+"").split("("),i=_t[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[eE(t[1])]:tE(e).split(",").map(Vv)):_t._CE&&Jb.test(e)?_t._CE("",e):i},iE=function(e){return function(t){return 1-e(1-t)}},_o=function(e,t){return e&&(Qt(e)?e:_t[e]||nE(e))||t},Ro=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return si(e,function(a){_t[a]=Ri[a]=s,_t[o=a.toLowerCase()]=i;for(var l in s)_t[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_t[a+"."+l]=s[l]}),s},ox=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Kf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Kh*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*Ab((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:ox(a);return s=Kh/s,l.config=function(c,u){return n(e,c,u)},l},Zf=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:ox(i);return r.config=function(s){return n(e,s)},r};si("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Ro(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;Ro("Elastic",Kf("in"),Kf("out"),Kf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Ro("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ro("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Ro("Circ",function(n){return-(Lv(1-n*n)-1)});Ro("Sine",function(n){return n===1?1:-wb(n*Eb)+1});Ro("Back",Zf("in"),Zf("out"),Zf());_t.SteppedEase=_t.steps=Ri.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Ft;return function(a){return((r*oc(0,o,a)|0)+s)*i}}};Vl.ease=_t["quad.out"];si("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Np+=n+","+n+"Params,"});var ax=function(e,t){this.id=Tb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:zv,this.set=t?t.getSetter:Hp},ql=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ta(this,+t.duration,1,1),this.data=t.data,Gt&&(this._ctx=Gt,Gt.data.push(this)),$l||yi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ta(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(wa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Sf(this,i),!s._dp||s.parent||Xv(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&xr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ft||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Hv(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+pg(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+pg(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Ea(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Ft?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Bu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Ft?0:this._rts,this.totalTime(oc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),yf(this),Fb(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(wa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ft&&(this._tTime-=Ft)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=qt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&xr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ri(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Ib);var r=En;return En=i,Fp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),En=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,mg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,mg(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Fi(this,i),ri(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ri(r)),this._dur||(this._zTime=-Ft),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ft:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ft,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Ft)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Qt(i)?i:Gv,l=function(){var u=r.then;r.then=null,s&&s(),Qt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){il(this)},n}();Pi(ql.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ft,_prom:0,_ps:!1,_rts:1});var ni=function(n){Dv(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ri(i.sortChildren),Yt&&xr(i.parent||Yt,Br(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&$v(Br(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return xl(0,arguments,this),this},t.from=function(r,s,o){return xl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return xl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,vl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ln(r,s,Fi(this,o),1),this},t.call=function(r,s,o){return xr(this,ln.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ln(r,o,Fi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,vl(o).immediateRender=ri(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,vl(a).immediateRender=ri(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:qt(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,m,p,M,b,x,w,C,T;if(this!==Yt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,x=this._start,b=this._ts,p=!b,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=qt(u%m),u===l?(_=this._repeat,h=c):(w=qt(u/m),_=~~w,_&&_===w&&(h=c,_--),h>c&&(h=c)),w=Ea(this._tTime,m),!a&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),C&&_&1&&(h=c-h,T=1),_!==w&&!this._lock){var P=C&&w&1,y=P===(C&&_&1);if(_<w&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(T?0:qt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ti(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,w=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Hb(this,qt(a),qt(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!w&&(Ti(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-Ft);break}}d=g}else{d=this._last;for(var v=r<0?r:h;d;){if(g=d._prev,(d._act||v<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,o||En&&Fp(d)),h!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=v?-Ft:Ft);break}}d=g}}if(M&&!s&&(this.pause(),M.render(h>=a?0:-Ft)._zTime=h>=a?1:-1,this._ts))return this._start=x,yf(this),this.render(r,s,o);this._onUpdate&&!s&&Ti(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ps(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Ti(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ns(s)||(s=Fi(this,s,r)),!(r instanceof ql)){if(Un(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Sn(r))return this.addLabel(r,s);if(Qt(r))r=ln.delayedCall(0,r);else return this}return this!==r?xr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Gi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ln?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Sn(r)?this.removeLabel(r):Qt(r)?this.killTweensOf(r):(r.parent===this&&xf(this,r),r===this._recent&&(this._recent=this._last),go(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=qt(yi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Fi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=ln.delayedCall(0,s||Wl,o);return a.data="isPause",this._hasPause=1,xr(this,a,Fi(this,r))},t.removePause=function(r){var s=this._first;for(r=Fi(this,r);s;)s._start===r&&s.data==="isPause"&&Ps(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)xs!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Wi(r),l=this._first,c=ns(s),u;l;)l instanceof ln?Ub(l._targets,a)&&(c?(!xs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Fi(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=ln.to(o,Pi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ft,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Ta(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Pi({startAt:{time:Fi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),gg(this,Fi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),gg(this,Fi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ft)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=qt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return go(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),go(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Gi,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,xr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=qt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ta(o,o===Yt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Yt._ts&&(Hv(Yt,Bu(r,Yt)),Bv=yi.frame),yi.frame>=hg){hg+=Ci.autoSleep||120;var s=Yt._first;if((!s||!s._ts)&&Ci.autoSleep&&yi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||yi.sleep()}}},e}(ql);Pi(ni.prototype,{_lock:0,_hasPause:0,_forcing:0});var rE=function(e,t,i,r,s,o,a){var l=new oi(this._pt,e,t,0,1,dx,null,s),c=0,u=0,f,h,d,g,_,m,p,M;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=Xl(r)),o&&(M=[i,r],o(M,e,t),i=M[0],r=M[1]),h=i.match(qf)||[];f=qf.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?da(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=qf.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Nv.test(r)||p)&&(l.e=0),this._pt=l,l},kp=function(e,t,i,r,s,o,a,l,c,u){Qt(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:Qt(f)?c?e[t.indexOf("set")||!Qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Qt(f)?c?cE:fx:zp,g;if(Sn(r)&&(~r.indexOf("random(")&&(r=Xl(r)),r.charAt(1)==="="&&(g=da(h,r)+(Ln(h)||0),(g||g===0)&&(r=g))),!u||h!==r||rd)return!isNaN(h*r)&&r!==""?(g=new oi(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?fE:hx,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Ip(t,r),rE.call(this,e,t,h,r,d,l||Ci.stringFilter,c))},sE=function(e,t,i,r,s){if(Qt(e)&&(e=yl(e,s,t,i,r)),!Cr(e)||e.style&&e.nodeType||Un(e)||Iv(e))return Sn(e)?yl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=yl(e[a],s,t,i,r);return o},lx=function(e,t,i,r,s,o){var a,l,c,u;if(_i[e]&&(a=new _i[e]).init(s,a.rawVars?t[e]:sE(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new oi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==ra))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},xs,rd,Bp=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,b=e._overwrite==="auto"&&!Rp,x=e.timeline,w=r.easeReverse||f,C,T,P,y,v,D,I,k,F,q,O,V,H;if(x&&(!h||!s)&&(s="none"),e._ease=_o(s,Vl.ease),e._rEase=w&&(_o(w)||e._ease),e._from=!x&&!!r.runBackwards,e._from&&(e.ratio=1),!x||h&&!r.stagger){if(k=m[0]?mo(m[0]).harness:0,V=k&&r[k.prop],C=ku(r,Up),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?au:Lb),_._lazy=0),o){if(Ps(e._startAt=ln.set(m,Pi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&ri(l),startAt:null,delay:0,onUpdate:c&&function(){return Ti(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(En||!a&&!d)&&e._startAt.revert(au),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),P=Pi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ri(l),immediateRender:a,stagger:0,parent:p},C),V&&(P[k.prop]=V),Ps(e._startAt=ln.set(m,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(En?e._startAt.revert(au):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Ft,Ft);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ri(l)||l&&!g,T=0;T<m.length;T++){if(v=m[T],I=v._gsap||Op(m)[T]._gsap,e._ptLookup[T]=q={},Jh[I.id]&&Es.length&&Fu(),O=M===m?T:M.indexOf(v),k&&(F=new k).init(v,V||C,e,O,M)!==!1&&(e._pt=y=new oi(e._pt,v,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(se){q[se]=y}),F.priority&&(D=1)),!k||V)for(P in C)_i[P]&&(F=lx(P,C,e,O,v,M))?F.priority&&(D=1):q[P]=y=kp.call(e,v,P,"get",C[P],O,M,0,r.stringFilter);e._op&&e._op[T]&&e.kill(v,e._op[T]),b&&e._pt&&(xs=e,Yt.killTweensOf(v,q,e.globalTime(t)),H=!e.parent,xs=0),e._pt&&l&&(Jh[I.id]=1)}D&&px(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!H,h&&t<=0&&x.render(Gi,!0,!0)},oE=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return rd=1,e.vars[t]="+=0",Bp(e,a),rd=0,l?Gl(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,f.e&&(f.e=tn(i)+Ln(f.e)),f.b&&(f.b=u.s+Ln(f.b))},aE=function(e,t){var i=e[0]?mo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=ba({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},lE=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Un(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},yl=function(e,t,i,r,s){return Qt(e)?e.call(t,i,r,s):Sn(e)&&~e.indexOf("random(")?Xl(e):e},cx=Np+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ux={};si(cx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return ux[n]=1});var ln=function(n){Dv(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:vl(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=r.parent||Yt,M=(Un(i)||Iv(i)?ns(i[0]):"length"in r)?[i]:Wi(i),b,x,w,C,T,P,y,v;if(a._targets=M.length?Op(M):Gl("GSAP target "+i+" not found. https://gsap.com",!Ci.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||xc(c)||xc(u)){r=a.vars;var D=r.easeReverse||r.yoyoEase;if(b=a.timeline=new ni({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:M}),b.kill(),b.parent=b._dp=Br(a),b._start=0,h||xc(c)||xc(u)){if(C=M.length,y=h&&Kv(h),Cr(h))for(T in h)~cx.indexOf(T)&&(v||(v={}),v[T]=h[T]);for(x=0;x<C;x++)w=ku(r,ux),w.stagger=0,D&&(w.easeReverse=D),v&&ba(w,v),P=M[x],w.duration=+yl(c,Br(a),x,P,M),w.delay=(+yl(u,Br(a),x,P,M)||0)-a._delay,!h&&C===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),b.to(P,w,y?y(x,P,M):0),b._ease=_t.none;b.duration()?c=u=0:a.timeline=0}else if(g){vl(Pi(b.vars.defaults,{ease:"none"})),b._ease=_o(g.ease||r.ease||"none");var I=0,k,F,q;if(Un(g))g.forEach(function(O){return b.to(M,O,">")}),b.duration();else{w={};for(T in g)T==="ease"||T==="easeEach"||lE(T,g[T],w,g.easeEach);for(T in w)for(k=w[T].sort(function(O,V){return O.t-V.t}),I=0,x=0;x<k.length;x++)F=k[x],q={ease:F.e,duration:(F.t-(x?k[x-1].t:0))/100*c},q[T]=F.v,b.to(M,q,I),I+=q.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return d===!0&&!Rp&&(xs=Br(a),Yt.killTweensOf(M),xs=0),xr(p,Br(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===qt(p._time)&&ri(f)&&kb(Br(a))&&p.data!=="nested")&&(a._tTime=-Ft,a.render(Math.max(0,-u)||0)),m&&$v(Br(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Ft&&!u?l:r<Ft?0:r,h,d,g,_,m,p,M,b;if(!c)zb(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(h=qt(f%_),f===l?(g=this._repeat,h=c):(m=qt(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(h=c-h),m=Ea(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(qt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(qv(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var x=h<a;if(x!==this._inv){var w=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=w?(x?-1:1)/w:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(h/c);if(this._from&&(this.ratio=M=1-M),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(Ti(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;b&&b.render(r<0?r:b._dur*b._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Qh(this,r,s,o),Ti(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Ti(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Qh(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ps(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Ti(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){$l||yi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Bp(this,c),u=this._ease(c/this._dur),oE(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Sf(this,0),this.parent||Wv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?il(this):this.scrollTrigger&&this.scrollTrigger.kill(!!En),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,xs&&xs.vars.overwrite!==!0)._first||il(this),this.parent&&o!==this.timeline.totalDuration()&&Ta(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Wi(r):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&Ob(a,l))return s==="all"&&(this._pt=0),il(this);for(f=this._op=this._op||[],s!=="all"&&(Sn(s)&&(_={},si(s,function(M){return _[M]=1}),s=_),s=aE(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&xf(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&il(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return xl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return xl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Yt.killTweensOf(r,s,o)},e}(ql);Pi(ln.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});si("staggerTo,staggerFrom,staggerFromTo",function(n){ln[n]=function(){var e=new ni,t=td.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var zp=function(e,t,i){return e[t]=i},fx=function(e,t,i){return e[t](i)},cE=function(e,t,i,r){return e[t](r.fp,i)},uE=function(e,t,i){return e.setAttribute(t,i)},Hp=function(e,t){return Qt(e[t])?fx:Pp(e[t])&&e.setAttribute?uE:zp},hx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},fE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},dx=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Vp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},hE=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},dE=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?xf(this,t,"_pt"):t.dep||(i=1),t=r;return!i},pE=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},px=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},oi=function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||hx,this.d=l||this,this.set=c||zp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=pE,this.m=i,this.mt=s,this.tween=r},n}();si(Np+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return Up[n]=1});Ri.TweenMax=Ri.TweenLite=ln;Ri.TimelineLite=Ri.TimelineMax=ni;Yt=new ni({sortChildren:!1,defaults:Vl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ci.stringFilter=sx;var vo=[],cu={},mE=[],vg=0,gE=0,Jf=function(e){return(cu[e]||mE).map(function(t){return t()})},sd=function(){var e=Date.now(),t=[];e-vg>2&&(Jf("matchMediaInit"),vo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=dr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Jf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),vg=e,Jf("matchMedia"))},mx=function(){function n(t,i){this.selector=i&&nd(i),this.data=[],this._r=[],this.isReverted=!1,this.id=gE++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Qt(i)&&(s=r,r=i,i=Qt);var o=this,a=function(){var c=Gt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=nd(s)),Gt=o,f=r.apply(o,arguments),Qt(f)&&o._r.push(f),Gt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,i===Qt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Gt;Gt=null,i(this),Gt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof ln&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof ni?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ln)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=vo.length;o--;)vo[o].id===this.id&&vo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),_E=function(){function n(t){this.contexts=[],this.scope=t,Gt&&Gt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Cr(i)||(i={matches:i});var o=new mx(0,s||this.scope),a=o.conditions={},l,c,u;Gt&&!o.selector&&(o.selector=Gt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=dr.matchMedia(i[c]),l&&(vo.indexOf(o)<0&&vo.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(sd):l.addEventListener("change",sd)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),zu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return nx(r)})},timeline:function(e){return new ni(e)},getTweensOf:function(e,t){return Yt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Sn(e)&&(e=Wi(e)[0]);var s=mo(e||{}).get,o=i?Gv:Vv;return i==="native"&&(i=""),e&&(t?o((_i[t]&&_i[t].get||s)(e,t,i,r)):function(a,l,c){return o((_i[a]&&_i[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Wi(e),e.length>1){var r=e.map(function(u){return ui.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=_i[t],a=mo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;ra._pt=0,f.init(e,i?u+i:u,ra,0,[e]),f.render(1,f),ra._pt&&Vp(1,ra)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=ui.to(e,Pi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=_o(e.ease,Vl.ease)),dg(Vl,e||{})},config:function(e){return dg(Ci,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!_i[a]&&!Ri[a]&&Gl(t+" effect requires "+a+" plugin.")}),Yf[t]=function(a,l,c){return i(Wi(a),Pi(l||{},s),c)},o&&(ni.prototype[t]=function(a,l,c){return this.add(Yf[t](a,Cr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){_t[e]=_o(t)},parseEase:function(e,t){return arguments.length?_o(e,t):_t},getById:function(e){return Yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ni(e),r,s;for(i.smoothChildTiming=ri(e.smoothChildTiming),Yt.remove(i),i._dp=0,i._time=i._tTime=Yt._time,r=Yt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof ln&&r.vars.onComplete===r._targets[0]))&&xr(i,r,r._start-r._delay),r=s;return xr(Yt,i,0),i},context:function(e,t){return e?new mx(e,t):Gt},matchMedia:function(e){return new _E(e)},matchMediaRefresh:function(){return vo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||sd()},addEventListener:function(e,t){var i=cu[e]||(cu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=cu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:Yb,wrapYoyo:jb,distribute:Kv,random:Jv,snap:Zv,normalize:qb,getUnit:Ln,clamp:Gb,splitColor:ix,toArray:Wi,selector:nd,mapRange:ex,pipe:Xb,unitize:$b,interpolate:Kb,shuffle:jv},install:Fv,effects:Yf,ticker:yi,updateRoot:ni.updateRoot,plugins:_i,globalTimeline:Yt,core:{PropTween:oi,globals:kv,Tween:ln,Timeline:ni,Animation:ql,getCache:mo,_removeLinkedListItem:xf,reverting:function(){return En},context:function(e){return e&&Gt&&(Gt.data.push(e),e._ctx=Gt),Gt},suppressOverwrites:function(e){return Rp=e}}};si("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return zu[n]=ln[n]});yi.add(ni.updateRoot);ra=zu.to({},{duration:0});var vE=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},xE=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=vE(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Qf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Sn(s)&&(l={},si(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}xE(a,s)}}}},ui=zu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)En?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Qf("roundProps",id),Qf("modifiers"),Qf("snap",Zv))||zu;ln.version=ni.version=ui.version="3.15.0";Ov=1;Dp()&&wa();_t.Power0;_t.Power1;_t.Power2;_t.Power3;_t.Power4;_t.Linear;_t.Quad;_t.Cubic;_t.Quart;_t.Quint;_t.Strong;_t.Elastic;_t.Back;_t.SteppedEase;_t.Bounce;_t.Sine;_t.Expo;_t.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var xg,ys,pa,Gp,so,yg,Wp,yE=function(){return typeof window<"u"},is={},Zs=180/Math.PI,ma=Math.PI/180,Io=Math.atan2,Sg=1e8,Xp=/([A-Z])/g,SE=/(left|right|width|margin|padding|x)/i,ME=/[\s,\(]\S/,yr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},od=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},bE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},EE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},TE=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},wE=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},gx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_x=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},AE=function(e,t,i){return e.style[t]=i},CE=function(e,t,i){return e.style.setProperty(t,i)},RE=function(e,t,i){return e._gsap[t]=i},PE=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},DE=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},LE=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Kt="transform",ai=Kt+"Origin",IE=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in is&&s){if(this.tfm=this.tfm||{},e!=="transform")e=yr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Vr(r,a)}):this.tfm[e]=o.x?o[e]:Vr(r,e),e===ai&&(this.tfm.zOrigin=o.zOrigin);else return yr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Kt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ai,t,"")),e=Kt}(s||t)&&this.props.push(e,t,s[e])},vx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},UE=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Xp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Wp(),(!s||!s.isStart)&&!i[Kt]&&(vx(i),r.zOrigin&&i[ai]&&(i[ai]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},xx=function(e,t){var i={target:e,props:[],revert:UE,save:IE};return e._gsap||ui.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},yx,ad=function(e,t){var i=ys.createElementNS?ys.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ys.createElement(e);return i&&i.style?i:ys.createElement(e)},wi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Xp,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Aa(t)||t,1)||""},Mg="O,Moz,ms,Ms,Webkit".split(","),Aa=function(e,t,i){var r=t||so,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Mg[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Mg[o]:"")+e},ld=function(){yE()&&window.document&&(xg=window,ys=xg.document,pa=ys.documentElement,so=ad("div")||{style:{}},ad("div"),Kt=Aa(Kt),ai=Kt+"Origin",so.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",yx=!!Aa("perspective"),Wp=ui.core.reverting,Gp=1)},bg=function(e){var t=e.ownerSVGElement,i=ad("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),pa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),pa.removeChild(i),s},Eg=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Sx=function(e){var t,i;try{t=e.getBBox()}catch{t=bg(e),i=1}return t&&(t.width||t.height)||i||(t=bg(e)),t&&!t.width&&!t.x&&!t.y?{x:+Eg(e,["x","cx","x1"])||0,y:+Eg(e,["y","cy","y1"])||0,width:0,height:0}:t},Mx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Sx(e))},Ds=function(e,t){if(t){var i=e.style,r;t in is&&t!==ai&&(t=Kt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Xp,"-$1").toLowerCase())):i.removeAttribute(t)}},Ss=function(e,t,i,r,s,o){var a=new oi(e._pt,t,i,0,1,o?_x:gx);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Tg={deg:1,rad:1,turn:1},NE={grid:1,flex:1},Ls=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=so.style,l=SE.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,m,p;if(r===o||!s||Tg[r]||Tg[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),p=e.getCTM&&Mx(e),(d||o==="%")&&(is[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],tn(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ys||!_.appendChild)&&(_=ys.body),m=_._gsap,m&&d&&m.width&&l&&m.time===yi.time&&!m.uncache)return tn(s/m.width*f);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=f+r,g=e[u],M?e.style[t]=M:Ds(e,t)}else(d||o==="%")&&!NE[wi(_,"display")]&&(a.position=wi(e,"position")),_===e&&(a.position="static"),_.appendChild(so),g=so[u],_.removeChild(so),a.position="absolute";return l&&d&&(m=mo(_),m.time=yi.time,m.width=_[u]),tn(h?g*s/f:g&&s?f/g*s:0)},Vr=function(e,t,i,r){var s;return Gp||ld(),t in yr&&t!=="transform"&&(t=yr[t],~t.indexOf(",")&&(t=t.split(",")[0])),is[t]&&t!=="transform"?(s=jl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Vu(wi(e,ai))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Hu[t]&&Hu[t](e,t,i)||wi(e,t)||zv(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Ls(e,t,s,i)+i:s},OE=function(e,t,i,r){if(!i||i==="none"){var s=Aa(t,e,1),o=s&&wi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=wi(e,"borderTopColor"))}var a=new oi(this._pt,e.style,t,0,1,dx),l=0,c=0,u,f,h,d,g,_,m,p,M,b,x,w;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=wi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=wi(e,t)||r,_?e.style[t]=_:Ds(e,t)),u=[i,r],sx(u),i=u[0],r=u[1],h=i.match(ia)||[],w=r.match(ia)||[],w.length){for(;f=ia.exec(r);)m=f[0],M=r.substring(l,f.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),m.charAt(1)==="="&&(m=da(d,m)+x),p=parseFloat(m),b=m.substr((p+"").length),l=ia.lastIndex-b.length,b||(b=b||Ci.units[t]||x,l===r.length&&(r+=b,a.e+=b)),x!==b&&(d=Ls(e,t,_,b)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?_x:gx;return Nv.test(r)&&(a.e=0),this._pt=a,a},wg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},FE=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=wg[i]||i,t[1]=wg[r]||r,t.join(" ")},kE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],is[a]&&(l=1,a=a==="transformOrigin"?ai:Kt),Ds(i,a);l&&(Ds(i,Kt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",jl(i,1),o.uncache=1,vx(r)))}},Hu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new oi(e._pt,t,i,0,0,kE);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Yl=[1,0,0,1,0,0],bx={},Ex=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ag=function(e){var t=wi(e,Kt);return Ex(t)?Yl:t.substr(7).match(Uv).map(tn)},$p=function(e,t){var i=e._gsap||mo(e),r=e.style,s=Ag(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Yl:s):(s===Yl&&!e.offsetParent&&e!==pa&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,pa.appendChild(e)),s=Ag(e),l?r.display=l:Ds(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):pa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},cd=function(e,t,i,r,s,o){var a=e._gsap,l=s||$p(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],b=t.split(" "),x=parseFloat(b[0])||0,w=parseFloat(b[1])||0,C,T,P,y;i?l!==Yl&&(T=d*m-g*_)&&(P=x*(m/T)+w*(-_/T)+(_*M-m*p)/T,y=x*(-g/T)+w*(d/T)-(d*M-g*p)/T,x=P,w=y):(C=Sx(e),x=C.x+(~b[0].indexOf("%")?x/100*C.width:x),w=C.y+(~(b[1]||b[0]).indexOf("%")?w/100*C.height:w)),r||r!==!1&&a.smooth?(p=x-c,M=w-u,a.xOffset=f+(p*d+M*_)-p,a.yOffset=h+(p*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ai]="0px 0px",o&&(Ss(o,a,"xOrigin",c,x),Ss(o,a,"yOrigin",u,w),Ss(o,a,"xOffset",f,a.xOffset),Ss(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+w)},jl=function(e,t){var i=e._gsap||new ax(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=wi(e,ai)||"0",u,f,h,d,g,_,m,p,M,b,x,w,C,T,P,y,v,D,I,k,F,q,O,V,H,se,N,ge,Ee,je,re,de;return u=f=h=_=m=p=M=b=x=0,d=g=1,i.svg=!!(e.getCTM&&Mx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Kt]!=="none"?l[Kt]:"")),r.scale=r.rotate=r.translate="none"),T=$p(e,i.svg),i.svg&&(i.uncache?(H=e.getBBox(),c=i.xOrigin-H.x+"px "+(i.yOrigin-H.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),cd(e,V||c,!!V||i.originIsAbsolute,i.smooth!==!1,T)),w=i.xOrigin||0,C=i.yOrigin||0,T!==Yl&&(D=T[0],I=T[1],k=T[2],F=T[3],u=q=T[4],f=O=T[5],T.length===6?(d=Math.sqrt(D*D+I*I),g=Math.sqrt(F*F+k*k),_=D||I?Io(I,D)*Zs:0,M=k||F?Io(k,F)*Zs+_:0,M&&(g*=Math.abs(Math.cos(M*ma))),i.svg&&(u-=w-(w*D+C*k),f-=C-(w*I+C*F))):(de=T[6],je=T[7],N=T[8],ge=T[9],Ee=T[10],re=T[11],u=T[12],f=T[13],h=T[14],P=Io(de,Ee),m=P*Zs,P&&(y=Math.cos(-P),v=Math.sin(-P),V=q*y+N*v,H=O*y+ge*v,se=de*y+Ee*v,N=q*-v+N*y,ge=O*-v+ge*y,Ee=de*-v+Ee*y,re=je*-v+re*y,q=V,O=H,de=se),P=Io(-k,Ee),p=P*Zs,P&&(y=Math.cos(-P),v=Math.sin(-P),V=D*y-N*v,H=I*y-ge*v,se=k*y-Ee*v,re=F*v+re*y,D=V,I=H,k=se),P=Io(I,D),_=P*Zs,P&&(y=Math.cos(P),v=Math.sin(P),V=D*y+I*v,H=q*y+O*v,I=I*y-D*v,O=O*y-q*v,D=V,q=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=tn(Math.sqrt(D*D+I*I+k*k)),g=tn(Math.sqrt(O*O+de*de)),P=Io(q,O),M=Math.abs(P)>2e-4?P*Zs:0,x=re?1/(re<0?-re:re):0),i.svg&&(V=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Ex(wi(e,Kt)),V&&e.setAttribute("transform",V))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=tn(d),i.scaleY=tn(g),i.rotation=tn(_)+a,i.rotationX=tn(m)+a,i.rotationY=tn(p)+a,i.skewX=M+a,i.skewY=b+a,i.transformPerspective=x+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ai]=Vu(c)),i.xOffset=i.yOffset=0,i.force3D=Ci.force3D,i.renderTransform=i.svg?zE:yx?Tx:BE,i.uncache=0,i},Vu=function(e){return(e=e.split(" "))[0]+" "+e[1]},eh=function(e,t,i){var r=Ln(t);return tn(parseFloat(t)+parseFloat(Ls(e,"x",i+"px",r)))+r},BE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Tx(e,t)},Vs="0deg",$a="0px",Gs=") ",Tx=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,M=i.target,b=i.zOrigin,x="",w=p==="auto"&&e&&e!==1||p===!0;if(b&&(f!==Vs||u!==Vs)){var C=parseFloat(u)*ma,T=Math.sin(C),P=Math.cos(C),y;C=parseFloat(f)*ma,y=Math.cos(C),o=eh(M,o,T*y*-b),a=eh(M,a,-Math.sin(C)*-b),l=eh(M,l,P*y*-b+b)}m!==$a&&(x+="perspective("+m+Gs),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(w||o!==$a||a!==$a||l!==$a)&&(x+=l!==$a||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Gs),c!==Vs&&(x+="rotate("+c+Gs),u!==Vs&&(x+="rotateY("+u+Gs),f!==Vs&&(x+="rotateX("+f+Gs),(h!==Vs||d!==Vs)&&(x+="skew("+h+", "+d+Gs),(g!==1||_!==1)&&(x+="scale("+g+", "+_+Gs),M.style[Kt]=x||"translate(0, 0)"},zE=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,M=i.forceCSS,b=parseFloat(o),x=parseFloat(a),w,C,T,P,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ma,c*=ma,w=Math.cos(l)*f,C=Math.sin(l)*f,T=Math.sin(l-c)*-h,P=Math.cos(l-c)*h,c&&(u*=ma,y=Math.tan(c-u),y=Math.sqrt(1+y*y),T*=y,P*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),w*=y,C*=y)),w=tn(w),C=tn(C),T=tn(T),P=tn(P)):(w=f,P=h,C=T=0),(b&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(b=Ls(d,"x",o,"px"),x=Ls(d,"y",a,"px")),(g||_||m||p)&&(b=tn(b+g-(g*w+_*T)+m),x=tn(x+_-(g*C+_*P)+p)),(r||s)&&(y=d.getBBox(),b=tn(b+r/100*y.width),x=tn(x+s/100*y.height)),y="matrix("+w+","+C+","+T+","+P+","+b+","+x+")",d.setAttribute("transform",y),M&&(d.style[Kt]=y)},HE=function(e,t,i,r,s){var o=360,a=Sn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Zs:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Sg)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Sg)%o-~~(c/o)*o)),e._pt=h=new oi(e._pt,t,i,r,c,bE),h.e=u,h.u="deg",e._props.push(i),h},Cg=function(e,t){for(var i in t)e[i]=t[i];return e},VE=function(e,t,i){var r=Cg({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,f,h,d,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Kt]=t,a=jl(i,1),Ds(i,Kt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Kt],o[Kt]=t,a=jl(i,1),o[Kt]=c);for(l in is)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Ln(c),g=Ln(u),f=d!==g?Ls(i,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new oi(e._pt,a,l,f,h-f,od),e._pt.u=g||0,e._props.push(l));Cg(a,r)};si("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Hu[e>1?"border"+n:n]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return Vr(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var wx={name:"css",register:ld,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,f,h,d,g,_,m,p,M,b,x,w,C,T,P,y;Gp||ld(),this.styles=this.styles||xx(e),P=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(_i[_]&&lx(_,t,i,r,e,s)))){if(d=typeof u,g=Hu[_],d==="function"&&(u=u.call(i,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Xl(u)),g)g(this,e,_,u,i)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Ts.lastIndex=0,Ts.test(c)||(m=Ln(c),p=Ln(u),p?m!==p&&(c=Ls(e,_,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),P.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],Sn(c)&&~c.indexOf("random(")&&(c=Xl(c)),Ln(c+"")||c==="auto"||(c+=Ci.units[_]||Ln(Vr(e,_))||""),(c+"").charAt(1)==="="&&(c=Vr(e,_))):c=Vr(e,_),h=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),_ in yr&&(_==="autoAlpha"&&(h===1&&Vr(e,"visibility")==="hidden"&&f&&(h=0),P.push("visibility",0,a.visibility),Ss(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=yr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in is,b){if(this.styles.save(_),y=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=wi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=e.style.perspective;e.style.perspective=u,u=wi(e,"perspective"),v?e.style.perspective=v:Ds(e,"perspective")}f=parseFloat(u)}if(x||(w=e._gsap,w.renderTransform&&!t.parseTransform||jl(e,t.parseTransform),C=t.smoothOrigin!==!1&&w.smooth,x=this._pt=new oi(this._pt,a,Kt,0,1,w.renderTransform,w,0,-1),x.dep=1),_==="scale")this._pt=new oi(this._pt,w,"scaleY",w.scaleY,(M?da(w.scaleY,M+f):f)-w.scaleY||0,od),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(ai,0,a[ai]),u=FE(u),w.svg?cd(e,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&Ss(this,w,"zOrigin",w.zOrigin,p),Ss(this,a,_,Vu(c),Vu(u)));continue}else if(_==="svgOrigin"){cd(e,u,1,C,0,this);continue}else if(_ in bx){HE(this,w,_,h,M?da(h,M+u):u);continue}else if(_==="smoothOrigin"){Ss(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){VE(this,u,e);continue}}else _ in a||(_=Aa(_)||_);if(b||(f||f===0)&&(h||h===0)&&!ME.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),p=Ln(u)||(_ in Ci.units?Ci.units[_]:m),m!==p&&(h=Ls(e,_,c,p)),this._pt=new oi(this._pt,b?w:a,_,h,(M?da(h,M+f):f)-h,!b&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?wE:od),this._pt.u=p||0,b&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=TE):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=EE);else if(_ in a)OE.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,r,s);else if(_!=="parseTransform"){Ip(_,u);continue}b||(_ in a?P.push(_,0,a[_]):typeof e[_]=="function"?P.push(_,2,e[_]()):P.push(_,1,c||e[_])),o.push(_)}}T&&px(this)},render:function(e,t){if(t.tween._time||!Wp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Vr,aliases:yr,getSetter:function(e,t,i){var r=yr[t];return r&&r.indexOf(",")<0&&(t=r),t in is&&t!==ai&&(e._gsap.x||Vr(e,"x"))?i&&yg===i?t==="scale"?PE:RE:(yg=i||{})&&(t==="scale"?DE:LE):e.style&&!Pp(e.style[t])?AE:~t.indexOf("-")?CE:Hp(e,t)},core:{_removeProperty:Ds,_getMatrix:$p}};ui.utils.checkPrefix=Aa;ui.core.getStyleSaver=xx;(function(n,e,t,i){var r=si(n+","+e+","+t,function(s){is[s]=1});si(e,function(s){Ci.units[s]="deg",bx[s]=1}),yr[r[13]]=n+","+e,si(i,function(s){var o=s.split(":");yr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");si("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ci.units[n]="px"});ui.registerPlugin(wx);var wt=ui.registerPlugin(wx)||ui;wt.core.Tween;function GE(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function WE(n,e,t){return e&&GE(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bn,uu,Si,Ms,bs,ga,Ax,Js,_a,Cx,qr,er,Rx,Px=function(){return bn||typeof window<"u"&&(bn=window.gsap)&&bn.registerPlugin&&bn},Dx=1,sa=[],ft=[],Ar=[],Sl=Date.now,ud=function(e,t){return t},XE=function(){var e=_a.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,ft),r.push.apply(r,Ar),ft=i,Ar=r,ud=function(o,a){return t[o](a)}},ws=function(e,t){return~Ar.indexOf(e)&&Ar[Ar.indexOf(e)+1][t]},Ml=function(e){return!!~Cx.indexOf(e)},zn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},kn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},yc="scrollLeft",Sc="scrollTop",fd=function(){return qr&&qr.isPressed||ft.cache++},Gu=function(e,t){var i=function r(s){if(s||s===0){Dx&&(Si.history.scrollRestoration="manual");var o=qr&&qr.isPressed;s=r.v=Math.round(s)||(qr&&qr.iOS?1:0),e(s),r.cacheID=ft.cache,o&&ud("ss",s)}else(t||ft.cache!==r.cacheID||ud("ref"))&&(r.cacheID=ft.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},jn={s:yc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Gu(function(n){return arguments.length?Si.scrollTo(n,mn.sc()):Si.pageXOffset||Ms[yc]||bs[yc]||ga[yc]||0})},mn={s:Sc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:jn,sc:Gu(function(n){return arguments.length?Si.scrollTo(jn.sc(),n):Si.pageYOffset||Ms[Sc]||bs[Sc]||ga[Sc]||0})},ei=function(e,t){return(t&&t._ctx&&t._ctx.selector||bn.utils.toArray)(e)[0]||(typeof e=="string"&&bn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},$E=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Is=function(e,t){var i=t.s,r=t.sc;Ml(e)&&(e=Ms.scrollingElement||bs);var s=ft.indexOf(e),o=r===mn.sc?1:2;!~s&&(s=ft.push(e)-1),ft[s+o]||zn(e,"scroll",fd);var a=ft[s+o],l=a||(ft[s+o]=Gu(ws(e,i),!0)||(Ml(e)?r:Gu(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=bn.getProperty(e,"scrollBehavior")==="smooth"),l},hd=function(e,t,i){var r=e,s=e,o=Sl(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=Sl();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},f=function(){s=r=i?0:r,a=o=0},h=function(g){var _=a,m=s,p=Sl();return(g||g===0)&&g!==r&&u(g),o===a||p-a>c?0:(r+(i?m:-m))/((i?p:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},qa=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Rg=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},Lx=function(){_a=bn.core.globals().ScrollTrigger,_a&&_a.core&&XE()},Ix=function(e){return bn=e||Px(),!uu&&bn&&typeof document<"u"&&document.body&&(Si=window,Ms=document,bs=Ms.documentElement,ga=Ms.body,Cx=[Si,Ms,bs,ga],bn.utils.clamp,Rx=bn.core.context||function(){},Js="onpointerenter"in ga?"pointer":"mouse",Ax=nn.isTouch=Si.matchMedia&&Si.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Si||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,er=nn.eventTypes=("ontouchstart"in bs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in bs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Dx=0},500),uu=1),_a||Lx(),uu};jn.op=mn;ft.cache=0;var nn=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){uu||Ix(bn)||console.warn("Please gsap.registerPlugin(Observer)"),_a||Lx();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,f=i.onStop,h=i.onStopDelay,d=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,p=i.onDragEnd,M=i.onDrag,b=i.onPress,x=i.onRelease,w=i.onRight,C=i.onLeft,T=i.onUp,P=i.onDown,y=i.onChangeX,v=i.onChangeY,D=i.onChange,I=i.onToggleX,k=i.onToggleY,F=i.onHover,q=i.onHoverEnd,O=i.onMove,V=i.ignoreCheck,H=i.isNormalizer,se=i.onGestureStart,N=i.onGestureEnd,ge=i.onWheel,Ee=i.onEnable,je=i.onDisable,re=i.onClick,de=i.scrollSpeed,_e=i.capture,pe=i.allowClicks,Re=i.lockAxis,We=i.onLockAxis;this.target=a=ei(a)||bs,this.vars=i,d&&(d=bn.utils.toArray(d)),r=r||1e-9,s=s||0,g=g||1,de=de||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Si.getComputedStyle(ga).lineHeight)||22);var Ue,st,et,L,E,Q,te,U=this,j=0,ue=0,ne=i.passive||!u&&i.passive!==!1,A=Is(a,jn),S=Is(a,mn),z=A(),W=S(),Y=~o.indexOf("touch")&&!~o.indexOf("pointer")&&er[0]==="pointerdown",K=Ml(a),ae=a.ownerDocument||Ms,ce=[0,0,0],fe=[0,0,0],Ie=0,le=function(){return Ie=Sl()},me=function(Oe,nt){return(U.event=Oe)&&d&&$E(Oe.target,d)||nt&&Y&&Oe.pointerType!=="touch"||V&&V(Oe,nt)},De=function(){U._vx.reset(),U._vy.reset(),st.pause(),f&&f(U)},Ne=function(){var Oe=U.deltaX=Rg(ce),nt=U.deltaY=Rg(fe),Se=Math.abs(Oe)>=r,Ze=Math.abs(nt)>=r;D&&(Se||Ze)&&D(U,Oe,nt,ce,fe),Se&&(w&&U.deltaX>0&&w(U),C&&U.deltaX<0&&C(U),y&&y(U),I&&U.deltaX<0!=j<0&&I(U),j=U.deltaX,ce[0]=ce[1]=ce[2]=0),Ze&&(P&&U.deltaY>0&&P(U),T&&U.deltaY<0&&T(U),v&&v(U),k&&U.deltaY<0!=ue<0&&k(U),ue=U.deltaY,fe[0]=fe[1]=fe[2]=0),(L||et)&&(O&&O(U),et&&(m&&et===1&&m(U),M&&M(U),et=0),L=!1),Q&&!(Q=!1)&&We&&We(U),E&&(ge(U),E=!1),Ue=0},Te=function(Oe,nt,Se){ce[Se]+=Oe,fe[Se]+=nt,U._vx.update(Oe),U._vy.update(nt),c?Ue||(Ue=requestAnimationFrame(Ne)):Ne()},Ve=function(Oe,nt){Re&&!te&&(U.axis=te=Math.abs(Oe)>Math.abs(nt)?"x":"y",Q=!0),te!=="y"&&(ce[2]+=Oe,U._vx.update(Oe,!0)),te!=="x"&&(fe[2]+=nt,U._vy.update(nt,!0)),c?Ue||(Ue=requestAnimationFrame(Ne)):Ne()},Fe=function(Oe){if(!me(Oe,1)){Oe=qa(Oe,u);var nt=Oe.clientX,Se=Oe.clientY,Ze=nt-U.x,ke=Se-U.y,Ke=U.isDragging;U.x=nt,U.y=Se,(Ke||(Ze||ke)&&(Math.abs(U.startX-nt)>=s||Math.abs(U.startY-Se)>=s))&&(et||(et=Ke?2:1),Ke||(U.isDragging=!0),Ve(Ze,ke))}},ht=U.onPress=function(we){me(we,1)||we&&we.button||(U.axis=te=null,st.pause(),U.isPressed=!0,we=qa(we),j=ue=0,U.startX=U.x=we.clientX,U.startY=U.y=we.clientY,U._vx.reset(),U._vy.reset(),zn(H?a:ae,er[1],Fe,ne,!0),U.deltaX=U.deltaY=0,b&&b(U))},B=U.onRelease=function(we){if(!me(we,1)){kn(H?a:ae,er[1],Fe,!0);var Oe=!isNaN(U.y-U.startY),nt=U.isDragging,Se=nt&&(Math.abs(U.x-U.startX)>3||Math.abs(U.y-U.startY)>3),Ze=qa(we);!Se&&Oe&&(U._vx.reset(),U._vy.reset(),u&&pe&&bn.delayedCall(.08,function(){if(Sl()-Ie>300&&!we.defaultPrevented){if(we.target.click)we.target.click();else if(ae.createEvent){var ke=ae.createEvent("MouseEvents");ke.initMouseEvent("click",!0,!0,Si,1,Ze.screenX,Ze.screenY,Ze.clientX,Ze.clientY,!1,!1,!1,!1,0,null),we.target.dispatchEvent(ke)}}})),U.isDragging=U.isGesturing=U.isPressed=!1,f&&nt&&!H&&st.restart(!0),et&&Ne(),p&&nt&&p(U),x&&x(U,Se)}},xe=function(Oe){return Oe.touches&&Oe.touches.length>1&&(U.isGesturing=!0)&&se(Oe,U.isDragging)},ie=function(){return(U.isGesturing=!1)||N(U)},oe=function(Oe){if(!me(Oe)){var nt=A(),Se=S();Te((nt-z)*de,(Se-W)*de,1),z=nt,W=Se,f&&st.restart(!0)}},ve=function(Oe){if(!me(Oe)){Oe=qa(Oe,u),ge&&(E=!0);var nt=(Oe.deltaMode===1?l:Oe.deltaMode===2?Si.innerHeight:1)*g;Te(Oe.deltaX*nt,Oe.deltaY*nt,0),f&&!H&&st.restart(!0)}},ye=function(Oe){if(!me(Oe)){var nt=Oe.clientX,Se=Oe.clientY,Ze=nt-U.x,ke=Se-U.y;U.x=nt,U.y=Se,L=!0,f&&st.restart(!0),(Ze||ke)&&Ve(Ze,ke)}},Ye=function(Oe){U.event=Oe,F(U)},xt=function(Oe){U.event=Oe,q(U)},Zt=function(Oe){return me(Oe)||qa(Oe,u)&&re(U)};st=U._dc=bn.delayedCall(h||.25,De).pause(),U.deltaX=U.deltaY=0,U._vx=hd(0,50,!0),U._vy=hd(0,50,!0),U.scrollX=A,U.scrollY=S,U.isDragging=U.isGesturing=U.isPressed=!1,Rx(this),U.enable=function(we){return U.isEnabled||(zn(K?ae:a,"scroll",fd),o.indexOf("scroll")>=0&&zn(K?ae:a,"scroll",oe,ne,_e),o.indexOf("wheel")>=0&&zn(a,"wheel",ve,ne,_e),(o.indexOf("touch")>=0&&Ax||o.indexOf("pointer")>=0)&&(zn(a,er[0],ht,ne,_e),zn(ae,er[2],B),zn(ae,er[3],B),pe&&zn(a,"click",le,!0,!0),re&&zn(a,"click",Zt),se&&zn(ae,"gesturestart",xe),N&&zn(ae,"gestureend",ie),F&&zn(a,Js+"enter",Ye),q&&zn(a,Js+"leave",xt),O&&zn(a,Js+"move",ye)),U.isEnabled=!0,U.isDragging=U.isGesturing=U.isPressed=L=et=!1,U._vx.reset(),U._vy.reset(),z=A(),W=S(),we&&we.type&&ht(we),Ee&&Ee(U)),U},U.disable=function(){U.isEnabled&&(sa.filter(function(we){return we!==U&&Ml(we.target)}).length||kn(K?ae:a,"scroll",fd),U.isPressed&&(U._vx.reset(),U._vy.reset(),kn(H?a:ae,er[1],Fe,!0)),kn(K?ae:a,"scroll",oe,_e),kn(a,"wheel",ve,_e),kn(a,er[0],ht,_e),kn(ae,er[2],B),kn(ae,er[3],B),kn(a,"click",le,!0),kn(a,"click",Zt),kn(ae,"gesturestart",xe),kn(ae,"gestureend",ie),kn(a,Js+"enter",Ye),kn(a,Js+"leave",xt),kn(a,Js+"move",ye),U.isEnabled=U.isPressed=U.isDragging=!1,je&&je(U))},U.kill=U.revert=function(){U.disable();var we=sa.indexOf(U);we>=0&&sa.splice(we,1),qr===U&&(qr=0)},sa.push(U),H&&Ml(a)&&(qr=U),U.enable(_)},WE(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();nn.version="3.15.0";nn.create=function(n){return new nn(n)};nn.register=Ix;nn.getAll=function(){return sa.slice()};nn.getById=function(n){return sa.filter(function(e){return e.vars.id===n})[0]};Px()&&bn.registerPlugin(nn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Le,ea,ut,Rt,vi,At,qp,Wu,Kl,bl,sl,Mc,Cn,Mf,dd,Wn,Pg,Dg,ta,Ux,th,Nx,Gn,pd,Ox,Fx,gs,md,Yp,va,jp,El,gd,nh,bc=1,Rn=Date.now,ih=Rn(),Xi=0,ol=0,Lg=function(e,t,i){var r=gi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Ig=function(e,t){return t&&(!gi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},qE=function n(){return ol&&requestAnimationFrame(n)},Ug=function(){return Mf=1},Ng=function(){return Mf=0},pr=function(e){return e},al=function(e){return Math.round(e*1e5)/1e5||0},kx=function(){return typeof window<"u"},Bx=function(){return Le||kx()&&(Le=window.gsap)&&Le.registerPlugin&&Le},Mo=function(e){return!!~qp.indexOf(e)},zx=function(e){return(e==="Height"?jp:ut["inner"+e])||vi["client"+e]||At["client"+e]},Hx=function(e){return ws(e,"getBoundingClientRect")||(Mo(e)?function(){return mu.width=ut.innerWidth,mu.height=jp,mu}:function(){return $r(e)})},YE=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=ws(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?zx(s):e["client"+s])||0}},jE=function(e,t){return!t||~Ar.indexOf(e)?Hx(e):function(){return mu}},Sr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=ws(e,i))?o()-Hx(e)()[s]:Mo(e)?(vi[i]||At[i])-zx(r):e[i]-e["offset"+r])},Ec=function(e,t){for(var i=0;i<ta.length;i+=3)(!t||~t.indexOf(ta[i+1]))&&e(ta[i],ta[i+1],ta[i+2])},gi=function(e){return typeof e=="string"},In=function(e){return typeof e=="function"},ll=function(e){return typeof e=="number"},Qs=function(e){return typeof e=="object"},Ya=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Uo=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},No=Math.abs,Vx="left",Gx="top",Kp="right",Zp="bottom",xo="width",yo="height",Tl="Right",wl="Left",Al="Top",Cl="Bottom",an="padding",zi="margin",Ca="Width",Jp="Height",dn="px",Hi=function(e){return ut.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},KE=function(e){var t=Hi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Og=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},$r=function(e,t){var i=t&&Hi(e)[dd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Le.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},Xu=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Wx=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},ZE=function(e){return function(t){return Le.utils.snap(Wx(e),t)}},Qp=function(e){var t=Le.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},JE=function(e){return function(t,i){return Qp(Wx(e))(t,i.direction)}},Tc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},yn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},xn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},wc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Fg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ac={toggleActions:"play",anticipatePin:0},$u={top:0,left:0,center:.5,bottom:1,right:1},fu=function(e,t){if(gi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in $u?$u[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Cc=function(e,t,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=Rt.createElement("div"),_=Mo(i)||ws(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?At:i.tagName==="IFRAME"?i.contentDocument.body:i,M=e.indexOf("start")!==-1,b=M?c:u,x="border-color:"+b+";font-size:"+f+";color:"+b+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(x+=(r===mn?Kp:Zp)+":"+(o+parseFloat(h))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=x,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],hu(g,0,r,M),g},hu=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Ca]=1,s["border"+a+Ca]=0,s[i.p]=t+"px",Le.set(e,s)},lt=[],_d={},Zl,kg=function(){return Rn()-Xi>34&&(Zl||(Zl=requestAnimationFrame(Zr)))},Oo=function(){(!Gn||!Gn.isPressed||Gn.startX>At.clientWidth)&&(ft.cache++,Gn?Zl||(Zl=requestAnimationFrame(Zr)):Zr(),Xi||Eo("scrollStart"),Xi=Rn())},rh=function(){Fx=ut.innerWidth,Ox=ut.innerHeight},cl=function(e){ft.cache++,(e===!0||!Cn&&!Nx&&!Rt.fullscreenElement&&!Rt.webkitFullscreenElement&&(!pd||Fx!==ut.innerWidth||Math.abs(ut.innerHeight-Ox)>ut.innerHeight*.25))&&Wu.restart(!0)},bo={},QE=[],Xx=function n(){return xn(rt,"scrollEnd",n)||oo(!0)},Eo=function(e){return bo[e]&&bo[e].map(function(t){return t()})||QE},mi=[],$x=function(e){for(var t=0;t<mi.length;t+=5)(!e||mi[t+4]&&mi[t+4].query===e)&&(mi[t].style.cssText=mi[t+1],mi[t].getBBox&&mi[t].setAttribute("transform",mi[t+2]||""),mi[t+3].uncache=1)},qx=function(){return ft.forEach(function(e){return In(e)&&++e.cacheID&&(e.rec=e())})},em=function(e,t){var i;for(Wn=0;Wn<lt.length;Wn++)i=lt[Wn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));El=!0,t&&$x(t),t||Eo("revert")},Yx=function(e,t){ft.cache++,(t||!Xn)&&ft.forEach(function(i){return In(i)&&i.cacheID++&&(i.rec=0)}),gi(e)&&(ut.history.scrollRestoration=Yp=e)},Xn,So=0,Bg,eT=function(){if(Bg!==So){var e=Bg=So;requestAnimationFrame(function(){return e===So&&oo(!0)})}},jx=function(){At.appendChild(va),jp=!Gn&&va.offsetHeight||ut.innerHeight,At.removeChild(va)},zg=function(e){return Kl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},oo=function(e,t){if(vi=Rt.documentElement,At=Rt.body,qp=[ut,Rt,vi,At],Xi&&!e&&!El){yn(rt,"scrollEnd",Xx);return}jx(),Xn=rt.isRefreshing=!0,El||qx();var i=Eo("refreshInit");Ux&&rt.sort(),t||em(),ft.forEach(function(r){In(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),lt.slice(0).forEach(function(r){return r.refresh()}),El=!1,lt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),gd=1,zg(!0),lt.forEach(function(r){var s=Sr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),zg(!1),gd=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),ft.forEach(function(r){In(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Yx(Yp,1),Wu.pause(),So++,Xn=2,Zr(2),lt.forEach(function(r){return In(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Xn=rt.isRefreshing=!1,Eo("refresh")},vd=0,du=1,Rl,Zr=function(e){if(e===2||!Xn&&!El){rt.isUpdating=!0,Rl&&Rl.update(0);var t=lt.length,i=Rn(),r=i-ih>=50,s=t&&lt[0].scroll();if(du=vd>s?-1:1,Xn||(vd=s),r&&(Xi&&!Mf&&i-Xi>200&&(Xi=0,Eo("scrollEnd")),sl=ih,ih=i),du<0){for(Wn=t;Wn-- >0;)lt[Wn]&&lt[Wn].update(0,r);du=1}else for(Wn=0;Wn<t;Wn++)lt[Wn]&&lt[Wn].update(0,r);rt.isUpdating=!1}Zl=0},xd=[Vx,Gx,Zp,Kp,zi+Cl,zi+Tl,zi+Al,zi+wl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],pu=xd.concat([xo,yo,"boxSizing","max"+Ca,"max"+Jp,"position",zi,an,an+Al,an+Tl,an+Cl,an+wl]),tT=function(e,t,i){xa(i);var r=e._gsap;if(r.spacerIsNative)xa(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},sh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=xd.length,o=t.style,a=e.style,l;s--;)l=xd[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Zp]=a[Kp]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[xo]=Xu(e,jn)+dn,o[yo]=Xu(e,mn)+dn,o[an]=a[zi]=a[Gx]=a[Vx]="0",xa(r),a[xo]=a["max"+Ca]=i[xo],a[yo]=a["max"+Jp]=i[yo],a[an]=i[an],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},nT=/([A-Z])/g,xa=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Le.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(nT,"-$1").toLowerCase())}},Rc=function(e){for(var t=pu.length,i=e.style,r=[],s=0;s<t;s++)r.push(pu[s],i[pu[s]]);return r.t=e,r},iT=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},mu={left:0,top:0},Hg=function(e,t,i,r,s,o,a,l,c,u,f,h,d,g){In(e)&&(e=e(l)),gi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?fu("0"+e.substr(3),i):0));var _=d?d.time():0,m,p,M;if(d&&d.seek(0),isNaN(e)||(e=+e),ll(e))d&&(e=Le.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&hu(a,i,r,!0);else{In(t)&&(t=t(l));var b=(e||"0").split(" "),x,w,C,T;M=ei(t,l)||At,x=$r(M)||{},(!x||!x.left&&!x.top)&&Hi(M).display==="none"&&(T=M.style.display,M.style.display="block",x=$r(M),T?M.style.display=T:M.style.removeProperty("display")),w=fu(b[0],x[r.d]),C=fu(b[1]||"0",i),e=x[r.p]-c[r.p]-u+w+s-C,a&&hu(a,C,r,i-C<20||a._isStart&&C>20),i-=i-C}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var P=e+i,y=o._isStart;m="scroll"+r.d2,hu(o,P,r,y&&P>20||!y&&(f?Math.max(At[m],vi[m]):o.parentNode[m])<=P+1),f&&(c=$r(a),f&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+dn))}return d&&M&&(m=$r(M),d.seek(h),p=$r(M),d._caScrollDist=m[r.p]-p[r.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},rT=/(webkit|moz|length|cssText|inset)/i,Vg=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===At){e._stOrig=s.cssText,a=Hi(e);for(o in a)!+o&&!rT.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Le.core.getCache(e).uncache=1,t.appendChild(e)}},Kx=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Pc=function(e,t,i){var r={};r[t.p]="+="+i,Le.set(e,r)},Gg=function(e,t){var i=Is(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,g={};c=c||i();var _=Kx(i,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){ft.cache++,o.tween&&Zr()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Le.to(e,l),h};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},yn(e,"wheel",i.wheelHandler),rt.isTouch&&yn(e,"touchmove",i.wheelHandler),s},rt=function(){function n(t,i){ea||n.register(Le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),md(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ol){this.update=this.refresh=this.kill=pr;return}i=Og(gi(i)||ll(i)||i.nodeType?{trigger:i}:i,Ac);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,b=s.once,x=s.snap,w=s.pinReparent,C=s.pinSpacer,T=s.containerAnimation,P=s.fastScrollEnd,y=s.preventOverlaps,v=i.horizontal||i.containerAnimation&&i.horizontal!==!1?jn:mn,D=!f&&f!==0,I=ei(i.scroller||ut),k=Le.core.getCache(I),F=Mo(I),q=("pinType"in i?i.pinType:ws(I,"pinType")||F&&"fixed")==="fixed",O=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],V=D&&i.toggleActions.split(" "),H="markers"in i?i.markers:Ac.markers,se=F?0:parseFloat(Hi(I)["border"+v.p2+Ca])||0,N=this,ge=i.onRefreshInit&&function(){return i.onRefreshInit(N)},Ee=YE(I,F,v),je=jE(I,F),re=0,de=0,_e=0,pe=Is(I,v),Re,We,Ue,st,et,L,E,Q,te,U,j,ue,ne,A,S,z,W,Y,K,ae,ce,fe,Ie,le,me,De,Ne,Te,Ve,Fe,ht,B,xe,ie,oe,ve,ye,Ye,xt;if(N._startClamp=N._endClamp=!1,N._dir=v,m*=45,N.scroller=I,N.scroll=T?T.time.bind(T):pe,st=pe(),N.vars=i,r=r||i.animation,"refreshPriority"in i&&(Ux=1,i.refreshPriority===-9999&&(Rl=N)),k.tweenScroll=k.tweenScroll||{top:Gg(I,mn),left:Gg(I,jn)},N.tweenTo=Re=k.tweenScroll[v.p],N.scrubDuration=function(Se){xe=ll(Se)&&Se,xe?B?B.duration(Se):B=Le.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:xe,paused:!0,onComplete:function(){return p&&p(N)}}):(B&&B.progress(1).kill(),B=0)},r&&(r.vars.lazy=!1,r._initted&&!N.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),N.animation=r.pause(),r.scrollTrigger=N,N.scrubDuration(f),Fe=0,l||(l=r.vars.id)),x&&((!Qs(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in At.style&&Le.set(F?[At,vi]:I,{scrollBehavior:"auto"}),ft.forEach(function(Se){return In(Se)&&Se.target===(F?Rt.scrollingElement||vi:I)&&(Se.smooth=!1)}),Ue=In(x.snapTo)?x.snapTo:x.snapTo==="labels"?ZE(r):x.snapTo==="labelsDirectional"?JE(r):x.directional!==!1?function(Se,Ze){return Qp(x.snapTo)(Se,Rn()-de<500?0:Ze.direction)}:Le.utils.snap(x.snapTo),ie=x.duration||{min:.1,max:2},ie=Qs(ie)?bl(ie.min,ie.max):bl(ie,ie),oe=Le.delayedCall(x.delay||xe/2||.1,function(){var Se=pe(),Ze=Rn()-de<500,ke=Re.tween;if((Ze||Math.abs(N.getVelocity())<10)&&!ke&&!Mf&&re!==Se){var Ke=(Se-L)/A,en=r&&!D?r.totalProgress():Ke,ct=Ze?0:(en-ht)/(Rn()-sl)*1e3||0,Bt=Le.utils.clamp(-Ke,1-Ke,No(ct/2)*ct/.185),cn=Ke+(x.inertia===!1?0:Bt),Ut,Nt,bt=x,fi=bt.onStart,Ht=bt.onInterrupt,On=bt.onComplete;if(Ut=Ue(cn,N),ll(Ut)||(Ut=cn),Nt=Math.max(0,Math.round(L+Ut*A)),Se<=E&&Se>=L&&Nt!==Se){if(ke&&!ke._initted&&ke.data<=No(Nt-Se))return;x.inertia===!1&&(Bt=Ut-Ke),Re(Nt,{duration:ie(No(Math.max(No(cn-en),No(Ut-en))*.185/ct/.05||0)),ease:x.ease||"power3",data:No(Nt-Se),onInterrupt:function(){return oe.restart(!0)&&Ht&&Uo(N,Ht)},onComplete:function(){N.update(),re=pe(),r&&!D&&(B?B.resetTo("totalProgress",Ut,r._tTime/r._tDur):r.progress(Ut)),Fe=ht=r&&!D?r.totalProgress():N.progress,M&&M(N),On&&Uo(N,On)}},Se,Bt*A,Nt-Se-Bt*A),fi&&Uo(N,fi,Re.tween)}}else N.isActive&&re!==Se&&oe.restart(!0)}).pause()),l&&(_d[l]=N),h=N.trigger=ei(h||d!==!0&&d),xt=h&&h._gsap&&h._gsap.stRevert,xt&&(xt=xt(N)),d=d===!0?h:ei(d),gi(a)&&(a={targets:h,className:a}),d&&(g===!1||g===zi||(g=!g&&d.parentNode&&d.parentNode.style&&Hi(d.parentNode).display==="flex"?!1:an),N.pin=d,We=Le.core.getCache(d),We.spacer?S=We.pinState:(C&&(C=ei(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),We.spacerIsNative=!!C,C&&(We.spacerState=Rc(C))),We.spacer=Y=C||Rt.createElement("div"),Y.classList.add("pin-spacer"),l&&Y.classList.add("pin-spacer-"+l),We.pinState=S=Rc(d)),i.force3D!==!1&&Le.set(d,{force3D:!0}),N.spacer=Y=We.spacer,Ve=Hi(d),le=Ve[g+v.os2],ae=Le.getProperty(d),ce=Le.quickSetter(d,v.a,dn),sh(d,Y,Ve),W=Rc(d)),H){ue=Qs(H)?Og(H,Fg):Fg,U=Cc("scroller-start",l,I,v,ue,0),j=Cc("scroller-end",l,I,v,ue,0,U),K=U["offset"+v.op.d2];var Zt=ei(ws(I,"content")||I);Q=this.markerStart=Cc("start",l,Zt,v,ue,K,0,T),te=this.markerEnd=Cc("end",l,Zt,v,ue,K,0,T),T&&(Ye=Le.quickSetter([Q,te],v.a,dn)),!q&&!(Ar.length&&ws(I,"fixedMarkers")===!0)&&(KE(F?At:I),Le.set([U,j],{force3D:!0}),De=Le.quickSetter(U,v.a,dn),Te=Le.quickSetter(j,v.a,dn))}if(T){var we=T.vars.onUpdate,Oe=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){N.update(0,0,1),we&&we.apply(T,Oe||[])})}if(N.previous=function(){return lt[lt.indexOf(N)-1]},N.next=function(){return lt[lt.indexOf(N)+1]},N.revert=function(Se,Ze){if(!Ze)return N.kill(!0);var ke=Se!==!1||!N.enabled,Ke=Cn;ke!==N.isReverted&&(ke&&(ve=Math.max(pe(),N.scroll.rec||0),_e=N.progress,ye=r&&r.progress()),Q&&[Q,te,U,j].forEach(function(en){return en.style.display=ke?"none":"block"}),ke&&(Cn=N,N.update(ke)),d&&(!w||!N.isActive)&&(ke?tT(d,Y,S):sh(d,Y,Hi(d),me)),ke||N.update(ke),Cn=Ke,N.isReverted=ke)},N.refresh=function(Se,Ze,ke,Ke){if(!((Cn||!N.enabled)&&!Ze)){if(d&&Se&&Xi){yn(n,"scrollEnd",Xx);return}!Xn&&ge&&ge(N),Cn=N,Re.tween&&!ke&&(Re.tween.kill(),Re.tween=0),B&&B.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(tt){return tt.vars.immediateRender&&tt.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var en=Ee(),ct=je(),Bt=T?T.duration():Sr(I,v),cn=A<=.01||!A,Ut=0,Nt=Ke||0,bt=Qs(ke)?ke.end:i.end,fi=i.endTrigger||h,Ht=Qs(ke)?ke.start:i.start||(i.start===0||!h?0:d?"0 0":"0 100%"),On=N.pinnedContainer=i.pinnedContainer&&ei(i.pinnedContainer,N),Li=h&&Math.max(0,lt.indexOf(N))||0,un=Li,fn,R,$,ee,J,G,he,Me,Pe,Ce,He,Ge,ze;for(H&&Qs(ke)&&(Ge=Le.getProperty(U,v.p),ze=Le.getProperty(j,v.p));un-- >0;)G=lt[un],G.end||G.refresh(0,1)||(Cn=N),he=G.pin,he&&(he===h||he===d||he===On)&&!G.isReverted&&(Ce||(Ce=[]),Ce.unshift(G),G.revert(!0,!0)),G!==lt[un]&&(Li--,un--);for(In(Ht)&&(Ht=Ht(N)),Ht=Lg(Ht,"start",N),L=Hg(Ht,h,en,v,pe(),Q,U,N,ct,se,q,Bt,T,N._startClamp&&"_startClamp")||(d?-.001:0),In(bt)&&(bt=bt(N)),gi(bt)&&!bt.indexOf("+=")&&(~bt.indexOf(" ")?bt=(gi(Ht)?Ht.split(" ")[0]:"")+bt:(Ut=fu(bt.substr(2),en),bt=gi(Ht)?Ht:(T?Le.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,L):L)+Ut,fi=h)),bt=Lg(bt,"end",N),E=Math.max(L,Hg(bt||(fi?"100% 0":Bt),fi,en,v,pe()+Ut,te,j,N,ct,se,q,Bt,T,N._endClamp&&"_endClamp"))||-.001,Ut=0,un=Li;un--;)G=lt[un]||{},he=G.pin,he&&G.start-G._pinPush<=L&&!T&&G.end>0&&(fn=G.end-(N._startClamp?Math.max(0,G.start):G.start),(he===h&&G.start-G._pinPush<L||he===On)&&isNaN(Ht)&&(Ut+=fn*(1-G.progress)),he===d&&(Nt+=fn));if(L+=Ut,E+=Ut,N._startClamp&&(N._startClamp+=Ut),N._endClamp&&!Xn&&(N._endClamp=E||-.001,E=Math.min(E,Sr(I,v))),A=E-L||(L-=.01)&&.001,cn&&(_e=Le.utils.clamp(0,1,Le.utils.normalize(L,E,ve))),N._pinPush=Nt,Q&&Ut&&(fn={},fn[v.a]="+="+Ut,On&&(fn[v.p]="-="+pe()),Le.set([Q,te],fn)),d&&!(gd&&N.end>=Sr(I,v)))fn=Hi(d),ee=v===mn,$=pe(),fe=parseFloat(ae(v.a))+Nt,!Bt&&E>1&&(He=(F?Rt.scrollingElement||vi:I).style,He={style:He,value:He["overflow"+v.a.toUpperCase()]},F&&Hi(At)["overflow"+v.a.toUpperCase()]!=="scroll"&&(He.style["overflow"+v.a.toUpperCase()]="scroll")),sh(d,Y,fn),W=Rc(d),R=$r(d,!0),Me=q&&Is(I,ee?jn:mn)(),g?(me=[g+v.os2,A+Nt+dn],me.t=Y,un=g===an?Xu(d,v)+A+Nt:0,un&&(me.push(v.d,un+dn),Y.style.flexBasis!=="auto"&&(Y.style.flexBasis=un+dn)),xa(me),On&&lt.forEach(function(tt){tt.pin===On&&tt.vars.pinSpacing!==!1&&(tt._subPinOffset=!0)}),q&&pe(ve)):(un=Xu(d,v),un&&Y.style.flexBasis!=="auto"&&(Y.style.flexBasis=un+dn)),q&&(J={top:R.top+(ee?$-L:Me)+dn,left:R.left+(ee?Me:$-L)+dn,boxSizing:"border-box",position:"fixed"},J[xo]=J["max"+Ca]=Math.ceil(R.width)+dn,J[yo]=J["max"+Jp]=Math.ceil(R.height)+dn,J[zi]=J[zi+Al]=J[zi+Tl]=J[zi+Cl]=J[zi+wl]="0",J[an]=fn[an],J[an+Al]=fn[an+Al],J[an+Tl]=fn[an+Tl],J[an+Cl]=fn[an+Cl],J[an+wl]=fn[an+wl],z=iT(S,J,w),Xn&&pe(0)),r?(Pe=r._initted,th(1),r.render(r.duration(),!0,!0),Ie=ae(v.a)-fe+A+Nt,Ne=Math.abs(A-Ie)>1,q&&Ne&&z.splice(z.length-2,2),r.render(0,!0,!0),Pe||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),th(0)):Ie=A,He&&(He.value?He.style["overflow"+v.a.toUpperCase()]=He.value:He.style.removeProperty("overflow-"+v.a));else if(h&&pe()&&!T)for(R=h.parentNode;R&&R!==At;)R._pinOffset&&(L-=R._pinOffset,E-=R._pinOffset),R=R.parentNode;Ce&&Ce.forEach(function(tt){return tt.revert(!1,!0)}),N.start=L,N.end=E,st=et=Xn?ve:pe(),!T&&!Xn&&(st<ve&&pe(ve),N.scroll.rec=0),N.revert(!1,!0),de=Rn(),oe&&(re=-1,oe.restart(!0)),Cn=0,r&&D&&(r._initted||ye)&&r.progress()!==ye&&r.progress(ye||0,!0).render(r.time(),!0,!0),(cn||_e!==N.progress||T||_||r&&!r._initted)&&(r&&!D&&(r._initted||_e||r.vars.immediateRender!==!1)&&r.totalProgress(T&&L<-.001&&!_e?Le.utils.normalize(L,E,0):_e,!0),N.progress=cn||(st-L)/A===_e?0:_e),d&&g&&(Y._pinOffset=Math.round(N.progress*Ie)),B&&B.invalidate(),isNaN(Ge)||(Ge-=Le.getProperty(U,v.p),ze-=Le.getProperty(j,v.p),Pc(U,v,Ge),Pc(Q,v,Ge-(Ke||0)),Pc(j,v,ze),Pc(te,v,ze-(Ke||0))),cn&&!Xn&&N.update(),u&&!Xn&&!ne&&(ne=!0,u(N),ne=!1)}},N.getVelocity=function(){return(pe()-et)/(Rn()-sl)*1e3||0},N.endAnimation=function(){Ya(N.callbackAnimation),r&&(B?B.progress(1):r.paused()?D||Ya(r,N.direction<0,1):Ya(r,r.reversed()))},N.labelToScroll=function(Se){return r&&r.labels&&(L||N.refresh()||L)+r.labels[Se]/r.duration()*A||0},N.getTrailing=function(Se){var Ze=lt.indexOf(N),ke=N.direction>0?lt.slice(0,Ze).reverse():lt.slice(Ze+1);return(gi(Se)?ke.filter(function(Ke){return Ke.vars.preventOverlaps===Se}):ke).filter(function(Ke){return N.direction>0?Ke.end<=L:Ke.start>=E})},N.update=function(Se,Ze,ke){if(!(T&&!ke&&!Se)){var Ke=Xn===!0?ve:N.scroll(),en=Se?0:(Ke-L)/A,ct=en<0?0:en>1?1:en||0,Bt=N.progress,cn,Ut,Nt,bt,fi,Ht,On,Li;if(Ze&&(et=st,st=T?pe():Ke,x&&(ht=Fe,Fe=r&&!D?r.totalProgress():ct)),m&&d&&!Cn&&!bc&&Xi&&(!ct&&L<Ke+(Ke-et)/(Rn()-sl)*m?ct=1e-4:ct===1&&E>Ke+(Ke-et)/(Rn()-sl)*m&&(ct=.9999)),ct!==Bt&&N.enabled){if(cn=N.isActive=!!ct&&ct<1,Ut=!!Bt&&Bt<1,Ht=cn!==Ut,fi=Ht||!!ct!=!!Bt,N.direction=ct>Bt?1:-1,N.progress=ct,fi&&!Cn&&(Nt=ct&&!Bt?0:ct===1?1:Bt===1?2:3,D&&(bt=!Ht&&V[Nt+1]!=="none"&&V[Nt+1]||V[Nt],Li=r&&(bt==="complete"||bt==="reset"||bt in r))),y&&(Ht||Li)&&(Li||f||!r)&&(In(y)?y(N):N.getTrailing(y).forEach(function($){return $.endAnimation()})),D||(B&&!Cn&&!bc?(B._dp._time-B._start!==B._time&&B.render(B._dp._time-B._start),B.resetTo?B.resetTo("totalProgress",ct,r._tTime/r._tDur):(B.vars.totalProgress=ct,B.invalidate().restart())):r&&r.totalProgress(ct,!!(Cn&&(de||Se)))),d){if(Se&&g&&(Y.style[g+v.os2]=le),!q)ce(al(fe+Ie*ct));else if(fi){if(On=!Se&&ct>Bt&&E+1>Ke&&Ke+1>=Sr(I,v),w)if(!Se&&(cn||On)){var un=$r(d,!0),fn=Ke-L;Vg(d,At,un.top+(v===mn?fn:0)+dn,un.left+(v===mn?0:fn)+dn)}else Vg(d,Y);xa(cn||On?z:W),Ne&&ct<1&&cn||ce(fe+(ct===1&&!On?Ie:0))}}x&&!Re.tween&&!Cn&&!bc&&oe.restart(!0),a&&(Ht||b&&ct&&(ct<1||!nh))&&Kl(a.targets).forEach(function($){return $.classList[cn||b?"add":"remove"](a.className)}),o&&!D&&!Se&&o(N),fi&&!Cn?(D&&(Li&&(bt==="complete"?r.pause().totalProgress(1):bt==="reset"?r.restart(!0).pause():bt==="restart"?r.restart(!0):r[bt]()),o&&o(N)),(Ht||!nh)&&(c&&Ht&&Uo(N,c),O[Nt]&&Uo(N,O[Nt]),b&&(ct===1?N.kill(!1,1):O[Nt]=0),Ht||(Nt=ct===1?1:3,O[Nt]&&Uo(N,O[Nt]))),P&&!cn&&Math.abs(N.getVelocity())>(ll(P)?P:2500)&&(Ya(N.callbackAnimation),B?B.progress(1):Ya(r,bt==="reverse"?1:!ct,1))):D&&o&&!Cn&&o(N)}if(Te){var R=T?Ke/T.duration()*(T._caScrollDist||0):Ke;De(R+(U._isFlipped?1:0)),Te(R)}Ye&&Ye(-Ke/T.duration()*(T._caScrollDist||0))}},N.enable=function(Se,Ze){N.enabled||(N.enabled=!0,yn(I,"resize",cl),F||yn(I,"scroll",Oo),ge&&yn(n,"refreshInit",ge),Se!==!1&&(N.progress=_e=0,st=et=re=pe()),Ze!==!1&&N.refresh())},N.getTween=function(Se){return Se&&Re?Re.tween:B},N.setPositions=function(Se,Ze,ke,Ke){if(T){var en=T.scrollTrigger,ct=T.duration(),Bt=en.end-en.start;Se=en.start+Bt*Se/ct,Ze=en.start+Bt*Ze/ct}N.refresh(!1,!1,{start:Ig(Se,ke&&!!N._startClamp),end:Ig(Ze,ke&&!!N._endClamp)},Ke),N.update()},N.adjustPinSpacing=function(Se){if(me&&Se){var Ze=me.indexOf(v.d)+1;me[Ze]=parseFloat(me[Ze])+Se+dn,me[1]=parseFloat(me[1])+Se+dn,xa(me)}},N.disable=function(Se,Ze){if(Se!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,Ze||B&&B.pause(),ve=0,We&&(We.uncache=1),ge&&xn(n,"refreshInit",ge),oe&&(oe.pause(),Re.tween&&Re.tween.kill()&&(Re.tween=0)),!F)){for(var ke=lt.length;ke--;)if(lt[ke].scroller===I&&lt[ke]!==N)return;xn(I,"resize",cl),F||xn(I,"scroll",Oo)}},N.kill=function(Se,Ze){N.disable(Se,Ze),B&&!Ze&&B.kill(),l&&delete _d[l];var ke=lt.indexOf(N);ke>=0&&lt.splice(ke,1),ke===Wn&&du>0&&Wn--,ke=0,lt.forEach(function(Ke){return Ke.scroller===N.scroller&&(ke=1)}),ke||Xn||(N.scroll.rec=0),r&&(r.scrollTrigger=null,Se&&r.revert({kill:!1}),Ze||r.kill()),Q&&[Q,te,U,j].forEach(function(Ke){return Ke.parentNode&&Ke.parentNode.removeChild(Ke)}),Rl===N&&(Rl=0),d&&(We&&(We.uncache=1),ke=0,lt.forEach(function(Ke){return Ke.pin===d&&ke++}),ke||(We.spacer=0)),i.onKill&&i.onKill(N)},lt.push(N),N.enable(!1,!1),xt&&xt(N),r&&r.add&&!A){var nt=N.update;N.update=function(){N.update=nt,ft.cache++,L||E||N.refresh()},Le.delayedCall(.01,N.update),A=.01,L=E=0}else N.refresh();d&&eT()},n.register=function(i){return ea||(Le=i||Bx(),kx()&&window.document&&n.enable(),ea=ol),ea},n.defaults=function(i){if(i)for(var r in i)Ac[r]=i[r];return Ac},n.disable=function(i,r){ol=0,lt.forEach(function(o){return o[r?"kill":"disable"](i)}),xn(ut,"wheel",Oo),xn(Rt,"scroll",Oo),clearInterval(Mc),xn(Rt,"touchcancel",pr),xn(At,"touchstart",pr),Tc(xn,Rt,"pointerdown,touchstart,mousedown",Ug),Tc(xn,Rt,"pointerup,touchend,mouseup",Ng),Wu.kill(),Ec(xn);for(var s=0;s<ft.length;s+=3)wc(xn,ft[s],ft[s+1]),wc(xn,ft[s],ft[s+2])},n.enable=function(){if(ut=window,Rt=document,vi=Rt.documentElement,At=Rt.body,Le){if(Kl=Le.utils.toArray,bl=Le.utils.clamp,md=Le.core.context||pr,th=Le.core.suppressOverwrites||pr,Yp=ut.history.scrollRestoration||"auto",vd=ut.pageYOffset||0,Le.core.globals("ScrollTrigger",n),At){ol=1,va=document.createElement("div"),va.style.height="100vh",va.style.position="absolute",jx(),qE(),nn.register(Le),n.isTouch=nn.isTouch,gs=nn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),pd=nn.isTouch===1,yn(ut,"wheel",Oo),qp=[ut,Rt,vi,At],Le.matchMedia?(n.matchMedia=function(u){var f=Le.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},Le.addEventListener("matchMediaInit",function(){qx(),em()}),Le.addEventListener("matchMediaRevert",function(){return $x()}),Le.addEventListener("matchMedia",function(){oo(0,1),Eo("matchMedia")}),Le.matchMedia().add("(orientation: portrait)",function(){return rh(),rh})):console.warn("Requires GSAP 3.11.0 or later"),rh(),yn(Rt,"scroll",Oo);var i=At.hasAttribute("style"),r=At.style,s=r.borderTopStyle,o=Le.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=$r(At),mn.m=Math.round(a.top+mn.sc())||0,jn.m=Math.round(a.left+jn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(At.setAttribute("style",""),At.removeAttribute("style")),Mc=setInterval(kg,250),Le.delayedCall(.5,function(){return bc=0}),yn(Rt,"touchcancel",pr),yn(At,"touchstart",pr),Tc(yn,Rt,"pointerdown,touchstart,mousedown",Ug),Tc(yn,Rt,"pointerup,touchend,mouseup",Ng),dd=Le.utils.checkPrefix("transform"),pu.push(dd),ea=Rn(),Wu=Le.delayedCall(.2,oo).pause(),ta=[Rt,"visibilitychange",function(){var u=ut.innerWidth,f=ut.innerHeight;Rt.hidden?(Pg=u,Dg=f):(Pg!==u||Dg!==f)&&cl()},Rt,"DOMContentLoaded",oo,ut,"load",oo,ut,"resize",cl],Ec(yn),lt.forEach(function(u){return u.enable(0,1)}),l=0;l<ft.length;l+=3)wc(xn,ft[l],ft[l+1]),wc(xn,ft[l],ft[l+2])}else if(Rt){var c=function u(){n.enable(),Rt.removeEventListener("DOMContentLoaded",u)};Rt.addEventListener("DOMContentLoaded",c)}}},n.config=function(i){"limitCallbacks"in i&&(nh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Mc)||(Mc=r)&&setInterval(kg,r),"ignoreMobileResize"in i&&(pd=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Ec(xn)||Ec(yn,i.autoRefreshEvents||"none"),Nx=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=ei(i),o=ft.indexOf(s),a=Mo(s);~o&&ft.splice(o,a?6:2),r&&(a?Ar.unshift(ut,r,At,r,vi,r):Ar.unshift(s,r))},n.clearMatchMedia=function(i){lt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(gi(i)?ei(i):i).getBoundingClientRect(),a=o[s?xo:yo]*r||0;return s?o.right-a>0&&o.left+a<ut.innerWidth:o.bottom-a>0&&o.top+a<ut.innerHeight},n.positionInViewport=function(i,r,s){gi(i)&&(i=ei(i));var o=i.getBoundingClientRect(),a=o[s?xo:yo],l=r==null?a/2:r in $u?$u[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ut.innerWidth:(o.top+l)/ut.innerHeight},n.killAll=function(i){if(lt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=bo.killAll||[];bo={},r.forEach(function(s){return s()})}},n}();rt.version="3.15.0";rt.saveStyles=function(n){return n?Kl(n).forEach(function(e){if(e&&e.style){var t=mi.indexOf(e);t>=0&&mi.splice(t,5),mi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Le.core.getCache(e),md())}}):mi};rt.revert=function(n,e){return em(!n,e)};rt.create=function(n,e){return new rt(n,e)};rt.refresh=function(n){return n?cl(!0):(ea||rt.register())&&oo(!0)};rt.update=function(n){return++ft.cache&&Zr(n===!0?2:0)};rt.clearScrollMemory=Yx;rt.maxScroll=function(n,e){return Sr(n,e?jn:mn)};rt.getScrollFunc=function(n,e){return Is(ei(n),e?jn:mn)};rt.getById=function(n){return _d[n]};rt.getAll=function(){return lt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};rt.isScrolling=function(){return!!Xi};rt.snapDirectional=Qp;rt.addEventListener=function(n,e){var t=bo[n]||(bo[n]=[]);~t.indexOf(e)||t.push(e)};rt.removeEventListener=function(n,e){var t=bo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};rt.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Le.delayedCall(r,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&In(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return In(s)&&(s=s(),yn(rt,"refresh",function(){return s=e.batchMax()})),Kl(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(rt.create(c))}),t};var Wg=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},oh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(nn.isTouch?" pinch-zoom":""):"none",e===vi&&n(At,t)},Dc={auto:1,scroll:1},sT=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Le.core.getCache(s),a=Rn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==At&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Dc[(l=Hi(s)).overflowY]||Dc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Mo(s)&&(Dc[(l=Hi(s)).overflowY]||Dc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Zx=function(e,t,i,r){return nn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&sT,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&yn(Rt,nn.eventTypes[0],$g,!1,!0)},onDisable:function(){return xn(Rt,nn.eventTypes[0],$g,!0)}})},oT=/(input|label|select|textarea)/i,Xg,$g=function(e){var t=oT.test(e.target.tagName);(t||Xg)&&(e._gsapAllow=!0,Xg=t)},aT=function(e){Qs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=ei(e.target)||vi,u=Le.core.globals().ScrollSmoother,f=u&&u.get(),h=gs&&(e.content&&ei(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=Is(c,mn),g=Is(c,jn),_=1,m=(nn.isTouch&&ut.visualViewport?ut.visualViewport.scale*ut.visualViewport.width:ut.outerWidth)/ut.innerWidth,p=0,M=In(r)?function(){return r(a)}:function(){return r||2.8},b,x,w=Zx(c,e.type,!0,s),C=function(){return x=!1},T=pr,P=pr,y=function(){l=Sr(c,mn),P=bl(gs?1:0,l),i&&(T=bl(0,Sr(c,jn))),b=So},v=function(){h._gsap.y=al(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(x){requestAnimationFrame(C);var H=al(a.deltaY/2),se=P(d.v-H);if(h&&se!==d.v+d.offset){d.offset=se-d.v;var N=al((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",h._gsap.y=N+"px",d.cacheID=ft.cache,Zr()}return!0}d.offset&&v(),x=!0},I,k,F,q,O=function(){y(),I.isActive()&&I.vars.scrollY>l&&(d()>l?I.progress(1)&&d(l):I.resetTo("scrollY",l))};return h&&Le.set(h,{y:"+=0"}),e.ignoreCheck=function(V){return gs&&V.type==="touchmove"&&D()||_>1.05&&V.type!=="touchstart"||a.isGesturing||V.touches&&V.touches.length>1},e.onPress=function(){x=!1;var V=_;_=al((ut.visualViewport&&ut.visualViewport.scale||1)/m),I.pause(),V!==_&&oh(c,_>1.01?!0:i?!1:"x"),k=g(),F=d(),y(),b=So},e.onRelease=e.onGestureStart=function(V,H){if(d.offset&&v(),!H)q.restart(!0);else{ft.cache++;var se=M(),N,ge;i&&(N=g(),ge=N+se*.05*-V.velocityX/.227,se*=Wg(g,N,ge,Sr(c,jn)),I.vars.scrollX=T(ge)),N=d(),ge=N+se*.05*-V.velocityY/.227,se*=Wg(d,N,ge,Sr(c,mn)),I.vars.scrollY=P(ge),I.invalidate().duration(se).play(.01),(gs&&I.vars.scrollY>=l||N>=l-1)&&Le.to({},{onUpdate:O,duration:se})}o&&o(V)},e.onWheel=function(){I._ts&&I.pause(),Rn()-p>1e3&&(b=0,p=Rn())},e.onChange=function(V,H,se,N,ge){if(So!==b&&y(),H&&i&&g(T(N[2]===H?k+(V.startX-V.x):g()+H-N[1])),se){d.offset&&v();var Ee=ge[2]===se,je=Ee?F+V.startY-V.y:d()+se-ge[1],re=P(je);Ee&&je!==re&&(F+=re-je),d(re)}(se||H)&&Zr()},e.onEnable=function(){oh(c,i?!1:"x"),rt.addEventListener("refresh",O),yn(ut,"resize",O),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),w.enable()},e.onDisable=function(){oh(c,!0),xn(ut,"resize",O),rt.removeEventListener("refresh",O),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new nn(e),a.iOS=gs,gs&&!d()&&d(1),gs&&Le.ticker.add(pr),q=a._dc,I=Le.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Kx(d,d(),function(){return I.pause()})},onUpdate:Zr,onComplete:q.vars.onComplete}),a};rt.sort=function(n){if(In(n))return lt.sort(n);var e=ut.pageYOffset||0;return rt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ut.innerHeight}),lt.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};rt.observe=function(n){return new nn(n)};rt.normalizeScroll=function(n){if(typeof n>"u")return Gn;if(n===!0&&Gn)return Gn.enable();if(n===!1){Gn&&Gn.kill(),Gn=n;return}var e=n instanceof nn?n:aT(n);return Gn&&Gn.target===e.target&&Gn.kill(),Mo(e.target)&&(Gn=e),e};rt.core={_getVelocityProp:hd,_inputObserver:Zx,_scrollers:ft,_proxies:Ar,bridge:{ss:function(){Xi||Eo("scrollStart"),Xi=Rn()},ref:function(){return Cn}}};Bx()&&Le.registerPlugin(rt);wt.registerPlugin(rt);let Ki=null;function lT(){Di(()=>{window.matchMedia("(prefers-reduced-motion: reduce)").matches||(Ki=new bb({duration:1.2,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),touchMultiplier:2,infinite:!1}),Ki.on("scroll",rt.update),wt.ticker.add(e=>{Ki==null||Ki.raf(e*1e3)}),wt.ticker.lagSmoothing(0))}),os(()=>{Ki&&(Ki.destroy(),Ki=null)});function n(e){Ki==null||Ki.scrollTo(e,{duration:1.5})}return{scrollTo:n}}(function(){function n(){for(var i=arguments.length,r=0;r<i;r++){var s=r<0||arguments.length<=r?void 0:arguments[r];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function t(){for(var i=this.parentNode,r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];var a=s.length;if(i)for(a||i.removeChild(this);a--;){var l=s[a];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),a?i.insertBefore(this.previousSibling,l):i.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=n,DocumentFragment.prototype.append=n),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=t,DocumentFragment.prototype.replaceWith=t))})();function cT(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function qg(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function Yg(n,e,t){return e&&qg(n.prototype,e),t&&qg(n,t),n}function uT(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function jg(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Kg(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?jg(Object(t),!0).forEach(function(i){uT(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):jg(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Jx(n,e){return hT(n)||pT(n,e)||Qx(n,e)||gT()}function qn(n){return fT(n)||dT(n)||Qx(n)||mT()}function fT(n){if(Array.isArray(n))return yd(n)}function hT(n){if(Array.isArray(n))return n}function dT(n){if(typeof Symbol<"u"&&Symbol.iterator in Object(n))return Array.from(n)}function pT(n,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(n)))){var t=[],i=!0,r=!1,s=void 0;try{for(var o=n[Symbol.iterator](),a;!(i=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));i=!0);}catch(l){r=!0,s=l}finally{try{!i&&o.return!=null&&o.return()}finally{if(r)throw s}}return t}}function Qx(n,e){if(n){if(typeof n=="string")return yd(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return yd(n,e)}}function yd(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function mT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ao(n,e){return Object.getOwnPropertyNames(Object(n)).reduce(function(t,i){var r=Object.getOwnPropertyDescriptor(Object(n),i),s=Object.getOwnPropertyDescriptor(Object(e),i);return Object.defineProperty(t,i,s||r)},{})}function ac(n){return typeof n=="string"}function tm(n){return Array.isArray(n)}function Lc(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=ao(n),t;return e.types!==void 0?t=e.types:e.split!==void 0&&(t=e.split),t!==void 0&&(e.types=(ac(t)||tm(t)?String(t):"").split(",").map(function(i){return String(i).trim()}).filter(function(i){return/((line)|(word)|(char))/i.test(i)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(n.position)),e}function nm(n){var e=ac(n)||tm(n)?String(n):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function bf(n){return n!==null&&typeof n=="object"}function _T(n){return bf(n)&&/^(1|3|11)$/.test(n.nodeType)}function vT(n){return typeof n=="number"&&n>-1&&n%1===0}function xT(n){return bf(n)&&vT(n.length)}function To(n){return tm(n)?n:n==null?[]:xT(n)?Array.prototype.slice.call(n):[n]}function Zg(n){var e=n;return ac(n)&&(/^(#[a-z]\w+)$/.test(n.trim())?e=document.getElementById(n.trim().slice(1)):e=document.querySelectorAll(n)),To(e).reduce(function(t,i){return[].concat(qn(t),qn(To(i).filter(_T)))},[])}var yT=Object.entries,qu="_splittype",or={},ST=0;function Mr(n,e,t){if(!bf(n))return console.warn("[data.set] owner is not an object"),null;var i=n[qu]||(n[qu]=++ST),r=or[i]||(or[i]={});return t===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(or[i]=Kg(Kg({},r),e)):e!==void 0&&(r[e]=t),t}function lo(n,e){var t=bf(n)?n[qu]:null,i=t&&or[t]||{};return i}function ey(n){var e=n&&n[qu];e&&(delete n[e],delete or[e])}function MT(){Object.keys(or).forEach(function(n){delete or[n]})}function bT(){yT(or).forEach(function(n){var e=Jx(n,2),t=e[0],i=e[1],r=i.isRoot,s=i.isSplit;(!r||!s)&&(or[t]=null,delete or[t])})}function ET(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",t=n?String(n):"";return t.trim().replace(/\s+/g," ").split(e)}var im="\\ud800-\\udfff",ty="\\u0300-\\u036f\\ufe20-\\ufe23",ny="\\u20d0-\\u20f0",iy="\\ufe0e\\ufe0f",TT="[".concat(im,"]"),Sd="[".concat(ty).concat(ny,"]"),Md="\\ud83c[\\udffb-\\udfff]",wT="(?:".concat(Sd,"|").concat(Md,")"),ry="[^".concat(im,"]"),sy="(?:\\ud83c[\\udde6-\\uddff]){2}",oy="[\\ud800-\\udbff][\\udc00-\\udfff]",ay="\\u200d",ly="".concat(wT,"?"),cy="[".concat(iy,"]?"),AT="(?:"+ay+"(?:"+[ry,sy,oy].join("|")+")"+cy+ly+")*",CT=cy+ly+AT,RT="(?:".concat(["".concat(ry).concat(Sd,"?"),Sd,sy,oy,TT].join("|"),`
)`),PT=RegExp("".concat(Md,"(?=").concat(Md,")|").concat(RT).concat(CT),"g"),DT=[ay,im,ty,ny,iy],LT=RegExp("[".concat(DT.join(""),"]"));function IT(n){return n.split("")}function uy(n){return LT.test(n)}function UT(n){return n.match(PT)||[]}function NT(n){return uy(n)?UT(n):IT(n)}function OT(n){return n==null?"":String(n)}function FT(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return n=OT(n),n&&ac(n)&&!e&&uy(n)?NT(n):n.split(e)}function bd(n,e){var t=document.createElement(n);return e&&Object.keys(e).forEach(function(i){var r=e[i],s=ac(r)?r.trim():r;s===null||s===""||(i==="children"?t.append.apply(t,qn(To(s))):t.setAttribute(i,s))}),t}var rm={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function kT(n,e){e=ao(rm,e);var t=nm(e.types),i=e.tagName,r=n.nodeValue,s=document.createDocumentFragment(),o=[],a=[];return/^\s/.test(r)&&s.append(" "),o=ET(r).reduce(function(l,c,u,f){var h,d;return t.chars&&(d=FT(c).map(function(g){var _=bd(i,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:g});return Mr(_,"isChar",!0),a=[].concat(qn(a),[_]),_})),t.words||t.lines?(h=bd(i,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(t.words&&e.absolute?"position: relative;":""),children:t.chars?d:c}),Mr(h,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(h)):d.forEach(function(g){s.appendChild(g)}),u<f.length-1&&s.append(" "),t.words?l.concat(h):l},[]),/\s$/.test(r)&&s.append(" "),n.replaceWith(s),{words:o,chars:a}}function fy(n,e){var t=n.nodeType,i={words:[],chars:[]};if(!/(1|3|11)/.test(t))return i;if(t===3&&/\S/.test(n.nodeValue))return kT(n,e);var r=To(n.childNodes);if(r.length&&(Mr(n,"isSplit",!0),!lo(n).isRoot)){n.style.display="inline-block",n.style.position="relative";var s=n.nextSibling,o=n.previousSibling,a=n.textContent||"",l=s?s.textContent:" ",c=o?o.textContent:" ";Mr(n,{isWordEnd:/\s$/.test(a)||/^\s/.test(l),isWordStart:/^\s/.test(a)||/\s$/.test(c)})}return r.reduce(function(u,f){var h=fy(f,e),d=h.words,g=h.chars;return{words:[].concat(qn(u.words),qn(d)),chars:[].concat(qn(u.chars),qn(g))}},i)}function BT(n,e,t,i){if(!t.absolute)return{top:e?n.offsetTop:null};var r=n.offsetParent,s=Jx(i,2),o=s[0],a=s[1],l=0,c=0;if(r&&r!==document.body){var u=r.getBoundingClientRect();l=u.x+o,c=u.y+a}var f=n.getBoundingClientRect(),h=f.width,d=f.height,g=f.x,_=f.y,m=_+a-c,p=g+o-l;return{width:h,height:d,top:m,left:p}}function hy(n){lo(n).isWord?(ey(n),n.replaceWith.apply(n,qn(n.childNodes))):To(n.children).forEach(function(e){return hy(e)})}var zT=function(){return document.createDocumentFragment()};function HT(n,e,t){var i=nm(e.types),r=e.tagName,s=n.getElementsByTagName("*"),o=[],a=[],l=null,c,u,f,h=[],d=n.parentElement,g=n.nextElementSibling,_=zT(),m=window.getComputedStyle(n),p=m.textAlign,M=parseFloat(m.fontSize),b=M*.2;return e.absolute&&(f={left:n.offsetLeft,top:n.offsetTop,width:n.offsetWidth},u=n.offsetWidth,c=n.offsetHeight,Mr(n,{cssWidth:n.style.width,cssHeight:n.style.height})),To(s).forEach(function(x){var w=x.parentElement===n,C=BT(x,w,e,t),T=C.width,P=C.height,y=C.top,v=C.left;/^br$/i.test(x.nodeName)||(i.lines&&w&&((l===null||y-l>=b)&&(l=y,o.push(a=[])),a.push(x)),e.absolute&&Mr(x,{top:y,left:v,width:T,height:P}))}),d&&d.removeChild(n),i.lines&&(h=o.map(function(x){var w=bd(r,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(p,"; width: 100%;")});Mr(w,"isLine",!0);var C={height:0,top:1e4};return _.appendChild(w),x.forEach(function(T,P,y){var v=lo(T),D=v.isWordEnd,I=v.top,k=v.height,F=y[P+1];C.height=Math.max(C.height,k),C.top=Math.min(C.top,I),w.appendChild(T),D&&lo(F).isWordStart&&w.append(" ")}),e.absolute&&Mr(w,{height:C.height,top:C.top}),w}),i.words||hy(_),n.replaceChildren(_)),e.absolute&&(n.style.width="".concat(n.style.width||u,"px"),n.style.height="".concat(c,"px"),To(s).forEach(function(x){var w=lo(x),C=w.isLine,T=w.top,P=w.left,y=w.width,v=w.height,D=lo(x.parentElement),I=!C&&D.isLine;x.style.top="".concat(I?T-D.top:T,"px"),x.style.left=C?"".concat(f.left,"px"):"".concat(P-(I?f.left:0),"px"),x.style.height="".concat(v,"px"),x.style.width=C?"".concat(f.width,"px"):"".concat(y,"px"),x.style.position="absolute"})),d&&(g?d.insertBefore(n,g):d.appendChild(n)),h}var Fo=ao(rm,{}),Jg=function(){Yg(n,null,[{key:"clearData",value:function(){MT()}},{key:"setDefaults",value:function(t){return Fo=ao(Fo,Lc(t)),rm}},{key:"revert",value:function(t){Zg(t).forEach(function(i){var r=lo(i),s=r.isSplit,o=r.html,a=r.cssWidth,l=r.cssHeight;s&&(i.innerHTML=o,i.style.width=a||"",i.style.height=l||"",ey(i))})}},{key:"create",value:function(t,i){return new n(t,i)}},{key:"data",get:function(){return or}},{key:"defaults",get:function(){return Fo},set:function(t){Fo=ao(Fo,Lc(t))}}]);function n(e,t){cT(this,n),this.isSplit=!1,this.settings=ao(Fo,Lc(t)),this.elements=Zg(e),this.split()}return Yg(n,[{key:"split",value:function(t){var i=this;this.revert(),this.elements.forEach(function(o){Mr(o,"html",o.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var r=[window.pageXOffset,window.pageYOffset];t!==void 0&&(this.settings=ao(this.settings,Lc(t)));var s=nm(this.settings.types);s.none||(this.elements.forEach(function(o){Mr(o,"isRoot",!0);var a=fy(o,i.settings),l=a.words,c=a.chars;i.words=[].concat(qn(i.words),qn(l)),i.chars=[].concat(qn(i.chars),qn(c))}),this.elements.forEach(function(o){if(s.lines||i.settings.absolute){var a=HT(o,i.settings,r);i.lines=[].concat(qn(i.lines),qn(a))}}),this.isSplit=!0,window.scrollTo(r[0],r[1]),bT())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),n.revert(this.elements)}}]),n}();wt.registerPlugin(rt);function VT(){const n=[];Di(async()=>{await Ua(),setTimeout(e,200)});function e(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;document.querySelectorAll(".hero-word").forEach(c=>{const u=new Jg(c,{types:"chars"});n.push(u),u.chars&&(wt.set(u.chars,{opacity:0,y:60,rotateX:-90}),wt.to(u.chars,{opacity:1,y:0,rotateX:0,duration:.8,stagger:.03,ease:"power4.out",delay:.5}))});const i=document.querySelector("#hero-subtitle");if(i){const c=new Jg(i,{types:"words"});n.push(c),c.words&&(wt.set(c.words,{opacity:0,y:30}),wt.to(c.words,{opacity:1,y:0,duration:.6,stagger:.04,ease:"power3.out",delay:.9}))}const r=document.querySelector("#hero-tagline");r&&(wt.set(r,{opacity:0,y:25}),wt.to(r,{opacity:1,y:0,duration:.7,ease:"power3.out",delay:1.2}));const s=document.querySelectorAll("#hero-ctas > *");s.length&&(wt.set(s,{opacity:0,y:25}),wt.to(s,{opacity:1,y:0,duration:.6,stagger:.1,ease:"power3.out",delay:1.4}));const o=document.querySelector("#hero-badge");o&&(wt.set(o,{opacity:0,scale:.85}),wt.to(o,{opacity:1,scale:1,duration:.5,ease:"back.out(2)",delay:.3}));const a=document.querySelector("#hero-content");a&&wt.to(a,{scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom top",scrub:.6},y:-120,opacity:0,scale:.94,ease:"none"}),document.querySelectorAll(".reveal-title").forEach(c=>{wt.from(c,{scrollTrigger:{trigger:c,start:"top 88%",toggleActions:"play none none reverse"},y:40,opacity:0,duration:.8,ease:"power3.out"})}),document.querySelectorAll(".reveal-subtitle").forEach(c=>{wt.from(c,{scrollTrigger:{trigger:c,start:"top 88%",toggleActions:"play none none reverse"},y:30,opacity:0,duration:.8,delay:.15,ease:"power3.out"})}),document.querySelectorAll(".reveal-card").forEach(c=>{wt.from(c,{scrollTrigger:{trigger:c,start:"top 88%",toggleActions:"play none none reverse"},y:45,opacity:0,scale:.96,duration:.7,ease:"power2.out"})}),document.querySelectorAll(".experience-item").forEach((c,u)=>{wt.from(c,{scrollTrigger:{trigger:c,start:"top 88%",toggleActions:"play none none reverse"},x:u%2===0?-50:50,opacity:0,duration:.7,ease:"power2.out"})}),document.querySelectorAll(".reveal-tag").forEach(c=>{wt.from(c,{scrollTrigger:{trigger:c,start:"top 92%",toggleActions:"play none none reverse"},scale:0,opacity:0,rotation:wt.utils.random(-10,10),duration:.4,ease:"back.out(2.2)"})}),document.querySelectorAll(".reveal-divider").forEach(c=>{wt.from(c,{scrollTrigger:{trigger:c,start:"top 92%",toggleActions:"play none none reverse"},scaleX:0,duration:.8,ease:"power2.out"})}),document.querySelectorAll("[data-count-to]").forEach(c=>{const u=parseFloat(c.dataset.countTo||"0"),f=(c.dataset.countTo||"").includes(".")?2:0,h={val:0};wt.to(h,{scrollTrigger:{trigger:c,start:"top 85%",toggleActions:"play none none reverse"},val:u,duration:1.5,ease:"power2.out",onUpdate(){c.textContent=h.val.toFixed(f)}})}),document.querySelectorAll("#contact .glass-card").forEach((c,u)=>{wt.from(c,{scrollTrigger:{trigger:c,start:"top 88%",toggleActions:"play none none reverse"},y:40,opacity:0,duration:.6,delay:u*.1,ease:"power2.out"})})}os(()=>{n.forEach(t=>t.revert()),rt.getAll().forEach(t=>t.kill())})}function GT(n={}){const{strength:e=.3,selector:t=".magnetic"}=n,i=[],r=new Map;function s(o){const a=c=>{const u=o.getBoundingClientRect(),f=c.clientX-u.left-u.width/2,h=c.clientY-u.top-u.height/2;o.style.transform=`translate(${f*e}px, ${h*e}px)`,o.style.transition="transform 0.2s ease-out";const d=o.querySelector(".magnetic-inner");d&&(d.style.transform=`translate(${f*e*.5}px, ${h*e*.5}px)`,d.style.transition="transform 0.2s ease-out")},l=()=>{o.style.transform="",o.style.transition="transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";const c=o.querySelector(".magnetic-inner");c&&(c.style.transform="",c.style.transition="transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)")};o.addEventListener("mousemove",a),o.addEventListener("mouseleave",l),r.set(o,{move:a,leave:l}),i.push(o)}Di(()=>{document.querySelectorAll(t).forEach(s)}),os(()=>{i.forEach(o=>{const a=r.get(o);a&&(o.removeEventListener("mousemove",a.move),o.removeEventListener("mouseleave",a.leave))}),r.clear()})}const WT={key:0,class:"loader-screen"},XT={class:"loader-content"},$T={class:"loader-counter"},qT=ur({__name:"LoadingScreen",setup(n){const e=Lt(!0),t=Lt(0),i=Lt(null);return Di(()=>{const r=wt.timeline({onComplete:()=>{wt.to(".loader-content",{y:-40,opacity:0,duration:.5,ease:"power2.in"}),wt.to(".loader-screen",{clipPath:"inset(0% 0% 100% 0%)",duration:.8,ease:"power4.inOut",delay:.3,onComplete:()=>{e.value=!1}})}});r.to(t,{value:100,duration:1.8,ease:"power2.inOut",onUpdate:()=>{i.value&&(i.value.textContent=Math.round(t.value).toString())}}),r.to(".loader-line",{scaleX:1,duration:1.2,stagger:.15,ease:"power3.out"},.3)}),(r,s)=>e.value?(qe(),at("div",WT,[X("div",XT,[s[1]||(s[1]=X("div",{class:"loader-crystal"},[X("div",{class:"loader-line"}),X("div",{class:"loader-line loader-line--mid"}),X("div",{class:"loader-line"})],-1)),X("div",$T,[X("span",{ref_key:"counterEl",ref:i,class:"loader-number"},"0",512),s[0]||(s[0]=X("span",{class:"loader-percent"},"%",-1))]),s[2]||(s[2]=X("p",{class:"loader-name"},"FURQON",-1))])])):Na("",!0)}}),dy=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},YT=dy(qT,[["__scopeId","data-v-de56a1b8"]]),ti={name:"Mohammad Al Furqon",title:"Fullstack Web Developer & Software Engineer",tagline:"Building robust digital experiences with precision and creativity.",website:"lucialf.my.id",linkedin:"linkedin.com/in/lucialf",email:"mohammadalfurgon62@gmail.com",about:`A passionate Fullstack Developer and Software Engineer with extensive experience spanning Japanese industry, 
government agencies, academic institutions, and international cybersecurity operations. 
Graduated from Universitas Sebelas Maret with a strong GPA of 3.77/4.00 in Informatics. 
Skilled in building secure, scalable web applications and contributing to cutting-edge research 
in Machine Learning and Humanized Computing.`},jT=[{institution:"Universitas Sebelas Maret",degree:"Bachelor of Informatics",gpa:"3.77 / 4.00",period:"Aug 2021 — Jan 2026"},{institution:"SMA Negeri 7 Bengkulu",degree:"Science and Mathematics",gpa:"93 / 100",period:"Sept 2018 — May 2021"}],gu=[{company:"Paragon Technology and Innovation",role:"Software Engineer (HR Technology) Intern",period:"Aug 2026 — Present",highlights:["Refactor and fix bugs from legacy codebase in HR application systems"],tags:["HR Tech","Software Engineering","Refactoring"]},{company:"Self Employed",role:"Freelance Fullstack Web Developer",period:"Aug 2024 — Present",highlights:["Handle various websites for diverse companies and individuals","Manage all requested features from clients and implement into production","Utilize various programming languages based on client requirements","Ensure security, optimization, and seamless deployment of all projects"],tags:["Freelance","Fullstack","Multi-language"]},{company:"LAMPTIP",role:"Web Developer — Part Time",period:"Nov 2025 — Present",highlights:["Fullstack Developer at Lembaga Akreditasi Mandiri Pendidikan Tinggi Ilmu Pertanian","Maintain and update the main website infrastructure","Identify potential bugs and refactor legacy code for improved performance","Develop new features based on user requirements and feedback"],tags:["Laravel","Fullstack","Maintenance"]},{company:"DISPERKIMTAN Bontang City",role:"Web Developer — Contract",period:"Sept 2025 — Feb 2026",highlights:["Created user authentication and authorization system using JWT Token","Built role management system for user access control","Implemented admin user impersonation feature","Integrated audit database tracking using Laravel Auditor","Designed REST API system for frontend-backend communication"],tags:["Laravel","JWT","REST API","Security"]},{company:"Meiwa Industry Japan (明和工業株式会社)",role:"Software Engineer — Internship",period:"June 2024 — June 2025",highlights:['Normalized database tables on "Meiwa Portal" web application',"Refactored code from bad practices to better practice standards","Recreated complete Inventory Management System","Developed Leave Request Application from scratch",'Participated in tech stack modernization of "Meiwa Portal"',"Managed CCTV systems and LAN cable infrastructure"],tags:["Japan","Database","Inventory System","Refactoring"]},{company:"Rapixus Taiwan",role:"VANS Operator",period:"Jan 2024 — March 2024",highlights:["Operated RAPIXUS RapixEngine VANS platform for vulnerability scans and risk assessments","Managed IT asset inventories using standardized CPE formats","Monitored CVSS vulnerability scores and deployed system patches","Generated post-installation inspection reports and resolved security loopholes"],tags:["Cybersecurity","CVSS","Vulnerability Assessment"]},{company:"SPMB Universitas Sebelas Maret",role:"Helpdesk Seleksi Mandiri",period:"June 2023 — July 2024",highlights:["Performed first-line troubleshooting for registration system glitches","Coordinated with Central Admissions Committee and IT team for issue resolution"],tags:["Support","Troubleshooting"]},{company:"Dinas Pendidikan Karanganyar",role:"Helpdesk PPDB",period:"June 2023",highlights:["Assisted students and parents with technical admissions inquiries across zonation, academic, affirmative, and transfer tracks"],tags:["Education","Support"]},{company:"UPT TIK UNS",role:"Software Developer — Internship",period:"Jan 2023 — Mar 2024",highlights:['Co-developed "Report-PBJ" — web app for managing university procurement workflows','Updated "Domain-MS" — domain management system for Universitas Sebelas Maret','Participated in "SEMANTIK" collaboration event with Indosat and Telkomsel',"Led cybersecurity awareness socialization with Karanganyar government"],tags:["Government","Web App","Procurement"]},{company:"Assistant Lecturer — S1 Informatika UNS",role:"Teaching Assistant",period:"Aug 2022 — June 2024",highlights:["Programming Concepts Course (Aug 2022 — Dec 2023)","Data Structure and Algorithm Course (Feb 2022 — July 2023)","Object Oriented Programming Course (Aug 2023 — Dec 2023)","Database Course (Aug 2023 — Dec 2023)","Web Programming Course (Jan 2024 — June 2024)","Shared knowledge, created materials, and evaluated student assignments"],tags:["Teaching","DSA","OOP","Database","Web"]},{company:"FATISDA UNS",role:"Accreditation Team & ISHC-RG Research Assistant",period:"Aug 2022 — Aug 2023",highlights:["Conducted exploratory research in cybersecurity and Humanized Computing","Collected, processed, and analyzed network security data for risk assessments","Documented research methodologies, testing scenarios, and findings","Authored technical reports and academic manuscripts for publication"],tags:["Research","Cybersecurity","Academic Writing"]}],py=[{title:"Book Author",description:'"Strategi Membangun Portal Website Aman Dari Serangan Judi Online" with ISHC-RG, Faculty of Informatics and Data Science, Universitas Sebelas Maret.',icon:"book-open"},{title:"Undergraduate Thesis",description:'"Dual-View Radiographic Captioning for Chest X-ray Frontal and Lateral using DenseNet-LSTM" — Undergraduate Publication.',icon:"graduation-cap"}],KT=[{name:"Himpunan Mahasiswa Informatika UNS",role:"PSDM Staff",period:"Mar 2022 — Mar 2023",description:"Helped new students adapt to campus life and participate in organization activities."},{name:"PKKMB FATISDA 2022",role:"Head Division of Curriculum",period:"July 2022 — Aug 2022",description:"Managed Curriculum Division — evaluated tasks, organized orientation program for new students."},{name:"OSPRODI INFORMATIKA",role:"Head Division of Technology",period:"July 2022 — Aug 2022",description:"Managed ALGORITMARU TASK (web-based) and CODING TASK challenges for new students."},{name:"Bangkit Academy Batch 2",role:"Cohort — Machine Learning Path",period:"Aug 2023 — Jan 2024",description:'Studied Machine Learning with Python/JS, TensorFlow, TFD Certification. Capstone: "NutriChive" — ingredient scanning & recipe recommendation app.'}],ZT=[{name:"Frontend",items:["Vue.js","React","HTML5","CSS3","TailwindCSS","JavaScript","TypeScript"]},{name:"Backend",items:["Laravel","Node.js","Express","REST API","PHP","Python"]},{name:"Database",items:["MySQL","PostgreSQL","MongoDB","Redis"]},{name:"DevOps & Tools",items:["Git","Docker","Linux","Nginx","CI/CD","Google Cloud"]},{name:"AI & ML",items:["TensorFlow","Machine Learning","Deep Learning","Computer Vision"]},{name:"Security",items:["JWT","OAuth","Vulnerability Assessment","CVSS","Penetration Testing"]}],JT=[{name:"Bahasa Indonesia",level:"Native",percentage:100},{name:"English",level:"Proficient",percentage:85},{name:"Japanese",level:"Beginner",percentage:25}],Qg=[{label:"Home",href:"#hero"},{label:"About",href:"#about"},{label:"Experience",href:"#experience"},{label:"Skills",href:"#skills"},{label:"Contact",href:"#contact"}];/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=n=>n==="";/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase());/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=n=>{const e=tw(n);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ja={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=({name:n,iconNode:e,absoluteStrokeWidth:t,"absolute-stroke-width":i,strokeWidth:r,"stroke-width":s,size:o=ja.width,color:a=ja.stroke,...l},{slots:c})=>Nu("svg",{...ja,...l,width:o,height:o,stroke:a,"stroke-width":e_(t)||e_(i)||t===!0||i===!0?Number(r||s||ja["stroke-width"])*24/Number(o):r||s||ja["stroke-width"],class:ew("lucide",l.class,...n?[`lucide-${t_(nw(n))}-icon`,`lucide-${t_(n)}`]:["lucide-icon"]),...!c.default&&!QT(l)&&{"aria-hidden":"true"}},[...e.map(u=>Nu(...u)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=(n,e)=>(t,{slots:i,attrs:r})=>Nu(iw,{...r,...t,iconNode:e,name:n},i);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=Pt("award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=Pt("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=Pt("brain",[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=Pt("briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=Pt("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=Pt("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=Pt("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=Pt("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=Pt("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=Pt("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=Pt("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=Pt("file-down",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=Pt("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=Pt("graduation-cap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=Pt("heart",[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=Pt("linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=Pt("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=Pt("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=Pt("moon",[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=Pt("panels-top-left",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=Pt("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=Pt("server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=Pt("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=Pt("snowflake",[["path",{d:"m10 20-1.25-2.5L6 18",key:"18frcb"}],["path",{d:"M10 4 8.75 6.5 6 6",key:"7mghy3"}],["path",{d:"m14 20 1.25-2.5L18 18",key:"1chtki"}],["path",{d:"m14 4 1.25 2.5L18 6",key:"1b4wsy"}],["path",{d:"m17 21-3-6h-4",key:"15hhxa"}],["path",{d:"m17 3-3 6 1.5 3",key:"11697g"}],["path",{d:"M2 12h6.5L10 9",key:"kv9z4n"}],["path",{d:"m20 10-1.5 2 1.5 2",key:"1swlpi"}],["path",{d:"M22 12h-6.5L14 15",key:"1mxi28"}],["path",{d:"m4 10 1.5 2L4 14",key:"k9enpj"}],["path",{d:"m7 21 3-6-1.5-3",key:"j8hb9u"}],["path",{d:"m7 3 3 6h4",key:"1otusx"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=Pt("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=Pt("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=Pt("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=Pt("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=Pt("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Cw={class:"max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between"},Rw={class:"hidden md:flex items-center gap-6"},Pw=["href","onClick"],Dw={class:"flex items-center gap-2"},Lw=["title"],Iw=["title"],Uw={key:0,class:"md:hidden glass-card !rounded-t-none mt-1 mx-4 p-4 space-y-3"},Nw=["href","onClick"],Ow=ur({__name:"Navbar",setup(n){const e=Fa(),t=Lt(!1),i=Lt(!1);function r(){t.value=window.scrollY>20}Di(()=>{window.addEventListener("scroll",r,{passive:!0})}),Tp(()=>{window.removeEventListener("scroll",r)});function s(o){i.value=!1;const a=document.querySelector(o);a&&a.scrollIntoView({behavior:"smooth",block:"start"})}return(o,a)=>(qe(),at("nav",{id:"navbar",class:Gr(["fixed top-0 left-0 right-0 z-[100] transition-all duration-500",[t.value?"py-3 glass-card !rounded-none border-x-0 border-t-0":"py-5 bg-transparent"]])},[X("div",Cw,[X("a",{href:"#hero",class:"text-xl font-bold tracking-tight transition-colors",style:{color:"var(--accent-cyan)"},onClick:a[0]||(a[0]=ou(l=>s("#hero"),["prevent"]))}," <Furqon /> "),X("div",Rw,[(qe(!0),at(jt,null,ir(Ae(Qg),l=>(qe(),at("a",{key:l.href,href:l.href,class:"text-sm font-medium transition-colors duration-200 hover:text-[var(--accent-cyan)]",style:{color:"var(--text-secondary)"},onClick:ou(c=>s(l.href),["prevent"])},gt(l.label),9,Pw))),128))]),X("div",Dw,[X("button",{id:"btn-toggle-mode",class:"p-2 rounded-lg transition-all duration-300 hover:bg-[var(--card-bg)]",title:Ae(e).mode==="immersive"?"Switch to Clean View":"Switch to Immersive 3D",onClick:a[1]||(a[1]=l=>Ae(e).toggleMode())},[Ae(e).mode==="clean"?(qe(),zr(Ae(Mw),{key:0,size:18,style:{color:"var(--accent-cyan)"}})):(qe(),zr(Ae(Aw),{key:1,size:18,style:{color:"var(--accent-cyan)"}}))],8,Lw),X("button",{id:"btn-toggle-dark",class:"p-2 rounded-lg transition-all duration-300 hover:bg-[var(--card-bg)]",title:Ae(e).isDark?"Switch to Light Mode":"Switch to Dark Mode",onClick:a[2]||(a[2]=l=>Ae(e).toggleDark())},[Ae(e).isDark?(qe(),zr(Ae(bw),{key:1,size:18,style:{color:"var(--accent-cyan)"}})):(qe(),zr(Ae(vw),{key:0,size:18,style:{color:"var(--accent-cyan)"}}))],8,Iw),X("button",{id:"btn-mobile-menu",class:"md:hidden p-2 rounded-lg transition-all duration-300 hover:bg-[var(--card-bg)]",onClick:a[3]||(a[3]=l=>i.value=!i.value)},[i.value?(qe(),zr(Ae(ww),{key:0,size:20,style:{color:"var(--text-primary)"}})):(qe(),zr(Ae(_w),{key:1,size:20,style:{color:"var(--text-primary)"}}))])])]),Qe(s1,{name:"slide-down"},{default:k0(()=>[i.value?(qe(),at("div",Uw,[(qe(!0),at(jt,null,ir(Ae(Qg),l=>(qe(),at("a",{key:l.href,href:l.href,class:"block text-sm font-medium py-2 px-3 rounded-lg transition-colors hover:bg-[var(--card-bg)]",style:{color:"var(--text-secondary)"},onClick:ou(c=>s(l.href),["prevent"])},gt(l.label),9,Nw))),128))])):Na("",!0)]),_:1})],2))}}),Fw=dy(Ow,[["__scopeId","data-v-0ee50708"]]),kw=["stroke"],Bw=["stroke"],zw=["stroke"],Hw=ur({__name:"IceCursor",setup(n){const e=Fa(),t=Lt(0),i=Lt(0),r=Lt(0),s=Lt(0),o=Lt(0),a=Lt(0),l=Lt(!1),c=Lt(!1),u=Lt(!1),f=Lt(0),h=Lt("");let d=null;const g=Zn(()=>e.isDark?"#00d2ff":"#0077b6"),_=Zn(()=>e.isDark?"rgba(0, 210, 255, 0.5)":"rgba(0, 119, 182, 0.6)"),m=Zn(()=>e.isDark?"rgba(0, 210, 255, 0.15)":"rgba(0, 119, 182, 0.12)");function p(y){t.value=y.clientX,i.value=y.clientY,u.value||(u.value=!0)}function M(){c.value=!0}function b(){c.value=!1}function x(y){l.value=!0;const v=y.currentTarget;h.value=v.getAttribute("data-cursor-text")||""}function w(){l.value=!1,h.value=""}function C(){r.value+=(t.value-r.value)*.18,s.value+=(i.value-s.value)*.18,o.value+=(t.value-o.value)*.08,a.value+=(i.value-a.value)*.08,f.value+=.4,d=requestAnimationFrame(C)}function T(){document.querySelectorAll('a, button, input, textarea, [role="button"], .glass-card').forEach(v=>{v.addEventListener("mouseenter",x),v.addEventListener("mouseleave",w)})}let P=null;return Di(()=>{window.addEventListener("mousemove",p,{passive:!0}),window.addEventListener("mousedown",M),window.addEventListener("mouseup",b),C(),setTimeout(T,500),P=new MutationObserver(()=>T()),P.observe(document.body,{childList:!0,subtree:!0})}),os(()=>{window.removeEventListener("mousemove",p),window.removeEventListener("mousedown",M),window.removeEventListener("mouseup",b),d!==null&&cancelAnimationFrame(d),P&&P.disconnect()}),(y,v)=>(qe(),at("div",{class:Gr(["cursor-wrapper",{"cursor-visible":u.value}])},[X("div",{class:Gr(["cursor-glow",{"cursor-hover":l.value}]),style:Vi({left:o.value+"px",top:a.value+"px",background:`radial-gradient(circle, ${m.value} 0%, transparent 70%)`})},null,6),(qe(),at("svg",{class:Gr(["cursor-snowflake-ring",{"cursor-hover":l.value,"cursor-click":c.value}]),style:Vi({left:r.value+"px",top:s.value+"px",transform:`translate(-50%, -50%) rotate(${f.value}deg)`}),viewBox:"0 0 48 48",fill:"none",stroke:_.value,"stroke-width":"1","stroke-linecap":"round"},[X("polygon",{points:"24,4 42,14 42,34 24,44 6,34 6,14",fill:"none",stroke:_.value,"stroke-width":"0.8"},null,8,Bw),v[0]||(v[0]=X("line",{x1:"24",y1:"4",x2:"24",y2:"44",opacity:"0.3"},null,-1)),v[1]||(v[1]=X("line",{x1:"6",y1:"14",x2:"42",y2:"34",opacity:"0.3"},null,-1)),v[2]||(v[2]=X("line",{x1:"42",y1:"14",x2:"6",y2:"34",opacity:"0.3"},null,-1))],14,kw)),(qe(),at("svg",{class:Gr(["cursor-diamond-ring",{"cursor-hover":l.value,"cursor-click":c.value}]),style:Vi({left:r.value+"px",top:s.value+"px",transform:`translate(-50%, -50%) rotate(${-f.value*.6}deg)`}),viewBox:"0 0 24 24",fill:"none",stroke:_.value,"stroke-width":"0.8"},[...v[3]||(v[3]=[X("polygon",{points:"12,2 22,12 12,22 2,12",opacity:"0.6"},null,-1)])],14,zw)),h.value?(qe(),at("div",{key:0,class:"cursor-badge font-mono text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-lg",style:Vi({left:t.value+20+"px",top:i.value-20+"px",background:g.value,color:Ae(e).isDark?"#000":"#fff"})},gt(h.value),5)):Na("",!0),X("div",{class:Gr(["cursor-center",{"cursor-hover":l.value,"cursor-click":c.value}]),style:Vi({left:t.value+"px",top:i.value+"px",background:g.value,boxShadow:`0 0 8px ${g.value}, 0 0 20px ${m.value}`})},null,6)],2))}});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sm="175",Vw=0,r_=1,Gw=2,vy=1,Ww=2,Fr=3,Us=0,li=1,tr=2,As=0,ya=1,Yu=2,s_=3,o_=4,Xw=5,io=100,$w=101,qw=102,Yw=103,jw=104,Kw=200,Zw=201,Jw=202,Qw=203,Ed=204,Td=205,eA=206,tA=207,nA=208,iA=209,rA=210,sA=211,oA=212,aA=213,lA=214,wd=0,Ad=1,Cd=2,Ra=3,Rd=4,Pd=5,Dd=6,Ld=7,xy=0,cA=1,uA=2,Cs=0,fA=1,hA=2,dA=3,yy=4,pA=5,mA=6,gA=7,Sy=300,Pa=301,Da=302,Id=303,Ud=304,Ef=306,Nd=1e3,co=1001,Od=1002,ar=1003,_A=1004,Ic=1005,br=1006,ah=1007,uo=1008,rs=1009,My=1010,by=1011,Jl=1012,om=1013,wo=1014,Yr=1015,lc=1016,am=1017,lm=1018,Ql=1020,Ey=35902,Ty=1021,wy=1022,rr=1023,Ay=1024,Cy=1025,ec=1026,tc=1027,Ry=1028,cm=1029,Py=1030,um=1031,fm=1033,_u=33776,vu=33777,xu=33778,yu=33779,Fd=35840,kd=35841,Bd=35842,zd=35843,Hd=36196,Vd=37492,Gd=37496,Wd=37808,Xd=37809,$d=37810,qd=37811,Yd=37812,jd=37813,Kd=37814,Zd=37815,Jd=37816,Qd=37817,ep=37818,tp=37819,np=37820,ip=37821,Su=36492,rp=36494,sp=36495,Dy=36283,op=36284,ap=36285,lp=36286,vA=3200,xA=3201,Ly=0,yA=1,vs="",Bi="srgb",La="srgb-linear",ju="linear",Dt="srgb",ko=7680,a_=519,SA=512,MA=513,bA=514,Iy=515,EA=516,TA=517,wA=518,AA=519,l_=35044,c_="300 es",jr=2e3,Ku=2001;class ka{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let u_=1234567;const Pl=Math.PI/180,nc=180/Math.PI;function Ba(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function hm(n,e){return(n%e+e)%e}function CA(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function RA(n,e,t){return n!==e?(t-n)/(e-n):0}function Dl(n,e,t){return(1-t)*n+t*e}function PA(n,e,t,i){return Dl(n,e,1-Math.exp(-t*i))}function DA(n,e=1){return e-Math.abs(hm(n,e*2)-e)}function LA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function IA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function UA(n,e){return n+Math.floor(Math.random()*(e-n+1))}function NA(n,e){return n+Math.random()*(e-n)}function OA(n){return n*(.5-Math.random())}function FA(n){n!==void 0&&(u_=n);let e=u_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kA(n){return n*Pl}function BA(n){return n*nc}function zA(n){return(n&n-1)===0&&n!==0}function HA(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function VA(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function GA(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function na(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const hn={DEG2RAD:Pl,RAD2DEG:nc,generateUUID:Ba,clamp:dt,euclideanModulo:hm,mapLinear:CA,inverseLerp:RA,lerp:Dl,damp:PA,pingpong:DA,smoothstep:LA,smootherstep:IA,randInt:UA,randFloat:NA,randFloatSpread:OA,seededRandom:FA,degToRad:kA,radToDeg:BA,isPowerOfTwo:zA,ceilPowerOfTwo:HA,floorPowerOfTwo:VA,setQuaternionFromProperEuler:GA,normalize:Hn,denormalize:na};class mt{constructor(e=0,t=0){mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,t,i,r,s,o,a,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],M=r[1],b=r[4],x=r[7],w=r[2],C=r[5],T=r[8];return s[0]=o*_+a*M+l*w,s[3]=o*m+a*b+l*C,s[6]=o*p+a*x+l*T,s[1]=c*_+u*M+f*w,s[4]=c*m+u*b+f*C,s[7]=c*p+u*x+f*T,s[2]=h*_+d*M+g*w,s[5]=h*m+d*b+g*C,s[8]=h*p+d*x+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(lh.makeScale(e,t)),this}rotate(e){return this.premultiply(lh.makeRotation(-e)),this}translate(e,t){return this.premultiply(lh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lh=new it;function Uy(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function WA(){const n=Zu("canvas");return n.style.display="block",n}const f_={};function Mu(n){n in f_||(f_[n]=!0,console.warn(n))}function XA(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function $A(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qA(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const h_=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),d_=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YA(){const n={enabled:!0,workingColorSpace:La,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Dt&&(r.r=Jr(r.r),r.g=Jr(r.g),r.b=Jr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Dt&&(r.r=Sa(r.r),r.g=Sa(r.g),r.b=Sa(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vs?ju:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[La]:{primaries:e,whitePoint:i,transfer:ju,toXYZ:h_,fromXYZ:d_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bi},outputColorSpaceConfig:{drawingBufferColorSpace:Bi}},[Bi]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:h_,fromXYZ:d_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bi}}}),n}const St=YA();function Jr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Sa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Bo;class jA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Bo===void 0&&(Bo=Zu("canvas")),Bo.width=e.width,Bo.height=e.height;const r=Bo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Bo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Jr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Jr(t[i]/255)*255):t[i]=Jr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KA=0;class dm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KA++}),this.uuid=Ba(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ch(r[o].image)):s.push(ch(r[o]))}else s=ch(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ch(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZA=0;class ci extends ka{constructor(e=ci.DEFAULT_IMAGE,t=ci.DEFAULT_MAPPING,i=co,r=co,s=br,o=uo,a=rr,l=rs,c=ci.DEFAULT_ANISOTROPY,u=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZA++}),this.uuid=Ba(),this.name="",this.source=new dm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nd:e.x=e.x-Math.floor(e.x);break;case co:e.x=e.x<0?0:1;break;case Od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nd:e.y=e.y-Math.floor(e.y);break;case co:e.y=e.y<0?0:1;break;case Od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ci.DEFAULT_IMAGE=null;ci.DEFAULT_MAPPING=Sy;ci.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,x=(d+1)/2,w=(p+1)/2,C=(u+h)/4,T=(f+_)/4,P=(g+m)/4;return b>x&&b>w?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=C/i,s=T/i):x>w?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=C/r,s=P/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=T/s,r=P/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JA extends ka{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:br,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ci(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new dm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ao extends JA{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ny extends ci{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ar,this.minFilter=ar,this.wrapR=co,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QA extends ci{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ar,this.minFilter=ar,this.wrapR=co,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cc{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,M=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const w=Math.sqrt(b),C=Math.atan2(w,p*M);m=Math.sin(m*C)/w,a=Math.sin(a*C)/w}const x=a*M;if(l=l*m+h*x,c=c*m+d*x,u=u*m+g*x,f=f*m+_*x,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(p_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(p_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uh.copy(this).projectOnVector(e),this.sub(uh)}reflect(e){return this.sub(uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uh=new Z,p_=new cc;class uc{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zi):Zi.fromBufferAttribute(s,o),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Uc.copy(i.boundingBox)),Uc.applyMatrix4(e.matrixWorld),this.union(Uc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ka),Nc.subVectors(this.max,Ka),zo.subVectors(e.a,Ka),Ho.subVectors(e.b,Ka),Vo.subVectors(e.c,Ka),cs.subVectors(Ho,zo),us.subVectors(Vo,Ho),Ws.subVectors(zo,Vo);let t=[0,-cs.z,cs.y,0,-us.z,us.y,0,-Ws.z,Ws.y,cs.z,0,-cs.x,us.z,0,-us.x,Ws.z,0,-Ws.x,-cs.y,cs.x,0,-us.y,us.x,0,-Ws.y,Ws.x,0];return!fh(t,zo,Ho,Vo,Nc)||(t=[1,0,0,0,1,0,0,0,1],!fh(t,zo,Ho,Vo,Nc))?!1:(Oc.crossVectors(cs,us),t=[Oc.x,Oc.y,Oc.z],fh(t,zo,Ho,Vo,Nc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Lr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Zi=new Z,Uc=new uc,zo=new Z,Ho=new Z,Vo=new Z,cs=new Z,us=new Z,Ws=new Z,Ka=new Z,Nc=new Z,Oc=new Z,Xs=new Z;function fh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Xs.fromArray(n,s);const a=r.x*Math.abs(Xs.x)+r.y*Math.abs(Xs.y)+r.z*Math.abs(Xs.z),l=e.dot(Xs),c=t.dot(Xs),u=i.dot(Xs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const eC=new uc,Za=new Z,hh=new Z;class Tf{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):eC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Za.subVectors(e,this.center);const t=Za.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Za,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Za.copy(e.center).add(hh)),this.expandByPoint(Za.copy(e.center).sub(hh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ir=new Z,dh=new Z,Fc=new Z,fs=new Z,ph=new Z,kc=new Z,mh=new Z;class Oy{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ir.copy(this.origin).addScaledVector(this.direction,t),Ir.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){dh.copy(e).add(t).multiplyScalar(.5),Fc.copy(t).sub(e).normalize(),fs.copy(this.origin).sub(dh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Fc),a=fs.dot(this.direction),l=-fs.dot(Fc),c=fs.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(dh).addScaledVector(Fc,h),d}intersectSphere(e,t){Ir.subVectors(e.center,this.origin);const i=Ir.dot(this.direction),r=Ir.dot(Ir)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ir)!==null}intersectTriangle(e,t,i,r,s){ph.subVectors(t,e),kc.subVectors(i,e),mh.crossVectors(ph,kc);let o=this.direction.dot(mh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fs.subVectors(this.origin,e);const l=a*this.direction.dot(kc.crossVectors(fs,kc));if(l<0)return null;const c=a*this.direction.dot(ph.cross(fs));if(c<0||l+c>o)return null;const u=-a*fs.dot(mh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Go.setFromMatrixColumn(e,0).length(),s=1/Go.setFromMatrixColumn(e,1).length(),o=1/Go.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tC,e,nC)}lookAt(e,t,i){const r=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),hs.crossVectors(i,di),hs.lengthSq()===0&&(Math.abs(i.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),hs.crossVectors(i,di)),hs.normalize(),Bc.crossVectors(di,hs),r[0]=hs.x,r[4]=Bc.x,r[8]=di.x,r[1]=hs.y,r[5]=Bc.y,r[9]=di.y,r[2]=hs.z,r[6]=Bc.z,r[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],b=i[7],x=i[11],w=i[15],C=r[0],T=r[4],P=r[8],y=r[12],v=r[1],D=r[5],I=r[9],k=r[13],F=r[2],q=r[6],O=r[10],V=r[14],H=r[3],se=r[7],N=r[11],ge=r[15];return s[0]=o*C+a*v+l*F+c*H,s[4]=o*T+a*D+l*q+c*se,s[8]=o*P+a*I+l*O+c*N,s[12]=o*y+a*k+l*V+c*ge,s[1]=u*C+f*v+h*F+d*H,s[5]=u*T+f*D+h*q+d*se,s[9]=u*P+f*I+h*O+d*N,s[13]=u*y+f*k+h*V+d*ge,s[2]=g*C+_*v+m*F+p*H,s[6]=g*T+_*D+m*q+p*se,s[10]=g*P+_*I+m*O+p*N,s[14]=g*y+_*k+m*V+p*ge,s[3]=M*C+b*v+x*F+w*H,s[7]=M*T+b*D+x*q+w*se,s[11]=M*P+b*I+x*O+w*N,s[15]=M*y+b*k+x*V+w*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+_*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,b=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,x=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,w=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,C=t*M+i*b+r*x+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=M*T,e[1]=(_*h*s-f*m*s-_*r*d+i*m*d+f*r*p-i*h*p)*T,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*T,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*T,e[4]=b*T,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*T,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*T,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*T,e[8]=x*T,e[9]=(g*f*s-u*_*s-g*i*d+t*_*d+u*i*p-t*f*p)*T,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*p+t*a*p)*T,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*T,e[12]=w*T,e[13]=(u*_*r-g*f*r+g*i*h-t*_*h-u*i*m+t*f*m)*T,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*T,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,M=l*c,b=l*u,x=l*f,w=i.x,C=i.y,T=i.z;return r[0]=(1-(_+p))*w,r[1]=(d+x)*w,r[2]=(g-b)*w,r[3]=0,r[4]=(d-x)*C,r[5]=(1-(h+p))*C,r[6]=(m+M)*C,r[7]=0,r[8]=(g+b)*T,r[9]=(m-M)*T,r[10]=(1-(h+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Go.set(r[0],r[1],r[2]).length();const o=Go.set(r[4],r[5],r[6]).length(),a=Go.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ji.copy(this);const c=1/s,u=1/o,f=1/a;return Ji.elements[0]*=c,Ji.elements[1]*=c,Ji.elements[2]*=c,Ji.elements[4]*=u,Ji.elements[5]*=u,Ji.elements[6]*=u,Ji.elements[8]*=f,Ji.elements[9]*=f,Ji.elements[10]*=f,t.setFromRotationMatrix(Ji),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=jr){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,g;if(a===jr)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ku)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=jr){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,d=(i+r)*u;let g,_;if(a===jr)g=(o+s)*f,_=-2*f;else if(a===Ku)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Go=new Z,Ji=new $t,tC=new Z(0,0,0),nC=new Z(1,1,1),hs=new Z,Bc=new Z,di=new Z,m_=new $t,g_=new cc;class Rr{constructor(e=0,t=0,i=0,r=Rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return m_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(m_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return g_.setFromEuler(this),this.setFromQuaternion(g_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rr.DEFAULT_ORDER="XYZ";class Fy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iC=0;const __=new Z,Wo=new cc,Ur=new $t,zc=new Z,Ja=new Z,rC=new Z,sC=new cc,v_=new Z(1,0,0),x_=new Z(0,1,0),y_=new Z(0,0,1),S_={type:"added"},oC={type:"removed"},Xo={type:"childadded",child:null},gh={type:"childremoved",child:null};class Tn extends ka{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iC++}),this.uuid=Ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new Z,t=new Rr,i=new cc,r=new Z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $t},normalMatrix:{value:new it}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wo.setFromAxisAngle(e,t),this.quaternion.multiply(Wo),this}rotateOnWorldAxis(e,t){return Wo.setFromAxisAngle(e,t),this.quaternion.premultiply(Wo),this}rotateX(e){return this.rotateOnAxis(v_,e)}rotateY(e){return this.rotateOnAxis(x_,e)}rotateZ(e){return this.rotateOnAxis(y_,e)}translateOnAxis(e,t){return __.copy(e).applyQuaternion(this.quaternion),this.position.add(__.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(v_,e)}translateY(e){return this.translateOnAxis(x_,e)}translateZ(e){return this.translateOnAxis(y_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ur.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zc.copy(e):zc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ur.lookAt(Ja,zc,this.up):Ur.lookAt(zc,Ja,this.up),this.quaternion.setFromRotationMatrix(Ur),r&&(Ur.extractRotation(r.matrixWorld),Wo.setFromRotationMatrix(Ur),this.quaternion.premultiply(Wo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(S_),Xo.child=e,this.dispatchEvent(Xo),Xo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oC),gh.child=e,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ur),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(S_),Xo.child=e,this.dispatchEvent(Xo),Xo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ja,e,rC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ja,sC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tn.DEFAULT_UP=new Z(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qi=new Z,Nr=new Z,_h=new Z,Or=new Z,$o=new Z,qo=new Z,M_=new Z,vh=new Z,xh=new Z,yh=new Z,Sh=new It,Mh=new It,bh=new It;class nr{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qi.subVectors(e,t),r.cross(Qi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Qi.subVectors(r,t),Nr.subVectors(i,t),_h.subVectors(e,t);const o=Qi.dot(Qi),a=Qi.dot(Nr),l=Qi.dot(_h),c=Nr.dot(Nr),u=Nr.dot(_h),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Or)===null?!1:Or.x>=0&&Or.y>=0&&Or.x+Or.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Or)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Or.x),l.addScaledVector(o,Or.y),l.addScaledVector(a,Or.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Sh.setScalar(0),Mh.setScalar(0),bh.setScalar(0),Sh.fromBufferAttribute(e,t),Mh.fromBufferAttribute(e,i),bh.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Sh,s.x),o.addScaledVector(Mh,s.y),o.addScaledVector(bh,s.z),o}static isFrontFacing(e,t,i,r){return Qi.subVectors(i,t),Nr.subVectors(e,t),Qi.cross(Nr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qi.subVectors(this.c,this.b),Nr.subVectors(this.a,this.b),Qi.cross(Nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return nr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return nr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;$o.subVectors(r,i),qo.subVectors(s,i),vh.subVectors(e,i);const l=$o.dot(vh),c=qo.dot(vh);if(l<=0&&c<=0)return t.copy(i);xh.subVectors(e,r);const u=$o.dot(xh),f=qo.dot(xh);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector($o,o);yh.subVectors(e,s);const d=$o.dot(yh),g=qo.dot(yh);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(qo,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return M_.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(M_,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector($o,o).addScaledVector(qo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ky={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},Hc={h:0,s:0,l:0};function Eh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class pt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=i,St.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=St.workingColorSpace){if(e=hm(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Eh(o,s,e+1/3),this.g=Eh(o,s,e),this.b=Eh(o,s,e-1/3)}return St.toWorkingColorSpace(this,r),this}setStyle(e,t=Bi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bi){const i=ky[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}copyLinearToSRGB(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bi){return St.fromWorkingColorSpace(An.copy(this),e),Math.round(dt(An.r*255,0,255))*65536+Math.round(dt(An.g*255,0,255))*256+Math.round(dt(An.b*255,0,255))}getHexString(e=Bi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(An.copy(this),t);const i=An.r,r=An.g,s=An.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Bi){St.fromWorkingColorSpace(An.copy(this),e);const t=An.r,i=An.g,r=An.b;return e!==Bi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ds),this.setHSL(ds.h+e,ds.s+t,ds.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ds),e.getHSL(Hc);const i=Dl(ds.h,Hc.h,t),r=Dl(ds.s,Hc.s,t),s=Dl(ds.l,Hc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new pt;pt.NAMES=ky;let aC=0;class za extends ka{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aC++}),this.uuid=Ba(),this.name="",this.type="Material",this.blending=ya,this.side=Us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ed,this.blendDst=Td,this.blendEquation=io,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ko,this.stencilZFail=ko,this.stencilZPass=ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ya&&(i.blending=this.blending),this.side!==Us&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ed&&(i.blendSrc=this.blendSrc),this.blendDst!==Td&&(i.blendDst=this.blendDst),this.blendEquation!==io&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ra&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==a_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ko&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ko&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ko&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class oa extends za{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rr,this.combine=xy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new Z,Vc=new mt;let lC=0;class lr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lC++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=l_,this.updateRanges=[],this.gpuType=Yr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vc.fromBufferAttribute(this,t),Vc.applyMatrix3(e),this.setXY(t,Vc.x,Vc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=na(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=na(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=na(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=na(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=na(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array),r=Hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array),r=Hn(r,this.array),s=Hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==l_&&(e.usage=this.usage),e}}class By extends lr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class zy extends lr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nn extends lr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let cC=0;const Oi=new $t,Th=new Tn,Yo=new Z,pi=new uc,Qa=new uc,vn=new Z;class Yi extends ka{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cC++}),this.uuid=Ba(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uy(e)?zy:By)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new it().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,t,i){return Oi.makeTranslation(e,t,i),this.applyMatrix4(Oi),this}scale(e,t,i){return Oi.makeScale(e,t,i),this.applyMatrix4(Oi),this}lookAt(e){return Th.lookAt(e),Th.updateMatrix(),this.applyMatrix4(Th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yo).negate(),this.translate(Yo.x,Yo.y,Yo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Nn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];pi.setFromBufferAttribute(s),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Qa.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(pi.min,Qa.min),pi.expandByPoint(vn),vn.addVectors(pi.max,Qa.max),pi.expandByPoint(vn)):(pi.expandByPoint(Qa.min),pi.expandByPoint(Qa.max))}pi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)vn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)vn.fromBufferAttribute(a,c),l&&(Yo.fromBufferAttribute(e,c),vn.add(Yo)),r=Math.max(r,i.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new lr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new Z,l[P]=new Z;const c=new Z,u=new Z,f=new Z,h=new mt,d=new mt,g=new mt,_=new Z,m=new Z;function p(P,y,v){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,v),h.fromBufferAttribute(s,P),d.fromBufferAttribute(s,y),g.fromBufferAttribute(s,v),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[P].add(_),a[y].add(_),a[v].add(_),l[P].add(m),l[y].add(m),l[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,y=M.length;P<y;++P){const v=M[P],D=v.start,I=v.count;for(let k=D,F=D+I;k<F;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const b=new Z,x=new Z,w=new Z,C=new Z;function T(P){w.fromBufferAttribute(r,P),C.copy(w);const y=a[P];b.copy(y),b.sub(w.multiplyScalar(w.dot(y))).normalize(),x.crossVectors(C,y);const D=x.dot(l[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,D)}for(let P=0,y=M.length;P<y;++P){const v=M[P],D=v.start,I=v.count;for(let k=D,F=D+I;k<F;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new lr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new Z,s=new Z,o=new Z,a=new Z,l=new Z,c=new Z,u=new Z,f=new Z;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new lr(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const b_=new $t,$s=new Oy,Gc=new Tf,E_=new Z,Wc=new Z,Xc=new Z,$c=new Z,wh=new Z,qc=new Z,T_=new Z,Yc=new Z;class ii extends Tn{constructor(e=new Yi,t=new oa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){qc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(wh.fromBufferAttribute(f,e),o?qc.addScaledVector(wh,u):qc.addScaledVector(wh.sub(t),u))}t.add(qc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gc.copy(i.boundingSphere),Gc.applyMatrix4(s),$s.copy(e.ray).recast(e.near),!(Gc.containsPoint($s.origin)===!1&&($s.intersectSphere(Gc,E_)===null||$s.origin.distanceToSquared(E_)>(e.far-e.near)**2))&&(b_.copy(s).invert(),$s.copy(e.ray).applyMatrix4(b_),!(i.boundingBox!==null&&$s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$s)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,w=b;x<w;x+=3){const C=a.getX(x),T=a.getX(x+1),P=a.getX(x+2);r=jc(this,p,e,i,c,u,f,C,T,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);r=jc(this,o,e,i,c,u,f,M,b,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,w=b;x<w;x+=3){const C=x,T=x+1,P=x+2;r=jc(this,p,e,i,c,u,f,C,T,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,b=m+1,x=m+2;r=jc(this,o,e,i,c,u,f,M,b,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function uC(n,e,t,i,r,s,o,a){let l;if(e.side===li?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Us,a),l===null)return null;Yc.copy(a),Yc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Yc);return c<t.near||c>t.far?null:{distance:c,point:Yc.clone(),object:n}}function jc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Wc),n.getVertexPosition(l,Xc),n.getVertexPosition(c,$c);const u=uC(n,e,t,i,Wc,Xc,$c,T_);if(u){const f=new Z;nr.getBarycoord(T_,Wc,Xc,$c,f),r&&(u.uv=nr.getInterpolatedAttribute(r,a,l,c,f,new mt)),s&&(u.uv1=nr.getInterpolatedAttribute(s,a,l,c,f,new mt)),o&&(u.normal=nr.getInterpolatedAttribute(o,a,l,c,f,new Z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new Z,materialIndex:0};nr.getNormal(Wc,Xc,$c,h.normal),u.face=h,u.barycoord=f}return u}class fc extends Yi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Nn(c,3)),this.setAttribute("normal",new Nn(u,3)),this.setAttribute("uv",new Nn(f,2));function g(_,m,p,M,b,x,w,C,T,P,y){const v=x/T,D=w/P,I=x/2,k=w/2,F=C/2,q=T+1,O=P+1;let V=0,H=0;const se=new Z;for(let N=0;N<O;N++){const ge=N*D-k;for(let Ee=0;Ee<q;Ee++){const je=Ee*v-I;se[_]=je*M,se[m]=ge*b,se[p]=F,c.push(se.x,se.y,se.z),se[_]=0,se[m]=0,se[p]=C>0?1:-1,u.push(se.x,se.y,se.z),f.push(Ee/T),f.push(1-N/P),V+=1}}for(let N=0;N<P;N++)for(let ge=0;ge<T;ge++){const Ee=h+ge+q*N,je=h+ge+q*(N+1),re=h+(ge+1)+q*(N+1),de=h+(ge+1)+q*N;l.push(Ee,je,de),l.push(je,re,de),H+=6}a.addGroup(d,H,y),d+=H,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ia(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Vn(n){const e={};for(let t=0;t<n.length;t++){const i=Ia(n[t]);for(const r in i)e[r]=i[r]}return e}function fC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hy(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const hC={clone:Ia,merge:Vn};var dC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ns extends za{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dC,this.fragmentShader=pC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ia(e.uniforms),this.uniformsGroups=fC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Vy extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=jr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ps=new Z,w_=new mt,A_=new mt;class xi extends Vy{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nc*2*Math.atan(Math.tan(Pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ps.x,ps.y).multiplyScalar(-e/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ps.x,ps.y).multiplyScalar(-e/ps.z)}getViewSize(e,t){return this.getViewBounds(e,w_,A_),t.subVectors(A_,w_)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const jo=-90,Ko=1;class mC extends Tn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xi(jo,Ko,e,t);r.layers=this.layers,this.add(r);const s=new xi(jo,Ko,e,t);s.layers=this.layers,this.add(s);const o=new xi(jo,Ko,e,t);o.layers=this.layers,this.add(o);const a=new xi(jo,Ko,e,t);a.layers=this.layers,this.add(a);const l=new xi(jo,Ko,e,t);l.layers=this.layers,this.add(l);const c=new xi(jo,Ko,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===jr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ku)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Gy extends ci{constructor(e=[],t=Pa,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gC extends Ao{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Gy(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:br}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fc(5,5,5),s=new Ns({name:"CubemapFromEquirect",uniforms:Ia(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:li,blending:As});s.uniforms.tEquirect.value=t;const o=new ii(r,s),a=t.minFilter;return t.minFilter===uo&&(t.minFilter=br),new mC(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Kc extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _C={type:"move"};class Ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_C)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Kc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class pm{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new pt(e),this.density=t}clone(){return new pm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class vC extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rr,this.environmentIntensity=1,this.environmentRotation=new Rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ch=new Z,xC=new Z,yC=new it;class eo{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ch.subVectors(i,t).cross(xC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ch),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yC.getNormalMatrix(e),r=this.coplanarPoint(Ch).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new Tf,Zc=new Z;class mm{constructor(e=new eo,t=new eo,i=new eo,r=new eo,s=new eo,o=new eo){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=jr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],M=r[13],b=r[14],x=r[15];if(i[0].setComponents(l-s,h-c,m-d,x-p).normalize(),i[1].setComponents(l+s,h+c,m+d,x+p).normalize(),i[2].setComponents(l+o,h+u,m+g,x+M).normalize(),i[3].setComponents(l-o,h-u,m-g,x-M).normalize(),i[4].setComponents(l-a,h-f,m-_,x-b).normalize(),t===jr)i[5].setComponents(l+a,h+f,m+_,x+b).normalize();else if(t===Ku)i[5].setComponents(a,f,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Zc.x=r.normal.x>0?e.max.x:e.min.x,Zc.y=r.normal.y>0?e.max.y:e.min.y,Zc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wy extends za{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const C_=new $t,cp=new Oy,Jc=new Tf,Qc=new Z;class SC extends Tn{constructor(e=new Yi,t=new Wy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jc.copy(i.boundingSphere),Jc.applyMatrix4(r),Jc.radius+=s,e.ray.intersectsSphere(Jc)===!1)return;C_.copy(r).invert(),cp.copy(e.ray).applyMatrix4(C_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);Qc.fromBufferAttribute(f,m),R_(Qc,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)Qc.fromBufferAttribute(f,g),R_(Qc,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function R_(n,e,t,i,r,s,o){const a=cp.distanceSqToPoint(n);if(a<t){const l=new Z;cp.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Xy extends ci{constructor(e,t,i=wo,r,s,o,a=ar,l=ar,c,u=ec){if(u!==ec&&u!==tc)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gm extends Yi{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Nn(s,3)),this.setAttribute("normal",new Nn(s.slice(),3)),this.setAttribute("uv",new Nn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const b=new Z,x=new Z,w=new Z;for(let C=0;C<t.length;C+=3)d(t[C+0],b),d(t[C+1],x),d(t[C+2],w),l(b,x,w,M)}function l(M,b,x,w){const C=w+1,T=[];for(let P=0;P<=C;P++){T[P]=[];const y=M.clone().lerp(x,P/C),v=b.clone().lerp(x,P/C),D=C-P;for(let I=0;I<=D;I++)I===0&&P===C?T[P][I]=y:T[P][I]=y.clone().lerp(v,I/D)}for(let P=0;P<C;P++)for(let y=0;y<2*(C-P)-1;y++){const v=Math.floor(y/2);y%2===0?(h(T[P][v+1]),h(T[P+1][v]),h(T[P][v])):(h(T[P][v+1]),h(T[P+1][v+1]),h(T[P+1][v]))}}function c(M){const b=new Z;for(let x=0;x<s.length;x+=3)b.x=s[x+0],b.y=s[x+1],b.z=s[x+2],b.normalize().multiplyScalar(M),s[x+0]=b.x,s[x+1]=b.y,s[x+2]=b.z}function u(){const M=new Z;for(let b=0;b<s.length;b+=3){M.x=s[b+0],M.y=s[b+1],M.z=s[b+2];const x=m(M)/2/Math.PI+.5,w=p(M)/Math.PI+.5;o.push(x,1-w)}g(),f()}function f(){for(let M=0;M<o.length;M+=6){const b=o[M+0],x=o[M+2],w=o[M+4],C=Math.max(b,x,w),T=Math.min(b,x,w);C>.9&&T<.1&&(b<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),w<.2&&(o[M+4]+=1))}}function h(M){s.push(M.x,M.y,M.z)}function d(M,b){const x=M*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function g(){const M=new Z,b=new Z,x=new Z,w=new Z,C=new mt,T=new mt,P=new mt;for(let y=0,v=0;y<s.length;y+=9,v+=6){M.set(s[y+0],s[y+1],s[y+2]),b.set(s[y+3],s[y+4],s[y+5]),x.set(s[y+6],s[y+7],s[y+8]),C.set(o[v+0],o[v+1]),T.set(o[v+2],o[v+3]),P.set(o[v+4],o[v+5]),w.copy(M).add(b).add(x).divideScalar(3);const D=m(w);_(C,v+0,M,D),_(T,v+2,b,D),_(P,v+4,x,D)}}function _(M,b,x,w){w<0&&M.x===1&&(o[b]=M.x-1),x.x===0&&x.z===0&&(o[b]=w/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gm(e.vertices,e.indices,e.radius,e.details)}}class Ju extends gm{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ju(e.radius,e.detail)}}class wf extends Yi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*h-o;for(let b=0;b<c;b++){const x=b*f-s;g.push(x,-M,0),_.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const b=M+c*p,x=M+c*(p+1),w=M+1+c*(p+1),C=M+1+c*p;d.push(b,x,C),d.push(x,w,C)}this.setIndex(d),this.setAttribute("position",new Nn(g,3)),this.setAttribute("normal",new Nn(_,3)),this.setAttribute("uv",new Nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wf(e.width,e.height,e.widthSegments,e.heightSegments)}}class _m extends Yi{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const h=(t-e)/r,d=new Z,g=new mt;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const p=s+m/i*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}f+=h}for(let _=0;_<r;_++){const m=_*(i+1);for(let p=0;p<i;p++){const M=p+m,b=M,x=M+i+1,w=M+i+2,C=M+1;a.push(b,x,C),a.push(x,w,C)}}this.setIndex(a),this.setAttribute("position",new Nn(l,3)),this.setAttribute("normal",new Nn(c,3)),this.setAttribute("uv",new Nn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _m(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Qu extends Yi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new Z,h=new Z,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const M=[],b=p/i;let x=0;p===0&&o===0?x=.5/t:p===i&&l===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const C=w/t;f.x=-e*Math.cos(r+C*s)*Math.sin(o+b*a),f.y=e*Math.cos(o+b*a),f.z=e*Math.sin(r+C*s)*Math.sin(o+b*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(C+x,1-b),M.push(c++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){const b=u[p][M+1],x=u[p][M],w=u[p+1][M],C=u[p+1][M+1];(p!==0||o>0)&&d.push(b,x,C),(p!==i-1||l<Math.PI)&&d.push(x,w,C)}this.setIndex(d),this.setAttribute("position",new Nn(g,3)),this.setAttribute("normal",new Nn(_,3)),this.setAttribute("uv",new Nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class MC extends za{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ly,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bC extends MC{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class EC extends za{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TC extends za{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class vm extends Tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Rh=new $t,P_=new Z,D_=new Z;class $y{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mm,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;P_.setFromMatrixPosition(e.matrixWorld),t.position.copy(P_),D_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(D_),t.updateMatrixWorld(),Rh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const L_=new $t,el=new Z,Ph=new Z;class wC extends $y{constructor(){super(new xi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new mt(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),el.setFromMatrixPosition(e.matrixWorld),i.position.copy(el),Ph.copy(i.position),Ph.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ph),i.updateMatrixWorld(),r.makeTranslation(-el.x,-el.y,-el.z),L_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(L_)}}class Dh extends vm{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new wC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qy extends Vy{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class AC extends $y{constructor(){super(new qy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class CC extends vm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new AC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class RC extends vm{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class PC extends xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function I_(n,e,t,i){const r=DC(i);switch(t){case Ty:return n*e;case Ay:return n*e;case Cy:return n*e*2;case Ry:return n*e/r.components*r.byteLength;case cm:return n*e/r.components*r.byteLength;case Py:return n*e*2/r.components*r.byteLength;case um:return n*e*2/r.components*r.byteLength;case wy:return n*e*3/r.components*r.byteLength;case rr:return n*e*4/r.components*r.byteLength;case fm:return n*e*4/r.components*r.byteLength;case _u:case vu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xu:case yu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kd:case zd:return Math.max(n,16)*Math.max(e,8)/4;case Fd:case Bd:return Math.max(n,8)*Math.max(e,8)/2;case Hd:case Vd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case $d:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case qd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case jd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Jd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ep:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case tp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case np:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ip:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Su:case rp:case sp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Dy:case op:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ap:case lp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function DC(n){switch(n){case rs:case My:return{byteLength:1,components:1};case Jl:case by:case lc:return{byteLength:2,components:1};case am:case lm:return{byteLength:2,components:4};case wo:case om:case Yr:return{byteLength:4,components:1};case Ey:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yy(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function LC(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var IC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UC=`#ifdef USE_ALPHAHASH
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
#endif`,NC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BC=`#ifdef USE_AOMAP
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
#endif`,zC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HC=`#ifdef USE_BATCHING
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
#endif`,VC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$C=`#ifdef USE_IRIDESCENCE
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
#endif`,qC=`#ifdef USE_BUMPMAP
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
#endif`,YC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nR=`#define PI 3.141592653589793
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
} // validated`,iR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rR=`vec3 transformedNormal = objectNormal;
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
#endif`,sR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cR="gl_FragColor = linearToOutputTexel( gl_FragColor );",uR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fR=`#ifdef USE_ENVMAP
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
#endif`,hR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dR=`#ifdef USE_ENVMAP
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
#endif`,pR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mR=`#ifdef USE_ENVMAP
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
#endif`,gR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_R=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yR=`#ifdef USE_GRADIENTMAP
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
}`,SR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ER=`uniform bool receiveShadow;
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
#endif`,TR=`#ifdef USE_ENVMAP
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
#endif`,wR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PR=`PhysicalMaterial material;
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
#endif`,DR=`struct PhysicalMaterial {
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
}`,LR=`
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
#endif`,IR=`#if defined( RE_IndirectDiffuse )
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
#endif`,UR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,VR=`#if defined( USE_POINTS_UV )
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
#endif`,GR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$R=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YR=`#ifdef USE_MORPHTARGETS
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
#endif`,jR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ZR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,JR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,t2=`#ifdef USE_NORMALMAP
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
#endif`,n2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,l2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_2=`float getShadowMask() {
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
}`,v2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x2=`#ifdef USE_SKINNING
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
#endif`,y2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S2=`#ifdef USE_SKINNING
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
#endif`,M2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,w2=`#ifdef USE_TRANSMISSION
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
#endif`,A2=`#ifdef USE_TRANSMISSION
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
#endif`,C2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const L2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I2=`uniform sampler2D t2D;
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
}`,U2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,O2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k2=`#include <common>
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
}`,B2=`#if DEPTH_PACKING == 3200
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
}`,z2=`#define DISTANCE
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
}`,H2=`#define DISTANCE
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
}`,V2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W2=`uniform float scale;
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
}`,X2=`uniform vec3 diffuse;
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
}`,$2=`#include <common>
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
}`,q2=`uniform vec3 diffuse;
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
}`,Y2=`#define LAMBERT
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
}`,j2=`#define LAMBERT
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
}`,K2=`#define MATCAP
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
}`,Z2=`#define MATCAP
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
}`,J2=`#define NORMAL
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
}`,Q2=`#define NORMAL
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
}`,eP=`#define PHONG
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
}`,tP=`#define PHONG
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
}`,nP=`#define STANDARD
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
}`,iP=`#define STANDARD
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
}`,rP=`#define TOON
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
}`,sP=`#define TOON
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
}`,oP=`uniform float size;
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
}`,aP=`uniform vec3 diffuse;
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
}`,lP=`#include <common>
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
}`,cP=`uniform vec3 color;
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
}`,uP=`uniform float rotation;
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
}`,fP=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:IC,alphahash_pars_fragment:UC,alphamap_fragment:NC,alphamap_pars_fragment:OC,alphatest_fragment:FC,alphatest_pars_fragment:kC,aomap_fragment:BC,aomap_pars_fragment:zC,batching_pars_vertex:HC,batching_vertex:VC,begin_vertex:GC,beginnormal_vertex:WC,bsdfs:XC,iridescence_fragment:$C,bumpmap_pars_fragment:qC,clipping_planes_fragment:YC,clipping_planes_pars_fragment:jC,clipping_planes_pars_vertex:KC,clipping_planes_vertex:ZC,color_fragment:JC,color_pars_fragment:QC,color_pars_vertex:eR,color_vertex:tR,common:nR,cube_uv_reflection_fragment:iR,defaultnormal_vertex:rR,displacementmap_pars_vertex:sR,displacementmap_vertex:oR,emissivemap_fragment:aR,emissivemap_pars_fragment:lR,colorspace_fragment:cR,colorspace_pars_fragment:uR,envmap_fragment:fR,envmap_common_pars_fragment:hR,envmap_pars_fragment:dR,envmap_pars_vertex:pR,envmap_physical_pars_fragment:TR,envmap_vertex:mR,fog_vertex:gR,fog_pars_vertex:_R,fog_fragment:vR,fog_pars_fragment:xR,gradientmap_pars_fragment:yR,lightmap_pars_fragment:SR,lights_lambert_fragment:MR,lights_lambert_pars_fragment:bR,lights_pars_begin:ER,lights_toon_fragment:wR,lights_toon_pars_fragment:AR,lights_phong_fragment:CR,lights_phong_pars_fragment:RR,lights_physical_fragment:PR,lights_physical_pars_fragment:DR,lights_fragment_begin:LR,lights_fragment_maps:IR,lights_fragment_end:UR,logdepthbuf_fragment:NR,logdepthbuf_pars_fragment:OR,logdepthbuf_pars_vertex:FR,logdepthbuf_vertex:kR,map_fragment:BR,map_pars_fragment:zR,map_particle_fragment:HR,map_particle_pars_fragment:VR,metalnessmap_fragment:GR,metalnessmap_pars_fragment:WR,morphinstance_vertex:XR,morphcolor_vertex:$R,morphnormal_vertex:qR,morphtarget_pars_vertex:YR,morphtarget_vertex:jR,normal_fragment_begin:KR,normal_fragment_maps:ZR,normal_pars_fragment:JR,normal_pars_vertex:QR,normal_vertex:e2,normalmap_pars_fragment:t2,clearcoat_normal_fragment_begin:n2,clearcoat_normal_fragment_maps:i2,clearcoat_pars_fragment:r2,iridescence_pars_fragment:s2,opaque_fragment:o2,packing:a2,premultiplied_alpha_fragment:l2,project_vertex:c2,dithering_fragment:u2,dithering_pars_fragment:f2,roughnessmap_fragment:h2,roughnessmap_pars_fragment:d2,shadowmap_pars_fragment:p2,shadowmap_pars_vertex:m2,shadowmap_vertex:g2,shadowmask_pars_fragment:_2,skinbase_vertex:v2,skinning_pars_vertex:x2,skinning_vertex:y2,skinnormal_vertex:S2,specularmap_fragment:M2,specularmap_pars_fragment:b2,tonemapping_fragment:E2,tonemapping_pars_fragment:T2,transmission_fragment:w2,transmission_pars_fragment:A2,uv_pars_fragment:C2,uv_pars_vertex:R2,uv_vertex:P2,worldpos_vertex:D2,background_vert:L2,background_frag:I2,backgroundCube_vert:U2,backgroundCube_frag:N2,cube_vert:O2,cube_frag:F2,depth_vert:k2,depth_frag:B2,distanceRGBA_vert:z2,distanceRGBA_frag:H2,equirect_vert:V2,equirect_frag:G2,linedashed_vert:W2,linedashed_frag:X2,meshbasic_vert:$2,meshbasic_frag:q2,meshlambert_vert:Y2,meshlambert_frag:j2,meshmatcap_vert:K2,meshmatcap_frag:Z2,meshnormal_vert:J2,meshnormal_frag:Q2,meshphong_vert:eP,meshphong_frag:tP,meshphysical_vert:nP,meshphysical_frag:iP,meshtoon_vert:rP,meshtoon_frag:sP,points_vert:oP,points_frag:aP,shadow_vert:lP,shadow_frag:cP,sprite_vert:uP,sprite_frag:fP},be={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},_r={basic:{uniforms:Vn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Vn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new pt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Vn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Vn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Vn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new pt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Vn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Vn([be.points,be.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Vn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Vn([be.common,be.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Vn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Vn([be.sprite,be.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Vn([be.common,be.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Vn([be.lights,be.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};_r.physical={uniforms:Vn([_r.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const eu={r:0,b:0,g:0},Ys=new Rr,hP=new $t;function dP(n,e,t,i,r,s,o){const a=new pt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function _(b){let x=!1;const w=g(b);w===null?p(a,l):w&&w.isColor&&(p(w,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,x){const w=g(x);w&&(w.isCubeTexture||w.mapping===Ef)?(u===void 0&&(u=new ii(new fc(1,1,1),new Ns({name:"BackgroundCubeMaterial",uniforms:Ia(_r.backgroundCube.uniforms),vertexShader:_r.backgroundCube.vertexShader,fragmentShader:_r.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ys.copy(x.backgroundRotation),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hP.makeRotationFromEuler(Ys)),u.material.toneMapped=St.getTransfer(w.colorSpace)!==Dt,(f!==w||h!==w.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,h=w.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new ii(new wf(2,2),new Ns({name:"BackgroundMaterial",uniforms:Ia(_r.background.uniforms),vertexShader:_r.background.vertexShader,fragmentShader:_r.background.fragmentShader,side:Us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=St.getTransfer(w.colorSpace)!==Dt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=w,h=w.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,x){b.getRGB(eu,Hy(n)),i.buffers.color.setClear(eu.r,eu.g,eu.b,x,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:_,addToRenderList:m,dispose:M}}function pP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(v,D,I,k,F){let q=!1;const O=f(k,I,D);s!==O&&(s=O,c(s.object)),q=d(v,k,I,F),q&&g(v,k,I,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(v,D,I,k),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function f(v,D,I){const k=I.wireframe===!0;let F=i[v.id];F===void 0&&(F={},i[v.id]=F);let q=F[D.id];q===void 0&&(q={},F[D.id]=q);let O=q[k];return O===void 0&&(O=h(l()),q[k]=O),O}function h(v){const D=[],I=[],k=[];for(let F=0;F<t;F++)D[F]=0,I[F]=0,k[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:k,object:v,attributes:{},index:null}}function d(v,D,I,k){const F=s.attributes,q=D.attributes;let O=0;const V=I.getAttributes();for(const H in V)if(V[H].location>=0){const N=F[H];let ge=q[H];if(ge===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ge=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ge=v.instanceColor)),N===void 0||N.attribute!==ge||ge&&N.data!==ge.data)return!0;O++}return s.attributesNum!==O||s.index!==k}function g(v,D,I,k){const F={},q=D.attributes;let O=0;const V=I.getAttributes();for(const H in V)if(V[H].location>=0){let N=q[H];N===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(N=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(N=v.instanceColor));const ge={};ge.attribute=N,N&&N.data&&(ge.data=N.data),F[H]=ge,O++}s.attributes=F,s.attributesNum=O,s.index=k}function _(){const v=s.newAttributes;for(let D=0,I=v.length;D<I;D++)v[D]=0}function m(v){p(v,0)}function p(v,D){const I=s.newAttributes,k=s.enabledAttributes,F=s.attributeDivisors;I[v]=1,k[v]===0&&(n.enableVertexAttribArray(v),k[v]=1),F[v]!==D&&(n.vertexAttribDivisor(v,D),F[v]=D)}function M(){const v=s.newAttributes,D=s.enabledAttributes;for(let I=0,k=D.length;I<k;I++)D[I]!==v[I]&&(n.disableVertexAttribArray(I),D[I]=0)}function b(v,D,I,k,F,q,O){O===!0?n.vertexAttribIPointer(v,D,I,F,q):n.vertexAttribPointer(v,D,I,k,F,q)}function x(v,D,I,k){_();const F=k.attributes,q=I.getAttributes(),O=D.defaultAttributeValues;for(const V in q){const H=q[V];if(H.location>=0){let se=F[V];if(se===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),se!==void 0){const N=se.normalized,ge=se.itemSize,Ee=e.get(se);if(Ee===void 0)continue;const je=Ee.buffer,re=Ee.type,de=Ee.bytesPerElement,_e=re===n.INT||re===n.UNSIGNED_INT||se.gpuType===om;if(se.isInterleavedBufferAttribute){const pe=se.data,Re=pe.stride,We=se.offset;if(pe.isInstancedInterleavedBuffer){for(let Ue=0;Ue<H.locationSize;Ue++)p(H.location+Ue,pe.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ue=0;Ue<H.locationSize;Ue++)m(H.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,je);for(let Ue=0;Ue<H.locationSize;Ue++)b(H.location+Ue,ge/H.locationSize,re,N,Re*de,(We+ge/H.locationSize*Ue)*de,_e)}else{if(se.isInstancedBufferAttribute){for(let pe=0;pe<H.locationSize;pe++)p(H.location+pe,se.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let pe=0;pe<H.locationSize;pe++)m(H.location+pe);n.bindBuffer(n.ARRAY_BUFFER,je);for(let pe=0;pe<H.locationSize;pe++)b(H.location+pe,ge/H.locationSize,re,N,ge*de,ge/H.locationSize*pe*de,_e)}}else if(O!==void 0){const N=O[V];if(N!==void 0)switch(N.length){case 2:n.vertexAttrib2fv(H.location,N);break;case 3:n.vertexAttrib3fv(H.location,N);break;case 4:n.vertexAttrib4fv(H.location,N);break;default:n.vertexAttrib1fv(H.location,N)}}}}M()}function w(){P();for(const v in i){const D=i[v];for(const I in D){const k=D[I];for(const F in k)u(k[F].object),delete k[F];delete D[I]}delete i[v]}}function C(v){if(i[v.id]===void 0)return;const D=i[v.id];for(const I in D){const k=D[I];for(const F in k)u(k[F].object),delete k[F];delete D[I]}delete i[v.id]}function T(v){for(const D in i){const I=i[D];if(I[v.id]===void 0)continue;const k=I[v.id];for(const F in k)u(k[F].object),delete k[F];delete I[v.id]}}function P(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function mP(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gP(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==rr&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===lc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==rs&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Yr&&!P)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:w,maxSamples:C}}function _P(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new eo,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:i,b=M*4;let x=p.clippingState||null;l.value=x,x=u(g,h,b,d);for(let w=0;w!==b;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=d;b!==_;++b,x+=4)o.copy(f[b]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function vP(n){let e=new WeakMap;function t(o,a){return a===Id?o.mapping=Pa:a===Ud&&(o.mapping=Da),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Id||a===Ud)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new gC(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const aa=4,U_=[.125,.215,.35,.446,.526,.582],ro=20,Lh=new qy,N_=new pt;let Ih=null,Uh=0,Nh=0,Oh=!1;const to=(1+Math.sqrt(5))/2,Zo=1/to,O_=[new Z(-to,Zo,0),new Z(to,Zo,0),new Z(-Zo,0,to),new Z(Zo,0,to),new Z(0,to,-Zo),new Z(0,to,Zo),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],xP=new Z;class F_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=xP}=s;Ih=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=B_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ih,Uh,Nh),this._renderer.xr.enabled=Oh,e.scissorTest=!1,tu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pa||e.mapping===Da?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ih=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:br,minFilter:br,generateMipmaps:!1,type:lc,format:rr,colorSpace:La,depthBuffer:!1},r=k_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=k_(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yP(s)),this._blurMaterial=SP(s,e,t)}return r}_compileMaterial(e){const t=new ii(this._lodPlanes[0],e);this._renderer.compile(t,Lh)}_sceneToCubeUV(e,t,i,r,s){const l=new xi(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(N_),f.toneMapping=Cs,f.autoClear=!1;const g=new oa({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1}),_=new ii(new fc,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(N_),m=!0);for(let M=0;M<6;M++){const b=M%3;b===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):b===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const x=this._cubeSize;tu(r,b*x,M>2?x:0,x,x),f.setRenderTarget(r),m&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Pa||e.mapping===Da;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=B_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ii(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;tu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Lh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=O_[(r-s-1)%O_.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ii(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ro-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):ro;m>ro&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ro}`);const p=[];let M=0;for(let T=0;T<ro;++T){const P=T/_,y=Math.exp(-P*P/2);p.push(y),T===0?M+=y:T<m&&(M+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;const x=this._sizeLods[r],w=3*x*(r>b-aa?r-b+aa:0),C=4*(this._cubeSize-x);tu(t,w,C,3*x,2*x),l.setRenderTarget(t),l.render(f,Lh)}}function yP(n){const e=[],t=[],i=[];let r=n;const s=n-aa+1+U_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-aa?l=U_[o-n+aa-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),b=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let C=0;C<d;C++){const T=C%3*2/3-1,P=C>2?0:-1,y=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];M.set(y,_*g*C),b.set(h,m*g*C);const v=[C,C,C,C,C,C];x.set(v,p*g*C)}const w=new Yi;w.setAttribute("position",new lr(M,_)),w.setAttribute("uv",new lr(b,m)),w.setAttribute("faceIndex",new lr(x,p)),e.push(w),r>aa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function k_(n,e,t){const i=new Ao(n,e,t);return i.texture.mapping=Ef,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tu(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function SP(n,e,t){const i=new Float32Array(ro),r=new Z(0,1,0);return new Ns({name:"SphericalGaussianBlur",defines:{n:ro,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xm(),fragmentShader:`

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
		`,blending:As,depthTest:!1,depthWrite:!1})}function B_(){return new Ns({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xm(),fragmentShader:`

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
		`,blending:As,depthTest:!1,depthWrite:!1})}function z_(){return new Ns({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:As,depthTest:!1,depthWrite:!1})}function xm(){return`

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
	`}function MP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Id||l===Ud,u=l===Pa||l===Da;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new F_(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new F_(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function bP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Mu("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function EP(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let b=0,x=M.length;b<x;b+=3){const w=M[b+0],C=M[b+1],T=M[b+2];h.push(w,C,C,T,T,w)}}else if(g!==void 0){const M=g.array;_=g.version;for(let b=0,x=M.length/3-1;b<x;b+=3){const w=b+0,C=b+1,T=b+2;h.push(w,C,C,T,T,w)}}else return;const m=new(Uy(h)?zy:By)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function TP(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*o,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function wP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function AP(n,e,t){const i=new WeakMap,r=new It;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let v=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",v)};var d=v;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let w=a.attributes.position.count*x,C=1;w>e.maxTextureSize&&(C=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const T=new Float32Array(w*C*4*f),P=new Ny(T,w,C,f);P.type=Yr,P.needsUpdate=!0;const y=x*4;for(let D=0;D<f;D++){const I=p[D],k=M[D],F=b[D],q=w*C*4*D;for(let O=0;O<I.count;O++){const V=O*y;g===!0&&(r.fromBufferAttribute(I,O),T[q+V+0]=r.x,T[q+V+1]=r.y,T[q+V+2]=r.z,T[q+V+3]=0),_===!0&&(r.fromBufferAttribute(k,O),T[q+V+4]=r.x,T[q+V+5]=r.y,T[q+V+6]=r.z,T[q+V+7]=0),m===!0&&(r.fromBufferAttribute(F,O),T[q+V+8]=r.x,T[q+V+9]=r.y,T[q+V+10]=r.z,T[q+V+11]=F.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new mt(w,C)},i.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function CP(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const jy=new ci,H_=new Xy(1,1),Ky=new Ny,Zy=new QA,Jy=new Gy,V_=[],G_=[],W_=new Float32Array(16),X_=new Float32Array(9),$_=new Float32Array(4);function Ha(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=V_[r];if(s===void 0&&(s=new Float32Array(r),V_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function gn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _n(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Af(n,e){let t=G_[e];t===void 0&&(t=new Int32Array(e),G_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function RP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function PP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;n.uniform2fv(this.addr,e),_n(t,e)}}function DP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;n.uniform3fv(this.addr,e),_n(t,e)}}function LP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;n.uniform4fv(this.addr,e),_n(t,e)}}function IP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,i))return;$_.set(i),n.uniformMatrix2fv(this.addr,!1,$_),_n(t,i)}}function UP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,i))return;X_.set(i),n.uniformMatrix3fv(this.addr,!1,X_),_n(t,i)}}function NP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,i))return;W_.set(i),n.uniformMatrix4fv(this.addr,!1,W_),_n(t,i)}}function OP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function FP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;n.uniform2iv(this.addr,e),_n(t,e)}}function kP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;n.uniform3iv(this.addr,e),_n(t,e)}}function BP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;n.uniform4iv(this.addr,e),_n(t,e)}}function zP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function HP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;n.uniform2uiv(this.addr,e),_n(t,e)}}function VP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;n.uniform3uiv(this.addr,e),_n(t,e)}}function GP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;n.uniform4uiv(this.addr,e),_n(t,e)}}function WP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(H_.compareFunction=Iy,s=H_):s=jy,t.setTexture2D(e||s,r)}function XP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Zy,r)}function $P(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Jy,r)}function qP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ky,r)}function YP(n){switch(n){case 5126:return RP;case 35664:return PP;case 35665:return DP;case 35666:return LP;case 35674:return IP;case 35675:return UP;case 35676:return NP;case 5124:case 35670:return OP;case 35667:case 35671:return FP;case 35668:case 35672:return kP;case 35669:case 35673:return BP;case 5125:return zP;case 36294:return HP;case 36295:return VP;case 36296:return GP;case 35678:case 36198:case 36298:case 36306:case 35682:return WP;case 35679:case 36299:case 36307:return XP;case 35680:case 36300:case 36308:case 36293:return $P;case 36289:case 36303:case 36311:case 36292:return qP}}function jP(n,e){n.uniform1fv(this.addr,e)}function KP(n,e){const t=Ha(e,this.size,2);n.uniform2fv(this.addr,t)}function ZP(n,e){const t=Ha(e,this.size,3);n.uniform3fv(this.addr,t)}function JP(n,e){const t=Ha(e,this.size,4);n.uniform4fv(this.addr,t)}function QP(n,e){const t=Ha(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function eD(n,e){const t=Ha(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function tD(n,e){const t=Ha(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function nD(n,e){n.uniform1iv(this.addr,e)}function iD(n,e){n.uniform2iv(this.addr,e)}function rD(n,e){n.uniform3iv(this.addr,e)}function sD(n,e){n.uniform4iv(this.addr,e)}function oD(n,e){n.uniform1uiv(this.addr,e)}function aD(n,e){n.uniform2uiv(this.addr,e)}function lD(n,e){n.uniform3uiv(this.addr,e)}function cD(n,e){n.uniform4uiv(this.addr,e)}function uD(n,e,t){const i=this.cache,r=e.length,s=Af(t,r);gn(i,s)||(n.uniform1iv(this.addr,s),_n(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||jy,s[o])}function fD(n,e,t){const i=this.cache,r=e.length,s=Af(t,r);gn(i,s)||(n.uniform1iv(this.addr,s),_n(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Zy,s[o])}function hD(n,e,t){const i=this.cache,r=e.length,s=Af(t,r);gn(i,s)||(n.uniform1iv(this.addr,s),_n(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Jy,s[o])}function dD(n,e,t){const i=this.cache,r=e.length,s=Af(t,r);gn(i,s)||(n.uniform1iv(this.addr,s),_n(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ky,s[o])}function pD(n){switch(n){case 5126:return jP;case 35664:return KP;case 35665:return ZP;case 35666:return JP;case 35674:return QP;case 35675:return eD;case 35676:return tD;case 5124:case 35670:return nD;case 35667:case 35671:return iD;case 35668:case 35672:return rD;case 35669:case 35673:return sD;case 5125:return oD;case 36294:return aD;case 36295:return lD;case 36296:return cD;case 35678:case 36198:case 36298:case 36306:case 35682:return uD;case 35679:case 36299:case 36307:return fD;case 35680:case 36300:case 36308:case 36293:return hD;case 36289:case 36303:case 36311:case 36292:return dD}}class mD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=YP(t.type)}}class gD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pD(t.type)}}class _D{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Fh=/(\w+)(\])?(\[|\.)?/g;function q_(n,e){n.seq.push(e),n.map[e.id]=e}function vD(n,e,t){const i=n.name,r=i.length;for(Fh.lastIndex=0;;){const s=Fh.exec(i),o=Fh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){q_(t,c===void 0?new mD(a,n,e):new gD(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new _D(a),q_(t,f)),t=f}}}class bu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);vD(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Y_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const xD=37297;let yD=0;function SD(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const j_=new it;function MD(n){St._getMatrix(j_,St.workingColorSpace,n);const e=`mat3( ${j_.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(n)){case ju:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function K_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+SD(n.getShaderSource(e),o)}else return r}function bD(n,e){const t=MD(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ED(n,e){let t;switch(e){case fA:t="Linear";break;case hA:t="Reinhard";break;case dA:t="Cineon";break;case yy:t="ACESFilmic";break;case mA:t="AgX";break;case gA:t="Neutral";break;case pA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nu=new Z;function TD(){St.getLuminanceCoefficients(nu);const n=nu.x.toFixed(4),e=nu.y.toFixed(4),t=nu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function AD(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function CD(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ul(n){return n!==""}function Z_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function J_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RD=/^[ \t]*#include +<([\w\d./]+)>/gm;function up(n){return n.replace(RD,DD)}const PD=new Map;function DD(n,e){let t=ot[e];if(t===void 0){const i=PD.get(e);if(i!==void 0)t=ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return up(t)}const LD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Q_(n){return n.replace(LD,ID)}function ID(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function e0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function UD(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vy?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ww?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fr&&(e="SHADOWMAP_TYPE_VSM"),e}function ND(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Pa:case Da:e="ENVMAP_TYPE_CUBE";break;case Ef:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OD(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Da:e="ENVMAP_MODE_REFRACTION";break}return e}function FD(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xy:e="ENVMAP_BLENDING_MULTIPLY";break;case cA:e="ENVMAP_BLENDING_MIX";break;case uA:e="ENVMAP_BLENDING_ADD";break}return e}function kD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function BD(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=UD(t),c=ND(t),u=OD(t),f=FD(t),h=kD(t),d=wD(t),g=AD(s),_=r.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ul).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ul).join(`
`),p.length>0&&(p+=`
`)):(m=[e0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),p=[e0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cs?"#define TONE_MAPPING":"",t.toneMapping!==Cs?ot.tonemapping_pars_fragment:"",t.toneMapping!==Cs?ED("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,bD("linearToOutputTexel",t.outputColorSpace),TD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ul).join(`
`)),o=up(o),o=Z_(o,t),o=J_(o,t),a=up(a),a=Z_(a,t),a=J_(a,t),o=Q_(o),a=Q_(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===c_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===c_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=M+m+o,x=M+p+a,w=Y_(r,r.VERTEX_SHADER,b),C=Y_(r,r.FRAGMENT_SHADER,x);r.attachShader(_,w),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(D){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(w).trim(),F=r.getShaderInfoLog(C).trim();let q=!0,O=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,w,C);else{const V=K_(r,w,"vertex"),H=K_(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+V+`
`+H)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(k===""||F==="")&&(O=!1);O&&(D.diagnostics={runnable:q,programLog:I,vertexShader:{log:k,prefix:m},fragmentShader:{log:F,prefix:p}})}r.deleteShader(w),r.deleteShader(C),P=new bu(r,_),y=CD(r,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,xD)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yD++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=C,this}let zD=0;class HD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new VD(e),t.set(e,i)),i}}class VD{constructor(e){this.id=zD++,this.code=e,this.usedTimes=0}}function GD(n,e,t,i,r,s,o){const a=new Fy,l=new HD,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,v,D,I,k){const F=I.fog,q=k.geometry,O=y.isMeshStandardMaterial?I.environment:null,V=(y.isMeshStandardMaterial?t:e).get(y.envMap||O),H=V&&V.mapping===Ef?V.image.height:null,se=g[y.type];y.precision!==null&&(d=r.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const N=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ge=N!==void 0?N.length:0;let Ee=0;q.morphAttributes.position!==void 0&&(Ee=1),q.morphAttributes.normal!==void 0&&(Ee=2),q.morphAttributes.color!==void 0&&(Ee=3);let je,re,de,_e;if(se){const we=_r[se];je=we.vertexShader,re=we.fragmentShader}else je=y.vertexShader,re=y.fragmentShader,l.update(y),de=l.getVertexShaderID(y),_e=l.getFragmentShaderID(y);const pe=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),We=k.isInstancedMesh===!0,Ue=k.isBatchedMesh===!0,st=!!y.map,et=!!y.matcap,L=!!V,E=!!y.aoMap,Q=!!y.lightMap,te=!!y.bumpMap,U=!!y.normalMap,j=!!y.displacementMap,ue=!!y.emissiveMap,ne=!!y.metalnessMap,A=!!y.roughnessMap,S=y.anisotropy>0,z=y.clearcoat>0,W=y.dispersion>0,Y=y.iridescence>0,K=y.sheen>0,ae=y.transmission>0,ce=S&&!!y.anisotropyMap,fe=z&&!!y.clearcoatMap,Ie=z&&!!y.clearcoatNormalMap,le=z&&!!y.clearcoatRoughnessMap,me=Y&&!!y.iridescenceMap,De=Y&&!!y.iridescenceThicknessMap,Ne=K&&!!y.sheenColorMap,Te=K&&!!y.sheenRoughnessMap,Ve=!!y.specularMap,Fe=!!y.specularColorMap,ht=!!y.specularIntensityMap,B=ae&&!!y.transmissionMap,xe=ae&&!!y.thicknessMap,ie=!!y.gradientMap,oe=!!y.alphaMap,ve=y.alphaTest>0,ye=!!y.alphaHash,Ye=!!y.extensions;let xt=Cs;y.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(xt=n.toneMapping);const Zt={shaderID:se,shaderType:y.type,shaderName:y.name,vertexShader:je,fragmentShader:re,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ue,batchingColor:Ue&&k._colorsTexture!==null,instancing:We,instancingColor:We&&k.instanceColor!==null,instancingMorph:We&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:La,alphaToCoverage:!!y.alphaToCoverage,map:st,matcap:et,envMap:L,envMapMode:L&&V.mapping,envMapCubeUVHeight:H,aoMap:E,lightMap:Q,bumpMap:te,normalMap:U,displacementMap:h&&j,emissiveMap:ue,normalMapObjectSpace:U&&y.normalMapType===yA,normalMapTangentSpace:U&&y.normalMapType===Ly,metalnessMap:ne,roughnessMap:A,anisotropy:S,anisotropyMap:ce,clearcoat:z,clearcoatMap:fe,clearcoatNormalMap:Ie,clearcoatRoughnessMap:le,dispersion:W,iridescence:Y,iridescenceMap:me,iridescenceThicknessMap:De,sheen:K,sheenColorMap:Ne,sheenRoughnessMap:Te,specularMap:Ve,specularColorMap:Fe,specularIntensityMap:ht,transmission:ae,transmissionMap:B,thicknessMap:xe,gradientMap:ie,opaque:y.transparent===!1&&y.blending===ya&&y.alphaToCoverage===!1,alphaMap:oe,alphaTest:ve,alphaHash:ye,combine:y.combine,mapUv:st&&_(y.map.channel),aoMapUv:E&&_(y.aoMap.channel),lightMapUv:Q&&_(y.lightMap.channel),bumpMapUv:te&&_(y.bumpMap.channel),normalMapUv:U&&_(y.normalMap.channel),displacementMapUv:j&&_(y.displacementMap.channel),emissiveMapUv:ue&&_(y.emissiveMap.channel),metalnessMapUv:ne&&_(y.metalnessMap.channel),roughnessMapUv:A&&_(y.roughnessMap.channel),anisotropyMapUv:ce&&_(y.anisotropyMap.channel),clearcoatMapUv:fe&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:De&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(y.sheenRoughnessMap.channel),specularMapUv:Ve&&_(y.specularMap.channel),specularColorMapUv:Fe&&_(y.specularColorMap.channel),specularIntensityMapUv:ht&&_(y.specularIntensityMap.channel),transmissionMapUv:B&&_(y.transmissionMap.channel),thicknessMapUv:xe&&_(y.thicknessMap.channel),alphaMapUv:oe&&_(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(U||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(st||oe),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Re,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ee,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:xt,decodeVideoTexture:st&&y.map.isVideoTexture===!0&&St.getTransfer(y.map.colorSpace)===Dt,decodeVideoTextureEmissive:ue&&y.emissiveMap.isVideoTexture===!0&&St.getTransfer(y.emissiveMap.colorSpace)===Dt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===tr,flipSided:y.side===li,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ye&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&y.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function p(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)v.push(D),v.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(M(v,y),b(v,y),v.push(n.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function M(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function b(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const v=g[y.type];let D;if(v){const I=_r[v];D=hC.clone(I.uniforms)}else D=y.uniforms;return D}function w(y,v){let D;for(let I=0,k=u.length;I<k;I++){const F=u[I];if(F.cacheKey===v){D=F,++D.usedTimes;break}}return D===void 0&&(D=new BD(n,v,y,s),u.push(D)),D}function C(y){if(--y.usedTimes===0){const v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function T(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:C,releaseShaderCache:T,programs:u,dispose:P}}function WD(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function XD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function t0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function n0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||XD),i.length>1&&i.sort(h||t0),r.length>1&&r.sort(h||t0)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function $D(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new n0,n.set(i,[o])):r>=s.length?(o=new n0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function qD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new pt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[e.id]=t,t}}}function YD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let jD=0;function KD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ZD(n){const e=new qD,t=YD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);const r=new Z,s=new $t,o=new $t;function a(c){let u=0,f=0,h=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,b=0,x=0,w=0,C=0,T=0;c.sort(KD);for(let y=0,v=c.length;y<v;y++){const D=c[y],I=D.color,k=D.intensity,F=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=I.r*k,f+=I.g*k,h+=I.b*k;else if(D.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(D.sh.coefficients[O],k);T++}else if(D.isDirectionalLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const V=D.shadow,H=t.get(D);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=q,i.directionalShadowMatrix[d]=D.shadow.matrix,M++}i.directional[d]=O,d++}else if(D.isSpotLight){const O=e.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(I).multiplyScalar(k),O.distance=F,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,i.spot[_]=O;const V=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,V.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[_]=V.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=q,x++}_++}else if(D.isRectAreaLight){const O=e.get(D);O.color.copy(I).multiplyScalar(k),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=O,m++}else if(D.isPointLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){const V=D.shadow,H=t.get(D);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,H.shadowCameraNear=V.camera.near,H.shadowCameraFar=V.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=D.shadow.matrix,b++}i.point[g]=O,g++}else if(D.isHemisphereLight){const O=e.get(D);O.skyColor.copy(D.color).multiplyScalar(k),O.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[p]=O,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==b||P.numSpotShadows!==x||P.numSpotMaps!==w||P.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=x+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=b,P.numSpotShadows=x,P.numSpotMaps=w,P.numLightProbes=T,i.version=jD++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const b=c[p];if(b.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(b.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function i0(n){const e=new ZD(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function JD(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new i0(n),e.set(r,[a])):s>=o.length?(a=new i0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const QD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eL=`uniform sampler2D shadow_pass;
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
}`;function tL(n,e,t){let i=new mm;const r=new mt,s=new mt,o=new It,a=new EC({depthPacking:xA}),l=new TC,c={},u=t.maxTextureSize,f={[Us]:li,[li]:Us,[tr]:tr},h=new Ns({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:QD,fragmentShader:eL}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Yi;g.setAttribute("position",new lr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ii(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vy;let p=this.type;this.render=function(C,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=n.getRenderTarget(),v=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),I=n.state;I.setBlending(As),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const k=p!==Fr&&this.type===Fr,F=p===Fr&&this.type!==Fr;for(let q=0,O=C.length;q<O;q++){const V=C[q],H=V.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const se=H.getFrameExtents();if(r.multiply(se),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,H.mapSize.y=s.y)),H.map===null||k===!0||F===!0){const ge=this.type!==Fr?{minFilter:ar,magFilter:ar}:{};H.map!==null&&H.map.dispose(),H.map=new Ao(r.x,r.y,ge),H.map.texture.name=V.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const N=H.getViewportCount();for(let ge=0;ge<N;ge++){const Ee=H.getViewport(ge);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),I.viewport(o),H.updateMatrices(V,ge),i=H.getFrustum(),x(T,P,H.camera,V,this.type)}H.isPointLightShadow!==!0&&this.type===Fr&&M(H,P),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,v,D)};function M(C,T){const P=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ao(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(T,null,P,h,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(T,null,P,d,_,null)}function b(C,T,P,y){let v=null;const D=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)v=D;else if(v=P.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=v.uuid,k=T.uuid;let F=c[I];F===void 0&&(F={},c[I]=F);let q=F[k];q===void 0&&(q=v.clone(),F[k]=q,T.addEventListener("dispose",w)),v=q}if(v.visible=T.visible,v.wireframe=T.wireframe,y===Fr?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:f[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const I=n.properties.get(v);I.light=P}return v}function x(C,T,P,y,v){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===Fr)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const k=e.update(C),F=C.material;if(Array.isArray(F)){const q=k.groups;for(let O=0,V=q.length;O<V;O++){const H=q[O],se=F[H.materialIndex];if(se&&se.visible){const N=b(C,se,y,v);C.onBeforeShadow(n,C,T,P,k,N,H),n.renderBufferDirect(P,null,k,N,C,H),C.onAfterShadow(n,C,T,P,k,N,H)}}}else if(F.visible){const q=b(C,F,y,v);C.onBeforeShadow(n,C,T,P,k,q,null),n.renderBufferDirect(P,null,k,q,C,null),C.onAfterShadow(n,C,T,P,k,q,null)}}const I=C.children;for(let k=0,F=I.length;k<F;k++)x(I[k],T,P,y,v)}function w(C){C.target.removeEventListener("dispose",w);for(const P in c){const y=c[P],v=C.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const nL={[wd]:Ad,[Cd]:Dd,[Rd]:Ld,[Ra]:Pd,[Ad]:wd,[Dd]:Cd,[Ld]:Rd,[Pd]:Ra};function iL(n,e){function t(){let B=!1;const xe=new It;let ie=null;const oe=new It(0,0,0,0);return{setMask:function(ve){ie!==ve&&!B&&(n.colorMask(ve,ve,ve,ve),ie=ve)},setLocked:function(ve){B=ve},setClear:function(ve,ye,Ye,xt,Zt){Zt===!0&&(ve*=xt,ye*=xt,Ye*=xt),xe.set(ve,ye,Ye,xt),oe.equals(xe)===!1&&(n.clearColor(ve,ye,Ye,xt),oe.copy(xe))},reset:function(){B=!1,ie=null,oe.set(-1,0,0,0)}}}function i(){let B=!1,xe=!1,ie=null,oe=null,ve=null;return{setReversed:function(ye){if(xe!==ye){const Ye=e.get("EXT_clip_control");ye?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),xe=ye;const xt=ve;ve=null,this.setClear(xt)}},getReversed:function(){return xe},setTest:function(ye){ye?pe(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(ye){ie!==ye&&!B&&(n.depthMask(ye),ie=ye)},setFunc:function(ye){if(xe&&(ye=nL[ye]),oe!==ye){switch(ye){case wd:n.depthFunc(n.NEVER);break;case Ad:n.depthFunc(n.ALWAYS);break;case Cd:n.depthFunc(n.LESS);break;case Ra:n.depthFunc(n.LEQUAL);break;case Rd:n.depthFunc(n.EQUAL);break;case Pd:n.depthFunc(n.GEQUAL);break;case Dd:n.depthFunc(n.GREATER);break;case Ld:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=ye}},setLocked:function(ye){B=ye},setClear:function(ye){ve!==ye&&(xe&&(ye=1-ye),n.clearDepth(ye),ve=ye)},reset:function(){B=!1,ie=null,oe=null,ve=null,xe=!1}}}function r(){let B=!1,xe=null,ie=null,oe=null,ve=null,ye=null,Ye=null,xt=null,Zt=null;return{setTest:function(we){B||(we?pe(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(we){xe!==we&&!B&&(n.stencilMask(we),xe=we)},setFunc:function(we,Oe,nt){(ie!==we||oe!==Oe||ve!==nt)&&(n.stencilFunc(we,Oe,nt),ie=we,oe=Oe,ve=nt)},setOp:function(we,Oe,nt){(ye!==we||Ye!==Oe||xt!==nt)&&(n.stencilOp(we,Oe,nt),ye=we,Ye=Oe,xt=nt)},setLocked:function(we){B=we},setClear:function(we){Zt!==we&&(n.clearStencil(we),Zt=we)},reset:function(){B=!1,xe=null,ie=null,oe=null,ve=null,ye=null,Ye=null,xt=null,Zt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,b=null,x=null,w=null,C=null,T=new pt(0,0,0),P=0,y=!1,v=null,D=null,I=null,k=null,F=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,V=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=V>=1):H.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=V>=2);let se=null,N={};const ge=n.getParameter(n.SCISSOR_BOX),Ee=n.getParameter(n.VIEWPORT),je=new It().fromArray(ge),re=new It().fromArray(Ee);function de(B,xe,ie,oe){const ve=new Uint8Array(4),ye=n.createTexture();n.bindTexture(B,ye),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<ie;Ye++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(xe+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return ye}const _e={};_e[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(n.DEPTH_TEST),o.setFunc(Ra),te(!1),U(r_),pe(n.CULL_FACE),E(As);function pe(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Re(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function We(B,xe){return f[B]!==xe?(n.bindFramebuffer(B,xe),f[B]=xe,B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=xe),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function Ue(B,xe){let ie=d,oe=!1;if(B){ie=h.get(xe),ie===void 0&&(ie=[],h.set(xe,ie));const ve=B.textures;if(ie.length!==ve.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,Ye=ve.length;ye<Ye;ye++)ie[ye]=n.COLOR_ATTACHMENT0+ye;ie.length=ve.length,oe=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,oe=!0);oe&&n.drawBuffers(ie)}function st(B){return g!==B?(n.useProgram(B),g=B,!0):!1}const et={[io]:n.FUNC_ADD,[$w]:n.FUNC_SUBTRACT,[qw]:n.FUNC_REVERSE_SUBTRACT};et[Yw]=n.MIN,et[jw]=n.MAX;const L={[Kw]:n.ZERO,[Zw]:n.ONE,[Jw]:n.SRC_COLOR,[Ed]:n.SRC_ALPHA,[rA]:n.SRC_ALPHA_SATURATE,[nA]:n.DST_COLOR,[eA]:n.DST_ALPHA,[Qw]:n.ONE_MINUS_SRC_COLOR,[Td]:n.ONE_MINUS_SRC_ALPHA,[iA]:n.ONE_MINUS_DST_COLOR,[tA]:n.ONE_MINUS_DST_ALPHA,[sA]:n.CONSTANT_COLOR,[oA]:n.ONE_MINUS_CONSTANT_COLOR,[aA]:n.CONSTANT_ALPHA,[lA]:n.ONE_MINUS_CONSTANT_ALPHA};function E(B,xe,ie,oe,ve,ye,Ye,xt,Zt,we){if(B===As){_===!0&&(Re(n.BLEND),_=!1);return}if(_===!1&&(pe(n.BLEND),_=!0),B!==Xw){if(B!==m||we!==y){if((p!==io||x!==io)&&(n.blendEquation(n.FUNC_ADD),p=io,x=io),we)switch(B){case ya:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yu:n.blendFunc(n.ONE,n.ONE);break;case s_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case o_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ya:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case s_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case o_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}M=null,b=null,w=null,C=null,T.set(0,0,0),P=0,m=B,y=we}return}ve=ve||xe,ye=ye||ie,Ye=Ye||oe,(xe!==p||ve!==x)&&(n.blendEquationSeparate(et[xe],et[ve]),p=xe,x=ve),(ie!==M||oe!==b||ye!==w||Ye!==C)&&(n.blendFuncSeparate(L[ie],L[oe],L[ye],L[Ye]),M=ie,b=oe,w=ye,C=Ye),(xt.equals(T)===!1||Zt!==P)&&(n.blendColor(xt.r,xt.g,xt.b,Zt),T.copy(xt),P=Zt),m=B,y=!1}function Q(B,xe){B.side===tr?Re(n.CULL_FACE):pe(n.CULL_FACE);let ie=B.side===li;xe&&(ie=!ie),te(ie),B.blending===ya&&B.transparent===!1?E(As):E(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const oe=B.stencilWrite;a.setTest(oe),oe&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ue(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(B){v!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),v=B)}function U(B){B!==Vw?(pe(n.CULL_FACE),B!==D&&(B===r_?n.cullFace(n.BACK):B===Gw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),D=B}function j(B){B!==I&&(O&&n.lineWidth(B),I=B)}function ue(B,xe,ie){B?(pe(n.POLYGON_OFFSET_FILL),(k!==xe||F!==ie)&&(n.polygonOffset(xe,ie),k=xe,F=ie)):Re(n.POLYGON_OFFSET_FILL)}function ne(B){B?pe(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function A(B){B===void 0&&(B=n.TEXTURE0+q-1),se!==B&&(n.activeTexture(B),se=B)}function S(B,xe,ie){ie===void 0&&(se===null?ie=n.TEXTURE0+q-1:ie=se);let oe=N[ie];oe===void 0&&(oe={type:void 0,texture:void 0},N[ie]=oe),(oe.type!==B||oe.texture!==xe)&&(se!==ie&&(n.activeTexture(ie),se=ie),n.bindTexture(B,xe||_e[B]),oe.type=B,oe.texture=xe)}function z(){const B=N[se];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function W(){try{n.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{n.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{n.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{n.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{n.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{n.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{n.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{n.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{n.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(){try{n.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(B){je.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),je.copy(B))}function Te(B){re.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),re.copy(B))}function Ve(B,xe){let ie=c.get(xe);ie===void 0&&(ie=new WeakMap,c.set(xe,ie));let oe=ie.get(B);oe===void 0&&(oe=n.getUniformBlockIndex(xe,B.name),ie.set(B,oe))}function Fe(B,xe){const oe=c.get(xe).get(B);l.get(xe)!==oe&&(n.uniformBlockBinding(xe,oe,B.__bindingPointIndex),l.set(xe,oe))}function ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},se=null,N={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,b=null,x=null,w=null,C=null,T=new pt(0,0,0),P=0,y=!1,v=null,D=null,I=null,k=null,F=null,je.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pe,disable:Re,bindFramebuffer:We,drawBuffers:Ue,useProgram:st,setBlending:E,setMaterial:Q,setFlipSided:te,setCullFace:U,setLineWidth:j,setPolygonOffset:ue,setScissorTest:ne,activeTexture:A,bindTexture:S,unbindTexture:z,compressedTexImage2D:W,compressedTexImage3D:Y,texImage2D:me,texImage3D:De,updateUBOMapping:Ve,uniformBlockBinding:Fe,texStorage2D:Ie,texStorage3D:le,texSubImage2D:K,texSubImage3D:ae,compressedTexSubImage2D:ce,compressedTexSubImage3D:fe,scissor:Ne,viewport:Te,reset:ht}}function rL(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return d?new OffscreenCanvas(A,S):Zu("canvas")}function _(A,S,z){let W=1;const Y=ne(A);if((Y.width>z||Y.height>z)&&(W=z/Math.max(Y.width,Y.height)),W<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor(W*Y.width),ae=Math.floor(W*Y.height);f===void 0&&(f=g(K,ae));const ce=S?g(K,ae):f;return ce.width=K,ce.height=ae,ce.getContext("2d").drawImage(A,0,0,K,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+K+"x"+ae+")."),ce}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(A,S,z,W,Y=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=S;if(S===n.RED&&(z===n.FLOAT&&(K=n.R32F),z===n.HALF_FLOAT&&(K=n.R16F),z===n.UNSIGNED_BYTE&&(K=n.R8)),S===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.R8UI),z===n.UNSIGNED_SHORT&&(K=n.R16UI),z===n.UNSIGNED_INT&&(K=n.R32UI),z===n.BYTE&&(K=n.R8I),z===n.SHORT&&(K=n.R16I),z===n.INT&&(K=n.R32I)),S===n.RG&&(z===n.FLOAT&&(K=n.RG32F),z===n.HALF_FLOAT&&(K=n.RG16F),z===n.UNSIGNED_BYTE&&(K=n.RG8)),S===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RG8UI),z===n.UNSIGNED_SHORT&&(K=n.RG16UI),z===n.UNSIGNED_INT&&(K=n.RG32UI),z===n.BYTE&&(K=n.RG8I),z===n.SHORT&&(K=n.RG16I),z===n.INT&&(K=n.RG32I)),S===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGB8UI),z===n.UNSIGNED_SHORT&&(K=n.RGB16UI),z===n.UNSIGNED_INT&&(K=n.RGB32UI),z===n.BYTE&&(K=n.RGB8I),z===n.SHORT&&(K=n.RGB16I),z===n.INT&&(K=n.RGB32I)),S===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),z===n.UNSIGNED_INT&&(K=n.RGBA32UI),z===n.BYTE&&(K=n.RGBA8I),z===n.SHORT&&(K=n.RGBA16I),z===n.INT&&(K=n.RGBA32I)),S===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),S===n.RGBA){const ae=Y?ju:St.getTransfer(W);z===n.FLOAT&&(K=n.RGBA32F),z===n.HALF_FLOAT&&(K=n.RGBA16F),z===n.UNSIGNED_BYTE&&(K=ae===Dt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(A,S){let z;return A?S===null||S===wo||S===Ql?z=n.DEPTH24_STENCIL8:S===Yr?z=n.DEPTH32F_STENCIL8:S===Jl&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===wo||S===Ql?z=n.DEPTH_COMPONENT24:S===Yr?z=n.DEPTH_COMPONENT32F:S===Jl&&(z=n.DEPTH_COMPONENT16),z}function w(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==ar&&A.minFilter!==br?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function C(A){const S=A.target;S.removeEventListener("dispose",C),P(S),S.isVideoTexture&&u.delete(S)}function T(A){const S=A.target;S.removeEventListener("dispose",T),v(S)}function P(A){const S=i.get(A);if(S.__webglInit===void 0)return;const z=A.source,W=h.get(z);if(W){const Y=W[S.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&y(A),Object.keys(W).length===0&&h.delete(z)}i.remove(A)}function y(A){const S=i.get(A);n.deleteTexture(S.__webglTexture);const z=A.source,W=h.get(z);delete W[S.__cacheKey],o.memory.textures--}function v(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(S.__webglFramebuffer[W]))for(let Y=0;Y<S.__webglFramebuffer[W].length;Y++)n.deleteFramebuffer(S.__webglFramebuffer[W][Y]);else n.deleteFramebuffer(S.__webglFramebuffer[W]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[W])}else{if(Array.isArray(S.__webglFramebuffer))for(let W=0;W<S.__webglFramebuffer.length;W++)n.deleteFramebuffer(S.__webglFramebuffer[W]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let W=0;W<S.__webglColorRenderbuffer.length;W++)S.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[W]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=A.textures;for(let W=0,Y=z.length;W<Y;W++){const K=i.get(z[W]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(z[W])}i.remove(A)}let D=0;function I(){D=0}function k(){const A=D;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),D+=1,A}function F(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function q(A,S){const z=i.get(A);if(A.isVideoTexture&&j(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const W=A.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(z,A,S);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+S)}function O(A,S){const z=i.get(A);if(A.version>0&&z.__version!==A.version){re(z,A,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+S)}function V(A,S){const z=i.get(A);if(A.version>0&&z.__version!==A.version){re(z,A,S);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+S)}function H(A,S){const z=i.get(A);if(A.version>0&&z.__version!==A.version){de(z,A,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+S)}const se={[Nd]:n.REPEAT,[co]:n.CLAMP_TO_EDGE,[Od]:n.MIRRORED_REPEAT},N={[ar]:n.NEAREST,[_A]:n.NEAREST_MIPMAP_NEAREST,[Ic]:n.NEAREST_MIPMAP_LINEAR,[br]:n.LINEAR,[ah]:n.LINEAR_MIPMAP_NEAREST,[uo]:n.LINEAR_MIPMAP_LINEAR},ge={[SA]:n.NEVER,[AA]:n.ALWAYS,[MA]:n.LESS,[Iy]:n.LEQUAL,[bA]:n.EQUAL,[wA]:n.GEQUAL,[EA]:n.GREATER,[TA]:n.NOTEQUAL};function Ee(A,S){if(S.type===Yr&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===br||S.magFilter===ah||S.magFilter===Ic||S.magFilter===uo||S.minFilter===br||S.minFilter===ah||S.minFilter===Ic||S.minFilter===uo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,se[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,se[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,se[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,N[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,N[S.minFilter]),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ge[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ar||S.minFilter!==Ic&&S.minFilter!==uo||S.type===Yr&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function je(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C));const W=S.source;let Y=h.get(W);Y===void 0&&(Y={},h.set(W,Y));const K=F(S);if(K!==A.__cacheKey){Y[K]===void 0&&(Y[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Y[K].usedTimes++;const ae=Y[A.__cacheKey];ae!==void 0&&(Y[A.__cacheKey].usedTimes--,ae.usedTimes===0&&y(S)),A.__cacheKey=K,A.__webglTexture=Y[K].texture}return z}function re(A,S,z){let W=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(W=n.TEXTURE_3D);const Y=je(A,S),K=S.source;t.bindTexture(W,A.__webglTexture,n.TEXTURE0+z);const ae=i.get(K);if(K.version!==ae.__version||Y===!0){t.activeTexture(n.TEXTURE0+z);const ce=St.getPrimaries(St.workingColorSpace),fe=S.colorSpace===vs?null:St.getPrimaries(S.colorSpace),Ie=S.colorSpace===vs||ce===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let le=_(S.image,!1,r.maxTextureSize);le=ue(S,le);const me=s.convert(S.format,S.colorSpace),De=s.convert(S.type);let Ne=b(S.internalFormat,me,De,S.colorSpace,S.isVideoTexture);Ee(W,S);let Te;const Ve=S.mipmaps,Fe=S.isVideoTexture!==!0,ht=ae.__version===void 0||Y===!0,B=K.dataReady,xe=w(S,le);if(S.isDepthTexture)Ne=x(S.format===tc,S.type),ht&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,Ne,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Ne,le.width,le.height,0,me,De,null));else if(S.isDataTexture)if(Ve.length>0){Fe&&ht&&t.texStorage2D(n.TEXTURE_2D,xe,Ne,Ve[0].width,Ve[0].height);for(let ie=0,oe=Ve.length;ie<oe;ie++)Te=Ve[ie],Fe?B&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Te.width,Te.height,me,De,Te.data):t.texImage2D(n.TEXTURE_2D,ie,Ne,Te.width,Te.height,0,me,De,Te.data);S.generateMipmaps=!1}else Fe?(ht&&t.texStorage2D(n.TEXTURE_2D,xe,Ne,le.width,le.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,me,De,le.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,le.width,le.height,0,me,De,le.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Fe&&ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Ne,Ve[0].width,Ve[0].height,le.depth);for(let ie=0,oe=Ve.length;ie<oe;ie++)if(Te=Ve[ie],S.format!==rr)if(me!==null)if(Fe){if(B)if(S.layerUpdates.size>0){const ve=I_(Te.width,Te.height,S.format,S.type);for(const ye of S.layerUpdates){const Ye=Te.data.subarray(ye*ve/Te.data.BYTES_PER_ELEMENT,(ye+1)*ve/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,ye,Te.width,Te.height,1,me,Ye)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,Te.width,Te.height,le.depth,me,Te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Ne,Te.width,Te.height,le.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,Te.width,Te.height,le.depth,me,De,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Ne,Te.width,Te.height,le.depth,0,me,De,Te.data)}else{Fe&&ht&&t.texStorage2D(n.TEXTURE_2D,xe,Ne,Ve[0].width,Ve[0].height);for(let ie=0,oe=Ve.length;ie<oe;ie++)Te=Ve[ie],S.format!==rr?me!==null?Fe?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,Te.width,Te.height,me,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Ne,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?B&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Te.width,Te.height,me,De,Te.data):t.texImage2D(n.TEXTURE_2D,ie,Ne,Te.width,Te.height,0,me,De,Te.data)}else if(S.isDataArrayTexture)if(Fe){if(ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Ne,le.width,le.height,le.depth),B)if(S.layerUpdates.size>0){const ie=I_(le.width,le.height,S.format,S.type);for(const oe of S.layerUpdates){const ve=le.data.subarray(oe*ie/le.data.BYTES_PER_ELEMENT,(oe+1)*ie/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,le.width,le.height,1,me,De,ve)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,me,De,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,le.width,le.height,le.depth,0,me,De,le.data);else if(S.isData3DTexture)Fe?(ht&&t.texStorage3D(n.TEXTURE_3D,xe,Ne,le.width,le.height,le.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,me,De,le.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,le.width,le.height,le.depth,0,me,De,le.data);else if(S.isFramebufferTexture){if(ht)if(Fe)t.texStorage2D(n.TEXTURE_2D,xe,Ne,le.width,le.height);else{let ie=le.width,oe=le.height;for(let ve=0;ve<xe;ve++)t.texImage2D(n.TEXTURE_2D,ve,Ne,ie,oe,0,me,De,null),ie>>=1,oe>>=1}}else if(Ve.length>0){if(Fe&&ht){const ie=ne(Ve[0]);t.texStorage2D(n.TEXTURE_2D,xe,Ne,ie.width,ie.height)}for(let ie=0,oe=Ve.length;ie<oe;ie++)Te=Ve[ie],Fe?B&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,me,De,Te):t.texImage2D(n.TEXTURE_2D,ie,Ne,me,De,Te);S.generateMipmaps=!1}else if(Fe){if(ht){const ie=ne(le);t.texStorage2D(n.TEXTURE_2D,xe,Ne,ie.width,ie.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,De,le)}else t.texImage2D(n.TEXTURE_2D,0,Ne,me,De,le);m(S)&&p(W),ae.__version=K.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function de(A,S,z){if(S.image.length!==6)return;const W=je(A,S),Y=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);const K=i.get(Y);if(Y.version!==K.__version||W===!0){t.activeTexture(n.TEXTURE0+z);const ae=St.getPrimaries(St.workingColorSpace),ce=S.colorSpace===vs?null:St.getPrimaries(S.colorSpace),fe=S.colorSpace===vs||ae===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ie=S.isCompressedTexture||S.image[0].isCompressedTexture,le=S.image[0]&&S.image[0].isDataTexture,me=[];for(let oe=0;oe<6;oe++)!Ie&&!le?me[oe]=_(S.image[oe],!0,r.maxCubemapSize):me[oe]=le?S.image[oe].image:S.image[oe],me[oe]=ue(S,me[oe]);const De=me[0],Ne=s.convert(S.format,S.colorSpace),Te=s.convert(S.type),Ve=b(S.internalFormat,Ne,Te,S.colorSpace),Fe=S.isVideoTexture!==!0,ht=K.__version===void 0||W===!0,B=Y.dataReady;let xe=w(S,De);Ee(n.TEXTURE_CUBE_MAP,S);let ie;if(Ie){Fe&&ht&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ve,De.width,De.height);for(let oe=0;oe<6;oe++){ie=me[oe].mipmaps;for(let ve=0;ve<ie.length;ve++){const ye=ie[ve];S.format!==rr?Ne!==null?Fe?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ve,0,0,ye.width,ye.height,Ne,ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ve,Ve,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ve,0,0,ye.width,ye.height,Ne,Te,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ve,Ve,ye.width,ye.height,0,Ne,Te,ye.data)}}}else{if(ie=S.mipmaps,Fe&&ht){ie.length>0&&xe++;const oe=ne(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ve,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(le){Fe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,me[oe].width,me[oe].height,Ne,Te,me[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ve,me[oe].width,me[oe].height,0,Ne,Te,me[oe].data);for(let ve=0;ve<ie.length;ve++){const Ye=ie[ve].image[oe].image;Fe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ve+1,0,0,Ye.width,Ye.height,Ne,Te,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ve+1,Ve,Ye.width,Ye.height,0,Ne,Te,Ye.data)}}else{Fe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ne,Te,me[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ve,Ne,Te,me[oe]);for(let ve=0;ve<ie.length;ve++){const ye=ie[ve];Fe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ve+1,0,0,Ne,Te,ye.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ve+1,Ve,Ne,Te,ye.image[oe])}}}m(S)&&p(n.TEXTURE_CUBE_MAP),K.__version=Y.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function _e(A,S,z,W,Y,K){const ae=s.convert(z.format,z.colorSpace),ce=s.convert(z.type),fe=b(z.internalFormat,ae,ce,z.colorSpace),Ie=i.get(S),le=i.get(z);if(le.__renderTarget=S,!Ie.__hasExternalTextures){const me=Math.max(1,S.width>>K),De=Math.max(1,S.height>>K);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,K,fe,me,De,S.depth,0,ae,ce,null):t.texImage2D(Y,K,fe,me,De,0,ae,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),U(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Y,le.__webglTexture,0,te(S)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Y,le.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(A,S,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer){const W=S.depthTexture,Y=W&&W.isDepthTexture?W.type:null,K=x(S.stencilBuffer,Y),ae=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=te(S);U(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,K,S.width,S.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,K,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,K,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,A)}else{const W=S.textures;for(let Y=0;Y<W.length;Y++){const K=W[Y],ae=s.convert(K.format,K.colorSpace),ce=s.convert(K.type),fe=b(K.internalFormat,ae,ce,K.colorSpace),Ie=te(S);z&&U(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,fe,S.width,S.height):U(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,fe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,fe,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(S.depthTexture);W.__renderTarget=S,(!W.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const Y=W.__webglTexture,K=te(S);if(S.depthTexture.format===ec)U(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(S.depthTexture.format===tc)U(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function We(A){const S=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const W=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),W){const Y=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,W.removeEventListener("dispose",Y)};W.addEventListener("dispose",Y),S.__depthDisposeCallback=Y}S.__boundDepthTexture=W}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Re(S.__webglFramebuffer,A)}else if(z){S.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[W]),S.__webglDepthbuffer[W]===void 0)S.__webglDepthbuffer[W]=n.createRenderbuffer(),pe(S.__webglDepthbuffer[W],A,!1);else{const Y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,K)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),pe(S.__webglDepthbuffer,A,!1);else{const W=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,Y)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(A,S,z){const W=i.get(A);S!==void 0&&_e(W.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&We(A)}function st(A){const S=A.texture,z=i.get(A),W=i.get(S);A.addEventListener("dispose",T);const Y=A.textures,K=A.isWebGLCubeRenderTarget===!0,ae=Y.length>1;if(ae||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=S.version,o.memory.textures++),K){z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[ce]=[];for(let fe=0;fe<S.mipmaps.length;fe++)z.__webglFramebuffer[ce][fe]=n.createFramebuffer()}else z.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)z.__webglFramebuffer[ce]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ae)for(let ce=0,fe=Y.length;ce<fe;ce++){const Ie=i.get(Y[ce]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&U(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ce=0;ce<Y.length;ce++){const fe=Y[ce];z.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ce]);const Ie=s.convert(fe.format,fe.colorSpace),le=s.convert(fe.type),me=b(fe.internalFormat,Ie,le,fe.colorSpace,A.isXRRenderTarget===!0),De=te(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,me,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,z.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Ee(n.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)_e(z.__webglFramebuffer[ce][fe],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else _e(z.__webglFramebuffer[ce],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(S)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let ce=0,fe=Y.length;ce<fe;ce++){const Ie=Y[ce],le=i.get(Ie);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),Ee(n.TEXTURE_2D,Ie),_e(z.__webglFramebuffer,A,Ie,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(Ie)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,W.__webglTexture),Ee(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)_e(z.__webglFramebuffer[fe],A,S,n.COLOR_ATTACHMENT0,ce,fe);else _e(z.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,ce,0);m(S)&&p(ce),t.unbindTexture()}A.depthBuffer&&We(A)}function et(A){const S=A.textures;for(let z=0,W=S.length;z<W;z++){const Y=S[z];if(m(Y)){const K=M(A),ae=i.get(Y).__webglTexture;t.bindTexture(K,ae),p(K),t.unbindTexture()}}}const L=[],E=[];function Q(A){if(A.samples>0){if(U(A)===!1){const S=A.textures,z=A.width,W=A.height;let Y=n.COLOR_BUFFER_BIT;const K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(A),ce=S.length>1;if(ce)for(let fe=0;fe<S.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let fe=0;fe<S.length;fe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);const Ie=i.get(S[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ie,0)}n.blitFramebuffer(0,0,z,W,0,0,z,W,Y,n.NEAREST),l===!0&&(L.length=0,E.length=0,L.push(n.COLOR_ATTACHMENT0+fe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(L.push(K),E.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,E)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let fe=0;fe<S.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);const Ie=i.get(S[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,Ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function te(A){return Math.min(r.maxSamples,A.samples)}function U(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function j(A){const S=o.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function ue(A,S){const z=A.colorSpace,W=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==La&&z!==vs&&(St.getTransfer(z)===Dt?(W!==rr||Y!==rs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function ne(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=I,this.setTexture2D=q,this.setTexture2DArray=O,this.setTexture3D=V,this.setTextureCube=H,this.rebindTextures=Ue,this.setupRenderTarget=st,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=U}function sL(n,e){function t(i,r=vs){let s;const o=St.getTransfer(r);if(i===rs)return n.UNSIGNED_BYTE;if(i===am)return n.UNSIGNED_SHORT_4_4_4_4;if(i===lm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ey)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===My)return n.BYTE;if(i===by)return n.SHORT;if(i===Jl)return n.UNSIGNED_SHORT;if(i===om)return n.INT;if(i===wo)return n.UNSIGNED_INT;if(i===Yr)return n.FLOAT;if(i===lc)return n.HALF_FLOAT;if(i===Ty)return n.ALPHA;if(i===wy)return n.RGB;if(i===rr)return n.RGBA;if(i===Ay)return n.LUMINANCE;if(i===Cy)return n.LUMINANCE_ALPHA;if(i===ec)return n.DEPTH_COMPONENT;if(i===tc)return n.DEPTH_STENCIL;if(i===Ry)return n.RED;if(i===cm)return n.RED_INTEGER;if(i===Py)return n.RG;if(i===um)return n.RG_INTEGER;if(i===fm)return n.RGBA_INTEGER;if(i===_u||i===vu||i===xu||i===yu)if(o===Dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===_u)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===_u)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fd||i===kd||i===Bd||i===zd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hd||i===Vd||i===Gd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Hd||i===Vd)return o===Dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Gd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wd||i===Xd||i===$d||i===qd||i===Yd||i===jd||i===Kd||i===Zd||i===Jd||i===Qd||i===ep||i===tp||i===np||i===ip)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Wd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$d)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ep)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tp)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===np)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ip)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Su||i===rp||i===sp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Su)return o===Dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dy||i===op||i===ap||i===lp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Su)return s.COMPRESSED_RED_RGTC1_EXT;if(i===op)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ap)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ql?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const oL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aL=`
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

}`;class lL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new ci,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ns({vertexShader:oL,fragmentShader:aL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ii(new wf(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cL extends ka{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new lL,m=t.getContextAttributes();let p=null,M=null;const b=[],x=[],w=new mt;let C=null;const T=new xi;T.viewport=new It;const P=new xi;P.viewport=new It;const y=[T,P],v=new PC;let D=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let de=b[re];return de===void 0&&(de=new Ah,b[re]=de),de.getTargetRaySpace()},this.getControllerGrip=function(re){let de=b[re];return de===void 0&&(de=new Ah,b[re]=de),de.getGripSpace()},this.getHand=function(re){let de=b[re];return de===void 0&&(de=new Ah,b[re]=de),de.getHandSpace()};function k(re){const de=x.indexOf(re.inputSource);if(de===-1)return;const _e=b[de];_e!==void 0&&(_e.update(re.inputSource,re.frame,c||o),_e.dispatchEvent({type:re.type,data:re.inputSource}))}function F(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",q);for(let re=0;re<b.length;re++){const de=x[re];de!==null&&(x[re]=null,b[re].disconnect(de))}D=null,I=null,_.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,M=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",F),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,pe=null,Re=null;m.depth&&(Re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?tc:ec,pe=m.stencil?Ql:wo);const We={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(We),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Ao(h.textureWidth,h.textureHeight,{format:rr,type:rs,depthTexture:new Xy(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ao(d.framebufferWidth,d.framebufferHeight,{format:rr,type:rs,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(re){for(let de=0;de<re.removed.length;de++){const _e=re.removed[de],pe=x.indexOf(_e);pe>=0&&(x[pe]=null,b[pe].disconnect(_e))}for(let de=0;de<re.added.length;de++){const _e=re.added[de];let pe=x.indexOf(_e);if(pe===-1){for(let We=0;We<b.length;We++)if(We>=x.length){x.push(_e),pe=We;break}else if(x[We]===null){x[We]=_e,pe=We;break}if(pe===-1)break}const Re=b[pe];Re&&Re.connect(_e)}}const O=new Z,V=new Z;function H(re,de,_e){O.setFromMatrixPosition(de.matrixWorld),V.setFromMatrixPosition(_e.matrixWorld);const pe=O.distanceTo(V),Re=de.projectionMatrix.elements,We=_e.projectionMatrix.elements,Ue=Re[14]/(Re[10]-1),st=Re[14]/(Re[10]+1),et=(Re[9]+1)/Re[5],L=(Re[9]-1)/Re[5],E=(Re[8]-1)/Re[0],Q=(We[8]+1)/We[0],te=Ue*E,U=Ue*Q,j=pe/(-E+Q),ue=j*-E;if(de.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ue),re.translateZ(j),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Re[10]===-1)re.projectionMatrix.copy(de.projectionMatrix),re.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const ne=Ue+j,A=st+j,S=te-ue,z=U+(pe-ue),W=et*st/A*ne,Y=L*st/A*ne;re.projectionMatrix.makePerspective(S,z,W,Y,ne,A),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function se(re,de){de===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(de.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let de=re.near,_e=re.far;_.texture!==null&&(_.depthNear>0&&(de=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),v.near=P.near=T.near=de,v.far=P.far=T.far=_e,(D!==v.near||I!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),D=v.near,I=v.far),T.layers.mask=re.layers.mask|2,P.layers.mask=re.layers.mask|4,v.layers.mask=T.layers.mask|P.layers.mask;const pe=re.parent,Re=v.cameras;se(v,pe);for(let We=0;We<Re.length;We++)se(Re[We],pe);Re.length===2?H(v,T,P):v.projectionMatrix.copy(T.projectionMatrix),N(re,v,pe)};function N(re,de,_e){_e===null?re.matrix.copy(de.matrixWorld):(re.matrix.copy(_e.matrixWorld),re.matrix.invert(),re.matrix.multiply(de.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(de.projectionMatrix),re.projectionMatrixInverse.copy(de.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=nc*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(re){l=re,h!==null&&(h.fixedFoveation=re),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=re)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ge=null;function Ee(re,de){if(u=de.getViewerPose(c||o),g=de,u!==null){const _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let pe=!1;_e.length!==v.cameras.length&&(v.cameras.length=0,pe=!0);for(let Ue=0;Ue<_e.length;Ue++){const st=_e[Ue];let et=null;if(d!==null)et=d.getViewport(st);else{const E=f.getViewSubImage(h,st);et=E.viewport,Ue===0&&(e.setRenderTargetTextures(M,E.colorTexture,E.depthStencilTexture),e.setRenderTarget(M))}let L=y[Ue];L===void 0&&(L=new xi,L.layers.enable(Ue),L.viewport=new It,y[Ue]=L),L.matrix.fromArray(st.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(st.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(et.x,et.y,et.width,et.height),Ue===0&&(v.matrix.copy(L.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),pe===!0&&v.cameras.push(L)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const Ue=f.getDepthInformation(_e[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(e,Ue,r.renderState)}}for(let _e=0;_e<b.length;_e++){const pe=x[_e],Re=b[_e];pe!==null&&Re!==void 0&&Re.update(pe,de,c||o)}ge&&ge(re,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}const je=new Yy;je.setAnimationLoop(Ee),this.setAnimationLoop=function(re){ge=re},this.dispose=function(){}}}const js=new Rr,uL=new $t;function fL(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Hy(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===li&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===li&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),b=M.envMap,x=M.envMapRotation;b&&(m.envMap.value=b,js.copy(x),js.x*=-1,js.y*=-1,js.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),m.envMapRotation.value.setFromMatrix4(uL.makeRotationFromEuler(js)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===li&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hL(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const x=b.program;i.uniformBlockBinding(M,x)}function c(M,b){let x=r[M.id];x===void 0&&(g(M),x=u(M),r[M.id]=x,M.addEventListener("dispose",m));const w=b.program;i.updateUBOMapping(M,w);const C=e.render.frame;s[M.id]!==C&&(h(M),s[M.id]=C)}function u(M){const b=f();M.__bindingPointIndex=b;const x=n.createBuffer(),w=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,w,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,x),x}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const b=r[M.id],x=M.uniforms,w=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let C=0,T=x.length;C<T;C++){const P=Array.isArray(x[C])?x[C]:[x[C]];for(let y=0,v=P.length;y<v;y++){const D=P[y];if(d(D,C,y,w)===!0){const I=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let F=0;for(let q=0;q<k.length;q++){const O=k[q],V=_(O);typeof O=="number"||typeof O=="boolean"?(D.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,I+F,D.__data)):O.isMatrix3?(D.__data[0]=O.elements[0],D.__data[1]=O.elements[1],D.__data[2]=O.elements[2],D.__data[3]=0,D.__data[4]=O.elements[3],D.__data[5]=O.elements[4],D.__data[6]=O.elements[5],D.__data[7]=0,D.__data[8]=O.elements[6],D.__data[9]=O.elements[7],D.__data[10]=O.elements[8],D.__data[11]=0):(O.toArray(D.__data,F),F+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,b,x,w){const C=M.value,T=b+"_"+x;if(w[T]===void 0)return typeof C=="number"||typeof C=="boolean"?w[T]=C:w[T]=C.clone(),!0;{const P=w[T];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return w[T]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(M){const b=M.uniforms;let x=0;const w=16;for(let T=0,P=b.length;T<P;T++){const y=Array.isArray(b[T])?b[T]:[b[T]];for(let v=0,D=y.length;v<D;v++){const I=y[v],k=Array.isArray(I.value)?I.value:[I.value];for(let F=0,q=k.length;F<q;F++){const O=k[F],V=_(O),H=x%w,se=H%V.boundary,N=H+se;x+=se,N!==0&&w-N<V.storage&&(x+=w-N),I.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=V.storage}}}const C=x%w;return C>0&&(x+=w-C),M.__size=x,M.__cache={},this}function _(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){const b=M.target;b.removeEventListener("dispose",m);const x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class dL{constructor(e={}){const{canvas:t=WA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let w=!1;this._outputColorSpace=Bi;let C=0,T=0,P=null,y=-1,v=null;const D=new It,I=new It;let k=null;const F=new pt(0);let q=0,O=t.width,V=t.height,H=1,se=null,N=null;const ge=new It(0,0,O,V),Ee=new It(0,0,O,V);let je=!1;const re=new mm;let de=!1,_e=!1;const pe=new $t,Re=new $t,We=new Z,Ue=new It,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function L(){return P===null?H:1}let E=i;function Q(R,$){return t.getContext(R,$)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sm}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",ye,!1),E===null){const $="webgl2";if(E=Q($,R),E===null)throw Q($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let te,U,j,ue,ne,A,S,z,W,Y,K,ae,ce,fe,Ie,le,me,De,Ne,Te,Ve,Fe,ht,B;function xe(){te=new bP(E),te.init(),Fe=new sL(E,te),U=new gP(E,te,e,Fe),j=new iL(E,te),U.reverseDepthBuffer&&h&&j.buffers.depth.setReversed(!0),ue=new wP(E),ne=new WD,A=new rL(E,te,j,ne,U,Fe,ue),S=new vP(x),z=new MP(x),W=new LC(E),ht=new pP(E,W),Y=new EP(E,W,ue,ht),K=new CP(E,Y,W,ue),Ne=new AP(E,U,A),le=new _P(ne),ae=new GD(x,S,z,te,U,ht,le),ce=new fL(x,ne),fe=new $D,Ie=new JD(te),De=new dP(x,S,z,j,K,d,l),me=new tL(x,K,U),B=new hL(E,ue,U,j),Te=new mP(E,te,ue),Ve=new TP(E,te,ue),ue.programs=ae.programs,x.capabilities=U,x.extensions=te,x.properties=ne,x.renderLists=fe,x.shadowMap=me,x.state=j,x.info=ue}xe();const ie=new cL(x,E);this.xr=ie,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const R=te.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=te.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(O,V,!1))},this.getSize=function(R){return R.set(O,V)},this.setSize=function(R,$,ee=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,V=$,t.width=Math.floor(R*H),t.height=Math.floor($*H),ee===!0&&(t.style.width=R+"px",t.style.height=$+"px"),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(O*H,V*H).floor()},this.setDrawingBufferSize=function(R,$,ee){O=R,V=$,H=ee,t.width=Math.floor(R*ee),t.height=Math.floor($*ee),this.setViewport(0,0,R,$)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(ge)},this.setViewport=function(R,$,ee,J){R.isVector4?ge.set(R.x,R.y,R.z,R.w):ge.set(R,$,ee,J),j.viewport(D.copy(ge).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(Ee)},this.setScissor=function(R,$,ee,J){R.isVector4?Ee.set(R.x,R.y,R.z,R.w):Ee.set(R,$,ee,J),j.scissor(I.copy(Ee).multiplyScalar(H).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(R){j.setScissorTest(je=R)},this.setOpaqueSort=function(R){se=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(R=!0,$=!0,ee=!0){let J=0;if(R){let G=!1;if(P!==null){const he=P.texture.format;G=he===fm||he===um||he===cm}if(G){const he=P.texture.type,Me=he===rs||he===wo||he===Jl||he===Ql||he===am||he===lm,Pe=De.getClearColor(),Ce=De.getClearAlpha(),He=Pe.r,Ge=Pe.g,ze=Pe.b;Me?(g[0]=He,g[1]=Ge,g[2]=ze,g[3]=Ce,E.clearBufferuiv(E.COLOR,0,g)):(_[0]=He,_[1]=Ge,_[2]=ze,_[3]=Ce,E.clearBufferiv(E.COLOR,0,_))}else J|=E.COLOR_BUFFER_BIT}$&&(J|=E.DEPTH_BUFFER_BIT),ee&&(J|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),De.dispose(),fe.dispose(),Ie.dispose(),ne.dispose(),S.dispose(),z.dispose(),K.dispose(),ht.dispose(),B.dispose(),ae.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Se),ie.removeEventListener("sessionend",Ze),ke.stop()};function oe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const R=ue.autoReset,$=me.enabled,ee=me.autoUpdate,J=me.needsUpdate,G=me.type;xe(),ue.autoReset=R,me.enabled=$,me.autoUpdate=ee,me.needsUpdate=J,me.type=G}function ye(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ye(R){const $=R.target;$.removeEventListener("dispose",Ye),xt($)}function xt(R){Zt(R),ne.remove(R)}function Zt(R){const $=ne.get(R).programs;$!==void 0&&($.forEach(function(ee){ae.releaseProgram(ee)}),R.isShaderMaterial&&ae.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,ee,J,G,he){$===null&&($=st);const Me=G.isMesh&&G.matrixWorld.determinant()<0,Pe=fi(R,$,ee,J,G);j.setMaterial(J,Me);let Ce=ee.index,He=1;if(J.wireframe===!0){if(Ce=Y.getWireframeAttribute(ee),Ce===void 0)return;He=2}const Ge=ee.drawRange,ze=ee.attributes.position;let tt=Ge.start*He,Et=(Ge.start+Ge.count)*He;he!==null&&(tt=Math.max(tt,he.start*He),Et=Math.min(Et,(he.start+he.count)*He)),Ce!==null?(tt=Math.max(tt,0),Et=Math.min(Et,Ce.count)):ze!=null&&(tt=Math.max(tt,0),Et=Math.min(Et,ze.count));const sn=Et-tt;if(sn<0||sn===1/0)return;ht.setup(G,J,Pe,ee,Ce);let Jt,yt=Te;if(Ce!==null&&(Jt=W.get(Ce),yt=Ve,yt.setIndex(Jt)),G.isMesh)J.wireframe===!0?(j.setLineWidth(J.wireframeLinewidth*L()),yt.setMode(E.LINES)):yt.setMode(E.TRIANGLES);else if(G.isLine){let Xe=J.linewidth;Xe===void 0&&(Xe=1),j.setLineWidth(Xe*L()),G.isLineSegments?yt.setMode(E.LINES):G.isLineLoop?yt.setMode(E.LINE_LOOP):yt.setMode(E.LINE_STRIP)}else G.isPoints?yt.setMode(E.POINTS):G.isSprite&&yt.setMode(E.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Mu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))yt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Xe=G._multiDrawStarts,Mn=G._multiDrawCounts,Tt=G._multiDrawCount,ji=Ce?W.get(Ce).bytesPerElement:1,Po=ne.get(J).currentProgram.getUniforms();for(let hi=0;hi<Tt;hi++)Po.setValue(E,"_gl_DrawID",hi),yt.render(Xe[hi]/ji,Mn[hi])}else if(G.isInstancedMesh)yt.renderInstances(tt,sn,G.count);else if(ee.isInstancedBufferGeometry){const Xe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Mn=Math.min(ee.instanceCount,Xe);yt.renderInstances(tt,sn,Mn)}else yt.render(tt,sn)};function we(R,$,ee){R.transparent===!0&&R.side===tr&&R.forceSinglePass===!1?(R.side=li,R.needsUpdate=!0,Ut(R,$,ee),R.side=Us,R.needsUpdate=!0,Ut(R,$,ee),R.side=tr):Ut(R,$,ee)}this.compile=function(R,$,ee=null){ee===null&&(ee=R),p=Ie.get(ee),p.init($),b.push(p),ee.traverseVisible(function(G){G.isLight&&G.layers.test($.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),R!==ee&&R.traverseVisible(function(G){G.isLight&&G.layers.test($.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const J=new Set;return R.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const he=G.material;if(he)if(Array.isArray(he))for(let Me=0;Me<he.length;Me++){const Pe=he[Me];we(Pe,ee,G),J.add(Pe)}else we(he,ee,G),J.add(he)}),p=b.pop(),J},this.compileAsync=function(R,$,ee=null){const J=this.compile(R,$,ee);return new Promise(G=>{function he(){if(J.forEach(function(Me){ne.get(Me).currentProgram.isReady()&&J.delete(Me)}),J.size===0){G(R);return}setTimeout(he,10)}te.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Oe=null;function nt(R){Oe&&Oe(R)}function Se(){ke.stop()}function Ze(){ke.start()}const ke=new Yy;ke.setAnimationLoop(nt),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(R){Oe=R,ie.setAnimationLoop(R),R===null?ke.stop():ke.start()},ie.addEventListener("sessionstart",Se),ie.addEventListener("sessionend",Ze),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera($),$=ie.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,$,P),p=Ie.get(R,b.length),p.init($),b.push(p),Re.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),re.setFromProjectionMatrix(Re),_e=this.localClippingEnabled,de=le.init(this.clippingPlanes,_e),m=fe.get(R,M.length),m.init(),M.push(m),ie.enabled===!0&&ie.isPresenting===!0){const he=x.xr.getDepthSensingMesh();he!==null&&Ke(he,$,-1/0,x.sortObjects)}Ke(R,$,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(se,N),et=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,et&&De.addToRenderList(m,R),this.info.render.frame++,de===!0&&le.beginShadows();const ee=p.state.shadowsArray;me.render(ee,R,$),de===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,G=m.transmissive;if(p.setupLights(),$.isArrayCamera){const he=$.cameras;if(G.length>0)for(let Me=0,Pe=he.length;Me<Pe;Me++){const Ce=he[Me];ct(J,G,R,Ce)}et&&De.render(R);for(let Me=0,Pe=he.length;Me<Pe;Me++){const Ce=he[Me];en(m,R,Ce,Ce.viewport)}}else G.length>0&&ct(J,G,R,$),et&&De.render(R),en(m,R,$);P!==null&&T===0&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(x,R,$),ht.resetDefaultState(),y=-1,v=null,b.pop(),b.length>0?(p=b[b.length-1],de===!0&&le.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Ke(R,$,ee,J){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)ee=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||re.intersectsSprite(R)){J&&Ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Re);const Me=K.update(R),Pe=R.material;Pe.visible&&m.push(R,Me,Pe,ee,Ue.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||re.intersectsObject(R))){const Me=K.update(R),Pe=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ue.copy(R.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ue.copy(Me.boundingSphere.center)),Ue.applyMatrix4(R.matrixWorld).applyMatrix4(Re)),Array.isArray(Pe)){const Ce=Me.groups;for(let He=0,Ge=Ce.length;He<Ge;He++){const ze=Ce[He],tt=Pe[ze.materialIndex];tt&&tt.visible&&m.push(R,Me,tt,ee,Ue.z,ze)}}else Pe.visible&&m.push(R,Me,Pe,ee,Ue.z,null)}}const he=R.children;for(let Me=0,Pe=he.length;Me<Pe;Me++)Ke(he[Me],$,ee,J)}function en(R,$,ee,J){const G=R.opaque,he=R.transmissive,Me=R.transparent;p.setupLightsView(ee),de===!0&&le.setGlobalState(x.clippingPlanes,ee),J&&j.viewport(D.copy(J)),G.length>0&&Bt(G,$,ee),he.length>0&&Bt(he,$,ee),Me.length>0&&Bt(Me,$,ee),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function ct(R,$,ee,J){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Ao(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?lc:rs,minFilter:uo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const he=p.state.transmissionRenderTarget[J.id],Me=J.viewport||D;he.setSize(Me.z*x.transmissionResolutionScale,Me.w*x.transmissionResolutionScale);const Pe=x.getRenderTarget();x.setRenderTarget(he),x.getClearColor(F),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),et&&De.render(ee);const Ce=x.toneMapping;x.toneMapping=Cs;const He=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),de===!0&&le.setGlobalState(x.clippingPlanes,J),Bt(R,ee,J),A.updateMultisampleRenderTarget(he),A.updateRenderTargetMipmap(he),te.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let ze=0,tt=$.length;ze<tt;ze++){const Et=$[ze],sn=Et.object,Jt=Et.geometry,yt=Et.material,Xe=Et.group;if(yt.side===tr&&sn.layers.test(J.layers)){const Mn=yt.side;yt.side=li,yt.needsUpdate=!0,cn(sn,ee,J,Jt,yt,Xe),yt.side=Mn,yt.needsUpdate=!0,Ge=!0}}Ge===!0&&(A.updateMultisampleRenderTarget(he),A.updateRenderTargetMipmap(he))}x.setRenderTarget(Pe),x.setClearColor(F,q),He!==void 0&&(J.viewport=He),x.toneMapping=Ce}function Bt(R,$,ee){const J=$.isScene===!0?$.overrideMaterial:null;for(let G=0,he=R.length;G<he;G++){const Me=R[G],Pe=Me.object,Ce=Me.geometry,He=Me.group;let Ge=Me.material;Ge.allowOverride===!0&&J!==null&&(Ge=J),Pe.layers.test(ee.layers)&&cn(Pe,$,ee,Ce,Ge,He)}}function cn(R,$,ee,J,G,he){R.onBeforeRender(x,$,ee,J,G,he),R.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(x,$,ee,J,R,he),G.transparent===!0&&G.side===tr&&G.forceSinglePass===!1?(G.side=li,G.needsUpdate=!0,x.renderBufferDirect(ee,$,J,G,R,he),G.side=Us,G.needsUpdate=!0,x.renderBufferDirect(ee,$,J,G,R,he),G.side=tr):x.renderBufferDirect(ee,$,J,G,R,he),R.onAfterRender(x,$,ee,J,G,he)}function Ut(R,$,ee){$.isScene!==!0&&($=st);const J=ne.get(R),G=p.state.lights,he=p.state.shadowsArray,Me=G.state.version,Pe=ae.getParameters(R,G.state,he,$,ee),Ce=ae.getProgramCacheKey(Pe);let He=J.programs;J.environment=R.isMeshStandardMaterial?$.environment:null,J.fog=$.fog,J.envMap=(R.isMeshStandardMaterial?z:S).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,He===void 0&&(R.addEventListener("dispose",Ye),He=new Map,J.programs=He);let Ge=He.get(Ce);if(Ge!==void 0){if(J.currentProgram===Ge&&J.lightsStateVersion===Me)return bt(R,Pe),Ge}else Pe.uniforms=ae.getUniforms(R),R.onBeforeCompile(Pe,x),Ge=ae.acquireProgram(Pe,Ce),He.set(Ce,Ge),J.uniforms=Pe.uniforms;const ze=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ze.clippingPlanes=le.uniform),bt(R,Pe),J.needsLights=On(R),J.lightsStateVersion=Me,J.needsLights&&(ze.ambientLightColor.value=G.state.ambient,ze.lightProbe.value=G.state.probe,ze.directionalLights.value=G.state.directional,ze.directionalLightShadows.value=G.state.directionalShadow,ze.spotLights.value=G.state.spot,ze.spotLightShadows.value=G.state.spotShadow,ze.rectAreaLights.value=G.state.rectArea,ze.ltc_1.value=G.state.rectAreaLTC1,ze.ltc_2.value=G.state.rectAreaLTC2,ze.pointLights.value=G.state.point,ze.pointLightShadows.value=G.state.pointShadow,ze.hemisphereLights.value=G.state.hemi,ze.directionalShadowMap.value=G.state.directionalShadowMap,ze.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ze.spotShadowMap.value=G.state.spotShadowMap,ze.spotLightMatrix.value=G.state.spotLightMatrix,ze.spotLightMap.value=G.state.spotLightMap,ze.pointShadowMap.value=G.state.pointShadowMap,ze.pointShadowMatrix.value=G.state.pointShadowMatrix),J.currentProgram=Ge,J.uniformsList=null,Ge}function Nt(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=bu.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function bt(R,$){const ee=ne.get(R);ee.outputColorSpace=$.outputColorSpace,ee.batching=$.batching,ee.batchingColor=$.batchingColor,ee.instancing=$.instancing,ee.instancingColor=$.instancingColor,ee.instancingMorph=$.instancingMorph,ee.skinning=$.skinning,ee.morphTargets=$.morphTargets,ee.morphNormals=$.morphNormals,ee.morphColors=$.morphColors,ee.morphTargetsCount=$.morphTargetsCount,ee.numClippingPlanes=$.numClippingPlanes,ee.numIntersection=$.numClipIntersection,ee.vertexAlphas=$.vertexAlphas,ee.vertexTangents=$.vertexTangents,ee.toneMapping=$.toneMapping}function fi(R,$,ee,J,G){$.isScene!==!0&&($=st),A.resetTextureUnits();const he=$.fog,Me=J.isMeshStandardMaterial?$.environment:null,Pe=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:La,Ce=(J.isMeshStandardMaterial?z:S).get(J.envMap||Me),He=J.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ge=!!ee.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ze=!!ee.morphAttributes.position,tt=!!ee.morphAttributes.normal,Et=!!ee.morphAttributes.color;let sn=Cs;J.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(sn=x.toneMapping);const Jt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,yt=Jt!==void 0?Jt.length:0,Xe=ne.get(J),Mn=p.state.lights;if(de===!0&&(_e===!0||R!==v)){const Fn=R===v&&J.id===y;le.setState(J,R,Fn)}let Tt=!1;J.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Mn.state.version||Xe.outputColorSpace!==Pe||G.isBatchedMesh&&Xe.batching===!1||!G.isBatchedMesh&&Xe.batching===!0||G.isBatchedMesh&&Xe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Xe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Xe.instancing===!1||!G.isInstancedMesh&&Xe.instancing===!0||G.isSkinnedMesh&&Xe.skinning===!1||!G.isSkinnedMesh&&Xe.skinning===!0||G.isInstancedMesh&&Xe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Xe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Xe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Xe.instancingMorph===!1&&G.morphTexture!==null||Xe.envMap!==Ce||J.fog===!0&&Xe.fog!==he||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==le.numPlanes||Xe.numIntersection!==le.numIntersection)||Xe.vertexAlphas!==He||Xe.vertexTangents!==Ge||Xe.morphTargets!==ze||Xe.morphNormals!==tt||Xe.morphColors!==Et||Xe.toneMapping!==sn||Xe.morphTargetsCount!==yt)&&(Tt=!0):(Tt=!0,Xe.__version=J.version);let ji=Xe.currentProgram;Tt===!0&&(ji=Ut(J,$,G));let Po=!1,hi=!1,Va=!1;const Vt=ji.getUniforms(),Ii=Xe.uniforms;if(j.useProgram(ji.program)&&(Po=!0,hi=!0,Va=!0),J.id!==y&&(y=J.id,hi=!0),Po||v!==R){j.buffers.depth.getReversed()?(pe.copy(R.projectionMatrix),$A(pe),qA(pe),Vt.setValue(E,"projectionMatrix",pe)):Vt.setValue(E,"projectionMatrix",R.projectionMatrix),Vt.setValue(E,"viewMatrix",R.matrixWorldInverse);const Jn=Vt.map.cameraPosition;Jn!==void 0&&Jn.setValue(E,We.setFromMatrixPosition(R.matrixWorld)),U.logarithmicDepthBuffer&&Vt.setValue(E,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Vt.setValue(E,"isOrthographic",R.isOrthographicCamera===!0),v!==R&&(v=R,hi=!0,Va=!0)}if(G.isSkinnedMesh){Vt.setOptional(E,G,"bindMatrix"),Vt.setOptional(E,G,"bindMatrixInverse");const Fn=G.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),Vt.setValue(E,"boneTexture",Fn.boneTexture,A))}G.isBatchedMesh&&(Vt.setOptional(E,G,"batchingTexture"),Vt.setValue(E,"batchingTexture",G._matricesTexture,A),Vt.setOptional(E,G,"batchingIdTexture"),Vt.setValue(E,"batchingIdTexture",G._indirectTexture,A),Vt.setOptional(E,G,"batchingColorTexture"),G._colorsTexture!==null&&Vt.setValue(E,"batchingColorTexture",G._colorsTexture,A));const Ui=ee.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&Ne.update(G,ee,ji),(hi||Xe.receiveShadow!==G.receiveShadow)&&(Xe.receiveShadow=G.receiveShadow,Vt.setValue(E,"receiveShadow",G.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ii.envMap.value=Ce,Ii.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&$.environment!==null&&(Ii.envMapIntensity.value=$.environmentIntensity),hi&&(Vt.setValue(E,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&Ht(Ii,Va),he&&J.fog===!0&&ce.refreshFogUniforms(Ii,he),ce.refreshMaterialUniforms(Ii,J,H,V,p.state.transmissionRenderTarget[R.id]),bu.upload(E,Nt(Xe),Ii,A)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(bu.upload(E,Nt(Xe),Ii,A),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Vt.setValue(E,"center",G.center),Vt.setValue(E,"modelViewMatrix",G.modelViewMatrix),Vt.setValue(E,"normalMatrix",G.normalMatrix),Vt.setValue(E,"modelMatrix",G.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Fn=J.uniformsGroups;for(let Jn=0,Cf=Fn.length;Jn<Cf;Jn++){const Fs=Fn[Jn];B.update(Fs,ji),B.bind(Fs,ji)}}return ji}function Ht(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function On(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,$,ee){const J=ne.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),ne.get(R.texture).__webglTexture=$,ne.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ee,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,$){const ee=ne.get(R);ee.__webglFramebuffer=$,ee.__useDefaultFramebuffer=$===void 0};const Li=E.createFramebuffer();this.setRenderTarget=function(R,$=0,ee=0){P=R,C=$,T=ee;let J=!0,G=null,he=!1,Me=!1;if(R){const Ce=ne.get(R);if(Ce.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(E.FRAMEBUFFER,null),J=!1;else if(Ce.__webglFramebuffer===void 0)A.setupRenderTarget(R);else if(Ce.__hasExternalTextures)A.rebindTextures(R,ne.get(R.texture).__webglTexture,ne.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ze=R.depthTexture;if(Ce.__boundDepthTexture!==ze){if(ze!==null&&ne.has(ze)&&(R.width!==ze.image.width||R.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(R)}}const He=R.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Me=!0);const Ge=ne.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ge[$])?G=Ge[$][ee]:G=Ge[$],he=!0):R.samples>0&&A.useMultisampledRTT(R)===!1?G=ne.get(R).__webglMultisampledFramebuffer:Array.isArray(Ge)?G=Ge[ee]:G=Ge,D.copy(R.viewport),I.copy(R.scissor),k=R.scissorTest}else D.copy(ge).multiplyScalar(H).floor(),I.copy(Ee).multiplyScalar(H).floor(),k=je;if(ee!==0&&(G=Li),j.bindFramebuffer(E.FRAMEBUFFER,G)&&J&&j.drawBuffers(R,G),j.viewport(D),j.scissor(I),j.setScissorTest(k),he){const Ce=ne.get(R.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce.__webglTexture,ee)}else if(Me){const Ce=ne.get(R.texture),He=$;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ce.__webglTexture,ee,He)}else if(R!==null&&ee!==0){const Ce=ne.get(R.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ce.__webglTexture,ee)}y=-1},this.readRenderTargetPixels=function(R,$,ee,J,G,he,Me){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Me!==void 0&&(Pe=Pe[Me]),Pe){j.bindFramebuffer(E.FRAMEBUFFER,Pe);try{const Ce=R.texture,He=Ce.format,Ge=Ce.type;if(!U.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-J&&ee>=0&&ee<=R.height-G&&E.readPixels($,ee,J,G,Fe.convert(He),Fe.convert(Ge),he)}finally{const Ce=P!==null?ne.get(P).__webglFramebuffer:null;j.bindFramebuffer(E.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(R,$,ee,J,G,he,Me){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Me!==void 0&&(Pe=Pe[Me]),Pe)if($>=0&&$<=R.width-J&&ee>=0&&ee<=R.height-G){j.bindFramebuffer(E.FRAMEBUFFER,Pe);const Ce=R.texture,He=Ce.format,Ge=Ce.type;if(!U.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,ze),E.bufferData(E.PIXEL_PACK_BUFFER,he.byteLength,E.STREAM_READ),E.readPixels($,ee,J,G,Fe.convert(He),Fe.convert(Ge),0);const tt=P!==null?ne.get(P).__webglFramebuffer:null;j.bindFramebuffer(E.FRAMEBUFFER,tt);const Et=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await XA(E,Et,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,ze),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,he),E.deleteBuffer(ze),E.deleteSync(Et),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,$=null,ee=0){const J=Math.pow(2,-ee),G=Math.floor(R.image.width*J),he=Math.floor(R.image.height*J),Me=$!==null?$.x:0,Pe=$!==null?$.y:0;A.setTexture2D(R,0),E.copyTexSubImage2D(E.TEXTURE_2D,ee,0,0,Me,Pe,G,he),j.unbindTexture()};const un=E.createFramebuffer(),fn=E.createFramebuffer();this.copyTextureToTexture=function(R,$,ee=null,J=null,G=0,he=null){he===null&&(G!==0?(Mu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=G,G=0):he=0);let Me,Pe,Ce,He,Ge,ze,tt,Et,sn;const Jt=R.isCompressedTexture?R.mipmaps[he]:R.image;if(ee!==null)Me=ee.max.x-ee.min.x,Pe=ee.max.y-ee.min.y,Ce=ee.isBox3?ee.max.z-ee.min.z:1,He=ee.min.x,Ge=ee.min.y,ze=ee.isBox3?ee.min.z:0;else{const Ui=Math.pow(2,-G);Me=Math.floor(Jt.width*Ui),Pe=Math.floor(Jt.height*Ui),R.isDataArrayTexture?Ce=Jt.depth:R.isData3DTexture?Ce=Math.floor(Jt.depth*Ui):Ce=1,He=0,Ge=0,ze=0}J!==null?(tt=J.x,Et=J.y,sn=J.z):(tt=0,Et=0,sn=0);const yt=Fe.convert($.format),Xe=Fe.convert($.type);let Mn;$.isData3DTexture?(A.setTexture3D($,0),Mn=E.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(A.setTexture2DArray($,0),Mn=E.TEXTURE_2D_ARRAY):(A.setTexture2D($,0),Mn=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,$.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,$.unpackAlignment);const Tt=E.getParameter(E.UNPACK_ROW_LENGTH),ji=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Po=E.getParameter(E.UNPACK_SKIP_PIXELS),hi=E.getParameter(E.UNPACK_SKIP_ROWS),Va=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Jt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Jt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,He),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ge),E.pixelStorei(E.UNPACK_SKIP_IMAGES,ze);const Vt=R.isDataArrayTexture||R.isData3DTexture,Ii=$.isDataArrayTexture||$.isData3DTexture;if(R.isDepthTexture){const Ui=ne.get(R),Fn=ne.get($),Jn=ne.get(Ui.__renderTarget),Cf=ne.get(Fn.__renderTarget);j.bindFramebuffer(E.READ_FRAMEBUFFER,Jn.__webglFramebuffer),j.bindFramebuffer(E.DRAW_FRAMEBUFFER,Cf.__webglFramebuffer);for(let Fs=0;Fs<Ce;Fs++)Vt&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ne.get(R).__webglTexture,G,ze+Fs),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ne.get($).__webglTexture,he,sn+Fs)),E.blitFramebuffer(He,Ge,Me,Pe,tt,Et,Me,Pe,E.DEPTH_BUFFER_BIT,E.NEAREST);j.bindFramebuffer(E.READ_FRAMEBUFFER,null),j.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(G!==0||R.isRenderTargetTexture||ne.has(R)){const Ui=ne.get(R),Fn=ne.get($);j.bindFramebuffer(E.READ_FRAMEBUFFER,un),j.bindFramebuffer(E.DRAW_FRAMEBUFFER,fn);for(let Jn=0;Jn<Ce;Jn++)Vt?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ui.__webglTexture,G,ze+Jn):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ui.__webglTexture,G),Ii?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Fn.__webglTexture,he,sn+Jn):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Fn.__webglTexture,he),G!==0?E.blitFramebuffer(He,Ge,Me,Pe,tt,Et,Me,Pe,E.COLOR_BUFFER_BIT,E.NEAREST):Ii?E.copyTexSubImage3D(Mn,he,tt,Et,sn+Jn,He,Ge,Me,Pe):E.copyTexSubImage2D(Mn,he,tt,Et,He,Ge,Me,Pe);j.bindFramebuffer(E.READ_FRAMEBUFFER,null),j.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Ii?R.isDataTexture||R.isData3DTexture?E.texSubImage3D(Mn,he,tt,Et,sn,Me,Pe,Ce,yt,Xe,Jt.data):$.isCompressedArrayTexture?E.compressedTexSubImage3D(Mn,he,tt,Et,sn,Me,Pe,Ce,yt,Jt.data):E.texSubImage3D(Mn,he,tt,Et,sn,Me,Pe,Ce,yt,Xe,Jt):R.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,he,tt,Et,Me,Pe,yt,Xe,Jt.data):R.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,he,tt,Et,Jt.width,Jt.height,yt,Jt.data):E.texSubImage2D(E.TEXTURE_2D,he,tt,Et,Me,Pe,yt,Xe,Jt);E.pixelStorei(E.UNPACK_ROW_LENGTH,Tt),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ji),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Po),E.pixelStorei(E.UNPACK_SKIP_ROWS,hi),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Va),he===0&&$.generateMipmaps&&E.generateMipmap(Mn),j.unbindTexture()},this.copyTextureToTexture3D=function(R,$,ee=null,J=null,G=0){return Mu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,$,ee,J,G)},this.initRenderTarget=function(R){ne.get(R).__webglFramebuffer===void 0&&A.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),j.unbindTexture()},this.resetState=function(){C=0,T=0,P=null,j.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}const pL=ur({__name:"IceCanvas",setup(n){const e=Fa(),t=Lt(null);let i=null,r=null,s=null,o=null,a=[],l=null,c=null,u=[],f=0,h=0,d=0,g=0;function _(){o!==null&&(cancelAnimationFrame(o),o=null);const y=v=>{v.geometry.dispose(),Array.isArray(v.material)?v.material.forEach(D=>D.dispose()):v.material.dispose(),v.children.forEach(D=>{if(D.geometry&&D.geometry.dispose(),D.material){const I=D.material;Array.isArray(I)?I.forEach(k=>k.dispose()):I.dispose()}})};a.forEach(y),a=[],u.forEach(y),u=[],l&&(y(l),l=null),c&&(y(c),c=null),i&&(i.dispose(),i.forceContextLoss(),i.domElement.parentNode&&i.domElement.parentNode.removeChild(i.domElement),i=null),r=null,s=null,e.stopFpsMonitor()}function m(){if(!t.value)return;const y=window.innerWidth,v=window.innerHeight;r=new vC,r.fog=new pm(e.isDark?462622:15397624,.025),s=new xi(60,y/v,.1,200),s.position.set(0,0,12),i=new dL({antialias:!0,alpha:!0,powerPreference:"high-performance"}),i.setSize(y,v),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.toneMapping=yy,i.toneMappingExposure=1.4,t.value.appendChild(i.domElement);const D=new RC(9494767,.4);r.add(D);const I=new Dh(54015,3,30);I.position.set(8,6,8),r.add(I);const k=new Dh(9494767,2,25);k.position.set(-8,-4,5),r.add(k);const F=new Dh(30646,1.5,30);F.position.set(0,5,-8),r.add(F);const q=new CC(16777215,.3);q.position.set(3,8,5),r.add(q),p(),M(),b(),x(),w(),e.startFpsMonitor()}function p(){if(!r)return;const y=[{size:2.2,pos:[0,.5,0],rotSpeed:.002,detail:1,floatAmp:.4},{size:.9,pos:[-4,2,-3],rotSpeed:.004,detail:0,floatAmp:.6},{size:.7,pos:[4.5,-1,-2],rotSpeed:.005,detail:0,floatAmp:.5},{size:.55,pos:[-3,-2.5,-4],rotSpeed:.006,detail:0,floatAmp:.7},{size:.8,pos:[3,3,-3],rotSpeed:.003,detail:0,floatAmp:.45},{size:.45,pos:[5.5,1,-4],rotSpeed:.007,detail:0,floatAmp:.8},{size:.35,pos:[-5,0,-5],rotSpeed:.005,detail:0,floatAmp:.55},{size:.25,pos:[-7,3,-8],rotSpeed:.008,detail:0,floatAmp:.3},{size:.3,pos:[7,-3,-7],rotSpeed:.006,detail:0,floatAmp:.35},{size:.2,pos:[0,-5,-6],rotSpeed:.009,detail:0,floatAmp:.4}];y.forEach((v,D)=>{const I=new Ju(v.size,v.detail),k=new bC({color:D===0?10545125:9494767,metalness:0,roughness:.02,transmission:.92,thickness:v.size*.8,ior:1.31,envMapIntensity:1.5,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:D===0?.9:.8,side:tr,emissive:54015,emissiveIntensity:D===0?.05:.02}),F=new ii(I,k);F.position.set(v.pos[0],v.pos[1],v.pos[2]),F.userData={rotSpeed:v.rotSpeed,originalPos:[...v.pos],floatOffset:Math.random()*Math.PI*2,floatAmp:v.floatAmp,isMain:D===0,orbitAngle:D/y.length*Math.PI*2,orbitSpeed:3e-4+Math.random()*3e-4,orbitRadius:D===0?0:Math.sqrt(v.pos[0]**2+v.pos[2]**2)};const q=new Ju(v.size*1.003,v.detail),O=new oa({color:54015,wireframe:!0,transparent:!0,opacity:D===0?.18:.1});if(F.add(new ii(q,O)),D===0){const V=new Qu(v.size*.4,16,16),H=new oa({color:54015,transparent:!0,opacity:.08});F.add(new ii(V,H))}r.add(F),a.push(F)})}function M(){if(!r)return;const y=800,v=new Float32Array(y*3),D=new Float32Array(y*3);for(let F=0;F<y;F++)v[F*3]=(Math.random()-.5)*40,v[F*3+1]=(Math.random()-.5)*30,v[F*3+2]=(Math.random()-.5)*30,D[F*3]=(Math.random()-.5)*.002,D[F*3+1]=(Math.random()-.5)*.002,D[F*3+2]=(Math.random()-.5)*.002;const I=new Yi;I.setAttribute("position",new lr(v,3)),I.userData={velocities:D};const k=new Wy({color:e.isDark?10545125:30646,size:.05,transparent:!0,opacity:.7,sizeAttenuation:!0,blending:Yu});l=new SC(I,k),r.add(l)}function b(){if(!r)return;const y=new _m(5,5.05,128),v=new oa({color:54015,transparent:!0,opacity:.06,side:tr});c=new ii(y,v),c.rotation.x=Math.PI*.4,r.add(c)}function x(){if(!r)return;[{pos:[-6,4,-6],size:.8,color:54015,opacity:.04},{pos:[6,-3,-5],size:1.2,color:9494767,opacity:.03},{pos:[0,6,-8],size:.6,color:46296,opacity:.05},{pos:[-8,-2,-3],size:1,color:10545125,opacity:.03}].forEach(v=>{const D=new Qu(v.size,16,16),I=new oa({color:v.color,transparent:!0,opacity:v.opacity,blending:Yu}),k=new ii(D,I);k.position.set(v.pos[0],v.pos[1],v.pos[2]),k.userData.floatOffset=Math.random()*Math.PI*2,r.add(k),u.push(k)})}function w(){if(!i||!r||!s)return;o=requestAnimationFrame(w);const y=Date.now()*.001;d+=(g-d)*.05;const v=d/Math.max(document.documentElement.scrollHeight-window.innerHeight,1);if(a.forEach((O,V)=>{const H=O.userData,se=1+v*2;if(O.rotation.x+=H.rotSpeed*se,O.rotation.y+=H.rotSpeed*.7*se,O.position.y=H.originalPos[1]+Math.sin(y*.8+H.floatOffset)*H.floatAmp,!H.isMain&&H.orbitRadius>0){H.orbitAngle+=H.orbitSpeed+v*.002;const N=Math.min(v*3,1),ge=H.originalPos[0]+Math.sin(H.orbitAngle)*N*2,Ee=H.originalPos[2]+Math.cos(H.orbitAngle)*N*1.5;O.position.x+=(ge-O.position.x)*.02,O.position.z+=(Ee-O.position.z)*.02}if(H.isMain){const N=1+Math.sin(y*.5)*.03,ge=1-v*.15,Ee=N*ge;O.scale.set(Ee,Ee,Ee);const je=O.material;je.emissiveIntensity=.03+Math.sin(y*1.5)*.02+v*.04}H.isMain||(O.rotation.z+=f*.001)}),c){c.rotation.z+=.001;const O=1+v*.5;c.scale.set(O,O,1),c.material.opacity=.06+v*.04}if(l){const O=l.geometry.getAttribute("position"),V=l.geometry.userData.velocities;for(let se=0;se<O.count;se++){O.array[se*3]+=V[se*3],O.array[se*3+1]+=V[se*3+1],O.array[se*3+2]+=V[se*3+2];const N=O.array[se*3]-f*5,ge=O.array[se*3+1]- -h*5,Ee=Math.sqrt(N*N+ge*ge);if(Ee<3){const je=(3-Ee)*5e-4;O.array[se*3]+=N*je,O.array[se*3+1]+=ge*je}Math.abs(O.array[se*3])>20&&(V[se*3]*=-1),Math.abs(O.array[se*3+1])>15&&(V[se*3+1]*=-1),Math.abs(O.array[se*3+2])>15&&(V[se*3+2]*=-1)}O.needsUpdate=!0,l.rotation.y+=2e-4,l.rotation.x+=5e-5;const H=1+v*.3;l.scale.set(H,H,H)}u.forEach(O=>{O.position.y+=Math.sin(y*.3+O.userData.floatOffset)*.003;const V=O.material;V.opacity=.03+Math.sin(y*.5+O.userData.floatOffset)*.02});let D=0,I=0,k=10,F=0,q=0;if(v<.25){const O=v/.25;D=hn.lerp(0,-6,O),I=hn.lerp(0,2.5,O),k=hn.lerp(10,8,O),q=hn.lerp(0,-2,O),F=hn.lerp(0,1,O)}else if(v<.6){const O=(v-.25)/.35;D=hn.lerp(-6,7,O),I=hn.lerp(2.5,-2,O),k=hn.lerp(8,6.5,O),q=hn.lerp(-2,3,O),F=hn.lerp(1,-1,O)}else if(v<.85){const O=(v-.6)/.25;D=hn.lerp(7,0,O),I=hn.lerp(-2,7,O),k=hn.lerp(6.5,7.5,O),q=hn.lerp(3,0,O),F=hn.lerp(-1,0,O)}else{const O=(v-.85)/.15;D=hn.lerp(0,0,O),I=hn.lerp(7,-.5,O),k=hn.lerp(7.5,4.8,O),q=0,F=hn.lerp(0,-.5,O)}if(D+=f*1.5,I+=-h*1,s.position.x+=(D-s.position.x)*.04,s.position.y+=(I-s.position.y)*.04,s.position.z+=(k-s.position.z)*.04,s.lookAt(q,F,0),r.fog){const O=e.isDark?462622:15397624;r.fog.color.setHex(O)}i.render(r,s)}function C(y){f=y.clientX/window.innerWidth*2-1,h=y.clientY/window.innerHeight*2-1}function T(){g=window.scrollY,e.updateScrollProgress()}function P(){if(!s||!i)return;const y=window.innerWidth,v=window.innerHeight;s.aspect=y/v,s.updateProjectionMatrix(),i.setSize(y,v)}return Di(()=>{e.mode==="immersive"&&m(),window.addEventListener("mousemove",C,{passive:!0}),window.addEventListener("resize",P,{passive:!0}),window.addEventListener("scroll",T,{passive:!0})}),os(()=>{_(),window.removeEventListener("mousemove",C),window.removeEventListener("resize",P),window.removeEventListener("scroll",T)}),wr(()=>e.mode,y=>{y==="immersive"?setTimeout(()=>m(),100):_()}),(y,v)=>Ae(e).mode==="immersive"?(qe(),at("div",{key:0,ref_key:"containerRef",ref:t,class:"ice-canvas-container","aria-hidden":"true"},null,512)):Na("",!0)}}),mL={key:0,class:"fixed inset-0 pointer-events-none z-[2] overflow-hidden","aria-hidden":"true"},gL=["stroke"],_L=["stroke"],vL=ur({__name:"SnowParticles",setup(n){const e=Fa(),t=Lt([]);let i=null;const r=["circle","snowflake","snowflake","diamond","circle","snowflake"];function s(a=55){t.value=Array.from({length:a},(l,c)=>({id:c,x:Math.random()*100,y:Math.random()*100-10,size:Math.random()*12+5,opacity:Math.random()*.4+.1,speed:Math.random()*.15+.03,drift:(Math.random()-.5)*.15,shimmer:Math.random()*Math.PI*2,rotation:Math.random()*360,rotSpeed:(Math.random()-.5)*.8,shape:r[c%r.length]}))}function o(){const a=Date.now()*.001;t.value.forEach(l=>{l.y+=l.speed,l.x+=l.drift+Math.sin(l.y*.012+l.shimmer)*.12,l.rotation+=l.rotSpeed,l.opacity=(Math.sin(a*1.5+l.shimmer)*.12+.3)*(l.size/17),l.y>105&&(l.y=-5,l.x=Math.random()*100),l.x>105&&(l.x=-5),l.x<-5&&(l.x=105)}),i=requestAnimationFrame(o)}return Di(()=>{s(),o()}),os(()=>{i!==null&&(cancelAnimationFrame(i),i=null)}),(a,l)=>Ae(e).mode==="immersive"?(qe(),at("div",mL,[(qe(!0),at(jt,null,ir(t.value,c=>(qe(),at(jt,{key:c.id},[c.shape==="snowflake"?(qe(),at("svg",{key:0,class:"absolute",style:Vi({left:c.x+"%",top:c.y+"%",width:c.size+"px",height:c.size+"px",opacity:c.opacity,transform:`rotate(${c.rotation}deg)`,filter:`drop-shadow(0 0 ${c.size*.4}px ${Ae(e).isDark?"rgba(160,231,229,0.4)":"rgba(0,119,182,0.3)"})`}),viewBox:"0 0 24 24",fill:"none",stroke:Ae(e).isDark?"#e0f7fa":"#0077b6","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},[...l[0]||(l[0]=[dv('<line x1="12" y1="2" x2="12" y2="22"></line><line x1="3.27" y1="7" x2="20.73" y2="17"></line><line x1="3.27" y1="17" x2="20.73" y2="7"></line><line x1="12" y1="2" x2="9" y2="5"></line><line x1="12" y1="2" x2="15" y2="5"></line><line x1="12" y1="22" x2="9" y2="19"></line><line x1="12" y1="22" x2="15" y2="19"></line><line x1="3.27" y1="7" x2="5.5" y2="9.5"></line><line x1="20.73" y1="7" x2="18.5" y2="9.5"></line><line x1="3.27" y1="17" x2="5.5" y2="14.5"></line><line x1="20.73" y1="17" x2="18.5" y2="14.5"></line>',11)])],12,gL)):c.shape==="diamond"?(qe(),at("svg",{key:1,class:"absolute",style:Vi({left:c.x+"%",top:c.y+"%",width:c.size*.7+"px",height:c.size*.7+"px",opacity:c.opacity*.8,transform:`rotate(${c.rotation}deg)`,filter:`drop-shadow(0 0 ${c.size*.3}px ${Ae(e).isDark?"rgba(160,231,229,0.3)":"rgba(0,119,182,0.25)"})`}),viewBox:"0 0 24 24",fill:"none",stroke:Ae(e).isDark?"#b2ebf2":"#0077b6","stroke-width":"1.5","stroke-linejoin":"round"},[...l[1]||(l[1]=[X("polygon",{points:"12,2 22,12 12,22 2,12"},null,-1),X("line",{x1:"12",y1:"2",x2:"12",y2:"22",opacity:"0.4"},null,-1),X("line",{x1:"2",y1:"12",x2:"22",y2:"12",opacity:"0.4"},null,-1)])],12,_L)):(qe(),at("div",{key:2,class:"absolute rounded-full",style:Vi({left:c.x+"%",top:c.y+"%",width:c.size*.35+"px",height:c.size*.35+"px",opacity:c.opacity,background:Ae(e).isDark?"radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(160,231,229,0.2) 100%)":"radial-gradient(circle, rgba(0,119,182,0.8) 0%, rgba(0,180,216,0.15) 100%)",boxShadow:Ae(e).isDark?`0 0 ${c.size*.5}px rgba(160,231,229,0.2)`:`0 0 ${c.size*.5}px rgba(0,119,182,0.2)`})},null,4))],64))),128))])):Na("",!0)}}),xL={id:"hero",class:"relative min-h-screen flex items-center justify-center overflow-hidden"},yL={id:"hero-content",class:"relative z-10 text-center px-4 max-w-5xl mx-auto pt-12"},SL={id:"hero-title",class:"text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-[0.95] tracking-tight flex flex-wrap justify-center gap-x-4 sm:gap-x-6",style:{perspective:"600px"}},ML={class:"hero-word hero-name text-gradient"},bL={id:"hero-subtitle",class:"text-lg sm:text-xl md:text-2xl font-medium mb-6",style:{color:"var(--text-secondary)",opacity:"0"}},EL={id:"hero-tagline",class:"text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed",style:{color:"var(--text-secondary)",opacity:"0"}},TL={id:"hero-ctas",class:"flex flex-col sm:flex-row items-center justify-center gap-4"},wL=["href"],AL={class:"magnetic-inner flex items-center gap-2"},CL={id:"btn-download-cv",href:"/Mohammad_Al_Furqon_CV.pdf",download:"Mohammad_Al_Furqon_CV.pdf","data-cursor-text":"GET PDF",class:"magnetic btn-frost flex items-center gap-2"},RL={class:"magnetic-inner flex items-center gap-2"},PL=["href"],DL={class:"magnetic-inner flex items-center gap-2"},LL={class:"magnetic-inner"},IL=ur({__name:"HeroSection",setup(n){Fa();function e(){var t;(t=document.querySelector("#about"))==null||t.scrollIntoView({behavior:"smooth"})}return(t,i)=>(qe(),at("section",xL,[i[4]||(i[4]=dv('<div class="absolute inset-0 -z-10" style="background:var(--gradient-hero);"></div><div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none"><div class="absolute w-[600px] h-[600px] rounded-full animate-pulse-glow opacity-20" style="background:radial-gradient(circle, var(--accent-cyan), transparent 70%);top:10%;left:-10%;"></div><div class="absolute w-[400px] h-[400px] rounded-full animate-pulse-glow opacity-15" style="background:radial-gradient(circle, var(--accent-ice), transparent 70%);bottom:10%;right:-5%;animation-delay:1.5s;"></div></div><div class="noise-overlay"></div>',3)),X("div",yL,[X("h1",SL,[i[0]||(i[0]=X("span",{class:"hero-word hero-greeting",style:{color:"var(--text-primary)"}},"Hi, I'm",-1)),X("span",ML,gt(Ae(ti).name.split(" ")[2]),1)]),X("p",bL,gt(Ae(ti).title),1),X("p",EL,gt(Ae(ti).tagline),1),X("div",TL,[X("a",{id:"btn-contact",href:`mailto:${Ae(ti).email}`,"data-cursor-text":"CONTACT",class:"magnetic btn-primary flex items-center gap-2"},[X("span",AL,[Qe(Ae(_y),{size:18}),i[1]||(i[1]=Ei(" Get in Touch ",-1))])],8,wL),X("a",CL,[X("span",RL,[Qe(Ae(hw),{size:18}),i[2]||(i[2]=Ei(" Download CV ",-1))])]),X("a",{id:"btn-linkedin",href:`https://${Ae(ti).linkedin}`,target:"_blank",rel:"noopener noreferrer","data-cursor-text":"LINKEDIN",class:"magnetic btn-frost flex items-center gap-2"},[X("span",DL,[Qe(Ae(dw),{size:18}),i[3]||(i[3]=Ei(" LinkedIn ",-1))])],8,PL)])]),X("button",{class:"absolute bottom-8 left-1/2 -translate-x-1/2 animate-float cursor-pointer magnetic",style:{color:"var(--text-secondary)"},"data-cursor-text":"SCROLL",onClick:e,"aria-label":"Scroll to about section"},[X("span",LL,[Qe(Ae(lw),{size:28})])])]))}}),UL={id:"about",class:"py-24 px-4 sm:px-6"},NL={class:"max-w-6xl mx-auto"},OL={class:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"},FL={class:"lg:col-span-5 lg:sticky lg:top-28 space-y-8"},kL={class:"grid grid-cols-2 gap-4 pt-4 border-t border-[var(--card-border)]"},BL={class:"glass-card p-4"},zL=["data-count-to"],HL={class:"glass-card p-4"},VL=["data-count-to"],GL={class:"lg:col-span-7 space-y-6"},WL={class:"glass-card p-6 sm:p-8 reveal-card relative overflow-hidden"},XL={class:"flex items-center gap-3 mb-4"},$L={class:"w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",style:{background:"var(--gradient-accent)"}},qL={class:"text-sm sm:text-base leading-relaxed",style:{color:"var(--text-secondary)"}},YL={class:"space-y-4"},jL={class:"text-sm font-mono uppercase tracking-widest text-[var(--accent-cyan)] font-semibold flex items-center gap-2"},KL={class:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2"},ZL={class:"font-bold text-base sm:text-lg",style:{color:"var(--text-primary)"}},JL={class:"text-xs font-mono px-3 py-1 rounded-full self-start",style:{background:"var(--bg-secondary)",color:"var(--accent-cyan)",border:"1px solid var(--card-border)"}},QL={class:"text-sm font-medium mb-3",style:{color:"var(--accent-cyan)"}},eI={class:"text-xs font-mono",style:{color:"var(--text-secondary)"}},tI={class:"glass-card p-6 sm:p-8 reveal-card"},nI={class:"flex items-center gap-3 mb-6"},iI={class:"w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",style:{background:"var(--gradient-accent)"}},rI={class:"space-y-5"},sI={class:"flex justify-between items-center mb-2"},oI={class:"text-sm font-semibold",style:{color:"var(--text-primary)"}},aI={class:"text-xs font-mono",style:{color:"var(--accent-cyan)"}},lI={class:"w-full h-2 rounded-full overflow-hidden",style:{background:"var(--bg-secondary)"}},cI=ur({__name:"AboutSection",setup(n){return(e,t)=>(qe(),at("section",UL,[X("div",NL,[X("div",OL,[X("div",FL,[t[4]||(t[4]=X("div",null,[X("span",{class:"text-xs font-mono tracking-widest uppercase text-[var(--accent-cyan)] font-semibold mb-2 block"}," 01 // Overview "),X("h2",{class:"section-title reveal-title text-4xl sm:text-5xl font-black mb-4"},[X("span",{class:"text-gradient"},"About Me")]),X("p",{class:"text-base text-[var(--text-secondary)] leading-relaxed"}," Software Engineer & Fullstack Developer specializing in high-performance web systems, database normalization, and academic research. ")],-1)),X("div",kL,[t[2]||(t[2]=X("div",{class:"glass-card p-4"},[X("p",{class:"text-3xl sm:text-4xl font-black font-mono text-[var(--accent-cyan)]","data-count-to":"3.77"}," 0 "),X("p",{class:"text-xs font-mono text-[var(--text-secondary)] mt-1 uppercase tracking-wider"}," UNS GPA (Informatics) ")],-1)),X("div",BL,[X("p",{class:"text-3xl sm:text-4xl font-black font-mono text-[var(--accent-cyan)]","data-count-to":Ae(gu).length}," 0 ",8,zL),t[0]||(t[0]=X("p",{class:"text-xs font-mono text-[var(--text-secondary)] mt-1 uppercase tracking-wider"}," Industry & Academic Roles ",-1))]),X("div",HL,[X("p",{class:"text-3xl sm:text-4xl font-black font-mono text-[var(--accent-cyan)]","data-count-to":Ae(py).length}," 0 ",8,VL),t[1]||(t[1]=X("p",{class:"text-xs font-mono text-[var(--text-secondary)] mt-1 uppercase tracking-wider"}," Published Books & Thesis ",-1))]),t[3]||(t[3]=X("div",{class:"glass-card p-4"},[X("p",{class:"text-3xl sm:text-4xl font-black font-mono text-[var(--accent-cyan)]","data-count-to":"3"}," 0 "),X("p",{class:"text-xs font-mono text-[var(--text-secondary)] mt-1 uppercase tracking-wider"}," Languages Spoken ")],-1))])]),X("div",GL,[X("div",WL,[X("div",XL,[X("div",$L,[Qe(Ae(Ew),{size:20,color:"#fff"})]),t[5]||(t[5]=X("div",null,[X("h3",{class:"text-lg font-bold",style:{color:"var(--text-primary)"}}," Background & Philosophy "),X("span",{class:"text-xs font-mono text-[var(--accent-cyan)]"},"Universitas Sebelas Maret Graduate")],-1))]),X("p",qL,gt(Ae(ti).about),1)]),X("div",YL,[X("h3",jL,[Qe(Ae(gy),{size:16}),t[6]||(t[6]=Ei(" Academic History ",-1))]),(qe(!0),at(jt,null,ir(Ae(jT),(i,r)=>(qe(),at("div",{key:r,class:"glass-card p-6 reveal-card"},[X("div",KL,[X("h4",ZL,gt(i.institution),1),X("span",JL," GPA: "+gt(i.gpa),1)]),X("p",QL,gt(i.degree),1),X("div",eI,gt(i.period),1)]))),128))]),X("div",tI,[X("div",nI,[X("div",iI,[Qe(Ae(my),{size:20,color:"#fff"})]),t[7]||(t[7]=X("h3",{class:"text-lg font-bold",style:{color:"var(--text-primary)"}}," Languages ",-1))]),X("div",rI,[(qe(!0),at(jt,null,ir(Ae(JT),i=>(qe(),at("div",{key:i.name},[X("div",sI,[X("span",oI,gt(i.name),1),X("span",aI,gt(i.level),1)]),X("div",lI,[X("div",{class:"h-full rounded-full transition-all duration-1000 ease-out",style:Vi({width:i.percentage+"%",background:"var(--gradient-accent)"})},null,4)])]))),128))])])])])])]))}}),uI={id:"experience",class:"relative"},fI={id:"experience-pin",class:"min-h-screen flex flex-col justify-center overflow-hidden py-12"},hI={class:"px-6 md:px-16 mb-8 max-w-5xl"},dI={class:"section-subtitle reveal-subtitle text-base sm:text-lg"},pI={id:"experience-track",class:"flex gap-6 px-6 md:px-16 w-max items-stretch"},mI={class:"absolute top-4 right-6 text-6xl sm:text-7xl font-black font-mono select-none pointer-events-none transition-opacity duration-300 opacity-10 group-hover:opacity-25",style:{color:"var(--accent-cyan)"}},gI={class:"mb-4"},_I={class:"inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full mb-3",style:{background:"var(--bg-secondary)",color:"var(--accent-cyan)",border:"1px solid var(--card-border)"}},vI={class:"text-xl sm:text-2xl font-bold leading-tight mb-1",style:{color:"var(--text-primary)"}},xI={class:"flex items-center gap-1.5 text-sm font-semibold",style:{color:"var(--accent-cyan)"}},yI={class:"space-y-2.5 my-4"},SI={class:"pt-4 mt-auto flex items-center justify-between border-t border-[var(--card-border)]"},MI={class:"text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-widest"},bI=ur({__name:"ExperienceSection",setup(n){wt.registerPlugin(rt);let e=null;Di(async()=>{await Ua(),setTimeout(t,300)});function t(){if(window.innerWidth<768)return;const i=document.querySelector("#experience-pin"),r=document.querySelector("#experience-track");if(!i||!r)return;const s=r.scrollWidth-window.innerWidth+120;e=wt.to(r,{x:-s,ease:"none",scrollTrigger:{trigger:i,pin:!0,scrub:.8,start:"top top",end:()=>`+=${s}`,invalidateOnRefresh:!0}}).scrollTrigger||null}return os(()=>{e&&e.kill()}),(i,r)=>(qe(),at("section",uI,[X("div",fI,[X("div",hI,[r[0]||(r[0]=X("h2",{class:"section-title reveal-title text-4xl sm:text-5xl font-black"},[X("span",{class:"text-gradient"},"Work Experience")],-1)),X("p",dI,gt(Ae(gu).length)+" Roles — Scroll to explore career trajectory ",1)]),X("div",pI,[(qe(!0),at(jt,null,ir(Ae(gu),(s,o)=>(qe(),at("div",{key:s.company+s.role,"data-cursor-text":"VIEW ROLE",class:"glass-card w-[340px] sm:w-[420px] md:w-[480px] p-6 sm:p-8 flex-shrink-0 flex flex-col justify-between relative group hover:border-[var(--accent-cyan)] transition-all duration-300"},[X("span",mI,gt((o+1).toString().padStart(2,"0")),1),X("div",null,[X("div",gI,[X("span",_I,[Qe(Ae(aw),{size:12}),Ei(" "+gt(s.period),1)]),X("h3",vI,gt(s.company),1),X("p",xI,[Qe(Ae(ow),{size:14}),Ei(" "+gt(s.role),1)])]),X("ul",yI,[(qe(!0),at(jt,null,ir(s.highlights,(a,l)=>(qe(),at("li",{key:l,class:"flex gap-2 text-xs sm:text-sm leading-relaxed",style:{color:"var(--text-secondary)"}},[r[1]||(r[1]=X("span",{class:"text-[var(--accent-cyan)] mt-0.5 flex-shrink-0"},"▹",-1)),X("span",null,gt(a),1)]))),128))])]),X("div",SI,[X("span",MI," Role "+gt(o+1)+" of "+gt(Ae(gu).length),1),Qe(Ae(cw),{size:16,class:"text-[var(--accent-cyan)] transition-transform duration-300 group-hover:translate-x-1"})])]))),128))])])]))}}),EI={id:"skills",class:"py-24 px-4 sm:px-6"},TI={class:"max-w-6xl mx-auto"},wI={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"},AI={class:"flex items-center gap-3 mb-4"},CI={class:"w-9 h-9 rounded-lg flex items-center justify-center",style:{background:"var(--gradient-accent)"}},RI={class:"font-bold text-base",style:{color:"var(--text-primary)"}},PI={class:"flex flex-wrap gap-2"},DI={class:"mb-16"},LI={class:"text-2xl font-bold mb-8 text-center",style:{color:"var(--text-primary)"}},II={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},UI={class:"flex items-start gap-3"},NI={class:"w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",style:{background:"var(--gradient-accent)"}},OI={class:"font-bold text-base mb-1",style:{color:"var(--text-primary)"}},FI={class:"text-sm leading-relaxed",style:{color:"var(--text-secondary)"}},kI={class:"text-2xl font-bold mb-8 text-center",style:{color:"var(--text-primary)"}},BI={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},zI={class:"font-bold text-base mb-1",style:{color:"var(--text-primary)"}},HI={class:"text-sm font-medium mb-1",style:{color:"var(--accent-cyan)"}},VI={class:"text-xs font-mono mb-3",style:{color:"var(--text-secondary)"}},GI={class:"text-sm leading-relaxed",style:{color:"var(--text-secondary)"}},WI=ur({__name:"SkillsSection",setup(n){const e={"book-open":rw,"graduation-cap":gy},t={Frontend:i_,Backend:yw,Database:fw,"DevOps & Tools":uw,"AI & ML":sw,Security:Sw};return(i,r)=>(qe(),at("section",EI,[X("div",TI,[r[2]||(r[2]=X("div",{class:"text-center mb-16"},[X("h2",{class:"section-title reveal-title"},[X("span",{class:"text-gradient"},"Skills & More")]),X("p",{class:"section-subtitle reveal-subtitle"},"Technologies, achievements, and community involvement")],-1)),X("div",wI,[(qe(!0),at(jt,null,ir(Ae(ZT),s=>(qe(),at("div",{key:s.name,class:"glass-card p-6 reveal-card"},[X("div",AI,[X("div",CI,[(qe(),zr(Am(t[s.name]||Ae(i_)),{size:18,color:"#fff"}))]),X("h3",RI,gt(s.name),1)]),X("div",PI,[(qe(!0),at(jt,null,ir(s.items,o=>(qe(),at("span",{key:o,class:"reveal-tag text-xs font-mono px-2.5 py-1.5 rounded-lg transition-all duration-200 hover:scale-105",style:{background:"var(--bg-secondary)",color:"var(--text-secondary)",border:"1px solid var(--card-border)"}},gt(o),1))),128))])]))),128))]),X("div",DI,[X("h3",LI,[Qe(Ae(n_),{size:24,class:"inline mr-2",style:{color:"var(--accent-cyan)"}}),r[0]||(r[0]=Ei(" Achievements ",-1))]),X("div",II,[(qe(!0),at(jt,null,ir(Ae(py),(s,o)=>(qe(),at("div",{key:o,class:"glass-card p-6 reveal-card"},[X("div",UI,[X("div",NI,[(qe(),zr(Am(e[s.icon]||Ae(n_)),{size:20,color:"#fff"}))]),X("div",null,[X("h4",OI,gt(s.title),1),X("p",FI,gt(s.description),1)])])]))),128))])]),X("div",null,[X("h3",kI,[Qe(Ae(Tw),{size:24,class:"inline mr-2",style:{color:"var(--accent-cyan)"}}),r[1]||(r[1]=Ei(" Organizations & Volunteer ",-1))]),X("div",BI,[(qe(!0),at(jt,null,ir(Ae(KT),(s,o)=>(qe(),at("div",{key:o,class:"glass-card p-6 reveal-card"},[X("h4",zI,gt(s.name),1),X("p",HI,gt(s.role),1),X("p",VI,gt(s.period),1),X("p",GI,gt(s.description),1)]))),128))])])])]))}}),XI={id:"contact",class:"py-24 px-4 sm:px-6"},$I={class:"max-w-4xl mx-auto"},qI={class:"grid grid-cols-1 md:grid-cols-2 gap-8"},YI={class:"space-y-4"},jI=["href"],KI={class:"w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110",style:{background:"var(--gradient-accent)"}},ZI={class:"text-sm font-medium",style:{color:"var(--text-primary)"}},JI=["href"],QI={class:"w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110",style:{background:"var(--gradient-accent)"}},e3={class:"text-sm font-medium",style:{color:"var(--text-primary)"}},t3=["href"],n3={class:"w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110",style:{background:"var(--gradient-accent)"}},i3={class:"text-sm font-medium",style:{color:"var(--text-primary)"}},r3={id:"btn-download-cv-contact",href:"/Mohammad_Al_Furqon_CV.pdf",download:"Mohammad_Al_Furqon_CV.pdf",class:"glass-card p-5 flex items-center gap-4 group",style:{"border-color":"var(--accent-cyan)","border-style":"dashed"}},s3={class:"w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110",style:{background:"var(--gradient-accent)"}},o3={id:"btn-send-message",type:"submit",class:"btn-primary w-full flex items-center justify-center gap-2"},a3={class:"py-8 px-4 text-center",style:{"border-top":"1px solid var(--card-border)"}},l3={class:"text-sm flex items-center justify-center gap-1.5",style:{color:"var(--text-secondary)"}},c3={class:"font-semibold",style:{color:"var(--text-primary)"}},u3=ur({__name:"ContactSection",setup(n){const e=Lt(""),t=Lt(""),i=Lt("");function r(){const s=encodeURIComponent(`Portfolio Contact from ${e.value}`),o=encodeURIComponent(`Name: ${e.value}
Email: ${t.value}

${i.value}`);window.open(`mailto:${ti.email}?subject=${s}&body=${o}`,"_blank")}return(s,o)=>(qe(),at(jt,null,[X("section",XI,[X("div",$I,[o[11]||(o[11]=X("div",{class:"text-center mb-16"},[X("h2",{class:"section-title reveal-title"},[X("span",{class:"text-gradient"},"Get in Touch")]),X("p",{class:"section-subtitle reveal-subtitle"},"Have a project in mind? Let's talk!")],-1)),X("div",qI,[X("div",YI,[X("a",{href:`mailto:${Ae(ti).email}`,class:"glass-card p-5 flex items-center gap-4 group"},[X("div",KI,[Qe(Ae(_y),{size:22,color:"#fff"})]),X("div",null,[o[3]||(o[3]=X("p",{class:"text-xs font-mono mb-0.5",style:{color:"var(--text-secondary)"}},"Email",-1)),X("p",ZI,gt(Ae(ti).email),1)])],8,jI),X("a",{href:`https://${Ae(ti).linkedin}`,target:"_blank",rel:"noopener noreferrer",class:"glass-card p-5 flex items-center gap-4 group"},[X("div",QI,[Qe(Ae(gw),{size:22,color:"#fff"})]),X("div",null,[o[4]||(o[4]=X("p",{class:"text-xs font-mono mb-0.5",style:{color:"var(--text-secondary)"}},"LinkedIn",-1)),X("p",e3,gt(Ae(ti).linkedin),1)])],8,JI),X("a",{href:`https://${Ae(ti).website}`,target:"_blank",rel:"noopener noreferrer",class:"glass-card p-5 flex items-center gap-4 group"},[X("div",n3,[Qe(Ae(my),{size:22,color:"#fff"})]),X("div",null,[o[5]||(o[5]=X("p",{class:"text-xs font-mono mb-0.5",style:{color:"var(--text-secondary)"}},"Website",-1)),X("p",i3,gt(Ae(ti).website),1)])],8,t3),X("a",r3,[X("div",s3,[Qe(Ae(pw),{size:22,color:"#fff"})]),o[6]||(o[6]=X("div",null,[X("p",{class:"text-xs font-mono mb-0.5",style:{color:"var(--text-secondary)"}},"Resume / CV"),X("p",{class:"text-sm font-medium",style:{color:"var(--accent-cyan)"}}," Download PDF ")],-1))])]),X("form",{class:"glass-card p-6 md:p-8 space-y-4",onSubmit:ou(r,["prevent"])},[X("div",null,[o[7]||(o[7]=X("label",{for:"contact-name",class:"block text-xs font-mono mb-1.5",style:{color:"var(--text-secondary)"}}," Your Name ",-1)),Uf(X("input",{id:"contact-name","onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),type:"text",required:"",placeholder:"John Doe",class:"w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 focus:ring-2",style:{background:"var(--bg-secondary)",color:"var(--text-primary)",border:"1px solid var(--card-border)","--tw-ring-color":"var(--accent-cyan)"}},null,512),[[Gf,e.value]])]),X("div",null,[o[8]||(o[8]=X("label",{for:"contact-email",class:"block text-xs font-mono mb-1.5",style:{color:"var(--text-secondary)"}}," Your Email ",-1)),Uf(X("input",{id:"contact-email","onUpdate:modelValue":o[1]||(o[1]=a=>t.value=a),type:"email",required:"",placeholder:"john@example.com",class:"w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 focus:ring-2",style:{background:"var(--bg-secondary)",color:"var(--text-primary)",border:"1px solid var(--card-border)","--tw-ring-color":"var(--accent-cyan)"}},null,512),[[Gf,t.value]])]),X("div",null,[o[9]||(o[9]=X("label",{for:"contact-message",class:"block text-xs font-mono mb-1.5",style:{color:"var(--text-secondary)"}}," Message ",-1)),Uf(X("textarea",{id:"contact-message","onUpdate:modelValue":o[2]||(o[2]=a=>i.value=a),rows:"4",required:"",placeholder:"Let's build something great together...",class:"w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 resize-none focus:ring-2",style:{background:"var(--bg-secondary)",color:"var(--text-primary)",border:"1px solid var(--card-border)","--tw-ring-color":"var(--accent-cyan)"}},null,512),[[Gf,i.value]])]),X("button",o3,[Qe(Ae(xw),{size:18}),o[10]||(o[10]=Ei(" Send Message ",-1))])],32)])])]),X("footer",a3,[X("p",l3,[o[12]||(o[12]=Ei(" Built with ",-1)),Qe(Ae(mw),{size:14,style:{color:"var(--accent-cyan)"},class:"animate-pulse"}),o[13]||(o[13]=Ei(" by ",-1)),X("span",c3,gt(Ae(ti).name),1),Ei(" · "+gt(new Date().getFullYear()),1)])])],64))}}),f3={class:"app-root min-h-screen",style:{background:"var(--bg-primary)",color:"var(--text-primary)"}},h3={class:"relative z-10"},d3=ur({__name:"App",setup(n){return Fa(),lT(),VT(),GT(),(e,t)=>(qe(),at("div",f3,[Qe(YT),Qe(Hw),t[4]||(t[4]=X("div",{class:"noise-overlay"},null,-1)),Qe(pL),Qe(vL),Qe(Fw),X("main",h3,[Qe(IL),t[0]||(t[0]=X("div",{class:"max-w-xl mx-auto reveal-divider"},[X("div",{class:"h-px w-full",style:{background:"linear-gradient(to right, transparent, var(--accent-cyan), transparent)",opacity:"0.3"}})],-1)),Qe(cI),t[1]||(t[1]=X("div",{class:"max-w-xl mx-auto reveal-divider"},[X("div",{class:"h-px w-full",style:{background:"linear-gradient(to right, transparent, var(--accent-cyan), transparent)",opacity:"0.3"}})],-1)),Qe(bI),t[2]||(t[2]=X("div",{class:"max-w-xl mx-auto reveal-divider"},[X("div",{class:"h-px w-full",style:{background:"linear-gradient(to right, transparent, var(--accent-cyan), transparent)",opacity:"0.3"}})],-1)),Qe(WI),t[3]||(t[3]=X("div",{class:"max-w-xl mx-auto reveal-divider"},[X("div",{class:"h-px w-full",style:{background:"linear-gradient(to right, transparent, var(--accent-cyan), transparent)",opacity:"0.3"}})],-1)),Qe(u3)])]))}}),Qy=I1(d3);Qy.use(O1());Qy.mount("#app");
