webpackJsonp([16],{270:function(e,t,n){"use strict";function r(e){f||n(874)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(472),i=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);var o=n(876),c=n.n(o),f=!1,s=n(0),l=r,d=s(i.a,c.a,!1,l,null,null);d.options.__file="src\\views\\my-components\\area-linkage\\area-linkage.vue",t.default=d.exports},472:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={data:function(){return{iframeSrc:""}},created:function(){this.iframeSrc=a.default.get("hue")},methods:{}}},874:function(e,t,n){var r=n(875);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(9)("387a099b",r,!1)},875:function(e,t,n){t=e.exports=n(8)(!1),t.push([e.i,"\n.workbench{\n    width: 100%;\n    height: 100%;\n}\niframe{\n    width: 100%;\n    height: 100%;\n}\n",""])},876:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("iframe",{attrs:{id:"myframe",frameborder:"0",scrolling:"auto",src:e.iframeSrc}})},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.default=i}});