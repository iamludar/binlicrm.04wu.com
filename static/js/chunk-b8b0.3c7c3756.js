(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b8b0"],{Syvo:function(e,t,a){"use strict";a.r(t);var i=a("P2sY"),s=a.n(i),l=a("t3Un");function n(){return Object(l.a)({url:"/buser/store/list",method:"get"})}function o(){return Object(l.a)({url:"/benterprise/list",method:"get"})}var r=a("zF5t"),c=a("Yfch"),u=a("ZySA"),d=a("7Qib"),p={name:"ComplexTable",directives:{waves:u.a},filters:{statusFilter:function(e){return{0:"无效",1:"有效"}[e]},statusClass:function(e){return{0:"danger",1:"success"}[e]}},data:function(){return{roleList:[],admroleList:[],checkList:[],addrole:"",tempRole:{roleId:"",userId:""},tableKey:0,list:null,total:null,listLoading:!0,listQuery:{pageStart:1,pageSize:20,mobile:"",sort:"+id"},importanceOptions:[1,2,3],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],showReviewer:!1,temp:{voided:"1"},tempaccountName:"",queryUpdata:{},storeList:{},enterpriseList:{},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑管理员",create:"创建管理用户"},dialogPvVisible:!1,dialogEditRoleVisible:!1,pvData:[],rules:{mobile:[{required:!0,trigger:"change",validator:function(e,t,a){Object(c.c)(t)?a():a(new Error("请输入正确的手机号"))}}],accountName:[{required:!0,message:"用户名为必填项",trigger:"change"}],name:[{required:!0,message:"昵称为必填项",trigger:"blur"}],password:[{required:!0,message:"密码为必填项",trigger:"blur"}]},downloadLoading:!1}},created:function(){var e=this;this.getList(),Object(r.e)().then(function(t){e.roleList=t.data.result})},methods:{getList:function(){var e=this;this.listLoading=!0,function(e){return Object(l.a)({url:"/buser/list/btn",method:"get",params:e})}(this.listQuery).then(function(t){e.list=t.data.result,e.total=t.data.count,setTimeout(function(){e.listLoading=!1},1500)})},handleFilter:function(){this.listQuery.pageStart=1,this.getList()},handleRoleAdd:function(e){var t=this;this.tempRole.userId=e.id,Object(r.e)().then(function(e){t.roleList=e.data.result}),this.dialogPvVisible=!0},handleRoleEdit:function(e){var t=this;this.tempRole.userId=e.id,function(e){return Object(l.a)({url:"/buser/role/list",method:"get",params:{userId:e}})}(this.tempRole.userId).then(function(e){for(var a=e.data.result,i=0;i<a.length;i++)t.admroleList.push(a[i].id);t.dialogEditRoleVisible=!0})},roleAdd:function(){var e=this;(function(e){return Object(l.a)({url:"/buser/add/role",method:"post",params:e})})(this.tempRole).then(function(t){e.dialogPvVisible=!1,"1"===t.data.status?e.$notify({title:"成功",message:"角色添加成功",type:"success",duration:2e3}):e.$notify({title:"失败",message:t.data.message,type:"error",duration:2e3})})},roleEdit:function(){var e=this;(function(e){return Object(l.a)({url:"/buser/role/update",method:"get",params:e})})({roleIds:this.admroleList.toString(),userId:this.tempRole.userId}).then(function(t){e.dialogEditRoleVisible=!1})},handleSizeChange:function(e){this.listQuery.pageSize=e,this.getList()},handleCurrentChange:function(e){this.listQuery.pageStart=e,this.getList()},handleModifyStatus:function(e,t){this.$message({message:"操作成功",type:"success"}),e.status=t},resetTemp:function(){this.temp={voided:"1"}},handleCreate:function(){var e=this;this.resetTemp(),n().then(function(t){e.storeList=t.data.result}),o().then(function(t){e.enterpriseList=t.data.result}),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},createData:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&function(e){return Object(l.a)({url:"/buser/add",method:"post",params:e})}(e.temp).then(function(t){"1"===t.data.status?(e.getList(),e.dialogFormVisible=!1,e.$message({type:"success",message:"成功添加管理用户"})):e.$message({type:"warning",message:t.data.message})})})},handleUpdate:function(e){var t=this;this.temp=s()({},e),this.tempaccountName=this.temp.accountName,n().then(function(e){t.storeList=e.data.result;for(var a=0;a<t.storeList.length;a++)t.storeList[a].id=parseInt(t.storeList[a].id)}),o().then(function(e){t.enterpriseList=e.data.result}),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},updateData:function(){var e=this;this.tempaccountName===this.temp.accountName?(this.queryUpdata=s()({},this.temp),this.queryUpdata.accountName=""):this.queryUpdata=s()({},this.temp),function(e){return Object(l.a)({url:"/buser/update",method:"post",params:e})}(this.queryUpdata).then(function(t){"1"===t.data.status?(e.getList(),e.dialogFormVisible=!1,e.$message({type:"success",message:"成功修改管理用户信息"})):e.$message({type:"warning",message:t.data.message})})},handleDelete:function(e){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var t=this.list.indexOf(e);this.list.splice(t,1)},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e("chunk-0d49"),a.e("chunk-63e8")]).then(a.bind(null,"S/jZ")).then(function(t){var a=e.formatJson(["timestamp","title","type","importance","status"],e.list);t.export_json_to_excel({header:["timestamp","title","type","importance","status"],data:a,filename:"table-list"}),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"timestamp"===e?Object(d.c)(t[e]):t[e]})})}}},m=(a("UEC/"),a("KHd+")),f=Object(m.a)(p,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"用户名"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.listQuery.accountName,callback:function(t){e.$set(e.listQuery,"accountName",t)},expression:"listQuery.accountName"}}),e._v(" "),a("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},on:{change:e.handleFilter},model:{value:e.listQuery.roleId,callback:function(t){e.$set(e.listQuery,"roleId",t)},expression:"listQuery.roleId"}},e._l(e.roleList,function(e){return a("el-option",{key:e.id,attrs:{label:e.rolename,value:e.id}})})),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("table.search")))]),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"success",icon:"el-icon-plus"},on:{click:e.handleCreate}},[e._v("创建管理用户")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"用户昵称 ",width:"120px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"用户名 ",width:"80px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.accountName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("table.tel"),width:"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.mobile))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"所属门店",width:"220px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.storeName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"所属机构","min-width":"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.enterpriseName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"有效",width:"70px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:"0"===t.row.voided?"danger":"success"}},[e._v(e._s(e._f("statusFilter")(t.row.voided)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center","min-width":"220","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:function(a){e.handleRoleAdd(t.row)}}},[e._v("角色")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(a){e.handleRoleEdit(t.row)}}},[e._v("编辑角色")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(a){e.handleUpdate(t.row)}}},[e._v("编辑")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{"current-page":e.listQuery.pageStart,"page-sizes":[10,20,30,50],"page-size":e.listQuery.pageSize,total:e.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:"昵称",prop:"name"}},[a("el-input",{attrs:{maxlength:"10"},model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name",t)},expression:"temp.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"电话",prop:"mobile"}},[a("el-input",{model:{value:e.temp.mobile,callback:function(t){e.$set(e.temp,"mobile",t)},expression:"temp.mobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户名",prop:"accountName"}},[a("el-input",{attrs:{maxlength:"10"},model:{value:e.temp.accountName,callback:function(t){e.$set(e.temp,"accountName",t)},expression:"temp.accountName"}})],1),e._v(" "),"创建管理用户"===e.textMap[e.dialogStatus]?a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{placeholder:"请输入密码",maxlength:"10"},model:{value:e.temp.password,callback:function(t){e.$set(e.temp,"password",t)},expression:"temp.password"}})],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"所属机构"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.temp.enterpriseId,callback:function(t){e.$set(e.temp,"enterpriseId",t)},expression:"temp.enterpriseId"}},e._l(e.enterpriseList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"所属门店"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.temp.bstoreId,callback:function(t){e.$set(e.temp,"bstoreId",t)},expression:"temp.bstoreId"}},e._l(e.storeList,function(e){return a("el-option",{key:e.id,attrs:{label:e.businessName,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"生效"}},[a("el-tooltip",{attrs:{content:"当前生效值: "+e.temp.voided,placement:"top"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"0"},model:{value:e.temp.voided,callback:function(t){e.$set(e.temp,"voided",t)},expression:"temp.voided"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"==e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm")))]):a("el-button",{attrs:{type:"primary"},on:{click:e.updateData}},[e._v(e._s(e.$t("table.confirm")))])],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogPvVisible,title:"给用户添加角色"},on:{"update:visible":function(t){e.dialogPvVisible=t}}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.tempRole.roleId,callback:function(t){e.$set(e.tempRole,"roleId",t)},expression:"tempRole.roleId"}},e._l(e.roleList,function(e){return a("el-option",{key:e.id,attrs:{label:e.rolename,value:e.id}})})),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.roleAdd}},[e._v(e._s(e.$t("table.confirm")))])],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogEditRoleVisible,title:"编辑角色"},on:{"update:visible":function(t){e.dialogEditRoleVisible=t}}},[a("el-checkbox-group",{attrs:{min:1},model:{value:e.admroleList,callback:function(t){e.admroleList=t},expression:"admroleList"}},e._l(e.roleList,function(t){return a("el-checkbox",{key:t.id,attrs:{label:t.id}},[e._v(e._s(t.rolename))])})),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.roleEdit}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)},[],!1,null,null,null);f.options.__file="list.vue";t.default=f.exports},"UEC/":function(e,t,a){"use strict";var i=a("uNnh");a.n(i).a},ZySA:function(e,t,a){"use strict";var i=a("P2sY"),s=a.n(i),l=(a("jUE0"),{bind:function(e,t){e.addEventListener("click",function(a){var i=s()({},t.value),l=s()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),n=l.ele;if(n){n.style.position="relative",n.style.overflow="hidden";var o=n.getBoundingClientRect(),r=n.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":((r=document.createElement("span")).className="waves-ripple",r.style.height=r.style.width=Math.max(o.width,o.height)+"px",n.appendChild(r)),l.type){case"center":r.style.top=o.height/2-r.offsetHeight/2+"px",r.style.left=o.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(a.pageY-o.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(a.pageX-o.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=l.color,r.className="waves-ripple z-active",!1}},!1)}}),n=function(e){e.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(n)),l.install=n;t.a=l},jUE0:function(e,t,a){},uNnh:function(e,t,a){},zF5t:function(e,t,a){"use strict";a.d(t,"e",function(){return s}),a.d(t,"a",function(){return l}),a.d(t,"b",function(){return n}),a.d(t,"d",function(){return o}),a.d(t,"c",function(){return r});var i=a("t3Un");function s(e){return Object(i.a)({url:"/brole/list",method:"get",params:e})}function l(e){return Object(i.a)({url:"/brole/add",method:"post",params:e})}function n(e){return Object(i.a)({url:"/brole/edit",method:"post",params:e})}function o(e){return Object(i.a)({url:"/bpermission/list",method:"get",params:{roleId:e}})}function r(e){return Object(i.a)({url:"/brole/permissions/update",method:"get",params:e})}}}]);