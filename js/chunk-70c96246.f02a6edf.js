(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70c96246"],{"1b2c":function(t,e,s){},"38cb":function(t,e,s){"use strict";s("fb6a"),s("a9e3");var i=s("53ca"),n=s("a9ad"),a=s("7560"),r=s("3206"),o=s("80d2"),l=s("d9bd"),u=s("58df"),h=Object(u["a"])(n["a"],Object(r["a"])("form"),a["a"]);e["a"]=h.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:function(){return[]}},messages:{type:[String,Array],default:function(){return[]}},readonly:Boolean,rules:{type:Array,default:function(){return[]}},success:Boolean,successMessages:{type:[String,Array],default:function(){return[]}},validateOnBlur:Boolean,value:{required:!1}},data:function(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor:function(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError:function(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess:function(){return this.internalSuccessMessages.length>0||this.success},externalError:function(){return this.internalErrorMessages.length>0||this.error},hasMessages:function(){return this.validationTarget.length>0},hasState:function(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages:function(){return this.genInternalMessages(this.errorMessages)},internalMessages:function(){return this.genInternalMessages(this.messages)},internalSuccessMessages:function(){return this.genInternalMessages(this.successMessages)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("input",t)}},isDisabled:function(){return this.disabled||!!this.form&&this.form.disabled},isInteractive:function(){return!this.isDisabled&&!this.isReadonly},isReadonly:function(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate:function(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations:function(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState:function(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget:function(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler:function(t,e){Object(o["j"])(t,e)||this.validate()},deep:!0},internalValue:function(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused:function(t){t||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting:function(){var t=this;setTimeout((function(){t.hasInput=!1,t.hasFocused=!1,t.isResetting=!1,t.validate()}),0)},hasError:function(t){this.shouldValidate&&this.$emit("update:error",t)},value:function(t){this.lazyValue=t}},beforeMount:function(){this.validate()},created:function(){this.form&&this.form.register(this)},beforeDestroy:function(){this.form&&this.form.unregister(this)},methods:{genInternalMessages:function(t){return t?Array.isArray(t)?t:[t]:[]},reset:function(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation:function(){this.isResetting=!0},validate:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,s=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(var n=0;n<this.rules.length;n++){var a=this.rules[n],r="function"===typeof a?a(e):a;!1===r||"string"===typeof r?s.push(r||""):"boolean"!==typeof r&&Object(l["b"])("Rules should return a string or boolean, received '".concat(Object(i["a"])(r),"' instead"),this)}return this.errorBucket=s,this.valid=0===s.length,this.valid}}})},"444f":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.sendEmail(e)}}},[s("v-row",[s("label",[t._v("Name")]),s("v-text-field",{attrs:{type:"text",name:"name",placeholder:"Your Name"},model:{value:t.to_name,callback:function(e){t.to_name=e},expression:"to_name"}}),s("label",[t._v("Email")]),s("v-text-field",{attrs:{type:"email",name:"email",placeholder:"Your Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("label",[t._v("Attach file:")]),s("input",{attrs:{type:"file",name:"my_file"}}),s("hr"),s("br"),s("label",[t._v("Message")]),s("v-textarea",{attrs:{solo:"",name:"message",cols:"30",rows:"5",placeholder:"Message"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),s("input",{attrs:{type:"submit",value:"Submit"}})],1)],1)},n=[];const a={_origin:"https://api.emailjs.com"},r=(t,e="https://api.emailjs.com")=>{a._userID=t,a._origin=e},o=(t,e,s)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class l{constructor(t){this.status=t.status,this.text=t.responseText}}const u=(t,e,s={})=>new Promise((i,n)=>{const r=new XMLHttpRequest;r.addEventListener("load",({target:t})=>{const e=new l(t);200===e.status||"OK"===e.text?i(e):n(e)}),r.addEventListener("error",({target:t})=>{n(new l(t))}),r.open("POST",a._origin+t,!0),Object.keys(s).forEach(t=>{r.setRequestHeader(t,s[t])}),r.send(e)}),h=(t,e,s,i)=>{const n=i||a._userID;o(n,t,e);const r={lib_version:"3.2.0",user_id:n,service_id:t,template_id:e,template_params:s};return u("/api/v1.0/email/send",JSON.stringify(r),{"Content-type":"application/json"})},c=t=>{let e;if(e="string"===typeof t?document.querySelector(t):t,!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},d=(t,e,s,i)=>{const n=i||a._userID,r=c(s);o(n,t,e);const l=new FormData(r);return l.append("lib_version","3.2.0"),l.append("service_id",t),l.append("template_id",e),l.append("user_id",n),u("/api/v1.0/email/send-form",l)};var f={init:r,send:h,sendForm:d},p={name:"ContactUs",data:function(){return{from_name:"線上測試員",to_name:"",email:"",message:"",file:""}},methods:{sendEmail:function(){f.sendForm("service_b41xp3e","template_e7yn6cn",this.$refs.form,"tf3unL19JCsaTdxOY").then((function(t){alert(t.text),console.log("SUCCESS!",t.text)}),(function(t){alert(t.text),console.log("FAILED...",t.text)}))},hhh:function(){}}},g=p,m=(s("c49c"),s("618e"),s("2877")),v=s("6544"),b=s.n(v),y=s("0fd9"),S=s("8654"),_=s("a844"),D=Object(m["a"])(g,i,n,!1,null,null,null);e["default"]=D.exports;b()(D,{VRow:y["a"],VTextField:S["a"],VTextarea:_["a"]})},"4b58":function(t,e,s){},"613d":function(t,e,s){},"618e":function(t,e,s){"use strict";var i=s("613d"),n=s.n(i);n.a},"8ff2":function(t,e,s){},ba87:function(t,e,s){"use strict";s("a9e3");var i=s("5530"),n=(s("1b2c"),s("a9ad")),a=s("7560"),r=s("58df"),o=s("80d2"),l=Object(r["a"])(a["a"]).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render:function(t,e){var s=e.children,r=e.listeners,l=e.props,u={staticClass:"v-label",class:Object(i["a"])({"v-label--active":l.value,"v-label--is-disabled":l.disabled},Object(a["b"])(e)),attrs:{for:l.for,"aria-hidden":!l.for},on:r,style:{left:Object(o["g"])(l.left),right:Object(o["g"])(l.right),position:l.absolute?"absolute":"relative"},ref:"label"};return t("label",n["a"].options.methods.setTextColor(l.focused&&l.color,u),s)}});e["a"]=l},c37a:function(t,e,s){"use strict";s("99af"),s("4de4"),s("d81d"),s("a9e3"),s("ac1f"),s("1276");var i=s("5530"),n=(s("d191"),s("9d26")),a=s("ba87"),r=(s("8ff2"),s("a9ad")),o=s("7560"),l=s("58df"),u=s("80d2"),h=Object(l["a"])(r["a"],o["a"]).extend({name:"v-messages",props:{value:{type:Array,default:function(){return[]}}},methods:{genChildren:function(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage:function(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},Object(u["s"])(this,"default",{message:t,key:e})||[t])}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),c=h,d=s("7e2b"),f=s("38cb"),p=s("d9f7"),g=Object(l["a"])(d["a"],f["a"]),m=g.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data:function(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes:function(){return Object(i["a"])({"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense},this.themeClasses)},computedId:function(){return this.id||"input-".concat(this._uid)},hasDetails:function(){return this.messagesToDisplay.length>0},hasHint:function(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel:function(){return!(!this.$slots.label&&!this.label)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty:function(){return!!this.lazyValue},isLabelActive:function(){return this.isDirty},messagesToDisplay:function(){var t=this;return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((function(e){if("string"===typeof e)return e;var s=e(t.internalValue);return"string"===typeof s?s:""})).filter((function(t){return""!==t})):[]},showDetails:function(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value:function(t){this.lazyValue=t}},beforeCreate:function(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent:function(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl:function(){return this.$createElement("div",{staticClass:"v-input__control",attrs:{title:this.attrs$.title}},[this.genInputSlot(),this.genMessages()])},genDefaultSlot:function(){return[this.genLabel(),this.$slots.default]},genIcon:function(t,e){var s=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=this["".concat(t,"Icon")],r="click:".concat(Object(u["w"])(t)),o=!(!this.listeners$[r]&&!e),l=Object(p["a"])({attrs:{"aria-label":o?Object(u["w"])(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light},on:o?{click:function(t){t.preventDefault(),t.stopPropagation(),s.$emit(r,t),e&&e(t)},mouseup:function(t){t.preventDefault(),t.stopPropagation()}}:void 0},i);return this.$createElement("div",{staticClass:"v-input__icon",class:t?"v-input__icon--".concat(Object(u["w"])(t)):void 0},[this.$createElement(n["a"],l,a)])},genInputSlot:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(u["g"])(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel:function(){return this.hasLabel?this.$createElement(a["a"],{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages:function(){var t=this;return this.showDetails?this.$createElement(c,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:function(e){return Object(u["s"])(t,"message",e)}}}):null},genSlot:function(t,e,s){if(!s.length)return null;var i="".concat(t,"-").concat(e);return this.$createElement("div",{staticClass:"v-input__".concat(i),ref:i},s)},genPrependSlot:function(){var t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot:function(){var t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick:function(t){this.$emit("click",t)},onMouseDown:function(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp:function(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render:function(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}});e["a"]=m},c49c:function(t,e,s){"use strict";var i=s("4b58"),n=s.n(i);n.a},d191:function(t,e,s){}}]);