webpackJsonp([24],{263:function(e,t,n){"use strict";function i(e){c||n(841)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(465),s=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var o=n(843),l=n.n(o),c=!1,d=n(0),u=i,p=d(s.a,l.a,!1,u,null,null);p.options.__file="src\\views\\access\\access.vue",t.default=p.exports},465:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"home",data:function(){var e=this;return{modal7:!1,tree1:[{title:"主体",expand:!0,children:[{title:"银河管理平台",expand:!0},{title:"业绩",expand:!0},{title:"我的",expand:!0}]}],columns2:[{title:"角色名称",key:"role_name",align:"center",fixed:"left"},{title:"上级角色名称",key:"superior_role_name",align:"center"},{title:"操作",key:"action",align:"center",fixed:"right",render:function(t,n){return t("div",[t("Button",{props:{type:"primary",size:"small",icon:"edit",shape:"circle"},style:{color:"white",marginRight:"10px"},on:{click:function(){}}}),t("Button",{props:{type:"error",size:"small",shape:"circle",icon:"trash-b"},style:{color:"white",marginRight:"10px"},on:{click:function(){alert(11111)}}}),t("Button",{props:{type:"success",size:"small",shape:"circle",icon:"person"},style:{color:"white"},on:{click:function(){e.modal7=!0}}})])}}],data3:[{role_name:"12345",superior_role_name:"121212"},{role_name:"12345",superior_role_name:"121212"},{role_name:"12345",superior_role_name:"121212"}]}},methods:{ok:function(){this.$Message.info("Clicked ok")},cancel:function(){this.$Message.info("Clicked cancel")}}}},841:function(e,t,n){var i=n(842);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(9)("669e2daa",i,!1)},842:function(e,t,n){t=e.exports=n(8)(!1),t.push([e.i,"\n* {\r\n  margin: 0;\r\n  padding: 0;\n}\n.tissue{\r\n    overflow: hidden;\n}\n.tissue_header {\r\n  width: 100%;\r\n  height: 50px;\r\n  background-color: rgb(220, 241, 255);\r\n  text-align: justify;\n}\n.tissue_header h2 {\r\n  line-height: 50px;\r\n  padding-left: 5px;\n}\n.search_ipt {\r\n  width: 300px;\r\n  line-height: 50px;\n}\n.tissue_search {\r\n  position: relative;\r\n  /* padding-right: 5px; */\n}\n.tissue_btn {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 0; \r\n  /* line-height: 50px; */\n}\n.tissue_footer{\r\n    width: 100%;\r\n    height: 40px;\r\n    /* background: red; */\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 10px;\n}\n.tissue_footer .paging{\r\n  text-align: center;\r\n  line-height: 40px;\n}\r\n/* 角色授权\r\n  */\n.role_authorization{\r\n      width: 100%;\r\n      height: 400px;\n}\n.role_header ul li{\r\n      width:150px;\r\n      height: 40px;\r\n      line-height: 40px;\r\n      text-align: center;\r\n      border: 1px solid #e7e7ee;\r\n      float: left;\n}\n.role_tree{\r\n      width: 150px;\r\n      height:94%;\r\n      border: 1px solid #e7e7ee;\n}\r\n",""])},843:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tissue"},[n("Modal",{attrs:{width:"1200",title:"角色授权",closable:!1},model:{value:e.modal7,callback:function(t){e.modal7=t},expression:"modal7"}},[n("div",{staticClass:"role_authorization"},[n("div",{staticClass:"role_header"},[n("ul",[n("li",[e._v("\n                       驾驶舱\n                   ")]),e._v(" "),n("li",[e._v("\n                       SaaS-BI\n                   ")]),e._v(" "),n("li",[e._v("\n                       银河管理平台\n                   ")])])]),e._v(" "),n("div",{staticClass:"role_tree",staticStyle:{clear:"both"}},[n("Tree",{attrs:{data:e.tree1}})],1)])]),e._v(" "),n("div",{staticClass:"tissue_header",staticStyle:{display:"flex","justify-content":"space-between"}},[n("h2",[e._v("角色管理")]),e._v(" "),n("div",{staticClass:"tissue_search"},[n("Input",{staticClass:"search_ipt",attrs:{placeholder:"可按权限、机构、及用户查询"},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}}),e._v(" "),n("Button",{staticClass:"tissue_btn",attrs:{type:"primary",icon:"ios-search"}})],1),e._v(" "),n("div",{staticClass:"adduser"},[n("Button",{staticStyle:{"margin-top":"10px","margin-right":"5px"},attrs:{type:"success"},on:{click:function(t){e.modal7=!0}}},[e._v("+")])],1)]),e._v(" "),n("div",{staticClass:"tissue_cont"},[n("Table",{attrs:{width:"100%",border:"",columns:e.columns2,data:e.data3}})],1),e._v(" "),n("div",{staticClass:"tissue_footer"},[n("Page",{staticClass:"paging",attrs:{total:100,"show-elevator":""}})],1)],1)},r=[];i._withStripped=!0;var s={render:i,staticRenderFns:r};t.default=s}});