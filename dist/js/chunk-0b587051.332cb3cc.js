(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b587051"],{6632:function(t,a,n){"use strict";var i=n("d248"),s=n.n(i);s.a},b0c0:function(t,a,n){var i=n("83ab"),s=n("9bf2").f,o=Function.prototype,e=o.toString,c=/^\s*function ([^ (]*)/,l="name";!i||l in o||s(o,l,{configurable:!0,get:function(){try{return e.call(this).match(c)[1]}catch(t){return""}}})},c84b:function(t,a,n){"use strict";n.r(a);var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("Head",{attrs:{title:t.detail.name}}),n("div",{staticClass:"imgbox"},[n("img",{attrs:{src:t.detail.img}})]),n("div",{attrs:{id:"detail"}},[n("div",{staticClass:"dname"},[n("span",{staticClass:"price1"},[t._v("￥"+t._s(t.detail.price)+".00")]),n("span",{staticClass:"price2"},[t._v("￥"+t._s(t.detail.price)+"8.00")]),n("span",{staticClass:"price3",staticStyle:{"margin-left":"60%"}},[t._v("包邮")])]),n("p",{staticClass:"name"},[t._v("【新品】"+t._s(t.detail.name))])]),n("van-cell-group",[n("van-cell",{attrs:{title:"24小时发货 · 7天包退 · 售后补贴","is-link":""}}),n("van-cell",{attrs:{title:t.shopname1,"is-link":"",id:"shop1"}}),n("van-cell",{attrs:{title:t.shopname,"is-link":"",id:"shop"}})],1),n("van-tabs",{attrs:{type:"card"}},[n("van-tab",{attrs:{title:"详情"}},[n("van-notice-bar",{attrs:{text:"重要通知：包邮促销！！！包邮促销！！！包邮促销！！！","left-icon":"volume-o"}}),n("img",{staticClass:"showimg",attrs:{src:t.detail.img}})],1),n("van-tab",{attrs:{title:"评价"}},[t._v("评价")]),n("van-tab",{attrs:{title:"售后"}},[n("van-cell",{attrs:{title:"常用快递 ：中通快递"}}),n("van-cell",{attrs:{title:"运费：全国包邮(偏远地区除外)"}})],1)],1),n("van-goods-action",[n("van-goods-action-icon",{attrs:{icon:"chat-o",text:"客服"},on:{click:t.onClickIcon}}),n("van-goods-action-icon",{attrs:{icon:"cart-o",text:"购物车",info:t.num},on:{click:t.onClickIcon}}),n("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:t.onClickButton}}),n("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"},on:{click:t.onClickButton}})],1),n("van-popup",{style:{height:"45%"},attrs:{round:!0,position:"bottom"},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[n("div",{staticClass:"top"},[n("div",{staticClass:"leftimg"},[n("img",{attrs:{src:t.detail.img,alt:""}})]),n("div",{staticClass:"rightbox"},[n("p",{staticClass:"p1"},[t._v("￥"+t._s(t.detail.price)+".00")]),n("p",{staticClass:"p2"},[t._v(t._s(t.shopname1))])])]),n("van-icon",{attrs:{name:"close",id:"close",size:"30px"},on:{click:function(a){return t.close()}}}),n("van-divider"),n("div",{staticClass:"countbox"},[n("span",[t._v("数量：")]),n("van-stepper",{attrs:{id:"count"},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1),n("van-divider"),n("van-button",{attrs:{color:"linear-gradient(to right, #ff8917,#ee0a24)",id:"OK"},on:{click:function(a){return t.ok()}}},[t._v("确定")])],1)],1)},s=[],o=(n("b0c0"),n("d399")),e={data:function(){return{detail:[],shopname:"",shopname1:"",show:!1,value:1,num:""}},created:function(){var t=this,a=this.$route.query.Id;window.console.log(a),this.$axios.post("/vue/getGoodDetail",{params:{Id:a}}).then((function(a){t.detail=a.data.result;var n=t.detail.name.substring(0,4);t.shopname="店铺:"+n+"官方旗舰店",t.shopname1="已选择:"+t.detail.name.substring(0,23)+"...."}))},mounted:function(){var t=this;this.$axios.post("/vue/getShopcarInfo",{username:window.localStorage.getItem("users")}).then((function(a){t.num=a.data.total}))},methods:{onClickIcon:function(){this.$router.push({name:"car"})},onClickButton:function(){this.show=!0},close:function(){this.show=!1},ok:function(){this.$axios.post("/vue/addShopCar",{username:window.localStorage.getItem("users"),goodId:this.$route.query.Id,count:this.value,goodInfo:this.detail}).then((function(t){200==t.data.code?Object(o["a"])("加入成功！"):Object(o["a"])("加入失败，请重试")})),this.show=!1}}},c=e,l=(n("6632"),n("2877")),r=Object(l["a"])(c,i,s,!1,null,"42928168",null);a["default"]=r.exports},d248:function(t,a,n){}}]);
//# sourceMappingURL=chunk-0b587051.332cb3cc.js.map