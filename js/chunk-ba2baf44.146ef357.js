(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba2baf44"],{"0393":function(t,e,s){"use strict";s("0481"),s("4069");var a=s("5530"),r=(s("210b"),s("604c")),n=s("d9bd");e["a"]=r["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(n["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(n["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(t,e){var s=this.getValue(t,e),a=this.getValue(t,e+1);t.isActive=this.toggleMethod(s),t.nextIsActive=this.toggleMethod(a)}}})},"210b":function(t,e,s){},"2c64":function(t,e,s){},"3d86":function(t,e,s){},"43a6":function(t,e,s){"use strict";s("a9e3");var a=s("5530"),r=(s("ec29"),s("3d86"),s("c37a")),n=s("604c"),o=s("8547"),i=s("58df"),l=Object(i["a"])(o["a"],n["a"],r["a"]);e["a"]=l.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},r["a"].options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=r["a"].options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=r["a"].options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:n["a"].options.methods.onClick}})},"49e2":function(t,e,s){"use strict";var a=s("0789"),r=s("9d65"),n=s("a9ad"),o=s("3206"),i=s("80d2"),l=s("58df"),d=Object(l["a"])(r["a"],n["a"],Object(o["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));e["a"]=d.extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(t,e){var s=this;t&&(this.isBooted=!0),null==e?this.isActive=t:this.$nextTick((function(){return s.isActive=t}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(t){var e=this;return t(a["a"],this.showLazyContent((function(){return[t("div",e.setBackgroundColor(e.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:e.isActive}]}),[t("div",{class:"v-expansion-panel-content__wrap"},Object(i["s"])(e))])]})))}})},"4b85":function(t,e,s){},"67b6":function(t,e,s){"use strict";s("b0c0");var a=s("15fd"),r=s("5530"),n=(s("2c64"),s("ba87")),o=s("9d26"),i=s("c37a"),l=s("7e2b"),d=s("a9ad"),c=s("4e82"),u=s("5311"),p=s("7560"),v=s("fe09"),x=s("80d2"),h=s("58df"),f=s("d9f7"),b=Object(h["a"])(l["a"],d["a"],u["a"],Object(c["a"])("radioGroup"),p["a"]);e["a"]=b.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return v["a"].options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return i["a"].options.computed.computedId.call(this)},hasLabel:i["a"].options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return v["a"].options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return v["a"].options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(n["a"],{on:{click:v["b"]},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(x["s"])(this,"label")||this.label):null},genRadio:function(){var t=this.attrs$,e=(t.title,Object(a["a"])(t,["title"]));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(o["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(Object(r["a"])({name:this.computedName,value:this.value},e)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var e={staticClass:"v-radio",class:this.classes,on:Object(f["c"])({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}};return t("div",e,[this.genRadio(),this.genLabel()])}})},"69e5":function(t,e,s){"use strict";var a=s("d4ec"),r=s("bee2"),n=s("dc59"),o=n["a"].ref("/sts"),i=function(){function t(){Object(a["a"])(this,t)}return Object(r["a"])(t,[{key:"getAll",value:function(){return o}},{key:"getSome",value:function(t){return o.orderByChild(t)}},{key:"create",value:function(t){return o.push(t)}},{key:"update",value:function(t,e){return o.child(t).update(e)}},{key:"delete",value:function(t){return o.child(t).remove()}},{key:"deleteAll",value:function(){return o.remove()}},{key:"getRef",value:function(){return o.no("value",(function(t){console.log(t.val())}))}}]),t}();e["a"]=new i},7950:function(t,e,s){"use strict";var a=s("d4ec"),r=s("bee2"),n=s("dc59"),o=n["a"].ref("/ask8_Score"),i=function(){function t(){Object(a["a"])(this,t)}return Object(r["a"])(t,[{key:"getAll",value:function(){return o}},{key:"create",value:function(t){return o.push(t)}},{key:"update",value:function(t,e){return o.child(t).update(e)}},{key:"delete",value:function(t){return o.child(t).remove()}},{key:"deleteAll",value:function(){return o.remove()}},{key:"getRef",value:function(){return o.no("value",(function(t){console.log(t.val())}))}}]),t}();e["a"]=new i},"852e":function(t,e,s){(function(e,s){t.exports=s()})(0,(function(){"use strict";function t(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)t[a]=s[a]}return t}var e={read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function s(e,a){function r(s,r,n){if("undefined"!==typeof document){n=t({},a,n),"number"===typeof n.expires&&(n.expires=new Date(Date.now()+864e5*n.expires)),n.expires&&(n.expires=n.expires.toUTCString()),s=encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var i in n)n[i]&&(o+="; "+i,!0!==n[i]&&(o+="="+n[i].split(";")[0]));return document.cookie=s+"="+e.write(r,s)+o}}function n(t){if("undefined"!==typeof document&&(!arguments.length||t)){for(var s=document.cookie?document.cookie.split("; "):[],a={},r=0;r<s.length;r++){var n=s[r].split("="),o=n.slice(1).join("=");try{var i=decodeURIComponent(n[0]);if(a[i]=e.read(o,i),t===i)break}catch(l){}}return t?a[t]:a}}return Object.create({set:r,get:n,remove:function(e,s){r(e,"",t({},s,{expires:-1}))},withAttributes:function(e){return s(this.converter,t({},this.attributes,e))},withConverter:function(e){return s(t({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(a)},converter:{value:Object.freeze(e)}})}var a=s(e,{path:"/"});return a}))},"8a40":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:" flex w-full"},[s("div",{directives:[{name:"show",rawName:"v-show",value:3==t.play_lv,expression:"play_lv ==3"}],staticClass:"overflow-y-auto  w-full h-screen"},[s("a",{staticClass:"mt-3 mr-10 flex justify-end text-lg text-gray-500 "},[t._v(" 〖 "+t._s(t.pii.pI)+" 〗 "+t._s(t.pii.pN)+" , "+t._s(t.pii.pP)+" 正在填寫 3.上肢功能評估問卷(DASH) ")]),s("v-list-item-group",{staticClass:"pt-10 pl-15",attrs:{color:"primary"}},t._l(t.tutorials,(function(e,a){return 2==e.qzSno?s("v-list-item",{key:a,on:{click:function(s){return t.setActiveTutorial(e,a)}}},[s("div",{staticClass:"grid grid-cols-6 gap-1"},[s("div",{staticClass:"col-span-6  "},[s("span",{staticClass:"text-white text-xs mr-5 p-1 px-3 justify-center rounded-3xl bg-yellow-500",attrs:{small:""}},[t._v(" "+t._s(e.pos)+" "+t._s(e.sno)+"_"+t._s(e.sno_idx)+" : "+t._s(e.sno_dtl)+" ")])]),s("div",{staticClass:"col-span-6  "},[s("span",{staticClass:"text-3xl text-green-700 font-semibold w-full"},[t._v(t._s(e.question))])]),s("div",{staticClass:"col-span-6"},[s("v-container",{directives:[{name:"show",rawName:"v-show",value:99!=e.sno_dtl,expression:"tutorial.sno_dtl != 99"}],staticClass:"px-0",attrs:{fluid:""}},[t._l(e.quesopts,(function(a,r){return 1==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[1],callback:function(e){t.$set(t.rds,1,e)},expression:"rds[1]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{dense:"",color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 2==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[2],callback:function(e){t.$set(t.rds,2,e)},expression:"rds[2]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{dense:"",color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 3==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[3],callback:function(e){t.$set(t.rds,3,e)},expression:"rds[3]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{dense:"",color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 4==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[4],callback:function(e){t.$set(t.rds,4,e)},expression:"rds[4]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{dense:"",color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 5==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[5],callback:function(e){t.$set(t.rds,5,e)},expression:"rds[5]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{dense:"",color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 6==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[6],callback:function(e){t.$set(t.rds,6,e)},expression:"rds[6]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{dense:"",color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 7==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[7],callback:function(e){t.$set(t.rds,7,e)},expression:"rds[7]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{dense:"",color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 8==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[8],callback:function(e){t.$set(t.rds,8,e)},expression:"rds[8]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{dense:"",color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 9==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[9],callback:function(e){t.$set(t.rds,9,e)},expression:"rds[9]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{dense:"",color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 10==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[10],callback:function(e){t.$set(t.rds,10,e)},expression:"rds[10]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{dense:"",color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 11==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[11],callback:function(e){t.$set(t.rds,11,e)},expression:"rds[11]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{dense:"",color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 12==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[12],callback:function(e){t.$set(t.rds,12,e)},expression:"rds[12]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{dense:"",color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 13==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[13],callback:function(e){t.$set(t.rds,13,e)},expression:"rds[13]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{dense:"",color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 14==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[14],callback:function(e){t.$set(t.rds,14,e)},expression:"rds[14]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{dense:"",color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 15==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[15],callback:function(e){t.$set(t.rds,15,e)},expression:"rds[15]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{dense:"",color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 16==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[16],callback:function(e){t.$set(t.rds,16,e)},expression:"rds[16]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 17==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[17],callback:function(e){t.$set(t.rds,17,e)},expression:"rds[17]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 18==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[18],callback:function(e){t.$set(t.rds,18,e)},expression:"rds[18]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 19==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[19],callback:function(e){t.$set(t.rds,19,e)},expression:"rds[19]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 20==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[20],callback:function(e){t.$set(t.rds,20,e)},expression:"rds[20]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 21==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[21],callback:function(e){t.$set(t.rds,21,e)},expression:"rds[21]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 22==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[22],callback:function(e){t.$set(t.rds,22,e)},expression:"rds[22]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 23==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[23],callback:function(e){t.$set(t.rds,23,e)},expression:"rds[23]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 24==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[24],callback:function(e){t.$set(t.rds,24,e)},expression:"rds[24]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 25==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[25],callback:function(e){t.$set(t.rds,25,e)},expression:"rds[25]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 26==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[26],callback:function(e){t.$set(t.rds,26,e)},expression:"rds[26]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 27==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[27],callback:function(e){t.$set(t.rds,27,e)},expression:"rds[27]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 28==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[28],callback:function(e){t.$set(t.rds,28,e)},expression:"rds[28]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 29==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[29],callback:function(e){t.$set(t.rds,29,e)},expression:"rds[29]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 30==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[30],callback:function(e){t.$set(t.rds,30,e)},expression:"rds[30]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 31==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[31],callback:function(e){t.$set(t.rds,31,e)},expression:"rds[31]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 32==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[32],callback:function(e){t.$set(t.rds,32,e)},expression:"rds[32]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 33==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[33],callback:function(e){t.$set(t.rds,33,e)},expression:"rds[33]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 34==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[34],callback:function(e){t.$set(t.rds,34,e)},expression:"rds[34]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 35==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[35],callback:function(e){t.$set(t.rds,35,e)},expression:"rds[35]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 36==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[36],callback:function(e){t.$set(t.rds,36,e)},expression:"rds[36]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 37==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[37],callback:function(e){t.$set(t.rds,37,e)},expression:"rds[37]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 38==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[38],callback:function(e){t.$set(t.rds,38,e)},expression:"rds[38]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 39==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[39],callback:function(e){t.$set(t.rds,39,e)},expression:"rds[39]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 40==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[40],callback:function(e){t.$set(t.rds,40,e)},expression:"rds[40]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()})),t._l(e.quesopts,(function(a,r){return 41==e.sno_idx?s("v-radio-group",{key:r,attrs:{row:""},model:{value:t.rds[41],callback:function(e){t.$set(t.rds,41,e)},expression:"rds[41]"}},[s("v-radio",{staticClass:"text-white text-xs mr-5",attrs:{color:"red",label:a,value:r+1}})],1):t._e()}))],2)],1)])]):t._e()})),1),s("div",{staticClass:"grid grid-cols-1 gap-0.5"},[s("div",{staticClass:"col-span-1 flex justify-center "},[s("a",{staticClass:"text-base text-gray-500"},[t._v(" 操作提示訊息 ")]),t._v(" "+t._s()+" ")]),s("div",{staticClass:"col-span-1"},[s("v-expansion-panels",[s("v-expansion-panel",[s("v-expansion-panel-header",[s("a",{staticClass:"rounded-full text-lg bg-gray-100 px-5"},[t._v(" 計算結果，如下 ： ")])]),s("v-expansion-panel-content",[s("table",{staticClass:"table-auto"},[s("thead",[s("tr",[s("th",{staticClass:"px-5 py-1 border-b-2 border-gray-200 bg-gray-100 \n                            text-left text-xs font-semibold text-gray-700 uppercase "},[t._v(" DASH失能/症狀分數 ")]),s("th",{staticClass:"px-5 py-1 border-b-2 border-gray-200 bg-gray-100 \n                            text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"},[t._v(" Quick DASH ")]),s("th",{staticClass:"px-5 py-1 border-b-2 border-gray-200 bg-gray-100 \n                            text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"},[t._v(" 工作自選 ")]),s("th",{staticClass:"px-5 py-1 border-b-2 border-gray-200 bg-gray-100 \n                            text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"},[t._v(" 音樂自選 ")])])]),s("tbody",[s("tr",[s("td",{staticClass:"px-5 py-5 border-b border-gray-200 bg-white  "},[s("p",{staticClass:"text-gray-900 font-black text-6xl whitespace-no-wrap"},[s("span",{staticClass:"w-1/4 text-6xl font-black"},[t._v(" "+t._s(Math.round((t.rds[1]+t.rds[2]+t.rds[3]+t.rds[4]+t.rds[5]+t.rds[6]+t.rds[7]+t.rds[8]+t.rds[9]+t.rds[10]+t.rds[11]+t.rds[12]+t.rds[13]+t.rds[14]+t.rds[15]+t.rds[16]+t.rds[17]+t.rds[18]+t.rds[19]+t.rds[20]+t.rds[21]+t.rds[23]+t.rds[24]+t.rds[25]+t.rds[26]+t.rds[27]+t.rds[28]+t.rds[29]+t.rds[30]+t.rds[31])/29*100*25)/100)+" ")])])]),s("td",{staticClass:"px-5 py-5 border-b border-gray-200 bg-white  "},[s("p",{staticClass:"text-gray-900 font-black text-6xl whitespace-no-wrap"},[t._v(" "+t._s(Math.round((t.rds[1]+t.rds[7]+t.rds[10]+t.rds[14]+t.rds[16]+t.rds[18]+t.rds[23]+t.rds[24]+t.rds[25]+t.rds[27]+t.rds[30])/10*100)/100*25)+" ")])]),s("td",{staticClass:"px-5 py-5 border-b border-gray-200 bg-white  "},[s("p",{staticClass:"text-gray-900 font-black text-6xl whitespace-no-wrap"},[t._v(" "+t._s(Math.round(100*((t.rds[33]+t.rds[34]+t.rds[35]+t.rds[36])/4-1))/100*25)+" ")])]),s("td",{staticClass:"px-5 py-5 border-b border-gray-200 bg-white  "},[s("p",{staticClass:"text-gray-900 font-black text-6xl whitespace-no-wrap"},[t._v(" "+t._s(Math.round(100*((t.rds[41]+t.rds[40]+t.rds[39]+t.rds[38])/4-1))/100*25)+" ")])])])])])])],1),s("v-expansion-panel",[s("v-expansion-panel-header",[s("a",{staticClass:"rounded-full text-lg bg-gray-100 px-5"},[t._v(" 詳細答題內容 ")])]),s("v-expansion-panel-content",[s("span",{staticClass:" text-base"},[t._v(" 詳細答題內容 ")]),s("div",{staticClass:"m-5 flex"},[s("td",{staticClass:"w-1/4"},[s("span",{staticClass:" text-lg font-black"},[t._v(" 【 1~10 】 ")]),t._l(t.rds.length,(function(e){return e>=1&&e<=10?s("span",{staticClass:"ml-5 flex"},[t._v(" "+t._s(e)+" 題: "+t._s(t.rds[e])+" ")]):t._e()}))],2),s("td",{staticClass:"w-1/4"},[s("span",{staticClass:" text-lg font-black"},[t._v(" 【 11~20 】 ")]),t._l(t.rds.length,(function(e){return e>=11&&e<=20?s("span",{staticClass:"ml-6 flex"},[t._v(" "+t._s(e)+" 題: "+t._s(t.rds[e])+" ")]):t._e()}))],2),s("td",{staticClass:"w-1/4"},[s("span",{staticClass:" text-lg font-black"},[t._v(" 【 21~30 】")]),t._l(t.rds.length,(function(e){return e>=21&&e<=30?s("span",{staticClass:"ml-6 flex"},[t._v(" "+t._s(e)+" 題: "+t._s(t.rds[e])+" ")]):t._e()}))],2),s("td",{staticClass:"w-1/4"},[s("span",{staticClass:" text-lg font-black"},[t._v(" 【 31~40 】")]),t._l(t.rds.length,(function(e){return 31==e?s("span",{staticClass:"ml-6 flex"},[t._v(" "+t._s(e)+" 題: "+t._s(t.rds[e])+" ")]):t._e()}))],2)]),s("div",{staticClass:"m-5 flex"},[s("td",{staticClass:"w-1/2"},[s("span",{staticClass:" text-lg font-black"},[t._v(" 【 工作自選 】")]),s("br"),s("span",{staticClass:" px-3 bg-gray-200 text-gray-900 font-black text-xl rounded-full"},[t._v(" 32題： "+t._s(t.rds[32])+" ")]),s("p",{staticClass:"text-xs text-gary-400"},[t._v("(0:退休人員 ,1:受傷後沒有工作) ")]),t._l(t.rds.length,(function(e){return e>=33&&e<=36?s("span",{staticClass:"ml-6 flex"},[t._v(" "+t._s(e)+" 題: "+t._s(t.rds[e])+" ")]):t._e()}))],2),s("td",{staticClass:"w-1/2"},[s("span",{staticClass:" text-lg font-black"},[t._v(" 【 音樂自選 】")]),s("br"),s("span",{staticClass:" px-3  bg-gray-200 text-gray-900 font-black text-xl rounded-full"},[t._v(" 37題： "+t._s(t.rds[37])+" ")]),s("p",{staticClass:"text-xs text-gary-400"},[t._v("(0:我不運動或玩樂器,1:其他) ")]),t._l(t.rds.length,(function(e){return e>=38&&e<=41?s("span",{staticClass:"ml-6 flex"},[t._v(" "+t._s(e)+" 題: "+t._s(t.rds[e])+" ")]):t._e()}))],2)])])],1)],1)],1)]),s("button",{staticClass:"py-5 my-5 bg-red-500 w-full hover:bg-red-400 text-white \n                font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded",on:{click:function(e){return t.savePtst(1)}}},[t._v(" 填答完成 ")])],1)])},r=[],n=(s("4160"),s("ac1f"),s("1276"),s("159b"),s("7950")),o=s("69e5"),i=(s("852e"),{name:"Quiz-3",data:function(){return{currentTime:Date.now(),cT:"",play_lv:"3",selectedButton:"",msg:"",dialog:!1,dialog2:!1,cut_opts:["術前","術後一個月","術後三個月","術後四個月","術後六個月","術後九個月","術後一年","術後兩年","術後三年"],menu2:!1,DaTe:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),tab:"k0",rds:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],rds_BSRS:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],radios:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],radios1:"null",radios2:"null",ex7:[],ex8:[{ans:""},{ans:""},{ans:""},{ans:""},{ans:""}],show:!1,tutorials:[],currentTutorial:null,currentIndex:-1,pS:"",pN:"",pI:"",pP:[],pM:"",qufd:[],pii:[],test_DTA:[0,3,3,2,2,2,2,1,1,3,2,2,2,3,3,2,2,2,3,3,3,1,3,3,3,3,3,2,3],test_DTA2:[0,5,4,2,2,5,4,3,5,5,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,1,5,4],test_DTA3:[0,4,3,1,2,3,4,4,4,4,3,4,4,4,3,5,3,4,4,4,4,4,4,4,4,4,3,4,4],test_DTA4:[0,3,3,4,2,1,2,2,2,3,2,2,3,4,2,2,1,2,3,1,1,5,3,2,1,2,1,2,3,2,1,2,3,2,4,5,5,5,5,1,1,1,3,3,5,4,5,4,4,2,5,4,2,3,3,3,3,3],test_DTA5:[0,1,4,2,3,2,1,2,1,2,2,2,3,2,2,2,1,1,1,1,1,2,1,2,1,2,2,2,3,3,3,3,3,4,1,1,3,1,4,3,4,4,2,4,4,4,3,5,2,5,5,1,4,4,4,4,4,4],tmplr:{memo:"",name:"",quiz_statu:"",quiz_date:"",quiz_name:"",patient_ID:"",prePare:[],quiz_1_dtl:[],quiz_1_fdbk:[]},player:{memo:"",name:"",quiz_statu:"",quiz_date:"",patient_ID:"",prePare:[],quiz_1_dtl:[],quiz_1_fdbk:[]}}},methods:{chk_info:function(){var t=this.$route.params.id.split("&"),e={pI:t[0].split("=")[1],pN:t[1].split("=")[1],pP:t[2].split("=")[1]};this.pii=e,this.pP=e.pP,this.pI=e.pI,this.pN=e.pN},savePtst:function(t){this.qufd[0]=Math.round(6.25*((6-this.rds[3]+(6-this.rds[4])+this.rds[10]+this.rds[15]+this.rds[16]+this.rds[17]+this.rds[18])/7*4-4)*10)/10,this.qufd[1]=Math.round(6.25*((this.rds[5]+this.rds[6]+this.rds[7]+this.rds[11]+this.rds[19]+(6-this.rds[26]))/6*4-4)*10)/10,this.qufd[2]=Math.round(6.25*((this.rds[20]+this.rds[21]+this.rds[22]+this.rds[27])/4*4-4)*10)/10,this.qufd[3]=Math.round(6.25*((this.rds[8]+this.rds[9]+this.rds[12]+this.rds[13]+this.rds[14]+this.rds[23]+this.rds[24]+this.rds[25]+this.rds[28])/9*4-4)*10)/10;var e={name:this.pN,patient_ID:this.pI,quiz_statu:this.pS,play_lv:this.play_lv,quiz_dtl:this.rds,quiz_fdbk:this.qufd,quiz_time:this.transCurrentTime(this.cT),memo:"none",tk_statu:1};n["a"].create(e).then((function(){Swal.fire({position:"top-end",icon:"success",title:"上傳成功",showConfirmButton:!1,timer:500})})).catch((function(t){Swal.fire({position:"top-end",icon:"error",title:"上傳失敗",text:t,showConfirmButton:!1,timer:500})}))},onDataChange:function(t){var e=[];t.forEach((function(t){var s=t.key,a=t.val();e.push({key:s,pos:a.pos,sno:a.sno,sno_idx:a.sno_idx,sno_dtl:a.sno_dtl,qzSno:a.qzSno,questype:a.questype,question:a.question,quesopts:a.quesopts,quesinduc:a.quesinduc,quesimge:a.quesimge,tmp_idx:a.tmp_idx,left_time:a.left_time,memo:a.memo,slted:a.slted,statu:a.statu})})),this.tutorials=e},updateCurrentTime:function(){this.cT=Date.now()},transCurrentTime:function(t){return this.dayjs(t).format("HH:mm:ss")}},mounted:function(){this.chk_info(),this.interval=setInterval(this.updateCurrentTime,1e3),o["a"].getSome("pos").equalTo(this.play_lv).on("value",this.onDataChange)},beforeDestroy:function(){o["a"].getAll().off("value",this.onDataChange)}}),l=i,d=s("2877"),c=s("6544"),u=s.n(c),p=s("a523"),v=s("cd55"),x=s("49e2"),h=s("c865"),f=s("0393"),b=s("da13"),_=s("1baa"),m=s("67b6"),g=s("43a6"),w=Object(d["a"])(l,a,r,!1,null,null,null);e["default"]=w.exports;u()(w,{VContainer:p["a"],VExpansionPanel:v["a"],VExpansionPanelContent:x["a"],VExpansionPanelHeader:h["a"],VExpansionPanels:f["a"],VListItem:b["a"],VListItemGroup:_["a"],VRadio:m["a"],VRadioGroup:g["a"]})},"9d65":function(t,e,s){"use strict";var a=s("d9bd"),r=s("2b0e");e["a"]=r["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(a["e"])("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent&&t?t():[this.$createElement()]}}})},a523:function(t,e,s){"use strict";s("99af"),s("4de4"),s("b64b"),s("2ca0"),s("20f6"),s("4b85"),s("a15b"),s("498a");var a=s("2b0e");function r(t){return a["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,s){var a=s.props,r=s.data,n=s.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var o=r.attrs;if(o){r.attrs={};var i=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));i.length&&(r.staticClass+=" ".concat(i.join(" ")))}return a.id&&(r.domProps=r.domProps||{},r.domProps.id=a.id),e(a.tag,r,n)}})}var n=s("d9f7");e["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var s,a=e.props,r=e.data,o=e.children,i=r.attrs;return i&&(r.attrs={},s=Object.keys(i).filter((function(t){if("slot"===t)return!1;var e=i[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(r.domProps=r.domProps||{},r.domProps.id=a.id),t(a.tag,Object(n["a"])(r,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(s||[])}),o)}})},c865:function(t,e,s){"use strict";var a=s("5530"),r=s("0789"),n=s("9d26"),o=s("a9ad"),i=s("3206"),l=s("5607"),d=s("80d2"),c=s("58df"),u=Object(c["a"])(o["a"],Object(i["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));e["a"]=u.extend().extend({name:"v-expansion-panel-header",directives:{ripple:l["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(t){this.$emit("click",t)},genIcon:function(){var t=Object(d["s"])(this,"actions")||[this.$createElement(n["a"],this.expandIcon)];return this.$createElement(r["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},t)])}},render:function(t){var e=this;return t("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(a["a"])(Object(a["a"])({},this.$listeners),{},{click:this.onClick,mousedown:function(){return e.hasMousedown=!0},mouseup:function(){return e.hasMousedown=!1}})}),[Object(d["s"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},cd55:function(t,e,s){"use strict";var a=s("5530"),r=s("4e82"),n=s("3206"),o=s("80d2"),i=s("58df");e["a"]=Object(i["a"])(Object(r["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(n["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(a["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(t){this.content=t},unregisterContent:function(){this.content=null},registerHeader:function(t){this.header=t,t.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(t){t.detail&&this.header.$el.blur(),this.$emit("click",t),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var t=this;this.$nextTick((function(){return t.$emit("change")}))}},render:function(t){return t("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(o["s"])(this))}})}}]);