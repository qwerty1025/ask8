(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c9cffc1a"],{"0393":function(t,s,e){"use strict";e("0481"),e("4069");var r=e("5530"),a=(e("210b"),e("604c")),i=e("d9bd");s["a"]=a["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(i["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(i["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(t,s){var e=this.getValue(t,s),r=this.getValue(t,s+1);t.isActive=this.toggleMethod(e),t.nextIsActive=this.toggleMethod(r)}}})},"210b":function(t,s,e){},"3b8d":function(t,s,e){"use strict";e.r(s);var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:" flex w-full overflow-y-auto h-screen"},[e("div",{directives:[{name:"show",rawName:"v-show",value:4==t.play_lv,expression:"play_lv ==4"}],staticClass:"flex flex-col"},[e("a",{staticClass:"mt-3 mr-10 flex justify-end text-lg text-gray-500 "},[t._v(" 〖 "+t._s(t.pii.pI)+" 〗 "+t._s(t.pii.pN)+" , "+t._s(t.pii.pP)+" 正在填寫 7.SF-36")]),e("div",{staticClass:"pt-10 pl-15",attrs:{color:"primary"}},t._l(t.tutorials,(function(s,r){return 4==s.qzSno?e("div",{key:r,on:{click:function(e){return t.setActiveTutorial(s,r)}}},[e("div",{staticClass:"flex-row ml-5"},[e("div",{directives:[{name:"show",rawName:"v-show",value:99!=s.sno_dtl,expression:"tutorial.sno_dtl !=99"}],staticClass:" "},[e("span",{staticClass:"text-white text-xs mr-5 p-1 px-3 justify-center rounded-3xl bg-yellow-500",attrs:{small:""}},[t._v(" "+t._s(7)+" "+t._s(s.sno)+"_"+t._s(s.sno_idx)+" : "+t._s(s.sno_dtl)+" ")])]),e("div",{staticClass:"  "},[e("span",{staticClass:"text-3xl text-green-700 font-semibold w-full"},[t._v(t._s(s.question))])]),e("div",{staticClass:" "},[e("v-container",{staticClass:"px-0",attrs:{fluid:""}},[t._l(s.quesopts,(function(r,a){return 1==s.sno_idx?e("div",{key:a,attrs:{row:""},model:{value:t.rds[1],callback:function(s){t.$set(t.rds,1,s)},expression:"rds[1]"}},["0"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:5}},[t._v(t._s(r))]):t._e(),"1"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:4.4}},[t._v(t._s(r))]):t._e(),"2"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:3.4}},[t._v(t._s(r))]):t._e(),"3"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:2}},[t._v(t._s(r))]):t._e(),"4"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:1}},[t._v(t._s(r))]):t._e()],1):t._e()})),t._l(20,(function(r){return r>1?e("div",{directives:[{name:"show",rawName:"v-show",value:99!=s.sno_dtl,expression:"tutorial.sno_dtl != 99"}],staticClass:" "},t._l(s.quesopts,(function(a,i){return s.sno_idx==r?e("div",{key:i,model:{value:t.rds[s.sno_idx],callback:function(e){t.$set(t.rds,s.sno_idx,e)},expression:"rds[tutorial.sno_idx]"}},[e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:i+1},model:{value:t.rds[s.sno_idx],callback:function(e){t.$set(t.rds,s.sno_idx,e)},expression:"rds[tutorial.sno_idx]"}},[t._v(" "+t._s(a)+" ")])],1):t._e()})),0):t._e()})),t._l(s.quesopts,(function(r,a){return 21==s.sno_idx?e("div",{key:a,attrs:{row:""},model:{value:t.rds[21],callback:function(s){t.$set(t.rds,21,s)},expression:"rds[21]"}},["0"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:6}},[t._v(t._s(r))]):t._e(),"1"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:5.4}},[t._v(t._s(r))]):t._e(),"2"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:4.2}},[t._v(t._s(r))]):t._e(),"3"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:3.4}},[t._v(t._s(r))]):t._e(),"4"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:2}},[t._v(t._s(r))]):t._e(),"5"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:1}},[t._v(t._s(r))]):t._e()],1):t._e()})),t._l(s.quesopts,(function(r,a){return 22==s.sno_idx?e("div",{key:a,attrs:{row:""},model:{value:t.rds[22],callback:function(s){t.$set(t.rds,22,s)},expression:"rds[22]"}},["0"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:5}},[t._v(t._s(r))]):t._e(),"1"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:4}},[t._v(t._s(r))]):t._e(),"2"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:3}},[t._v(t._s(r))]):t._e(),"3"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:2}},[t._v(t._s(r))]):t._e(),"4"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:1}},[t._v(t._s(r))]):t._e()],1):t._e()})),t._l(s.quesopts,(function(r,a){return 23==s.sno_idx?e("div",{key:a,attrs:{row:""},model:{value:t.rds[23],callback:function(s){t.$set(t.rds,23,s)},expression:"rds[23]"}},["0"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:6}},[t._v(t._s(r))]):t._e(),"1"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:5}},[t._v(t._s(r))]):t._e(),"2"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:4}},[t._v(t._s(r))]):t._e(),"3"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:3}},[t._v(t._s(r))]):t._e(),"4"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:2}},[t._v(t._s(r))]):t._e(),"5"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:1}},[t._v(t._s(r))]):t._e()],1):t._e()})),t._l(25,(function(r){return r>23?e("div",{directives:[{name:"show",rawName:"v-show",value:99!=s.sno_dtl,expression:"tutorial.sno_dtl != 99"}],staticClass:" "},t._l(s.quesopts,(function(a,i){return s.sno_idx==r?e("div",{key:i,model:{value:t.rds[s.sno_idx],callback:function(e){t.$set(t.rds,s.sno_idx,e)},expression:"rds[tutorial.sno_idx]"}},[e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:i+1},model:{value:t.rds[s.sno_idx],callback:function(e){t.$set(t.rds,s.sno_idx,e)},expression:"rds[tutorial.sno_idx]"}},[t._v(" "+t._s(a)+" ")])],1):t._e()})),0):t._e()})),t._l(s.quesopts,(function(r,a){return 26==s.sno_idx?e("div",{key:a,attrs:{row:""},model:{value:t.rds[26],callback:function(s){t.$set(t.rds,26,s)},expression:"rds[26]"}},["0"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:6}},[t._v(t._s(r))]):t._e(),"1"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:5}},[t._v(t._s(r))]):t._e(),"2"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:4}},[t._v(t._s(r))]):t._e(),"3"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:3}},[t._v(t._s(r))]):t._e(),"4"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:2}},[t._v(t._s(r))]):t._e(),"5"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:1}},[t._v(t._s(r))]):t._e()],1):t._e()})),t._l(s.quesopts,(function(r,a){return 27==s.sno_idx?e("div",{key:a,attrs:{row:""},model:{value:t.rds[27],callback:function(s){t.$set(t.rds,27,s)},expression:"rds[27]"}},["0"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:6}},[t._v(t._s(r))]):t._e(),"1"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:5}},[t._v(t._s(r))]):t._e(),"2"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:4}},[t._v(t._s(r))]):t._e(),"3"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:3}},[t._v(t._s(r))]):t._e(),"4"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:2}},[t._v(t._s(r))]):t._e(),"5"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:1}},[t._v(t._s(r))]):t._e()],1):t._e()})),t._l(29,(function(r){return r>27?e("div",{directives:[{name:"show",rawName:"v-show",value:99!=s.sno_dtl,expression:"tutorial.sno_dtl != 99"}],staticClass:" "},t._l(s.quesopts,(function(a,i){return s.sno_idx==r?e("div",{key:i,model:{value:t.rds[s.sno_idx],callback:function(e){t.$set(t.rds,s.sno_idx,e)},expression:"rds[tutorial.sno_idx]"}},[e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:i+1},model:{value:t.rds[s.sno_idx],callback:function(e){t.$set(t.rds,s.sno_idx,e)},expression:"rds[tutorial.sno_idx]"}},[t._v(" "+t._s(a)+" ")])],1):t._e()})),0):t._e()})),t._l(s.quesopts,(function(r,a){return 30==s.sno_idx?e("div",{key:a,attrs:{row:""},model:{value:t.rds[30],callback:function(s){t.$set(t.rds,30,s)},expression:"rds[30]"}},["0"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:6}},[t._v(t._s(r))]):t._e(),"1"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:5}},[t._v(t._s(r))]):t._e(),"2"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:4}},[t._v(t._s(r))]):t._e(),"3"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:3}},[t._v(t._s(r))]):t._e(),"4"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:2}},[t._v(t._s(r))]):t._e(),"5"==a?e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:1}},[t._v(t._s(r))]):t._e()],1):t._e()})),t._l(63,(function(r){return r>30?e("div",{directives:[{name:"show",rawName:"v-show",value:99!=s.sno_dtl,expression:"tutorial.sno_dtl != 99"}],staticClass:" "},t._l(s.quesopts,(function(a,i){return s.sno_idx==r?e("div",{key:i,model:{value:t.rds[s.sno_idx],callback:function(e){t.$set(t.rds,s.sno_idx,e)},expression:"rds[tutorial.sno_idx]"}},[e("radio",{staticClass:"mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl",attrs:{value:i+1},model:{value:t.rds[s.sno_idx],callback:function(e){t.$set(t.rds,s.sno_idx,e)},expression:"rds[tutorial.sno_idx]"}},[t._v(" "+t._s(a)+" ")])],1):t._e()})),0):t._e()}))],2)],1)])]):t._e()})),0),e("div",{staticClass:"grid grid-cols-1 gap-0.5"},[e("div",{staticClass:"col-span-1 flex justify-center "},[e("a",{staticClass:"text-base text-gray-500"},[t._v(" 操作提示訊息 ")]),t._v(" "+t._s()+" ")]),e("div",{staticClass:"col-span-1"},[e("v-expansion-panels",[e("v-expansion-panel",[e("v-expansion-panel-header",[e("a",{staticClass:"rounded-full text-lg bg-gray-100 px-5"},[t._v(" 計算結果，如下 ： ")])]),e("v-expansion-panel-content",[e("div",{staticClass:"grid grid-cols-3 gap-0"},[e("div",{staticClass:"col-span-1"},[e("tr",{staticClass:"px-5 py-5 border-b border-gray-200 bg-white text-sm"},[e("span",{staticClass:"relative inline-block m-1 px-5 py-1 text-red-900 leading-tight"},[e("span",{staticClass:"absolute inset-0 bg-red-200 opacity-50 rounded-full",attrs:{"aria-hidden":""}}),e("p",[t._v("PCS : ")]),e("span",{staticClass:"relative text-4xl font-black"},[t._v(" "+t._s((50+10*(((t.rds[3]+t.rds[4]+t.rds[5]+t.rds[6]+t.rds[7]+t.rds[8]+t.rds[9]+t.rds[10]+t.rds[11]+t.rds[12]-10)/20*100-84.52404)/22.8949*t.AGG_PHYS_CST[1]+((t.rds[13]+t.rds[14]+t.rds[15]+t.rds[16]-4)/4*100-81.19907)/33.79729*t.AGG_PHYS_CST[2]+((t.rds[21]+t.rds[22]-2)/10*100-75.49196)/23.55879*t.AGG_PHYS_CST[3]+((t.rds[1]+t.rds[33]+t.rds[34]+t.rds[35]+t.rds[36]-5)/20*100-72.21316)/20.16964*t.AGG_PHYS_CST[4]+((t.rds[23]+t.rds[27]+t.rds[29]+t.rds[31]-4)/20*100-61.05453)/20.86942*t.AGG_PHYS_CST[5]+((t.rds[20]+t.rds[32]-2)/8*100-83.59753)/22.37642*t.AGG_PHYS_CST[6]+((t.rds[17]+t.rds[18]+t.rds[19]-3)/3*100-81.29467)/33.02717*t.AGG_PHYS_CST[7]+((t.rds[24]+t.rds[25]+t.rds[26]+t.rds[28]+t.rds[30]-5)/25*100-74.84212)/18.01189*t.AGG_PHYS_CST[8])).toFixed(2))+" ")])])]),e("tr",{staticClass:"px-2 py-5 border-b border-gray-200 bg-white text-sm"},[e("span",{staticClass:"relative inline-block m-1 px-5 py-1 text-red-900 leading-tight"},[e("span",{staticClass:"absolute inset-0 bg-red-200 opacity-50 rounded-full",attrs:{"aria-hidden":""}}),e("p",[t._v("MCS : ")]),e("span",{staticClass:"relative text-4xl font-black"},[t._v(" "+t._s((50+10*(((t.rds[3]+t.rds[4]+t.rds[5]+t.rds[6]+t.rds[7]+t.rds[8]+t.rds[9]+t.rds[10]+t.rds[11]+t.rds[12]-10)/20*100-84.52404)/22.8949*t.AGG_MENT_CST[1]+((t.rds[13]+t.rds[14]+t.rds[15]+t.rds[16]-4)/4*100-81.19907)/33.79729*t.AGG_MENT_CST[2]+((t.rds[21]+t.rds[22]-2)/10*100-75.49196)/23.55879*t.AGG_MENT_CST[3]+((t.rds[1]+t.rds[33]+t.rds[34]+t.rds[35]+t.rds[36]-5)/20*100-72.21316)/20.16964*t.AGG_MENT_CST[4]+((t.rds[23]+t.rds[27]+t.rds[29]+t.rds[31]-4)/20*100-61.05453)/20.86942*t.AGG_MENT_CST[5]+((t.rds[20]+t.rds[32]-2)/8*100-83.59753)/22.37642*t.AGG_MENT_CST[6]+((t.rds[17]+t.rds[18]+t.rds[19]-3)/3*100-81.29467)/33.02717*t.AGG_MENT_CST[7]+((t.rds[24]+t.rds[25]+t.rds[26]+t.rds[28]+t.rds[30]-5)/25*100-74.84212)/18.01189*t.AGG_MENT_CST[8])).toFixed(2))+" ")])])]),e("tr",{staticClass:"px-5 py-5 border-b border-gray-200 bg-white text-sm"},[e("span",{staticClass:"relative inline-block m-1 px-5 py-1 text-red-900 leading-tight"},[e("span",{staticClass:"absolute inset-0 bg-red-200 opacity-50 rounded-full",attrs:{"aria-hidden":""}}),e("p",[t._v("AGG_PHYS : ")]),e("span",{staticClass:"relative text-4xl font-black"},[t._v(" "+t._s((((t.rds[3]+t.rds[4]+t.rds[5]+t.rds[6]+t.rds[7]+t.rds[8]+t.rds[9]+t.rds[10]+t.rds[11]+t.rds[12]-10)/20*100-84.52404)/22.8949*t.AGG_PHYS_CST[1]+((t.rds[13]+t.rds[14]+t.rds[15]+t.rds[16]-4)/4*100-81.19907)/33.79729*t.AGG_PHYS_CST[2]+((t.rds[21]+t.rds[22]-2)/10*100-75.49196)/23.55879*t.AGG_PHYS_CST[3]+((t.rds[1]+t.rds[33]+t.rds[34]+t.rds[35]+t.rds[36]-5)/20*100-72.21316)/20.16964*t.AGG_PHYS_CST[4]+((t.rds[23]+t.rds[27]+t.rds[29]+t.rds[31]-4)/20*100-61.05453)/20.86942*t.AGG_PHYS_CST[5]+((t.rds[20]+t.rds[32]-2)/8*100-83.59753)/22.37642*t.AGG_PHYS_CST[6]+((t.rds[17]+t.rds[18]+t.rds[19]-3)/3*100-81.29467)/33.02717*t.AGG_PHYS_CST[7]+((t.rds[24]+t.rds[25]+t.rds[26]+t.rds[28]+t.rds[30]-5)/25*100-74.84212)/18.01189*t.AGG_PHYS_CST[8]).toFixed(2))+" ")])])]),e("tr",{staticClass:"px-5 py-5 border-b border-gray-200 bg-white text-sm"},[e("span",{staticClass:"relative inline-block m-1 px-5 py-1 text-red-900 leading-tight"},[e("span",{staticClass:"absolute inset-0 bg-red-200 opacity-50 rounded-full",attrs:{"aria-hidden":""}}),e("p",[t._v("AGG_MENT : ")]),e("span",{staticClass:"relative text-4xl font-black"},[t._v(" "+t._s((((t.rds[3]+t.rds[4]+t.rds[5]+t.rds[6]+t.rds[7]+t.rds[8]+t.rds[9]+t.rds[10]+t.rds[11]+t.rds[12]-10)/20*100-84.52404)/22.8949*t.AGG_MENT_CST[1]+((t.rds[13]+t.rds[14]+t.rds[15]+t.rds[16]-4)/4*100-81.19907)/33.79729*t.AGG_MENT_CST[2]+((t.rds[21]+t.rds[22]-2)/10*100-75.49196)/23.55879*t.AGG_MENT_CST[3]+((t.rds[1]+t.rds[33]+t.rds[34]+t.rds[35]+t.rds[36]-5)/20*100-72.21316)/20.16964*t.AGG_MENT_CST[4]+((t.rds[23]+t.rds[27]+t.rds[29]+t.rds[31]-4)/20*100-61.05453)/20.86942*t.AGG_MENT_CST[5]+((t.rds[20]+t.rds[32]-2)/8*100-83.59753)/22.37642*t.AGG_MENT_CST[6]+((t.rds[17]+t.rds[18]+t.rds[19]-3)/3*100-81.29467)/33.02717*t.AGG_MENT_CST[7]+((t.rds[24]+t.rds[25]+t.rds[26]+t.rds[28]+t.rds[30]-5)/25*100-74.84212)/18.01189*t.AGG_MENT_CST[8]).toFixed(2))+" ")])])])]),e("div",{staticClass:"col-span-1"},[e("tr",{staticClass:"px-5 py-5 border-b border-gray-200 bg-white text-sm"},[e("span",{staticClass:"relative inline-block m-1 px-5 py-1 text-blue-900 leading-tight"},[e("span",{staticClass:"absolute inset-0 bg-blue-200 opacity-50 rounded-full",attrs:{"aria-hidden":""}}),e("p",[t._v("生理功能 PF : ")]),e("span",{staticClass:"relative text-4xl font-black"},[t._v(t._s(t.rds[3]+t.rds[4]+t.rds[5]+t.rds[6]+t.rds[7]+t.rds[8]+t.rds[9]+t.rds[10]+t.rds[11]+t.rds[12])+" ")]),e("span",{directives:[{name:"show",rawName:"v-show",value:1==t.show_dtl,expression:"show_dtl == true"}],staticClass:"relative text-4xl text-blue-200 font-black"},[t._v(t._s((((t.rds[3]+t.rds[4]+t.rds[5]+t.rds[6]+t.rds[7]+t.rds[8]+t.rds[9]+t.rds[10]+t.rds[11]+t.rds[12]-10)/20*100-84.52404)/22.8949).toFixed(2))+" ")])])]),e("tr",{staticClass:"px-2 py-5 border-b border-gray-200 bg-white text-sm"},[e("span",{staticClass:"relative inline-block m-1 px-5 py-1 text-blue-900 leading-tight"},[e("span",{staticClass:"absolute inset-0 bg-blue-200 opacity-50 rounded-full",attrs:{"aria-hidden":""}}),e("p",[t._v("角色限制－生理 RP : ")]),e("span",{staticClass:"relative text-4xl font-black"},[t._v(t._s(t.rds[13]+t.rds[14]+t.rds[15]+t.rds[16])+" ")]),e("span",{directives:[{name:"show",rawName:"v-show",value:1==t.show_dtl,expression:"show_dtl == true"}],staticClass:"relative text-4xl text-blue-200 font-black"},[t._v(t._s((((t.rds[13]+t.rds[14]+t.rds[15]+t.rds[16]-4)/4*100-81.19907)/33.79729).toFixed(2))+" ")])])]),e("tr",{staticClass:"px-5 py-5 border-b border-gray-200 bg-white text-sm"},[e("span",{staticClass:"relative inline-block m-1 px-5 py-1 text-blue-900 leading-tight"},[e("span",{staticClass:"absolute inset-0 bg-blue-200 opacity-50 rounded-full",attrs:{"aria-hidden":""}}),e("p",[t._v("身體疼痛 BP : ")]),e("span",{staticClass:"relative text-4xl font-black"},[t._v(t._s(t.rds[21]+t.rds[22])+" ")]),e("span",{directives:[{name:"show",rawName:"v-show",value:1==t.show_dtl,expression:"show_dtl == true"}],staticClass:"relative text-4xl text-blue-200 font-black"},[t._v(t._s((((t.rds[21]+t.rds[22]-2)/10*100-75.49196)/23.55879).toFixed(2))+" ")])])]),e("tr",{staticClass:"px-5 py-5 border-b border-gray-200 bg-white text-sm"},[e("span",{staticClass:"relative inline-block m-1 px-5 py-1 text-blue-900 leading-tight"},[e("span",{staticClass:"absolute inset-0 bg-blue-200 opacity-50 rounded-full",attrs:{"aria-hidden":""}}),e("p",[t._v("一般自覺健康 GH : ")]),e("span",{staticClass:"relative text-4xl font-black"},[t._v(t._s(t.rds[1]+t.rds[33]+t.rds[34]+t.rds[35]+t.rds[36])+" ")]),e("span",{directives:[{name:"show",rawName:"v-show",value:1==t.show_dtl,expression:"show_dtl == true"}],staticClass:"relative text-4xl text-blue-200 font-black"},[t._v(t._s((((t.rds[1]+t.rds[33]+t.rds[34]+t.rds[35]+t.rds[36]-5)/20*100-72.21316)/20.16964).toFixed(2))+" ")])])])]),e("div",{staticClass:"col-span-1"},[e("tr",{staticClass:"px-5 py-5 border-b border-gray-200 bg-white text-sm"},[e("span",{staticClass:"relative inline-block m-1 px-5 py-1 text-blue-900 leading-tight"},[e("span",{staticClass:"absolute inset-0 bg-blue-200 opacity-50 rounded-full",attrs:{"aria-hidden":""}}),e("p",[t._v("活力狀態 VT : ")]),e("span",{staticClass:"relative text-4xl font-black"},[t._v(t._s(t.rds[23]+t.rds[27]+t.rds[29]+t.rds[31])+" ")]),e("span",{directives:[{name:"show",rawName:"v-show",value:1==t.show_dtl,expression:"show_dtl == true"}],staticClass:"relative text-4xl text-blue-200 font-black"},[t._v(t._s((((t.rds[23]+t.rds[27]+t.rds[29]+t.rds[31]-4)/20*100-61.05453)/20.86942).toFixed(2))+" ")])])]),e("tr",{staticClass:"px-2 py-5 border-b border-gray-200 bg-white text-sm"},[e("span",{staticClass:"relative inline-block m-1 px-5 py-1 text-blue-900 leading-tight"},[e("span",{staticClass:"absolute inset-0 bg-blue-200 opacity-50 rounded-full",attrs:{"aria-hidden":""}}),e("p",[t._v("社會功能 SF : ")]),e("span",{staticClass:"relative text-4xl font-black"},[t._v(t._s(t.rds[20]+t.rds[32])+" ")]),e("span",{directives:[{name:"show",rawName:"v-show",value:1==t.show_dtl,expression:"show_dtl == true"}],staticClass:"relative text-4xl text-blue-200 font-black"},[t._v(t._s((((t.rds[20]+t.rds[32]-2)/8*100-83.59753)/22.37642).toFixed(2))+" ")])])]),e("tr",{staticClass:"px-5 py-5 border-b border-gray-200 bg-white text-sm"},[e("span",{staticClass:"relative inline-block m-1 px-5 py-1 text-blue-900 leading-tight"},[e("span",{staticClass:"absolute inset-0 bg-blue-200 opacity-50 rounded-full",attrs:{"aria-hidden":""}}),e("p",[t._v("角色限制－情緒 RE : ")]),e("span",{staticClass:"relative text-4xl font-black"},[t._v(t._s(t.rds[17]+t.rds[18]+t.rds[19])+" ")]),e("span",{directives:[{name:"show",rawName:"v-show",value:1==t.show_dtl,expression:"show_dtl == true"}],staticClass:"relative text-4xl text-blue-200 font-black"},[t._v(t._s((((t.rds[17]+t.rds[18]+t.rds[19]-3)/3*100-81.29467)/33.02717).toFixed(2))+" ")])])]),e("tr",{staticClass:"px-5 py-5 border-b border-gray-200 bg-white text-sm"},[e("span",{staticClass:"relative inline-block m-1 px-5 py-1 text-blue-900 leading-tight"},[e("span",{staticClass:"absolute inset-0 bg-blue-200 opacity-50 rounded-full",attrs:{"aria-hidden":""}}),e("p",[t._v("心理健康 MH : ")]),e("span",{staticClass:"relative text-4xl font-black"},[t._v(t._s(t.rds[24]+t.rds[25]+t.rds[26]+t.rds[28]+t.rds[30])+" ")]),e("span",{directives:[{name:"show",rawName:"v-show",value:1==t.show_dtl,expression:"show_dtl == true"}],staticClass:"relative text-4xl text-blue-200 font-black"},[t._v(t._s((((t.rds[24]+t.rds[25]+t.rds[26]+t.rds[28]+t.rds[30]-5)/25*100-74.84212)/18.01189).toFixed(2))+" ")])])])])])])],1),e("v-expansion-panel",[e("v-expansion-panel-header",[e("a",{staticClass:"rounded-full text-lg bg-gray-100 px-5"},[t._v(" 詳細答題內容 ")])]),e("v-expansion-panel-content",[e("span",{staticClass:" text-base"},[t._v(" 詳細答題內容 ")]),e("div",{staticClass:"m-5 flex"},[e("td",{staticClass:"w-1/4"},[e("span",{staticClass:" text-lg font-black"},[t._v(" 【 1~10 】 ")]),t._l(t.rds.length,(function(s){return s>=1&&s<=10?e("span",{staticClass:"ml-5 flex"},[t._v(" "+t._s(s)+" 題: "+t._s(t.rds[s])+" ")]):t._e()}))],2),e("td",{staticClass:"w-1/4"},[e("span",{staticClass:" text-lg font-black"},[t._v(" 【 11~20 】 ")]),t._l(t.rds.length,(function(s){return s>=11&&s<=20?e("span",{staticClass:"ml-6 flex"},[t._v(" "+t._s(s)+" 題: "+t._s(t.rds[s])+" ")]):t._e()}))],2),e("td",{staticClass:"w-1/4"},[e("span",{staticClass:" text-lg font-black"},[t._v(" 【 21~30 】")]),t._l(t.rds.length,(function(s){return s>=21&&s<=30?e("span",{staticClass:"ml-6 flex"},[t._v(" "+t._s(s)+" 題: "+t._s(t.rds[s])+" ")]):t._e()}))],2),e("td",{staticClass:"w-1/4"},[e("span",{staticClass:" text-lg font-black"},[t._v(" 【 31~36 】")]),t._l(t.rds.length,(function(s){return s>=31&&s<=36?e("span",{staticClass:"ml-6 flex"},[t._v(" "+t._s(s)+" 題: "+t._s(t.rds[s])+" ")]):t._e()}))],2)])])],1)],1)],1)]),e("button",{staticClass:"py-5 my-5 bg-red-500 w-full hover:bg-red-400 text-white \n                    font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded",on:{click:function(s){return t.savePtst()}}},[t._v(" 填答完成 ")])])])},a=[],i=(e("4160"),e("ac1f"),e("1276"),e("159b"),e("7950")),n=e("69e5"),d=(e("852e"),{name:"tutorials-list",data:function(){return{currentTime:Date.now(),cT:"",play_lv:"4",selectedButton:"",AGG_PHYS_CST:[0,.42402,.35119,.31754,.24954,.02877,-.00753,-.19206,-.22069],AGG_MENT_CST:[0,-.22999,-.12329,-.09731,-.01571,.23534,.26876,.43407,.48581],msg:"",show_dtl:!1,dialog:!1,dialog2:!1,cut_opts:["術前","術後一個月","術後三個月","術後四個月","術後六個月","術後九個月","術後一年","術後兩年","術後三年"],menu2:!1,DaTe:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),tab:"k0",rds:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],tutorials:[],pS:"",pN:"",pI:"",pP:[],pM:"",qufd:[],pii:[],tmplr:{memo:"",name:"",quiz_statu:"",quiz_date:"",quiz_name:"",patient_ID:"",prePare:[],quiz_1_dtl:[],quiz_1_fdbk:[]},player:{memo:"",name:"",quiz_statu:"",quiz_date:"",patient_ID:"",prePare:[],quiz_1_dtl:[],quiz_1_fdbk:[]}}},computed:{sf_36_GH:function(){var t=this.rds,s=0;s=4==t?2:1==t?5:2==t?4.4:3==t?3.4:5==t?1:99;var e=+t[33]+t[34]+t[35]+t[36],r=s+e;return r},sf_36_PF:function(){var t=this.rds,s=t[3]+t[4]+t[5]+t[6]+t[7]+t[8]+t[9]+t[10]+t[11]+t[12];return s},sf_36_RP:function(){var t=this.rds,s=t[13]+t[14]+t[15]+t[16];return s},sf_36_RE:function(){var t=this.rds,s=t[17]+t[18]+t[19];return s},sf_36_SF:function(){var t=this.rds,s=t[20]+t[32];return s},sf_36_MH:function(){var t=this.rds,s=t[24]+t[25]+(7-t[26])+t[28]+(7-t[30]);return s},sf_36_VT:function(){var t=this.rds,s=7-t[23]+(7-t[27])+t[29]+t[31];return s},sf_36_TranS:function(){var t=[0,10,4,2,5,4,2,3,5],s=[0,20,4,10,20,20,8,3,25],e=[88,88,88,88,88,88,88,88,88];return e[1]=(this.sf_36_PF-t[1])/s[1]*100,e[2]=(this.sf_36_PR-t[1])/s[2]*100,e[3]=(this.sf_36_BP-t[1])/s[3]*100,e[4]=(this.sf_36_GH-t[1])/s[4]*100,e[5]=(this.sf_36_VT-t[1])/s[5]*100,e[6]=(this.sf_36_SF-t[1])/s[6]*100,e[7]=(this.sf_36_RE-t[1])/s[7]*100,e[8]=(this.sf_36_MH-t[1])/s[9]*100,e},sf_36_Z:function(){var t=[0,84.52404,81.19907,75.49196,72.21316,61.05453,83.59753,81.29467,74.84212],s=[0,22.8949,33.79729,23.55879,20.16964,20.86942,22.37642,33.02717,18.01189],e=[88,88,88,88,88,88,88,88,88];return e[1]=(this.sf_36_TranS[1]-t[1])/s[1],e[2]=(this.sf_36_TranS[1]-t[1])/s[2],e[3]=(this.sf_36_TranS[1]-t[1])/s[3],e[4]=(this.sf_36_TranS[1]-t[1])/s[4],e[5]=(this.sf_36_TranS[1]-t[1])/s[5],e[6]=(this.sf_36_TranS[1]-t[1])/s[6],e[7]=(this.sf_36_TranS[1]-t[1])/s[7],e[8]=(this.sf_36_TranS[1]-t[1])/s[9],e},sf_36_AGG:function(){var t=[0,.42402,.35119,.31754,.24954,.02877,-.00753,-.19206,-.22069],s=[0,-.22999,-.12329,-.09731,-.01571,.23534,.26876,.43407,.48581],e=[88,88,88];return e[1]=this.sf_36_Z[1]*t[1]+this.sf_36_Z[2]*t[2]+this.sf_36_Z[3]*t[3]+(this.sf_36_Z[4]*t[4])(this.sf_36_Z[5]*t[5])+this.sf_36_Z[6]*t[6]+this.sf_36_Z[7]*t[7]+this.sf_36_Z[8]*t[8],e[2]=this.sf_36_Z[1]*s[1]+this.sf_36_Z[2]*s[2]+this.sf_36_Z[3]*s[3]+(this.sf_36_Z[4]*s[4])(this.sf_36_Z[5]*s[5])+this.sf_36_Z[6]*s[6]+this.sf_36_Z[7]*t[7]+this.sf_36_Z[8]*t[8],e}},methods:{chk_info:function(){var t=this.$route.params.id.split("&"),s={pI:t[0].split("=")[1],pN:t[1].split("=")[1],pP:t[2].split("=")[1]};this.pii=s,this.pP=s.pP,this.pI=s.pI,this.pN=s.pN},savePtst:function(){this.qufd[0]=Math.round(6.25*((6-this.rds[3]+(6-this.rds[4])+this.rds[10]+this.rds[15]+this.rds[16]+this.rds[17]+this.rds[18])/7*4-4)*10)/10,this.qufd[1]=Math.round(6.25*((this.rds[5]+this.rds[6]+this.rds[7]+this.rds[11]+this.rds[19]+(6-this.rds[26]))/6*4-4)*10)/10,this.qufd[2]=Math.round(6.25*((this.rds[20]+this.rds[21]+this.rds[22]+this.rds[27])/4*4-4)*10)/10,this.qufd[3]=Math.round(6.25*((this.rds[8]+this.rds[9]+this.rds[12]+this.rds[13]+this.rds[14]+this.rds[23]+this.rds[24]+this.rds[25]+this.rds[28])/9*4-4)*10)/10;var t={name:this.pN,patient_ID:this.pI,quiz_statu:this.pS,play_lv:this.play_lv,quiz_dtl:this.rds,quiz_fdbk:this.qufd,quiz_time:this.transCurrentTime(this.cT),memo:"none",tk_statu:1};i["a"].create(t).then((function(){Swal.fire({position:"top-end",icon:"success",title:"上傳成功",showConfirmButton:!1,timer:500})})).catch((function(t){Swal.fire({position:"top-end",icon:"error",title:"上傳失敗",text:t,showConfirmButton:!1,timer:500})}))},onDataChange:function(t){var s=[];t.forEach((function(t){var e=t.key,r=t.val();s.push({key:e,pos:r.pos,sno:r.sno,sno_idx:r.sno_idx,sno_dtl:r.sno_dtl,qzSno:r.qzSno,questype:r.questype,question:r.question,quesopts:r.quesopts,quesinduc:r.quesinduc,quesimge:r.quesimge,tmp_idx:r.tmp_idx,left_time:r.left_time,memo:r.memo,slted:r.slted,statu:r.statu})})),this.tutorials=s},updateCurrentTime:function(){this.cT=Date.now()},transCurrentTime:function(t){return this.dayjs(t).format("HH:mm:ss")}},mounted:function(){this.chk_info(),this.interval=setInterval(this.updateCurrentTime,1e3),n["a"].getAll().on("value",this.onDataChange)},beforeDestroy:function(){n["a"].getAll().off("value",this.onDataChange)}}),o=d,l=e("2877"),c=e("6544"),u=e.n(c),_=e("a523"),p=e("cd55"),v=e("49e2"),x=e("c865"),h=e("0393"),b=Object(l["a"])(o,r,a,!1,null,null,null);s["default"]=b.exports;u()(b,{VContainer:_["a"],VExpansionPanel:p["a"],VExpansionPanelContent:v["a"],VExpansionPanelHeader:x["a"],VExpansionPanels:h["a"]})},"49e2":function(t,s,e){"use strict";var r=e("0789"),a=e("9d65"),i=e("a9ad"),n=e("3206"),d=e("80d2"),o=e("58df"),l=Object(o["a"])(a["a"],i["a"],Object(n["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));s["a"]=l.extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(t,s){var e=this;t&&(this.isBooted=!0),null==s?this.isActive=t:this.$nextTick((function(){return e.isActive=t}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(t){var s=this;return t(r["a"],this.showLazyContent((function(){return[t("div",s.setBackgroundColor(s.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:s.isActive}]}),[t("div",{class:"v-expansion-panel-content__wrap"},Object(d["s"])(s))])]})))}})},"4b85":function(t,s,e){},"69e5":function(t,s,e){"use strict";var r=e("d4ec"),a=e("bee2"),i=e("dc59"),n=i["a"].ref("/sts"),d=function(){function t(){Object(r["a"])(this,t)}return Object(a["a"])(t,[{key:"getAll",value:function(){return n}},{key:"getSome",value:function(t){return n.orderByChild(t)}},{key:"create",value:function(t){return n.push(t)}},{key:"update",value:function(t,s){return n.child(t).update(s)}},{key:"delete",value:function(t){return n.child(t).remove()}},{key:"deleteAll",value:function(){return n.remove()}},{key:"getRef",value:function(){return n.no("value",(function(t){console.log(t.val())}))}}]),t}();s["a"]=new d},7950:function(t,s,e){"use strict";var r=e("d4ec"),a=e("bee2"),i=e("dc59"),n=i["a"].ref("/ask8_Score"),d=function(){function t(){Object(r["a"])(this,t)}return Object(a["a"])(t,[{key:"getAll",value:function(){return n}},{key:"create",value:function(t){return n.push(t)}},{key:"update",value:function(t,s){return n.child(t).update(s)}},{key:"delete",value:function(t){return n.child(t).remove()}},{key:"deleteAll",value:function(){return n.remove()}},{key:"getRef",value:function(){return n.no("value",(function(t){console.log(t.val())}))}}]),t}();s["a"]=new d},"852e":function(t,s,e){(function(s,e){t.exports=e()})(0,(function(){"use strict";function t(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var r in e)t[r]=e[r]}return t}var s={read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function e(s,r){function a(e,a,i){if("undefined"!==typeof document){i=t({},r,i),"number"===typeof i.expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var n="";for(var d in i)i[d]&&(n+="; "+d,!0!==i[d]&&(n+="="+i[d].split(";")[0]));return document.cookie=e+"="+s.write(a,e)+n}}function i(t){if("undefined"!==typeof document&&(!arguments.length||t)){for(var e=document.cookie?document.cookie.split("; "):[],r={},a=0;a<e.length;a++){var i=e[a].split("="),n=i.slice(1).join("=");try{var d=decodeURIComponent(i[0]);if(r[d]=s.read(n,d),t===d)break}catch(o){}}return t?r[t]:r}}return Object.create({set:a,get:i,remove:function(s,e){a(s,"",t({},e,{expires:-1}))},withAttributes:function(s){return e(this.converter,t({},this.attributes,s))},withConverter:function(s){return e(t({},this.converter,s),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(s)}})}var r=e(s,{path:"/"});return r}))},"9d65":function(t,s,e){"use strict";var r=e("d9bd"),a=e("2b0e");s["a"]=a["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(r["e"])("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent&&t?t():[this.$createElement()]}}})},a523:function(t,s,e){"use strict";e("99af"),e("4de4"),e("b64b"),e("2ca0"),e("20f6"),e("4b85"),e("a15b"),e("498a");var r=e("2b0e");function a(t){return r["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(s,e){var r=e.props,a=e.data,i=e.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var n=a.attrs;if(n){a.attrs={};var d=Object.keys(n).filter((function(t){if("slot"===t)return!1;var s=n[t];return t.startsWith("data-")?(a.attrs[t]=s,!1):s||"string"===typeof s}));d.length&&(a.staticClass+=" ".concat(d.join(" ")))}return r.id&&(a.domProps=a.domProps||{},a.domProps.id=r.id),s(r.tag,a,i)}})}var i=e("d9f7");s["a"]=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,s){var e,r=s.props,a=s.data,n=s.children,d=a.attrs;return d&&(a.attrs={},e=Object.keys(d).filter((function(t){if("slot"===t)return!1;var s=d[t];return t.startsWith("data-")?(a.attrs[t]=s,!1):s||"string"===typeof s}))),r.id&&(a.domProps=a.domProps||{},a.domProps.id=r.id),t(r.tag,Object(i["a"])(a,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(e||[])}),n)}})},c865:function(t,s,e){"use strict";var r=e("5530"),a=e("0789"),i=e("9d26"),n=e("a9ad"),d=e("3206"),o=e("5607"),l=e("80d2"),c=e("58df"),u=Object(c["a"])(n["a"],Object(d["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));s["a"]=u.extend().extend({name:"v-expansion-panel-header",directives:{ripple:o["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(t){this.$emit("click",t)},genIcon:function(){var t=Object(l["s"])(this,"actions")||[this.$createElement(i["a"],this.expandIcon)];return this.$createElement(a["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},t)])}},render:function(t){var s=this;return t("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(r["a"])(Object(r["a"])({},this.$listeners),{},{click:this.onClick,mousedown:function(){return s.hasMousedown=!0},mouseup:function(){return s.hasMousedown=!1}})}),[Object(l["s"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},cd55:function(t,s,e){"use strict";var r=e("5530"),a=e("4e82"),i=e("3206"),n=e("80d2"),d=e("58df");s["a"]=Object(d["a"])(Object(a["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(i["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(r["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(t){this.content=t},unregisterContent:function(){this.content=null},registerHeader:function(t){this.header=t,t.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(t){t.detail&&this.header.$el.blur(),this.$emit("click",t),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var t=this;this.$nextTick((function(){return t.$emit("change")}))}},render:function(t){return t("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(n["s"])(this))}})}}]);