(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1f35"],{ZySA:function(t,e,a){"use strict";var i=a("P2sY"),l=a.n(i),n=(a("jUE0"),{bind:function(t,e){t.addEventListener("click",function(a){var i=l()({},e.value),n=l()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),s=n.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var o=s.getBoundingClientRect(),r=s.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":((r=document.createElement("span")).className="waves-ripple",r.style.height=r.style.width=Math.max(o.width,o.height)+"px",s.appendChild(r)),n.type){case"center":r.style.top=o.height/2-r.offsetHeight/2+"px",r.style.left=o.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(a.pageY-o.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(a.pageX-o.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=n.color,r.className="waves-ripple z-active",!1}},!1)}}),s=function(t){t.directive("waves",n)};window.Vue&&(window.waves=n,Vue.use(s)),n.install=s;e.a=n},jUE0:function(t,e,a){},kXR8:function(t,e,a){"use strict";a.r(e);var i=a("P2sY"),l=a.n(i),n=a("t3Un");var s=a("ZySA"),o=a("7Qib"),r={name:"ComplexTable",directives:{waves:s.a},filters:{},data:function(){return{startCitys:[{value:"Shanghai",label:"上海"},{value:"Beijing",label:"北京",disabled:!0}],aimCitys:[],isValid:!1,tableKey:0,list:null,total:null,listLoading:!0,listQuery:{pageStart:1,pageSize:10},mList:[],showReviewer:!1,temp:{},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑航线",create:"添加航线"},dialogPvVisible:!1,pvData:[],rules:{content:[{required:!0,message:"显示内容不能为空",trigger:"blur"}],orgin:[{required:!0,message:"始发地不能为空",trigger:"blur"}],aim:[{required:!0,message:"目的地不能为空",trigger:"blur"}]},downloadLoading:!1}},created:function(){var t=this;this.getList(),Object(n.a)({url:"/mairline/city/list",method:"get"}).then(function(e){t.aimCitys=e.data.result})},methods:{resetTemp:function(){this.temp={}},handleFilter:function(){this.listQuery.pageStart=1,this.getList()},handleSelectionChange:function(t){var e=this;this.mList=[],t.forEach(function(t){e.mList.push(t.memberId)}),this.mList.length>0?this.tagButton=!1:this.tagButton=!0},handleSizeChange:function(t){this.listQuery.pageSize=t,this.getList()},handleCurrentChange:function(t){this.listQuery.pageStart=t,this.getList()},getList:function(){var t=this;this.listLoading=!0,function(t){return Object(n.a)({url:"/mairline/list",method:"get",params:t})}(this.listQuery).then(function(e){t.list=e.data.result,t.total=e.data.count,setTimeout(function(){t.listLoading=!1},1500)})},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},createData:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&function(t){return Object(n.a)({url:"/mairline/add",method:"post",params:t})}(t.temp).then(function(e){"1"===e.data.status?(t.getList(),t.dialogFormVisible=!1,t.$message({message:"创建成功",type:"success"})):(t.dialogFormVisible=!1,t.$message({message:e.data.message,type:"warning"}))})})},handleUpdate:function(t){var e=this;this.temp=l()({},t),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},validChange:function(){this.isValid?(this.listQuery.isValid=0,this.getList()):(this.listQuery.isValid=1,this.getList())},updateData:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&function(t){return Object(n.a)({url:"/mairline/edit",method:"post",params:t})}(t.temp).then(function(e){"1"===e.data.status&&(t.dialogFormVisible=!1,t.getList(),t.$message({message:"更新成功",type:"success",duration:2e3}))})})},handleDelete:function(t){var e=this;this.$confirm("您确定要删除该航线, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){(function(t){return Object(n.a)({url:"/mairline/del",method:"get",params:t})})({airlineId:t}).then(function(t){"1"===t.data.status?(e.getList(),e.$message({message:"删除成功",type:"success",duration:2e3})):e.$message({message:t.data.message,type:"warning",duration:2e3})})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return"timestamp"===t?Object(o.c)(e[t]):e[t]})})}}},c=(a("ryL6"),a("KHd+")),u=Object(c.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"目的地",maxlength:"12"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleFilter(e):null}},model:{value:t.listQuery.aim,callback:function(e){t.$set(t.listQuery,"aim",e)},expression:"listQuery.aim"}}),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("查询")]),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"success",icon:"el-icon-plus"},on:{click:t.handleCreate}},[t._v("添加航线")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{label:"出发城市",width:"80px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.orgin))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"到达城市",width:"80px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.aim))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"信息内容","min-width":"200px",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.content))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"是否开启","class-name":"status-col",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0",disabled:""},on:{change:function(a){t.handleUpdateUserAuth(e.row)}},model:{value:e.row.isvalidate,callback:function(a){t.$set(e.row,"isvalidate",a)},expression:"scope.row.isvalidate"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"创建时间",width:"160px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.createTime))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.actions"),align:"center","min-width":"100","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(a){t.handleUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"warning",size:"mini",icon:"el-icon-delete"},on:{click:function(a){t.handleDelete(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{"current-page":t.listQuery.pageStart,"page-sizes":[10,20,30,50],"page-size":t.listQuery.pageSize,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"600px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"right","label-width":"100px"}},[a("el-form-item",{attrs:{label:"展示内容",prop:"content"}},[a("el-input",{attrs:{maxlength:"36"},model:{value:t.temp.content,callback:function(e){t.$set(t.temp,"content",e)},expression:"temp.content"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"出发城市",prop:"orgin"}},[a("el-select",{attrs:{placeholder:"请选择出发城市",clearable:""},model:{value:t.temp.orgin,callback:function(e){t.$set(t.temp,"orgin",e)},expression:"temp.orgin"}},t._l(t.startCitys,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.label,disabled:e.disabled}},[a("span",{staticStyle:{float:"left"}},[t._v(t._s(e.label))]),t._v(" "),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v(t._s(e.value))])])}))],1),t._v(" "),a("el-form-item",{attrs:{label:"到达城市",prop:"aim"}},[a("el-select",{attrs:{placeholder:"请选择到达城市",filterable:"",clearable:""},model:{value:t.temp.aim,callback:function(e){t.$set(t.temp,"aim",e)},expression:"temp.aim"}},t._l(t.aimCitys,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}},[t._v(t._s(e))])}))],1),t._v(" "),a("el-form-item",{attrs:{label:"是否开启"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.temp.isvalidate,callback:function(e){t.$set(t.temp,"isvalidate",e)},expression:"temp.isvalidate"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.$t("table.cancel")))]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-check-outline"},on:{click:t.createData}},[t._v(t._s(t.$t("table.confirm")))]):a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-check-outline"},on:{click:t.updateData}},[t._v(t._s(t.$t("table.confirm")))])],1)],1)],1)},[],!1,null,null,null);u.options.__file="airline.vue";e.default=u.exports},ryL6:function(t,e,a){"use strict";var i=a("sGk6");a.n(i).a},sGk6:function(t,e,a){}}]);