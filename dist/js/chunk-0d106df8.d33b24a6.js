(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d106df8"],{"17ae":function(t,e,n){"use strict";var a=n("8b7a"),o=n.n(a);o.a},"76a1":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Head",{attrs:{title:"我的结算"}}),n("van-cell",{staticStyle:{"text-align":"left"},attrs:{icon:"balance-list-o",title:"我的订单"}}),n("van-card",{staticStyle:{"text-align":"left"},attrs:{num:t.count,price:t.obj.price,title:t.obj.name,thumb:t.obj.img}}),n("van-cell",{attrs:{title:t.money,id:"payfor"}},[n("button",{staticClass:"btn",on:{click:function(e){return t.onSubmit()}}},[t._v(" 确认结算")])]),n("van-cell",{staticStyle:{"text-align":"left"},attrs:{icon:"records",title:"我的地址"}}),n("Address",{ref:"info"})],1)},o=[],i=n("d399"),c={data:function(){return{obj:{},count:"",money:""}},created:function(){var t=this,e=this.$route.query.goodid;this.$axios.post("/vue/getpay",{goodid:e}).then((function(e){200==e.data.code?(Object(i["a"])("获取信息成功"),t.obj=e.data.result.goodInfo,t.count=e.data.result.count,t.money="合计 :￥"+t.count*t.obj.price+".00"):Object(i["a"])("获取信息失败")}))},methods:{onSubmit:function(){var t=this.$refs.info.addflag;t?(Object(i["a"])("结算成功"),this.$router.push({name:"end"})):Object(i["a"])("您还没有选择地址")}}},r=c,s=(n("17ae"),n("2877")),u=Object(s["a"])(r,a,o,!1,null,null,null);e["default"]=u.exports},"8b7a":function(t,e,n){}}]);
//# sourceMappingURL=chunk-0d106df8.d33b24a6.js.map