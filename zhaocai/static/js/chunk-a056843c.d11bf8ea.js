(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a056843c"],{8916:function(t,e,a){"use strict";var n=a("b775");e["a"]={getLogList:function(t,e){return Object(n["a"])({url:"/log/info",method:"get",params:{currentPage:t,pageSize:e}})}}},f4d5:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"box-card"},[a("el-table",{staticStyle:{width:"100%"},attrs:{size:"small ","header-cell-style":{"text-align":"center"},"cell-style":{"text-align":"center"},data:t.logList}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80"}}),a("el-table-column",{attrs:{prop:"info",label:"操作信息",width:"180"}}),a("el-table-column",{attrs:{prop:"ip",label:"IP地址",width:"180"}}),a("el-table-column",{attrs:{prop:"user",label:"操作人",width:"180"}}),a("el-table-column",{attrs:{prop:"createTime",label:"操作时间",width:"180"}})],1),a("br"),t.windowWidth>=750?a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[50,100,200,300],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1):t._e(),t.windowWidth<=749?a("div",{staticClass:"block"},[a("el-pagination",{attrs:{small:"","page-size":t.pageSize,layout:"total,prev, pager, next",total:t.totalCount},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1)],1)},i=[],l=a("8916"),o={mounted:function(){var t=this;window.onresize=function(){return function(){t.windowWidth=window.innerWidth}()}},data:function(){return{logList:[],currentPage:1,pageSize:50,windowWidth:0,totalCount:0,totalPage:0}},methods:{handleSizeChange:function(t){this.pageSize=t,this.getLogList()},handleCurrentChange:function(t){this.currentPage=t,this.getLogList()},getLogList:function(){var t=this;l["a"].getLogList(this.currentPage,this.pageSize).then((function(e){t.totalPage=e.data.totalPage,t.totalCount=e.data.totalCount,t.logList=e.data.logList}))}},created:function(){this.getLogList(),this.windowWidth=window.innerWidth}},r=o,s=a("2877"),c=Object(s["a"])(r,n,i,!1,null,"4e5fc0e1",null);e["default"]=c.exports}}]);