(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b2da74c"],{"02f4":function(t,e,n){var a=n("4588"),r=n("be13");t.exports=function(t){return function(e,n){var i,c,o=String(r(e)),s=a(n),l=o.length;return s<0||s>=l?t?"":void 0:(i=o.charCodeAt(s),i<55296||i>56319||s+1===l||(c=o.charCodeAt(s+1))<56320||c>57343?t?o.charAt(s):i:t?o.slice(s,s+2):c-56320+(i-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var a=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},"28a5":function(t,e,n){"use strict";var a=n("aae3"),r=n("cb7c"),i=n("ebd6"),c=n("0390"),o=n("9def"),s=n("5f1b"),l=n("520a"),u=n("79e5"),m=Math.min,d=[].push,f="split",h="length",v="lastIndex",p=4294967295,g=!u((function(){RegExp(p,"y")}));n("214f")("split",2,(function(t,e,n,u){var b;return b="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[h]||2!="ab"[f](/(?:ab)*/)[h]||4!="."[f](/(.?)(.?)/)[h]||"."[f](/()()/)[h]>1||""[f](/.?/)[h]?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!a(t))return n.call(r,t,e);var i,c,o,s=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,f=void 0===e?p:e>>>0,g=new RegExp(t.source,u+"g");while(i=l.call(g,r)){if(c=g[v],c>m&&(s.push(r.slice(m,i.index)),i[h]>1&&i.index<r[h]&&d.apply(s,i.slice(1)),o=i[0][h],m=c,s[h]>=f))break;g[v]===i.index&&g[v]++}return m===r[h]?!o&&g.test("")||s.push(""):s.push(r.slice(m)),s[h]>f?s.slice(0,f):s}:"0"[f](void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,a){var r=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r,a):b.call(String(r),n,a)},function(t,e){var a=u(b,t,this,e,b!==n);if(a.done)return a.value;var l=r(t),d=String(this),f=i(l,RegExp),h=l.unicode,v=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(g?"y":"g"),y=new f(g?l:"^(?:"+l.source+")",v),_=void 0===e?p:e>>>0;if(0===_)return[];if(0===d.length)return null===s(y,d)?[d]:[];var C=0,w=0,k=[];while(w<d.length){y.lastIndex=g?w:0;var O,x=s(y,g?d:d.slice(w));if(null===x||(O=m(o(y.lastIndex+(g?0:w)),d.length))===C)w=c(d,w,h);else{if(k.push(d.slice(C,w)),k.length===_)return k;for(var S=1;S<=x.length-1;S++)if(k.push(x[S]),k.length===_)return k;w=C=O}}return k.push(d.slice(C)),k}]}))},"2ad4":function(t,e,n){},4917:function(t,e,n){"use strict";var a=n("cb7c"),r=n("9def"),i=n("0390"),c=n("5f1b");n("214f")("match",1,(function(t,e,n,o){return[function(n){var a=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,a):new RegExp(n)[e](String(a))},function(t){var e=o(n,t,this);if(e.done)return e.value;var s=a(t),l=String(this);if(!s.global)return c(s,l);var u=s.unicode;s.lastIndex=0;var m,d=[],f=0;while(null!==(m=c(s,l))){var h=String(m[0]);d[f]=h,""===h&&(s.lastIndex=i(l,r(s.lastIndex),u)),f++}return 0===f?null:d}]}))},a3ad:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment"},[n("mm-loading",{model:{value:t.mmLoadShow,callback:function(e){t.mmLoadShow=e},expression:"mmLoadShow"}}),t.hotComments.length>0?n("dl",{staticClass:"comment-list",on:{scroll:function(e){return t.listScroll(e)}}},[n("dt",{staticClass:"comment-title"},[t._v("精彩评论")]),t._l(t.hotComments,(function(e){return n("dd",{key:e.commentId,staticClass:"comment-item"},[n("a",{attrs:{target:"_blank",href:"http://music.163.com/#/user/home?id="+e.user.userId}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.user.avatarUrl+"?param=50y50",expression:"`${item.user.avatarUrl}?param=50y50`"}],staticClass:"comment-item-pic"}),n("h2",{staticClass:"comment-item-title"},[t._v(t._s(e.user.nickname))])]),n("p",{staticClass:"comment-item-disc"},[t._v(t._s(e.content))]),n("div",{staticClass:"comment-item-opt"},[n("span",{staticClass:"comment-opt-date"},[t._v(t._s(t._f("format")(e.time)))]),n("span",{staticClass:"comment-opt-liked"},[n("mm-icon",{attrs:{type:"good"}}),t._v("\n          "+t._s(e.likedCount)+"\n        ")],1)])])})),n("dt",{staticClass:"comment-title"},[t._v("最新评论（"+t._s(t.total)+"）")]),t._l(t.commentList,(function(e){return n("dd",{key:e.commentId,staticClass:"comment-item"},[n("a",{staticClass:"comment-item-pic",attrs:{target:"_blank",href:"http://music.163.com/#/user/home?id="+e.user.userId}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.user.avatarUrl+"?param=50y50",expression:"`${item.user.avatarUrl}?param=50y50`"}],staticClass:"cover-img"})]),n("h2",{staticClass:"comment-item-title"},[n("a",{attrs:{target:"_blank",href:"http://music.163.com/#/user/home?id="+e.user.userId}},[t._v(t._s(e.user.nickname))])]),n("p",{staticClass:"comment-item-disc"},[t._v(t._s(e.content))]),t._l(e.beReplied,(function(e){return n("div",{key:e.user.userId,staticClass:"comment-item-replied"},[n("a",{attrs:{target:"_blank",href:"http://music.163.com/#/user/home?id="+e.user.userId}},[t._v(t._s(e.user.nickname))]),t._v("\n        ："+t._s(e.content)+"\n      ")])})),n("div",{staticClass:"comment-item-opt"},[n("span",{staticClass:"comment-opt-date"},[t._v(t._s(t._f("format")(e.time)))]),e.likedCount>0?n("span",{staticClass:"comment-opt-liked"},[n("mm-icon",{attrs:{type:"good"}}),t._v("\n          "+t._s(e.likedCount)+"\n        ")],1):t._e()])],2)}))],2):t._e()],1)},r=[],i=n("75fc"),c=n("365c"),o=n("ca00"),s=n("f904"),l=n("ac0d"),u={name:"Comment",components:{MmLoading:s["a"]},filters:{format:function(t){var e,n=new Date(t),a={year:n.getFullYear(),month:n.getMonth(),date:n.getDate(),hours:n.getHours(),minutes:n.getMinutes()},r=new Date,i=r.getTime()-t;return e=r.getDate()===a.date&&i<6e4?"刚刚":r.getDate()===a.date&&i>6e4&&i<36e5?"".concat(Math.floor(i/6e4),"分钟前"):r.getDate()===a.date&&i>36e5&&i<864e5?"".concat(Object(o["a"])(a.hours),":").concat(Object(o["a"])(a.minutes)):r.getDate()!==a.date&&i<864e5?"昨天".concat(Object(o["a"])(a.hours),":").concat(Object(o["a"])(a.minutes)):r.getFullYear()===a.year?"".concat(a.month+1,"月").concat(a.date,"日"):"".concat(a.year,"年").concat(a.month+1,"月").concat(a.date,"日"),e}},mixins:[l["a"]],data:function(){return{lockUp:!0,page:0,hotComments:[],commentList:[],total:null}},watch:{commentList:function(t,e){t.length!==e.length&&(this.lockUp=!1)}},created:function(){this.initData()},methods:{initData:function(){var t=this;Object(c["b"])(this.$route.params.id,this.page).then((function(e){200===e.data.code&&(t.hotComments=e.data.hotComments,t.commentList=e.data.comments,t.total=e.data.total,t.lockUp=!0,t._hideLoad())}))},listScroll:function(t){if(!this.lockUp){var e=t.target,n=e.scrollTop,a=e.scrollHeight,r=e.offsetHeight;n+r>=a-100&&(this.lockUp=!0,this.page+=1,this.pullUp())}},pullUp:function(){var t=this;Object(c["b"])(this.$route.params.id,this.page).then((function(e){200===e.data.code&&(t.commentList=[].concat(Object(i["a"])(t.commentList),Object(i["a"])(e.data.comments)))}))}}},m=u,d=(n("b01f"),n("2877")),f=Object(d["a"])(m,a,r,!1,null,"a22effda",null);e["default"]=f.exports},a481:function(t,e,n){"use strict";var a=n("cb7c"),r=n("4bf8"),i=n("9def"),c=n("4588"),o=n("0390"),s=n("5f1b"),l=Math.max,u=Math.min,m=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,(function(t,e,n,v){return[function(a,r){var i=t(this),c=void 0==a?void 0:a[e];return void 0!==c?c.call(a,i,r):n.call(String(i),a,r)},function(t,e){var r=v(n,t,this,e);if(r.done)return r.value;var m=a(t),d=String(this),f="function"===typeof e;f||(e=String(e));var g=m.global;if(g){var b=m.unicode;m.lastIndex=0}var y=[];while(1){var _=s(m,d);if(null===_)break;if(y.push(_),!g)break;var C=String(_[0]);""===C&&(m.lastIndex=o(d,i(m.lastIndex),b))}for(var w="",k=0,O=0;O<y.length;O++){_=y[O];for(var x=String(_[0]),S=l(u(c(_.index),d.length),0),j=[],I=1;I<_.length;I++)j.push(h(_[I]));var L=_.groups;if(f){var M=[x].concat(j,S,d);void 0!==L&&M.push(L);var D=String(e.apply(void 0,M))}else D=p(x,d,S,j,L,e);S>=k&&(w+=d.slice(k,S)+D,k=S+x.length)}return w+d.slice(k)}];function p(t,e,a,i,c,o){var s=a+t.length,l=i.length,u=f;return void 0!==c&&(c=r(c),u=d),n.call(o,u,(function(n,r){var o;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(s);case"<":o=c[r.slice(1,-1)];break;default:var u=+r;if(0===u)return n;if(u>l){var d=m(u/10);return 0===d?n:d<=l?void 0===i[d-1]?r.charAt(1):i[d-1]+r.charAt(1):n}o=i[u-1]}return void 0===o?"":o}))}}))},ac0d:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("8e6e"),n("ac6a"),n("456d");var a=n("bd86"),r=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}c({},Object(r["c"])(["playing","currentMusic"])),c({selectItem:function(t,e){t.id===this.currentMusic.id&&this.playing?this.setPlaying(!1):this.selectPlay({list:this.list,index:e})}},Object(r["d"])({setPlaying:"SET_PLAYING"}),{},Object(r["b"])(["selectPlay"]));var o={data:function(){return{mmLoadShow:!0}},methods:{_hideLoad:function(){var t,e=this;clearTimeout(t),t=setTimeout((function(){e.mmLoadShow=!1}),200)}}}},b01f:function(t,e,n){"use strict";var a=n("2ad4"),r=n.n(a);r.a},ca00:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return o}));n("c5f6"),n("a481"),n("4917"),n("28a5");function a(t,e){var n=-1,a=t.length;e||(e=new Array(a));while(++n<a)e[n]=t[n];return e}var r=function(t){var e=null==t?0:t.length;if(!e)return[];var n=-1,r=e-1,i=a(t);while(++n<e){var c=n+Math.floor(Math.random()*(r-n+1)),o=i[c];i[c]=i[n],i[n]=o}return t};function i(t){return t<10?"0"+t:t}function c(t){for(var e=t.split("\n"),n=[],a=0;a<e.length;a++){var r=decodeURIComponent(e[a]),i=/\[\d*:\d*((\.|:)\d*)*\]/g,c=r.match(i);if(c)for(var o=r.replace(i,""),s=0,l=c.length;s<l;s++){var u=c[s],m=Number(String(u.match(/\[\d*/i)).slice(1)),d=Number(String(u.match(/:\d*/i)).slice(1)),f=60*m+d;""!==o&&n.push({time:f,text:o})}}return n}function o(t){var e=Math.floor(t/60),n=Math.floor(t%60);return"".concat(i(e),":").concat(i(n))}}}]);
//# sourceMappingURL=chunk-7b2da74c.74c9a576.js.map