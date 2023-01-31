var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}function n(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}var i={},r={},o=t.parcelRequired7c6;function s(t,e){return function(){return t.apply(e,arguments)}}null==o&&((o=function(t){if(t in i)return i[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},t.parcelRequired7c6=o);const{toString:a}=Object.prototype,{getPrototypeOf:l}=Object,c=(u=Object.create(null),t=>{const e=a.call(t);return u[e]||(u[e]=e.slice(8,-1).toLowerCase())});var u;const h=t=>(t=t.toLowerCase(),e=>c(e)===t),d=t=>e=>typeof e===t,{isArray:f}=Array,p=d("undefined");const m=h("ArrayBuffer");const g=d("string"),y=d("function"),v=d("number"),b=t=>null!==t&&"object"==typeof t,w=t=>{if("object"!==c(t))return!1;const e=l(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},x=h("Date"),k=h("File"),E=h("Blob"),I=h("FileList"),S=h("URLSearchParams");function T(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let i,r;if("object"!=typeof t&&(t=[t]),f(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let s;for(i=0;i<o;i++)s=r[i],e.call(null,t[s],s,t)}}function C(t,e){e=e.toLowerCase();const n=Object.keys(t);let i,r=n.length;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const _="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,N=t=>!p(t)&&t!==_;const A=(D="undefined"!=typeof Uint8Array&&l(Uint8Array),t=>D&&t instanceof D);var D;const R=h("HTMLFormElement"),L=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),O=h("RegExp"),M=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};T(n,((n,r)=>{!1!==e(n,r,t)&&(i[r]=n)})),Object.defineProperties(t,i)};var P={isArray:f,isArrayBuffer:m,isBuffer:function(t){return null!==t&&!p(t)&&null!==t.constructor&&!p(t.constructor)&&y(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{const e="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||a.call(t)===e||y(t.toString)&&t.toString()===e)},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&m(t.buffer),e},isString:g,isNumber:v,isBoolean:t=>!0===t||!1===t,isObject:b,isPlainObject:w,isUndefined:p,isDate:x,isFile:k,isBlob:E,isRegExp:O,isFunction:y,isStream:t=>b(t)&&y(t.pipe),isURLSearchParams:S,isTypedArray:A,isFileList:I,forEach:T,merge:function t(){const{caseless:e}=N(this)&&this||{},n={},i=(i,r)=>{const o=e&&C(n,r)||r;w(n[o])&&w(i)?n[o]=t(n[o],i):w(i)?n[o]=t({},i):f(i)?n[o]=i.slice():n[o]=i};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&T(arguments[t],i);return n},extend:(t,e,n,{allOwnKeys:i}={})=>(T(e,((e,i)=>{n&&y(e)?t[i]=s(e,n):t[i]=e}),{allOwnKeys:i}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,i)=>{let r,o,s;const a={};if(e=e||{},null==t)return e;do{for(r=Object.getOwnPropertyNames(t),o=r.length;o-- >0;)s=r[o],i&&!i(s,t,e)||a[s]||(e[s]=t[s],a[s]=!0);t=!1!==n&&l(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:c,kindOfTest:h,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return-1!==i&&i===n},toArray:t=>{if(!t)return null;if(f(t))return t;let e=t.length;if(!v(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=n.next())&&!i.done;){const n=i.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const i=[];for(;null!==(n=t.exec(e));)i.push(n);return i},isHTMLForm:R,hasOwnProperty:L,hasOwnProp:L,reduceDescriptors:M,freezeMethods:t=>{M(t,((e,n)=>{if(y(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=t[n];y(i)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},i=t=>{t.forEach((t=>{n[t]=!0}))};return f(t)?i(t):i(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:C,global:_,isContextDefined:N,toJSONObject:t=>{const e=new Array(10),n=(t,i)=>{if(b(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[i]=t;const r=f(t)?[]:{};return T(t,((t,e)=>{const o=n(t,i+1);!p(o)&&(r[e]=o)})),e[i]=void 0,r}}return t};return n(t,0)}};function B(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}P.inherits(B,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const F=B.prototype,U={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{U[t]={value:t}})),Object.defineProperties(B,U),Object.defineProperty(F,"isAxiosError",{value:!0}),B.from=(t,e,n,i,r,o)=>{const s=Object.create(F);return P.toFlatObject(t,s,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),B.call(s,t.message,e,n,i,r),s.cause=t,s.name=t.name,o&&Object.assign(s,o),s};var j,z,W,H=B,V=e("object"==typeof self?self.FormData:window.FormData);z=function(t){var e,n,i=Z(t),r=i[0],o=i[1],s=new Y(function(t,e,n){return 3*(e+n)/4-n}(0,r,o)),a=0,l=o>0?r-4:r;for(n=0;n<l;n+=4)e=K[t.charCodeAt(n)]<<18|K[t.charCodeAt(n+1)]<<12|K[t.charCodeAt(n+2)]<<6|K[t.charCodeAt(n+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=255&e;2===o&&(e=K[t.charCodeAt(n)]<<2|K[t.charCodeAt(n+1)]>>4,s[a++]=255&e);1===o&&(e=K[t.charCodeAt(n)]<<10|K[t.charCodeAt(n+1)]<<4|K[t.charCodeAt(n+2)]>>2,s[a++]=e>>8&255,s[a++]=255&e);return s},W=function(t){for(var e,n=t.length,i=n%3,r=[],o=16383,s=0,a=n-i;s<a;s+=o)r.push(tt(t,s,s+o>a?a:s+o));1===i?(e=t[n-1],r.push(X[e>>2]+X[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],r.push(X[e>>10]+X[e>>4&63]+X[e<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var $,q,X=[],K=[],Y="undefined"!=typeof Uint8Array?Uint8Array:Array,G="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",J=0,Q=G.length;J<Q;++J)X[J]=G[J],K[G.charCodeAt(J)]=J;function Z(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function tt(t,e,n){for(var i,r,o=[],s=e;s<n;s+=3)i=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]),o.push(X[(r=i)>>18&63]+X[r>>12&63]+X[r>>6&63]+X[63&r]);return o.join("")}K["-".charCodeAt(0)]=62,K["_".charCodeAt(0)]=63,$=function(t,e,n,i,r){var o,s,a=8*r-i-1,l=(1<<a)-1,c=l>>1,u=-7,h=n?r-1:0,d=n?-1:1,f=t[e+h];for(h+=d,o=f&(1<<-u)-1,f>>=-u,u+=a;u>0;o=256*o+t[e+h],h+=d,u-=8);for(s=o&(1<<-u)-1,o>>=-u,u+=i;u>0;s=256*s+t[e+h],h+=d,u-=8);if(0===o)o=1-c;else{if(o===l)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,i),o-=c}return(f?-1:1)*s*Math.pow(2,o-i)},q=function(t,e,n,i,r,o){var s,a,l,c=8*o-r-1,u=(1<<c)-1,h=u>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:o-1,p=i?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=u):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),(e+=s+h>=1?d/l:d*Math.pow(2,1-h))*l>=2&&(s++,l/=2),s+h>=u?(a=0,s=u):s+h>=1?(a=(e*l-1)*Math.pow(2,r),s+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,r),s=0));r>=8;t[n+f]=255&a,f+=p,a/=256,r-=8);for(s=s<<r|a,c+=r;c>0;t[n+f]=255&s,f+=p,s/=256,c-=8);t[n+f-p]|=128*m};const et="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;j=it;function nt(t){if(t>2147483647)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,it.prototype),e}function it(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return st(t)}return rt(t,e,n)}function rt(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!it.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|ut(t,e);let i=nt(n);const r=i.write(t,e);r!==n&&(i=i.slice(0,r));return i}(t,e);if(ArrayBuffer.isView(t))return function(t){if(Ht(t,Uint8Array)){const e=new Uint8Array(t);return lt(e.buffer,e.byteOffset,e.byteLength)}return at(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Ht(t,ArrayBuffer)||t&&Ht(t.buffer,ArrayBuffer))return lt(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(Ht(t,SharedArrayBuffer)||t&&Ht(t.buffer,SharedArrayBuffer)))return lt(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return it.from(i,e,n);const r=function(t){if(it.isBuffer(t)){const e=0|ct(t.length),n=nt(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||Vt(t.length)?nt(0):at(t);if("Buffer"===t.type&&Array.isArray(t.data))return at(t.data)}(t);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return it.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function ot(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function st(t){return ot(t),nt(t<0?0:0|ct(t))}function at(t){const e=t.length<0?0:0|ct(t.length),n=nt(e);for(let i=0;i<e;i+=1)n[i]=255&t[i];return n}function lt(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(i,it.prototype),i}function ct(t){if(t>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|t}function ut(t,e){if(it.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Ht(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return jt(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return zt(t).length;default:if(r)return i?-1:jt(t).length;e=(""+e).toLowerCase(),r=!0}}function ht(t,e,n){let i=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return It(this,e,n);case"utf8":case"utf-8":return xt(this,e,n);case"ascii":return kt(this,e,n);case"latin1":case"binary":return Et(this,e,n);case"base64":return wt(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return St(this,e,n);default:if(i)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function dt(t,e,n){const i=t[e];t[e]=t[n],t[n]=i}function ft(t,e,n,i,r){if(0===t.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Vt(n=+n)&&(n=r?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(r)return-1;n=t.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof e&&(e=it.from(e,i)),it.isBuffer(e))return 0===e.length?-1:pt(t,e,n,i,r);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):pt(t,[e],n,i,r);throw new TypeError("val must be string, number or Buffer")}function pt(t,e,n,i,r){let o,s=1,a=t.length,l=e.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(t.length<2||e.length<2)return-1;s=2,a/=2,l/=2,n/=2}function c(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(r){let i=-1;for(o=n;o<a;o++)if(c(t,o)===c(e,-1===i?0:o-i)){if(-1===i&&(i=o),o-i+1===l)return i*s}else-1!==i&&(o-=o-i),i=-1}else for(n+l>a&&(n=a-l),o=n;o>=0;o--){let n=!0;for(let i=0;i<l;i++)if(c(t,o+i)!==c(e,i)){n=!1;break}if(n)return o}return-1}function mt(t,e,n,i){n=Number(n)||0;const r=t.length-n;i?(i=Number(i))>r&&(i=r):i=r;const o=e.length;let s;for(i>o/2&&(i=o/2),s=0;s<i;++s){const i=parseInt(e.substr(2*s,2),16);if(Vt(i))return s;t[n+s]=i}return s}function gt(t,e,n,i){return Wt(jt(e,t.length-n),t,n,i)}function yt(t,e,n,i){return Wt(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,i)}function vt(t,e,n,i){return Wt(zt(e),t,n,i)}function bt(t,e,n,i){return Wt(function(t,e){let n,i,r;const o=[];for(let s=0;s<t.length&&!((e-=2)<0);++s)n=t.charCodeAt(s),i=n>>8,r=n%256,o.push(r),o.push(i);return o}(e,t.length-n),t,n,i)}function wt(t,e,n){return 0===e&&n===t.length?W(t):W(t.slice(e,n))}function xt(t,e,n){n=Math.min(t.length,n);const i=[];let r=e;for(;r<n;){const e=t[r];let o=null,s=e>239?4:e>223?3:e>191?2:1;if(r+s<=n){let n,i,a,l;switch(s){case 1:e<128&&(o=e);break;case 2:n=t[r+1],128==(192&n)&&(l=(31&e)<<6|63&n,l>127&&(o=l));break;case 3:n=t[r+1],i=t[r+2],128==(192&n)&&128==(192&i)&&(l=(15&e)<<12|(63&n)<<6|63&i,l>2047&&(l<55296||l>57343)&&(o=l));break;case 4:n=t[r+1],i=t[r+2],a=t[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(l=(15&e)<<18|(63&n)<<12|(63&i)<<6|63&a,l>65535&&l<1114112&&(o=l))}}null===o?(o=65533,s=1):o>65535&&(o-=65536,i.push(o>>>10&1023|55296),o=56320|1023&o),i.push(o),r+=s}return function(t){const e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);let n="",i=0;for(;i<e;)n+=String.fromCharCode.apply(String,t.slice(i,i+=4096));return n}(i)}it.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),it.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(it.prototype,"parent",{enumerable:!0,get:function(){if(it.isBuffer(this))return this.buffer}}),Object.defineProperty(it.prototype,"offset",{enumerable:!0,get:function(){if(it.isBuffer(this))return this.byteOffset}}),it.poolSize=8192,it.from=function(t,e,n){return rt(t,e,n)},Object.setPrototypeOf(it.prototype,Uint8Array.prototype),Object.setPrototypeOf(it,Uint8Array),it.alloc=function(t,e,n){return function(t,e,n){return ot(t),t<=0?nt(t):void 0!==e?"string"==typeof n?nt(t).fill(e,n):nt(t).fill(e):nt(t)}(t,e,n)},it.allocUnsafe=function(t){return st(t)},it.allocUnsafeSlow=function(t){return st(t)},it.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==it.prototype},it.compare=function(t,e){if(Ht(t,Uint8Array)&&(t=it.from(t,t.offset,t.byteLength)),Ht(e,Uint8Array)&&(e=it.from(e,e.offset,e.byteLength)),!it.isBuffer(t)||!it.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,i=e.length;for(let r=0,o=Math.min(n,i);r<o;++r)if(t[r]!==e[r]){n=t[r],i=e[r];break}return n<i?-1:i<n?1:0},it.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},it.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return it.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const i=it.allocUnsafe(e);let r=0;for(n=0;n<t.length;++n){let e=t[n];if(Ht(e,Uint8Array))r+e.length>i.length?(it.isBuffer(e)||(e=it.from(e)),e.copy(i,r)):Uint8Array.prototype.set.call(i,e,r);else{if(!it.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(i,r)}r+=e.length}return i},it.byteLength=ut,it.prototype._isBuffer=!0,it.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)dt(this,e,e+1);return this},it.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)dt(this,e,e+3),dt(this,e+1,e+2);return this},it.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)dt(this,e,e+7),dt(this,e+1,e+6),dt(this,e+2,e+5),dt(this,e+3,e+4);return this},it.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?xt(this,0,t):ht.apply(this,arguments)},it.prototype.toLocaleString=it.prototype.toString,it.prototype.equals=function(t){if(!it.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===it.compare(this,t)},it.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},et&&(it.prototype[et]=it.prototype.inspect),it.prototype.compare=function(t,e,n,i,r){if(Ht(t,Uint8Array)&&(t=it.from(t,t.offset,t.byteLength)),!it.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),e<0||n>t.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&e>=n)return 0;if(i>=r)return-1;if(e>=n)return 1;if(this===t)return 0;let o=(r>>>=0)-(i>>>=0),s=(n>>>=0)-(e>>>=0);const a=Math.min(o,s),l=this.slice(i,r),c=t.slice(e,n);for(let t=0;t<a;++t)if(l[t]!==c[t]){o=l[t],s=c[t];break}return o<s?-1:s<o?1:0},it.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},it.prototype.indexOf=function(t,e,n){return ft(this,t,e,n,!0)},it.prototype.lastIndexOf=function(t,e,n){return ft(this,t,e,n,!1)},it.prototype.write=function(t,e,n,i){if(void 0===e)i="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)i=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-e;if((void 0===n||n>r)&&(n=r),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"hex":return mt(this,t,e,n);case"utf8":case"utf-8":return gt(this,t,e,n);case"ascii":case"latin1":case"binary":return yt(this,t,e,n);case"base64":return vt(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return bt(this,t,e,n);default:if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},it.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function kt(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(127&t[r]);return i}function Et(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(t[r]);return i}function It(t,e,n){const i=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=e;i<n;++i)r+=$t[t[i]];return r}function St(t,e,n){const i=t.slice(e,n);let r="";for(let t=0;t<i.length-1;t+=2)r+=String.fromCharCode(i[t]+256*i[t+1]);return r}function Tt(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function Ct(t,e,n,i,r,o){if(!it.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<o)throw new RangeError('"value" argument is out of bounds');if(n+i>t.length)throw new RangeError("Index out of range")}function _t(t,e,n,i,r){Pt(e,i,r,t,n,7);let o=Number(e&BigInt(4294967295));t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,n}function Nt(t,e,n,i,r){Pt(e,i,r,t,n,7);let o=Number(e&BigInt(4294967295));t[n+7]=o,o>>=8,t[n+6]=o,o>>=8,t[n+5]=o,o>>=8,t[n+4]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=s,s>>=8,t[n+2]=s,s>>=8,t[n+1]=s,s>>=8,t[n]=s,n+8}function At(t,e,n,i,r,o){if(n+i>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Dt(t,e,n,i,r){return e=+e,n>>>=0,r||At(t,0,n,4),q(t,e,n,i,23,4),n+4}function Rt(t,e,n,i,r){return e=+e,n>>>=0,r||At(t,0,n,8),q(t,e,n,i,52,8),n+8}it.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const i=this.subarray(t,e);return Object.setPrototypeOf(i,it.prototype),i},it.prototype.readUintLE=it.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||Tt(t,e,this.length);let i=this[t],r=1,o=0;for(;++o<e&&(r*=256);)i+=this[t+o]*r;return i},it.prototype.readUintBE=it.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||Tt(t,e,this.length);let i=this[t+--e],r=1;for(;e>0&&(r*=256);)i+=this[t+--e]*r;return i},it.prototype.readUint8=it.prototype.readUInt8=function(t,e){return t>>>=0,e||Tt(t,1,this.length),this[t]},it.prototype.readUint16LE=it.prototype.readUInt16LE=function(t,e){return t>>>=0,e||Tt(t,2,this.length),this[t]|this[t+1]<<8},it.prototype.readUint16BE=it.prototype.readUInt16BE=function(t,e){return t>>>=0,e||Tt(t,2,this.length),this[t]<<8|this[t+1]},it.prototype.readUint32LE=it.prototype.readUInt32LE=function(t,e){return t>>>=0,e||Tt(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},it.prototype.readUint32BE=it.prototype.readUInt32BE=function(t,e){return t>>>=0,e||Tt(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},it.prototype.readBigUInt64LE=qt((function(t){Bt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Ft(t,this.length-8);const i=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,r=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),it.prototype.readBigUInt64BE=qt((function(t){Bt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Ft(t,this.length-8);const i=e*2**24+65536*this[++t]+256*this[++t]+this[++t],r=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),it.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||Tt(t,e,this.length);let i=this[t],r=1,o=0;for(;++o<e&&(r*=256);)i+=this[t+o]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*e)),i},it.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||Tt(t,e,this.length);let i=e,r=1,o=this[t+--i];for(;i>0&&(r*=256);)o+=this[t+--i]*r;return r*=128,o>=r&&(o-=Math.pow(2,8*e)),o},it.prototype.readInt8=function(t,e){return t>>>=0,e||Tt(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},it.prototype.readInt16LE=function(t,e){t>>>=0,e||Tt(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},it.prototype.readInt16BE=function(t,e){t>>>=0,e||Tt(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},it.prototype.readInt32LE=function(t,e){return t>>>=0,e||Tt(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},it.prototype.readInt32BE=function(t,e){return t>>>=0,e||Tt(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},it.prototype.readBigInt64LE=qt((function(t){Bt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Ft(t,this.length-8);const i=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),it.prototype.readBigInt64BE=qt((function(t){Bt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Ft(t,this.length-8);const i=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(i)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),it.prototype.readFloatLE=function(t,e){return t>>>=0,e||Tt(t,4,this.length),$(this,t,!0,23,4)},it.prototype.readFloatBE=function(t,e){return t>>>=0,e||Tt(t,4,this.length),$(this,t,!1,23,4)},it.prototype.readDoubleLE=function(t,e){return t>>>=0,e||Tt(t,8,this.length),$(this,t,!0,52,8)},it.prototype.readDoubleBE=function(t,e){return t>>>=0,e||Tt(t,8,this.length),$(this,t,!1,52,8)},it.prototype.writeUintLE=it.prototype.writeUIntLE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){Ct(this,t,e,n,Math.pow(2,8*n)-1,0)}let r=1,o=0;for(this[e]=255&t;++o<n&&(r*=256);)this[e+o]=t/r&255;return e+n},it.prototype.writeUintBE=it.prototype.writeUIntBE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){Ct(this,t,e,n,Math.pow(2,8*n)-1,0)}let r=n-1,o=1;for(this[e+r]=255&t;--r>=0&&(o*=256);)this[e+r]=t/o&255;return e+n},it.prototype.writeUint8=it.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||Ct(this,t,e,1,255,0),this[e]=255&t,e+1},it.prototype.writeUint16LE=it.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||Ct(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},it.prototype.writeUint16BE=it.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||Ct(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},it.prototype.writeUint32LE=it.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||Ct(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},it.prototype.writeUint32BE=it.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||Ct(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},it.prototype.writeBigUInt64LE=qt((function(t,e=0){return _t(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),it.prototype.writeBigUInt64BE=qt((function(t,e=0){return Nt(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),it.prototype.writeIntLE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);Ct(this,t,e,n,i-1,-i)}let r=0,o=1,s=0;for(this[e]=255&t;++r<n&&(o*=256);)t<0&&0===s&&0!==this[e+r-1]&&(s=1),this[e+r]=(t/o>>0)-s&255;return e+n},it.prototype.writeIntBE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);Ct(this,t,e,n,i-1,-i)}let r=n-1,o=1,s=0;for(this[e+r]=255&t;--r>=0&&(o*=256);)t<0&&0===s&&0!==this[e+r+1]&&(s=1),this[e+r]=(t/o>>0)-s&255;return e+n},it.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||Ct(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},it.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||Ct(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},it.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||Ct(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},it.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||Ct(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},it.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||Ct(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},it.prototype.writeBigInt64LE=qt((function(t,e=0){return _t(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),it.prototype.writeBigInt64BE=qt((function(t,e=0){return Nt(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),it.prototype.writeFloatLE=function(t,e,n){return Dt(this,t,e,!0,n)},it.prototype.writeFloatBE=function(t,e,n){return Dt(this,t,e,!1,n)},it.prototype.writeDoubleLE=function(t,e,n){return Rt(this,t,e,!0,n)},it.prototype.writeDoubleBE=function(t,e,n){return Rt(this,t,e,!1,n)},it.prototype.copy=function(t,e,n,i){if(!it.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n);const r=i-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,i):Uint8Array.prototype.set.call(t,this.subarray(n,i),e),r},it.prototype.fill=function(t,e,n,i){if("string"==typeof t){if("string"==typeof e?(i=e,e=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!it.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===t.length){const e=t.charCodeAt(0);("utf8"===i&&e<128||"latin1"===i)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let r;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(r=e;r<n;++r)this[r]=t;else{const o=it.isBuffer(t)?t:it.from(t,i),s=o.length;if(0===s)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(r=0;r<n-e;++r)this[r+e]=o[r%s]}return this};const Lt={};function Ot(t,e,n){Lt[t]=class extends n{get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}}}function Mt(t){let e="",n=t.length;const i="-"===t[0]?1:0;for(;n>=i+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function Pt(t,e,n,i,r,o){if(t>n||t<e){const i="bigint"==typeof e?"n":"";let r;throw r=o>3?0===e||e===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(o+1)}${i}`:`>= -(2${i} ** ${8*(o+1)-1}${i}) and < 2 ** ${8*(o+1)-1}${i}`:`>= ${e}${i} and <= ${n}${i}`,new Lt.ERR_OUT_OF_RANGE("value",r,t)}!function(t,e,n){Bt(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||Ft(e,t.length-(n+1))}(i,r,o)}function Bt(t,e){if("number"!=typeof t)throw new Lt.ERR_INVALID_ARG_TYPE(e,"number",t)}function Ft(t,e,n){if(Math.floor(t)!==t)throw Bt(t,n),new Lt.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new Lt.ERR_BUFFER_OUT_OF_BOUNDS;throw new Lt.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}Ot("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),Ot("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),Ot("ERR_OUT_OF_RANGE",(function(t,e,n){let i=`The value of "${t}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=Mt(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=Mt(r)),r+="n"),i+=` It must be ${e}. Received ${r}`,i}),RangeError);const Ut=/[^+/0-9A-Za-z-_]/g;function jt(t,e){let n;e=e||1/0;const i=t.length;let r=null;const o=[];for(let s=0;s<i;++s){if(n=t.charCodeAt(s),n>55295&&n<57344){if(!r){if(n>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===i){(e-=3)>-1&&o.push(239,191,189);continue}r=n;continue}if(n<56320){(e-=3)>-1&&o.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(e-=3)>-1&&o.push(239,191,189);if(r=null,n<128){if((e-=1)<0)break;o.push(n)}else if(n<2048){if((e-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function zt(t){return z(function(t){if((t=(t=t.split("=")[0]).trim().replace(Ut,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Wt(t,e,n,i){let r;for(r=0;r<i&&!(r+n>=e.length||r>=t.length);++r)e[r+n]=t[r];return r}function Ht(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Vt(t){return t!=t}const $t=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)e[i+r]=t[n]+t[r]}return e}();function qt(t){return"undefined"==typeof BigInt?Xt:t}function Xt(){throw new Error("BigInt not supported")}var Kt=j;function Yt(t){return P.isPlainObject(t)||P.isArray(t)}function Gt(t){return P.endsWith(t,"[]")?t.slice(0,-2):t}function Jt(t,e,n){return t?t.concat(e).map((function(t,e){return t=Gt(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const Qt=P.toFlatObject(P,{},null,(function(t){return/^is[A-Z]/.test(t)}));var Zt=function(t,e,n){if(!P.isObject(t))throw new TypeError("target must be an object");e=e||new(V||FormData);const i=(n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!P.isUndefined(e[t])}))).metaTokens,r=n.visitor||u,o=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((l=e)&&P.isFunction(l.append)&&"FormData"===l[Symbol.toStringTag]&&l[Symbol.iterator]);var l;if(!P.isFunction(r))throw new TypeError("visitor must be a function");function c(t){if(null===t)return"";if(P.isDate(t))return t.toISOString();if(!a&&P.isBlob(t))throw new H("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(t)||P.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):Kt.from(t):t}function u(t,n,r){let a=t;if(t&&!r&&"object"==typeof t)if(P.endsWith(n,"{}"))n=i?n:n.slice(0,-2),t=JSON.stringify(t);else if(P.isArray(t)&&function(t){return P.isArray(t)&&!t.some(Yt)}(t)||P.isFileList(t)||P.endsWith(n,"[]")&&(a=P.toArray(t)))return n=Gt(n),a.forEach((function(t,i){!P.isUndefined(t)&&null!==t&&e.append(!0===s?Jt([n],i,o):null===s?n:n+"[]",c(t))})),!1;return!!Yt(t)||(e.append(Jt(r,n,o),c(t)),!1)}const h=[],d=Object.assign(Qt,{defaultVisitor:u,convertValue:c,isVisitable:Yt});if(!P.isObject(t))throw new TypeError("data must be an object");return function t(n,i){if(!P.isUndefined(n)){if(-1!==h.indexOf(n))throw Error("Circular reference detected in "+i.join("."));h.push(n),P.forEach(n,(function(n,o){!0===(!(P.isUndefined(n)||null===n)&&r.call(e,n,P.isString(o)?o.trim():o,i,d))&&t(n,i?i.concat(o):[o])})),h.pop()}}(t),e};function te(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function ee(t,e){this._pairs=[],t&&Zt(t,this,e)}const ne=ee.prototype;ne.append=function(t,e){this._pairs.push([t,e])},ne.toString=function(t){const e=t?function(e){return t.call(this,e,te)}:te;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var ie=ee;function re(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function oe(t,e,n){if(!e)return t;const i=n&&n.encode||re,r=n&&n.serialize;let o;if(o=r?r(e,n):P.isURLSearchParams(e)?e.toString():new ie(e,n).toString(i),o){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+o}return t}var se=class{use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){P.forEach(this.handlers,(function(e){null!==e&&t(e)}))}constructor(){this.handlers=[]}},ae={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},le="undefined"!=typeof URLSearchParams?URLSearchParams:ie,ce=FormData;const ue=(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),he="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var de={isBrowser:!0,classes:{URLSearchParams:le,FormData:ce,Blob:Blob},isStandardBrowserEnv:ue,isStandardBrowserWebWorkerEnv:he,protocols:["http","https","file","blob","url","data"]};function fe(t,e){return Zt(t,new de.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,i){return de.isNode&&P.isBuffer(t)?(this.append(e,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}var pe=function(t){function e(t,n,i,r){let o=t[r++];const s=Number.isFinite(+o),a=r>=t.length;if(o=!o&&P.isArray(i)?i.length:o,a)return P.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!s;i[o]&&P.isObject(i[o])||(i[o]=[]);return e(t,n,i[o],r)&&P.isArray(i[o])&&(i[o]=function(t){const e={},n=Object.keys(t);let i;const r=n.length;let o;for(i=0;i<r;i++)o=n[i],e[o]=t[o];return e}(i[o])),!s}if(P.isFormData(t)&&P.isFunction(t.entries)){const n={};return P.forEachEntry(t,((t,i)=>{e(function(t){return P.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),i,n,0)})),n}return null};const me={"Content-Type":void 0};const ge={transitional:ae,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",i=n.indexOf("application/json")>-1,r=P.isObject(t);r&&P.isHTMLForm(t)&&(t=new FormData(t));if(P.isFormData(t))return i&&i?JSON.stringify(pe(t)):t;if(P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t))return t;if(P.isArrayBufferView(t))return t.buffer;if(P.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let o;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return fe(t,this.formSerializer).toString();if((o=P.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return Zt(o?{"files[]":t}:t,e&&new e,this.formSerializer)}}return r||i?(e.setContentType("application/json",!1),function(t,e,n){if(P.isString(t))try{return(e||JSON.parse)(t),P.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||ge.transitional,n=e&&e.forcedJSONParsing,i="json"===this.responseType;if(t&&P.isString(t)&&(n&&!this.responseType||i)){const n=!(e&&e.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw H.from(t,H.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:de.classes.FormData,Blob:de.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};P.forEach(["delete","get","head"],(function(t){ge.headers[t]={}})),P.forEach(["post","put","patch"],(function(t){ge.headers[t]=P.merge(me)}));var ye=ge;const ve=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var be=t=>{const e={};let n,i,r;return t&&t.split("\n").forEach((function(t){r=t.indexOf(":"),n=t.substring(0,r).trim().toLowerCase(),i=t.substring(r+1).trim(),!n||e[n]&&ve[n]||("set-cookie"===n?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)})),e};const we=Symbol("internals");function xe(t){return t&&String(t).trim().toLowerCase()}function ke(t){return!1===t||null==t?t:P.isArray(t)?t.map(ke):String(t)}function Ee(t,e,n,i){return P.isFunction(i)?i.call(this,e,n):P.isString(e)?P.isString(i)?-1!==e.indexOf(i):P.isRegExp(i)?i.test(e):void 0:void 0}let Ie=Symbol.iterator,Se=Symbol.toStringTag;class Te{set(t,e,n){const i=this;function r(t,e,n){const r=xe(e);if(!r)throw new Error("header name must be a non-empty string");const o=P.findKey(i,r);(!o||void 0===i[o]||!0===n||void 0===n&&!1!==i[o])&&(i[o||e]=ke(t))}const o=(t,e)=>P.forEach(t,((t,n)=>r(t,n,e)));return P.isPlainObject(t)||t instanceof this.constructor?o(t,e):P.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z]+$/.test(t.trim())?o(be(t),e):null!=t&&r(e,t,n),this}get(t,e){if(t=xe(t)){const n=P.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}(t);if(P.isFunction(e))return e.call(this,t,n);if(P.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=xe(t)){const n=P.findKey(this,t);return!(!n||e&&!Ee(0,this[n],n,e))}return!1}delete(t,e){const n=this;let i=!1;function r(t){if(t=xe(t)){const r=P.findKey(n,t);!r||e&&!Ee(0,n[r],r,e)||(delete n[r],i=!0)}}return P.isArray(t)?t.forEach(r):r(t),i}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const e=this,n={};return P.forEach(this,((i,r)=>{const o=P.findKey(n,r);if(o)return e[o]=ke(i),void delete e[r];const s=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(r):String(r).trim();s!==r&&delete e[r],e[s]=ke(i),n[s]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return P.forEach(this,((n,i)=>{null!=n&&!1!==n&&(e[i]=t&&P.isArray(n)?n.join(", "):n)})),e}[Ie](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Se](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=(this[we]=this[we]={accessors:{}}).accessors,n=this.prototype;function i(t){const i=xe(t);e[i]||(!function(t,e){const n=P.toCamelCase(" "+e);["get","set","has"].forEach((i=>{Object.defineProperty(t,i+n,{value:function(t,n,r){return this[i].call(this,e,t,n,r)},configurable:!0})}))}(n,t),e[i]=!0)}return P.isArray(t)?t.forEach(i):i(t),this}constructor(t){t&&this.set(t)}}Te.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),P.freezeMethods(Te.prototype),P.freezeMethods(Te);var Ce=Te;function _e(t,e){const n=this||ye,i=e||n,r=Ce.from(i.headers);let o=i.data;return P.forEach(t,(function(t){o=t.call(n,o,r.normalize(),e?e.status:void 0)})),r.normalize(),o}function Ne(t){return!(!t||!t.__CANCEL__)}function Ae(t,e,n){H.call(this,null==t?"canceled":t,H.ERR_CANCELED,e,n),this.name="CanceledError"}P.inherits(Ae,H,{__CANCEL__:!0});var De=Ae;function Re(t,e,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(new H("Request failed with status code "+n.status,[H.ERR_BAD_REQUEST,H.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}var Le=de.isStandardBrowserEnv?{write:function(t,e,n,i,r,o){const s=[];s.push(t+"="+encodeURIComponent(e)),P.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),P.isString(i)&&s.push("path="+i),P.isString(r)&&s.push("domain="+r),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Oe(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Me(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?Oe(t,e):e}var Pe=de.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function i(n){let i=n;return t&&(e.setAttribute("href",i),i=e.href),e.setAttribute("href",i),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=i(window.location.href),function(t){const e=P.isString(t)?i(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0};function Be(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}var Fe=function(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r,o=0,s=0;return e=void 0!==e?e:1e3,function(a){const l=Date.now(),c=i[s];r||(r=l),n[o]=a,i[o]=l;let u=s,h=0;for(;u!==o;)h+=n[u++],u%=t;if(o=(o+1)%t,o===s&&(s=(s+1)%t),l-r<e)return;const d=c&&l-c;return d?Math.round(1e3*h/d):void 0}};function Ue(t,e){let n=0;const i=Fe(50,250);return r=>{const o=r.loaded,s=r.lengthComputable?r.total:void 0,a=o-n,l=i(a);n=o;const c={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&o<=s?(s-o)/l:void 0,event:r};c[e?"download":"upload"]=!0,t(c)}}const je={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,n){let i=t.data;const r=Ce.from(t.headers).normalize(),o=t.responseType;let s;function a(){t.cancelToken&&t.cancelToken.unsubscribe(s),t.signal&&t.signal.removeEventListener("abort",s)}P.isFormData(i)&&(de.isStandardBrowserEnv||de.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let l=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";r.set("Authorization","Basic "+btoa(e+":"+n))}const c=Me(t.baseURL,t.url);function u(){if(!l)return;const i=Ce.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());Re((function(t){e(t),a()}),(function(t){n(t),a()}),{data:o&&"text"!==o&&"json"!==o?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:i,config:t,request:l}),l=null}if(l.open(t.method.toUpperCase(),oe(c,t.params,t.paramsSerializer),!0),l.timeout=t.timeout,"onloadend"in l?l.onloadend=u:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(u)},l.onabort=function(){l&&(n(new H("Request aborted",H.ECONNABORTED,t,l)),l=null)},l.onerror=function(){n(new H("Network Error",H.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const i=t.transitional||ae;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new H(e,i.clarifyTimeoutError?H.ETIMEDOUT:H.ECONNABORTED,t,l)),l=null},de.isStandardBrowserEnv){const e=(t.withCredentials||Pe(c))&&t.xsrfCookieName&&Le.read(t.xsrfCookieName);e&&r.set(t.xsrfHeaderName,e)}void 0===i&&r.setContentType(null),"setRequestHeader"in l&&P.forEach(r.toJSON(),(function(t,e){l.setRequestHeader(e,t)})),P.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),o&&"json"!==o&&(l.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&l.addEventListener("progress",Ue(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",Ue(t.onUploadProgress)),(t.cancelToken||t.signal)&&(s=e=>{l&&(n(!e||e.type?new De(null,t,l):e),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(s),t.signal&&(t.signal.aborted?s():t.signal.addEventListener("abort",s)));const h=Be(c);h&&-1===de.protocols.indexOf(h)?n(new H("Unsupported protocol "+h+":",H.ERR_BAD_REQUEST,t)):l.send(i||null)}))}};P.forEach(je,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));var ze={getAdapter:t=>{t=P.isArray(t)?t:[t];const{length:e}=t;let n,i;for(let r=0;r<e&&(n=t[r],!(i=P.isString(n)?je[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new H(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(P.hasOwnProp(je,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!P.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:je};function We(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new De(null,t)}function He(t){We(t),t.headers=Ce.from(t.headers),t.data=_e.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return ze.getAdapter(t.adapter||ye.adapter)(t).then((function(e){return We(t),e.data=_e.call(t,t.transformResponse,e),e.headers=Ce.from(e.headers),e}),(function(e){return Ne(e)||(We(t),e&&e.response&&(e.response.data=_e.call(t,t.transformResponse,e.response),e.response.headers=Ce.from(e.response.headers))),Promise.reject(e)}))}const Ve=t=>t instanceof Ce?t.toJSON():t;function $e(t,e){e=e||{};const n={};function i(t,e,n){return P.isPlainObject(t)&&P.isPlainObject(e)?P.merge.call({caseless:n},t,e):P.isPlainObject(e)?P.merge({},e):P.isArray(e)?e.slice():e}function r(t,e,n){return P.isUndefined(e)?P.isUndefined(t)?void 0:i(void 0,t,n):i(t,e,n)}function o(t,e){if(!P.isUndefined(e))return i(void 0,e)}function s(t,e){return P.isUndefined(e)?P.isUndefined(t)?void 0:i(void 0,t):i(void 0,e)}function a(n,r,o){return o in e?i(n,r):o in t?i(void 0,n):void 0}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(t,e)=>r(Ve(t),Ve(e),!0)};return P.forEach(Object.keys(t).concat(Object.keys(e)),(function(i){const o=l[i]||r,s=o(t[i],e[i],i);P.isUndefined(s)&&o!==a||(n[i]=s)})),n}const qe={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{qe[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const Xe={};qe.transitional=function(t,e,n){function i(t,e){return"[Axios v1.2.4] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,r,o)=>{if(!1===t)throw new H(i(r," has been removed"+(e?" in "+e:"")),H.ERR_DEPRECATED);return e&&!Xe[r]&&(Xe[r]=!0,console.warn(i(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,o)}};var Ke={assertOptions:function(t,e,n){if("object"!=typeof t)throw new H("options must be an object",H.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const o=i[r],s=e[o];if(s){const e=t[o],n=void 0===e||s(e,o,t);if(!0!==n)throw new H("option "+o+" must be "+n,H.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new H("Unknown option "+o,H.ERR_BAD_OPTION)}},validators:qe};const Ye=Ke.validators;class Ge{request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=$e(this.defaults,e);const{transitional:n,paramsSerializer:i,headers:r}=e;let o;void 0!==n&&Ke.assertOptions(n,{silentJSONParsing:Ye.transitional(Ye.boolean),forcedJSONParsing:Ye.transitional(Ye.boolean),clarifyTimeoutError:Ye.transitional(Ye.boolean)},!1),void 0!==i&&Ke.assertOptions(i,{encode:Ye.function,serialize:Ye.function},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase(),o=r&&P.merge(r.common,r[e.method]),o&&P.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete r[t]})),e.headers=Ce.concat(o,r);const s=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,s.unshift(t.fulfilled,t.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(t){l.push(t.fulfilled,t.rejected)}));let u,h=0;if(!a){const t=[He.bind(this),void 0];for(t.unshift.apply(t,s),t.push.apply(t,l),u=t.length,c=Promise.resolve(e);h<u;)c=c.then(t[h++],t[h++]);return c}u=s.length;let d=e;for(h=0;h<u;){const t=s[h++],e=s[h++];try{d=t(d)}catch(t){e.call(this,t);break}}try{c=He.call(this,d)}catch(t){return Promise.reject(t)}for(h=0,u=l.length;h<u;)c=c.then(l[h++],l[h++]);return c}getUri(t){return oe(Me((t=$e(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}constructor(t){this.defaults=t,this.interceptors={request:new se,response:new se}}}P.forEach(["delete","get","head","options"],(function(t){Ge.prototype[t]=function(e,n){return this.request($e(n||{},{method:t,url:e,data:(n||{}).data}))}})),P.forEach(["post","put","patch"],(function(t){function e(e){return function(n,i,r){return this.request($e(r||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}Ge.prototype[t]=e(),Ge.prototype[t+"Form"]=e(!0)}));var Je=Ge;class Qe{throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new Qe((function(e){t=e})),cancel:t}}constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const i=new Promise((t=>{n.subscribe(t),e=t})).then(t);return i.cancel=function(){n.unsubscribe(e)},i},t((function(t,i,r){n.reason||(n.reason=new De(t,i,r),e(n.reason))}))}}var Ze=Qe;const tn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(tn).forEach((([t,e])=>{tn[e]=t}));var en=tn;const nn=function t(e){const n=new Je(e),i=s(Je.prototype.request,n);return P.extend(i,Je.prototype,n,{allOwnKeys:!0}),P.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return t($e(e,n))},i}(ye);nn.Axios=Je,nn.CanceledError=De,nn.CancelToken=Ze,nn.isCancel=Ne,nn.VERSION="1.2.4",nn.toFormData=Zt,nn.AxiosError=H,nn.Cancel=nn.CanceledError,nn.all=function(t){return Promise.all(t)},nn.spread=function(t){return function(e){return t.apply(null,e)}},nn.isAxiosError=function(t){return P.isObject(t)&&!0===t.isAxiosError},nn.mergeConfig=$e,nn.AxiosHeaders=Ce,nn.formToJSON=t=>pe(P.isHTMLForm(t)?new FormData(t):t),nn.HttpStatusCode=en,nn.default=nn;var rn=nn;const{Axios:on,AxiosError:sn,CanceledError:an,isCancel:ln,CancelToken:cn,VERSION:un,all:hn,Cancel:dn,isAxiosError:fn,spread:pn,toFormData:mn,AxiosHeaders:gn,HttpStatusCode:yn,formToJSON:vn,mergeConfig:bn}=rn,wn={WEATHER:"f3ada08f24524eaebe0dab7657f9578c",NEWS:"zqSBDCWWfsUqmPN3a0NlmObTljUQwqkT"},xn=(rn.create({baseURL:"https://api.openweathermap.org/data/2.5/weather",params:{appid:wn.WEATHER,units:"metric"}}),rn.create({baseURL:"https://api.nytimes.com/svc/",params:{"api-key":wn.NEWS}}));var kn,En,In={};async function Sn(t,e,n){const i={mostPopular:"mostpopular/v2/emailed/7.json",articles:"search/v2/articlesearch.json",allCategories:"news/v3/content/section-list.json",category:`news/v3/content/all/${n}.json`};try{return await xn.get(i[t],{params:e})}catch(t){In.Notify.failure(t)}}function Tn(t,e){const n={popularCards:"",dateCards:"",categoryCards:"",inputsCards:"",categoriesForDesktop:"",categoriesFull:"",weather:"",pagination:""},i="https://www.nytimes.com/";let r,o=[];if("popularCards"===e&&(o=t.flatMap((t=>(r=0!==t.media.length?t.media[0]["media-metadata"][2].url:"https://t4.ftcdn.net/jpg/00/38/13/73/240_F_38137330_gUbR3ZXBc5J5g4pRkaC8TYZQA62OZhx5.jpg",`\n\n      <li class="news__item" data-id="${t.id}">\n        <div class="news__image-box">\n          <img class="news__image" src="${r}" alt="" />\n            <div class="div">\n              <button class="news__favorite-btn " data-value="4" type="button">Add to favorite</button>\n              <svg class="favorite-btn__icon-add" width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">\n                <path d="M4.66659 1C2.82592 1 1.33325 2.47733 1.33325 4.3C1.33325 5.77133 1.91659 9.26333 7.65858 12.7933C7.76144 12.8559 7.87952 12.889 7.99992 12.889C8.12032 12.889 8.2384 12.8559 8.34125 12.7933C14.0833 9.26333 14.6666 5.77133 14.6666 4.3C14.6666 2.47733 13.1739 1 11.3333 1C9.49258 1 7.99992 3 7.99992 3C7.99992 3 6.50725 1 4.66659 1Z" stroke="#4440F7" stroke-linecap="round" stroke-linejoin="round"/>\n              </svg>\n            </div>\n            <h3 class="news__image-heading">${t.section}</h3>\n        </div>\n        <h2 class="news__title">${t.title}</h2>\n        <p class="news__text">${t.abstract}</p>\n        <div class="news__lower-box">\n          <p class="news__date">${t.published_date}</p>\n          <a class="news__readmore-link" target="_blank"\n          rel="noopener noreferrer" href="${t.url}">Read more</a>\n        </div>\n      </li>\n      `)))),"dateCards"===e){let e,n;o=t.flatMap((t=>(r=0!==t.multimedia.length?i+t.multimedia[0].url:"https://t4.ftcdn.net/jpg/00/38/13/73/240_F_38137330_gUbR3ZXBc5J5g4pRkaC8TYZQA62OZhx5.jpg",e=new Date(t.pub_date),n=e.toISOString().split("T")[0],`\n      <li class="news__item" data-id="${t._id}">\n        <div class="news__image-box">\n          <img class="news__image" src="${r}" alt="" />\n            <div class="div">\n              <button class="news__favorite-btn " data-value="4" type="button">Add to favorite</button>\n              <svg class="favorite-btn__icon-add" width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">\n                <path d="M4.66659 1C2.82592 1 1.33325 2.47733 1.33325 4.3C1.33325 5.77133 1.91659 9.26333 7.65858 12.7933C7.76144 12.8559 7.87952 12.889 7.99992 12.889C8.12032 12.889 8.2384 12.8559 8.34125 12.7933C14.0833 9.26333 14.6666 5.77133 14.6666 4.3C14.6666 2.47733 13.1739 1 11.3333 1C9.49258 1 7.99992 3 7.99992 3C7.99992 3 6.50725 1 4.66659 1Z" stroke="#4440F7" stroke-linecap="round" stroke-linejoin="round"/>\n              </svg>\n            </div>\n            <h3 class="news__image-heading">${t.section_name}</h3>\n        </div>\n        <h2 class="news__title">${t.abstract}</h2>\n        <p class="news__text">${t.lead_paragraph}</p>\n        <div class="news__lower-box">\n          <p class="news__date">${n}</p>\n          <a class="news__readmore-link" target="_blank"\n          rel="noopener noreferrer" href="${t.web_url}">Read more</a>\n        </div>\n      </li>\n      `)))}if("categoryCards"===e){let e,n;o=t.flatMap((t=>(r=t.multimedia&&t.multimedia.length>=3?t.multimedia[2].url:"https://t4.ftcdn.net/jpg/00/38/13/73/240_F_38137330_gUbR3ZXBc5J5g4pRkaC8TYZQA62OZhx5.jpg",e=new Date(t.published_date),n=e.toISOString().split("T")[0],`\n      <li class="news__item" data-id="${t.uri}">\n        <div class="news__image-box">\n          <img class="news__image" src="${r}" alt="" />\n            <div class="div">\n              <button class="news__favorite-btn " data-value="4" type="button">Add to favorite</button>\n              <svg class="favorite-btn__icon-add" width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">\n                <path d="M4.66659 1C2.82592 1 1.33325 2.47733 1.33325 4.3C1.33325 5.77133 1.91659 9.26333 7.65858 12.7933C7.76144 12.8559 7.87952 12.889 7.99992 12.889C8.12032 12.889 8.2384 12.8559 8.34125 12.7933C14.0833 9.26333 14.6666 5.77133 14.6666 4.3C14.6666 2.47733 13.1739 1 11.3333 1C9.49258 1 7.99992 3 7.99992 3C7.99992 3 6.50725 1 4.66659 1Z" stroke="#4440F7" stroke-linecap="round" stroke-linejoin="round"/>\n              </svg>\n            </div>\n            <h3 class="news__image-heading">${t.section}</h3>\n        </div>\n        <h2 class="news__title">${t.title}</h2>\n        <p class="news__text">${t.abstract}</p>\n        <div class="news__lower-box">\n          <p class="news__date">${n}</p>\n          <a class="news__readmore-link" target="_blank"\n          rel="noopener noreferrer" href="${t.url}">Read more</a>\n        </div>\n      </li>\n      `)))}if("inputsCards"===e){let e,n;o=t.flatMap((t=>(r=0!==t.multimedia.length?i+t.multimedia[0].url:"https://t4.ftcdn.net/jpg/00/38/13/73/240_F_38137330_gUbR3ZXBc5J5g4pRkaC8TYZQA62OZhx5.jpg",e=new Date(t.pub_date),n=e.toISOString().split("T")[0],`\n      <li class="news__item" data-id="${t._id}">\n        <div class="news__image-box">\n          <img class="news__image" src="${r}" alt="" />\n            <div class="div">\n              <button class="news__favorite-btn " data-value="4" type="button">Add to favorite</button>\n              <svg class="favorite-btn__icon-add" width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">\n                <path d="M4.66659 1C2.82592 1 1.33325 2.47733 1.33325 4.3C1.33325 5.77133 1.91659 9.26333 7.65858 12.7933C7.76144 12.8559 7.87952 12.889 7.99992 12.889C8.12032 12.889 8.2384 12.8559 8.34125 12.7933C14.0833 9.26333 14.6666 5.77133 14.6666 4.3C14.6666 2.47733 13.1739 1 11.3333 1C9.49258 1 7.99992 3 7.99992 3C7.99992 3 6.50725 1 4.66659 1Z" stroke="#4440F7" stroke-linecap="round" stroke-linejoin="round"/>\n              </svg>\n            </div>\n            <h3 class="news__image-heading">${t.section_name}</h3>\n        </div>\n        <h2 class="news__title">${t.abstract}</h2>\n        <p class="news__text">${t.lead_paragraph}</p>\n        <div class="news__lower-box">\n          <p class="news__date">${n}</p>\n          <a class="news__readmore-link" target="_blank"\n          rel="noopener noreferrer" href="${t.web_url}">Read more</a>\n        </div>\n      </li>\n      `)))}if("categoriesForDesktop"===e&&(o=t.map(((t,e)=>e>=7||0===e?void 0:`<li class="categories-link-desktop" data-search=${t.section}><button class="btn-desktop">${t.display_name}</button></li>`))),"categoriesFull"===e&&(o=t.flatMap(((t,e)=>`<li class="categories-menu-link" data-search=${t.section}><button class="btn-menu">${t.display_name}</button></li>`))),"weather"===e&&(o=t.flatMap((e=>`\n        <div class="weather__info info">\n          <p class="info__temp">${Math.floor(t.main.temp)}°</p>\n          <div class="info-wrapper">\n            <p class="info__situation">${t.weather[0].main}</p>\n            <div class="info-wrapper-items">\n              <svg class="info-wrapper__svg" width="18" height="18">\n                <use class="geo" href="./images/icons.svg#icon-geo"></use>\n              </svg>\n              <p class="info__geo">${t.name}</p>\n            </div>\n          </div>\n        </div>\n        <img\n          src="http://openweathermap.org/img/w/${t.weather[0].icon}.png"\n          alt="image of sun"\n          width="128"\n          class="weather-img"\n        />\n        <p class="weather__date-week">\n          ${localDate.dayOfWeek}\n        </p>\n        <p class="weather__date-date">\n          ${localDate.dateUser}\n          ${localDate.dateMonth}\n          ${localDate.dateYear}\n        </p>\n        <a class="weather__link" href="https://weather.com/weather/tenday/l/35a741555bbfc8bc576be864b0b64af6d1b2ad1328d2ee729f0de0ae00098e85">\n          weather for week\n        </a>`))),"pagination"===e)for(let e=1;e<=t;e+=1)o.push(`<li class="pagination-item">${e}</li>`);return n[e]=o.join(""),n[e]}function Cn(t,e,n="beforeend"){t.insertAdjacentHTML(n,e)}kn=void 0===t?"undefined"==typeof window?In:window:t,En=function(t){if(void 0===t&&void 0===t.document)return!1;var e,n,i,r,o,s="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l="Success",c="Failure",u="Warning",h="Info",d={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},f="Success",p="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v="Show",b="Ask",w="Prompt",x={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},k="Standard",E="Hourglass",I="Circle",S="Arrows",T="Dots",C="Pulse",_="Custom",N="Notiflix",A={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},D="Standard",R="Hourglass",L="Circle",O="Arrows",M="Dots",P="Pulse",B={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},F=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+s)},U=function(t){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+t+s)},j=function(e){return e||(e="head"),null!==t.document[e]||(F('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},z=function(e,n){if(!j("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}},W=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=e&&"[object Object]"===Object.prototype.toString.call(n[i])?W(t[i],n[i]):n[i])};n<arguments.length;n++)i(arguments[n]);return t},H=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},V=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},$=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},q=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+t+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+t+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+t+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+e+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},X=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},K=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},Y=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},G=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},J=0,Q=function(n,i,r,o){if(!j("body"))return!1;e||lt.Notify.init({});var s=W(!0,e,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof o&&!Array.isArray(o)){var f={};"object"==typeof r?f=r:"object"==typeof o&&(f=o),e=W(!0,e,f)}var p=e[n.toLocaleLowerCase("en")];J++,"string"!=typeof i&&(i="Notiflix "+n),e.plainText&&(i=H(i)),!e.plainText&&i.length>e.messageMaxLength&&(e=W(!0,e,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>e.messageMaxLength&&(i=i.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),e.cssAnimation||(e.cssAnimationDuration=0);var m=t.document.getElementById(d.wrapID)||t.document.createElement("div");if(m.id=d.wrapID,m.style.width=e.width,m.style.zIndex=e.zindex,m.style.opacity=e.opacity,"center-center"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.top=e.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===e.position?(m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.left="auto"):"left-top"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===e.position?(m.style.left=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=e.distance,m.style.top=e.distance,m.style.left="auto",m.style.bottom="auto"),e.backOverlay){var g=t.document.getElementById(d.overlayID)||t.document.createElement("div");g.id=d.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=e.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=p.backOverlayColor||e.backOverlayColor,g.className=e.cssAnimation?"nx-with-animation":"",g.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(d.overlayID)||t.document.body.appendChild(g)}t.document.getElementById(d.wrapID)||t.document.body.appendChild(m);var y=t.document.createElement("div");y.id=e.ID+"-"+J,y.className=e.className+" "+p.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=e.fontSize,y.style.color=p.textColor,y.style.background=p.background,y.style.borderRadius=e.borderRadius,y.style.pointerEvents="all",e.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+e.fontFamily+'", '+a,e.cssAnimation&&(y.style.animationDuration=e.cssAnimationDuration+"ms");var v="";if(e.closeButton&&"function"!=typeof r&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)y.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"");else{var b="";n===l?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===c?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===h&&(b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=b+'<span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"")}else y.innerHTML='<span class="nx-message">'+i+"</span>"+(e.closeButton?v:"");if("left-bottom"===e.position||"right-bottom"===e.position){var w=t.document.getElementById(d.wrapID);w.insertBefore(y,w.firstChild)}else t.document.getElementById(d.wrapID).appendChild(y);var x=t.document.getElementById(y.id);if(x){var k,E,I=function(){x.classList.add("nx-remove");var e=t.document.getElementById(d.overlayID);e&&0>=m.childElementCount&&e.classList.add("nx-remove"),clearTimeout(k)},S=function(){if(x&&null!==x.parentNode&&x.parentNode.removeChild(x),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var e=t.document.getElementById(d.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(E)};if(e.closeButton&&"function"!=typeof r&&t.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){I();var t=setTimeout((function(){S(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof r||e.clickToClose)&&x.addEventListener("click",(function(){"function"==typeof r&&r(),I();var t=setTimeout((function(){S(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof r){var T=function(){k=setTimeout((function(){I()}),e.timeout),E=setTimeout((function(){S()}),e.timeout+e.cssAnimationDuration)};T(),e.pauseOnHover&&(x.addEventListener("mouseenter",(function(){x.classList.add("nx-paused"),clearTimeout(k),clearTimeout(E)})),x.addEventListener("mouseleave",(function(){x.classList.remove("nx-paused"),T()})))}}if(e.showOnlyTheLastOne&&0<J)for(var C,_=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+J+"])"),N=0;N<_.length;N++)null!==(C=_[N]).parentNode&&C.parentNode.removeChild(C);e=W(!0,e,s)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},tt=function(e,i,r,o,s,l){if(!j("body"))return!1;n||lt.Report.init({});var c={};if("object"==typeof s&&!Array.isArray(s)||"object"==typeof l&&!Array.isArray(l)){var u={};"object"==typeof s?u=s:"object"==typeof l&&(u=l),c=W(!0,n,{}),n=W(!0,n,u)}var h=n[e.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+e),"string"!=typeof r&&(e===f?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':e===p?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':e===m?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':e===g&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof o&&(o="Okay"),n.plainText&&(i=H(i),r=H(r),o=H(o)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',o="Okay"),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',o="Okay"),o.length>n.buttonMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',o="Okay")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),o.length>n.buttonMaxLength&&(o=o.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var d=t.document.createElement("div");d.id=y.ID,d.className=n.className,d.style.zIndex=n.zindex,d.style.borderRadius=n.borderRadius,d.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on")),d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.alignItems="center",d.style.justifyContent="center";var v="",b=!0===n.backOverlayClickToClose;n.backOverlay&&(v='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(b?" nx-report-click-to-close":"")+'" style="background:'+(h.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var w,x,k="";if(e===f?(w=n.svgSize,x=h.svgColor,w||(w="110px"),x||(x="#32c682"),k='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+w+'" height="'+w+'" fill="'+x+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):e===p?k=function(t,e){return t||(t="110px"),e||(e="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):e===m?k=function(t,e){return t||(t="110px"),e||(e="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):e===g&&(k=function(t,e){return t||(t="110px"),e||(e="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor)),d.innerHTML=v+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+k+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+h.titleColor+';">'+i+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+h.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+h.buttonBackground+"; color:"+h.buttonColor+';">'+o+"</a></div>",!t.document.getElementById(d.id)){t.document.body.appendChild(d);var E=function(){var e=t.document.getElementById(d.id);e.classList.add("nx-remove");var i=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e),clearTimeout(i)}),n.cssAnimationDuration)};t.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof s&&s(),E()})),v&&b&&t.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){E()}))}n=W(!0,n,c)},et=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},nt=function(e,n,r,o,s,l,c,u,h){if(!j("body"))return!1;i||lt.Confirm.init({});var d=W(!0,i,{});"object"!=typeof h||Array.isArray(h)||(i=W(!0,i,h)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof s&&(s="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof u&&(u=void 0),i.plainText&&(n=H(n),r=H(r),s=H(s),l=H(l)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',s="Okay",l="..."),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',s="Okay",l="..."),(s.length||l.length)>i.buttonsMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',s="Okay",l="...")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),s.length>i.buttonsMaxLength&&(s=s.substring(0,i.buttonsMaxLength)+"..."),l.length>i.buttonsMaxLength&&(l=l.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var f=t.document.createElement("div");f.id=x.ID,f.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),f.style.zIndex=i.zindex,f.style.padding=i.distance,i.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on"));var p="string"==typeof i.position?i.position.trim():"center";f.classList.add("nx-position-"+p),f.style.fontFamily='"'+i.fontFamily+'", '+a;var m="";i.backOverlay&&(m='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof c&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+l+"</a>");var y="",v=null,k=void 0;if(e===b||e===w){v=o||"";var E=e===b||200<v.length?Math.ceil(1.5*v.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(e===w?'value="'+v+'"':"")+' maxlength="'+E+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(f.innerHTML=m+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+n+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+r+y+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+s+"</a>"+g+"</div></div>",!t.document.getElementById(f.id)){t.document.body.appendChild(f);var I=t.document.getElementById(f.id),S=t.document.getElementById("NXConfirmButtonOk"),T=t.document.getElementById("NXConfirmValidationInput");T&&(T.focus(),T.setSelectionRange(0,(T.value||"").length),T.addEventListener("keyup",(function(t){var n=t.target.value;e===b&&n!==v?(t.preventDefault(),T.classList.add("nx-validation-failure"),T.classList.remove("nx-validation-success")):(e===b&&(T.classList.remove("nx-validation-failure"),T.classList.add("nx-validation-success")),("enter"===(t.key||"").toLocaleLowerCase("en")||13===t.keyCode)&&S.dispatchEvent(new Event("click")))}))),S.addEventListener("click",(function(t){if(e===b&&v&&T){if((T.value||"").toString()!==v)return T.focus(),T.classList.add("nx-validation-failure"),t.stopPropagation(),t.preventDefault(),t.returnValue=!1,t.cancelBubble=!0,!1;T.classList.remove("nx-validation-failure")}"function"==typeof c&&(e===w&&T&&(k=T.value||""),c(k)),I.classList.add("nx-remove");var n=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(n))}),i.cssAnimationDuration)})),"function"==typeof c&&t.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(e===w&&T&&(k=T.value||""),u(k)),I.classList.add("nx-remove");var t=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(t))}),i.cssAnimationDuration)}))}i=W(!0,i,d)},it=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},rt=function(e,n,i,o,s){if(!j("body"))return!1;r||lt.Loading.init({});var l=W(!0,r,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof i&&!Array.isArray(i)){var c={};"object"==typeof n?c=n:"object"==typeof i&&(c=i),r=W(!0,r,c)}var u="";if("string"==typeof n&&0<n.length&&(u=n),o){var h="";0<(u=u.length>r.messageMaxLength?H(u).toString().substring(0,r.messageMaxLength)+"...":H(u).toString()).length&&(h='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+u+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var d="";if(e===k)d=V(r.svgSize,r.svgColor);else if(e===E)d=$(r.svgSize,r.svgColor);else if(e===I)d=q(r.svgSize,r.svgColor);else if(e===S)d=X(r.svgSize,r.svgColor);else if(e===T)d=K(r.svgSize,r.svgColor);else if(e===C)d=Y(r.svgSize,r.svgColor);else if(e===_&&null!==r.customSvgCode&&null===r.customSvgUrl)d=r.customSvgCode||"";else if(e===_&&null!==r.customSvgUrl&&null===r.customSvgCode)d='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(e===_&&(null===r.customSvgUrl||null===r.customSvgCode))return F('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;d=function(t,e,n){return t||(t="60px"),e||(e="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+e+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(r.svgSize,"#f8f8f8","#32c682")}var f=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),p=t.innerWidth,m=f>=p?p-40+"px":f+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+r.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+d+"</div>",y=t.document.createElement("div");y.id=A.ID,y.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=r.zindex,y.style.background=r.backgroundColor,y.style.animationDuration=r.cssAnimationDuration+"ms",y.style.fontFamily='"'+r.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",r.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+h,!t.document.getElementById(y.id)&&(t.document.body.appendChild(y),r.clickToClose)&&t.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var t=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(t))}),r.cssAnimationDuration)}))}else if(t.document.getElementById(A.ID))var v=t.document.getElementById(A.ID),b=setTimeout((function(){v.classList.add("nx-remove");var t=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(t))}),r.cssAnimationDuration);clearTimeout(b)}),s);r=W(!0,r,l)},ot=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},st=0,at=function(e,n,i,r,s,l){var c;if(Array.isArray(i)){if(1>i.length)return F("Array of HTMLElements should contains at least one HTMLElement."),!1;c=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return F("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;c=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return F("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=t.document.querySelectorAll(i);if(1>u.length)return F('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;c=u}o||lt.Block.init({});var h=W(!0,o,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof s&&!Array.isArray(s)){var d={};"object"==typeof r?d=r:"object"==typeof s&&(d=s),o=W(!0,o,d)}var f="";"string"==typeof r&&0<r.length&&(f=r),o.cssAnimation||(o.cssAnimationDuration=0);var p=B.className;"string"==typeof o.className&&(p=o.className.trim());var m="number"==typeof o.querySelectorLimit?o.querySelectorLimit:200,g=(c||[]).length>=m?m:c.length,y="nx-block-temporary-position";if(e){for(var v,b=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],w=0;w<g;w++)if(v=c[w]){if(-1<b.indexOf(v.tagName.toLocaleLowerCase("en")))break;var x=v.querySelectorAll("[id^="+B.ID+"]");if(1>x.length){var k="";n&&(k=n===R?$(o.svgSize,o.svgColor):n===L?q(o.svgSize,o.svgColor):n===O?X(o.svgSize,o.svgColor):n===M?K(o.svgSize,o.svgColor):n===P?Y(o.svgSize,o.svgColor):V(o.svgSize,o.svgColor));var E='<span class="'+p+'-icon" style="width:'+o.svgSize+";height:"+o.svgSize+';">'+k+"</span>",I="";0<f.length&&(f=f.length>o.messageMaxLength?H(f).substring(0,o.messageMaxLength)+"...":H(f),I='<span style="font-size:'+o.messageFontSize+";color:"+o.messageColor+';" class="'+p+'-message">'+f+"</span>"),st++;var S=t.document.createElement("div");S.id=B.ID+"-"+st,S.className=p+(o.cssAnimation?" nx-with-animation":""),S.style.position=o.position,S.style.zIndex=o.zindex,S.style.background=o.backgroundColor,S.style.animationDuration=o.cssAnimationDuration+"ms",S.style.fontFamily='"'+o.fontFamily+'", '+a,S.style.display="flex",S.style.flexWrap="wrap",S.style.flexDirection="column",S.style.alignItems="center",S.style.justifyContent="center",o.rtl&&(S.setAttribute("dir","rtl"),S.classList.add("nx-rtl-on")),S.innerHTML=E+I;var T,C=t.getComputedStyle(v).getPropertyValue("position"),_="string"==typeof C?C.toLocaleLowerCase("en"):"relative",N=Math.round(1.25*parseInt(o.svgSize))+40,A="";N>(v.offsetHeight||0)&&(A="min-height:"+N+"px;"),T=v.getAttribute("id")?"#"+v.getAttribute("id"):v.classList[0]?"."+v.classList[0]:(v.tagName||"").toLocaleLowerCase("en");var D="",z=-1>=["absolute","relative","fixed","sticky"].indexOf(_);if(z||0<A.length){if(!j("head"))return!1;z&&(D="position:relative!important;");var G='<style id="Style-'+B.ID+"-"+st+'">'+T+"."+y+"{"+D+A+"}</style>",J=t.document.createRange();J.selectNode(t.document.head);var Q=J.createContextualFragment(G);t.document.head.appendChild(Q),v.classList.add(y)}v.appendChild(S)}}}else var Z=function(e){var n=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e);var i=e.getAttribute("id"),r=t.document.getElementById("Style-"+i);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(n)}),o.cssAnimationDuration)},tt=function(t){if(t&&0<t.length)for(var e,n=0;n<t.length;n++)(e=t[n])&&(e.classList.add("nx-remove"),Z(e));else U("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},et=function(t){var e=setTimeout((function(){t.classList.remove(y),clearTimeout(e)}),o.cssAnimationDuration+300)},nt=setTimeout((function(){for(var t,e=0;e<g;e++)(t=c[e])&&(et(t),x=t.querySelectorAll("[id^="+B.ID+"]"),tt(x));clearTimeout(nt)}),l);o=W(!0,o,h)},lt={Notify:{init:function(t){e=W(!0,d,t),z(G,"NotiflixNotifyInternalCSS")},merge:function(t){return e?void(e=W(!0,e,t)):(F("You have to initialize the Notify module before call Merge function."),!1)},success:function(t,e,n){Q(l,t,e,n)},failure:function(t,e,n){Q(c,t,e,n)},warning:function(t,e,n){Q(u,t,e,n)},info:function(t,e,n){Q(h,t,e,n)}},Report:{init:function(t){n=W(!0,y,t),z(Z,"NotiflixReportInternalCSS")},merge:function(t){return n?void(n=W(!0,n,t)):(F("You have to initialize the Report module before call Merge function."),!1)},success:function(t,e,n,i,r){tt(f,t,e,n,i,r)},failure:function(t,e,n,i,r){tt(p,t,e,n,i,r)},warning:function(t,e,n,i,r){tt(m,t,e,n,i,r)},info:function(t,e,n,i,r){tt(g,t,e,n,i,r)}},Confirm:{init:function(t){i=W(!0,x,t),z(et,"NotiflixConfirmInternalCSS")},merge:function(t){return i?void(i=W(!0,i,t)):(F("You have to initialize the Confirm module before call Merge function."),!1)},show:function(t,e,n,i,r,o,s){nt(v,t,e,null,n,i,r,o,s)},ask:function(t,e,n,i,r,o,s,a){nt(b,t,e,n,i,r,o,s,a)},prompt:function(t,e,n,i,r,o,s,a){nt(w,t,e,n,i,r,o,s,a)}},Loading:{init:function(t){r=W(!0,A,t),z(it,"NotiflixLoadingInternalCSS")},merge:function(t){return r?void(r=W(!0,r,t)):(F("You have to initialize the Loading module before call Merge function."),!1)},standard:function(t,e){rt(k,t,e,!0,0)},hourglass:function(t,e){rt(E,t,e,!0,0)},circle:function(t,e){rt(I,t,e,!0,0)},arrows:function(t,e){rt(S,t,e,!0,0)},dots:function(t,e){rt(T,t,e,!0,0)},pulse:function(t,e){rt(C,t,e,!0,0)},custom:function(t,e){rt(_,t,e,!0,0)},notiflix:function(t,e){rt(N,t,e,!0,0)},remove:function(t){"number"!=typeof t&&(t=0),rt(null,null,null,!1,t)},change:function(e){!function(e){"string"!=typeof e&&(e="");var n=t.document.getElementById(A.ID);if(n)if(0<e.length){e=e.length>r.messageMaxLength?H(e).substring(0,r.messageMaxLength)+"...":H(e);var i=n.getElementsByTagName("p")[0];if(i)i.innerHTML=e;else{var o=t.document.createElement("p");o.id=r.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=r.messageColor,o.style.fontSize=r.messageFontSize,o.innerHTML=e,n.appendChild(o)}}else F("Where is the new message?")}(e)}},Block:{init:function(t){o=W(!0,B,t),z(ot,"NotiflixBlockInternalCSS")},merge:function(t){return o?void(o=W(!0,o,t)):(F('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(t,e,n){at(!0,D,t,e,n)},hourglass:function(t,e,n){at(!0,R,t,e,n)},circle:function(t,e,n){at(!0,L,t,e,n)},arrows:function(t,e,n){at(!0,O,t,e,n)},dots:function(t,e,n){at(!0,M,t,e,n)},pulse:function(t,e,n){at(!0,P,t,e,n)},remove:function(t,e){"number"!=typeof e&&(e=0),at(!1,null,t,null,null,e)}}};return"object"==typeof t.Notiflix?W(!0,t.Notiflix,{Notify:lt.Notify,Report:lt.Report,Confirm:lt.Confirm,Loading:lt.Loading,Block:lt.Block}):{Notify:lt.Notify,Report:lt.Report,Confirm:lt.Confirm,Loading:lt.Loading,Block:lt.Block}},"function"==typeof define&&define.amd?define([],(function(){return En(kn)})):"object"==typeof In?In=En(kn):kn.Notiflix=En(kn);const _n=new class{addAlreadyReadStyles(t){const e=document.querySelector(`[data-id='${t}']`);e.firstElementChild.classList.add("already-read");e.lastElementChild.classList.add("already-read-bg")}checkFetchedNewsByID(t){const e=this.getJsonFromLocalStorage("IdOfHaveReadNews"),n=this.dataFromLocalStorage(e);null!==n&&t.forEach((t=>{n.includes(String(t.id))&&this.addAlreadyReadStyles(String(t.id))}))}dataFromLocalStorage(t){try{return JSON.parse(t)}catch(t){console.log(t.name),console.log(t.message)}}getJsonFromLocalStorage(t){return localStorage.getItem(t)}constructor(){this.currentItemID=null}};function Nn(t){_n.currentItemID=t.target.parentNode.parentNode.getAttribute("data-id");const e=_n.getJsonFromLocalStorage("IdOfHaveReadNews"),n=_n.dataFromLocalStorage(e);null!==n?(n.push(_n.currentItemID),localStorage.setItem("IdOfHaveReadNews",JSON.stringify(n))):localStorage.setItem("IdOfHaveReadNews",JSON.stringify([_n.currentItemID])),_n.addAlreadyReadStyles(_n.currentItemID)}var An,Dn,Rn,Ln=An={};function On(){throw new Error("setTimeout has not been defined")}function Mn(){throw new Error("clearTimeout has not been defined")}function Pn(t){if(Dn===setTimeout)return setTimeout(t,0);if((Dn===On||!Dn)&&setTimeout)return Dn=setTimeout,setTimeout(t,0);try{return Dn(t,0)}catch(e){try{return Dn.call(null,t,0)}catch(e){return Dn.call(this,t,0)}}}!function(){try{Dn="function"==typeof setTimeout?setTimeout:On}catch(t){Dn=On}try{Rn="function"==typeof clearTimeout?clearTimeout:Mn}catch(t){Rn=Mn}}();var Bn,Fn=[],Un=!1,jn=-1;function zn(){Un&&Bn&&(Un=!1,Bn.length?Fn=Bn.concat(Fn):jn=-1,Fn.length&&Wn())}function Wn(){if(!Un){var t=Pn(zn);Un=!0;for(var e=Fn.length;e;){for(Bn=Fn,Fn=[];++jn<e;)Bn&&Bn[jn].run();jn=-1,e=Fn.length}Bn=null,Un=!1,function(t){if(Rn===clearTimeout)return clearTimeout(t);if((Rn===Mn||!Rn)&&clearTimeout)return Rn=clearTimeout,clearTimeout(t);try{Rn(t)}catch(e){try{return Rn.call(null,t)}catch(e){return Rn.call(this,t)}}}(t)}}function Hn(t,e){this.fun=t,this.array=e}function Vn(){}Ln.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];Fn.push(new Hn(t,e)),1!==Fn.length||Un||Pn(Wn)},Hn.prototype.run=function(){this.fun.apply(null,this.array)},Ln.title="browser",Ln.browser=!0,Ln.env={},Ln.argv=[],Ln.version="",Ln.versions={},Ln.on=Vn,Ln.addListener=Vn,Ln.once=Vn,Ln.off=Vn,Ln.removeListener=Vn,Ln.removeAllListeners=Vn,Ln.emit=Vn,Ln.prependListener=Vn,Ln.prependOnceListener=Vn,Ln.listeners=function(t){return[]},Ln.binding=function(t){throw new Error("process.binding is not supported")},Ln.cwd=function(){return"/"},Ln.chdir=function(t){throw new Error("process.chdir is not supported")},Ln.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $n=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},qn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],o=e+1<t.length,s=o?t[e+1]:0,a=e+2<t.length,l=a?t[e+2]:0,c=r>>2,u=(3&r)<<4|s>>4;let h=(15&s)<<2|l>>6,d=63&l;a||(d=64,o||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($n(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&o)}else if(r>239&&r<365){const o=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(o>>10)),e[i++]=String.fromCharCode(56320+(1023&o))}else{const o=t[n++],s=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&s)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],o=e<t.length?n[t.charAt(e)]:0;++e;const s=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==o||null==s||null==a)throw Error();const l=r<<2|o>>4;if(i.push(l),64!==s){const t=o<<4&240|s>>2;if(i.push(t),64!==a){const t=s<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Xn=function(t){return function(t){const e=$n(t);return qn.encodeByteArray(e,!0)}(t).replace(/\./g,"")},Kn=function(t){try{return qn.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yn=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Gn=()=>{try{return Yn()||(()=>{if(void 0===An||void 0===An.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&Kn(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},Jn=t=>{var e,n;return null===(n=null===(e=Gn())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},Qn=t=>{var e;return null===(e=Gn())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zn{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ti(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ei(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function ni(){const t=ti();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ii(){try{return"object"==typeof indexedDB}catch(t){return!1}}function ri(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}function oi(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,si.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ai.prototype.create)}}class ai{create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?function(t,e){return t.replace(li,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new si(i,s,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const li=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ui(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],o=e[r];if(hi(n)&&hi(o)){if(!ui(n,o))return!1}else if(n!==o)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function hi(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function di(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function fi(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function pi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t,e){const n=new gi(t,e);return n.subscribe.bind(n)}class gi{next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=yi),void 0===i.error&&(i.error=yi),void 0===i.complete&&(i.complete=yi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}}function yi(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t,e=1e3,n=2){const i=e*Math.pow(n,t),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bi(t){return t&&t._delegate?t._delegate:t}class wi{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xi{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new Zn;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,"[DEFAULT]"===i?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class ki{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new xi(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=[];var Ii,Si;(Si=Ii||(Ii={}))[Si.DEBUG=0]="DEBUG",Si[Si.VERBOSE=1]="VERBOSE",Si[Si.INFO=2]="INFO",Si[Si.WARN=3]="WARN",Si[Si.ERROR=4]="ERROR",Si[Si.SILENT=5]="SILENT";const Ti={debug:Ii.DEBUG,verbose:Ii.VERBOSE,info:Ii.INFO,warn:Ii.WARN,error:Ii.ERROR,silent:Ii.SILENT},Ci=Ii.INFO,_i={[Ii.DEBUG]:"log",[Ii.VERBOSE]:"log",[Ii.INFO]:"info",[Ii.WARN]:"warn",[Ii.ERROR]:"error"},Ni=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=_i[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class Ai{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ii))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Ti[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ii.DEBUG,...t),this._logHandler(this,Ii.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ii.VERBOSE,...t),this._logHandler(this,Ii.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ii.INFO,...t),this._logHandler(this,Ii.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ii.WARN,...t),this._logHandler(this,Ii.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ii.ERROR,...t),this._logHandler(this,Ii.ERROR,...t)}constructor(t){this.name=t,this._logLevel=Ci,this._logHandler=Ni,this._userLogHandler=null,Ei.push(this)}}let Di,Ri;const Li=new WeakMap,Oi=new WeakMap,Mi=new WeakMap,Pi=new WeakMap,Bi=new WeakMap;let Fi={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return Oi.get(t);if("objectStoreNames"===e)return t.objectStoreNames||Mi.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zi(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function Ui(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ri||(Ri=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Wi(this),e),zi(Li.get(this))}:function(...e){return zi(t.apply(Wi(this),e))}:function(e,...n){const i=t.call(Wi(this),e,...n);return Mi.set(i,e.sort?e.sort():[e]),zi(i)}}function ji(t){return"function"==typeof t?Ui(t):(t instanceof IDBTransaction&&function(t){if(Oi.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{e(),i()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)}));Oi.set(t,e)}(t),e=t,(Di||(Di=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,Fi):t);var e}function zi(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{e(zi(t.result)),i()},o=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&Li.set(e,t)})).catch((()=>{})),Bi.set(e,t),e}(t);if(Pi.has(t))return Pi.get(t);const e=ji(t);return e!==t&&(Pi.set(t,e),Bi.set(e,t)),e}const Wi=t=>Bi.get(t);function Hi(t,e,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const s=indexedDB.open(t,e),a=zi(s);return i&&s.addEventListener("upgradeneeded",(t=>{i(zi(s.result),t.oldVersion,t.newVersion,zi(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((t=>{o&&t.addEventListener("close",(()=>o())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const Vi=["get","getKey","getAll","getAllKeys","count"],$i=["put","add","delete","clear"],qi=new Map;function Xi(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(qi.get(e))return qi.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=$i.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Vi.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,r?"readwrite":"readonly");let s=o.store;return i&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),r&&o.done]))[0]};return qi.set(e,o),o}Fi=(t=>({...t,get:(e,n,i)=>Xi(e,n)||t.get(e,n,i),has:(e,n)=>!!Xi(e,n)||t.has(e,n)}))(Fi);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ki{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const Yi=new Ai("@firebase/app"),Gi={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ji=new Map,Qi=new Map;function Zi(t,e){try{t.container.addComponent(e)}catch(n){Yi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function tr(t){const e=t.name;if(Qi.has(e))return Yi.debug(`There were multiple attempts to register component ${e}.`),!1;Qi.set(e,t);for(const e of Ji.values())Zi(e,t);return!0}function er(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nr=new ai("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ir{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new wi("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw nr.create("bad-app-name",{appName:String(r)});var o;if(n||(n=null===(o=Gn())||void 0===o?void 0:o.config),!n)throw nr.create("no-options");const s=Ji.get(r);if(s){if(ui(n,s.options)&&ui(i,s.config))return s;throw nr.create("duplicate-app",{appName:r})}const a=new ki(r);for(const t of Qi.values())a.addComponent(t);const l=new ir(n,i,a);return Ji.set(r,l),l}function or(t="[DEFAULT]"){const e=Ji.get(t);if(!e&&"[DEFAULT]"===t)return rr();if(!e)throw nr.create("no-app",{appName:t});return e}function sr(t,e,n){var i;let r=null!==(i=Gi[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const t=[`Unable to register library "${r}" with version "${e}":`];return o&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Yi.warn(t.join(" "))}tr(new wi(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}let ar=null;function lr(){return ar||(ar=Hi("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-heartbeat-store")}}).catch((t=>{throw nr.create("idb-open",{originalErrorMessage:t.message})}))),ar}async function cr(t,e){try{const n=(await lr()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(e,ur(t)),n.done}catch(t){if(t instanceof si)Yi.warn(t.message);else{const e=nr.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Yi.warn(e.message)}}}function ur(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=dr();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=dr(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),pr(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),pr(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=Xn(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new fr(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function dr(){return(new Date).toISOString().substring(0,10)}class fr{async runIndexedDBEnvironmentCheck(){return!!ii()&&ri().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{return(await lr()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(ur(t))}catch(t){if(t instanceof si)Yi.warn(t.message);else{const e=nr.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Yi.warn(e.message)}}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return cr(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return cr(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function pr(t){return Xn(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mr;mr="",tr(new wi("platform-logger",(t=>new Ki(t)),"PRIVATE")),tr(new wi("heartbeat",(t=>new hr(t)),"PRIVATE")),sr("@firebase/app","0.9.1",mr),sr("@firebase/app","0.9.1","esm2017"),sr("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
sr("firebase","9.16.0","app");var gr,yr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},vr={},br=br||{},wr=yr||self;function xr(){}function kr(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Er(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Ir="closure_uid_"+(1e9*Math.random()>>>0),Sr=0;function Tr(t,e,n){return t.call.apply(t.bind,arguments)}function Cr(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function _r(t,e,n){return(_r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Tr:Cr).apply(null,arguments)}function Nr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Ar(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,i){for(var r=Array(arguments.length-2),o=2;o<arguments.length;o++)r[o-2]=arguments[o];return e.prototype[n].apply(t,r)}}function Dr(){this.s=this.s,this.o=this.o}Dr.prototype.s=!1,Dr.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,Ir)&&t[Ir]||(t[Ir]=++Sr))},Dr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Rr=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Lr(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Or(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(kr(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function Mr(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Mr.prototype.h=function(){this.defaultPrevented=!0};var Pr=function(){if(!wr.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{wr.addEventListener("test",xr,e),wr.removeEventListener("test",xr,e)}catch(t){}return t}();function Br(t){return/^[\s\xa0]*$/.test(t)}var Fr=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ur(t,e){return t<e?-1:t>e?1:0}function jr(){var t=wr.navigator;return t&&(t=t.userAgent)?t:""}function zr(t){return-1!=jr().indexOf(t)}function Wr(t){return Wr[" "](t),t}Wr[" "]=xr;var Hr,Vr,$r=zr("Opera"),qr=zr("Trident")||zr("MSIE"),Xr=zr("Edge"),Kr=Xr||qr,Yr=zr("Gecko")&&!(-1!=jr().toLowerCase().indexOf("webkit")&&!zr("Edge"))&&!(zr("Trident")||zr("MSIE"))&&!zr("Edge"),Gr=-1!=jr().toLowerCase().indexOf("webkit")&&!zr("Edge");function Jr(){var t=wr.document;return t?t.documentMode:void 0}t:{var Qr="",Zr=(Vr=jr(),Yr?/rv:([^\);]+)(\)|;)/.exec(Vr):Xr?/Edge\/([\d\.]+)/.exec(Vr):qr?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Vr):Gr?/WebKit\/(\S+)/.exec(Vr):$r?/(?:Version)[ \/]?(\S+)/.exec(Vr):void 0);if(Zr&&(Qr=Zr?Zr[1]:""),qr){var to=Jr();if(null!=to&&to>parseFloat(Qr)){Hr=String(to);break t}}Hr=Qr}var eo,no={};function io(){return function(t){var e=no;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Fr(String(Hr)).split("."),n=Fr("9").split("."),i=Math.max(e.length,n.length);for(let s=0;0==t&&s<i;s++){var r=e[s]||"",o=n[s]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==r[0].length&&0==o[0].length)break;t=Ur(0==r[1].length?0:parseInt(r[1],10),0==o[1].length?0:parseInt(o[1],10))||Ur(0==r[2].length,0==o[2].length)||Ur(r[2],o[2]),r=r[3],o=o[3]}while(0==t)}return 0<=t}))}if(wr.document&&qr){var ro=Jr();eo=ro||(parseInt(Hr,10)||void 0)}else eo=void 0;var oo=eo;function so(t,e){if(Mr.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Yr){t:{try{Wr(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:ao[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&so.X.h.call(this)}}Ar(so,Mr);var ao={2:"touch",3:"pen",4:"mouse"};so.prototype.h=function(){so.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var lo="closure_listenable_"+(1e6*Math.random()|0),co=0;function uo(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++co,this.ba=this.ea=!1}function ho(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function fo(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function po(t){const e={};for(const n in t)e[n]=t[n];return e}const mo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function go(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<mo.length;e++)n=mo[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function yo(t){this.src=t,this.g={},this.h=0}function vo(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],o=Rr(r,e);(i=0<=o)&&Array.prototype.splice.call(r,o,1),i&&(ho(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function bo(t,e,n,i){for(var r=0;r<t.length;++r){var o=t[r];if(!o.ba&&o.listener==e&&o.capture==!!n&&o.ha==i)return r}return-1}yo.prototype.add=function(t,e,n,i,r){var o=t.toString();(t=this.g[o])||(t=this.g[o]=[],this.h++);var s=bo(t,e,i,r);return-1<s?(e=t[s],n||(e.ea=!1)):((e=new uo(e,this.src,o,!!i,r)).ea=n,t.push(e)),e};var wo="closure_lm_"+(1e6*Math.random()|0),xo={};function ko(t,e,n,i,r){if(i&&i.once)return Io(t,e,n,i,r);if(Array.isArray(e)){for(var o=0;o<e.length;o++)ko(t,e[o],n,i,r);return null}return n=Do(n),t&&t[lo]?t.N(e,n,Er(i)?!!i.capture:!!i,r):Eo(t,e,n,!1,i,r)}function Eo(t,e,n,i,r,o){if(!e)throw Error("Invalid event type");var s=Er(r)?!!r.capture:!!r,a=No(t);if(a||(t[wo]=a=new yo(t)),(n=a.add(e,n,i,s,o)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=_o;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Pr||(r=s),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Co(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function Io(t,e,n,i,r){if(Array.isArray(e)){for(var o=0;o<e.length;o++)Io(t,e[o],n,i,r);return null}return n=Do(n),t&&t[lo]?t.O(e,n,Er(i)?!!i.capture:!!i,r):Eo(t,e,n,!0,i,r)}function So(t,e,n,i,r){if(Array.isArray(e))for(var o=0;o<e.length;o++)So(t,e[o],n,i,r);else i=Er(i)?!!i.capture:!!i,n=Do(n),t&&t[lo]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=bo(o=t.g[e],n,i,r))&&(ho(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=No(t))&&(e=t.g[e.toString()],t=-1,e&&(t=bo(e,n,i,r)),(n=-1<t?e[t]:null)&&To(n))}function To(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[lo])vo(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Co(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=No(e))?(vo(n,t),0==n.h&&(n.src=null,e[wo]=null)):ho(t)}}}function Co(t){return t in xo?xo[t]:xo[t]="on"+t}function _o(t,e){if(t.ba)t=!0;else{e=new so(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&To(t),t=n.call(i,e)}return t}function No(t){return(t=t[wo])instanceof yo?t:null}var Ao="__closure_events_fn_"+(1e9*Math.random()>>>0);function Do(t){return"function"==typeof t?t:(t[Ao]||(t[Ao]=function(e){return t.handleEvent(e)}),t[Ao])}function Ro(){Dr.call(this),this.i=new yo(this),this.P=this,this.I=null}function Lo(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new Mr(e,t);else if(e instanceof Mr)e.target=e.target||t;else{var r=e;go(e=new Mr(i,t),r)}if(r=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];r=Oo(s,i,!0,e)&&r}if(r=Oo(s=e.g=t,i,!0,e)&&r,r=Oo(s,i,!1,e)&&r,n)for(o=0;o<n.length;o++)r=Oo(s=e.g=n[o],i,!1,e)&&r}function Oo(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ba&&s.capture==n){var a=s.listener,l=s.ha||s.src;s.ea&&vo(t.i,s),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}Ar(Ro,Dr),Ro.prototype[lo]=!0,Ro.prototype.removeEventListener=function(t,e,n,i){So(this,t,e,n,i)},Ro.prototype.M=function(){if(Ro.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)ho(n[i]);delete e.g[t],e.h--}}this.I=null},Ro.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Ro.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Mo=wr.JSON.stringify;function Po(){var t=Ho;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Bo,Fo=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new Uo),(t=>t.reset()));class Uo{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function jo(t){wr.setTimeout((()=>{throw t}),0)}function zo(t,e){Bo||function(){var t=wr.Promise.resolve(void 0);Bo=function(){t.then(Vo)}}(),Wo||(Bo(),Wo=!0),Ho.add(t,e)}var Wo=!1,Ho=new class{add(t,e){const n=Fo.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function Vo(){for(var t;t=Po();){try{t.h.call(t.g)}catch(t){jo(t)}var e=Fo;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Wo=!1}function $o(t,e){Ro.call(this),this.h=t||1,this.g=e||wr,this.j=_r(this.lb,this),this.l=Date.now()}function qo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Xo(t,e,n){if("function"==typeof t)n&&(t=_r(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=_r(t.handleEvent,t)}return 2147483647<Number(e)?-1:wr.setTimeout(t,e||0)}function Ko(t){t.g=Xo((()=>{t.g=null,t.i&&(t.i=!1,Ko(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Ar($o,Ro),(gr=$o.prototype).ca=!1,gr.R=null,gr.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Lo(this,"tick"),this.ca&&(qo(this),this.start()))}},gr.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},gr.M=function(){$o.X.M.call(this),qo(this),delete this.g};class Yo extends Dr{l(t){this.h=arguments,this.g?this.i=!0:Ko(this)}M(){super.M(),this.g&&(wr.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function Go(t){Dr.call(this),this.h=t,this.g={}}Ar(Go,Dr);var Jo=[];function Qo(t,e,n,i){Array.isArray(n)||(n&&(Jo[0]=n.toString()),n=Jo);for(var r=0;r<n.length;r++){var o=ko(e,n[r],i||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Zo(t){fo(t.g,(function(t,e){this.g.hasOwnProperty(e)&&To(t)}),t),t.g={}}function ts(){this.g=!0}function es(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var o=r[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<r.length;s++)r[s]=""}}}return Mo(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}Go.prototype.M=function(){Go.X.M.call(this),Zo(this)},Go.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ts.prototype.Aa=function(){this.g=!1},ts.prototype.info=function(){};var ns={},is=null;function rs(){return is=is||new Ro}function os(t){Mr.call(this,ns.Pa,t)}function ss(t){const e=rs();Lo(e,new os(e))}function as(t,e){Mr.call(this,ns.STAT_EVENT,t),this.stat=e}function ls(t){const e=rs();Lo(e,new as(e,t))}function cs(t,e){Mr.call(this,ns.Qa,t),this.size=e}function us(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return wr.setTimeout((function(){t()}),e)}ns.Pa="serverreachability",Ar(os,Mr),ns.STAT_EVENT="statevent",Ar(as,Mr),ns.Qa="timingevent",Ar(cs,Mr);var hs={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ds={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function fs(){}function ps(t){return t.h||(t.h=t.i())}function ms(){}fs.prototype.h=null;var gs,ys={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function vs(){Mr.call(this,"d")}function bs(){Mr.call(this,"c")}function ws(){}function xs(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new Go(this),this.O=Es,t=Kr?125:void 0,this.T=new $o(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ks}function ks(){this.i=null,this.g="",this.h=!1}Ar(vs,Mr),Ar(bs,Mr),Ar(ws,fs),ws.prototype.g=function(){return new XMLHttpRequest},ws.prototype.i=function(){return{}},gs=new ws;var Es=45e3,Is={},Ss={};function Ts(t,e,n){t.K=1,t.v=$s(js(e)),t.s=n,t.P=!0,Cs(t,null)}function Cs(t,e){t.F=Date.now(),Ds(t),t.A=js(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),ra(n.i,"t",i),t.C=0,n=t.l.H,t.h=new ks,t.g=il(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Yo(_r(t.La,t,t.g),t.N)),Qo(t.S,t.g,"readystatechange",t.ib),e=t.H?po(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ss(),function(t,e,n,i,r,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");s=2<=h.length&&"type"==h[1]?s+(u+"=")+c+"&":s+(u+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+s}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function _s(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Ns(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if(i=As(t,n),i==Ss){4==e&&(t.o=4,ls(14),r=!1),es(t.j,t.m,null,"[Incomplete Response]");break}if(i==Is){t.o=4,ls(15),es(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}es(t.j,t.m,i,null),Ps(t,i)}_s(t)&&i!=Ss&&i!=Is&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ls(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ya(e),e.K=!0,ls(11))):(es(t.j,t.m,n,"[Invalid Chunked Response]"),Ms(t),Os(t))}function As(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Ss:(n=Number(e.substring(n,i)),isNaN(n)?Is:(i+=1)+n>e.length?Ss:(e=e.substr(i,n),t.C=i+n,e))}function Ds(t){t.V=Date.now()+t.O,Rs(t,t.O)}function Rs(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=us(_r(t.gb,t),e)}function Ls(t){t.B&&(wr.clearTimeout(t.B),t.B=null)}function Os(t){0==t.l.G||t.I||Qa(t.l,t)}function Ms(t){Ls(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qo(t.T),Zo(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ps(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||ua(n.h,t)))if(!t.J&&ua(n.h,t)&&3==n.G){try{var i=n.Fa.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ja(n),za(n)}Ka(n),ls(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=us(_r(n.cb,n),6e3));if(1>=ca(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else tl(n,11)}else if((t.J||n.g==t)&&Ja(n),!Br(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const e=c[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const r=c[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=i.h;o.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(ha(o,o.h),o.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.za=t,Vs(i.F,i.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var s=t;if((i=n).sa=nl(i,i.H?i.ka:null,i.V),s.J){da(i.h,s);var a=s,l=i.J;l&&a.setTimeout(l),a.B&&(Ls(a),Ds(a)),i.g=s}else Xa(i);0<n.i.length&&Ha(n)}else"stop"!=c[0]&&"close"!=c[0]||tl(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?tl(n,7):ja(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}ss()}catch(t){}}function Bs(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(kr(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(kr(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(kr(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,o=0;o<r;o++)e.call(void 0,i[o],n&&n[o],t)}(gr=xs.prototype).setTimeout=function(t){this.O=t},gr.ib=function(t){t=t.target;const e=this.L;e&&3==Oa(t)?e.l():this.La(t)},gr.La=function(t){try{if(t==this.g)t:{const u=Oa(this.g);var e=this.g.Ea();this.g.aa();if(!(3>u)&&(3!=u||Kr||this.g&&(this.h.h||this.g.fa()||Ma(this.g)))){this.I||4!=u||7==e||ss(),Ls(this);var n=this.g.aa();this.Y=n;e:if(_s(this)){var i=Ma(this.g);t="";var r=i.length,o=4==Oa(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ms(this),Os(this);var s="";break e}this.h.i=new wr.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:o&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=200==n,function(t,e,n,i,r,o,s){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+o+" "+s}))}(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Br(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,ls(12),Ms(this),Os(this);break t}es(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ps(this,n)}this.P?(Ns(this,u,s),Kr&&this.i&&3==u&&(Qo(this.S,this.T,"tick",this.hb),this.T.start())):(es(this.j,this.m,s,null),Ps(this,s)),4==u&&Ms(this),this.i&&!this.I&&(4==u?Qa(this.l,this):(this.i=!1,Ds(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,ls(12)):(this.o=0,ls(13)),Ms(this),Os(this)}}}catch(t){}},gr.hb=function(){if(this.g){var t=Oa(this.g),e=this.g.fa();this.C<e.length&&(Ls(this),Ns(this,t,e),this.i&&4!=t&&Ds(this))}},gr.cancel=function(){this.I=!0,Ms(this)},gr.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(ss(),ls(17)),Ms(this),this.o=2,Os(this)):Rs(this,this.V-t)};var Fs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Us(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Us){this.h=void 0!==e?e:t.h,zs(this,t.j),this.s=t.s,this.g=t.g,Ws(this,t.m),this.l=t.l,e=t.i;var n=new ta;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Hs(this,n),this.o=t.o}else t&&(n=String(t).match(Fs))?(this.h=!!e,zs(this,n[1]||"",!0),this.s=qs(n[2]||""),this.g=qs(n[3]||"",!0),Ws(this,n[4]),this.l=qs(n[5]||"",!0),Hs(this,n[6]||"",!0),this.o=qs(n[7]||"")):(this.h=!!e,this.i=new ta(null,this.h))}function js(t){return new Us(t)}function zs(t,e,n){t.j=n?qs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ws(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Hs(t,e,n){e instanceof ta?(t.i=e,function(t,e){e&&!t.j&&(ea(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(na(this,e),ra(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Xs(e,Qs)),t.i=new ta(e,t.h))}function Vs(t,e,n){t.i.set(e,n)}function $s(t){return Vs(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function qs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xs(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Ks),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ks(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Us.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xs(e,Ys,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Xs(e,Ys,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Xs(n,"/"==n.charAt(0)?Js:Gs,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xs(n,Zs)),t.join("")};var Ys=/[#\/\?@]/g,Gs=/[#\?:]/g,Js=/[#\?]/g,Qs=/[#\?@]/g,Zs=/#/g;function ta(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ea(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var o=t[n].substring(0,i);r=t[n].substring(i+1)}else o=t[n];e(o,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function na(t,e){ea(t),e=oa(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ia(t,e){return ea(t),e=oa(t,e),t.g.has(e)}function ra(t,e,n){na(t,e),0<n.length&&(t.i=null,t.g.set(oa(t,e),Lr(n)),t.h+=n.length)}function oa(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(gr=ta.prototype).add=function(t,e){ea(this),this.i=null,t=oa(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},gr.forEach=function(t,e){ea(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},gr.oa=function(){ea(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},gr.W=function(t){ea(this);let e=[];if("string"==typeof t)ia(this,t)&&(e=e.concat(this.g.get(oa(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},gr.set=function(t,e){return ea(this),this.i=null,ia(this,t=oa(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},gr.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},gr.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const o=encodeURIComponent(String(i)),s=this.W(i);for(i=0;i<s.length;i++){var r=o;""!==s[i]&&(r+="="+encodeURIComponent(String(s[i]))),t.push(r)}}return this.i=t.join("&")};function sa(t){this.l=t||aa,wr.PerformanceNavigationTiming?t=0<(t=wr.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(wr.g&&wr.g.Ga&&wr.g.Ga()&&wr.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var aa=10;function la(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ca(t){return t.h?1:t.g?t.g.size:0}function ua(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ha(t,e){t.g?t.g.add(e):t.h=e}function da(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function fa(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Lr(t.i)}function pa(){}function ma(){this.g=new pa}function ga(t,e,n){const i=n||"";try{Bs(t,(function(t,n){let r=t;Er(t)&&(r=Mo(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function ya(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function va(t){this.l=t.ac||null,this.j=t.jb||!1}function ba(t,e){Ro.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=wa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}sa.prototype.cancel=function(){if(this.i=fa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},pa.prototype.stringify=function(t){return wr.JSON.stringify(t,void 0)},pa.prototype.parse=function(t){return wr.JSON.parse(t,void 0)},Ar(va,fs),va.prototype.g=function(){return new ba(this.l,this.j)},va.prototype.i=function(t){return function(){return t}}({}),Ar(ba,Ro);var wa=0;function xa(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function ka(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ea(t)}function Ea(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(gr=ba.prototype).open=function(t,e){if(this.readyState!=wa)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ea(this)},gr.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||wr).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},gr.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ka(this)),this.readyState=wa},gr.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ea(this)),this.g&&(this.readyState=3,Ea(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==wr.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xa(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},gr.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ka(this):Ea(this),3==this.readyState&&xa(this)}},gr.Va=function(t){this.g&&(this.response=this.responseText=t,ka(this))},gr.Ua=function(t){this.g&&(this.response=t,ka(this))},gr.ga=function(){this.g&&ka(this)},gr.setRequestHeader=function(t,e){this.v.append(t,e)},gr.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},gr.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(ba.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Ia=wr.JSON.parse;function Sa(t){Ro.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ta,this.K=this.L=!1}Ar(Sa,Ro);var Ta="",Ca=/^https?$/i,_a=["POST","PUT"];function Na(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Aa(t),Ra(t)}function Aa(t){t.D||(t.D=!0,Lo(t,"complete"),Lo(t,"error"))}function Da(t){if(t.h&&void 0!==br&&(!t.C[1]||4!=Oa(t)||2!=t.aa()))if(t.v&&4==Oa(t))Xo(t.Ha,0,t);else if(Lo(t,"readystatechange"),4==Oa(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var r=String(t.H).match(Fs)[1]||null;if(!r&&wr.self&&wr.self.location){var o=wr.self.location.protocol;r=o.substr(0,o.length-1)}i=!Ca.test(r?r.toLowerCase():"")}n=i}if(n)Lo(t,"complete"),Lo(t,"success");else{t.m=6;try{var s=2<Oa(t)?t.g.statusText:""}catch(t){s=""}t.j=s+" ["+t.aa()+"]",Aa(t)}}finally{Ra(t)}}}function Ra(t,e){if(t.g){La(t);const n=t.g,i=t.C[0]?xr:null;t.g=null,t.C=null,e||Lo(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function La(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(wr.clearTimeout(t.A),t.A=null)}function Oa(t){return t.g?t.g.readyState:0}function Ma(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ta:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Pa(t){let e="";return fo(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Ba(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Pa(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Vs(t,e,n))}function Fa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ua(t){this.Ca=0,this.i=[],this.j=new ts,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Fa("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Fa("baseRetryDelayMs",5e3,t),this.bb=Fa("retryDelaySeedMs",1e4,t),this.$a=Fa("forwardChannelMaxRetries",2,t),this.ta=Fa("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new sa(t&&t.concurrentRequestLimit),this.Fa=new ma,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function ja(t){if(Wa(t),3==t.G){var e=t.U++,n=js(t.F);Vs(n,"SID",t.I),Vs(n,"RID",e),Vs(n,"TYPE","terminate"),$a(t,n),(e=new xs(t,t.j,e,void 0)).K=2,e.v=$s(js(n)),n=!1,wr.navigator&&wr.navigator.sendBeacon&&(n=wr.navigator.sendBeacon(e.v.toString(),"")),!n&&wr.Image&&((new Image).src=e.v,n=!0),n||(e.g=il(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ds(e)}el(t)}function za(t){t.g&&(Ya(t),t.g.cancel(),t.g=null)}function Wa(t){za(t),t.u&&(wr.clearTimeout(t.u),t.u=null),Ja(t),t.h.cancel(),t.m&&("number"==typeof t.m&&wr.clearTimeout(t.m),t.m=null)}function Ha(t){la(t.h)||t.m||(t.m=!0,zo(t.Ja,t),t.C=0)}function Va(t,e){var n;n=e?e.m:t.U++;const i=js(t.F);Vs(i,"SID",t.I),Vs(i,"RID",n),Vs(i,"AID",t.T),$a(t,i),t.o&&t.s&&Ba(i,t.o,t.s),n=new xs(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=qa(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ha(t.h,n),Ts(n,i,e)}function $a(t,e){t.ia&&fo(t.ia,(function(t,n){Vs(e,n,t)})),t.l&&Bs({},(function(t,n){Vs(e,n,t)}))}function qa(t,e,n){n=Math.min(t.i.length,n);var i=t.l?_r(t.l.Ra,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let s=0;s<n;s++){let n=r[s].h;const a=r[s].g;if(n-=e,0>n)e=Math.max(0,r[s].h-100),o=!1;else try{ga(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(o){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function Xa(t){t.g||t.u||(t.Z=1,zo(t.Ia,t),t.A=0)}function Ka(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=us(_r(t.Ia,t),Za(t,t.A)),t.A++,!0)}function Ya(t){null!=t.B&&(wr.clearTimeout(t.B),t.B=null)}function Ga(t){t.g=new xs(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=js(t.sa);Vs(e,"RID","rpc"),Vs(e,"SID",t.I),Vs(e,"CI",t.L?"0":"1"),Vs(e,"AID",t.T),Vs(e,"TYPE","xmlhttp"),$a(t,e),t.o&&t.s&&Ba(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=$s(js(e)),n.s=null,n.P=!0,Cs(n,t)}function Ja(t){null!=t.v&&(wr.clearTimeout(t.v),t.v=null)}function Qa(t,e){var n=null;if(t.g==e){Ja(t),Ya(t),t.g=null;var i=2}else{if(!ua(t.h,e))return;n=e.D,da(t.h,e),i=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;Lo(i=rs(),new cs(i,n)),Ha(t)}else Xa(t);else if(3==(r=e.o)||0==r&&0<t.pa||!(1==i&&function(t,e){return!(ca(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=us(_r(t.Ja,t,e),Za(t,t.C)),t.C++,0)))}(t,e)||2==i&&Ka(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:tl(t,5);break;case 4:tl(t,10);break;case 3:tl(t,6);break;default:tl(t,2)}}function Za(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function tl(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var i=_r(t.kb,t);n||(n=new Us("//www.google.com/images/cleardot.gif"),wr.location&&"http"==wr.location.protocol||zs(n,"https"),$s(n)),function(t,e){const n=new ts;if(wr.Image){const i=new Image;i.onload=Nr(ya,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Nr(ya,n,i,"TestLoadImage: error",!1,e),i.onabort=Nr(ya,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Nr(ya,n,i,"TestLoadImage: timeout",!1,e),wr.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else ls(2);t.G=0,t.l&&t.l.va(e),el(t),Wa(t)}function el(t){if(t.G=0,t.la=[],t.l){const e=fa(t.h);0==e.length&&0==t.i.length||(Or(t.la,e),Or(t.la,t.i),t.h.i.length=0,Lr(t.i),t.i.length=0),t.l.ua()}}function nl(t,e,n){var i=n instanceof Us?js(n):new Us(n,void 0);if(""!=i.g)e&&(i.g=e+"."+i.g),Ws(i,i.m);else{var r=wr.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var o=new Us(null,void 0);i&&zs(o,i),e&&(o.g=e),r&&Ws(o,r),n&&(o.l=n),i=o}return n=t.D,e=t.za,n&&e&&Vs(i,n,e),Vs(i,"VER",t.ma),$a(t,i),i}function il(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new Sa(new va({jb:!0})):new Sa(t.ra)).Ka(t.H),e}function rl(){}function ol(){if(qr&&!(10<=Number(oo)))throw Error("Environmental error: no available transport.")}function sl(t,e){Ro.call(this),this.g=new Ua(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Br(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Br(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new cl(this)}function al(t){vs.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function ll(){bs.call(this),this.status=1}function cl(t){this.g=t}(gr=Sa.prototype).Ka=function(t){this.L=t},gr.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gs.g(),this.C=this.u?ps(this.u):ps(gs),this.g.onreadystatechange=_r(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Na(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=wr.FormData&&t instanceof wr.FormData,!(0<=Rr(_a,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{La(this),0<this.B&&((this.K=function(t){return qr&&io()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_r(this.qa,this)):this.A=Xo(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Na(this,t)}},gr.qa=function(){void 0!==br&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Lo(this,"timeout"),this.abort(8))},gr.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Lo(this,"complete"),Lo(this,"abort"),Ra(this))},gr.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ra(this,!0)),Sa.X.M.call(this)},gr.Ha=function(){this.s||(this.F||this.v||this.l?Da(this):this.fb())},gr.fb=function(){Da(this)},gr.aa=function(){try{return 2<Oa(this)?this.g.status:-1}catch(t){return-1}},gr.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},gr.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Ia(e)}},gr.Ea=function(){return this.m},gr.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(gr=Ua.prototype).ma=8,gr.G=1,gr.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new xs(this,this.j,t,void 0);let o=this.s;if(this.S&&(o?(o=po(o),go(o,this.S)):o=this.S),null!==this.o||this.N||(r.H=o,o=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=qa(this,r,e),Vs(n=js(this.F),"RID",t),Vs(n,"CVER",22),this.D&&Vs(n,"X-HTTP-Session-Id",this.D),$a(this,n),o&&(this.N?e="headers="+encodeURIComponent(String(Pa(o)))+"&"+e:this.o&&Ba(n,this.o,o)),ha(this.h,r),this.Ya&&Vs(n,"TYPE","init"),this.O?(Vs(n,"$req",e),Vs(n,"SID","null"),r.Z=!0,Ts(r,n,null)):Ts(r,n,e),this.G=2}}else 3==this.G&&(t?Va(this,t):0==this.i.length||la(this.h)||Va(this))},gr.Ia=function(){if(this.u=null,Ga(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=us(_r(this.eb,this),t)}},gr.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ls(10),za(this),Ga(this))},gr.cb=function(){null!=this.v&&(this.v=null,za(this),Ka(this),ls(19))},gr.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ls(2)):(this.j.info("Failed to ping google.com"),ls(1))},(gr=rl.prototype).xa=function(){},gr.wa=function(){},gr.va=function(){},gr.ua=function(){},gr.Ra=function(){},ol.prototype.g=function(t,e){return new sl(t,e)},Ar(sl,Ro),sl.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ls(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=nl(t,null,t.V),Ha(t)},sl.prototype.close=function(){ja(this.g)},sl.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=Mo(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&Ha(e)},sl.prototype.M=function(){this.g.l=null,delete this.j,ja(this.g),delete this.g,sl.X.M.call(this)},Ar(al,vs),Ar(ll,bs),Ar(cl,rl),cl.prototype.xa=function(){Lo(this.g,"a")},cl.prototype.wa=function(t){Lo(this.g,new al(t))},cl.prototype.va=function(t){Lo(this.g,new ll)},cl.prototype.ua=function(){Lo(this.g,"b")},ol.prototype.createWebChannel=ol.prototype.g,sl.prototype.send=sl.prototype.u,sl.prototype.open=sl.prototype.m,sl.prototype.close=sl.prototype.close,hs.NO_ERROR=0,hs.TIMEOUT=8,hs.HTTP_ERROR=6,ds.COMPLETE="complete",ms.EventType=ys,ys.OPEN="a",ys.CLOSE="b",ys.ERROR="c",ys.MESSAGE="d",Ro.prototype.listen=Ro.prototype.N,Sa.prototype.listenOnce=Sa.prototype.O,Sa.prototype.getLastError=Sa.prototype.Oa,Sa.prototype.getLastErrorCode=Sa.prototype.Ea,Sa.prototype.getStatus=Sa.prototype.aa,Sa.prototype.getResponseJson=Sa.prototype.Sa,Sa.prototype.getResponseText=Sa.prototype.fa,Sa.prototype.send=Sa.prototype.da,Sa.prototype.setWithCredentials=Sa.prototype.Ka;vr.createWebChannelTransport=function(){return new ol},vr.getStatEventTarget=function(){return rs()},vr.ErrorCode=hs,vr.EventType=ds,vr.Event=ns,vr.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},vr.FetchXmlHttpFactory=va,vr.WebChannel=ms,vr.XhrIo=Sa;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ul{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}ul.UNAUTHENTICATED=new ul(null),ul.GOOGLE_CREDENTIALS=new ul("google-credentials-uid"),ul.FIRST_PARTY=new ul("first-party-uid"),ul.MOCK_USER=new ul("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let hl="9.16.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=new Ai("@firebase/firestore");function fl(t,...e){if(dl.logLevel<=Ii.DEBUG){const n=e.map(ml);dl.debug(`Firestore (${hl}): ${t}`,...n)}}function pl(t,...e){if(dl.logLevel<=Ii.ERROR){const n=e.map(ml);dl.error(`Firestore (${hl}): ${t}`,...n)}}function ml(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(t="Unexpected state"){const e=`FIRESTORE (${hl}) INTERNAL ASSERTION FAILED: `+t;throw pl(e),new Error(e)}function yl(t,e){t||gl()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vl={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class bl extends si{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class kl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ul.UNAUTHENTICATED)))}shutdown(){}}class El{start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new wl;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new wl,t.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},s=t=>{fl("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((t=>s(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(fl("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new wl)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(fl("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(yl("string"==typeof e.accessToken),new xl(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return yl(null===t||"string"==typeof t),new ul(t)}constructor(t){this.t=t,this.currentUser=ul.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class Il{I(){return this.g?this.g():(yl(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i,this.type="FirstParty",this.user=ul.FIRST_PARTY,this.p=new Map}}class Sl{getToken(){return Promise.resolve(new Il(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(ul.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i}}class Tl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cl{start(t,e){const n=t=>{null!=t.error&&fl("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,fl("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{fl("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?i(t):fl("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(yl("string"==typeof t.token),this.A=t.token,new Tl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _l(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=_l(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function Al(t,e){return t<e?-1:t>e?1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dl{get length(){return this.len}isEqual(t){return 0===Dl.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Dl?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&gl(),void 0===n?n=t.length-e:n>t.length-e&&gl(),this.segments=t,this.offset=e,this.len=n}}class Rl extends Dl{construct(t,e,n){return new Rl(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new bl(vl.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Rl(e)}static emptyPath(){return new Rl([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ll{static fromPath(t){return new Ll(Rl.fromString(t))}static fromName(t){return new Ll(Rl.fromString(t).popFirst(5))}static empty(){return new Ll(Rl.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Rl.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Rl.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ll(new Rl(t.slice()))}constructor(t){this.path=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}Ol.UNKNOWN_ID=-1;function Ml(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pl{ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}}Pl.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bl{constructor(t,e,n,i,r,o,s,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class Fl{static empty(){return new Fl("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Fl&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(t){return 0===t&&1/t==-1/0}let jl=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{static fromBase64String(t){const e=atob(t);return new zl(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new zl(e)}[jl](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Al(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}zl.EMPTY_BYTE_STRING=new zl("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wl(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Hl(t){return"string"==typeof t?zl.fromBase64String(t):zl.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $l{insert(t,e){return new $l(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Xl.BLACK,null,null))}remove(t){return new $l(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xl.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ql(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ql(this.root,t,this.comparator,!1)}getReverseIterator(){return new ql(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ql(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||Xl.EMPTY}}class ql{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class Xl{copy(t,e,n,i,r){return new Xl(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xl.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Xl.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xl.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw gl();if(this.right.isRed())throw gl();const t=this.left.check();if(t!==this.right.check())throw gl();return t+(this.isRed()?0:1)}constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Xl.RED,this.left=null!=i?i:Xl.EMPTY,this.right=null!=r?r:Xl.EMPTY,this.size=this.left.size+1+this.right.size}}Xl.EMPTY=null,Xl.RED=!0,Xl.BLACK=!1,Xl.EMPTY=new class{get key(){throw gl()}get value(){throw gl()}get color(){throw gl()}get left(){throw gl()}get right(){throw gl()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Xl(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kl{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Yl(this.data.getIterator())}getIteratorFrom(t){return new Yl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Kl))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Kl(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new $l(this.comparator)}}class Yl{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Gl,Jl;(Jl=Gl||(Gl={}))[Jl.OK=0]="OK",Jl[Jl.CANCELLED=1]="CANCELLED",Jl[Jl.UNKNOWN=2]="UNKNOWN",Jl[Jl.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Jl[Jl.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Jl[Jl.NOT_FOUND=5]="NOT_FOUND",Jl[Jl.ALREADY_EXISTS=6]="ALREADY_EXISTS",Jl[Jl.PERMISSION_DENIED=7]="PERMISSION_DENIED",Jl[Jl.UNAUTHENTICATED=16]="UNAUTHENTICATED",Jl[Jl.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Jl[Jl.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Jl[Jl.ABORTED=10]="ABORTED",Jl[Jl.OUT_OF_RANGE=11]="OUT_OF_RANGE",Jl[Jl.UNIMPLEMENTED=12]="UNIMPLEMENTED",Jl[Jl.INTERNAL=13]="INTERNAL",Jl[Jl.UNAVAILABLE=14]="UNAVAILABLE",Jl[Jl.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new $l(Ll.comparator);new $l(Ll.comparator);new $l(Ll.comparator),new Kl(Ll.comparator);new Kl(Al);const Ql=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Zl=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],tc=Zl;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{ue(t,e){this.ce(t,e),e.ae()}ce(t,e){if("nullValue"in t)this.he(e,5);else if("booleanValue"in t)this.he(e,10),e.le(t.booleanValue?1:0);else if("integerValue"in t)this.he(e,15),e.le(Wl(t.integerValue));else if("doubleValue"in t){const n=Wl(t.doubleValue);isNaN(n)?this.he(e,13):(this.he(e,15),Ul(n)?e.le(0):e.le(n))}else if("timestampValue"in t){const n=t.timestampValue;this.he(e,20),"string"==typeof n?e.fe(n):(e.fe(`${n.seconds||""}`),e.le(n.nanos||0))}else if("stringValue"in t)this.de(t.stringValue,e),this._e(e);else if("bytesValue"in t)this.he(e,30),e.we(Hl(t.bytesValue)),this._e(e);else if("referenceValue"in t)this.me(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.he(e,45),e.le(n.latitude||0),e.le(n.longitude||0)}else"mapValue"in t?Vl(t)?this.he(e,Number.MAX_SAFE_INTEGER):(this.ge(t.mapValue,e),this._e(e)):"arrayValue"in t?(this.ye(t.arrayValue,e),this._e(e)):gl()}de(t,e){this.he(e,25),this.pe(t,e)}pe(t,e){e.fe(t)}ge(t,e){const n=t.fields||{};this.he(e,55);for(const t of Object.keys(n))this.de(t,e),this.ce(n[t],e)}ye(t,e){const n=t.values||[];this.he(e,50);for(const t of n)this.ce(t,e)}me(t,e){this.he(e,37),Ll.fromName(t).path.forEach((t=>{this.he(e,60),this.pe(t,e)}))}he(t,e){t.le(e)}_e(t){t.le(2)}constructor(){}}ec.Ie=new ec;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Uint8Array(0);class nc{static withCacheSize(t){return new nc(t,nc.DEFAULT_COLLECTION_PERCENTILE,nc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nc.DEFAULT_COLLECTION_PERCENTILE=10,nc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nc.DEFAULT=new nc(41943040,nc.DEFAULT_COLLECTION_PERCENTILE,nc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nc.DISABLED=new nc(-1,0,0);function ic(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),i=Math.max(0,e-n);i>0&&fl("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}constructor(t,e,n=1e3,i=1.5,r=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oc{static createAndSchedule(t,e,n,i,r){const o=Date.now()+n,s=new oc(t,e,o,i,r);return s.start(n),s}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new bl(vl.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new wl,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function sc(t,e){if(pl("AsyncQueue",`${e}: ${t}`),Ml(t))return new bl(vl.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ac=new Map;class lc{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new bl(vl.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new bl(vl.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new bl(vl.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{get app(){if(!this._app)throw new bl(vl.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new bl(vl.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lc(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new kl;switch(t.type){case"gapi":const e=t.client;return new Sl(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new bl(vl.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ac.get(t);e&&(fl("ComponentProvider","Removing Datastore"),ac.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lc({}),this._settingsFrozen=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uc{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new bl(vl.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new wl;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=sc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=ul.UNAUTHENTICATED,this.clientId=Nl.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{fl("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(fl("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}class hc{get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const e=ic();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise((()=>{}));const e=new wl;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Ml(t))throw t;fl("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t);throw pl("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const i=oc.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.Uc.push(i),i}zc(){this.Kc&&gl()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new rc(this,"async_queue_retry"),this.Wc=()=>{const t=ic();t&&fl("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=ic();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}}class dc extends cc{_terminate(){return this._firestoreClient||fc(this),this._firestoreClient.terminate()}constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new hc,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}}function fc(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new Bl(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new uc(t._authCredentials,t._appCheckCredentials,t._queue,i)}new RegExp("[~\\*/\\[\\]]");!function(t,e=!0){hl="9.16.0",tr(new wi("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),o=new dc(new El(t.getProvider("auth-internal")),new Cl(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new bl(vl.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fl(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o}),"PUBLIC").setMultipleInstances(!0)),sr("@firebase/firestore","3.8.1",t),sr("@firebase/firestore","3.8.1","esm2017")}();const pc=new ai("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function mc(t){return t instanceof si&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function yc(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function vc(t,e){const n=(await e.json()).error;return pc.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function bc({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function wc(t,{refreshToken:e}){const n=bc(t);return n.append("Authorization",function(t){return`FIS_v2 ${t}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)),n}async function xc(t){const e=await t();return e.status>=500&&e.status<600?t():e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(t){return new Promise((e=>{setTimeout(e,t)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ec=/^[cdef][\w-]{21}$/;function Ic(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){return(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);return Ec.test(e)?e:""}catch(t){return""}}function Sc(t){return`${t.appName}!${t.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=new Map;function Cc(t,e){const n=Sc(t);_c(n,e),function(t,e){const n=Ac();n&&n.postMessage({key:t,fid:e});Dc()}(n,e)}function _c(t,e){const n=Tc.get(t);if(n)for(const t of n)t(e)}let Nc=null;function Ac(){return!Nc&&"BroadcastChannel"in self&&(Nc=new BroadcastChannel("[Firebase] FID Change"),Nc.onmessage=t=>{_c(t.data.key,t.data.fid)}),Nc}function Dc(){0===Tc.size&&Nc&&(Nc.close(),Nc=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rc=null;function Lc(){return Rc||(Rc=Hi("firebase-installations-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-installations-store")}})),Rc}async function Oc(t,e){const n=Sc(t),i=(await Lc()).transaction("firebase-installations-store","readwrite"),r=i.objectStore("firebase-installations-store"),o=await r.get(n);return await r.put(e,n),await i.done,o&&o.fid===e.fid||Cc(t,e.fid),e}async function Mc(t){const e=Sc(t),n=(await Lc()).transaction("firebase-installations-store","readwrite");await n.objectStore("firebase-installations-store").delete(e),await n.done}async function Pc(t,e){const n=Sc(t),i=(await Lc()).transaction("firebase-installations-store","readwrite"),r=i.objectStore("firebase-installations-store"),o=await r.get(n),s=e(o);return void 0===s?await r.delete(n):await r.put(s,n),await i.done,!s||o&&o.fid===s.fid||Cc(t,s.fid),s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bc(t){let e;const n=await Pc(t.appConfig,(n=>{const i=function(t){return jc(t||{fid:Ic(),registrationStatus:0})}(n),r=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(pc.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(t,e){try{const n=await async function({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=gc(t),r=bc(t),o=e.getImmediate({optional:!0});if(o){const t=await o.getHeartbeatsHeader();t&&r.append("x-firebase-client",t)}const s={fid:n,authVersion:"FIS_v2",appId:t.appId,sdkVersion:"w:0.6.1"},a={method:"POST",headers:r,body:JSON.stringify(s)},l=await xc((()=>fetch(i,a)));if(l.ok){const t=await l.json();return{fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:yc(t.authToken)}}throw await vc("Create Installation",l)}(t,e);return Oc(t.appConfig,n)}catch(n){throw mc(n)&&409===n.customData.serverCode?await Mc(t.appConfig):await Oc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:i}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:Fc(t)}:{installationEntry:e}}(t,i);return e=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function Fc(t){let e=await Uc(t.appConfig);for(;1===e.registrationStatus;)await kc(100),e=await Uc(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await Bc(t);return n||e}return e}function Uc(t){return Pc(t,(t=>{if(!t)throw pc.create("installation-not-found");return jc(t)}))}function jc(t){return 1===(e=t).registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function zc({appConfig:t,heartbeatServiceProvider:e},n){const i=function(t,{fid:e}){return`${gc(t)}/${e}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,n),r=wc(t,n),o=e.getImmediate({optional:!0});if(o){const t=await o.getHeartbeatsHeader();t&&r.append("x-firebase-client",t)}const s={installation:{sdkVersion:"w:0.6.1",appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(s)},l=await xc((()=>fetch(i,a)));if(l.ok){return yc(await l.json())}throw await vc("Generate Auth Token",l)}async function Wc(t,e=!1){let n;const i=await Pc(t.appConfig,(i=>{if(!Vc(i))throw pc.create("not-registered");const r=i.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+36e5}(t)}(r))return i;if(1===r.requestStatus)return n=async function(t,e){let n=await Hc(t.appConfig);for(;1===n.authToken.requestStatus;)await kc(100),n=await Hc(t.appConfig);const i=n.authToken;return 0===i.requestStatus?Wc(t,e):i}(t,e),i;{if(!navigator.onLine)throw pc.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(i);return n=async function(t,e){try{const n=await zc(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Oc(t.appConfig,i),n}catch(n){if(!mc(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Oc(t.appConfig,n)}else await Mc(t.appConfig);throw n}}(t,e),e}}));return n?await n:i.authToken}function Hc(t){return Pc(t,(t=>{if(!Vc(t))throw pc.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+1e4<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function Vc(t){return void 0!==t&&2===t.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $c(t,e=!1){const n=t;await async function(t){const{registrationPromise:e}=await Bc(t);e&&await e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);return(await Wc(n,e)).token}function qc(t){return pc.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=t=>{const e=er(t.getProvider("app").getImmediate(),"installations").getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:i}=await Bc(e);return i?i.catch(console.error):Wc(e).catch(console.error),n.fid}(e),getToken:t=>$c(e,t)}};tr(new wi("installations",(t=>{const e=t.getProvider("app").getImmediate(),n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t){if(!t||!t.options)throw qc("App Configuration");if(!t.name)throw qc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw qc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,heartbeatServiceProvider:er(e,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),tr(new wi("installations-internal",Xc,"PRIVATE")),sr("@firebase/installations","0.6.1"),sr("@firebase/installations","0.6.1","esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kc=new Ai("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yc(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function Gc(t,e,n,i){return async function(r,o,s){try{"event"===r?await async function(t,e,n,i,r){try{let o=[];if(r&&r.send_to){let t=r.send_to;Array.isArray(t)||(t=[t]);const i=await Yc(n);for(const n of t){const t=i.find((t=>t.measurementId===n)),r=t&&e[t.appId];if(!r){o=[];break}o.push(r)}}0===o.length&&(o=Object.values(e)),await Promise.all(o),t("event",i,r||{})}catch(t){Kc.error(t)}}(t,e,n,o,s):"config"===r?await async function(t,e,n,i,r,o){const s=i[r];try{if(s)await e[s];else{const t=(await Yc(n)).find((t=>t.measurementId===r));t&&await e[t.appId]}}catch(t){Kc.error(t)}t("config",r,o)}(t,e,n,i,o,s):"consent"===r?t("consent","update",s):t("set",o)}catch(t){Kc.error(t)}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jc=new ai("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const Qc=new class{getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}};function Zc(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function tu(t,e=Qc,n){const{appId:i,apiKey:r,measurementId:o}=t.options;if(!i)throw Jc.create("no-app-id");if(!r){if(o)return{measurementId:o,appId:i};throw Jc.create("no-api-key")}const s=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new nu;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),eu({appId:i,apiKey:r,measurementId:o},s,a,e)}async function eu(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=Qc){var o;const{appId:s,measurementId:a}=t;try{await function(t,e){return new Promise(((n,i)=>{const r=Math.max(e-Date.now(),0),o=setTimeout(n,r);t.addEventListener((()=>{clearTimeout(o),i(Jc.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}(i,e)}catch(t){if(a)return Kc.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==t?void 0:t.message}]`),{appId:s,measurementId:a};throw t}try{const e=await async function(t){var e;const{appId:n,apiKey:i}=t,r={method:"GET",headers:Zc(i)},o="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),s=await fetch(o,r);if(200!==s.status&&304!==s.status){let t="";try{const n=await s.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(t){}throw Jc.create("config-fetch-failed",{httpStatus:s.status,responseMessage:t})}return s.json()}(t);return r.deleteThrottleMetadata(s),e}catch(e){const l=e;if(!function(t){if(!(t instanceof si&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(l)){if(r.deleteThrottleMetadata(s),a)return Kc.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==l?void 0:l.message}]`),{appId:s,measurementId:a};throw e}const c=503===Number(null===(o=null==l?void 0:l.customData)||void 0===o?void 0:o.httpStatus)?vi(n,r.intervalMillis,30):vi(n,r.intervalMillis),u={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return r.setThrottleMetadata(s,u),Kc.debug(`Calling attemptFetch again in ${c} millis`),eu(t,u,i,r)}}class nu{addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}constructor(){this.listeners=[]}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu,ru;function ou(t){ru=t}function su(t){iu=t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function au(t,e,n,i,r,o,s){var a;const l=tu(t);l.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&Kc.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>Kc.error(t))),e.push(l);const c=async function(){if(!ii())return Kc.warn(Jc.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await ri()}catch(t){return Kc.warn(Jc.create("indexeddb-unavailable",{errorInfo:null==t?void 0:t.toString()}).message),!1}return!0}().then((t=>t?i.getId():void 0)),[u,h]=await Promise.all([l,c]);(function(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes("https://www.googletagmanager.com/gtag/js")&&n.src.includes(t))return n;return null})(o)||function(t,e){const n=document.createElement("script");n.src=`https://www.googletagmanager.com/gtag/js?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}(o,u.measurementId),ru&&(r("consent","default",ru),ou(void 0)),r("js",new Date);const d=null!==(a=null==s?void 0:s.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),r("config",u.measurementId,d),iu&&(r("set",iu),su(void 0)),u.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{_delete(){return delete cu[this.app.options.appId],Promise.resolve()}constructor(t){this.app=t}}let cu={},uu=[];const hu={};let du,fu,pu="dataLayer",mu="gtag",gu=!1;function yu(t,e,n){!function(){const t=[];if(ei()&&t.push("This is a browser extension environment."),oi()||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=Jc.create("invalid-analytics-context",{errorInfo:e});Kc.warn(n.message)}}();const i=t.options.appId;if(!i)throw Jc.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw Jc.create("no-api-key");Kc.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=cu[i])throw Jc.create("already-exists",{id:i});if(!gu){!function(t){let e=[];Array.isArray(window[t])?e=window[t]:window[t]=e}(pu);const{wrappedGtag:t,gtagCore:e}=function(t,e,n,i,r){let o=function(...t){window[i].push(arguments)};return window[r]&&"function"==typeof window[r]&&(o=window[r]),window[r]=Gc(o,t,e,n),{gtagCore:o,wrappedGtag:window[r]}}(cu,uu,hu,pu,mu);fu=t,du=e,gu=!0}cu[i]=au(t,uu,hu,e,du,pu,n);return new lu(t)}function vu(t,e,n,i){t=bi(t),async function(t,e,n,i,r){if(r&&r.global)t("event",n,i);else{const r=await e;t("event",n,Object.assign(Object.assign({},i),{send_to:r}))}}(fu,cu[t.app.options.appId],e,n,i).catch((t=>Kc.error(t)))}tr(new wi("analytics",((t,{options:e})=>yu(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e)),"PUBLIC")),tr(new wi("analytics-internal",(function(t){try{const e=t.getProvider("analytics").getImmediate();return{logEvent:(t,n,i)=>vu(e,t,n,i)}}catch(t){throw Jc.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),sr("@firebase/analytics","0.9.1"),sr("@firebase/analytics","0.9.1","esm2017");function bu(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;function wu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xu=wu,ku=new ai("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Eu=new Ai("@firebase/auth");function Iu(t,...e){Eu.logLevel<=Ii.ERROR&&Eu.error(`Auth (9.16.0): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t,...e){throw _u(t,...e)}function Tu(t,...e){return _u(t,...e)}function Cu(t,e,n){const i=Object.assign(Object.assign({},xu()),{[e]:n});return new ai("auth","Firebase",i).create(e,{appName:t.name})}function _u(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return ku.create(t,...e)}function Nu(t,e,...n){if(!t)throw _u(e,...n)}function Au(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Iu(e),new Error(e)}function Du(t,e){t||Au(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=new Map;function Lu(t){Du(t instanceof Function,"Expected a class definition");let e=Ru.get(t);return e?(Du(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ru.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ou(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function Mu(){return"http:"===Pu()||"https:"===Pu()}function Pu(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bu{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Mu()||ei()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(t,e){this.shortDelay=t,this.longDelay=e,Du(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ti())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(t,e){Du(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Au("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Au("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Au("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},zu=new Bu(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hu(t,e,n,i,r={}){return Vu(t,r,(async()=>{let r={},o={};i&&("GET"===e?o=i:r={body:JSON.stringify(i)});const s=di(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Uu.fetch()(qu(t,t.config.apiHost,n,s),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Vu(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},ju),e);try{const e=new Xu(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ku(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const e=r.ok?o.errorMessage:o.error.message,[n,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ku(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw Ku(t,"email-already-in-use",o);if("USER_DISABLED"===n)throw Ku(t,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw Cu(t,a,s);Su(t,a)}}catch(e){if(e instanceof si)throw e;Su(t,"network-request-failed")}}async function $u(t,e,n,i,r={}){const o=await Hu(t,e,n,i,r);return"mfaPendingCredential"in o&&Su(t,"multi-factor-auth-required",{_serverResponse:o}),o}function qu(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Fu(t.config,r):`${t.config.apiScheme}://${r}`}class Xu{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(Tu(this.auth,"network-request-failed"))),zu.get())}))}}function Ku(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Tu(t,e,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yu(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t){return 1e3*Number(t)}function Ju(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return Iu("JWT malformed, contained fewer than 3 sections"),null;try{const t=Kn(n);return t?JSON.parse(t):(Iu("Failed to decode base64 JWT payload"),null)}catch(t){return Iu("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qu(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof si&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Zu{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{_initializeTime(){this.lastSignInTime=Yu(this.lastLoginAt),this.creationTime=Yu(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eh(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Qu(t,async function(t,e){return Hu(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));Nu(null==r?void 0:r.users.length,n,"internal-error");const o=r.users[0];t._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?o.providerUserInfo.map((t=>{var{providerId:e}=t,n=bu(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=t.providerData,c=s,[...l.filter((t=>!c.some((e=>e.providerId===t.providerId)))),...c]);var l,c;const u=t.isAnonymous,h=!(t.email&&o.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new th(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nh{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Nu(t.idToken,"internal-error"),Nu(void 0!==t.idToken,"internal-error"),Nu(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Ju(t);return Nu(e,"internal-error"),Nu(void 0!==e.exp,"internal-error"),Nu(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return Nu(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){const n=await Vu(t,{},(async()=>{const n=di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=qu(t,i,"/v1/token",`key=${r}`),s=await t._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Uu.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,o=new nh;return n&&(Nu("string"==typeof n,"internal-error",{appName:t}),o.refreshToken=n),i&&(Nu("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),r&&(Nu("number"==typeof r,"internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new nh,this.toJSON())}_performRefresh(){return Au("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t,e){Nu("string"==typeof t||void 0===t,"internal-error",{appName:e})}class rh{async getIdToken(t){const e=await Qu(this,this.stsTokenManager.getToken(this.auth,t));return Nu(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=bi(t),i=await n.getIdToken(e),r=Ju(i);Nu(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o="object"==typeof r.firebase?r.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:Yu(Gu(r.auth_time)),issuedAtTime:Yu(Gu(r.iat)),expirationTime:Yu(Gu(r.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=bi(t);await eh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(Nu(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new rh(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){Nu(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await eh(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Qu(this,async function(t,e){return Hu(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,o,s,a,l,c;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(s=e.tenantId)&&void 0!==s?s:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=e.createdAt)&&void 0!==l?l:void 0,y=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:x,stsTokenManager:k}=e;Nu(v&&k,t,"internal-error");const E=nh.fromJSON(this.name,k);Nu("string"==typeof v,t,"internal-error"),ih(u,t.name),ih(h,t.name),Nu("boolean"==typeof b,t,"internal-error"),Nu("boolean"==typeof w,t,"internal-error"),ih(d,t.name),ih(f,t.name),ih(p,t.name),ih(m,t.name),ih(g,t.name),ih(y,t.name);const I=new rh({uid:v,auth:t,email:h,emailVerified:b,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(I.providerData=x.map((t=>Object.assign({},t)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(t,e,n=!1){const i=new nh;i.updateFromServerResponse(e);const r=new rh({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await eh(r),r}constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=bu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new th(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}constructor(){this.type="NONE",this.storage={}}}oh.type="NONE";const sh=oh;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(t,e,n){return`firebase:${t}:${e}:${n}`}class lh{setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?rh._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new lh(Lu(sh),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||Lu(sh);const o=ah(n,t.config.apiKey,t.name);let s=null;for(const n of e)try{const e=await n._get(o);if(e){const i=rh._fromJSON(t,e);n!==r&&(s=i),r=n;break}}catch(t){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],s&&await r._set(o,s.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(o)}catch(t){}}))),new lh(r,t,n)):new lh(r,t,n)}constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ah(this.userKey,i.apiKey,r),this.fullPersistenceKey=ah("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mh(e))return"Blackberry";if(gh(e))return"Webos";if(hh(e))return"Safari";if((e.includes("chrome/")||dh(e))&&!e.includes("edge/"))return"Chrome";if(ph(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function uh(t=ti()){return/firefox\//i.test(t)}function hh(t=ti()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dh(t=ti()){return/crios\//i.test(t)}function fh(t=ti()){return/iemobile/i.test(t)}function ph(t=ti()){return/android/i.test(t)}function mh(t=ti()){return/blackberry/i.test(t)}function gh(t=ti()){return/webos/i.test(t)}function yh(t=ti()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vh(){return ni()&&10===document.documentMode}function bh(t=ti()){return yh(t)||ph(t)||gh(t)||mh(t)||/windows phone/i.test(t)||fh(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wh(t,e=[]){let n;switch(t){case"Browser":n=ch(ti());break;case"Worker":n=`${ch(ti())}-${t}`;break;default:n=t}return`${n}/JsCore/9.16.0/${e.length?e.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{n(t(e))}catch(t){i(t)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}constructor(t){this.auth=t,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Lu(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await lh.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,o=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(t);n&&n!==o||!(null==s?void 0:s.user)||(i=s.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(t){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Nu(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await eh(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?bi(t):null;return e&&Nu(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&Nu(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Lu(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ai("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Lu(t)||this._popupRedirectResolver;Nu(e,this,"argument-error"),this.redirectPersistenceManager=await lh.create(this,[Lu(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"==typeof e?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Nu(o,this,"internal-error"),o.then((()=>r(this.currentUser))),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Nu(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=wh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ih(this),this.idTokenSubscription=new Ih(this),this.beforeStateQueue=new xh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ku,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}}function Eh(t){return bi(t)}class Ih{get next(){return Nu(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(t){this.auth=t,this.observer=null,this.addObserver=mi((t=>this.observer=t))}}function Sh(t,e,n){const i=Eh(t);Nu(i._canInitEmulator,i,"emulator-config-failed"),Nu(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),o=Th(e),{host:s,port:a}=function(t){const e=Th(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:Ch(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:Ch(e)}}}(e),l=null===a?"":`:${a}`;i.config.emulator={url:`${o}//${s}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Th(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ch(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class _h{toJSON(){return Au("not implemented")}_getIdTokenResponse(t){return Au("not implemented")}_linkToIdToken(t,e){return Au("not implemented")}_getReauthenticationResolver(t){return Au("not implemented")}constructor(t,e){this.providerId=t,this.signInMethod=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nh(t,e){return Hu(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ah extends _h{static _fromEmailAndPassword(t,e){return new Ah(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Ah(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return $u(t,"POST","/v1/accounts:signInWithPassword",Wu(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return $u(t,"POST","/v1/accounts:signInWithEmailLink",Wu(t,e))}(t,{email:this._email,oobCode:this._password});default:Su(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Nh(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return $u(t,"POST","/v1/accounts:signInWithEmailLink",Wu(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:Su(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dh(t,e){return $u(t,"POST","/v1/accounts:signInWithIdp",Wu(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh extends _h{static _fromParams(t){const e=new Rh(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Su("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=bu(e,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Rh(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){return Dh(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Dh(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Dh(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=di(e)}return t}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oh extends _h{static _fromVerification(t,e){return new Oh({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Oh({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return $u(t,"POST","/v1/accounts:signInWithPhoneNumber",Wu(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await $u(t,"POST","/v1/accounts:signInWithPhoneNumber",Wu(t,e));if(n.temporaryProof)throw Ku(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return $u(t,"POST","/v1/accounts:signInWithPhoneNumber",Wu(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),Lh)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new Oh({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(t){super("phone","phone"),this.params=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{static parseLink(t){const e=function(t){const e=fi(pi(t)).link,n=e?fi(pi(e)).deep_link_id:null,i=fi(pi(t)).deep_link_id;return(i?fi(pi(i)).link:null)||i||n||e||t}(t);try{return new Mh(e)}catch(t){return null}}constructor(t){var e,n,i,r,o,s;const a=fi(pi(t)),l=null!==(e=a.apiKey)&&void 0!==e?e:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);Nu(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ph{static credential(t,e){return Ah._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Mh.parseLink(e);return Nu(n,"argument-error"),Ah._fromEmailAndCode(t,n.code,n.tenantId)}constructor(){this.providerId=Ph.PROVIDER_ID}}Ph.PROVIDER_ID="password",Ph.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ph.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bh{setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh extends Bh{addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uh extends Fh{static credential(t){return Rh._fromParams({providerId:Uh.PROVIDER_ID,signInMethod:Uh.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Uh.credentialFromTaggedObject(t)}static credentialFromError(t){return Uh.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Uh.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("facebook.com")}}Uh.FACEBOOK_SIGN_IN_METHOD="facebook.com",Uh.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jh extends Fh{static credential(t,e){return Rh._fromParams({providerId:jh.PROVIDER_ID,signInMethod:jh.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return jh.credentialFromTaggedObject(t)}static credentialFromError(t){return jh.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return jh.credential(e,n)}catch(t){return null}}constructor(){super("google.com"),this.addScope("profile")}}jh.GOOGLE_SIGN_IN_METHOD="google.com",jh.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zh extends Fh{static credential(t){return Rh._fromParams({providerId:zh.PROVIDER_ID,signInMethod:zh.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return zh.credentialFromTaggedObject(t)}static credentialFromError(t){return zh.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return zh.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("github.com")}}zh.GITHUB_SIGN_IN_METHOD="github.com",zh.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wh extends Fh{static credential(t,e){return Rh._fromParams({providerId:Wh.PROVIDER_ID,signInMethod:Wh.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Wh.credentialFromTaggedObject(t)}static credentialFromError(t){return Wh.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Wh.credential(e,n)}catch(t){return null}}constructor(){super("twitter.com")}}Wh.TWITTER_SIGN_IN_METHOD="twitter.com",Wh.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hh{static async _fromIdTokenResponse(t,e,n,i=!1){const r=await rh._fromIdTokenResponse(t,n,i),o=Vh(n);return new Hh({user:r,providerId:o,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=Vh(n);return new Hh({user:t,providerId:i,_tokenResponse:n,operationType:e})}constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}}function Vh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $h extends si{static _fromErrorAndOperation(t,e,n,i){return new $h(t,e,n,i)}constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,$h.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}}function qh(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw $h._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xh(t,e,n=!1){const i=await Qu(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hh._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Kh(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const o=await Qu(t,qh(i,r,e,t),n);Nu(o.idToken,i,"internal-error");const s=Ju(o.idToken);Nu(s,i,"internal-error");const{sub:a}=s;return Nu(t.uid===a,i,"user-mismatch"),Hh._forOperation(t,r,o)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&Su(i,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yh(t,e,n=!1){const i="signIn",r=await qh(t,i,e),o=await Hh._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(o.user),o}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gh{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(t,e){this.storageRetriever=t,this.type=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh extends Gh{forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);vh()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=ti();return hh(t)||yh(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=bh(),this._shouldAllowMigration=!0}}Jh.type="LOCAL";const Qh=Jh;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh extends Gh{_addListener(t,e){}_removeListener(t,e){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Zh.type="SESSION";const td=Zh;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ed{static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new ed(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,o=this.handlersMap[i];if(!(null==o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const s=Array.from(o).map((async t=>t(e.origin,r))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nd(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ed.receivers=[];class id{removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise(((s,a)=>{const l=nd("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),s(e.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}constructor(t){this.target=t,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function od(){return void 0!==rd().WorkerGlobalScope&&"function"==typeof rd().importScripts}class sd{toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}constructor(t){this.request=t}}function ad(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function ld(){const t=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains("firebaseLocalStorage")?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new sd(t).toPromise()}(),e(await ld()))}))}))}async function cd(t,e,n){const i=ad(t,!0).put({fbase_key:e,value:n});return new sd(i).toPromise()}function ud(t,e){const n=ad(t,!0).delete(e);return new sd(n).toPromise()}class hd{async _openDb(){return this.db||(this.db=await ld()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return od()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ed._getInstance(od()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new id(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ld();return await cd(t,"__sak","1"),await ud(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>cd(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=ad(t,!1).get(e),i=await new sd(n).toPromise();return void 0===i?null:i.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>ud(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=ad(t,!1).getAll();return new sd(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}hd.type="LOCAL";const dd=hd;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t){return new Promise(((e,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,o;i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=Tu("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",(null!==(o=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==o?o:document).appendChild(i)}))}function pd(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
pd("rcb"),new Bu(3e4,6e4);async function md(t,e,n){var i;const r=await n.verify();try{let o;if(Nu("string"==typeof r,t,"argument-error"),Nu("recaptcha"===n.type,t,"argument-error"),o="string"==typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){Nu("enroll"===e.type,t,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){return Hu(t,"POST","/v2/accounts/mfaEnrollment:start",Wu(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{Nu("signin"===e.type,t,"internal-error");const n=(null===(i=o.multiFactorHint)||void 0===i?void 0:i.uid)||o.multiFactorUid;Nu(n,t,"missing-multi-factor-info");const s=await function(t,e){return Hu(t,"POST","/v2/accounts/mfaSignIn:start",Wu(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return Hu(t,"POST","/v1/accounts:sendVerificationCode",Wu(t,e))}(t,{phoneNumber:o.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gd{verifyPhoneNumber(t,e){return md(this.auth,t,bi(e))}static credential(t,e){return Oh._fromVerification(t,e)}static credentialFromResult(t){const e=t;return gd.credentialFromTaggedObject(e)}static credentialFromError(t){return gd.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Oh._fromTokenResponse(e,n):null}constructor(t){this.providerId=gd.PROVIDER_ID,this.auth=Eh(t)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yd(t,e){return e?Lu(e):(Nu(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gd.PROVIDER_ID="phone",gd.PHONE_SIGN_IN_METHOD="phone";class vd extends _h{_getIdTokenResponse(t){return Dh(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Dh(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Dh(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}constructor(t){super("custom","custom"),this.params=t}}function bd(t){return Yh(t.auth,new vd(t),t.bypassAuthState)}function wd(t){const{auth:e,user:n}=t;return Nu(n,e,"internal-error"),Kh(n,new vd(t),t.bypassAuthState)}async function xd(t){const{auth:e,user:n}=t;return Nu(n,e,"internal-error"),Xh(n,new vd(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:o,type:s}=t;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return bd;case"linkViaPopup":case"linkViaRedirect":return xd;case"reauthViaPopup":case"reauthViaRedirect":return wd;default:Su(this.auth,"internal-error")}}resolve(t){Du(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Du(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=new Bu(2e3,1e4);class Id extends kd{async executeNotNull(){const t=await this.execute();return Nu(t,this.auth,"internal-error"),t}async onExecution(){Du(1===this.filter.length,"Popup operations only handle one event");const t=nd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(Tu(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(Tu(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Id.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Tu(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,Ed.get())};t()}constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Id.currentPopupAction&&Id.currentPopupAction.cancel(),Id.currentPopupAction=this}}Id.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sd=new Map;class Td extends kd{async execute(){let t=Sd.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=Nd(e),i=_d(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}Sd.set(this.auth._key(),t)}return this.bypassAuthState||Sd.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}}function Cd(t,e){Sd.set(t._key(),e)}function _d(t){return Lu(t._redirectPersistence)}function Nd(t){return ah("pendingRedirect",t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ad(t,e,n=!1){const i=Eh(t),r=yd(i,e),o=new Td(i,r,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,e)),s}class Dd{registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ld(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Ld(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(Tu(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rd(t))}saveEventToCache(t){this.cachedEventUids.add(Rd(t)),this.lastProcessedEventTime=Date.now()}constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Rd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Ld({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Od=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Md=/^https?/;async function Pd(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return Hu(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Bd(t))return}catch(t){}Su(t,"unauthorized-domain")}function Bd(t){const e=Ou(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Md.test(n))return!1;if(Od.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd=new Bu(3e4,6e4);function Ud(){const t=rd().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let jd=null;function zd(t){return jd=jd||function(t){return new Promise(((e,n)=>{var i,r,o;function s(){Ud(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ud(),n(Tu(t,"network-request-failed"))},timeout:Fd.get()})}if(null===(r=null===(i=rd().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=rd().gapi)||void 0===o?void 0:o.load)){const e=pd("iframefcb");return rd()[e]=()=>{gapi.load?s():n(Tu(t,"network-request-failed"))},fd(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}s()}})).catch((t=>{throw jd=null,t}))}(t),jd}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=new Bu(5e3,15e3),Hd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $d(t){const e=t.config;Nu(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fu(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,i={apiKey:e.apiKey,appName:t.name,v:"9.16.0"},r=Vd.get(t.config.apiHost);r&&(i.eid=r);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${di(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Xd{close(){if(this.window)try{this.window.close()}catch(t){}}constructor(t){this.window=t,this.associatedEvent=null}}function Kd(t,e,n,i=500,r=600){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},qd),{width:i.toString(),height:r.toString(),top:o,left:s}),c=ti().toLowerCase();n&&(a=dh(c)?"_blank":n),uh(c)&&(e=e||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=ti()){var e;return yh(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(c)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",a),new Xd(null);const h=window.open(e||"",a,u);Nu(h,t,"popup-blocked");try{h.focus()}catch(t){}return new Xd(h)}function Yd(t,e,n,i,r,o){Nu(t.config.authDomain,t,"auth-domain-config-required"),Nu(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:"9.16.0",eventId:r};if(e instanceof Bh){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",ci(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(o||{}))s[t]=e}if(e instanceof Fh){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(s.scopes=t.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){return t.emulator?Fu(t,"emulator/auth/handler"):`https://${t.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${di(a).slice(1)}`}const Gd=class{async _openPopup(t,e,n,i){var r;Du(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Kd(t,Yd(t,e,n,Ou(),i),nd())}async _openRedirect(t,e,n,i){var r;return await this._originValidation(t),r=Yd(t,e,n,Ou(),i),rd().location.href=r,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(Du(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await zd(t),n=rd().gapi;return Nu(n,t,"internal-error"),e.open({where:document.body,url:$d(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Hd,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=Tu(t,"network-request-failed"),o=rd().setTimeout((()=>{i(r)}),Wd.get());function s(){rd().clearTimeout(o),n(e)}e.ping(s).then(s,(()=>{i(r)}))}))))}(t),n=new Dd(t);return e.register("authEvent",(e=>{Nu(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&e(!!r),Su(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Pd(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return bh()||hh()||yh()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=td,this._completeRedirectFn=Ad,this._overrideRedirectResult=Cd}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jd{getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){Nu(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(t){this.auth=t,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qd=Qn("authIdTokenMaxAge")||300;let Zd=null;var tf;tf="Browser",tr(new wi("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:r,authDomain:o}=n.options;return((t,n)=>{Nu(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),Nu(!(null==o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:r,authDomain:o,clientPlatform:tf,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wh(tf)},s=new kh(t,n,i);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Lu);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(s,e),s})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),tr(new wi("auth-internal",(t=>{const e=Eh(t.getProvider("auth").getImmediate());return new Jd(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),sr("@firebase/auth","0.21.1",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(tf)),sr("@firebase/auth","0.21.1","esm2017");const ef=rr({apiKey:"AIzaSyDu_G85M-wYSiuscXdqJuMLEmp82iljbIc",authDomain:"js-team-project-6ffd7.firebaseapp.com",projectId:"js-team-project-6ffd7",storageBucket:"js-team-project-6ffd7.appspot.com",messagingSenderId:"837102169225",appId:"1:837102169225:web:58e700b1d2ad7abe772a58",measurementId:"G-5H70WPMMFC"}),nf=(function(t=or()){const e=er(t=bi(t),"analytics");e.isInitialized()?e.getImmediate():function(t,e={}){const n=er(t,"analytics");if(n.isInitialized()){const t=n.getImmediate();if(ui(e,n.getOptions()))return t;throw Jc.create("already-initialized")}n.initialize({options:e})}(t)}(ef),function(t=or()){const e=er(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=er(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(ui(n.getOptions(),null!=e?e:{}))return t;Su(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:Gd,persistence:[dd,Qh,td]}),i=Qn("authTokenSyncURL");if(i){const t=(r=i,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>Qd)return;const i=null==e?void 0:e.token;Zd!==i&&(Zd=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(t,e,n){bi(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,i){bi(t).onIdTokenChanged(e,n,i)}(n,(e=>t(e)))}var r;const o=Jn("auth");return o&&Sh(n,`http://${o}`),n}(ef));function rf(){document.querySelectorAll(".news__item").forEach((t=>{JSON.parse(localStorage.getItem("news-added-to-favorite")).find((e=>{t.dataset.id===e.id&&(t.firstElementChild.children[1].firstElementChild.textContent="Remove from favorite",t.firstElementChild.children[1].firstElementChild.classList.remove("news__favorite-btn"),t.firstElementChild.children[1].firstElementChild.classList.add("btn-width"),t.firstElementChild.children[1].lastElementChild.classList.remove("favorite-btn__icon-add"),t.firstElementChild.children[1].lastElementChild.classList.add("favorite-btn__icon-remove"))}))}))}console.log(nf);const of=document.getElementById("toggle"),sf=document.body;function af(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function lf(t){return t[t.length-1]}function cf(t,...e){return e.forEach((e=>{t.includes(e)||t.push(e)})),t}function uf(t,e){return t?t.split(e):[]}function hf(t,e,n){return(void 0===e||t>=e)&&(void 0===n||t<=n)}function df(t,e,n){return t<e?e:t>n?n:t}function ff(t,e,n={},i=0,r=""){r+=`<${Object.keys(n).reduce(((t,e)=>{let r=n[e];return"function"==typeof r&&(r=r(i)),`${t} ${e}="${r}"`}),t)}></${t}>`;const o=i+1;return o<e?ff(t,e,n,o,r):r}function pf(t){return t.replace(/>\s+/g,">").replace(/\s+</,"<")}function mf(t){return new Date(t).setHours(0,0,0,0)}function gf(){return(new Date).setHours(0,0,0,0)}function yf(...t){switch(t.length){case 0:return gf();case 1:return mf(t[0])}const e=new Date(0);return e.setFullYear(...t),e.setHours(0,0,0,0)}function vf(t,e){const n=new Date(t);return n.setDate(n.getDate()+e)}function bf(t,e){const n=new Date(t),i=n.getMonth()+e;let r=i%12;r<0&&(r+=12);const o=n.setMonth(i);return n.getMonth()!==r?n.setDate(0):o}function wf(t,e){const n=new Date(t),i=n.getMonth(),r=n.setFullYear(n.getFullYear()+e);return 1===i&&2===n.getMonth()?n.setDate(0):r}function xf(t,e){return(t-e+7)%7}function kf(t,e,n=0){const i=new Date(t).getDay();return vf(t,xf(e,n)-xf(i,n))}function Ef(t){const e=kf(t,4,1),n=kf(new Date(e).setMonth(0,4),4,1);return Math.round((e-n)/6048e5)+1}function If(t,e){const n=new Date(t).getFullYear();return Math.floor(n/e)*e}function Sf(t,e,n){if(1!==e&&2!==e)return t;const i=new Date(t);return 1===e?n?i.setMonth(i.getMonth()+1,0):i.setDate(1):n?i.setFullYear(i.getFullYear()+1,0,0):i.setMonth(0,1),i.setHours(0,0,0,0)}of.addEventListener("input",(t=>{t.target.checked?sf.classList.add("dark-theme"):sf.classList.remove("dark-theme")}));const Tf=/dd?|DD?|mm?|MM?|yy?(?:yy)?/,Cf=/[\s!-/:-@[-`{-~年月日]+/;let _f={};const Nf={y:(t,e)=>new Date(t).setFullYear(parseInt(e,10)),m(t,e,n){const i=new Date(t);let r=parseInt(e,10)-1;if(isNaN(r)){if(!e)return NaN;const t=e.toLowerCase(),i=e=>e.toLowerCase().startsWith(t);if(r=n.monthsShort.findIndex(i),r<0&&(r=n.months.findIndex(i)),r<0)return NaN}return i.setMonth(r),i.getMonth()!==Df(r)?i.setDate(0):i.getTime()},d:(t,e)=>new Date(t).setDate(parseInt(e,10))},Af={d:t=>t.getDate(),dd:t=>Rf(t.getDate(),2),D:(t,e)=>e.daysShort[t.getDay()],DD:(t,e)=>e.days[t.getDay()],m:t=>t.getMonth()+1,mm:t=>Rf(t.getMonth()+1,2),M:(t,e)=>e.monthsShort[t.getMonth()],MM:(t,e)=>e.months[t.getMonth()],y:t=>t.getFullYear(),yy:t=>Rf(t.getFullYear(),2).slice(-2),yyyy:t=>Rf(t.getFullYear(),4)};function Df(t){return t>-1?t%12:Df(t+12)}function Rf(t,e){return t.toString().padStart(e,"0")}function Lf(t){if("string"!=typeof t)throw new Error("Invalid date format.");if(t in _f)return _f[t];const e=t.split(Tf),n=t.match(new RegExp(Tf,"g"));if(0===e.length||!n)throw new Error("Invalid date format.");const i=n.map((t=>Af[t])),r=Object.keys(Nf).reduce(((t,e)=>(n.find((t=>"D"!==t[0]&&t[0].toLowerCase()===e))&&t.push(e),t)),[]);return _f[t]={parser(t,e){const i=t.split(Cf).reduce(((t,e,i)=>{if(e.length>0&&n[i]){const r=n[i][0];"M"===r?t.m=e:"D"!==r&&(t[r]=e)}return t}),{});return r.reduce(((t,n)=>{const r=Nf[n](t,i[n],e);return isNaN(r)?t:r}),gf())},formatter:(t,n)=>i.reduce(((i,r,o)=>i+`${e[o]}${r(t,n)}`),"")+lf(e)}}function Of(t,e,n){if(t instanceof Date||"number"==typeof t){const e=mf(t);return isNaN(e)?void 0:e}if(t){if("today"===t)return gf();if(e&&e.toValue){const i=e.toValue(t,e,n);return isNaN(i)?void 0:mf(i)}return Lf(e).parser(t,n)}}function Mf(t,e,n){if(isNaN(t)||!t&&0!==t)return"";const i="number"==typeof t?new Date(t):t;return e.toDisplay?e.toDisplay(i,e,n):Lf(e).formatter(i,n)}const Pf=document.createRange();function Bf(t){return Pf.createContextualFragment(t)}function Ff(t){return t.parentElement||(t.parentNode instanceof ShadowRoot?t.parentNode.host:void 0)}function Uf(t){return t.getRootNode().activeElement===t}function jf(t){"none"!==t.style.display&&(t.style.display&&(t.dataset.styleDisplay=t.style.display),t.style.display="none")}function zf(t){"none"===t.style.display&&(t.dataset.styleDisplay?(t.style.display=t.dataset.styleDisplay,delete t.dataset.styleDisplay):t.style.display="")}function Wf(t){t.firstChild&&(t.removeChild(t.firstChild),Wf(t))}function Hf(t,e){Wf(t),e instanceof DocumentFragment?t.appendChild(e):"string"==typeof e?t.appendChild(Bf(e)):"function"==typeof e.forEach&&e.forEach((e=>{t.appendChild(e)}))}const Vf=new WeakMap,{addEventListener:$f,removeEventListener:qf}=EventTarget.prototype;function Xf(t,e){let n=Vf.get(t);n||(n=[],Vf.set(t,n)),e.forEach((t=>{$f.call(...t),n.push(t)}))}function Kf(t){let e=Vf.get(t);e&&(e.forEach((t=>{qf.call(...t)})),Vf.delete(t))}if(!Event.prototype.composedPath){const t=(e,n=[])=>{let i;return n.push(e),e.parentNode?i=e.parentNode:e.host?i=e.host:e.defaultView&&(i=e.defaultView),i?t(i,n):n};Event.prototype.composedPath=function(){return t(this.target)}}function Yf(t,e,n){const[i,...r]=t;return e(i)?i:i!==n&&"HTML"!==i.tagName&&0!==r.length?Yf(r,e,n):void 0}function Gf(t,e){const n="function"==typeof e?e:t=>t instanceof Element&&t.matches(e);return Yf(t.composedPath(),n,t.currentTarget)}const Jf={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM y"}};var Qf={autohide:!1,beforeShowDay:null,beforeShowDecade:null,beforeShowMonth:null,beforeShowYear:null,calendarWeeks:!1,clearBtn:!1,dateDelimiter:",",datesDisabled:[],daysOfWeekDisabled:[],daysOfWeekHighlighted:[],defaultViewDate:void 0,disableTouchKeyboard:!1,format:"mm/dd/yyyy",language:"en",maxDate:null,maxNumberOfDates:1,maxView:3,minDate:null,nextArrow:"»",orientation:"auto",pickLevel:0,prevArrow:"«",showDaysOfWeek:!0,showOnClick:!0,showOnFocus:!0,startView:0,title:"",todayBtn:!1,todayBtnMode:0,todayHighlight:!1,updateOnBlur:!0,weekStart:0};const{language:Zf,format:tp,weekStart:ep}=Qf;function np(t,e){return t.length<6&&e>=0&&e<7?cf(t,e):t}function ip(t){return(t+6)%7}function rp(t,e,n,i){const r=Of(t,e,n);return void 0!==r?r:i}function op(t,e,n=3){const i=parseInt(t,10);return i>=0&&i<=n?i:e}function sp(t,e){const n=Object.assign({},t),i={},r=e.constructor.locales,o=e.rangeSideIndex;let{format:s,language:a,locale:l,maxDate:c,maxView:u,minDate:h,pickLevel:d,startView:f,weekStart:p}=e.config||{};if(n.language){let t;if(n.language!==a&&(r[n.language]?t=n.language:(t=n.language.split("-")[0],void 0===r[t]&&(t=!1))),delete n.language,t){a=i.language=t;const e=l||r[Zf];l=Object.assign({format:tp,weekStart:ep},r[Zf]),a!==Zf&&Object.assign(l,r[a]),i.locale=l,s===e.format&&(s=i.format=l.format),p===e.weekStart&&(p=i.weekStart=l.weekStart,i.weekEnd=ip(l.weekStart))}}if(n.format){const t="function"==typeof n.format.toDisplay,e="function"==typeof n.format.toValue,r=Tf.test(n.format);(t&&e||r)&&(s=i.format=n.format),delete n.format}let m=d;void 0!==n.pickLevel&&(m=op(n.pickLevel,2),delete n.pickLevel),m!==d&&(m>d&&(void 0===n.minDate&&(n.minDate=h),void 0===n.maxDate&&(n.maxDate=c)),n.datesDisabled||(n.datesDisabled=[]),d=i.pickLevel=m);let g=h,y=c;if(void 0!==n.minDate){const t=yf(0,0,1);g=null===n.minDate?t:rp(n.minDate,s,l,g),g!==t&&(g=Sf(g,d,!1)),delete n.minDate}if(void 0!==n.maxDate&&(y=null===n.maxDate?void 0:rp(n.maxDate,s,l,y),void 0!==y&&(y=Sf(y,d,!0)),delete n.maxDate),y<g?(h=i.minDate=y,c=i.maxDate=g):(h!==g&&(h=i.minDate=g),c!==y&&(c=i.maxDate=y)),n.datesDisabled&&(i.datesDisabled=n.datesDisabled.reduce(((t,e)=>{const n=Of(e,s,l);return void 0!==n?cf(t,Sf(n,d,o)):t}),[]),delete n.datesDisabled),void 0!==n.defaultViewDate){const t=Of(n.defaultViewDate,s,l);void 0!==t&&(i.defaultViewDate=t),delete n.defaultViewDate}if(void 0!==n.weekStart){const t=Number(n.weekStart)%7;isNaN(t)||(p=i.weekStart=t,i.weekEnd=ip(t)),delete n.weekStart}if(n.daysOfWeekDisabled&&(i.daysOfWeekDisabled=n.daysOfWeekDisabled.reduce(np,[]),delete n.daysOfWeekDisabled),n.daysOfWeekHighlighted&&(i.daysOfWeekHighlighted=n.daysOfWeekHighlighted.reduce(np,[]),delete n.daysOfWeekHighlighted),void 0!==n.maxNumberOfDates){const t=parseInt(n.maxNumberOfDates,10);t>=0&&(i.maxNumberOfDates=t,i.multidate=1!==t),delete n.maxNumberOfDates}n.dateDelimiter&&(i.dateDelimiter=String(n.dateDelimiter),delete n.dateDelimiter);let v=u;void 0!==n.maxView&&(v=op(n.maxView,u),delete n.maxView),v=d>v?d:v,v!==u&&(u=i.maxView=v);let b=f;if(void 0!==n.startView&&(b=op(n.startView,b),delete n.startView),b<d?b=d:b>u&&(b=u),b!==f&&(i.startView=b),n.prevArrow){const t=Bf(n.prevArrow);t.childNodes.length>0&&(i.prevArrow=t.childNodes),delete n.prevArrow}if(n.nextArrow){const t=Bf(n.nextArrow);t.childNodes.length>0&&(i.nextArrow=t.childNodes),delete n.nextArrow}if(void 0!==n.disableTouchKeyboard&&(i.disableTouchKeyboard="ontouchstart"in document&&!!n.disableTouchKeyboard,delete n.disableTouchKeyboard),n.orientation){const t=n.orientation.toLowerCase().split(/\s+/g);i.orientation={x:t.find((t=>"left"===t||"right"===t))||"auto",y:t.find((t=>"top"===t||"bottom"===t))||"auto"},delete n.orientation}if(void 0!==n.todayBtnMode){switch(n.todayBtnMode){case 0:case 1:i.todayBtnMode=n.todayBtnMode}delete n.todayBtnMode}return Object.keys(n).forEach((t=>{void 0!==n[t]&&af(Qf,t)&&(i[t]=n[t])})),i}var ap=pf('<div class="datepicker">\n  <div class="datepicker-picker">\n    <div class="datepicker-header">\n      <div class="datepicker-title"></div>\n      <div class="datepicker-controls">\n        <button type="button" class="%buttonClass% prev-btn"></button>\n        <button type="button" class="%buttonClass% view-switch"></button>\n        <button type="button" class="%buttonClass% next-btn"></button>\n      </div>\n    </div>\n    <div class="datepicker-main"></div>\n    <div class="datepicker-footer">\n      <div class="datepicker-controls">\n        <button type="button" class="%buttonClass% today-btn"></button>\n        <button type="button" class="%buttonClass% clear-btn"></button>\n      </div>\n    </div>\n  </div>\n</div>');var lp=pf(`<div class="days">\n  <div class="days-of-week">${ff("span",7,{class:"dow"})}</div>\n  <div class="datepicker-grid">${ff("span",42)}</div>\n</div>`);var cp=pf(`<div class="calendar-weeks">\n  <div class="days-of-week"><span class="dow"></span></div>\n  <div class="weeks">${ff("span",6,{class:"week"})}</div>\n</div>`);class up{init(t){void 0!==t.pickLevel&&(this.isMinView=this.id===t.pickLevel),this.setOptions(t),this.updateFocus(),this.updateSelection()}performBeforeHook(t,e,n){let i=this.beforeShow(new Date(n));switch(typeof i){case"boolean":i={enabled:i};break;case"string":i={classes:i}}if(i){if(!1===i.enabled&&(t.classList.add("disabled"),cf(this.disabled,e)),i.classes){const n=i.classes.split(/\s+/);t.classList.add(...n),n.includes("disabled")&&cf(this.disabled,e)}i.content&&Hf(t,i.content)}}constructor(t,e){Object.assign(this,e,{picker:t,element:Bf('<div class="datepicker-view"></div>').firstChild,selected:[]}),this.init(this.picker.datepicker.config)}}class hp extends up{init(t,e=!0){if(e){const t=Bf(lp).firstChild;this.dow=t.firstChild,this.grid=t.lastChild,this.element.appendChild(t)}super.init(t)}setOptions(t){let e;if(af(t,"minDate")&&(this.minDate=t.minDate),af(t,"maxDate")&&(this.maxDate=t.maxDate),t.datesDisabled&&(this.datesDisabled=t.datesDisabled),t.daysOfWeekDisabled&&(this.daysOfWeekDisabled=t.daysOfWeekDisabled,e=!0),t.daysOfWeekHighlighted&&(this.daysOfWeekHighlighted=t.daysOfWeekHighlighted),void 0!==t.todayHighlight&&(this.todayHighlight=t.todayHighlight),void 0!==t.weekStart&&(this.weekStart=t.weekStart,this.weekEnd=t.weekEnd,e=!0),t.locale){const n=this.locale=t.locale;this.dayNames=n.daysMin,this.switchLabelFormat=n.titleFormat,e=!0}if(void 0!==t.beforeShowDay&&(this.beforeShow="function"==typeof t.beforeShowDay?t.beforeShowDay:void 0),void 0!==t.calendarWeeks)if(t.calendarWeeks&&!this.calendarWeeks){const t=Bf(cp).firstChild;this.calendarWeeks={element:t,dow:t.firstChild,weeks:t.lastChild},this.element.insertBefore(t,this.element.firstChild)}else this.calendarWeeks&&!t.calendarWeeks&&(this.element.removeChild(this.calendarWeeks.element),this.calendarWeeks=null);void 0!==t.showDaysOfWeek&&(t.showDaysOfWeek?(zf(this.dow),this.calendarWeeks&&zf(this.calendarWeeks.dow)):(jf(this.dow),this.calendarWeeks&&jf(this.calendarWeeks.dow))),e&&Array.from(this.dow.children).forEach(((t,e)=>{const n=(this.weekStart+e)%7;t.textContent=this.dayNames[n],t.className=this.daysOfWeekDisabled.includes(n)?"dow disabled":"dow"}))}updateFocus(){const t=new Date(this.picker.viewDate),e=t.getFullYear(),n=t.getMonth(),i=yf(e,n,1),r=kf(i,this.weekStart,this.weekStart);this.first=i,this.last=yf(e,n+1,0),this.start=r,this.focused=this.picker.viewDate}updateSelection(){const{dates:t,rangepicker:e}=this.picker.datepicker;this.selected=t,e&&(this.range=e.dates)}render(){this.today=this.todayHighlight?gf():void 0,this.disabled=[...this.datesDisabled];const t=Mf(this.focused,this.switchLabelFormat,this.locale);if(this.picker.setViewSwitchLabel(t),this.picker.setPrevBtnDisabled(this.first<=this.minDate),this.picker.setNextBtnDisabled(this.last>=this.maxDate),this.calendarWeeks){const t=kf(this.first,1,1);Array.from(this.calendarWeeks.weeks.children).forEach(((e,n)=>{e.textContent=Ef(vf(t,7*n))}))}Array.from(this.grid.children).forEach(((t,e)=>{const n=t.classList,i=vf(this.start,e),r=new Date(i),o=r.getDay();if(t.className=`datepicker-cell ${this.cellClass}`,t.dataset.date=i,t.textContent=r.getDate(),i<this.first?n.add("prev"):i>this.last&&n.add("next"),this.today===i&&n.add("today"),(i<this.minDate||i>this.maxDate||this.disabled.includes(i))&&n.add("disabled"),this.daysOfWeekDisabled.includes(o)&&(n.add("disabled"),cf(this.disabled,i)),this.daysOfWeekHighlighted.includes(o)&&n.add("highlighted"),this.range){const[t,e]=this.range;i>t&&i<e&&n.add("range"),i===t&&n.add("range-start"),i===e&&n.add("range-end")}this.selected.includes(i)&&n.add("selected"),i===this.focused&&n.add("focused"),this.beforeShow&&this.performBeforeHook(t,i,i)}))}refresh(){const[t,e]=this.range||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach((t=>{t.classList.remove("range","range-start","range-end","selected","focused")})),Array.from(this.grid.children).forEach((n=>{const i=Number(n.dataset.date),r=n.classList;i>t&&i<e&&r.add("range"),i===t&&r.add("range-start"),i===e&&r.add("range-end"),this.selected.includes(i)&&r.add("selected"),i===this.focused&&r.add("focused")}))}refreshFocus(){const t=Math.round((this.focused-this.start)/864e5);this.grid.querySelectorAll(".focused").forEach((t=>{t.classList.remove("focused")})),this.grid.children[t].classList.add("focused")}constructor(t){super(t,{id:0,name:"days",cellClass:"day"})}}function dp(t,e){if(!t||!t[0]||!t[1])return;const[[n,i],[r,o]]=t;return n>e||r<e?void 0:[n===e?i:-1,r===e?o:12]}class fp extends up{init(t,e=!0){e&&(this.grid=this.element,this.element.classList.add("months","datepicker-grid"),this.grid.appendChild(Bf(ff("span",12,{"data-month":t=>t})))),super.init(t)}setOptions(t){if(t.locale&&(this.monthNames=t.locale.monthsShort),af(t,"minDate"))if(void 0===t.minDate)this.minYear=this.minMonth=this.minDate=void 0;else{const e=new Date(t.minDate);this.minYear=e.getFullYear(),this.minMonth=e.getMonth(),this.minDate=e.setDate(1)}if(af(t,"maxDate"))if(void 0===t.maxDate)this.maxYear=this.maxMonth=this.maxDate=void 0;else{const e=new Date(t.maxDate);this.maxYear=e.getFullYear(),this.maxMonth=e.getMonth(),this.maxDate=yf(this.maxYear,this.maxMonth+1,0)}this.isMinView?t.datesDisabled&&(this.datesDisabled=t.datesDisabled):this.datesDisabled=[],void 0!==t.beforeShowMonth&&(this.beforeShow="function"==typeof t.beforeShowMonth?t.beforeShowMonth:void 0)}updateFocus(){const t=new Date(this.picker.viewDate);this.year=t.getFullYear(),this.focused=t.getMonth()}updateSelection(){const{dates:t,rangepicker:e}=this.picker.datepicker;this.selected=t.reduce(((t,e)=>{const n=new Date(e),i=n.getFullYear(),r=n.getMonth();return void 0===t[i]?t[i]=[r]:cf(t[i],r),t}),{}),e&&e.dates&&(this.range=e.dates.map((t=>{const e=new Date(t);return isNaN(e)?void 0:[e.getFullYear(),e.getMonth()]})))}render(){this.disabled=this.datesDisabled.reduce(((t,e)=>{const n=new Date(e);return this.year===n.getFullYear()&&t.push(n.getMonth()),t}),[]),this.picker.setViewSwitchLabel(this.year),this.picker.setPrevBtnDisabled(this.year<=this.minYear),this.picker.setNextBtnDisabled(this.year>=this.maxYear);const t=this.selected[this.year]||[],e=this.year<this.minYear||this.year>this.maxYear,n=this.year===this.minYear,i=this.year===this.maxYear,r=dp(this.range,this.year);Array.from(this.grid.children).forEach(((o,s)=>{const a=o.classList,l=yf(this.year,s,1);if(o.className=`datepicker-cell ${this.cellClass}`,this.isMinView&&(o.dataset.date=l),o.textContent=this.monthNames[s],(e||n&&s<this.minMonth||i&&s>this.maxMonth||this.disabled.includes(s))&&a.add("disabled"),r){const[t,e]=r;s>t&&s<e&&a.add("range"),s===t&&a.add("range-start"),s===e&&a.add("range-end")}t.includes(s)&&a.add("selected"),s===this.focused&&a.add("focused"),this.beforeShow&&this.performBeforeHook(o,s,l)}))}refresh(){const t=this.selected[this.year]||[],[e,n]=dp(this.range,this.year)||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach((t=>{t.classList.remove("range","range-start","range-end","selected","focused")})),Array.from(this.grid.children).forEach(((i,r)=>{const o=i.classList;r>e&&r<n&&o.add("range"),r===e&&o.add("range-start"),r===n&&o.add("range-end"),t.includes(r)&&o.add("selected"),r===this.focused&&o.add("focused")}))}refreshFocus(){this.grid.querySelectorAll(".focused").forEach((t=>{t.classList.remove("focused")})),this.grid.children[this.focused].classList.add("focused")}constructor(t){super(t,{id:1,name:"months",cellClass:"month"})}}class pp extends up{init(t,e=!0){var n;e&&(this.navStep=10*this.step,this.beforeShowOption=`beforeShow${n=this.cellClass,[...n].reduce(((t,e,n)=>t+(n?e:e.toUpperCase())),"")}`,this.grid=this.element,this.element.classList.add(this.name,"datepicker-grid"),this.grid.appendChild(Bf(ff("span",12)))),super.init(t)}setOptions(t){if(af(t,"minDate")&&(void 0===t.minDate?this.minYear=this.minDate=void 0:(this.minYear=If(t.minDate,this.step),this.minDate=yf(this.minYear,0,1))),af(t,"maxDate")&&(void 0===t.maxDate?this.maxYear=this.maxDate=void 0:(this.maxYear=If(t.maxDate,this.step),this.maxDate=yf(this.maxYear,11,31))),this.isMinView?t.datesDisabled&&(this.datesDisabled=t.datesDisabled):this.datesDisabled=[],void 0!==t[this.beforeShowOption]){const e=t[this.beforeShowOption];this.beforeShow="function"==typeof e?e:void 0}}updateFocus(){const t=new Date(this.picker.viewDate),e=If(t,this.navStep),n=e+9*this.step;this.first=e,this.last=n,this.start=e-this.step,this.focused=If(t,this.step)}updateSelection(){const{dates:t,rangepicker:e}=this.picker.datepicker;this.selected=t.reduce(((t,e)=>cf(t,If(e,this.step))),[]),e&&e.dates&&(this.range=e.dates.map((t=>{if(void 0!==t)return If(t,this.step)})))}render(){this.disabled=this.datesDisabled.map((t=>new Date(t).getFullYear())),this.picker.setViewSwitchLabel(`${this.first}-${this.last}`),this.picker.setPrevBtnDisabled(this.first<=this.minYear),this.picker.setNextBtnDisabled(this.last>=this.maxYear),Array.from(this.grid.children).forEach(((t,e)=>{const n=t.classList,i=this.start+e*this.step,r=yf(i,0,1);if(t.className=`datepicker-cell ${this.cellClass}`,this.isMinView&&(t.dataset.date=r),t.textContent=t.dataset.year=i,0===e?n.add("prev"):11===e&&n.add("next"),(i<this.minYear||i>this.maxYear||this.disabled.includes(i))&&n.add("disabled"),this.range){const[t,e]=this.range;i>t&&i<e&&n.add("range"),i===t&&n.add("range-start"),i===e&&n.add("range-end")}this.selected.includes(i)&&n.add("selected"),i===this.focused&&n.add("focused"),this.beforeShow&&this.performBeforeHook(t,i,r)}))}refresh(){const[t,e]=this.range||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach((t=>{t.classList.remove("range","range-start","range-end","selected","focused")})),Array.from(this.grid.children).forEach((n=>{const i=Number(n.textContent),r=n.classList;i>t&&i<e&&r.add("range"),i===t&&r.add("range-start"),i===e&&r.add("range-end"),this.selected.includes(i)&&r.add("selected"),i===this.focused&&r.add("focused")}))}refreshFocus(){const t=Math.round((this.focused-this.start)/this.step);this.grid.querySelectorAll(".focused").forEach((t=>{t.classList.remove("focused")})),this.grid.children[t].classList.add("focused")}constructor(t,e){super(t,e)}}function mp(t,e){const n={date:t.getDate(),viewDate:new Date(t.picker.viewDate),viewId:t.picker.currentView.id,datepicker:t};t.element.dispatchEvent(new CustomEvent(e,{detail:n}))}function gp(t,e){const{minDate:n,maxDate:i}=t.config,{currentView:r,viewDate:o}=t.picker;let s;switch(r.id){case 0:s=bf(o,e);break;case 1:s=wf(o,e);break;default:s=wf(o,e*r.navStep)}s=df(s,n,i),t.picker.changeFocus(s).render()}function yp(t){const e=t.picker.currentView.id;e!==t.config.maxView&&t.picker.changeView(e+1).render()}function vp(t){t.config.updateOnBlur?t.update({revert:!0}):t.refresh("input"),t.hide()}function bp(t,e){const n=t.picker,i=new Date(n.viewDate),r=n.currentView.id,o=1===r?bf(i,e-i.getMonth()):wf(i,e-i.getFullYear());n.changeFocus(o).changeView(r-1).render()}function wp(t){const e=t.picker,n=gf();if(1===t.config.todayBtnMode){if(t.config.autohide)return void t.setDate(n);t.setDate(n,{render:!1}),e.update()}e.viewDate!==n&&e.changeFocus(n),e.changeView(0).render()}function xp(t){t.setDate({clear:!0})}function kp(t){yp(t)}function Ep(t){gp(t,-1)}function Ip(t){gp(t,1)}function Sp(t,e){const n=Gf(e,".datepicker-cell");if(!n||n.classList.contains("disabled"))return;const{id:i,isMinView:r}=t.picker.currentView;r?t.setDate(Number(n.dataset.date)):bp(t,Number(1===i?n.dataset.month:n.dataset.year))}function Tp(t){t.preventDefault()}const Cp=["left","top","right","bottom"].reduce(((t,e)=>(t[e]=`datepicker-orient-${e}`,t)),{}),_p=t=>t?`${t}px`:t;function Np(t,e){if(void 0!==e.title&&(e.title?(t.controls.title.textContent=e.title,zf(t.controls.title)):(t.controls.title.textContent="",jf(t.controls.title))),e.prevArrow){const n=t.controls.prevBtn;Wf(n),e.prevArrow.forEach((t=>{n.appendChild(t.cloneNode(!0))}))}if(e.nextArrow){const n=t.controls.nextBtn;Wf(n),e.nextArrow.forEach((t=>{n.appendChild(t.cloneNode(!0))}))}if(e.locale&&(t.controls.todayBtn.textContent=e.locale.today,t.controls.clearBtn.textContent=e.locale.clear),void 0!==e.todayBtn&&(e.todayBtn?zf(t.controls.todayBtn):jf(t.controls.todayBtn)),af(e,"minDate")||af(e,"maxDate")){const{minDate:e,maxDate:n}=t.datepicker.config;t.controls.todayBtn.disabled=!hf(gf(),e,n)}void 0!==e.clearBtn&&(e.clearBtn?zf(t.controls.clearBtn):jf(t.controls.clearBtn))}function Ap(t){const{dates:e,config:n}=t;return df(e.length>0?lf(e):n.defaultViewDate,n.minDate,n.maxDate)}function Dp(t,e){const n=new Date(t.viewDate),i=new Date(e),{id:r,year:o,first:s,last:a}=t.currentView,l=i.getFullYear();switch(t.viewDate=e,l!==n.getFullYear()&&mp(t.datepicker,"changeYear"),i.getMonth()!==n.getMonth()&&mp(t.datepicker,"changeMonth"),r){case 0:return e<s||e>a;case 1:return l!==o;default:return l<s||l>a}}function Rp(t){return window.getComputedStyle(t).direction}function Lp(t){const e=Ff(t);if(e!==document.body&&e)return"visible"!==window.getComputedStyle(e).overflow?e:Lp(e)}class Op{setOptions(t){Np(this,t),this.views.forEach((e=>{e.init(t,!1)})),this.currentView.render()}detach(){this.element.remove()}show(){if(this.active)return;const{datepicker:t,element:e}=this;if(t.inline)e.classList.add("active");else{const n=Rp(t.inputField);n!==Rp(Ff(e))?e.dir=n:e.dir&&e.removeAttribute("dir"),e.style.visiblity="hidden",e.classList.add("active"),this.place(),e.style.visiblity="",t.config.disableTouchKeyboard&&t.inputField.blur()}this.active=!0,mp(t,"show")}hide(){this.active&&(this.datepicker.exitEditMode(),this.element.classList.remove("active"),this.active=!1,mp(this.datepicker,"hide"))}place(){const{classList:t,offsetParent:e,style:n}=this.element,{config:i,inputField:r}=this.datepicker,{width:o,height:s}=this.element.getBoundingClientRect(),{left:a,top:l,right:c,bottom:u,width:h,height:d}=r.getBoundingClientRect();let{x:f,y:p}=i.orientation,m=a,g=l;if(e!==document.body&&e){const t=e.getBoundingClientRect();m-=t.left-e.scrollLeft,g-=t.top-e.scrollTop}else m+=window.scrollX,g+=window.scrollY;const y=Lp(r);let v=0,b=0,{clientWidth:w,clientHeight:x}=document.documentElement;if(y){const t=y.getBoundingClientRect();t.top>0&&(b=t.top),t.left>0&&(v=t.left),t.right<w&&(w=t.right),t.bottom<x&&(x=t.bottom)}let k=0;"auto"===f&&(a<v?(f="left",k=v-a):a+o>w?(f="right",w<c&&(k=w-c)):f="rtl"===Rp(r)?c-o<v?"left":"right":"left"),"right"===f&&(m+=h-o),m+=k,"auto"===p&&(p=l-s>b&&u+s>x?"top":"bottom"),"top"===p?g-=s:g+=d,t.remove(...Object.values(Cp)),t.add(Cp[f],Cp[p]),n.left=_p(m),n.top=_p(g)}setViewSwitchLabel(t){this.controls.viewSwitch.textContent=t}setPrevBtnDisabled(t){this.controls.prevBtn.disabled=t}setNextBtnDisabled(t){this.controls.nextBtn.disabled=t}changeView(t){const e=this.currentView,n=this.views[t];return n.id!==e.id&&(this.currentView=n,this._renderMethod="render",mp(this.datepicker,"changeView"),this.main.replaceChild(n.element,e.element)),this}changeFocus(t){return this._renderMethod=Dp(this,t)?"render":"refreshFocus",this.views.forEach((t=>{t.updateFocus()})),this}update(){const t=Ap(this.datepicker);return this._renderMethod=Dp(this,t)?"render":"refresh",this.views.forEach((t=>{t.updateFocus(),t.updateSelection()})),this}render(t=!0){const e=t&&this._renderMethod||"render";delete this._renderMethod,this.currentView[e]()}constructor(t){const{config:e}=this.datepicker=t,n=ap.replace(/%buttonClass%/g,e.buttonClass),i=this.element=Bf(n).firstChild,[r,o,s]=i.firstChild.children,a=r.firstElementChild,[l,c,u]=r.lastElementChild.children,[h,d]=s.firstChild.children,f={title:a,prevBtn:l,viewSwitch:c,nextBtn:u,todayBtn:h,clearBtn:d};this.main=o,this.controls=f;const p=t.inline?"inline":"dropdown";i.classList.add(`datepicker-${p}`),Np(this,e),this.viewDate=Ap(t),Xf(t,[[i,"mousedown",Tp],[o,"click",Sp.bind(null,t)],[f.viewSwitch,"click",kp.bind(null,t)],[f.prevBtn,"click",Ep.bind(null,t)],[f.nextBtn,"click",Ip.bind(null,t)],[f.todayBtn,"click",wp.bind(null,t)],[f.clearBtn,"click",xp.bind(null,t)]]),this.views=[new hp(this),new fp(this),new pp(this,{id:2,name:"years",cellClass:"year",step:1}),new pp(this,{id:3,name:"decades",cellClass:"decade",step:10})],this.currentView=this.views[e.startView],this.currentView.render(),this.main.appendChild(this.currentView.element),e.container?e.container.appendChild(this.element):t.inputField.after(this.element)}}function Mp(t,e,n,i,r,o){if(hf(t,r,o)){if(i(t)){return Mp(e(t,n),e,n,i,r,o)}return t}}function Pp(t,e,n,i){const r=t.picker,o=r.currentView,s=o.step||1;let a,l,c=r.viewDate;switch(o.id){case 0:c=i?vf(c,7*n):e.ctrlKey||e.metaKey?wf(c,n):vf(c,n),a=vf,l=t=>o.disabled.includes(t);break;case 1:c=bf(c,i?4*n:n),a=bf,l=t=>{const e=new Date(t),{year:n,disabled:i}=o;return e.getFullYear()===n&&i.includes(e.getMonth())};break;default:c=wf(c,n*(i?4:1)*s),a=wf,l=t=>o.disabled.includes(If(t,s))}c=Mp(c,a,n<0?-s:s,l,o.minDate,o.maxDate),void 0!==c&&r.changeFocus(c).render()}function Bp(t,e){const n=e.key;if("Tab"===n)return void vp(t);const i=t.picker,{id:r,isMinView:o}=i.currentView;if(i.active){if(t.editMode)return void("Enter"===n?t.exitEditMode({update:!0,autohide:t.config.autohide}):"Escape"===n&&i.hide());if("ArrowLeft"===n)if(e.ctrlKey||e.metaKey)gp(t,-1);else{if(e.shiftKey)return void t.enterEditMode();Pp(t,e,-1,!1)}else if("ArrowRight"===n)if(e.ctrlKey||e.metaKey)gp(t,1);else{if(e.shiftKey)return void t.enterEditMode();Pp(t,e,1,!1)}else if("ArrowUp"===n)if(e.ctrlKey||e.metaKey)yp(t);else{if(e.shiftKey)return void t.enterEditMode();Pp(t,e,-1,!0)}else if("ArrowDown"===n){if(e.shiftKey&&!e.ctrlKey&&!e.metaKey)return void t.enterEditMode();Pp(t,e,1,!0)}else{if("Enter"!==n)return void("Escape"===n?i.hide():"Backspace"!==n&&"Delete"!==n&&(1!==n.length||e.ctrlKey||e.metaKey)||t.enterEditMode());if(o)return void t.setDate(i.viewDate);i.changeView(r-1).render()}}else{if("ArrowDown"!==n)return void("Enter"===n?t.update():"Escape"===n&&i.show());i.show()}e.preventDefault()}function Fp(t){t.config.showOnFocus&&!t._showing&&t.show()}function Up(t,e){const n=e.target;(t.picker.active||t.config.showOnClick)&&(n._active=Uf(n),n._clicking=setTimeout((()=>{delete n._active,delete n._clicking}),2e3))}function jp(t,e){const n=e.target;n._clicking&&(clearTimeout(n._clicking),delete n._clicking,n._active&&t.enterEditMode(),delete n._active,t.config.showOnClick&&t.show())}function zp(t,e){e.clipboardData.types.includes("text/plain")&&t.enterEditMode()}function Wp(t,e){const{element:n,picker:i}=t;if(!i.active&&!Uf(n))return;const r=i.element;Gf(e,(t=>t===n||t===r))||vp(t)}function Hp(t,e){return t.map((t=>Mf(t,e.format,e.locale))).join(e.dateDelimiter)}function Vp(t,e,n=!1){const{config:i,dates:r,rangeSideIndex:o}=t;if(0===e.length)return n?[]:void 0;let s=e.reduce(((t,e)=>{let n=Of(e,i.format,i.locale);return void 0===n||(n=Sf(n,i.pickLevel,o),!hf(n,i.minDate,i.maxDate)||t.includes(n)||i.datesDisabled.includes(n)||!(i.pickLevel>0)&&i.daysOfWeekDisabled.includes(new Date(n).getDay())||t.push(n)),t}),[]);return 0!==s.length?(i.multidate&&!n&&(s=s.reduce(((t,e)=>(r.includes(e)||t.push(e),t)),r.filter((t=>!s.includes(t))))),i.maxNumberOfDates&&s.length>i.maxNumberOfDates?s.slice(-1*i.maxNumberOfDates):s):void 0}function $p(t,e=3,n=!0){const{config:i,picker:r,inputField:o}=t;if(2&e){const t=r.active?i.pickLevel:i.startView;r.update().changeView(t).render(n)}1&e&&o&&(o.value=Hp(t.dates,i))}function qp(t,e,n){let{clear:i,render:r,autohide:o,revert:s}=n;void 0===r&&(r=!0),r?void 0===o&&(o=t.config.autohide):o=!1;const a=Vp(t,e,i);(a||s)&&(a&&a.toString()!==t.dates.toString()?(t.dates=a,$p(t,r?3:1),mp(t,"changeDate")):$p(t,1),o&&t.hide())}class Xp{static formatDate(t,e,n){return Mf(t,e,n&&Jf[n]||Jf.en)}static parseDate(t,e,n){return Of(t,e,n&&Jf[n]||Jf.en)}static get locales(){return Jf}get active(){return!(!this.picker||!this.picker.active)}get pickerElement(){return this.picker?this.picker.element:void 0}setOptions(t){const e=this.picker,n=sp(t,this);Object.assign(this._options,t),Object.assign(this.config,n),e.setOptions(n),$p(this,3)}show(){if(this.inputField){if(this.inputField.disabled)return;Uf(this.inputField)||this.config.disableTouchKeyboard||(this._showing=!0,this.inputField.focus(),delete this._showing)}this.picker.show()}hide(){this.inline||(this.picker.hide(),this.picker.update().changeView(this.config.startView).render())}destroy(){return this.hide(),Kf(this),this.picker.detach(),this.inline||this.inputField.classList.remove("datepicker-input"),delete this.element.datepicker,this}getDate(t){const e=t?e=>Mf(e,t,this.config.locale):t=>new Date(t);return this.config.multidate?this.dates.map(e):this.dates.length>0?e(this.dates[0]):void 0}setDate(...t){const e=[...t],n={},i=lf(t);"object"!=typeof i||Array.isArray(i)||i instanceof Date||!i||Object.assign(n,e.pop());qp(this,Array.isArray(e[0])?e[0]:e,n)}update(t){if(this.inline)return;const e=Object.assign(t||{},{clear:!0,render:!0});qp(this,uf(this.inputField.value,this.config.dateDelimiter),e)}refresh(t,e=!1){let n;t&&"string"!=typeof t&&(e=t,t=void 0),n="picker"===t?2:"input"===t?1:3,$p(this,n,!e)}enterEditMode(){this.inline||!this.picker.active||this.editMode||(this.editMode=!0,this.inputField.classList.add("in-edit"))}exitEditMode(t){if(this.inline||!this.editMode)return;const e=Object.assign({update:!1},t);delete this.editMode,this.inputField.classList.remove("in-edit"),e.update&&this.update(e)}constructor(t,e={},n){t.datepicker=this,this.element=t;const i=this.config=Object.assign({buttonClass:e.buttonClass&&String(e.buttonClass)||"button",container:null,defaultViewDate:gf(),maxDate:void 0,minDate:void 0},sp(Qf,this)),r=this.inline="INPUT"!==t.tagName;let o,s;if(r?i.container=t:(e.container&&(i.container=e.container instanceof HTMLElement?e.container:document.querySelector(e.container)),o=this.inputField=t,o.classList.add("datepicker-input")),n){const t=n.inputs.indexOf(o),e=n.datepickers;if(t<0||t>1||!Array.isArray(e))throw Error("Invalid rangepicker object.");e[t]=this,Object.defineProperty(this,"rangepicker",{get:()=>n}),Object.defineProperty(this,"rangeSideIndex",{get:()=>t})}this._options=e,Object.assign(i,sp(e,this)),r?(s=uf(t.dataset.date,i.dateDelimiter),delete t.dataset.date):s=uf(o.value,i.dateDelimiter),this.dates=[];const a=Vp(this,s);a&&a.length>0&&(this.dates=a),o&&(o.value=Hp(this.dates,i));const l=this.picker=new Op(this);if(r)this.show();else{const t=Wp.bind(null,this);Xf(this,[[o,"keydown",Bp.bind(null,this)],[o,"focus",Fp.bind(null,this)],[o,"mousedown",Up.bind(null,this)],[o,"click",jp.bind(null,this)],[o,"paste",zp.bind(null,this)],[document,"mousedown",t],[document,"touchstart",t],[window,"resize",l.place.bind(l)]])}}}const Kp=document.querySelector(".calendar__btn"),Yp=new Xp(Kp,{weekStart:1,defaultViewDate:new Date,format:"dd/mm/yyyy"});var Gp;function Jp(t){return Yp.getDate(t)}Gp=new Date,Yp.setDate(Gp);document.querySelector("#pagination");var Qp={code:"",Extend:function(t){window.innerWidth<768?(t=t||{},Qp.size=t.size||300,Qp.page=t.page||1,Qp.step=t.step||0):(t=t||{},Qp.size=t.size||300,Qp.page=t.page||1,Qp.step=t.step||1)},Add:function(t,e){for(var n=t;n<e;n++)Qp.code+="<a>"+n+"</a>"},Last:function(){Qp.code+="<i>...</i><a>"+Qp.size+"</a>"},First:function(){1!==Qp.page&&(Qp.code+="<a>1</a><i>...</i>")},Click:function(){Qp.page=+this.innerHTML,Qp.Start()},Prev:function(){Qp.page--,Qp.page<1&&(Qp.page=1),Qp.Start()},Next:function(){Qp.page++,Qp.page>Qp.size&&(Qp.page=Qp.size),Qp.Start()},Bind:function(){for(var t=Qp.e.getElementsByTagName("a"),e=0;e<t.length;e++)+t[e].innerHTML===Qp.page&&(t[e].className="current"),t[e].addEventListener("click",Qp.Click,!1)},Finish:function(){Qp.e.innerHTML=Qp.code,Qp.code="",Qp.Bind()},Start:function(){window.innerWidth<768?(Qp.size<2*Qp.step+6?Qp.Add(1,Qp.size+1):Qp.page<2*Qp.step+1?(Qp.Add(1,2*Qp.step+2),Qp.Last()):Qp.page>Qp.size-2*Qp.step?(Qp.First(),Qp.Add(Qp.size-2*Qp.step,Qp.size+1)):(Qp.First(),Qp.Add(Qp.page-Qp.step+1,Qp.page+Qp.step),Qp.Last()),Qp.Finish()):(Qp.size<2*Qp.step+6?Qp.Add(1,Qp.size+1):Qp.page<2*Qp.step+1?(Qp.Add(1,2*Qp.step+1),Qp.Last()):Qp.page>Qp.size-2*Qp.step?(Qp.First(),Qp.Add(Qp.size-2*Qp.step+1,Qp.size+1)):(Qp.First(),Qp.Add(Qp.page-Qp.step+1,Qp.page+Qp.step),Qp.Last()),Qp.Finish())},Buttons:function(t){var e=t.getElementsByTagName("a");e[0].addEventListener("click",Qp.Prev,!1),e[1].addEventListener("click",Qp.Next,!1)},Create:function(t){t.innerHTML=['<a class="arr"> < Prew </a>',"<span></span>",'<a class="arr"> Next > </a>'].join(""),Qp.e=t.getElementsByTagName("span")[0],Qp.Buttons(t)},Init:function(t,e){Qp.Extend(e),Qp.Create(t),Qp.Start()}},Zp=function(t){window.innerWidth<768?Qp.Init(document.getElementById("pagination"),{size:t,page:1,step:1}):Qp.Init(document.getElementById("pagination"),{size:t,page:1,step:2})};function tm(t){const e={noNewsSection:document.querySelector(".no-news"),newsSection:document.querySelector(".news"),pagination:document.querySelector(".pagination ")};0===t.length?(e.noNewsSection.classList.remove("is-hidden"),e.newsSection.classList.add("is-hidden")):(e.noNewsSection.classList.add("is-hidden"),e.newsSection.classList.remove("is-hidden"))}const em={newsList:document.querySelector(".news__list")};!function(t){Kp.addEventListener("changeDate",(e=>{Yp.hide(),t(e)}))}((t=>{let e;const n=Jp("yyyymmdd"),i=new Date(Jp("yyyy-mm-dd"));Date.now()<=i.getTime()?In.Notify.warning("You can`t see into the future, it`s a pity!"):Sn("articles",{begin_date:n,end_date:n}).then((t=>{em.newsList.innerHTML="",Cn(em.newsList,Tn(t.data.response.docs,"dateCards")),rf(),e=Math.ceil(t.data.response.meta.hits/10),e>99&&(e=99),Zp(e),tm(t.data.response.docs),window.localStorage.setItem("lastFetchType",JSON.stringify({type:"date",value:n}))}))}));var nm={};n(nm,"disableBodyScroll",(function(){return gm})),n(nm,"clearAllBodyScrollLocks",(function(){return ym})),n(nm,"enableBodyScroll",(function(){return vm}));var im=!1;if("undefined"!=typeof window){var rm={get passive(){im=!0}};window.addEventListener("testPassive",null,rm),window.removeEventListener("testPassive",null,rm)}var om="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),sm=[],am=!1,lm=-1,cm=void 0,um=void 0,hm=void 0,dm=function(t){return sm.some((function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))}))},fm=function(t){var e=t||window.event;return!!dm(e.target)||(e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1))},pm=function(){void 0!==hm&&(document.body.style.paddingRight=hm,hm=void 0),void 0!==cm&&(document.body.style.overflow=cm,cm=void 0)},mm=function(){if(void 0!==um){var t=-parseInt(document.body.style.top,10),e=-parseInt(document.body.style.left,10);document.body.style.position=um.position,document.body.style.top=um.top,document.body.style.left=um.left,window.scrollTo(e,t),um=void 0}},gm=function(t,e){if(t){if(!sm.some((function(e){return e.targetElement===t}))){var n={targetElement:t,options:e||{}};sm=[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(sm),[n]),om?window.requestAnimationFrame((function(){if(void 0===um){um={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var t=window,e=t.scrollY,n=t.scrollX,i=t.innerHeight;document.body.style.position="fixed",document.body.style.top=-e,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var t=i-window.innerHeight;t&&e>=i&&(document.body.style.top=-(e+t))}))}),300)}})):function(t){if(void 0===hm){var e=!!t&&!0===t.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(e&&n>0){var i=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);hm=document.body.style.paddingRight,document.body.style.paddingRight=i+n+"px"}}void 0===cm&&(cm=document.body.style.overflow,document.body.style.overflow="hidden")}(e),om&&(t.ontouchstart=function(t){1===t.targetTouches.length&&(lm=t.targetTouches[0].clientY)},t.ontouchmove=function(e){1===e.targetTouches.length&&function(t,e){var n=t.targetTouches[0].clientY-lm;!dm(t.target)&&(e&&0===e.scrollTop&&n>0||function(t){return!!t&&t.scrollHeight-t.scrollTop<=t.clientHeight}(e)&&n<0?fm(t):t.stopPropagation())}(e,t)},am||(document.addEventListener("touchmove",fm,im?{passive:!1}:void 0),am=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},ym=function(){om&&(sm.forEach((function(t){t.targetElement.ontouchstart=null,t.targetElement.ontouchmove=null})),am&&(document.removeEventListener("touchmove",fm,im?{passive:!1}:void 0),am=!1),lm=-1),om?mm():pm(),sm=[]},vm=function(t){t?(sm=sm.filter((function(e){return e.targetElement!==t})),om&&(t.ontouchstart=null,t.ontouchmove=null,am&&0===sm.length&&(document.removeEventListener("touchmove",fm,im?{passive:!1}:void 0),am=!1)),om?mm():pm()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")};const bm=document.querySelector(".js-menu-container"),wm=document.querySelector(".js-open-menu"),xm=document.querySelector(".js-close-menu"),km=()=>{const t="true"===wm.getAttribute("aria-expanded")||!1;wm.setAttribute("aria-expanded",!t),bm.classList.toggle("is-open");nm[t?"enableBodyScroll":"disableBodyScroll"](document.body)};wm.addEventListener("click",km),xm.addEventListener("click",km);var Em=o("fKrXO");const Im=document.querySelector(".news__list");function Sm(t){t.target.classList.contains("news__readmore-link")&&((0,Em.handleReadMoreBtnClick)(t),Nn(t)),"DIV"===t.target.nodeName&&("Add to favorite"===t.target.firstElementChild.textContent?(t.target.classList.remove("div"),t.target.classList.add("div-remove"),t.target.firstElementChild.textContent="Remove from favorite",t.target.firstElementChild.classList.remove("news__favorite-btn"),t.target.firstElementChild.classList.add("btn-width"),t.target.lastElementChild.classList.remove("favorite-btn__icon-add"),t.target.lastElementChild.classList.add("favorite-btn__icon-remove")):"Remove from favorite"===t.target.firstElementChild.textContent&&(t.target.firstElementChild.textContent="Add to favorite",t.target.lastElementChild.classList.remove("favorite-btn__icon-remove"),t.target.lastElementChild.classList.add("favorite-btn__icon-add"),t.target.firstElementChild.classList.add("news__favorite-btn"),t.target.firstElementChild.classList.remove("btn-width"),t.target.classList.remove("div-remove"),t.target.classList.add("div")))}Im.addEventListener("click",Sm),Im.addEventListener("click",Sm);const Tm=document.querySelector(".news__list");let Cm=[];localStorage.getItem("news-added-to-favorite")&&JSON.parse(localStorage.getItem("news-added-to-favorite")).map((t=>{Cm.push(t)})),Tm.addEventListener("click",(function(t){if("DIV"===t.target.nodeName&&(Cm.push({image:t.target.parentNode.firstElementChild.src,title:t.target.parentNode.parentNode.children[1].textContent,text:t.target.parentNode.parentNode.children[2].textContent,href:t.target.parentNode.parentNode.lastElementChild.lastElementChild.href,date:t.target.parentNode.parentNode.lastElementChild.firstElementChild.textContent,id:t.target.parentNode.parentNode.dataset.id,h3:t.target.parentNode.lastElementChild.textContent}),localStorage.setItem("news-added-to-favorite",JSON.stringify(Cm)),t.target.classList.contains("div"))){const e=JSON.parse(localStorage.getItem("news-added-to-favorite")).filter((e=>e.id!==t.target.parentNode.parentNode.dataset.id));localStorage.removeItem("news-added-to-favorite"),localStorage.setItem("news-added-to-favorite",JSON.stringify(e)),Cm=e}}));const _m=new class{async getWeather(){return(await rn.get(`${this.options.baseURL}`,this.options)).data}async checkUserGeo(){return(await rn(`${this.IP_API_URL}`)).data}checkNavPermissions(){if(navigator.geolocation)return navigator.geolocation.getCurrentPosition(Nm,Am);alert("Your browser not support geolocation api")}renderWeatherMarkup(t){const e=document.querySelector(".weather"),n=this.dateFormatter(this.userTime),i=`\n    <div class="weather__info info">\n  <p class="info__temp">${Math.floor(t.main.temp)}°</p>\n  <div class="info-wrapper">\n    <p class="info__situation">${t.weather[0].main}</p>\n    <div class="info-wrapper-items">\n    <svg class= "info-wrapper__svg" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M13.5 1.6875C11.0394 1.6904 8.68032 2.66918 6.94038 4.40912C5.20044 6.14906 4.22166 8.5081 4.21876 10.9688C4.21581 12.9796 4.87265 14.9359 6.08851 16.5375C6.08851 16.5375 6.34163 16.8708 6.38298 16.9189L13.5 25.3125L20.6204 16.9147C20.6575 16.8699 20.9115 16.5375 20.9115 16.5375L20.9124 16.535C22.1276 14.934 22.7841 12.9787 22.7813 10.9688C22.7784 8.5081 21.7996 6.14906 20.0596 4.40912C18.3197 2.66918 15.9607 1.6904 13.5 1.6875ZM13.5 14.3438C12.8325 14.3438 12.18 14.1458 11.625 13.775C11.0699 13.4041 10.6374 12.877 10.3819 12.2603C10.1265 11.6436 10.0596 10.965 10.1899 10.3103C10.3201 9.65563 10.6415 9.05427 11.1135 8.58226C11.5855 8.11026 12.1869 7.78882 12.8416 7.6586C13.4963 7.52837 14.1749 7.59521 14.7916 7.85066C15.4083 8.1061 15.9354 8.53868 16.3062 9.0937C16.6771 9.64872 16.875 10.3012 16.875 10.9688C16.8739 11.8635 16.518 12.7213 15.8853 13.354C15.2526 13.9867 14.3948 14.3426 13.5 14.3438Z" fill="white"/>\n</svg>\n      <p class="info__geo">${t.name}</p>\n    </div>\n  </div>\n</div>\n<img\n  src="http://openweathermap.org/img/w/${t.weather[0].icon}.png"\n  alt="image of sun"\n  width="128"\n  class="weather-img"\n/><p class="weather__date-week">\n  ${n.dayOfWeek}\n</p>\n<p class="weather__date-date">\n  ${n.dateUser} ${n.dateMonth} ${n.dateYear}\n</p>\n<a class="weather__link" href="https://sinoptik.ua/" target="_blank">weather for week</a>`;e.innerHTML=i}dateFormatter(t){const e=new Date(t);return{dayOfWeek:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()],dateUser:e.getDate(),dateYear:e.getFullYear(),dateMonth:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Nov","Dec"][e.getMonth()]}}constructor(){this.options={baseURL:"https://api.openweathermap.org/data/2.5/weather",params:{lat:null,lon:null,appid:wn.WEATHER,units:"metric"}},this.IP_API_URL="https://ipapi.co/json/",this.userTime=null}};function Nm(t){const{latitude:e,longitude:n}=t.coords;_m.userTime=t.timestamp,_m.options.params.lat=e,_m.options.params.lon=n,_m.getWeather().then((t=>{_m.renderWeatherMarkup(t)})).catch((t=>console.log(t)))}async function Am(t){await _m.checkUserGeo().then((t=>{const{latitude:e,longitude:n}=t;_m.userTime=Date.now(),_m.options.params.lat=e,_m.options.params.lon=n})).catch((t=>console.log(t)));_m.getWeather().then((t=>{_m.renderWeatherMarkup(t)})).catch((t=>console.log(t)))}addEventListener("DOMContentLoaded",_m.checkNavPermissions);const Dm=document.querySelector(".show-more-btn"),Rm=document.querySelector(".categories-menu"),Lm=document.querySelector(".js-others-btn"),Om=document.querySelector(".categories"),Mm=document.querySelector(".news__list"),Pm=document.querySelector("body");Sn("allCategories").then((t=>{Cn(Rm,Tn(t.data.results,"categoriesFull")),Cn(Om,Tn(t.data.results,"categoriesForDesktop"),"afterbegin")})),Om.addEventListener("click",(function(t){(t.target.classList.contains("btn-menu")||t.target.classList.contains("btn-desktop"))&&Sn("category",{},t.target.textContent.toLowerCase()).then((e=>{Mm.innerHTML="",Cn(Mm,Tn(e.data.results,"categoryCards")),rf(),window.localStorage.setItem("lastFetchType",JSON.stringify({type:"category",value:t.target.textContent.toLowerCase()}))}))})),Om.addEventListener("click",(function(t){const e=document.querySelector(".active-underline"),n=document.querySelector(".is-active");"BUTTON"===t.target.nodeName&&(t.target.classList.contains("show-more-btn")?(t.target.classList.toggle("desktop-btn-active"),Rm.classList.toggle("visible")):t.target.classList.contains("btn-desktop")?(n?n.classList.remove("is-active"):e&&e.classList.remove("active-underline"),t.target.classList.add("is-active"),Rm.classList.remove("visible"),Dm.classList.remove("desktop-btn-active"),Lm.classList.remove("desktop-btn-active"),Sn("category",{limit:500},t.target.textContent.toLowerCase()).then((t=>{Zp(Math.ceil(t.data.results.length/10)),console.log(Math.ceil(t.data.results.length/10))})),Sn("category",{limit:10},t.target.textContent.toLowerCase()).then((e=>{console.log(e),Cn(Mm,Tn(e.data.results,"categoryCards")),tm(e.data.results),window.localStorage.setItem("lastFetchType",JSON.stringify({type:"category",value:t.target.textContent.toLowerCase()}))}))):(e?e.classList.remove("active-underline"):n&&n.classList.remove("is-active"),t.target.classList.add("active-underline"),Rm.classList.remove("visible"),Dm.classList.remove("desktop-btn-active"),Lm.classList.remove("desktop-btn-active"),Sn("category",{limit:500},t.target.textContent.toLowerCase()).then((t=>{Zp(Math.ceil(t.data.results.length/10)),console.log(Math.ceil(t.data.results.length/10))})),Sn("category",{limit:10},t.target.textContent.toLowerCase()).then((e=>{console.log(e),Cn(Mm,Tn(e.data.results,"categoryCards")),tm(e.data.results),window.localStorage.setItem("lastFetchType",JSON.stringify({type:"category",value:t.target.textContent.toLowerCase()}))}))))})),Pm.addEventListener("click",(t=>{"BUTTON"!==t.target.nodeName&&Rm.classList.contains("visible")&&(Rm.classList.remove("visible"),Dm.classList.remove("desktop-btn-active"),Lm.classList.remove("desktop-btn-active"))}));const Bm=document.querySelector(".label"),Fm=document.querySelector(".btn-search-mob");Fm.addEventListener("click",(t=>{Fm.classList.add("js-active"),Bm.classList.add("js-isactive")})),o("fKrXO");const Um=document.querySelector("#pagination"),jm=document.querySelector(".news__list");Um.addEventListener("click",(function(t){const e=JSON.parse(localStorage.getItem("lastFetchType"));if("input"===e.type){const t=document.querySelector(".current").textContent-1;Sn("articles",{q:e.value,page:t}).then((t=>{jm.innerHTML="",Cn(jm,Tn(t.data.response.docs,"inputsCards"))}))}else if("category"===e.type){const t=document.querySelector(".current").textContent;Sn("category",{limit:10,offset:10*t-10},e.value).then((t=>{jm.innerHTML="",Cn(jm,Tn(t.data.results,"categoryCards"))}))}else if("date"===e.type){const t=document.querySelector(".current").textContent-1;Sn("articles",{begin_date:e.value,end_date:e.value,page:t}).then((t=>{jm.innerHTML="",Cn(jm,Tn(t.data.response.docs,"dateCards"))}))}}));const zm={form:document.querySelector(".header-form"),input:document.querySelector(".header-input"),newsList:document.querySelector(".news__list")};zm.form.addEventListener("submit",(t=>{let e;if(t.preventDefault(),""===zm.input.value.trim())return;Sn("articles",{q:zm.input.value.trim()}).then((t=>{zm.newsList.innerHTML="",Cn(zm.newsList,Tn(t.data.response.docs,"inputsCards")),tm(t.data.response.docs),rf(),e=Math.ceil(t.data.response.meta.hits/10),e>99&&(e=99),window.localStorage.setItem("lastFetchType",JSON.stringify({type:"input",value:zm.input.value})),Zp(e),zm.input.value=""}))}));const Wm={newsList:document.querySelector(".news__list")};Sn("mostPopular").then((t=>{const e=Tn(t.data.results,"popularCards");return Cn(Wm.newsList,e),rf(),t.data.results})).then((t=>{localStorage.setItem("NewsFromHome",JSON.stringify(t)),_n.checkFetchedNewsByID(t)}));
//# sourceMappingURL=index.9c773924.js.map
