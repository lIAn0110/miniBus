!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(e,t){var r=["广丰白鹤畈车站","芦林汽车站","三官殿","洋口","昆山居","青桥","子坞","三条杠","王家山","老体育中心","上饶日报社(信江桥头)","步行街桥头","渡口(胜利桥头)","老火车站","上饶客运中心"].reverse(),n=["广丰白鹤畈车站","洋口","上饶火车站站前大道","上饶火车站(汽车东站)"].reverse(),o={sr2gf:{lineId:6,sites:r,pois:[{latitude:"28.451060",longitude:"118.199057"},{latitude:"28.438318",longitude:"118.169977"},{latitude:"28.425603",longitude:"118.146662"},{latitude:"28.399698",longitude:"118.115525"},{latitude:"28.403609",longitude:"118.093129"},{latitude:"28.404947",longitude:"118.073087"},{latitude:"28.408064",longitude:"118.060780"},{latitude:"28.411613",longitude:"118.048434"},{latitude:"28.434407",longitude:"118.012809"},{latitude:"28.452522",longitude:"117.990841"},{latitude:"28.446368",longitude:"117.981386"},{latitude:"28.447359",longitude:"117.969599"},{latitude:"28.452076",longitude:"117.966535"},{latitude:"28.460376",longitude:"117.975272"}].reverse()},gf2sr:{lineId:7,sites:["广丰白鹤畈车站","芦林汽车站","三官殿","洋口","昆山居","青桥","子坞","三条杠","王家山","老体育中心","上饶日报社(信江桥头)","步行街桥头","渡口(胜利桥头)","老火车站","上饶客运中心"],pois:[{latitude:"28.451060",longitude:"118.199057"},{latitude:"28.438318",longitude:"118.169977"},{latitude:"28.425603",longitude:"118.146662"},{latitude:"28.399698",longitude:"118.115525"},{latitude:"28.403609",longitude:"118.093129"},{latitude:"28.404947",longitude:"118.073087"},{latitude:"28.408064",longitude:"118.060780"},{latitude:"28.411613",longitude:"118.048434"},{latitude:"28.434407",longitude:"118.012809"},{latitude:"28.452522",longitude:"117.990841"},{latitude:"28.446368",longitude:"117.981386"},{latitude:"28.447359",longitude:"117.969599"},{latitude:"28.452076",longitude:"117.966535"},{latitude:"28.460376",longitude:"117.975272"}]},hcz2gf:{lineId:8,sites:n,pois:[{latitude:"28.451060",longitude:"118.199057"},{latitude:"28.399698",longitude:"118.115525"},{latitude:"28.479637",longitude:"118.017419"},{latitude:"28.495167",longitude:"118.012322"}].reverse()},gf2hcz:{lineId:9,sites:["广丰白鹤畈车站","洋口","上饶火车站站前大道","上饶火车站(汽车东站)"],pois:[{latitude:"28.451060",longitude:"118.199057"},{latitude:"28.399698",longitude:"118.115525"},{latitude:"28.479637",longitude:"118.017419"},{latitude:"28.495167",longitude:"118.012322"}]}};e.exports={busLineConfig:o,resBaseUrl:"http://jxsr.36596.cn/",queryBusStr:"?c=weixin&a=ajaxlinepoi"}},function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),i=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:i,assign:function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],i=o.obj[o.prop],a=Object.keys(i),l=0;l<a.length;++l){var u=a[l],c=i[u];"object"==typeof c&&null!==c&&-1===r.indexOf(c)&&(t.push({obj:i,prop:u}),r.push(c))}return function(e){for(var t;e.length;){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var n=[],o=0;o<t.length;++o)void 0!==t[o]&&n.push(t[o]);r.obj[r.prop]=n}}return t}(t)},decode:function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},encode:function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",n=0;n<t.length;++n){var i=t.charCodeAt(n);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?r+=t.charAt(n):i<128?r+=o[i]:i<2048?r+=o[192|i>>6]+o[128|63&i]:i<55296||i>=57344?r+=o[224|i>>12]+o[128|i>>6&63]+o[128|63&i]:(n+=1,i=65536+((1023&i)<<10|1023&t.charCodeAt(n)),r+=o[240|i>>18]+o[128|i>>12&63]+o[128|i>>6&63]+o[128|63&i])}return r},isBuffer:function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,r,o){if(!r)return t;if("object"!=typeof r){if(Array.isArray(t))t.push(r);else{if("object"!=typeof t)return[t,r];(o.plainObjects||o.allowPrototypes||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!=typeof t)return[t].concat(r);var a=t;return Array.isArray(t)&&!Array.isArray(r)&&(a=i(t,o)),Array.isArray(t)&&Array.isArray(r)?(r.forEach(function(r,i){n.call(t,i)?t[i]&&"object"==typeof t[i]?t[i]=e(t[i],r,o):t.push(r):t[i]=r}),t):Object.keys(r).reduce(function(t,i){var a=r[i];return n.call(t,i)?t[i]=e(t[i],a,o):t[i]=a,t},a)}}},function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},,function(e,t,r){"use strict";var n=r(8),o=r(9),i=r(2);e.exports={formats:i,parse:o,stringify:n}},,,function(e,t,r){"use strict";r.r(t);var n=r(4),o=r.n(n),i=r(0),a=getApp().global,l=a.fly;a.regeneratorRuntime;Page({onLoad:function(){console.log(i.busLineConfig),this.setData({busLineConfig:i.busLineConfig})},onShow:function(){this.getBusData()},data:{busLineConfig:{},currentBusLine:"gf2hcz",busData:[]},getBusData:function(){var e=this,t={lineId:i.busLineConfig[this.data.currentBusLine].lineId};l.post(i.resBaseUrl+i.queryBusStr,o.a.stringify(t)).then(function(t){1===t.data.returnCode&&(e.setData({busData:e.formatBusData(t.data.returnData)}),console.log(e.formatBusData(t.data.returnData)))}).catch(function(e){console.log(e)})},formatBusData:function(e){var t=!0,r=!1,n=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;a.sendTimeText=new Date(parseInt(a.sendTime+"000")),a.updateTimeText=new Date(parseInt(a.locUpdateTime+"000")),a.arrive=JSON.parse(a.ports)}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}return e}})},function(e,t,r){"use strict";var n=r(1),o=r(2),i={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},u=function e(t,r,o,i,a,u,c,s,d,f,p,y){var g=t;if("function"==typeof c)g=c(r,g);else if(g instanceof Date)g=f(g);else if(null===g){if(i)return u&&!y?u(r,l.encoder):r;g=""}if("string"==typeof g||"number"==typeof g||"boolean"==typeof g||n.isBuffer(g))return u?[p(y?r:u(r,l.encoder))+"="+p(u(g,l.encoder))]:[p(r)+"="+p(String(g))];var b,v=[];if(void 0===g)return v;if(Array.isArray(c))b=c;else{var m=Object.keys(g);b=s?m.sort(s):m}for(var h=0;h<b.length;++h){var j=b[h];a&&null===g[j]||(v=Array.isArray(g)?v.concat(e(g[j],o(r,j),o,i,a,u,c,s,d,f,p,y)):v.concat(e(g[j],r+(d?"."+j:"["+j+"]"),o,i,a,u,c,s,d,f,p,y)))}return v};e.exports=function(e,t){var r=e,a=t?n.assign({},t):{};if(null!==a.encoder&&void 0!==a.encoder&&"function"!=typeof a.encoder)throw new TypeError("Encoder has to be a function.");var c=void 0===a.delimiter?l.delimiter:a.delimiter,s="boolean"==typeof a.strictNullHandling?a.strictNullHandling:l.strictNullHandling,d="boolean"==typeof a.skipNulls?a.skipNulls:l.skipNulls,f="boolean"==typeof a.encode?a.encode:l.encode,p="function"==typeof a.encoder?a.encoder:l.encoder,y="function"==typeof a.sort?a.sort:null,g=void 0!==a.allowDots&&a.allowDots,b="function"==typeof a.serializeDate?a.serializeDate:l.serializeDate,v="boolean"==typeof a.encodeValuesOnly?a.encodeValuesOnly:l.encodeValuesOnly;if(void 0===a.format)a.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,a.format))throw new TypeError("Unknown format option provided.");var m,h,j=o.formatters[a.format];"function"==typeof a.filter?r=(h=a.filter)("",r):Array.isArray(a.filter)&&(m=h=a.filter);var O,w=[];if("object"!=typeof r||null===r)return"";O=a.arrayFormat in i?a.arrayFormat:"indices"in a?a.indices?"indices":"repeat":"indices";var x=i[O];m||(m=Object.keys(r)),y&&m.sort(y);for(var D=0;D<m.length;++D){var A=m[D];d&&null===r[A]||(w=w.concat(u(r[A],A,x,s,d,f?p:null,h,y,g,b,j,v)))}var L=w.join(c),P=!0===a.addQueryPrefix?"?":"";return L.length>0?P+L:""}},function(e,t,r){"use strict";var n=r(1),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,a=/(\[[^[\]]*])/.exec(n),l=a?n.slice(0,a.index):n,u=[];if(l){if(!r.plainObjects&&o.call(Object.prototype,l)&&!r.allowPrototypes)return;u.push(l)}for(var c=0;null!==(a=i.exec(n))&&c<r.depth;){if(c+=1,!r.plainObjects&&o.call(Object.prototype,a[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(a[1])}return a&&u.push("["+n.slice(a.index)+"]"),function(e,t,r){for(var n=t,o=e.length-1;o>=0;--o){var i,a=e[o];if("[]"===a)i=(i=[]).concat(n);else{i=r.plainObjects?Object.create(null):{};var l="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,u=parseInt(l,10);!isNaN(u)&&a!==l&&String(u)===l&&u>=0&&r.parseArrays&&u<=r.arrayLimit?(i=[])[u]=n:i[l]=n}n=i}return n}(u,t,r)}};e.exports=function(e,t){var r=t?n.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:i.delimiter,r.depth="number"==typeof r.depth?r.depth:i.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:i.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:i.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:i.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:i.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:i.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:i.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:i.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var l="string"==typeof e?function(e,t){for(var r={},n=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,a=t.parameterLimit===1/0?void 0:t.parameterLimit,l=n.split(t.delimiter,a),u=0;u<l.length;++u){var c,s,d=l[u],f=d.indexOf("]="),p=-1===f?d.indexOf("="):f+1;-1===p?(c=t.decoder(d,i.decoder),s=t.strictNullHandling?null:""):(c=t.decoder(d.slice(0,p),i.decoder),s=t.decoder(d.slice(p+1),i.decoder)),o.call(r,c)?r[c]=[].concat(r[c]).concat(s):r[c]=s}return r}(e,r):e,u=r.plainObjects?Object.create(null):{},c=Object.keys(l),s=0;s<c.length;++s){var d=c[s],f=a(d,l[d],r);u=n.merge(u,f,r)}return n.compact(u)}}]);