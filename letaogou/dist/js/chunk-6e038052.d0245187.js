(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e038052"],{"0b87":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hx-return"},[a("div",{staticClass:"return-previous",on:{click:t.routefallback}},[a("van-icon",{attrs:{name:"arrow-left"}})],1),a("div",{staticClass:"return-title"},[t._v(" "+t._s(t.title)+" ")]),a("div",{staticClass:"return-nav"})])},i=[],s={props:["title"],data:function(){return{}},methods:{routefallback:function(){"/order/tobepaid"==this.$route.path||"/order/tobereceived"==this.$route.path||"/order/whole"==this.$route.path||"/login/register"==this.$route.path||"/login/mylogin"==this.$route.path?this.$router.push({name:"user"}):this.$router.back(-1)}}},n=s,o=(a("baec"),a("2877")),c=Object(o["a"])(n,r,i,!1,null,"10822d84",null);e["a"]=c.exports},"36e6":function(t,e,a){},"5cdf":function(t,e,a){"use strict";var r=a("68f2"),i=a.n(r);i.a},"68f2":function(t,e,a){},baec:function(t,e,a){"use strict";var r=a("36e6"),i=a.n(r);i.a},dbf5:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order"},[a("hx-Return",{attrs:{title:t.title}}),a("van-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("van-tab",{attrs:{title:"待付款",name:"1",to:"/order/tobepaid"}}),a("van-tab",{attrs:{title:"待收货",name:"2",to:"/order/tobereceived"}}),a("van-tab",{attrs:{title:"全部",name:"3",to:"/order/whole"}})],1),a("router-view")],1)},i=[],s=a("0b87"),n={data:function(){return{title:"我的订单",activeName:"1"}},created:function(){this.activeName=this.$route.query.activeName,this.lists=this.$store.state.address.lists,this.$store.state.vantTab=!1},beforeDestroy:function(){this.$store.state.vantTab=!0},components:{hxReturn:s["a"]}},o=n,c=(a("5cdf"),a("2877")),u=Object(c["a"])(o,r,i,!1,null,"8b5e7262",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-6e038052.d0245187.js.map