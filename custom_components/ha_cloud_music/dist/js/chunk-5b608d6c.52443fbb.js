(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b608d6c"],{"1a25":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"historyList"},[s("music-list",{attrs:{list:t.historyList,"list-type":1},on:{select:t.selectItem,del:t.deleteItem}},[s("div",{staticClass:"list-btn",attrs:{slot:"listBtn"},slot:"listBtn"},[s("span",{on:{click:function(e){return t.$refs.dialog.show()}}},[t._v("清空列表")])])]),s("mm-dialog",{ref:"dialog",attrs:{"body-text":"是否清空播放历史列表","confirm-btn-text":"清空"},on:{confirm:t.clearList}})],1)},r=[],c=(s("8e6e"),s("ac6a"),s("456d"),s("75fc")),n=s("bd86"),o=s("2f62"),a=s("5362"),l=s("093b");function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function b(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(s,!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var f={name:"HistoryList",components:{MusicList:a["a"],MmDialog:l["a"]},computed:b({},Object(o["c"])(["historyList","playing","currentMusic"])),methods:b({clearList:function(){this.clearHistory(),this.$mmToast("列表清空成功")},selectItem:function(t,e){this.selectPlay({list:this.historyList,index:e})},deleteItem:function(t){var e=Object(c["a"])(this.historyList);e.splice(t,1),this.removeHistory(e),this.$mmToast("删除成功")}},Object(o["d"])({setPlaying:"SET_PLAYING"}),{},Object(o["b"])(["selectPlay","clearHistory","removeHistory"]))},p=f,y=(s("b635"),s("2877")),m=Object(y["a"])(p,i,r,!1,null,"74627c03",null);e["default"]=m.exports},"4e72":function(t,e,s){},b635:function(t,e,s){"use strict";var i=s("4e72"),r=s.n(i);r.a}}]);
//# sourceMappingURL=chunk-5b608d6c.52443fbb.js.map