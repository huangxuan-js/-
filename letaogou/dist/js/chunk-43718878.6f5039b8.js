(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43718878"],{"0b87":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"hx-return"},[e("div",{staticClass:"return-previous",on:{click:t.routefallback}},[e("van-icon",{attrs:{name:"arrow-left"}})],1),e("div",{staticClass:"return-title"},[t._v(" "+t._s(t.title)+" ")]),e("div",{staticClass:"return-nav"})])},n=[],a={props:["title"],data:function(){return{}},methods:{routefallback:function(){"/order/tobepaid"==this.$route.path||"/order/tobereceived"==this.$route.path||"/order/whole"==this.$route.path||"/login/register"==this.$route.path||"/login/mylogin"==this.$route.path?this.$router.push({name:"user"}):this.$router.back(-1)}}},r=a,c=(e("baec"),e("2877")),l=Object(c["a"])(r,s,n,!1,null,"10822d84",null);i["a"]=l.exports},1399:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"collection"},[s("hx-Return",{attrs:{title:t.title}}),s("div",{staticClass:"title"},[t._v(" 共 "),s("span",[t._v(t._s(t.num))]),t._v("件商品 ")]),s("div",{staticClass:"order-content"},t._l(t.list,(function(i,n){return s("div",{key:n,staticClass:"item"},[s("div",{staticClass:"item-img"},[s("img",{attrs:{src:i.url,alt:""},on:{click:function(i){return t.add(n)}}})]),s("div",{staticClass:"item-tit van-multi-ellipsis--l2",on:{click:function(i){return t.add(n)}}},[s("img",{attrs:{src:e("6bec"),alt:""}}),t._v(t._s(i.title))]),s("div",{staticClass:"item-price"},[s("div",{staticClass:"item-pro"},[t._v(" ￥ "),s("span",[t._v(t._s(i.price))])]),s("div",{staticClass:"count"},[s("van-icon",{attrs:{name:"delete"},on:{click:function(i){return t.del(n)}}})],1)])])})),0)],1)},n=[],a=(e("a434"),e("0b87")),r={data:function(){return{title:"我的收藏",num:1,list:[]}},methods:{del:function(t){this.$store.commit("Nolike",this.list[t].id),this.$store.commit("del"),this.list.splice(t,1)},add:function(t){this.$router.push({name:"productdetails",query:this.list[t]})}},created:function(){this.list=this.$store.state.likelist,this.num=this.list.length,this.$store.state.vantTab=!1},components:{hxReturn:a["a"]}},c=r,l=(e("5763"),e("2877")),o=Object(l["a"])(c,s,n,!1,null,"df72e91c",null);i["default"]=o.exports},"36e6":function(t,i,e){},5763:function(t,i,e){"use strict";var s=e("af95"),n=e.n(s);n.a},"6bec":function(t,i){t.exports="data:image/png;base64,UklGRhgFAABXRUJQVlA4WAoAAAAQAAAAQwAAGwAAQUxQSD4AAAABL0AkQMIqRjrWbvJGRATvDNREstWQDEQH3wCp//MdMPgXdC1VRP8nQE+GX5KMW+du5Ub+pis3OneFMz3US1ZQOCC0BAAA8BwAnQEqRAAcAAAAACWwAzmwAdXeZ/hB+pP9c547XrsZ+kv9izGLjz+yflJ/VfcB/M/YB4lP9w6gHmA/Vn/M/znsAegB+tnWAegB+tPqgf3j/af2z4Hf1+/0H9x+An+Xf2S7Avo34QdTf0a9QP2A0A301+S/jJ+xn901A/8o/FX9l/91nFnxX+W/i5+XPoZ/iBzjf5T/UPxp41fqK/yz+w/k5/XfhS/svsz9l/y1/hPy0+gX+M/xr+h/kb/ef+99GfrJ9BL9Q0woOFQ4rwtPnATnAM+lFXRK+v0Nknt9uZsVaCp5JrNjbVx6Ggngc4gAAP7+Zr178u13Mj//pGr8Tgis///9EklVSQtSNHfWlh8HPz8uZK77NRv1AUaWNyX3YBoM/DV1J02V/jQUxc5/KTaYi12RIH1w1Fq7AdvwDemI9gguruaSbmoOu4May0elU/+tiz5fpsx7ZDcW+RxTkCXvxZam2BTl8wMdEQt9oEDtQLC8MXiXcZ2iBFkl+D4P85T1GH7boOX/2y+oAH2/Thn4gcZjT+lukz8iKs/+uaxXlkw+YnQrY9COLGM+FsDIoZMlytcdhM/vUt59TycsBTYH5se7ggp+mNLATyupSeOvEshJblbOF7tJ7DXbb1C0wKi8OTUT7cjffM95OIVNrPdNLjFFfM3QvvzW4XDpahnplNNO39ROy//5t7ZqST0Nje0tGZrYf//LBVV+w6qNilZegbcYsbUW9v3h+UmMAesLmOX/+JDkE5qTRoutvxYR+/x75SNzppF8414LtIk1f3z/7MlCpjSCViTFfQIXInMppYV/6P/VwEGIUcuQBaNL48ZT34ayNGKzkXPxYOyf8t3cy7BOUK3kCluQKnvLMzpbeyyUJ8P55iWN14g/penzQoILcmMup7DVZA6tfQb9kiY+57TbEs7ue/zKxKymusac86XiV4p0tz7pjCYzPNyrg2lrvl1X2I8a8EtqqjJtbkus5prukCyN6YjDa5WJsfvZrzwM0pppCb7QClWxe6500/Zm2eas73i2PdzUeVyy3gBT0PcTMmO04AMcjehQl7vLAj+vKmV64fIL/9fK8M6m5wVE0T3N5PPKhd/ci60F1jaM4NGr1Ue7cmtopQRcXrKXw8rpG89PT2+sDc1PpNpJ692HEpFWdmHeGdOkJZIZIzn/e8r9wTqZTfapg1FmdoLdU8Y2M7P2UMrQtJm+LmcpwzIx3J2cZw3ucfQKzqGzCeZuwb706FEY7Jeb5LThOFIhs61Nc/l5pNRwH+DD2DMQSuf4bvwv90qMLjXWiRc0TAUnXjSRJtL068qopP5Y9qfTbtq1c7UEpccGokQ2v9MbfmXtiZcXaimQ0mMK1y6RZeO+lXrKbmL84MBn5oQHkULyP3y5XJIoJgwcXJk7/9TmVsiCn/Ucnme+rIexWXFFlNU1BtOUDi9c8FUZYWtTjIogw36DDbilUaKurlF7zky0dfKud5jDysF2wBf6F6taebLWzRiGs5DsOBdZbrivggADI2TvjZf/976IaZhjjokD+q3HoX7ddeN2LgHqk92MkxEmBS/5E8egxHRQzkz992sI90/4L1goAhFwlrnIA5rWCgwAAA=="},af95:function(t,i,e){},baec:function(t,i,e){"use strict";var s=e("36e6"),n=e.n(s);n.a}}]);
//# sourceMappingURL=chunk-43718878.6f5039b8.js.map