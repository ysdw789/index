(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e645fbe"],{3191:function(t,e,a){"use strict";var i=a("b775");e["a"]={getHomeInfo:function(){return Object(i["a"])({url:"/home/info",method:"get"})},rechargeAccount:function(t,e){return Object(i["a"])({url:"/home/recharge",method:"get",params:{username:t,code:e}})},registAccount:function(t){return Object(i["a"])({url:"/home/regist",method:"get",params:{appId:t.appId,appName:t.appName,serverId:t.serverId,username:t.username,password:t.password,code:t.code}})},queryAccount:function(t){return Object(i["a"])({url:"/home/query",method:"get",params:{username:t}})}}},"4e82":function(t,e,a){"use strict";var i=a("23e7"),c=a("1c0b"),s=a("7b0b"),o=a("d039"),r=a("a640"),l=[],n=l.sort,d=o((function(){l.sort(void 0)})),u=o((function(){l.sort(null)})),h=r("sort"),p=d||!u||!h;i({target:"Array",proto:!0,forced:p},{sort:function(t){return void 0===t?n.call(s(this)):n.call(s(this),c(t))}})},"8d4c":function(t,e,a){"use strict";a("ee2c")},9406:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dashboard-container"},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{xs:24,span:8}},[i("div",{staticClass:"grid-content bg-purple"},[i("el-card",{staticClass:"box-card",staticStyle:{"background-color":"#33cabb"}},[i("div",{staticClass:"text"},[i("div",[i("i",{staticClass:"el-icon-user icon-card"}),t._v(" "),i("span",{staticStyle:{color:"aliceblue",width:"50%"}},[t._v("用户数量")]),i("span",{staticStyle:{color:"aliceblue",width:"50%",float:"right","text-align":"right"}},[t._v(t._s(t.homeInfo.customerCount))])])])])],1)]),i("el-col",{attrs:{xs:24,span:8}},[i("div",{staticClass:"grid-content bg-purple"},[i("el-card",{staticClass:"box-card",staticStyle:{"background-color":"#ce68fd"}},[i("div",{staticClass:"text"},[i("div",[i("i",{staticClass:"el-icon-lock icon-card"}),t._v(" "),i("span",{staticStyle:{color:"aliceblue",width:"50%"}},[t._v("卡密数量")]),i("span",{staticStyle:{color:"aliceblue",width:"50%",float:"right","text-align":"right"}},[t._v(t._s(t.homeInfo.codeCount))])])])])],1)]),i("el-col",{attrs:{xs:24,span:8}},[i("div",{staticClass:"grid-content bg-purple"},[i("el-card",{staticClass:"box-card",staticStyle:{"background-color":"#f96868"}},[i("div",{staticClass:"text"},[i("div",[i("i",{staticClass:"el-icon-magic-stick icon-card"}),t._v(" "),i("span",{staticStyle:{color:"aliceblue",width:"50%"}},[t._v("今日卡密激活")]),i("span",{staticStyle:{color:"aliceblue",width:"50%",float:"right","text-align":"right"}},[t._v(t._s(t.homeInfo.codeActiveCount))])])])])],1)])],1),i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{xs:24,span:8}},[i("div",{staticClass:"grid-content bg-purple"},[i("el-card",{staticClass:"box-card",staticStyle:{"background-color":"#faa123"}},[i("div",{staticClass:"text item"},[i("div",[i("i",{staticClass:"el-icon-refrigerator icon-card"}),t._v(" "),i("span",{staticStyle:{color:"aliceblue",width:"50%"}},[t._v("服务器数量")]),i("span",{staticStyle:{color:"aliceblue",width:"50%",float:"right","text-align":"right"}},[t._v(t._s(t.homeInfo.serverCount))])])])])],1)]),i("el-col",{attrs:{xs:24,span:8}},[i("div",{staticClass:"grid-content bg-purple"},[i("el-card",{staticClass:"box-card",staticStyle:{"background-color":"#fc4086"}},[i("div",{staticClass:"text item"},[i("div",[i("i",{staticClass:"el-icon-mobile-phone icon-card"}),t._v(" "),i("span",{staticStyle:{color:"aliceblue",width:"50%"}},[t._v("应用数量")]),i("span",{staticStyle:{color:"aliceblue",width:"50%",float:"right","text-align":"right"}},[t._v(t._s(t.homeInfo.appCount))])])])])],1)]),i("el-col",{attrs:{xs:24,span:8}},[i("div",{staticClass:"grid-content bg-purple"},[i("el-card",{staticClass:"box-card",staticStyle:{"background-color":"#4d7fff"}},[i("div",{staticClass:"text item"},[i("div",[i("i",{staticClass:"el-icon-s-grid icon-card"}),t._v(" "),i("span",{staticStyle:{color:"aliceblue",width:"50%"}},[t._v("代理数量")]),i("span",{staticStyle:{color:"aliceblue",width:"50%",float:"right","text-align":"right"}},[t._v(t._s(t.homeInfo.proxyCount))])])])])],1)])],1),i("br"),i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{xs:24,span:8}},[i("el-card",{staticClass:"box-card",staticStyle:{"background-color":"#2c343c"}},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",{staticStyle:{color:"aliceblue"}},[t._v("网站统计图")])]),i("div",[i("div",{ref:"chart",staticStyle:{width:"100%",height:"300px"}})])])],1),i("el-col",{attrs:{xs:24,span:16}},[i("el-card",{staticClass:"box-card",staticStyle:{"background-color":"#f2f4b3"}},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",{staticStyle:{color:"green"}},[i("b",[t._v("公告信息: "+t._s(t.expriaTime))])])]),i("div",[i("p",{staticStyle:{color:"red","text-indent":"2em"}},[t._v("本软件仅限技术学习交流，不得用于任何违反法律法规用途， "),i("b",[t._v("用户使用本软件所产生的一切后果，软件作者不承担任何责任！")])]),i("p",{staticStyle:{color:"red","text-indent":"2em"}},[t._v("技术交流合作可以联系本人，擅长Java开发!")]),i("img",{staticStyle:{width:"70px",height:"70px"},attrs:{src:a("a10a")}})])])],1)],1)],1)},c=[],s=(a("4e82"),a("3191")),o=a("5f87"),r={name:"Dashboard",data:function(){return{homeInfo:{},expriaTime:""}},methods:{initCharts:function(){var t=this.$echarts.init(this.$refs.chart);window.onresize=function(){t.resize()},t.setOption({backgroundColor:"#2c343c",title:{text:"数据一览无余",left:"center",top:20,textStyle:{color:"#ccc"}},tooltip:{trigger:"item"},visualMap:{show:!1,min:80,max:600,inRange:{colorLightness:[0,1]}},series:[{name:"数据概览",type:"pie",radius:"55%",center:["50%","50%"],data:[{value:311,name:"用户数量"},{value:422,name:"卡密数量"},{value:212,name:"卡密激活"},{value:412,name:"服务器数量"},{value:223,name:"应用数量"},{value:321,name:"代理数量"}].sort((function(t,e){return t.value-e.value})),roseType:"radius",label:{color:"rgba(255, 255, 255, 0.3)"},labelLine:{lineStyle:{color:"rgba(255, 255, 255, 0.3)"},smooth:.2,length:10,length2:20},itemStyle:{color:"#c23531",shadowBlur:200,shadowColor:"rgba(0, 0, 0, 0.5)"},animationType:"scale",animationEasing:"elasticOut",animationDelay:function(t){return 200*Math.random()}}]})},getHomeInfo:function(){var t=this;this.expriaTime=Object(o["a"])(),s["a"].getHomeInfo().then((function(e){t.homeInfo=e.data.homeInfo}))}},mounted:function(){this.initCharts()},created:function(){this.getHomeInfo()}},l=r,n=(a("8d4c"),a("2877")),d=Object(n["a"])(l,i,c,!1,null,"8318c4f0",null);e["default"]=d.exports},a10a:function(t,e,a){t.exports=a.p+"static/img/cat.0df89662.png"},ee2c:function(t,e,a){}}]);