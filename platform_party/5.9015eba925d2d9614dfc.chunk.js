webpackJsonp([5],{274:function(e,t,n){"use strict";function a(e){u||(n(886),n(888))}Object.defineProperty(t,"__esModule",{value:!0});var o=n(476),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);var s=n(890),l=n.n(s),u=!1,c=n(0),g=a,d=c(i.a,l.a,!1,g,"data-v-e16990ce",null);d.options.__file="src\\views\\my-components\\split-pane\\split-pane-page.vue",t.default=d.exports},286:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),o=function(e){return e&&e.__esModule?e:{default:e}}(a),i="http://172.18.101.118:10000/galaxy-platform-management",r="http://172.18.101.118:10000";t.default={_baseUrlQ:i,userId:function(){return r+"/platform-user-oauth2/user?access_token="+o.default.get("tokenY")},Resource_permissions:function(){return r+"/platform-user-admin/resource/find/auth/"+o.default.get("party_userId")+"?access_token="+o.default.get("tokenY")},login:function(){return r+"/platform-user-oauth2/oauth/token"},com_Data:function(){return i+"/galaxy/meta/getMeta?access_token="+o.default.get("tokenY")},modifyMeta:function(){return i+"/galaxy/meta/modifyMeta?access_token="+o.default.get("tokenY")},queryUserBehaviorPage:function(){return i+"/galaxy/userBehavior/queryUserBehaviorPage?access_token="+o.default.get("tokenY")},queryAllDbs:function(){return i+"/galaxy/privilege/queryAllDbs?access_token="+o.default.get("tokenY")},queryAllUsers:function(){return r+"/platform-user-admin/user/listUserByTenant?access_token="+o.default.get("tokenY")},queryDbPrivilege:function(){return i+"/galaxy/privilege/queryDbPrivilege?access_token="+o.default.get("tokenY")},queryTbPrivilegePage:function(){return i+"/galaxy/privilege/queryTbPrivilegePage?access_token="+o.default.get("tokenY")},changeUsePrivilege:function(){return i+"/galaxy/privilege/changeUsePrivilege?access_token="+o.default.get("tokenY")},getHueAutoLoginUrl:function(){return i+"/galaxy/hadoop/getAutoLoginUrl?access_token="+o.default.get("tokenY")},getMonitorList:function(){return i+"/galaxy/work/getMonitorList?access_token="+o.default.get("tokenY")},getMonitorLog:function(e){return i+"/galaxy/work/getMonitorLog/"+e+"?access_token="+o.default.get("tokenY")},killJob:function(e){return i+"/galaxy/user/killJob/"+e+"?access_token="+o.default.get("tokenY")},getSearch:function(e){return"http://10.50.192.58:8080/search?id="+e+"&access_token="+o.default.get("tokenY")},getWarnList:function(){return i+"/galaxy/work/getWarnList?access_token="+o.default.get("tokenY")},getHostInformations:function(){return i+"/galaxy/cluster/getHostInformations?access_token="+o.default.get("tokenY")},getHostHisInformations:function(e){return i+"/galaxy/cluster/getHostHisInformations/"+e+"?access_token="+o.default.get("tokenY")}}},476:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),i=a(o),r=n(286),s=a(r);t.default={data:function(){return{ajaxHistoryData:[],dataCount:0,page:{pageIndex:1,pageSize:10},SpinType:!1,historyColumns:[{title:"账号",key:"id"},{title:"用户名",key:"user"},{title:"手机号",key:"name"},{title:"组织机构",key:"start"},{title:"状态",key:"elapsed"},{title:"操作",key:"deletetStatus",render:function(e,t,n){return e("div",[e("Button",{props:{type:"text",size:"small"},style:{color:"blue"},on:{click:function(e,t){console.log("点击")}}},"修改"),e("Button",{props:{type:"text",size:"small"},style:{color:"blue"},on:{click:function(e,t){console.log("点击")}}},"删除"),e("Button",{props:{type:"text",size:"small"},style:{color:"blue"},on:{click:function(e,t){console.log("点击")}}},"锁定"),e("Button",{props:{type:"text",size:"small"},style:{color:"blue"},on:{click:function(e,t){console.log("点击")}}},"绑定角色")])}}],historyData:[{id:1}],roleList:[{name:"22222220",key:0},{name:"普惠业务管理员",key:1},{name:"普惠业务管理员",key:2},{name:"普惠业务管理员",key:3},{name:"普惠业务管理员",key:4},{name:"仲裁",key:5},{name:"总裁",key:6}],resModal:!0,resModalList:[],isNumber:!0}},computed:{},created:function(){},methods:{init:function(){var e=this;this.$axios({method:"post",url:s.default.getWarnList(),data:{pageSize:this.page.pageSize,pageIndex:this.page.pageIndex},headers:{Authorization:i.default.get("token"),"Content-Type":"application/json;charset=UTF-8"}}).then(function(t){200==t.data.code&&(e.historyData=t.data.data,e.SpinType=!1)})},onHandChange:function(e){e.key,e.key},changepage:function(e){this.page.pageIndex=e,this.init()},submit:function(){this.formItem.dur.match(/^\d+$/)||!this.formItem.dur?(this.SpinType=!0,this.init()):this.$Message.error("请填写整数",3)},initList:function(){this.SpinType=!0},dbNameSelectChange:function(){},modelOk:function(){this.resModal=!1,this.resModalList=[]},clickToLog:function(e){var t=this;this.$axios({method:"get",url:s.default.getMonitorLog(e),headers:{Authorization:i.default.get("token"),"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){if(200==e.data.code){var n=e.data.data.amContainerLogs;n?window.open(""+n,"_blank"):t.$Message.error("暂无数据",3)}})}}}},886:function(e,t,n){var a=n(887);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(9)("4e67e13f",a,!1)},887:function(e,t,n){t=e.exports=n(8)(!1),t.push([e.i,"\n.paging[data-v-e16990ce] {\r\n  float: right;\r\n  margin-top: 10px;\n}\r\n",""])},888:function(e,t,n){var a=n(889);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(9)("9ecba626",a,!1)},889:function(e,t,n){t=e.exports=n(8)(!1),t.push([e.i,"\n.aa {\n}\r\n",""])},890:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{position:"relative",height:"100%",padding:"10px"}},[n("Row",{staticClass:"code-row-bg",staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",justify:"space-between",align:"middle"}},[n("Col",{attrs:{span:"6"}},[n("div",{staticStyle:{padding:"5px 0","font-weight":"700","font-size":"18px"}},[e._v("接入管理系统")])]),e._v(" "),n("Col",{staticStyle:{"text-align":"right","margin-right":"5px"},attrs:{span:"3"}},[n("Button",{attrs:{type:"primary"}},[e._v("新增用户")])],1)],1),e._v(" "),n("Spin",{directives:[{name:"show",rawName:"v-show",value:e.SpinType,expression:"SpinType"}],attrs:{fix:""}},[n("Icon",{staticClass:"demo-spin-icon-load",attrs:{type:"load-c",size:"18"}}),e._v(" "),n("div",[e._v("Loading")])],1),e._v(" "),n("Table",{attrs:{columns:e.historyColumns,data:e.historyData}}),e._v(" "),n("Modal",{attrs:{title:"绑定角色"},on:{"on-ok":e.modelOk,"on-cancel":e.modelOk},model:{value:e.resModal,callback:function(t){e.resModal=t},expression:"resModal"}},e._l(e.roleList,function(t){return n("p",[n("Checkbox",{attrs:{label:"item.name",value:1==t.key},on:{"on-change":function(n){e.onHandChange(t)}}},[n("span",{staticStyle:{padding:"0 5px"}},[e._v(e._s(t.name))])])],1)}))],1)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};t.default=i}});