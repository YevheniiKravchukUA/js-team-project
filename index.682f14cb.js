var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var n={},i={},r=t.parcelRequired7c6;function s(t,e){return function(){return t.apply(e,arguments)}}null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){i[t]=e},t.parcelRequired7c6=r);const{toString:o}=Object.prototype,{getPrototypeOf:a}=Object,l=(c=Object.create(null),t=>{const e=o.call(t);return c[e]||(c[e]=e.slice(8,-1).toLowerCase())});var c;const u=t=>(t=t.toLowerCase(),e=>l(e)===t),h=t=>e=>typeof e===t,{isArray:d}=Array,f=h("undefined");const p=u("ArrayBuffer");const m=h("string"),g=h("function"),y=h("number"),b=t=>null!==t&&"object"==typeof t,v=t=>{if("object"!==l(t))return!1;const e=a(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},w=u("Date"),x=u("File"),k=u("Blob"),E=u("FileList"),I=u("URLSearchParams");function C(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let i,r;if("object"!=typeof t&&(t=[t]),d(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),s=r.length;let o;for(i=0;i<s;i++)o=r[i],e.call(null,t[o],o,t)}}function S(t,e){e=e.toLowerCase();const n=Object.keys(t);let i,r=n.length;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const T="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,_=t=>!f(t)&&t!==T;const N=(A="undefined"!=typeof Uint8Array&&a(Uint8Array),t=>A&&t instanceof A);var A;const D=u("HTMLFormElement"),R=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),L=u("RegExp"),O=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};C(n,((n,r)=>{!1!==e(n,r,t)&&(i[r]=n)})),Object.defineProperties(t,i)};var M={isArray:d,isArrayBuffer:p,isBuffer:function(t){return null!==t&&!f(t)&&null!==t.constructor&&!f(t.constructor)&&g(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{const e="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||o.call(t)===e||g(t.toString)&&t.toString()===e)},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&p(t.buffer),e},isString:m,isNumber:y,isBoolean:t=>!0===t||!1===t,isObject:b,isPlainObject:v,isUndefined:f,isDate:w,isFile:x,isBlob:k,isRegExp:L,isFunction:g,isStream:t=>b(t)&&g(t.pipe),isURLSearchParams:I,isTypedArray:N,isFileList:E,forEach:C,merge:function t(){const{caseless:e}=_(this)&&this||{},n={},i=(i,r)=>{const s=e&&S(n,r)||r;v(n[s])&&v(i)?n[s]=t(n[s],i):v(i)?n[s]=t({},i):d(i)?n[s]=i.slice():n[s]=i};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&C(arguments[t],i);return n},extend:(t,e,n,{allOwnKeys:i}={})=>(C(e,((e,i)=>{n&&g(e)?t[i]=s(e,n):t[i]=e}),{allOwnKeys:i}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,i)=>{let r,s,o;const l={};if(e=e||{},null==t)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],i&&!i(o,t,e)||l[o]||(e[o]=t[o],l[o]=!0);t=!1!==n&&a(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:l,kindOfTest:u,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return-1!==i&&i===n},toArray:t=>{if(!t)return null;if(d(t))return t;let e=t.length;if(!y(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=n.next())&&!i.done;){const n=i.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const i=[];for(;null!==(n=t.exec(e));)i.push(n);return i},isHTMLForm:D,hasOwnProperty:R,hasOwnProp:R,reduceDescriptors:O,freezeMethods:t=>{O(t,((e,n)=>{if(g(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=t[n];g(i)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},i=t=>{t.forEach((t=>{n[t]=!0}))};return d(t)?i(t):i(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:S,global:T,isContextDefined:_,toJSONObject:t=>{const e=new Array(10),n=(t,i)=>{if(b(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[i]=t;const r=d(t)?[]:{};return C(t,((t,e)=>{const s=n(t,i+1);!f(s)&&(r[e]=s)})),e[i]=void 0,r}}return t};return n(t,0)}};function P(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}M.inherits(P,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:M.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const B=P.prototype,F={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{F[t]={value:t}})),Object.defineProperties(P,F),Object.defineProperty(B,"isAxiosError",{value:!0}),P.from=(t,e,n,i,r,s)=>{const o=Object.create(B);return M.toFlatObject(t,o,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),P.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};var U,j,z,W=P,H=e("object"==typeof self?self.FormData:window.FormData);j=function(t){var e,n,i=Q(t),r=i[0],s=i[1],o=new K(function(t,e,n){return 3*(e+n)/4-n}(0,r,s)),a=0,l=s>0?r-4:r;for(n=0;n<l;n+=4)e=X[t.charCodeAt(n)]<<18|X[t.charCodeAt(n+1)]<<12|X[t.charCodeAt(n+2)]<<6|X[t.charCodeAt(n+3)],o[a++]=e>>16&255,o[a++]=e>>8&255,o[a++]=255&e;2===s&&(e=X[t.charCodeAt(n)]<<2|X[t.charCodeAt(n+1)]>>4,o[a++]=255&e);1===s&&(e=X[t.charCodeAt(n)]<<10|X[t.charCodeAt(n+1)]<<4|X[t.charCodeAt(n+2)]>>2,o[a++]=e>>8&255,o[a++]=255&e);return o},z=function(t){for(var e,n=t.length,i=n%3,r=[],s=16383,o=0,a=n-i;o<a;o+=s)r.push(Z(t,o,o+s>a?a:o+s));1===i?(e=t[n-1],r.push(q[e>>2]+q[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],r.push(q[e>>10]+q[e>>4&63]+q[e<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var V,$,q=[],X=[],K="undefined"!=typeof Uint8Array?Uint8Array:Array,J="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",G=0,Y=J.length;G<Y;++G)q[G]=J[G],X[J.charCodeAt(G)]=G;function Q(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function Z(t,e,n){for(var i,r,s=[],o=e;o<n;o+=3)i=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),s.push(q[(r=i)>>18&63]+q[r>>12&63]+q[r>>6&63]+q[63&r]);return s.join("")}X["-".charCodeAt(0)]=62,X["_".charCodeAt(0)]=63,V=function(t,e,n,i,r){var s,o,a=8*r-i-1,l=(1<<a)-1,c=l>>1,u=-7,h=n?r-1:0,d=n?-1:1,f=t[e+h];for(h+=d,s=f&(1<<-u)-1,f>>=-u,u+=a;u>0;s=256*s+t[e+h],h+=d,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=i;u>0;o=256*o+t[e+h],h+=d,u-=8);if(0===s)s=1-c;else{if(s===l)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,i),s-=c}return(f?-1:1)*o*Math.pow(2,s-i)},$=function(t,e,n,i,r,s){var o,a,l,c=8*s-r-1,u=(1<<c)-1,h=u>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:s-1,p=i?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=u):(o=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-o))<1&&(o--,l*=2),(e+=o+h>=1?d/l:d*Math.pow(2,1-h))*l>=2&&(o++,l/=2),o+h>=u?(a=0,o=u):o+h>=1?(a=(e*l-1)*Math.pow(2,r),o+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,r),o=0));r>=8;t[n+f]=255&a,f+=p,a/=256,r-=8);for(o=o<<r|a,c+=r;c>0;t[n+f]=255&o,f+=p,o/=256,c-=8);t[n+f-p]|=128*m};const tt="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;U=nt;function et(t){if(t>2147483647)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,nt.prototype),e}function nt(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return st(t)}return it(t,e,n)}function it(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!nt.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|ct(t,e);let i=et(n);const r=i.write(t,e);r!==n&&(i=i.slice(0,r));return i}(t,e);if(ArrayBuffer.isView(t))return function(t){if(Wt(t,Uint8Array)){const e=new Uint8Array(t);return at(e.buffer,e.byteOffset,e.byteLength)}return ot(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Wt(t,ArrayBuffer)||t&&Wt(t.buffer,ArrayBuffer))return at(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(Wt(t,SharedArrayBuffer)||t&&Wt(t.buffer,SharedArrayBuffer)))return at(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return nt.from(i,e,n);const r=function(t){if(nt.isBuffer(t)){const e=0|lt(t.length),n=et(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||Ht(t.length)?et(0):ot(t);if("Buffer"===t.type&&Array.isArray(t.data))return ot(t.data)}(t);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return nt.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function rt(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function st(t){return rt(t),et(t<0?0:0|lt(t))}function ot(t){const e=t.length<0?0:0|lt(t.length),n=et(e);for(let i=0;i<e;i+=1)n[i]=255&t[i];return n}function at(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(i,nt.prototype),i}function lt(t){if(t>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|t}function ct(t,e){if(nt.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Wt(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Ut(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return jt(t).length;default:if(r)return i?-1:Ut(t).length;e=(""+e).toLowerCase(),r=!0}}function ut(t,e,n){let i=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return Et(this,e,n);case"utf8":case"utf-8":return wt(this,e,n);case"ascii":return xt(this,e,n);case"latin1":case"binary":return kt(this,e,n);case"base64":return vt(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return It(this,e,n);default:if(i)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function ht(t,e,n){const i=t[e];t[e]=t[n],t[n]=i}function dt(t,e,n,i,r){if(0===t.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Ht(n=+n)&&(n=r?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(r)return-1;n=t.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof e&&(e=nt.from(e,i)),nt.isBuffer(e))return 0===e.length?-1:ft(t,e,n,i,r);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):ft(t,[e],n,i,r);throw new TypeError("val must be string, number or Buffer")}function ft(t,e,n,i,r){let s,o=1,a=t.length,l=e.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(t.length<2||e.length<2)return-1;o=2,a/=2,l/=2,n/=2}function c(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(r){let i=-1;for(s=n;s<a;s++)if(c(t,s)===c(e,-1===i?0:s-i)){if(-1===i&&(i=s),s-i+1===l)return i*o}else-1!==i&&(s-=s-i),i=-1}else for(n+l>a&&(n=a-l),s=n;s>=0;s--){let n=!0;for(let i=0;i<l;i++)if(c(t,s+i)!==c(e,i)){n=!1;break}if(n)return s}return-1}function pt(t,e,n,i){n=Number(n)||0;const r=t.length-n;i?(i=Number(i))>r&&(i=r):i=r;const s=e.length;let o;for(i>s/2&&(i=s/2),o=0;o<i;++o){const i=parseInt(e.substr(2*o,2),16);if(Ht(i))return o;t[n+o]=i}return o}function mt(t,e,n,i){return zt(Ut(e,t.length-n),t,n,i)}function gt(t,e,n,i){return zt(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,i)}function yt(t,e,n,i){return zt(jt(e),t,n,i)}function bt(t,e,n,i){return zt(function(t,e){let n,i,r;const s=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=t.charCodeAt(o),i=n>>8,r=n%256,s.push(r),s.push(i);return s}(e,t.length-n),t,n,i)}function vt(t,e,n){return 0===e&&n===t.length?z(t):z(t.slice(e,n))}function wt(t,e,n){n=Math.min(t.length,n);const i=[];let r=e;for(;r<n;){const e=t[r];let s=null,o=e>239?4:e>223?3:e>191?2:1;if(r+o<=n){let n,i,a,l;switch(o){case 1:e<128&&(s=e);break;case 2:n=t[r+1],128==(192&n)&&(l=(31&e)<<6|63&n,l>127&&(s=l));break;case 3:n=t[r+1],i=t[r+2],128==(192&n)&&128==(192&i)&&(l=(15&e)<<12|(63&n)<<6|63&i,l>2047&&(l<55296||l>57343)&&(s=l));break;case 4:n=t[r+1],i=t[r+2],a=t[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(l=(15&e)<<18|(63&n)<<12|(63&i)<<6|63&a,l>65535&&l<1114112&&(s=l))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),r+=o}return function(t){const e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);let n="",i=0;for(;i<e;)n+=String.fromCharCode.apply(String,t.slice(i,i+=4096));return n}(i)}nt.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),nt.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(nt.prototype,"parent",{enumerable:!0,get:function(){if(nt.isBuffer(this))return this.buffer}}),Object.defineProperty(nt.prototype,"offset",{enumerable:!0,get:function(){if(nt.isBuffer(this))return this.byteOffset}}),nt.poolSize=8192,nt.from=function(t,e,n){return it(t,e,n)},Object.setPrototypeOf(nt.prototype,Uint8Array.prototype),Object.setPrototypeOf(nt,Uint8Array),nt.alloc=function(t,e,n){return function(t,e,n){return rt(t),t<=0?et(t):void 0!==e?"string"==typeof n?et(t).fill(e,n):et(t).fill(e):et(t)}(t,e,n)},nt.allocUnsafe=function(t){return st(t)},nt.allocUnsafeSlow=function(t){return st(t)},nt.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==nt.prototype},nt.compare=function(t,e){if(Wt(t,Uint8Array)&&(t=nt.from(t,t.offset,t.byteLength)),Wt(e,Uint8Array)&&(e=nt.from(e,e.offset,e.byteLength)),!nt.isBuffer(t)||!nt.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,i=e.length;for(let r=0,s=Math.min(n,i);r<s;++r)if(t[r]!==e[r]){n=t[r],i=e[r];break}return n<i?-1:i<n?1:0},nt.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},nt.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return nt.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const i=nt.allocUnsafe(e);let r=0;for(n=0;n<t.length;++n){let e=t[n];if(Wt(e,Uint8Array))r+e.length>i.length?(nt.isBuffer(e)||(e=nt.from(e)),e.copy(i,r)):Uint8Array.prototype.set.call(i,e,r);else{if(!nt.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(i,r)}r+=e.length}return i},nt.byteLength=ct,nt.prototype._isBuffer=!0,nt.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)ht(this,e,e+1);return this},nt.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)ht(this,e,e+3),ht(this,e+1,e+2);return this},nt.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)ht(this,e,e+7),ht(this,e+1,e+6),ht(this,e+2,e+5),ht(this,e+3,e+4);return this},nt.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?wt(this,0,t):ut.apply(this,arguments)},nt.prototype.toLocaleString=nt.prototype.toString,nt.prototype.equals=function(t){if(!nt.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===nt.compare(this,t)},nt.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},tt&&(nt.prototype[tt]=nt.prototype.inspect),nt.prototype.compare=function(t,e,n,i,r){if(Wt(t,Uint8Array)&&(t=nt.from(t,t.offset,t.byteLength)),!nt.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),e<0||n>t.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&e>=n)return 0;if(i>=r)return-1;if(e>=n)return 1;if(this===t)return 0;let s=(r>>>=0)-(i>>>=0),o=(n>>>=0)-(e>>>=0);const a=Math.min(s,o),l=this.slice(i,r),c=t.slice(e,n);for(let t=0;t<a;++t)if(l[t]!==c[t]){s=l[t],o=c[t];break}return s<o?-1:o<s?1:0},nt.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},nt.prototype.indexOf=function(t,e,n){return dt(this,t,e,n,!0)},nt.prototype.lastIndexOf=function(t,e,n){return dt(this,t,e,n,!1)},nt.prototype.write=function(t,e,n,i){if(void 0===e)i="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)i=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-e;if((void 0===n||n>r)&&(n=r),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let s=!1;for(;;)switch(i){case"hex":return pt(this,t,e,n);case"utf8":case"utf-8":return mt(this,t,e,n);case"ascii":case"latin1":case"binary":return gt(this,t,e,n);case"base64":return yt(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return bt(this,t,e,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},nt.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function xt(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(127&t[r]);return i}function kt(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(t[r]);return i}function Et(t,e,n){const i=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=e;i<n;++i)r+=Vt[t[i]];return r}function It(t,e,n){const i=t.slice(e,n);let r="";for(let t=0;t<i.length-1;t+=2)r+=String.fromCharCode(i[t]+256*i[t+1]);return r}function Ct(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function St(t,e,n,i,r,s){if(!nt.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<s)throw new RangeError('"value" argument is out of bounds');if(n+i>t.length)throw new RangeError("Index out of range")}function Tt(t,e,n,i,r){Mt(e,i,r,t,n,7);let s=Number(e&BigInt(4294967295));t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,n}function _t(t,e,n,i,r){Mt(e,i,r,t,n,7);let s=Number(e&BigInt(4294967295));t[n+7]=s,s>>=8,t[n+6]=s,s>>=8,t[n+5]=s,s>>=8,t[n+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=o,o>>=8,t[n+2]=o,o>>=8,t[n+1]=o,o>>=8,t[n]=o,n+8}function Nt(t,e,n,i,r,s){if(n+i>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function At(t,e,n,i,r){return e=+e,n>>>=0,r||Nt(t,0,n,4),$(t,e,n,i,23,4),n+4}function Dt(t,e,n,i,r){return e=+e,n>>>=0,r||Nt(t,0,n,8),$(t,e,n,i,52,8),n+8}nt.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const i=this.subarray(t,e);return Object.setPrototypeOf(i,nt.prototype),i},nt.prototype.readUintLE=nt.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||Ct(t,e,this.length);let i=this[t],r=1,s=0;for(;++s<e&&(r*=256);)i+=this[t+s]*r;return i},nt.prototype.readUintBE=nt.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||Ct(t,e,this.length);let i=this[t+--e],r=1;for(;e>0&&(r*=256);)i+=this[t+--e]*r;return i},nt.prototype.readUint8=nt.prototype.readUInt8=function(t,e){return t>>>=0,e||Ct(t,1,this.length),this[t]},nt.prototype.readUint16LE=nt.prototype.readUInt16LE=function(t,e){return t>>>=0,e||Ct(t,2,this.length),this[t]|this[t+1]<<8},nt.prototype.readUint16BE=nt.prototype.readUInt16BE=function(t,e){return t>>>=0,e||Ct(t,2,this.length),this[t]<<8|this[t+1]},nt.prototype.readUint32LE=nt.prototype.readUInt32LE=function(t,e){return t>>>=0,e||Ct(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},nt.prototype.readUint32BE=nt.prototype.readUInt32BE=function(t,e){return t>>>=0,e||Ct(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},nt.prototype.readBigUInt64LE=$t((function(t){Pt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Bt(t,this.length-8);const i=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,r=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),nt.prototype.readBigUInt64BE=$t((function(t){Pt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Bt(t,this.length-8);const i=e*2**24+65536*this[++t]+256*this[++t]+this[++t],r=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),nt.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||Ct(t,e,this.length);let i=this[t],r=1,s=0;for(;++s<e&&(r*=256);)i+=this[t+s]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*e)),i},nt.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||Ct(t,e,this.length);let i=e,r=1,s=this[t+--i];for(;i>0&&(r*=256);)s+=this[t+--i]*r;return r*=128,s>=r&&(s-=Math.pow(2,8*e)),s},nt.prototype.readInt8=function(t,e){return t>>>=0,e||Ct(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},nt.prototype.readInt16LE=function(t,e){t>>>=0,e||Ct(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},nt.prototype.readInt16BE=function(t,e){t>>>=0,e||Ct(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},nt.prototype.readInt32LE=function(t,e){return t>>>=0,e||Ct(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},nt.prototype.readInt32BE=function(t,e){return t>>>=0,e||Ct(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},nt.prototype.readBigInt64LE=$t((function(t){Pt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Bt(t,this.length-8);const i=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),nt.prototype.readBigInt64BE=$t((function(t){Pt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Bt(t,this.length-8);const i=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(i)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),nt.prototype.readFloatLE=function(t,e){return t>>>=0,e||Ct(t,4,this.length),V(this,t,!0,23,4)},nt.prototype.readFloatBE=function(t,e){return t>>>=0,e||Ct(t,4,this.length),V(this,t,!1,23,4)},nt.prototype.readDoubleLE=function(t,e){return t>>>=0,e||Ct(t,8,this.length),V(this,t,!0,52,8)},nt.prototype.readDoubleBE=function(t,e){return t>>>=0,e||Ct(t,8,this.length),V(this,t,!1,52,8)},nt.prototype.writeUintLE=nt.prototype.writeUIntLE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){St(this,t,e,n,Math.pow(2,8*n)-1,0)}let r=1,s=0;for(this[e]=255&t;++s<n&&(r*=256);)this[e+s]=t/r&255;return e+n},nt.prototype.writeUintBE=nt.prototype.writeUIntBE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){St(this,t,e,n,Math.pow(2,8*n)-1,0)}let r=n-1,s=1;for(this[e+r]=255&t;--r>=0&&(s*=256);)this[e+r]=t/s&255;return e+n},nt.prototype.writeUint8=nt.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||St(this,t,e,1,255,0),this[e]=255&t,e+1},nt.prototype.writeUint16LE=nt.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||St(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},nt.prototype.writeUint16BE=nt.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||St(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},nt.prototype.writeUint32LE=nt.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||St(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},nt.prototype.writeUint32BE=nt.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||St(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},nt.prototype.writeBigUInt64LE=$t((function(t,e=0){return Tt(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),nt.prototype.writeBigUInt64BE=$t((function(t,e=0){return _t(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),nt.prototype.writeIntLE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);St(this,t,e,n,i-1,-i)}let r=0,s=1,o=0;for(this[e]=255&t;++r<n&&(s*=256);)t<0&&0===o&&0!==this[e+r-1]&&(o=1),this[e+r]=(t/s>>0)-o&255;return e+n},nt.prototype.writeIntBE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);St(this,t,e,n,i-1,-i)}let r=n-1,s=1,o=0;for(this[e+r]=255&t;--r>=0&&(s*=256);)t<0&&0===o&&0!==this[e+r+1]&&(o=1),this[e+r]=(t/s>>0)-o&255;return e+n},nt.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||St(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},nt.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||St(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},nt.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||St(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},nt.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||St(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},nt.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||St(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},nt.prototype.writeBigInt64LE=$t((function(t,e=0){return Tt(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),nt.prototype.writeBigInt64BE=$t((function(t,e=0){return _t(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),nt.prototype.writeFloatLE=function(t,e,n){return At(this,t,e,!0,n)},nt.prototype.writeFloatBE=function(t,e,n){return At(this,t,e,!1,n)},nt.prototype.writeDoubleLE=function(t,e,n){return Dt(this,t,e,!0,n)},nt.prototype.writeDoubleBE=function(t,e,n){return Dt(this,t,e,!1,n)},nt.prototype.copy=function(t,e,n,i){if(!nt.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n);const r=i-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,i):Uint8Array.prototype.set.call(t,this.subarray(n,i),e),r},nt.prototype.fill=function(t,e,n,i){if("string"==typeof t){if("string"==typeof e?(i=e,e=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!nt.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===t.length){const e=t.charCodeAt(0);("utf8"===i&&e<128||"latin1"===i)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let r;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(r=e;r<n;++r)this[r]=t;else{const s=nt.isBuffer(t)?t:nt.from(t,i),o=s.length;if(0===o)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(r=0;r<n-e;++r)this[r+e]=s[r%o]}return this};const Rt={};function Lt(t,e,n){Rt[t]=class extends n{get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}}}function Ot(t){let e="",n=t.length;const i="-"===t[0]?1:0;for(;n>=i+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function Mt(t,e,n,i,r,s){if(t>n||t<e){const i="bigint"==typeof e?"n":"";let r;throw r=s>3?0===e||e===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(s+1)}${i}`:`>= -(2${i} ** ${8*(s+1)-1}${i}) and < 2 ** ${8*(s+1)-1}${i}`:`>= ${e}${i} and <= ${n}${i}`,new Rt.ERR_OUT_OF_RANGE("value",r,t)}!function(t,e,n){Pt(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||Bt(e,t.length-(n+1))}(i,r,s)}function Pt(t,e){if("number"!=typeof t)throw new Rt.ERR_INVALID_ARG_TYPE(e,"number",t)}function Bt(t,e,n){if(Math.floor(t)!==t)throw Pt(t,n),new Rt.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new Rt.ERR_BUFFER_OUT_OF_BOUNDS;throw new Rt.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}Lt("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),Lt("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),Lt("ERR_OUT_OF_RANGE",(function(t,e,n){let i=`The value of "${t}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=Ot(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=Ot(r)),r+="n"),i+=` It must be ${e}. Received ${r}`,i}),RangeError);const Ft=/[^+/0-9A-Za-z-_]/g;function Ut(t,e){let n;e=e||1/0;const i=t.length;let r=null;const s=[];for(let o=0;o<i;++o){if(n=t.charCodeAt(o),n>55295&&n<57344){if(!r){if(n>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===i){(e-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(e-=3)>-1&&s.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(e-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((e-=1)<0)break;s.push(n)}else if(n<2048){if((e-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function jt(t){return j(function(t){if((t=(t=t.split("=")[0]).trim().replace(Ft,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function zt(t,e,n,i){let r;for(r=0;r<i&&!(r+n>=e.length||r>=t.length);++r)e[r+n]=t[r];return r}function Wt(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Ht(t){return t!=t}const Vt=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)e[i+r]=t[n]+t[r]}return e}();function $t(t){return"undefined"==typeof BigInt?qt:t}function qt(){throw new Error("BigInt not supported")}var Xt=U;function Kt(t){return M.isPlainObject(t)||M.isArray(t)}function Jt(t){return M.endsWith(t,"[]")?t.slice(0,-2):t}function Gt(t,e,n){return t?t.concat(e).map((function(t,e){return t=Jt(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const Yt=M.toFlatObject(M,{},null,(function(t){return/^is[A-Z]/.test(t)}));var Qt=function(t,e,n){if(!M.isObject(t))throw new TypeError("target must be an object");e=e||new(H||FormData);const i=(n=M.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!M.isUndefined(e[t])}))).metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((l=e)&&M.isFunction(l.append)&&"FormData"===l[Symbol.toStringTag]&&l[Symbol.iterator]);var l;if(!M.isFunction(r))throw new TypeError("visitor must be a function");function c(t){if(null===t)return"";if(M.isDate(t))return t.toISOString();if(!a&&M.isBlob(t))throw new W("Blob is not supported. Use a Buffer instead.");return M.isArrayBuffer(t)||M.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):Xt.from(t):t}function u(t,n,r){let a=t;if(t&&!r&&"object"==typeof t)if(M.endsWith(n,"{}"))n=i?n:n.slice(0,-2),t=JSON.stringify(t);else if(M.isArray(t)&&function(t){return M.isArray(t)&&!t.some(Kt)}(t)||M.isFileList(t)||M.endsWith(n,"[]")&&(a=M.toArray(t)))return n=Jt(n),a.forEach((function(t,i){!M.isUndefined(t)&&null!==t&&e.append(!0===o?Gt([n],i,s):null===o?n:n+"[]",c(t))})),!1;return!!Kt(t)||(e.append(Gt(r,n,s),c(t)),!1)}const h=[],d=Object.assign(Yt,{defaultVisitor:u,convertValue:c,isVisitable:Kt});if(!M.isObject(t))throw new TypeError("data must be an object");return function t(n,i){if(!M.isUndefined(n)){if(-1!==h.indexOf(n))throw Error("Circular reference detected in "+i.join("."));h.push(n),M.forEach(n,(function(n,s){!0===(!(M.isUndefined(n)||null===n)&&r.call(e,n,M.isString(s)?s.trim():s,i,d))&&t(n,i?i.concat(s):[s])})),h.pop()}}(t),e};function Zt(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function te(t,e){this._pairs=[],t&&Qt(t,this,e)}const ee=te.prototype;ee.append=function(t,e){this._pairs.push([t,e])},ee.toString=function(t){const e=t?function(e){return t.call(this,e,Zt)}:Zt;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var ne=te;function ie(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function re(t,e,n){if(!e)return t;const i=n&&n.encode||ie,r=n&&n.serialize;let s;if(s=r?r(e,n):M.isURLSearchParams(e)?e.toString():new ne(e,n).toString(i),s){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}var se=class{use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){M.forEach(this.handlers,(function(e){null!==e&&t(e)}))}constructor(){this.handlers=[]}},oe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ae="undefined"!=typeof URLSearchParams?URLSearchParams:ne,le=FormData;const ce=(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),ue="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var he={isBrowser:!0,classes:{URLSearchParams:ae,FormData:le,Blob:Blob},isStandardBrowserEnv:ce,isStandardBrowserWebWorkerEnv:ue,protocols:["http","https","file","blob","url","data"]};function de(t,e){return Qt(t,new he.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,i){return he.isNode&&M.isBuffer(t)?(this.append(e,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}var fe=function(t){function e(t,n,i,r){let s=t[r++];const o=Number.isFinite(+s),a=r>=t.length;if(s=!s&&M.isArray(i)?i.length:s,a)return M.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!o;i[s]&&M.isObject(i[s])||(i[s]=[]);return e(t,n,i[s],r)&&M.isArray(i[s])&&(i[s]=function(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}(i[s])),!o}if(M.isFormData(t)&&M.isFunction(t.entries)){const n={};return M.forEachEntry(t,((t,i)=>{e(function(t){return M.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),i,n,0)})),n}return null};const pe={"Content-Type":void 0};const me={transitional:oe,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",i=n.indexOf("application/json")>-1,r=M.isObject(t);r&&M.isHTMLForm(t)&&(t=new FormData(t));if(M.isFormData(t))return i&&i?JSON.stringify(fe(t)):t;if(M.isArrayBuffer(t)||M.isBuffer(t)||M.isStream(t)||M.isFile(t)||M.isBlob(t))return t;if(M.isArrayBufferView(t))return t.buffer;if(M.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return de(t,this.formSerializer).toString();if((s=M.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return Qt(s?{"files[]":t}:t,e&&new e,this.formSerializer)}}return r||i?(e.setContentType("application/json",!1),function(t,e,n){if(M.isString(t))try{return(e||JSON.parse)(t),M.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||me.transitional,n=e&&e.forcedJSONParsing,i="json"===this.responseType;if(t&&M.isString(t)&&(n&&!this.responseType||i)){const n=!(e&&e.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw W.from(t,W.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:he.classes.FormData,Blob:he.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};M.forEach(["delete","get","head"],(function(t){me.headers[t]={}})),M.forEach(["post","put","patch"],(function(t){me.headers[t]=M.merge(pe)}));var ge=me;const ye=M.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var be=t=>{const e={};let n,i,r;return t&&t.split("\n").forEach((function(t){r=t.indexOf(":"),n=t.substring(0,r).trim().toLowerCase(),i=t.substring(r+1).trim(),!n||e[n]&&ye[n]||("set-cookie"===n?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)})),e};const ve=Symbol("internals");function we(t){return t&&String(t).trim().toLowerCase()}function xe(t){return!1===t||null==t?t:M.isArray(t)?t.map(xe):String(t)}function ke(t,e,n,i){return M.isFunction(i)?i.call(this,e,n):M.isString(e)?M.isString(i)?-1!==e.indexOf(i):M.isRegExp(i)?i.test(e):void 0:void 0}let Ee=Symbol.iterator,Ie=Symbol.toStringTag;class Ce{set(t,e,n){const i=this;function r(t,e,n){const r=we(e);if(!r)throw new Error("header name must be a non-empty string");const s=M.findKey(i,r);(!s||void 0===i[s]||!0===n||void 0===n&&!1!==i[s])&&(i[s||e]=xe(t))}const s=(t,e)=>M.forEach(t,((t,n)=>r(t,n,e)));return M.isPlainObject(t)||t instanceof this.constructor?s(t,e):M.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z]+$/.test(t.trim())?s(be(t),e):null!=t&&r(e,t,n),this}get(t,e){if(t=we(t)){const n=M.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}(t);if(M.isFunction(e))return e.call(this,t,n);if(M.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=we(t)){const n=M.findKey(this,t);return!(!n||e&&!ke(0,this[n],n,e))}return!1}delete(t,e){const n=this;let i=!1;function r(t){if(t=we(t)){const r=M.findKey(n,t);!r||e&&!ke(0,n[r],r,e)||(delete n[r],i=!0)}}return M.isArray(t)?t.forEach(r):r(t),i}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const e=this,n={};return M.forEach(this,((i,r)=>{const s=M.findKey(n,r);if(s)return e[s]=xe(i),void delete e[r];const o=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(r):String(r).trim();o!==r&&delete e[r],e[o]=xe(i),n[o]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return M.forEach(this,((n,i)=>{null!=n&&!1!==n&&(e[i]=t&&M.isArray(n)?n.join(", "):n)})),e}[Ee](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Ie](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=(this[ve]=this[ve]={accessors:{}}).accessors,n=this.prototype;function i(t){const i=we(t);e[i]||(!function(t,e){const n=M.toCamelCase(" "+e);["get","set","has"].forEach((i=>{Object.defineProperty(t,i+n,{value:function(t,n,r){return this[i].call(this,e,t,n,r)},configurable:!0})}))}(n,t),e[i]=!0)}return M.isArray(t)?t.forEach(i):i(t),this}constructor(t){t&&this.set(t)}}Ce.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),M.freezeMethods(Ce.prototype),M.freezeMethods(Ce);var Se=Ce;function Te(t,e){const n=this||ge,i=e||n,r=Se.from(i.headers);let s=i.data;return M.forEach(t,(function(t){s=t.call(n,s,r.normalize(),e?e.status:void 0)})),r.normalize(),s}function _e(t){return!(!t||!t.__CANCEL__)}function Ne(t,e,n){W.call(this,null==t?"canceled":t,W.ERR_CANCELED,e,n),this.name="CanceledError"}M.inherits(Ne,W,{__CANCEL__:!0});var Ae=Ne;function De(t,e,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(new W("Request failed with status code "+n.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}var Re=he.isStandardBrowserEnv?{write:function(t,e,n,i,r,s){const o=[];o.push(t+"="+encodeURIComponent(e)),M.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),M.isString(i)&&o.push("path="+i),M.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Le(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Oe(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?Le(t,e):e}var Me=he.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function i(n){let i=n;return t&&(e.setAttribute("href",i),i=e.href),e.setAttribute("href",i),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=i(window.location.href),function(t){const e=M.isString(t)?i(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0};function Pe(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}var Be=function(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r,s=0,o=0;return e=void 0!==e?e:1e3,function(a){const l=Date.now(),c=i[o];r||(r=l),n[s]=a,i[s]=l;let u=o,h=0;for(;u!==s;)h+=n[u++],u%=t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),l-r<e)return;const d=c&&l-c;return d?Math.round(1e3*h/d):void 0}};function Fe(t,e){let n=0;const i=Be(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,l=i(a);n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&s<=o?(o-s)/l:void 0,event:r};c[e?"download":"upload"]=!0,t(c)}}const Ue={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,n){let i=t.data;const r=Se.from(t.headers).normalize(),s=t.responseType;let o;function a(){t.cancelToken&&t.cancelToken.unsubscribe(o),t.signal&&t.signal.removeEventListener("abort",o)}M.isFormData(i)&&(he.isStandardBrowserEnv||he.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let l=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";r.set("Authorization","Basic "+btoa(e+":"+n))}const c=Oe(t.baseURL,t.url);function u(){if(!l)return;const i=Se.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());De((function(t){e(t),a()}),(function(t){n(t),a()}),{data:s&&"text"!==s&&"json"!==s?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:i,config:t,request:l}),l=null}if(l.open(t.method.toUpperCase(),re(c,t.params,t.paramsSerializer),!0),l.timeout=t.timeout,"onloadend"in l?l.onloadend=u:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(u)},l.onabort=function(){l&&(n(new W("Request aborted",W.ECONNABORTED,t,l)),l=null)},l.onerror=function(){n(new W("Network Error",W.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const i=t.transitional||oe;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new W(e,i.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,t,l)),l=null},he.isStandardBrowserEnv){const e=(t.withCredentials||Me(c))&&t.xsrfCookieName&&Re.read(t.xsrfCookieName);e&&r.set(t.xsrfHeaderName,e)}void 0===i&&r.setContentType(null),"setRequestHeader"in l&&M.forEach(r.toJSON(),(function(t,e){l.setRequestHeader(e,t)})),M.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),s&&"json"!==s&&(l.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&l.addEventListener("progress",Fe(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",Fe(t.onUploadProgress)),(t.cancelToken||t.signal)&&(o=e=>{l&&(n(!e||e.type?new Ae(null,t,l):e),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(o),t.signal&&(t.signal.aborted?o():t.signal.addEventListener("abort",o)));const h=Pe(c);h&&-1===he.protocols.indexOf(h)?n(new W("Unsupported protocol "+h+":",W.ERR_BAD_REQUEST,t)):l.send(i||null)}))}};M.forEach(Ue,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));var je={getAdapter:t=>{t=M.isArray(t)?t:[t];const{length:e}=t;let n,i;for(let r=0;r<e&&(n=t[r],!(i=M.isString(n)?Ue[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new W(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(M.hasOwnProp(Ue,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!M.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:Ue};function ze(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ae(null,t)}function We(t){ze(t),t.headers=Se.from(t.headers),t.data=Te.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return je.getAdapter(t.adapter||ge.adapter)(t).then((function(e){return ze(t),e.data=Te.call(t,t.transformResponse,e),e.headers=Se.from(e.headers),e}),(function(e){return _e(e)||(ze(t),e&&e.response&&(e.response.data=Te.call(t,t.transformResponse,e.response),e.response.headers=Se.from(e.response.headers))),Promise.reject(e)}))}const He=t=>t instanceof Se?t.toJSON():t;function Ve(t,e){e=e||{};const n={};function i(t,e,n){return M.isPlainObject(t)&&M.isPlainObject(e)?M.merge.call({caseless:n},t,e):M.isPlainObject(e)?M.merge({},e):M.isArray(e)?e.slice():e}function r(t,e,n){return M.isUndefined(e)?M.isUndefined(t)?void 0:i(void 0,t,n):i(t,e,n)}function s(t,e){if(!M.isUndefined(e))return i(void 0,e)}function o(t,e){return M.isUndefined(e)?M.isUndefined(t)?void 0:i(void 0,t):i(void 0,e)}function a(n,r,s){return s in e?i(n,r):s in t?i(void 0,n):void 0}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(t,e)=>r(He(t),He(e),!0)};return M.forEach(Object.keys(t).concat(Object.keys(e)),(function(i){const s=l[i]||r,o=s(t[i],e[i],i);M.isUndefined(o)&&s!==a||(n[i]=o)})),n}const $e={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{$e[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const qe={};$e.transitional=function(t,e,n){function i(t,e){return"[Axios v1.2.4] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,r,s)=>{if(!1===t)throw new W(i(r," has been removed"+(e?" in "+e:"")),W.ERR_DEPRECATED);return e&&!qe[r]&&(qe[r]=!0,console.warn(i(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,s)}};var Xe={assertOptions:function(t,e,n){if("object"!=typeof t)throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const e=t[s],n=void 0===e||o(e,s,t);if(!0!==n)throw new W("option "+s+" must be "+n,W.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new W("Unknown option "+s,W.ERR_BAD_OPTION)}},validators:$e};const Ke=Xe.validators;class Je{request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=Ve(this.defaults,e);const{transitional:n,paramsSerializer:i,headers:r}=e;let s;void 0!==n&&Xe.assertOptions(n,{silentJSONParsing:Ke.transitional(Ke.boolean),forcedJSONParsing:Ke.transitional(Ke.boolean),clarifyTimeoutError:Ke.transitional(Ke.boolean)},!1),void 0!==i&&Xe.assertOptions(i,{encode:Ke.function,serialize:Ke.function},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase(),s=r&&M.merge(r.common,r[e.method]),s&&M.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete r[t]})),e.headers=Se.concat(s,r);const o=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,o.unshift(t.fulfilled,t.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(t){l.push(t.fulfilled,t.rejected)}));let u,h=0;if(!a){const t=[We.bind(this),void 0];for(t.unshift.apply(t,o),t.push.apply(t,l),u=t.length,c=Promise.resolve(e);h<u;)c=c.then(t[h++],t[h++]);return c}u=o.length;let d=e;for(h=0;h<u;){const t=o[h++],e=o[h++];try{d=t(d)}catch(t){e.call(this,t);break}}try{c=We.call(this,d)}catch(t){return Promise.reject(t)}for(h=0,u=l.length;h<u;)c=c.then(l[h++],l[h++]);return c}getUri(t){return re(Oe((t=Ve(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}constructor(t){this.defaults=t,this.interceptors={request:new se,response:new se}}}M.forEach(["delete","get","head","options"],(function(t){Je.prototype[t]=function(e,n){return this.request(Ve(n||{},{method:t,url:e,data:(n||{}).data}))}})),M.forEach(["post","put","patch"],(function(t){function e(e){return function(n,i,r){return this.request(Ve(r||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}Je.prototype[t]=e(),Je.prototype[t+"Form"]=e(!0)}));var Ge=Je;class Ye{throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new Ye((function(e){t=e})),cancel:t}}constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const i=new Promise((t=>{n.subscribe(t),e=t})).then(t);return i.cancel=function(){n.unsubscribe(e)},i},t((function(t,i,r){n.reason||(n.reason=new Ae(t,i,r),e(n.reason))}))}}var Qe=Ye;const Ze={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ze).forEach((([t,e])=>{Ze[e]=t}));var tn=Ze;const en=function t(e){const n=new Ge(e),i=s(Ge.prototype.request,n);return M.extend(i,Ge.prototype,n,{allOwnKeys:!0}),M.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return t(Ve(e,n))},i}(ge);en.Axios=Ge,en.CanceledError=Ae,en.CancelToken=Qe,en.isCancel=_e,en.VERSION="1.2.4",en.toFormData=Qt,en.AxiosError=W,en.Cancel=en.CanceledError,en.all=function(t){return Promise.all(t)},en.spread=function(t){return function(e){return t.apply(null,e)}},en.isAxiosError=function(t){return M.isObject(t)&&!0===t.isAxiosError},en.mergeConfig=Ve,en.AxiosHeaders=Se,en.formToJSON=t=>fe(M.isHTMLForm(t)?new FormData(t):t),en.HttpStatusCode=tn,en.default=en;var nn=en;const{Axios:rn,AxiosError:sn,CanceledError:on,isCancel:an,CancelToken:ln,VERSION:cn,all:un,Cancel:hn,isAxiosError:dn,spread:fn,toFormData:pn,AxiosHeaders:mn,HttpStatusCode:gn,formToJSON:yn,mergeConfig:bn}=nn,vn={WEATHER:"f3ada08f24524eaebe0dab7657f9578c",NEWS:"zqSBDCWWfsUqmPN3a0NlmObTljUQwqkT"},wn=(nn.create({baseURL:"https://api.openweathermap.org/data/2.5/weather",params:{appid:vn.WEATHER,units:"metric"}}),nn.create({baseURL:"https://api.nytimes.com/svc/",params:{"api-key":vn.NEWS}}));var xn,kn,En={};async function In(t,e,n){const i={mostPopular:"mostpopular/v2/emailed/7.json",articles:"search/v2/articlesearch.json",allCategories:"news/v3/content/section-list.json",category:`news/v3/content/all/${n}.json`};try{return await wn.get(i[t],{params:e})}catch(t){En.Notify.failure(t)}}function Cn(t,e){const n={popularCards:"",dateCards:"",categoryCards:"",inputsCards:"",categoriesForDesktop:"",categoriesFull:"",weather:"",pagination:""},i="https://www.nytimes.com/";let r,s=[];if("popularCards"===e&&(s=t.flatMap((t=>(r=0!==t.media.length?t.media[0]["media-metadata"][2].url:"https://t4.ftcdn.net/jpg/00/38/13/73/240_F_38137330_gUbR3ZXBc5J5g4pRkaC8TYZQA62OZhx5.jpg",`\n\n      <li class="news__item" data-id="${t.id}">\n        <div class="news__image-box">\n          <img class="news__image" src="${r}" alt="" />\n            <div class="div">\n              <button class="news__favorite-btn " data-value="4" type="button">Add to favorite</button>\n              <svg class="favorite-btn__icon-add" width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">\n                <path d="M4.66659 1C2.82592 1 1.33325 2.47733 1.33325 4.3C1.33325 5.77133 1.91659 9.26333 7.65858 12.7933C7.76144 12.8559 7.87952 12.889 7.99992 12.889C8.12032 12.889 8.2384 12.8559 8.34125 12.7933C14.0833 9.26333 14.6666 5.77133 14.6666 4.3C14.6666 2.47733 13.1739 1 11.3333 1C9.49258 1 7.99992 3 7.99992 3C7.99992 3 6.50725 1 4.66659 1Z" stroke="#4440F7" stroke-linecap="round" stroke-linejoin="round"/>\n              </svg>\n            </div>\n            <h3 class="news__image-heading">${t.section}</h3>\n        </div>\n        <h2 class="news__title">${t.title}</h2>\n        <p class="news__text">${t.abstract}</p>\n        <div class="news__lower-box">\n          <p class="news__date">${t.published_date}</p>\n          <a class="news__readmore-link" target="_blank"\n          rel="noopener noreferrer" href="${t.url}">Read more</a>\n        </div>\n      </li>\n      `)))),"dateCards"===e){let e,n;s=t.flatMap((t=>(r=0!==t.multimedia.length?i+t.multimedia[0].url:"https://t4.ftcdn.net/jpg/00/38/13/73/240_F_38137330_gUbR3ZXBc5J5g4pRkaC8TYZQA62OZhx5.jpg",e=new Date(t.pub_date),n=e.toISOString().split("T")[0],`\n      <li class="news__item" data-id="${t._id}">\n        <div class="news__image-box">\n          <img class="news__image" src="${r}" alt="" />\n            <div class="div">\n              <button class="news__favorite-btn " data-value="4" type="button">Add to favorite</button>\n              <svg class="favorite-btn__icon-add" width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">\n                <path d="M4.66659 1C2.82592 1 1.33325 2.47733 1.33325 4.3C1.33325 5.77133 1.91659 9.26333 7.65858 12.7933C7.76144 12.8559 7.87952 12.889 7.99992 12.889C8.12032 12.889 8.2384 12.8559 8.34125 12.7933C14.0833 9.26333 14.6666 5.77133 14.6666 4.3C14.6666 2.47733 13.1739 1 11.3333 1C9.49258 1 7.99992 3 7.99992 3C7.99992 3 6.50725 1 4.66659 1Z" stroke="#4440F7" stroke-linecap="round" stroke-linejoin="round"/>\n              </svg>\n            </div>\n            <h3 class="news__image-heading">${t.section_name}</h3>\n        </div>\n        <h2 class="news__title">${t.abstract}</h2>\n        <p class="news__text">${t.lead_paragraph}</p>\n        <div class="news__lower-box">\n          <p class="news__date">${n}</p>\n          <a class="news__readmore-link" target="_blank"\n          rel="noopener noreferrer" href="${t.web_url}">Read more</a>\n        </div>\n      </li>\n      `)))}if("categoryCards"===e){let e,n;s=t.flatMap((t=>(r=t.multimedia&&t.multimedia.length>=3?t.multimedia[2].url:"https://t4.ftcdn.net/jpg/00/38/13/73/240_F_38137330_gUbR3ZXBc5J5g4pRkaC8TYZQA62OZhx5.jpg",e=new Date(t.published_date),n=e.toISOString().split("T")[0],`\n      <li class="news__item" data-id="${t.slug_name}">\n        <div class="news__image-box">\n          <img class="news__image" src="${r}" alt="" />\n            <div class="div">\n              <button class="news__favorite-btn " data-value="4" type="button">Add to favorite</button>\n              <svg class="favorite-btn__icon-add" width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">\n                <path d="M4.66659 1C2.82592 1 1.33325 2.47733 1.33325 4.3C1.33325 5.77133 1.91659 9.26333 7.65858 12.7933C7.76144 12.8559 7.87952 12.889 7.99992 12.889C8.12032 12.889 8.2384 12.8559 8.34125 12.7933C14.0833 9.26333 14.6666 5.77133 14.6666 4.3C14.6666 2.47733 13.1739 1 11.3333 1C9.49258 1 7.99992 3 7.99992 3C7.99992 3 6.50725 1 4.66659 1Z" stroke="#4440F7" stroke-linecap="round" stroke-linejoin="round"/>\n              </svg>\n            </div>\n            <h3 class="news__image-heading">${t.section}</h3>\n        </div>\n        <h2 class="news__title">${t.title}</h2>\n        <p class="news__text">${t.abstract}</p>\n        <div class="news__lower-box">\n          <p class="news__date">${n}</p>\n          <a class="news__readmore-link" target="_blank"\n          rel="noopener noreferrer" href="${t.url}">Read more</a>\n        </div>\n      </li>\n      `)))}if("inputsCards"===e){let e,n;s=t.flatMap((t=>(r=0!==t.multimedia.length?i+t.multimedia[0].url:"https://t4.ftcdn.net/jpg/00/38/13/73/240_F_38137330_gUbR3ZXBc5J5g4pRkaC8TYZQA62OZhx5.jpg",e=new Date(t.pub_date),n=e.toISOString().split("T")[0],`\n      <li class="news__item" data-id="${t._id}">\n        <div class="news__image-box">\n          <img class="news__image" src="${r}" alt="" />\n            <div class="div">\n              <button class="news__favorite-btn " data-value="4" type="button">Add to favorite</button>\n              <svg class="favorite-btn__icon-add" width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">\n                <path d="M4.66659 1C2.82592 1 1.33325 2.47733 1.33325 4.3C1.33325 5.77133 1.91659 9.26333 7.65858 12.7933C7.76144 12.8559 7.87952 12.889 7.99992 12.889C8.12032 12.889 8.2384 12.8559 8.34125 12.7933C14.0833 9.26333 14.6666 5.77133 14.6666 4.3C14.6666 2.47733 13.1739 1 11.3333 1C9.49258 1 7.99992 3 7.99992 3C7.99992 3 6.50725 1 4.66659 1Z" stroke="#4440F7" stroke-linecap="round" stroke-linejoin="round"/>\n              </svg>\n            </div>\n            <h3 class="news__image-heading">${t.section_name}</h3>\n        </div>\n        <h2 class="news__title">${t.abstract}</h2>\n        <p class="news__text">${t.lead_paragraph}</p>\n        <div class="news__lower-box">\n          <p class="news__date">${n}</p>\n          <a class="news__readmore-link" target="_blank"\n          rel="noopener noreferrer" href="${t.web_url}">Read more</a>\n        </div>\n      </li>\n      `)))}if("categoriesForDesktop"===e&&(s=t.map(((t,e)=>e>=7||0===e?void 0:`<li class="categories-link-desktop" data-search=${t.section}><button class="btn-desktop">${t.display_name}</button></li>`))),"categoriesFull"===e&&(s=t.flatMap(((t,e)=>`<li class="categories-menu-link" data-search=${t.section}><button class="btn-menu">${t.display_name}</button></li>`))),"weather"===e&&(s=t.flatMap((e=>`\n        <div class="weather__info info">\n          <p class="info__temp">${Math.floor(t.main.temp)}°</p>\n          <div class="info-wrapper">\n            <p class="info__situation">${t.weather[0].main}</p>\n            <div class="info-wrapper-items">\n              <svg class="info-wrapper__svg" width="18" height="18">\n                <use class="geo" href="./images/icons.svg#icon-geo"></use>\n              </svg>\n              <p class="info__geo">${t.name}</p>\n            </div>\n          </div>\n        </div>\n        <img\n          src="http://openweathermap.org/img/w/${t.weather[0].icon}.png"\n          alt="image of sun"\n          width="128"\n          class="weather-img"\n        />\n        <p class="weather__date-week">\n          ${localDate.dayOfWeek}\n        </p>\n        <p class="weather__date-date">\n          ${localDate.dateUser}\n          ${localDate.dateMonth}\n          ${localDate.dateYear}\n        </p>\n        <a class="weather__link" href="https://weather.com/weather/tenday/l/35a741555bbfc8bc576be864b0b64af6d1b2ad1328d2ee729f0de0ae00098e85">\n          weather for week\n        </a>`))),"pagination"===e)for(let e=1;e<=t;e+=1)s.push(`<li class="pagination-item">${e}</li>`);return n[e]=s.join(""),n[e]}function Sn(t,e,n="beforeend"){t.insertAdjacentHTML(n,e)}xn=void 0===t?"undefined"==typeof window?En:window:t,kn=function(t){if(void 0===t&&void 0===t.document)return!1;var e,n,i,r,s,o="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l="Success",c="Failure",u="Warning",h="Info",d={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},f="Success",p="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},b="Show",v="Ask",w="Prompt",x={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},k="Standard",E="Hourglass",I="Circle",C="Arrows",S="Dots",T="Pulse",_="Custom",N="Notiflix",A={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},D="Standard",R="Hourglass",L="Circle",O="Arrows",M="Dots",P="Pulse",B={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},F=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+o)},U=function(t){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+t+o)},j=function(e){return e||(e="head"),null!==t.document[e]||(F('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},z=function(e,n){if(!j("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}},W=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=e&&"[object Object]"===Object.prototype.toString.call(n[i])?W(t[i],n[i]):n[i])};n<arguments.length;n++)i(arguments[n]);return t},H=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},V=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},$=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},q=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+t+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+t+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+t+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+e+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},X=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},K=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},J=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},G=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},Y=0,Q=function(n,i,r,s){if(!j("body"))return!1;e||lt.Notify.init({});var o=W(!0,e,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof s&&!Array.isArray(s)){var f={};"object"==typeof r?f=r:"object"==typeof s&&(f=s),e=W(!0,e,f)}var p=e[n.toLocaleLowerCase("en")];Y++,"string"!=typeof i&&(i="Notiflix "+n),e.plainText&&(i=H(i)),!e.plainText&&i.length>e.messageMaxLength&&(e=W(!0,e,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>e.messageMaxLength&&(i=i.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),e.cssAnimation||(e.cssAnimationDuration=0);var m=t.document.getElementById(d.wrapID)||t.document.createElement("div");if(m.id=d.wrapID,m.style.width=e.width,m.style.zIndex=e.zindex,m.style.opacity=e.opacity,"center-center"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.top=e.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===e.position?(m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.left="auto"):"left-top"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===e.position?(m.style.left=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=e.distance,m.style.top=e.distance,m.style.left="auto",m.style.bottom="auto"),e.backOverlay){var g=t.document.getElementById(d.overlayID)||t.document.createElement("div");g.id=d.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=e.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=p.backOverlayColor||e.backOverlayColor,g.className=e.cssAnimation?"nx-with-animation":"",g.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(d.overlayID)||t.document.body.appendChild(g)}t.document.getElementById(d.wrapID)||t.document.body.appendChild(m);var y=t.document.createElement("div");y.id=e.ID+"-"+Y,y.className=e.className+" "+p.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=e.fontSize,y.style.color=p.textColor,y.style.background=p.background,y.style.borderRadius=e.borderRadius,y.style.pointerEvents="all",e.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+e.fontFamily+'", '+a,e.cssAnimation&&(y.style.animationDuration=e.cssAnimationDuration+"ms");var b="";if(e.closeButton&&"function"!=typeof r&&(b='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)y.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?b:"");else{var v="";n===l?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===c?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===h&&(v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=v+'<span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?b:"")}else y.innerHTML='<span class="nx-message">'+i+"</span>"+(e.closeButton?b:"");if("left-bottom"===e.position||"right-bottom"===e.position){var w=t.document.getElementById(d.wrapID);w.insertBefore(y,w.firstChild)}else t.document.getElementById(d.wrapID).appendChild(y);var x=t.document.getElementById(y.id);if(x){var k,E,I=function(){x.classList.add("nx-remove");var e=t.document.getElementById(d.overlayID);e&&0>=m.childElementCount&&e.classList.add("nx-remove"),clearTimeout(k)},C=function(){if(x&&null!==x.parentNode&&x.parentNode.removeChild(x),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var e=t.document.getElementById(d.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(E)};if(e.closeButton&&"function"!=typeof r&&t.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){I();var t=setTimeout((function(){C(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof r||e.clickToClose)&&x.addEventListener("click",(function(){"function"==typeof r&&r(),I();var t=setTimeout((function(){C(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof r){var S=function(){k=setTimeout((function(){I()}),e.timeout),E=setTimeout((function(){C()}),e.timeout+e.cssAnimationDuration)};S(),e.pauseOnHover&&(x.addEventListener("mouseenter",(function(){x.classList.add("nx-paused"),clearTimeout(k),clearTimeout(E)})),x.addEventListener("mouseleave",(function(){x.classList.remove("nx-paused"),S()})))}}if(e.showOnlyTheLastOne&&0<Y)for(var T,_=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+Y+"])"),N=0;N<_.length;N++)null!==(T=_[N]).parentNode&&T.parentNode.removeChild(T);e=W(!0,e,o)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},tt=function(e,i,r,s,o,l){if(!j("body"))return!1;n||lt.Report.init({});var c={};if("object"==typeof o&&!Array.isArray(o)||"object"==typeof l&&!Array.isArray(l)){var u={};"object"==typeof o?u=o:"object"==typeof l&&(u=l),c=W(!0,n,{}),n=W(!0,n,u)}var h=n[e.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+e),"string"!=typeof r&&(e===f?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':e===p?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':e===m?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':e===g&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof s&&(s="Okay"),n.plainText&&(i=H(i),r=H(r),s=H(s)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',s="Okay"),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',s="Okay"),s.length>n.buttonMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',s="Okay")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),s.length>n.buttonMaxLength&&(s=s.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var d=t.document.createElement("div");d.id=y.ID,d.className=n.className,d.style.zIndex=n.zindex,d.style.borderRadius=n.borderRadius,d.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on")),d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.alignItems="center",d.style.justifyContent="center";var b="",v=!0===n.backOverlayClickToClose;n.backOverlay&&(b='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(v?" nx-report-click-to-close":"")+'" style="background:'+(h.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var w,x,k="";if(e===f?(w=n.svgSize,x=h.svgColor,w||(w="110px"),x||(x="#32c682"),k='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+w+'" height="'+w+'" fill="'+x+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):e===p?k=function(t,e){return t||(t="110px"),e||(e="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):e===m?k=function(t,e){return t||(t="110px"),e||(e="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):e===g&&(k=function(t,e){return t||(t="110px"),e||(e="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor)),d.innerHTML=b+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+k+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+h.titleColor+';">'+i+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+h.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+h.buttonBackground+"; color:"+h.buttonColor+';">'+s+"</a></div>",!t.document.getElementById(d.id)){t.document.body.appendChild(d);var E=function(){var e=t.document.getElementById(d.id);e.classList.add("nx-remove");var i=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e),clearTimeout(i)}),n.cssAnimationDuration)};t.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof o&&o(),E()})),b&&v&&t.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){E()}))}n=W(!0,n,c)},et=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},nt=function(e,n,r,s,o,l,c,u,h){if(!j("body"))return!1;i||lt.Confirm.init({});var d=W(!0,i,{});"object"!=typeof h||Array.isArray(h)||(i=W(!0,i,h)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof o&&(o="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof u&&(u=void 0),i.plainText&&(n=H(n),r=H(r),o=H(o),l=H(l)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',o="Okay",l="..."),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',o="Okay",l="..."),(o.length||l.length)>i.buttonsMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',o="Okay",l="...")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),o.length>i.buttonsMaxLength&&(o=o.substring(0,i.buttonsMaxLength)+"..."),l.length>i.buttonsMaxLength&&(l=l.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var f=t.document.createElement("div");f.id=x.ID,f.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),f.style.zIndex=i.zindex,f.style.padding=i.distance,i.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on"));var p="string"==typeof i.position?i.position.trim():"center";f.classList.add("nx-position-"+p),f.style.fontFamily='"'+i.fontFamily+'", '+a;var m="";i.backOverlay&&(m='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof c&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+l+"</a>");var y="",b=null,k=void 0;if(e===v||e===w){b=s||"";var E=e===v||200<b.length?Math.ceil(1.5*b.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(e===w?'value="'+b+'"':"")+' maxlength="'+E+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(f.innerHTML=m+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+n+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+r+y+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+o+"</a>"+g+"</div></div>",!t.document.getElementById(f.id)){t.document.body.appendChild(f);var I=t.document.getElementById(f.id),C=t.document.getElementById("NXConfirmButtonOk"),S=t.document.getElementById("NXConfirmValidationInput");S&&(S.focus(),S.setSelectionRange(0,(S.value||"").length),S.addEventListener("keyup",(function(t){var n=t.target.value;e===v&&n!==b?(t.preventDefault(),S.classList.add("nx-validation-failure"),S.classList.remove("nx-validation-success")):(e===v&&(S.classList.remove("nx-validation-failure"),S.classList.add("nx-validation-success")),("enter"===(t.key||"").toLocaleLowerCase("en")||13===t.keyCode)&&C.dispatchEvent(new Event("click")))}))),C.addEventListener("click",(function(t){if(e===v&&b&&S){if((S.value||"").toString()!==b)return S.focus(),S.classList.add("nx-validation-failure"),t.stopPropagation(),t.preventDefault(),t.returnValue=!1,t.cancelBubble=!0,!1;S.classList.remove("nx-validation-failure")}"function"==typeof c&&(e===w&&S&&(k=S.value||""),c(k)),I.classList.add("nx-remove");var n=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(n))}),i.cssAnimationDuration)})),"function"==typeof c&&t.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(e===w&&S&&(k=S.value||""),u(k)),I.classList.add("nx-remove");var t=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(t))}),i.cssAnimationDuration)}))}i=W(!0,i,d)},it=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},rt=function(e,n,i,s,o){if(!j("body"))return!1;r||lt.Loading.init({});var l=W(!0,r,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof i&&!Array.isArray(i)){var c={};"object"==typeof n?c=n:"object"==typeof i&&(c=i),r=W(!0,r,c)}var u="";if("string"==typeof n&&0<n.length&&(u=n),s){var h="";0<(u=u.length>r.messageMaxLength?H(u).toString().substring(0,r.messageMaxLength)+"...":H(u).toString()).length&&(h='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+u+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var d="";if(e===k)d=V(r.svgSize,r.svgColor);else if(e===E)d=$(r.svgSize,r.svgColor);else if(e===I)d=q(r.svgSize,r.svgColor);else if(e===C)d=X(r.svgSize,r.svgColor);else if(e===S)d=K(r.svgSize,r.svgColor);else if(e===T)d=J(r.svgSize,r.svgColor);else if(e===_&&null!==r.customSvgCode&&null===r.customSvgUrl)d=r.customSvgCode||"";else if(e===_&&null!==r.customSvgUrl&&null===r.customSvgCode)d='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(e===_&&(null===r.customSvgUrl||null===r.customSvgCode))return F('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;d=function(t,e,n){return t||(t="60px"),e||(e="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+e+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(r.svgSize,"#f8f8f8","#32c682")}var f=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),p=t.innerWidth,m=f>=p?p-40+"px":f+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+r.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+d+"</div>",y=t.document.createElement("div");y.id=A.ID,y.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=r.zindex,y.style.background=r.backgroundColor,y.style.animationDuration=r.cssAnimationDuration+"ms",y.style.fontFamily='"'+r.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",r.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+h,!t.document.getElementById(y.id)&&(t.document.body.appendChild(y),r.clickToClose)&&t.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var t=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(t))}),r.cssAnimationDuration)}))}else if(t.document.getElementById(A.ID))var b=t.document.getElementById(A.ID),v=setTimeout((function(){b.classList.add("nx-remove");var t=setTimeout((function(){null!==b.parentNode&&(b.parentNode.removeChild(b),clearTimeout(t))}),r.cssAnimationDuration);clearTimeout(v)}),o);r=W(!0,r,l)},st=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},ot=0,at=function(e,n,i,r,o,l){var c;if(Array.isArray(i)){if(1>i.length)return F("Array of HTMLElements should contains at least one HTMLElement."),!1;c=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return F("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;c=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return F("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=t.document.querySelectorAll(i);if(1>u.length)return F('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;c=u}s||lt.Block.init({});var h=W(!0,s,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof o&&!Array.isArray(o)){var d={};"object"==typeof r?d=r:"object"==typeof o&&(d=o),s=W(!0,s,d)}var f="";"string"==typeof r&&0<r.length&&(f=r),s.cssAnimation||(s.cssAnimationDuration=0);var p=B.className;"string"==typeof s.className&&(p=s.className.trim());var m="number"==typeof s.querySelectorLimit?s.querySelectorLimit:200,g=(c||[]).length>=m?m:c.length,y="nx-block-temporary-position";if(e){for(var b,v=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],w=0;w<g;w++)if(b=c[w]){if(-1<v.indexOf(b.tagName.toLocaleLowerCase("en")))break;var x=b.querySelectorAll("[id^="+B.ID+"]");if(1>x.length){var k="";n&&(k=n===R?$(s.svgSize,s.svgColor):n===L?q(s.svgSize,s.svgColor):n===O?X(s.svgSize,s.svgColor):n===M?K(s.svgSize,s.svgColor):n===P?J(s.svgSize,s.svgColor):V(s.svgSize,s.svgColor));var E='<span class="'+p+'-icon" style="width:'+s.svgSize+";height:"+s.svgSize+';">'+k+"</span>",I="";0<f.length&&(f=f.length>s.messageMaxLength?H(f).substring(0,s.messageMaxLength)+"...":H(f),I='<span style="font-size:'+s.messageFontSize+";color:"+s.messageColor+';" class="'+p+'-message">'+f+"</span>"),ot++;var C=t.document.createElement("div");C.id=B.ID+"-"+ot,C.className=p+(s.cssAnimation?" nx-with-animation":""),C.style.position=s.position,C.style.zIndex=s.zindex,C.style.background=s.backgroundColor,C.style.animationDuration=s.cssAnimationDuration+"ms",C.style.fontFamily='"'+s.fontFamily+'", '+a,C.style.display="flex",C.style.flexWrap="wrap",C.style.flexDirection="column",C.style.alignItems="center",C.style.justifyContent="center",s.rtl&&(C.setAttribute("dir","rtl"),C.classList.add("nx-rtl-on")),C.innerHTML=E+I;var S,T=t.getComputedStyle(b).getPropertyValue("position"),_="string"==typeof T?T.toLocaleLowerCase("en"):"relative",N=Math.round(1.25*parseInt(s.svgSize))+40,A="";N>(b.offsetHeight||0)&&(A="min-height:"+N+"px;"),S=b.getAttribute("id")?"#"+b.getAttribute("id"):b.classList[0]?"."+b.classList[0]:(b.tagName||"").toLocaleLowerCase("en");var D="",z=-1>=["absolute","relative","fixed","sticky"].indexOf(_);if(z||0<A.length){if(!j("head"))return!1;z&&(D="position:relative!important;");var G='<style id="Style-'+B.ID+"-"+ot+'">'+S+"."+y+"{"+D+A+"}</style>",Y=t.document.createRange();Y.selectNode(t.document.head);var Q=Y.createContextualFragment(G);t.document.head.appendChild(Q),b.classList.add(y)}b.appendChild(C)}}}else var Z=function(e){var n=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e);var i=e.getAttribute("id"),r=t.document.getElementById("Style-"+i);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(n)}),s.cssAnimationDuration)},tt=function(t){if(t&&0<t.length)for(var e,n=0;n<t.length;n++)(e=t[n])&&(e.classList.add("nx-remove"),Z(e));else U("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},et=function(t){var e=setTimeout((function(){t.classList.remove(y),clearTimeout(e)}),s.cssAnimationDuration+300)},nt=setTimeout((function(){for(var t,e=0;e<g;e++)(t=c[e])&&(et(t),x=t.querySelectorAll("[id^="+B.ID+"]"),tt(x));clearTimeout(nt)}),l);s=W(!0,s,h)},lt={Notify:{init:function(t){e=W(!0,d,t),z(G,"NotiflixNotifyInternalCSS")},merge:function(t){return e?void(e=W(!0,e,t)):(F("You have to initialize the Notify module before call Merge function."),!1)},success:function(t,e,n){Q(l,t,e,n)},failure:function(t,e,n){Q(c,t,e,n)},warning:function(t,e,n){Q(u,t,e,n)},info:function(t,e,n){Q(h,t,e,n)}},Report:{init:function(t){n=W(!0,y,t),z(Z,"NotiflixReportInternalCSS")},merge:function(t){return n?void(n=W(!0,n,t)):(F("You have to initialize the Report module before call Merge function."),!1)},success:function(t,e,n,i,r){tt(f,t,e,n,i,r)},failure:function(t,e,n,i,r){tt(p,t,e,n,i,r)},warning:function(t,e,n,i,r){tt(m,t,e,n,i,r)},info:function(t,e,n,i,r){tt(g,t,e,n,i,r)}},Confirm:{init:function(t){i=W(!0,x,t),z(et,"NotiflixConfirmInternalCSS")},merge:function(t){return i?void(i=W(!0,i,t)):(F("You have to initialize the Confirm module before call Merge function."),!1)},show:function(t,e,n,i,r,s,o){nt(b,t,e,null,n,i,r,s,o)},ask:function(t,e,n,i,r,s,o,a){nt(v,t,e,n,i,r,s,o,a)},prompt:function(t,e,n,i,r,s,o,a){nt(w,t,e,n,i,r,s,o,a)}},Loading:{init:function(t){r=W(!0,A,t),z(it,"NotiflixLoadingInternalCSS")},merge:function(t){return r?void(r=W(!0,r,t)):(F("You have to initialize the Loading module before call Merge function."),!1)},standard:function(t,e){rt(k,t,e,!0,0)},hourglass:function(t,e){rt(E,t,e,!0,0)},circle:function(t,e){rt(I,t,e,!0,0)},arrows:function(t,e){rt(C,t,e,!0,0)},dots:function(t,e){rt(S,t,e,!0,0)},pulse:function(t,e){rt(T,t,e,!0,0)},custom:function(t,e){rt(_,t,e,!0,0)},notiflix:function(t,e){rt(N,t,e,!0,0)},remove:function(t){"number"!=typeof t&&(t=0),rt(null,null,null,!1,t)},change:function(e){!function(e){"string"!=typeof e&&(e="");var n=t.document.getElementById(A.ID);if(n)if(0<e.length){e=e.length>r.messageMaxLength?H(e).substring(0,r.messageMaxLength)+"...":H(e);var i=n.getElementsByTagName("p")[0];if(i)i.innerHTML=e;else{var s=t.document.createElement("p");s.id=r.messageID,s.className="nx-loading-message nx-loading-message-new",s.style.color=r.messageColor,s.style.fontSize=r.messageFontSize,s.innerHTML=e,n.appendChild(s)}}else F("Where is the new message?")}(e)}},Block:{init:function(t){s=W(!0,B,t),z(st,"NotiflixBlockInternalCSS")},merge:function(t){return s?void(s=W(!0,s,t)):(F('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(t,e,n){at(!0,D,t,e,n)},hourglass:function(t,e,n){at(!0,R,t,e,n)},circle:function(t,e,n){at(!0,L,t,e,n)},arrows:function(t,e,n){at(!0,O,t,e,n)},dots:function(t,e,n){at(!0,M,t,e,n)},pulse:function(t,e,n){at(!0,P,t,e,n)},remove:function(t,e){"number"!=typeof e&&(e=0),at(!1,null,t,null,null,e)}}};return"object"==typeof t.Notiflix?W(!0,t.Notiflix,{Notify:lt.Notify,Report:lt.Report,Confirm:lt.Confirm,Loading:lt.Loading,Block:lt.Block}):{Notify:lt.Notify,Report:lt.Report,Confirm:lt.Confirm,Loading:lt.Loading,Block:lt.Block}},"function"==typeof define&&define.amd?define([],(function(){return kn(xn)})):"object"==typeof En?En=kn(xn):xn.Notiflix=kn(xn);const Tn=new class{addAlreadyReadStyles(t){const e=document.querySelector(`[data-id='${t}']`);e.firstElementChild.classList.add("already-read");e.lastElementChild.classList.add("already-read-bg")}checkFetchedNewsByID(t){const e=this.getJsonFromLocalStorage("IdOfHaveReadNews"),n=this.dataFromLocalStorage(e);null!==n&&t.forEach((t=>{let e;t.hasOwnProperty("slug_name")?e=t.slug_name:t.hasOwnProperty("_id")?e=t._id:t.hasOwnProperty("id")&&(e=String(t.id)),n.includes(e)&&this.addAlreadyReadStyles(e)}))}dataFromLocalStorage(t){try{return JSON.parse(t)}catch(t){console.log(t.name),console.log(t.message)}}getJsonFromLocalStorage(t){return localStorage.getItem(t)}constructor(){this.currentItemID=null}};function _n(t){Tn.currentItemID=t.target.parentNode.parentNode.getAttribute("data-id");const e=Tn.getJsonFromLocalStorage("IdOfHaveReadNews"),n=Tn.dataFromLocalStorage(e);null!==n?(n.push(Tn.currentItemID),localStorage.setItem("IdOfHaveReadNews",JSON.stringify(n))):localStorage.setItem("IdOfHaveReadNews",JSON.stringify([Tn.currentItemID])),Tn.addAlreadyReadStyles(Tn.currentItemID)}var Nn,An,Dn,Rn=Nn={};function Ln(){throw new Error("setTimeout has not been defined")}function On(){throw new Error("clearTimeout has not been defined")}function Mn(t){if(An===setTimeout)return setTimeout(t,0);if((An===Ln||!An)&&setTimeout)return An=setTimeout,setTimeout(t,0);try{return An(t,0)}catch(e){try{return An.call(null,t,0)}catch(e){return An.call(this,t,0)}}}!function(){try{An="function"==typeof setTimeout?setTimeout:Ln}catch(t){An=Ln}try{Dn="function"==typeof clearTimeout?clearTimeout:On}catch(t){Dn=On}}();var Pn,Bn=[],Fn=!1,Un=-1;function jn(){Fn&&Pn&&(Fn=!1,Pn.length?Bn=Pn.concat(Bn):Un=-1,Bn.length&&zn())}function zn(){if(!Fn){var t=Mn(jn);Fn=!0;for(var e=Bn.length;e;){for(Pn=Bn,Bn=[];++Un<e;)Pn&&Pn[Un].run();Un=-1,e=Bn.length}Pn=null,Fn=!1,function(t){if(Dn===clearTimeout)return clearTimeout(t);if((Dn===On||!Dn)&&clearTimeout)return Dn=clearTimeout,clearTimeout(t);try{Dn(t)}catch(e){try{return Dn.call(null,t)}catch(e){return Dn.call(this,t)}}}(t)}}function Wn(t,e){this.fun=t,this.array=e}function Hn(){}Rn.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];Bn.push(new Wn(t,e)),1!==Bn.length||Fn||Mn(zn)},Wn.prototype.run=function(){this.fun.apply(null,this.array)},Rn.title="browser",Rn.browser=!0,Rn.env={},Rn.argv=[],Rn.version="",Rn.versions={},Rn.on=Hn,Rn.addListener=Hn,Rn.once=Hn,Rn.off=Hn,Rn.removeListener=Hn,Rn.removeAllListeners=Hn,Rn.emit=Hn,Rn.prependListener=Hn,Rn.prependOnceListener=Hn,Rn.listeners=function(t){return[]},Rn.binding=function(t){throw new Error("process.binding is not supported")},Rn.cwd=function(){return"/"},Rn.chdir=function(t){throw new Error("process.chdir is not supported")},Rn.umask=function(){return 0};
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
const Vn=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},$n={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,l=a?t[e+2]:0,c=r>>2,u=(3&r)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==s||null==o||null==a)throw Error();const l=r<<2|s>>4;if(i.push(l),64!==o){const t=s<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},qn=function(t){return function(t){const e=Vn(t);return $n.encodeByteArray(e,!0)}(t).replace(/\./g,"")},Xn=function(t){try{return $n.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
const Kn=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Jn=()=>{try{return Kn()||(()=>{if(void 0===Nn||void 0===Nn.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&Xn(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},Gn=t=>{var e,n;return null===(n=null===(e=Jn())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},Yn=t=>{var e;return null===(e=Jn())||void 0===e?void 0:e[`_${t}`]};
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
class Qn{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
function Zn(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ti(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function ei(){const t=Zn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ni(){try{return"object"==typeof indexedDB}catch(t){return!1}}function ii(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}function ri(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
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
 */class si extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,si.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oi.prototype.create)}}class oi{create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(ai,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new si(i,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const ai=/\{\$([^}]+)}/g;
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
 */function li(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ci(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(ui(n)&&ui(s)){if(!ci(n,s))return!1}else if(n!==s)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function ui(t){return null!==t&&"object"==typeof t}
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
function hi(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function di(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function fi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
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
 */function pi(t,e){const n=new mi(t,e);return n.subscribe.bind(n)}class mi{next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=gi),void 0===i.error&&(i.error=gi),void 0===i.complete&&(i.complete=gi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}}function gi(){}
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
 */function yi(t,e=1e3,n=2){const i=e*Math.pow(n,t),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}
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
function bi(t){return t&&t._delegate?t._delegate:t}class vi{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class wi{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new Qn;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,"[DEFAULT]"===i?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class xi{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new wi(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}
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
 */const ki=[];var Ei,Ii;(Ii=Ei||(Ei={}))[Ii.DEBUG=0]="DEBUG",Ii[Ii.VERBOSE=1]="VERBOSE",Ii[Ii.INFO=2]="INFO",Ii[Ii.WARN=3]="WARN",Ii[Ii.ERROR=4]="ERROR",Ii[Ii.SILENT=5]="SILENT";const Ci={debug:Ei.DEBUG,verbose:Ei.VERBOSE,info:Ei.INFO,warn:Ei.WARN,error:Ei.ERROR,silent:Ei.SILENT},Si=Ei.INFO,Ti={[Ei.DEBUG]:"log",[Ei.VERBOSE]:"log",[Ei.INFO]:"info",[Ei.WARN]:"warn",[Ei.ERROR]:"error"},_i=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=Ti[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class Ni{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ei))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Ci[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ei.DEBUG,...t),this._logHandler(this,Ei.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ei.VERBOSE,...t),this._logHandler(this,Ei.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ei.INFO,...t),this._logHandler(this,Ei.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ei.WARN,...t),this._logHandler(this,Ei.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ei.ERROR,...t),this._logHandler(this,Ei.ERROR,...t)}constructor(t){this.name=t,this._logLevel=Si,this._logHandler=_i,this._userLogHandler=null,ki.push(this)}}let Ai,Di;const Ri=new WeakMap,Li=new WeakMap,Oi=new WeakMap,Mi=new WeakMap,Pi=new WeakMap;let Bi={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return Li.get(t);if("objectStoreNames"===e)return t.objectStoreNames||Oi.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ji(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function Fi(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Di||(Di=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(zi(this),e),ji(Ri.get(this))}:function(...e){return ji(t.apply(zi(this),e))}:function(e,...n){const i=t.call(zi(this),e,...n);return Oi.set(i,e.sort?e.sort():[e]),ji(i)}}function Ui(t){return"function"==typeof t?Fi(t):(t instanceof IDBTransaction&&function(t){if(Li.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));Li.set(t,e)}(t),e=t,(Ai||(Ai=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,Bi):t);var e}function ji(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(ji(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&Ri.set(e,t)})).catch((()=>{})),Pi.set(e,t),e}(t);if(Mi.has(t))return Mi.get(t);const e=Ui(t);return e!==t&&(Mi.set(t,e),Pi.set(e,t)),e}const zi=t=>Pi.get(t);function Wi(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=ji(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(ji(o.result),t.oldVersion,t.newVersion,ji(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const Hi=["get","getKey","getAll","getAllKeys","count"],Vi=["put","add","delete","clear"],$i=new Map;function qi(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if($i.get(e))return $i.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Vi.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Hi.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return $i.set(e,s),s}Bi=(t=>({...t,get:(e,n,i)=>qi(e,n)||t.get(e,n,i),has:(e,n)=>!!qi(e,n)||t.has(e,n)}))(Bi);
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
class Xi{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const Ki=new Ni("@firebase/app"),Ji={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Gi=new Map,Yi=new Map;function Qi(t,e){try{t.container.addComponent(e)}catch(n){Ki.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zi(t){const e=t.name;if(Yi.has(e))return Ki.debug(`There were multiple attempts to register component ${e}.`),!1;Yi.set(e,t);for(const e of Gi.values())Qi(e,t);return!0}function tr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
const er=new oi("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class nr{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw er.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new vi("app",(()=>this),"PUBLIC"))}}
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
 */function ir(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw er.create("bad-app-name",{appName:String(r)});var s;if(n||(n=null===(s=Jn())||void 0===s?void 0:s.config),!n)throw er.create("no-options");const o=Gi.get(r);if(o){if(ci(n,o.options)&&ci(i,o.config))return o;throw er.create("duplicate-app",{appName:r})}const a=new xi(r);for(const t of Yi.values())a.addComponent(t);const l=new nr(n,i,a);return Gi.set(r,l),l}function rr(t="[DEFAULT]"){const e=Gi.get(t);if(!e&&"[DEFAULT]"===t)return ir();if(!e)throw er.create("no-app",{appName:t});return e}function sr(t,e,n){var i;let r=null!==(i=Ji[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Ki.warn(t.join(" "))}Zi(new vi(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}let or=null;function ar(){return or||(or=Wi("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-heartbeat-store")}}).catch((t=>{throw er.create("idb-open",{originalErrorMessage:t.message})}))),or}async function lr(t,e){try{const n=(await ar()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(e,cr(t)),n.done}catch(t){if(t instanceof si)Ki.warn(t.message);else{const e=er.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Ki.warn(e.message)}}}function cr(t){return`${t.name}!${t.options.appId}`}
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
 */class ur{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=hr();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=hr(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),fr(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),fr(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=qn(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new dr(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function hr(){return(new Date).toISOString().substring(0,10)}class dr{async runIndexedDBEnvironmentCheck(){return!!ni()&&ii().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{return(await ar()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(cr(t))}catch(t){if(t instanceof si)Ki.warn(t.message);else{const e=er.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Ki.warn(e.message)}}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return lr(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return lr(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function fr(t){return qn(JSON.stringify({version:2,heartbeats:t})).length}
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
 */var pr;pr="",Zi(new vi("platform-logger",(t=>new Xi(t)),"PRIVATE")),Zi(new vi("heartbeat",(t=>new ur(t)),"PRIVATE")),sr("@firebase/app","0.9.1",pr),sr("@firebase/app","0.9.1","esm2017"),sr("fire-js","");
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
sr("firebase","9.16.0","app");var mr,gr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},yr={},br=br||{},vr=gr||self;function wr(){}function xr(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function kr(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Er="closure_uid_"+(1e9*Math.random()>>>0),Ir=0;function Cr(t,e,n){return t.call.apply(t.bind,arguments)}function Sr(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Tr(t,e,n){return(Tr=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Cr:Sr).apply(null,arguments)}function _r(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Nr(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function Ar(){this.s=this.s,this.o=this.o}Ar.prototype.s=!1,Ar.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,Er)&&t[Er]||(t[Er]=++Ir))},Ar.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Dr=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Rr(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Lr(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(xr(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function Or(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Or.prototype.h=function(){this.defaultPrevented=!0};var Mr=function(){if(!vr.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{vr.addEventListener("test",wr,e),vr.removeEventListener("test",wr,e)}catch(t){}return t}();function Pr(t){return/^[\s\xa0]*$/.test(t)}var Br=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Fr(t,e){return t<e?-1:t>e?1:0}function Ur(){var t=vr.navigator;return t&&(t=t.userAgent)?t:""}function jr(t){return-1!=Ur().indexOf(t)}function zr(t){return zr[" "](t),t}zr[" "]=wr;var Wr,Hr,Vr=jr("Opera"),$r=jr("Trident")||jr("MSIE"),qr=jr("Edge"),Xr=qr||$r,Kr=jr("Gecko")&&!(-1!=Ur().toLowerCase().indexOf("webkit")&&!jr("Edge"))&&!(jr("Trident")||jr("MSIE"))&&!jr("Edge"),Jr=-1!=Ur().toLowerCase().indexOf("webkit")&&!jr("Edge");function Gr(){var t=vr.document;return t?t.documentMode:void 0}t:{var Yr="",Qr=(Hr=Ur(),Kr?/rv:([^\);]+)(\)|;)/.exec(Hr):qr?/Edge\/([\d\.]+)/.exec(Hr):$r?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Hr):Jr?/WebKit\/(\S+)/.exec(Hr):Vr?/(?:Version)[ \/]?(\S+)/.exec(Hr):void 0);if(Qr&&(Yr=Qr?Qr[1]:""),$r){var Zr=Gr();if(null!=Zr&&Zr>parseFloat(Yr)){Wr=String(Zr);break t}}Wr=Yr}var ts,es={};function ns(){return function(t){var e=es;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Br(String(Wr)).split("."),n=Br("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=Fr(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||Fr(0==r[2].length,0==s[2].length)||Fr(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t}))}if(vr.document&&$r){var is=Gr();ts=is||(parseInt(Wr,10)||void 0)}else ts=void 0;var rs=ts;function ss(t,e){if(Or.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Kr){t:{try{zr(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:os[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ss.X.h.call(this)}}Nr(ss,Or);var os={2:"touch",3:"pen",4:"mouse"};ss.prototype.h=function(){ss.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var as="closure_listenable_"+(1e6*Math.random()|0),ls=0;function cs(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++ls,this.ba=this.ea=!1}function us(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function hs(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function ds(t){const e={};for(const n in t)e[n]=t[n];return e}const fs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ps(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<fs.length;e++)n=fs[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ms(t){this.src=t,this.g={},this.h=0}function gs(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=Dr(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(us(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ys(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}ms.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=ys(t,e,i,r);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new cs(e,this.src,s,!!i,r)).ea=n,t.push(e)),e};var bs="closure_lm_"+(1e6*Math.random()|0),vs={};function ws(t,e,n,i,r){if(i&&i.once)return ks(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ws(t,e[s],n,i,r);return null}return n=Ns(n),t&&t[as]?t.N(e,n,kr(i)?!!i.capture:!!i,r):xs(t,e,n,!1,i,r)}function xs(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=kr(r)?!!r.capture:!!r,a=Ts(t);if(a||(t[bs]=a=new ms(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=Ss;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Mr||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Cs(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function ks(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ks(t,e[s],n,i,r);return null}return n=Ns(n),t&&t[as]?t.O(e,n,kr(i)?!!i.capture:!!i,r):xs(t,e,n,!0,i,r)}function Es(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)Es(t,e[s],n,i,r);else i=kr(i)?!!i.capture:!!i,n=Ns(n),t&&t[as]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=ys(s=t.g[e],n,i,r))&&(us(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Ts(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ys(e,n,i,r)),(n=-1<t?e[t]:null)&&Is(n))}function Is(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[as])gs(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Cs(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Ts(e))?(gs(n,t),0==n.h&&(n.src=null,e[bs]=null)):us(t)}}}function Cs(t){return t in vs?vs[t]:vs[t]="on"+t}function Ss(t,e){if(t.ba)t=!0;else{e=new ss(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&Is(t),t=n.call(i,e)}return t}function Ts(t){return(t=t[bs])instanceof ms?t:null}var _s="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ns(t){return"function"==typeof t?t:(t[_s]||(t[_s]=function(e){return t.handleEvent(e)}),t[_s])}function As(){Ar.call(this),this.i=new ms(this),this.P=this,this.I=null}function Ds(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new Or(e,t);else if(e instanceof Or)e.target=e.target||t;else{var r=e;ps(e=new Or(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Rs(o,i,!0,e)&&r}if(r=Rs(o=e.g=t,i,!0,e)&&r,r=Rs(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=Rs(o=e.g=n[s],i,!1,e)&&r}function Rs(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&gs(t.i,o),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}Nr(As,Ar),As.prototype[as]=!0,As.prototype.removeEventListener=function(t,e,n,i){Es(this,t,e,n,i)},As.prototype.M=function(){if(As.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)us(n[i]);delete e.g[t],e.h--}}this.I=null},As.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},As.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Ls=vr.JSON.stringify;function Os(){var t=zs;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Ms,Ps=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new Bs),(t=>t.reset()));class Bs{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function Fs(t){vr.setTimeout((()=>{throw t}),0)}function Us(t,e){Ms||function(){var t=vr.Promise.resolve(void 0);Ms=function(){t.then(Ws)}}(),js||(Ms(),js=!0),zs.add(t,e)}var js=!1,zs=new class{add(t,e){const n=Ps.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function Ws(){for(var t;t=Os();){try{t.h.call(t.g)}catch(t){Fs(t)}var e=Ps;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}js=!1}function Hs(t,e){As.call(this),this.h=t||1,this.g=e||vr,this.j=Tr(this.lb,this),this.l=Date.now()}function Vs(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function $s(t,e,n){if("function"==typeof t)n&&(t=Tr(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Tr(t.handleEvent,t)}return 2147483647<Number(e)?-1:vr.setTimeout(t,e||0)}function qs(t){t.g=$s((()=>{t.g=null,t.i&&(t.i=!1,qs(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Nr(Hs,As),(mr=Hs.prototype).ca=!1,mr.R=null,mr.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ds(this,"tick"),this.ca&&(Vs(this),this.start()))}},mr.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},mr.M=function(){Hs.X.M.call(this),Vs(this),delete this.g};class Xs extends Ar{l(t){this.h=arguments,this.g?this.i=!0:qs(this)}M(){super.M(),this.g&&(vr.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function Ks(t){Ar.call(this),this.h=t,this.g={}}Nr(Ks,Ar);var Js=[];function Gs(t,e,n,i){Array.isArray(n)||(n&&(Js[0]=n.toString()),n=Js);for(var r=0;r<n.length;r++){var s=ws(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ys(t){hs(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Is(t)}),t),t.g={}}function Qs(){this.g=!0}function Zs(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Ls(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}Ks.prototype.M=function(){Ks.X.M.call(this),Ys(this)},Ks.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qs.prototype.Aa=function(){this.g=!1},Qs.prototype.info=function(){};var to={},eo=null;function no(){return eo=eo||new As}function io(t){Or.call(this,to.Pa,t)}function ro(t){const e=no();Ds(e,new io(e))}function so(t,e){Or.call(this,to.STAT_EVENT,t),this.stat=e}function oo(t){const e=no();Ds(e,new so(e,t))}function ao(t,e){Or.call(this,to.Qa,t),this.size=e}function lo(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return vr.setTimeout((function(){t()}),e)}to.Pa="serverreachability",Nr(io,Or),to.STAT_EVENT="statevent",Nr(so,Or),to.Qa="timingevent",Nr(ao,Or);var co={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},uo={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ho(){}function fo(t){return t.h||(t.h=t.i())}function po(){}ho.prototype.h=null;var mo,go={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function yo(){Or.call(this,"d")}function bo(){Or.call(this,"c")}function vo(){}function wo(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new Ks(this),this.O=ko,t=Xr?125:void 0,this.T=new Hs(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new xo}function xo(){this.i=null,this.g="",this.h=!1}Nr(yo,Or),Nr(bo,Or),Nr(vo,ho),vo.prototype.g=function(){return new XMLHttpRequest},vo.prototype.i=function(){return{}},mo=new vo;var ko=45e3,Eo={},Io={};function Co(t,e,n){t.K=1,t.v=Vo(Uo(e)),t.s=n,t.P=!0,So(t,null)}function So(t,e){t.F=Date.now(),Ao(t),t.A=Uo(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),ia(n.i,"t",i),t.C=0,n=t.l.H,t.h=new xo,t.g=nl(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Xs(Tr(t.La,t,t.g),t.N)),Gs(t.S,t.g,"readystatechange",t.ib),e=t.H?ds(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ro(),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function To(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function _o(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if(i=No(t,n),i==Io){4==e&&(t.o=4,oo(14),r=!1),Zs(t.j,t.m,null,"[Incomplete Response]");break}if(i==Eo){t.o=4,oo(15),Zs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Zs(t.j,t.m,i,null),Mo(t,i)}To(t)&&i!=Io&&i!=Eo&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,oo(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ka(e),e.K=!0,oo(11))):(Zs(t.j,t.m,n,"[Invalid Chunked Response]"),Oo(t),Lo(t))}function No(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Io:(n=Number(e.substring(n,i)),isNaN(n)?Eo:(i+=1)+n>e.length?Io:(e=e.substr(i,n),t.C=i+n,e))}function Ao(t){t.V=Date.now()+t.O,Do(t,t.O)}function Do(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=lo(Tr(t.gb,t),e)}function Ro(t){t.B&&(vr.clearTimeout(t.B),t.B=null)}function Lo(t){0==t.l.G||t.I||Ya(t.l,t)}function Oo(t){Ro(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Vs(t.T),Ys(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Mo(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||ca(n.h,t)))if(!t.J&&ca(n.h,t)&&3==n.G){try{var i=n.Fa.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ga(n),ja(n)}Xa(n),oo(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=lo(Tr(n.cb,n),6e3));if(1>=la(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else Za(n,11)}else if((t.J||n.g==t)&&Ga(n),!Pr(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const e=c[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const r=c[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(ua(s,s.h),s.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.za=t,Ho(i.F,i.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((i=n).sa=el(i,i.H?i.ka:null,i.V),o.J){ha(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(Ro(a),Ao(a)),i.g=o}else qa(i);0<n.i.length&&Wa(n)}else"stop"!=c[0]&&"close"!=c[0]||Za(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Za(n,7):Ua(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}ro()}catch(t){}}function Po(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(xr(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(xr(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(xr(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}(mr=wo.prototype).setTimeout=function(t){this.O=t},mr.ib=function(t){t=t.target;const e=this.L;e&&3==La(t)?e.l():this.La(t)},mr.La=function(t){try{if(t==this.g)t:{const u=La(this.g);var e=this.g.Ea();this.g.aa();if(!(3>u)&&(3!=u||Xr||this.g&&(this.h.h||this.g.fa()||Oa(this.g)))){this.I||4!=u||7==e||ro(),Ro(this);var n=this.g.aa();this.Y=n;e:if(To(this)){var i=Oa(this.g);t="";var r=i.length,s=4==La(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Oo(this),Lo(this);var o="";break e}this.h.i=new vr.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Pr(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,oo(12),Oo(this),Lo(this);break t}Zs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Mo(this,n)}this.P?(_o(this,u,o),Xr&&this.i&&3==u&&(Gs(this.S,this.T,"tick",this.hb),this.T.start())):(Zs(this.j,this.m,o,null),Mo(this,o)),4==u&&Oo(this),this.i&&!this.I&&(4==u?Ya(this.l,this):(this.i=!1,Ao(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,oo(12)):(this.o=0,oo(13)),Oo(this),Lo(this)}}}catch(t){}},mr.hb=function(){if(this.g){var t=La(this.g),e=this.g.fa();this.C<e.length&&(Ro(this),_o(this,t,e),this.i&&4!=t&&Ao(this))}},mr.cancel=function(){this.I=!0,Oo(this)},mr.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(ro(),oo(17)),Oo(this),this.o=2,Lo(this)):Do(this,this.V-t)};var Bo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fo(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Fo){this.h=void 0!==e?e:t.h,jo(this,t.j),this.s=t.s,this.g=t.g,zo(this,t.m),this.l=t.l,e=t.i;var n=new Zo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Wo(this,n),this.o=t.o}else t&&(n=String(t).match(Bo))?(this.h=!!e,jo(this,n[1]||"",!0),this.s=$o(n[2]||""),this.g=$o(n[3]||"",!0),zo(this,n[4]),this.l=$o(n[5]||"",!0),Wo(this,n[6]||"",!0),this.o=$o(n[7]||"")):(this.h=!!e,this.i=new Zo(null,this.h))}function Uo(t){return new Fo(t)}function jo(t,e,n){t.j=n?$o(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function zo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Wo(t,e,n){e instanceof Zo?(t.i=e,function(t,e){e&&!t.j&&(ta(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ea(this,e),ia(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=qo(e,Yo)),t.i=new Zo(e,t.h))}function Ho(t,e,n){t.i.set(e,n)}function Vo(t){return Ho(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $o(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qo(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Xo),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Xo(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Fo.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qo(e,Ko,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(qo(e,Ko,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(qo(n,"/"==n.charAt(0)?Go:Jo,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qo(n,Qo)),t.join("")};var Ko=/[#\/\?@]/g,Jo=/[#\?:]/g,Go=/[#\?]/g,Yo=/[#\?@]/g,Qo=/#/g;function Zo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ta(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ea(t,e){ta(t),e=ra(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function na(t,e){return ta(t),e=ra(t,e),t.g.has(e)}function ia(t,e,n){ea(t,e),0<n.length&&(t.i=null,t.g.set(ra(t,e),Rr(n)),t.h+=n.length)}function ra(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(mr=Zo.prototype).add=function(t,e){ta(this),this.i=null,t=ra(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},mr.forEach=function(t,e){ta(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},mr.oa=function(){ta(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},mr.W=function(t){ta(this);let e=[];if("string"==typeof t)na(this,t)&&(e=e.concat(this.g.get(ra(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},mr.set=function(t,e){return ta(this),this.i=null,na(this,t=ra(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},mr.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},mr.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function sa(t){this.l=t||oa,vr.PerformanceNavigationTiming?t=0<(t=vr.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(vr.g&&vr.g.Ga&&vr.g.Ga()&&vr.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var oa=10;function aa(t){return!!t.h||!!t.g&&t.g.size>=t.j}function la(t){return t.h?1:t.g?t.g.size:0}function ca(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ua(t,e){t.g?t.g.add(e):t.h=e}function ha(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function da(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Rr(t.i)}function fa(){}function pa(){this.g=new fa}function ma(t,e,n){const i=n||"";try{Po(t,(function(t,n){let r=t;kr(t)&&(r=Ls(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function ga(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function ya(t){this.l=t.ac||null,this.j=t.jb||!1}function ba(t,e){As.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=va,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}sa.prototype.cancel=function(){if(this.i=da(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},fa.prototype.stringify=function(t){return vr.JSON.stringify(t,void 0)},fa.prototype.parse=function(t){return vr.JSON.parse(t,void 0)},Nr(ya,ho),ya.prototype.g=function(){return new ba(this.l,this.j)},ya.prototype.i=function(t){return function(){return t}}({}),Nr(ba,As);var va=0;function wa(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function xa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ka(t)}function ka(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(mr=ba.prototype).open=function(t,e){if(this.readyState!=va)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ka(this)},mr.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||vr).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},mr.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,xa(this)),this.readyState=va},mr.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ka(this)),this.g&&(this.readyState=3,ka(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==vr.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wa(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},mr.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?xa(this):ka(this),3==this.readyState&&wa(this)}},mr.Va=function(t){this.g&&(this.response=this.responseText=t,xa(this))},mr.Ua=function(t){this.g&&(this.response=t,xa(this))},mr.ga=function(){this.g&&xa(this)},mr.setRequestHeader=function(t,e){this.v.append(t,e)},mr.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},mr.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(ba.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Ea=vr.JSON.parse;function Ia(t){As.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ca,this.K=this.L=!1}Nr(Ia,As);var Ca="",Sa=/^https?$/i,Ta=["POST","PUT"];function _a(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Na(t),Da(t)}function Na(t){t.D||(t.D=!0,Ds(t,"complete"),Ds(t,"error"))}function Aa(t){if(t.h&&void 0!==br&&(!t.C[1]||4!=La(t)||2!=t.aa()))if(t.v&&4==La(t))$s(t.Ha,0,t);else if(Ds(t,"readystatechange"),4==La(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var r=String(t.H).match(Bo)[1]||null;if(!r&&vr.self&&vr.self.location){var s=vr.self.location.protocol;r=s.substr(0,s.length-1)}i=!Sa.test(r?r.toLowerCase():"")}n=i}if(n)Ds(t,"complete"),Ds(t,"success");else{t.m=6;try{var o=2<La(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",Na(t)}}finally{Da(t)}}}function Da(t,e){if(t.g){Ra(t);const n=t.g,i=t.C[0]?wr:null;t.g=null,t.C=null,e||Ds(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function Ra(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(vr.clearTimeout(t.A),t.A=null)}function La(t){return t.g?t.g.readyState:0}function Oa(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ca:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ma(t){let e="";return hs(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Pa(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Ma(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Ho(t,e,n))}function Ba(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Fa(t){this.Ca=0,this.i=[],this.j=new Qs,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ba("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ba("baseRetryDelayMs",5e3,t),this.bb=Ba("retryDelaySeedMs",1e4,t),this.$a=Ba("forwardChannelMaxRetries",2,t),this.ta=Ba("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new sa(t&&t.concurrentRequestLimit),this.Fa=new pa,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Ua(t){if(za(t),3==t.G){var e=t.U++,n=Uo(t.F);Ho(n,"SID",t.I),Ho(n,"RID",e),Ho(n,"TYPE","terminate"),Va(t,n),(e=new wo(t,t.j,e,void 0)).K=2,e.v=Vo(Uo(n)),n=!1,vr.navigator&&vr.navigator.sendBeacon&&(n=vr.navigator.sendBeacon(e.v.toString(),"")),!n&&vr.Image&&((new Image).src=e.v,n=!0),n||(e.g=nl(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ao(e)}tl(t)}function ja(t){t.g&&(Ka(t),t.g.cancel(),t.g=null)}function za(t){ja(t),t.u&&(vr.clearTimeout(t.u),t.u=null),Ga(t),t.h.cancel(),t.m&&("number"==typeof t.m&&vr.clearTimeout(t.m),t.m=null)}function Wa(t){aa(t.h)||t.m||(t.m=!0,Us(t.Ja,t),t.C=0)}function Ha(t,e){var n;n=e?e.m:t.U++;const i=Uo(t.F);Ho(i,"SID",t.I),Ho(i,"RID",n),Ho(i,"AID",t.T),Va(t,i),t.o&&t.s&&Pa(i,t.o,t.s),n=new wo(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=$a(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ua(t.h,n),Co(n,i,e)}function Va(t,e){t.ia&&hs(t.ia,(function(t,n){Ho(e,n,t)})),t.l&&Po({},(function(t,n){Ho(e,n,t)}))}function $a(t,e,n){n=Math.min(t.i.length,n);var i=t.l?Tr(t.l.Ra,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),s=!1;else try{ma(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function qa(t){t.g||t.u||(t.Z=1,Us(t.Ia,t),t.A=0)}function Xa(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=lo(Tr(t.Ia,t),Qa(t,t.A)),t.A++,!0)}function Ka(t){null!=t.B&&(vr.clearTimeout(t.B),t.B=null)}function Ja(t){t.g=new wo(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Uo(t.sa);Ho(e,"RID","rpc"),Ho(e,"SID",t.I),Ho(e,"CI",t.L?"0":"1"),Ho(e,"AID",t.T),Ho(e,"TYPE","xmlhttp"),Va(t,e),t.o&&t.s&&Pa(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Vo(Uo(e)),n.s=null,n.P=!0,So(n,t)}function Ga(t){null!=t.v&&(vr.clearTimeout(t.v),t.v=null)}function Ya(t,e){var n=null;if(t.g==e){Ga(t),Ka(t),t.g=null;var i=2}else{if(!ca(t.h,e))return;n=e.D,ha(t.h,e),i=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;Ds(i=no(),new ao(i,n)),Wa(t)}else qa(t);else if(3==(r=e.o)||0==r&&0<t.pa||!(1==i&&function(t,e){return!(la(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=lo(Tr(t.Ja,t,e),Qa(t,t.C)),t.C++,0)))}(t,e)||2==i&&Xa(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Za(t,5);break;case 4:Za(t,10);break;case 3:Za(t,6);break;default:Za(t,2)}}function Qa(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Za(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var i=Tr(t.kb,t);n||(n=new Fo("//www.google.com/images/cleardot.gif"),vr.location&&"http"==vr.location.protocol||jo(n,"https"),Vo(n)),function(t,e){const n=new Qs;if(vr.Image){const i=new Image;i.onload=_r(ga,n,i,"TestLoadImage: loaded",!0,e),i.onerror=_r(ga,n,i,"TestLoadImage: error",!1,e),i.onabort=_r(ga,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=_r(ga,n,i,"TestLoadImage: timeout",!1,e),vr.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else oo(2);t.G=0,t.l&&t.l.va(e),tl(t),za(t)}function tl(t){if(t.G=0,t.la=[],t.l){const e=da(t.h);0==e.length&&0==t.i.length||(Lr(t.la,e),Lr(t.la,t.i),t.h.i.length=0,Rr(t.i),t.i.length=0),t.l.ua()}}function el(t,e,n){var i=n instanceof Fo?Uo(n):new Fo(n,void 0);if(""!=i.g)e&&(i.g=e+"."+i.g),zo(i,i.m);else{var r=vr.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Fo(null,void 0);i&&jo(s,i),e&&(s.g=e),r&&zo(s,r),n&&(s.l=n),i=s}return n=t.D,e=t.za,n&&e&&Ho(i,n,e),Ho(i,"VER",t.ma),Va(t,i),i}function nl(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new Ia(new ya({jb:!0})):new Ia(t.ra)).Ka(t.H),e}function il(){}function rl(){if($r&&!(10<=Number(rs)))throw Error("Environmental error: no available transport.")}function sl(t,e){As.call(this),this.g=new Fa(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Pr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Pr(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new ll(this)}function ol(t){yo.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function al(){bo.call(this),this.status=1}function ll(t){this.g=t}(mr=Ia.prototype).Ka=function(t){this.L=t},mr.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mo.g(),this.C=this.u?fo(this.u):fo(mo),this.g.onreadystatechange=Tr(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void _a(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=vr.FormData&&t instanceof vr.FormData,!(0<=Dr(Ta,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ra(this),0<this.B&&((this.K=function(t){return $r&&ns()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Tr(this.qa,this)):this.A=$s(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){_a(this,t)}},mr.qa=function(){void 0!==br&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ds(this,"timeout"),this.abort(8))},mr.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ds(this,"complete"),Ds(this,"abort"),Da(this))},mr.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Da(this,!0)),Ia.X.M.call(this)},mr.Ha=function(){this.s||(this.F||this.v||this.l?Aa(this):this.fb())},mr.fb=function(){Aa(this)},mr.aa=function(){try{return 2<La(this)?this.g.status:-1}catch(t){return-1}},mr.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},mr.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Ea(e)}},mr.Ea=function(){return this.m},mr.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(mr=Fa.prototype).ma=8,mr.G=1,mr.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new wo(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=ds(s),ps(s,this.S)):s=this.S),null!==this.o||this.N||(r.H=s,s=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=$a(this,r,e),Ho(n=Uo(this.F),"RID",t),Ho(n,"CVER",22),this.D&&Ho(n,"X-HTTP-Session-Id",this.D),Va(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(Ma(s)))+"&"+e:this.o&&Pa(n,this.o,s)),ua(this.h,r),this.Ya&&Ho(n,"TYPE","init"),this.O?(Ho(n,"$req",e),Ho(n,"SID","null"),r.Z=!0,Co(r,n,null)):Co(r,n,e),this.G=2}}else 3==this.G&&(t?Ha(this,t):0==this.i.length||aa(this.h)||Ha(this))},mr.Ia=function(){if(this.u=null,Ja(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=lo(Tr(this.eb,this),t)}},mr.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,oo(10),ja(this),Ja(this))},mr.cb=function(){null!=this.v&&(this.v=null,ja(this),Xa(this),oo(19))},mr.kb=function(t){t?(this.j.info("Successfully pinged google.com"),oo(2)):(this.j.info("Failed to ping google.com"),oo(1))},(mr=il.prototype).xa=function(){},mr.wa=function(){},mr.va=function(){},mr.ua=function(){},mr.Ra=function(){},rl.prototype.g=function(t,e){return new sl(t,e)},Nr(sl,As),sl.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;oo(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=el(t,null,t.V),Wa(t)},sl.prototype.close=function(){Ua(this.g)},sl.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=Ls(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&Wa(e)},sl.prototype.M=function(){this.g.l=null,delete this.j,Ua(this.g),delete this.g,sl.X.M.call(this)},Nr(ol,yo),Nr(al,bo),Nr(ll,il),ll.prototype.xa=function(){Ds(this.g,"a")},ll.prototype.wa=function(t){Ds(this.g,new ol(t))},ll.prototype.va=function(t){Ds(this.g,new al)},ll.prototype.ua=function(){Ds(this.g,"b")},rl.prototype.createWebChannel=rl.prototype.g,sl.prototype.send=sl.prototype.u,sl.prototype.open=sl.prototype.m,sl.prototype.close=sl.prototype.close,co.NO_ERROR=0,co.TIMEOUT=8,co.HTTP_ERROR=6,uo.COMPLETE="complete",po.EventType=go,go.OPEN="a",go.CLOSE="b",go.ERROR="c",go.MESSAGE="d",As.prototype.listen=As.prototype.N,Ia.prototype.listenOnce=Ia.prototype.O,Ia.prototype.getLastError=Ia.prototype.Oa,Ia.prototype.getLastErrorCode=Ia.prototype.Ea,Ia.prototype.getStatus=Ia.prototype.aa,Ia.prototype.getResponseJson=Ia.prototype.Sa,Ia.prototype.getResponseText=Ia.prototype.fa,Ia.prototype.send=Ia.prototype.da,Ia.prototype.setWithCredentials=Ia.prototype.Ka;yr.createWebChannelTransport=function(){return new rl},yr.getStatEventTarget=function(){return no()},yr.ErrorCode=co,yr.EventType=uo,yr.Event=to,yr.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},yr.FetchXmlHttpFactory=ya,yr.WebChannel=po,yr.XhrIo=Ia;
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
class cl{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}cl.UNAUTHENTICATED=new cl(null),cl.GOOGLE_CREDENTIALS=new cl("google-credentials-uid"),cl.FIRST_PARTY=new cl("first-party-uid"),cl.MOCK_USER=new cl("mock-user");
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
let ul="9.16.0";
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
 */const hl=new Ni("@firebase/firestore");function dl(t,...e){if(hl.logLevel<=Ei.DEBUG){const n=e.map(pl);hl.debug(`Firestore (${ul}): ${t}`,...n)}}function fl(t,...e){if(hl.logLevel<=Ei.ERROR){const n=e.map(pl);hl.error(`Firestore (${ul}): ${t}`,...n)}}function pl(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function ml(t="Unexpected state"){const e=`FIRESTORE (${ul}) INTERNAL ASSERTION FAILED: `+t;throw fl(e),new Error(e)}function gl(t,e){t||ml()}
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
const yl={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class bl extends si{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class vl{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class wl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class xl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(cl.UNAUTHENTICATED)))}shutdown(){}}class kl{start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new vl;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new vl,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{dl("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(dl("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new vl)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(dl("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(gl("string"==typeof e.accessToken),new wl(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return gl(null===t||"string"==typeof t),new cl(t)}constructor(t){this.t=t,this.currentUser=cl.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class El{I(){return this.g?this.g():(gl(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i,this.type="FirstParty",this.user=cl.FIRST_PARTY,this.p=new Map}}class Il{getToken(){return Promise.resolve(new El(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(cl.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i}}class Cl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sl{start(t,e){const n=t=>{null!=t.error&&dl("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,dl("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{dl("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?i(t):dl("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(gl("string"==typeof t.token),this.A=t.token,new Cl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}}
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
function Tl(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
 */class _l{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Tl(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function Nl(t,e){return t<e?-1:t>e?1:0}
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
class Al{get length(){return this.len}isEqual(t){return 0===Al.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Al?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&ml(),void 0===n?n=t.length-e:n>t.length-e&&ml(),this.segments=t,this.offset=e,this.len=n}}class Dl extends Al{construct(t,e,n){return new Dl(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new bl(yl.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Dl(e)}static emptyPath(){return new Dl([])}}
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
class Rl{static fromPath(t){return new Rl(Dl.fromString(t))}static fromName(t){return new Rl(Dl.fromString(t).popFirst(5))}static empty(){return new Rl(Dl.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Dl.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Dl.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Rl(new Dl(t.slice()))}constructor(t){this.path=t}}
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
 */class Ll{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}Ll.UNKNOWN_ID=-1;function Ol(t){return"IndexedDbTransactionError"===t.name}
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
class Ml{ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}}Ml.at=-1;
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
class Pl{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Bl{static empty(){return new Bl("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Bl&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
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
 */function Fl(t){return 0===t&&1/t==-1/0}let Ul=Symbol.iterator;
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
 */class jl{static fromBase64String(t){const e=atob(t);return new jl(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new jl(e)}[Ul](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Nl(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}jl.EMPTY_BYTE_STRING=new jl("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zl(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Wl(t){return"string"==typeof t?jl.fromBase64String(t):jl.fromUint8Array(t)}
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
 */function Hl(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Vl{insert(t,e){return new Vl(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ql.BLACK,null,null))}remove(t){return new Vl(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ql.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new $l(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new $l(this.root,t,this.comparator,!1)}getReverseIterator(){return new $l(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new $l(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||ql.EMPTY}}class $l{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class ql{copy(t,e,n,i,r){return new ql(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ql.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return ql.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ql.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ql.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ml();if(this.right.isRed())throw ml();const t=this.left.check();if(t!==this.right.check())throw ml();return t+(this.isRed()?0:1)}constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:ql.RED,this.left=null!=i?i:ql.EMPTY,this.right=null!=r?r:ql.EMPTY,this.size=this.left.size+1+this.right.size}}ql.EMPTY=null,ql.RED=!0,ql.BLACK=!1,ql.EMPTY=new class{get key(){throw ml()}get value(){throw ml()}get color(){throw ml()}get left(){throw ml()}get right(){throw ml()}copy(t,e,n,i,r){return this}insert(t,e,n){return new ql(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
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
class Xl{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Kl(this.data.getIterator())}getIteratorFrom(t){return new Kl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Xl))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Xl(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new Vl(this.comparator)}}class Kl{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
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
var Jl,Gl;(Gl=Jl||(Jl={}))[Gl.OK=0]="OK",Gl[Gl.CANCELLED=1]="CANCELLED",Gl[Gl.UNKNOWN=2]="UNKNOWN",Gl[Gl.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Gl[Gl.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Gl[Gl.NOT_FOUND=5]="NOT_FOUND",Gl[Gl.ALREADY_EXISTS=6]="ALREADY_EXISTS",Gl[Gl.PERMISSION_DENIED=7]="PERMISSION_DENIED",Gl[Gl.UNAUTHENTICATED=16]="UNAUTHENTICATED",Gl[Gl.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Gl[Gl.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Gl[Gl.ABORTED=10]="ABORTED",Gl[Gl.OUT_OF_RANGE=11]="OUT_OF_RANGE",Gl[Gl.UNIMPLEMENTED=12]="UNIMPLEMENTED",Gl[Gl.INTERNAL=13]="INTERNAL",Gl[Gl.UNAVAILABLE=14]="UNAVAILABLE",Gl[Gl.DATA_LOSS=15]="DATA_LOSS";
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
new Vl(Rl.comparator);new Vl(Rl.comparator);new Vl(Rl.comparator),new Xl(Rl.comparator);new Xl(Nl);const Yl=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ql=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Zl=Ql;
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
 */class tc{ue(t,e){this.ce(t,e),e.ae()}ce(t,e){if("nullValue"in t)this.he(e,5);else if("booleanValue"in t)this.he(e,10),e.le(t.booleanValue?1:0);else if("integerValue"in t)this.he(e,15),e.le(zl(t.integerValue));else if("doubleValue"in t){const n=zl(t.doubleValue);isNaN(n)?this.he(e,13):(this.he(e,15),Fl(n)?e.le(0):e.le(n))}else if("timestampValue"in t){const n=t.timestampValue;this.he(e,20),"string"==typeof n?e.fe(n):(e.fe(`${n.seconds||""}`),e.le(n.nanos||0))}else if("stringValue"in t)this.de(t.stringValue,e),this._e(e);else if("bytesValue"in t)this.he(e,30),e.we(Wl(t.bytesValue)),this._e(e);else if("referenceValue"in t)this.me(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.he(e,45),e.le(n.latitude||0),e.le(n.longitude||0)}else"mapValue"in t?Hl(t)?this.he(e,Number.MAX_SAFE_INTEGER):(this.ge(t.mapValue,e),this._e(e)):"arrayValue"in t?(this.ye(t.arrayValue,e),this._e(e)):ml()}de(t,e){this.he(e,25),this.pe(t,e)}pe(t,e){e.fe(t)}ge(t,e){const n=t.fields||{};this.he(e,55);for(const t of Object.keys(n))this.de(t,e),this.ce(n[t],e)}ye(t,e){const n=t.values||[];this.he(e,50);for(const t of n)this.ce(t,e)}me(t,e){this.he(e,37),Rl.fromName(t).path.forEach((t=>{this.he(e,60),this.pe(t,e)}))}he(t,e){t.le(e)}_e(t){t.le(2)}constructor(){}}tc.Ie=new tc;
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
new Uint8Array(0);class ec{static withCacheSize(t){return new ec(t,ec.DEFAULT_COLLECTION_PERCENTILE,ec.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
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
 */ec.DEFAULT_COLLECTION_PERCENTILE=10,ec.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ec.DEFAULT=new ec(41943040,ec.DEFAULT_COLLECTION_PERCENTILE,ec.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ec.DISABLED=new ec(-1,0,0);function nc(){return"undefined"!=typeof document?document:null}
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
 */class ic{reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),i=Math.max(0,e-n);i>0&&dl("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}constructor(t,e,n=1e3,i=1.5,r=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}}
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
class rc{static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new rc(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new bl(yl.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new vl,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function sc(t,e){if(fl("AsyncQueue",`${e}: ${t}`),Ol(t))return new bl(yl.UNAVAILABLE,`${e}: ${t}`);throw t}
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
const oc=new Map;class ac{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new bl(yl.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new bl(yl.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new bl(yl.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
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
 */class lc{get app(){if(!this._app)throw new bl(yl.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new bl(yl.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ac(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new xl;switch(t.type){case"gapi":const e=t.client;return new Il(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new bl(yl.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=oc.get(t);e&&(dl("ComponentProvider","Removing Datastore"),oc.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ac({}),this._settingsFrozen=!1}}
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
class cc{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new bl(yl.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new vl;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=sc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=cl.UNAUTHENTICATED,this.clientId=_l.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{dl("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(dl("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}class uc{get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const e=nc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise((()=>{}));const e=new vl;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Ol(t))throw t;dl("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t);throw fl("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const i=rc.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.Uc.push(i),i}zc(){this.Kc&&ml()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ic(this,"async_queue_retry"),this.Wc=()=>{const t=nc();t&&dl("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=nc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}}class hc extends lc{_terminate(){return this._firestoreClient||dc(this),this._firestoreClient.terminate()}constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new uc,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}}function dc(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new Pl(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new cc(t._authCredentials,t._appCheckCredentials,t._queue,i)}new RegExp("[~\\*/\\[\\]]");!function(t,e=!0){ul="9.16.0",Zi(new vi("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new hc(new kl(t.getProvider("auth-internal")),new Sl(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new bl(yl.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bl(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),sr("@firebase/firestore","3.8.1",t),sr("@firebase/firestore","3.8.1","esm2017")}();const fc=new oi("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function pc(t){return t instanceof si&&t.code.includes("request-failed")}
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
 */function mc({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function gc(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function yc(t,e){const n=(await e.json()).error;return fc.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function bc({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function vc(t,{refreshToken:e}){const n=bc(t);return n.append("Authorization",function(t){return`FIS_v2 ${t}`}
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
 */(e)),n}async function wc(t){const e=await t();return e.status>=500&&e.status<600?t():e}
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
 */function xc(t){return new Promise((e=>{setTimeout(e,t)}))}
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
const kc=/^[cdef][\w-]{21}$/;function Ec(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){return(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}
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
 */(t);return kc.test(e)?e:""}catch(t){return""}}function Ic(t){return`${t.appName}!${t.appId}`}
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
 */const Cc=new Map;function Sc(t,e){const n=Ic(t);Tc(n,e),function(t,e){const n=Nc();n&&n.postMessage({key:t,fid:e});Ac()}(n,e)}function Tc(t,e){const n=Cc.get(t);if(n)for(const t of n)t(e)}let _c=null;function Nc(){return!_c&&"BroadcastChannel"in self&&(_c=new BroadcastChannel("[Firebase] FID Change"),_c.onmessage=t=>{Tc(t.data.key,t.data.fid)}),_c}function Ac(){0===Cc.size&&_c&&(_c.close(),_c=null)}
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
 */let Dc=null;function Rc(){return Dc||(Dc=Wi("firebase-installations-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-installations-store")}})),Dc}async function Lc(t,e){const n=Ic(t),i=(await Rc()).transaction("firebase-installations-store","readwrite"),r=i.objectStore("firebase-installations-store"),s=await r.get(n);return await r.put(e,n),await i.done,s&&s.fid===e.fid||Sc(t,e.fid),e}async function Oc(t){const e=Ic(t),n=(await Rc()).transaction("firebase-installations-store","readwrite");await n.objectStore("firebase-installations-store").delete(e),await n.done}async function Mc(t,e){const n=Ic(t),i=(await Rc()).transaction("firebase-installations-store","readwrite"),r=i.objectStore("firebase-installations-store"),s=await r.get(n),o=e(s);return void 0===o?await r.delete(n):await r.put(o,n),await i.done,!o||s&&s.fid===o.fid||Sc(t,o.fid),o}
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
 */async function Pc(t){let e;const n=await Mc(t.appConfig,(n=>{const i=function(t){return Uc(t||{fid:Ec(),registrationStatus:0})}(n),r=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(fc.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(t,e){try{const n=await async function({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=mc(t),r=bc(t),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&r.append("x-firebase-client",t)}const o={fid:n,authVersion:"FIS_v2",appId:t.appId,sdkVersion:"w:0.6.1"},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await wc((()=>fetch(i,a)));if(l.ok){const t=await l.json();return{fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:gc(t.authToken)}}throw await yc("Create Installation",l)}(t,e);return Lc(t.appConfig,n)}catch(n){throw pc(n)&&409===n.customData.serverCode?await Oc(t.appConfig):await Lc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:i}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:Bc(t)}:{installationEntry:e}}(t,i);return e=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function Bc(t){let e=await Fc(t.appConfig);for(;1===e.registrationStatus;)await xc(100),e=await Fc(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await Pc(t);return n||e}return e}function Fc(t){return Mc(t,(t=>{if(!t)throw fc.create("installation-not-found");return Uc(t)}))}function Uc(t){return 1===(e=t).registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
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
 */}async function jc({appConfig:t,heartbeatServiceProvider:e},n){const i=function(t,{fid:e}){return`${mc(t)}/${e}/authTokens:generate`}
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
 */(t,n),r=vc(t,n),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&r.append("x-firebase-client",t)}const o={installation:{sdkVersion:"w:0.6.1",appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await wc((()=>fetch(i,a)));if(l.ok){return gc(await l.json())}throw await yc("Generate Auth Token",l)}async function zc(t,e=!1){let n;const i=await Mc(t.appConfig,(i=>{if(!Hc(i))throw fc.create("not-registered");const r=i.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+36e5}(t)}(r))return i;if(1===r.requestStatus)return n=async function(t,e){let n=await Wc(t.appConfig);for(;1===n.authToken.requestStatus;)await xc(100),n=await Wc(t.appConfig);const i=n.authToken;return 0===i.requestStatus?zc(t,e):i}(t,e),i;{if(!navigator.onLine)throw fc.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(i);return n=async function(t,e){try{const n=await jc(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Lc(t.appConfig,i),n}catch(n){if(!pc(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Lc(t.appConfig,n)}else await Oc(t.appConfig);throw n}}(t,e),e}}));return n?await n:i.authToken}function Wc(t){return Mc(t,(t=>{if(!Hc(t))throw fc.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+1e4<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n;
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
 */}))}function Hc(t){return void 0!==t&&2===t.registrationStatus}
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
async function Vc(t,e=!1){const n=t;await async function(t){const{registrationPromise:e}=await Pc(t);e&&await e}
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
 */(n);return(await zc(n,e)).token}function $c(t){return fc.create("missing-app-config-values",{valueName:t})}
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
 */const qc=t=>{const e=tr(t.getProvider("app").getImmediate(),"installations").getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:i}=await Pc(e);return i?i.catch(console.error):zc(e).catch(console.error),n.fid}(e),getToken:t=>Vc(e,t)}};Zi(new vi("installations",(t=>{const e=t.getProvider("app").getImmediate(),n=
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
function(t){if(!t||!t.options)throw $c("App Configuration");if(!t.name)throw $c("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw $c(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,heartbeatServiceProvider:tr(e,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),Zi(new vi("installations-internal",qc,"PRIVATE")),sr("@firebase/installations","0.6.1"),sr("@firebase/installations","0.6.1","esm2017");
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
const Xc=new Ni("@firebase/analytics");
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
function Kc(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function Jc(t,e,n,i){return async function(r,s,o){try{"event"===r?await async function(t,e,n,i,r){try{let s=[];if(r&&r.send_to){let t=r.send_to;Array.isArray(t)||(t=[t]);const i=await Kc(n);for(const n of t){const t=i.find((t=>t.measurementId===n)),r=t&&e[t.appId];if(!r){s=[];break}s.push(r)}}0===s.length&&(s=Object.values(e)),await Promise.all(s),t("event",i,r||{})}catch(t){Xc.error(t)}}(t,e,n,s,o):"config"===r?await async function(t,e,n,i,r,s){const o=i[r];try{if(o)await e[o];else{const t=(await Kc(n)).find((t=>t.measurementId===r));t&&await e[t.appId]}}catch(t){Xc.error(t)}t("config",r,s)}(t,e,n,i,s,o):"consent"===r?t("consent","update",o):t("set",s)}catch(t){Xc.error(t)}}}
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
const Gc=new oi("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const Yc=new class{getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}};function Qc(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Zc(t,e=Yc,n){const{appId:i,apiKey:r,measurementId:s}=t.options;if(!i)throw Gc.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw Gc.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new eu;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),tu({appId:i,apiKey:r,measurementId:s},o,a,e)}async function tu(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=Yc){var s;const{appId:o,measurementId:a}=t;try{await function(t,e){return new Promise(((n,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(n,r);t.addEventListener((()=>{clearTimeout(s),i(Gc.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}(i,e)}catch(t){if(a)return Xc.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==t?void 0:t.message}]`),{appId:o,measurementId:a};throw t}try{const e=await async function(t){var e;const{appId:n,apiKey:i}=t,r={method:"GET",headers:Qc(i)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,r);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(t){}throw Gc.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}(t);return r.deleteThrottleMetadata(o),e}catch(e){const l=e;if(!function(t){if(!(t instanceof si&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(l)){if(r.deleteThrottleMetadata(o),a)return Xc.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==l?void 0:l.message}]`),{appId:o,measurementId:a};throw e}const c=503===Number(null===(s=null==l?void 0:l.customData)||void 0===s?void 0:s.httpStatus)?yi(n,r.intervalMillis,30):yi(n,r.intervalMillis),u={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return r.setThrottleMetadata(o,u),Xc.debug(`Calling attemptFetch again in ${c} millis`),tu(t,u,i,r)}}class eu{addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}constructor(){this.listeners=[]}}
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
 */let nu,iu;function ru(t){iu=t}function su(t){nu=t}
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
 */async function ou(t,e,n,i,r,s,o){var a;const l=Zc(t);l.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&Xc.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>Xc.error(t))),e.push(l);const c=async function(){if(!ni())return Xc.warn(Gc.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await ii()}catch(t){return Xc.warn(Gc.create("indexeddb-unavailable",{errorInfo:null==t?void 0:t.toString()}).message),!1}return!0}().then((t=>t?i.getId():void 0)),[u,h]=await Promise.all([l,c]);(function(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes("https://www.googletagmanager.com/gtag/js")&&n.src.includes(t))return n;return null})(s)||function(t,e){const n=document.createElement("script");n.src=`https://www.googletagmanager.com/gtag/js?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}(s,u.measurementId),iu&&(r("consent","default",iu),ru(void 0)),r("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),r("config",u.measurementId,d),nu&&(r("set",nu),su(void 0)),u.measurementId}
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
 */class au{_delete(){return delete lu[this.app.options.appId],Promise.resolve()}constructor(t){this.app=t}}let lu={},cu=[];const uu={};let hu,du,fu="dataLayer",pu="gtag",mu=!1;function gu(t,e,n){!function(){const t=[];if(ti()&&t.push("This is a browser extension environment."),ri()||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=Gc.create("invalid-analytics-context",{errorInfo:e});Xc.warn(n.message)}}();const i=t.options.appId;if(!i)throw Gc.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw Gc.create("no-api-key");Xc.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=lu[i])throw Gc.create("already-exists",{id:i});if(!mu){!function(t){let e=[];Array.isArray(window[t])?e=window[t]:window[t]=e}(fu);const{wrappedGtag:t,gtagCore:e}=function(t,e,n,i,r){let s=function(...t){window[i].push(arguments)};return window[r]&&"function"==typeof window[r]&&(s=window[r]),window[r]=Jc(s,t,e,n),{gtagCore:s,wrappedGtag:window[r]}}(lu,cu,uu,fu,pu);du=t,hu=e,mu=!0}lu[i]=ou(t,cu,uu,e,hu,fu,n);return new au(t)}function yu(t,e,n,i){t=bi(t),async function(t,e,n,i,r){if(r&&r.global)t("event",n,i);else{const r=await e;t("event",n,Object.assign(Object.assign({},i),{send_to:r}))}}(du,lu[t.app.options.appId],e,n,i).catch((t=>Xc.error(t)))}Zi(new vi("analytics",((t,{options:e})=>gu(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e)),"PUBLIC")),Zi(new vi("analytics-internal",(function(t){try{const e=t.getProvider("analytics").getImmediate();return{logEvent:(t,n,i)=>yu(e,t,n,i)}}catch(t){throw Gc.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),sr("@firebase/analytics","0.9.1"),sr("@firebase/analytics","0.9.1","esm2017");function bu(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;function vu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wu=vu,xu=new oi("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ku=new Ni("@firebase/auth");function Eu(t,...e){ku.logLevel<=Ei.ERROR&&ku.error(`Auth (9.16.0): ${t}`,...e)}
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
 */function Iu(t,...e){throw Tu(t,...e)}function Cu(t,...e){return Tu(t,...e)}function Su(t,e,n){const i=Object.assign(Object.assign({},wu()),{[e]:n});return new oi("auth","Firebase",i).create(e,{appName:t.name})}function Tu(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return xu.create(t,...e)}function _u(t,e,...n){if(!t)throw Tu(e,...n)}function Nu(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Eu(e),new Error(e)}function Au(t,e){t||Nu(e)}
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
 */const Du=new Map;function Ru(t){Au(t instanceof Function,"Expected a class definition");let e=Du.get(t);return e?(Au(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Du.set(t,e),e)}
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
function Lu(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function Ou(){return"http:"===Mu()||"https:"===Mu()}function Mu(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
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
class Pu{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Ou()||ti()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(t,e){this.shortDelay=t,this.longDelay=e,Au(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zn())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
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
 */function Bu(t,e){Au(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
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
 */class Fu{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Nu("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Nu("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Nu("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Uu={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},ju=new Pu(3e4,6e4);
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
 */function zu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wu(t,e,n,i,r={}){return Hu(t,r,(async()=>{let r={},s={};i&&("GET"===e?s=i:r={body:JSON.stringify(i)});const o=hi(Object.assign({key:t.config.apiKey},s)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Fu.fetch()($u(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Hu(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Uu),e);try{const e=new qu(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Xu(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Xu(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Xu(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw Xu(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Su(t,a,o);Iu(t,a)}}catch(e){if(e instanceof si)throw e;Iu(t,"network-request-failed")}}async function Vu(t,e,n,i,r={}){const s=await Wu(t,e,n,i,r);return"mfaPendingCredential"in s&&Iu(t,"multi-factor-auth-required",{_serverResponse:s}),s}function $u(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Bu(t.config,r):`${t.config.apiScheme}://${r}`}class qu{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(Cu(this.auth,"network-request-failed"))),ju.get())}))}}function Xu(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Cu(t,e,i);return r.customData._tokenResponse=n,r}
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
function Ku(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
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
 */function Ju(t){return 1e3*Number(t)}function Gu(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return Eu("JWT malformed, contained fewer than 3 sections"),null;try{const t=Xn(n);return t?JSON.parse(t):(Eu("Failed to decode base64 JWT payload"),null)}catch(t){return Eu("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
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
async function Yu(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof si&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Qu{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class Zu{_initializeTime(){this.lastSignInTime=Ku(this.lastLoginAt),this.creationTime=Ku(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}}
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
 */async function th(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Yu(t,async function(t,e){return Wu(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));_u(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=bu(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=t.providerData,c=o,[...l.filter((t=>!c.some((e=>e.providerId===t.providerId)))),...c]);var l,c;const u=t.isAnonymous,h=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Zu(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
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
class eh{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){_u(t.idToken,"internal-error"),_u(void 0!==t.idToken,"internal-error"),_u(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Gu(t);return _u(e,"internal-error"),_u(void 0!==e.exp,"internal-error"),_u(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return _u(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await
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
async function(t,e){const n=await Hu(t,{},(async()=>{const n=hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,s=$u(t,i,"/v1/token",`key=${r}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Fu.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new eh;return n&&(_u("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(_u("string"==typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(_u("number"==typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new eh,this.toJSON())}_performRefresh(){return Nu("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function nh(t,e){_u("string"==typeof t||void 0===t,"internal-error",{appName:e})}class ih{async getIdToken(t){const e=await Yu(this,this.stsTokenManager.getToken(this.auth,t));return _u(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=bi(t),i=await n.getIdToken(e),r=Gu(i);_u(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Ku(Ju(r.auth_time)),issuedAtTime:Ku(Ju(r.iat)),expirationTime:Ku(Ju(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=bi(t);await th(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(_u(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new ih(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){_u(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await th(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Yu(this,async function(t,e){return Wu(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,l,c;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=e.createdAt)&&void 0!==l?l:void 0,y=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:b,emailVerified:v,isAnonymous:w,providerData:x,stsTokenManager:k}=e;_u(b&&k,t,"internal-error");const E=eh.fromJSON(this.name,k);_u("string"==typeof b,t,"internal-error"),nh(u,t.name),nh(h,t.name),_u("boolean"==typeof v,t,"internal-error"),_u("boolean"==typeof w,t,"internal-error"),nh(d,t.name),nh(f,t.name),nh(p,t.name),nh(m,t.name),nh(g,t.name),nh(y,t.name);const I=new ih({uid:b,auth:t,email:h,emailVerified:v,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(I.providerData=x.map((t=>Object.assign({},t)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(t,e,n=!1){const i=new eh;i.updateFromServerResponse(e);const r=new ih({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await th(r),r}constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=bu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Zu(r.createdAt||void 0,r.lastLoginAt||void 0)}}
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
 */class rh{async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}constructor(){this.type="NONE",this.storage={}}}rh.type="NONE";const sh=rh;
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
 */function oh(t,e,n){return`firebase:${t}:${e}:${n}`}class ah{setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ih._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ah(Ru(sh),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||Ru(sh);const s=oh(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const i=ih._fromJSON(t,e);n!==r&&(o=i),r=n;break}}catch(t){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(s)}catch(t){}}))),new ah(r,t,n)):new ah(r,t,n)}constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=oh(this.userKey,i.apiKey,r),this.fullPersistenceKey=oh("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function lh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ch(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ph(e))return"Blackberry";if(mh(e))return"Webos";if(uh(e))return"Safari";if((e.includes("chrome/")||hh(e))&&!e.includes("edge/"))return"Chrome";if(fh(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ch(t=Zn()){return/firefox\//i.test(t)}function uh(t=Zn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hh(t=Zn()){return/crios\//i.test(t)}function dh(t=Zn()){return/iemobile/i.test(t)}function fh(t=Zn()){return/android/i.test(t)}function ph(t=Zn()){return/blackberry/i.test(t)}function mh(t=Zn()){return/webos/i.test(t)}function gh(t=Zn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yh(){return ei()&&10===document.documentMode}function bh(t=Zn()){return gh(t)||fh(t)||mh(t)||ph(t)||/windows phone/i.test(t)||dh(t)}
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
function vh(t,e=[]){let n;switch(t){case"Browser":n=lh(Zn());break;case"Worker":n=`${lh(Zn())}-${t}`;break;default:n=t}return`${n}/JsCore/9.16.0/${e.length?e.join(","):"FirebaseCore-web"}`}
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
 */class wh{pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{n(t(e))}catch(t){i(t)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}constructor(t){this.auth=t,this.queue=[]}}
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
 */class xh{_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Ru(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await ah.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(t){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return _u(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await th(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?bi(t):null;return e&&_u(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&_u(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Ru(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new oi("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Ru(t)||this._popupRedirectResolver;_u(e,this,"argument-error"),this.redirectPersistenceManager=await ah.create(this,[Ru(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return _u(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return _u(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=vh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Eh(this),this.idTokenSubscription=new Eh(this),this.beforeStateQueue=new wh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}}function kh(t){return bi(t)}class Eh{get next(){return _u(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(t){this.auth=t,this.observer=null,this.addObserver=pi((t=>this.observer=t))}}function Ih(t,e,n){const i=kh(t);_u(i._canInitEmulator,i,"emulator-config-failed"),_u(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=Ch(e),{host:o,port:a}=function(t){const e=Ch(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:Sh(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:Sh(e)}}}(e),l=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
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
 */()}function Ch(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Sh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class Th{toJSON(){return Nu("not implemented")}_getIdTokenResponse(t){return Nu("not implemented")}_linkToIdToken(t,e){return Nu("not implemented")}_getReauthenticationResolver(t){return Nu("not implemented")}constructor(t,e){this.providerId=t,this.signInMethod=e}}
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
 */async function _h(t,e){return Wu(t,"POST","/v1/accounts:update",e)}
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
class Nh extends Th{static _fromEmailAndPassword(t,e){return new Nh(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Nh(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
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
return async function(t,e){return Vu(t,"POST","/v1/accounts:signInWithPassword",zu(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(t,e){return Vu(t,"POST","/v1/accounts:signInWithEmailLink",zu(t,e))}(t,{email:this._email,oobCode:this._password});default:Iu(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return _h(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return Vu(t,"POST","/v1/accounts:signInWithEmailLink",zu(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:Iu(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}}
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
 */async function Ah(t,e){return Vu(t,"POST","/v1/accounts:signInWithIdp",zu(t,e))}
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
 */class Dh extends Th{static _fromParams(t){const e=new Dh(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Iu("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=bu(e,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Dh(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(t){return Ah(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Ah(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Ah(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=hi(e)}return t}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const Rh={USER_NOT_FOUND:"user-not-found"};
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
class Lh extends Th{static _fromVerification(t,e){return new Lh({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Lh({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return Vu(t,"POST","/v1/accounts:signInWithPhoneNumber",zu(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await Vu(t,"POST","/v1/accounts:signInWithPhoneNumber",zu(t,e));if(n.temporaryProof)throw Xu(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return Vu(t,"POST","/v1/accounts:signInWithPhoneNumber",zu(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),Rh)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new Lh({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(t){super("phone","phone"),this.params=t}}
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
 */class Oh{static parseLink(t){const e=function(t){const e=di(fi(t)).link,n=e?di(fi(e)).deep_link_id:null,i=di(fi(t)).deep_link_id;return(i?di(fi(i)).link:null)||i||n||e||t}(t);try{return new Oh(e)}catch(t){return null}}constructor(t){var e,n,i,r,s,o;const a=di(fi(t)),l=null!==(e=a.apiKey)&&void 0!==e?e:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);_u(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
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
class Mh{static credential(t,e){return Nh._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Oh.parseLink(e);return _u(n,"argument-error"),Nh._fromEmailAndCode(t,n.code,n.tenantId)}constructor(){this.providerId=Mh.PROVIDER_ID}}Mh.PROVIDER_ID="password",Mh.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Mh.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Ph{setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class Bh extends Ph{addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class Fh extends Bh{static credential(t){return Dh._fromParams({providerId:Fh.PROVIDER_ID,signInMethod:Fh.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Fh.credentialFromTaggedObject(t)}static credentialFromError(t){return Fh.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Fh.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("facebook.com")}}Fh.FACEBOOK_SIGN_IN_METHOD="facebook.com",Fh.PROVIDER_ID="facebook.com";
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
class Uh extends Bh{static credential(t,e){return Dh._fromParams({providerId:Uh.PROVIDER_ID,signInMethod:Uh.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Uh.credentialFromTaggedObject(t)}static credentialFromError(t){return Uh.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Uh.credential(e,n)}catch(t){return null}}constructor(){super("google.com"),this.addScope("profile")}}Uh.GOOGLE_SIGN_IN_METHOD="google.com",Uh.PROVIDER_ID="google.com";
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
class jh extends Bh{static credential(t){return Dh._fromParams({providerId:jh.PROVIDER_ID,signInMethod:jh.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return jh.credentialFromTaggedObject(t)}static credentialFromError(t){return jh.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return jh.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("github.com")}}jh.GITHUB_SIGN_IN_METHOD="github.com",jh.PROVIDER_ID="github.com";
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
class zh extends Bh{static credential(t,e){return Dh._fromParams({providerId:zh.PROVIDER_ID,signInMethod:zh.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return zh.credentialFromTaggedObject(t)}static credentialFromError(t){return zh.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return zh.credential(e,n)}catch(t){return null}}constructor(){super("twitter.com")}}zh.TWITTER_SIGN_IN_METHOD="twitter.com",zh.PROVIDER_ID="twitter.com";
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
class Wh{static async _fromIdTokenResponse(t,e,n,i=!1){const r=await ih._fromIdTokenResponse(t,n,i),s=Hh(n);return new Wh({user:r,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=Hh(n);return new Wh({user:t,providerId:i,_tokenResponse:n,operationType:e})}constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}}function Hh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
class Vh extends si{static _fromErrorAndOperation(t,e,n,i){return new Vh(t,e,n,i)}constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Vh.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}}function $h(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Vh._fromErrorAndOperation(t,n,e,i);throw n}))}
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
 */async function qh(t,e,n=!1){const i=await Yu(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wh._forOperation(t,"link",i)}
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
async function Xh(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await Yu(t,$h(i,r,e,t),n);_u(s.idToken,i,"internal-error");const o=Gu(s.idToken);_u(o,i,"internal-error");const{sub:a}=o;return _u(t.uid===a,i,"user-mismatch"),Wh._forOperation(t,r,s)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&Iu(i,"user-mismatch"),t}}
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
 */async function Kh(t,e,n=!1){const i="signIn",r=await $h(t,i,e),s=await Wh._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}new WeakMap;
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
class Jh{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(t,e){this.storageRetriever=t,this.type=e}}
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
 */class Gh extends Jh{forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);yh()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=Zn();return uh(t)||gh(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=bh(),this._shouldAllowMigration=!0}}Gh.type="LOCAL";const Yh=Gh;
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
 */class Qh extends Jh{_addListener(t,e){}_removeListener(t,e){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Qh.type="SESSION";const Zh=Qh;
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
class td{static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new td(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async t=>t(e.origin,r))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function ed(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
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
 */td.receivers=[];class nd{removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const l=ed("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(t){this.target=t,this.handlers=new Set}}
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
 */function id(){return window}
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
function rd(){return void 0!==id().WorkerGlobalScope&&"function"==typeof id().importScripts}class sd{toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}constructor(t){this.request=t}}function od(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function ad(){const t=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains("firebaseLocalStorage")?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new sd(t).toPromise()}(),e(await ad()))}))}))}async function ld(t,e,n){const i=od(t,!0).put({fbase_key:e,value:n});return new sd(i).toPromise()}function cd(t,e){const n=od(t,!0).delete(e);return new sd(n).toPromise()}class ud{async _openDb(){return this.db||(this.db=await ad()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=td._getInstance(rd()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new nd(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ad();return await ld(t,"__sak","1"),await cd(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>ld(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=od(t,!1).get(e),i=await new sd(n).toPromise();return void 0===i?null:i.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>cd(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=od(t,!1).getAll();return new sd(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}ud.type="LOCAL";const hd=ud;
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
 */function dd(t){return new Promise(((e,n)=>{const i=document.createElement("script");
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
var r,s;i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=Cu("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function fd(t){return`__${t}${Math.floor(1e6*Math.random())}`}
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
fd("rcb"),new Pu(3e4,6e4);async function pd(t,e,n){var i;const r=await n.verify();try{let s;if(_u("string"==typeof r,t,"argument-error"),_u("recaptcha"===n.type,t,"argument-error"),s="string"==typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){_u("enroll"===e.type,t,"internal-error");const n=await
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
function(t,e){return Wu(t,"POST","/v2/accounts/mfaEnrollment:start",zu(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{_u("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;_u(n,t,"missing-multi-factor-info");const o=await function(t,e){return Wu(t,"POST","/v2/accounts/mfaSignIn:start",zu(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return Wu(t,"POST","/v1/accounts:sendVerificationCode",zu(t,e))}(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
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
class md{verifyPhoneNumber(t,e){return pd(this.auth,t,bi(e))}static credential(t,e){return Lh._fromVerification(t,e)}static credentialFromResult(t){const e=t;return md.credentialFromTaggedObject(e)}static credentialFromError(t){return md.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Lh._fromTokenResponse(e,n):null}constructor(t){this.providerId=md.PROVIDER_ID,this.auth=kh(t)}}
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
function gd(t,e){return e?Ru(e):(_u(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */md.PROVIDER_ID="phone",md.PHONE_SIGN_IN_METHOD="phone";class yd extends Th{_getIdTokenResponse(t){return Ah(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Ah(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Ah(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}constructor(t){super("custom","custom"),this.params=t}}function bd(t){return Kh(t.auth,new yd(t),t.bypassAuthState)}function vd(t){const{auth:e,user:n}=t;return _u(n,e,"internal-error"),Xh(n,new yd(t),t.bypassAuthState)}async function wd(t){const{auth:e,user:n}=t;return _u(n,e,"internal-error"),qh(n,new yd(t),t.bypassAuthState)}
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
 */class xd{execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return bd;case"linkViaPopup":case"linkViaRedirect":return wd;case"reauthViaPopup":case"reauthViaRedirect":return vd;default:Iu(this.auth,"internal-error")}}resolve(t){Au(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Au(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}}
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
 */const kd=new Pu(2e3,1e4);class Ed extends xd{async executeNotNull(){const t=await this.execute();return _u(t,this.auth,"internal-error"),t}async onExecution(){Au(1===this.filter.length,"Popup operations only handle one event");const t=ed();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(Cu(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(Cu(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ed.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Cu(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,kd.get())};t()}constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Ed.currentPopupAction&&Ed.currentPopupAction.cancel(),Ed.currentPopupAction=this}}Ed.currentPopupAction=null;
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
const Id=new Map;class Cd extends xd{async execute(){let t=Id.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=_d(e),i=Td(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}Id.set(this.auth._key(),t)}return this.bypassAuthState||Id.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}}function Sd(t,e){Id.set(t._key(),e)}function Td(t){return Ru(t._redirectPersistence)}function _d(t){return oh("pendingRedirect",t.config.apiKey,t.name)}
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
 */async function Nd(t,e,n=!1){const i=kh(t),r=gd(i,e),s=new Cd(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}class Ad{registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rd(t);default:return!1}}
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
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Rd(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(Cu(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dd(t))}saveEventToCache(t){this.cachedEventUids.add(Dd(t)),this.lastProcessedEventTime=Date.now()}constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Dd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Rd({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
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
const Ld=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Od=/^https?/;async function Md(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return Wu(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Pd(t))return}catch(t){}Iu(t,"unauthorized-domain")}function Pd(t){const e=Lu(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Od.test(n))return!1;if(Ld.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
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
 */const Bd=new Pu(3e4,6e4);function Fd(){const t=id().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Ud=null;function jd(t){return Ud=Ud||function(t){return new Promise(((e,n)=>{var i,r,s;function o(){Fd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fd(),n(Cu(t,"network-request-failed"))},timeout:Bd.get()})}if(null===(r=null===(i=id().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=id().gapi)||void 0===s?void 0:s.load)){const e=fd("iframefcb");return id()[e]=()=>{gapi.load?o():n(Cu(t,"network-request-failed"))},dd(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Ud=null,t}))}(t),Ud}
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
 */const zd=new Pu(5e3,15e3),Wd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vd(t){const e=t.config;_u(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bu(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,i={apiKey:e.apiKey,appName:t.name,v:"9.16.0"},r=Hd.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${hi(i).slice(1)}`}
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
const $d={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class qd{close(){if(this.window)try{this.window.close()}catch(t){}}constructor(t){this.window=t,this.associatedEvent=null}}function Xd(t,e,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},$d),{width:i.toString(),height:r.toString(),top:s,left:o}),c=Zn().toLowerCase();n&&(a=hh(c)?"_blank":n),ch(c)&&(e=e||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=Zn()){var e;return gh(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(c)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(e||"",a),new qd(null);const h=window.open(e||"",a,u);_u(h,t,"popup-blocked");try{h.focus()}catch(t){}return new qd(h)}function Kd(t,e,n,i,r,s){_u(t.config.authDomain,t,"auth-domain-config-required"),_u(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:"9.16.0",eventId:r};if(e instanceof Ph){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",li(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))o[t]=e}if(e instanceof Bh){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){return t.emulator?Bu(t,"emulator/auth/handler"):`https://${t.authDomain}/__/auth/handler`}
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
 */(t)}?${hi(a).slice(1)}`}const Jd=class{async _openPopup(t,e,n,i){var r;Au(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Xd(t,Kd(t,e,n,Lu(),i),ed())}async _openRedirect(t,e,n,i){var r;return await this._originValidation(t),r=Kd(t,e,n,Lu(),i),id().location.href=r,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(Au(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await jd(t),n=id().gapi;return _u(n,t,"internal-error"),e.open({where:document.body,url:Vd(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wd,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=Cu(t,"network-request-failed"),s=id().setTimeout((()=>{i(r)}),zd.get());function o(){id().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{i(r)}))}))))}(t),n=new Ad(t);return e.register("authEvent",(e=>{_u(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&e(!!r),Iu(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Md(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return bh()||uh()||gh()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zh,this._completeRedirectFn=Nd,this._overrideRedirectResult=Sd}};
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
class Gd{getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){_u(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(t){this.auth=t,this.internalListeners=new Map}}
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
const Yd=Yn("authIdTokenMaxAge")||300;let Qd=null;var Zd;Zd="Browser",Zi(new vi("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((t,n)=>{_u(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),_u(!(null==s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:r,authDomain:s,clientPlatform:Zd,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vh(Zd)},o=new xh(t,n,i);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ru);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(o,e),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),Zi(new vi("auth-internal",(t=>{const e=kh(t.getProvider("auth").getImmediate());return new Gd(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),sr("@firebase/auth","0.21.1",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Zd)),sr("@firebase/auth","0.21.1","esm2017");const tf=ir({apiKey:"AIzaSyDu_G85M-wYSiuscXdqJuMLEmp82iljbIc",authDomain:"js-team-project-6ffd7.firebaseapp.com",projectId:"js-team-project-6ffd7",storageBucket:"js-team-project-6ffd7.appspot.com",messagingSenderId:"837102169225",appId:"1:837102169225:web:58e700b1d2ad7abe772a58",measurementId:"G-5H70WPMMFC"}),ef=(function(t=rr()){const e=tr(t=bi(t),"analytics");e.isInitialized()?e.getImmediate():function(t,e={}){const n=tr(t,"analytics");if(n.isInitialized()){const t=n.getImmediate();if(ci(e,n.getOptions()))return t;throw Gc.create("already-initialized")}n.initialize({options:e})}(t)}(tf),function(t=rr()){const e=tr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=tr(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(ci(n.getOptions(),null!=e?e:{}))return t;Iu(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:Jd,persistence:[hd,Yh,Zh]}),i=Yn("authTokenSyncURL");if(i){const t=(r=i,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>Yd)return;const i=null==e?void 0:e.token;Qd!==i&&(Qd=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(t,e,n){bi(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,i){bi(t).onIdTokenChanged(e,n,i)}(n,(e=>t(e)))}var r;const s=Gn("auth");return s&&Ih(n,`http://${s}`),n}(tf));function nf(){document.querySelectorAll(".news__item").forEach((t=>{JSON.parse(localStorage.getItem("news-added-to-favorite")).find((e=>{t.dataset.id===e.id&&(t.firstElementChild.children[1].firstElementChild.textContent="Remove from favorite",t.firstElementChild.children[1].firstElementChild.classList.remove("news__favorite-btn"),t.firstElementChild.children[1].firstElementChild.classList.add("btn-width"),t.firstElementChild.children[1].lastElementChild.classList.remove("favorite-btn__icon-add"),t.firstElementChild.children[1].lastElementChild.classList.add("favorite-btn__icon-remove"))}))}))}function rf(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function sf(t){return t[t.length-1]}function of(t,...e){return e.forEach((e=>{t.includes(e)||t.push(e)})),t}function af(t,e){return t?t.split(e):[]}function lf(t,e,n){return(void 0===e||t>=e)&&(void 0===n||t<=n)}function cf(t,e,n){return t<e?e:t>n?n:t}function uf(t,e,n={},i=0,r=""){r+=`<${Object.keys(n).reduce(((t,e)=>{let r=n[e];return"function"==typeof r&&(r=r(i)),`${t} ${e}="${r}"`}),t)}></${t}>`;const s=i+1;return s<e?uf(t,e,n,s,r):r}function hf(t){return t.replace(/>\s+/g,">").replace(/\s+</,"<")}function df(t){return new Date(t).setHours(0,0,0,0)}function ff(){return(new Date).setHours(0,0,0,0)}function pf(...t){switch(t.length){case 0:return ff();case 1:return df(t[0])}const e=new Date(0);return e.setFullYear(...t),e.setHours(0,0,0,0)}function mf(t,e){const n=new Date(t);return n.setDate(n.getDate()+e)}function gf(t,e){const n=new Date(t),i=n.getMonth()+e;let r=i%12;r<0&&(r+=12);const s=n.setMonth(i);return n.getMonth()!==r?n.setDate(0):s}function yf(t,e){const n=new Date(t),i=n.getMonth(),r=n.setFullYear(n.getFullYear()+e);return 1===i&&2===n.getMonth()?n.setDate(0):r}function bf(t,e){return(t-e+7)%7}function vf(t,e,n=0){const i=new Date(t).getDay();return mf(t,bf(e,n)-bf(i,n))}function wf(t){const e=vf(t,4,1),n=vf(new Date(e).setMonth(0,4),4,1);return Math.round((e-n)/6048e5)+1}function xf(t,e){const n=new Date(t).getFullYear();return Math.floor(n/e)*e}function kf(t,e,n){if(1!==e&&2!==e)return t;const i=new Date(t);return 1===e?n?i.setMonth(i.getMonth()+1,0):i.setDate(1):n?i.setFullYear(i.getFullYear()+1,0,0):i.setMonth(0,1),i.setHours(0,0,0,0)}console.log(ef),r("eg88A");const Ef=/dd?|DD?|mm?|MM?|yy?(?:yy)?/,If=/[\s!-/:-@[-`{-~年月日]+/;let Cf={};const Sf={y:(t,e)=>new Date(t).setFullYear(parseInt(e,10)),m(t,e,n){const i=new Date(t);let r=parseInt(e,10)-1;if(isNaN(r)){if(!e)return NaN;const t=e.toLowerCase(),i=e=>e.toLowerCase().startsWith(t);if(r=n.monthsShort.findIndex(i),r<0&&(r=n.months.findIndex(i)),r<0)return NaN}return i.setMonth(r),i.getMonth()!==_f(r)?i.setDate(0):i.getTime()},d:(t,e)=>new Date(t).setDate(parseInt(e,10))},Tf={d:t=>t.getDate(),dd:t=>Nf(t.getDate(),2),D:(t,e)=>e.daysShort[t.getDay()],DD:(t,e)=>e.days[t.getDay()],m:t=>t.getMonth()+1,mm:t=>Nf(t.getMonth()+1,2),M:(t,e)=>e.monthsShort[t.getMonth()],MM:(t,e)=>e.months[t.getMonth()],y:t=>t.getFullYear(),yy:t=>Nf(t.getFullYear(),2).slice(-2),yyyy:t=>Nf(t.getFullYear(),4)};function _f(t){return t>-1?t%12:_f(t+12)}function Nf(t,e){return t.toString().padStart(e,"0")}function Af(t){if("string"!=typeof t)throw new Error("Invalid date format.");if(t in Cf)return Cf[t];const e=t.split(Ef),n=t.match(new RegExp(Ef,"g"));if(0===e.length||!n)throw new Error("Invalid date format.");const i=n.map((t=>Tf[t])),r=Object.keys(Sf).reduce(((t,e)=>(n.find((t=>"D"!==t[0]&&t[0].toLowerCase()===e))&&t.push(e),t)),[]);return Cf[t]={parser(t,e){const i=t.split(If).reduce(((t,e,i)=>{if(e.length>0&&n[i]){const r=n[i][0];"M"===r?t.m=e:"D"!==r&&(t[r]=e)}return t}),{});return r.reduce(((t,n)=>{const r=Sf[n](t,i[n],e);return isNaN(r)?t:r}),ff())},formatter:(t,n)=>i.reduce(((i,r,s)=>i+`${e[s]}${r(t,n)}`),"")+sf(e)}}function Df(t,e,n){if(t instanceof Date||"number"==typeof t){const e=df(t);return isNaN(e)?void 0:e}if(t){if("today"===t)return ff();if(e&&e.toValue){const i=e.toValue(t,e,n);return isNaN(i)?void 0:df(i)}return Af(e).parser(t,n)}}function Rf(t,e,n){if(isNaN(t)||!t&&0!==t)return"";const i="number"==typeof t?new Date(t):t;return e.toDisplay?e.toDisplay(i,e,n):Af(e).formatter(i,n)}const Lf=document.createRange();function Of(t){return Lf.createContextualFragment(t)}function Mf(t){return t.parentElement||(t.parentNode instanceof ShadowRoot?t.parentNode.host:void 0)}function Pf(t){return t.getRootNode().activeElement===t}function Bf(t){"none"!==t.style.display&&(t.style.display&&(t.dataset.styleDisplay=t.style.display),t.style.display="none")}function Ff(t){"none"===t.style.display&&(t.dataset.styleDisplay?(t.style.display=t.dataset.styleDisplay,delete t.dataset.styleDisplay):t.style.display="")}function Uf(t){t.firstChild&&(t.removeChild(t.firstChild),Uf(t))}function jf(t,e){Uf(t),e instanceof DocumentFragment?t.appendChild(e):"string"==typeof e?t.appendChild(Of(e)):"function"==typeof e.forEach&&e.forEach((e=>{t.appendChild(e)}))}const zf=new WeakMap,{addEventListener:Wf,removeEventListener:Hf}=EventTarget.prototype;function Vf(t,e){let n=zf.get(t);n||(n=[],zf.set(t,n)),e.forEach((t=>{Wf.call(...t),n.push(t)}))}function $f(t){let e=zf.get(t);e&&(e.forEach((t=>{Hf.call(...t)})),zf.delete(t))}if(!Event.prototype.composedPath){const t=(e,n=[])=>{let i;return n.push(e),e.parentNode?i=e.parentNode:e.host?i=e.host:e.defaultView&&(i=e.defaultView),i?t(i,n):n};Event.prototype.composedPath=function(){return t(this.target)}}function qf(t,e,n){const[i,...r]=t;return e(i)?i:i!==n&&"HTML"!==i.tagName&&0!==r.length?qf(r,e,n):void 0}function Xf(t,e){const n="function"==typeof e?e:t=>t instanceof Element&&t.matches(e);return qf(t.composedPath(),n,t.currentTarget)}const Kf={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM y"}};var Jf={autohide:!1,beforeShowDay:null,beforeShowDecade:null,beforeShowMonth:null,beforeShowYear:null,calendarWeeks:!1,clearBtn:!1,dateDelimiter:",",datesDisabled:[],daysOfWeekDisabled:[],daysOfWeekHighlighted:[],defaultViewDate:void 0,disableTouchKeyboard:!1,format:"mm/dd/yyyy",language:"en",maxDate:null,maxNumberOfDates:1,maxView:3,minDate:null,nextArrow:"»",orientation:"auto",pickLevel:0,prevArrow:"«",showDaysOfWeek:!0,showOnClick:!0,showOnFocus:!0,startView:0,title:"",todayBtn:!1,todayBtnMode:0,todayHighlight:!1,updateOnBlur:!0,weekStart:0};const{language:Gf,format:Yf,weekStart:Qf}=Jf;function Zf(t,e){return t.length<6&&e>=0&&e<7?of(t,e):t}function tp(t){return(t+6)%7}function ep(t,e,n,i){const r=Df(t,e,n);return void 0!==r?r:i}function np(t,e,n=3){const i=parseInt(t,10);return i>=0&&i<=n?i:e}function ip(t,e){const n=Object.assign({},t),i={},r=e.constructor.locales,s=e.rangeSideIndex;let{format:o,language:a,locale:l,maxDate:c,maxView:u,minDate:h,pickLevel:d,startView:f,weekStart:p}=e.config||{};if(n.language){let t;if(n.language!==a&&(r[n.language]?t=n.language:(t=n.language.split("-")[0],void 0===r[t]&&(t=!1))),delete n.language,t){a=i.language=t;const e=l||r[Gf];l=Object.assign({format:Yf,weekStart:Qf},r[Gf]),a!==Gf&&Object.assign(l,r[a]),i.locale=l,o===e.format&&(o=i.format=l.format),p===e.weekStart&&(p=i.weekStart=l.weekStart,i.weekEnd=tp(l.weekStart))}}if(n.format){const t="function"==typeof n.format.toDisplay,e="function"==typeof n.format.toValue,r=Ef.test(n.format);(t&&e||r)&&(o=i.format=n.format),delete n.format}let m=d;void 0!==n.pickLevel&&(m=np(n.pickLevel,2),delete n.pickLevel),m!==d&&(m>d&&(void 0===n.minDate&&(n.minDate=h),void 0===n.maxDate&&(n.maxDate=c)),n.datesDisabled||(n.datesDisabled=[]),d=i.pickLevel=m);let g=h,y=c;if(void 0!==n.minDate){const t=pf(0,0,1);g=null===n.minDate?t:ep(n.minDate,o,l,g),g!==t&&(g=kf(g,d,!1)),delete n.minDate}if(void 0!==n.maxDate&&(y=null===n.maxDate?void 0:ep(n.maxDate,o,l,y),void 0!==y&&(y=kf(y,d,!0)),delete n.maxDate),y<g?(h=i.minDate=y,c=i.maxDate=g):(h!==g&&(h=i.minDate=g),c!==y&&(c=i.maxDate=y)),n.datesDisabled&&(i.datesDisabled=n.datesDisabled.reduce(((t,e)=>{const n=Df(e,o,l);return void 0!==n?of(t,kf(n,d,s)):t}),[]),delete n.datesDisabled),void 0!==n.defaultViewDate){const t=Df(n.defaultViewDate,o,l);void 0!==t&&(i.defaultViewDate=t),delete n.defaultViewDate}if(void 0!==n.weekStart){const t=Number(n.weekStart)%7;isNaN(t)||(p=i.weekStart=t,i.weekEnd=tp(t)),delete n.weekStart}if(n.daysOfWeekDisabled&&(i.daysOfWeekDisabled=n.daysOfWeekDisabled.reduce(Zf,[]),delete n.daysOfWeekDisabled),n.daysOfWeekHighlighted&&(i.daysOfWeekHighlighted=n.daysOfWeekHighlighted.reduce(Zf,[]),delete n.daysOfWeekHighlighted),void 0!==n.maxNumberOfDates){const t=parseInt(n.maxNumberOfDates,10);t>=0&&(i.maxNumberOfDates=t,i.multidate=1!==t),delete n.maxNumberOfDates}n.dateDelimiter&&(i.dateDelimiter=String(n.dateDelimiter),delete n.dateDelimiter);let b=u;void 0!==n.maxView&&(b=np(n.maxView,u),delete n.maxView),b=d>b?d:b,b!==u&&(u=i.maxView=b);let v=f;if(void 0!==n.startView&&(v=np(n.startView,v),delete n.startView),v<d?v=d:v>u&&(v=u),v!==f&&(i.startView=v),n.prevArrow){const t=Of(n.prevArrow);t.childNodes.length>0&&(i.prevArrow=t.childNodes),delete n.prevArrow}if(n.nextArrow){const t=Of(n.nextArrow);t.childNodes.length>0&&(i.nextArrow=t.childNodes),delete n.nextArrow}if(void 0!==n.disableTouchKeyboard&&(i.disableTouchKeyboard="ontouchstart"in document&&!!n.disableTouchKeyboard,delete n.disableTouchKeyboard),n.orientation){const t=n.orientation.toLowerCase().split(/\s+/g);i.orientation={x:t.find((t=>"left"===t||"right"===t))||"auto",y:t.find((t=>"top"===t||"bottom"===t))||"auto"},delete n.orientation}if(void 0!==n.todayBtnMode){switch(n.todayBtnMode){case 0:case 1:i.todayBtnMode=n.todayBtnMode}delete n.todayBtnMode}return Object.keys(n).forEach((t=>{void 0!==n[t]&&rf(Jf,t)&&(i[t]=n[t])})),i}var rp=hf('<div class="datepicker">\n  <div class="datepicker-picker">\n    <div class="datepicker-header">\n      <div class="datepicker-title"></div>\n      <div class="datepicker-controls">\n        <button type="button" class="%buttonClass% prev-btn"></button>\n        <button type="button" class="%buttonClass% view-switch"></button>\n        <button type="button" class="%buttonClass% next-btn"></button>\n      </div>\n    </div>\n    <div class="datepicker-main"></div>\n    <div class="datepicker-footer">\n      <div class="datepicker-controls">\n        <button type="button" class="%buttonClass% today-btn"></button>\n        <button type="button" class="%buttonClass% clear-btn"></button>\n      </div>\n    </div>\n  </div>\n</div>');var sp=hf(`<div class="days">\n  <div class="days-of-week">${uf("span",7,{class:"dow"})}</div>\n  <div class="datepicker-grid">${uf("span",42)}</div>\n</div>`);var op=hf(`<div class="calendar-weeks">\n  <div class="days-of-week"><span class="dow"></span></div>\n  <div class="weeks">${uf("span",6,{class:"week"})}</div>\n</div>`);class ap{init(t){void 0!==t.pickLevel&&(this.isMinView=this.id===t.pickLevel),this.setOptions(t),this.updateFocus(),this.updateSelection()}performBeforeHook(t,e,n){let i=this.beforeShow(new Date(n));switch(typeof i){case"boolean":i={enabled:i};break;case"string":i={classes:i}}if(i){if(!1===i.enabled&&(t.classList.add("disabled"),of(this.disabled,e)),i.classes){const n=i.classes.split(/\s+/);t.classList.add(...n),n.includes("disabled")&&of(this.disabled,e)}i.content&&jf(t,i.content)}}constructor(t,e){Object.assign(this,e,{picker:t,element:Of('<div class="datepicker-view"></div>').firstChild,selected:[]}),this.init(this.picker.datepicker.config)}}class lp extends ap{init(t,e=!0){if(e){const t=Of(sp).firstChild;this.dow=t.firstChild,this.grid=t.lastChild,this.element.appendChild(t)}super.init(t)}setOptions(t){let e;if(rf(t,"minDate")&&(this.minDate=t.minDate),rf(t,"maxDate")&&(this.maxDate=t.maxDate),t.datesDisabled&&(this.datesDisabled=t.datesDisabled),t.daysOfWeekDisabled&&(this.daysOfWeekDisabled=t.daysOfWeekDisabled,e=!0),t.daysOfWeekHighlighted&&(this.daysOfWeekHighlighted=t.daysOfWeekHighlighted),void 0!==t.todayHighlight&&(this.todayHighlight=t.todayHighlight),void 0!==t.weekStart&&(this.weekStart=t.weekStart,this.weekEnd=t.weekEnd,e=!0),t.locale){const n=this.locale=t.locale;this.dayNames=n.daysMin,this.switchLabelFormat=n.titleFormat,e=!0}if(void 0!==t.beforeShowDay&&(this.beforeShow="function"==typeof t.beforeShowDay?t.beforeShowDay:void 0),void 0!==t.calendarWeeks)if(t.calendarWeeks&&!this.calendarWeeks){const t=Of(op).firstChild;this.calendarWeeks={element:t,dow:t.firstChild,weeks:t.lastChild},this.element.insertBefore(t,this.element.firstChild)}else this.calendarWeeks&&!t.calendarWeeks&&(this.element.removeChild(this.calendarWeeks.element),this.calendarWeeks=null);void 0!==t.showDaysOfWeek&&(t.showDaysOfWeek?(Ff(this.dow),this.calendarWeeks&&Ff(this.calendarWeeks.dow)):(Bf(this.dow),this.calendarWeeks&&Bf(this.calendarWeeks.dow))),e&&Array.from(this.dow.children).forEach(((t,e)=>{const n=(this.weekStart+e)%7;t.textContent=this.dayNames[n],t.className=this.daysOfWeekDisabled.includes(n)?"dow disabled":"dow"}))}updateFocus(){const t=new Date(this.picker.viewDate),e=t.getFullYear(),n=t.getMonth(),i=pf(e,n,1),r=vf(i,this.weekStart,this.weekStart);this.first=i,this.last=pf(e,n+1,0),this.start=r,this.focused=this.picker.viewDate}updateSelection(){const{dates:t,rangepicker:e}=this.picker.datepicker;this.selected=t,e&&(this.range=e.dates)}render(){this.today=this.todayHighlight?ff():void 0,this.disabled=[...this.datesDisabled];const t=Rf(this.focused,this.switchLabelFormat,this.locale);if(this.picker.setViewSwitchLabel(t),this.picker.setPrevBtnDisabled(this.first<=this.minDate),this.picker.setNextBtnDisabled(this.last>=this.maxDate),this.calendarWeeks){const t=vf(this.first,1,1);Array.from(this.calendarWeeks.weeks.children).forEach(((e,n)=>{e.textContent=wf(mf(t,7*n))}))}Array.from(this.grid.children).forEach(((t,e)=>{const n=t.classList,i=mf(this.start,e),r=new Date(i),s=r.getDay();if(t.className=`datepicker-cell ${this.cellClass}`,t.dataset.date=i,t.textContent=r.getDate(),i<this.first?n.add("prev"):i>this.last&&n.add("next"),this.today===i&&n.add("today"),(i<this.minDate||i>this.maxDate||this.disabled.includes(i))&&n.add("disabled"),this.daysOfWeekDisabled.includes(s)&&(n.add("disabled"),of(this.disabled,i)),this.daysOfWeekHighlighted.includes(s)&&n.add("highlighted"),this.range){const[t,e]=this.range;i>t&&i<e&&n.add("range"),i===t&&n.add("range-start"),i===e&&n.add("range-end")}this.selected.includes(i)&&n.add("selected"),i===this.focused&&n.add("focused"),this.beforeShow&&this.performBeforeHook(t,i,i)}))}refresh(){const[t,e]=this.range||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach((t=>{t.classList.remove("range","range-start","range-end","selected","focused")})),Array.from(this.grid.children).forEach((n=>{const i=Number(n.dataset.date),r=n.classList;i>t&&i<e&&r.add("range"),i===t&&r.add("range-start"),i===e&&r.add("range-end"),this.selected.includes(i)&&r.add("selected"),i===this.focused&&r.add("focused")}))}refreshFocus(){const t=Math.round((this.focused-this.start)/864e5);this.grid.querySelectorAll(".focused").forEach((t=>{t.classList.remove("focused")})),this.grid.children[t].classList.add("focused")}constructor(t){super(t,{id:0,name:"days",cellClass:"day"})}}function cp(t,e){if(!t||!t[0]||!t[1])return;const[[n,i],[r,s]]=t;return n>e||r<e?void 0:[n===e?i:-1,r===e?s:12]}class up extends ap{init(t,e=!0){e&&(this.grid=this.element,this.element.classList.add("months","datepicker-grid"),this.grid.appendChild(Of(uf("span",12,{"data-month":t=>t})))),super.init(t)}setOptions(t){if(t.locale&&(this.monthNames=t.locale.monthsShort),rf(t,"minDate"))if(void 0===t.minDate)this.minYear=this.minMonth=this.minDate=void 0;else{const e=new Date(t.minDate);this.minYear=e.getFullYear(),this.minMonth=e.getMonth(),this.minDate=e.setDate(1)}if(rf(t,"maxDate"))if(void 0===t.maxDate)this.maxYear=this.maxMonth=this.maxDate=void 0;else{const e=new Date(t.maxDate);this.maxYear=e.getFullYear(),this.maxMonth=e.getMonth(),this.maxDate=pf(this.maxYear,this.maxMonth+1,0)}this.isMinView?t.datesDisabled&&(this.datesDisabled=t.datesDisabled):this.datesDisabled=[],void 0!==t.beforeShowMonth&&(this.beforeShow="function"==typeof t.beforeShowMonth?t.beforeShowMonth:void 0)}updateFocus(){const t=new Date(this.picker.viewDate);this.year=t.getFullYear(),this.focused=t.getMonth()}updateSelection(){const{dates:t,rangepicker:e}=this.picker.datepicker;this.selected=t.reduce(((t,e)=>{const n=new Date(e),i=n.getFullYear(),r=n.getMonth();return void 0===t[i]?t[i]=[r]:of(t[i],r),t}),{}),e&&e.dates&&(this.range=e.dates.map((t=>{const e=new Date(t);return isNaN(e)?void 0:[e.getFullYear(),e.getMonth()]})))}render(){this.disabled=this.datesDisabled.reduce(((t,e)=>{const n=new Date(e);return this.year===n.getFullYear()&&t.push(n.getMonth()),t}),[]),this.picker.setViewSwitchLabel(this.year),this.picker.setPrevBtnDisabled(this.year<=this.minYear),this.picker.setNextBtnDisabled(this.year>=this.maxYear);const t=this.selected[this.year]||[],e=this.year<this.minYear||this.year>this.maxYear,n=this.year===this.minYear,i=this.year===this.maxYear,r=cp(this.range,this.year);Array.from(this.grid.children).forEach(((s,o)=>{const a=s.classList,l=pf(this.year,o,1);if(s.className=`datepicker-cell ${this.cellClass}`,this.isMinView&&(s.dataset.date=l),s.textContent=this.monthNames[o],(e||n&&o<this.minMonth||i&&o>this.maxMonth||this.disabled.includes(o))&&a.add("disabled"),r){const[t,e]=r;o>t&&o<e&&a.add("range"),o===t&&a.add("range-start"),o===e&&a.add("range-end")}t.includes(o)&&a.add("selected"),o===this.focused&&a.add("focused"),this.beforeShow&&this.performBeforeHook(s,o,l)}))}refresh(){const t=this.selected[this.year]||[],[e,n]=cp(this.range,this.year)||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach((t=>{t.classList.remove("range","range-start","range-end","selected","focused")})),Array.from(this.grid.children).forEach(((i,r)=>{const s=i.classList;r>e&&r<n&&s.add("range"),r===e&&s.add("range-start"),r===n&&s.add("range-end"),t.includes(r)&&s.add("selected"),r===this.focused&&s.add("focused")}))}refreshFocus(){this.grid.querySelectorAll(".focused").forEach((t=>{t.classList.remove("focused")})),this.grid.children[this.focused].classList.add("focused")}constructor(t){super(t,{id:1,name:"months",cellClass:"month"})}}class hp extends ap{init(t,e=!0){var n;e&&(this.navStep=10*this.step,this.beforeShowOption=`beforeShow${n=this.cellClass,[...n].reduce(((t,e,n)=>t+(n?e:e.toUpperCase())),"")}`,this.grid=this.element,this.element.classList.add(this.name,"datepicker-grid"),this.grid.appendChild(Of(uf("span",12)))),super.init(t)}setOptions(t){if(rf(t,"minDate")&&(void 0===t.minDate?this.minYear=this.minDate=void 0:(this.minYear=xf(t.minDate,this.step),this.minDate=pf(this.minYear,0,1))),rf(t,"maxDate")&&(void 0===t.maxDate?this.maxYear=this.maxDate=void 0:(this.maxYear=xf(t.maxDate,this.step),this.maxDate=pf(this.maxYear,11,31))),this.isMinView?t.datesDisabled&&(this.datesDisabled=t.datesDisabled):this.datesDisabled=[],void 0!==t[this.beforeShowOption]){const e=t[this.beforeShowOption];this.beforeShow="function"==typeof e?e:void 0}}updateFocus(){const t=new Date(this.picker.viewDate),e=xf(t,this.navStep),n=e+9*this.step;this.first=e,this.last=n,this.start=e-this.step,this.focused=xf(t,this.step)}updateSelection(){const{dates:t,rangepicker:e}=this.picker.datepicker;this.selected=t.reduce(((t,e)=>of(t,xf(e,this.step))),[]),e&&e.dates&&(this.range=e.dates.map((t=>{if(void 0!==t)return xf(t,this.step)})))}render(){this.disabled=this.datesDisabled.map((t=>new Date(t).getFullYear())),this.picker.setViewSwitchLabel(`${this.first}-${this.last}`),this.picker.setPrevBtnDisabled(this.first<=this.minYear),this.picker.setNextBtnDisabled(this.last>=this.maxYear),Array.from(this.grid.children).forEach(((t,e)=>{const n=t.classList,i=this.start+e*this.step,r=pf(i,0,1);if(t.className=`datepicker-cell ${this.cellClass}`,this.isMinView&&(t.dataset.date=r),t.textContent=t.dataset.year=i,0===e?n.add("prev"):11===e&&n.add("next"),(i<this.minYear||i>this.maxYear||this.disabled.includes(i))&&n.add("disabled"),this.range){const[t,e]=this.range;i>t&&i<e&&n.add("range"),i===t&&n.add("range-start"),i===e&&n.add("range-end")}this.selected.includes(i)&&n.add("selected"),i===this.focused&&n.add("focused"),this.beforeShow&&this.performBeforeHook(t,i,r)}))}refresh(){const[t,e]=this.range||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach((t=>{t.classList.remove("range","range-start","range-end","selected","focused")})),Array.from(this.grid.children).forEach((n=>{const i=Number(n.textContent),r=n.classList;i>t&&i<e&&r.add("range"),i===t&&r.add("range-start"),i===e&&r.add("range-end"),this.selected.includes(i)&&r.add("selected"),i===this.focused&&r.add("focused")}))}refreshFocus(){const t=Math.round((this.focused-this.start)/this.step);this.grid.querySelectorAll(".focused").forEach((t=>{t.classList.remove("focused")})),this.grid.children[t].classList.add("focused")}constructor(t,e){super(t,e)}}function dp(t,e){const n={date:t.getDate(),viewDate:new Date(t.picker.viewDate),viewId:t.picker.currentView.id,datepicker:t};t.element.dispatchEvent(new CustomEvent(e,{detail:n}))}function fp(t,e){const{minDate:n,maxDate:i}=t.config,{currentView:r,viewDate:s}=t.picker;let o;switch(r.id){case 0:o=gf(s,e);break;case 1:o=yf(s,e);break;default:o=yf(s,e*r.navStep)}o=cf(o,n,i),t.picker.changeFocus(o).render()}function pp(t){const e=t.picker.currentView.id;e!==t.config.maxView&&t.picker.changeView(e+1).render()}function mp(t){t.config.updateOnBlur?t.update({revert:!0}):t.refresh("input"),t.hide()}function gp(t,e){const n=t.picker,i=new Date(n.viewDate),r=n.currentView.id,s=1===r?gf(i,e-i.getMonth()):yf(i,e-i.getFullYear());n.changeFocus(s).changeView(r-1).render()}function yp(t){const e=t.picker,n=ff();if(1===t.config.todayBtnMode){if(t.config.autohide)return void t.setDate(n);t.setDate(n,{render:!1}),e.update()}e.viewDate!==n&&e.changeFocus(n),e.changeView(0).render()}function bp(t){t.setDate({clear:!0})}function vp(t){pp(t)}function wp(t){fp(t,-1)}function xp(t){fp(t,1)}function kp(t,e){const n=Xf(e,".datepicker-cell");if(!n||n.classList.contains("disabled"))return;const{id:i,isMinView:r}=t.picker.currentView;r?t.setDate(Number(n.dataset.date)):gp(t,Number(1===i?n.dataset.month:n.dataset.year))}function Ep(t){t.preventDefault()}const Ip=["left","top","right","bottom"].reduce(((t,e)=>(t[e]=`datepicker-orient-${e}`,t)),{}),Cp=t=>t?`${t}px`:t;function Sp(t,e){if(void 0!==e.title&&(e.title?(t.controls.title.textContent=e.title,Ff(t.controls.title)):(t.controls.title.textContent="",Bf(t.controls.title))),e.prevArrow){const n=t.controls.prevBtn;Uf(n),e.prevArrow.forEach((t=>{n.appendChild(t.cloneNode(!0))}))}if(e.nextArrow){const n=t.controls.nextBtn;Uf(n),e.nextArrow.forEach((t=>{n.appendChild(t.cloneNode(!0))}))}if(e.locale&&(t.controls.todayBtn.textContent=e.locale.today,t.controls.clearBtn.textContent=e.locale.clear),void 0!==e.todayBtn&&(e.todayBtn?Ff(t.controls.todayBtn):Bf(t.controls.todayBtn)),rf(e,"minDate")||rf(e,"maxDate")){const{minDate:e,maxDate:n}=t.datepicker.config;t.controls.todayBtn.disabled=!lf(ff(),e,n)}void 0!==e.clearBtn&&(e.clearBtn?Ff(t.controls.clearBtn):Bf(t.controls.clearBtn))}function Tp(t){const{dates:e,config:n}=t;return cf(e.length>0?sf(e):n.defaultViewDate,n.minDate,n.maxDate)}function _p(t,e){const n=new Date(t.viewDate),i=new Date(e),{id:r,year:s,first:o,last:a}=t.currentView,l=i.getFullYear();switch(t.viewDate=e,l!==n.getFullYear()&&dp(t.datepicker,"changeYear"),i.getMonth()!==n.getMonth()&&dp(t.datepicker,"changeMonth"),r){case 0:return e<o||e>a;case 1:return l!==s;default:return l<o||l>a}}function Np(t){return window.getComputedStyle(t).direction}function Ap(t){const e=Mf(t);if(e!==document.body&&e)return"visible"!==window.getComputedStyle(e).overflow?e:Ap(e)}class Dp{setOptions(t){Sp(this,t),this.views.forEach((e=>{e.init(t,!1)})),this.currentView.render()}detach(){this.element.remove()}show(){if(this.active)return;const{datepicker:t,element:e}=this;if(t.inline)e.classList.add("active");else{const n=Np(t.inputField);n!==Np(Mf(e))?e.dir=n:e.dir&&e.removeAttribute("dir"),e.style.visiblity="hidden",e.classList.add("active"),this.place(),e.style.visiblity="",t.config.disableTouchKeyboard&&t.inputField.blur()}this.active=!0,dp(t,"show")}hide(){this.active&&(this.datepicker.exitEditMode(),this.element.classList.remove("active"),this.active=!1,dp(this.datepicker,"hide"))}place(){const{classList:t,offsetParent:e,style:n}=this.element,{config:i,inputField:r}=this.datepicker,{width:s,height:o}=this.element.getBoundingClientRect(),{left:a,top:l,right:c,bottom:u,width:h,height:d}=r.getBoundingClientRect();let{x:f,y:p}=i.orientation,m=a,g=l;if(e!==document.body&&e){const t=e.getBoundingClientRect();m-=t.left-e.scrollLeft,g-=t.top-e.scrollTop}else m+=window.scrollX,g+=window.scrollY;const y=Ap(r);let b=0,v=0,{clientWidth:w,clientHeight:x}=document.documentElement;if(y){const t=y.getBoundingClientRect();t.top>0&&(v=t.top),t.left>0&&(b=t.left),t.right<w&&(w=t.right),t.bottom<x&&(x=t.bottom)}let k=0;"auto"===f&&(a<b?(f="left",k=b-a):a+s>w?(f="right",w<c&&(k=w-c)):f="rtl"===Np(r)?c-s<b?"left":"right":"left"),"right"===f&&(m+=h-s),m+=k,"auto"===p&&(p=l-o>v&&u+o>x?"top":"bottom"),"top"===p?g-=o:g+=d,t.remove(...Object.values(Ip)),t.add(Ip[f],Ip[p]),n.left=Cp(m),n.top=Cp(g)}setViewSwitchLabel(t){this.controls.viewSwitch.textContent=t}setPrevBtnDisabled(t){this.controls.prevBtn.disabled=t}setNextBtnDisabled(t){this.controls.nextBtn.disabled=t}changeView(t){const e=this.currentView,n=this.views[t];return n.id!==e.id&&(this.currentView=n,this._renderMethod="render",dp(this.datepicker,"changeView"),this.main.replaceChild(n.element,e.element)),this}changeFocus(t){return this._renderMethod=_p(this,t)?"render":"refreshFocus",this.views.forEach((t=>{t.updateFocus()})),this}update(){const t=Tp(this.datepicker);return this._renderMethod=_p(this,t)?"render":"refresh",this.views.forEach((t=>{t.updateFocus(),t.updateSelection()})),this}render(t=!0){const e=t&&this._renderMethod||"render";delete this._renderMethod,this.currentView[e]()}constructor(t){const{config:e}=this.datepicker=t,n=rp.replace(/%buttonClass%/g,e.buttonClass),i=this.element=Of(n).firstChild,[r,s,o]=i.firstChild.children,a=r.firstElementChild,[l,c,u]=r.lastElementChild.children,[h,d]=o.firstChild.children,f={title:a,prevBtn:l,viewSwitch:c,nextBtn:u,todayBtn:h,clearBtn:d};this.main=s,this.controls=f;const p=t.inline?"inline":"dropdown";i.classList.add(`datepicker-${p}`),Sp(this,e),this.viewDate=Tp(t),Vf(t,[[i,"mousedown",Ep],[s,"click",kp.bind(null,t)],[f.viewSwitch,"click",vp.bind(null,t)],[f.prevBtn,"click",wp.bind(null,t)],[f.nextBtn,"click",xp.bind(null,t)],[f.todayBtn,"click",yp.bind(null,t)],[f.clearBtn,"click",bp.bind(null,t)]]),this.views=[new lp(this),new up(this),new hp(this,{id:2,name:"years",cellClass:"year",step:1}),new hp(this,{id:3,name:"decades",cellClass:"decade",step:10})],this.currentView=this.views[e.startView],this.currentView.render(),this.main.appendChild(this.currentView.element),e.container?e.container.appendChild(this.element):t.inputField.after(this.element)}}function Rp(t,e,n,i,r,s){if(lf(t,r,s)){if(i(t)){return Rp(e(t,n),e,n,i,r,s)}return t}}function Lp(t,e,n,i){const r=t.picker,s=r.currentView,o=s.step||1;let a,l,c=r.viewDate;switch(s.id){case 0:c=i?mf(c,7*n):e.ctrlKey||e.metaKey?yf(c,n):mf(c,n),a=mf,l=t=>s.disabled.includes(t);break;case 1:c=gf(c,i?4*n:n),a=gf,l=t=>{const e=new Date(t),{year:n,disabled:i}=s;return e.getFullYear()===n&&i.includes(e.getMonth())};break;default:c=yf(c,n*(i?4:1)*o),a=yf,l=t=>s.disabled.includes(xf(t,o))}c=Rp(c,a,n<0?-o:o,l,s.minDate,s.maxDate),void 0!==c&&r.changeFocus(c).render()}function Op(t,e){const n=e.key;if("Tab"===n)return void mp(t);const i=t.picker,{id:r,isMinView:s}=i.currentView;if(i.active){if(t.editMode)return void("Enter"===n?t.exitEditMode({update:!0,autohide:t.config.autohide}):"Escape"===n&&i.hide());if("ArrowLeft"===n)if(e.ctrlKey||e.metaKey)fp(t,-1);else{if(e.shiftKey)return void t.enterEditMode();Lp(t,e,-1,!1)}else if("ArrowRight"===n)if(e.ctrlKey||e.metaKey)fp(t,1);else{if(e.shiftKey)return void t.enterEditMode();Lp(t,e,1,!1)}else if("ArrowUp"===n)if(e.ctrlKey||e.metaKey)pp(t);else{if(e.shiftKey)return void t.enterEditMode();Lp(t,e,-1,!0)}else if("ArrowDown"===n){if(e.shiftKey&&!e.ctrlKey&&!e.metaKey)return void t.enterEditMode();Lp(t,e,1,!0)}else{if("Enter"!==n)return void("Escape"===n?i.hide():"Backspace"!==n&&"Delete"!==n&&(1!==n.length||e.ctrlKey||e.metaKey)||t.enterEditMode());if(s)return void t.setDate(i.viewDate);i.changeView(r-1).render()}}else{if("ArrowDown"!==n)return void("Enter"===n?t.update():"Escape"===n&&i.show());i.show()}e.preventDefault()}function Mp(t){t.config.showOnFocus&&!t._showing&&t.show()}function Pp(t,e){const n=e.target;(t.picker.active||t.config.showOnClick)&&(n._active=Pf(n),n._clicking=setTimeout((()=>{delete n._active,delete n._clicking}),2e3))}function Bp(t,e){const n=e.target;n._clicking&&(clearTimeout(n._clicking),delete n._clicking,n._active&&t.enterEditMode(),delete n._active,t.config.showOnClick&&t.show())}function Fp(t,e){e.clipboardData.types.includes("text/plain")&&t.enterEditMode()}function Up(t,e){const{element:n,picker:i}=t;if(!i.active&&!Pf(n))return;const r=i.element;Xf(e,(t=>t===n||t===r))||mp(t)}function jp(t,e){return t.map((t=>Rf(t,e.format,e.locale))).join(e.dateDelimiter)}function zp(t,e,n=!1){const{config:i,dates:r,rangeSideIndex:s}=t;if(0===e.length)return n?[]:void 0;let o=e.reduce(((t,e)=>{let n=Df(e,i.format,i.locale);return void 0===n||(n=kf(n,i.pickLevel,s),!lf(n,i.minDate,i.maxDate)||t.includes(n)||i.datesDisabled.includes(n)||!(i.pickLevel>0)&&i.daysOfWeekDisabled.includes(new Date(n).getDay())||t.push(n)),t}),[]);return 0!==o.length?(i.multidate&&!n&&(o=o.reduce(((t,e)=>(r.includes(e)||t.push(e),t)),r.filter((t=>!o.includes(t))))),i.maxNumberOfDates&&o.length>i.maxNumberOfDates?o.slice(-1*i.maxNumberOfDates):o):void 0}function Wp(t,e=3,n=!0){const{config:i,picker:r,inputField:s}=t;if(2&e){const t=r.active?i.pickLevel:i.startView;r.update().changeView(t).render(n)}1&e&&s&&(s.value=jp(t.dates,i))}function Hp(t,e,n){let{clear:i,render:r,autohide:s,revert:o}=n;void 0===r&&(r=!0),r?void 0===s&&(s=t.config.autohide):s=!1;const a=zp(t,e,i);(a||o)&&(a&&a.toString()!==t.dates.toString()?(t.dates=a,Wp(t,r?3:1),dp(t,"changeDate")):Wp(t,1),s&&t.hide())}class Vp{static formatDate(t,e,n){return Rf(t,e,n&&Kf[n]||Kf.en)}static parseDate(t,e,n){return Df(t,e,n&&Kf[n]||Kf.en)}static get locales(){return Kf}get active(){return!(!this.picker||!this.picker.active)}get pickerElement(){return this.picker?this.picker.element:void 0}setOptions(t){const e=this.picker,n=ip(t,this);Object.assign(this._options,t),Object.assign(this.config,n),e.setOptions(n),Wp(this,3)}show(){if(this.inputField){if(this.inputField.disabled)return;Pf(this.inputField)||this.config.disableTouchKeyboard||(this._showing=!0,this.inputField.focus(),delete this._showing)}this.picker.show()}hide(){this.inline||(this.picker.hide(),this.picker.update().changeView(this.config.startView).render())}destroy(){return this.hide(),$f(this),this.picker.detach(),this.inline||this.inputField.classList.remove("datepicker-input"),delete this.element.datepicker,this}getDate(t){const e=t?e=>Rf(e,t,this.config.locale):t=>new Date(t);return this.config.multidate?this.dates.map(e):this.dates.length>0?e(this.dates[0]):void 0}setDate(...t){const e=[...t],n={},i=sf(t);"object"!=typeof i||Array.isArray(i)||i instanceof Date||!i||Object.assign(n,e.pop());Hp(this,Array.isArray(e[0])?e[0]:e,n)}update(t){if(this.inline)return;const e=Object.assign(t||{},{clear:!0,render:!0});Hp(this,af(this.inputField.value,this.config.dateDelimiter),e)}refresh(t,e=!1){let n;t&&"string"!=typeof t&&(e=t,t=void 0),n="picker"===t?2:"input"===t?1:3,Wp(this,n,!e)}enterEditMode(){this.inline||!this.picker.active||this.editMode||(this.editMode=!0,this.inputField.classList.add("in-edit"))}exitEditMode(t){if(this.inline||!this.editMode)return;const e=Object.assign({update:!1},t);delete this.editMode,this.inputField.classList.remove("in-edit"),e.update&&this.update(e)}constructor(t,e={},n){t.datepicker=this,this.element=t;const i=this.config=Object.assign({buttonClass:e.buttonClass&&String(e.buttonClass)||"button",container:null,defaultViewDate:ff(),maxDate:void 0,minDate:void 0},ip(Jf,this)),r=this.inline="INPUT"!==t.tagName;let s,o;if(r?i.container=t:(e.container&&(i.container=e.container instanceof HTMLElement?e.container:document.querySelector(e.container)),s=this.inputField=t,s.classList.add("datepicker-input")),n){const t=n.inputs.indexOf(s),e=n.datepickers;if(t<0||t>1||!Array.isArray(e))throw Error("Invalid rangepicker object.");e[t]=this,Object.defineProperty(this,"rangepicker",{get:()=>n}),Object.defineProperty(this,"rangeSideIndex",{get:()=>t})}this._options=e,Object.assign(i,ip(e,this)),r?(o=af(t.dataset.date,i.dateDelimiter),delete t.dataset.date):o=af(s.value,i.dateDelimiter),this.dates=[];const a=zp(this,o);a&&a.length>0&&(this.dates=a),s&&(s.value=jp(this.dates,i));const l=this.picker=new Dp(this);if(r)this.show();else{const t=Up.bind(null,this);Vf(this,[[s,"keydown",Op.bind(null,this)],[s,"focus",Mp.bind(null,this)],[s,"mousedown",Pp.bind(null,this)],[s,"click",Bp.bind(null,this)],[s,"paste",Fp.bind(null,this)],[document,"mousedown",t],[document,"touchstart",t],[window,"resize",l.place.bind(l)]])}}}const $p=document.querySelector(".calendar__btn"),qp=new Vp($p,{weekStart:1,defaultViewDate:new Date,format:"dd/mm/yyyy"});var Xp;function Kp(t){return qp.getDate(t)}Xp=new Date,qp.setDate(Xp);document.querySelector("#pagination");var Jp={code:"",Extend:function(t){window.innerWidth<768?(t=t||{},Jp.size=t.size||0,Jp.page=t.page||1,Jp.step=t.step||0):(t=t||{},Jp.size=t.size||0,Jp.page=t.page||1,Jp.step=t.step||1)},Add:function(t,e){for(var n=t;n<e;n++)Jp.code+="<a>"+n+"</a>"},Last:function(){Jp.code+="<i>...</i><a>"+Jp.size+"</a>"},First:function(){1!==Jp.page&&(Jp.code+="<a>1</a><i>...</i>")},Click:function(){Jp.page=+this.innerHTML,Jp.Start()},Prev:function(){Jp.page--,Jp.page<1&&(Jp.page=1),Jp.Start()},Next:function(){Jp.page++,Jp.page>Jp.size&&(Jp.page=Jp.size),Jp.Start()},Bind:function(){for(var t=Jp.e.getElementsByTagName("a"),e=0;e<t.length;e++)+t[e].innerHTML===Jp.page&&(t[e].className="current"),t[e].addEventListener("click",Jp.Click,!1)},Finish:function(){Jp.e.innerHTML=Jp.code,Jp.code="",Jp.Bind()},Start:function(){window.innerWidth<768?(Jp.size<2*Jp.step+6?Jp.Add(1,Jp.size+1):Jp.page<2*Jp.step+1?(Jp.Add(1,2*Jp.step+2),Jp.Last()):Jp.page>Jp.size-2*Jp.step?(Jp.First(),Jp.Add(Jp.size-2*Jp.step,Jp.size+1)):(Jp.First(),Jp.Add(Jp.page-Jp.step+1,Jp.page+Jp.step),Jp.Last()),Jp.Finish()):(Jp.size<2*Jp.step+6?Jp.Add(1,Jp.size+1):Jp.page<2*Jp.step+1?(Jp.Add(1,2*Jp.step+1),Jp.Last()):Jp.page>Jp.size-2*Jp.step?(Jp.First(),Jp.Add(Jp.size-2*Jp.step+1,Jp.size+1)):(Jp.First(),Jp.Add(Jp.page-Jp.step+1,Jp.page+Jp.step),Jp.Last()),Jp.Finish())},Buttons:function(t){var e=t.getElementsByTagName("a");e[0].addEventListener("click",Jp.Prev,!1),e[1].addEventListener("click",Jp.Next,!1)},Create:function(t){t.innerHTML=['<a class="arr"> < Prew </a>',"<span></span>",'<a class="arr"> Next > </a>'].join(""),Jp.e=t.getElementsByTagName("span")[0],Jp.Buttons(t)},Init:function(t,e){Jp.Extend(e),Jp.Create(t),Jp.Start()}},Gp=function(t){window.innerWidth<768?Jp.Init(document.getElementById("pagination"),{size:t,page:1,step:1}):Jp.Init(document.getElementById("pagination"),{size:t,page:1,step:2})};function Yp(t){const e={noNewsSection:document.querySelector(".no-news"),newsSection:document.querySelector(".news"),pagination:document.querySelector("#pagination")};0===t.length?(e.pagination.classList.add("is-hidden"),e.noNewsSection.classList.remove("is-hidden"),e.newsSection.classList.add("is-hidden")):(e.noNewsSection.classList.add("is-hidden"),e.newsSection.classList.remove("is-hidden"),e.pagination.classList.remove("is-hidden"))}var Qp=r("fKrXO");function Zp(t){const e=Qp.alreadyRead.getJsonFromLocalStorage("NewsFromHome"),n=Qp.alreadyRead.dataFromLocalStorage(e);null!==n?(Qp.alreadyRead.newsArr=[...n,...t],localStorage.setItem("NewsFromHome",JSON.stringify(Qp.alreadyRead.newsArr))):localStorage.setItem("NewsFromHome",JSON.stringify(t))}const tm={newsList:document.querySelector(".news__list")};!function(t){$p.addEventListener("changeDate",(e=>{qp.hide(),t(e)}))}((t=>{let e;const n=Kp("yyyymmdd"),i=new Date(Kp("yyyy-mm-dd"));Date.now()<=i.getTime()?En.Notify.warning("You can`t see into the future, it`s a pity!"):In("articles",{begin_date:n,end_date:n}).then((t=>(tm.newsList.innerHTML="",Sn(tm.newsList,Cn(t.data.response.docs,"dateCards")),nf(),e=Math.ceil(t.data.response.meta.hits/10),e>99&&(e=99),Gp(e),Yp(t.data.response.docs),window.localStorage.setItem("lastFetchType",JSON.stringify({type:"date",value:n})),t.data.response.docs))).then((t=>{console.log("resp --\x3e",t),Zp(t),Tn.checkFetchedNewsByID(t)}))})),r("X4ZWf");Qp=r("fKrXO");const em=document.querySelector(".news__list");function nm(t){t.target.classList.contains("news__readmore-link")&&((0,Qp.handleReadMoreBtnClick)(t),_n(t)),"DIV"===t.target.nodeName&&("Add to favorite"===t.target.firstElementChild.textContent?(t.target.classList.remove("div"),t.target.classList.add("div-remove"),t.target.firstElementChild.textContent="Remove from favorite",t.target.firstElementChild.classList.remove("news__favorite-btn"),t.target.firstElementChild.classList.add("btn-width"),t.target.lastElementChild.classList.remove("favorite-btn__icon-add"),t.target.lastElementChild.classList.add("favorite-btn__icon-remove")):"Remove from favorite"===t.target.firstElementChild.textContent&&(t.target.firstElementChild.textContent="Add to favorite",t.target.lastElementChild.classList.remove("favorite-btn__icon-remove"),t.target.lastElementChild.classList.add("favorite-btn__icon-add"),t.target.firstElementChild.classList.add("news__favorite-btn"),t.target.firstElementChild.classList.remove("btn-width"),t.target.classList.remove("div-remove"),t.target.classList.add("div")))}em.addEventListener("click",nm),em.addEventListener("click",nm);const im=document.querySelector(".news__list");let rm=[];localStorage.getItem("news-added-to-favorite")&&JSON.parse(localStorage.getItem("news-added-to-favorite")).map((t=>{rm.push(t)})),im.addEventListener("click",(function(t){if("DIV"===t.target.nodeName&&(rm.push({image:t.target.parentNode.firstElementChild.src,title:t.target.parentNode.parentNode.children[1].textContent,text:t.target.parentNode.parentNode.children[2].textContent,href:t.target.parentNode.parentNode.lastElementChild.lastElementChild.href,date:t.target.parentNode.parentNode.lastElementChild.firstElementChild.textContent,id:t.target.parentNode.parentNode.dataset.id,h3:t.target.parentNode.lastElementChild.textContent}),localStorage.setItem("news-added-to-favorite",JSON.stringify(rm)),t.target.classList.contains("div"))){const e=JSON.parse(localStorage.getItem("news-added-to-favorite")).filter((e=>e.id!==t.target.parentNode.parentNode.dataset.id));localStorage.removeItem("news-added-to-favorite"),localStorage.setItem("news-added-to-favorite",JSON.stringify(e)),rm=e}}));const sm=new class{async getWeather(){return(await nn.get(`${this.options.baseURL}`,this.options)).data}async checkUserGeo(){return(await nn(`${this.IP_API_URL}`)).data}checkNavPermissions(){if(navigator.geolocation)return navigator.geolocation.getCurrentPosition(om,am);alert("Your browser not support geolocation api")}renderWeatherMarkup(t){const e=document.querySelector(".weather"),n=this.dateFormatter(this.userTime),i=`\n    <div class="weather__info info">\n  <p class="info__temp">${Math.floor(t.main.temp)}°</p>\n  <div class="info-wrapper">\n    <p class="info__situation">${t.weather[0].main}</p>\n    <div class="info-wrapper-items">\n    <svg class= "info-wrapper__svg" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M13.5 1.6875C11.0394 1.6904 8.68032 2.66918 6.94038 4.40912C5.20044 6.14906 4.22166 8.5081 4.21876 10.9688C4.21581 12.9796 4.87265 14.9359 6.08851 16.5375C6.08851 16.5375 6.34163 16.8708 6.38298 16.9189L13.5 25.3125L20.6204 16.9147C20.6575 16.8699 20.9115 16.5375 20.9115 16.5375L20.9124 16.535C22.1276 14.934 22.7841 12.9787 22.7813 10.9688C22.7784 8.5081 21.7996 6.14906 20.0596 4.40912C18.3197 2.66918 15.9607 1.6904 13.5 1.6875ZM13.5 14.3438C12.8325 14.3438 12.18 14.1458 11.625 13.775C11.0699 13.4041 10.6374 12.877 10.3819 12.2603C10.1265 11.6436 10.0596 10.965 10.1899 10.3103C10.3201 9.65563 10.6415 9.05427 11.1135 8.58226C11.5855 8.11026 12.1869 7.78882 12.8416 7.6586C13.4963 7.52837 14.1749 7.59521 14.7916 7.85066C15.4083 8.1061 15.9354 8.53868 16.3062 9.0937C16.6771 9.64872 16.875 10.3012 16.875 10.9688C16.8739 11.8635 16.518 12.7213 15.8853 13.354C15.2526 13.9867 14.3948 14.3426 13.5 14.3438Z" fill="white"/>\n</svg>\n      <p class="info__geo">${t.name}</p>\n    </div>\n  </div>\n</div>\n<img\n  src="http://openweathermap.org/img/w/${t.weather[0].icon}.png"\n  alt="image of sun"\n  width="128"\n  class="weather-img"\n/><p class="weather__date-week">\n  ${n.dayOfWeek}\n</p>\n<p class="weather__date-date">\n  ${n.dateUser} ${n.dateMonth} ${n.dateYear}\n</p>\n<a class="weather__link" href="https://sinoptik.ua/" target="_blank">weather for week</a>`;e.innerHTML=i}dateFormatter(t){const e=new Date(t);return{dayOfWeek:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()],dateUser:e.getDate(),dateYear:e.getFullYear(),dateMonth:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Nov","Dec"][e.getMonth()]}}constructor(){this.options={baseURL:"https://api.openweathermap.org/data/2.5/weather",params:{lat:null,lon:null,appid:vn.WEATHER,units:"metric"}},this.IP_API_URL="https://ipapi.co/json/",this.userTime=null}};function om(t){const{latitude:e,longitude:n}=t.coords;sm.userTime=t.timestamp,sm.options.params.lat=e,sm.options.params.lon=n,sm.getWeather().then((t=>{sm.renderWeatherMarkup(t)})).catch((t=>console.log(t)))}async function am(t){await sm.checkUserGeo().then((t=>{const{latitude:e,longitude:n}=t;sm.userTime=Date.now(),sm.options.params.lat=e,sm.options.params.lon=n})).catch((t=>console.log(t)));sm.getWeather().then((t=>{sm.renderWeatherMarkup(t)})).catch((t=>console.log(t)))}addEventListener("DOMContentLoaded",sm.checkNavPermissions);const lm=document.querySelector(".show-more-btn"),cm=document.querySelector(".categories-menu"),um=document.querySelector(".js-others-btn"),hm=document.querySelector(".categories"),dm=document.querySelector(".news__list"),fm=document.querySelector("body");In("allCategories").then((t=>{Sn(cm,Cn(t.data.results,"categoriesFull")),Sn(hm,Cn(t.data.results,"categoriesForDesktop"),"afterbegin")})),hm.addEventListener("click",(function(t){(t.target.classList.contains("btn-menu")||t.target.classList.contains("btn-desktop"))&&In("category",{},t.target.textContent.toLowerCase()).then((e=>(dm.innerHTML="",Sn(dm,Cn(e.data.results,"categoryCards")),window.localStorage.setItem("lastFetchType",JSON.stringify({type:"category",value:t.target.textContent.toLowerCase()})),e.data.results))).then((t=>{Zp(t),Tn.checkFetchedNewsByID(t)}))})),hm.addEventListener("click",(function(t){const e=document.querySelector(".active-underline"),n=document.querySelector(".is-active");"BUTTON"===t.target.nodeName&&(t.target.classList.contains("show-more-btn")?(t.target.classList.toggle("desktop-btn-active"),cm.classList.toggle("visible")):t.target.classList.contains("btn-desktop")?(n?n.classList.remove("is-active"):e&&e.classList.remove("active-underline"),t.target.classList.add("is-active"),cm.classList.remove("visible"),lm.classList.remove("desktop-btn-active"),um.classList.remove("desktop-btn-active"),In("category",{limit:500},t.target.textContent.toLowerCase()).then((t=>{Gp(Math.ceil(t.data.results.length/10))})),In("category",{limit:10},t.target.textContent.toLowerCase()).then((e=>{Sn(dm,Cn(e.data.results,"categoryCards")),Yp(e.data.results),window.localStorage.setItem("lastFetchType",JSON.stringify({type:"category",value:t.target.textContent.toLowerCase()}))}))):(e?e.classList.remove("active-underline"):n&&n.classList.remove("is-active"),t.target.classList.add("active-underline"),cm.classList.remove("visible"),lm.classList.remove("desktop-btn-active"),um.classList.remove("desktop-btn-active"),In("category",{limit:500},t.target.textContent.toLowerCase()).then((t=>{Gp(Math.ceil(t.data.results.length/10))})),In("category",{limit:10},t.target.textContent.toLowerCase()).then((e=>{Sn(dm,Cn(e.data.results,"categoryCards")),Yp(e.data.results),window.localStorage.setItem("lastFetchType",JSON.stringify({type:"category",value:t.target.textContent.toLowerCase()}))}))))})),fm.addEventListener("click",(t=>{"BUTTON"!==t.target.nodeName&&cm.classList.contains("visible")&&(cm.classList.remove("visible"),lm.classList.remove("desktop-btn-active"),um.classList.remove("desktop-btn-active"))}));const pm=document.querySelector(".label"),mm=document.querySelector(".btn-search-mob");mm.addEventListener("click",(t=>{mm.classList.add("js-active"),pm.classList.add("js-isactive")})),r("fKrXO");const gm=document.querySelector("#pagination"),ym=document.querySelector(".news__list");gm.addEventListener("click",(function(t){const e=JSON.parse(localStorage.getItem("lastFetchType"));if("input"===e.type){const t=document.querySelector(".current").textContent-1;In("articles",{q:e.value,page:t}).then((t=>{ym.innerHTML="",Sn(ym,Cn(t.data.response.docs,"inputsCards"))}))}else if("category"===e.type){const t=document.querySelector(".current").textContent;In("category",{limit:10,offset:10*t-10},e.value).then((t=>{ym.innerHTML="",Sn(ym,Cn(t.data.results,"categoryCards"))}))}else if("date"===e.type){const t=document.querySelector(".current").textContent-1;In("articles",{begin_date:e.value,end_date:e.value,page:t}).then((t=>{ym.innerHTML="",Sn(ym,Cn(t.data.response.docs,"dateCards"))}))}}));const bm={form:document.querySelector(".header-form"),input:document.querySelector(".header-input"),newsList:document.querySelector(".news__list")};bm.form.addEventListener("submit",(t=>{let e;if(t.preventDefault(),""===bm.input.value.trim())return;const n={q:bm.input.value.trim()};In("articles",n).then((t=>{bm.newsList.innerHTML="",Sn(bm.newsList,Cn(t.data.response.docs,"inputsCards")),Yp(t.data.response.docs),window.localStorage.setItem("lastFetchType",JSON.stringify({type:"input",value:bm.input.value})),bm.input.value="",In("articles",n).then((t=>(bm.newsList.innerHTML="",Sn(bm.newsList,Cn(t.data.response.docs,"inputsCards")),Yp(t.data.response.docs),nf(),e=Math.ceil(t.data.response.meta.hits/10),e>99&&(e=99),window.localStorage.setItem("lastFetchType",JSON.stringify({type:"input",value:bm.input.value})),0!==t.data.response.meta.hits&&Gp(e),bm.input.value="",t.data.response.docs))).then((t=>{Zp(t),Tn.checkFetchedNewsByID(t)}))}))}));const vm={newsList:document.querySelector(".news__list")};In("mostPopular").then((t=>{const e=Cn(t.data.results,"popularCards");return Sn(vm.newsList,e),nf(),t.data.results})).then((t=>{Zp(t),Tn.checkFetchedNewsByID(t)}));
//# sourceMappingURL=index.682f14cb.js.map
