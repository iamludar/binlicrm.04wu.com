(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-da4f"],{"8o6g":function(e,t,a){},ZySA:function(e,t,a){"use strict";var i=a("P2sY"),n=a.n(i),l=(a("jUE0"),{bind:function(e,t){e.addEventListener("click",function(a){var i=n()({},t.value),l=n()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),s=l.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var o=s.getBoundingClientRect(),r=s.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":((r=document.createElement("span")).className="waves-ripple",r.style.height=r.style.width=Math.max(o.width,o.height)+"px",s.appendChild(r)),l.type){case"center":r.style.top=o.height/2-r.offsetHeight/2+"px",r.style.left=o.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(a.pageY-o.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(a.pageX-o.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=l.color,r.className="waves-ripple z-active",!1}},!1)}}),s=function(e){e.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(s)),l.install=s;t.a=l},jUE0:function(e,t,a){},t4sK:function(e,t,a){"use strict";a.r(t);var i=a("P2sY"),n=a.n(i),l=a("t3Un");var s=a("ZySA"),o=a("7Qib"),r=[{key:"CN",display_name:"China"},{key:"US",display_name:"USA"},{key:"JP",display_name:"Japan"},{key:"EU",display_name:"Eurozone"}],c=r.reduce(function(e,t){return e[t.key]=t.display_name,e},{}),p={name:"ComplexTable",directives:{waves:s.a},filters:{statusFilter:function(e){return{0:"作废",1:"有效"}[e]},typeFilter:function(e){return c[e]}},data:function(){return{tableKey:0,list:null,total:null,listLoading:!0,listQuery:{page:1,limit:20,name:"",epcall:""},importanceOptions:[1,2,3],calendarTypeOptions:r,sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["已领卡","已激活","过期"],showReviewer:!1,temp:{},uptemp:{},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑机构",create:"创建机构"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,function(e){return Object(l.a)({url:"/benterprise/list",method:"get",params:e})}(this.listQuery).then(function(t){e.list=t.data.result,e.total=t.data.length,setTimeout(function(){e.listLoading=!1},1500)})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleModifyStatus:function(e,t){this.$message({message:"操作成功",type:"success"}),e.status=t},resetTemp:function(){this.temp={}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},createData:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&function(e){return Object(l.a)({url:"/benterprise/add",method:"post",params:e})}(e.temp).then(function(){e.getList(),e.dialogFormVisible=!1,e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})})},handleUpdate:function(e){var t=this;this.temp=n()({},e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},updateData:function(){var e=this;this.uptemp.id=this.temp.id,this.uptemp.name=this.temp.name,this.uptemp.epno=this.temp.epno,this.uptemp.epcontacts=this.temp.epcontacts,this.uptemp.remark=this.temp.remark,this.uptemp.voided=this.temp.voided,this.uptemp.epcall=this.temp.epcall,function(e){return Object(l.a)({url:"/benterprise/update",method:"post",params:e})}(this.uptemp).then(function(t){e.getList(),e.dialogFormVisible=!1,e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})},handleDelete:function(e){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var t=this.list.indexOf(e);this.list.splice(t,1)},handleFetchPv:function(e){},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e("chunk-0d49"),a.e("chunk-63e8")]).then(a.bind(null,"S/jZ")).then(function(t){var a=e.formatJson(["timestamp","title","type","importance","status"],e.list);t.export_json_to_excel({header:["timestamp","title","type","importance","status"],data:a,filename:"table-list"}),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"timestamp"===e?Object(o.c)(t[e]):t[e]})})}}},u=(a("wWt5"),a("KHd+")),d=Object(u.a)(p,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"机构名称"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}}),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("table.search")))]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"success",icon:"el-icon-plus"},on:{click:e.handleCreate}},[e._v("创建机构")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"企业编号",width:"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.epno))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"机构名称",width:"220px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"联系电话",width:"180px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.epcall))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"联系人",width:"180px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.epcontacts))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",width:"180px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.createtime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"备注","min-width":"220px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.remark))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"状态",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("statusFilter")(t.row.voided)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center",width:"220","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(a){e.handleUpdate(t.row)}}},[e._v(e._s(e.$t("table.edit")))])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,total:e.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:"机构名称",prop:"name"}},[a("el-input",{attrs:{maxlength:"16"},model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name",t)},expression:"temp.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"机构编号",prop:"name"}},[a("el-input",{attrs:{maxlength:"16"},model:{value:e.temp.epno,callback:function(t){e.$set(e.temp,"epno",t)},expression:"temp.epno"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系人",prop:"name"}},[a("el-input",{attrs:{maxlength:"16"},model:{value:e.temp.epcontacts,callback:function(t){e.$set(e.temp,"epcontacts",t)},expression:"temp.epcontacts"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系电话",prop:"name"}},[a("el-input",{attrs:{maxlength:"16"},model:{value:e.temp.epcall,callback:function(t){e.$set(e.temp,"epcall",t)},expression:"temp.epcall"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"name"}},[a("el-input",{attrs:{maxlength:"20"},model:{value:e.temp.remark,callback:function(t){e.$set(e.temp,"remark",t)},expression:"temp.remark"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"生效"}},[a("el-tooltip",{attrs:{content:"当前生效值: "+e.temp.voided,placement:"top"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"0"},model:{value:e.temp.voided,callback:function(t){e.$set(e.temp,"voided",t)},expression:"temp.voided"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"==e.dialogStatus?a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-check-outline"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm")))]):a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-check-outline"},on:{click:e.updateData}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)},[],!1,null,null,null);d.options.__file="list.vue";t.default=d.exports},wWt5:function(e,t,a){"use strict";var i=a("8o6g");a.n(i).a}}]);