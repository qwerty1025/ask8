(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7abbe7ce"],{"01bb":function(t,s,e){"use strict";var i=e("b8d7"),o=e.n(i);o.a},"0467":function(t,s,e){},"1a02":function(t,s,e){},"2c64":function(t,s,e){},"3d86":function(t,s,e){},"42f3":function(t,s,e){},"43a6":function(t,s,e){"use strict";e("a9e3");var i=e("5530"),o=(e("ec29"),e("3d86"),e("c37a")),a=e("604c"),n=e("8547"),r=e("58df"),c=Object(r["a"])(n["a"],a["a"],o["a"]);s["a"]=c.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},o["a"].options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=o["a"].options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=o["a"].options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:a["a"].options.methods.onClick}})},"67b6":function(t,s,e){"use strict";e("b0c0");var i=e("15fd"),o=e("5530"),a=(e("2c64"),e("ba87")),n=e("9d26"),r=e("c37a"),c=e("7e2b"),l=e("a9ad"),u=e("4e82"),p=e("5311"),h=e("7560"),d=e("fe09"),_=e("80d2"),f=e("58df"),v=e("d9f7"),m=Object(f["a"])(c["a"],l["a"],p["a"],Object(u["a"])("radioGroup"),h["a"]);s["a"]=m.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return Object(o["a"])(Object(o["a"])({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return d["a"].options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return r["a"].options.computed.computedId.call(this)},hasLabel:r["a"].options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return d["a"].options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return d["a"].options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(a["a"],{on:{click:d["b"]},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(_["s"])(this,"label")||this.label):null},genRadio:function(){var t=this.attrs$,s=(t.title,Object(i["a"])(t,["title"]));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(n["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(Object(o["a"])({name:this.computedName,value:this.value},s)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var s={staticClass:"v-radio",class:this.classes,on:Object(v["c"])({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}};return t("div",s,[this.genRadio(),this.genLabel()])}})},"8f5a":function(t,s,e){},"9f3c":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.currentTutorial?e("div",{staticClass:"edit-form"},[e("div",{staticClass:"mt-5 flex justify-end w-full"},[e("div",{staticClass:"  text-xs align-text-bottom"}),e("div",{staticClass:"form-group w-2/3 flex"},[e("v-btn",{staticClass:"1/5 border-2 border-solid px-2 mx-2",on:{click:t.updateTutorial}},[t._v(" 上傳更新 ")]),e("v-btn",{staticClass:"1/5 border-2 border-solid px-2 mx-2",on:{click:t.resetTutorial}},[t._v(" 重新設定 ")]),e("v-chip",{staticClass:"mt-1 px-3 py-3 text-s font-bold",attrs:{color:"red","text-color":"white"}},[t._v(" "+t._s(t.message)+" ")])],1)]),e("form",[e("div",{staticClass:"flex justify-end w-full mt-10 my-3"},[e("div",{staticClass:"w-1/6 "}),e("div",{staticClass:"w-5/6 "},[e("v-row",[e("div",{staticClass:"py-3 px-10 text-lg font-bold bg-green-500 text-white "},[t._v(" "+t._s(t.currentTutorial.pos)+" _ "+t._s(t.currentTutorial.sno_idx)+" _ "+t._s(t.currentTutorial.sno_dtl)+" ")]),e("div",{staticClass:"flex"},[e("v-text-field",{staticClass:"w-1/3 text-xs  px-1",attrs:{solo:"",label:"題本序號"},on:{change:t.updateTutorial},model:{value:t.currentTutorial.pos,callback:function(s){t.$set(t.currentTutorial,"pos",s)},expression:"currentTutorial.pos"}}),e("v-text-field",{staticClass:"w-1/3 text-xs  px-1",attrs:{solo:"",label:"主題號"},on:{change:t.updateTutorial},model:{value:t.currentTutorial.sno_idx,callback:function(s){t.$set(t.currentTutorial,"sno_idx",s)},expression:"currentTutorial.sno_idx"}}),e("v-text-field",{staticClass:"w-1/3 text-xs  px-1",attrs:{solo:"",label:"子題號"},on:{change:t.updateTutorial},model:{value:t.currentTutorial.sno_dtl,callback:function(s){t.$set(t.currentTutorial,"sno_dtl",s)},expression:"currentTutorial.sno_dtl"}})],1),e("v-textarea",{attrs:{clearable:"",outlined:"",shaped:"",rows:"2","row-height":"15",label:"題目內容",rounded:"",dense:""},on:{change:t.updateTutorial},model:{value:t.currentTutorial.question,callback:function(s){t.$set(t.currentTutorial,"question",s)},expression:"currentTutorial.question"}}),e("span",{staticClass:"w-1/6 text-lg mt-3"},[t._v(" (A) ")]),t._v(" "),e("div",{staticClass:"w-5/6"},[e("v-textarea",{staticClass:"text-xs",attrs:{solo:"",rounded:"",label:"選項(A)",rows:"1","row-height":"15"},model:{value:t.currentTutorial.quesopts[0],callback:function(s){t.$set(t.currentTutorial.quesopts,0,s)},expression:"currentTutorial.quesopts[0]"}})],1),e("span",{staticClass:"w-1/6 text-lg mt-3"},[t._v(" (B) ")]),t._v(" "),e("div",{staticClass:"w-5/6"},[e("v-textarea",{staticClass:"text-xs",attrs:{solo:"",rounded:"",label:"選項(B)",rows:"1","row-height":"15"},model:{value:t.currentTutorial.quesopts[1],callback:function(s){t.$set(t.currentTutorial.quesopts,1,s)},expression:"currentTutorial.quesopts[1]"}})],1),e("span",{staticClass:"w-1/6 text-lg mt-3"},[t._v(" (C) ")]),t._v(" "),e("div",{staticClass:"w-5/6"},[e("v-textarea",{staticClass:"text-xs",attrs:{solo:"",rounded:"",label:"選項(C)",rows:"1","row-height":"15"},model:{value:t.currentTutorial.quesopts[2],callback:function(s){t.$set(t.currentTutorial.quesopts,2,s)},expression:"currentTutorial.quesopts[2]"}})],1),e("span",{staticClass:"w-1/6 text-lg mt-3"},[t._v(" (D) ")]),t._v(" "),e("div",{staticClass:"w-5/6"},[e("v-textarea",{staticClass:"text-xs",attrs:{solo:"",rounded:"",label:"選項(D)",rows:"1","row-height":"15"},model:{value:t.currentTutorial.quesopts[3],callback:function(s){t.$set(t.currentTutorial.quesopts,3,s)},expression:"currentTutorial.quesopts[3]"}})],1),e("span",{staticClass:"w-1/6 text-lg mt-3"},[t._v(" (E) ")]),t._v(" "),e("div",{staticClass:"w-5/6"},[e("v-textarea",{staticClass:"text-xs",attrs:{solo:"",rounded:"",label:"選項(E)",rows:"1","row-height":"15"},model:{value:t.currentTutorial.quesopts[4],callback:function(s){t.$set(t.currentTutorial.quesopts,4,s)},expression:"currentTutorial.quesopts[4]"}})],1),e("v-chip-group",{model:{value:t.stmp_idx,callback:function(s){t.stmp_idx=s},expression:"stmp_idx"}},[e("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x"},on:{click:function(s){return t.copyopts(0)}}},[t._v(t._s(t.slt_opts[0].opts_C))]),e("v-chip",{attrs:{"active-class":"bg-red-500     text-white text-x"},on:{click:function(s){return t.copyopts(1)}}},[t._v(t._s(t.slt_opts[1].opts_C))]),e("v-chip",{attrs:{"active-class":"bg-blue-500    text-white text-x"},on:{click:function(s){return t.copyopts(2)}}},[t._v(t._s(t.slt_opts[2].opts_C))]),e("v-chip",{attrs:{"active-class":"bg-yellow-500  text-white text-x"},on:{click:function(s){return t.copyopts(3)}}},[t._v(t._s(t.slt_opts[3].opts_C))]),e("v-chip",{attrs:{"active-class":"bg-red-500    text-white text-x"},on:{click:function(s){return t.copyopts(4)}}},[t._v(t._s(t.slt_opts[4].opts_C))]),e("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x"},on:{click:function(s){return t.copyopts(5)}}},[t._v(t._s(t.slt_opts[5].opts_C))]),e("v-chip",{attrs:{"active-class":"bg-red-500     text-white text-x"},on:{click:function(s){return t.copyopts(6)}}},[t._v(t._s(t.slt_opts[6].opts_C))]),e("v-chip",{attrs:{"active-class":"bg-blue-500    text-white text-x"},on:{click:function(s){return t.copyopts(7)}}},[t._v(t._s(t.slt_opts[7].opts_C))]),e("v-chip",{attrs:{"active-class":"bg-yellow-500  text-white text-x"},on:{click:function(s){return t.copyopts(8)}}},[t._v(t._s(t.slt_opts[8].opts_C))]),e("v-chip",{attrs:{"active-class":"bg-red-500    text-white text-x"},on:{click:function(s){return t.copyopts(9)}}},[t._v(t._s(t.slt_opts[9].opts_C))]),e("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x"},on:{click:function(s){return t.copyopts(10)}}},[t._v(t._s(t.slt_opts[10].opts_C))])],1)],1)],1)])])]):e("div",[e("br"),e("p",[t._v("Please 確認 on a Tutorial...")])])},o=[],a=e("5530"),n=e("69e5"),r={name:"tutorial",props:["tutorial"],data:function(){return{message:"",show:!0,currentTutorial:{pos:"",sno:"",sno_idx:"",sno_dtl:"",question:"",quesopts:[],left_time:"",tmp_idx:"",memo:"",slted:[],statu:[]},stmp_idx:"",slt_opts:[{opts_A:"極不好",opts_B:"不好",opts_C:"中等程度好",opts_D:"好",opts_E:"極好"},{opts_A:"極不滿意",opts_B:"不滿意",opts_C:"中等程度滿意",opts_D:"滿意",opts_E:"極滿意"},{opts_A:"完全沒有需要",opts_B:"有一點需要",opts_C:"中等程度需要",opts_D:"很需要",opts_E:"極需要"},{opts_A:"完全不享受",opts_B:"有一點享受",opts_C:"中等程度享受",opts_D:"很享受",opts_E:"極享受"},{opts_A:"完全不健康",opts_B:"有一點健康",opts_C:"中等程度健康",opts_D:"很健康",opts_E:"極健康"},{opts_A:"完全不足夠",opts_B:"有一點足夠",opts_C:"中等程度足夠",opts_D:"很足夠",opts_E:"極足夠"},{opts_A:"完全不能夠",opts_B:"有一點能夠",opts_C:"中等程度能夠",opts_D:"很能夠",opts_E:"極能夠"},{opts_A:"完全不方便",opts_B:"有一點方便",opts_C:"中等程度方便",opts_D:"很方便",opts_E:"極方便"},{opts_A:"完全沒有機會",opts_B:"少許機會",opts_C:"中等程度機會",opts_D:"很有機會",opts_E:"完全有機會"},{opts_A:"完全沒有",opts_B:"有一點有",opts_C:"一半有一半沒有",opts_D:"很有",opts_E:"極有"},{opts_A:"從來沒有",opts_B:"不常有",opts_C:"一半有一半沒有",opts_D:"很常有",opts_E:"一直都有"}]}},watch:{tutorial:function(t){this.currentTutorial=Object(a["a"])({},t),this.message=""}},methods:{updatePublished:function(t){var s=this;n["a"].update(this.currentTutorial.key,{published:t}).then((function(){s.currentTutorial.published=t,s.message="The status was updated successfully!"})).catch((function(t){console.log(t)}))},resetTutorial:function(){var t=this;this.currentTutorial.tmp_idx="",this.currentTutorial.left_time="",this.currentTutorial.memo="";var s={tmp_idx:"",left_time:"",memo:""};n["a"].update(this.currentTutorial.key,s).then((function(){t.message="資料，清除成功 !"})).catch((function(t){console.log(t)}))},updateTutorial:function(){var t=this,s={pos:this.currentTutorial.pos,sno_idx:this.currentTutorial.sno_idx,sno_dtl:this.currentTutorial.sno_dtl,question:this.currentTutorial.question,quesopts:this.currentTutorial.quesopts,quesinduc:this.currentTutorial.quesinduc};n["a"].update(this.currentTutorial.key,s).then((function(){t.message="更新資料,上傳成功!"})).catch((function(t){console.log(t)}))},deleteTutorial:function(){var t=this;n["a"].delete(this.currentTutorial.key).then((function(){t.$emit("refreshList")})).catch((function(t){console.log(t)}))},removeAllTutorials:function(){var t=this;n["a"].deleteAll().then((function(){t.refreshList()})).catch((function(t){console.log(t)}))},copyopts:function(t){this.currentTutorial.quesopts[0]=this.slt_opts[t].opts_A,this.currentTutorial.quesopts[1]=this.slt_opts[t].opts_B,this.currentTutorial.quesopts[2]=this.slt_opts[t].opts_C,this.currentTutorial.quesopts[3]=this.slt_opts[t].opts_D,this.currentTutorial.quesopts[4]=this.slt_opts[t].opts_E}},mounted:function(){this.message="",this.currentTutorial=Object(a["a"])({},this.tutorial)}},c=r,l=(e("cfa6"),e("2877")),u=e("6544"),p=e.n(u),h=e("8336"),d=e("cc20"),_=e("ef9a"),f=e("0fd9"),v=e("8654"),m=e("a844"),b=Object(l["a"])(c,i,o,!1,null,null,null);s["a"]=b.exports;p()(b,{VBtn:h["a"],VChip:d["a"],VChipGroup:_["a"],VRow:f["a"],VTextField:v["a"],VTextarea:m["a"]})},b8d7:function(t,s,e){},cfa6:function(t,s,e){"use strict";var i=e("1a02"),o=e.n(i);o.a},e4e5:function(t,s,e){"use strict";var i=e("5530"),o=(e("0467"),e("10d2")),a=e("713a"),n=e("9d26"),r=e("0789"),c=e("e4cd"),l=e("f2e7"),u=e("58df"),p=e("80d2");s["a"]=Object(u["a"])(o["a"],c["a"],l["a"]).extend({name:"v-banner",inheritAttrs:!1,props:{app:Boolean,icon:String,iconColor:String,singleLine:Boolean,sticky:Boolean,value:{type:Boolean,default:!0}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-banner--has-icon":this.hasIcon,"v-banner--is-mobile":this.isMobile,"v-banner--single-line":this.singleLine,"v-banner--sticky":this.isSticky})},hasIcon:function(){return Boolean(this.icon||this.$slots.icon)},isSticky:function(){return this.sticky||this.app},styles:function(){var t=Object(i["a"])({},o["a"].options.computed.styles.call(this));if(this.isSticky){var s=this.app?this.$vuetify.application.bar+this.$vuetify.application.top:0;t.top=Object(p["g"])(s),t.position="sticky",t.zIndex=1}return t}},methods:{toggle:function(){this.isActive=!this.isActive},iconClick:function(t){this.$emit("click:icon",t)},genIcon:function(){var t;if(this.hasIcon)return t=this.icon?this.$createElement(n["a"],{props:{color:this.iconColor,size:28}},[this.icon]):this.$slots.icon,this.$createElement(a["a"],{staticClass:"v-banner__icon",props:{color:this.color,size:40},on:{click:this.iconClick}},[t])},genText:function(){return this.$createElement("div",{staticClass:"v-banner__text"},this.$slots.default)},genActions:function(){var t=this,s=Object(p["s"])(this,"actions",{dismiss:function(){return t.isActive=!1}});if(s)return this.$createElement("div",{staticClass:"v-banner__actions"},s)},genContent:function(){return this.$createElement("div",{staticClass:"v-banner__content"},[this.genIcon(),this.genText()])},genWrapper:function(){return this.$createElement("div",{staticClass:"v-banner__wrapper"},[this.genContent(),this.genActions()])}},render:function(t){return t(r["a"],[t("div",this.setBackgroundColor(this.color,{staticClass:"v-banner",attrs:this.attrs$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]}),[this.genWrapper()])])}})},e62a:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:" flex justify-center  "},[e("div",{staticClass:"w-5/12 "},[e("v-banner",{attrs:{sticky:""}},[e("div",{staticClass:"flex justify-center  "}),t.currentTutorial?e("div",[e("tutorial-details",{attrs:{tutorial:t.currentTutorial},on:{refreshList:t.refreshList}})],1):e("div",[e("br"),e("p",[t._v("請選擇右方 題目...")])])])],1),e("div",{staticClass:"w-7/12"},[e("v-tabs",{attrs:{"background-color":"primary","fixed-tabs":""},model:{value:t.tab,callback:function(s){t.tab=s},expression:"tab"}},[t.hide?t._e():e("v-tab",{key:"k1",attrs:{href:"#k1"}},[t._v(" 題庫1 ")]),e("v-tab",{key:"k2",attrs:{href:"#k2"}},[t._v(" 題庫2 ")]),t.hide?t._e():e("v-tab",{key:"k3",attrs:{href:"#k3"}},[t._v(" 題庫3 ")])],1),e("v-tabs-items",{model:{value:t.tab,callback:function(s){t.tab=s},expression:"tab"}},[e("v-tab-item",{key:"k3",attrs:{value:"k3"}}),e("v-tab-item",{key:"k2",attrs:{value:"k2"}}),e("v-tab-item",{key:"k1",attrs:{value:"k1"}},[e("v-list-item-group",{attrs:{color:"primary"}},t._l(t.tutorials,(function(s,i){return e("v-list-item",{key:i,on:{click:function(e){return t.setActiveTutorial(s,i)}}},[e("v-chip",{staticClass:"text-white text-xs mr-5",attrs:{color:"green"}},[t._v(" "+t._s(s.pos)+" "+t._s(s.sno)+"_"+t._s(s.sno_idx)+"_"+t._s(s.sno_dtl))]),e("span",{staticClass:"text-xs text-green-700 font-semibold tracking-wide"},[t._v(t._s(s.question))]),t._l(s.quesopts,(function(s,i){return e("v-radio-group",{key:i,attrs:{column:""},model:{value:t.ex7[i],callback:function(s){t.$set(t.ex7,i,s)},expression:"ex7[index]"}},[e("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{label:s,color:"red",value:i,text:t.xs}})],1)}))],2)})),1)],1)],1)],1)])},o=[],a=(e("4160"),e("159b"),e("9f3c")),n=e("69e5"),r={name:"tutorials-list",components:{TutorialDetails:a["a"]},data:function(){return{radioGroup:"",ex7:[],dialog:!1,tab:"",ckbx:"",opts:["1星","2星","3星","4星","5星"],copyRight_N:!1,copyRight_T:!1,copyRight_M:!1,bch_left_time:"",bch_tmp_idx:"",bch_memo:"",show:!1,tutorials:[],currentTutorial:null,currentIndex:-1}},methods:{onDataChange:function(t){var s=[];t.forEach((function(t){var e=t.key,i=t.val();s.push({key:e,pos:i.pos,sno:i.sno,sno_idx:i.sno_idx,sno_dtl:i.sno_dtl,quesopts:i.quesopts,question:i.question,quesinduc:i.quesinduc,tmp_idx:i.tmp_idx,left_time:i.left_time,memo:i.memo,slted:i.slted,statu:i.statu})})),this.tutorials=s},refreshList:function(){this.currentTutorial=null,this.currentIndex=-1},setActiveTutorial:function(t,s){this.currentTutorial=t,this.currentIndex=s,0!=this.copyRight_N&&(this.currentTutorial.tmp_idx=this.bch_tmp_idx,this.bch_updta(),this.message="複製更新 成功!"),0!=this.copyRight_T&&(this.currentTutorial.left_time=this.bch_left_time,this.bch_updta(),this.message="複製更新 成功!"),0!=this.copyRight_M&&(this.currentTutorial.memo=this.bch_memo,this.bch_updta(),this.message="複製更新 成功!")},bch_updta:function(){var t=this,s={tmp_idx:this.currentTutorial.tmp_idx,left_time:this.currentTutorial.left_time,memo:this.currentTutorial.memo};n["a"].update(this.currentTutorial.key,s).then((function(){t.message="更新成功!"})).catch((function(t){console.log(t)}))},reSet_pos_0:function(){for(var t=0;t<=100;t++)this.setActiveTutorial(this.tutorials[t],t),this.reSetOne(this.tutorials[t],t);this.dialog.value=!1},reSet_pos_1:function(){for(var t=0;t<=36;t++)this.setActiveTutorial(this.tutorials[t],t),this.reSetOne(this.tutorials[t],t);this.dialog.value=!1},reSet_pos_2:function(){for(var t=37;t<=100;t++)this.setActiveTutorial(this.tutorials[t],t),this.reSetOne(this.tutorials[t],t);this.dialog.value=!1},reSetOne:function(t,s){var e=this;this.currentTutorial=t,this.currentIndex=s,this.currentTutorial.tmp_idx="",this.currentTutorial.left_time="",this.currentTutorial.memo="";var i={tmp_idx:"",left_time:"",memo:""};n["a"].update(this.currentTutorial.key,i).then((function(){e.message="更新成功!"})).catch((function(t){console.log(t)}))},removeAllTutorials:function(){var t=this;n["a"].deleteAll().then((function(){t.refreshList()})).catch((function(t){console.log(t)}))}},mounted:function(){n["a"].getAll().on("value",this.onDataChange)},beforeDestroy:function(){n["a"].getAll().off("value",this.onDataChange)}},c=r,l=(e("01bb"),e("f338"),e("2877")),u=e("6544"),p=e.n(u),h=e("e4e5"),d=e("cc20"),_=e("da13"),f=e("1baa"),v=e("67b6"),m=e("43a6"),b=e("71a3"),x=e("c671"),g=e("fe57"),T=e("aac8"),C=Object(l["a"])(c,i,o,!1,null,null,null);s["default"]=C.exports;p()(C,{VBanner:h["a"],VChip:d["a"],VListItem:_["a"],VListItemGroup:f["a"],VRadio:v["a"],VRadioGroup:m["a"],VTab:b["a"],VTabItem:x["a"],VTabs:g["a"],VTabsItems:T["a"]})},ef9a:function(t,s,e){"use strict";var i=e("5530"),o=(e("8f5a"),e("7efd")),a=e("a9ad"),n=e("58df");s["a"]=Object(n["a"])(o["a"],a["a"]).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,Object(i["a"])({},o["a"].options.methods.genData.call(this)))}}})},f338:function(t,s,e){"use strict";var i=e("42f3"),o=e.n(i);o.a}}]);