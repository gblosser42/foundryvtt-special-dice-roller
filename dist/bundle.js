!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=61)}([function(t,e,r){"use strict";var n=TypeError,o=Object.getOwnPropertyDescriptor;if(o)try{o({},"")}catch(t){o=null}var i=function(){throw new n},u=o?function(){try{return arguments.callee,i}catch(t){try{return o(arguments,"callee").get}catch(t){return i}}}():i,a=r(10)(),c=Object.getPrototypeOf||function(t){return t.__proto__},s=void 0,f="undefined"==typeof Uint8Array?void 0:c(Uint8Array),p={"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?void 0:ArrayBuffer,"%ArrayBufferPrototype%":"undefined"==typeof ArrayBuffer?void 0:ArrayBuffer.prototype,"%ArrayIteratorPrototype%":a?c([][Symbol.iterator]()):void 0,"%ArrayPrototype%":Array.prototype,"%ArrayProto_entries%":Array.prototype.entries,"%ArrayProto_forEach%":Array.prototype.forEach,"%ArrayProto_keys%":Array.prototype.keys,"%ArrayProto_values%":Array.prototype.values,"%AsyncFromSyncIteratorPrototype%":void 0,"%AsyncFunction%":void 0,"%AsyncFunctionPrototype%":void 0,"%AsyncGenerator%":void 0,"%AsyncGeneratorFunction%":void 0,"%AsyncGeneratorPrototype%":void 0,"%AsyncIteratorPrototype%":s&&a&&Symbol.asyncIterator?s[Symbol.asyncIterator]():void 0,"%Atomics%":"undefined"==typeof Atomics?void 0:Atomics,"%Boolean%":Boolean,"%BooleanPrototype%":Boolean.prototype,"%DataView%":"undefined"==typeof DataView?void 0:DataView,"%DataViewPrototype%":"undefined"==typeof DataView?void 0:DataView.prototype,"%Date%":Date,"%DatePrototype%":Date.prototype,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%ErrorPrototype%":Error.prototype,"%eval%":eval,"%EvalError%":EvalError,"%EvalErrorPrototype%":EvalError.prototype,"%Float32Array%":"undefined"==typeof Float32Array?void 0:Float32Array,"%Float32ArrayPrototype%":"undefined"==typeof Float32Array?void 0:Float32Array.prototype,"%Float64Array%":"undefined"==typeof Float64Array?void 0:Float64Array,"%Float64ArrayPrototype%":"undefined"==typeof Float64Array?void 0:Float64Array.prototype,"%Function%":Function,"%FunctionPrototype%":Function.prototype,"%Generator%":void 0,"%GeneratorFunction%":void 0,"%GeneratorPrototype%":void 0,"%Int8Array%":"undefined"==typeof Int8Array?void 0:Int8Array,"%Int8ArrayPrototype%":"undefined"==typeof Int8Array?void 0:Int8Array.prototype,"%Int16Array%":"undefined"==typeof Int16Array?void 0:Int16Array,"%Int16ArrayPrototype%":"undefined"==typeof Int16Array?void 0:Int8Array.prototype,"%Int32Array%":"undefined"==typeof Int32Array?void 0:Int32Array,"%Int32ArrayPrototype%":"undefined"==typeof Int32Array?void 0:Int32Array.prototype,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":a?c(c([][Symbol.iterator]())):void 0,"%JSON%":"object"==typeof JSON?JSON:void 0,"%JSONParse%":"object"==typeof JSON?JSON.parse:void 0,"%Map%":"undefined"==typeof Map?void 0:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&a?c((new Map)[Symbol.iterator]()):void 0,"%MapPrototype%":"undefined"==typeof Map?void 0:Map.prototype,"%Math%":Math,"%Number%":Number,"%NumberPrototype%":Number.prototype,"%Object%":Object,"%ObjectPrototype%":Object.prototype,"%ObjProto_toString%":Object.prototype.toString,"%ObjProto_valueOf%":Object.prototype.valueOf,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?void 0:Promise,"%PromisePrototype%":"undefined"==typeof Promise?void 0:Promise.prototype,"%PromiseProto_then%":"undefined"==typeof Promise?void 0:Promise.prototype.then,"%Promise_all%":"undefined"==typeof Promise?void 0:Promise.all,"%Promise_reject%":"undefined"==typeof Promise?void 0:Promise.reject,"%Promise_resolve%":"undefined"==typeof Promise?void 0:Promise.resolve,"%Proxy%":"undefined"==typeof Proxy?void 0:Proxy,"%RangeError%":RangeError,"%RangeErrorPrototype%":RangeError.prototype,"%ReferenceError%":ReferenceError,"%ReferenceErrorPrototype%":ReferenceError.prototype,"%Reflect%":"undefined"==typeof Reflect?void 0:Reflect,"%RegExp%":RegExp,"%RegExpPrototype%":RegExp.prototype,"%Set%":"undefined"==typeof Set?void 0:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&a?c((new Set)[Symbol.iterator]()):void 0,"%SetPrototype%":"undefined"==typeof Set?void 0:Set.prototype,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?void 0:SharedArrayBuffer,"%SharedArrayBufferPrototype%":"undefined"==typeof SharedArrayBuffer?void 0:SharedArrayBuffer.prototype,"%String%":String,"%StringIteratorPrototype%":a?c(""[Symbol.iterator]()):void 0,"%StringPrototype%":String.prototype,"%Symbol%":a?Symbol:void 0,"%SymbolPrototype%":a?Symbol.prototype:void 0,"%SyntaxError%":SyntaxError,"%SyntaxErrorPrototype%":SyntaxError.prototype,"%ThrowTypeError%":u,"%TypedArray%":f,"%TypedArrayPrototype%":f?f.prototype:void 0,"%TypeError%":n,"%TypeErrorPrototype%":n.prototype,"%Uint8Array%":"undefined"==typeof Uint8Array?void 0:Uint8Array,"%Uint8ArrayPrototype%":"undefined"==typeof Uint8Array?void 0:Uint8Array.prototype,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?void 0:Uint8ClampedArray,"%Uint8ClampedArrayPrototype%":"undefined"==typeof Uint8ClampedArray?void 0:Uint8ClampedArray.prototype,"%Uint16Array%":"undefined"==typeof Uint16Array?void 0:Uint16Array,"%Uint16ArrayPrototype%":"undefined"==typeof Uint16Array?void 0:Uint16Array.prototype,"%Uint32Array%":"undefined"==typeof Uint32Array?void 0:Uint32Array,"%Uint32ArrayPrototype%":"undefined"==typeof Uint32Array?void 0:Uint32Array.prototype,"%URIError%":URIError,"%URIErrorPrototype%":URIError.prototype,"%WeakMap%":"undefined"==typeof WeakMap?void 0:WeakMap,"%WeakMapPrototype%":"undefined"==typeof WeakMap?void 0:WeakMap.prototype,"%WeakSet%":"undefined"==typeof WeakSet?void 0:WeakSet,"%WeakSetPrototype%":"undefined"==typeof WeakSet?void 0:WeakSet.prototype},l=r(4).call(Function.call,String.prototype.replace),y=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,d=/\\(\\)?/g,b=function(t){var e=[];return l(t,y,(function(t,r,n,o){e[e.length]=n?l(o,d,"$1"):r||t})),e},h=function(t,e){if(!(t in p))throw new SyntaxError("intrinsic "+t+" does not exist!");if(void 0===p[t]&&!e)throw new n("intrinsic "+t+" exists, but is not available. Please file an issue!");return p[t]};t.exports=function(t,e){if("string"!=typeof t||0===t.length)throw new TypeError("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof e)throw new TypeError('"allowMissing" argument must be a boolean');for(var r=b(t),n=h("%"+(r.length>0?r[0]:"")+"%",e),i=1;i<r.length;i+=1)if(null!=n)if(o&&i+1>=r.length){var u=o(n,r[i]);n=u?u.get||u.value:n[r[i]]}else n=n[r[i]];return n}},function(t,e,r){"use strict";var n=r(32);t.exports=function(t){return"symbol"==typeof t?"Symbol":n(t)}},function(t,e,r){"use strict";t.exports=function(t){return"string"==typeof t||"symbol"==typeof t}},function(t,e,r){"use strict";var n=r(4),o=r(0)("%Function%"),i=o.apply,u=o.call;t.exports=function(){return n.apply(u,arguments)},t.exports.apply=function(){return n.apply(i,arguments)}},function(t,e,r){"use strict";var n=r(27);t.exports=Function.prototype.bind||n},function(t,e,r){"use strict";var n=r(0)("%TypeError%"),o=r(12),i=r(2),u=r(1);t.exports=function(t,e){if("Object"!==u(t))throw new n("Assertion failed: Type(O) is not Object");if(!i(e))throw new n("Assertion failed: IsPropertyKey(P) is not true, got "+o(e));return t[e]}},function(t,e,r){"use strict";var n=r(0),o=r(3),i=o(n("String.prototype.indexOf"));t.exports=function(t,e){var r=n(t,!!e);return"function"==typeof r&&i(t,".prototype.")?o(r):r}},function(t,e,r){"use strict";t.exports=Number.isNaN||function(t){return t!=t}},function(t,e,r){"use strict";var n=r(25),o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,u=Array.prototype.concat,a=Object.defineProperty,c=a&&function(){var t={};try{for(var e in a(t,"x",{enumerable:!1,value:t}),t)return!1;return t.x===t}catch(t){return!1}}(),s=function(t,e,r,n){var o;e in t&&("function"!=typeof(o=n)||"[object Function]"!==i.call(o)||!n())||(c?a(t,e,{configurable:!0,enumerable:!1,value:r,writable:!0}):t[e]=r)},f=function(t,e){var r=arguments.length>2?arguments[2]:{},i=n(e);o&&(i=u.call(i,Object.getOwnPropertySymbols(e)));for(var a=0;a<i.length;a+=1)s(t,i[a],e[i[a]],r[i[a]])};f.supportsDescriptors=!!c,t.exports=f},function(t,e,r){"use strict";var n=Object.prototype.toString;t.exports=function(t){var e=n.call(t),r="[object Arguments]"===e;return r||(r="[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee)),r}},function(t,e,r){"use strict";(function(e){var n=e.Symbol,o=r(29);t.exports=function(){return"function"==typeof n&&("function"==typeof Symbol&&("symbol"==typeof n("foo")&&("symbol"==typeof Symbol("bar")&&o())))}}).call(this,r(28))},function(t,e,r){"use strict";var n=r(30),o=r(35),i=r(5),u=r(16),a=r(21),c=r(57);t.exports=function(t){var e,r=c(this),s=a(i(r,"length"));if(!u(t))throw new TypeError("mapperFunction must be a function");arguments.length>1&&(e=arguments[1]);var f=n(r,0);return o(f,r,s,0,1,t,e),f}},function(t,e,r){var n="function"==typeof Map&&Map.prototype,o=Object.getOwnPropertyDescriptor&&n?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,i=n&&o&&"function"==typeof o.get?o.get:null,u=n&&Map.prototype.forEach,a="function"==typeof Set&&Set.prototype,c=Object.getOwnPropertyDescriptor&&a?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,s=a&&c&&"function"==typeof c.get?c.get:null,f=a&&Set.prototype.forEach,p="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,l="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,y=Boolean.prototype.valueOf,d=Object.prototype.toString,b=String.prototype.match,h="function"==typeof BigInt?BigInt.prototype.valueOf:null,v=r(31).custom,g=v&&O(v)?v:null;function S(t,e,r){var n="double"===(r.quoteStyle||e)?'"':"'";return n+t+n}function m(t){return String(t).replace(/"/g,"&quot;")}function w(t){return"[object Array]"===j(t)}function O(t){return"[object Symbol]"===j(t)}t.exports=function t(e,r,n,o){var a=r||{};if(E(a,"quoteStyle")&&"single"!==a.quoteStyle&&"double"!==a.quoteStyle)throw new TypeError('option "quoteStyle" must be "single" or "double"');if(void 0===e)return"undefined";if(null===e)return"null";if("boolean"==typeof e)return e?"true":"false";if("string"==typeof e)return function(t,e){return S(t.replace(/(['\\])/g,"\\$1").replace(/[\x00-\x1f]/g,A),"single",e)}(e,a);if("number"==typeof e)return 0===e?1/0/e>0?"0":"-0":String(e);if("bigint"==typeof e)return String(e)+"n";var c=void 0===a.depth?5:a.depth;if(void 0===n&&(n=0),n>=c&&c>0&&"object"==typeof e)return"[Object]";if(void 0===o)o=[];else if(function(t,e){if(t.indexOf)return t.indexOf(e);for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1}(o,e)>=0)return"[Circular]";function d(e,r){return r&&(o=o.slice()).push(r),t(e,a,n+1,o)}if("function"==typeof e){var v=function(t){if(t.name)return t.name;var e=b.call(t,/^function\s*([\w$]+)/);if(e)return e[1];return null}(e);return"[Function"+(v?": "+v:"")+"]"}if(O(e)){var P=Symbol.prototype.toString.call(e);return"object"==typeof e?I(P):P}if(function(t){if(!t||"object"!=typeof t)return!1;if("undefined"!=typeof HTMLElement&&t instanceof HTMLElement)return!0;return"string"==typeof t.nodeName&&"function"==typeof t.getAttribute}(e)){for(var R="<"+String(e.nodeName).toLowerCase(),N=e.attributes||[],k=0;k<N.length;k++)R+=" "+N[k].name+"="+S(m(N[k].value),"double",a);return R+=">",e.childNodes&&e.childNodes.length&&(R+="..."),R+="</"+String(e.nodeName).toLowerCase()+">"}if(w(e))return 0===e.length?"[]":"[ "+U(e,d).join(", ")+" ]";if(function(t){return"[object Error]"===j(t)}(e)){var C=U(e,d);return 0===C.length?"["+String(e)+"]":"{ ["+String(e)+"] "+C.join(", ")+" }"}if("object"==typeof e){if(g&&"function"==typeof e[g])return e[g]();if("function"==typeof e.inspect)return e.inspect()}if(function(t){if(!i||!t||"object"!=typeof t)return!1;try{i.call(t);try{s.call(t)}catch(t){return!0}return t instanceof Map}catch(t){}return!1}(e)){var F=[];return u.call(e,(function(t,r){F.push(d(r,e)+" => "+d(t,e))})),T("Map",i.call(e),F)}if(function(t){if(!s||!t||"object"!=typeof t)return!1;try{s.call(t);try{i.call(t)}catch(t){return!0}return t instanceof Set}catch(t){}return!1}(e)){var D=[];return f.call(e,(function(t){D.push(d(t,e))})),T("Set",s.call(e),D)}if(function(t){if(!p||!t||"object"!=typeof t)return!1;try{p.call(t,p);try{l.call(t,l)}catch(t){return!0}return t instanceof WeakMap}catch(t){}return!1}(e))return x("WeakMap");if(function(t){if(!l||!t||"object"!=typeof t)return!1;try{l.call(t,l);try{p.call(t,p)}catch(t){return!0}return t instanceof WeakSet}catch(t){}return!1}(e))return x("WeakSet");if(function(t){return"[object Number]"===j(t)}(e))return I(d(Number(e)));if(function(t){return"[object BigInt]"===j(t)}(e))return I(d(h.call(e)));if(function(t){return"[object Boolean]"===j(t)}(e))return I(y.call(e));if(function(t){return"[object String]"===j(t)}(e))return I(d(String(e)));if(!function(t){return"[object Date]"===j(t)}(e)&&!function(t){return"[object RegExp]"===j(t)}(e)){var _=U(e,d);return 0===_.length?"{}":"{ "+_.join(", ")+" }"}return String(e)};var P=Object.prototype.hasOwnProperty||function(t){return t in this};function E(t,e){return P.call(t,e)}function j(t){return d.call(t)}function A(t){var e=t.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return r?"\\"+r:"\\x"+(e<16?"0":"")+e.toString(16)}function I(t){return"Object("+t+")"}function x(t){return t+" { ? }"}function T(t,e,r){return t+" ("+e+") {"+r.join(", ")+"}"}function U(t,e){var r=w(t),n=[];if(r){n.length=t.length;for(var o=0;o<t.length;o++)n[o]=E(t,o)?e(t[o],t):""}for(var i in t)E(t,i)&&(r&&String(Number(i))===i&&i<t.length||(/[^\w$]/.test(i)?n.push(e(i,t)+": "+e(t[i],t)):n.push(i+": "+e(t[i],t))));return n}},function(t,e,r){"use strict";var n=r(0)("%Array%"),o=!n.isArray&&r(6)("Object.prototype.toString");t.exports=n.isArray||function(t){return"[object Array]"===o(t)}},function(t,e,r){"use strict";var n=Number.isNaN||function(t){return t!=t};t.exports=Number.isFinite||function(t){return"number"==typeof t&&!n(t)&&t!==1/0&&t!==-1/0}},function(t,e,r){"use strict";var n=r(0),o=n("%Math%"),i=n("%Number%");t.exports=i.MAX_SAFE_INTEGER||o.pow(2,53)-1},function(t,e,r){"use strict";t.exports=r(17)},function(t,e,r){"use strict";var n=Function.prototype.toString,o=/^\s*class\b/,i=function(t){try{var e=n.call(t);return o.test(e)}catch(t){return!1}},u=Object.prototype.toString,a="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;t.exports=function(t){if(!t)return!1;if("function"!=typeof t&&"object"!=typeof t)return!1;if("function"==typeof t&&!t.prototype)return!0;if(a)return function(t){try{return!i(t)&&(n.call(t),!0)}catch(t){return!1}}(t);if(i(t))return!1;var e=u.call(t);return"[object Function]"===e||"[object GeneratorFunction]"===e}},function(t,e,r){"use strict";var n=r(0),o=n("%TypeError%"),i=n("%SyntaxError%"),u=r(19),a={"Property Descriptor":function(t,e){if("Object"!==t(e))return!1;var r={"[[Configurable]]":!0,"[[Enumerable]]":!0,"[[Get]]":!0,"[[Set]]":!0,"[[Value]]":!0,"[[Writable]]":!0};for(var n in e)if(u(e,n)&&!r[n])return!1;var i=u(e,"[[Value]]"),a=u(e,"[[Get]]")||u(e,"[[Set]]");if(i&&a)throw new o("Property Descriptors may not be both accessor and data descriptors");return!0}};t.exports=function(t,e,r,n){var u=a[e];if("function"!=typeof u)throw new i("unknown record type: "+e);if(!u(t,n))throw new o(r+" must be a "+e)}},function(t,e,r){"use strict";var n=r(4);t.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},function(t,e,r){"use strict";t.exports=function(t){return null===t||"function"!=typeof t&&"object"!=typeof t}},function(t,e,r){"use strict";var n=r(15),o=r(45);t.exports=function(t){var e=o(t);return e<=0?0:e>n?n:e}},function(t,e,r){"use strict";var n=r(11);t.exports=function(){return Array.prototype.flatMap||n}},function(t,e,r){"use strict";var n=r(8),o=r(3),i=r(11),u=r(22),a=u(),c=r(60),s=o(a);n(s,{getPolyfill:u,implementation:i,shim:c}),t.exports=s},function(t,e,r){t.exports=function(){"use strict";
/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var t=Object.prototype.toString,e=Array.isArray||function(e){return"[object Array]"===t.call(e)};function r(t){return"function"==typeof t}function n(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function o(t,e){return null!=t&&"object"==typeof t&&e in t}var i=RegExp.prototype.test,u=/\S/;function a(t){return!function(t,e){return i.call(t,e)}(u,t)}var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},s=/\s*/,f=/\s+/,p=/\s*=/,l=/\s*\}/,y=/#|\^|\/|>|\{|&|=|!/;function d(t){this.string=t,this.tail=t,this.pos=0}function b(t,e){this.view=t,this.cache={".":this.view},this.parent=e}function h(){this.cache={}}d.prototype.eos=function(){return""===this.tail},d.prototype.scan=function(t){var e=this.tail.match(t);if(!e||0!==e.index)return"";var r=e[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r},d.prototype.scanUntil=function(t){var e,r=this.tail.search(t);switch(r){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=e.length,e},b.prototype.push=function(t){return new b(t,this)},b.prototype.lookup=function(t){var e,n,i,u=this.cache;if(u.hasOwnProperty(t))e=u[t];else{for(var a,c,s,f=this,p=!1;f;){if(t.indexOf(".")>0)for(a=f.view,c=t.split("."),s=0;null!=a&&s<c.length;)s===c.length-1&&(p=o(a,c[s])||(n=a,i=c[s],null!=n&&"object"!=typeof n&&n.hasOwnProperty&&n.hasOwnProperty(i))),a=a[c[s++]];else a=f.view[t],p=o(f.view,t);if(p){e=a;break}f=f.parent}u[t]=e}return r(e)&&(e=e.call(this.view)),e},h.prototype.clearCache=function(){this.cache={}},h.prototype.parse=function(t,r){var o=this.cache,i=t+":"+(r||v.tags).join(":"),u=o[i];return null==u&&(u=o[i]=function(t,r){if(!t)return[];var o,i,u,c=!1,b=[],h=[],g=[],S=!1,m=!1,w="",O=0;function P(){if(S&&!m)for(;g.length;)delete h[g.pop()];else g=[];S=!1,m=!1}function E(t){if("string"==typeof t&&(t=t.split(f,2)),!e(t)||2!==t.length)throw new Error("Invalid tags: "+t);o=new RegExp(n(t[0])+"\\s*"),i=new RegExp("\\s*"+n(t[1])),u=new RegExp("\\s*"+n("}"+t[1]))}E(r||v.tags);for(var j,A,I,x,T,U,R=new d(t);!R.eos();){if(j=R.pos,I=R.scanUntil(o))for(var N=0,k=I.length;N<k;++N)a(x=I.charAt(N))?(g.push(h.length),w+=x):(m=!0,c=!0,w+=" "),h.push(["text",x,j,j+1]),j+=1,"\n"===x&&(P(),w="",O=0,c=!1);if(!R.scan(o))break;if(S=!0,A=R.scan(y)||"name",R.scan(s),"="===A?(I=R.scanUntil(p),R.scan(p),R.scanUntil(i)):"{"===A?(I=R.scanUntil(u),R.scan(l),R.scanUntil(i),A="&"):I=R.scanUntil(i),!R.scan(i))throw new Error("Unclosed tag at "+R.pos);if(T=">"==A?[A,I,j,R.pos,w,O,c]:[A,I,j,R.pos],O++,h.push(T),"#"===A||"^"===A)b.push(T);else if("/"===A){if(!(U=b.pop()))throw new Error('Unopened section "'+I+'" at '+j);if(U[1]!==I)throw new Error('Unclosed section "'+U[1]+'" at '+j)}else"name"===A||"{"===A||"&"===A?m=!0:"="===A&&E(I)}if(P(),U=b.pop())throw new Error('Unclosed section "'+U[1]+'" at '+R.pos);return function(t){for(var e,r=[],n=r,o=[],i=0,u=t.length;i<u;++i)switch((e=t[i])[0]){case"#":case"^":n.push(e),o.push(e),n=e[4]=[];break;case"/":o.pop()[5]=e[2],n=o.length>0?o[o.length-1][4]:r;break;default:n.push(e)}return r}(function(t){for(var e,r,n=[],o=0,i=t.length;o<i;++o)(e=t[o])&&("text"===e[0]&&r&&"text"===r[0]?(r[1]+=e[1],r[3]=e[3]):(n.push(e),r=e));return n}(h))}(t,r)),u},h.prototype.render=function(t,e,r,n){var o=this.parse(t,n),i=e instanceof b?e:new b(e,void 0);return this.renderTokens(o,i,r,t,n)},h.prototype.renderTokens=function(t,e,r,n,o){for(var i,u,a,c="",s=0,f=t.length;s<f;++s)a=void 0,"#"===(u=(i=t[s])[0])?a=this.renderSection(i,e,r,n):"^"===u?a=this.renderInverted(i,e,r,n):">"===u?a=this.renderPartial(i,e,r,o):"&"===u?a=this.unescapedValue(i,e):"name"===u?a=this.escapedValue(i,e):"text"===u&&(a=this.rawValue(i)),void 0!==a&&(c+=a);return c},h.prototype.renderSection=function(t,n,o,i){var u=this,a="",c=n.lookup(t[1]);if(c){if(e(c))for(var s=0,f=c.length;s<f;++s)a+=this.renderTokens(t[4],n.push(c[s]),o,i);else if("object"==typeof c||"string"==typeof c||"number"==typeof c)a+=this.renderTokens(t[4],n.push(c),o,i);else if(r(c)){if("string"!=typeof i)throw new Error("Cannot use higher-order sections without the original template");null!=(c=c.call(n.view,i.slice(t[3],t[5]),(function(t){return u.render(t,n,o)})))&&(a+=c)}else a+=this.renderTokens(t[4],n,o,i);return a}},h.prototype.renderInverted=function(t,r,n,o){var i=r.lookup(t[1]);if(!i||e(i)&&0===i.length)return this.renderTokens(t[4],r,n,o)},h.prototype.indentPartial=function(t,e,r){for(var n=e.replace(/[^ \t]/g,""),o=t.split("\n"),i=0;i<o.length;i++)o[i].length&&(i>0||!r)&&(o[i]=n+o[i]);return o.join("\n")},h.prototype.renderPartial=function(t,e,n,o){if(n){var i=r(n)?n(t[1]):n[t[1]];if(null!=i){var u=t[6],a=t[5],c=t[4],s=i;return 0==a&&c&&(s=this.indentPartial(i,c,u)),this.renderTokens(this.parse(s,o),e,n,s)}}},h.prototype.unescapedValue=function(t,e){var r=e.lookup(t[1]);if(null!=r)return r},h.prototype.escapedValue=function(t,e){var r=e.lookup(t[1]);if(null!=r)return v.escape(r)},h.prototype.rawValue=function(t){return t[1]};var v={name:"mustache.js",version:"3.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,to_html:void 0,Scanner:void 0,Context:void 0,Writer:void 0},g=new h;return v.clearCache=function(){return g.clearCache()},v.parse=function(t,e){return g.parse(t,e)},v.render=function(t,r,n,o){if("string"!=typeof t)throw new TypeError('Invalid template! Template should be a "string" but "'+(e(i=t)?"array":typeof i)+'" was given as the first argument for mustache#render(template, view, partials)');var i;return g.render(t,r,n,o)},v.to_html=function(t,e,n,o){var i=v.render(t,e,n);if(!r(o))return i;o(i)},v.escape=function(t){return String(t).replace(/[&<>"'`=\/]/g,(function(t){return c[t]}))},v.Scanner=d,v.Context=b,v.Writer=h,v}()},function(t,e,r){"use strict";var n=Array.prototype.slice,o=r(9),i=Object.keys,u=i?function(t){return i(t)}:r(26),a=Object.keys;u.shim=function(){Object.keys?function(){var t=Object.keys(arguments);return t&&t.length===arguments.length}(1,2)||(Object.keys=function(t){return o(t)?a(n.call(t)):a(t)}):Object.keys=u;return Object.keys||u},t.exports=u},function(t,e,r){"use strict";var n;if(!Object.keys){var o=Object.prototype.hasOwnProperty,i=Object.prototype.toString,u=r(9),a=Object.prototype.propertyIsEnumerable,c=!a.call({toString:null},"toString"),s=a.call((function(){}),"prototype"),f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],p=function(t){var e=t.constructor;return e&&e.prototype===t},l={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},y=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!l["$"+t]&&o.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{p(window[t])}catch(t){return!0}}catch(t){return!0}return!1}();n=function(t){var e=null!==t&&"object"==typeof t,r="[object Function]"===i.call(t),n=u(t),a=e&&"[object String]"===i.call(t),l=[];if(!e&&!r&&!n)throw new TypeError("Object.keys called on a non-object");var d=s&&r;if(a&&t.length>0&&!o.call(t,0))for(var b=0;b<t.length;++b)l.push(String(b));if(n&&t.length>0)for(var h=0;h<t.length;++h)l.push(String(h));else for(var v in t)d&&"prototype"===v||!o.call(t,v)||l.push(String(v));if(c)for(var g=function(t){if("undefined"==typeof window||!y)return p(t);try{return p(t)}catch(t){return!1}}(t),S=0;S<f.length;++S)g&&"constructor"===f[S]||!o.call(t,f[S])||l.push(f[S]);return l}}t.exports=n},function(t,e,r){"use strict";var n="Function.prototype.bind called on incompatible ",o=Array.prototype.slice,i=Object.prototype.toString;t.exports=function(t){var e=this;if("function"!=typeof e||"[object Function]"!==i.call(e))throw new TypeError(n+e);for(var r,u=o.call(arguments,1),a=function(){if(this instanceof r){var n=e.apply(this,u.concat(o.call(arguments)));return Object(n)===n?n:this}return e.apply(t,u.concat(o.call(arguments)))},c=Math.max(0,e.length-u.length),s=[],f=0;f<c;f++)s.push("$"+f);if(r=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(a),e.prototype){var p=function(){};p.prototype=e.prototype,r.prototype=new p,p.prototype=null}return r}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(e in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var n=Object.getOwnPropertySymbols(t);if(1!==n.length||n[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(t,e);if(42!==o.value||!0!==o.enumerable)return!1}return!0}},function(t,e,r){"use strict";var n=r(0),o=n("%Array%"),i=n("%Symbol.species%",!0),u=n("%TypeError%"),a=r(5),c=r(13),s=r(33),f=r(34),p=r(1);t.exports=function(t,e){if(!f(e)||e<0)throw new u("Assertion failed: length must be an integer >= 0");var r,n=0===e?0:e;if(c(t)&&(r=a(t,"constructor"),i&&"Object"===p(r)&&null===(r=a(r,i))&&(r=void 0)),void 0===r)return o(n);if(!s(r))throw new u("C must be a constructor");return new r(n)}},function(t,e){},function(t,e,r){"use strict";t.exports=function(t){return null===t?"Null":void 0===t?"Undefined":"function"==typeof t||"object"==typeof t?"Object":"number"==typeof t?"Number":"boolean"==typeof t?"Boolean":"string"==typeof t?"String":void 0}},function(t,e,r){"use strict";t.exports=function(t){return"function"==typeof t&&!!t.prototype}},function(t,e,r){"use strict";var n=r(0)("%Math%"),o=n.floor,i=n.abs,u=r(7),a=r(14);t.exports=function(t){if("number"!=typeof t||u(t)||!a(t))return!1;var e=i(t);return o(e)===e}},function(t,e,r){"use strict";var n=r(0)("%TypeError%"),o=r(15),i=r(36),u=r(37),a=r(5),c=r(44),s=r(13),f=r(21),p=r(56);t.exports=function t(e,r,l,y,d){var b;arguments.length>5&&(b=arguments[5]);for(var h=y,v=0;v<l;){var g=p(v),S=c(r,g);if(!0===S){var m=a(r,g);if(void 0!==b){if(arguments.length<=6)throw new n("Assertion failed: thisArg is required when mapperFunction is provided");m=i(b,arguments[6],[m,v,r])}var w=!1;if(d>0&&(w=s(m)),w){var O=f(a(m,"length"));h=t(e,m,O,h,d-1)}else{if(h>=o)throw new n("index too large");u(e,p(h),m),h+=1}}v+=1}return h}},function(t,e,r){"use strict";var n=r(0)("%TypeError%"),o=r(12),i=r(16);t.exports=function(t,e){var r=arguments.length>2?arguments[2]:[];if(!i(t))throw new n(o(t)+" is not a function");return t.apply(e,r)}},function(t,e,r){"use strict";var n=r(0)("%TypeError%"),o=r(38),i=r(2),u=r(1);t.exports=function(t,e,r){if("Object"!==u(t))throw new n("Assertion failed: Type(O) is not Object");if(!i(e))throw new n("Assertion failed: IsPropertyKey(P) is not true");var a=o(t,e,r);if(!a)throw new n("unable to create data property");return a}},function(t,e,r){"use strict";var n=r(0),o=n("%Object.getOwnPropertyDescriptor%"),i=n("%TypeError%"),u=r(39),a=r(40),c=r(41),s=r(42),f=r(2),p=r(43),l=r(1);t.exports=function(t,e,r){if("Object"!==l(t))throw new i("Assertion failed: Type(O) is not Object");if(!f(e))throw new i("Assertion failed: IsPropertyKey(P) is not true");var n=o(t,e),y=n||s(t);return!(n&&(!n.writable||!n.configurable)||!y)&&u(c,p,a,t,e,{"[[Configurable]]":!0,"[[Enumerable]]":!0,"[[Value]]":r,"[[Writable]]":!0})}},function(t,e,r){"use strict";var n=r(0)("%Object.defineProperty%"),o=r(6)("Object.prototype.propertyIsEnumerable");t.exports=function(t,e,r,i,u,a){if(!n){if(!t(a))return!1;if(!a["[[Configurable]]"]||!a["[[Writable]]"])return!1;if(u in i&&o(i,u)!==!!a["[[Enumerable]]"])return!1;var c=a["[[Value]]"];return i[u]=c,e(i[u],c)}return n(i,u,r(a)),!0}},function(t,e,r){"use strict";var n=r(18),o=r(1);t.exports=function(t){if(void 0===t)return t;n(o,"Property Descriptor","Desc",t);var e={};return"[[Value]]"in t&&(e.value=t["[[Value]]"]),"[[Writable]]"in t&&(e.writable=t["[[Writable]]"]),"[[Get]]"in t&&(e.get=t["[[Get]]"]),"[[Set]]"in t&&(e.set=t["[[Set]]"]),"[[Enumerable]]"in t&&(e.enumerable=t["[[Enumerable]]"]),"[[Configurable]]"in t&&(e.configurable=t["[[Configurable]]"]),e}},function(t,e,r){"use strict";var n=r(19),o=r(18),i=r(1);t.exports=function(t){return void 0!==t&&(o(i,"Property Descriptor","Desc",t),!(!n(t,"[[Value]]")&&!n(t,"[[Writable]]")))}},function(t,e,r){"use strict";var n=r(0)("%Object%"),o=r(20),i=n.preventExtensions,u=n.isExtensible;t.exports=i?function(t){return!o(t)&&u(t)}:function(t){return!0}},function(t,e,r){"use strict";var n=r(7);t.exports=function(t,e){return t===e?0!==t||1/t==1/e:n(t)&&n(e)}},function(t,e,r){"use strict";var n=r(0)("%TypeError%"),o=r(2),i=r(1);t.exports=function(t,e){if("Object"!==i(t))throw new n("Assertion failed: `O` must be an Object");if(!o(e))throw new n("Assertion failed: `P` must be a Property Key");return e in t}},function(t,e,r){"use strict";var n=r(46),o=r(49);t.exports=function(t){var e=o(t);return n(e)}},function(t,e,r){"use strict";var n=r(0)("%Math%"),o=r(47),i=r(7),u=r(14),a=r(48),c=n.floor,s=n.abs;t.exports=function(t){var e=o(t);return i(e)?0:0!==e&&u(e)?a(e)*c(s(e)):e}},function(t,e,r){"use strict";t.exports=function(t){return+t}},function(t,e,r){"use strict";t.exports=function(t){return t>=0?1:-1}},function(t,e,r){"use strict";var n=r(0),o=n("%TypeError%"),i=n("%Number%"),u=n("%RegExp%"),a=n("%parseInt%"),c=r(6),s=r(50),f=r(20),p=c("String.prototype.slice"),l=s(/^0b[01]+$/i),y=s(/^0o[0-7]+$/i),d=s(/^[-+]0x[0-9a-f]+$/i),b=s(new u("["+["","​","￾"].join("")+"]","g")),h=["\t\n\v\f\r   ᠎    ","         　\u2028","\u2029\ufeff"].join(""),v=new RegExp("(^["+h+"]+)|(["+h+"]+$)","g"),g=c("String.prototype.replace"),S=r(51);t.exports=function t(e){var r=f(e)?e:S(e,i);if("symbol"==typeof r)throw new o("Cannot convert a Symbol value to a number");if("string"==typeof r){if(l(r))return t(a(p(r,2),2));if(y(r))return t(a(p(r,2),8));if(b(r)||d(r))return NaN;var n=function(t){return g(t,v,"")}(r);if(n!==r)return t(n)}return i(r)}},function(t,e,r){"use strict";var n=r(0)("RegExp.prototype.test"),o=r(3);t.exports=function(t){return o(n,t)}},function(t,e,r){"use strict";var n=r(52);t.exports=function(t){return arguments.length>1?n(t,arguments[1]):n(t)}},function(t,e,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator,o=r(53),i=r(17),u=r(54),a=r(55),c=function(t,e){if(null==t)throw new TypeError("Cannot call method on "+t);if("string"!=typeof e||"number"!==e&&"string"!==e)throw new TypeError('hint must be "string" or "number"');var r,n,u,a="string"===e?["toString","valueOf"]:["valueOf","toString"];for(u=0;u<a.length;++u)if(r=t[a[u]],i(r)&&(n=r.call(t),o(n)))return n;throw new TypeError("No default value")},s=function(t,e){var r=t[e];if(null!=r){if(!i(r))throw new TypeError(r+" returned for property "+e+" of object "+t+" is not a function");return r}};t.exports=function(t){if(o(t))return t;var e,r="default";if(arguments.length>1&&(arguments[1]===String?r="string":arguments[1]===Number&&(r="number")),n&&(Symbol.toPrimitive?e=s(t,Symbol.toPrimitive):a(t)&&(e=Symbol.prototype.valueOf)),void 0!==e){var i=e.call(t,r);if(o(i))return i;throw new TypeError("unable to convert exotic object to primitive")}return"default"===r&&(u(t)||a(t))&&(r="string"),c(t,"default"===r?"number":r)}},function(t,e,r){"use strict";t.exports=function(t){return null===t||"function"!=typeof t&&"object"!=typeof t}},function(t,e,r){"use strict";var n=Date.prototype.getDay,o=Object.prototype.toString,i="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;t.exports=function(t){return"object"==typeof t&&null!==t&&(i?function(t){try{return n.call(t),!0}catch(t){return!1}}(t):"[object Date]"===o.call(t))}},function(t,e,r){"use strict";var n=Object.prototype.toString;if(r(10)()){var o=Symbol.prototype.toString,i=/^Symbol\(.*\)$/;t.exports=function(t){if("symbol"==typeof t)return!0;if("[object Symbol]"!==n.call(t))return!1;try{return function(t){return"symbol"==typeof t.valueOf()&&i.test(o.call(t))}(t)}catch(t){return!1}}}else t.exports=function(t){return!1}},function(t,e,r){"use strict";var n=r(0),o=n("%String%"),i=n("%TypeError%");t.exports=function(t){if("symbol"==typeof t)throw new i("Cannot convert a Symbol value to a string");return o(t)}},function(t,e,r){"use strict";var n=r(0)("%Object%"),o=r(58);t.exports=function(t){return o(t),n(t)}},function(t,e,r){"use strict";t.exports=r(59)},function(t,e,r){"use strict";var n=r(0)("%TypeError%");t.exports=function(t,e){if(null==t)throw new n(e||"Cannot call method on "+t);return t}},function(t,e,r){"use strict";var n=r(8),o=r(22);t.exports=function(){var t=o();return n(Array.prototype,{flatMap:t},{flatMap:function(){return Array.prototype.flatMap!==t}}),t}},function(t,e,r){"use strict";function n(t){let e=window.crypto.getRandomValues(new Uint32Array(1))[0];return Math.floor(e/2**32*t)}r.r(e);var o,i,u=r(23);class a{constructor(t,e){this.die=t,this.face=e}}!function(t){t[t.SUCCESS=0]="SUCCESS",t[t.FAILURE=1]="FAILURE",t[t.EXPLODING=2]="EXPLODING",t[t.OPPORTUNITY=3]="OPPORTUNITY",t[t.SUCCESS_STRIFE=4]="SUCCESS_STRIFE",t[t.OPPORTUNITY_STRIFE=5]="OPPORTUNITY_STRIFE",t[t.EXPLODING_STRIFE=6]="EXPLODING_STRIFE",t[t.EXPLODING_OPPORTUNITY=7]="EXPLODING_OPPORTUNITY",t[t.SUCCESS_OPPORTUNITY=8]="SUCCESS_OPPORTUNITY"}(o||(o={})),function(t){t[t.RING=0]="RING",t[t.SKILL=1]="SKILL"}(i||(i={}));const c=[o.FAILURE,o.SUCCESS,o.SUCCESS_STRIFE,o.EXPLODING_STRIFE,o.OPPORTUNITY,o.OPPORTUNITY_STRIFE],s=[o.FAILURE,o.FAILURE,o.SUCCESS,o.SUCCESS,o.SUCCESS_OPPORTUNITY,o.SUCCESS_STRIFE,o.SUCCESS_STRIFE,o.EXPLODING,o.EXPLODING_STRIFE,o.OPPORTUNITY,o.OPPORTUNITY,o.OPPORTUNITY];class f{constructor(t=0,e=0,r=0,n=0,o=0){this.successes=t,this.failures=e,this.opportunity=r,this.exploding=n,this.strife=o}}class p{constructor(t=0,e=0){this.rings=t,this.skills=e}}class l extends a{get imageName(){return this.die===i.RING?this.face===o.FAILURE?"black":this.face===o.EXPLODING_STRIFE?"blacket":this.face===o.OPPORTUNITY?"blacko":this.face===o.OPPORTUNITY_STRIFE?"blackot":this.face===o.SUCCESS?"blacks":"blackst":this.face===o.FAILURE?"white":this.face===o.EXPLODING?"whitee":this.face===o.EXPLODING_STRIFE?"whiteet":this.face===o.OPPORTUNITY?"whiteo":this.face===o.SUCCESS?"whites":this.face===o.SUCCESS_OPPORTUNITY?"whiteso":"whitest"}}function y(t){return Object.assign(new f,t)}const d={identity:new f,combine:(t,e)=>new f(t.successes+e.successes,t.failures+e.failures,t.opportunity+e.opportunity,t.exploding+e.exploding,t.strife+e.strife)},b={identity:new p,combine:(t,e)=>new p(t.rings+e.rings,t.skills+e.skills)};function h(t,e){let r=0;for(let n of t)e(n)&&(r+=1);return r}function v(t,e){return t.reduce((t,r)=>e.combine(t,r),e.identity)}function g(t){return v(t.map(t=>(function(t){return t.face===o.SUCCESS?y({successes:1}):t.face===o.FAILURE?y({failures:1}):t.face===o.EXPLODING?y({successes:1,exploding:1}):t.face===o.OPPORTUNITY?y({opportunity:1}):t.face===o.SUCCESS_STRIFE?y({successes:1,strife:1}):t.face===o.OPPORTUNITY_STRIFE?y({opportunity:1,strife:1}):t.face===o.EXPLODING_STRIFE?y({successes:1,exploding:1,strife:1}):t.face===o.EXPLODING_OPPORTUNITY?y({successes:1,exploding:1,opportunity:1}):y({successes:1,opportunity:1})})(t)),d)}function S(t,e){return[...m(t.rings,c,e).map(t=>new l(i.RING,t)),...m(t.skills,s,e).map(t=>new l(i.SKILL,t))]}function m(t,e,r){return Object(u.shim)(),Array.from({length:t},()=>r(e.length)).map(t=>e[t]).flatMap(t=>(function(t){return t===o.EXPLODING_STRIFE||t===o.EXPLODING_OPPORTUNITY||t===o.EXPLODING})(t)?[t,...m(1,e,r)]:[t])}var w=r(24);var O='\n<div class="l5r-roller">\n    <div>\n        <form>\n            {{#rolls}}\n            <input type="checkbox" style="background-image: url(\'modules/l5r-roller/images/{{imageName}}.png\')" name="roll{{rollIndex}}" data-die="{{die}}" data-face="{{face}}"/>\n            {{/rolls}}\n            <button class="l5r-roller-reroll">re-roll selected</button>\n            <button class="l5r-roller-keep">keep selected</button>\n        </form>\n    </div>\n    <hr>\n    <div>\n        <ul>\n        {{#results}}\n            {{#successes}}\n            <li>Successes: {{successes}}</li>\n            {{/successes}}\n            {{#opportunity}}\n            <li>Opportunity: {{opportunity}}</li>\n            {{/opportunity}}\n            {{#strife}}\n            <li>Strife: {{strife}}</li>\n            {{/strife}}\n            {{#failures}}\n            <li>Failures: {{failures}}</li>\n            {{/failures}}\n        {{/results}}\n        </ul>\n    </div>\n</div>\n';function P(t){const e=t.replace(/\s+/g,"").toLowerCase();if(/^[1-9][0-9]*d(?:[rswb])(?:\+[1-9][0-9]*d(?:[rswb]))*$/.test(e))return function(t){return v(t.split("+").map(t=>{const e=t.split("d"),r=parseInt(e[0],10);return"r"===e[1]||"b"===e[1]?new p(r,0):new p(0,r)}),b)}(e);if(/^[rswb]+$/.test(e))return function(t){const e=t.split(""),r=h(e,t=>"r"===t||"b"===t),n=h(e,t=>"s"===t||"w"===t);return new p(r,n)}(e);throw new E(`Could not parse formula ${t}! Needs to be formatted like: "wwbb" or "rss" or "xdr" or "xds" or "xdr+yds" where x and y are positive numbers`)}class E extends Error{constructor(t){super(t)}}function j(t){return w.render(O,{rolls:t,results:g(t),timestamp:(new Date).getTime(),rollIndex:function(){return t.indexOf(this)}})}function A(t){return t.map(t=>{var e,r;const n=parseInt(null!=(e=t.dataset.die)?e:"0",10),o=parseInt(null!=(r=t.dataset.face)?r:"0",10);return new l(n,o)})}function I(t){const e={user:game.user.id,content:j(t)};ChatMessage.create(e,{displaySheet:!1})}Hooks.on("preCreateChatMessage",(t,e)=>{const r=e.content;if(void 0!==r&&r.startsWith("/l5r ")){const t=r.replace(/\/l5r /g,"");console.info(`Rolling formula ${t}`);try{const r=S(P(t),n);e.content=j(r)}catch(t){e.content=t.message}}}),Hooks.on("renderChatLog",()=>{$("#chat-log").on("click",".l5r-roller button",t=>{t.preventDefault();const e=t.target,r=e.parentElement,o=Array.from(r.querySelectorAll("input:checked")),u=Array.from(r.querySelectorAll("input:not(:checked)"));if(o.length>0){if(e.classList.contains("l5r-roller-keep")){I(A(o))}else{const t=A(o);I(function(t,e,r){const n=e.map(t=>t.die),o=h(n,t=>t===i.RING),u=h(n,t=>t===i.SKILL);return[...t,...S(new p(o,u),r)]}(A(u),t,n))}o.forEach(t=>t.checked=!1)}})})}]);