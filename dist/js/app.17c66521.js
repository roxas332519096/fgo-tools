(function(e){function t(t){for(var n,i,a=t[0],o=t[1],u=t[2],m=0,p=[];m<a.length;m++)i=a[m],r[i]&&p.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);c&&c(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),l()}function l(){for(var e,t=0;t<s.length;t++){for(var l=s[t],n=!0,a=1;a<l.length;a++){var o=l[a];0!==r[o]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=l[0]))}return e}var n={},r={app:0},s=[];function i(t){if(n[t])return n[t].exports;var l=n[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,i),l.l=!0,l.exports}i.m=e,i.c=n,i.d=function(e,t,l){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(l,n,function(t){return e[t]}.bind(null,n));return l},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/fgo-tools/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var c=o;s.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d7")},"52f7":function(e,t,l){},"56d7":function(e,t,l){"use strict";l.r(t);l("cadf"),l("551c"),l("f751"),l("097d");var n=l("2b0e"),r=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"app"}},[l("el-container",[l("index-menu"),l("el-container",[l("el-main",[l("router-view")],1)],1)],1)],1)},s=[],i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-menu",{staticClass:"el-menu-vertical",attrs:{"default-active":"1-4-1",collapse:e.isCollapse,"background-color":"#ddd",router:""}},[l("el-menu-item",{attrs:{index:"#"},on:{click:function(t){e.isCollapse=!e.isCollapse}}},[l("i",{directives:[{name:"show",rawName:"v-show",value:e.isCollapse,expression:"isCollapse"}],staticClass:"el-icon-arrow-right"}),l("i",{directives:[{name:"show",rawName:"v-show",value:!e.isCollapse,expression:"!isCollapse"}],staticClass:"el-icon-arrow-left"}),l("span",[e._v("收起")])]),l("el-menu-item",{attrs:{index:"/",router:"true"}},[l("i",{staticClass:"el-icon-warning"}),l("span",{attrs:{slot:"title"},slot:"title"},[e._v("首页")])]),l("el-menu-item",{attrs:{index:"servents",router:"true"}},[l("i",{staticClass:"el-icon-search"}),l("span",{attrs:{slot:"title"},slot:"title"},[e._v("英灵材料计算")])]),l("el-menu-item",{attrs:{index:"5",disabled:""}},[l("i",{staticClass:"el-icon-setting"}),l("span",{attrs:{slot:"title"},slot:"title"},[e._v("宝具伤害计算")])]),l("el-menu-item",{attrs:{index:"6",disabled:""}},[l("i",{staticClass:"el-icon-setting"}),l("span",{attrs:{slot:"title"},slot:"title"},[e._v("卡牌伤害计算")])]),l("el-menu-item",{attrs:{index:"7",disabled:""}},[l("i",{staticClass:"el-icon-setting"}),l("span",{attrs:{slot:"title"},slot:"title"},[e._v("Np计算")])]),l("el-menu-item",{attrs:{index:"8",disabled:""}},[l("i",{staticClass:"el-icon-setting"}),l("span",{attrs:{slot:"title"},slot:"title"},[e._v("模拟战斗")])])],1)],1)},a=[],o={name:"indexMenu",data:function(){return{isCollapse:!1}},methods:{BackToHomePage:function(){this.$router.push("/")},goToServnetsPage:function(){console.log(1),this.$router.push("servents")}}},u=o,c=(l("caaf"),l("2877")),m=Object(c["a"])(u,i,a,!1,null,"ec722b3c",null),p=m.exports,f={name:"app",components:{indexMenu:p}},d=f,v=Object(c["a"])(d,r,s,!1,null,null,null),h=v.exports,b=l("8c4f"),k=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"home"},[e._v("\n  "+e._s(e.msg)+" Ver:"+e._s(e.ver)+"\n")])},w=[],x={name:"home",data:function(){return{msg:"非洲Fgo计算工具",ver:"0.0.1"}}},_=x,g=Object(c["a"])(_,k,w,!1,null,null,null),y=g.exports,S=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-table",{attrs:{data:e.Servents,border:""},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"50"}}),l("el-table-column",{attrs:{prop:"id",label:"id",width:"50"}}),l("el-table-column",{attrs:{prop:"photo",label:"头像"}}),l("el-table-column",{attrs:{prop:"class",label:"职介","column-key":"id",filters:e.filters,"filter-method":e.filterHandler}}),l("el-table-column",{attrs:{prop:"name",label:"名称"}}),l("el-table-column",{attrs:{prop:"LimitBreak.curlevel",label:"灵基再临"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-slider",{attrs:{max:4,"show-stops":"","show-tooltip":""},model:{value:t.row.LimitBreak.curlevel,callback:function(l){e.$set(t.row.LimitBreak,"curlevel",l)},expression:"scope.row.LimitBreak.curlevel"}})]}}])}),l("el-table-column",{attrs:{prop:"skills[0].curlevel",label:"技能1",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-slider",{attrs:{"show-input":"",min:1,max:10},model:{value:t.row.skills[0].curlevel,callback:function(l){e.$set(t.row.skills[0],"curlevel",l)},expression:"scope.row.skills[0].curlevel"}})]}}])}),l("el-table-column",{attrs:{prop:"skills[0].curlevel",label:"技能2",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-slider",{attrs:{"show-input":"",min:1,max:10},model:{value:t.row.skills[0].curlevel,callback:function(l){e.$set(t.row.skills[0],"curlevel",l)},expression:"scope.row.skills[0].curlevel"}})]}}])}),l("el-table-column",{attrs:{prop:"skills[0].curlevel",label:"技能3",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-slider",{attrs:{"show-input":"",min:1,max:10},model:{value:t.row.skills[0].curlevel,callback:function(l){e.$set(t.row.skills[0],"curlevel",l)},expression:"scope.row.skills[0].curlevel"}})]}}])}),l("el-table-column",{attrs:{label:"计算",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{on:{click:function(l){return e.computeItem(t.row)}}},[e._v("计算")]),l("el-button",{on:{click:function(l){return e.one310(t.row)}}},[e._v("310")])]}}])})],1),l("el-row",{style:{"margin-top":"20px"},attrs:{type:"flex",justify:"center"}},[l("el-button",{on:{click:e.computeAllItems}},[e._v("计算总材料")]),l("el-button",{on:{click:e.All310}},[e._v("所选全部变310")])],1)],1)},C=[],B=(l("ac6a"),l("7f7f"),{name:"Servents",data:function(){return{multipleSelection:[],Servents:[{id:1,name:"玛修",photo:"",class:"Ex",LimitBreak:{curlevel:1,LimitBreakItemlist:[{name:"材料名称1",num:5},{name:"材料名称2",num:10},{name:"材料名称3",num:5},{name:"材料名称4",num:10}]},skills:[{skillName:"技能1",curlevel:1,skillItem:[{name:"材料名称1",num:4},{name:"材料名称2",num:4},{name:"材料名称3",num:4},{name:"材料名称4",num:4},{name:"材料名称5",num:4},{name:"材料名称6",num:4},{name:"材料名称7",num:4},{name:"材料名称8",num:4},{name:"结晶",num:1}]}]}],filters:[{text:"Saber",value:"Saber"},{text:"Archer",value:"Archer"},{text:"Lancer",value:"Lancer"},{text:"Rider",value:"Rider"},{text:"Caster",value:"Caster"},{text:"Assian",value:"Assian"},{text:"Ex",value:"Ex"}]}},methods:{filterHandler:function(e,t,l){var n=l["property"];return t[n]===e},computeItem:function(e){var t=e.LimitBreak.curlevel,l=e.skills[0].curlevel,n=e.skills[0].curlevel,r=e.skills[0].curlevel,s="",i="",a="",o="",u="",c=e.LimitBreak.LimitBreakItemlist.slice(0,t);s=c.map(function(e){return e.name+":"+e.num+"\n"});var m=e.skills[0].skillItem.slice(1,l),p=e.skills[0].skillItem.slice(1,n),f=e.skills[0].skillItem.slice(1,r);i=m.map(function(e){return e.name+":"+e.num}),a=p.map(function(e){return e.name+":"+e.num}),o=f.map(function(e){return e.name+":"+e.num}),u=i+a+o,this.$alert(u+s,"所需材料",{confirmButtonText:"确定"})},handleSelectionChange:function(e){this.multipleSelection=e},computeAllItems:function(){this.$alert(this.multipleSelection,"总所需材料",{confirmButtonText:"确定"})},one310:function(e){e.LimitBreak.curlevel=4,e.skills.forEach(function(e){e.curlevel=10})},All310:function(){this.multipleSelection.forEach(function(e){e.LimitBreak.curlevel=4,e.skills.forEach(function(e){e.curlevel=10})})}}}),j=B,L=Object(c["a"])(j,S,C,!1,null,null,null),O=L.exports;n["default"].use(b["a"]);var $=new b["a"]({routes:[{path:"/",name:"home",component:y},{path:"/servents",name:"servents",component:O}]}),E=l("2f62");n["default"].use(E["a"]);var I=new E["a"].Store({state:{},mutations:{},actions:{}}),A=l("5c96"),P=l.n(A);l("0fae"),l("52f7"),l("926e");n["default"].config.productionTip=!1,n["default"].use(P.a),new n["default"]({router:$,store:I,render:function(e){return e(h)}}).$mount("#app")},"926e":function(e,t,l){},b993:function(e,t,l){},caaf:function(e,t,l){"use strict";var n=l("b993"),r=l.n(n);r.a}});
//# sourceMappingURL=app.17c66521.js.map