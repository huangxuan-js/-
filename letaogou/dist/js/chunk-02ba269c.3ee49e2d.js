(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02ba269c"],{"0b87":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hx-return"},[a("div",{staticClass:"return-previous",on:{click:t.routefallback}},[a("van-icon",{attrs:{name:"arrow-left"}})],1),a("div",{staticClass:"return-title"},[t._v(" "+t._s(t.title)+" ")]),a("div",{staticClass:"return-nav"})])},n=[],i={props:["title"],data:function(){return{}},methods:{routefallback:function(){"/order/tobepaid"==this.$route.path||"/order/tobereceived"==this.$route.path||"/order/whole"==this.$route.path||"/login/register"==this.$route.path||"/login/mylogin"==this.$route.path?this.$router.push({name:"user"}):this.$router.back(-1)}}},r=i,o=(a("baec"),a("2877")),c=Object(o["a"])(r,e,n,!1,null,"10822d84",null);s["a"]=c.exports},"36e6":function(t,s,a){},a547:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"user"},[a("hx-Return",{attrs:{title:t.title}}),a("div",{staticClass:"user-header"},[a("div",{staticClass:"user_info"},[t._m(0),0==t.$store.state.login?a("div",{staticClass:"header_name",on:{click:function(s){return t.$router.push({name:"register"})}}},[t._v("登入/注册")]):t._e(),1==t.$store.state.login?a("div",{staticClass:"header_name",on:{click:function(s){return t.$router.push({name:"register"})}}},[t._v("用户名:"+t._s(t.$store.state.username))]):t._e()]),t._m(1)]),a("div",{staticClass:"user-cell-container"},[a("van-row",[a("van-col",{staticClass:"cell-container-col",attrs:{span:"8"},on:{click:function(s){return t.$router.push({name:"tobepaid",query:{activeName:"1"}})}}},[a("van-icon",{attrs:{name:"card"}}),a("span",[t._v("待付款")])],1),a("van-col",{staticClass:"cell-container-col",attrs:{span:"8"},on:{click:function(s){return t.$router.push({name:"tobereceived",query:{activeName:"2"}})}}},[a("van-icon",{attrs:{name:"shop"}}),a("span",[t._v("待收货")])],1),a("van-col",{staticClass:"cell-container-col",attrs:{span:"8"},on:{click:function(s){return t.$router.push({name:"whole",query:{activeName:"3"}})}}},[a("van-icon",{attrs:{name:"column"}}),a("span",[t._v("全部订单")])],1)],1)],1),a("div",{staticClass:"user-cell-collection"},[a("router-link",{attrs:{tag:"div",to:"/collection"}},[a("div",[t._v(t._s(t.$store.state.likelist.length))]),t._v(" 商品收藏 ")]),a("router-link",{attrs:{tag:"div",to:"/footprint"}},[a("div",[t._v(t._s(t.$store.state.footprintlist.length))]),t._v(" 我的足迹 ")])],1),a("div",{staticClass:"user-br"}),a("div",{staticClass:"user-administration",on:{click:t.address}},[a("van-row",{attrs:{type:"flex",justify:"space-between"}},[a("van-col",{attrs:{span:"1"}}),a("van-col",{attrs:{span:"6"}},[t._v("地址管理")]),a("van-col",{attrs:{span:"14"}}),a("van-col",{attrs:{span:"3"}},[a("van-icon",{attrs:{name:"arrow"}})],1)],1)],1),a("div",{staticClass:"user-administration"},[a("van-row",{attrs:{type:"flex",justify:"space-between"},on:{click:t.paymentsettings}},[a("van-col",{attrs:{span:"1"}}),a("van-col",{attrs:{span:"6"}},[t._v("支付设置")]),a("van-col",{attrs:{span:"14"}}),a("van-col",{attrs:{span:"3"}},[a("van-icon",{attrs:{name:"arrow"}})],1)],1)],1),a("div",{staticClass:"user-administration"},[a("van-row",{attrs:{type:"flex",justify:"space-between"},on:{click:t.personaldata}},[a("van-col",{attrs:{span:"1"}}),a("van-col",{attrs:{span:"6"}},[t._v("个人资料")]),a("van-col",{attrs:{span:"14"}}),a("van-col",{attrs:{span:"3"}},[a("van-icon",{attrs:{name:"arrow"}})],1)],1)],1)],1)},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"user-img"},[e("img",{attrs:{src:a("d3e7")}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"plus_black_wrap"},[e("div",{staticClass:"plus-img"},[e("img",{attrs:{src:a("cf27")}})]),e("div",{staticClass:"plus_title"},[t._v("免费试用 立领1张运费券")]),e("div",{staticClass:"plus_subtitle"},[t._v("0元试用")])])}],i=a("0b87"),r={data:function(){return{title:"我的乐淘购"}},methods:{personaldata:function(){0==this.$store.state.login?this.$toast("请登入"):this.$router.push({name:"personaldata"})},paymentsettings:function(){0==this.$store.state.login?this.$toast("请登入"):this.$router.push({name:"paymentsettings"})},address:function(){0==this.$store.state.login?this.$toast("请登入"):this.$router.push({name:"address"})}},created:function(){"/user"===this.$route.path&&(this.$store.state.num=3),this.$store.state.vantTab=!0},components:{hxReturn:i["a"]}},o=r,c=(a("e70a"),a("2877")),l=Object(c["a"])(o,e,n,!1,null,"3a92fbca",null);s["default"]=l.exports},b309:function(t,s,a){},baec:function(t,s,a){"use strict";var e=a("36e6"),n=a.n(e);n.a},cf27:function(t,s){t.exports="data:image/png;base64,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"},d3e7:function(t,s,a){t.exports=a.p+"img/usermy.83fd6e5d.png"},e70a:function(t,s,a){"use strict";var e=a("b309"),n=a.n(e);n.a}}]);
//# sourceMappingURL=chunk-02ba269c.3ee49e2d.js.map