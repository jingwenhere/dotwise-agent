(()=>{var Y1=Object.create;var Ef=Object.defineProperty;var Z1=Object.getOwnPropertyDescriptor;var J1=Object.getOwnPropertyNames;var K1=Object.getPrototypeOf,Q1=Object.prototype.hasOwnProperty;var j1=(e,t,n)=>t in e?Ef(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var vi=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var $1=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of J1(t))!Q1.call(e,a)&&a!==n&&Ef(e,a,{get:()=>t[a],enumerable:!(i=Z1(t,a))||i.enumerable});return e};var _i=(e,t,n)=>(n=e!=null?Y1(K1(e)):{},$1(t||!e||!e.__esModule?Ef(n,"default",{value:e,enumerable:!0}):n,e));var H0=(e,t,n)=>j1(e,typeof t!="symbol"?t+"":t,n);var Q0=vi(kt=>{"use strict";var wf=Symbol.for("react.transitional.element"),tM=Symbol.for("react.portal"),eM=Symbol.for("react.fragment"),nM=Symbol.for("react.strict_mode"),iM=Symbol.for("react.profiler"),aM=Symbol.for("react.consumer"),sM=Symbol.for("react.context"),rM=Symbol.for("react.forward_ref"),oM=Symbol.for("react.suspense"),lM=Symbol.for("react.memo"),X0=Symbol.for("react.lazy"),cM=Symbol.for("react.activity"),V0=Symbol.iterator;function uM(e){return e===null||typeof e!="object"?null:(e=V0&&e[V0]||e["@@iterator"],typeof e=="function"?e:null)}var q0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y0=Object.assign,Z0={};function Qs(e,t,n){this.props=e,this.context=t,this.refs=Z0,this.updater=n||q0}Qs.prototype.isReactComponent={};Qs.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function J0(){}J0.prototype=Qs.prototype;function Cf(e,t,n){this.props=e,this.context=t,this.refs=Z0,this.updater=n||q0}var Rf=Cf.prototype=new J0;Rf.constructor=Cf;Y0(Rf,Qs.prototype);Rf.isPureReactComponent=!0;var G0=Array.isArray;function Af(){}var Me={H:null,A:null,T:null,S:null},K0=Object.prototype.hasOwnProperty;function Df(e,t,n){var i=n.ref;return{$$typeof:wf,type:e,key:t,ref:i!==void 0?i:null,props:n}}function hM(e,t){return Df(e.type,t,e.props)}function Uf(e){return typeof e=="object"&&e!==null&&e.$$typeof===wf}function fM(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var k0=/\/+/g;function Tf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?fM(""+e.key):t.toString(36)}function dM(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Af,Af):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ks(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case wf:case tM:r=!0;break;case X0:return r=e._init,Ks(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+Tf(e,0):i,G0(a)?(n="",r!=null&&(n=r.replace(k0,"$&/")+"/"),Ks(a,t,n,"",function(c){return c})):a!=null&&(Uf(a)&&(a=hM(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(k0,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(G0(e))for(var l=0;l<e.length;l++)i=e[l],s=o+Tf(i,l),r+=Ks(i,t,n,s,a);else if(l=uM(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+Tf(i,l++),r+=Ks(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return Ks(dM(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function ic(e,t,n){if(e==null)return e;var i=[],a=0;return Ks(e,i,"","",function(s){return t.call(n,s,a++)}),i}function pM(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var W0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},mM={map:ic,forEach:function(e,t,n){ic(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ic(e,function(){t++}),t},toArray:function(e){return ic(e,function(t){return t})||[]},only:function(e){if(!Uf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};kt.Activity=cM;kt.Children=mM;kt.Component=Qs;kt.Fragment=eM;kt.Profiler=iM;kt.PureComponent=Cf;kt.StrictMode=nM;kt.Suspense=oM;kt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Me;kt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Me.H.useMemoCache(e)}};kt.cache=function(e){return function(){return e.apply(null,arguments)}};kt.cacheSignal=function(){return null};kt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Y0({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!K0.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Df(e.type,a,i)};kt.createContext=function(e){return e={$$typeof:sM,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:aM,_context:e},e};kt.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)K0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Df(e,s,a)};kt.createRef=function(){return{current:null}};kt.forwardRef=function(e){return{$$typeof:rM,render:e}};kt.isValidElement=Uf;kt.lazy=function(e){return{$$typeof:X0,_payload:{_status:-1,_result:e},_init:pM}};kt.memo=function(e,t){return{$$typeof:lM,type:e,compare:t===void 0?null:t}};kt.startTransition=function(e){var t=Me.T,n={};Me.T=n;try{var i=e(),a=Me.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Af,W0)}catch(s){W0(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Me.T=t}};kt.unstable_useCacheRefresh=function(){return Me.H.useCacheRefresh()};kt.use=function(e){return Me.H.use(e)};kt.useActionState=function(e,t,n){return Me.H.useActionState(e,t,n)};kt.useCallback=function(e,t){return Me.H.useCallback(e,t)};kt.useContext=function(e){return Me.H.useContext(e)};kt.useDebugValue=function(){};kt.useDeferredValue=function(e,t){return Me.H.useDeferredValue(e,t)};kt.useEffect=function(e,t){return Me.H.useEffect(e,t)};kt.useEffectEvent=function(e){return Me.H.useEffectEvent(e)};kt.useId=function(){return Me.H.useId()};kt.useImperativeHandle=function(e,t,n){return Me.H.useImperativeHandle(e,t,n)};kt.useInsertionEffect=function(e,t){return Me.H.useInsertionEffect(e,t)};kt.useLayoutEffect=function(e,t){return Me.H.useLayoutEffect(e,t)};kt.useMemo=function(e,t){return Me.H.useMemo(e,t)};kt.useOptimistic=function(e,t){return Me.H.useOptimistic(e,t)};kt.useReducer=function(e,t,n){return Me.H.useReducer(e,t,n)};kt.useRef=function(e){return Me.H.useRef(e)};kt.useState=function(e){return Me.H.useState(e)};kt.useSyncExternalStore=function(e,t,n){return Me.H.useSyncExternalStore(e,t,n)};kt.useTransition=function(){return Me.H.useTransition()};kt.version="19.2.7"});var js=vi((t3,j0)=>{"use strict";j0.exports=Q0()});var lg=vi(we=>{"use strict";function If(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,a=e[i];if(0<ac(a,t))e[i]=t,e[n]=a,n=i;else break t}}function yi(e){return e.length===0?null:e[0]}function rc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,a=e.length,s=a>>>1;i<s;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>ac(o,n))l<a&&0>ac(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<a&&0>ac(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function ac(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}we.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?($0=performance,we.unstable_now=function(){return $0.now()}):(Lf=Date,tg=Lf.now(),we.unstable_now=function(){return Lf.now()-tg});var $0,Lf,tg,Pi=[],ma=[],gM=1,Xn=null,an=3,Pf=!1,So=!1,Mo=!1,Bf=!1,ig=typeof setTimeout=="function"?setTimeout:null,ag=typeof clearTimeout=="function"?clearTimeout:null,eg=typeof setImmediate<"u"?setImmediate:null;function sc(e){for(var t=yi(ma);t!==null;){if(t.callback===null)rc(ma);else if(t.startTime<=e)rc(ma),t.sortIndex=t.expirationTime,If(Pi,t);else break;t=yi(ma)}}function zf(e){if(Mo=!1,sc(e),!So)if(yi(Pi)!==null)So=!0,tr||(tr=!0,$s());else{var t=yi(ma);t!==null&&Ff(zf,t.startTime-e)}}var tr=!1,bo=-1,sg=5,rg=-1;function og(){return Bf?!0:!(we.unstable_now()-rg<sg)}function Of(){if(Bf=!1,tr){var e=we.unstable_now();rg=e;var t=!0;try{t:{So=!1,Mo&&(Mo=!1,ag(bo),bo=-1),Pf=!0;var n=an;try{e:{for(sc(e),Xn=yi(Pi);Xn!==null&&!(Xn.expirationTime>e&&og());){var i=Xn.callback;if(typeof i=="function"){Xn.callback=null,an=Xn.priorityLevel;var a=i(Xn.expirationTime<=e);if(e=we.unstable_now(),typeof a=="function"){Xn.callback=a,sc(e),t=!0;break e}Xn===yi(Pi)&&rc(Pi),sc(e)}else rc(Pi);Xn=yi(Pi)}if(Xn!==null)t=!0;else{var s=yi(ma);s!==null&&Ff(zf,s.startTime-e),t=!1}}break t}finally{Xn=null,an=n,Pf=!1}t=void 0}}finally{t?$s():tr=!1}}}var $s;typeof eg=="function"?$s=function(){eg(Of)}:typeof MessageChannel<"u"?(Nf=new MessageChannel,ng=Nf.port2,Nf.port1.onmessage=Of,$s=function(){ng.postMessage(null)}):$s=function(){ig(Of,0)};var Nf,ng;function Ff(e,t){bo=ig(function(){e(we.unstable_now())},t)}we.unstable_IdlePriority=5;we.unstable_ImmediatePriority=1;we.unstable_LowPriority=4;we.unstable_NormalPriority=3;we.unstable_Profiling=null;we.unstable_UserBlockingPriority=2;we.unstable_cancelCallback=function(e){e.callback=null};we.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):sg=0<e?Math.floor(1e3/e):5};we.unstable_getCurrentPriorityLevel=function(){return an};we.unstable_next=function(e){switch(an){case 1:case 2:case 3:var t=3;break;default:t=an}var n=an;an=t;try{return e()}finally{an=n}};we.unstable_requestPaint=function(){Bf=!0};we.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=an;an=e;try{return t()}finally{an=n}};we.unstable_scheduleCallback=function(e,t,n){var i=we.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:gM++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>i?(e.sortIndex=n,If(ma,e),yi(Pi)===null&&e===yi(ma)&&(Mo?(ag(bo),bo=-1):Mo=!0,Ff(zf,n-i))):(e.sortIndex=a,If(Pi,e),So||Pf||(So=!0,tr||(tr=!0,$s()))),e};we.unstable_shouldYield=og;we.unstable_wrapCallback=function(e){var t=an;return function(){var n=an;an=t;try{return e.apply(this,arguments)}finally{an=n}}}});var ug=vi((n3,cg)=>{"use strict";cg.exports=lg()});var fg=vi(un=>{"use strict";var vM=js();function hg(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ga(){}var cn={d:{f:ga,r:function(){throw Error(hg(522))},D:ga,C:ga,L:ga,m:ga,X:ga,S:ga,M:ga},p:0,findDOMNode:null},_M=Symbol.for("react.portal");function yM(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_M,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Eo=vM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function oc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=cn;un.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(hg(299));return yM(e,t,null,n)};un.flushSync=function(e){var t=Eo.T,n=cn.p;try{if(Eo.T=null,cn.p=2,e)return e()}finally{Eo.T=t,cn.p=n,cn.d.f()}};un.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,cn.d.C(e,t))};un.prefetchDNS=function(e){typeof e=="string"&&cn.d.D(e)};un.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=oc(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?cn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&cn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};un.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=oc(t.as,t.crossOrigin);cn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&cn.d.M(e)};un.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=oc(n,t.crossOrigin);cn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};un.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=oc(t.as,t.crossOrigin);cn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else cn.d.m(e)};un.requestFormReset=function(e){cn.d.r(e)};un.unstable_batchedUpdates=function(e,t){return e(t)};un.useFormState=function(e,t,n){return Eo.H.useFormState(e,t,n)};un.useFormStatus=function(){return Eo.H.useHostTransitionStatus()};un.version="19.2.7"});var Hf=vi((a3,pg)=>{"use strict";function dg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dg)}catch(e){console.error(e)}}dg(),pg.exports=fg()});var Ax=vi(Lu=>{"use strict";var ke=ug(),Hv=js(),xM=Hf();function J(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Vv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ul(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Gv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kv(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mg(e){if(ul(e)!==e)throw Error(J(188))}function SM(e){var t=e.alternate;if(!t){if(t=ul(e),t===null)throw Error(J(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return mg(a),e;if(s===i)return mg(a),t;s=s.sibling}throw Error(J(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?e:t}function Wv(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Wv(e),t!==null)return t;e=e.sibling}return null}var Te=Object.assign,MM=Symbol.for("react.element"),lc=Symbol.for("react.transitional.element"),Lo=Symbol.for("react.portal"),rr=Symbol.for("react.fragment"),Xv=Symbol.for("react.strict_mode"),xd=Symbol.for("react.profiler"),qv=Symbol.for("react.consumer"),Wi=Symbol.for("react.context"),mp=Symbol.for("react.forward_ref"),Sd=Symbol.for("react.suspense"),Md=Symbol.for("react.suspense_list"),gp=Symbol.for("react.memo"),va=Symbol.for("react.lazy"),bd=Symbol.for("react.activity"),bM=Symbol.for("react.memo_cache_sentinel"),gg=Symbol.iterator;function To(e){return e===null||typeof e!="object"?null:(e=gg&&e[gg]||e["@@iterator"],typeof e=="function"?e:null)}var EM=Symbol.for("react.client.reference");function Ed(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===EM?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rr:return"Fragment";case xd:return"Profiler";case Xv:return"StrictMode";case Sd:return"Suspense";case Md:return"SuspenseList";case bd:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Lo:return"Portal";case Wi:return e.displayName||"Context";case qv:return(e._context.displayName||"Context")+".Consumer";case mp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gp:return t=e.displayName||null,t!==null?t:Ed(e.type)||"Memo";case va:t=e._payload,e=e._init;try{return Ed(e(t))}catch{}}return null}var Oo=Array.isArray,Pt=Hv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=xM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ps={pending:!1,data:null,method:null,action:null},Td=[],or=-1;function Ei(e){return{current:e}}function Je(e){0>or||(e.current=Td[or],Td[or]=null,or--)}function xe(e,t){or++,Td[or]=e.current,e.current=t}var bi=Ei(null),Ko=Ei(null),Ca=Ei(null),Vc=Ei(null);function Gc(e,t){switch(xe(Ca,t),xe(Ko,e),xe(bi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=bv(t),e=fx(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Je(bi),xe(bi,e)}function Tr(){Je(bi),Je(Ko),Je(Ca)}function Ad(e){e.memoizedState!==null&&xe(Vc,e);var t=bi.current,n=fx(t,e.type);t!==n&&(xe(Ko,e),xe(bi,n))}function kc(e){Ko.current===e&&(Je(bi),Je(Ko)),Vc.current===e&&(Je(Vc),ol._currentValue=ps)}var Vf,vg;function us(e){if(Vf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vf=t&&t[1]||"",vg=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vf+e+vg}var Gf=!1;function kf(e,t){if(!e||Gf)return"";Gf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var f=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){f=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){f=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=a);break}}}finally{Gf=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?us(n):""}function TM(e,t){switch(e.tag){case 26:case 27:case 5:return us(e.type);case 16:return us("Lazy");case 13:return e.child!==t&&t!==null?us("Suspense Fallback"):us("Suspense");case 19:return us("SuspenseList");case 0:case 15:return kf(e.type,!1);case 11:return kf(e.type.render,!1);case 1:return kf(e.type,!0);case 31:return us("Activity");default:return""}}function _g(e){try{var t="",n=null;do t+=TM(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var wd=Object.prototype.hasOwnProperty,vp=ke.unstable_scheduleCallback,Wf=ke.unstable_cancelCallback,AM=ke.unstable_shouldYield,wM=ke.unstable_requestPaint,Dn=ke.unstable_now,CM=ke.unstable_getCurrentPriorityLevel,Yv=ke.unstable_ImmediatePriority,Zv=ke.unstable_UserBlockingPriority,Wc=ke.unstable_NormalPriority,RM=ke.unstable_LowPriority,Jv=ke.unstable_IdlePriority,DM=ke.log,UM=ke.unstable_setDisableYieldValue,hl=null,Un=null;function ba(e){if(typeof DM=="function"&&UM(e),Un&&typeof Un.setStrictMode=="function")try{Un.setStrictMode(hl,e)}catch{}}var Ln=Math.clz32?Math.clz32:NM,LM=Math.log,OM=Math.LN2;function NM(e){return e>>>=0,e===0?32:31-(LM(e)/OM|0)|0}var cc=256,uc=262144,hc=4194304;function hs(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=hs(i):(r&=o,r!==0?a=hs(r):n||(n=o&~e,n!==0&&(a=hs(n))))):(o=i&~s,o!==0?a=hs(o):r!==0?a=hs(r):n||(n=i&~e,n!==0&&(a=hs(n)))),a===0?0:t!==0&&t!==a&&(t&s)===0&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function fl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function IM(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kv(){var e=hc;return hc<<=1,(hc&62914560)===0&&(hc=4194304),e}function Xf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function PM(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-Ln(n),d=1<<h;o[h]=0,l[h]=-1;var f=c[h];if(f!==null)for(c[h]=null,h=0;h<f.length;h++){var p=f[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&Qv(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function Qv(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ln(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function jv(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Ln(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function $v(e,t){var n=t&-t;return n=(n&42)!==0?1:_p(n),(n&(e.suspendedLanes|t))!==0?0:n}function _p(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function yp(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function t_(){var e=re.p;return e!==0?e:(e=window.event,e===void 0?32:bx(e.type))}function yg(e,t){var n=re.p;try{return re.p=e,t()}finally{re.p=n}}var Va=Math.random().toString(36).slice(2),je="__reactFiber$"+Va,yn="__reactProps$"+Va,Pr="__reactContainer$"+Va,Cd="__reactEvents$"+Va,BM="__reactListeners$"+Va,zM="__reactHandles$"+Va,xg="__reactResources$"+Va,pl="__reactMarker$"+Va;function xp(e){delete e[je],delete e[yn],delete e[Cd],delete e[BM],delete e[zM]}function lr(e){var t=e[je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pr]||n[je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cv(e);e!==null;){if(n=e[je])return n;e=Cv(e)}return t}e=n,n=e.parentNode}return null}function Br(e){if(e=e[je]||e[Pr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function No(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(J(33))}function _r(e){var t=e[xg];return t||(t=e[xg]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[pl]=!0}var e_=new Set,n_={};function Es(e,t){Ar(e,t),Ar(e+"Capture",t)}function Ar(e,t){for(n_[e]=t,e=0;e<t.length;e++)e_.add(t[e])}var FM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Sg={},Mg={};function HM(e){return wd.call(Mg,e)?!0:wd.call(Sg,e)?!1:FM.test(e)?Mg[e]=!0:(Sg[e]=!0,!1)}function Ac(e,t,n){if(HM(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function fc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Bi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Yn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function i_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function VM(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Rd(e){if(!e._valueTracker){var t=i_(e)?"checked":"value";e._valueTracker=VM(e,t,""+e[t])}}function a_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=i_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Xc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var GM=/[\n"\\]/g;function Kn(e){return e.replace(GM,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Dd(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Yn(t)):e.value!==""+Yn(t)&&(e.value=""+Yn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Ud(e,r,Yn(t)):n!=null?Ud(e,r,Yn(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Yn(o):e.removeAttribute("name")}function s_(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Rd(e);return}n=n!=null?""+Yn(n):"",t=t!=null?""+Yn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Rd(e)}function Ud(e,t,n){t==="number"&&Xc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function yr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Yn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function r_(e,t,n){if(t!=null&&(t=""+Yn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Yn(n):""}function o_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(J(92));if(Oo(i)){if(1<i.length)throw Error(J(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Yn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Rd(e)}function wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bg(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||kM.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function l_(e,t,n){if(t!=null&&typeof t!="object")throw Error(J(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&bg(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&bg(e,s,t[s])}function Sp(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var WM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),XM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wc(e){return XM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xi(){}var Ld=null;function Mp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cr=null,xr=null;function Eg(e){var t=Br(e);if(t&&(e=t.stateNode)){var n=e[yn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Dd(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Kn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[yn]||null;if(!a)throw Error(J(90));Dd(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&a_(i)}break t;case"textarea":r_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&yr(e,!!n.multiple,t,!1)}}}var qf=!1;function c_(e,t,n){if(qf)return e(t,n);qf=!0;try{var i=e(t);return i}finally{if(qf=!1,(cr!==null||xr!==null)&&(Cu(),cr&&(t=cr,e=xr,xr=cr=null,Eg(t),e)))for(t=0;t<e.length;t++)Eg(e[t])}}function Qo(e,t){var n=e.stateNode;if(n===null)return null;var i=n[yn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(J(231,t,typeof n));return n}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Od=!1;if(Ki)try{er={},Object.defineProperty(er,"passive",{get:function(){Od=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{Od=!1}var er,Ea=null,bp=null,Cc=null;function u_(){if(Cc)return Cc;var e,t=bp,n=t.length,i,a="value"in Ea?Ea.value:Ea.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return Cc=a.slice(e,1<i?1-i:void 0)}function Rc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function dc(){return!0}function Tg(){return!1}function xn(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?dc:Tg,this.isPropagationStopped=Tg,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dc)},persist:function(){},isPersistent:dc}),t}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vu=xn(Ts),ml=Te({},Ts,{view:0,detail:0}),qM=xn(ml),Yf,Zf,Ao,_u=Te({},ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ep,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ao&&(Ao&&e.type==="mousemove"?(Yf=e.screenX-Ao.screenX,Zf=e.screenY-Ao.screenY):Zf=Yf=0,Ao=e),Yf)},movementY:function(e){return"movementY"in e?e.movementY:Zf}}),Ag=xn(_u),YM=Te({},_u,{dataTransfer:0}),ZM=xn(YM),JM=Te({},ml,{relatedTarget:0}),Jf=xn(JM),KM=Te({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),QM=xn(KM),jM=Te({},Ts,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$M=xn(jM),tb=Te({},Ts,{data:0}),wg=xn(tb),eb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ib={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ab(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ib[e])?!!t[e]:!1}function Ep(){return ab}var sb=Te({},ml,{key:function(e){if(e.key){var t=eb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ep,charCode:function(e){return e.type==="keypress"?Rc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rb=xn(sb),ob=Te({},_u,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cg=xn(ob),lb=Te({},ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ep}),cb=xn(lb),ub=Te({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),hb=xn(ub),fb=Te({},_u,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),db=xn(fb),pb=Te({},Ts,{newState:0,oldState:0}),mb=xn(pb),gb=[9,13,27,32],Tp=Ki&&"CompositionEvent"in window,Bo=null;Ki&&"documentMode"in document&&(Bo=document.documentMode);var vb=Ki&&"TextEvent"in window&&!Bo,h_=Ki&&(!Tp||Bo&&8<Bo&&11>=Bo),Rg=" ",Dg=!1;function f_(e,t){switch(e){case"keyup":return gb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function d_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ur=!1;function _b(e,t){switch(e){case"compositionend":return d_(t);case"keypress":return t.which!==32?null:(Dg=!0,Rg);case"textInput":return e=t.data,e===Rg&&Dg?null:e;default:return null}}function yb(e,t){if(ur)return e==="compositionend"||!Tp&&f_(e,t)?(e=u_(),Cc=bp=Ea=null,ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return h_&&t.locale!=="ko"?null:t.data;default:return null}}var xb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ug(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xb[e.type]:t==="textarea"}function p_(e,t,n,i){cr?xr?xr.push(i):xr=[i]:cr=i,t=cu(t,"onChange"),0<t.length&&(n=new vu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var zo=null,jo=null;function Sb(e){cx(e,0)}function yu(e){var t=No(e);if(a_(t))return e}function Lg(e,t){if(e==="change")return t}var m_=!1;Ki&&(Ki?(mc="oninput"in document,mc||(Kf=document.createElement("div"),Kf.setAttribute("oninput","return;"),mc=typeof Kf.oninput=="function"),pc=mc):pc=!1,m_=pc&&(!document.documentMode||9<document.documentMode));var pc,mc,Kf;function Og(){zo&&(zo.detachEvent("onpropertychange",g_),jo=zo=null)}function g_(e){if(e.propertyName==="value"&&yu(jo)){var t=[];p_(t,jo,e,Mp(e)),c_(Sb,t)}}function Mb(e,t,n){e==="focusin"?(Og(),zo=t,jo=n,zo.attachEvent("onpropertychange",g_)):e==="focusout"&&Og()}function bb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yu(jo)}function Eb(e,t){if(e==="click")return yu(t)}function Tb(e,t){if(e==="input"||e==="change")return yu(t)}function Ab(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nn=typeof Object.is=="function"?Object.is:Ab;function $o(e,t){if(Nn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!wd.call(t,a)||!Nn(e[a],t[a]))return!1}return!0}function Ng(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ig(e,t){var n=Ng(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Ng(n)}}function v_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?v_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function __(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Xc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xc(e.document)}return t}function Ap(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var wb=Ki&&"documentMode"in document&&11>=document.documentMode,hr=null,Nd=null,Fo=null,Id=!1;function Pg(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Id||hr==null||hr!==Xc(i)||(i=hr,"selectionStart"in i&&Ap(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fo&&$o(Fo,i)||(Fo=i,i=cu(Nd,"onSelect"),0<i.length&&(t=new vu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=hr)))}function cs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:cs("Animation","AnimationEnd"),animationiteration:cs("Animation","AnimationIteration"),animationstart:cs("Animation","AnimationStart"),transitionrun:cs("Transition","TransitionRun"),transitionstart:cs("Transition","TransitionStart"),transitioncancel:cs("Transition","TransitionCancel"),transitionend:cs("Transition","TransitionEnd")},Qf={},y_={};Ki&&(y_=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function As(e){if(Qf[e])return Qf[e];if(!fr[e])return e;var t=fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in y_)return Qf[e]=t[n];return e}var x_=As("animationend"),S_=As("animationiteration"),M_=As("animationstart"),Cb=As("transitionrun"),Rb=As("transitionstart"),Db=As("transitioncancel"),b_=As("transitionend"),E_=new Map,Pd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pd.push("scrollEnd");function ci(e,t){E_.set(e,t),Es(t,[e])}var qc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},qn=[],dr=0,wp=0;function xu(){for(var e=dr,t=wp=dr=0;t<e;){var n=qn[t];qn[t++]=null;var i=qn[t];qn[t++]=null;var a=qn[t];qn[t++]=null;var s=qn[t];if(qn[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&T_(n,a,s)}}function Su(e,t,n,i){qn[dr++]=e,qn[dr++]=t,qn[dr++]=n,qn[dr++]=i,wp|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Cp(e,t,n,i){return Su(e,t,n,i),Yc(e)}function ws(e,t){return Su(e,null,null,t),Yc(e)}function T_(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-Ln(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function Yc(e){if(50<Zo)throw Zo=0,ip=null,Error(J(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pr={};function Ub(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(e,t,n,i){return new Ub(e,t,n,i)}function Rp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yi(e,t){var n=e.alternate;return n===null?(n=Cn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function A_(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Dc(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")Rp(e)&&(r=1);else if(typeof e=="string")r=NE(e,n,bi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case bd:return e=Cn(31,n,t,a),e.elementType=bd,e.lanes=s,e;case rr:return ms(n.children,a,s,t);case Xv:r=8,a|=24;break;case xd:return e=Cn(12,n,t,a|2),e.elementType=xd,e.lanes=s,e;case Sd:return e=Cn(13,n,t,a),e.elementType=Sd,e.lanes=s,e;case Md:return e=Cn(19,n,t,a),e.elementType=Md,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wi:r=10;break t;case qv:r=9;break t;case mp:r=11;break t;case gp:r=14;break t;case va:r=16,i=null;break t}r=29,n=Error(J(130,e===null?"null":typeof e,"")),i=null}return t=Cn(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function ms(e,t,n,i){return e=Cn(7,e,i,t),e.lanes=n,e}function jf(e,t,n){return e=Cn(6,e,null,t),e.lanes=n,e}function w_(e){var t=Cn(18,null,null,0);return t.stateNode=e,t}function $f(e,t,n){return t=Cn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Bg=new WeakMap;function Qn(e,t){if(typeof e=="object"&&e!==null){var n=Bg.get(e);return n!==void 0?n:(t={value:e,source:t,stack:_g(t)},Bg.set(e,t),t)}return{value:e,source:t,stack:_g(t)}}var mr=[],gr=0,Zc=null,tl=0,Zn=[],Jn=0,Ba=null,xi=1,Si="";function Gi(e,t){mr[gr++]=tl,mr[gr++]=Zc,Zc=e,tl=t}function C_(e,t,n){Zn[Jn++]=xi,Zn[Jn++]=Si,Zn[Jn++]=Ba,Ba=e;var i=xi;e=Si;var a=32-Ln(i)-1;i&=~(1<<a),n+=1;var s=32-Ln(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,xi=1<<32-Ln(t)+a|n<<a|i,Si=s+e}else xi=1<<s|n<<a|i,Si=e}function Dp(e){e.return!==null&&(Gi(e,1),C_(e,1,0))}function Up(e){for(;e===Zc;)Zc=mr[--gr],mr[gr]=null,tl=mr[--gr],mr[gr]=null;for(;e===Ba;)Ba=Zn[--Jn],Zn[Jn]=null,Si=Zn[--Jn],Zn[Jn]=null,xi=Zn[--Jn],Zn[Jn]=null}function R_(e,t){Zn[Jn++]=xi,Zn[Jn++]=Si,Zn[Jn++]=Ba,xi=t.id,Si=t.overflow,Ba=e}var $e=null,Ee=null,ee=!1,Ra=null,jn=!1,Bd=Error(J(519));function za(e){var t=Error(J(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw el(Qn(t,e)),Bd}function zg(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[je]=e,t[yn]=i,n){case"dialog":Kt("cancel",t),Kt("close",t);break;case"iframe":case"object":case"embed":Kt("load",t);break;case"video":case"audio":for(n=0;n<sl.length;n++)Kt(sl[n],t);break;case"source":Kt("error",t);break;case"img":case"image":case"link":Kt("error",t),Kt("load",t);break;case"details":Kt("toggle",t);break;case"input":Kt("invalid",t),s_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Kt("invalid",t);break;case"textarea":Kt("invalid",t),o_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||hx(t.textContent,n)?(i.popover!=null&&(Kt("beforetoggle",t),Kt("toggle",t)),i.onScroll!=null&&Kt("scroll",t),i.onScrollEnd!=null&&Kt("scrollend",t),i.onClick!=null&&(t.onclick=Xi),t=!0):t=!1,t||za(e,!0)}function Fg(e){for($e=e.return;$e;)switch($e.tag){case 5:case 31:case 13:jn=!1;return;case 27:case 3:jn=!0;return;default:$e=$e.return}}function nr(e){if(e!==$e)return!1;if(!ee)return Fg(e),ee=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||lp(e.type,e.memoizedProps)),n=!n),n&&Ee&&za(e),Fg(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));Ee=wv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));Ee=wv(e)}else t===27?(t=Ee,Ga(e.type)?(e=fp,fp=null,Ee=e):Ee=t):Ee=$e?ti(e.stateNode.nextSibling):null;return!0}function ys(){Ee=$e=null,ee=!1}function td(){var e=Ra;return e!==null&&(vn===null?vn=e:vn.push.apply(vn,e),Ra=null),e}function el(e){Ra===null?Ra=[e]:Ra.push(e)}var zd=Ei(null),Cs=null,qi=null;function ya(e,t,n){xe(zd,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=zd.current,Je(zd)}function Fd(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Hd(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Fd(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(J(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Fd(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function zr(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if((a.flags&524288)!==0)s=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(J(387));if(r=r.memoizedProps,r!==null){var o=a.type;Nn(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===Vc.current){if(r=a.alternate,r===null)throw Error(J(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(ol):e=[ol])}a=a.return}e!==null&&Hd(t,e,n,i),t.flags|=262144}function Jc(e){for(e=e.firstContext;e!==null;){if(!Nn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xs(e){Cs=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function tn(e){return D_(Cs,e)}function gc(e,t){return Cs===null&&xs(e),D_(e,t)}function D_(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},qi===null){if(e===null)throw Error(J(308));qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qi=qi.next=t;return n}var Lb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Ob=ke.unstable_scheduleCallback,Nb=ke.unstable_NormalPriority,Fe={$$typeof:Wi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lp(){return{controller:new Lb,data:new Map,refCount:0}}function gl(e){e.refCount--,e.refCount===0&&Ob(Nb,function(){e.controller.abort()})}var Ho=null,Vd=0,Cr=0,Sr=null;function Ib(e,t){if(Ho===null){var n=Ho=[];Vd=0,Cr=im(),Sr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Vd++,t.then(Hg,Hg),t}function Hg(){if(--Vd===0&&Ho!==null){Sr!==null&&(Sr.status="fulfilled");var e=Ho;Ho=null,Cr=0,Sr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Pb(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Vg=Pt.S;Pt.S=function(e,t){Wy=Dn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ib(e,t),Vg!==null&&Vg(e,t)};var gs=Ei(null);function Op(){var e=gs.current;return e!==null?e:_e.pooledCache}function Uc(e,t){t===null?xe(gs,gs.current):xe(gs,t.pool)}function U_(){var e=Op();return e===null?null:{parent:Fe._currentValue,pool:e}}var Fr=Error(J(460)),Np=Error(J(474)),Mu=Error(J(542)),Kc={then:function(){}};function Gg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function L_(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Xi,Xi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wg(e),e;default:if(typeof t.status=="string")t.then(Xi,Xi);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(J(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wg(e),e}throw vs=t,Fr}}function fs(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(vs=n,Fr):n}}var vs=null;function kg(){if(vs===null)throw Error(J(459));var e=vs;return vs=null,e}function Wg(e){if(e===Fr||e===Mu)throw Error(J(483))}var Mr=null,nl=0;function vc(e){var t=nl;return nl+=1,Mr===null&&(Mr=[]),L_(Mr,e,t)}function wo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function _c(e,t){throw t.$$typeof===MM?Error(J(525)):(e=Object.prototype.toString.call(t),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function O_(e){function t(u,g){if(e){var y=u.deletions;y===null?(u.deletions=[g],u.flags|=16):y.push(g)}}function n(u,g){if(!e)return null;for(;g!==null;)t(u,g),g=g.sibling;return null}function i(u){for(var g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function a(u,g){return u=Yi(u,g),u.index=0,u.sibling=null,u}function s(u,g,y){return u.index=y,e?(y=u.alternate,y!==null?(y=y.index,y<g?(u.flags|=67108866,g):y):(u.flags|=67108866,g)):(u.flags|=1048576,g)}function r(u){return e&&u.alternate===null&&(u.flags|=67108866),u}function o(u,g,y,_){return g===null||g.tag!==6?(g=jf(y,u.mode,_),g.return=u,g):(g=a(g,y),g.return=u,g)}function l(u,g,y,_){var w=y.type;return w===rr?h(u,g,y.props.children,_,y.key):g!==null&&(g.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===va&&fs(w)===g.type)?(g=a(g,y.props),wo(g,y),g.return=u,g):(g=Dc(y.type,y.key,y.props,null,u.mode,_),wo(g,y),g.return=u,g)}function c(u,g,y,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=$f(y,u.mode,_),g.return=u,g):(g=a(g,y.children||[]),g.return=u,g)}function h(u,g,y,_,w){return g===null||g.tag!==7?(g=ms(y,u.mode,_,w),g.return=u,g):(g=a(g,y),g.return=u,g)}function d(u,g,y){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=jf(""+g,u.mode,y),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case lc:return y=Dc(g.type,g.key,g.props,null,u.mode,y),wo(y,g),y.return=u,y;case Lo:return g=$f(g,u.mode,y),g.return=u,g;case va:return g=fs(g),d(u,g,y)}if(Oo(g)||To(g))return g=ms(g,u.mode,y,null),g.return=u,g;if(typeof g.then=="function")return d(u,vc(g),y);if(g.$$typeof===Wi)return d(u,gc(u,g),y);_c(u,g)}return null}function f(u,g,y,_){var w=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return w!==null?null:o(u,g,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case lc:return y.key===w?l(u,g,y,_):null;case Lo:return y.key===w?c(u,g,y,_):null;case va:return y=fs(y),f(u,g,y,_)}if(Oo(y)||To(y))return w!==null?null:h(u,g,y,_,null);if(typeof y.then=="function")return f(u,g,vc(y),_);if(y.$$typeof===Wi)return f(u,g,gc(u,y),_);_c(u,y)}return null}function p(u,g,y,_,w){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return u=u.get(y)||null,o(g,u,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case lc:return u=u.get(_.key===null?y:_.key)||null,l(g,u,_,w);case Lo:return u=u.get(_.key===null?y:_.key)||null,c(g,u,_,w);case va:return _=fs(_),p(u,g,y,_,w)}if(Oo(_)||To(_))return u=u.get(y)||null,h(g,u,_,w,null);if(typeof _.then=="function")return p(u,g,y,vc(_),w);if(_.$$typeof===Wi)return p(u,g,y,gc(g,_),w);_c(g,_)}return null}function v(u,g,y,_){for(var w=null,U=null,T=g,D=g=0,M=null;T!==null&&D<y.length;D++){T.index>D?(M=T,T=null):M=T.sibling;var b=f(u,T,y[D],_);if(b===null){T===null&&(T=M);break}e&&T&&b.alternate===null&&t(u,T),g=s(b,g,D),U===null?w=b:U.sibling=b,U=b,T=M}if(D===y.length)return n(u,T),ee&&Gi(u,D),w;if(T===null){for(;D<y.length;D++)T=d(u,y[D],_),T!==null&&(g=s(T,g,D),U===null?w=T:U.sibling=T,U=T);return ee&&Gi(u,D),w}for(T=i(T);D<y.length;D++)M=p(T,u,D,y[D],_),M!==null&&(e&&M.alternate!==null&&T.delete(M.key===null?D:M.key),g=s(M,g,D),U===null?w=M:U.sibling=M,U=M);return e&&T.forEach(function(C){return t(u,C)}),ee&&Gi(u,D),w}function x(u,g,y,_){if(y==null)throw Error(J(151));for(var w=null,U=null,T=g,D=g=0,M=null,b=y.next();T!==null&&!b.done;D++,b=y.next()){T.index>D?(M=T,T=null):M=T.sibling;var C=f(u,T,b.value,_);if(C===null){T===null&&(T=M);break}e&&T&&C.alternate===null&&t(u,T),g=s(C,g,D),U===null?w=C:U.sibling=C,U=C,T=M}if(b.done)return n(u,T),ee&&Gi(u,D),w;if(T===null){for(;!b.done;D++,b=y.next())b=d(u,b.value,_),b!==null&&(g=s(b,g,D),U===null?w=b:U.sibling=b,U=b);return ee&&Gi(u,D),w}for(T=i(T);!b.done;D++,b=y.next())b=p(T,u,D,b.value,_),b!==null&&(e&&b.alternate!==null&&T.delete(b.key===null?D:b.key),g=s(b,g,D),U===null?w=b:U.sibling=b,U=b);return e&&T.forEach(function(W){return t(u,W)}),ee&&Gi(u,D),w}function m(u,g,y,_){if(typeof y=="object"&&y!==null&&y.type===rr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case lc:t:{for(var w=y.key;g!==null;){if(g.key===w){if(w=y.type,w===rr){if(g.tag===7){n(u,g.sibling),_=a(g,y.props.children),_.return=u,u=_;break t}}else if(g.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===va&&fs(w)===g.type){n(u,g.sibling),_=a(g,y.props),wo(_,y),_.return=u,u=_;break t}n(u,g);break}else t(u,g);g=g.sibling}y.type===rr?(_=ms(y.props.children,u.mode,_,y.key),_.return=u,u=_):(_=Dc(y.type,y.key,y.props,null,u.mode,_),wo(_,y),_.return=u,u=_)}return r(u);case Lo:t:{for(w=y.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(u,g.sibling),_=a(g,y.children||[]),_.return=u,u=_;break t}else{n(u,g);break}else t(u,g);g=g.sibling}_=$f(y,u.mode,_),_.return=u,u=_}return r(u);case va:return y=fs(y),m(u,g,y,_)}if(Oo(y))return v(u,g,y,_);if(To(y)){if(w=To(y),typeof w!="function")throw Error(J(150));return y=w.call(y),x(u,g,y,_)}if(typeof y.then=="function")return m(u,g,vc(y),_);if(y.$$typeof===Wi)return m(u,g,gc(u,y),_);_c(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,g!==null&&g.tag===6?(n(u,g.sibling),_=a(g,y),_.return=u,u=_):(n(u,g),_=jf(y,u.mode,_),_.return=u,u=_),r(u)):n(u,g)}return function(u,g,y,_){try{nl=0;var w=m(u,g,y,_);return Mr=null,w}catch(T){if(T===Fr||T===Mu)throw T;var U=Cn(29,T,null,u.mode);return U.lanes=_,U.return=u,U}}}var Ss=O_(!0),N_=O_(!1),_a=!1;function Ip(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ua(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(se&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Yc(e),T_(e,null,n),t}return Su(e,i,t,n),Yc(e)}function Vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,jv(e,n)}}function ed(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var kd=!1;function Go(){if(kd){var e=Sr;if(e!==null)throw e}}function ko(e,t,n,i){kd=!1;var a=e.updateQueue;_a=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=a.baseState;r=0,h=c=l=null,o=s;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(te&f)===f:(i&f)===f){f!==0&&f===Cr&&(kd=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,x=o;f=t;var m=n;switch(x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(m,d,f);break t}d=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(m,d,f):v,f==null)break t;d=Te({},d,f);break t;case 2:_a=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,r|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);h===null&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=h,s===null&&(a.shared.lanes=0),Ha|=r,e.lanes=r,e.memoizedState=d}}function I_(e,t){if(typeof e!="function")throw Error(J(191,e));e.call(t)}function P_(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)I_(n[e],t)}var Rr=Ei(null),Qc=Ei(0);function Xg(e,t){e=ta,xe(Qc,e),xe(Rr,t),ta=e|t.baseLanes}function Wd(){xe(Qc,ta),xe(Rr,Rr.current)}function Pp(){ta=Qc.current,Je(Rr),Je(Qc)}var In=Ei(null),$n=null;function xa(e){var t=e.alternate;xe(Ie,Ie.current&1),xe(In,e),$n===null&&(t===null||Rr.current!==null||t.memoizedState!==null)&&($n=e)}function Xd(e){xe(Ie,Ie.current),xe(In,e),$n===null&&($n=e)}function B_(e){e.tag===22?(xe(Ie,Ie.current),xe(In,e),$n===null&&($n=e)):Sa(e)}function Sa(){xe(Ie,Ie.current),xe(In,In.current)}function wn(e){Je(In),$n===e&&($n=null),Je(Ie)}var Ie=Ei(0);function jc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||up(n)||hp(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qi=0,Wt=null,me=null,Be=null,$c=!1,br=!1,Ms=!1,tu=0,il=0,Er=null,Bb=0;function Le(){throw Error(J(321))}function Bp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nn(e[n],t[n]))return!1;return!0}function zp(e,t,n,i,a,s){return Qi=s,Wt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pt.H=e===null||e.memoizedState===null?py:Jp,Ms=!1,s=n(i,a),Ms=!1,br&&(s=F_(t,n,i,a)),z_(e),s}function z_(e){Pt.H=al;var t=me!==null&&me.next!==null;if(Qi=0,Be=me=Wt=null,$c=!1,il=0,Er=null,t)throw Error(J(300));e===null||He||(e=e.dependencies,e!==null&&Jc(e)&&(He=!0))}function F_(e,t,n,i){Wt=e;var a=0;do{if(br&&(Er=null),il=0,br=!1,25<=a)throw Error(J(301));if(a+=1,Be=me=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Pt.H=my,s=t(n,i)}while(br);return s}function zb(){var e=Pt.H,t=e.useState()[0];return t=typeof t.then=="function"?vl(t):t,e=e.useState()[0],(me!==null?me.memoizedState:null)!==e&&(Wt.flags|=1024),t}function Fp(){var e=tu!==0;return tu=0,e}function Hp(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Vp(e){if($c){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}$c=!1}Qi=0,Be=me=Wt=null,br=!1,il=tu=0,Er=null}function hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Wt.memoizedState=Be=e:Be=Be.next=e,Be}function Pe(){if(me===null){var e=Wt.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=Be===null?Wt.memoizedState:Be.next;if(t!==null)Be=t,me=e;else{if(e===null)throw Wt.alternate===null?Error(J(467)):Error(J(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Be===null?Wt.memoizedState=Be=e:Be=Be.next=e}return Be}function bu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vl(e){var t=il;return il+=1,Er===null&&(Er=[]),e=L_(Er,e,t),t=Wt,(Be===null?t.memoizedState:Be.next)===null&&(t=t.alternate,Pt.H=t===null||t.memoizedState===null?py:Jp),e}function Eu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vl(e);if(e.$$typeof===Wi)return tn(e)}throw Error(J(438,String(e)))}function Gp(e){var t=null,n=Wt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Wt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=bu(),Wt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=bM;return t.index++,n}function ji(e,t){return typeof t=="function"?t(e):t}function Lc(e){var t=Pe();return kp(t,me,e)}function kp(e,t,n){var i=e.queue;if(i===null)throw Error(J(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(te&d)===d:(Qi&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===Cr&&(h=!0);else if((Qi&f)===f){c=c.next,f===Cr&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=s):l=l.next=d,Wt.lanes|=f,Ha|=f;d=c.action,Ms&&n(s,d),s=c.hasEagerState?c.eagerState:n(s,d)}else f={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=s):l=l.next=f,Wt.lanes|=d,Ha|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!Nn(s,e.memoizedState)&&(He=!0,h&&(n=Sr,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function nd(e){var t=Pe(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);Nn(s,t.memoizedState)||(He=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function H_(e,t,n){var i=Wt,a=Pe(),s=ee;if(s){if(n===void 0)throw Error(J(407));n=n()}else n=t();var r=!Nn((me||a).memoizedState,n);if(r&&(a.memoizedState=n,He=!0),a=a.queue,Wp(k_.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||Be!==null&&Be.memoizedState.tag&1){if(i.flags|=2048,Dr(9,{destroy:void 0},G_.bind(null,i,a,n,t),null),_e===null)throw Error(J(349));s||(Qi&127)!==0||V_(i,t,n)}return n}function V_(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Wt.updateQueue,t===null?(t=bu(),Wt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function G_(e,t,n,i){t.value=n,t.getSnapshot=i,W_(t)&&X_(e)}function k_(e,t,n){return n(function(){W_(t)&&X_(e)})}function W_(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nn(e,n)}catch{return!0}}function X_(e){var t=ws(e,2);t!==null&&_n(t,e,2)}function qd(e){var t=hn();if(typeof e=="function"){var n=e;if(e=n(),Ms){ba(!0);try{n()}finally{ba(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},t}function q_(e,t,n,i){return e.baseState=n,kp(e,me,typeof i=="function"?i:ji)}function Fb(e,t,n,i,a){if(Au(e))throw Error(J(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Pt.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Y_(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Y_(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Pt.T,r={};Pt.T=r;try{var o=n(a,i),l=Pt.S;l!==null&&l(r,o),qg(e,t,o)}catch(c){Yd(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Pt.T=s}}else try{s=n(a,i),qg(e,t,s)}catch(c){Yd(e,t,c)}}function qg(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Yg(e,t,i)},function(i){return Yd(e,t,i)}):Yg(e,t,n)}function Yg(e,t,n){t.status="fulfilled",t.value=n,Z_(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Y_(e,n)))}function Yd(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Z_(t),t=t.next;while(t!==i)}e.action=null}function Z_(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function J_(e,t){return t}function Zg(e,t){if(ee){var n=_e.formState;if(n!==null){t:{var i=Wt;if(ee){if(Ee){e:{for(var a=Ee,s=jn;a.nodeType!==8;){if(!s){a=null;break e}if(a=ti(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Ee=ti(a.nextSibling),i=a.data==="F!";break t}}za(i)}i=!1}i&&(t=n[0])}}return n=hn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:J_,lastRenderedState:t},n.queue=i,n=hy.bind(null,Wt,i),i.dispatch=n,i=qd(!1),s=Zp.bind(null,Wt,!1,i.queue),i=hn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=Fb.bind(null,Wt,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Jg(e){var t=Pe();return K_(t,me,e)}function K_(e,t,n){if(t=kp(e,t,J_)[0],e=Lc(ji)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=vl(t)}catch(r){throw r===Fr?Mu:r}else i=t;t=Pe();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Wt.flags|=2048,Dr(9,{destroy:void 0},Hb.bind(null,a,n),null)),[i,s,e]}function Hb(e,t){e.action=t}function Kg(e){var t=Pe(),n=me;if(n!==null)return K_(t,n,e);Pe(),t=t.memoizedState,n=Pe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Dr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Wt.updateQueue,t===null&&(t=bu(),Wt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Q_(){return Pe().memoizedState}function Oc(e,t,n,i){var a=hn();Wt.flags|=e,a.memoizedState=Dr(1|t,{destroy:void 0},n,i===void 0?null:i)}function Tu(e,t,n,i){var a=Pe();i=i===void 0?null:i;var s=a.memoizedState.inst;me!==null&&i!==null&&Bp(i,me.memoizedState.deps)?a.memoizedState=Dr(t,s,n,i):(Wt.flags|=e,a.memoizedState=Dr(1|t,s,n,i))}function Qg(e,t){Oc(8390656,8,e,t)}function Wp(e,t){Tu(2048,8,e,t)}function Vb(e){Wt.flags|=4;var t=Wt.updateQueue;if(t===null)t=bu(),Wt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function j_(e){var t=Pe().memoizedState;return Vb({ref:t,nextImpl:e}),function(){if((se&2)!==0)throw Error(J(440));return t.impl.apply(void 0,arguments)}}function $_(e,t){return Tu(4,2,e,t)}function ty(e,t){return Tu(4,4,e,t)}function ey(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ny(e,t,n){n=n!=null?n.concat([e]):null,Tu(4,4,ey.bind(null,t,e),n)}function Xp(){}function iy(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Bp(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function ay(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Bp(t,i[1]))return i[0];if(i=e(),Ms){ba(!0);try{e()}finally{ba(!1)}}return n.memoizedState=[i,t],i}function qp(e,t,n){return n===void 0||(Qi&1073741824)!==0&&(te&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=qy(),Wt.lanes|=e,Ha|=e,n)}function sy(e,t,n,i){return Nn(n,t)?n:Rr.current!==null?(e=qp(e,n,i),Nn(e,t)||(He=!0),e):(Qi&42)===0||(Qi&1073741824)!==0&&(te&261930)===0?(He=!0,e.memoizedState=n):(e=qy(),Wt.lanes|=e,Ha|=e,t)}function ry(e,t,n,i,a){var s=re.p;re.p=s!==0&&8>s?s:8;var r=Pt.T,o={};Pt.T=o,Zp(e,!1,t,n);try{var l=a(),c=Pt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=Pb(l,i);Wo(e,t,h,On(e))}else Wo(e,t,i,On(e))}catch(d){Wo(e,t,{then:function(){},status:"rejected",reason:d},On())}finally{re.p=s,r!==null&&o.types!==null&&(r.types=o.types),Pt.T=r}}function Gb(){}function Zd(e,t,n,i){if(e.tag!==5)throw Error(J(476));var a=oy(e).queue;ry(e,a,t,ps,n===null?Gb:function(){return ly(e),n(i)})}function oy(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ps,baseState:ps,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:ps},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ly(e){var t=oy(e);t.next===null&&(t=e.alternate.memoizedState),Wo(e,t.next.queue,{},On())}function Yp(){return tn(ol)}function cy(){return Pe().memoizedState}function uy(){return Pe().memoizedState}function kb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=On();e=Da(n);var i=Ua(t,e,n);i!==null&&(_n(i,t,n),Vo(i,t,n)),t={cache:Lp()},e.payload=t;return}t=t.return}}function Wb(e,t,n){var i=On();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Au(e)?fy(t,n):(n=Cp(e,t,n,i),n!==null&&(_n(n,e,i),dy(n,t,i)))}function hy(e,t,n){var i=On();Wo(e,t,n,i)}function Wo(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Au(e))fy(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,Nn(o,r))return Su(e,t,a,0),_e===null&&xu(),!1}catch{}if(n=Cp(e,t,a,i),n!==null)return _n(n,e,i),dy(n,t,i),!0}return!1}function Zp(e,t,n,i){if(i={lane:2,revertLane:im(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Au(e)){if(t)throw Error(J(479))}else t=Cp(e,n,i,2),t!==null&&_n(t,e,2)}function Au(e){var t=e.alternate;return e===Wt||t!==null&&t===Wt}function fy(e,t){br=$c=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dy(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,jv(e,n)}}var al={readContext:tn,use:Eu,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le};al.useEffectEvent=Le;var py={readContext:tn,use:Eu,useCallback:function(e,t){return hn().memoizedState=[e,t===void 0?null:t],e},useContext:tn,useEffect:Qg,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Oc(4194308,4,ey.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oc(4194308,4,e,t)},useInsertionEffect:function(e,t){Oc(4,2,e,t)},useMemo:function(e,t){var n=hn();t=t===void 0?null:t;var i=e();if(Ms){ba(!0);try{e()}finally{ba(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=hn();if(n!==void 0){var a=n(t);if(Ms){ba(!0);try{n(t)}finally{ba(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=Wb.bind(null,Wt,e),[i.memoizedState,e]},useRef:function(e){var t=hn();return e={current:e},t.memoizedState=e},useState:function(e){e=qd(e);var t=e.queue,n=hy.bind(null,Wt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Xp,useDeferredValue:function(e,t){var n=hn();return qp(n,e,t)},useTransition:function(){var e=qd(!1);return e=ry.bind(null,Wt,e.queue,!0,!1),hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Wt,a=hn();if(ee){if(n===void 0)throw Error(J(407));n=n()}else{if(n=t(),_e===null)throw Error(J(349));(te&127)!==0||V_(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,Qg(k_.bind(null,i,s,e),[e]),i.flags|=2048,Dr(9,{destroy:void 0},G_.bind(null,i,s,n,t),null),n},useId:function(){var e=hn(),t=_e.identifierPrefix;if(ee){var n=Si,i=xi;n=(i&~(1<<32-Ln(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=tu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Bb++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Yp,useFormState:Zg,useActionState:Zg,useOptimistic:function(e){var t=hn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Zp.bind(null,Wt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Gp,useCacheRefresh:function(){return hn().memoizedState=kb.bind(null,Wt)},useEffectEvent:function(e){var t=hn(),n={impl:e};return t.memoizedState=n,function(){if((se&2)!==0)throw Error(J(440));return n.impl.apply(void 0,arguments)}}},Jp={readContext:tn,use:Eu,useCallback:iy,useContext:tn,useEffect:Wp,useImperativeHandle:ny,useInsertionEffect:$_,useLayoutEffect:ty,useMemo:ay,useReducer:Lc,useRef:Q_,useState:function(){return Lc(ji)},useDebugValue:Xp,useDeferredValue:function(e,t){var n=Pe();return sy(n,me.memoizedState,e,t)},useTransition:function(){var e=Lc(ji)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:vl(e),t]},useSyncExternalStore:H_,useId:cy,useHostTransitionStatus:Yp,useFormState:Jg,useActionState:Jg,useOptimistic:function(e,t){var n=Pe();return q_(n,me,e,t)},useMemoCache:Gp,useCacheRefresh:uy};Jp.useEffectEvent=j_;var my={readContext:tn,use:Eu,useCallback:iy,useContext:tn,useEffect:Wp,useImperativeHandle:ny,useInsertionEffect:$_,useLayoutEffect:ty,useMemo:ay,useReducer:nd,useRef:Q_,useState:function(){return nd(ji)},useDebugValue:Xp,useDeferredValue:function(e,t){var n=Pe();return me===null?qp(n,e,t):sy(n,me.memoizedState,e,t)},useTransition:function(){var e=nd(ji)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:vl(e),t]},useSyncExternalStore:H_,useId:cy,useHostTransitionStatus:Yp,useFormState:Kg,useActionState:Kg,useOptimistic:function(e,t){var n=Pe();return me!==null?q_(n,me,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Gp,useCacheRefresh:uy};my.useEffectEvent=j_;function id(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jd={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=On(),a=Da(i);a.payload=t,n!=null&&(a.callback=n),t=Ua(e,a,i),t!==null&&(_n(t,e,i),Vo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=On(),a=Da(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ua(e,a,i),t!==null&&(_n(t,e,i),Vo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=On(),i=Da(n);i.tag=2,t!=null&&(i.callback=t),t=Ua(e,i,n),t!==null&&(_n(t,e,n),Vo(t,e,n))}};function jg(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!$o(n,i)||!$o(a,s):!0}function $g(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Jd.enqueueReplaceState(t,t.state,null)}function bs(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Te({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function gy(e){qc(e)}function vy(e){console.error(e)}function _y(e){qc(e)}function eu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function tv(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Kd(e,t,n){return n=Da(n),n.tag=3,n.payload={element:null},n.callback=function(){eu(e,t)},n}function yy(e){return e=Da(e),e.tag=3,e}function xy(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){tv(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){tv(t,n,i),typeof a!="function"&&(La===null?La=new Set([this]):La.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function Xb(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&zr(t,n,a,!0),n=In.current,n!==null){switch(n.tag){case 31:case 13:return $n===null?ru():n.alternate===null&&Oe===0&&(Oe=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Kc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),pd(e,i,a)),!1;case 22:return n.flags|=65536,i===Kc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),pd(e,i,a)),!1}throw Error(J(435,n.tag))}return pd(e,i,a),ru(),!1}if(ee)return t=In.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Bd&&(e=Error(J(422),{cause:i}),el(Qn(e,n)))):(i!==Bd&&(t=Error(J(423),{cause:i}),el(Qn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Qn(i,n),a=Kd(e.stateNode,i,a),ed(e,a),Oe!==4&&(Oe=2)),!1;var s=Error(J(520),{cause:i});if(s=Qn(s,n),Yo===null?Yo=[s]:Yo.push(s),Oe!==4&&(Oe=2),t===null)return!0;i=Qn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Kd(n.stateNode,i,e),ed(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(La===null||!La.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=yy(a),xy(a,e,n,i),ed(n,a),!1}n=n.return}while(n!==null);return!1}var Kp=Error(J(461)),He=!1;function Qe(e,t,n,i){t.child=e===null?N_(t,null,n,i):Ss(t,e.child,n,i)}function ev(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return xs(t),i=zp(e,t,n,r,s,a),o=Fp(),e!==null&&!He?(Hp(e,t,a),$i(e,t,a)):(ee&&o&&Dp(t),t.flags|=1,Qe(e,t,i,a),t.child)}function nv(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!Rp(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Sy(e,t,s,i,a)):(e=Dc(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Qp(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:$o,n(r,i)&&e.ref===t.ref)return $i(e,t,a)}return t.flags|=1,e=Yi(s,i),e.ref=t.ref,e.return=t,t.child=e}function Sy(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if($o(s,i)&&e.ref===t.ref)if(He=!1,t.pendingProps=i=s,Qp(e,a))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,$i(e,t,a)}return Qd(e,t,n,i,a)}function My(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return iv(e,t,s,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Uc(t,s!==null?s.cachePool:null),s!==null?Xg(t,s):Wd(),B_(t);else return i=t.lanes=536870912,iv(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(Uc(t,s.cachePool),Xg(t,s),Sa(t),t.memoizedState=null):(e!==null&&Uc(t,null),Wd(),Sa(t));return Qe(e,t,a,n),t.child}function Io(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function iv(e,t,n,i,a){var s=Op();return s=s===null?null:{parent:Fe._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&Uc(t,null),Wd(),B_(t),e!==null&&zr(e,t,i,!0),t.childLanes=a,null}function Nc(e,t){return t=nu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function av(e,t,n){return Ss(t,e.child,null,n),e=Nc(t,t.pendingProps),e.flags|=2,wn(t),t.memoizedState=null,e}function qb(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ee){if(i.mode==="hidden")return e=Nc(t,i),t.lanes=536870912,Io(null,e);if(Xd(t),(e=Ee)?(e=px(e,jn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ba!==null?{id:xi,overflow:Si}:null,retryLane:536870912,hydrationErrors:null},n=w_(e),n.return=t,t.child=n,$e=t,Ee=null)):e=null,e===null)throw za(t);return t.lanes=536870912,null}return Nc(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(Xd(t),a)if(t.flags&256)t.flags&=-257,t=av(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(J(558));else if(He||zr(e,t,n,!1),a=(n&e.childLanes)!==0,He||a){if(i=_e,i!==null&&(r=$v(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,ws(e,r),_n(i,e,r),Kp;ru(),t=av(e,t,n)}else e=s.treeContext,Ee=ti(r.nextSibling),$e=t,ee=!0,Ra=null,jn=!1,e!==null&&R_(t,e),t=Nc(t,i),t.flags|=4096;return t}return e=Yi(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ic(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(J(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Qd(e,t,n,i,a){return xs(t),n=zp(e,t,n,i,void 0,a),i=Fp(),e!==null&&!He?(Hp(e,t,a),$i(e,t,a)):(ee&&i&&Dp(t),t.flags|=1,Qe(e,t,n,a),t.child)}function sv(e,t,n,i,a,s){return xs(t),t.updateQueue=null,n=F_(t,i,n,a),z_(e),i=Fp(),e!==null&&!He?(Hp(e,t,s),$i(e,t,s)):(ee&&i&&Dp(t),t.flags|=1,Qe(e,t,n,s),t.child)}function rv(e,t,n,i,a){if(xs(t),t.stateNode===null){var s=pr,r=n.contextType;typeof r=="object"&&r!==null&&(s=tn(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Jd,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},Ip(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?tn(r):pr,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(id(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Jd.enqueueReplaceState(s,s.state,null),ko(t,i,s,a),Go(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=bs(n,o);s.props=l;var c=s.context,h=n.contextType;r=pr,typeof h=="object"&&h!==null&&(r=tn(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&$g(t,s,i,r),_a=!1;var f=t.memoizedState;s.state=f,ko(t,i,s,a),Go(),c=t.memoizedState,o||f!==c||_a?(typeof d=="function"&&(id(t,n,d,i),c=t.memoizedState),(l=_a||jg(t,n,l,i,f,c,r))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Gd(e,t),r=t.memoizedProps,h=bs(n,r),s.props=h,d=t.pendingProps,f=s.context,c=n.contextType,l=pr,typeof c=="object"&&c!==null&&(l=tn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==d||f!==l)&&$g(t,s,i,l),_a=!1,f=t.memoizedState,s.state=f,ko(t,i,s,a),Go();var p=t.memoizedState;r!==d||f!==p||_a||e!==null&&e.dependencies!==null&&Jc(e.dependencies)?(typeof o=="function"&&(id(t,n,o,i),p=t.memoizedState),(h=_a||jg(t,n,h,i,f,p,l)||e!==null&&e.dependencies!==null&&Jc(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),s.props=i,s.state=p,s.context=l,i=h):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Ic(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=Ss(t,e.child,null,a),t.child=Ss(t,null,n,a)):Qe(e,t,n,a),t.memoizedState=s.state,e=t.child):e=$i(e,t,a),e}function ov(e,t,n,i){return ys(),t.flags|=256,Qe(e,t,n,i),t.child}var ad={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sd(e){return{baseLanes:e,cachePool:U_()}}function rd(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Rn),e}function by(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ee){if(a?xa(t):Sa(t),(e=Ee)?(e=px(e,jn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ba!==null?{id:xi,overflow:Si}:null,retryLane:536870912,hydrationErrors:null},n=w_(e),n.return=t,t.child=n,$e=t,Ee=null)):e=null,e===null)throw za(t);return hp(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(Sa(t),a=t.mode,o=nu({mode:"hidden",children:o},a),i=ms(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=sd(n),i.childLanes=rd(e,r,n),t.memoizedState=ad,Io(null,i)):(xa(t),jd(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)t.flags&256?(xa(t),t.flags&=-257,t=od(e,t,n)):t.memoizedState!==null?(Sa(t),t.child=e.child,t.flags|=128,t=null):(Sa(t),o=i.fallback,a=t.mode,i=nu({mode:"visible",children:i.children},a),o=ms(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,Ss(t,e.child,null,n),i=t.child,i.memoizedState=sd(n),i.childLanes=rd(e,r,n),t.memoizedState=ad,t=Io(null,i));else if(xa(t),hp(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(J(419)),i.stack="",i.digest=r,el({value:i,source:null,stack:null}),t=od(e,t,n)}else if(He||zr(e,t,n,!1),r=(n&e.childLanes)!==0,He||r){if(r=_e,r!==null&&(i=$v(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,ws(e,i),_n(r,e,i),Kp;up(o)||ru(),t=od(e,t,n)}else up(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ee=ti(o.nextSibling),$e=t,ee=!0,Ra=null,jn=!1,e!==null&&R_(t,e),t=jd(t,i.children),t.flags|=4096);return t}return a?(Sa(t),o=i.fallback,a=t.mode,l=e.child,c=l.sibling,i=Yi(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=Yi(c,o):(o=ms(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Io(null,i),i=t.child,o=e.child.memoizedState,o===null?o=sd(n):(a=o.cachePool,a!==null?(l=Fe._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=U_(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=rd(e,r,n),t.memoizedState=ad,Io(e.child,i)):(xa(t),n=e.child,e=n.sibling,n=Yi(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function jd(e,t){return t=nu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function nu(e,t){return e=Cn(22,e,null,t),e.lanes=0,e}function od(e,t,n){return Ss(t,e.child,null,n),e=jd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Fd(e.return,t,n)}function ld(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function Ey(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Ie.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,xe(Ie,r),Qe(e,t,i,n),i=ee?tl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lv(e,n,t);else if(e.tag===19)lv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&jc(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ld(t,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&jc(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ld(t,!0,n,null,s,i);break;case"together":ld(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function $i(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ha|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(zr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(J(153));if(t.child!==null){for(e=t.child,n=Yi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Qp(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Jc(e)))}function Yb(e,t,n){switch(t.tag){case 3:Gc(t,t.stateNode.containerInfo),ya(t,Fe,e.memoizedState.cache),ys();break;case 27:case 5:Ad(t);break;case 4:Gc(t,t.stateNode.containerInfo);break;case 10:ya(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Xd(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(xa(t),t.flags|=128,null):(n&t.child.childLanes)!==0?by(e,t,n):(xa(t),e=$i(e,t,n),e!==null?e.sibling:null);xa(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(zr(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return Ey(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),xe(Ie,Ie.current),i)break;return null;case 22:return t.lanes=0,My(e,t,n,t.pendingProps);case 24:ya(t,Fe,e.memoizedState.cache)}return $i(e,t,n)}function Ty(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Qp(e,n)&&(t.flags&128)===0)return He=!1,Yb(e,t,n);He=(e.flags&131072)!==0}else He=!1,ee&&(t.flags&1048576)!==0&&C_(t,tl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=fs(t.elementType),t.type=e,typeof e=="function")Rp(e)?(i=bs(e,i),t.tag=1,t=rv(null,t,e,i,n)):(t.tag=0,t=Qd(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===mp){t.tag=11,t=ev(null,t,e,i,n);break t}else if(a===gp){t.tag=14,t=nv(null,t,e,i,n);break t}}throw t=Ed(e)||e,Error(J(306,t,""))}}return t;case 0:return Qd(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=bs(i,t.pendingProps),rv(e,t,i,a,n);case 3:t:{if(Gc(t,t.stateNode.containerInfo),e===null)throw Error(J(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,Gd(e,t),ko(t,i,null,n);var r=t.memoizedState;if(i=r.cache,ya(t,Fe,i),i!==s.cache&&Hd(t,[Fe],n,!0),Go(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=ov(e,t,i,n);break t}else if(i!==a){a=Qn(Error(J(424)),t),el(a),t=ov(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ee=ti(e.firstChild),$e=t,ee=!0,Ra=null,jn=!0,n=N_(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),i===a){t=$i(e,t,n);break t}Qe(e,t,i,n)}t=t.child}return t;case 26:return Ic(e,t),e===null?(n=Dv(t.type,null,t.pendingProps,null))?t.memoizedState=n:ee||(n=t.type,e=t.pendingProps,i=uu(Ca.current).createElement(n),i[je]=t,i[yn]=e,en(i,n,e),Ze(i),t.stateNode=i):t.memoizedState=Dv(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ad(t),e===null&&ee&&(i=t.stateNode=mx(t.type,t.pendingProps,Ca.current),$e=t,jn=!0,a=Ee,Ga(t.type)?(fp=a,Ee=ti(i.firstChild)):Ee=a),Qe(e,t,t.pendingProps.children,n),Ic(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ee&&((a=i=Ee)&&(i=SE(i,t.type,t.pendingProps,jn),i!==null?(t.stateNode=i,$e=t,Ee=ti(i.firstChild),jn=!1,a=!0):a=!1),a||za(t)),Ad(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,lp(a,s)?i=null:r!==null&&lp(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=zp(e,t,zb,null,null,n),ol._currentValue=a),Ic(e,t),Qe(e,t,i,n),t.child;case 6:return e===null&&ee&&((e=n=Ee)&&(n=ME(n,t.pendingProps,jn),n!==null?(t.stateNode=n,$e=t,Ee=null,e=!0):e=!1),e||za(t)),null;case 13:return by(e,t,n);case 4:return Gc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ss(t,null,i,n):Qe(e,t,i,n),t.child;case 11:return ev(e,t,t.type,t.pendingProps,n);case 7:return Qe(e,t,t.pendingProps,n),t.child;case 8:return Qe(e,t,t.pendingProps.children,n),t.child;case 12:return Qe(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ya(t,t.type,i.value),Qe(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,xs(t),a=tn(a),i=i(a),t.flags|=1,Qe(e,t,i,n),t.child;case 14:return nv(e,t,t.type,t.pendingProps,n);case 15:return Sy(e,t,t.type,t.pendingProps,n);case 19:return Ey(e,t,n);case 31:return qb(e,t,n);case 22:return My(e,t,n,t.pendingProps);case 24:return xs(t),i=tn(Fe),e===null?(a=Op(),a===null&&(a=_e,s=Lp(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},Ip(t),ya(t,Fe,a)):((e.lanes&n)!==0&&(Gd(e,t),ko(t,null,null,n),Go()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ya(t,Fe,i)):(i=s.cache,ya(t,Fe,i),i!==a.cache&&Hd(t,[Fe],n,!0))),Qe(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(J(156,t.tag))}function zi(e){e.flags|=4}function cd(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(Jy())e.flags|=8192;else throw vs=Kc,Np}else e.flags&=-16777217}function cv(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_x(t))if(Jy())e.flags|=8192;else throw vs=Kc,Np}function yc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Kv():536870912,e.lanes|=t,Ur|=t)}function Co(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Zb(e,t,n){var i=t.pendingProps;switch(Up(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return be(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Zi(Fe),Tr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(nr(t)?zi(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,td())),be(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(zi(t),s!==null?(be(t),cv(t,s)):(be(t),cd(t,a,null,i,n))):s?s!==e.memoizedState?(zi(t),be(t),cv(t,s)):(be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&zi(t),be(t),cd(t,a,e,i,n)),null;case 27:if(kc(t),n=Ca.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&zi(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return be(t),null}e=bi.current,nr(t)?zg(t,e):(e=mx(a,i,n),t.stateNode=e,zi(t))}return be(t),null;case 5:if(kc(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&zi(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return be(t),null}if(s=bi.current,nr(t))zg(t,s);else{var r=uu(Ca.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[je]=t,s[yn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(en(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&zi(t)}}return be(t),cd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&zi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(J(166));if(e=Ca.current,nr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=$e,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[je]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||hx(e.nodeValue,n)),e||za(t,!0)}else e=uu(e).createTextNode(i),e[je]=t,t.stateNode=e}return be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=nr(t),n!==null){if(e===null){if(!i)throw Error(J(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(557));e[je]=t}else ys(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),e=!1}else n=td(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(wn(t),t):(wn(t),null);if((t.flags&128)!==0)throw Error(J(558))}return be(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=nr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(J(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(J(317));a[je]=t}else ys(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),a=!1}else a=td(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(wn(t),t):(wn(t),null)}return wn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),yc(t,t.updateQueue),be(t),null);case 4:return Tr(),e===null&&am(t.stateNode.containerInfo),be(t),null;case 10:return Zi(t.type),be(t),null;case 19:if(Je(Ie),i=t.memoizedState,i===null)return be(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)Co(i,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=jc(e),s!==null){for(t.flags|=128,Co(i,!1),e=s.updateQueue,t.updateQueue=e,yc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)A_(n,e),n=n.sibling;return xe(Ie,Ie.current&1|2),ee&&Gi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Dn()>au&&(t.flags|=128,a=!0,Co(i,!1),t.lanes=4194304)}else{if(!a)if(e=jc(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,yc(t,e),Co(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ee)return be(t),null}else 2*Dn()-i.renderingStartTime>au&&n!==536870912&&(t.flags|=128,a=!0,Co(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Dn(),e.sibling=null,n=Ie.current,xe(Ie,a?n&1|2:n&1),ee&&Gi(t,i.treeForkCount),e):(be(t),null);case 22:case 23:return wn(t),Pp(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),n=t.updateQueue,n!==null&&yc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Je(gs),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(Fe),be(t),null;case 25:return null;case 30:return null}throw Error(J(156,t.tag))}function Jb(e,t){switch(Up(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(Fe),Tr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return kc(t),null;case 31:if(t.memoizedState!==null){if(wn(t),t.alternate===null)throw Error(J(340));ys()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(wn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(J(340));ys()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Je(Ie),null;case 4:return Tr(),null;case 10:return Zi(t.type),null;case 22:case 23:return wn(t),Pp(),e!==null&&Je(gs),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(Fe),null;case 25:return null;default:return null}}function Ay(e,t){switch(Up(t),t.tag){case 3:Zi(Fe),Tr();break;case 26:case 27:case 5:kc(t);break;case 4:Tr();break;case 31:t.memoizedState!==null&&wn(t);break;case 13:wn(t);break;case 19:Je(Ie);break;case 10:Zi(t.type);break;case 22:case 23:wn(t),Pp(),e!==null&&Je(gs);break;case 24:Zi(Fe)}}function _l(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){ue(t,t.return,o)}}function Fa(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(h){ue(a,l,h)}}}i=i.next}while(i!==s)}}catch(h){ue(t,t.return,h)}}function wy(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{P_(t,n)}catch(i){ue(e,e.return,i)}}}function Cy(e,t,n){n.props=bs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ue(e,t,i)}}function Xo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){ue(e,t,a)}}function Mi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){ue(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ue(e,t,a)}else n.current=null}function Ry(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){ue(e,e.return,a)}}function ud(e,t,n){try{var i=e.stateNode;mE(i,e.type,n,t),i[yn]=t}catch(a){ue(e,e.return,a)}}function Dy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ga(e.type)||e.tag===4}function hd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Dy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $d(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xi));else if(i!==4&&(i===27&&Ga(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($d(e,t,n),e=e.sibling;e!==null;)$d(e,t,n),e=e.sibling}function iu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Ga(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(iu(e,t,n),e=e.sibling;e!==null;)iu(e,t,n),e=e.sibling}function Uy(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);en(t,i,n),t[je]=e,t[yn]=n}catch(s){ue(e,e.return,s)}}var ki=!1,ze=!1,fd=!1,uv=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Kb(e,t){if(e=e.containerInfo,rp=pu,e=__(e),Ap(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,h=0,d=e,f=null;e:for(;;){for(var p;d!==n||a!==0&&d.nodeType!==3||(o=r+a),d!==s||i!==0&&d.nodeType!==3||(l=r+i),d.nodeType===3&&(r+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break e;if(f===n&&++c===a&&(o=r),f===s&&++h===i&&(l=r),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(op={focusedElem:e,selectionRange:n},pu=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var v=bs(n.type,a);e=i.getSnapshotBeforeUpdate(v,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(x){ue(n,n.return,x)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)cp(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cp(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(J(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function Ly(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Hi(e,n),i&4&&_l(5,n);break;case 1:if(Hi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ue(n,n.return,r)}else{var a=bs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ue(n,n.return,r)}}i&64&&wy(n),i&512&&Xo(n,n.return);break;case 3:if(Hi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{P_(e,t)}catch(r){ue(n,n.return,r)}}break;case 27:t===null&&i&4&&Uy(n);case 26:case 5:Hi(e,n),t===null&&i&4&&Ry(n),i&512&&Xo(n,n.return);break;case 12:Hi(e,n);break;case 31:Hi(e,n),i&4&&Iy(e,n);break;case 13:Hi(e,n),i&4&&Py(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=sE.bind(null,n),bE(e,n))));break;case 22:if(i=n.memoizedState!==null||ki,!i){t=t!==null&&t.memoizedState!==null||ze,a=ki;var s=ze;ki=i,(ze=t)&&!s?Vi(e,n,(n.subtreeFlags&8772)!==0):Hi(e,n),ki=a,ze=s}break;case 30:break;default:Hi(e,n)}}function Oy(e){var t=e.alternate;t!==null&&(e.alternate=null,Oy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xp(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,gn=!1;function Fi(e,t,n){for(n=n.child;n!==null;)Ny(e,t,n),n=n.sibling}function Ny(e,t,n){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 26:ze||Mi(n,t),Fi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ze||Mi(n,t);var i=Ce,a=gn;Ga(n.type)&&(Ce=n.stateNode,gn=!1),Fi(e,t,n),Jo(n.stateNode),Ce=i,gn=a;break;case 5:ze||Mi(n,t);case 6:if(i=Ce,a=gn,Ce=null,Fi(e,t,n),Ce=i,gn=a,Ce!==null)if(gn)try{(Ce.nodeType===9?Ce.body:Ce.nodeName==="HTML"?Ce.ownerDocument.body:Ce).removeChild(n.stateNode)}catch(s){ue(n,t,s)}else try{Ce.removeChild(n.stateNode)}catch(s){ue(n,t,s)}break;case 18:Ce!==null&&(gn?(e=Ce,Tv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ir(e)):Tv(Ce,n.stateNode));break;case 4:i=Ce,a=gn,Ce=n.stateNode.containerInfo,gn=!0,Fi(e,t,n),Ce=i,gn=a;break;case 0:case 11:case 14:case 15:Fa(2,n,t),ze||Fa(4,n,t),Fi(e,t,n);break;case 1:ze||(Mi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Cy(n,t,i)),Fi(e,t,n);break;case 21:Fi(e,t,n);break;case 22:ze=(i=ze)||n.memoizedState!==null,Fi(e,t,n),ze=i;break;default:Fi(e,t,n)}}function Iy(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ir(e)}catch(n){ue(t,t.return,n)}}}function Py(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ir(e)}catch(n){ue(t,t.return,n)}}function Qb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new uv),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new uv),t;default:throw Error(J(435,e.tag))}}function xc(e,t){var n=Qb(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=rE.bind(null,e,i);i.then(a,a)}})}function pn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(Ga(o.type)){Ce=o.stateNode,gn=!1;break t}break;case 5:Ce=o.stateNode,gn=!1;break t;case 3:case 4:Ce=o.stateNode.containerInfo,gn=!0;break t}o=o.return}if(Ce===null)throw Error(J(160));Ny(s,r,a),Ce=null,gn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)By(t,e),t=t.sibling}var li=null;function By(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pn(t,e),mn(e),i&4&&(Fa(3,e,e.return),_l(3,e),Fa(5,e,e.return));break;case 1:pn(t,e),mn(e),i&512&&(ze||n===null||Mi(n,n.return)),i&64&&ki&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=li;if(pn(t,e),mn(e),i&512&&(ze||n===null||Mi(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[pl]||s[je]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),en(s,i,n),s[je]=e,Ze(s),i=s;break t;case"link":var r=Lv("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}s=a.createElement(i),en(s,i,n),a.head.appendChild(s);break;case"meta":if(r=Lv("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}s=a.createElement(i),en(s,i,n),a.head.appendChild(s);break;default:throw Error(J(468,i))}s[je]=e,Ze(s),i=s}e.stateNode=i}else Ov(a,e.type,e.stateNode);else e.stateNode=Uv(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?Ov(a,e.type,e.stateNode):Uv(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&ud(e,e.memoizedProps,n.memoizedProps)}break;case 27:pn(t,e),mn(e),i&512&&(ze||n===null||Mi(n,n.return)),n!==null&&i&4&&ud(e,e.memoizedProps,n.memoizedProps);break;case 5:if(pn(t,e),mn(e),i&512&&(ze||n===null||Mi(n,n.return)),e.flags&32){a=e.stateNode;try{wr(a,"")}catch(v){ue(e,e.return,v)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,ud(e,a,n!==null?n.memoizedProps:a)),i&1024&&(fd=!0);break;case 6:if(pn(t,e),mn(e),i&4){if(e.stateNode===null)throw Error(J(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(v){ue(e,e.return,v)}}break;case 3:if(zc=null,a=li,li=hu(t.containerInfo),pn(t,e),li=a,mn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ir(t.containerInfo)}catch(v){ue(e,e.return,v)}fd&&(fd=!1,zy(e));break;case 4:i=li,li=hu(e.stateNode.containerInfo),pn(t,e),mn(e),li=i;break;case 12:pn(t,e),mn(e);break;case 31:pn(t,e),mn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,xc(e,i)));break;case 13:pn(t,e),mn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(wu=Dn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,xc(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=ki,h=ze;if(ki=c||a,ze=h||l,pn(t,e),ze=h,ki=c,mn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||ki||ze||ds(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,f=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(v){ue(l,l.return,v)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(v){ue(l,l.return,v)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;a?Av(p,!0):Av(l.stateNode,!1)}catch(v){ue(l,l.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,xc(e,n))));break;case 19:pn(t,e),mn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,xc(e,i)));break;case 30:break;case 21:break;default:pn(t,e),mn(e)}}function mn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Dy(i)){n=i;break}i=i.return}if(n==null)throw Error(J(160));switch(n.tag){case 27:var a=n.stateNode,s=hd(e);iu(e,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(wr(r,""),n.flags&=-33);var o=hd(e);iu(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=hd(e);$d(e,c,l);break;default:throw Error(J(161))}}catch(h){ue(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;zy(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Hi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ly(e,t.alternate,t),t=t.sibling}function ds(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Fa(4,t,t.return),ds(t);break;case 1:Mi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Cy(t,t.return,n),ds(t);break;case 27:Jo(t.stateNode);case 26:case 5:Mi(t,t.return),ds(t);break;case 22:t.memoizedState===null&&ds(t);break;case 30:ds(t);break;default:ds(t)}e=e.sibling}}function Vi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:Vi(a,s,n),_l(4,s);break;case 1:if(Vi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){ue(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)I_(l[a],o)}catch(c){ue(i,i.return,c)}}n&&r&64&&wy(s),Xo(s,s.return);break;case 27:Uy(s);case 26:case 5:Vi(a,s,n),n&&i===null&&r&4&&Ry(s),Xo(s,s.return);break;case 12:Vi(a,s,n);break;case 31:Vi(a,s,n),n&&r&4&&Iy(a,s);break;case 13:Vi(a,s,n),n&&r&4&&Py(a,s);break;case 22:s.memoizedState===null&&Vi(a,s,n),Xo(s,s.return);break;case 30:break;default:Vi(a,s,n)}t=t.sibling}}function jp(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&gl(n))}function $p(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gl(e))}function oi(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fy(e,t,n,i),t=t.sibling}function Fy(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:oi(e,t,n,i),a&2048&&_l(9,t);break;case 1:oi(e,t,n,i);break;case 3:oi(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gl(e)));break;case 12:if(a&2048){oi(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ue(t,t.return,l)}}else oi(e,t,n,i);break;case 31:oi(e,t,n,i);break;case 13:oi(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?oi(e,t,n,i):qo(e,t):s._visibility&2?oi(e,t,n,i):(s._visibility|=2,ar(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&jp(r,t);break;case 24:oi(e,t,n,i),a&2048&&$p(t.alternate,t);break;default:oi(e,t,n,i)}}function ar(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:ar(s,r,o,l,a),_l(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?ar(s,r,o,l,a):qo(s,r):(h._visibility|=2,ar(s,r,o,l,a)),a&&c&2048&&jp(r.alternate,r);break;case 24:ar(s,r,o,l,a),a&&c&2048&&$p(r.alternate,r);break;default:ar(s,r,o,l,a)}t=t.sibling}}function qo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:qo(n,i),a&2048&&jp(i.alternate,i);break;case 24:qo(n,i),a&2048&&$p(i.alternate,i);break;default:qo(n,i)}t=t.sibling}}var Po=8192;function ir(e,t,n){if(e.subtreeFlags&Po)for(e=e.child;e!==null;)Hy(e,t,n),e=e.sibling}function Hy(e,t,n){switch(e.tag){case 26:ir(e,t,n),e.flags&Po&&e.memoizedState!==null&&IE(n,li,e.memoizedState,e.memoizedProps);break;case 5:ir(e,t,n);break;case 3:case 4:var i=li;li=hu(e.stateNode.containerInfo),ir(e,t,n),li=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Po,Po=16777216,ir(e,t,n),Po=i):ir(e,t,n));break;default:ir(e,t,n)}}function Vy(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ro(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ye=i,ky(i,e)}Vy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gy(e),e=e.sibling}function Gy(e){switch(e.tag){case 0:case 11:case 15:Ro(e),e.flags&2048&&Fa(9,e,e.return);break;case 3:Ro(e);break;case 12:Ro(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Pc(e)):Ro(e);break;default:Ro(e)}}function Pc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ye=i,ky(i,e)}Vy(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Fa(8,t,t.return),Pc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Pc(t));break;default:Pc(t)}e=e.sibling}}function ky(e,t){for(;Ye!==null;){var n=Ye;switch(n.tag){case 0:case 11:case 15:Fa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:gl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ye=i;else t:for(n=e;Ye!==null;){i=Ye;var a=i.sibling,s=i.return;if(Oy(i),i===n){Ye=null;break t}if(a!==null){a.return=s,Ye=a;break t}Ye=s}}}var jb={getCacheForType:function(e){var t=tn(Fe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return tn(Fe).controller.signal}},$b=typeof WeakMap=="function"?WeakMap:Map,se=0,_e=null,Qt=null,te=0,ce=0,An=null,Ta=!1,Hr=!1,tm=!1,ta=0,Oe=0,Ha=0,_s=0,em=0,Rn=0,Ur=0,Yo=null,vn=null,tp=!1,wu=0,Wy=0,au=1/0,su=null,La=null,Ge=0,Oa=null,Lr=null,Ji=0,ep=0,np=null,Xy=null,Zo=0,ip=null;function On(){return(se&2)!==0&&te!==0?te&-te:Pt.T!==null?im():t_()}function qy(){if(Rn===0)if((te&536870912)===0||ee){var e=uc;uc<<=1,(uc&3932160)===0&&(uc=262144),Rn=e}else Rn=536870912;return e=In.current,e!==null&&(e.flags|=32),Rn}function _n(e,t,n){(e===_e&&(ce===2||ce===9)||e.cancelPendingCommit!==null)&&(Or(e,0),Aa(e,te,Rn,!1)),dl(e,n),((se&2)===0||e!==_e)&&(e===_e&&((se&2)===0&&(_s|=n),Oe===4&&Aa(e,te,Rn,!1)),Ti(e))}function Yy(e,t,n){if((se&6)!==0)throw Error(J(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||fl(e,t),a=i?nE(e,t):dd(e,t,!0),s=i;do{if(a===0){Hr&&!i&&Aa(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!tE(n)){a=dd(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=Yo;var l=o.current.memoizedState.isDehydrated;if(l&&(Or(o,r).flags|=256),r=dd(o,r,!1),r!==2){if(tm&&!l){o.errorRecoveryDisabledLanes|=s,_s|=s,a=4;break t}s=vn,vn=a,s!==null&&(vn===null?vn=s:vn.push.apply(vn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Or(e,0),Aa(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(J(345));case 4:if((t&4194048)!==t)break;case 6:Aa(i,t,Rn,!Ta);break t;case 2:vn=null;break;case 3:case 5:break;default:throw Error(J(329))}if((t&62914560)===t&&(a=wu+300-Dn(),10<a)){if(Aa(i,t,Rn,!Ta),gu(i,0,!0)!==0)break t;Ji=t,i.timeoutHandle=dx(hv.bind(null,i,n,vn,su,tp,t,Rn,_s,Ur,Ta,s,"Throttled",-0,0),a);break t}hv(i,n,vn,su,tp,t,Rn,_s,Ur,Ta,s,null,-0,0)}}break}while(!0);Ti(e)}function hv(e,t,n,i,a,s,r,o,l,c,h,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},Hy(t,s,d);var v=(s&62914560)===s?wu-Dn():(s&4194048)===s?Wy-Dn():0;if(v=PE(d,v),v!==null){Ji=s,e.cancelPendingCommit=v(dv.bind(null,e,t,s,n,i,a,r,o,l,h,d,null,f,p)),Aa(e,s,r,!c);return}}dv(e,t,s,n,i,a,r,o,l)}function tE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!Nn(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Aa(e,t,n,i){t&=~em,t&=~_s,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-Ln(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&Qv(e,n,t)}function Cu(){return(se&6)===0?(yl(0,!1),!1):!0}function nm(){if(Qt!==null){if(ce===0)var e=Qt.return;else e=Qt,qi=Cs=null,Vp(e),Mr=null,nl=0,e=Qt;for(;e!==null;)Ay(e.alternate,e),e=e.return;Qt=null}}function Or(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,_E(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ji=0,nm(),_e=e,Qt=n=Yi(e.current,null),te=t,ce=0,An=null,Ta=!1,Hr=fl(e,t),tm=!1,Ur=Rn=em=_s=Ha=Oe=0,vn=Yo=null,tp=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Ln(i),s=1<<a;t|=e[a],i&=~s}return ta=t,xu(),n}function Zy(e,t){Wt=null,Pt.H=al,t===Fr||t===Mu?(t=kg(),ce=3):t===Np?(t=kg(),ce=4):ce=t===Kp?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,An=t,Qt===null&&(Oe=1,eu(e,Qn(t,e.current)))}function Jy(){var e=In.current;return e===null?!0:(te&4194048)===te?$n===null:(te&62914560)===te||(te&536870912)!==0?e===$n:!1}function Ky(){var e=Pt.H;return Pt.H=al,e===null?al:e}function Qy(){var e=Pt.A;return Pt.A=jb,e}function ru(){Oe=4,Ta||(te&4194048)!==te&&In.current!==null||(Hr=!0),(Ha&134217727)===0&&(_s&134217727)===0||_e===null||Aa(_e,te,Rn,!1)}function dd(e,t,n){var i=se;se|=2;var a=Ky(),s=Qy();(_e!==e||te!==t)&&(su=null,Or(e,t)),t=!1;var r=Oe;t:do try{if(ce!==0&&Qt!==null){var o=Qt,l=An;switch(ce){case 8:nm(),r=6;break t;case 3:case 2:case 9:case 6:In.current===null&&(t=!0);var c=ce;if(ce=0,An=null,vr(e,o,l,c),n&&Hr){r=0;break t}break;default:c=ce,ce=0,An=null,vr(e,o,l,c)}}eE(),r=Oe;break}catch(h){Zy(e,h)}while(!0);return t&&e.shellSuspendCounter++,qi=Cs=null,se=i,Pt.H=a,Pt.A=s,Qt===null&&(_e=null,te=0,xu()),r}function eE(){for(;Qt!==null;)jy(Qt)}function nE(e,t){var n=se;se|=2;var i=Ky(),a=Qy();_e!==e||te!==t?(su=null,au=Dn()+500,Or(e,t)):Hr=fl(e,t);t:do try{if(ce!==0&&Qt!==null){t=Qt;var s=An;e:switch(ce){case 1:ce=0,An=null,vr(e,t,s,1);break;case 2:case 9:if(Gg(s)){ce=0,An=null,fv(t);break}t=function(){ce!==2&&ce!==9||_e!==e||(ce=7),Ti(e)},s.then(t,t);break t;case 3:ce=7;break t;case 4:ce=5;break t;case 7:Gg(s)?(ce=0,An=null,fv(t)):(ce=0,An=null,vr(e,t,s,7));break;case 5:var r=null;switch(Qt.tag){case 26:r=Qt.memoizedState;case 5:case 27:var o=Qt;if(r?_x(r):o.stateNode.complete){ce=0,An=null;var l=o.sibling;if(l!==null)Qt=l;else{var c=o.return;c!==null?(Qt=c,Ru(c)):Qt=null}break e}}ce=0,An=null,vr(e,t,s,5);break;case 6:ce=0,An=null,vr(e,t,s,6);break;case 8:nm(),Oe=6;break t;default:throw Error(J(462))}}iE();break}catch(h){Zy(e,h)}while(!0);return qi=Cs=null,Pt.H=i,Pt.A=a,se=n,Qt!==null?0:(_e=null,te=0,xu(),Oe)}function iE(){for(;Qt!==null&&!AM();)jy(Qt)}function jy(e){var t=Ty(e.alternate,e,ta);e.memoizedProps=e.pendingProps,t===null?Ru(e):Qt=t}function fv(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=sv(n,t,t.pendingProps,t.type,void 0,te);break;case 11:t=sv(n,t,t.pendingProps,t.type.render,t.ref,te);break;case 5:Vp(t);default:Ay(n,t),t=Qt=A_(t,ta),t=Ty(n,t,ta)}e.memoizedProps=e.pendingProps,t===null?Ru(e):Qt=t}function vr(e,t,n,i){qi=Cs=null,Vp(t),Mr=null,nl=0;var a=t.return;try{if(Xb(e,a,t,n,te)){Oe=1,eu(e,Qn(n,e.current)),Qt=null;return}}catch(s){if(a!==null)throw Qt=a,s;Oe=1,eu(e,Qn(n,e.current)),Qt=null;return}t.flags&32768?(ee||i===1?e=!0:Hr||(te&536870912)!==0?e=!1:(Ta=e=!0,(i===2||i===9||i===3||i===6)&&(i=In.current,i!==null&&i.tag===13&&(i.flags|=16384))),$y(t,e)):Ru(t)}function Ru(e){var t=e;do{if((t.flags&32768)!==0){$y(t,Ta);return}e=t.return;var n=Zb(t.alternate,t,ta);if(n!==null){Qt=n;return}if(t=t.sibling,t!==null){Qt=t;return}Qt=t=e}while(t!==null);Oe===0&&(Oe=5)}function $y(e,t){do{var n=Jb(e.alternate,e);if(n!==null){n.flags&=32767,Qt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Qt=e;return}Qt=e=n}while(e!==null);Oe=6,Qt=null}function dv(e,t,n,i,a,s,r,o,l){e.cancelPendingCommit=null;do Du();while(Ge!==0);if((se&6)!==0)throw Error(J(327));if(t!==null){if(t===e.current)throw Error(J(177));if(s=t.lanes|t.childLanes,s|=wp,PM(e,n,s,r,o,l),e===_e&&(Qt=_e=null,te=0),Lr=t,Oa=e,Ji=n,ep=s,np=a,Xy=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,oE(Wc,function(){return ax(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Pt.T,Pt.T=null,a=re.p,re.p=2,r=se,se|=4;try{Kb(e,t,n)}finally{se=r,re.p=a,Pt.T=i}}Ge=1,tx(),ex(),nx()}}function tx(){if(Ge===1){Ge=0;var e=Oa,t=Lr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Pt.T,Pt.T=null;var i=re.p;re.p=2;var a=se;se|=4;try{By(t,e);var s=op,r=__(e.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&v_(o.ownerDocument.documentElement,o)){if(l!==null&&Ap(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),v=o.textContent.length,x=Math.min(l.start,v),m=l.end===void 0?x:Math.min(l.end,v);!p.extend&&x>m&&(r=m,m=x,x=r);var u=Ig(o,x),g=Ig(o,m);if(u&&g&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var y=d.createRange();y.setStart(u.node,u.offset),p.removeAllRanges(),x>m?(p.addRange(y),p.extend(g.node,g.offset)):(y.setEnd(g.node,g.offset),p.addRange(y))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var _=d[o];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}pu=!!rp,op=rp=null}finally{se=a,re.p=i,Pt.T=n}}e.current=t,Ge=2}}function ex(){if(Ge===2){Ge=0;var e=Oa,t=Lr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Pt.T,Pt.T=null;var i=re.p;re.p=2;var a=se;se|=4;try{Ly(e,t.alternate,t)}finally{se=a,re.p=i,Pt.T=n}}Ge=3}}function nx(){if(Ge===4||Ge===3){Ge=0,wM();var e=Oa,t=Lr,n=Ji,i=Xy;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ge=5:(Ge=0,Lr=Oa=null,ix(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(La=null),yp(n),t=t.stateNode,Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(hl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Pt.T,a=re.p,re.p=2,Pt.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Pt.T=t,re.p=a}}(Ji&3)!==0&&Du(),Ti(e),a=e.pendingLanes,(n&261930)!==0&&(a&42)!==0?e===ip?Zo++:(Zo=0,ip=e):Zo=0,yl(0,!1)}}function ix(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,gl(t)))}function Du(){return tx(),ex(),nx(),ax()}function ax(){if(Ge!==5)return!1;var e=Oa,t=ep;ep=0;var n=yp(Ji),i=Pt.T,a=re.p;try{re.p=32>n?32:n,Pt.T=null,n=np,np=null;var s=Oa,r=Ji;if(Ge=0,Lr=Oa=null,Ji=0,(se&6)!==0)throw Error(J(331));var o=se;if(se|=4,Gy(s.current),Fy(s,s.current,r,n),se=o,yl(0,!1),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(hl,s)}catch{}return!0}finally{re.p=a,Pt.T=i,ix(e,t)}}function pv(e,t,n){t=Qn(n,t),t=Kd(e.stateNode,t,2),e=Ua(e,t,2),e!==null&&(dl(e,2),Ti(e))}function ue(e,t,n){if(e.tag===3)pv(e,e,n);else for(;t!==null;){if(t.tag===3){pv(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(La===null||!La.has(i))){e=Qn(n,e),n=yy(2),i=Ua(t,n,2),i!==null&&(xy(n,i,t,e),dl(i,2),Ti(i));break}}t=t.return}}function pd(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new $b;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(tm=!0,a.add(n),e=aE.bind(null,e,t,n),t.then(e,e))}function aE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,_e===e&&(te&n)===n&&(Oe===4||Oe===3&&(te&62914560)===te&&300>Dn()-wu?(se&2)===0&&Or(e,0):em|=n,Ur===te&&(Ur=0)),Ti(e)}function sx(e,t){t===0&&(t=Kv()),e=ws(e,t),e!==null&&(dl(e,t),Ti(e))}function sE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sx(e,n)}function rE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(J(314))}i!==null&&i.delete(t),sx(e,n)}function oE(e,t){return vp(e,t)}var ou=null,sr=null,ap=!1,lu=!1,md=!1,wa=0;function Ti(e){e!==sr&&e.next===null&&(sr===null?ou=sr=e:sr=sr.next=e),lu=!0,ap||(ap=!0,cE())}function yl(e,t){if(!md&&lu){md=!0;do for(var n=!1,i=ou;i!==null;){if(!t)if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Ln(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,mv(i,s))}else s=te,s=gu(i,i===_e?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||fl(i,s)||(n=!0,mv(i,s));i=i.next}while(n);md=!1}}function lE(){rx()}function rx(){lu=ap=!1;var e=0;wa!==0&&vE()&&(e=wa);for(var t=Dn(),n=null,i=ou;i!==null;){var a=i.next,s=ox(i,t);s===0?(i.next=null,n===null?ou=a:n.next=a,a===null&&(sr=n)):(n=i,(e!==0||(s&3)!==0)&&(lu=!0)),i=a}Ge!==0&&Ge!==5||yl(e,!1),wa!==0&&(wa=0)}function ox(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Ln(s),o=1<<r,l=a[r];l===-1?((o&n)===0||(o&i)!==0)&&(a[r]=IM(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=_e,n=te,n=gu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ce===2||ce===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Wf(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||fl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Wf(i),yp(n)){case 2:case 8:n=Zv;break;case 32:n=Wc;break;case 268435456:n=Jv;break;default:n=Wc}return i=lx.bind(null,e),n=vp(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Wf(i),e.callbackPriority=2,e.callbackNode=null,2}function lx(e,t){if(Ge!==0&&Ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Du()&&e.callbackNode!==n)return null;var i=te;return i=gu(e,e===_e?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Yy(e,i,t),ox(e,Dn()),e.callbackNode!=null&&e.callbackNode===n?lx.bind(null,e):null)}function mv(e,t){if(Du())return null;Yy(e,t,!0)}function cE(){yE(function(){(se&6)!==0?vp(Yv,lE):rx()})}function im(){if(wa===0){var e=Cr;e===0&&(e=cc,cc<<=1,(cc&261888)===0&&(cc=256)),wa=e}return wa}function gv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wc(""+e)}function vv(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function uE(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=gv((a[yn]||null).action),r=i.submitter;r&&(t=(t=r[yn]||null)?gv(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new vu("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(wa!==0){var l=r?vv(a,r):new FormData(a);Zd(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?vv(a,r):new FormData(a),Zd(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(Sc=0;Sc<Pd.length;Sc++)Mc=Pd[Sc],_v=Mc.toLowerCase(),yv=Mc[0].toUpperCase()+Mc.slice(1),ci(_v,"on"+yv);var Mc,_v,yv,Sc;ci(x_,"onAnimationEnd");ci(S_,"onAnimationIteration");ci(M_,"onAnimationStart");ci("dblclick","onDoubleClick");ci("focusin","onFocus");ci("focusout","onBlur");ci(Cb,"onTransitionRun");ci(Rb,"onTransitionStart");ci(Db,"onTransitionCancel");ci(b_,"onTransitionEnd");Ar("onMouseEnter",["mouseout","mouseover"]);Ar("onMouseLeave",["mouseout","mouseover"]);Ar("onPointerEnter",["pointerout","pointerover"]);Ar("onPointerLeave",["pointerout","pointerover"]);Es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Es("onBeforeInput",["compositionend","keypress","textInput","paste"]);Es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sl));function cx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(h){qc(h)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(h){qc(h)}a.currentTarget=null,s=l}}}}function Kt(e,t){var n=t[Cd];n===void 0&&(n=t[Cd]=new Set);var i=e+"__bubble";n.has(i)||(ux(t,e,2,!1),n.add(i))}function gd(e,t,n){var i=0;t&&(i|=4),ux(n,e,i,t)}var bc="_reactListening"+Math.random().toString(36).slice(2);function am(e){if(!e[bc]){e[bc]=!0,e_.forEach(function(n){n!=="selectionchange"&&(hE.has(n)||gd(n,!1,e),gd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bc]||(t[bc]=!0,gd("selectionchange",!1,t))}}function ux(e,t,n,i){switch(bx(t)){case 2:var a=FE;break;case 8:a=HE;break;default:a=lm}n=a.bind(null,t,n,e),a=void 0,!Od||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function vd(e,t,n,i,a){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=lr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}c_(function(){var c=s,h=Mp(n),d=[];t:{var f=E_.get(e);if(f!==void 0){var p=vu,v=e;switch(e){case"keypress":if(Rc(n)===0)break t;case"keydown":case"keyup":p=rb;break;case"focusin":v="focus",p=Jf;break;case"focusout":v="blur",p=Jf;break;case"beforeblur":case"afterblur":p=Jf;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ag;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ZM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=cb;break;case x_:case S_:case M_:p=QM;break;case b_:p=hb;break;case"scroll":case"scrollend":p=qM;break;case"wheel":p=db;break;case"copy":case"cut":case"paste":p=$M;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Cg;break;case"toggle":case"beforetoggle":p=mb}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),u=x?f!==null?f+"Capture":null:f;x=[];for(var g=c,y;g!==null;){var _=g;if(y=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||y===null||u===null||(_=Qo(g,u),_!=null&&x.push(rl(g,_,y))),m)break;g=g.return}0<x.length&&(f=new p(f,v,null,n,h),d.push({event:f,listeners:x}))}}if((t&7)===0){t:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==Ld&&(v=n.relatedTarget||n.fromElement)&&(lr(v)||v[Pr]))break t;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?lr(v):null,v!==null&&(m=ul(v),x=v.tag,v!==m||x!==5&&x!==27&&x!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=Ag,_="onMouseLeave",u="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(x=Cg,_="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?f:No(p),y=v==null?f:No(v),f=new x(_,g+"leave",p,n,h),f.target=m,f.relatedTarget=y,_=null,lr(h)===c&&(x=new x(u,g+"enter",v,n,h),x.target=y,x.relatedTarget=m,_=x),m=_,p&&v)e:{for(x=fE,u=p,g=v,y=0,_=u;_;_=x(_))y++;_=0;for(var w=g;w;w=x(w))_++;for(;0<y-_;)u=x(u),y--;for(;0<_-y;)g=x(g),_--;for(;y--;){if(u===g||g!==null&&u===g.alternate){x=u;break e}u=x(u),g=x(g)}x=null}else x=null;p!==null&&xv(d,f,p,x,!1),v!==null&&m!==null&&xv(d,m,v,x,!0)}}t:{if(f=c?No(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var U=Lg;else if(Ug(f))if(m_)U=Tb;else{U=bb;var T=Mb}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&Sp(c.elementType)&&(U=Lg):U=Eb;if(U&&(U=U(e,c))){p_(d,U,n,h);break t}T&&T(e,f,c),e==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&Ud(f,"number",f.value)}switch(T=c?No(c):window,e){case"focusin":(Ug(T)||T.contentEditable==="true")&&(hr=T,Nd=c,Fo=null);break;case"focusout":Fo=Nd=hr=null;break;case"mousedown":Id=!0;break;case"contextmenu":case"mouseup":case"dragend":Id=!1,Pg(d,n,h);break;case"selectionchange":if(wb)break;case"keydown":case"keyup":Pg(d,n,h)}var D;if(Tp)t:{switch(e){case"compositionstart":var M="onCompositionStart";break t;case"compositionend":M="onCompositionEnd";break t;case"compositionupdate":M="onCompositionUpdate";break t}M=void 0}else ur?f_(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(h_&&n.locale!=="ko"&&(ur||M!=="onCompositionStart"?M==="onCompositionEnd"&&ur&&(D=u_()):(Ea=h,bp="value"in Ea?Ea.value:Ea.textContent,ur=!0)),T=cu(c,M),0<T.length&&(M=new wg(M,e,null,n,h),d.push({event:M,listeners:T}),D?M.data=D:(D=d_(n),D!==null&&(M.data=D)))),(D=vb?_b(e,n):yb(e,n))&&(M=cu(c,"onBeforeInput"),0<M.length&&(T=new wg("onBeforeInput","beforeinput",null,n,h),d.push({event:T,listeners:M}),T.data=D)),uE(d,e,c,n,h)}cx(d,t)})}function rl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function cu(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=Qo(e,n),a!=null&&i.unshift(rl(e,a,s)),a=Qo(e,t),a!=null&&i.push(rl(e,a,s))),e.tag===3)return i;e=e.return}return[]}function fE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xv(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=Qo(n,s),c!=null&&r.unshift(rl(n,c,l))):a||(c=Qo(n,s),c!=null&&r.push(rl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var dE=/\r\n?/g,pE=/\u0000|\uFFFD/g;function Sv(e){return(typeof e=="string"?e:""+e).replace(dE,`
`).replace(pE,"")}function hx(e,t){return t=Sv(t),Sv(e)===t}function pe(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||wr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&wr(e,""+i);break;case"className":fc(e,"class",i);break;case"tabIndex":fc(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":fc(e,n,i);break;case"style":l_(e,i,s);break;case"data":if(t!=="object"){fc(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=wc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&pe(e,t,"name",a.name,a,null),pe(e,t,"formEncType",a.formEncType,a,null),pe(e,t,"formMethod",a.formMethod,a,null),pe(e,t,"formTarget",a.formTarget,a,null)):(pe(e,t,"encType",a.encType,a,null),pe(e,t,"method",a.method,a,null),pe(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=wc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Xi);break;case"onScroll":i!=null&&Kt("scroll",e);break;case"onScrollEnd":i!=null&&Kt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(J(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=wc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Kt("beforetoggle",e),Kt("toggle",e),Ac(e,"popover",i);break;case"xlinkActuate":Bi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Bi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Bi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Bi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Bi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Bi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Bi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Bi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Bi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ac(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=WM.get(n)||n,Ac(e,n,i))}}function sp(e,t,n,i,a,s){switch(n){case"style":l_(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(J(60));e.innerHTML=n}}break;case"children":typeof i=="string"?wr(e,i):(typeof i=="number"||typeof i=="bigint")&&wr(e,""+i);break;case"onScroll":i!=null&&Kt("scroll",e);break;case"onScrollEnd":i!=null&&Kt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Xi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!n_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[yn]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Ac(e,n,i)}}}function en(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Kt("error",e),Kt("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:pe(e,t,s,r,n,null)}}a&&pe(e,t,"srcSet",n.srcSet,n,null),i&&pe(e,t,"src",n.src,n,null);return;case"input":Kt("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":s=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(J(137,t));break;default:pe(e,t,i,h,n,null)}}s_(e,s,o,l,c,r,a,!1);return;case"select":Kt("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:pe(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?yr(e,!!i,t,!1):n!=null&&yr(e,!!i,n,!0);return;case"textarea":Kt("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(J(91));break;default:pe(e,t,r,o,n,null)}o_(e,i,a,s);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":pe(e,t,l,i,n,null));return;case"dialog":Kt("beforetoggle",e),Kt("toggle",e),Kt("cancel",e),Kt("close",e);break;case"iframe":case"object":Kt("load",e);break;case"video":case"audio":for(i=0;i<sl.length;i++)Kt(sl[i],e);break;case"image":Kt("error",e),Kt("load",e);break;case"details":Kt("toggle",e);break;case"embed":case"source":case"link":Kt("error",e),Kt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:pe(e,t,c,i,n,null)}return;default:if(Sp(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&sp(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&pe(e,t,o,i,n,null))}function mE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||pe(e,t,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":s=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":h=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(J(137,t));break;default:p!==d&&pe(e,t,f,p,i,d)}}Dd(e,r,o,l,c,h,s,a);return;case"select":p=r=o=f=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(s)||pe(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":f=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&pe(e,t,a,s,i,l)}t=o,n=r,i=p,f!=null?yr(e,!!n,f,!1):!!i!=!!n&&(t!=null?yr(e,!!n,t,!0):yr(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:pe(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":f=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(J(91));break;default:a!==s&&pe(e,t,r,a,i,s)}r_(e,f,p);return;case"option":for(var v in n)f=n[v],n.hasOwnProperty(v)&&f!=null&&!i.hasOwnProperty(v)&&(v==="selected"?e.selected=!1:pe(e,t,v,null,i,f));for(l in i)f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null)&&(l==="selected"?e.selected=f&&typeof f!="function"&&typeof f!="symbol":pe(e,t,l,f,i,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)f=n[x],n.hasOwnProperty(x)&&f!=null&&!i.hasOwnProperty(x)&&pe(e,t,x,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(J(137,t));break;default:pe(e,t,c,f,i,p)}return;default:if(Sp(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&sp(e,t,m,void 0,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f===void 0&&p===void 0||sp(e,t,h,f,i,p);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&pe(e,t,u,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||pe(e,t,d,f,i,p)}function Mv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&Mv(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,d=l.initiatorType;h&&Mv(d)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var rp=null,op=null;function uu(e){return e.nodeType===9?e:e.ownerDocument}function bv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fx(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function lp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _d=null;function vE(){var e=window.event;return e&&e.type==="popstate"?e===_d?!1:(_d=e,!0):(_d=null,!1)}var dx=typeof setTimeout=="function"?setTimeout:void 0,_E=typeof clearTimeout=="function"?clearTimeout:void 0,Ev=typeof Promise=="function"?Promise:void 0,yE=typeof queueMicrotask=="function"?queueMicrotask:typeof Ev<"u"?function(e){return Ev.resolve(null).then(e).catch(xE)}:dx;function xE(e){setTimeout(function(){throw e})}function Ga(e){return e==="head"}function Tv(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Ir(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Jo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Jo(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[pl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Jo(e.ownerDocument.body);n=a}while(n);Ir(t)}function Av(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function cp(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":cp(n),xp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function SE(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[pl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=ti(e.nextSibling),e===null)break}return null}function ME(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ti(e.nextSibling),e===null))return null;return e}function px(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ti(e.nextSibling),e===null))return null;return e}function up(e){return e.data==="$?"||e.data==="$~"}function hp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function bE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ti(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var fp=null;function wv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ti(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Cv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function mx(e,t,n){switch(t=uu(n),e){case"html":if(e=t.documentElement,!e)throw Error(J(452));return e;case"head":if(e=t.head,!e)throw Error(J(453));return e;case"body":if(e=t.body,!e)throw Error(J(454));return e;default:throw Error(J(451))}}function Jo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xp(e)}var ei=new Map,Rv=new Set;function hu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ea=re.d;re.d={f:EE,r:TE,D:AE,C:wE,L:CE,m:RE,X:UE,S:DE,M:LE};function EE(){var e=ea.f(),t=Cu();return e||t}function TE(e){var t=Br(e);t!==null&&t.tag===5&&t.type==="form"?ly(t):ea.r(e)}var Vr=typeof document>"u"?null:document;function gx(e,t,n){var i=Vr;if(i&&typeof t=="string"&&t){var a=Kn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Rv.has(a)||(Rv.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),en(t,"link",e),Ze(t),i.head.appendChild(t)))}}function AE(e){ea.D(e),gx("dns-prefetch",e,null)}function wE(e,t){ea.C(e,t),gx("preconnect",e,t)}function CE(e,t,n){ea.L(e,t,n);var i=Vr;if(i&&e&&t){var a='link[rel="preload"][as="'+Kn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Kn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Kn(n.imageSizes)+'"]')):a+='[href="'+Kn(e)+'"]';var s=a;switch(t){case"style":s=Nr(e);break;case"script":s=Gr(e)}ei.has(s)||(e=Te({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ei.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(xl(s))||t==="script"&&i.querySelector(Sl(s))||(t=i.createElement("link"),en(t,"link",e),Ze(t),i.head.appendChild(t)))}}function RE(e,t){ea.m(e,t);var n=Vr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Kn(i)+'"][href="'+Kn(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Gr(e)}if(!ei.has(s)&&(e=Te({rel:"modulepreload",href:e},t),ei.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Sl(s)))return}i=n.createElement("link"),en(i,"link",e),Ze(i),n.head.appendChild(i)}}}function DE(e,t,n){ea.S(e,t,n);var i=Vr;if(i&&e){var a=_r(i).hoistableStyles,s=Nr(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(xl(s)))o.loading=5;else{e=Te({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ei.get(s))&&sm(e,n);var l=r=i.createElement("link");Ze(l),en(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Bc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function UE(e,t){ea.X(e,t);var n=Vr;if(n&&e){var i=_r(n).hoistableScripts,a=Gr(e),s=i.get(a);s||(s=n.querySelector(Sl(a)),s||(e=Te({src:e,async:!0},t),(t=ei.get(a))&&rm(e,t),s=n.createElement("script"),Ze(s),en(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function LE(e,t){ea.M(e,t);var n=Vr;if(n&&e){var i=_r(n).hoistableScripts,a=Gr(e),s=i.get(a);s||(s=n.querySelector(Sl(a)),s||(e=Te({src:e,async:!0,type:"module"},t),(t=ei.get(a))&&rm(e,t),s=n.createElement("script"),Ze(s),en(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function Dv(e,t,n,i){var a=(a=Ca.current)?hu(a):null;if(!a)throw Error(J(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Nr(n.href),n=_r(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Nr(n.href);var s=_r(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(xl(e)))&&!s._p&&(r.instance=s,r.state.loading=5),ei.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ei.set(e,n),s||OE(a,e,n,r.state))),t&&i===null)throw Error(J(528,""));return r}if(t&&i!==null)throw Error(J(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Gr(n),n=_r(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(J(444,e))}}function Nr(e){return'href="'+Kn(e)+'"'}function xl(e){return'link[rel="stylesheet"]['+e+"]"}function vx(e){return Te({},e,{"data-precedence":e.precedence,precedence:null})}function OE(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),en(t,"link",n),Ze(t),e.head.appendChild(t))}function Gr(e){return'[src="'+Kn(e)+'"]'}function Sl(e){return"script[async]"+e}function Uv(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Kn(n.href)+'"]');if(i)return t.instance=i,Ze(i),i;var a=Te({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Ze(i),en(i,"style",a),Bc(i,n.precedence,e),t.instance=i;case"stylesheet":a=Nr(n.href);var s=e.querySelector(xl(a));if(s)return t.state.loading|=4,t.instance=s,Ze(s),s;i=vx(n),(a=ei.get(a))&&sm(i,a),s=(e.ownerDocument||e).createElement("link"),Ze(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),en(s,"link",i),t.state.loading|=4,Bc(s,n.precedence,e),t.instance=s;case"script":return s=Gr(n.src),(a=e.querySelector(Sl(s)))?(t.instance=a,Ze(a),a):(i=n,(a=ei.get(s))&&(i=Te({},n),rm(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Ze(a),en(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(J(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Bc(i,n.precedence,e));return t.instance}function Bc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function sm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function rm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var zc=null;function Lv(e,t,n){if(zc===null){var i=new Map,a=zc=new Map;a.set(n,i)}else a=zc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[pl]||s[je]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function Ov(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function NE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function _x(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function IE(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Nr(i.href),s=t.querySelector(xl(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=fu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,Ze(s);return}s=t.ownerDocument||t,i=vx(i),(a=ei.get(a))&&sm(i,a),s=s.createElement("link"),Ze(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),en(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=fu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var yd=0;function PE(e,t){return e.stylesheets&&e.count===0&&Fc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Fc(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&yd===0&&(yd=62500*gE());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Fc(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>yd?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function fu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var du=null;function Fc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,du=new Map,t.forEach(BE,e),du=null,fu.call(e))}function BE(e,t){if(!(t.state.loading&4)){var n=du.get(e);if(n)var i=n.get(null);else{n=new Map,du.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=fu.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var ol={$$typeof:Wi,Provider:null,Consumer:null,_currentValue:ps,_currentValue2:ps,_threadCount:0};function zE(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xf(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xf(0),this.hiddenUpdates=Xf(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function yx(e,t,n,i,a,s,r,o,l,c,h,d){return e=new zE(e,t,n,r,l,c,h,d,o),t=1,s===!0&&(t|=24),s=Cn(3,null,null,t),e.current=s,s.stateNode=e,t=Lp(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},Ip(s),e}function xx(e){return e?(e=pr,e):pr}function Sx(e,t,n,i,a,s){a=xx(a),i.context===null?i.context=a:i.pendingContext=a,i=Da(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Ua(e,i,t),n!==null&&(_n(n,e,t),Vo(n,e,t))}function Nv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function om(e,t){Nv(e,t),(e=e.alternate)&&Nv(e,t)}function Mx(e){if(e.tag===13||e.tag===31){var t=ws(e,67108864);t!==null&&_n(t,e,67108864),om(e,67108864)}}function Iv(e){if(e.tag===13||e.tag===31){var t=On();t=_p(t);var n=ws(e,t);n!==null&&_n(n,e,t),om(e,t)}}var pu=!0;function FE(e,t,n,i){var a=Pt.T;Pt.T=null;var s=re.p;try{re.p=2,lm(e,t,n,i)}finally{re.p=s,Pt.T=a}}function HE(e,t,n,i){var a=Pt.T;Pt.T=null;var s=re.p;try{re.p=8,lm(e,t,n,i)}finally{re.p=s,Pt.T=a}}function lm(e,t,n,i){if(pu){var a=dp(i);if(a===null)vd(e,t,i,mu,n),Pv(e,i);else if(GE(a,e,t,n,i))i.stopPropagation();else if(Pv(e,i),t&4&&-1<VE.indexOf(e)){for(;a!==null;){var s=Br(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=hs(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Ln(r);o.entanglements[1]|=l,r&=~l}Ti(s),(se&6)===0&&(au=Dn()+500,yl(0,!1))}}break;case 31:case 13:o=ws(s,2),o!==null&&_n(o,s,2),Cu(),om(s,2)}if(s=dp(i),s===null&&vd(e,t,i,mu,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else vd(e,t,i,null,n)}}function dp(e){return e=Mp(e),cm(e)}var mu=null;function cm(e){if(mu=null,e=lr(e),e!==null){var t=ul(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Gv(t),e!==null)return e;e=null}else if(n===31){if(e=kv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return mu=e,null}function bx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(CM()){case Yv:return 2;case Zv:return 8;case Wc:case RM:return 32;case Jv:return 268435456;default:return 32}default:return 32}}var pp=!1,Na=null,Ia=null,Pa=null,ll=new Map,cl=new Map,Ma=[],VE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pv(e,t){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":ll.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(t.pointerId)}}function Do(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Br(t),t!==null&&Mx(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function GE(e,t,n,i,a){switch(t){case"focusin":return Na=Do(Na,e,t,n,i,a),!0;case"dragenter":return Ia=Do(Ia,e,t,n,i,a),!0;case"mouseover":return Pa=Do(Pa,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return ll.set(s,Do(ll.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,cl.set(s,Do(cl.get(s)||null,e,t,n,i,a)),!0}return!1}function Ex(e){var t=lr(e.target);if(t!==null){var n=ul(t);if(n!==null){if(t=n.tag,t===13){if(t=Gv(n),t!==null){e.blockedOn=t,yg(e.priority,function(){Iv(n)});return}}else if(t===31){if(t=kv(n),t!==null){e.blockedOn=t,yg(e.priority,function(){Iv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ld=i,n.target.dispatchEvent(i),Ld=null}else return t=Br(n),t!==null&&Mx(t),e.blockedOn=n,!1;t.shift()}return!0}function Bv(e,t,n){Hc(e)&&n.delete(t)}function kE(){pp=!1,Na!==null&&Hc(Na)&&(Na=null),Ia!==null&&Hc(Ia)&&(Ia=null),Pa!==null&&Hc(Pa)&&(Pa=null),ll.forEach(Bv),cl.forEach(Bv)}function Ec(e,t){e.blockedOn===t&&(e.blockedOn=null,pp||(pp=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,kE)))}var Tc=null;function zv(e){Tc!==e&&(Tc=e,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,function(){Tc===e&&(Tc=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(cm(i||n)===null)continue;break}var s=Br(n);s!==null&&(e.splice(t,3),t-=3,Zd(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Ir(e){function t(l){return Ec(l,e)}Na!==null&&Ec(Na,e),Ia!==null&&Ec(Ia,e),Pa!==null&&Ec(Pa,e),ll.forEach(t),cl.forEach(t);for(var n=0;n<Ma.length;n++){var i=Ma[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ma.length&&(n=Ma[0],n.blockedOn===null);)Ex(n),n.blockedOn===null&&Ma.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[yn]||null;if(typeof s=="function")r||zv(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[yn]||null)o=r.formAction;else if(cm(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),zv(n)}}}function Tx(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function um(e){this._internalRoot=e}Uu.prototype.render=um.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(J(409));var n=t.current,i=On();Sx(n,i,e,t,null,null)};Uu.prototype.unmount=um.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sx(e.current,2,null,e,null,null),Cu(),t[Pr]=null}};function Uu(e){this._internalRoot=e}Uu.prototype.unstable_scheduleHydration=function(e){if(e){var t=t_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ma.length&&t!==0&&t<Ma[n].priority;n++);Ma.splice(n,0,e),n===0&&Ex(e)}};var Fv=Hv.version;if(Fv!=="19.2.7")throw Error(J(527,Fv,"19.2.7"));re.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(J(188)):(e=Object.keys(e).join(","),Error(J(268,e)));return e=SM(t),e=e!==null?Wv(e):null,e=e===null?null:e.stateNode,e};var WE={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:Pt,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Uo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Uo.isDisabled&&Uo.supportsFiber))try{hl=Uo.inject(WE),Un=Uo}catch{}var Uo;Lu.createRoot=function(e,t){if(!Vv(e))throw Error(J(299));var n=!1,i="",a=gy,s=vy,r=_y;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=yx(e,1,!1,null,null,n,i,null,a,s,r,Tx),e[Pr]=t.current,am(e),new um(t)};Lu.hydrateRoot=function(e,t,n){if(!Vv(e))throw Error(J(299));var i=!1,a="",s=gy,r=vy,o=_y,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=yx(e,1,!0,t,n??null,i,a,l,s,r,o,Tx),t.context=xx(null),n=t.current,i=On(),i=_p(i),a=Da(i),a.callback=null,Ua(n,a,i),n=i,t.current.lanes=n,dl(t,n),Ti(t),e[Pr]=t.current,am(e),new Uu(t)};Lu.version="19.2.7"});var Rx=vi((r3,Cx)=>{"use strict";function wx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wx)}catch(e){console.error(e)}}wx(),Cx.exports=Ax()});var Ux=vi(Ou=>{"use strict";var XE=Symbol.for("react.transitional.element"),qE=Symbol.for("react.fragment");function Dx(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:XE,type:e,key:i,ref:t!==void 0?t:null,props:n}}Ou.Fragment=qE;Ou.jsx=Dx;Ou.jsxs=Dx});var kr=vi((l3,Lx)=>{"use strict";Lx.exports=Ux()});var rs=_i(js()),z1=_i(Rx()),F1=_i(Hf());var _o=_i(kr(),1),Bt=_i(js(),1);var Kx=0,Hm=1,Qx=2;var Vm=1,jx=2,Di=3,la=0,fn=1,Ui=2,fa=0,ca=1,Gm=2,km=3,Wm=4,$x=5,Qa=100,tS=101,eS=102,nS=103,iS=104,aS=200,sS=201,rS=202,oS=203,$u=204,th=205,lS=206,cS=207,uS=208,hS=209,fS=210,dS=211,pS=212,mS=213,gS=214,bh=0,Eh=1,Th=2,Is=3,Ah=4,wh=5,Ch=6,Rh=7,Xm=0,vS=1,_S=2,da=0,yS=1,xS=2,SS=3,MS=4,bS=5,ES=6,TS=7;var qm=300,Vs=301,Gs=302,Dh=303,Uh=304,Gl=306,eh=1e3,Ka=1001,nh=1002,ii=1003,AS=1004;var kl=1005;var pi=1006,Lh=1007;var ns=1008;var Li=1009,Ym=1010,Zm=1011,co=1012,Oh=1013,is=1014,Oi=1015,uo=1016,Nh=1017,Ih=1018,ho=1020,Jm=35902,Km=1021,Qm=1022,si=1023,io=1026,fo=1027,jm=1028,Ph=1029,$m=1030,Bh=1031;var zh=1033,Wl=33776,Xl=33777,ql=33778,Yl=33779,Fh=35840,Hh=35841,Vh=35842,Gh=35843,kh=36196,Wh=37492,Xh=37496,qh=37808,Yh=37809,Zh=37810,Jh=37811,Kh=37812,Qh=37813,jh=37814,$h=37815,tf=37816,ef=37817,nf=37818,af=37819,sf=37820,rf=37821,Zl=36492,of=36494,lf=36495,t0=36283,cf=36284,uf=36285,hf=36286;var wl=2300,ih=2301,ju=2302,Nm=2400,Im=2401,Pm=2402;var wS=3200,CS=3201;var RS=0,DS=1,pa="",zn="srgb",Ps="srgb-linear",Cl="linear",he="srgb";var Os=7680;var Bm=519,US=512,LS=513,OS=514,e0=515,NS=516,IS=517,PS=518,BS=519,zm=35044;var n0="300 es",di=2e3,Rl=2001;var ua=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let a=i[t];if(a!==void 0){let s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var hm=Math.PI/180,ah=180/Math.PI;function Jl(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[e&255]+sn[e>>8&255]+sn[e>>16&255]+sn[e>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function ne(e,t,n){return Math.max(t,Math.min(n,e))}function YE(e,t){return(e%t+t)%t}function fm(e,t,n){return(1-n)*e+n*t}function Ml(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Sn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var oe=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ne(this.x,t.x,n.x),this.y=ne(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ne(this.x,t,n),this.y=ne(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ha=class{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],h=i[a+2],d=i[a+3],f=s[r+0],p=s[r+1],v=s[r+2],x=s[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=v,t[n+3]=x;return}if(d!==x||l!==f||c!==p||h!==v){let m=1-o,u=l*f+c*p+h*v+d*x,g=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){let w=Math.sqrt(y),U=Math.atan2(w,u*g);m=Math.sin(m*U)/w,o=Math.sin(o*U)/w}let _=o*g;if(l=l*m+f*_,c=c*m+p*_,h=h*m+v*_,d=d*m+x*_,m===1-o){let w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,a,s,r){let o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],d=s[r],f=s[r+1],p=s[r+2],v=s[r+3];return t[n]=o*v+h*d+l*p-c*f,t[n+1]=l*v+h*f+c*d-o*p,t[n+2]=c*v+h*p+o*f-l*d,t[n+3]=h*v-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),d=o(s/2),f=l(i/2),p=l(a/2),v=l(s/2);switch(r){case"XYZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"YXZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"ZXY":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"ZYX":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"YZX":this._x=f*h*d+c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d-f*p*v;break;case"XZY":this._x=f*h*d-c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+a*c-s*l,this._y=a*h+r*l+s*o-i*c,this._z=s*h+r*c+i*l-a*o,this._w=r*h-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,a=this._y,s=this._z,r=this._w,o=r*t._w+i*t._x+a*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=a,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=a*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Ox.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Ox.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),h=2*(o*n-s*a),d=2*(s*i-r*n);return this.x=n+l*c+r*d-o*h,this.y=i+l*h+o*c-s*d,this.z=a+l*d+s*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ne(this.x,t.x,n.x),this.y=ne(this.y,t.y,n.y),this.z=ne(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ne(this.x,t,n),this.y=ne(this.y,t,n),this.z=ne(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return dm.copy(this).projectOnVector(t),this.sub(dm)}reflect(t){return this.sub(dm.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dm=new k,Ox=new ha,Xt=class e{constructor(t,n,i,a,s,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],v=i[8],x=a[0],m=a[3],u=a[6],g=a[1],y=a[4],_=a[7],w=a[2],U=a[5],T=a[8];return s[0]=r*x+o*g+l*w,s[3]=r*m+o*y+l*U,s[6]=r*u+o*_+l*T,s[1]=c*x+h*g+d*w,s[4]=c*m+h*y+d*U,s[7]=c*u+h*_+d*T,s[2]=f*x+p*g+v*w,s[5]=f*m+p*y+v*U,s[8]=f*u+p*_+v*T,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*s*h+i*o*l+a*s*c-a*r*l}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,f=o*l-h*s,p=c*s-r*l,v=n*d+i*f+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/v;return t[0]=d*x,t[1]=(a*c-h*i)*x,t[2]=(o*i-a*r)*x,t[3]=f*x,t[4]=(h*n-a*l)*x,t[5]=(a*s-o*n)*x,t[6]=p*x,t[7]=(i*l-c*n)*x,t[8]=(r*n-i*s)*x,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(pm.makeScale(t,n)),this}rotate(t){return this.premultiply(pm.makeRotation(-t)),this}translate(t,n){return this.premultiply(pm.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},pm=new Xt;function i0(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Dl(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function zS(){let e=Dl("canvas");return e.style.display="block",e}var Nx={};function Bs(e){e in Nx||(Nx[e]=!0,console.warn(e))}function FS(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var Ix=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Px=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ZE(){let e={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===he&&(a.r=oa(a.r),a.g=oa(a.g),a.b=oa(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===he&&(a.r=no(a.r),a.g=no(a.g),a.b=no(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===pa?Cl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Bs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Bs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Ps]:{primaries:t,whitePoint:i,transfer:Cl,toXYZ:Ix,fromXYZ:Px,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:t,whitePoint:i,transfer:he,toXYZ:Ix,fromXYZ:Px,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),e}var ie=ZE();function oa(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function no(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Wr,sh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Wr===void 0&&(Wr=Dl("canvas")),Wr.width=t.width,Wr.height=t.height;let a=Wr.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Wr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Dl("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=oa(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(oa(n[i]/255)*255):n[i]=oa(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},JE=0,ao=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=Jl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(mm(a[r].image)):s.push(mm(a[r]))}else s=mm(a);i.url=s}return n||(t.images[this.uuid]=i),i}};function mm(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?sh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var KE=0,gm=new k,Hn=class e extends ua{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Ka,a=Ka,s=pi,r=ns,o=si,l=Li,c=e.DEFAULT_ANISOTROPY,h=pa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=Jl(),this.name="",this.source=new ao(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gm).x}get height(){return this.source.getSize(gm).y}get depth(){return this.source.getSize(gm).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case eh:t.x=t.x-Math.floor(t.x);break;case Ka:t.x=t.x<0?0:1;break;case nh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case eh:t.y=t.y-Math.floor(t.y);break;case Ka:t.y=t.y<0?0:1;break;case nh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=qm;Hn.DEFAULT_ANISOTROPY=1;var Ne=class e{constructor(t=0,n=0,i=0,a=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],v=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let y=(c+1)/2,_=(p+1)/2,w=(u+1)/2,U=(h+f)/4,T=(d+x)/4,D=(v+m)/4;return y>_&&y>w?y<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(y),a=U/i,s=T/i):_>w?_<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(_),i=U/a,s=D/a):w<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(w),i=T/s,a=D/s),this.set(i,a,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(d-x)/g,this.z=(f-h)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ne(this.x,t.x,n.x),this.y=ne(this.y,t.y,n.y),this.z=ne(this.z,t.z,n.z),this.w=ne(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ne(this.x,t,n),this.y=ne(this.y,t,n),this.z=ne(this.z,t,n),this.w=ne(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rh=class extends ua{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ne(0,0,t,n),this.scissorTest=!1,this.viewport=new Ne(0,0,t,n);let a={width:t,height:n,depth:i.depth},s=new Hn(a);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:pi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let a=Object.assign({},t.textures[n].image);this.textures[n].source=new ao(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ci=class extends rh{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Ul=class extends Hn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=ii,this.minFilter=ii,this.wrapR=Ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var oh=class extends Hn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=ii,this.minFilter=ii,this.wrapR=Ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ja=class{constructor(t=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(ui.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(ui.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=ui.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ui):ui.fromBufferAttribute(s,r),ui.applyMatrix4(t.matrixWorld),this.expandByPoint(ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nu.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nu.copy(i.boundingBox)),Nu.applyMatrix4(t.matrixWorld),this.union(Nu)}let a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ui),ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bl),Iu.subVectors(this.max,bl),Xr.subVectors(t.a,bl),qr.subVectors(t.b,bl),Yr.subVectors(t.c,bl),ka.subVectors(qr,Xr),Wa.subVectors(Yr,qr),Rs.subVectors(Xr,Yr);let n=[0,-ka.z,ka.y,0,-Wa.z,Wa.y,0,-Rs.z,Rs.y,ka.z,0,-ka.x,Wa.z,0,-Wa.x,Rs.z,0,-Rs.x,-ka.y,ka.x,0,-Wa.y,Wa.x,0,-Rs.y,Rs.x,0];return!vm(n,Xr,qr,Yr,Iu)||(n=[1,0,0,0,1,0,0,0,1],!vm(n,Xr,qr,Yr,Iu))?!1:(Pu.crossVectors(ka,Wa),n=[Pu.x,Pu.y,Pu.z],vm(n,Xr,qr,Yr,Iu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(na),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},na=[new k,new k,new k,new k,new k,new k,new k,new k],ui=new k,Nu=new ja,Xr=new k,qr=new k,Yr=new k,ka=new k,Wa=new k,Rs=new k,bl=new k,Iu=new k,Pu=new k,Ds=new k;function vm(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){Ds.fromArray(e,s);let o=a.x*Math.abs(Ds.x)+a.y*Math.abs(Ds.y)+a.z*Math.abs(Ds.z),l=t.dot(Ds),c=n.dot(Ds),h=i.dot(Ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var QE=new ja,El=new k,_m=new k,so=class{constructor(t=new k,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):QE.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;El.subVectors(t,this.center);let n=El.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(El,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_m.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(El.copy(t.center).add(_m)),this.expandByPoint(El.copy(t.center).sub(_m))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ia=new k,ym=new k,Bu=new k,Xa=new k,xm=new k,zu=new k,Sm=new k,lh=class{constructor(t=new k,n=new k(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ia)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=ia.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ia.copy(this.origin).addScaledVector(this.direction,n),ia.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){ym.copy(t).add(n).multiplyScalar(.5),Bu.copy(n).sub(t).normalize(),Xa.copy(this.origin).sub(ym);let s=t.distanceTo(n)*.5,r=-this.direction.dot(Bu),o=Xa.dot(this.direction),l=-Xa.dot(Bu),c=Xa.lengthSq(),h=Math.abs(1-r*r),d,f,p,v;if(h>0)if(d=r*l-o,f=r*o-l,v=s*h,d>=0)if(f>=-v)if(f<=v){let x=1/h;d*=x,f*=x,p=d*(d+r*f+2*o)+f*(r*d+f+2*l)+c}else f=s,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-r*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(r*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=r>0?-s:s,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(ym).addScaledVector(Bu,f),p}intersectSphere(t,n){ia.subVectors(t.center,this.origin);let i=ia.dot(this.direction),a=ia.dot(ia)-i*i,s=t.radius*t.radius;if(a>s)return null;let r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,a=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,a=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,ia)!==null}intersectTriangle(t,n,i,a,s){xm.subVectors(n,t),zu.subVectors(i,t),Sm.crossVectors(xm,zu);let r=this.direction.dot(Sm),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Xa.subVectors(this.origin,t);let l=o*this.direction.dot(zu.crossVectors(Xa,zu));if(l<0)return null;let c=o*this.direction.dot(xm.cross(Xa));if(c<0||l+c>r)return null;let h=-o*Xa.dot(Sm);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},We=class e{constructor(t,n,i,a,s,r,o,l,c,h,d,f,p,v,x,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,h,d,f,p,v,x,m)}set(t,n,i,a,s,r,o,l,c,h,d,f,p,v,x,m){let u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=a,u[1]=s,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=v,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,a=1/Zr.setFromMatrixColumn(t,0).length(),s=1/Zr.setFromMatrixColumn(t,1).length(),r=1/Zr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let f=r*h,p=r*d,v=o*h,x=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=v+p*c,n[10]=r*l}else if(t.order==="YXZ"){let f=l*h,p=l*d,v=c*h,x=c*d;n[0]=f+x*o,n[4]=v*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*h,n[9]=-o,n[2]=p*o-v,n[6]=x+f*o,n[10]=r*l}else if(t.order==="ZXY"){let f=l*h,p=l*d,v=c*h,x=c*d;n[0]=f-x*o,n[4]=-r*d,n[8]=v+p*o,n[1]=p+v*o,n[5]=r*h,n[9]=x-f*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let f=r*h,p=r*d,v=o*h,x=o*d;n[0]=l*h,n[4]=v*c-p,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let f=r*l,p=r*c,v=o*l,x=o*c;n[0]=l*h,n[4]=x-f*d,n[8]=v*d+p,n[1]=d,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+v,n[10]=f-x*d}else if(t.order==="XZY"){let f=r*l,p=r*c,v=o*l,x=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+x,n[5]=r*h,n[9]=p*d-v,n[2]=v*d-p,n[6]=o*h,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jE,t,$E)}lookAt(t,n,i){let a=this.elements;return Pn.subVectors(t,n),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),qa.crossVectors(i,Pn),qa.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),qa.crossVectors(i,Pn)),qa.normalize(),Fu.crossVectors(Pn,qa),a[0]=qa.x,a[4]=Fu.x,a[8]=Pn.x,a[1]=qa.y,a[5]=Fu.y,a[9]=Pn.y,a[2]=qa.z,a[6]=Fu.z,a[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],v=i[2],x=i[6],m=i[10],u=i[14],g=i[3],y=i[7],_=i[11],w=i[15],U=a[0],T=a[4],D=a[8],M=a[12],b=a[1],C=a[5],W=a[9],H=a[13],P=a[2],Z=a[6],F=a[10],$=a[14],B=a[3],K=a[7],et=a[11],ht=a[15];return s[0]=r*U+o*b+l*P+c*B,s[4]=r*T+o*C+l*Z+c*K,s[8]=r*D+o*W+l*F+c*et,s[12]=r*M+o*H+l*$+c*ht,s[1]=h*U+d*b+f*P+p*B,s[5]=h*T+d*C+f*Z+p*K,s[9]=h*D+d*W+f*F+p*et,s[13]=h*M+d*H+f*$+p*ht,s[2]=v*U+x*b+m*P+u*B,s[6]=v*T+x*C+m*Z+u*K,s[10]=v*D+x*W+m*F+u*et,s[14]=v*M+x*H+m*$+u*ht,s[3]=g*U+y*b+_*P+w*B,s[7]=g*T+y*C+_*Z+w*K,s[11]=g*D+y*W+_*F+w*et,s[15]=g*M+y*H+_*$+w*ht,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],v=t[3],x=t[7],m=t[11],u=t[15];return v*(+s*l*d-a*c*d-s*o*f+i*c*f+a*o*p-i*l*p)+x*(+n*l*p-n*c*f+s*r*f-a*r*p+a*c*h-s*l*h)+m*(+n*c*d-n*o*p-s*r*d+i*r*p+s*o*h-i*c*h)+u*(-a*o*h-n*l*d+n*o*f+a*r*d-i*r*f+i*l*h)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],v=t[12],x=t[13],m=t[14],u=t[15],g=d*m*c-x*f*c+x*l*p-o*m*p-d*l*u+o*f*u,y=v*f*c-h*m*c-v*l*p+r*m*p+h*l*u-r*f*u,_=h*x*c-v*d*c+v*o*p-r*x*p-h*o*u+r*d*u,w=v*d*l-h*x*l-v*o*f+r*x*f+h*o*m-r*d*m,U=n*g+i*y+a*_+s*w;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/U;return t[0]=g*T,t[1]=(x*f*s-d*m*s-x*a*p+i*m*p+d*a*u-i*f*u)*T,t[2]=(o*m*s-x*l*s+x*a*c-i*m*c-o*a*u+i*l*u)*T,t[3]=(d*l*s-o*f*s-d*a*c+i*f*c+o*a*p-i*l*p)*T,t[4]=y*T,t[5]=(h*m*s-v*f*s+v*a*p-n*m*p-h*a*u+n*f*u)*T,t[6]=(v*l*s-r*m*s-v*a*c+n*m*c+r*a*u-n*l*u)*T,t[7]=(r*f*s-h*l*s+h*a*c-n*f*c-r*a*p+n*l*p)*T,t[8]=_*T,t[9]=(v*d*s-h*x*s-v*i*p+n*x*p+h*i*u-n*d*u)*T,t[10]=(r*x*s-v*o*s+v*i*c-n*x*c-r*i*u+n*o*u)*T,t[11]=(h*o*s-r*d*s-h*i*c+n*d*c+r*i*p-n*o*p)*T,t[12]=w*T,t[13]=(h*x*a-v*d*a+v*i*f-n*x*f-h*i*m+n*d*m)*T,t[14]=(v*o*a-r*x*a-v*i*l+n*x*l+r*i*m-n*o*m)*T,t[15]=(r*d*a-h*o*a+h*i*l-n*d*l-r*i*f+n*o*f)*T,this}scale(t){let n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,h=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*r,0,c*l-a*o,h*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){let a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,h=r+r,d=o+o,f=s*c,p=s*h,v=s*d,x=r*h,m=r*d,u=o*d,g=l*c,y=l*h,_=l*d,w=i.x,U=i.y,T=i.z;return a[0]=(1-(x+u))*w,a[1]=(p+_)*w,a[2]=(v-y)*w,a[3]=0,a[4]=(p-_)*U,a[5]=(1-(f+u))*U,a[6]=(m+g)*U,a[7]=0,a[8]=(v+y)*T,a[9]=(m-g)*T,a[10]=(1-(f+x))*T,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){let a=this.elements,s=Zr.set(a[0],a[1],a[2]).length(),r=Zr.set(a[4],a[5],a[6]).length(),o=Zr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),t.x=a[12],t.y=a[13],t.z=a[14],hi.copy(this);let c=1/s,h=1/r,d=1/o;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=d,hi.elements[9]*=d,hi.elements[10]*=d,n.setFromRotationMatrix(hi),i.x=s,i.y=r,i.z=o,this}makePerspective(t,n,i,a,s,r,o=di,l=!1){let c=this.elements,h=2*s/(n-t),d=2*s/(i-a),f=(n+t)/(n-t),p=(i+a)/(i-a),v,x;if(l)v=s/(r-s),x=r*s/(r-s);else if(o===di)v=-(r+s)/(r-s),x=-2*r*s/(r-s);else if(o===Rl)v=-r/(r-s),x=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=di,l=!1){let c=this.elements,h=2/(n-t),d=2/(i-a),f=-(n+t)/(n-t),p=-(i+a)/(i-a),v,x;if(l)v=1/(r-s),x=r/(r-s);else if(o===di)v=-2/(r-s),x=-(r+s)/(r-s);else if(o===Rl)v=-1/(r-s),x=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Zr=new k,hi=new We,jE=new k(0,0,0),$E=new k(1,1,1),qa=new k,Fu=new k,Pn=new k,Bx=new We,zx=new ha,Ri=class e{constructor(t=0,n=0,i=0,a=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],h=a[9],d=a[2],f=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ne(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Bx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bx,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return zx.setFromEuler(this),this.setFromQuaternion(zx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";var Ll=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},tT=0,Fx=new k,Jr=new ha,aa=new We,Hu=new k,Tl=new k,eT=new k,nT=new ha,Hx=new k(1,0,0),Vx=new k(0,1,0),Gx=new k(0,0,1),kx={type:"added"},iT={type:"removed"},Kr={type:"childadded",child:null},Mm={type:"childremoved",child:null},ai=class e extends ua{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tT++}),this.uuid=Jl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new k,n=new Ri,i=new ha,a=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new We},normalMatrix:{value:new Xt}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Jr.setFromAxisAngle(t,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(t,n){return Jr.setFromAxisAngle(t,n),this.quaternion.premultiply(Jr),this}rotateX(t){return this.rotateOnAxis(Hx,t)}rotateY(t){return this.rotateOnAxis(Vx,t)}rotateZ(t){return this.rotateOnAxis(Gx,t)}translateOnAxis(t,n){return Fx.copy(t).applyQuaternion(this.quaternion),this.position.add(Fx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Hx,t)}translateY(t){return this.translateOnAxis(Vx,t)}translateZ(t){return this.translateOnAxis(Gx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(aa.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Hu.copy(t):Hu.set(t,n,i);let a=this.parent;this.updateWorldMatrix(!0,!1),Tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?aa.lookAt(Tl,Hu,this.up):aa.lookAt(Hu,Tl,this.up),this.quaternion.setFromRotationMatrix(aa),a&&(aa.extractRotation(a.matrixWorld),Jr.setFromRotationMatrix(aa),this.quaternion.premultiply(Jr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kx),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(iT),Mm.child=t,this.dispatchEvent(Mm),Mm.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),aa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),aa.multiply(t.parent.matrixWorld)),t.applyMatrix4(aa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kx),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,t,eT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,nT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),f=r(t.skeletons),p=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=a,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let a=t.children[i];this.add(a.clone())}return this}};ai.DEFAULT_UP=new k(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fi=new k,sa=new k,bm=new k,ra=new k,Qr=new k,jr=new k,Wx=new k,Em=new k,Tm=new k,Am=new k,wm=new Ne,Cm=new Ne,Rm=new Ne,Ja=class e{constructor(t=new k,n=new k,i=new k){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),fi.subVectors(t,n),a.cross(fi);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){fi.subVectors(a,n),sa.subVectors(i,n),bm.subVectors(t,n);let r=fi.dot(fi),o=fi.dot(sa),l=fi.dot(bm),c=sa.dot(sa),h=sa.dot(bm),d=r*c-o*o;if(d===0)return s.set(0,0,0),null;let f=1/d,p=(c*l-o*h)*f,v=(r*h-o*l)*f;return s.set(1-p-v,v,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,ra)===null?!1:ra.x>=0&&ra.y>=0&&ra.x+ra.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,ra)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ra.x),l.addScaledVector(r,ra.y),l.addScaledVector(o,ra.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return wm.setScalar(0),Cm.setScalar(0),Rm.setScalar(0),wm.fromBufferAttribute(t,n),Cm.fromBufferAttribute(t,i),Rm.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(wm,s.x),r.addScaledVector(Cm,s.y),r.addScaledVector(Rm,s.z),r}static isFrontFacing(t,n,i,a){return fi.subVectors(i,n),sa.subVectors(t,n),fi.cross(sa).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),fi.cross(sa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return e.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,a=this.b,s=this.c,r,o;Qr.subVectors(a,i),jr.subVectors(s,i),Em.subVectors(t,i);let l=Qr.dot(Em),c=jr.dot(Em);if(l<=0&&c<=0)return n.copy(i);Tm.subVectors(t,a);let h=Qr.dot(Tm),d=jr.dot(Tm);if(h>=0&&d<=h)return n.copy(a);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(Qr,r);Am.subVectors(t,s);let p=Qr.dot(Am),v=jr.dot(Am);if(v>=0&&p<=v)return n.copy(s);let x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(jr,o);let m=h*v-p*d;if(m<=0&&d-h>=0&&p-v>=0)return Wx.subVectors(s,a),o=(d-h)/(d-h+(p-v)),n.copy(a).addScaledVector(Wx,o);let u=1/(m+x+f);return r=x*u,o=f*u,n.copy(i).addScaledVector(Qr,r).addScaledVector(jr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},HS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ya={h:0,s:0,l:0},Vu={h:0,s:0,l:0};function Dm(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Zt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=ie.workingColorSpace){return this.r=t,this.g=n,this.b=i,ie.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=ie.workingColorSpace){if(t=YE(t,1),n=ne(n,0,1),i=ne(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Dm(r,s,t+1/3),this.g=Dm(r,s,t),this.b=Dm(r,s,t-1/3)}return ie.colorSpaceToWorking(this,a),this}setStyle(t,n=zn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=zn){let i=HS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}copyLinearToSRGB(t){return this.r=no(t.r),this.g=no(t.g),this.b=no(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zn){return ie.workingToColorSpace(rn.copy(this),t),Math.round(ne(rn.r*255,0,255))*65536+Math.round(ne(rn.g*255,0,255))*256+Math.round(ne(rn.b*255,0,255))}getHexString(t=zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ie.workingColorSpace){ie.workingToColorSpace(rn.copy(this),n);let i=rn.r,a=rn.g,s=rn.b,r=Math.max(i,a,s),o=Math.min(i,a,s),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(a-s)/d+(a<s?6:0);break;case a:l=(s-i)/d+2;break;case s:l=(i-a)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=ie.workingColorSpace){return ie.workingToColorSpace(rn.copy(this),n),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=zn){ie.workingToColorSpace(rn.copy(this),t);let n=rn.r,i=rn.g,a=rn.b;return t!==zn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Ya),this.setHSL(Ya.h+t,Ya.s+n,Ya.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ya),t.getHSL(Vu);let i=fm(Ya.h,Vu.h,n),a=fm(Ya.s,Vu.s,n),s=fm(Ya.l,Vu.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Zt;Zt.NAMES=HS;var aT=0,zs=class extends ua{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aT++}),this.uuid=Jl(),this.name="",this.type="Material",this.blending=ca,this.side=la,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$u,this.blendDst=th,this.blendEquation=Qa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ca&&(i.blending=this.blending),this.side!==la&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$u&&(i.blendSrc=this.blendSrc),this.blendDst!==th&&(i.blendDst=this.blendDst),this.blendEquation!==Qa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(n){let s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ol=class extends zs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Xm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ve=new k,Gu=new oe,sT=0,Fn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=zm,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Gu.fromBufferAttribute(this,n),Gu.applyMatrix3(t),this.setXY(n,Gu.x,Gu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.applyMatrix3(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.applyMatrix4(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.applyNormalMatrix(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.transformDirection(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ml(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ml(n,this.array)),n}setX(t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ml(n,this.array)),n}setY(t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ml(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ml(n,this.array)),n}setW(t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),a=Sn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),a=Sn(a,this.array),s=Sn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zm&&(t.usage=this.usage),t}};var Nl=class extends Fn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Il=class extends Fn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var wi=class extends Fn{constructor(t,n,i){super(new Float32Array(t),n,i)}},rT=0,ni=new We,Um=new ai,$r=new k,Bn=new ja,Al=new ja,Ke=new k,$a=class e extends ua{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=Jl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(i0(t)?Il:Nl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Xt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ni.makeRotationFromQuaternion(t),this.applyMatrix4(ni),this}rotateX(t){return ni.makeRotationX(t),this.applyMatrix4(ni),this}rotateY(t){return ni.makeRotationY(t),this.applyMatrix4(ni),this}rotateZ(t){return ni.makeRotationZ(t),this.applyMatrix4(ni),this}translate(t,n,i){return ni.makeTranslation(t,n,i),this.applyMatrix4(ni),this}scale(t,n,i){return ni.makeScale(t,n,i),this.applyMatrix4(ni),this}lookAt(t){return Um.lookAt(t),Um.updateMatrix(),this.applyMatrix4(Um.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let a=0,s=t.length;a<s;a++){let r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new wi(i,3))}else{let i=Math.min(t.length,n.count);for(let a=0;a<i;a++){let s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ja);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){let s=n[i];Bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new so);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){let o=n[s];Al.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(Bn.min,Al.min),Bn.expandByPoint(Ke),Ke.addVectors(Bn.max,Al.max),Bn.expandByPoint(Ke)):(Bn.expandByPoint(Al.min),Bn.expandByPoint(Al.max))}Bn.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)Ke.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(Ke));if(n)for(let s=0,r=n.length;s<r;s++){let o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ke.fromBufferAttribute(o,c),l&&($r.fromBufferAttribute(t,c),Ke.add($r)),a=Math.max(a,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,a=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new k,l[D]=new k;let c=new k,h=new k,d=new k,f=new oe,p=new oe,v=new oe,x=new k,m=new k;function u(D,M,b){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,M),d.fromBufferAttribute(i,b),f.fromBufferAttribute(s,D),p.fromBufferAttribute(s,M),v.fromBufferAttribute(s,b),h.sub(c),d.sub(c),p.sub(f),v.sub(f);let C=1/(p.x*v.y-v.x*p.y);isFinite(C)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(C),o[D].add(x),o[M].add(x),o[b].add(x),l[D].add(m),l[M].add(m),l[b].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let D=0,M=g.length;D<M;++D){let b=g[D],C=b.start,W=b.count;for(let H=C,P=C+W;H<P;H+=3)u(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let y=new k,_=new k,w=new k,U=new k;function T(D){w.fromBufferAttribute(a,D),U.copy(w);let M=o[D];y.copy(M),y.sub(w.multiplyScalar(w.dot(M))).normalize(),_.crossVectors(U,M);let C=_.dot(l[D])<0?-1:1;r.setXYZW(D,y.x,y.y,y.z,C)}for(let D=0,M=g.length;D<M;++D){let b=g[D],C=b.start,W=b.count;for(let H=C,P=C+W;H<P;H+=3)T(t.getX(H+0)),T(t.getX(H+1)),T(t.getX(H+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let a=new k,s=new k,r=new k,o=new k,l=new k,c=new k,h=new k,d=new k;if(t)for(let f=0,p=t.count;f<p;f+=3){let v=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);a.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),r.fromBufferAttribute(n,m),h.subVectors(r,s),d.subVectors(a,s),h.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)a.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),r.fromBufferAttribute(n,f+2),h.subVectors(r,s),d.subVectors(a,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ke.fromBufferAttribute(t,n),Ke.normalize(),t.setXYZ(n,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),p=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let u=0;u<h;u++)f[v++]=c[p++]}return new Fn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,i);n.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(a[l]=h,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let a=t.attributes;for(let c in a){let h=a[c];this.setAttribute(c,h.clone(n))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xx=new We,Us=new lh,ku=new so,qx=new k,Wu=new k,Xu=new k,qu=new k,Lm=new k,Yu=new k,Yx=new k,Zu=new k,bn=class extends ai{constructor(t=new $a,n=new Ol){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){let o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){let i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);let o=this.morphTargetInfluences;if(s&&o){Yu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(Lm.fromBufferAttribute(d,t),r?Yu.addScaledVector(Lm,h):Yu.addScaledVector(Lm.sub(n),h))}n.add(Yu)}return n}raycast(t,n){let i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ku.copy(i.boundingSphere),ku.applyMatrix4(s),Us.copy(t.ray).recast(t.near),!(ku.containsPoint(Us.origin)===!1&&(Us.intersectSphere(ku,qx)===null||Us.origin.distanceToSquared(qx)>(t.far-t.near)**2))&&(Xx.copy(s).invert(),Us.copy(t.ray).applyMatrix4(Xx),!(i.boundingBox!==null&&Us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Us)))}_computeIntersections(t,n,i){let a,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,x=f.length;v<x;v++){let m=f[v],u=r[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=g,w=y;_<w;_+=3){let U=o.getX(_),T=o.getX(_+1),D=o.getX(_+2);a=Ju(this,u,t,i,c,h,d,U,T,D),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{let v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){let g=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);a=Ju(this,r,t,i,c,h,d,g,y,_),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,x=f.length;v<x;v++){let m=f[v],u=r[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=g,w=y;_<w;_+=3){let U=_,T=_+1,D=_+2;a=Ju(this,u,t,i,c,h,d,U,T,D),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{let v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){let g=m,y=m+1,_=m+2;a=Ju(this,r,t,i,c,h,d,g,y,_),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}};function oT(e,t,n,i,a,s,r,o){let l;if(t.side===fn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===la,o),l===null)return null;Zu.copy(o),Zu.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Zu);return c<n.near||c>n.far?null:{distance:c,point:Zu.clone(),object:e}}function Ju(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,Wu),e.getVertexPosition(l,Xu),e.getVertexPosition(c,qu);let h=oT(e,t,n,i,Wu,Xu,qu,Yx);if(h){let d=new k;Ja.getBarycoord(Yx,Wu,Xu,qu,d),a&&(h.uv=Ja.getInterpolatedAttribute(a,o,l,c,d,new oe)),s&&(h.uv1=Ja.getInterpolatedAttribute(s,o,l,c,d,new oe)),r&&(h.normal=Ja.getInterpolatedAttribute(r,o,l,c,d,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new k,materialIndex:0};Ja.getNormal(Wu,Xu,qu,f.normal),h.face=f,h.barycoord=d}return h}var ro=class e extends $a{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};let o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);let l=[],c=[],h=[],d=[],f=0,p=0;v("z","y","x",-1,-1,i,n,t,r,s,0),v("z","y","x",1,-1,i,n,-t,r,s,1),v("x","z","y",1,1,t,i,n,a,r,2),v("x","z","y",1,-1,t,i,-n,a,r,3),v("x","y","z",1,-1,t,n,i,a,s,4),v("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new wi(c,3)),this.setAttribute("normal",new wi(h,3)),this.setAttribute("uv",new wi(d,2));function v(x,m,u,g,y,_,w,U,T,D,M){let b=_/T,C=w/D,W=_/2,H=w/2,P=U/2,Z=T+1,F=D+1,$=0,B=0,K=new k;for(let et=0;et<F;et++){let ht=et*C-H;for(let gt=0;gt<Z;gt++){let Vt=gt*b-W;K[x]=Vt*g,K[m]=ht*y,K[u]=P,c.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[u]=U>0?1:-1,h.push(K.x,K.y,K.z),d.push(gt/T),d.push(1-et/D),$+=1}}for(let et=0;et<D;et++)for(let ht=0;ht<T;ht++){let gt=f+ht+Z*et,Vt=f+ht+Z*(et+1),Yt=f+(ht+1)+Z*(et+1),z=f+(ht+1)+Z*et;l.push(gt,Vt,z),l.push(Vt,Yt,z),B+=6}o.addGroup(p,B,M),p+=B,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ks(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function on(e){let t={};for(let n=0;n<e.length;n++){let i=ks(e[n]);for(let a in i)t[a]=i[a]}return t}function lT(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function a0(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var VS={clone:ks,merge:on},cT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vn=class extends zs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cT,this.fragmentShader=uT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=lT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let a in this.uniforms){let r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Pl=class extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Za=new k,Zx=new oe,Jx=new oe,Mn=class extends Pl{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=ah*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(hm*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ah*2*Math.atan(Math.tan(hm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Za.x,Za.y).multiplyScalar(-t/Za.z),Za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Za.x,Za.y).multiplyScalar(-t/Za.z)}getViewSize(t,n){return this.getViewBounds(t,Zx,Jx),n.subVectors(Jx,Zx)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(hm*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},to=-90,eo=1,ch=class extends ai{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new Mn(to,eo,t,n);a.layers=this.layers,this.add(a);let s=new Mn(to,eo,t,n);s.layers=this.layers,this.add(s);let r=new Mn(to,eo,t,n);r.layers=this.layers,this.add(r);let o=new Mn(to,eo,t,n);o.layers=this.layers,this.add(o);let l=new Mn(to,eo,t,n);l.layers=this.layers,this.add(l);let c=new Mn(to,eo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(let c of n)this.remove(c);if(t===di)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rl)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(n,s),t.setRenderTarget(i,1,a),t.render(n,r),t.setRenderTarget(i,2,a),t.render(n,o),t.setRenderTarget(i,3,a),t.render(n,l),t.setRenderTarget(i,4,a),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,a),t.render(n,h),t.setRenderTarget(d,f,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Bl=class extends Hn{constructor(t=[],n=Vs,i,a,s,r,o,l,c,h){super(t,n,i,a,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},uh=class extends Ci{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new Bl(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ro(5,5,5),s=new Vn({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:fa});s.uniforms.tEquirect.value=n;let r=new bn(a,s),o=n.minFilter;return n.minFilter===ns&&(n.minFilter=pi),new ch(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}},Ns=class extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}},hT={type:"move"},oo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let x of t.hand.values()){let m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hT)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Ns;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var zl=class extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var Om=new k,fT=new k,dT=new Xt,Ai=class{constructor(t=new k(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let a=Om.subVectors(i,n).cross(fT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(Om),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||dT.getNormalMatrix(t),a=this.coplanarPoint(Om).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ls=new so,pT=new oe(.5,.5),Ku=new k,Fl=class{constructor(t=new Ai,n=new Ai,i=new Ai,a=new Ai,s=new Ai,r=new Ai){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=di,i=!1){let a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],f=s[6],p=s[7],v=s[8],x=s[9],m=s[10],u=s[11],g=s[12],y=s[13],_=s[14],w=s[15];if(a[0].setComponents(c-r,p-h,u-v,w-g).normalize(),a[1].setComponents(c+r,p+h,u+v,w+g).normalize(),a[2].setComponents(c+o,p+d,u+x,w+y).normalize(),a[3].setComponents(c-o,p-d,u-x,w-y).normalize(),i)a[4].setComponents(l,f,m,_).normalize(),a[5].setComponents(c-l,p-f,u-m,w-_).normalize();else if(a[4].setComponents(c-l,p-f,u-m,w-_).normalize(),n===di)a[5].setComponents(c+l,p+f,u+m,w+_).normalize();else if(n===Rl)a[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(t){Ls.center.set(0,0,0);let n=pT.distanceTo(t.center);return Ls.radius=.7071067811865476+n,Ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(t){let n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let a=n[i];if(Ku.x=a.normal.x>0?t.max.x:t.min.x,Ku.y=a.normal.y>0?t.max.y:t.min.y,Ku.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Ku)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Hl=class extends Hn{constructor(t,n,i=is,a,s,r,o=ii,l=ii,c,h=io,d=1){if(h!==io&&h!==fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:n,depth:d};super(f,a,s,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ao(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}};var Fs=class e extends $a{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};let s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,d=t/o,f=n/l,p=[],v=[],x=[],m=[];for(let u=0;u<h;u++){let g=u*f-r;for(let y=0;y<c;y++){let _=y*d-s;v.push(_,-g,0),x.push(0,0,1),m.push(y/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){let y=g+c*u,_=g+c*(u+1),w=g+1+c*(u+1),U=g+1+c*u;p.push(y,_,U),p.push(_,w,U)}this.setIndex(p),this.setAttribute("position",new wi(v,3)),this.setAttribute("normal",new wi(x,3)),this.setAttribute("uv",new wi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var hh=class extends zs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fh=class extends zs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Qu(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function mT(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Hs=class{constructor(t,n,i,a){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,a=n[i],s=n[i-1];t:{e:{let r;n:{i:if(!(t<a)){for(let o=i+2;;){if(a===void 0){if(t<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=a,a=n[++i],t<a)break e}r=n.length;break n}if(!(t>=s)){let o=n[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(a=s,s=n[--i-1],t>=s)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(a=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,a)}return this.interpolate_(i,s,t,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,a=this.valueSize,s=t*a;for(let r=0;r!==a;++r)n[r]=i[s+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},dh=class extends Hs{constructor(t,n,i,a){super(t,n,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nm,endingEnd:Nm}}intervalChanged_(t,n,i){let a=this.parameterPositions,s=t-2,r=t+1,o=a[s],l=a[r];if(o===void 0)switch(this.getSettings_().endingStart){case Im:s=t,o=2*n-i;break;case Pm:s=a.length-2,o=n+a[s]-a[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Im:r=t,l=2*i-n;break;case Pm:r=1,l=i+a[1]-a[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,v=(i-n)/(a-n),x=v*v,m=x*v,u=-f*m+2*f*x-f*v,g=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*v+1,y=(-1-p)*m+(1.5+p)*x+.5*v,_=p*m-p*x;for(let w=0;w!==o;++w)s[w]=u*r[h+w]+g*r[c+w]+y*r[l+w]+_*r[d+w];return s}},ph=class extends Hs{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(a-n),d=1-h;for(let f=0;f!==o;++f)s[f]=r[c+f]*d+r[l+f]*h;return s}},mh=class extends Hs{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t){return this.copySampleValue_(t-1)}},Gn=class{constructor(t,n,i,a){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qu(n,this.TimeBufferType),this.values=Qu(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Qu(t.times,Array),values:Qu(t.values,Array)};let a=t.getInterpolation();a!==t.DefaultInterpolation&&(i.interpolation=a)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new mh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ph(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new dh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case wl:n=this.InterpolantFactoryMethodDiscrete;break;case ih:n=this.InterpolantFactoryMethodLinear;break;case ju:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wl;case this.InterpolantFactoryMethodLinear:return ih;case this.InterpolantFactoryMethodSmooth:return ju}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]*=t}return this}trim(t,n){let i=this.times,a=i.length,s=0,r=a-1;for(;s!==a&&i[s]<t;)++s;for(;r!==-1&&i[r]>n;)--r;if(++r,s!==0||r!==a){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,a=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(a!==void 0&&mT(a))for(let o=0,l=a.length;o!==l;++o){let c=a[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===ju,s=t.length-1,r=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(a)l=!0;else{let d=o*i,f=d-i,p=d+i;for(let v=0;v!==i;++v){let x=n[d+v];if(x!==n[f+v]||x!==n[p+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,f=r*i;for(let p=0;p!==i;++p)n[f+p]=n[d+p]}++r}}if(s>0){t[r]=t[s];for(let o=s*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,a=new i(this.name,t,n);return a.createInterpolant=this.createInterpolant,a}};Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=ih;var ts=class extends Gn{constructor(t,n,i){super(t,n,i)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=wl;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var gh=class extends Gn{constructor(t,n,i,a){super(t,n,i,a)}};gh.prototype.ValueTypeName="color";var vh=class extends Gn{constructor(t,n,i,a){super(t,n,i,a)}};vh.prototype.ValueTypeName="number";var _h=class extends Hs{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(a-n),c=t*o;for(let h=c+o;c!==h;c+=4)ha.slerpFlat(s,0,r,c-o,r,c,l);return s}},Vl=class extends Gn{constructor(t,n,i,a){super(t,n,i,a)}InterpolantFactoryMethodLinear(t){return new _h(this.times,this.values,this.getValueSize(),t)}};Vl.prototype.ValueTypeName="quaternion";Vl.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Gn{constructor(t,n,i){super(t,n,i)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=wl;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var yh=class extends Gn{constructor(t,n,i,a){super(t,n,i,a)}};yh.prototype.ValueTypeName="vector";var xh=class{constructor(t,n,i){let a=this,s=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&a.onStart!==void 0&&a.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,a.onProgress!==void 0&&a.onProgress(h,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(h){a.onError!==void 0&&a.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},GS=new xh,Sh=class{constructor(t){this.manager=t!==void 0?t:GS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(a,s){i.load(t,a,n,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Sh.DEFAULT_MATERIAL_NAME="__DEFAULT";var lo=class extends Pl{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var Mh=class extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var s0="\\[\\]\\.:\\/",gT=new RegExp("["+s0+"]","g"),r0="[^"+s0+"]",vT="[^"+s0.replace("\\.","")+"]",_T=/((?:WC+[\/:])*)/.source.replace("WC",r0),yT=/(WCOD+)?/.source.replace("WCOD",vT),xT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",r0),ST=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",r0),MT=new RegExp("^"+_T+yT+xT+ST+"$"),bT=["material","materials","bones","map"],Fm=class{constructor(t,n,i){let a=i||Ae.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,a)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,s=i.length;a!==s;++a)i[a].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ae=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gT,"")}static parseTrackName(t){let n=MT.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let s=i.nodeName.substring(a+1);bT.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},a=i(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)t[n++]=i[a]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,a=n.propertyName,s=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[a];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Fm;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var c3=new Float32Array(1);function o0(e,t,n,i){let a=ET(i);switch(n){case Km:return e*t;case jm:return e*t/a.components*a.byteLength;case Ph:return e*t/a.components*a.byteLength;case $m:return e*t*2/a.components*a.byteLength;case Bh:return e*t*2/a.components*a.byteLength;case Qm:return e*t*3/a.components*a.byteLength;case si:return e*t*4/a.components*a.byteLength;case zh:return e*t*4/a.components*a.byteLength;case Wl:case Xl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ql:case Yl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Hh:case Gh:return Math.max(e,16)*Math.max(t,8)/4;case Fh:case Vh:return Math.max(e,8)*Math.max(t,8)/2;case kh:case Wh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Xh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case qh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Yh:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Zh:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Jh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case jh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case $h:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case tf:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ef:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case nf:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case af:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case sf:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case rf:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Zl:case of:case lf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case t0:case cf:return Math.ceil(e/4)*Math.ceil(t/4)*8;case uf:case hf:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ET(e){switch(e){case Li:case Ym:return{byteLength:1,components:1};case co:case Zm:case uo:return{byteLength:2,components:1};case Nh:case Ih:return{byteLength:2,components:4};case is:case Oh:case Oi:return{byteLength:4,components:1};case Jm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"179"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="179");function f1(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function AT(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<d.length;p++){let v=d[f],x=d[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,v=d.length;p<v;p++){let x=d[p];e.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var wT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CT=`#ifdef USE_ALPHAHASH
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
#endif`,RT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OT=`#ifdef USE_AOMAP
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
#endif`,NT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IT=`#ifdef USE_BATCHING
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
#endif`,PT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,HT=`#ifdef USE_IRIDESCENCE
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
#endif`,VT=`#ifdef USE_BUMPMAP
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
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,KT=`#define PI 3.141592653589793
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
} // validated`,QT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jT=`vec3 transformedNormal = objectNormal;
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
#endif`,$T=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iA="gl_FragColor = linearToOutputTexel( gl_FragColor );",aA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sA=`#ifdef USE_ENVMAP
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
#endif`,rA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oA=`#ifdef USE_ENVMAP
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
#endif`,lA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cA=`#ifdef USE_ENVMAP
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
#endif`,uA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pA=`#ifdef USE_GRADIENTMAP
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
}`,mA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_A=`uniform bool receiveShadow;
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
#endif`,yA=`#ifdef USE_ENVMAP
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
#endif`,xA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EA=`PhysicalMaterial material;
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
#endif`,TA=`struct PhysicalMaterial {
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
}`,AA=`
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
#endif`,wA=`#if defined( RE_IndirectDiffuse )
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
#endif`,CA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,PA=`#if defined( USE_POINTS_UV )
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
#endif`,BA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GA=`#ifdef USE_MORPHTARGETS
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
#endif`,kA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,XA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JA=`#ifdef USE_NORMALMAP
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
#endif`,KA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$A=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ew=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ow=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
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
#endif`,cw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hw=`float getShadowMask() {
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
}`,fw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dw=`#ifdef USE_SKINNING
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
#endif`,pw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mw=`#ifdef USE_SKINNING
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
#endif`,gw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_w=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xw=`#ifdef USE_TRANSMISSION
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
#endif`,Sw=`#ifdef USE_TRANSMISSION
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
#endif`,Mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Aw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ww=`uniform sampler2D t2D;
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
}`,Cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lw=`#include <common>
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
}`,Ow=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Nw=`#define DISTANCE
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
}`,Iw=`#define DISTANCE
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
}`,Pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zw=`uniform float scale;
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
}`,Fw=`uniform vec3 diffuse;
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
}`,Hw=`#include <common>
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
}`,Vw=`uniform vec3 diffuse;
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
}`,Gw=`#define LAMBERT
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
}`,kw=`#define LAMBERT
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
}`,Ww=`#define MATCAP
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
}`,Xw=`#define MATCAP
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
}`,qw=`#define NORMAL
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
}`,Yw=`#define NORMAL
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
}`,Zw=`#define PHONG
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
}`,Jw=`#define PHONG
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
}`,Kw=`#define STANDARD
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
}`,Qw=`#define STANDARD
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
}`,jw=`#define TOON
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
}`,$w=`#define TOON
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
}`,t2=`uniform float size;
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
}`,e2=`uniform vec3 diffuse;
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
}`,n2=`#include <common>
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
}`,i2=`uniform vec3 color;
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
}`,a2=`uniform float rotation;
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
}`,s2=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:wT,alphahash_pars_fragment:CT,alphamap_fragment:RT,alphamap_pars_fragment:DT,alphatest_fragment:UT,alphatest_pars_fragment:LT,aomap_fragment:OT,aomap_pars_fragment:NT,batching_pars_vertex:IT,batching_vertex:PT,begin_vertex:BT,beginnormal_vertex:zT,bsdfs:FT,iridescence_fragment:HT,bumpmap_pars_fragment:VT,clipping_planes_fragment:GT,clipping_planes_pars_fragment:kT,clipping_planes_pars_vertex:WT,clipping_planes_vertex:XT,color_fragment:qT,color_pars_fragment:YT,color_pars_vertex:ZT,color_vertex:JT,common:KT,cube_uv_reflection_fragment:QT,defaultnormal_vertex:jT,displacementmap_pars_vertex:$T,displacementmap_vertex:tA,emissivemap_fragment:eA,emissivemap_pars_fragment:nA,colorspace_fragment:iA,colorspace_pars_fragment:aA,envmap_fragment:sA,envmap_common_pars_fragment:rA,envmap_pars_fragment:oA,envmap_pars_vertex:lA,envmap_physical_pars_fragment:yA,envmap_vertex:cA,fog_vertex:uA,fog_pars_vertex:hA,fog_fragment:fA,fog_pars_fragment:dA,gradientmap_pars_fragment:pA,lightmap_pars_fragment:mA,lights_lambert_fragment:gA,lights_lambert_pars_fragment:vA,lights_pars_begin:_A,lights_toon_fragment:xA,lights_toon_pars_fragment:SA,lights_phong_fragment:MA,lights_phong_pars_fragment:bA,lights_physical_fragment:EA,lights_physical_pars_fragment:TA,lights_fragment_begin:AA,lights_fragment_maps:wA,lights_fragment_end:CA,logdepthbuf_fragment:RA,logdepthbuf_pars_fragment:DA,logdepthbuf_pars_vertex:UA,logdepthbuf_vertex:LA,map_fragment:OA,map_pars_fragment:NA,map_particle_fragment:IA,map_particle_pars_fragment:PA,metalnessmap_fragment:BA,metalnessmap_pars_fragment:zA,morphinstance_vertex:FA,morphcolor_vertex:HA,morphnormal_vertex:VA,morphtarget_pars_vertex:GA,morphtarget_vertex:kA,normal_fragment_begin:WA,normal_fragment_maps:XA,normal_pars_fragment:qA,normal_pars_vertex:YA,normal_vertex:ZA,normalmap_pars_fragment:JA,clearcoat_normal_fragment_begin:KA,clearcoat_normal_fragment_maps:QA,clearcoat_pars_fragment:jA,iridescence_pars_fragment:$A,opaque_fragment:tw,packing:ew,premultiplied_alpha_fragment:nw,project_vertex:iw,dithering_fragment:aw,dithering_pars_fragment:sw,roughnessmap_fragment:rw,roughnessmap_pars_fragment:ow,shadowmap_pars_fragment:lw,shadowmap_pars_vertex:cw,shadowmap_vertex:uw,shadowmask_pars_fragment:hw,skinbase_vertex:fw,skinning_pars_vertex:dw,skinning_vertex:pw,skinnormal_vertex:mw,specularmap_fragment:gw,specularmap_pars_fragment:vw,tonemapping_fragment:_w,tonemapping_pars_fragment:yw,transmission_fragment:xw,transmission_pars_fragment:Sw,uv_pars_fragment:Mw,uv_pars_vertex:bw,uv_vertex:Ew,worldpos_vertex:Tw,background_vert:Aw,background_frag:ww,backgroundCube_vert:Cw,backgroundCube_frag:Rw,cube_vert:Dw,cube_frag:Uw,depth_vert:Lw,depth_frag:Ow,distanceRGBA_vert:Nw,distanceRGBA_frag:Iw,equirect_vert:Pw,equirect_frag:Bw,linedashed_vert:zw,linedashed_frag:Fw,meshbasic_vert:Hw,meshbasic_frag:Vw,meshlambert_vert:Gw,meshlambert_frag:kw,meshmatcap_vert:Ww,meshmatcap_frag:Xw,meshnormal_vert:qw,meshnormal_frag:Yw,meshphong_vert:Zw,meshphong_frag:Jw,meshphysical_vert:Kw,meshphysical_frag:Qw,meshtoon_vert:jw,meshtoon_frag:$w,points_vert:t2,points_frag:e2,shadow_vert:n2,shadow_frag:i2,sprite_vert:a2,sprite_frag:s2},mt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Ni={basic:{uniforms:on([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:on([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:on([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:on([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:on([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:on([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:on([mt.points,mt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:on([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:on([mt.common,mt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:on([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:on([mt.sprite,mt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:on([mt.common,mt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:on([mt.lights,mt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Ni.physical={uniforms:on([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var ff={r:0,b:0,g:0},Ws=new Ri,r2=new We;function o2(e,t,n,i,a,s,r){let o=new Zt(0),l=s===!0?0:1,c,h,d=null,f=0,p=null;function v(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?n:t).get(_)),_}function x(y){let _=!1,w=v(y);w===null?u(o,l):w&&w.isColor&&(u(w,1),_=!0);let U=e.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,r):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(y,_){let w=v(_);w&&(w.isCubeTexture||w.mapping===Gl)?(h===void 0&&(h=new bn(new ro(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:ks(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),Ws.copy(_.backgroundRotation),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(r2.makeRotationFromEuler(Ws)),h.material.toneMapped=ie.getTransfer(w.colorSpace)!==he,(d!==w||f!==w.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,d=w,f=w.version,p=e.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new bn(new Fs(2,2),new Vn({name:"BackgroundMaterial",uniforms:ks(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:la,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ie.getTransfer(w.colorSpace)!==he,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=w,f=w.version,p=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function u(y,_){y.getRGB(ff,a0(e)),i.buffers.color.setClear(ff.r,ff.g,ff.b,_,r)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,u(o,l)},render:x,addToRenderList:m,dispose:g}}function l2(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=f(null),s=a,r=!1;function o(b,C,W,H,P){let Z=!1,F=d(H,W,C);s!==F&&(s=F,c(s.object)),Z=p(b,H,W,P),Z&&v(b,H,W,P),P!==null&&t.update(P,e.ELEMENT_ARRAY_BUFFER),(Z||r)&&(r=!1,_(b,C,W,H),P!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return e.createVertexArray()}function c(b){return e.bindVertexArray(b)}function h(b){return e.deleteVertexArray(b)}function d(b,C,W){let H=W.wireframe===!0,P=i[b.id];P===void 0&&(P={},i[b.id]=P);let Z=P[C.id];Z===void 0&&(Z={},P[C.id]=Z);let F=Z[H];return F===void 0&&(F=f(l()),Z[H]=F),F}function f(b){let C=[],W=[],H=[];for(let P=0;P<n;P++)C[P]=0,W[P]=0,H[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:W,attributeDivisors:H,object:b,attributes:{},index:null}}function p(b,C,W,H){let P=s.attributes,Z=C.attributes,F=0,$=W.getAttributes();for(let B in $)if($[B].location>=0){let et=P[B],ht=Z[B];if(ht===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor)),et===void 0||et.attribute!==ht||ht&&et.data!==ht.data)return!0;F++}return s.attributesNum!==F||s.index!==H}function v(b,C,W,H){let P={},Z=C.attributes,F=0,$=W.getAttributes();for(let B in $)if($[B].location>=0){let et=Z[B];et===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(et=b.instanceColor));let ht={};ht.attribute=et,et&&et.data&&(ht.data=et.data),P[B]=ht,F++}s.attributes=P,s.attributesNum=F,s.index=H}function x(){let b=s.newAttributes;for(let C=0,W=b.length;C<W;C++)b[C]=0}function m(b){u(b,0)}function u(b,C){let W=s.newAttributes,H=s.enabledAttributes,P=s.attributeDivisors;W[b]=1,H[b]===0&&(e.enableVertexAttribArray(b),H[b]=1),P[b]!==C&&(e.vertexAttribDivisor(b,C),P[b]=C)}function g(){let b=s.newAttributes,C=s.enabledAttributes;for(let W=0,H=C.length;W<H;W++)C[W]!==b[W]&&(e.disableVertexAttribArray(W),C[W]=0)}function y(b,C,W,H,P,Z,F){F===!0?e.vertexAttribIPointer(b,C,W,P,Z):e.vertexAttribPointer(b,C,W,H,P,Z)}function _(b,C,W,H){x();let P=H.attributes,Z=W.getAttributes(),F=C.defaultAttributeValues;for(let $ in Z){let B=Z[$];if(B.location>=0){let K=P[$];if(K===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(K=b.instanceColor)),K!==void 0){let et=K.normalized,ht=K.itemSize,gt=t.get(K);if(gt===void 0)continue;let Vt=gt.buffer,Yt=gt.type,z=gt.bytesPerElement,nt=Yt===e.INT||Yt===e.UNSIGNED_INT||K.gpuType===Oh;if(K.isInterleavedBufferAttribute){let Q=K.data,ct=Q.stride,pt=K.offset;if(Q.isInstancedInterleavedBuffer){for(let yt=0;yt<B.locationSize;yt++)u(B.location+yt,Q.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let yt=0;yt<B.locationSize;yt++)m(B.location+yt);e.bindBuffer(e.ARRAY_BUFFER,Vt);for(let yt=0;yt<B.locationSize;yt++)y(B.location+yt,ht/B.locationSize,Yt,et,ct*z,(pt+ht/B.locationSize*yt)*z,nt)}else{if(K.isInstancedBufferAttribute){for(let Q=0;Q<B.locationSize;Q++)u(B.location+Q,K.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Q=0;Q<B.locationSize;Q++)m(B.location+Q);e.bindBuffer(e.ARRAY_BUFFER,Vt);for(let Q=0;Q<B.locationSize;Q++)y(B.location+Q,ht/B.locationSize,Yt,et,ht*z,ht/B.locationSize*Q*z,nt)}}else if(F!==void 0){let et=F[$];if(et!==void 0)switch(et.length){case 2:e.vertexAttrib2fv(B.location,et);break;case 3:e.vertexAttrib3fv(B.location,et);break;case 4:e.vertexAttrib4fv(B.location,et);break;default:e.vertexAttrib1fv(B.location,et)}}}}g()}function w(){D();for(let b in i){let C=i[b];for(let W in C){let H=C[W];for(let P in H)h(H[P].object),delete H[P];delete C[W]}delete i[b]}}function U(b){if(i[b.id]===void 0)return;let C=i[b.id];for(let W in C){let H=C[W];for(let P in H)h(H[P].object),delete H[P];delete C[W]}delete i[b.id]}function T(b){for(let C in i){let W=i[C];if(W[b.id]===void 0)continue;let H=W[b.id];for(let P in H)h(H[P].object),delete H[P];delete W[b.id]}}function D(){M(),r=!0,s!==a&&(s=a,c(s.object))}function M(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:U,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function c2(e,t,n){let i;function a(c){i=c}function s(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function r(c,h,d){d!==0&&(e.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let v=0;v<d;v++)p+=h[v];n.update(p,i,1)}function l(c,h,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)r(c[v],h[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let v=0;for(let x=0;x<d;x++)v+=h[x]*f[x];n.update(v,i,1)}}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function u2(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(T){return!(T!==si&&i.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let D=T===uo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Li&&i.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Oi&&!D)}function l(T){if(T==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=v>0,U=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:w,maxSamples:U}}function h2(e){let t=this,n=null,i=0,a=!1,s=!1,r=new Ai,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||a;return a=f,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){let v=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!a||v===null||v.length===0||s&&!m)s?h(null):c();else{let g=s?0:i,y=g*4,_=u.clippingState||null;l.value=_,_=h(v,f,y,p);for(let w=0;w!==y;++w)_[w]=n[w];u.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,v){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,v!==!0||m===null){let u=p+x*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,_=p;y!==x;++y,_+=4)r.copy(d[y]).applyMatrix4(g,o),r.normal.toArray(m,_),m[_+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function f2(e){let t=new WeakMap;function n(r,o){return o===Dh?r.mapping=Vs:o===Uh&&(r.mapping=Gs),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===Dh||o===Uh)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new uh(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",a),n(c.texture,r.mapping)}else return null}}return r}function a(r){let o=r.target;o.removeEventListener("dispose",a);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var mo=4,kS=[.125,.215,.35,.446,.526,.582],Ys=20,l0=new lo,WS=new Zt,c0=null,u0=0,h0=0,f0=!1,qs=(1+Math.sqrt(5))/2,po=1/qs,XS=[new k(-qs,po,0),new k(qs,po,0),new k(-po,0,qs),new k(po,0,qs),new k(0,qs,-po),new k(0,qs,po),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],d2=new k,mf=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,a=100,s={}){let{size:r=256,position:o=d2}=s;c0=this._renderer.getRenderTarget(),u0=this._renderer.getActiveCubeFace(),h0=this._renderer.getActiveMipmapLevel(),f0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ZS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=YS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(c0,u0,h0),this._renderer.xr.enabled=f0,t.scissorTest=!1,df(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Vs||t.mapping===Gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),c0=this._renderer.getRenderTarget(),u0=this._renderer.getActiveCubeFace(),h0=this._renderer.getActiveMipmapLevel(),f0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:uo,format:si,colorSpace:Ps,depthBuffer:!1},a=qS(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qS(t,n,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=p2(s)),this._blurMaterial=m2(s,t,n)}return a}_compileMaterial(t){let n=new bn(this._lodPlanes[0],t);this._renderer.compile(n,l0)}_sceneToCubeUV(t,n,i,a,s){let l=new Mn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(WS),d.toneMapping=da,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(a),d.clearDepth(),d.setRenderTarget(null));let x=new Ol({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),m=new bn(new ro,x),u=!1,g=t.background;g?g.isColor&&(x.color.copy(g),t.background=null,u=!0):(x.color.copy(WS),u=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));let w=this._cubeSize;df(a,_*w,y>2?w:0,w,w),d.setRenderTarget(a),u&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=g}_textureToCubeUV(t,n){let i=this._renderer,a=t.mapping===Vs||t.mapping===Gs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ZS()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=YS());let s=a?this._cubemapMaterial:this._equirectMaterial,r=new bn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;df(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,l0)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let a=this._lodPlanes.length;for(let s=1;s<a;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=XS[(a-s-1)%XS.length];this._blur(t,s-1,s,r,o)}n.autoClear=i}_blur(t,n,i,a,s){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new bn(this._lodPlanes[a],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ys-1),x=s/v,m=isFinite(s)?1+Math.floor(h*x):Ys;m>Ys&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ys}`);let u=[],g=0;for(let T=0;T<Ys;++T){let D=T/x,M=Math.exp(-D*D/2);u.push(M),T===0?g+=M:T<m&&(g+=2*M)}for(let T=0;T<u.length;T++)u[T]=u[T]/g;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-i;let _=this._sizeLods[a],w=3*_*(a>y-mo?a-y+mo:0),U=4*(this._cubeSize-_);df(n,w,U,3*_,2*_),l.setRenderTarget(n),l.render(d,l0)}};function p2(e){let t=[],n=[],i=[],a=e,s=e-mo+1+kS.length;for(let r=0;r<s;r++){let o=Math.pow(2,a);n.push(o);let l=1/o;r>e-mo?l=kS[r-e+mo-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,v=6,x=3,m=2,u=1,g=new Float32Array(x*v*p),y=new Float32Array(m*v*p),_=new Float32Array(u*v*p);for(let U=0;U<p;U++){let T=U%3*2/3-1,D=U>2?0:-1,M=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];g.set(M,x*v*U),y.set(f,m*v*U);let b=[U,U,U,U,U,U];_.set(b,u*v*U)}let w=new $a;w.setAttribute("position",new Fn(g,x)),w.setAttribute("uv",new Fn(y,m)),w.setAttribute("faceIndex",new Fn(_,u)),t.push(w),a>mo&&a--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function qS(e,t,n){let i=new Ci(e,t,n);return i.texture.mapping=Gl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function df(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function m2(e,t,n){let i=new Float32Array(Ys),a=new k(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:M0(),fragmentShader:`

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
		`,blending:fa,depthTest:!1,depthWrite:!1})}function YS(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:M0(),fragmentShader:`

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
		`,blending:fa,depthTest:!1,depthWrite:!1})}function ZS(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:M0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fa,depthTest:!1,depthWrite:!1})}function M0(){return`

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
	`}function g2(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Dh||l===Uh,h=l===Vs||l===Gs;if(c||h){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new mf(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&a(p)?(n===null&&(n=new mf(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function a(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function v2(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let a=n(i);return a===null&&Bs("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function _2(e,t,n,i){let a={},s=new WeakMap;function r(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let v in f.attributes)t.remove(f.attributes[v]);f.removeEventListener("dispose",r),delete a[f.id];let p=s.get(f);p&&(t.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return a[f.id]===!0||(f.addEventListener("dispose",r),a[f.id]=!0,n.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)t.update(f[p],e.ARRAY_BUFFER)}function c(d){let f=[],p=d.index,v=d.attributes.position,x=0;if(p!==null){let g=p.array;x=p.version;for(let y=0,_=g.length;y<_;y+=3){let w=g[y+0],U=g[y+1],T=g[y+2];f.push(w,U,U,T,T,w)}}else if(v!==void 0){let g=v.array;x=v.version;for(let y=0,_=g.length/3-1;y<_;y+=3){let w=y+0,U=y+1,T=y+2;f.push(w,U,U,T,T,w)}}else return;let m=new(i0(f)?Il:Nl)(f,1);m.version=x;let u=s.get(d);u&&t.remove(u),s.set(d,m)}function h(d){let f=s.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function y2(e,t,n){let i;function a(f){i=f}let s,r;function o(f){s=f.type,r=f.bytesPerElement}function l(f,p){e.drawElements(i,p,s,f*r),n.update(p,i,1)}function c(f,p,v){v!==0&&(e.drawElementsInstanced(i,p,s,f*r,v),n.update(p,i,v))}function h(f,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,v);let m=0;for(let u=0;u<v;u++)m+=p[u];n.update(m,i,1)}function d(f,p,v,x){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/r,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,x,0,v);let u=0;for(let g=0;g<v;g++)u+=p[g]*x[g];n.update(u,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function x2(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function S2(e,t,n){let i=new WeakMap,a=new Ne;function s(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==d){let M=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],y=0;p===!0&&(y=1),v===!0&&(y=2),x===!0&&(y=3);let _=o.attributes.position.count*y,w=1;_>t.maxTextureSize&&(w=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let U=new Float32Array(_*w*4*d),T=new Ul(U,_,w,d);T.type=Oi,T.needsUpdate=!0;let D=y*4;for(let b=0;b<d;b++){let C=m[b],W=u[b],H=g[b],P=_*w*4*b;for(let Z=0;Z<C.count;Z++){let F=Z*D;p===!0&&(a.fromBufferAttribute(C,Z),U[P+F+0]=a.x,U[P+F+1]=a.y,U[P+F+2]=a.z,U[P+F+3]=0),v===!0&&(a.fromBufferAttribute(W,Z),U[P+F+4]=a.x,U[P+F+5]=a.y,U[P+F+6]=a.z,U[P+F+7]=0),x===!0&&(a.fromBufferAttribute(H,Z),U[P+F+8]=a.x,U[P+F+9]=a.y,U[P+F+10]=a.z,U[P+F+11]=H.itemSize===4?a.w:1)}}f={count:d,texture:T,size:new oe(_,w)},i.set(o,f),o.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:s}}function M2(e,t,n,i){let a=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(a.get(d)!==c&&(t.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return d}function r(){a=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:r}}var d1=new Hn,JS=new Hl(1,1),p1=new Ul,m1=new oh,g1=new Bl,KS=[],QS=[],jS=new Float32Array(16),$S=new Float32Array(9),t1=new Float32Array(4);function vo(e,t,n){let i=e[0];if(i<=0||i>0)return e;let a=t*n,s=KS[a];if(s===void 0&&(s=new Float32Array(a),KS[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function Xe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function qe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function _f(e,t){let n=QS[t];n===void 0&&(n=new Int32Array(t),QS[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function b2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function E2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;e.uniform2fv(this.addr,t),qe(n,t)}}function T2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Xe(n,t))return;e.uniform3fv(this.addr,t),qe(n,t)}}function A2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;e.uniform4fv(this.addr,t),qe(n,t)}}function w2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Xe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),qe(n,t)}else{if(Xe(n,i))return;t1.set(i),e.uniformMatrix2fv(this.addr,!1,t1),qe(n,i)}}function C2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Xe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),qe(n,t)}else{if(Xe(n,i))return;$S.set(i),e.uniformMatrix3fv(this.addr,!1,$S),qe(n,i)}}function R2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Xe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),qe(n,t)}else{if(Xe(n,i))return;jS.set(i),e.uniformMatrix4fv(this.addr,!1,jS),qe(n,i)}}function D2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function U2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;e.uniform2iv(this.addr,t),qe(n,t)}}function L2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Xe(n,t))return;e.uniform3iv(this.addr,t),qe(n,t)}}function O2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;e.uniform4iv(this.addr,t),qe(n,t)}}function N2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function I2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;e.uniform2uiv(this.addr,t),qe(n,t)}}function P2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Xe(n,t))return;e.uniform3uiv(this.addr,t),qe(n,t)}}function B2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;e.uniform4uiv(this.addr,t),qe(n,t)}}function z2(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(JS.compareFunction=e0,s=JS):s=d1,n.setTexture2D(t||s,a)}function F2(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||m1,a)}function H2(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||g1,a)}function V2(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||p1,a)}function G2(e){switch(e){case 5126:return b2;case 35664:return E2;case 35665:return T2;case 35666:return A2;case 35674:return w2;case 35675:return C2;case 35676:return R2;case 5124:case 35670:return D2;case 35667:case 35671:return U2;case 35668:case 35672:return L2;case 35669:case 35673:return O2;case 5125:return N2;case 36294:return I2;case 36295:return P2;case 36296:return B2;case 35678:case 36198:case 36298:case 36306:case 35682:return z2;case 35679:case 36299:case 36307:return F2;case 35680:case 36300:case 36308:case 36293:return H2;case 36289:case 36303:case 36311:case 36292:return V2}}function k2(e,t){e.uniform1fv(this.addr,t)}function W2(e,t){let n=vo(t,this.size,2);e.uniform2fv(this.addr,n)}function X2(e,t){let n=vo(t,this.size,3);e.uniform3fv(this.addr,n)}function q2(e,t){let n=vo(t,this.size,4);e.uniform4fv(this.addr,n)}function Y2(e,t){let n=vo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Z2(e,t){let n=vo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function J2(e,t){let n=vo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function K2(e,t){e.uniform1iv(this.addr,t)}function Q2(e,t){e.uniform2iv(this.addr,t)}function j2(e,t){e.uniform3iv(this.addr,t)}function $2(e,t){e.uniform4iv(this.addr,t)}function tC(e,t){e.uniform1uiv(this.addr,t)}function eC(e,t){e.uniform2uiv(this.addr,t)}function nC(e,t){e.uniform3uiv(this.addr,t)}function iC(e,t){e.uniform4uiv(this.addr,t)}function aC(e,t,n){let i=this.cache,a=t.length,s=_f(n,a);Xe(i,s)||(e.uniform1iv(this.addr,s),qe(i,s));for(let r=0;r!==a;++r)n.setTexture2D(t[r]||d1,s[r])}function sC(e,t,n){let i=this.cache,a=t.length,s=_f(n,a);Xe(i,s)||(e.uniform1iv(this.addr,s),qe(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||m1,s[r])}function rC(e,t,n){let i=this.cache,a=t.length,s=_f(n,a);Xe(i,s)||(e.uniform1iv(this.addr,s),qe(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||g1,s[r])}function oC(e,t,n){let i=this.cache,a=t.length,s=_f(n,a);Xe(i,s)||(e.uniform1iv(this.addr,s),qe(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||p1,s[r])}function lC(e){switch(e){case 5126:return k2;case 35664:return W2;case 35665:return X2;case 35666:return q2;case 35674:return Y2;case 35675:return Z2;case 35676:return J2;case 5124:case 35670:return K2;case 35667:case 35671:return Q2;case 35668:case 35672:return j2;case 35669:case 35673:return $2;case 5125:return tC;case 36294:return eC;case 36295:return nC;case 36296:return iC;case 35678:case 36198:case 36298:case 36306:case 35682:return aC;case 35679:case 36299:case 36307:return sC;case 35680:case 36300:case 36308:case 36293:return rC;case 36289:case 36303:case 36311:case 36292:return oC}}var p0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=G2(n.type)}},m0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=lC(n.type)}},g0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let a=this.seq;for(let s=0,r=a.length;s!==r;++s){let o=a[s];o.setValue(t,n[o.id],i)}}},d0=/(\w+)(\])?(\[|\.)?/g;function e1(e,t){e.seq.push(t),e.map[t.id]=t}function cC(e,t,n){let i=e.name,a=i.length;for(d0.lastIndex=0;;){let s=d0.exec(i),r=d0.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){e1(n,c===void 0?new p0(o,e,t):new m0(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new g0(o),e1(n,d)),n=d}}}var go=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let s=t.getActiveUniform(n,a),r=t.getUniformLocation(n,s.name);cC(s,r,this)}}setValue(t,n,i,a){let s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){let a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){let o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){let i=[];for(let a=0,s=t.length;a!==s;++a){let r=t[a];r.id in n&&i.push(r)}return i}};function n1(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var uC=37297,hC=0;function fC(e,t){let n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var i1=new Xt;function dC(e){ie._getMatrix(i1,ie.workingColorSpace,e);let t=`mat3( ${i1.elements.map(n=>n.toFixed(4))} )`;switch(ie.getTransfer(e)){case Cl:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function a1(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+fC(e.getShaderSource(t),o)}else return s}function pC(e,t){let n=dC(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function mC(e,t){let n;switch(t){case yS:n="Linear";break;case xS:n="Reinhard";break;case SS:n="Cineon";break;case MS:n="ACESFilmic";break;case ES:n="AgX";break;case TS:n="Neutral";break;case bS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var pf=new k;function gC(){ie.getLuminanceCoefficients(pf);let e=pf.x.toFixed(4),t=pf.y.toFixed(4),n=pf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vC(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kl).join(`
`)}function _C(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function yC(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let s=e.getActiveAttrib(t,a),r=s.name,o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Kl(e){return e!==""}function s1(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function r1(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xC=/^[ \t]*#include +<([\w\d./]+)>/gm;function v0(e){return e.replace(xC,MC)}var SC=new Map;function MC(e,t){let n=Jt[t];if(n===void 0){let i=SC.get(t);if(i!==void 0)n=Jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return v0(n)}var bC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function o1(e){return e.replace(bC,EC)}function EC(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function l1(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function TC(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Vm?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===jx?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Di&&(t="SHADOWMAP_TYPE_VSM"),t}function AC(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Vs:case Gs:t="ENVMAP_TYPE_CUBE";break;case Gl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wC(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Gs&&(t="ENVMAP_MODE_REFRACTION"),t}function CC(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Xm:t="ENVMAP_BLENDING_MULTIPLY";break;case vS:t="ENVMAP_BLENDING_MIX";break;case _S:t="ENVMAP_BLENDING_ADD";break}return t}function RC(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function DC(e,t,n,i){let a=e.getContext(),s=n.defines,r=n.vertexShader,o=n.fragmentShader,l=TC(n),c=AC(n),h=wC(n),d=CC(n),f=RC(n),p=vC(n),v=_C(s),x=a.createProgram(),m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Kl).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Kl).join(`
`),u.length>0&&(u+=`
`)):(m=[l1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kl).join(`
`),u=[l1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==da?"#define TONE_MAPPING":"",n.toneMapping!==da?Jt.tonemapping_pars_fragment:"",n.toneMapping!==da?mC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,pC("linearToOutputTexel",n.outputColorSpace),gC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Kl).join(`
`)),r=v0(r),r=s1(r,n),r=r1(r,n),o=v0(o),o=s1(o,n),o=r1(o,n),r=o1(r),o=o1(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===n0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===n0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=g+m+r,_=g+u+o,w=n1(a,a.VERTEX_SHADER,y),U=n1(a,a.FRAGMENT_SHADER,_);a.attachShader(x,w),a.attachShader(x,U),n.index0AttributeName!==void 0?a.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function T(C){if(e.debug.checkShaderErrors){let W=a.getProgramInfoLog(x)||"",H=a.getShaderInfoLog(w)||"",P=a.getShaderInfoLog(U)||"",Z=W.trim(),F=H.trim(),$=P.trim(),B=!0,K=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(B=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,x,w,U);else{let et=a1(a,w,"vertex"),ht=a1(a,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Z+`
`+et+`
`+ht)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(F===""||$==="")&&(K=!1);K&&(C.diagnostics={runnable:B,programLog:Z,vertexShader:{log:F,prefix:m},fragmentShader:{log:$,prefix:u}})}a.deleteShader(w),a.deleteShader(U),D=new go(a,x),M=yC(a,x)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=a.getProgramParameter(x,uC)),b},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=hC++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=U,this}var UC=0,_0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new y0(t),n.set(t,i)),i}},y0=class{constructor(t){this.id=UC++,this.code=t,this.usedTimes=0}};function LC(e,t,n,i,a,s,r){let o=new Ll,l=new _0,c=new Set,h=[],d=a.logarithmicDepthBuffer,f=a.vertexTextures,p=a.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,b,C,W,H){let P=W.fog,Z=H.geometry,F=M.isMeshStandardMaterial?W.environment:null,$=(M.isMeshStandardMaterial?n:t).get(M.envMap||F),B=$&&$.mapping===Gl?$.image.height:null,K=v[M.type];M.precision!==null&&(p=a.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let et=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ht=et!==void 0?et.length:0,gt=0;Z.morphAttributes.position!==void 0&&(gt=1),Z.morphAttributes.normal!==void 0&&(gt=2),Z.morphAttributes.color!==void 0&&(gt=3);let Vt,Yt,z,nt;if(K){let le=Ni[K];Vt=le.vertexShader,Yt=le.fragmentShader}else Vt=M.vertexShader,Yt=M.fragmentShader,l.update(M),z=l.getVertexShaderID(M),nt=l.getFragmentShaderID(M);let Q=e.getRenderTarget(),ct=e.state.buffers.depth.getReversed(),pt=H.isInstancedMesh===!0,yt=H.isBatchedMesh===!0,zt=!!M.map,tt=!!M.matcap,R=!!$,Nt=!!M.aoMap,Mt=!!M.lightMap,Ft=!!M.bumpMap,St=!!M.normalMap,jt=!!M.displacementMap,vt=!!M.emissiveMap,It=!!M.metalnessMap,ge=!!M.roughnessMap,fe=M.anisotropy>0,A=M.clearcoat>0,S=M.dispersion>0,N=M.iridescence>0,Y=M.sheen>0,q=M.transmission>0,X=fe&&!!M.anisotropyMap,bt=A&&!!M.clearcoatMap,rt=A&&!!M.clearcoatNormalMap,ft=A&&!!M.clearcoatRoughnessMap,lt=N&&!!M.iridescenceMap,it=N&&!!M.iridescenceThicknessMap,_t=Y&&!!M.sheenColorMap,Dt=Y&&!!M.sheenRoughnessMap,wt=!!M.specularMap,ut=!!M.specularColorMap,qt=!!M.specularIntensityMap,L=q&&!!M.transmissionMap,ot=q&&!!M.thicknessMap,dt=!!M.gradientMap,Tt=!!M.alphaMap,at=M.alphaTest>0,j=!!M.alphaHash,Ct=!!M.extensions,Gt=da;M.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Gt=e.toneMapping);let ye={shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:Vt,fragmentShader:Yt,defines:M.defines,customVertexShaderID:z,customFragmentShaderID:nt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:yt,batchingColor:yt&&H._colorsTexture!==null,instancing:pt,instancingColor:pt&&H.instanceColor!==null,instancingMorph:pt&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?e.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ps,alphaToCoverage:!!M.alphaToCoverage,map:zt,matcap:tt,envMap:R,envMapMode:R&&$.mapping,envMapCubeUVHeight:B,aoMap:Nt,lightMap:Mt,bumpMap:Ft,normalMap:St,displacementMap:f&&jt,emissiveMap:vt,normalMapObjectSpace:St&&M.normalMapType===DS,normalMapTangentSpace:St&&M.normalMapType===RS,metalnessMap:It,roughnessMap:ge,anisotropy:fe,anisotropyMap:X,clearcoat:A,clearcoatMap:bt,clearcoatNormalMap:rt,clearcoatRoughnessMap:ft,dispersion:S,iridescence:N,iridescenceMap:lt,iridescenceThicknessMap:it,sheen:Y,sheenColorMap:_t,sheenRoughnessMap:Dt,specularMap:wt,specularColorMap:ut,specularIntensityMap:qt,transmission:q,transmissionMap:L,thicknessMap:ot,gradientMap:dt,opaque:M.transparent===!1&&M.blending===ca&&M.alphaToCoverage===!1,alphaMap:Tt,alphaTest:at,alphaHash:j,combine:M.combine,mapUv:zt&&x(M.map.channel),aoMapUv:Nt&&x(M.aoMap.channel),lightMapUv:Mt&&x(M.lightMap.channel),bumpMapUv:Ft&&x(M.bumpMap.channel),normalMapUv:St&&x(M.normalMap.channel),displacementMapUv:jt&&x(M.displacementMap.channel),emissiveMapUv:vt&&x(M.emissiveMap.channel),metalnessMapUv:It&&x(M.metalnessMap.channel),roughnessMapUv:ge&&x(M.roughnessMap.channel),anisotropyMapUv:X&&x(M.anisotropyMap.channel),clearcoatMapUv:bt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:rt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:it&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&x(M.sheenRoughnessMap.channel),specularMapUv:wt&&x(M.specularMap.channel),specularColorMapUv:ut&&x(M.specularColorMap.channel),specularIntensityMapUv:qt&&x(M.specularIntensityMap.channel),transmissionMapUv:L&&x(M.transmissionMap.channel),thicknessMapUv:ot&&x(M.thicknessMap.channel),alphaMapUv:Tt&&x(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(St||fe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(zt||Tt),fog:!!P,useFog:M.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ct,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:gt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:Gt,decodeVideoTexture:zt&&M.map.isVideoTexture===!0&&ie.getTransfer(M.map.colorSpace)===he,decodeVideoTextureEmissive:vt&&M.emissiveMap.isVideoTexture===!0&&ie.getTransfer(M.emissiveMap.colorSpace)===he,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ui,flipSided:M.side===fn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ct&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&M.extensions.multiDraw===!0||yt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function u(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)b.push(C),b.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(g(b,M),y(b,M),b.push(e.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function g(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function y(M,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),M.push(o.mask)}function _(M){let b=v[M.type],C;if(b){let W=Ni[b];C=VS.clone(W.uniforms)}else C=M.uniforms;return C}function w(M,b){let C;for(let W=0,H=h.length;W<H;W++){let P=h[W];if(P.cacheKey===b){C=P,++C.usedTimes;break}}return C===void 0&&(C=new DC(e,b,M,s),h.push(C)),C}function U(M){if(--M.usedTimes===0){let b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function T(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:_,acquireProgram:w,releaseProgram:U,releaseShaderCache:T,programs:h,dispose:D}}function OC(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function NC(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function c1(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function u1(){let e=[],t=0,n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(d,f,p,v,x,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:x,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=x,u.group=m),t++,u}function o(d,f,p,v,x,m){let u=r(d,f,p,v,x,m);p.transmission>0?i.push(u):p.transparent===!0?a.push(u):n.push(u)}function l(d,f,p,v,x,m){let u=r(d,f,p,v,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?a.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||NC),i.length>1&&i.sort(f||c1),a.length>1&&a.sort(f||c1)}function h(){for(let d=t,f=e.length;d<f;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:o,unshift:l,finish:h,sort:c}}function IC(){let e=new WeakMap;function t(i,a){let s=e.get(i),r;return s===void 0?(r=new u1,e.set(i,[r])):a>=s.length?(r=new u1,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function PC(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new k,color:new Zt};break;case"SpotLight":n={position:new k,direction:new k,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":n={color:new Zt,position:new k,halfWidth:new k,halfHeight:new k};break}return e[t.id]=n,n}}}function BC(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var zC=0;function FC(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function HC(e){let t=new PC,n=BC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);let a=new k,s=new We,r=new We;function o(c){let h=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,v=0,x=0,m=0,u=0,g=0,y=0,_=0,w=0,U=0,T=0;c.sort(FC);for(let M=0,b=c.length;M<b;M++){let C=c[M],W=C.color,H=C.intensity,P=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=W.r*H,d+=W.g*H,f+=W.b*H;else if(C.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(C.sh.coefficients[F],H);T++}else if(C.isDirectionalLight){let F=t.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let $=C.shadow,B=n.get(C);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=C.shadow.matrix,g++}i.directional[p]=F,p++}else if(C.isSpotLight){let F=t.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(W).multiplyScalar(H),F.distance=P,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,i.spot[x]=F;let $=C.shadow;if(C.map&&(i.spotLightMap[w]=C.map,w++,$.updateMatrices(C),C.castShadow&&U++),i.spotLightMatrix[x]=$.matrix,C.castShadow){let B=n.get(C);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=Z,_++}x++}else if(C.isRectAreaLight){let F=t.get(C);F.color.copy(W).multiplyScalar(H),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=F,m++}else if(C.isPointLight){let F=t.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){let $=C.shadow,B=n.get(C);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,B.shadowCameraNear=$.camera.near,B.shadowCameraFar=$.camera.far,i.pointShadow[v]=B,i.pointShadowMap[v]=Z,i.pointShadowMatrix[v]=C.shadow.matrix,y++}i.point[v]=F,v++}else if(C.isHemisphereLight){let F=t.get(C);F.skyColor.copy(C.color).multiplyScalar(H),F.groundColor.copy(C.groundColor).multiplyScalar(H),i.hemi[u]=F,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let D=i.hash;(D.directionalLength!==p||D.pointLength!==v||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==g||D.numPointShadows!==y||D.numSpotShadows!==_||D.numSpotMaps!==w||D.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+w-U,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=T,D.directionalLength=p,D.pointLength=v,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=g,D.numPointShadows=y,D.numSpotShadows=_,D.numSpotMaps=w,D.numLightProbes=T,i.version=zC++)}function l(c,h){let d=0,f=0,p=0,v=0,x=0,m=h.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){let y=c[u];if(y.isDirectionalLight){let _=i.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(a),_.direction.transformDirection(m),d++}else if(y.isSpotLight){let _=i.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(a),_.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let _=i.rectArea[v];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),r.identity(),s.copy(y.matrixWorld),s.premultiply(m),r.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),v++}else if(y.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function h1(e){let t=new HC(e),n=[],i=[];function a(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function r(h){i.push(h)}function o(){t.setup(n)}function l(h){t.setupView(n,h)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:r}}function VC(e){let t=new WeakMap;function n(a,s=0){let r=t.get(a),o;return r===void 0?(o=new h1(e),t.set(a,[o])):s>=r.length?(o=new h1(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var GC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kC=`uniform sampler2D shadow_pass;
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
}`;function WC(e,t,n){let i=new Fl,a=new oe,s=new oe,r=new Ne,o=new hh({depthPacking:CS}),l=new fh,c={},h=n.maxTextureSize,d={[la]:fn,[fn]:la,[Ui]:Ui},f=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:GC,fragmentShader:kC}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let v=new $a;v.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new bn(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vm;let u=this.type;this.render=function(U,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||U.length===0)return;let M=e.getRenderTarget(),b=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),W=e.state;W.setBlending(fa),W.buffers.depth.getReversed()?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let H=u!==Di&&this.type===Di,P=u===Di&&this.type!==Di;for(let Z=0,F=U.length;Z<F;Z++){let $=U[Z],B=$.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);let K=B.getFrameExtents();if(a.multiply(K),s.copy(B.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/K.x),a.x=s.x*K.x,B.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/K.y),a.y=s.y*K.y,B.mapSize.y=s.y)),B.map===null||H===!0||P===!0){let ht=this.type!==Di?{minFilter:ii,magFilter:ii}:{};B.map!==null&&B.map.dispose(),B.map=new Ci(a.x,a.y,ht),B.map.texture.name=$.name+".shadowMap",B.camera.updateProjectionMatrix()}e.setRenderTarget(B.map),e.clear();let et=B.getViewportCount();for(let ht=0;ht<et;ht++){let gt=B.getViewport(ht);r.set(s.x*gt.x,s.y*gt.y,s.x*gt.z,s.y*gt.w),W.viewport(r),B.updateMatrices($,ht),i=B.getFrustum(),_(T,D,B.camera,$,this.type)}B.isPointLightShadow!==!0&&this.type===Di&&g(B,D),B.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(M,b,C)};function g(U,T){let D=t.update(x);f.defines.VSM_SAMPLES!==U.blurSamples&&(f.defines.VSM_SAMPLES=U.blurSamples,p.defines.VSM_SAMPLES=U.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ci(a.x,a.y)),f.uniforms.shadow_pass.value=U.map.texture,f.uniforms.resolution.value=U.mapSize,f.uniforms.radius.value=U.radius,e.setRenderTarget(U.mapPass),e.clear(),e.renderBufferDirect(T,null,D,f,x,null),p.uniforms.shadow_pass.value=U.mapPass.texture,p.uniforms.resolution.value=U.mapSize,p.uniforms.radius.value=U.radius,e.setRenderTarget(U.map),e.clear(),e.renderBufferDirect(T,null,D,p,x,null)}function y(U,T,D,M){let b=null,C=D.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(C!==void 0)b=C;else if(b=D.isPointLight===!0?l:o,e.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let W=b.uuid,H=T.uuid,P=c[W];P===void 0&&(P={},c[W]=P);let Z=P[H];Z===void 0&&(Z=b.clone(),P[H]=Z,T.addEventListener("dispose",w)),b=Z}if(b.visible=T.visible,b.wireframe=T.wireframe,M===Di?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:d[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let W=e.properties.get(b);W.light=D}return b}function _(U,T,D,M,b){if(U.visible===!1)return;if(U.layers.test(T.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&b===Di)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,U.matrixWorld);let H=t.update(U),P=U.material;if(Array.isArray(P)){let Z=H.groups;for(let F=0,$=Z.length;F<$;F++){let B=Z[F],K=P[B.materialIndex];if(K&&K.visible){let et=y(U,K,M,b);U.onBeforeShadow(e,U,T,D,H,et,B),e.renderBufferDirect(D,null,H,et,U,B),U.onAfterShadow(e,U,T,D,H,et,B)}}}else if(P.visible){let Z=y(U,P,M,b);U.onBeforeShadow(e,U,T,D,H,Z,null),e.renderBufferDirect(D,null,H,Z,U,null),U.onAfterShadow(e,U,T,D,H,Z,null)}}let W=U.children;for(let H=0,P=W.length;H<P;H++)_(W[H],T,D,M,b)}function w(U){U.target.removeEventListener("dispose",w);for(let D in c){let M=c[D],b=U.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}var XC={[bh]:Eh,[Th]:Ch,[Ah]:Rh,[Is]:wh,[Eh]:bh,[Ch]:Th,[Rh]:Ah,[wh]:Is};function qC(e,t){function n(){let L=!1,ot=new Ne,dt=null,Tt=new Ne(0,0,0,0);return{setMask:function(at){dt!==at&&!L&&(e.colorMask(at,at,at,at),dt=at)},setLocked:function(at){L=at},setClear:function(at,j,Ct,Gt,ye){ye===!0&&(at*=Gt,j*=Gt,Ct*=Gt),ot.set(at,j,Ct,Gt),Tt.equals(ot)===!1&&(e.clearColor(at,j,Ct,Gt),Tt.copy(ot))},reset:function(){L=!1,dt=null,Tt.set(-1,0,0,0)}}}function i(){let L=!1,ot=!1,dt=null,Tt=null,at=null;return{setReversed:function(j){if(ot!==j){let Ct=t.get("EXT_clip_control");j?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),ot=j;let Gt=at;at=null,this.setClear(Gt)}},getReversed:function(){return ot},setTest:function(j){j?Q(e.DEPTH_TEST):ct(e.DEPTH_TEST)},setMask:function(j){dt!==j&&!L&&(e.depthMask(j),dt=j)},setFunc:function(j){if(ot&&(j=XC[j]),Tt!==j){switch(j){case bh:e.depthFunc(e.NEVER);break;case Eh:e.depthFunc(e.ALWAYS);break;case Th:e.depthFunc(e.LESS);break;case Is:e.depthFunc(e.LEQUAL);break;case Ah:e.depthFunc(e.EQUAL);break;case wh:e.depthFunc(e.GEQUAL);break;case Ch:e.depthFunc(e.GREATER);break;case Rh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Tt=j}},setLocked:function(j){L=j},setClear:function(j){at!==j&&(ot&&(j=1-j),e.clearDepth(j),at=j)},reset:function(){L=!1,dt=null,Tt=null,at=null,ot=!1}}}function a(){let L=!1,ot=null,dt=null,Tt=null,at=null,j=null,Ct=null,Gt=null,ye=null;return{setTest:function(le){L||(le?Q(e.STENCIL_TEST):ct(e.STENCIL_TEST))},setMask:function(le){ot!==le&&!L&&(e.stencilMask(le),ot=le)},setFunc:function(le,Ii,gi){(dt!==le||Tt!==Ii||at!==gi)&&(e.stencilFunc(le,Ii,gi),dt=le,Tt=Ii,at=gi)},setOp:function(le,Ii,gi){(j!==le||Ct!==Ii||Gt!==gi)&&(e.stencilOp(le,Ii,gi),j=le,Ct=Ii,Gt=gi)},setLocked:function(le){L=le},setClear:function(le){ye!==le&&(e.clearStencil(le),ye=le)},reset:function(){L=!1,ot=null,dt=null,Tt=null,at=null,j=null,Ct=null,Gt=null,ye=null}}}let s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,p=[],v=null,x=!1,m=null,u=null,g=null,y=null,_=null,w=null,U=null,T=new Zt(0,0,0),D=0,M=!1,b=null,C=null,W=null,H=null,P=null,Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,$=0,B=e.getParameter(e.VERSION);B.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(B)[1]),F=$>=1):B.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),F=$>=2);let K=null,et={},ht=e.getParameter(e.SCISSOR_BOX),gt=e.getParameter(e.VIEWPORT),Vt=new Ne().fromArray(ht),Yt=new Ne().fromArray(gt);function z(L,ot,dt,Tt){let at=new Uint8Array(4),j=e.createTexture();e.bindTexture(L,j),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ct=0;Ct<dt;Ct++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(ot,0,e.RGBA,1,1,Tt,0,e.RGBA,e.UNSIGNED_BYTE,at):e.texImage2D(ot+Ct,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,at);return j}let nt={};nt[e.TEXTURE_2D]=z(e.TEXTURE_2D,e.TEXTURE_2D,1),nt[e.TEXTURE_CUBE_MAP]=z(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[e.TEXTURE_2D_ARRAY]=z(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),nt[e.TEXTURE_3D]=z(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Q(e.DEPTH_TEST),r.setFunc(Is),Ft(!1),St(Hm),Q(e.CULL_FACE),Nt(fa);function Q(L){h[L]!==!0&&(e.enable(L),h[L]=!0)}function ct(L){h[L]!==!1&&(e.disable(L),h[L]=!1)}function pt(L,ot){return d[L]!==ot?(e.bindFramebuffer(L,ot),d[L]=ot,L===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=ot),L===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=ot),!0):!1}function yt(L,ot){let dt=p,Tt=!1;if(L){dt=f.get(ot),dt===void 0&&(dt=[],f.set(ot,dt));let at=L.textures;if(dt.length!==at.length||dt[0]!==e.COLOR_ATTACHMENT0){for(let j=0,Ct=at.length;j<Ct;j++)dt[j]=e.COLOR_ATTACHMENT0+j;dt.length=at.length,Tt=!0}}else dt[0]!==e.BACK&&(dt[0]=e.BACK,Tt=!0);Tt&&e.drawBuffers(dt)}function zt(L){return v!==L?(e.useProgram(L),v=L,!0):!1}let tt={[Qa]:e.FUNC_ADD,[tS]:e.FUNC_SUBTRACT,[eS]:e.FUNC_REVERSE_SUBTRACT};tt[nS]=e.MIN,tt[iS]=e.MAX;let R={[aS]:e.ZERO,[sS]:e.ONE,[rS]:e.SRC_COLOR,[$u]:e.SRC_ALPHA,[fS]:e.SRC_ALPHA_SATURATE,[uS]:e.DST_COLOR,[lS]:e.DST_ALPHA,[oS]:e.ONE_MINUS_SRC_COLOR,[th]:e.ONE_MINUS_SRC_ALPHA,[hS]:e.ONE_MINUS_DST_COLOR,[cS]:e.ONE_MINUS_DST_ALPHA,[dS]:e.CONSTANT_COLOR,[pS]:e.ONE_MINUS_CONSTANT_COLOR,[mS]:e.CONSTANT_ALPHA,[gS]:e.ONE_MINUS_CONSTANT_ALPHA};function Nt(L,ot,dt,Tt,at,j,Ct,Gt,ye,le){if(L===fa){x===!0&&(ct(e.BLEND),x=!1);return}if(x===!1&&(Q(e.BLEND),x=!0),L!==$x){if(L!==m||le!==M){if((u!==Qa||_!==Qa)&&(e.blendEquation(e.FUNC_ADD),u=Qa,_=Qa),le)switch(L){case ca:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Gm:e.blendFunc(e.ONE,e.ONE);break;case km:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Wm:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ca:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Gm:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case km:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}g=null,y=null,w=null,U=null,T.set(0,0,0),D=0,m=L,M=le}return}at=at||ot,j=j||dt,Ct=Ct||Tt,(ot!==u||at!==_)&&(e.blendEquationSeparate(tt[ot],tt[at]),u=ot,_=at),(dt!==g||Tt!==y||j!==w||Ct!==U)&&(e.blendFuncSeparate(R[dt],R[Tt],R[j],R[Ct]),g=dt,y=Tt,w=j,U=Ct),(Gt.equals(T)===!1||ye!==D)&&(e.blendColor(Gt.r,Gt.g,Gt.b,ye),T.copy(Gt),D=ye),m=L,M=!1}function Mt(L,ot){L.side===Ui?ct(e.CULL_FACE):Q(e.CULL_FACE);let dt=L.side===fn;ot&&(dt=!dt),Ft(dt),L.blending===ca&&L.transparent===!1?Nt(fa):Nt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);let Tt=L.stencilWrite;o.setTest(Tt),Tt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),vt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(e.SAMPLE_ALPHA_TO_COVERAGE):ct(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(L){b!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),b=L)}function St(L){L!==Kx?(Q(e.CULL_FACE),L!==C&&(L===Hm?e.cullFace(e.BACK):L===Qx?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ct(e.CULL_FACE),C=L}function jt(L){L!==W&&(F&&e.lineWidth(L),W=L)}function vt(L,ot,dt){L?(Q(e.POLYGON_OFFSET_FILL),(H!==ot||P!==dt)&&(e.polygonOffset(ot,dt),H=ot,P=dt)):ct(e.POLYGON_OFFSET_FILL)}function It(L){L?Q(e.SCISSOR_TEST):ct(e.SCISSOR_TEST)}function ge(L){L===void 0&&(L=e.TEXTURE0+Z-1),K!==L&&(e.activeTexture(L),K=L)}function fe(L,ot,dt){dt===void 0&&(K===null?dt=e.TEXTURE0+Z-1:dt=K);let Tt=et[dt];Tt===void 0&&(Tt={type:void 0,texture:void 0},et[dt]=Tt),(Tt.type!==L||Tt.texture!==ot)&&(K!==dt&&(e.activeTexture(dt),K=dt),e.bindTexture(L,ot||nt[L]),Tt.type=L,Tt.texture=ot)}function A(){let L=et[K];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{e.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function N(){try{e.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{e.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{e.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{e.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{e.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{e.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{e.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{e.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{e.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(L){Vt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),Vt.copy(L))}function Dt(L){Yt.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),Yt.copy(L))}function wt(L,ot){let dt=c.get(ot);dt===void 0&&(dt=new WeakMap,c.set(ot,dt));let Tt=dt.get(L);Tt===void 0&&(Tt=e.getUniformBlockIndex(ot,L.name),dt.set(L,Tt))}function ut(L,ot){let Tt=c.get(ot).get(L);l.get(ot)!==Tt&&(e.uniformBlockBinding(ot,Tt,L.__bindingPointIndex),l.set(ot,Tt))}function qt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},K=null,et={},d={},f=new WeakMap,p=[],v=null,x=!1,m=null,u=null,g=null,y=null,_=null,w=null,U=null,T=new Zt(0,0,0),D=0,M=!1,b=null,C=null,W=null,H=null,P=null,Vt.set(0,0,e.canvas.width,e.canvas.height),Yt.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Q,disable:ct,bindFramebuffer:pt,drawBuffers:yt,useProgram:zt,setBlending:Nt,setMaterial:Mt,setFlipSided:Ft,setCullFace:St,setLineWidth:jt,setPolygonOffset:vt,setScissorTest:It,activeTexture:ge,bindTexture:fe,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:N,texImage2D:lt,texImage3D:it,updateUBOMapping:wt,uniformBlockBinding:ut,texStorage2D:rt,texStorage3D:ft,texSubImage2D:Y,texSubImage3D:q,compressedTexSubImage2D:X,compressedTexSubImage3D:bt,scissor:_t,viewport:Dt,reset:qt}}function YC(e,t,n,i,a,s,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,S){return p?new OffscreenCanvas(A,S):Dl("canvas")}function x(A,S,N){let Y=1,q=fe(A);if((q.width>N||q.height>N)&&(Y=N/Math.max(q.width,q.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let X=Math.floor(Y*q.width),bt=Math.floor(Y*q.height);d===void 0&&(d=v(X,bt));let rt=S?v(X,bt):d;return rt.width=X,rt.height=bt,rt.getContext("2d").drawImage(A,0,0,X,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+X+"x"+bt+")."),rt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),A;return A}function m(A){return A.generateMipmaps}function u(A){e.generateMipmap(A)}function g(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(A,S,N,Y,q=!1){if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=S;if(S===e.RED&&(N===e.FLOAT&&(X=e.R32F),N===e.HALF_FLOAT&&(X=e.R16F),N===e.UNSIGNED_BYTE&&(X=e.R8)),S===e.RED_INTEGER&&(N===e.UNSIGNED_BYTE&&(X=e.R8UI),N===e.UNSIGNED_SHORT&&(X=e.R16UI),N===e.UNSIGNED_INT&&(X=e.R32UI),N===e.BYTE&&(X=e.R8I),N===e.SHORT&&(X=e.R16I),N===e.INT&&(X=e.R32I)),S===e.RG&&(N===e.FLOAT&&(X=e.RG32F),N===e.HALF_FLOAT&&(X=e.RG16F),N===e.UNSIGNED_BYTE&&(X=e.RG8)),S===e.RG_INTEGER&&(N===e.UNSIGNED_BYTE&&(X=e.RG8UI),N===e.UNSIGNED_SHORT&&(X=e.RG16UI),N===e.UNSIGNED_INT&&(X=e.RG32UI),N===e.BYTE&&(X=e.RG8I),N===e.SHORT&&(X=e.RG16I),N===e.INT&&(X=e.RG32I)),S===e.RGB_INTEGER&&(N===e.UNSIGNED_BYTE&&(X=e.RGB8UI),N===e.UNSIGNED_SHORT&&(X=e.RGB16UI),N===e.UNSIGNED_INT&&(X=e.RGB32UI),N===e.BYTE&&(X=e.RGB8I),N===e.SHORT&&(X=e.RGB16I),N===e.INT&&(X=e.RGB32I)),S===e.RGBA_INTEGER&&(N===e.UNSIGNED_BYTE&&(X=e.RGBA8UI),N===e.UNSIGNED_SHORT&&(X=e.RGBA16UI),N===e.UNSIGNED_INT&&(X=e.RGBA32UI),N===e.BYTE&&(X=e.RGBA8I),N===e.SHORT&&(X=e.RGBA16I),N===e.INT&&(X=e.RGBA32I)),S===e.RGB&&N===e.UNSIGNED_INT_5_9_9_9_REV&&(X=e.RGB9_E5),S===e.RGBA){let bt=q?Cl:ie.getTransfer(Y);N===e.FLOAT&&(X=e.RGBA32F),N===e.HALF_FLOAT&&(X=e.RGBA16F),N===e.UNSIGNED_BYTE&&(X=bt===he?e.SRGB8_ALPHA8:e.RGBA8),N===e.UNSIGNED_SHORT_4_4_4_4&&(X=e.RGBA4),N===e.UNSIGNED_SHORT_5_5_5_1&&(X=e.RGB5_A1)}return(X===e.R16F||X===e.R32F||X===e.RG16F||X===e.RG32F||X===e.RGBA16F||X===e.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function _(A,S){let N;return A?S===null||S===is||S===ho?N=e.DEPTH24_STENCIL8:S===Oi?N=e.DEPTH32F_STENCIL8:S===co&&(N=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===is||S===ho?N=e.DEPTH_COMPONENT24:S===Oi?N=e.DEPTH_COMPONENT32F:S===co&&(N=e.DEPTH_COMPONENT16),N}function w(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==ii&&A.minFilter!==pi?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function U(A){let S=A.target;S.removeEventListener("dispose",U),D(S),S.isVideoTexture&&h.delete(S)}function T(A){let S=A.target;S.removeEventListener("dispose",T),b(S)}function D(A){let S=i.get(A);if(S.__webglInit===void 0)return;let N=A.source,Y=f.get(N);if(Y){let q=Y[S.__cacheKey];q.usedTimes--,q.usedTimes===0&&M(A),Object.keys(Y).length===0&&f.delete(N)}i.remove(A)}function M(A){let S=i.get(A);e.deleteTexture(S.__webglTexture);let N=A.source,Y=f.get(N);delete Y[S.__cacheKey],r.memory.textures--}function b(A){let S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let q=0;q<S.__webglFramebuffer[Y].length;q++)e.deleteFramebuffer(S.__webglFramebuffer[Y][q]);else e.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)e.deleteFramebuffer(S.__webglFramebuffer[Y]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let N=A.textures;for(let Y=0,q=N.length;Y<q;Y++){let X=i.get(N[Y]);X.__webglTexture&&(e.deleteTexture(X.__webglTexture),r.memory.textures--),i.remove(N[Y])}i.remove(A)}let C=0;function W(){C=0}function H(){let A=C;return A>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a.maxTextures),C+=1,A}function P(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function Z(A,S){let N=i.get(A);if(A.isVideoTexture&&It(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&N.__version!==A.version){let Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(N,A,S);return}}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,N.__webglTexture,e.TEXTURE0+S)}function F(A,S){let N=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){nt(N,A,S);return}n.bindTexture(e.TEXTURE_2D_ARRAY,N.__webglTexture,e.TEXTURE0+S)}function $(A,S){let N=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){nt(N,A,S);return}n.bindTexture(e.TEXTURE_3D,N.__webglTexture,e.TEXTURE0+S)}function B(A,S){let N=i.get(A);if(A.version>0&&N.__version!==A.version){Q(N,A,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture,e.TEXTURE0+S)}let K={[eh]:e.REPEAT,[Ka]:e.CLAMP_TO_EDGE,[nh]:e.MIRRORED_REPEAT},et={[ii]:e.NEAREST,[AS]:e.NEAREST_MIPMAP_NEAREST,[kl]:e.NEAREST_MIPMAP_LINEAR,[pi]:e.LINEAR,[Lh]:e.LINEAR_MIPMAP_NEAREST,[ns]:e.LINEAR_MIPMAP_LINEAR},ht={[US]:e.NEVER,[BS]:e.ALWAYS,[LS]:e.LESS,[e0]:e.LEQUAL,[OS]:e.EQUAL,[PS]:e.GEQUAL,[NS]:e.GREATER,[IS]:e.NOTEQUAL};function gt(A,S){if(S.type===Oi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===pi||S.magFilter===Lh||S.magFilter===kl||S.magFilter===ns||S.minFilter===pi||S.minFilter===Lh||S.minFilter===kl||S.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,K[S.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,K[S.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,K[S.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,et[S.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,et[S.minFilter]),S.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,ht[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ii||S.minFilter!==kl&&S.minFilter!==ns||S.type===Oi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Vt(A,S){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",U));let Y=S.source,q=f.get(Y);q===void 0&&(q={},f.set(Y,q));let X=P(S);if(X!==A.__cacheKey){q[X]===void 0&&(q[X]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,N=!0),q[X].usedTimes++;let bt=q[A.__cacheKey];bt!==void 0&&(q[A.__cacheKey].usedTimes--,bt.usedTimes===0&&M(S)),A.__cacheKey=X,A.__webglTexture=q[X].texture}return N}function Yt(A,S,N){return Math.floor(Math.floor(A/N)/S)}function z(A,S,N,Y){let X=A.updateRanges;if(X.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,N,Y,S.data);else{X.sort((it,_t)=>it.start-_t.start);let bt=0;for(let it=1;it<X.length;it++){let _t=X[bt],Dt=X[it],wt=_t.start+_t.count,ut=Yt(Dt.start,S.width,4),qt=Yt(_t.start,S.width,4);Dt.start<=wt+1&&ut===qt&&Yt(Dt.start+Dt.count-1,S.width,4)===ut?_t.count=Math.max(_t.count,Dt.start+Dt.count-_t.start):(++bt,X[bt]=Dt)}X.length=bt+1;let rt=e.getParameter(e.UNPACK_ROW_LENGTH),ft=e.getParameter(e.UNPACK_SKIP_PIXELS),lt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let it=0,_t=X.length;it<_t;it++){let Dt=X[it],wt=Math.floor(Dt.start/4),ut=Math.ceil(Dt.count/4),qt=wt%S.width,L=Math.floor(wt/S.width),ot=ut,dt=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,qt,L,ot,dt,N,Y,S.data)}A.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,rt),e.pixelStorei(e.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(e.UNPACK_SKIP_ROWS,lt)}}function nt(A,S,N){let Y=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=e.TEXTURE_3D);let q=Vt(A,S),X=S.source;n.bindTexture(Y,A.__webglTexture,e.TEXTURE0+N);let bt=i.get(X);if(X.version!==bt.__version||q===!0){n.activeTexture(e.TEXTURE0+N);let rt=ie.getPrimaries(ie.workingColorSpace),ft=S.colorSpace===pa?null:ie.getPrimaries(S.colorSpace),lt=S.colorSpace===pa||rt===ft?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let it=x(S.image,!1,a.maxTextureSize);it=ge(S,it);let _t=s.convert(S.format,S.colorSpace),Dt=s.convert(S.type),wt=y(S.internalFormat,_t,Dt,S.colorSpace,S.isVideoTexture);gt(Y,S);let ut,qt=S.mipmaps,L=S.isVideoTexture!==!0,ot=bt.__version===void 0||q===!0,dt=X.dataReady,Tt=w(S,it);if(S.isDepthTexture)wt=_(S.format===fo,S.type),ot&&(L?n.texStorage2D(e.TEXTURE_2D,1,wt,it.width,it.height):n.texImage2D(e.TEXTURE_2D,0,wt,it.width,it.height,0,_t,Dt,null));else if(S.isDataTexture)if(qt.length>0){L&&ot&&n.texStorage2D(e.TEXTURE_2D,Tt,wt,qt[0].width,qt[0].height);for(let at=0,j=qt.length;at<j;at++)ut=qt[at],L?dt&&n.texSubImage2D(e.TEXTURE_2D,at,0,0,ut.width,ut.height,_t,Dt,ut.data):n.texImage2D(e.TEXTURE_2D,at,wt,ut.width,ut.height,0,_t,Dt,ut.data);S.generateMipmaps=!1}else L?(ot&&n.texStorage2D(e.TEXTURE_2D,Tt,wt,it.width,it.height),dt&&z(S,it,_t,Dt)):n.texImage2D(e.TEXTURE_2D,0,wt,it.width,it.height,0,_t,Dt,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&ot&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Tt,wt,qt[0].width,qt[0].height,it.depth);for(let at=0,j=qt.length;at<j;at++)if(ut=qt[at],S.format!==si)if(_t!==null)if(L){if(dt)if(S.layerUpdates.size>0){let Ct=o0(ut.width,ut.height,S.format,S.type);for(let Gt of S.layerUpdates){let ye=ut.data.subarray(Gt*Ct/ut.data.BYTES_PER_ELEMENT,(Gt+1)*Ct/ut.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,at,0,0,Gt,ut.width,ut.height,1,_t,ye)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,at,0,0,0,ut.width,ut.height,it.depth,_t,ut.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,at,wt,ut.width,ut.height,it.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?dt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,at,0,0,0,ut.width,ut.height,it.depth,_t,Dt,ut.data):n.texImage3D(e.TEXTURE_2D_ARRAY,at,wt,ut.width,ut.height,it.depth,0,_t,Dt,ut.data)}else{L&&ot&&n.texStorage2D(e.TEXTURE_2D,Tt,wt,qt[0].width,qt[0].height);for(let at=0,j=qt.length;at<j;at++)ut=qt[at],S.format!==si?_t!==null?L?dt&&n.compressedTexSubImage2D(e.TEXTURE_2D,at,0,0,ut.width,ut.height,_t,ut.data):n.compressedTexImage2D(e.TEXTURE_2D,at,wt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?dt&&n.texSubImage2D(e.TEXTURE_2D,at,0,0,ut.width,ut.height,_t,Dt,ut.data):n.texImage2D(e.TEXTURE_2D,at,wt,ut.width,ut.height,0,_t,Dt,ut.data)}else if(S.isDataArrayTexture)if(L){if(ot&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Tt,wt,it.width,it.height,it.depth),dt)if(S.layerUpdates.size>0){let at=o0(it.width,it.height,S.format,S.type);for(let j of S.layerUpdates){let Ct=it.data.subarray(j*at/it.data.BYTES_PER_ELEMENT,(j+1)*at/it.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,_t,Dt,Ct)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,_t,Dt,it.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,wt,it.width,it.height,it.depth,0,_t,Dt,it.data);else if(S.isData3DTexture)L?(ot&&n.texStorage3D(e.TEXTURE_3D,Tt,wt,it.width,it.height,it.depth),dt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,_t,Dt,it.data)):n.texImage3D(e.TEXTURE_3D,0,wt,it.width,it.height,it.depth,0,_t,Dt,it.data);else if(S.isFramebufferTexture){if(ot)if(L)n.texStorage2D(e.TEXTURE_2D,Tt,wt,it.width,it.height);else{let at=it.width,j=it.height;for(let Ct=0;Ct<Tt;Ct++)n.texImage2D(e.TEXTURE_2D,Ct,wt,at,j,0,_t,Dt,null),at>>=1,j>>=1}}else if(qt.length>0){if(L&&ot){let at=fe(qt[0]);n.texStorage2D(e.TEXTURE_2D,Tt,wt,at.width,at.height)}for(let at=0,j=qt.length;at<j;at++)ut=qt[at],L?dt&&n.texSubImage2D(e.TEXTURE_2D,at,0,0,_t,Dt,ut):n.texImage2D(e.TEXTURE_2D,at,wt,_t,Dt,ut);S.generateMipmaps=!1}else if(L){if(ot){let at=fe(it);n.texStorage2D(e.TEXTURE_2D,Tt,wt,at.width,at.height)}dt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,_t,Dt,it)}else n.texImage2D(e.TEXTURE_2D,0,wt,_t,Dt,it);m(S)&&u(Y),bt.__version=X.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Q(A,S,N){if(S.image.length!==6)return;let Y=Vt(A,S),q=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+N);let X=i.get(q);if(q.version!==X.__version||Y===!0){n.activeTexture(e.TEXTURE0+N);let bt=ie.getPrimaries(ie.workingColorSpace),rt=S.colorSpace===pa?null:ie.getPrimaries(S.colorSpace),ft=S.colorSpace===pa||bt===rt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let lt=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,_t=[];for(let j=0;j<6;j++)!lt&&!it?_t[j]=x(S.image[j],!0,a.maxCubemapSize):_t[j]=it?S.image[j].image:S.image[j],_t[j]=ge(S,_t[j]);let Dt=_t[0],wt=s.convert(S.format,S.colorSpace),ut=s.convert(S.type),qt=y(S.internalFormat,wt,ut,S.colorSpace),L=S.isVideoTexture!==!0,ot=X.__version===void 0||Y===!0,dt=q.dataReady,Tt=w(S,Dt);gt(e.TEXTURE_CUBE_MAP,S);let at;if(lt){L&&ot&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Tt,qt,Dt.width,Dt.height);for(let j=0;j<6;j++){at=_t[j].mipmaps;for(let Ct=0;Ct<at.length;Ct++){let Gt=at[Ct];S.format!==si?wt!==null?L?dt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct,0,0,Gt.width,Gt.height,wt,Gt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct,qt,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?dt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct,0,0,Gt.width,Gt.height,wt,ut,Gt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct,qt,Gt.width,Gt.height,0,wt,ut,Gt.data)}}}else{if(at=S.mipmaps,L&&ot){at.length>0&&Tt++;let j=fe(_t[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Tt,qt,j.width,j.height)}for(let j=0;j<6;j++)if(it){L?dt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,_t[j].width,_t[j].height,wt,ut,_t[j].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qt,_t[j].width,_t[j].height,0,wt,ut,_t[j].data);for(let Ct=0;Ct<at.length;Ct++){let ye=at[Ct].image[j].image;L?dt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct+1,0,0,ye.width,ye.height,wt,ut,ye.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct+1,qt,ye.width,ye.height,0,wt,ut,ye.data)}}else{L?dt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,wt,ut,_t[j]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qt,wt,ut,_t[j]);for(let Ct=0;Ct<at.length;Ct++){let Gt=at[Ct];L?dt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct+1,0,0,wt,ut,Gt.image[j]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct+1,qt,wt,ut,Gt.image[j])}}}m(S)&&u(e.TEXTURE_CUBE_MAP),X.__version=q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ct(A,S,N,Y,q,X){let bt=s.convert(N.format,N.colorSpace),rt=s.convert(N.type),ft=y(N.internalFormat,bt,rt,N.colorSpace),lt=i.get(S),it=i.get(N);if(it.__renderTarget=S,!lt.__hasExternalTextures){let _t=Math.max(1,S.width>>X),Dt=Math.max(1,S.height>>X);q===e.TEXTURE_3D||q===e.TEXTURE_2D_ARRAY?n.texImage3D(q,X,ft,_t,Dt,S.depth,0,bt,rt,null):n.texImage2D(q,X,ft,_t,Dt,0,bt,rt,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),vt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,q,it.__webglTexture,0,jt(S)):(q===e.TEXTURE_2D||q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Y,q,it.__webglTexture,X),n.bindFramebuffer(e.FRAMEBUFFER,null)}function pt(A,S,N){if(e.bindRenderbuffer(e.RENDERBUFFER,A),S.depthBuffer){let Y=S.depthTexture,q=Y&&Y.isDepthTexture?Y.type:null,X=_(S.stencilBuffer,q),bt=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=jt(S);vt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,rt,X,S.width,S.height):N?e.renderbufferStorageMultisample(e.RENDERBUFFER,rt,X,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,X,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,bt,e.RENDERBUFFER,A)}else{let Y=S.textures;for(let q=0;q<Y.length;q++){let X=Y[q],bt=s.convert(X.format,X.colorSpace),rt=s.convert(X.type),ft=y(X.internalFormat,bt,rt,X.colorSpace),lt=jt(S);N&&vt(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,lt,ft,S.width,S.height):vt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,lt,ft,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,ft,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function yt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=i.get(S.depthTexture);Y.__renderTarget=S,(!Y.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);let q=Y.__webglTexture,X=jt(S);if(S.depthTexture.format===io)vt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,q,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,q,0);else if(S.depthTexture.format===fo)vt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,q,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function zt(A){let S=i.get(A),N=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let Y=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){let q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",q)};Y.addEventListener("dispose",q),S.__depthDisposeCallback=q}S.__boundDepthTexture=Y}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");let Y=A.texture.mipmaps;Y&&Y.length>0?yt(S.__webglFramebuffer[0],A):yt(S.__webglFramebuffer,A)}else if(N){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=e.createRenderbuffer(),pt(S.__webglDepthbuffer[Y],A,!1);else{let q=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer[Y];e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,X)}}else{let Y=A.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),pt(S.__webglDepthbuffer,A,!1);else{let q=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,X)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function tt(A,S,N){let Y=i.get(A);S!==void 0&&ct(Y.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),N!==void 0&&zt(A)}function R(A){let S=A.texture,N=i.get(A),Y=i.get(S);A.addEventListener("dispose",T);let q=A.textures,X=A.isWebGLCubeRenderTarget===!0,bt=q.length>1;if(bt||(Y.__webglTexture===void 0&&(Y.__webglTexture=e.createTexture()),Y.__version=S.version,r.memory.textures++),X){N.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[rt]=[];for(let ft=0;ft<S.mipmaps.length;ft++)N.__webglFramebuffer[rt][ft]=e.createFramebuffer()}else N.__webglFramebuffer[rt]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let rt=0;rt<S.mipmaps.length;rt++)N.__webglFramebuffer[rt]=e.createFramebuffer()}else N.__webglFramebuffer=e.createFramebuffer();if(bt)for(let rt=0,ft=q.length;rt<ft;rt++){let lt=i.get(q[rt]);lt.__webglTexture===void 0&&(lt.__webglTexture=e.createTexture(),r.memory.textures++)}if(A.samples>0&&vt(A)===!1){N.__webglMultisampledFramebuffer=e.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let rt=0;rt<q.length;rt++){let ft=q[rt];N.__webglColorRenderbuffer[rt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,N.__webglColorRenderbuffer[rt]);let lt=s.convert(ft.format,ft.colorSpace),it=s.convert(ft.type),_t=y(ft.internalFormat,lt,it,ft.colorSpace,A.isXRRenderTarget===!0),Dt=jt(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,Dt,_t,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+rt,e.RENDERBUFFER,N.__webglColorRenderbuffer[rt])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=e.createRenderbuffer(),pt(N.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(X){n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),gt(e.TEXTURE_CUBE_MAP,S);for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0)for(let ft=0;ft<S.mipmaps.length;ft++)ct(N.__webglFramebuffer[rt][ft],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ft);else ct(N.__webglFramebuffer[rt],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(S)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(bt){for(let rt=0,ft=q.length;rt<ft;rt++){let lt=q[rt],it=i.get(lt),_t=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(_t=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(_t,it.__webglTexture),gt(_t,lt),ct(N.__webglFramebuffer,A,lt,e.COLOR_ATTACHMENT0+rt,_t,0),m(lt)&&u(_t)}n.unbindTexture()}else{let rt=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(rt=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(rt,Y.__webglTexture),gt(rt,S),S.mipmaps&&S.mipmaps.length>0)for(let ft=0;ft<S.mipmaps.length;ft++)ct(N.__webglFramebuffer[ft],A,S,e.COLOR_ATTACHMENT0,rt,ft);else ct(N.__webglFramebuffer,A,S,e.COLOR_ATTACHMENT0,rt,0);m(S)&&u(rt),n.unbindTexture()}A.depthBuffer&&zt(A)}function Nt(A){let S=A.textures;for(let N=0,Y=S.length;N<Y;N++){let q=S[N];if(m(q)){let X=g(A),bt=i.get(q).__webglTexture;n.bindTexture(X,bt),u(X),n.unbindTexture()}}}let Mt=[],Ft=[];function St(A){if(A.samples>0){if(vt(A)===!1){let S=A.textures,N=A.width,Y=A.height,q=e.COLOR_BUFFER_BIT,X=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,bt=i.get(A),rt=S.length>1;if(rt)for(let lt=0;lt<S.length;lt++)n.bindFramebuffer(e.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,bt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);let ft=A.texture.mipmaps;ft&&ft.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let lt=0;lt<S.length;lt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(q|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(q|=e.STENCIL_BUFFER_BIT)),rt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,bt.__webglColorRenderbuffer[lt]);let it=i.get(S[lt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,it,0)}e.blitFramebuffer(0,0,N,Y,0,0,N,Y,q,e.NEAREST),l===!0&&(Mt.length=0,Ft.length=0,Mt.push(e.COLOR_ATTACHMENT0+lt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Mt.push(X),Ft.push(X),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ft)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Mt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),rt)for(let lt=0;lt<S.length;lt++){n.bindFramebuffer(e.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.RENDERBUFFER,bt.__webglColorRenderbuffer[lt]);let it=i.get(S[lt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,bt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.TEXTURE_2D,it,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let S=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function jt(A){return Math.min(a.maxSamples,A.samples)}function vt(A){let S=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function It(A){let S=r.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function ge(A,S){let N=A.colorSpace,Y=A.format,q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==Ps&&N!==pa&&(ie.getTransfer(N)===he?(Y!==si||q!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),S}function fe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=Z,this.setTexture2DArray=F,this.setTexture3D=$,this.setTextureCube=B,this.rebindTextures=tt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=vt}function ZC(e,t){function n(i,a=pa){let s,r=ie.getTransfer(a);if(i===Li)return e.UNSIGNED_BYTE;if(i===Nh)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Ih)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Jm)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Ym)return e.BYTE;if(i===Zm)return e.SHORT;if(i===co)return e.UNSIGNED_SHORT;if(i===Oh)return e.INT;if(i===is)return e.UNSIGNED_INT;if(i===Oi)return e.FLOAT;if(i===uo)return e.HALF_FLOAT;if(i===Km)return e.ALPHA;if(i===Qm)return e.RGB;if(i===si)return e.RGBA;if(i===io)return e.DEPTH_COMPONENT;if(i===fo)return e.DEPTH_STENCIL;if(i===jm)return e.RED;if(i===Ph)return e.RED_INTEGER;if(i===$m)return e.RG;if(i===Bh)return e.RG_INTEGER;if(i===zh)return e.RGBA_INTEGER;if(i===Wl||i===Xl||i===ql||i===Yl)if(r===he)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ql)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fh||i===Hh||i===Vh||i===Gh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kh||i===Wh||i===Xh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===kh||i===Wh)return r===he?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xh)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qh||i===Yh||i===Zh||i===Jh||i===Kh||i===Qh||i===jh||i===$h||i===tf||i===ef||i===nf||i===af||i===sf||i===rf)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qh)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yh)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zh)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jh)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kh)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qh)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jh)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$h)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tf)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ef)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nf)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===af)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sf)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rf)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zl||i===of||i===lf)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Zl)return r===he?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===of)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===t0||i===cf||i===uf||i===hf)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===cf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ho?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var gf=class extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}},JC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KC=`
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

}`,x0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new gf(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Vn({vertexShader:JC,fragmentShader:KC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bn(new Fs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},S0=class extends ua{constructor(t,n){super();let i=this,a=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,v=null,x=new x0,m={},u=n.getContextAttributes(),g=null,y=null,_=[],w=[],U=new oe,T=null,D=new Mn;D.viewport=new Ne;let M=new Mn;M.viewport=new Ne;let b=[D,M],C=new Mh,W=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let nt=_[z];return nt===void 0&&(nt=new oo,_[z]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(z){let nt=_[z];return nt===void 0&&(nt=new oo,_[z]=nt),nt.getGripSpace()},this.getHand=function(z){let nt=_[z];return nt===void 0&&(nt=new oo,_[z]=nt),nt.getHandSpace()};function P(z){let nt=w.indexOf(z.inputSource);if(nt===-1)return;let Q=_[nt];Q!==void 0&&(Q.update(z.inputSource,z.frame,c||r),Q.dispatchEvent({type:z.type,data:z.inputSource}))}function Z(){a.removeEventListener("select",P),a.removeEventListener("selectstart",P),a.removeEventListener("selectend",P),a.removeEventListener("squeeze",P),a.removeEventListener("squeezestart",P),a.removeEventListener("squeezeend",P),a.removeEventListener("end",Z),a.removeEventListener("inputsourceschange",F);for(let z=0;z<_.length;z++){let nt=w[z];nt!==null&&(w[z]=null,_[z].disconnect(nt))}W=null,H=null,x.reset();for(let z in m)delete m[z];t.setRenderTarget(g),p=null,f=null,d=null,a=null,y=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(z){if(a=z,a!==null){if(g=t.getRenderTarget(),a.addEventListener("select",P),a.addEventListener("selectstart",P),a.addEventListener("selectend",P),a.addEventListener("squeeze",P),a.addEventListener("squeezestart",P),a.addEventListener("squeezeend",P),a.addEventListener("end",Z),a.addEventListener("inputsourceschange",F),u.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(U),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(a,n)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,ct=null,pt=null;u.depth&&(pt=u.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=u.stencil?fo:io,ct=u.stencil?ho:is);let yt={colorFormat:n.RGBA8,depthFormat:pt,scaleFactor:s};f=d.createProjectionLayer(yt),a.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Ci(f.textureWidth,f.textureHeight,{format:si,type:Li,depthTexture:new Hl(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:u.stencil,colorSpace:t.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let Q={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,Q),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ci(p.framebufferWidth,p.framebufferHeight,{format:si,type:Li,colorSpace:t.outputColorSpace,stencilBuffer:u.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),Yt.setContext(a),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F(z){for(let nt=0;nt<z.removed.length;nt++){let Q=z.removed[nt],ct=w.indexOf(Q);ct>=0&&(w[ct]=null,_[ct].disconnect(Q))}for(let nt=0;nt<z.added.length;nt++){let Q=z.added[nt],ct=w.indexOf(Q);if(ct===-1){for(let yt=0;yt<_.length;yt++)if(yt>=w.length){w.push(Q),ct=yt;break}else if(w[yt]===null){w[yt]=Q,ct=yt;break}if(ct===-1)break}let pt=_[ct];pt&&pt.connect(Q)}}let $=new k,B=new k;function K(z,nt,Q){$.setFromMatrixPosition(nt.matrixWorld),B.setFromMatrixPosition(Q.matrixWorld);let ct=$.distanceTo(B),pt=nt.projectionMatrix.elements,yt=Q.projectionMatrix.elements,zt=pt[14]/(pt[10]-1),tt=pt[14]/(pt[10]+1),R=(pt[9]+1)/pt[5],Nt=(pt[9]-1)/pt[5],Mt=(pt[8]-1)/pt[0],Ft=(yt[8]+1)/yt[0],St=zt*Mt,jt=zt*Ft,vt=ct/(-Mt+Ft),It=vt*-Mt;if(nt.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(It),z.translateZ(vt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),pt[10]===-1)z.projectionMatrix.copy(nt.projectionMatrix),z.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let ge=zt+vt,fe=tt+vt,A=St-It,S=jt+(ct-It),N=R*tt/fe*ge,Y=Nt*tt/fe*ge;z.projectionMatrix.makePerspective(A,S,N,Y,ge,fe),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function et(z,nt){nt===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(nt.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(a===null)return;let nt=z.near,Q=z.far;x.texture!==null&&(x.depthNear>0&&(nt=x.depthNear),x.depthFar>0&&(Q=x.depthFar)),C.near=M.near=D.near=nt,C.far=M.far=D.far=Q,(W!==C.near||H!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),W=C.near,H=C.far),C.layers.mask=z.layers.mask|6,D.layers.mask=C.layers.mask&3,M.layers.mask=C.layers.mask&5;let ct=z.parent,pt=C.cameras;et(C,ct);for(let yt=0;yt<pt.length;yt++)et(pt[yt],ct);pt.length===2?K(C,D,M):C.projectionMatrix.copy(D.projectionMatrix),ht(z,C,ct)};function ht(z,nt,Q){Q===null?z.matrix.copy(nt.matrixWorld):(z.matrix.copy(Q.matrixWorld),z.matrix.invert(),z.matrix.multiply(nt.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(nt.projectionMatrix),z.projectionMatrixInverse.copy(nt.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=ah*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(C)},this.getCameraTexture=function(z){return m[z]};let gt=null;function Vt(z,nt){if(h=nt.getViewerPose(c||r),v=nt,h!==null){let Q=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let ct=!1;Q.length!==C.cameras.length&&(C.cameras.length=0,ct=!0);for(let tt=0;tt<Q.length;tt++){let R=Q[tt],Nt=null;if(p!==null)Nt=p.getViewport(R);else{let Ft=d.getViewSubImage(f,R);Nt=Ft.viewport,tt===0&&(t.setRenderTargetTextures(y,Ft.colorTexture,Ft.depthStencilTexture),t.setRenderTarget(y))}let Mt=b[tt];Mt===void 0&&(Mt=new Mn,Mt.layers.enable(tt),Mt.viewport=new Ne,b[tt]=Mt),Mt.matrix.fromArray(R.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(R.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),tt===0&&(C.matrix.copy(Mt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ct===!0&&C.cameras.push(Mt)}let pt=a.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&d){let tt=d.getDepthInformation(Q[0]);tt&&tt.isValid&&tt.texture&&x.init(tt,a.renderState)}if(pt&&pt.includes("camera-access")&&(t.state.unbindTexture(),d))for(let tt=0;tt<Q.length;tt++){let R=Q[tt].camera;if(R){let Nt=m[R];Nt||(Nt=new gf,m[R]=Nt);let Mt=d.getCameraImage(R);Nt.sourceTexture=Mt}}}for(let Q=0;Q<_.length;Q++){let ct=w[Q],pt=_[Q];ct!==null&&pt!==void 0&&pt.update(ct,nt,c||r)}gt&&gt(z,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),v=null}let Yt=new f1;Yt.setAnimationLoop(Vt),this.setAnimationLoop=function(z){gt=z},this.dispose=function(){}}},Xs=new Ri,QC=new We;function jC(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,a0(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,g,y,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,_)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,y):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===fn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===fn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let g=t.get(u),y=g.envMap,_=g.envMapRotation;y&&(m.envMap.value=y,Xs.copy(_),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),m.envMapRotation.value.setFromMatrix4(QC.makeRotationFromEuler(Xs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=y*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===fn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let g=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function $C(e,t,n,i){let a={},s={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,y){let _=y.program;i.uniformBlockBinding(g,_)}function c(g,y){let _=a[g.id];_===void 0&&(v(g),_=h(g),a[g.id]=_,g.addEventListener("dispose",m));let w=y.program;i.updateUBOMapping(g,w);let U=t.render.frame;s[g.id]!==U&&(f(g),s[g.id]=U)}function h(g){let y=d();g.__bindingPointIndex=y;let _=e.createBuffer(),w=g.__size,U=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,_),e.bufferData(e.UNIFORM_BUFFER,w,U),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,y,_),_}function d(){for(let g=0;g<o;g++)if(r.indexOf(g)===-1)return r.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){let y=a[g.id],_=g.uniforms,w=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let U=0,T=_.length;U<T;U++){let D=Array.isArray(_[U])?_[U]:[_[U]];for(let M=0,b=D.length;M<b;M++){let C=D[M];if(p(C,U,M,w)===!0){let W=C.__offset,H=Array.isArray(C.value)?C.value:[C.value],P=0;for(let Z=0;Z<H.length;Z++){let F=H[Z],$=x(F);typeof F=="number"||typeof F=="boolean"?(C.__data[0]=F,e.bufferSubData(e.UNIFORM_BUFFER,W+P,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=0,C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=0,C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=0):(F.toArray(C.__data,P),P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,W,C.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,y,_,w){let U=g.value,T=y+"_"+_;if(w[T]===void 0)return typeof U=="number"||typeof U=="boolean"?w[T]=U:w[T]=U.clone(),!0;{let D=w[T];if(typeof U=="number"||typeof U=="boolean"){if(D!==U)return w[T]=U,!0}else if(D.equals(U)===!1)return D.copy(U),!0}return!1}function v(g){let y=g.uniforms,_=0,w=16;for(let T=0,D=y.length;T<D;T++){let M=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,C=M.length;b<C;b++){let W=M[b],H=Array.isArray(W.value)?W.value:[W.value];for(let P=0,Z=H.length;P<Z;P++){let F=H[P],$=x(F),B=_%w,K=B%$.boundary,et=B+K;_+=K,et!==0&&w-et<$.storage&&(_+=w-et),W.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=_,_+=$.storage}}}let U=_%w;return U>0&&(_+=w-U),g.__size=_,g.__cache={},this}function x(g){let y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),y}function m(g){let y=g.target;y.removeEventListener("dispose",m);let _=r.indexOf(y.__bindingPointIndex);r.splice(_,1),e.deleteBuffer(a[y.id]),delete a[y.id],delete s[y.id]}function u(){for(let g in a)e.deleteBuffer(a[g]);r=[],a={},s={}}return{bind:l,update:c,dispose:u}}var vf=class{constructor(t={}){let{canvas:n=zS(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let v=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,g=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=da,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,w=!1;this._outputColorSpace=zn;let U=0,T=0,D=null,M=-1,b=null,C=new Ne,W=new Ne,H=null,P=new Zt(0),Z=0,F=n.width,$=n.height,B=1,K=null,et=null,ht=new Ne(0,0,F,$),gt=new Ne(0,0,F,$),Vt=!1,Yt=new Fl,z=!1,nt=!1,Q=new We,ct=new k,pt=new Ne,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},zt=!1;function tt(){return D===null?B:1}let R=i;function Nt(E,O){return n.getContext(E,O)}try{let E={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"179"}`),n.addEventListener("webglcontextlost",dt,!1),n.addEventListener("webglcontextrestored",Tt,!1),n.addEventListener("webglcontextcreationerror",at,!1),R===null){let O="webgl2";if(R=Nt(O,E),R===null)throw Nt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Mt,Ft,St,jt,vt,It,ge,fe,A,S,N,Y,q,X,bt,rt,ft,lt,it,_t,Dt,wt,ut,qt;function L(){Mt=new v2(R),Mt.init(),wt=new ZC(R,Mt),Ft=new u2(R,Mt,t,wt),St=new qC(R,Mt),Ft.reversedDepthBuffer&&f&&St.buffers.depth.setReversed(!0),jt=new x2(R),vt=new OC,It=new YC(R,Mt,St,vt,Ft,wt,jt),ge=new f2(_),fe=new g2(_),A=new AT(R),ut=new l2(R,A),S=new _2(R,A,jt,ut),N=new M2(R,S,A,jt),it=new S2(R,Ft,It),rt=new h2(vt),Y=new LC(_,ge,fe,Mt,Ft,ut,rt),q=new jC(_,vt),X=new IC,bt=new VC(Mt),lt=new o2(_,ge,fe,St,N,p,l),ft=new WC(_,N,Ft),qt=new $C(R,jt,Ft,St),_t=new c2(R,Mt,jt),Dt=new y2(R,Mt,jt),jt.programs=Y.programs,_.capabilities=Ft,_.extensions=Mt,_.properties=vt,_.renderLists=X,_.shadowMap=ft,_.state=St,_.info=jt}L();let ot=new S0(_,R);this.xr=ot,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let E=Mt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Mt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(F,$,!1))},this.getSize=function(E){return E.set(F,$)},this.setSize=function(E,O,V=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=E,$=O,n.width=Math.floor(E*B),n.height=Math.floor(O*B),V===!0&&(n.style.width=E+"px",n.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(F*B,$*B).floor()},this.setDrawingBufferSize=function(E,O,V){F=E,$=O,B=V,n.width=Math.floor(E*V),n.height=Math.floor(O*V),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(ht)},this.setViewport=function(E,O,V,G){E.isVector4?ht.set(E.x,E.y,E.z,E.w):ht.set(E,O,V,G),St.viewport(C.copy(ht).multiplyScalar(B).round())},this.getScissor=function(E){return E.copy(gt)},this.setScissor=function(E,O,V,G){E.isVector4?gt.set(E.x,E.y,E.z,E.w):gt.set(E,O,V,G),St.scissor(W.copy(gt).multiplyScalar(B).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(E){St.setScissorTest(Vt=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){et=E},this.getClearColor=function(E){return E.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,V=!0){let G=0;if(E){let I=!1;if(D!==null){let st=D.texture.format;I=st===zh||st===Bh||st===Ph}if(I){let st=D.texture.type,xt=st===Li||st===is||st===co||st===ho||st===Nh||st===Ih,At=lt.getClearColor(),Et=lt.getClearAlpha(),Ot=At.r,Ht=At.g,Ut=At.b;xt?(v[0]=Ot,v[1]=Ht,v[2]=Ut,v[3]=Et,R.clearBufferuiv(R.COLOR,0,v)):(x[0]=Ot,x[1]=Ht,x[2]=Ut,x[3]=Et,R.clearBufferiv(R.COLOR,0,x))}else G|=R.COLOR_BUFFER_BIT}O&&(G|=R.DEPTH_BUFFER_BIT),V&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",dt,!1),n.removeEventListener("webglcontextrestored",Tt,!1),n.removeEventListener("webglcontextcreationerror",at,!1),lt.dispose(),X.dispose(),bt.dispose(),vt.dispose(),ge.dispose(),fe.dispose(),N.dispose(),ut.dispose(),qt.dispose(),Y.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",gi),ot.removeEventListener("sessionend",N0),os.stop()};function dt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let E=jt.autoReset,O=ft.enabled,V=ft.autoUpdate,G=ft.needsUpdate,I=ft.type;L(),jt.autoReset=E,ft.enabled=O,ft.autoUpdate=V,ft.needsUpdate=G,ft.type=I}function at(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function j(E){let O=E.target;O.removeEventListener("dispose",j),Ct(O)}function Ct(E){Gt(E),vt.remove(E)}function Gt(E){let O=vt.get(E).programs;O!==void 0&&(O.forEach(function(V){Y.releaseProgram(V)}),E.isShaderMaterial&&Y.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,V,G,I,st){O===null&&(O=yt);let xt=I.isMesh&&I.matrixWorld.determinant()<0,At=V1(E,O,V,G,I);St.setMaterial(G,xt);let Et=V.index,Ot=1;if(G.wireframe===!0){if(Et=S.getWireframeAttribute(V),Et===void 0)return;Ot=2}let Ht=V.drawRange,Ut=V.attributes.position,$t=Ht.start*Ot,de=(Ht.start+Ht.count)*Ot;st!==null&&($t=Math.max($t,st.start*Ot),de=Math.min(de,(st.start+st.count)*Ot)),Et!==null?($t=Math.max($t,0),de=Math.min(de,Et.count)):Ut!=null&&($t=Math.max($t,0),de=Math.min(de,Ut.count));let Ue=de-$t;if(Ue<0||Ue===1/0)return;ut.setup(I,G,At,V,Et);let Se,ve=_t;if(Et!==null&&(Se=A.get(Et),ve=Dt,ve.setIndex(Se)),I.isMesh)G.wireframe===!0?(St.setLineWidth(G.wireframeLinewidth*tt()),ve.setMode(R.LINES)):ve.setMode(R.TRIANGLES);else if(I.isLine){let Lt=G.linewidth;Lt===void 0&&(Lt=1),St.setLineWidth(Lt*tt()),I.isLineSegments?ve.setMode(R.LINES):I.isLineLoop?ve.setMode(R.LINE_LOOP):ve.setMode(R.LINE_STRIP)}else I.isPoints?ve.setMode(R.POINTS):I.isSprite&&ve.setMode(R.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Bs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))ve.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let Lt=I._multiDrawStarts,Re=I._multiDrawCounts,ae=I._multiDrawCount,En=Et?A.get(Et).bytesPerElement:1,Js=vt.get(G).currentProgram.getUniforms();for(let Tn=0;Tn<ae;Tn++)Js.setValue(R,"_gl_DrawID",Tn),ve.render(Lt[Tn]/En,Re[Tn])}else if(I.isInstancedMesh)ve.renderInstances($t,Ue,I.count);else if(V.isInstancedBufferGeometry){let Lt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Re=Math.min(V.instanceCount,Lt);ve.renderInstances($t,Ue,Re)}else ve.render($t,Ue)};function ye(E,O,V){E.transparent===!0&&E.side===Ui&&E.forceSinglePass===!1?(E.side=fn,E.needsUpdate=!0,nc(E,O,V),E.side=la,E.needsUpdate=!0,nc(E,O,V),E.side=Ui):nc(E,O,V)}this.compile=function(E,O,V=null){V===null&&(V=E),u=bt.get(V),u.init(O),y.push(u),V.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),E!==V&&E.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),u.setupLights();let G=new Set;return E.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let st=I.material;if(st)if(Array.isArray(st))for(let xt=0;xt<st.length;xt++){let At=st[xt];ye(At,V,I),G.add(At)}else ye(st,V,I),G.add(st)}),u=y.pop(),G},this.compileAsync=function(E,O,V=null){let G=this.compile(E,O,V);return new Promise(I=>{function st(){if(G.forEach(function(xt){vt.get(xt).currentProgram.isReady()&&G.delete(xt)}),G.size===0){I(E);return}setTimeout(st,10)}Mt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let le=null;function Ii(E){le&&le(E)}function gi(){os.stop()}function N0(){os.start()}let os=new f1;os.setAnimationLoop(Ii),typeof self<"u"&&os.setContext(self),this.setAnimationLoop=function(E){le=E,ot.setAnimationLoop(E),E===null?os.stop():os.start()},ot.addEventListener("sessionstart",gi),ot.addEventListener("sessionend",N0),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(O),O=ot.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,O,D),u=bt.get(E,y.length),u.init(O),y.push(u),Q.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Yt.setFromProjectionMatrix(Q,di,O.reversedDepth),nt=this.localClippingEnabled,z=rt.init(this.clippingPlanes,nt),m=X.get(E,g.length),m.init(),g.push(m),ot.enabled===!0&&ot.isPresenting===!0){let st=_.xr.getDepthSensingMesh();st!==null&&Mf(st,O,-1/0,_.sortObjects)}Mf(E,O,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(K,et),zt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,zt&&lt.addToRenderList(m,E),this.info.render.frame++,z===!0&&rt.beginShadows();let V=u.state.shadowsArray;ft.render(V,E,O),z===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,I=m.transmissive;if(u.setupLights(),O.isArrayCamera){let st=O.cameras;if(I.length>0)for(let xt=0,At=st.length;xt<At;xt++){let Et=st[xt];P0(G,I,E,Et)}zt&&lt.render(E);for(let xt=0,At=st.length;xt<At;xt++){let Et=st[xt];I0(m,E,Et,Et.viewport)}}else I.length>0&&P0(G,I,E,O),zt&&lt.render(E),I0(m,E,O);D!==null&&T===0&&(It.updateMultisampleRenderTarget(D),It.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(_,E,O),ut.resetDefaultState(),M=-1,b=null,y.pop(),y.length>0?(u=y[y.length-1],z===!0&&rt.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function Mf(E,O,V,G){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Yt.intersectsSprite(E)){G&&pt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Q);let xt=N.update(E),At=E.material;At.visible&&m.push(E,xt,At,V,pt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Yt.intersectsObject(E))){let xt=N.update(E),At=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),pt.copy(E.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),pt.copy(xt.boundingSphere.center)),pt.applyMatrix4(E.matrixWorld).applyMatrix4(Q)),Array.isArray(At)){let Et=xt.groups;for(let Ot=0,Ht=Et.length;Ot<Ht;Ot++){let Ut=Et[Ot],$t=At[Ut.materialIndex];$t&&$t.visible&&m.push(E,xt,$t,V,pt.z,Ut)}}else At.visible&&m.push(E,xt,At,V,pt.z,null)}}let st=E.children;for(let xt=0,At=st.length;xt<At;xt++)Mf(st[xt],O,V,G)}function I0(E,O,V,G){let I=E.opaque,st=E.transmissive,xt=E.transparent;u.setupLightsView(V),z===!0&&rt.setGlobalState(_.clippingPlanes,V),G&&St.viewport(C.copy(G)),I.length>0&&ec(I,O,V),st.length>0&&ec(st,O,V),xt.length>0&&ec(xt,O,V),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function P0(E,O,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new Ci(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?uo:Li,minFilter:ns,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));let st=u.state.transmissionRenderTarget[G.id],xt=G.viewport||C;st.setSize(xt.z*_.transmissionResolutionScale,xt.w*_.transmissionResolutionScale);let At=_.getRenderTarget(),Et=_.getActiveCubeFace(),Ot=_.getActiveMipmapLevel();_.setRenderTarget(st),_.getClearColor(P),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),zt&&lt.render(V);let Ht=_.toneMapping;_.toneMapping=da;let Ut=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),z===!0&&rt.setGlobalState(_.clippingPlanes,G),ec(E,V,G),It.updateMultisampleRenderTarget(st),It.updateRenderTargetMipmap(st),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let de=0,Ue=O.length;de<Ue;de++){let Se=O[de],ve=Se.object,Lt=Se.geometry,Re=Se.material,ae=Se.group;if(Re.side===Ui&&ve.layers.test(G.layers)){let En=Re.side;Re.side=fn,Re.needsUpdate=!0,B0(ve,V,G,Lt,Re,ae),Re.side=En,Re.needsUpdate=!0,$t=!0}}$t===!0&&(It.updateMultisampleRenderTarget(st),It.updateRenderTargetMipmap(st))}_.setRenderTarget(At,Et,Ot),_.setClearColor(P,Z),Ut!==void 0&&(G.viewport=Ut),_.toneMapping=Ht}function ec(E,O,V){let G=O.isScene===!0?O.overrideMaterial:null;for(let I=0,st=E.length;I<st;I++){let xt=E[I],At=xt.object,Et=xt.geometry,Ot=xt.group,Ht=xt.material;Ht.allowOverride===!0&&G!==null&&(Ht=G),At.layers.test(V.layers)&&B0(At,O,V,Et,Ht,Ot)}}function B0(E,O,V,G,I,st){E.onBeforeRender(_,O,V,G,I,st),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),I.onBeforeRender(_,O,V,G,E,st),I.transparent===!0&&I.side===Ui&&I.forceSinglePass===!1?(I.side=fn,I.needsUpdate=!0,_.renderBufferDirect(V,O,G,I,E,st),I.side=la,I.needsUpdate=!0,_.renderBufferDirect(V,O,G,I,E,st),I.side=Ui):_.renderBufferDirect(V,O,G,I,E,st),E.onAfterRender(_,O,V,G,I,st)}function nc(E,O,V){O.isScene!==!0&&(O=yt);let G=vt.get(E),I=u.state.lights,st=u.state.shadowsArray,xt=I.state.version,At=Y.getParameters(E,I.state,st,O,V),Et=Y.getProgramCacheKey(At),Ot=G.programs;G.environment=E.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(E.isMeshStandardMaterial?fe:ge).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Ot===void 0&&(E.addEventListener("dispose",j),Ot=new Map,G.programs=Ot);let Ht=Ot.get(Et);if(Ht!==void 0){if(G.currentProgram===Ht&&G.lightsStateVersion===xt)return F0(E,At),Ht}else At.uniforms=Y.getUniforms(E),E.onBeforeCompile(At,_),Ht=Y.acquireProgram(At,Et),Ot.set(Et,Ht),G.uniforms=At.uniforms;let Ut=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=rt.uniform),F0(E,At),G.needsLights=k1(E),G.lightsStateVersion=xt,G.needsLights&&(Ut.ambientLightColor.value=I.state.ambient,Ut.lightProbe.value=I.state.probe,Ut.directionalLights.value=I.state.directional,Ut.directionalLightShadows.value=I.state.directionalShadow,Ut.spotLights.value=I.state.spot,Ut.spotLightShadows.value=I.state.spotShadow,Ut.rectAreaLights.value=I.state.rectArea,Ut.ltc_1.value=I.state.rectAreaLTC1,Ut.ltc_2.value=I.state.rectAreaLTC2,Ut.pointLights.value=I.state.point,Ut.pointLightShadows.value=I.state.pointShadow,Ut.hemisphereLights.value=I.state.hemi,Ut.directionalShadowMap.value=I.state.directionalShadowMap,Ut.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ut.spotShadowMap.value=I.state.spotShadowMap,Ut.spotLightMatrix.value=I.state.spotLightMatrix,Ut.spotLightMap.value=I.state.spotLightMap,Ut.pointShadowMap.value=I.state.pointShadowMap,Ut.pointShadowMatrix.value=I.state.pointShadowMatrix),G.currentProgram=Ht,G.uniformsList=null,Ht}function z0(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=go.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function F0(E,O){let V=vt.get(E);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function V1(E,O,V,G,I){O.isScene!==!0&&(O=yt),It.resetTextureUnits();let st=O.fog,xt=G.isMeshStandardMaterial?O.environment:null,At=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ps,Et=(G.isMeshStandardMaterial?fe:ge).get(G.envMap||xt),Ot=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ht=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ut=!!V.morphAttributes.position,$t=!!V.morphAttributes.normal,de=!!V.morphAttributes.color,Ue=da;G.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ue=_.toneMapping);let Se=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ve=Se!==void 0?Se.length:0,Lt=vt.get(G),Re=u.state.lights;if(z===!0&&(nt===!0||E!==b)){let ln=E===b&&G.id===M;rt.setState(G,E,ln)}let ae=!1;G.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Re.state.version||Lt.outputColorSpace!==At||I.isBatchedMesh&&Lt.batching===!1||!I.isBatchedMesh&&Lt.batching===!0||I.isBatchedMesh&&Lt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Lt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Lt.instancing===!1||!I.isInstancedMesh&&Lt.instancing===!0||I.isSkinnedMesh&&Lt.skinning===!1||!I.isSkinnedMesh&&Lt.skinning===!0||I.isInstancedMesh&&Lt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Lt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Lt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Lt.instancingMorph===!1&&I.morphTexture!==null||Lt.envMap!==Et||G.fog===!0&&Lt.fog!==st||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==rt.numPlanes||Lt.numIntersection!==rt.numIntersection)||Lt.vertexAlphas!==Ot||Lt.vertexTangents!==Ht||Lt.morphTargets!==Ut||Lt.morphNormals!==$t||Lt.morphColors!==de||Lt.toneMapping!==Ue||Lt.morphTargetsCount!==ve)&&(ae=!0):(ae=!0,Lt.__version=G.version);let En=Lt.currentProgram;ae===!0&&(En=nc(G,O,I));let Js=!1,Tn=!1,xo=!1,De=En.getUniforms(),kn=Lt.uniforms;if(St.useProgram(En.program)&&(Js=!0,Tn=!0,xo=!0),G.id!==M&&(M=G.id,Tn=!0),Js||b!==E){St.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),De.setValue(R,"projectionMatrix",E.projectionMatrix),De.setValue(R,"viewMatrix",E.matrixWorldInverse);let dn=De.map.cameraPosition;dn!==void 0&&dn.setValue(R,ct.setFromMatrixPosition(E.matrixWorld)),Ft.logarithmicDepthBuffer&&De.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&De.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,Tn=!0,xo=!0)}if(I.isSkinnedMesh){De.setOptional(R,I,"bindMatrix"),De.setOptional(R,I,"bindMatrixInverse");let ln=I.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),De.setValue(R,"boneTexture",ln.boneTexture,It))}I.isBatchedMesh&&(De.setOptional(R,I,"batchingTexture"),De.setValue(R,"batchingTexture",I._matricesTexture,It),De.setOptional(R,I,"batchingIdTexture"),De.setValue(R,"batchingIdTexture",I._indirectTexture,It),De.setOptional(R,I,"batchingColorTexture"),I._colorsTexture!==null&&De.setValue(R,"batchingColorTexture",I._colorsTexture,It));let Wn=V.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&it.update(I,V,En),(Tn||Lt.receiveShadow!==I.receiveShadow)&&(Lt.receiveShadow=I.receiveShadow,De.setValue(R,"receiveShadow",I.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(kn.envMap.value=Et,kn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(kn.envMapIntensity.value=O.environmentIntensity),Tn&&(De.setValue(R,"toneMappingExposure",_.toneMappingExposure),Lt.needsLights&&G1(kn,xo),st&&G.fog===!0&&q.refreshFogUniforms(kn,st),q.refreshMaterialUniforms(kn,G,B,$,u.state.transmissionRenderTarget[E.id]),go.upload(R,z0(Lt),kn,It)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(go.upload(R,z0(Lt),kn,It),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&De.setValue(R,"center",I.center),De.setValue(R,"modelViewMatrix",I.modelViewMatrix),De.setValue(R,"normalMatrix",I.normalMatrix),De.setValue(R,"modelMatrix",I.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let ln=G.uniformsGroups;for(let dn=0,bf=ln.length;dn<bf;dn++){let ls=ln[dn];qt.update(ls,En),qt.bind(ls,En)}}return En}function G1(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function k1(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,O,V){let G=vt.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),vt.get(E.texture).__webglTexture=O,vt.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let V=vt.get(E);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0};let W1=R.createFramebuffer();this.setRenderTarget=function(E,O=0,V=0){D=E,U=O,T=V;let G=!0,I=null,st=!1,xt=!1;if(E){let Et=vt.get(E);if(Et.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(R.FRAMEBUFFER,null),G=!1;else if(Et.__webglFramebuffer===void 0)It.setupRenderTarget(E);else if(Et.__hasExternalTextures)It.rebindTextures(E,vt.get(E.texture).__webglTexture,vt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ut=E.depthTexture;if(Et.__boundDepthTexture!==Ut){if(Ut!==null&&vt.has(Ut)&&(E.width!==Ut.image.width||E.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");It.setupDepthRenderbuffer(E)}}let Ot=E.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(xt=!0);let Ht=vt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ht[O])?I=Ht[O][V]:I=Ht[O],st=!0):E.samples>0&&It.useMultisampledRTT(E)===!1?I=vt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ht)?I=Ht[V]:I=Ht,C.copy(E.viewport),W.copy(E.scissor),H=E.scissorTest}else C.copy(ht).multiplyScalar(B).floor(),W.copy(gt).multiplyScalar(B).floor(),H=Vt;if(V!==0&&(I=W1),St.bindFramebuffer(R.FRAMEBUFFER,I)&&G&&St.drawBuffers(E,I),St.viewport(C),St.scissor(W),St.setScissorTest(H),st){let Et=vt.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+O,Et.__webglTexture,V)}else if(xt){let Et=O;for(let Ot=0;Ot<E.textures.length;Ot++){let Ht=vt.get(E.textures[Ot]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ot,Ht.__webglTexture,V,Et)}}else if(E!==null&&V!==0){let Et=vt.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Et.__webglTexture,V)}M=-1},this.readRenderTargetPixels=function(E,O,V,G,I,st,xt,At=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=vt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(Et=Et[xt]),Et){St.bindFramebuffer(R.FRAMEBUFFER,Et);try{let Ot=E.textures[At],Ht=Ot.format,Ut=Ot.type;if(!Ft.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-G&&V>=0&&V<=E.height-I&&(E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+At),R.readPixels(O,V,G,I,wt.convert(Ht),wt.convert(Ut),st))}finally{let Ot=D!==null?vt.get(D).__webglFramebuffer:null;St.bindFramebuffer(R.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(E,O,V,G,I,st,xt,At=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=vt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(Et=Et[xt]),Et)if(O>=0&&O<=E.width-G&&V>=0&&V<=E.height-I){St.bindFramebuffer(R.FRAMEBUFFER,Et);let Ot=E.textures[At],Ht=Ot.format,Ut=Ot.type;if(!Ft.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,$t),R.bufferData(R.PIXEL_PACK_BUFFER,st.byteLength,R.STREAM_READ),E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+At),R.readPixels(O,V,G,I,wt.convert(Ht),wt.convert(Ut),0);let de=D!==null?vt.get(D).__webglFramebuffer:null;St.bindFramebuffer(R.FRAMEBUFFER,de);let Ue=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await FS(R,Ue,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,$t),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,st),R.deleteBuffer($t),R.deleteSync(Ue),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,V=0){let G=Math.pow(2,-V),I=Math.floor(E.image.width*G),st=Math.floor(E.image.height*G),xt=O!==null?O.x:0,At=O!==null?O.y:0;It.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,V,0,0,xt,At,I,st),St.unbindTexture()};let X1=R.createFramebuffer(),q1=R.createFramebuffer();this.copyTextureToTexture=function(E,O,V=null,G=null,I=0,st=null){st===null&&(I!==0?(Bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=I,I=0):st=0);let xt,At,Et,Ot,Ht,Ut,$t,de,Ue,Se=E.isCompressedTexture?E.mipmaps[st]:E.image;if(V!==null)xt=V.max.x-V.min.x,At=V.max.y-V.min.y,Et=V.isBox3?V.max.z-V.min.z:1,Ot=V.min.x,Ht=V.min.y,Ut=V.isBox3?V.min.z:0;else{let Wn=Math.pow(2,-I);xt=Math.floor(Se.width*Wn),At=Math.floor(Se.height*Wn),E.isDataArrayTexture?Et=Se.depth:E.isData3DTexture?Et=Math.floor(Se.depth*Wn):Et=1,Ot=0,Ht=0,Ut=0}G!==null?($t=G.x,de=G.y,Ue=G.z):($t=0,de=0,Ue=0);let ve=wt.convert(O.format),Lt=wt.convert(O.type),Re;O.isData3DTexture?(It.setTexture3D(O,0),Re=R.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(It.setTexture2DArray(O,0),Re=R.TEXTURE_2D_ARRAY):(It.setTexture2D(O,0),Re=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,O.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,O.unpackAlignment);let ae=R.getParameter(R.UNPACK_ROW_LENGTH),En=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Js=R.getParameter(R.UNPACK_SKIP_PIXELS),Tn=R.getParameter(R.UNPACK_SKIP_ROWS),xo=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Se.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Se.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ot),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ht),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ut);let De=E.isDataArrayTexture||E.isData3DTexture,kn=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let Wn=vt.get(E),ln=vt.get(O),dn=vt.get(Wn.__renderTarget),bf=vt.get(ln.__renderTarget);St.bindFramebuffer(R.READ_FRAMEBUFFER,dn.__webglFramebuffer),St.bindFramebuffer(R.DRAW_FRAMEBUFFER,bf.__webglFramebuffer);for(let ls=0;ls<Et;ls++)De&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,vt.get(E).__webglTexture,I,Ut+ls),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,vt.get(O).__webglTexture,st,Ue+ls)),R.blitFramebuffer(Ot,Ht,xt,At,$t,de,xt,At,R.DEPTH_BUFFER_BIT,R.NEAREST);St.bindFramebuffer(R.READ_FRAMEBUFFER,null),St.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(I!==0||E.isRenderTargetTexture||vt.has(E)){let Wn=vt.get(E),ln=vt.get(O);St.bindFramebuffer(R.READ_FRAMEBUFFER,X1),St.bindFramebuffer(R.DRAW_FRAMEBUFFER,q1);for(let dn=0;dn<Et;dn++)De?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Wn.__webglTexture,I,Ut+dn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Wn.__webglTexture,I),kn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ln.__webglTexture,st,Ue+dn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ln.__webglTexture,st),I!==0?R.blitFramebuffer(Ot,Ht,xt,At,$t,de,xt,At,R.COLOR_BUFFER_BIT,R.NEAREST):kn?R.copyTexSubImage3D(Re,st,$t,de,Ue+dn,Ot,Ht,xt,At):R.copyTexSubImage2D(Re,st,$t,de,Ot,Ht,xt,At);St.bindFramebuffer(R.READ_FRAMEBUFFER,null),St.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else kn?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Re,st,$t,de,Ue,xt,At,Et,ve,Lt,Se.data):O.isCompressedArrayTexture?R.compressedTexSubImage3D(Re,st,$t,de,Ue,xt,At,Et,ve,Se.data):R.texSubImage3D(Re,st,$t,de,Ue,xt,At,Et,ve,Lt,Se):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,st,$t,de,xt,At,ve,Lt,Se.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,st,$t,de,Se.width,Se.height,ve,Se.data):R.texSubImage2D(R.TEXTURE_2D,st,$t,de,xt,At,ve,Lt,Se);R.pixelStorei(R.UNPACK_ROW_LENGTH,ae),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,En),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Js),R.pixelStorei(R.UNPACK_SKIP_ROWS,Tn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,xo),st===0&&O.generateMipmaps&&R.generateMipmap(Re),St.unbindTexture()},this.copyTextureToTexture3D=function(E,O,V=null,G=null,I=0){return Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,V,G,I)},this.initRenderTarget=function(E){vt.get(E).__webglFramebuffer===void 0&&It.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?It.setTextureCube(E,0):E.isData3DTexture?It.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?It.setTexture2DArray(E,0):It.setTexture2D(E,0),St.unbindTexture()},this.resetState=function(){U=0,T=0,D=null,St.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),n.unpackColorSpace=ie._getUnpackColorSpace()}};var eR={name:"pixels-mechanic",modes:{dark:{theme:"dark",effectIndex:11,colors:["#949494","#2d2d2d","#333333","#3a3a3a","#0b0b0b","#060606","#2f2f2f"],alphas:[1,1,1,1,1,1,1],cardBg:"#0f0f0f",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.44,edgeFade:24,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:0,speed:.7,intensity:1,scale:1.4,softness:.76,distortion:.3,flicker:.5,complexity:.2,shape:.52,blur:1,highlight:.32,vignette:.26,vigOpacity:1,shaderOpacity:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"shaderColor4",softness:.5,blur:0,pixDuration:2.65,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Nebula"},light:{theme:"light",effectIndex:11,colors:["#e0e0e0","#fdfdfd","#f2f2f2","#0a0a0a","#dcdcdc","#f5f5f5","#f5f5f5"],alphas:[1,1,1,1,1,1,1],cardBg:"#f5f5f5",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.18,edgeFade:20,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:25,speed:.55,intensity:.85,scale:.9,softness:.76,distortion:.3,flicker:.5,complexity:.2,shape:.52,blur:1,highlight:.92,vignette:0,vigOpacity:0,shaderOpacity:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"shaderColor3",softness:.5,blur:0,pixDuration:2.6,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Nebula"}}},nR={name:"pixels-organic",modes:{dark:{theme:"dark",effectIndex:22,colors:["#0f0f0f","#4a4949","#b9b9b9","#0f0f0f","#d8d8d8","#0f0f0f","#2f2f2f"],alphas:[1,1,1,1,1,1,1],cardBg:"#0f0f0f",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.44,edgeFade:24,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:0,speed:.3,intensity:1,scale:1,softness:.76,distortion:.3,complexity:.2,shape:.52,blur:1,highlight:.2,vignette:.26,vigOpacity:1,shaderOpacity:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"shaderColor4",softness:.5,blur:0,pixDuration:2.65,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Chromium Flow"},light:{theme:"light",effectIndex:22,colors:["#e3e3e3","#ffffff","#f5f5f5","#f5f5f5","#080808","#f5f5f5","#f5f5f5"],alphas:[1,1,1,1,1,1,1],cardBg:"#f5f5f5",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.18,edgeFade:20,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:25,speed:.3,intensity:.85,scale:1,softness:.76,distortion:.3,complexity:.2,shape:.52,blur:1,highlight:.7,vignette:0,vigOpacity:0,shaderOpacity:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"shaderColor4",softness:.5,blur:0,pixDuration:2.55,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Chromium Flow"}}},iR={name:"sweep-gradient",modes:{dark:{theme:"dark",effectIndex:25,colors:["#0f0f0f","#0f0f0f","#282828","#3a3a3a","#525252","#0f0f0f","#0f0f0f"],alphas:[1,1,1,1,1,1,1],cardBg:"#0f0f0f",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.44,edgeFade:24,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:0,speed:2.65,intensity:1,scale:1,softness:.76,distortion:.3,flicker:.5,complexity:.2,shape:.52,blur:1,highlight:.32,vignette:.26,vigOpacity:1,shaderOpacity:1,sweepEase:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"gradientSweep",softness:.5,blur:0,pixDuration:2.65,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Gradient Sweep"},light:{theme:"light",effectIndex:25,colors:["#f5f5f5","#f5f5f5","#ededed","#eaeaea","#d2d2d2","#f5f5f5","#f5f5f5"],alphas:[1,1,1,1,1,1,1],cardBg:"#f5f5f5",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.18,edgeFade:20,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:0,speed:2.65,intensity:.85,scale:1,softness:.76,distortion:.3,flicker:.5,complexity:.2,shape:.52,blur:1,highlight:.92,vignette:0,vigOpacity:0,shaderOpacity:1,sweepEase:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"gradientSweep",softness:.5,blur:0,pixDuration:2.6,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Gradient Sweep"}}},aR={"pixels-organic":nR,"pixels-mechanic":eR,"sweep-gradient":iR},b0=aR;var Ql;function sR(){if(Ql!==void 0)return Ql;if(typeof document>"u")return Ql=null,null;let e=document.createElement("canvas");return e.width=1,e.height=1,Ql=e.getContext("2d"),Ql}function Zs(e){if(typeof e!="string"||e.length===0)return[0,0,0];if(e[0]==="#"){let r=e.slice(1);if(r.length===3&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]),(r.length===6||r.length===8)&&/^[0-9a-fA-F]+$/.test(r))return[parseInt(r.slice(0,2),16)/255,parseInt(r.slice(2,4),16)/255,parseInt(r.slice(4,6),16)/255]}let t=sR();if(!t)return[0,0,0];t.fillStyle="#000000",t.fillStyle=e;let n=t.fillStyle;t.fillStyle="#ffffff",t.fillStyle=e;let i=t.fillStyle;if(n!==i)return[0,0,0];let a=n;if(a[0]==="#")return[parseInt(a.slice(1,3),16)/255,parseInt(a.slice(3,5),16)/255,parseInt(a.slice(5,7),16)/255];let s=a.match(/^rgba?\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)/);if(s){let r=o=>Math.max(0,Math.min(255,o))/255;return[r(parseFloat(s[1])),r(parseFloat(s[2])),r(parseFloat(s[3]))]}return[0,0,0]}var rR=`
  void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`,oR=`
  uniform vec2 u_resolution;
  uniform float u_dpr;
  uniform float u_time;
  uniform vec3 u_color1, u_color2, u_color3, u_color4, u_color5, u_color6, u_color7, u_cardBg;
  uniform float u_alpha1, u_alpha2, u_alpha3, u_alpha4, u_alpha5, u_alpha6, u_alpha7;
  uniform float u_speed, u_intensity, u_scale, u_direction;
  uniform float u_softness, u_distortion, u_complexity, u_shape, u_flicker;
  uniform float u_vignette, u_vigOpacity, u_blur, u_highlight, u_shaderOpacity;
  uniform float u_cellSize, u_gap, u_dotSize, u_dotSoftness, u_dotOpacity, u_hlScale, u_fillOpacity, u_edgeFade, u_fadeStr;
  uniform float u_dotMode;
  uniform int u_effect;
  uniform int u_sweepEase;

  // Reference card edge length (CSS px) at which the original preset cellSize
  // gives the canonical cell count. Cell PIXEL size stays constant across card
  // sizes by scaling gridSize proportionally to (currentCssDim / REF_DIM).
  const float REF_DIM = 320.0;

  /** Anisotropic cell count: returns the number of cells along x and y so that
   *  each cell stays SQUARE in screen space regardless of the card's aspect
   *  ratio. A 600\xD7300 card gets twice as many cells horizontally as vertically;
   *  cells stay the same physical size as on a 300\xD7300 card. */
  vec2 gridCounts(float baseCount) {
    vec2 cssRes = u_resolution / max(u_dpr, 0.0001);
    return max(vec2(2.0), floor(baseCount * cssRes / REF_DIM));
  }

  vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec2 mod289v2(vec2 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289((x * 34.0 + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289v2(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m * m; m = m * m;
    vec3 x_ = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x_) - 0.5;
    vec3 ox = floor(x_ + 0.5);
    vec3 a0 = x_ - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p, float oct) {
    float val = 0.0, amp = 0.5;
    int n = int(oct);
    for (int i = 0; i < 4; i++) {
      if (i >= n) break;
      val += amp * snoise(p);
      p *= 2.0;
      amp *= 0.5;
    }
    return val;
  }

  float nfbm(vec2 p) { return fbm(p, 2.0 + u_complexity * 2.0); }

  vec3 palette(float t) {
    t = clamp(t, 0.0, 1.0);
    t = t * t * (3.0 - 2.0 * t);
    float k = 64.0;
    float w1 = u_alpha1 * exp(-k * t * t);
    float w2 = u_alpha2 * exp(-k * (t - 0.25) * (t - 0.25));
    float w3 = u_alpha3 * exp(-k * (t - 0.5)  * (t - 0.5));
    float w4 = u_alpha4 * exp(-k * (t - 0.75) * (t - 0.75));
    float w5 = u_alpha5 * exp(-k * (t - 1.0)  * (t - 1.0));
    float total = w1 + w2 + w3 + w4 + w5 + 0.0001;
    return (u_color1*w1 + u_color2*w2 + u_color3*w3 + u_color4*w4 + u_color5*w5) / total;
  }

  vec3 softBlend(float a, float b, float c) {
    a = clamp(a, 0.0, 1.0); a *= a;
    b = clamp(b, 0.0, 1.0); b *= b;
    c = clamp(c, 0.0, 1.0); c *= c;
    float d = clamp(a * 0.7 + c * 0.3, 0.0, 1.0); d *= d;
    float e = clamp(b * 0.5 + c * 0.5, 0.0, 1.0); e *= e;
    a *= u_alpha1; b *= u_alpha2; c *= u_alpha3; d *= u_alpha4; e *= u_alpha5;
    float total = a + b + c + d + e;
    float floorW = max(0.001 - total, 0.0);
    vec3 fallback = (u_color1 + u_color2 + u_color3 + u_color4 + u_color5) * 0.2;
    return (u_color1 * a + u_color2 * b + u_color3 * c + u_color4 * d + u_color5 * e + fallback * floorW) / (total + floorW);
  }

  vec2 warp(vec2 p, float t) {
    float str = u_distortion * 2.0;
    return vec2(
      nfbm(p + vec2(t * 0.1, 0.0)),
      nfbm(p + vec2(0.0, t * 0.12) + 5.0)
    ) * str;
  }

  float sweepEase(float x) {
    if (u_sweepEase == 1) return x * x * (3.0 - 2.0 * x);
    if (u_sweepEase == 2) {
      float p = 1.0 - x;
      return 1.0 - p * p * p;
    }
    if (u_sweepEase == 3) {
      return x < 0.5 ? 4.0 * x * x * x : 1.0 - pow(-2.0 * x + 2.0, 3.0) * 0.5;
    }
    if (u_sweepEase == 4) return 1.0 - pow(2.0, -10.0 * x) * (1.0 - x);
    return x;
  }

  float blob(vec2 p, vec2 center, float radius) {
    float r = radius * (0.5 + u_shape * 0.8);
    float soft = 0.05 + u_softness * 0.4;
    return smoothstep(r + soft, r - soft * 0.5, length(p - center));
  }

  vec3 computeEffect(vec2 uv, float aspect, float t, float dist, float soft, float cpx, float shp) {
    vec2 p = (uv - 0.5) * u_scale;
    p.x *= aspect;
    p += vec2(cos(u_direction), sin(u_direction)) * t * 0.15;
    vec3 col = vec3(0.0);

    if (u_effect == 0) {
      float val = sin(p.x * 3.0 + t) * 0.5 + 0.5;
      val += sin(p.y * 2.0 + t * 0.7) * 0.3;
      val += sin((p.x + p.y) * (1.0 + cpx * 3.0) - t * 0.5) * 0.2;
      vec2 w = warp(p, t);
      val += (w.x + w.y) * 0.15;
      col = palette(clamp(val * u_intensity, 0.0, 1.0));

    } else if (u_effect == 1) {
      float freq = 3.0 + cpx * 8.0;
      float val = 0.0;
      val += sin(p.x * freq + t);
      val += sin(p.y * freq + t * 1.3);
      val += sin((p.x + p.y) * freq * 0.7 + t * 0.7);
      val += sin(length(p) * freq * 0.8 - t * 1.5);
      vec2 w = warp(p, t);
      val += (w.x + w.y) * dist;
      val = val * 0.2 * u_intensity + 0.5;
      col = palette(clamp(val, 0.0, 1.0));

    } else if (u_effect == 2) {
      vec2 q = vec2(nfbm(p + t * 0.3), nfbm(p + vec2(5.2, 1.3) + t * 0.2));
      float val = nfbm(p + q * (1.0 + dist * 3.0) + t * 0.1);
      val = val * u_intensity * 0.5 + 0.5;
      col = palette(clamp(val, 0.0, 1.0));

    } else if (u_effect == 3) {
      float d = length(p);
      float val = sin(d * (3.0 + cpx * 6.0) - t * 2.0) * 0.5 + 0.5;
      val *= exp(-d * (0.3 + shp * 1.0));
      val += sin(atan(p.y, p.x) * (1.5 + cpx * 2.0) + t) * 0.15;
      col = palette(clamp(val * u_intensity, 0.0, 1.0));

    } else if (u_effect == 4) {
      vec2 q = vec2(nfbm(p * (0.5 + shp * 0.6) + vec2(t * 0.12, t * 0.08)), nfbm(p * (0.5 + shp * 0.6) + vec2(t * 0.09, -t * 0.11)));
      vec2 r = vec2(nfbm(p + q * (1.0 + dist * 2.0) + vec2(1.7, 9.2) + t * 0.06), nfbm(p + q * (1.0 + dist * 2.0) + vec2(8.3, 2.8) - t * 0.08));
      float val = nfbm(p + r * 2.0);
      float lo = -0.3 - soft * 0.5;
      float hi = 0.5 + soft * 0.5;
      val = smoothstep(lo, hi, val * u_intensity);
      col = palette(val);

    } else if (u_effect == 5) {
      float n1 = nfbm(vec2(p.x * 0.5 + t * 0.15, p.y * (1.0 + cpx * 1.5)));
      float n2 = nfbm(vec2(p.x * 0.3 - t * 0.1, p.y * (0.8 + cpx * 1.0) + 3.0));
      float band = sin(p.y * 3.0 + n1 * (1.0 + dist * 2.0) + t * 0.3) * 0.5 + 0.5;
      float shimmer = sin(p.y * 4.0 + n2 * 1.5 - t * 0.2) * 0.5 + 0.5;
      float w1 = band * (0.5 + 0.5 * sin(p.x * 1.5 + t * 0.2 + n1));
      float w2 = shimmer * (0.5 + 0.5 * cos(p.x * 1.0 - t * 0.15 + n2));
      float w3 = nfbm(p * 0.5 + t * 0.05) * 0.5 + 0.5;
      col = softBlend(w1 * u_intensity, w2 * u_intensity, w3 * 0.6 * u_intensity);

    } else if (u_effect == 6) {
      vec2 wp = warp(p * 1.2, t);
      float blobR = 0.15 + shp * 0.2;
      float b1 = blob(p, vec2(sin(t * 0.3) * 0.3, cos(t * 0.2) * 0.4) + wp * 0.2, blobR);
      float b2 = blob(p, vec2(cos(t * 0.25) * 0.4, sin(t * 0.35) * 0.3 - 0.2) + wp * 0.15, blobR * 1.2);
      float b3 = blob(p, vec2(-sin(t * 0.2) * 0.3, -cos(t * 0.3) * 0.35) + wp * 0.18, blobR);
      float bg = nfbm(p * 0.5 + t * 0.05) * 0.3 + 0.15;
      col = softBlend((b1 + bg * 0.5) * u_intensity, (b2 + bg * 0.3) * u_intensity, (b3 + bg * 0.4) * u_intensity);

    } else if (u_effect == 7) {
      float sz = 0.4 + shp * 0.6;
      float sigma = sz * sz * 2.0;
      vec2 a1 = vec2(-0.45 + sin(t * 0.07) * 0.06, 0.45 + cos(t * 0.09) * 0.05);
      vec2 a2 = vec2(0.45 + cos(t * 0.08) * 0.06, 0.45 + sin(t * 0.06) * 0.05);
      vec2 a3 = vec2(0.0 + sin(t * 0.05) * 0.1, 0.0 + cos(t * 0.07) * 0.1);
      vec2 a4 = vec2(-0.4 + cos(t * 0.06) * 0.07, -0.3 + sin(t * 0.08) * 0.06);
      vec2 a5 = vec2(0.4 + sin(t * 0.07) * 0.06, -0.4 + cos(t * 0.05) * 0.06);
      float g1 = exp(-dot(p - a1, p - a1) / sigma);
      float g2 = exp(-dot(p - a2, p - a2) / sigma);
      float g3 = exp(-dot(p - a3, p - a3) / sigma);
      float g4 = exp(-dot(p - a4, p - a4) / sigma);
      float g5 = exp(-dot(p - a5, p - a5) / sigma);
      float nudge = dist > 0.01 ? snoise(p * (0.5 + cpx) + t * 0.04) * dist * 0.08 : 0.0;
      float w1 = (g1 + g4 + nudge) * u_intensity;
      float w2 = (g2 + g5 + nudge) * u_intensity;
      float w3 = (g3 + nudge) * u_intensity;
      col = softBlend(w1, w2, w3);

    } else if (u_effect == 8) {
      vec2 w1 = vec2(nfbm(p * (0.7 + cpx * 0.5) + t * 0.1), nfbm(p * (0.7 + cpx * 0.5) + vec2(3.3, 7.7) + t * 0.08));
      vec2 w2 = vec2(nfbm(p * 0.6 + w1 * (1.0 + dist) + t * 0.06), nfbm(p * 0.6 + w1 * (1.0 + dist) + vec2(1.7, 4.2) - t * 0.07));
      float f1 = nfbm(p + w2 * 1.5);
      float f2 = nfbm(p + w2 * 1.5 + vec2(4.1, 2.3));
      float f3 = nfbm(p + w2 * 1.5 + vec2(7.5, 6.1));
      col = softBlend((f1 * 0.5 + 0.5) * u_intensity, (f2 * 0.5 + 0.5) * u_intensity, (f3 * 0.5 + 0.5) * u_intensity);

    } else if (u_effect == 9) {
      vec2 sw = vec2(sin(p.y * 2.0 + t * 0.3) * 0.15 + snoise(p * 1.5 + t * 0.15) * dist * 0.3, cos(p.x * 1.8 + t * 0.25) * 0.15 + snoise(p * 1.5 + vec2(5.0, 0.0) + t * 0.12) * dist * 0.3);
      vec2 wp = p + sw;
      float caustic = (snoise(wp * (1.5 + cpx * 2.0) + t * 0.2) * 0.5 + 0.5) + (snoise(wp * (2.0 + cpx * 2.0) - t * 0.15) * 0.5 + 0.5) * 0.5;
      caustic = caustic / 1.5;
      float depth = nfbm(vec2(p.x * 0.3, p.y * 0.8) + t * 0.05) * 0.5 + 0.5;
      col = softBlend(depth * u_intensity, (1.0 - depth) * u_intensity, caustic * u_intensity);

    } else if (u_effect == 10) {
      float angle = 0.6 + shp * 1.2;
      float ca = cos(angle), sa = sin(angle);
      vec2 rp = vec2(p.x * ca - p.y * sa, p.x * sa + p.y * ca);
      float n1 = nfbm(rp * 0.8 + t * 0.12) * (1.0 + dist * 2.0);
      float n2 = nfbm(rp * 0.6 + vec2(3.0, 0.0) + t * 0.1) * (1.0 + dist * 1.5);
      float wave = sin(rp.x * (2.0 + cpx * 2.0) + n1 + t * 0.3);
      float wave2 = sin(rp.x * (1.5 + cpx * 1.5) + n2 - t * 0.2);
      float ribbon1 = exp(-2.0 * (rp.y - wave * 0.35) * (rp.y - wave * 0.35)) * u_intensity;
      float ribbon2 = exp(-2.0 * (rp.y - 0.15 - wave2 * 0.3) * (rp.y - 0.15 - wave2 * 0.3)) * u_intensity;
      float bg = nfbm(p * 0.4 + t * 0.03) * 0.5 + 0.5;
      col = softBlend(ribbon1, ribbon2, bg * 0.5 * u_intensity);

    } else if (u_effect == 11) {
      vec2 q = vec2(nfbm(p * 0.5 + vec2(t * 0.05, 0.0)), nfbm(p * 0.5 + vec2(0.0, t * 0.07)));
      vec2 r = vec2(nfbm(p * 0.6 + q * (1.0 + dist * 1.5) + vec2(1.7, 9.2) + t * 0.03), nfbm(p * 0.6 + q * (1.0 + dist * 1.5) + vec2(8.3, 2.8) + t * 0.04));
      float f = nfbm(p + r * 1.5);
      float f2 = nfbm(p * 0.7 + r + vec2(3.0, 7.0));
      col = softBlend((f * 0.5 + 0.5) * u_intensity, (f2 * 0.5 + 0.5) * u_intensity, (nfbm(p * 0.4 - t * 0.02) * 0.5 + 0.5) * u_intensity);

    } else if (u_effect == 12) {
      vec2 w = warp(p * 0.5, t * 0.7);
      float fold1 = sin(p.x * (1.5 + cpx * 2.0) + w.x * 1.5 + t * 0.2) * 0.5 + 0.5;
      float fold2 = sin(p.y * (1.2 + cpx * 1.5) + w.y * 1.5 - t * 0.15) * 0.5 + 0.5;
      float fold3 = sin((p.x - p.y) * (0.8 + cpx * 0.8) + (w.x + w.y) + t * 0.1) * 0.5 + 0.5;
      col = softBlend(fold1 * u_intensity, fold2 * u_intensity, fold3 * 0.7 * u_intensity);

    } else if (u_effect == 13) {
      float spread = 0.25 + shp * 0.35;
      vec2 w = warp(p, t * 0.5);
      vec2 c1 = vec2(sin(t * 0.08) * spread, cos(t * 0.11) * spread) + w * 0.15;
      vec2 c2 = vec2(cos(t * 0.09) * spread * 1.3, sin(t * 0.07) * spread) + w * 0.12;
      vec2 c3 = vec2(-sin(t * 0.1) * spread, -cos(t * 0.08) * spread * 1.2) + w * 0.1;
      float falloff = 0.3 + soft * 0.7;
      float d1 = 1.0 - smoothstep(0.0, falloff, length(p - c1 + w * dist * 0.3));
      float d2 = 1.0 - smoothstep(0.0, falloff, length(p - c2 + w * dist * 0.25));
      float d3 = 1.0 - smoothstep(0.0, falloff, length(p - c3 + w * dist * 0.2));
      float detail = nfbm(p * 2.0 + t * 0.05) * cpx * 0.3;
      col = softBlend((d1 + detail) * u_intensity, (d2 + detail) * u_intensity, (d3 + detail) * u_intensity);

    } else if (u_effect == 14) {
      vec2 w = warp(p * 0.6, t * 0.6);
      float angle = atan(p.y + w.y * dist, p.x + w.x * dist);
      float radius = length(p);
      float field1 = sin(angle * (2.0 + cpx * 4.0) + radius * (3.0 + cpx * 3.0) + t * 0.4 + nfbm(p + t * 0.1) * dist * 2.0) * 0.5 + 0.5;
      float field2 = sin(angle * (1.5 + cpx * 2.5) - radius * 2.0 - t * 0.3 + nfbm(p * 0.6 + t * 0.08) * dist * 1.5) * 0.5 + 0.5;
      float bg = nfbm(p * 0.3 + t * 0.03) * 0.5 + 0.5;
      col = softBlend(field1 * u_intensity, field2 * u_intensity, bg * 0.5 * u_intensity);

    } else if (u_effect == 15) {
      vec2 drift = vec2(t * 0.06, t * 0.03);
      float c1 = nfbm((p + drift) * (0.4 + cpx * 0.5)) * 0.5 + 0.5;
      float c2 = nfbm((p + drift + vec2(3.7, 1.2)) * (0.35 + cpx * 0.4)) * 0.5 + 0.5;
      float c3 = nfbm((p + drift + vec2(7.1, 4.5)) * (0.3 + cpx * 0.35)) * 0.5 + 0.5;
      vec2 w = warp(p * 0.2, t * 0.4);
      c1 += w.x * dist * 0.3;
      c2 += w.y * dist * 0.25;
      col = softBlend(c1 * u_intensity, c2 * u_intensity, c3 * u_intensity);

    } else if (u_effect == 16) {
      vec2 w = warp(vec2(p.x * 0.3, p.y * 0.6), t * 0.5);
      float c1 = sin(p.x * (1.5 + cpx * 2.0) + w.x * (1.0 + dist * 2.0) + t * 0.15) * 0.5 + 0.5;
      float c2 = sin(p.x * (1.0 + cpx * 1.5) + w.y * (1.0 + dist * 1.5) - t * 0.12 + 2.0) * 0.5 + 0.5;
      float c3 = sin(p.x * (0.8 + cpx * 1.0) + (w.x + w.y) * 0.5 * (1.0 + dist) + t * 0.08 + 4.0) * 0.5 + 0.5;
      float fade = nfbm(vec2(p.x * 0.3, p.y * 0.5) + t * 0.03) * 0.5 + 0.5;
      col = softBlend(c1 * fade * u_intensity, c2 * fade * u_intensity, c3 * (1.0 - fade * 0.4) * u_intensity * 0.7);

    } else if (u_effect == 17) {
      vec2 w = warp(p * 0.8, t * 0.6);
      vec2 w2 = warp(p * 0.5 + w * 0.4, t * 0.4);
      float r1 = (snoise((p + w * dist * 0.5) * (1.5 + cpx * 2.0) + t * 0.1) * 0.5 + 0.5) * u_intensity;
      float r2 = (snoise((p + w2 * dist * 0.4) * (1.2 + cpx * 1.5) + t * 0.08 + 3.0) * 0.5 + 0.5) * u_intensity;
      float r3 = (snoise((p + (w + w2) * dist * 0.3) * (0.8 + cpx * 1.0) - t * 0.06 + 7.0) * 0.5 + 0.5) * u_intensity;
      col = softBlend(r1, r2, r3);

    } else if (u_effect == 18) {
      vec2 w = warp(p * 0.5, t * 0.5);
      float blobSize = 0.2 + shp * 0.3;
      float total1 = 0.0, total2 = 0.0;
      for (int i = 0; i < 5; i++) {
        float fi = float(i);
        vec2 c1 = vec2(sin(t * 0.1 + fi * 2.1) * 0.4, cos(t * 0.13 + fi * 1.7) * 0.35) + w * dist * 0.15;
        vec2 c2 = vec2(cos(t * 0.12 + fi * 1.9) * 0.35, sin(t * 0.09 + fi * 2.3) * 0.4) + w * dist * 0.12;
        total1 += blobSize * blobSize / (dot(p - c1, p - c1) + 0.02);
        total2 += blobSize * blobSize / (dot(p - c2, p - c2) + 0.02);
      }
      total1 = clamp(total1 * 0.25, 0.0, 1.0);
      total2 = clamp(total2 * 0.25, 0.0, 1.0);
      float total3 = nfbm(p + w * dist * 0.3 + t * 0.05) * 0.5 + 0.5;
      col = softBlend(total1 * u_intensity, total2 * u_intensity, total3 * 0.7 * u_intensity);

    } else if (u_effect == 19) {
      vec2 w = warp(p * 0.4, t * 0.4);
      float angle = atan(p.y, p.x);
      float radius = length(p);
      float s1 = sin(angle * (1.5 + cpx * 2.0) + radius * (3.0 + cpx * 3.0) + t * 0.3 + w.x * dist * 1.5) * 0.5 + 0.5;
      float s2 = sin(angle * (1.2 + cpx * 1.5) - radius * (2.5 + cpx * 2.5) - t * 0.25 + w.y * dist * 1.5 + 1.5) * 0.5 + 0.5;
      float s3 = sin((angle + 3.14) * (0.8 + cpx) + radius * (2.0 + cpx * 2.0) + t * 0.15 + (w.x + w.y) * dist) * 0.5 + 0.5;
      float fade = exp(-radius * (0.5 - shp * 0.3));
      col = softBlend(s1 * fade * u_intensity, s2 * fade * u_intensity, s3 * fade * 0.7 * u_intensity);

    } else if (u_effect == 20) {
      vec2 w = warp(p * 0.5, t * 0.4);
      vec2 wp = p + w * (0.4 + dist * 0.6);
      float scale = 0.6 + cpx * 0.8;
      float h  = nfbm(wp * scale + t * 0.08);
      float eps = 0.06;
      float hx = nfbm((wp + vec2(eps, 0.0)) * scale + t * 0.08) - h;
      float hy = nfbm((wp + vec2(0.0, eps)) * scale + t * 0.08) - h;
      vec3 n = normalize(vec3(-hx * 6.0, -hy * 6.0, 1.0));
      vec3 lightDir = normalize(vec3(0.55, 0.65, 0.8));
      float light = max(dot(n, lightDir), 0.0);
      float spec = pow(light, 6.0 + shp * 26.0);
      float diffuse = light * 0.6 + 0.35;
      float fres = pow(1.0 - max(n.z, 0.0), 2.0);
      float w1 = (diffuse + spec * 0.5) * u_intensity;
      float w2 = (h * 0.5 + 0.5 + spec * 0.3 + fres * 0.3) * u_intensity;
      float w3 = (spec * 1.4 + fres * 0.5) * u_intensity;
      col = softBlend(w1, w2, w3);

    } else if (u_effect == 21) {
      vec2 w = warp(p * 0.4, t * 0.3);
      float angle = 0.2 + shp * 1.3;
      float ca = cos(angle), sa = sin(angle);
      vec2 rp = vec2(p.x * ca - p.y * sa, p.x * sa + p.y * ca);
      float band = sin(rp.y * (3.0 + cpx * 5.0) + w.x * (1.0 + dist * 2.5) + t * 0.35);
      float ridge = 1.0 - abs(band);
      ridge = pow(ridge, 5.0 + shp * 10.0);
      float band2 = sin(rp.y * (2.0 + cpx * 3.0) + w.y * (0.8 + dist * 2.0) - t * 0.22 + 1.4);
      float ridge2 = 1.0 - abs(band2);
      ridge2 = pow(ridge2, 3.0 + shp * 8.0);
      float bg = nfbm(p * 0.45 + t * 0.05) * 0.5 + 0.5;
      float w1 = (ridge * 1.4 + bg * 0.25) * u_intensity;
      float w2 = (ridge2 * 1.0 + bg * 0.45) * u_intensity;
      float w3 = (ridge * 0.5 + ridge2 * 0.5) * u_intensity * 0.8;
      col = softBlend(w1, w2, w3);

    } else if (u_effect == 22) {
      vec2 w  = warp(p * 0.7, t * 0.5);
      vec2 w2 = warp(p * 0.4 + w * 0.3, t * 0.3);
      vec2 wp = p + w * (0.4 + dist * 0.6);
      float n1 = snoise(wp * (1.4 + cpx * 1.6) + t * 0.14);
      float n2 = snoise((wp + w2 * dist * 0.4) * (2.0 + cpx * 2.0) + vec2(3.0, 7.0) - t * 0.1);
      float ridge1 = 1.0 - abs(n1);
      ridge1 = pow(ridge1, 5.0 + shp * 12.0);
      float ridge2 = 1.0 - abs(n2);
      ridge2 = pow(ridge2, 4.0 + shp * 10.0);
      float base = (n1 + n2) * 0.25 + 0.5;
      float w1 = (base * 0.6 + ridge1 * 1.2) * u_intensity;
      float w2c = ((1.0 - base) * 0.6 + ridge2 * 1.0) * u_intensity;
      float w3 = (ridge1 * 0.8 + ridge2 * 0.6) * u_intensity;
      col = softBlend(w1, w2c, w3);

    } else if (u_effect == 23) {
      float angle = 0.1 + shp * 1.4;
      float ca = cos(angle), sa = sin(angle);
      vec2 rp = vec2(p.x * ca - p.y * sa, p.x * sa + p.y * ca);
      vec2 stretch = vec2(rp.x * (5.0 + cpx * 4.0), rp.y * (0.35 + cpx * 0.3));
      vec2 sw = warp(stretch * 0.3, t * 0.3) * dist;
      float n1 = snoise(stretch + sw + t * 0.08);
      float n2 = snoise(stretch * 1.4 + vec2(2.0, 5.0) + sw - t * 0.06);
      float streak = 1.0 - abs(n1);
      streak = pow(streak, 6.0 + shp * 12.0);
      float streak2 = 1.0 - abs(n2);
      streak2 = pow(streak2, 4.0 + shp * 8.0);
      float bg = nfbm(p * 0.4 + t * 0.04) * 0.4 + 0.4;
      float w1 = (streak * 1.4 + bg * 0.3) * u_intensity;
      float w2 = (streak2 * 0.9 + bg * 0.5) * u_intensity;
      float w3 = (streak * 0.7 + streak2 * 0.4) * u_intensity * 0.8;
      col = softBlend(w1, w2, w3);

    } else if (u_effect == 24) {
      vec2 w1 = warp(p * 0.55, t * 0.4);
      vec2 w2 = warp(p * 0.7 + w1 * 0.4, t * 0.3);
      vec2 wp = p + (w1 + w2) * (0.4 + dist * 0.7);

      float scale = 0.65 + cpx * 0.7;
      float n1 = nfbm(wp * scale + vec2(0.0, 0.0) + t * 0.10);
      float n2 = nfbm(wp * scale + vec2(3.7, 5.2) - t * 0.07);
      float n3 = nfbm(wp * scale + vec2(7.1, 2.3) + t * 0.06);
      float n4 = nfbm(wp * scale + vec2(1.8, 8.4) - t * 0.08);
      float n5 = nfbm(wp * scale + vec2(4.9, 1.1) + t * 0.05);
      float n6 = nfbm(wp * scale + vec2(6.3, 7.8) - t * 0.09);
      float n7 = nfbm(wp * scale + vec2(2.4, 4.6) + t * 0.04);

      float pw = 2.5 + shp * 5.0;
      n1 = pow(clamp(n1, 0.0, 1.0), pw);
      n2 = pow(clamp(n2, 0.0, 1.0), pw);
      n3 = pow(clamp(n3, 0.0, 1.0), pw);
      n4 = pow(clamp(n4, 0.0, 1.0), pw);
      n5 = pow(clamp(n5, 0.0, 1.0), pw);
      n6 = pow(clamp(n6, 0.0, 1.0), pw);
      n7 = pow(clamp(n7, 0.0, 1.0), pw);

      float intens = 0.5 + u_intensity * 0.9;
      float a1 = n1 * u_alpha1 * intens;
      float a2 = n2 * u_alpha2 * intens;
      float a3 = n3 * u_alpha3 * intens;
      float a4 = n4 * u_alpha4 * intens;
      float a5 = n5 * u_alpha5 * intens;
      float a6 = n6 * u_alpha6 * intens;
      float a7 = n7 * u_alpha7 * intens;
      float total = a1 + a2 + a3 + a4 + a5 + a6 + a7 + 0.001;
      col = (u_color1 * a1 + u_color2 * a2 + u_color3 * a3 + u_color4 * a4
           + u_color5 * a5 + u_color6 * a6 + u_color7 * a7) / total;

    } else if (u_effect == 25) {
      float d = (uv.x + (1.0 - uv.y)) * 0.5;
      float w = 0.9 / max(u_scale, 0.25);
      float cyc = t * 0.08;
      float pA = mix(-w, 1.0 + w, sweepEase(fract(cyc)));
      float pB = mix(-w, 1.0 + w, sweepEase(fract(cyc + 0.5)));
      float band = max(
        clamp(1.0 - abs(d - pA) / w, 0.0, 1.0),
        clamp(1.0 - abs(d - pB) / w, 0.0, 1.0)
      );
      float v = band * u_intensity;

      vec2 ggs = gridCounts(6.0 + u_cellSize * 74.0);
      if (u_dotMode > 1.5) {
        ggs = max(vec2(2.0), floor(ggs * (1.0 - u_gap * 0.8)));
      }
      vec2 cell = floor(uv * ggs);
      float clk = t * 1.6;
      // Wrap the stepped clock to keep sin() arguments small. u_time grows
      // unbounded over a session; on mediump-float GPUs (older Android, some
      // iOS) large hash inputs lose precision and the flicker bands/freezes.
      // mod(x, 1024) keeps the crossfade continuous across the wrap
      // (step 1023 fades into step 0, whose hash is the next s0).
      float step0 = mod(floor(clk), 1024.0);
      float step1 = mod(step0 + 1.0, 1024.0);
      float fz = smoothstep(0.0, 1.0, fract(clk));
      float cellSeed = dot(cell, vec2(127.1, 311.7));
      float r1 = fract(sin(cellSeed + step0 * 17.23) * 43758.5453);
      float r2 = fract(sin(cellSeed + step1 * 17.23) * 43758.5453);
      float rnd = mix(r1, r2, fz);
      v += (rnd - 0.5) * u_flicker * 0.9 * (0.15 + band * 0.85);

      col = palette(clamp(v, 0.0, 1.0));
    }

    return col;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float aspect = u_resolution.x / u_resolution.y;
    float t = u_time * u_speed;
    float dist = u_distortion;
    float soft = u_softness;
    float cpx = u_complexity;
    float shp = u_shape;

    vec2 sampleUV = uv;
    if (u_dotMode > 0.5) {
      vec2 gs = gridCounts(6.0 + u_cellSize * 74.0);
      if (u_dotMode > 1.5) {
        gs = max(vec2(2.0), floor(gs * (1.0 - u_gap * 0.8)));
      }
      sampleUV = (floor(uv * gs) + vec2(0.5)) / gs;
    }

    vec3 col;
    if (u_blur < 0.01) {
      col = computeEffect(sampleUV, aspect, t, dist, soft, cpx, shp);
    } else {
      float r = u_blur * 0.02;
      col  = computeEffect(sampleUV, aspect, t, dist, soft, cpx, shp) * 0.4;
      col += computeEffect(sampleUV + vec2( r,  0.0), aspect, t, dist, soft, cpx, shp) * 0.15;
      col += computeEffect(sampleUV + vec2(-r,  0.0), aspect, t, dist, soft, cpx, shp) * 0.15;
      col += computeEffect(sampleUV + vec2( 0.0,  r), aspect, t, dist, soft, cpx, shp) * 0.15;
      col += computeEffect(sampleUV + vec2( 0.0, -r), aspect, t, dist, soft, cpx, shp) * 0.15;
    }

    vec3 baseCol = col;
    if (u_dotMode < 0.5) {
      col = pow(col, vec3(1.3));
    }

    // CSS-pixel distance to the nearest edge \u2014 keeps the vignette / edge-fade
    // bands a consistent physical width on every side of any aspect ratio.
    vec2 cssRes = u_resolution / max(u_dpr, 0.0001);
    vec2 cssCoord = uv * cssRes;
    float edgeDistPx = min(
      min(cssCoord.x, cssRes.x - cssCoord.x),
      min(cssCoord.y, cssRes.y - cssCoord.y)
    );
    float vigRangePx = 40.0 * (1.0 + u_vignette * 3.0);
    float vig = (edgeDistPx * edgeDistPx) / (vigRangePx * vigRangePx);
    vig = smoothstep(0.0, 1.0, vig);
    col *= mix(1.0, vig, u_vignette * u_vigOpacity);

    float colorAlpha = (u_alpha1 + u_alpha2 + u_alpha3 + u_alpha4 + u_alpha5) / 5.0;
    if (colorAlpha < 0.999) {
      vec3 c1d = col - u_color1, c2d = col - u_color2, c3d = col - u_color3, c4d = col - u_color4, c5d = col - u_color5;
      float prox1 = exp(-8.0 * dot(c1d, c1d));
      float prox2 = exp(-8.0 * dot(c2d, c2d));
      float prox3 = exp(-8.0 * dot(c3d, c3d));
      float prox4 = exp(-8.0 * dot(c4d, c4d));
      float prox5 = exp(-8.0 * dot(c5d, c5d));
      float pTotal = prox1 + prox2 + prox3 + prox4 + prox5 + 0.0001;
      colorAlpha = (prox1*u_alpha1 + prox2*u_alpha2 + prox3*u_alpha3 + prox4*u_alpha4 + prox5*u_alpha5) / pTotal;
    }
    float alpha = colorAlpha;

    if (u_dotMode > 0.5) {
      vec2 gridSize = gridCounts(6.0 + u_cellSize * 74.0);
      if (u_dotMode > 1.5) {
        gridSize = max(vec2(2.0), floor(gridSize * (1.0 - u_gap * 0.8)));
      }
      // cellLocal is in [0,1] within each cell. Because gridSize was chosen so
      // that cell PIXEL size is square, distance / mask math here works in
      // screen-square units even though we're operating in normalised cell uv.
      vec2 cellLocal = fract(uv * gridSize);

      float hlFactor = 0.0;
      if (u_highlight > 0.01 || u_hlScale > 0.01) {
        vec2 cellCenter = (floor(uv * gridSize) + vec2(0.5)) / gridSize;
        vec2 cp2 = (cellCenter - 0.5) * u_scale;
        cp2.x *= aspect;
        float lw = sin(cp2.x * 3.0 + t * 1.5) * 0.5 + 0.5;
        lw *= sin(cp2.y * 2.5 - t * 1.1) * 0.5 + 0.5;
        lw += (snoise(cp2 * 2.0 + t * 0.6) * 0.5 + 0.5) * 0.3;
        hlFactor = clamp(lw, 0.0, 1.0);
        hlFactor *= hlFactor;
      }

      float scaleBoost = 1.0 + smoothstep(0.2, 0.8, hlFactor) * u_hlScale * 1.2;

      float mask = 1.0;
      if (u_dotMode < 1.5) {
        float gapW = u_gap * 0.35 / scaleBoost;
        if (gapW > 0.003) {
          mask = step(gapW, cellLocal.x) * step(gapW, 1.0 - cellLocal.x)
               * step(gapW, cellLocal.y) * step(gapW, 1.0 - cellLocal.y);
        }
      } else {
        // Render the circular dot mask in screen-pixel space rather than
        // cell-local UV. We map the cell-local offset to actual pixels
        // (cellPx = u_resolution / gridSize), then apply a 1-pixel AA
        // floor to the smoothstep edge so the dot rim is crisp and
        // properly anti-aliased even at u_dotSoftness near 0. The user
        // softness slider still scales linearly on top of the floor.
        // No fwidth() / GL_OES_standard_derivatives needed - dPx is
        // already in pixel units, so a fixed 1-px edge IS pixel-perfect.
        // gridCounts() already keeps cells square in screen space, so
        // pxOffset traces true circles (not ellipses) on any aspect.
        vec2 cellPx = u_resolution / gridSize;
        vec2 pxOffset = (cellLocal - 0.5) * cellPx;
        float dPx = length(pxOffset);
        float minCellPx = min(cellPx.x, cellPx.y);
        float radiusPx = u_dotSize * 0.5 * minCellPx * scaleBoost;
        // 0.5-px AA floor (1-px total smoothstep ramp) keeps the rim
        // pixel-perfect at u_dotSoftness=0 while letting the user softness
        // value dominate at the bundled preset defaults (e.g. softness=0.1
        // on a ~28-px cell yields softPx=0.56 -> ~1.1-px ramp, matching
        // the original cell-local behaviour). A larger floor (e.g. 1.0)
        // would widen low-softness dots and visually lighten dot presets.
        float aaPx = 0.5;
        float softPx = u_dotSoftness * 0.2 * minCellPx;
        float edgePx = max(aaPx, softPx);
        mask = 1.0 - smoothstep(radiusPx - edgePx, radiusPx + edgePx, dPx);
      }

      if (u_highlight > 0.01) {
        float hl = hlFactor * u_highlight;
        col = col * (1.0 + hl * 2.5) + vec3(hl * hl * 0.3);
      }

      if (u_edgeFade > 0.5 && u_fadeStr > 0.005) {
        float ef = smoothstep(0.0, u_edgeFade, edgeDistPx);
        mask *= mix(1.0, ef, u_fadeStr);
      }

      float baseOpacity = (u_dotMode < 1.5) ? u_fillOpacity : 0.0;
      alpha = colorAlpha * mix(baseOpacity, u_dotOpacity, mask);

      float bgLum  = dot(u_cardBg, vec3(0.299, 0.587, 0.114));
      float colLum = dot(baseCol, vec3(0.299, 0.587, 0.114));
      alpha *= smoothstep(0.0, 0.33, abs(colLum - bgLum));
    }

    gl_FragColor = vec4(col, alpha * u_shaderOpacity);
  }
`,v1=1e3/10,D0=1.25,lR=2;function A1(){return typeof window>"u"?1:Math.min(window.devicePixelRatio||1,lR)}var Rt=null;function cR(){return{u_resolution:{value:new oe(1,1)},u_dpr:{value:1},u_time:{value:0},u_color1:{value:new Zt(1710618)},u_color2:{value:new Zt(8421504)},u_color3:{value:new Zt(14277081)},u_color4:{value:new Zt(4210752)},u_color5:{value:new Zt(12632256)},u_color6:{value:new Zt(6316128)},u_color7:{value:new Zt(10526880)},u_cardBg:{value:new Zt(986895)},u_alpha1:{value:1},u_alpha2:{value:1},u_alpha3:{value:1},u_alpha4:{value:1},u_alpha5:{value:1},u_alpha6:{value:1},u_alpha7:{value:1},u_speed:{value:1},u_intensity:{value:1},u_scale:{value:1.5},u_direction:{value:0},u_softness:{value:.75},u_distortion:{value:.3},u_complexity:{value:.2},u_shape:{value:.5},u_flicker:{value:0},u_vignette:{value:.25},u_vigOpacity:{value:1},u_blur:{value:0},u_highlight:{value:.4},u_shaderOpacity:{value:1},u_cellSize:{value:.5},u_gap:{value:.3},u_dotSize:{value:.8},u_dotSoftness:{value:.1},u_dotOpacity:{value:1},u_hlScale:{value:0},u_fillOpacity:{value:0},u_edgeFade:{value:16},u_fadeStr:{value:1},u_dotMode:{value:2},u_effect:{value:4},u_sweepEase:{value:0}}}function uR(){if(Rt)return Rt;let e=document.createElement("canvas");e.width=8,e.height=8;let t=new vf({canvas:e,alpha:!0,premultipliedAlpha:!1,preserveDrawingBuffer:!1,antialias:!1,powerPreference:"high-performance"});t.setPixelRatio(Math.min(typeof window<"u"?window.devicePixelRatio:1,D0)),t.setClearColor(0,0),t.autoClear=!0;let n=t.getContext(),i=new zl,a=new lo(-1,1,1,-1,0,1),s=cR(),r=new Vn({vertexShader:rR,fragmentShader:oR,uniforms:s,transparent:!0,depthTest:!1,depthWrite:!1,blending:ca}),o=new Fs(2,2),l=new bn(o,r);i.add(l),Rt={glCanvas:e,gl:n,renderer:t,scene:i,camera:a,material:r,geometry:o,mesh:l,uniforms:s,instances:new Set,rafId:0,lastFrameMs:0,lastTickMs:performance.now(),lastInstance:null,onContextLost:null,onContextRestored:null,contextLost:!1};let c=d=>{d.preventDefault(),Rt&&(Rt.contextLost=!0,Rt.rafId!==0&&(cancelAnimationFrame(Rt.rafId),Rt.rafId=0))},h=()=>{if(Rt){Rt.contextLost=!1,Rt.lastInstance=null;for(let d of Rt.instances)d.uniformsDirty=!0;jl()}};return e.addEventListener("webglcontextlost",c,!1),e.addEventListener("webglcontextrestored",h,!1),Rt.onContextLost=c,Rt.onContextRestored=h,jl(),Rt}function hR(){Rt&&(Rt.rafId!==0&&cancelAnimationFrame(Rt.rafId),Rt.onContextLost&&Rt.glCanvas.removeEventListener("webglcontextlost",Rt.onContextLost,!1),Rt.onContextRestored&&Rt.glCanvas.removeEventListener("webglcontextrestored",Rt.onContextRestored,!1),Rt.geometry.dispose(),Rt.material.dispose(),Rt.renderer.dispose(),Rt=null)}function fR(e,t){var n;let i=t.preset,a=e.uniforms;a.u_effect.value=i.effectIndex,a.u_speed.value=i.speed,a.u_intensity.value=i.intensity,a.u_scale.value=i.scale,a.u_direction.value=i.direction*Math.PI/180,a.u_softness.value=i.softness,a.u_distortion.value=i.distortion,a.u_complexity.value=i.complexity,a.u_shape.value=i.shape,a.u_flicker.value=i.flicker??0,a.u_vignette.value=i.vignette,a.u_vigOpacity.value=i.vigOpacity,a.u_blur.value=i.blur,a.u_highlight.value=i.highlight,a.u_shaderOpacity.value=i.shaderOpacity,a.u_dotMode.value=i.dotMode,a.u_sweepEase.value=i.sweepEase!=null?Math.floor(i.sweepEase):0;let s=i.dotMode===1?i.pixelConfig:i.dotConfig;a.u_cellSize.value=$l(s.cellSize,t.pixelScale),a.u_gap.value=s.gap,a.u_dotSize.value=s.dotSize,a.u_dotSoftness.value=s.dotSoftness,a.u_dotOpacity.value=s.dotOpacity,a.u_hlScale.value=s.hlScale,a.u_fillOpacity.value=s.fillOpacity,a.u_edgeFade.value=s.edgeFade,a.u_fadeStr.value=s.fadeStr;let[r,o,l]=Zs(t.cardBgOverride??i.cardBg);for(let c=0;c<7;c++){let h=(n=t.colorsOverride)==null?void 0:n[c],[d,f,p]=h!=null?Zs(h):Sf(t,c);a[`u_color${c+1}`].value.setRGB(d,f,p),a[`u_alpha${c+1}`].value=i.alphas[c]}a.u_cardBg.value.setRGB(r,o,l),t.uniformsDirty=!1}function dR(e){return e.cardBgOverride??e.preset.cardBg}function Sf(e,t){let n=e.preset,[i,a,s]=Zs(n.colors[t]);if(e.cardBgOverride==null)return[i,a,s];let[r,o,l]=Zs(n.cardBg),c=h=>Math.round(h*255);return c(i)===c(r)&&c(a)===c(o)&&c(s)===c(l)?Zs(e.cardBgOverride):[i,a,s]}function pR(e){return{iw:Math.max(1,Math.floor(e.cssWidth*e.dpr)),ih:Math.max(1,Math.floor(e.cssHeight*e.dpr))}}function w1(e){let t=0,n=0;for(let h of e.instances)!h.visible||h.paused||(h.cssWidth>t&&(t=h.cssWidth),h.cssHeight>n&&(n=h.cssHeight));if(t<=0||n<=0)return;let i=e.renderer.getPixelRatio(),a=Math.max(1,Math.floor(t*i)),s=Math.max(1,Math.floor(n*i)),r=e.glCanvas.width,o=e.glCanvas.height;if(a<=r&&s<=o)return;let l=Math.max(t,r/Math.max(i,1e-4)),c=Math.max(n,o/Math.max(i,1e-4));e.renderer.setSize(l,c,!1)}function C1(e,t,n){var i;if(e.contextLost)return;let{iw:a,ih:s}=pR(t),r=Math.max(1,t.cssWidth),o=Math.max(1,t.cssHeight);e.renderer.setViewport(0,0,r,o),e.renderer.setScissor(0,0,r,o),e.renderer.setScissorTest(!0),e.uniforms.u_resolution.value.set(a,s),e.uniforms.u_dpr.value=t.dpr||1,e.lastInstance===t&&!t.uniformsDirty||(fR(e,t),e.lastInstance=t),e.uniforms.u_time.value=t.accumulatedTime,e.renderer.render(e.scene,e.camera);let l=Math.max(1,Math.floor(t.cssWidth*t.canvasDpr)),c=Math.max(1,Math.floor(t.cssHeight*t.canvasDpr));(t.canvas.width!==l||t.canvas.height!==c)&&(t.canvas.width=l,t.canvas.height=c),t.ctx.clearRect(0,0,l,c);let h=e.glCanvas.height-s;t.ctx.imageSmoothingEnabled=!1,t.ctx.drawImage(e.glCanvas,0,h,a,s,0,0,l,c),(i=t.reveal)==null||i.afterShaderFrame(e,t,n),t.reveal&&t.reveal.isActive()&&(e.lastInstance=null)}function mR(e,t,n){!t.visible||t.paused||t.cssWidth<1||t.cssHeight<1||C1(e,t,n)}function yf(e){Rt&&(Rt.contextLost||e.visible&&(e.cssWidth<1||e.cssHeight<1||(w1(Rt),C1(Rt,e,performance.now()))))}function gR(e){for(let t of e.instances)if(t.visible&&!t.paused)return!0;return!1}var R1=e=>{if(!Rt)return;if(Rt.contextLost){Rt.rafId=0;return}if(!gR(Rt)){Rt.rafId=0;return}Rt.rafId=requestAnimationFrame(R1);let t=e-Rt.lastFrameMs;if(t<v1)return;Rt.lastFrameMs=e-t%v1;let n=(e-Rt.lastTickMs)/1e3;Rt.lastTickMs=e;for(let i of Rt.instances)i.visible&&!i.paused&&(i.accumulatedTime+=n);w1(Rt);for(let i of Rt.instances)mR(Rt,i,e)};function jl(){Rt&&(Rt.contextLost||Rt.rafId===0&&(Rt.lastTickMs=performance.now(),Rt.lastFrameMs=Rt.lastTickMs,Rt.rafId=requestAnimationFrame(R1)))}function $l(e,t){return!(t>0)||t===1?e:((6+e*74)/t-6)/74}function vR(e){let t=uR(),n=e.canvas.getContext("2d");if(!n)throw new Error("img-fx: 2D context unavailable");let i={canvas:e.canvas,ctx:n,cssWidth:e.cssWidth,cssHeight:e.cssHeight,dpr:Math.min(typeof window<"u"?window.devicePixelRatio:1,D0),canvasDpr:A1(),preset:e.preset,cardBgOverride:e.cardBg??null,colorsOverride:null,strength:e.strength??1,pixelScale:e.pixelScale!=null&&e.pixelScale>0?e.pixelScale:1,visible:!0,paused:!1,uniformsDirty:!0,reveal:null,accumulatedTime:Math.random()*1e3,startedAtMs:performance.now()};return t.instances.add(i),jl(),i}function _R(e){var t;Rt&&(Rt.instances.delete(e),Rt.lastInstance===e&&(Rt.lastInstance=null),(t=e.reveal)==null||t.dispose(),e.reveal=null,Rt.instances.size===0&&hR())}function yR(e,t,n){e.cssWidth=t,e.cssHeight=n,typeof window<"u"&&(e.dpr=Math.min(window.devicePixelRatio,D0),e.canvasDpr=A1())}function xR(e,t){e.preset=t,e.uniformsDirty=!0}function SR(e,t){e.cardBgOverride=t,e.uniformsDirty=!0}function MR(e,t){e.colorsOverride=t&&t.length>0?t.slice(0,7):null,e.uniformsDirty=!0}function bR(e,t){e.visible=t,t&&jl()}function ER(e,t){e.paused=t,t||jl()}function TR(e,t){e.strength=Math.max(0,Math.min(1,t))}function AR(e,t){e.pixelScale=t>0?t:1,e.uniformsDirty=!0}var _1={linear:e=>e,smoothstep:e=>e*e*(3-2*e),easeOutCubic:e=>1-Math.pow(1-e,3),easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeOutExpo:e=>e===1?1:1-Math.pow(2,-10*e),easeOutBack:e=>1+(1.70158+1)*Math.pow(e-1,3)+1.70158*Math.pow(e-1,2)};function tc(e,t){return(_1[e]??_1.smoothstep)(Math.max(0,Math.min(1,t)))}var wR=64,CR=96,yo=320,RR=.006;function U0(e,t,n){let i=t/Math.max(1,n),a=e.width/Math.max(1,e.height),s=0,r=0,o=e.width,l=e.height;a>i?(o=e.height*i,s=(e.width-o)/2):(l=e.width/i,r=(e.height-l)/2);let c=Math.min(o,l)*RR;return o-2*c>1&&l-2*c>1&&(s+=c,r+=c,o-=2*c,l-=2*c),{sx:s,sy:r,sw:o,sh:l}}var E0=new Map;function DR(e){let t=E0.get(e);return t||(t=new Promise((n,i)=>{let a=new Image,s=()=>n(a);a.onerror=r=>{E0.delete(e),i(r)},typeof a.decode=="function"?(a.src=e,a.decode().then(s,()=>{a.complete&&a.naturalWidth>0?s():a.onload=s})):(a.onload=s,a.src=e)}),E0.set(e,t),t)}function mi(e,t,n,i,a){let s=t==="a"?e.coverA:e.coverB;if(!s){let r=document.createElement("canvas"),o=r.getContext("2d");if(!o)throw new Error("img-fx: 2D context unavailable for cover bitmap");s={canvas:r,ctx:o,img:null,w:0,h:0},t==="a"?e.coverA=s:e.coverB=s}if(s.img!==n||s.w!==i||s.h!==a){s.canvas.width=i,s.canvas.height=a,s.w=i,s.h=a,s.img=n;let{sx:r,sy:o,sw:l,sh:c}=U0(n,i,a);s.ctx.clearRect(0,0,i,a),s.ctx.imageSmoothingEnabled=!0,s.ctx.imageSmoothingQuality="high",s.ctx.drawImage(n,r,o,l,c,0,0,i,a)}return s.canvas}function D1(e){return e.dotMode===2?CR:wR}function U1(e){let t=e.revealConfig;return e.dotMode===2?{duration:Math.max(.05,t.dotDuration),easingKey:t.dotEasing}:{duration:Math.max(.05,t.duration),easingKey:t.easing}}function UR(e,t,n,i){let a=n/(i-1),s=t/(i-1),r=a-.5,o=s-.5;switch(e){case"radialCenter":return 1-Math.sqrt(r*r+o*o)*2;case"radialCorner":return 1-Math.sqrt(a*a+s*s)/1.414;case"linearTop":return 1-s;case"linearBottom":return s;case"linearLeft":return 1-a;case"linearRight":return a;case"diagonalTL":return 1-(a+s)/2;case"diagonalBR":return(a+s)/2;case"diamond":return 1-(Math.abs(r)+Math.abs(o));case"blindsH":return 1-s*8%1;case"blindsV":return 1-a*8%1;default:return-1}}function L1(e,t,n,i,a){let s=t.uniforms.u_dotMode.value,r=t.uniforms.u_fillOpacity.value,o=n.preset.dotMode,l=o<1.5?0:1;t.uniforms.u_dotMode.value=l,t.uniforms.u_fillOpacity.value=l>.5?o===1?n.preset.pixelConfig.fillOpacity:n.preset.dotConfig.fillOpacity:0,t.renderer.render(t.scene,t.camera);let c=Math.max(1,Math.floor(n.cssWidth*n.dpr)),h=Math.max(1,Math.floor(n.cssHeight*n.dpr)),d=Math.max(0,t.glCanvas.height-h);e.sampleGpuCanvas||(e.sampleGpuCanvas=document.createElement("canvas"),e.sampleGpuCtx=e.sampleGpuCanvas.getContext("2d"));let f=e.sampleGpuCanvas,p=e.sampleGpuCtx;return(f.width!==a||f.height!==a)&&(f.width=a,f.height=a),p.clearRect(0,0,a,a),p.drawImage(t.glCanvas,0,d,c,h,0,0,a,a),i.clearRect(0,0,a,a),i.drawImage(f,0,0),t.uniforms.u_dotMode.value=s,t.uniforms.u_fillOpacity.value=r,e.sampleImgData=i.getImageData(0,0,a,a),e.sampleDataCache=e.sampleImgData.data,e.sampleDataCache}function O1(e,t){e.sampleCanvas||(e.sampleCanvas=document.createElement("canvas"),e.sampleCtx=e.sampleCanvas.getContext("2d",{willReadFrequently:!0})),(e.sampleCanvas.width!==t||e.sampleCanvas.height!==t)&&(e.sampleCanvas.width=t,e.sampleCanvas.height=t,e.sampleImgData=null,e.sampleDataCache=null,e.sampleFrameCounter=0),e.maskGrad||(e.maskGrad=document.createElement("canvas"),e.maskGradCtx=e.maskGrad.getContext("2d")),(e.maskGrad.width!==t||e.maskGrad.height!==t)&&(e.maskGrad.width=t,e.maskGrad.height=t,e.maskImgData=null),!e.maskImgData&&e.maskGradCtx&&(e.maskImgData=e.maskGradCtx.createImageData(t,t))}function LR(e,t,n,i){if(!e.image)return;let a=n.preset,s=n.canvas.width,r=n.canvas.height;(i.canvas.width!==s||i.canvas.height!==r)&&(i.canvas.width=s,i.canvas.height=r),i.clearRect(0,0,s,r);let{duration:o,easingKey:l}=U1(a),c=(performance.now()-e.revealStartMs)/1e3,h=Math.min(c/o,1),d=tc(l,h),f=e.image,{sx:p,sy:v,sw:x,sh:m}=U0(f,s,r),u=a.revealConfig.blur;if(h<1&&u>0){let z=u*(1-d);i.canvas.style.filter=z>.1?`blur(${z.toFixed(1)}px)`:"none"}else i.canvas.style.filter="none";if(h>=1){i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.drawImage(mi(e,"a",f,s,r),0,0);return}let g=D1(a);O1(e,g);let y=e.sampleCtx,_=e.maskGrad,w=e.maskGradCtx,U=a.revealConfig.maskShape,T=a.revealConfig.softness,D=U.startsWith("shader"),M=null,b=null,C=null;if(D){let z=e.sampleFrameCounter++;e.sampleDataCache==null||(z&1)===0?M=L1(e,t,n,y,g):M=e.sampleDataCache;let nt={shaderColor1:0,shaderColor2:1,shaderColor3:2,shaderColor4:3,shaderColor5:4};if(nt[U]!=null&&(b=Sf(n,nt[U])),U==="shaderHighlight"){let Q=Zs(dR(n));C=[];for(let ct=0;ct<5;ct++){let pt=Sf(n,ct),yt=pt[0]-Q[0],zt=pt[1]-Q[1],tt=pt[2]-Q[2];Math.sqrt(yt*yt+zt*zt+tt*tt)>.15&&C.push(pt)}C.length===0&&(C=[Sf(n,0)])}}let W=1-d*(1+T),H=U==="gradientSweep",P=0,Z=0,F=2,$=a.flicker??0,B=null,K=null,et=0,ht=0,gt=0;if($>.003){F=Math.max(2,Math.floor(6+$l(a.pixelConfig.cellSize,n.pixelScale)*74));let z=n.accumulatedTime*Math.max(a.speed,2)*1.6,nt=Math.floor(z);et=nt%1024,ht=(et+1)%1024,gt=z-nt,gt=gt*gt*(3-2*gt);let Q=(pt,yt)=>{let zt=Math.sin(pt*127.1+yt*17.23)*43758.5453;return zt-Math.floor(zt)};K=Q;let ct=F*F;(!e.gsFlickerTable||e.gsFlickerTable.length!==ct)&&(e.gsFlickerTable=new Float32Array(ct)),B=e.gsFlickerTable;for(let pt=0;pt<ct;pt++){let yt=Q(pt,et)*(1-gt)+Q(pt,ht)*gt;B[pt]=(yt-.5)*$*1.6}}H&&(P=.9/Math.max(a.scale,.25),Z=-P+d*(1+2*P));let Vt=e.maskImgData,Yt=Vt.data;for(let z=0;z<g;z++)for(let nt=0;nt<g;nt++){let Q;if(D&&M){let yt=(z*g+nt)*4,zt=M[yt]/255,tt=M[yt+1]/255,R=M[yt+2]/255;if(C){let Nt=0;for(let Mt of C){let Ft=zt-Mt[0],St=tt-Mt[1],jt=R-Mt[2],vt=Math.exp(-10*(Ft*Ft+St*St+jt*jt));vt>Nt&&(Nt=vt)}Q=Nt}else if(b){let Nt=zt-b[0],Mt=tt-b[1],Ft=R-b[2];Q=Math.exp(-8*(Nt*Nt+Mt*Mt+Ft*Ft))}else Q=(M[yt]*.299+M[yt+1]*.587+M[yt+2]*.114)/255}else H?Q=0:Q=UR(U,z,nt,g);let ct;if(H){let yt=nt/(g-1),zt=z/(g-1),tt=(yt+zt)*.5;ct=(Z+P-tt)/(2*P)}else ct=(Q-W)/T;if(B&&ct>-.5&&ct<1.5){let yt=ct<0?0:ct>1?1:ct,zt=yt*(1-yt)*4;if(zt>.001){let tt=nt/(g-1),R=z/(g-1),Nt=Math.floor(R*F)*F+Math.floor(tt*F);ct+=B[Nt]*zt}}ct<0?ct=0:ct>1&&(ct=1),ct=ct*ct*(3-2*ct);let pt=(z*g+nt)*4;Yt[pt]=255,Yt[pt+1]=255,Yt[pt+2]=255,Yt[pt+3]=ct*255+.5|0}if(w.putImageData(Vt,0,0),a.dotMode===1)NR(e,i,f,p,v,x,m,a,c,s,r,n,H?0:$,K,et,ht,gt);else{a.dotMode===2?OR(e,i,f,p,v,x,m,$l(a.pixelConfig.cellSize,n.pixelScale),c,a.revealConfig.pixDuration,a.revealConfig.pixEasing,n,s,r):(i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.drawImage(mi(e,"a",f,s,r),0,0)),i.globalCompositeOperation="destination-in";let z=a.dotMode===2&&D;z&&(i.imageSmoothingEnabled=!1),i.drawImage(_,0,0,s,r),z&&(i.imageSmoothingEnabled=!0),i.globalCompositeOperation="source-over"}}function OR(e,t,n,i,a,s,r,o,l,c,h,d,f,p){let v=6+o*74,x=Math.max(1,d.cssWidth),m=Math.max(1,d.cssHeight),u=Math.max(2,Math.floor(v*x/yo)),g=Math.max(2,Math.floor(v*m/yo)),y=u*g,_=Math.max(.05,c),w=Math.max(0,Math.min(1,l/_)),U=tc(h,w);e.pixCanvas||(e.pixCanvas=document.createElement("canvas"),e.pixCtx=e.pixCanvas.getContext("2d"));let T=e.pixCanvas,D=e.pixCtx;(T.width!==u||T.height!==g)&&(T.width=u,T.height=g),e.pixDrop||(e.pixDrop=document.createElement("canvas"),e.pixDropCtx=e.pixDrop.getContext("2d"));let M=e.pixDrop,b=e.pixDropCtx;if(M.width!==u||M.height!==g){M.width=u,M.height=g,e.pixDropImgData=b.createImageData(u,g);let Z=e.pixDropImgData.data;for(let F=0;F<Z.length;F+=4)Z[F]=255,Z[F+1]=255,Z[F+2]=255}let C=.07,W=1/(2*C);if(!e.pixDropPattern||e.pixDropPatternW!==u||e.pixDropPatternH!==g||e.pixDropRevealStart!==e.revealStartMs){e.pixDropPattern=new Float32Array(y);let Z=C,F=1-2*C;for(let $=0;$<e.pixDropPattern.length;$++)e.pixDropPattern[$]=Z+Math.random()*F;e.pixDropPatternW=u,e.pixDropPatternH=g,e.pixDropRevealStart=e.revealStartMs}let H=e.pixDropImgData.data,P=e.pixDropPattern;for(let Z=0;Z<P.length;Z++){let F=.5+(P[Z]-U)*W;F<0?F=0:F>1&&(F=1),H[Z*4+3]=F*255+.5|0}b.putImageData(e.pixDropImgData,0,0),D.globalCompositeOperation="source-over",D.clearRect(0,0,u,g),D.imageSmoothingEnabled=!0,D.imageSmoothingQuality="high",D.drawImage(mi(e,"a",n,f,p),0,0,f,p,0,0,u,g),D.globalCompositeOperation="destination-in",D.imageSmoothingEnabled=!1,D.drawImage(M,0,0),D.globalCompositeOperation="source-over",t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="high",t.drawImage(mi(e,"a",n,f,p),0,0),t.imageSmoothingEnabled=!1,t.drawImage(T,0,0,u,g,0,0,f,p),t.imageSmoothingEnabled=!0}function NR(e,t,n,i,a,s,r,o,l,c,h,d,f,p,v,x,m){let u=6+$l(o.pixelConfig.cellSize,d.pixelScale)*74,g=Math.max(1,d.cssWidth),y=Math.max(1,d.cssHeight),_=Math.max(2,Math.floor(u*g/yo)),w=Math.max(2,Math.floor(u*y/yo)),U=_*w,T=Math.max(.05,o.revealConfig.pixDuration),D=Math.max(0,Math.min(1,l/T)),M=tc(o.revealConfig.pixEasing,D);e.pixCanvas||(e.pixCanvas=document.createElement("canvas"),e.pixCtx=e.pixCanvas.getContext("2d"));let b=e.pixCanvas,C=e.pixCtx;(b.width!==_||b.height!==w)&&(b.width=_,b.height=w),e.pixDrop||(e.pixDrop=document.createElement("canvas"),e.pixDropCtx=e.pixDrop.getContext("2d"));let W=e.pixDrop,H=e.pixDropCtx;if(W.width!==_||W.height!==w){W.width=_,W.height=w,e.pixDropImgData=H.createImageData(_,w);let K=e.pixDropImgData.data;for(let et=0;et<K.length;et+=4)K[et]=255,K[et+1]=255,K[et+2]=255}let P=.07,Z=1/(2*P);if(!e.pixDropPattern||e.pixDropPatternW!==_||e.pixDropPatternH!==w||e.pixDropRevealStart!==e.revealStartMs){e.pixDropPattern=new Float32Array(U);let K=P,et=1-2*P;for(let ht=0;ht<e.pixDropPattern.length;ht++)e.pixDropPattern[ht]=K+Math.random()*et;e.pixDropPatternW=_,e.pixDropPatternH=w,e.pixDropRevealStart=e.revealStartMs}let F=e.pixDropImgData.data,$=e.pixDropPattern,B=f>.003&&p!=null;for(let K=0;K<$.length;K++){let et=$[K],ht=.5+(et-M)*Z;if(ht<0?ht=0:ht>1&&(ht=1),B){let gt=1-Math.abs(M-et)*6.25;if(gt>0){let Vt=p(K,v)*(1-m)+p(K,x)*m;ht+=(Vt-.5)*f*1.6*gt,ht<0?ht=0:ht>1&&(ht=1)}}F[K*4+3]=ht*255+.5|0}H.putImageData(e.pixDropImgData,0,0),C.globalCompositeOperation="source-over",C.clearRect(0,0,_,w),C.imageSmoothingEnabled=!0,C.imageSmoothingQuality="high",C.drawImage(mi(e,"a",n,c,h),0,0,c,h,0,0,_,w),C.globalCompositeOperation="destination-in",C.imageSmoothingEnabled=!1,C.drawImage(W,0,0),C.globalCompositeOperation="source-over",t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="high",t.drawImage(mi(e,"a",n,c,h),0,0),t.imageSmoothingEnabled=!1,t.drawImage(b,0,0,_,w,0,0,c,h),t.imageSmoothingEnabled=!0,C.globalCompositeOperation="source-over",C.clearRect(0,0,_,w),C.imageSmoothingEnabled=!0,C.imageSmoothingQuality="high",C.drawImage(e.maskGrad,0,0,_,w),t.imageSmoothingEnabled=!1,t.globalCompositeOperation="destination-in",t.drawImage(b,0,0,_,w,0,0,c,h),t.imageSmoothingEnabled=!0,t.globalCompositeOperation="source-over"}var T0=800,A0=300,IR=1,PR=.5,BR=.03,y1=.6,x1=800,zR=400,FR=1200;function HR(e,t,n,i,a,s){var r;let o=e.image;if(!o)return;let l=n.preset,c=n.canvas.width,h=n.canvas.height;(i.canvas.width!==c||i.canvas.height!==h)&&(i.canvas.width=c,i.canvas.height=h),i.canvas.style.filter="none";let d=6+$l(l.pixelConfig.cellSize,n.pixelScale)*74,f=Math.max(1,n.cssWidth),p=Math.max(1,n.cssHeight),v=Math.max(2,Math.floor(d*f/yo)),x=Math.max(2,Math.floor(d*p/yo)),m=v*x,u=e.pendingReveal,g=u&&e.boilHandoffStartMs>0?s-e.boilHandoffStartMs:-1,y=A=>A*A*(3-2*A),_=g<0?0:y(Math.min(1,g/x1)),w=g<0?-1:g-x1,U=w<=0?0:y(Math.min(1,w/zR)),T=w<=0?0:Math.min(1,w/FR),D=u!=null&&w>0,M=s-e.boilStartMs,b=Math.min(1,M/T0),C=b*b*(3-2*b),W=b<1,H=Math.min(1,Math.max(0,M-(T0-A0))/A0),P=1-H*H*(3-2*H),Z=Math.min(1,Math.max(0,M-(T0-A0))/(IR*1e3)),F=Z*Z*(3-2*Z),$=F*PR;a.style.opacity=String(F),e.pixCanvas||(e.pixCanvas=document.createElement("canvas"),e.pixCtx=e.pixCanvas.getContext("2d"));let B=e.pixCanvas,K=e.pixCtx;(B.width!==v||B.height!==x)&&(B.width=v,B.height=x),e.pixDrop||(e.pixDrop=document.createElement("canvas"),e.pixDropCtx=e.pixDrop.getContext("2d"));let et=e.pixDrop,ht=e.pixDropCtx;if(et.width!==v||et.height!==x||!e.pixDropImgData){et.width=v,et.height=x,e.pixDropImgData=ht.createImageData(v,x);let A=e.pixDropImgData.data;for(let S=0;S<A.length;S+=4)A[S]=255,A[S+1]=255,A[S+2]=255}if(!e.boilPattern||e.boilPatternW!==v||e.boilPatternH!==x){e.boilPattern=new Float32Array(m);for(let A=0;A<m;A++)e.boilPattern[A]=Math.random();e.boilPatternW=v,e.boilPatternH=x}let gt=Math.max(l.flicker??0,.5),Vt=n.accumulatedTime*Math.max(l.speed,2)*1.6,Yt=Math.floor(Vt),z=Yt%1024,nt=(z+1)%1024,Q=Vt-Yt;Q=Q*Q*(3-2*Q);let ct=(A,S)=>{let N=Math.sin(A*127.1+S*17.23)*43758.5453;return N-Math.floor(N)},pt=e.pixDropImgData.data,yt=e.boilPattern,zt=D1(l);O1(e,zt);let tt=e.sampleFrameCounter++,R=e.sampleDataCache==null||tt%3===0,Nt=!e.boilField||e.boilField.length!==m,Mt=R?L1(e,t,n,e.sampleCtx,zt):e.sampleDataCache;if(R||Nt){Nt&&(e.boilField=new Float32Array(m));let A=e.boilField,S=1,N=0;for(let q=0;q<x;q++){let X=Math.min(zt-1,(q+.5)*zt/x|0);for(let bt=0;bt<v;bt++){let rt=Math.min(zt-1,(bt+.5)*zt/v|0),ft=(X*zt+rt)*4,lt=(Mt[ft]*.299+Mt[ft+1]*.587+Mt[ft+2]*.114)/255;A[q*v+bt]=lt,lt<S&&(S=lt),lt>N&&(N=lt)}}let Y=N-S>.001?1/(N-S):0;for(let q=0;q<m;q++)A[q]=Y>0?(A[q]-S)*Y:.5}let Ft=e.boilField,St=1/(2*BR),jt=gt*.6*(1-T),vt=1-y1,It=D?tc(l.revealConfig.pixEasing,T):0,ge=1/(2*.07),fe=l.flicker??0;for(let A=0;A<m;A++){let S=ct(A,z)*(1-Q)+ct(A,nt)*Q,N=.5+(Ft[A]*y1+yt[A]*vt+(S-.5)*jt-$)*St;if(N<0?N=0:N>1&&(N=1),W){let Y=yt[A],q=.5+(C-Y)*ge;q<0?q=0:q>1&&(q=1);let X=1-Math.abs(C-Y)*6.25;X>0&&(q+=(S-.5)*gt*1.6*X,q<0?q=0:q>1&&(q=1)),q<N&&(N=q)}if(D){let Y=yt[A],q=.5+(Y-It)*ge;if(q<0?q=0:q>1&&(q=1),fe>.003){let X=1-Math.abs(It-Y)*6.25;X>0&&(q+=(S-.5)*fe*1.6*X,q<0?q=0:q>1&&(q=1))}q<N&&(N=q)}pt[A*4+3]=N*255+.5|0}ht.putImageData(e.pixDropImgData,0,0),U0(o,c,h),K.globalCompositeOperation="source-over",K.clearRect(0,0,v,x),K.imageSmoothingEnabled=!0,K.imageSmoothingQuality="high",_<1&&K.drawImage(mi(e,"a",o,c,h),0,0,c,h,0,0,v,x),u&&_>0&&(K.globalAlpha=_,K.drawImage(mi(e,"b",u.image,c,h),0,0,c,h,0,0,v,x),K.globalAlpha=1),K.globalCompositeOperation="destination-in",K.imageSmoothingEnabled=!1,K.drawImage(et,0,0),K.globalCompositeOperation="source-over",i.clearRect(0,0,c,h),W&&P>0?(i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.globalAlpha=P,i.drawImage(mi(e,"a",o,c,h),0,0),i.globalAlpha=1):D&&u&&U>0&&(i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.globalAlpha=U,i.drawImage(mi(e,"b",u.image,c,h),0,0),i.globalAlpha=1),i.imageSmoothingEnabled=!1,i.drawImage(B,0,0,v,x,0,0,c,h),i.imageSmoothingEnabled=!0,D&&u&&T>=1&&U>=1&&(e.image=u.image,e.pendingReveal=null,e.boilHandoffStartMs=0,e.holdPaintedImg=null,e.phase="hold",a.style.opacity="0",(r=e.onRevealComplete)==null||r.call(e))}function VR(e){let t=e.canvas.getContext("2d");if(!t)throw new Error("img-fx: 2D context unavailable for reveal canvas");let n={active:!1,phase:"idle",revealStartMs:0,hideStartMs:0,hideDurationMs:300,boilStartMs:0,boilPattern:null,boilPatternW:0,boilPatternH:0,boilField:null,boilHandoffStartMs:0,pendingReveal:null,image:null,cssWidth:e.cssWidth,cssHeight:e.cssHeight,sampleCanvas:null,sampleCtx:null,sampleImgData:null,sampleDataCache:null,sampleFrameCounter:0,maskGrad:null,maskGradCtx:null,maskImgData:null,gsFlickerTable:null,pixCanvas:null,pixCtx:null,pixDrop:null,pixDropCtx:null,pixDropImgData:null,pixDropPattern:null,pixDropPatternW:0,pixDropPatternH:0,pixDropRevealStart:-1,coverA:null,coverB:null,holdPaintedImg:null,holdPaintedW:0,holdPaintedH:0,sampleGpuCanvas:null,sampleGpuCtx:null},i=e.shaderCanvas;function a(s){n.image=s.image,n.cssWidth=s.cssWidth,n.cssHeight=s.cssHeight,n.onRevealComplete=s.onRevealComplete,n.revealStartMs=performance.now(),n.phase="reveal",n.active=!0,n.boilHandoffStartMs=0,n.pendingReveal=null,n.sampleFrameCounter=0,n.sampleDataCache=null,n.holdPaintedImg=null,t.canvas.style.opacity="1"}return{canvas:e.canvas,ctx:t,afterShaderFrame(s,r,o){var l;if(n.cssWidth=r.cssWidth,n.cssHeight=r.cssHeight,!n.active){t.canvas.style.filter="none";return}let{duration:c,easingKey:h}=U1(r.preset);if(n.phase==="reveal"&&n.image){let d=(o-n.revealStartMs)/1e3,f=Math.min(d/c,1),p=tc(h,f);i.style.opacity=String(1-p),LR(n,s,r,t),f>=1&&(n.phase="hold",i.style.opacity="0",(l=n.onRevealComplete)==null||l.call(n))}else if(n.phase==="hold"&&n.image){t.canvas.style.filter="none";let d=n.image,f=r.canvas.width,p=r.canvas.height;(t.canvas.width!==f||t.canvas.height!==p)&&(t.canvas.width=f,t.canvas.height=p,n.holdPaintedImg=null),(n.holdPaintedImg!==d||n.holdPaintedW!==f||n.holdPaintedH!==p)&&(t.clearRect(0,0,f,p),t.globalCompositeOperation="source-over",t.globalAlpha=1,t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="high",t.drawImage(mi(n,"a",d,f,p),0,0),n.holdPaintedImg=d,n.holdPaintedW=f,n.holdPaintedH=p),i.style.opacity="0"}else if(n.phase==="boil"&&n.image)HR(n,s,r,t,i,o);else if(n.phase==="hide"){let d=o-n.hideStartMs,f=Math.min(d/Math.max(1,n.hideDurationMs),1),p=1-f;t.canvas.style.opacity=String(p),i.style.opacity=String(f),f>=1&&(n.active=!1,n.phase="idle",t.canvas.style.opacity="1",t.clearRect(0,0,t.canvas.width,t.canvas.height),i.style.opacity="1",n.image=null)}},startReveal(s){if(n.phase==="boil"&&n.active){n.pendingReveal=s,n.onRevealComplete=s.onRevealComplete,n.cssWidth=s.cssWidth,n.cssHeight=s.cssHeight,n.boilHandoffStartMs===0&&(n.boilHandoffStartMs=performance.now());return}a(s)},startHide(s=300){!n.active||n.phase==="hide"||(n.phase="hide",n.hideStartMs=performance.now(),n.hideDurationMs=s)},startBoil(){!n.active||!n.image||n.phase!=="hold"&&n.phase!=="reveal"||(n.phase="boil",n.boilStartMs=performance.now(),n.boilHandoffStartMs=0,n.pendingReveal=null,n.boilPattern=null,n.sampleFrameCounter=0,n.sampleDataCache=null,n.holdPaintedImg=null,t.canvas.style.opacity="1")},clear(){let s=n.active;n.active=!1,n.phase="idle",n.image=null,n.boilHandoffStartMs=0,n.pendingReveal=null,n.holdPaintedImg=null,t.clearRect(0,0,t.canvas.width,t.canvas.height),s&&(t.canvas.style.filter="none",t.canvas.style.opacity="1",i.style.opacity="1")},isActive(){return n.active},dispose(){n.image=null,n.sampleCanvas=null,n.sampleCtx=null,n.sampleImgData=null,n.sampleDataCache=null,n.sampleFrameCounter=0,n.maskGrad=null,n.maskGradCtx=null,n.maskImgData=null,n.gsFlickerTable=null,n.pixCanvas=null,n.pixCtx=null,n.pixDrop=null,n.pixDropCtx=null,n.pixDropImgData=null,n.pixDropPattern=null,n.boilPattern=null,n.boilField=null,n.pendingReveal=null,n.coverA=null,n.coverB=null,n.holdPaintedImg=null,n.sampleGpuCanvas=null,n.sampleGpuCtx=null}}}function S1(e,t){if(e.length===0)return null;if(e.length===1)return{src:e[0],idx:0};let n;do n=Math.floor(Math.random()*e.length);while(n===t);return{src:e[n],idx:n}}function GR(e){let t=e.images.slice(),n=e.delayRange,i=e.holdMs,a=e.fadeOutMs,s=e.onPhase,r=e.excludeSrcs,o="idle",l=null,c=-1,h=!1,d=!1,f=null,p=!1,v="auto";function x(T){o=T,s?.({phase:T,src:f})}function m(){l!=null&&(clearTimeout(l),l=null)}function u(){if(typeof i=="number")return Math.max(0,i);let[T,D]=i,M=Math.max(0,Math.min(T,D)),b=Math.max(0,Math.max(T,D));return M+Math.random()*(b-M)}function g(T){if(!h||d)return;x("idle");let[D,M]=n,b=D+Math.random()*Math.max(0,M-D),C=T??b*1e3;m(),l=setTimeout(()=>{l=null,w(!0,"auto")},C)}function y(){d||(x("hide"),e.reveal.startHide(a),m(),l=setTimeout(()=>{l=null,!d&&(f=null,p?g():(h=!1,x("idle")))},a))}function _(){if(t.length===0)return null;let T=r?.(),D=T==null?null:T instanceof Set?T:new Set(T);if(!D||D.size===0)return S1(t,c);let M=c>=0&&c<t.length?t[c]:null,b=[];for(let W=0;W<t.length;W++){let H=t[W];D.has(H)||H===M&&t.length>D.size+1||b.push(W)}if(b.length===0)return S1(t,c);let C=b[Math.floor(Math.random()*b.length)];return{src:t[C],idx:C}}function w(T,D){if(!h||d)return;if(t.length===0){T?g(500):h=!1;return}let M=_();if(!M){T?g(500):h=!1;return}c=M.idx,f=M.src,p=T,v=D,DR(M.src).then(b=>{!h||d||(x("reveal"),e.reveal.startReveal({image:b,cssWidth:e.reveal.canvas.clientWidth||e.reveal.canvas.width,cssHeight:e.reveal.canvas.clientHeight||e.reveal.canvas.height,onRevealComplete:()=>{if(!h||d)return;if(x("visible"),D==="manual"){m();return}m();let C=u();l=setTimeout(()=>{l=null,!(!h||d)&&y()},C)}}))}).catch(()=>{f=null,T?g(500):h=!1})}function U(T){if(d||o==="reveal"||o==="visible"||o==="hide")return;let D=h;m(),D||(h=!0),w(D,T?.hold??"auto")}return{start(){if(h)return;h=!0,d=!1;let T=e.initialDelayMs??Math.random()*1500;g(T)},stop(){h=!1,m(),e.reveal.clear(),f=null,o="idle"},triggerOnce(T){U(T)},triggerHide(){d||o!=="reveal"&&o!=="visible"||y()},triggerBoil(T){if(d||o!=="reveal"&&o!=="visible")return;m(),e.reveal.startBoil(),f=null,h=!1,x("idle");let D=T?.autoRevealAfterMs;D!=null&&Number.isFinite(D)&&(l=setTimeout(()=>{l=null,U({hold:"manual"})},Math.max(0,D)))},getPhase(){return o},setPaused(T){if(d!==T){if(d=T,d)m();else if(h)if(o==="visible"){if(v==="manual")return;m(),l=setTimeout(()=>{l=null,y()},Math.min(u(),500))}else o==="hide"?(m(),l=setTimeout(()=>{l=null,f=null,g()},a)):g()}},setImages(T){t=T.slice(),c=-1},setExcludeSrcs(T){r=T??void 0},setOptions(T){T.delayRange&&(n=T.delayRange),T.holdMs!=null&&(i=T.holdMs),T.fadeOutMs!=null&&(a=T.fadeOutMs),T.onPhase&&(s=T.onPhase)},isRunning(){return h&&!d},dispose(){h=!1,m()}}}var M1=(e,t,n)=>.299*e+.587*t+.114*n,b1=(e,t,n)=>`#${[e,t,n].map(i=>Math.round(i).toString(16).padStart(2,"0")).join("")}`,as=24,xf=null,w0=null;function kR(){return w0||(typeof document>"u"?null:(xf=document.createElement("canvas"),xf.width=as,xf.height=as,w0=xf.getContext("2d",{willReadFrequently:!0}),w0))}function WR(e,t){if(e.width===0||e.height===0)return null;let n=kR();if(!n)return null;n.imageSmoothingEnabled=!0,n.clearRect(0,0,as,as),n.drawImage(e,0,0,as,as);let i;try{i=n.getImageData(0,0,as,as).data}catch{return null}let a=[],s=0,r=0,o=0;for(let d=0;d<i.length;d+=4){if(i[d+3]<8)continue;let f=i[d],p=i[d+1],v=i[d+2];a.push({r:f,g:p,b:v,lum:M1(f,p,v)}),s+=f,r+=p,o+=v}if(a.length===0)return null;a.sort((d,f)=>d.lum-f.lum);let l=b1(s/a.length,r/a.length,o/a.length),c=t.map((d,f)=>{let[p,v,x]=Zs(d);return{slot:f,lum:M1(p,v,x)}}).sort((d,f)=>d.lum-f.lum),h=new Array(c.length);for(let d=0;d<c.length;d++){let f=.05+.9*d/Math.max(1,c.length-1),p=a[Math.min(a.length-1,Math.round(f*(a.length-1)))];h[c[d].slot]=b1(p.r,p.g,p.b)}return{colors:h,cardBg:l}}var E1="img-fx-styles",XR=`
.image-gen-root {
  position: relative;
  display: inline-block;
  isolation: isolate;
  overflow: hidden;
  vertical-align: top;
  line-height: 0;
  flex: 0 0 auto;
}

.image-gen-root > .image-gen-shader,
.image-gen-root > .image-gen-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-radius: inherit;
  display: block;
}

.image-gen-root > .image-gen-shader {
  z-index: 1;
}

.image-gen-root > .image-gen-overlay {
  z-index: 2;
}

.image-gen-root > .image-gen-child {
  position: relative;
  z-index: 0;
  display: block;
  line-height: normal;
}
`,C0=!1;function N1(){if(typeof document>"u"||C0)return;if(document.getElementById(E1)){C0=!0;return}let e=document.createElement("style");e.id=E1,e.textContent=XR,document.head.appendChild(e),C0=!0}N1();function T1(){if(typeof document>"u")return"dark";let e=document.documentElement,t=e.getAttribute("data-theme");if(t==="dark"||t==="light")return t;if(e.classList.contains("dark"))return"dark";if(e.classList.contains("light"))return"light";let n=e.style.colorScheme||getComputedStyle(e).colorScheme;return n==="dark"?"dark":n==="light"?"light":typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark"}function qR(e){let[t,n]=(0,Bt.useState)(()=>e!=="auto"?e:T1());return(0,Bt.useEffect)(()=>{if(e!=="auto"){n(e);return}if(typeof window>"u")return;let i=()=>n(T1());i();let a=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null;a?.addEventListener("change",i);let s=null;return typeof document<"u"&&typeof MutationObserver<"u"&&(s=new MutationObserver(i),s.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]})),()=>{a?.removeEventListener("change",i),s?.disconnect()}},[e]),t}function YR(e){return e?typeof e=="string"?[e]:e.slice():[]}var R0=["pixels-mechanic","pixels-organic"];function ZR(e){return R0.includes(e)}var L0=(0,Bt.forwardRef)(function({children:e,preset:t="pixels-organic",theme:n="auto",strength:i=1,pixelScale:a=1,cardBg:s,colors:r,images:o,autoReveal:l=!1,revealDelayRange:c=[2,4],revealInitialDelay:h,revealHoldMs:d=2e3,revealFadeOutMs:f=300,borderRadius:p,paused:v=!1,onCycle:x,excludeSrcs:m,className:u,style:g,...y},_){let w=(0,Bt.useRef)(null),U=(0,Bt.useRef)(null),T=(0,Bt.useRef)(null),D=(0,Bt.useRef)(null),M=(0,Bt.useRef)(null),b=(0,Bt.useRef)(null),C=(0,Bt.useRef)(null),W=(0,Bt.useRef)(x),H=(0,Bt.useRef)(m),[P,Z]=(0,Bt.useState)(null),[F,$]=(0,Bt.useState)(null);(0,Bt.useImperativeHandle)(_,()=>({get element(){return w.current},triggerReveal(tt){var R;(R=C.current)==null||R.triggerOnce(tt)},triggerHide(){var tt;(tt=C.current)==null||tt.triggerHide()},triggerRegenerate(tt){let R=C.current;if(!R||Yt.current)return;let Nt=R.getPhase();if(Nt!=="reveal"&&Nt!=="visible")return;let Mt=gt.current,Ft=ZR(Mt)?null:R0[Math.floor(Math.random()*R0.length)];if(tt?.tintFromImage??!0){let jt=T.current;if(jt){let vt=Ft?b0[Ft].modes[Vt.current].colors:ht.current.colors,It=WR(jt,vt);It&&Z(It)}}Ft&&$(Ft);let St=tt?.autoReveal??!0;R.triggerBoil(St?{autoRevealAfterMs:tt?.durationMs??4e3}:void 0)},isImageActive(){var tt;let R=((tt=C.current)==null?void 0:tt.getPhase())??"idle";return R==="reveal"||R==="visible"||R==="hide"}}),[]),(0,Bt.useLayoutEffect)(()=>{N1()},[]),(0,Bt.useEffect)(()=>{W.current=x},[x]),(0,Bt.useEffect)(()=>{H.current=m},[m]);let B=qR(n),K=(0,Bt.useMemo)(()=>b0[t].modes[B],[t,B]),et=s??K.cardBg,ht=(0,Bt.useRef)(K);ht.current=K;let gt=(0,Bt.useRef)(t);gt.current=t;let Vt=(0,Bt.useRef)(B);Vt.current=B;let Yt=(0,Bt.useRef)(v);Yt.current=v;let z=(0,Bt.useMemo)(()=>YR(o),[o]),nt=(0,Bt.useRef)(z),Q=(0,Bt.useRef)(c),ct=(0,Bt.useRef)(d),pt=(0,Bt.useRef)(f);nt.current=z,Q.current=c,ct.current=d,pt.current=f;let yt=(0,Bt.useRef)((0,Bt.useMemo)(()=>{if(h==null)return;if(typeof h=="number")return Math.max(0,h)*1e3;let[tt,R]=h,Nt=Math.max(0,Math.min(tt,R)),Mt=Math.max(0,Math.max(tt,R));return(Nt+Math.random()*(Mt-Nt))*1e3},[]));(0,Bt.useLayoutEffect)(()=>{var tt;let R=w.current,Nt=U.current,Mt=T.current;if(!R||!Nt||!Mt)return;let Ft=()=>{var ft;let lt=R.getBoundingClientRect(),it=Math.max(1,Math.round(lt.width)),_t=Math.max(1,Math.round(lt.height)),Dt=0;if(typeof p=="number")Dt=p;else{let wt=(ft=D.current)==null?void 0:ft.firstElementChild;if(wt){let ut=parseFloat(getComputedStyle(wt).borderTopLeftRadius);Number.isFinite(ut)&&ut>0&&(Dt=ut)}if(Dt===0){let ut=parseFloat(getComputedStyle(R).borderTopLeftRadius);Number.isFinite(ut)&&ut>0&&(Dt=ut)}}return{w:it,h:_t,r:Dt}},St=Ft(),jt=vR({canvas:Nt,cssWidth:St.w,cssHeight:St.h,preset:K,strength:i,cardBg:s??null,pixelScale:a});M.current=jt,jt.canvas.style.opacity=String(Math.max(0,Math.min(1,i)));let vt=VR({canvas:Mt,cssWidth:St.w,cssHeight:St.h,shaderCanvas:Nt});jt.reveal=vt,b.current=vt;let It=GR({reveal:vt,images:nt.current,delayRange:Q.current,holdMs:ct.current,fadeOutMs:pt.current,initialDelayMs:yt.current,onPhase:ft=>{var lt;ft.phase==="visible"&&(Z(null),$(null)),(lt=W.current)==null||lt.call(W,ft)},excludeSrcs:()=>{var ft;return((ft=H.current)==null?void 0:ft.call(H))??null}});C.current=It,v&&It.setPaused(!0),R.style.setProperty("--image-gen-radius",`${St.r}px`),R.style.borderRadius=`${St.r}px`;let ge=0,fe=-1,A=-1,S=-1,N=()=>{ge=0;let ft=M.current;if(!ft)return;let lt=Ft();(lt.w!==fe||lt.h!==A)&&(yR(ft,lt.w,lt.h),fe=lt.w,A=lt.h),lt.r!==S&&(R.style.setProperty("--image-gen-radius",`${lt.r}px`),R.style.borderRadius=`${lt.r}px`,S=lt.r)},Y=()=>{ge===0&&(ge=requestAnimationFrame(N))},q=new ResizeObserver(Y);q.observe(R);let X=(tt=D.current)==null?void 0:tt.firstElementChild;X&&q.observe(X);let bt=null;X&&typeof MutationObserver<"u"&&(bt=new MutationObserver(Y),bt.observe(X,{attributes:!0,attributeFilter:["class","style"]})),fe=St.w,A=St.h,S=St.r;let rt=null;return typeof IntersectionObserver<"u"&&(rt=new IntersectionObserver(ft=>{let lt=M.current;if(lt)for(let it of ft)bR(lt,it.isIntersecting)},{rootMargin:"64px"}),rt.observe(R)),()=>{var ft;q.disconnect(),bt?.disconnect(),rt?.disconnect(),ge!==0&&cancelAnimationFrame(ge),(ft=C.current)==null||ft.dispose(),C.current=null,vt.dispose(),b.current=null;let lt=M.current;lt&&_R(lt),M.current=null}},[]),(0,Bt.useEffect)(()=>{let tt=M.current;if(!tt)return;let R=F?b0[F].modes[B]:K;xR(tt,R),yf(tt)},[K,F,B]),(0,Bt.useEffect)(()=>{let tt=M.current;tt&&(SR(tt,P?.cardBg??s??null),yf(tt))},[s,P]),(0,Bt.useEffect)(()=>{let tt=M.current;tt&&(MR(tt,P?.colors??r??null),yf(tt))},[r,P]),(0,Bt.useEffect)(()=>{let tt=M.current;tt&&(TR(tt,i),tt.canvas&&(tt.canvas.style.opacity=String(Math.max(0,Math.min(1,i)))))},[i]),(0,Bt.useEffect)(()=>{let tt=M.current;tt&&(AR(tt,a),yf(tt))},[a]),(0,Bt.useEffect)(()=>{var tt;let R=M.current;R&&ER(R,v),(tt=C.current)==null||tt.setPaused(v)},[v]),(0,Bt.useEffect)(()=>{var tt;(tt=C.current)==null||tt.setImages(z)},[z]),(0,Bt.useEffect)(()=>{var tt;(tt=C.current)==null||tt.setOptions({delayRange:c,holdMs:d,fadeOutMs:f})},[c,d,f]),(0,Bt.useEffect)(()=>{let tt=C.current;if(tt){if(l)return tt.start(),()=>tt.stop();tt.stop()}},[l]);let zt=(0,Bt.useMemo)(()=>({background:P?.cardBg??et,...g}),[et,P,g]);return(0,_o.jsxs)("div",{...y,ref:w,className:["image-gen-root",u].filter(Boolean).join(" "),"data-preset":t,"data-theme":B,"data-paused":v?"true":void 0,style:zt,children:[(0,_o.jsx)("canvas",{ref:U,className:"image-gen-shader","aria-hidden":"true"}),(0,_o.jsx)("canvas",{ref:T,className:"image-gen-overlay","aria-hidden":"true"}),(0,_o.jsx)("div",{ref:D,className:"image-gen-child",children:e})]})});L0.displayName="ImageGeneration";var ss=_i(js());function I1(...e){return e.filter(Boolean).join(" ")}var nn=_i(kr()),JR=["#5eead4","#46baec","#e633a4","#00faa7"];function P1(e){return[parseInt(e.slice(1,3),16),parseInt(e.slice(3,5),16),parseInt(e.slice(5,7),16)]}function B1({children:e,active:t=!0,colors:n=JR,speed:i=4.5,intensity:a=.7,bloom:s=16,bloomStrength:r=.3,arc:o=120,reverse:l=!1,radius:c,line:h=2.5,bloomOnly:d=!1,surface:f=!0,taper:p=0,blend:v,offset:x=0,className:m}){let u=`bui-cl-${(0,ss.useId)().replace(/[^a-zA-Z0-9]/g,"")}`,g=(0,ss.useRef)(null),[y,_]=(0,ss.useState)({w:640,h:52});(0,ss.useEffect)(()=>{let gt=g.current;if(!gt)return;let Vt=new ResizeObserver(()=>_({w:Math.max(1,gt.clientWidth),h:Math.max(1,gt.clientHeight)}));return Vt.observe(gt),()=>Vt.disconnect()},[]);let[w,U,T,D]=n,M=`rgb(${P1(U).map((gt,Vt)=>Math.round((gt+P1(T)[Vt])/2)).join(",")})`,b=o/360*100,C=c??y.h/2,W=c??9999,H=l?"reverse":"normal",P=Math.min(C,y.w/2,y.h/2),Z=Math.max(1,2*(y.w+y.h)-8*P+2*Math.PI*P),F=gt=>gt*100/Z,$=(gt,Vt)=>(l?F(Vt):gt-b+F(Vt))-x*100,B=14,K=p>0?Math.max(.5,h*.8):.5,et=(gt,Vt,Yt,z,nt)=>{let Q=p>0?B:1;return Array.from({length:Q},(ct,pt)=>{let yt=z*(1-p*pt/Q),zt=$(z,nt)-(z-yt)/2;return(0,nn.jsx)("rect",{x:0,y:0,width:y.w,height:y.h,rx:C,pathLength:100,fill:"none",stroke:`url(#${u})`,strokeWidth:gt,strokeLinecap:"round",strokeDasharray:`${yt} ${100-yt}`,className:"bui-composer-loader-rect",filter:Vt>0?`url(#${u}-b${String(Vt).replace(".","_")})`:void 0,style:{opacity:Yt/Q,animation:`bui-composer-loader-dash ${i}s linear ${zt*i/100}s infinite ${H}`}},pt)})},ht=gt=>(0,nn.jsx)("filter",{id:`${u}-b${String(gt).replace(".","_")}`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:(0,nn.jsx)("feGaussianBlur",{stdDeviation:gt})},gt);return(0,nn.jsxs)("div",{className:I1("relative",m),children:[f&&(0,nn.jsx)("span",{"aria-hidden":!0,className:"absolute inset-0 bg-background-primary-default shadow-xs",style:{borderRadius:W}}),(0,nn.jsx)("span",{ref:g,"aria-hidden":!0,className:"pointer-events-none absolute inset-0 overflow-hidden",style:{borderRadius:W,opacity:t?1:0,transition:"opacity 450ms ease",mixBlendMode:v},children:(0,nn.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${y.w} ${y.h}`,preserveAspectRatio:"none",style:{opacity:a},children:[(0,nn.jsxs)("defs",{children:[(0,nn.jsxs)("linearGradient",{id:u,x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,nn.jsx)("stop",{offset:"0%",stopColor:w}),(0,nn.jsx)("stop",{offset:"30%",stopColor:U}),(0,nn.jsx)("stop",{offset:"50%",stopColor:M}),(0,nn.jsx)("stop",{offset:"70%",stopColor:T}),(0,nn.jsx)("stop",{offset:"100%",stopColor:D})]}),[14,6,K].map(ht)]}),s>0&&et(s*2,14,r,b*.9,s+16),!d&&et(h*3.2,6,.8,b*.95,10),!d&&et(h,K,1,b,0)]})}),(0,nn.jsx)("div",{className:"relative",children:e})]})}var ri=_i(kr());function H1({label:e}){return(0,ri.jsx)("div",{className:"canvas-ai-library-still",children:(0,ri.jsx)("span",{children:e})})}var O0=class extends rs.Component{constructor(){super(...arguments);H0(this,"state",{failed:!1})}static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(n){this.props.onError(n)}render(){return this.state.failed?(0,ri.jsx)(H1,{label:"Animation unavailable"}):this.props.children}};function KR({effect:e,imageUrl:t,onComplete:n,onReducedMotion:i}){let[a,s]=(0,rs.useState)(()=>matchMedia("(prefers-reduced-motion: reduce)").matches),[r,o]=(0,rs.useState)(document.hidden);return(0,rs.useEffect)(()=>{let l=matchMedia("(prefers-reduced-motion: reduce)"),c=()=>s(l.matches),h=()=>o(document.hidden);return l.addEventListener("change",c),document.addEventListener("visibilitychange",h),()=>{l.removeEventListener("change",c),document.removeEventListener("visibilitychange",h)}},[]),(0,rs.useEffect)(()=>i(a),[a,i]),a?(0,ri.jsx)(H1,{label:"Generating image\u2026"}):e==="composer"?(0,ri.jsx)("div",{className:"canvas-ai-composer-host","data-paused":r,children:(0,ri.jsx)(B1,{active:!0,radius:0,surface:!1,className:"canvas-ai-composer-loader",children:(0,ri.jsx)("div",{style:{width:"100%",height:"100%"}})})}):(0,ri.jsx)(L0,{preset:"pixels-organic",theme:"light",images:[t],autoReveal:!0,revealInitialDelay:1.1,revealDelayRange:[1.1,1.1],revealHoldMs:6e4,borderRadius:0,paused:r,style:{width:"100%",height:"100%"},onCycle:({phase:l})=>{l==="visible"&&n()},children:(0,ri.jsx)("div",{style:{width:"100%",height:"100%",borderRadius:0}})})}function QR(e,t){let n=!1,i=!1,a,s,r=(0,z1.createRoot)(e),o=()=>{n||i||(i=!0,a=window.setTimeout(()=>{n||t.onComplete()},0))},l=d=>{window.clearTimeout(s),(t.effect==="composer"||d)&&(s=window.setTimeout(o,4100))},c=d=>{console.warn("Canvas loading animation unavailable:",d),e.dataset.renderer="fallback",window.clearTimeout(s),s=window.setTimeout(o,4100)};e.dataset.renderer=t.effect,(0,F1.flushSync)(()=>r.render((0,ri.jsx)(O0,{onError:c,children:(0,ri.jsx)(KR,{...t,onComplete:o,onReducedMotion:l})})));let h=window.setTimeout(o,15e3);return()=>{n=!0,window.clearTimeout(s),window.clearTimeout(a),window.clearTimeout(h),r.unmount(),delete e.dataset.renderer}}Object.assign(window,{CanvasLibraryLoaders:{mount:QR}});})();
/*! For license information please see canvas-library-loaders.bundle.js.LEGAL.txt */
