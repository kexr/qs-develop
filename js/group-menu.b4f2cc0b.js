(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["group-menu"],{"00be":function(e,t,n){"use strict";n("88bc")},"2f5a":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-layout"},[n("mobileConfig"),n("keep-alive",[n("router-view")],1)],1)},i=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("RkmobileDrag",{attrs:{top:"50px",left:"0px",isvisible:e.isvisible},on:{"update:isvisible":function(t){e.isvisible=t}},nativeOn:{mouseover:function(t){return e.hideBtnHeight("25px")},mouseout:function(t){return e.hideBtnHeight("0px")}}},[n("header",[e._v("组件库")]),n("ul",{on:{dragstart:function(t){return t.stopPropagation(),e.drag.apply(null,arguments)},dragend:function(e){e.stopPropagation()}}},[n("li",{attrs:{draggable:"true","data-elename":"RkFlexRow"}},[e._v("横向布局")]),n("li",{attrs:{draggable:"true","data-elename":"RkFlexCol"}},[e._v("纵向布局")]),n("li",{attrs:{draggable:"true","data-elename":"RkTitleOne"}},[e._v("标题")]),n("li",{attrs:{draggable:"true","data-elename":"RkTextp"}},[e._v("段落")])]),n("footer",{ref:"hideBtn",on:{click:function(t){e.isvisible=!1}}},[e._v(" 隐藏 ")])])},o=[],l={data:function(){return{isvisible:!0}},methods:{drag:function(e){"li"===e.target.nodeName.toLowerCase()&&e.dataTransfer.setData("Text",e.target.dataset.elename)},hideBtnHeight:function(e){this.$refs.hideBtn&&(this.$refs.hideBtn.style.height=e)}}},s=l,u=(n("00be"),n("2877")),c=Object(u["a"])(s,r,o,!1,null,"bb58b096",null),d=c.exports,f={components:{mobileConfig:d},methods:{}},p=f,g=(n("43d8"),Object(u["a"])(p,a,i,!1,null,"764ad5d2",null));t["default"]=g.exports},"43d8":function(e,t,n){"use strict";n("df90")},"5c55":function(e,t,n){},"88bc":function(e,t,n){},b096:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"two",on:{drop:e.drop,dragover:e.allowDrop}})},i=[],r=n("a601"),o={methods:{allowDrop:function(e){e.preventDefault()},drop:function(e){e.preventDefault();var t=e.dataTransfer.getData("Text");if(t.length>0){var n=r["a"].createEle(t);e.target.appendChild(n.$el)}}}},l=o,s=(n("cdfc"),n("2877")),u=Object(s["a"])(l,a,i,!1,null,"702d25b4",null);t["default"]=u.exports},cdfc:function(e,t,n){"use strict";n("5c55")},df90:function(e,t,n){}}]);
//# sourceMappingURL=group-menu.b4f2cc0b.js.map