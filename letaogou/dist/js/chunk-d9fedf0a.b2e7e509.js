(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9fedf0a"],{"0b87":function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"hx-return"},[i("div",{staticClass:"return-previous",on:{click:t.routefallback}},[i("van-icon",{attrs:{name:"arrow-left"}})],1),i("div",{staticClass:"return-title"},[t._v(" "+t._s(t.title)+" ")]),i("div",{staticClass:"return-nav"})])},n=[],a={props:["title"],data:function(){return{}},methods:{routefallback:function(){"/order/tobepaid"==this.$route.path||"/order/tobereceived"==this.$route.path||"/order/whole"==this.$route.path||"/login/register"==this.$route.path||"/login/mylogin"==this.$route.path?this.$router.push({name:"user"}):this.$router.back(-1)}}},r=a,c=(i("baec"),i("2877")),o=Object(c["a"])(r,e,n,!1,null,"10822d84",null);s["a"]=o.exports},"159b":function(t,s,i){var e=i("da84"),n=i("fdbc"),a=i("17c2"),r=i("9112");for(var c in n){var o=e[c],l=o&&o.prototype;if(l&&l.forEach!==a)try{r(l,"forEach",a)}catch(u){l.forEach=a}}},"17c2":function(t,s,i){"use strict";var e=i("b727").forEach,n=i("a640"),a=i("ae40"),r=n("forEach"),c=a("forEach");t.exports=r&&c?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},"18c9":function(t,s,i){t.exports=i.p+"img/hometuijian.713bf09b.png"},"36e6":function(t,s,i){},4160:function(t,s,i){"use strict";var e=i("23e7"),n=i("17c2");e({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"468e":function(t,s,i){"use strict";var e=i("e1cd"),n=i.n(e);n.a},"4de4":function(t,s,i){"use strict";var e=i("23e7"),n=i("b727").filter,a=i("1dde"),r=i("ae40"),c=a("filter"),o=r("filter");e({target:"Array",proto:!0,forced:!c||!o},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,s,i){"use strict";i.d(s,"a",(function(){return a}));i("a4d3"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("159b");function e(t,s,i){return s in t?Object.defineProperty(t,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[s]=i,t}function n(t,s){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);s&&(e=e.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),i.push.apply(i,e)}return i}function a(t){for(var s=1;s<arguments.length;s++){var i=null!=arguments[s]?arguments[s]:{};s%2?n(Object(i),!0).forEach((function(s){e(t,s,i[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))}))}return t}},"60fb":function(t,s,i){"use strict";var e=i("b936"),n=i.n(e);n.a},"65b1":function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"love-floor"},[t._m(0),e("div",{staticClass:"love-floor-list"},[e("ul",{staticClass:"find-similar-list"},t._l(t.list,(function(s,n){return e("li",{key:n},[e("div",{staticClass:"similar"},[e("img",{attrs:{src:s.url},on:{click:function(s){return t.add(n)}}})]),e("span",{staticClass:"similar-product-text"},[e("img",{attrs:{src:i("6bec"),alt:""}}),t._v(" "+t._s(s.title)+" ")]),e("p",{staticClass:"similar-product-info"},[e("span",{staticClass:"similar-product-price"},[t._v(" ¥ "),e("span",{staticClass:"big-price"},[t._v(t._s(s.price))])]),e("van-button",{attrs:{type:"danger",size:"small"},on:{click:function(s){return t.add(n)}}},[t._v("立即购买")])],1)])})),0)])])},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tit-img"},[e("img",{attrs:{src:i("18c9")}})])}],a=(i("fb6a"),{data:function(){return{list:[]}},methods:{add:function(t){this.$router.push({name:"productdetails",query:this.list[t]}),0!=this.$store.state.login&&this.$store.commit("addfootprint",this.list[t])}},created:function(){this.list=this.$store.state.list.slice(0,10)}}),r=a,c=(i("60fb"),i("2877")),o=Object(c["a"])(r,e,n,!1,null,"aa6fa396",null);s["a"]=o.exports},"6bec":function(t,s){t.exports="data:image/png;base64,UklGRhgFAABXRUJQVlA4WAoAAAAQAAAAQwAAGwAAQUxQSD4AAAABL0AkQMIqRjrWbvJGRATvDNREstWQDEQH3wCp//MdMPgXdC1VRP8nQE+GX5KMW+du5Ub+pis3OneFMz3US1ZQOCC0BAAA8BwAnQEqRAAcAAAAACWwAzmwAdXeZ/hB+pP9c547XrsZ+kv9izGLjz+yflJ/VfcB/M/YB4lP9w6gHmA/Vn/M/znsAegB+tnWAegB+tPqgf3j/af2z4Hf1+/0H9x+An+Xf2S7Avo34QdTf0a9QP2A0A301+S/jJ+xn901A/8o/FX9l/91nFnxX+W/i5+XPoZ/iBzjf5T/UPxp41fqK/yz+w/k5/XfhS/svsz9l/y1/hPy0+gX+M/xr+h/kb/ef+99GfrJ9BL9Q0woOFQ4rwtPnATnAM+lFXRK+v0Nknt9uZsVaCp5JrNjbVx6Ggngc4gAAP7+Zr178u13Mj//pGr8Tgis///9EklVSQtSNHfWlh8HPz8uZK77NRv1AUaWNyX3YBoM/DV1J02V/jQUxc5/KTaYi12RIH1w1Fq7AdvwDemI9gguruaSbmoOu4May0elU/+tiz5fpsx7ZDcW+RxTkCXvxZam2BTl8wMdEQt9oEDtQLC8MXiXcZ2iBFkl+D4P85T1GH7boOX/2y+oAH2/Thn4gcZjT+lukz8iKs/+uaxXlkw+YnQrY9COLGM+FsDIoZMlytcdhM/vUt59TycsBTYH5se7ggp+mNLATyupSeOvEshJblbOF7tJ7DXbb1C0wKi8OTUT7cjffM95OIVNrPdNLjFFfM3QvvzW4XDpahnplNNO39ROy//5t7ZqST0Nje0tGZrYf//LBVV+w6qNilZegbcYsbUW9v3h+UmMAesLmOX/+JDkE5qTRoutvxYR+/x75SNzppF8414LtIk1f3z/7MlCpjSCViTFfQIXInMppYV/6P/VwEGIUcuQBaNL48ZT34ayNGKzkXPxYOyf8t3cy7BOUK3kCluQKnvLMzpbeyyUJ8P55iWN14g/penzQoILcmMup7DVZA6tfQb9kiY+57TbEs7ue/zKxKymusac86XiV4p0tz7pjCYzPNyrg2lrvl1X2I8a8EtqqjJtbkus5prukCyN6YjDa5WJsfvZrzwM0pppCb7QClWxe6500/Zm2eas73i2PdzUeVyy3gBT0PcTMmO04AMcjehQl7vLAj+vKmV64fIL/9fK8M6m5wVE0T3N5PPKhd/ci60F1jaM4NGr1Ue7cmtopQRcXrKXw8rpG89PT2+sDc1PpNpJ692HEpFWdmHeGdOkJZIZIzn/e8r9wTqZTfapg1FmdoLdU8Y2M7P2UMrQtJm+LmcpwzIx3J2cZw3ucfQKzqGzCeZuwb706FEY7Jeb5LThOFIhs61Nc/l5pNRwH+DD2DMQSuf4bvwv90qMLjXWiRc0TAUnXjSRJtL068qopP5Y9qfTbtq1c7UEpccGokQ2v9MbfmXtiZcXaimQ0mMK1y6RZeO+lXrKbmL84MBn5oQHkULyP3y5XJIoJgwcXJk7/9TmVsiCn/Ucnme+rIexWXFFlNU1BtOUDi9c8FUZYWtTjIogw36DDbilUaKurlF7zky0dfKud5jDysF2wBf6F6taebLWzRiGs5DsOBdZbrivggADI2TvjZf/976IaZhjjokD+q3HoX7ddeN2LgHqk92MkxEmBS/5E8egxHRQzkz992sI90/4L1goAhFwlrnIA5rWCgwAAA=="},a0ae:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"productdetails"},[e("hx-Return",{staticClass:"productdetails-header"}),e("div",{staticClass:"productdetails-content"},[e("div",{staticClass:"product-img"},[e("img",{attrs:{src:t.url}})]),e("div",{staticClass:"product-price-collection"},[e("div",{staticClass:"product-price"},[e("span",[t._v("￥")]),e("span",{staticClass:"price"},[t._v(t._s(t.price))])]),e("div",{staticClass:"product-collection"},[e("div",{staticClass:"collection-icon"},[t.like?e("van-icon",{attrs:{color:"red",name:"like"},on:{click:t.Nolike}}):e("van-icon",{attrs:{name:"like"},on:{click:t.modifylike}})],1),e("span",[t._v("收藏")])])]),e("div",{staticClass:"product-title"},[t._v(t._s(t.title))])]),e("div",{staticClass:"detail-serve"},[e("span",[e("van-icon",{attrs:{name:"checked"}}),t._v("99元免基础运费(20kg内) ")],1),e("span",[e("van-icon",{attrs:{name:"checked"}}),t._v("京东发货 ")],1),e("span",[e("van-icon",{attrs:{name:"checked"}}),t._v("商家售后 ")],1),e("span",[e("van-icon",{attrs:{name:"checked"}}),t._v("7天无理由退货(激活后不支持) ")],1),e("span",[e("van-icon",{attrs:{name:"checked"}}),t._v("准达211限时达 ")],1),e("span",[e("van-icon",{attrs:{name:"checked"}}),t._v("免举证退换货 ")],1)]),e("div",{staticClass:"comment"},[e("div",{staticClass:"comment-header"},[e("span",[t._v("评价")]),e("span",{staticClass:"header-right"},[t._v(" 好评度99% "),e("van-icon",{attrs:{name:"arrow"}})],1)]),e("ul",[e("li",[e("div",{staticClass:"content"},[e("img",{attrs:{src:i("d3e7"),alt:""}}),e("span",{staticClass:"content-left"},[t._v(" 涛涛 "),e("van-icon",{attrs:{name:"star"}}),e("van-icon",{attrs:{name:"star"}}),e("van-icon",{attrs:{name:"star"}}),e("van-icon",{attrs:{name:"star"}}),e("van-icon",{attrs:{name:"star"}})],1),e("span",[t._v("2020-03-09")])]),e("div",{staticClass:"content-title van-multi-ellipsis--l3"},[t._v("平板和手机的屏幕对于孩子上网课来说都太小了，长时间对视力不好，开始研究用手机平板投屏或者把笔记本电脑连到电视屏幕上，一到互动时间孩子还是照样看小屏幕。买了…")])]),e("li",[e("div",{staticClass:"content"},[e("img",{attrs:{src:i("d3e7"),alt:""}}),e("span",{staticClass:"content-left"},[t._v(" 涛哥 "),e("van-icon",{attrs:{name:"star"}}),e("van-icon",{attrs:{name:"star"}}),e("van-icon",{attrs:{name:"star"}}),e("van-icon",{attrs:{name:"star"}}),e("van-icon",{attrs:{name:"star"}})],1),e("span",[t._v("2020-03-09")])]),e("div",{staticClass:"content-title van-multi-ellipsis--l3"},[t._v("老妈电脑坏了，翻了下京东，发现这个微型电脑。到货后还真是小呀……做工也很不错。对老年人来说，小巧，轻便，配置也好，还有保修，真的非常不错。里面已经安装了系…")])]),e("li",[e("div",{staticClass:"content"},[e("img",{attrs:{src:i("d3e7"),alt:""}}),e("span",{staticClass:"content-left"},[t._v(" 强哥 "),e("van-icon",{attrs:{name:"star"}}),e("van-icon",{attrs:{name:"star"}}),e("van-icon",{attrs:{name:"star"}}),e("van-icon",{attrs:{name:"star"}}),e("van-icon",{attrs:{name:"star"}})],1),e("span",[t._v("2020-03-09")])]),e("div",{staticClass:"content-title van-multi-ellipsis--l3"},[t._v("折腾了两天，熟悉了再来评论。刚买来系统有点问题，客服很有耐心，在客服和售后的指导下，重新安装了win10系统（另外win7也可以装，不过要先注入usb3驱动）！然后用鲁大师跑分跑了十三万多！比之前3700买的笔记本高出一倍多！然后测试了lol，特效开到最高，fps有250左右！这个配置已经已经足够大部分游戏和视频了。而且由于主机很小，用起来非常方便")])])])]),e("hx-Recommended",{staticClass:"recommended"}),e("van-popup",{staticClass:"productdetails-eject",style:{height:"70%"},attrs:{closeable:"",position:"bottom"},on:{close:t.setnum},model:{value:t.isshow,callback:function(s){t.isshow=s},expression:"isshow"}},[e("div",{staticClass:"eject-img"},[e("img",{attrs:{src:t.url,alt:""}}),e("div",{staticClass:"eject-tit"},[e("div",{staticClass:"van-multi-ellipsis--l2"},[t._v(t._s(t.title))]),e("span",[t._v("￥"+t._s(t.price))])])]),e("ul",[e("div",[t._v("规格")]),t._l(t.specificationslist,(function(s,i){return e("li",{key:i,class:{con:t.No==i+1},on:{click:function(e){return t.Nos(s,i)}}},[t._v(t._s(s))])}))],2),e("div",{staticClass:"btn"},[e("van-stepper",{model:{value:t.num,callback:function(s){t.num=s},expression:"num"}})],1),e("van-button",{attrs:{type:"danger",size:"large",round:""},on:{click:t.add}},[t._v("确认")])],1),e("van-popup",{staticClass:"productdetails-eject",style:{height:"70%"},attrs:{closeable:"",position:"bottom"},on:{close:t.setnum},model:{value:t.show,callback:function(s){t.show=s},expression:"show"}},[e("div",{staticClass:"eject-img"},[e("img",{attrs:{src:t.url,alt:""}}),e("div",{staticClass:"eject-tit"},[e("div",{staticClass:"van-multi-ellipsis--l2"},[t._v(t._s(t.title))]),e("span",[t._v("￥"+t._s(t.price))])])]),e("ul",[e("div",[t._v("规格")]),t._l(t.specificationslist,(function(s,i){return e("li",{key:i,class:{con:t.No==i},on:{click:function(e){return t.Nos(s,i)}}},[t._v(t._s(s))])}))],2),e("div",{staticClass:"btn"},[e("van-stepper",{model:{value:t.num,callback:function(s){t.num=s},expression:"num"}})],1),e("van-button",{attrs:{type:"danger",size:"large",round:""},on:{click:t.Add}},[t._v("确认")])],1),e("van-goods-action",{staticClass:"productdetails-bar"},[e("van-goods-action-icon",{attrs:{icon:"chat-o",text:"客服",dot:""}}),e("van-goods-action-icon",{attrs:{icon:"cart-o",text:"购物车",badge:t.nums,to:"/shoppingcart"}}),e("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:function(s){t.isshow=!0}}}),e("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"},on:{click:function(s){t.show=!0}}})],1)],1)},n=[],a=i("5530"),r=i("0b87"),c=i("65b1"),o=i("2f62"),l=Object(o["a"])("cart"),u=l.mapState,d=(l.mapMutations,{data:function(){return{value:1,isshow:!1,show:!1,No:1,specificationslist:["套餐一","套餐二","套餐三"],check:!0,like:!1,num:1,specifications:"套餐一"}},methods:{modifylike:function(){if(0!=this.$store.state.login){var t=this.id.substring(0,8);this.$store.commit("modifylike",t),this.like=!0}else this.$toast("请登入")},Nolike:function(){var t=this.id.substring(0,8);this.$store.commit("Nolike",t),this.like=!1},add:function(){if(0==this.$store.state.login)return this.$toast("请先登入"),void this.$router.push({name:"mylogin"});var t={check:this.check,id:this.id,title:this.title,price:this.price,num:this.num,url:this.url,specifications:this.specifications};this.$store.commit("cart/add",t),this.isshow=!1,this.num=1},Nos:function(t,s){this.No=s+1,this.specifications=t,this.id=this.id+""+this.No},setnum:function(){this.num=1},Add:function(){if(0==this.$store.state.login)return this.$toast("请先登入"),void this.$router.push({name:"mylogin"});var t=[{num:this.num,price:this.price,specifications:this.specifications,title:this.title,url:this.url}];this.$store.state.tobepaidlist={obj:t,price:100*this.price},this.$router.push({name:"placeorder"})}},computed:Object(a["a"])({},u({nums:function(t){return t.nums}})),created:function(){this.$store.state.vantTab=!1,document.body.scrollTop=0,document.documentElement.scrollTop=0,this.url=this.$route.query.url,this.title=this.$route.query.title,this.price=this.$route.query.price,this.id=this.$route.query.id,this.like=this.$route.query.like},watch:{$route:function(t){this.url=t.query.url,this.title=t.query.title,this.price=t.query.price,this.id=t.query.id}},beforeDestroy:function(){},components:{hxReturn:r["a"],hxRecommended:c["a"]}}),p=d,v=(i("468e"),i("2877")),f=Object(v["a"])(p,e,n,!1,null,"42a67de1",null);s["default"]=f.exports},a640:function(t,s,i){"use strict";var e=i("d039");t.exports=function(t,s){var i=[][t];return!!i&&e((function(){i.call(null,s||function(){throw 1},1)}))}},b64b:function(t,s,i){var e=i("23e7"),n=i("7b0b"),a=i("df75"),r=i("d039"),c=r((function(){a(1)}));e({target:"Object",stat:!0,forced:c},{keys:function(t){return a(n(t))}})},b936:function(t,s,i){},baec:function(t,s,i){"use strict";var e=i("36e6"),n=i.n(e);n.a},d3e7:function(t,s,i){t.exports=i.p+"img/usermy.83fd6e5d.png"},dbb4:function(t,s,i){var e=i("23e7"),n=i("83ab"),a=i("56ef"),r=i("fc6a"),c=i("06cf"),o=i("8418");e({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var s,i,e=r(t),n=c.f,l=a(e),u={},d=0;while(l.length>d)i=n(e,s=l[d++]),void 0!==i&&o(u,s,i);return u}})},e1cd:function(t,s,i){},e439:function(t,s,i){var e=i("23e7"),n=i("d039"),a=i("fc6a"),r=i("06cf").f,c=i("83ab"),o=n((function(){r(1)})),l=!c||o;e({target:"Object",stat:!0,forced:l,sham:!c},{getOwnPropertyDescriptor:function(t,s){return r(a(t),s)}})}}]);
//# sourceMappingURL=chunk-d9fedf0a.b2e7e509.js.map