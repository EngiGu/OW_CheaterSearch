webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App"},s,!1,function(t){a("xYys")},null,null).exports,o=a("/ocq"),l={name:"OwCheater",data:function(){return{input:"",status_info:[],tableDataBack:[]}},created:function(){this.getTotalStatus(),this.getSearchRes("*")},watch:{input:function(t){this.getSearchRes(t)}},methods:{getTotalStatus:function(){var t=this;this.axios({method:"get",url:"/api/total_status"}).then(function(e){t.status_info=["全部数据量: "+e.data.data.total,"上次公布时间: "+e.data.data.last_pub_time,"上次公布标题: "+e.data.data.title]})},getSearchRes:function(t){var e=this,a=this;this.axios.CancelToken.source();this.cancelRequest();var n="/api/cheaters/"+t;this.axios.get(n,{cancelToken:new this.axios.CancelToken(function(t){a.source=t})}).then(function(t){a.tableDataBack=t.data.data}).catch(function(t){e.axios.isCancel(t)?console.log("Rquest canceled",t.message):console.log(t)})},cancelRequest:function(){"function"==typeof this.source&&this.source("终止请求")}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ow"},[a("el-card",{staticClass:"box-card"},t._l(t.status_info,function(e){return a("div",{key:e,staticClass:"text item"},[t._v(t._s(e))])}),0),t._v(" "),a("div",{staticClass:"searchB"},[a("el-input",{attrs:{placeholder:"[搜索框] 请输入要查询的id，只显示结果50行"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableDataBack,stripe:""}},[a("el-table-column",{attrs:{prop:"id",label:"id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"b_name",label:"战网id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"reason",label:"原因"}}),t._v(" "),a("el-table-column",{attrs:{prop:"_pub_time",label:"封号日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"created",label:"抓取时间"}})],1)],1)},staticRenderFns:[]};var u=a("VU/8")(l,c,!1,function(t){a("jmBo")},"data-v-30e36946",null).exports;n.default.use(o.a);var r=new o.a({routes:[{path:"/",name:"OwCheater",component:u}]}),p=a("zL8q"),d=a.n(p),f=(a("tvR6"),a("mtWM")),h=a.n(f),v=a("Rf8U"),m=a.n(v);n.default.config.productionTip=!1,n.default.use(m.a,h.a),n.default.use(d.a),new n.default({el:"#app",router:r,components:{App:i},template:"<App/>"})},jmBo:function(t,e){},tvR6:function(t,e){},xYys:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2355ee033a33e678df7f.js.map