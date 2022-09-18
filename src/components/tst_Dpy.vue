<template> 
    <div class=" flex justify-center ">
    <div class="w-full ">
            <div class="grid grid-cols-9 gap-1">
              
                <!-- <div class="col-span-3 ..."></div>
                <div class="col-span-2 ..."></div>
                <div class="col-span-1 ..."></div>
                <div class="col-span-1 ..."></div>
                <div class="col-span-2 ..."></div> -->
              
              <div class =" col-span-9">
                <!-- <span class="text-xs font-base " > {{msg}} 請 {{ tmplr.patient_ID }} - {{ tmplr.name }} ，完成 {{ tmplr.prePare }}</span> -->

              <!-- </div>
               <div class ="col-span-5"> -->
                 <v-btn
                    class="mx-3 my-1"
                    color="secondary" 
                    solo small
                    @click="Te(1)"
                  >
                    載入 路人甲 資料
                  </v-btn>

                  <v-btn
                    class="mx-3 my-1"
                    color="secondary" 
                    solo small
                    @click="Te(2)"
                  >
                    載入 路人乙 資料
                  </v-btn>

                  <v-btn
                    class="mx-3 my-1"
                    color="secondary" 
                    solo small
                    @click="Te(3)"
                  >
                    載入 路人丙 資料
                  </v-btn>

                  <v-btn
                    class="mx-3 my-1"
                    color="secondary" 
                    solo small
                    @click="Te(4)"
                  >
                    4jan845
                  </v-btn> 

                  <v-btn
                    class="mx-3 my-1"
                    color="secondary" 
                    solo small
                    @click="Te(5)"
                  >
                    45woo
                  </v-btn> 
                  
                  <!-- {{ tutorials }} -->
                
              </div> 
            </div> 

           <v-tabs
            v-model="tab" 
            color="light-green darken-4"
            background-color="light-green lighten-2"  
            active-class="font-weight-black .text-lg"
               
            next-icon="mdi-arrow-right-bold-box-outline"
            prev-icon="mdi-arrow-left-bold-box-outline"
            show-arrows
           >  

            <v-tab key='k0' href='#k0' v-if="!hide"  >    
              登 入
            </v-tab>

            <v-tab key='k1' href='#k1' v-if="!hide"  >    
              1.生活品質量表
            </v-tab> 

            <v-tab key='k3' href='#k3' v-if="!hide"  >    
              2.簡式症狀表(BSRS)
            </v-tab>

            <v-tab key='k2' href='#k2' v-if="!hide"  >    
              3.上肢功能評估問卷(DASH)
            </v-tab>  

            <v-tab key='k22' href='#k22' v-if="!hide"  >    
              4.上肢功能評估問卷(Quick-DASH)
            </v-tab> 
            
            <v-tab key='k5' href='#k5' v-if="!hide"  >    
              5.MICHIGAN HAND OUTCOMES 
            </v-tab> 

            <v-tab key='k6' href='#k6' v-if="!hide"  >    
              6.波士頓量表
            </v-tab>  
            
            <v-tab key='k4' href='#k4' v-if="!hide"  >    
              7.SF-36 
            </v-tab> 

            <v-tab key='k44' href='#k44' v-if="!hide"  >    
              8.SF-12
            </v-tab> 

  
          </v-tabs>  

      <v-tabs-items v-model="tab" class="mb-80"> 
        <v-tab-item key='k0' value='k0'>
              <div class="flex justify-center items-stretch ">
                
                <!-- <div class="m-3 ">
                  
                  <v-dialog
                    v-model="dialog2"
                    persistent
                    max-width="1000px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="secondary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        width="300px"
                        height="300px"
                      >
                        預約資料登入
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="text-h5"> 請輸入姓名 或 病號 查詢預排 內容 </span>
                      </v-card-title>
                      <v-card-text> 
                        <small>*功能尚未啟用 </small>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="dialog2 = false"
                        >
                          關閉
                        </v-btn> 

                      </v-card-actions>

                    </v-card>
                  </v-dialog> 

                </div> -->
                <div class="m-3">
                   <v-container>
                          <v-row>
                            
                            <v-col cols="12" sm="3" md="3" >
                                    <v-select
                                      solo 
                                      label="評估狀態"  
                                      class=""
                                      v-model="pS"
                                      
                                      :items="cut_opts" 
                                    ></v-select>
                            </v-col> 

                            <v-col cols="12" sm="3" md="3" >
                              <v-text-field 
                                      solo  
                                      v-model="pI"  
                                      
                                      class=" text-xs  px-1" label="病號" >
                                    </v-text-field>
                            </v-col>

                            <v-col cols="12" sm="3" md="3" > 
                              <v-text-field 
                                      solo  
                                      v-model="pN"      
                                      class="  text-xs  px-1" label="姓名" >
                                    </v-text-field>  
                            </v-col>

                            <v-col cols="12" sm="3" md="3" > 
                              <v-menu
                                v-model="menu2"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field
                                    v-model="DaTe"
                                    label="請選擇填寫日期"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                  ></v-text-field>
                                </template>
                                <v-date-picker
                                  v-model="date"
                                  @input="menu2 = false"
                                ></v-date-picker>
                              </v-menu>
                            </v-col>

                            <v-col cols="12" sm="12" md="12" >
                            <v-container fluid  class ="flex justify-center " > 
                                <v-checkbox
                                        v-model="pP[0]"
                                        label="題本1"
                                        value="題本1"
                                        class="mx-3"
                                      ></v-checkbox>
                                      <v-checkbox
                                        v-model="pP[1]"
                                        label="題本2"
                                        value="題本2"
                                        class="mx-3"
                                      ></v-checkbox>
                                      <v-checkbox
                                        v-model="pP[2]"
                                        label="題本3"
                                        value="題本3"
                                        class="mx-3"
                                      ></v-checkbox>
                                      <v-checkbox
                                        v-model="pP[3]"
                                        label="題本4"
                                        value="題本4"
                                        class="mx-3"
                                      ></v-checkbox>

                                      <v-checkbox
                                        v-model="pP[4]"
                                        label="題本5"
                                        value="題本5"
                                        class="mx-3"
                                      ></v-checkbox>
                                      <v-checkbox
                                        v-model="pP[5]"
                                        label="題本6"
                                        value="題本6"
                                        class="mx-3"
                                      ></v-checkbox>
                                      <v-checkbox
                                        v-model="pP[6]"
                                        label="題本7"
                                        value="題本7"
                                        class="mx-3"
                                      ></v-checkbox> 
                                      <v-checkbox
                                        v-model="pP[7]"
                                        label="題本8"
                                        value="題本8"
                                        class="mx-3"
                                      ></v-checkbox>  
                                    </v-container>  
                            </v-col> 
                          
                            <v-col cols="12">
                                    <v-textarea
                                      clearable
                                      class="w-full"
                                      outlined 
                                      shaped
                                      rows="2"
                                      row-height="15"
                                      v-model="pM"
                                      
                                      label="診治備註" 
                                    ></v-textarea>
                            </v-col> 
                          </v-row>
                        </v-container>
 
 
                </div> 
              </div> 
        </v-tab-item> 

        <!-- // 1.生活品質量表 -->
        <v-tab-item key='k1' value='k1'>   
            
          <!-- {{ trns(tutorials[1].qzSno)}} -->

           <v-list-item-group 
            color="primary"
            class="pt-10 pl-15"  >  

            <v-list-item
              v-for="(tutorial, inx) in tutorials"  
              :key="inx"  
              @click="setActiveTutorial(tutorial, inx)" 
              v-if="tutorial.qzSno == 1"
            > 
            
             <div class="grid grid-cols-6 gap-1">
              <div class="col-span-6  ">
                <!-- {{ this.dayjs(Date.now()).format("HH:mm:ss") }} -->

<!-- {{  cT }} | {{ transCurrentTime(cT)}} -->
                
                <span small class="text-white text-xs mr-5 p-1 px-3 justify-center rounded-3xl bg-yellow-500"   >
                   {{ tutorial.pos }} 
                   {{ tutorial.sno }}_{{ tutorial.sno_idx }} : {{ tutorial.sno_dtl }} 
                </span>
              </div> 
               <div class="col-span-6  "> 
                  <span class="text-3xl text-green-700 font-semibold tracking-wide">{{ tutorial.question }}</span>
              </div>


              <div class="col-span-6">  
                 <v-container class="px-0" fluid >  
                
                     <v-radio-group  v-if="tutorial.sno_idx == 1" v-model="rds[1]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1" ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 2" v-model="rds[2]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 3" v-model="rds[3]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 4" v-model="rds[4]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 5" v-model="rds[5]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 6" v-model="rds[6]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 7" v-model="rds[7]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 8" v-model="rds[8]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 9" v-model="rds[9]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 10" v-model="rds[10]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                        <v-radio-group  v-if="tutorial.sno_idx == 11" v-model="rds[11]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 12" v-model="rds[12]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 13" v-model="rds[13]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 14" v-model="rds[14]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 15" v-model="rds[15]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 16" v-model="rds[16]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 17" v-model="rds[17]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 18" v-model="rds[18]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 19" v-model="rds[19]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 20" v-model="rds[20]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 21" v-model="rds[21]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 22" v-model="rds[22]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 23" v-model="rds[23]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 24" v-model="rds[24]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 25" v-model="rds[25]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 26" v-model="rds[26]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 27" v-model="rds[27]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                       <v-radio-group  v-if="tutorial.sno_idx == 28" v-model="rds[28]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                 </v-container>
              </div> 
            </div> 
            
                       
            </v-list-item>
          </v-list-item-group> 
          <!-- 得分摘要：{{rds}}  -->
            <hr>
            <div class=" mb-30"  >
              答題計算結果，如以下 4個指數 ：
              <div class ="flex my-10"> 
                <div class ="mx-5">
                  PHYS : 
                  <span class="w-1/4 text-6xl font-black"> {{ Math.round( ((((((6-rds[3])+(6-rds[4])+rds[10]+rds[15]+rds[16]+rds[17]+rds[18])/7)*4)-4)*(100/16)) *100)/100 }}  
                  </span>
                </div>
                <div class ="mx-5">
                  PSYCH :
                  <span class="w-1/4 text-6xl font-black">  {{ Math.round( ((((rds[5] + rds[6] +rds[7]+rds[11]+rds[19]+(6-rds[26]))/6)*4)-4)*(100/16) *100)/100 }} 
                  </span>
                </div> 
                <div class ="mx-5">
                  SOCIAL :
                  <span class="w-1/4 text-6xl font-black">  {{ Math.round( (((((rds[20] +rds[21]+rds[22]+rds[27])/4)*4)-4)*(100/16)) *100)/100 }}  
                  </span>
                </div> 
                <div class ="mx-5">
                  ENVIR :
                  <span class="w-1/4 text-6xl font-black">  {{ Math.round( ( (((rds[8] + rds[9] +rds[12] +rds[13] +rds[14] +rds[23] +rds[24] +rds[25] +rds[28]  )/9)*4)-4)*(100/16)  *100)/100 }}  
                  </span>
                </div>  
              </div>
              <br>
              <hr>

              <span class=" text-base"> 詳細答題內容 </span>
              <div class = "m-5 flex">
                
              
                  
                  <!-- <span class=" flex" v-for="n in item.quiz_dtl.length"  v-if="n >= 1 && n <= 5" > {{ n }} 題: {{ item.quiz_dtl[n] }}  </span>  -->
                  

                <td class="w-1/5" >
                  <span class=" text-lg font-black"> 【 1~5 】 </span>
                  <span class="ml-5 flex" v-for="n in rds.length"  v-if="n >= 1 && n <= 5" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <span class=" text-lg font-black"> 【 6~10 】 </span>
                  <span class="ml-5 flex" v-for="n in rds.length"  v-if="n >= 6 && n <= 10" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"  >
                  <span class=" text-lg font-black"> 【 11~15 】</span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 11 && n <= 15" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <span class=" text-lg font-black"> 【 16~20 】 </span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 16 && n <= 20" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <span class=" text-lg font-black"> 【 21~25 】 </span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 21 && n <= 25" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <span class=" text-lg font-black"> 【 26~28 】</span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 26 && n <= 28" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td> 
              </div>

              <div >  
                <br>
                <!-- <v-btn class="w-32 h-24" depressed color="error" @click="savePtst(1)" >  完成 </v-btn> -->
                     <button class="py-5 mx-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" @click="savePtst(1)" >
                      完成
                    </button>

                     <button class="py-5 mx-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" @click="getAnysisReport" >
                      了解 指標意義
                    </button>
              </div> 
            </div>  
        </v-tab-item> 

         <!-- // 2.簡式症狀表(BSRS) -->
        <v-tab-item key='k3' value='k3'>   
           <!-- {{ trns(tutorials[1].qzSno)}} -->

           <v-list-item-group 
            color="primary"
            class="pt-10 pl-15"  >  
            

            <v-list-item
              v-for="(tutorial, inx) in tutorials"  
              :key="inx"  
              @click="setActiveTutorial(tutorial, inx)" 
              v-if="tutorial.qzSno == 3"
            > 
            
             <div class="grid grid-cols-6 gap-1">
              <div class="col-span-6  "> 
                
                <span small class="text-white text-xs mr-5 p-1 px-3 justify-center rounded-3xl bg-yellow-500"   >
                   {{ tutorial.pos }} 
                   {{ tutorial.sno }}_{{ tutorial.sno_idx }} : {{ tutorial.sno_dtl }} 
                </span>
              </div> 
               <div class="col-span-6  "> 
                  <span class="text-3xl text-green-700 font-semibold tracking-wide">{{ tutorial.question }}</span>
              </div>


              <div class="col-span-6">  
                 <v-container class="px-0" fluid >  
                
                     <v-radio-group  v-if="tutorial.sno_idx == 1" v-model="rds_BSRS[1]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index" ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 2" v-model="rds_BSRS[2]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 3" v-model="rds_BSRS[3]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 4" v-model="rds_BSRS[4]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 5" v-model="rds_BSRS[5]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 6" v-model="rds_BSRS[6]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 7" v-model="rds_BSRS[7]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 8" v-model="rds_BSRS[8]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 9" v-model="rds_BSRS[9]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 10" v-model="rds_BSRS[10]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                        <v-radio-group  v-if="tutorial.sno_idx == 11" v-model="rds_BSRS[11]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 12" v-model="rds_BSRS[12]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 13" v-model="rds_BSRS[13]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 14" v-model="rds_BSRS[14]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 15" v-model="rds_BSRS[15]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 16" v-model="rds_BSRS[16]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 17" v-model="rds_BSRS[17]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 18" v-model="rds_BSRS[18]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 19" v-model="rds_BSRS[19]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 20" v-model="rds_BSRS[20]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 21" v-model="rds_BSRS[21]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 22" v-model="rds_BSRS[22]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 23" v-model="rds_BSRS[23]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 24" v-model="rds_BSRS[24]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 25" v-model="rds_BSRS[25]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 26" v-model="rds_BSRS[26]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 27" v-model="rds_BSRS[27]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                       <v-radio-group  v-if="tutorial.sno_idx == 28" v-model="rds_BSRS[28]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                       <v-radio-group  v-if="tutorial.sno_idx == 29" v-model="rds_BSRS[29]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                       <v-radio-group  v-if="tutorial.sno_idx == 30" v-model="rds_BSRS[30]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                 </v-container>
              </div> 
            </div> 
            
                       
            </v-list-item>
          </v-list-item-group> 
          <!-- 得分摘要：{{rds}}  -->
            <hr>
            <div class=" mb-30"  >
              答題計算結果，如以下 2個指數 ：
              <div class ="flex my-10"> 
                <div class ="mx-5">
                  GSI (general symptom index):  : 
                  <span class="w-1/4 text-6xl font-black"> {{ Math.round((rds_BSRS[1]+rds_BSRS[2]+rds_BSRS[3]+rds_BSRS[4]+rds_BSRS[5]
                                                                        +rds_BSRS[6]+rds_BSRS[7]+rds_BSRS[8]+rds_BSRS[9]+rds_BSRS[10]
                                                                        +rds_BSRS[11]+rds_BSRS[12]+rds_BSRS[13]+rds_BSRS[14]+rds_BSRS[15]
                                                                        +rds_BSRS[16]+rds_BSRS[17]+rds_BSRS[18]+rds_BSRS[19]+rds_BSRS[20]
                                                                        +rds_BSRS[21]+rds_BSRS[22]+rds_BSRS[23]+rds_BSRS[24]+rds_BSRS[25]
                                                                        +rds_BSRS[26]+rds_BSRS[27]+rds_BSRS[28]+rds_BSRS[29]+rds_BSRS[30])/30 *100)/100 }}  
                  </span>
                </div>
                <div class ="mx-5">
                  PST(分數大於一的症狀數) :
                  <!-- here:  {{ cmpare1 }} | all = {{ chk_cmpare1 }} -->
                  <span class="w-1/4 text-6xl font-black">  {{ Math.round( (cmpare1_length) *100)/100 }} 
                  </span>
                </div> 
                <div class ="mx-5">
                  PSDI(總分除大於一分症狀數) :
                  <span class="w-1/4 text-6xl font-black">  {{ Math.round( ( rds_BSRS[1]+rds_BSRS[2]+rds_BSRS[3]+rds_BSRS[4]+rds_BSRS[5]
                                                                        +rds_BSRS[6]+rds_BSRS[7]+rds_BSRS[8]+rds_BSRS[9]+rds_BSRS[10]
                                                                        +rds_BSRS[11]+rds_BSRS[12]+rds_BSRS[13]+rds_BSRS[14]+rds_BSRS[15]
                                                                        +rds_BSRS[16]+rds_BSRS[17]+rds_BSRS[18]+rds_BSRS[19]+rds_BSRS[20]
                                                                        +rds_BSRS[21]+rds_BSRS[22]+rds_BSRS[23]+rds_BSRS[24]+rds_BSRS[25]
                                                                        +rds_BSRS[26]+rds_BSRS[27]+rds_BSRS[28]+rds_BSRS[29]+rds_BSRS[30] /cmpare1_length ) *100)/100 }} 
                  </span>
                  (是  {{ rds_BSRS[1]+rds_BSRS[2]+rds_BSRS[3]+rds_BSRS[4]+rds_BSRS[5]
                                                                        +rds_BSRS[6]+rds_BSRS[7]+rds_BSRS[8]+rds_BSRS[9]+rds_BSRS[10]
                                                                        +rds_BSRS[11]+rds_BSRS[12]+rds_BSRS[13]+rds_BSRS[14]+rds_BSRS[15]
                                                                        +rds_BSRS[16]+rds_BSRS[17]+rds_BSRS[18]+rds_BSRS[19]+rds_BSRS[20]
                                                                        +rds_BSRS[21]+rds_BSRS[22]+rds_BSRS[23]+rds_BSRS[24]+rds_BSRS[25]
                                                                        +rds_BSRS[26]+rds_BSRS[27]+rds_BSRS[28]+rds_BSRS[29]+rds_BSRS[30] }} / {{cmpare1_length}} 的意思 ) 
                 
                </div> 
                <div class ="mx-5">
                  
                </div>  
              </div>
              <br>
              <hr>

              <span class=" text-base"> 超詳細答題過程 </span>
              <div class = "m-5 flex">
                
              
                  
                  <!-- <span class=" flex" v-for="n in item.quiz_dtl.length"  v-if="n >= 1 && n <= 5" > {{ n }} 題: {{ item.quiz_dtl[n] }}  </span>  -->
                  

                <td class="w-1/5" > 
                  <span class=" text-lg font-black"> 【 1~5 】 </span>
                  <span class="ml-5 flex" v-for="n in rds_BSRS.length"  v-if="n >= 1 && n <= 5" > {{ n }} 題: {{ rds_BSRS[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <span class=" text-lg font-black"> 【 6~10 】 </span>
                  <span class="ml-5 flex" v-for="n in rds_BSRS.length"  v-if="n >= 6 && n <= 10" > {{ n }} 題: {{ rds_BSRS[n] }}  </span> 
                </td>

                <td class="w-1/5"  >
                  <span class=" text-lg font-black"> 【 11~15 】</span>
                  <span class="ml-6 flex" v-for="n in rds_BSRS.length"  v-if="n >= 11 && n <= 15" > {{ n }} 題: {{ rds_BSRS[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <span class=" text-lg font-black"> 【 16~20 】 </span>
                  <span class="ml-6 flex" v-for="n in rds_BSRS.length"  v-if="n >= 16 && n <= 20" > {{ n }} 題: {{ rds_BSRS[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <span class=" text-lg font-black"> 【 21~25 】 </span>
                  <span class="ml-6 flex" v-for="n in rds_BSRS.length"  v-if="n >= 21 && n <= 25" > {{ n }} 題: {{ rds_BSRS[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <span class=" text-lg font-black"> 【 26~30 】</span>
                  <span class="ml-6 flex" v-for="n in rds_BSRS.length"  v-if="n >= 26 && n <= 30" > {{ n }} 題: {{ rds_BSRS[n] }}  </span> 
                </td> 
              </div>

              <div >  
                <br>
                <!-- <v-btn class="w-32 h-24" depressed color="error" @click="savePtst(1)" >  完成 </v-btn> -->
                     <button class="py-5 mx-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" @click="savePtst(1)" >
                      完成
                    </button>

                     <button class="py-5 mx-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" @click="getAnysisReport" >
                      了解 指標意義
                    </button>
              </div> 
            </div>  
        </v-tab-item> 

         <!-- // 3.上肢功能評估問卷(DASH) -->
        <v-tab-item key='k2' value='k2'>   
             
           <v-list-item-group 
            color="primary"
            class="pt-10 pl-15"  >  

            <v-list-item
              v-for="(tutorial, inx) in tutorials"  
              :key="inx"  
              @click="setActiveTutorial(tutorial, inx)" 
              v-if="tutorial.qzSno == 2"
            > 
            
             <div class="grid grid-cols-6 gap-1">
              <div class="col-span-6  "> 

<!-- {{  cT }} | {{ transCurrentTime(cT)}} -->
                   
                
                <span small class="text-white text-xs mr-5 p-1 px-3 justify-center rounded-3xl bg-yellow-500"   >
                   {{ tutorial.pos }} 
                   {{ tutorial.sno }}_{{ tutorial.sno_idx }} : {{ tutorial.sno_dtl }} 
                </span>
              </div> 
               <div class="col-span-6  "> 
                  <span class="text-3xl text-green-700 font-semibold tracking-wide">{{ tutorial.question }}</span>
              </div>


              <div class="col-span-6">  
                  <v-container class="px-0" fluid >  
                
                     <v-radio-group  v-if="tutorial.sno_idx == 1" v-model="rds[1]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1" ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 2" v-model="rds[2]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 3" v-model="rds[3]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 4" v-model="rds[4]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 5" v-model="rds[5]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 6" v-model="rds[6]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 7" v-model="rds[7]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 8" v-model="rds[8]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 9" v-model="rds[9]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 10" v-model="rds[10]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                        <v-radio-group  v-if="tutorial.sno_idx == 11" v-model="rds[11]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 12" v-model="rds[12]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 13" v-model="rds[13]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 14" v-model="rds[14]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 15" v-model="rds[15]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 16" v-model="rds[16]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 17" v-model="rds[17]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 18" v-model="rds[18]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 19" v-model="rds[19]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 20" v-model="rds[20]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 21" v-model="rds[21]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 22" v-model="rds[22]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 23" v-model="rds[23]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 24" v-model="rds[24]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 25" v-model="rds[25]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 26" v-model="rds[26]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 27" v-model="rds[27]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                       <v-radio-group  v-if="tutorial.sno_idx == 28" v-model="rds[28]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 29" v-model="rds[29]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 30" v-model="rds[30]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 31" v-model="rds[31]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 32" v-model="rds[32]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 33" v-model="rds[33]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 34" v-model="rds[34]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 35" v-model="rds[35]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 36" v-model="rds[36]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                      <v-radio-group  v-if="tutorial.sno_idx == 40" v-model="rds[40]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 41" v-model="rds[41]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 42" v-model="rds[42]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 43" v-model="rds[43]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 44" v-model="rds[44]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 45" v-model="rds[45]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                 </v-container> 
              </div> 
            </div> 
            
                       
            </v-list-item>
          </v-list-item-group> 
          <!-- 得分摘要：{{rds}}  -->
            <hr>
            <div class=" mb-30"  >
              DASH 計算結果，如以下 3 個指數 ：
              <div class ="flex my-10"> 
                <div class ="mx-5">
                  DASH失能/症狀分數 :
                  <span class="w-1/4 text-6xl font-black"> {{ Math.round( (((rds[1] + rds[2] +rds[3] +rds[4] +rds[5] + rds[6] +rds[7] + rds[8] + rds[9] +rds[10] 
                                                                          + rds[11] +rds[12] +rds[13] +rds[14] +rds[15] + rds[16] +rds[17] +rds[18] +rds[19] +rds[20] 
                                                                          + rds[21] +rds[22] +rds[23] +rds[24] +rds[25] +rds[26] +rds[27] +rds[28] +rds[29]+rds[30] 
                                                                          + rds[31] )/31)-1) *100)/100*25  }}  
                  </span>
                </div>
                <div class ="mx-5">
                  工作自選 :
                  <span class="w-1/4 text-6xl font-black">  {{ Math.round(((rds[36] +rds[33] +rds[34] +rds[35])-1) *100)/100 }} 
                  </span>
                </div> 
                <div class ="mx-5">
                  音樂自選 :
                  <span class="w-1/4 text-6xl font-black">  {{ Math.round( ((rds[41] +rds[42] +rds[43] +rds[44])-1) *100)/100 }} 
                  </span>
                </div> 
                 
              </div>
              <br>
              <hr>

              <span class=" text-base"> 詳細答題內容 </span>
              <div class = "m-5 flex">
                 
                <td class="w-1/8" >
                  <span class=" text-lg font-black"> 【 1~5 】 </span>
                  <span class="ml-5 flex" v-for="n in rds.length"  v-if="n >= 1 && n <= 5" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/8"   >
                  <span class=" text-lg font-black"> 【 6~10 】 </span>
                  <span class="ml-5 flex" v-for="n in rds.length"  v-if="n >= 6 && n <= 10" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/8"  >
                  <span class=" text-lg font-black"> 【 11~15 】</span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 11 && n <= 15" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/8"   >
                  <span class=" text-lg font-black"> 【 16~20 】 </span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 16 && n <= 20" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/8"   >
                  <span class=" text-lg font-black"> 【 21~25 】 </span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 21 && n <= 25" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/8"   >
                  <span class=" text-lg font-black"> 【 26~30 】</span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 26 && n <= 30" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td> 
                <td class="w-1/8"   >
                  <span class=" text-lg font-black"> 【 31~35 】</span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 31 && n <= 35" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td> 

                <td class="w-1/9"   >
                  <span class=" text-lg font-black"> 【 36~40 】</span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 36 && n <= 40" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td> 
              </div>

              <div >  
                <br>
                <!-- <v-btn class="w-32 h-24" depressed color="error" @click="savePtst(1)" >  完成 </v-btn> -->
                     <button class="py-5 mx-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" @click="savePtst(1)" >
                      完成
                    </button>

                     <button class="py-5 mx-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" @click="getAnysisReport" >
                      了解 指標意義
                    </button>
              </div> 
            </div>  
        </v-tab-item> 

         <!-- // 4.上肢功能評估問卷(Quick-DASH) -->
         <v-tab-item key='k22' value='k22'>   
             
           <v-list-item-group 
            color="primary"
            class="pt-10 pl-15"  >  

            <v-list-item
              v-for="(tutorial, inx) in tutorials"  
              :key="inx"  
              @click="setActiveTutorial(tutorial, inx)" 
              v-if="tutorial.qzSno == 2 && tutorial.memo == true "
            > 
            
             <div class="grid grid-cols-6 gap-1">
              <div class="col-span-6  "> 
                <span small class="text-white text-xs mr-5 p-1 px-3 justify-center rounded-3xl bg-yellow-500"   >
                   4 
                   {{ tutorial.sno }}_{{ tutorial.sno_idx }} : {{ tutorial.sno_dtl }} 
                </span>
              </div> 
               <div class="col-span-6  "> 
                  <span class="text-3xl text-green-700 font-semibold tracking-wide">{{ tutorial.question }}</span>
              </div>


              <div class="col-span-6">  
                  <v-container class="px-0" fluid >  
                
                     <v-radio-group  v-if="tutorial.sno_idx == 1" v-model="rds[1]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1" ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 2" v-model="rds[2]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 3" v-model="rds[3]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 4" v-model="rds[4]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 5" v-model="rds[5]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 6" v-model="rds[6]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 7" v-model="rds[7]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 8" v-model="rds[8]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 9" v-model="rds[9]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 10" v-model="rds[10]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                        <v-radio-group  v-if="tutorial.sno_idx == 11" v-model="rds[11]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 12" v-model="rds[12]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 13" v-model="rds[13]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 14" v-model="rds[14]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 15" v-model="rds[15]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 16" v-model="rds[16]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 17" v-model="rds[17]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 18" v-model="rds[18]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 19" v-model="rds[19]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 20" v-model="rds[20]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 21" v-model="rds[21]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 22" v-model="rds[22]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 23" v-model="rds[23]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 24" v-model="rds[24]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 25" v-model="rds[25]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 26" v-model="rds[26]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 27" v-model="rds[27]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                       <v-radio-group  v-if="tutorial.sno_idx == 28" v-model="rds[28]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 29" v-model="rds[29]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 30" v-model="rds[30]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 31" v-model="rds[31]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 32" v-model="rds[32]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 33" v-model="rds[33]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 34" v-model="rds[34]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 35" v-model="rds[35]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 36" v-model="rds[36]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                      <v-radio-group  v-if="tutorial.sno_idx == 40" v-model="rds[40]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 41" v-model="rds[41]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 42" v-model="rds[42]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 43" v-model="rds[43]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 44" v-model="rds[44]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 45" v-model="rds[45]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                 </v-container>
              </div> 
            </div> 
            
                       
            </v-list-item>
          </v-list-item-group> 
          <!-- 得分摘要：{{rds}}  -->
            <hr>
            <div class=" mb-30"  >
              Quick-DASH 計算結果，如以下 3 個指數 ：
              <div class ="flex my-10"> 
                <div class ="mx-5">
                  Quick-DASH失能/症狀分數 :
                  <span class="w-1/4 text-6xl font-black"> {{ Math.round( (((rds[1] + rds[7] +rds[10] +rds[14] +rds[16] + rds[18] +rds[24] + rds[25] + rds[27] +rds[30])/11)-1) *100)/100*25  }}  
                  </span>
                </div>
                <div class ="mx-5">
                  工作自選 :
                  <span class="w-1/4 text-6xl font-black">  {{ Math.round(((rds[36] +rds[33] +rds[34] +rds[35])-1) *100)/100 }} 
                  </span>
                </div> 
                <div class ="mx-5">
                  音樂自選 :
                  <span class="w-1/4 text-6xl font-black">  {{ Math.round( ((rds[41] +rds[42] +rds[43] +rds[44])-1) *100)/100 }} 
                  </span>
                </div> 
                 
              </div>
              <br>
              <hr>

              <span class=" text-base"> 詳細答題內容 </span>
              <div class = "m-5 flex">
                 
                <td class="w-1/8" >
                  <span class=" text-lg font-black"> 【 1~5 】 </span>
                  <span class="ml-5 flex" v-for="n in rds.length"  v-if="n >= 1 && n <= 5" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/8"   >
                  <span class=" text-lg font-black"> 【 6~10 】 </span>
                  <span class="ml-5 flex" v-for="n in rds.length"  v-if="n >= 6 && n <= 10" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/8"  >
                  <span class=" text-lg font-black"> 【 11~15 】</span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 11 && n <= 15" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/8"   >
                  <span class=" text-lg font-black"> 【 16~20 】 </span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 16 && n <= 20" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/8"   >
                  <span class=" text-lg font-black"> 【 21~25 】 </span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 21 && n <= 25" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/8"   >
                  <span class=" text-lg font-black"> 【 26~30 】</span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 26 && n <= 30" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td> 
                <td class="w-1/8"   >
                  <span class=" text-lg font-black"> 【 31~35 】</span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 31 && n <= 35" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td> 

                <td class="w-1/9"   >
                  <span class=" text-lg font-black"> 【 36~40 】</span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 36 && n <= 40" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td> 
              </div>

              <div >  
                <br>
                <!-- <v-btn class="w-32 h-24" depressed color="error" @click="savePtst(1)" >  完成 </v-btn> -->
                     <button class="py-5 mx-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" @click="savePtst(1)" >
                      完成
                    </button>

                     <button class="py-5 mx-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" @click="getAnysisReport" >
                      了解 指標意義
                    </button>
              </div> 
            </div>  
        </v-tab-item> 

         <!-- // 5.MICHIGAN HAND OUTCOMES   -->
        <v-tab-item key='k5' value='k5'>   
            
          <!-- {{ trns(tutorials[1].qzSno)}} -->

           <v-list-item-group 
            color="primary"
            class="pt-10 pl-15"  >  

            <v-list-item
              v-for="(tutorial, inx) in tutorials"  
              :key="inx"  
              @click="setActiveTutorial(tutorial, inx)" 
              v-if="tutorial.qzSno == 5"
            > 
            
             <div class="grid grid-cols-6 gap-1">
              <div class="col-span-6  ">
                <!-- {{ this.dayjs(Date.now()).format("HH:mm:ss") }} -->

<!-- {{  cT }} | {{ transCurrentTime(cT)}} -->


                
                
                <span small class="text-white text-xs mr-5 p-1 px-3 justify-center rounded-3xl bg-yellow-500"   >
                   {{ tutorial.pos }} 
                   {{ tutorial.sno }}_{{ tutorial.sno_idx }} : {{ tutorial.sno_dtl }} 
                </span>
              </div> 
               <div class="col-span-6  "> 
                  <span class="text-3xl text-green-700 font-semibold tracking-wide">{{ tutorial.question }}</span>
              </div>


              <div class="col-span-6">  
                 <v-container class="px-0" fluid >  
                
                     <v-radio-group  v-if="tutorial.sno_idx == 1" v-model="rds[1]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1" ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 2" v-model="rds[2]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 3" v-model="rds[3]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 4" v-model="rds[4]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 5" v-model="rds[5]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 6" v-model="rds[6]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 7" v-model="rds[7]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 8" v-model="rds[8]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 9" v-model="rds[9]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 10" v-model="rds[10]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                        <v-radio-group  v-if="tutorial.sno_idx == 11" v-model="rds[11]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 12" v-model="rds[12]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 13" v-model="rds[13]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 14" v-model="rds[14]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 15" v-model="rds[15]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 16" v-model="rds[16]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 17" v-model="rds[17]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 18" v-model="rds[18]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 19" v-model="rds[19]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 20" v-model="rds[20]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 21" v-model="rds[21]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 22" v-model="rds[22]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 23" v-model="rds[23]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 24" v-model="rds[24]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 25" v-model="rds[25]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 26" v-model="rds[26]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 27" v-model="rds[27]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                       <v-radio-group  v-if="tutorial.sno_idx == 28" v-model="rds[28]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                       <v-radio-group  v-if="tutorial.sno_idx == 29" v-model="rds[29]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                       <v-radio-group  v-if="tutorial.sno_idx == 30" v-model="rds[30]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 31" v-model="rds[31]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                      <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 32" v-model="rds[32]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 33" v-model="rds[33]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 34" v-model="rds[34]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 35" v-model="rds[35]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 36" v-model="rds[36]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 37" v-model="rds[37]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                       <v-radio-group  v-if="tutorial.sno_idx == 38" v-model="rds[38]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                       <v-radio-group  v-if="tutorial.sno_idx == 39" v-model="rds[39]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                       <v-radio-group  v-if="tutorial.sno_idx == 40" v-model="rds[40]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>


                        <v-radio-group  v-if="tutorial.sno_idx == 41" v-model="rds[41]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                          <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 42" v-model="rds[42]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                          <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 43" v-model="rds[43]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                          <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 44" v-model="rds[44]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                          <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 45" v-model="rds[45]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                          <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 46" v-model="rds[46]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                          <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 47" v-model="rds[47]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                          <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 48" v-model="rds[48]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                          <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 49" v-model="rds[49]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                          <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 50" v-model="rds[50]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                          <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                        <v-radio-group  v-if="tutorial.sno_idx == 51" v-model="rds[51]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                          <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 52" v-model="rds[52]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                          <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 53" v-model="rds[53]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                          <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 54" v-model="rds[54]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                          <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 55" v-model="rds[55]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                          <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 56" v-model="rds[56]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                          <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 57" v-model="rds[57]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                          <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                 </v-container>
              </div> 
            </div> 
            
                       
            </v-list-item>
          </v-list-item-group> 
          <!-- 得分摘要：{{rds}}  -->
            <hr>
            <div class=" mb-30"  >
              答題計算結果，如以下 4個指數 ：
              <div class ="flex my-10"> 
                <div class ="mx-5">
                  (1) overall hand function : 
                  <br>
                  <span class="w-1/4 text-3xl font-black"> 
                    右手 : {{ Math.round( ((((rds[1]+rds[2]+rds[3]+rds[4]+rds[5]/1)-25 )*(-1))/20)*10000)/100 }} 
                    左手 : {{ Math.round( ((((rds[6]+rds[7]+rds[8]+rds[9]+rds[10]/1)-25 )*(-1))/20)*10000)/100 }}    
                  </span>
                </div>
                <div class ="mx-5">
                  (2) activities of daily living : 
                  <br>
                  <span class="w-1/4 text-xl font-black"> 
                    右手_1_handed: {{ Math.round( ((((rds[11]+rds[12]+rds[13]+rds[14]+rds[15]/1)-25 )*(-1))/20)*10000)/100 }}  
                    右手_Overall ADL: 
                    {{ (Math.round( ((((rds[11]+rds[12]+rds[13]+rds[14]+rds[15]/1)-25 )*(-1))/20)*10000)/100 + Math.round( ((((rds[21]+rds[22]+rds[23]+rds[24]+rds[25]+rds[26]+rds[27]/1)-35 )*(-1))/28)*10000)/100 ) /2 }}
                  </span>
                  <br>
                  <span class="w-1/4 text-xl font-black"> 
                    左手_1_handed: {{ Math.round( ((((rds[16]+rds[17]+rds[18]+rds[19]+rds[20]/1)-25 )*(-1))/20)*10000)/100 }}  
                    左手_Overall ADL: 
                    {{ ( Math.round( ((((rds[16]+rds[17]+rds[18]+rds[19]+rds[20]/1)-25 )*(-1))/20)*10000)/100 +  Math.round( ((((rds[21]+rds[22]+rds[23]+rds[24]+rds[25]+rds[26]+rds[27]/1)-35 )*(-1))/28)*10000)/100  ) /2}}
                  </span>
                  <br>
                  (2) 2-handed : 
                  <br>
                  <span class="w-1/4 text-xl font-black"> 
                     {{ Math.round( ((((rds[21]+rds[22]+rds[23]+rds[24]+rds[25]+rds[26]+rds[27]/1)-35 )*(-1))/28)*10000)/100 }}   
                  </span>
                </div> 
                <div class ="mx-5">  
                  <span class="w-1/4 text-xl font-black"> 
                    (3) work :  {{ Math.round( ((((rds[28]+rds[29]+rds[30]+rds[31]+rds[32]/1)-5 ))/20)*10000)/100 }}   
                  </span>
                </div> 
                <div class ="mx-5"> 
                  <span class="w-1/4 text-xl font-black"> 
                    (4) pain :  {{ Math.round( ((((rds[33]+rds[34]+rds[35]+rds[36]+rds[37]/1)-25 )*(-1))/20)*10000)/100 }}    
                  </span>
                </div>  

                <div class ="mx-5"> 
                  (5) aesthetics
                  <br>
                  <span class="w-1/4 text-xl font-black"> 
                    右手 : {{ Math.round( ((((rds[38]+rds[39]+rds[40]+rds[41]/1)-4 ))/16)*10000)/100 }} 
                    左手 : {{ Math.round( ((((rds[42]+rds[43]+rds[44]+rds[45]/1)-4 ))/16)*10000)/100 }}   
                  </span>
                </div>  

                <div class ="mx-5"> 
                   (6) satisfaction 
                   <br>
                  <span class="w-1/4 text-xl font-black"> 
                    右手 : {{ Math.round( ((((rds[46]+rds[47]+rds[48]+rds[49]+rds[50]+rds[51]/1)-30 )*(-1))/24)*10000)/100 }} 
                    左手 : {{ Math.round( ((((rds[52]+rds[53]+rds[54]+rds[55]+rds[56]+rds[57]/1)-30 )*(-1))/24)*10000)/100 }}   
                  </span>
                </div>  
              </div>
              <br>
              <hr>

              <span class=" text-base"> 詳細答題內容 </span>
              <div class = "m-5 flex">
                
              
                  
                  <!-- <span class=" flex" v-for="n in item.quiz_dtl.length"  v-if="n >= 1 && n <= 5" > {{ n }} 題: {{ item.quiz_dtl[n] }}  </span>  -->
                  

                <td class="w-1/5" >
                  <span class=" text-lg font-black"> 【 1~5 】 </span>
                  <span class="ml-5 flex" v-for="n in rds.length"  v-if="n >= 1 && n <= 5" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <span class=" text-lg font-black"> 【 6~10 】 </span>
                  <span class="ml-5 flex" v-for="n in rds.length"  v-if="n >= 6 && n <= 10" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"  >
                  <span class=" text-lg font-black"> 【 11~15 】</span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 11 && n <= 15" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <span class=" text-lg font-black"> 【 16~20 】 </span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 16 && n <= 20" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <span class=" text-lg font-black"> 【 21~25 】 </span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 21 && n <= 25" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <span class=" text-lg font-black"> 【 26~30 】</span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 26 && n <= 30" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td> 
              </div>

              <div >  
                <br>
                <!-- <v-btn class="w-32 h-24" depressed color="error" @click="savePtst(1)" >  完成 </v-btn> -->
                     <button class="py-5 mx-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" @click="savePtst(1)" >
                      完成
                    </button>

                     <button class="py-5 mx-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" @click="getAnysisReport" >
                      了解 指標意義
                    </button>
              </div> 
            </div>  
        </v-tab-item> 

         <!-- // 6.波士頓量表  -->
        <v-tab-item key='k6' value='k6'>    
           <v-list-item-group 
            color="primary"
            class="pt-10 pl-15"  >  

            <v-list-item
              v-for="(tutorial, inx) in tutorials"  
              :key="inx"  
              @click="setActiveTutorial(tutorial, inx)" 
              v-if="tutorial.qzSno == 6"
            > 
            
             <div class="grid grid-cols-6 gap-1">
              <div class="col-span-6  ">
                <!-- {{ this.dayjs(Date.now()).format("HH:mm:ss") }} -->

<!-- {{  cT }} | {{ transCurrentTime(cT)}} -->

<!-- <v-text-field v-model="tutorial.pos" 
                              @change="mdf_here(tutorial)"></v-text-field> -->
                
                
                <span small class="text-white text-xs mr-5 p-1 px-3 justify-center rounded-3xl bg-yellow-500"   >
                   {{ tutorial.pos }} 
                   {{ tutorial.sno }}_{{ tutorial.sno_idx }} : {{ tutorial.sno_dtl }} 
                </span>
              </div> 
               <div class="col-span-6  "> 
                  <span class="text-3xl text-green-700 font-semibold tracking-wide">{{ tutorial.question }}</span>
              </div>


              <div class="col-span-6">  
                 <v-container class="px-0" fluid >  
                
                     <v-radio-group  v-if="tutorial.sno_idx == 1" v-model="rds[1]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1" ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 2" v-model="rds[2]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 3" v-model="rds[3]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 4" v-model="rds[4]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 5" v-model="rds[5]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 6" v-model="rds[6]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 7" v-model="rds[7]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 8" v-model="rds[8]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 9" v-model="rds[9]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 10" v-model="rds[10]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                        <v-radio-group  v-if="tutorial.sno_idx == 11" v-model="rds[11]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 12" v-model="rds[12]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 13" v-model="rds[13]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 14" v-model="rds[14]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 15" v-model="rds[15]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 16" v-model="rds[16]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 17" v-model="rds[17]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 18" v-model="rds[18]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 19" v-model="rds[19]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 20" v-model="rds[20]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 21" v-model="rds[21]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 22" v-model="rds[22]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 23" v-model="rds[23]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 24" v-model="rds[24]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 25" v-model="rds[25]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 26" v-model="rds[26]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 27" v-model="rds[27]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                       <v-radio-group  v-if="tutorial.sno_idx == 28" v-model="rds[28]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                       <v-radio-group  v-if="tutorial.sno_idx == 29" v-model="rds[29]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                       <v-radio-group  v-if="tutorial.sno_idx == 30" v-model="rds[30]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 31" v-model="rds[31]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                      <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 32" v-model="rds[32]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 33" v-model="rds[33]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 34" v-model="rds[34]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 35" v-model="rds[35]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 36" v-model="rds[36]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 37" v-model="rds[37]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                       <v-radio-group  v-if="tutorial.sno_idx == 38" v-model="rds[38]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                       <v-radio-group  v-if="tutorial.sno_idx == 39" v-model="rds[39]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                       <v-radio-group  v-if="tutorial.sno_idx == 40" v-model="rds[40]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                 </v-container>
              </div> 
            </div> 
            
                       
            </v-list-item>
          </v-list-item-group> 
          <!-- 得分摘要：{{rds}}  -->
            <hr>
            <div class=" mb-30"  >
              答題計算結果，如以下 4個指數 ：
              <div class ="flex my-10"> 
                <div class ="mx-5">
                  Symptom Score : 
                  <span class="w-1/4 text-6xl font-black"> {{ Math.round((rds[0]+ rds[1]+ rds[2]+ rds[3]+ rds[4]+ rds[5]+ rds[6]+ rds[7] + rds[8]+ rds[9]+ rds[10]+ rds[11]) /11*100) / 100 }}  
                  </span>
                </div>
                <div class ="mx-5">
                  Function Score :
                  <span class="w-1/4 text-6xl font-black">  {{ Math.round((rds[19]+ rds[12]+ rds[13]+ rds[14]+ rds[15]+ rds[16]+ rds[17] + rds[18] ) /8*100) / 100 }}  
                  </span>
                </div> 
                <!-- <div class ="mx-5">
                  SOCIAL :
                  <span class="w-1/4 text-6xl font-black">  {{ Math.round( (((((rds[20] +rds[21]+rds[22]+rds[27])/4)*4)-4)*(100/16)) *100)/100 }}  
                  </span>
                </div> 
                <div class ="mx-5">
                  ENVIR :
                  <span class="w-1/4 text-6xl font-black">  {{ Math.round( ( (((rds[8] + rds[9] +rds[12] +rds[13] +rds[14] +rds[23] +rds[24] +rds[25] +rds[28]  )/9)*4)-4)*(100/16)  *100)/100 }}  
                  </span>
                </div>   -->
              </div>
              <br>
              <hr>

              <span class=" text-base"> 詳細答題內容 </span>
              <div class = "m-5 flex">
                
              
                  
                  <!-- <span class=" flex" v-for="n in item.quiz_dtl.length"  v-if="n >= 1 && n <= 5" > {{ n }} 題: {{ item.quiz_dtl[n] }}  </span>  -->
                  

                <td class="w-1/5" >
                  <span class=" text-lg font-black"> 【 1~5 】 </span>
                  <span class="ml-5 flex" v-for="n in rds.length"  v-if="n >= 1 && n <= 5" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <span class=" text-lg font-black"> 【 6~10 】 </span>
                  <span class="ml-5 flex" v-for="n in rds.length"  v-if="n >= 6 && n <= 10" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"  >
                  <span class=" text-lg font-black"> 【 11~15 】</span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 11 && n <= 15" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <span class=" text-lg font-black"> 【 16~19 】 </span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 16 && n <= 19" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <!-- <span class=" text-lg font-black"> 【 21~25 】 </span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 21 && n <= 25" > {{ n }} 題: {{ rds[n] }}  </span>  -->
                </td>

                <td class="w-1/5"   >
                  <!-- <span class=" text-lg font-black"> 【 26~30 】</span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 26 && n <= 30" > {{ n }} 題: {{ rds[n] }}  </span>  -->
                </td> 
              </div>

              <div >  
                <br>
                <!-- <v-btn class="w-32 h-24" depressed color="error" @click="savePtst(1)" >  完成 </v-btn> -->
                     <button class="py-5 mx-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" @click="savePtst(1)" >
                      完成
                    </button>

                     <button class="py-5 mx-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" @click="getAnysisReport" >
                      了解 指標意義
                    </button>
              </div> 
            </div>  
        </v-tab-item> 

        <!-- // 7.SF-36  -->
        <v-tab-item key='k4' value='k4'>   
            
          <!-- {{ trns(tutorials[1].qzSno)}} -->

           <v-list-item-group 
            color="primary"
            class="pt-10 pl-15"  >  

            <v-list-item
              v-for="(tutorial, inx) in tutorials"  
              :key="inx"  
              @click="setActiveTutorial(tutorial, inx)" 
              v-if="tutorial.qzSno == 4"
            > 
            
             <div class="grid grid-cols-6 gap-1">
              <div class="col-span-6  ">
                <!-- {{ this.dayjs(Date.now()).format("HH:mm:ss") }} -->

<!-- {{  cT }} | {{ transCurrentTime(cT)}} -->
<!-- <v-text-field v-model="tutorial.pos" 
                              @change="mdf_here(tutorial)"></v-text-field> -->
                
                
                <span small class="text-white text-xs mr-5 p-1 px-3 justify-center rounded-3xl bg-yellow-500"   >
                   7 
                   {{ tutorial.sno }}_{{ tutorial.sno_idx }} : {{ tutorial.sno_dtl }} : {{ tutorial.tmp_idx }} 
                </span>
              </div> 
               <div class="col-span-6  "> 
                  <span class="text-3xl text-green-700 font-semibold tracking-wide">{{ tutorial.question }}</span>
              </div>


              <div class="col-span-6">  
                 <v-container class="px-0" fluid >  
                
                     <v-radio-group  v-if="tutorial.sno_idx == 1" v-model="rds[1]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1" ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 2" v-model="rds[2]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 3" v-model="rds[3]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 4" v-model="rds[4]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 5" v-model="rds[5]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 6" v-model="rds[6]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 7" v-model="rds[7]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 8" v-model="rds[8]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 9" v-model="rds[9]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 10" v-model="rds[10]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                        <v-radio-group  v-if="tutorial.sno_idx == 11" v-model="rds[11]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 12" v-model="rds[12]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 13" v-model="rds[13]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 14" v-model="rds[14]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 15" v-model="rds[15]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 16" v-model="rds[16]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 17" v-model="rds[17]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 18" v-model="rds[18]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 19" v-model="rds[19]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 20" v-model="rds[20]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 21" v-model="rds[21]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 22" v-model="rds[22]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 23" v-model="rds[23]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 24" v-model="rds[24]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 25" v-model="rds[25]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 26" v-model="rds[26]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 27" v-model="rds[27]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                       <v-radio-group  v-if="tutorial.sno_idx == 28" v-model="rds[28]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                       <v-radio-group  v-if="tutorial.sno_idx == 29" v-model="rds[29]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                       <v-radio-group  v-if="tutorial.sno_idx == 30" v-model="rds[30]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 31" v-model="rds[31]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                      <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 32" v-model="rds[32]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 33" v-model="rds[33]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 34" v-model="rds[34]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 35" v-model="rds[35]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 36" v-model="rds[36]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 37" v-model="rds[37]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                       <v-radio-group  v-if="tutorial.sno_idx == 38" v-model="rds[38]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                       <v-radio-group  v-if="tutorial.sno_idx == 39" v-model="rds[39]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                       <v-radio-group  v-if="tutorial.sno_idx == 40" v-model="rds[40]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                 </v-container>
              </div> 
            </div> 
            
                       
            </v-list-item>
          </v-list-item-group> 
          <!-- 得分摘要：{{rds}}  -->
            <hr>
            <div class=" mb-30"  >
              答題計算結果，如以下 4個指數 ：
              <div class ="flex my-10"> 

 

                

                <div class ="mx-5 flex-1"> 
                  <div class ="mx-5">
                    PCS : 
                    <span class="w-1/4 text-6xl font-black"> 
                      {{ Math.round( ((((((6-rds[3])+(6-rds[4])+rds[10]+rds[15]+rds[16]+rds[17]+rds[18])/7)*4)-4)*(100/16)) *100)/100 }}  
                    </span>
                  </div>

                  <div class ="mx-5">
                    MCS : 
                    <span class="w-1/4 text-6xl font-black"> 
                      {{ Math.round( ((((((6-rds[3])+(6-rds[4])+rds[10]+rds[15]+rds[16]+rds[17]+rds[18])/7)*4)-4)*(100/16)) *100)/100 }}  
                    </span>
                  </div>
                  <div class ="mx-5">
                    AGG_PHYS : 
                    <span class="w-1/4 text-6xl font-black"> 
                      {{ Math.round( ((((((6-rds[3])+(6-rds[4])+rds[10]+rds[15]+rds[16]+rds[17]+rds[18])/7)*4)-4)*(100/16)) *100)/100 }}  
                    </span>
                  </div>
                  <div class ="mx-5">
                    AGG_MENT : 
                    <span class="w-1/4 text-6xl font-black"> 
                      {{ Math.round( ((((((6-rds[3])+(6-rds[4])+rds[10]+rds[15]+rds[16]+rds[17]+rds[18])/7)*4)-4)*(100/16)) *100)/100 }}  
                    </span>
                  </div> 
                </div>
                <div class ="mx-5 flex-2">  
                    <div class ="mx-5">
                      生理功能 PF(transformed scale) : 
                      {{ sf_36_PE }}
                      <span class="w-1/4 text-6xl font-black"> 
                        {{ Math.round( ((((((6-rds[3])+(6-rds[4])+rds[10]+rds[15]+rds[16]+rds[17]+rds[18])/7)*4)-4)*(100/16)) *100)/100 }}  
                      </span>
                    </div>
                    
                    <div class ="mx-5">
                      角色限制－生理 RP(transformed scale) : 
                      <span class="w-1/4 text-6xl font-black"> 
                        {{ Math.round( ((((((6-rds[3])+(6-rds[4])+rds[10]+rds[15]+rds[16]+rds[17]+rds[18])/7)*4)-4)*(100/16)) *100)/100 }}  
                      </span>
                    </div>
                    <div class ="mx-5">
                      身體疼痛 BP(transformed scale) : 
                      <span class="w-1/4 text-6xl font-black"> 
                        {{ Math.round( ((((((6-rds[3])+(6-rds[4])+rds[10]+rds[15]+rds[16]+rds[17]+rds[18])/7)*4)-4)*(100/16)) *100)/100 }}  
                      </span>
                    </div>
                
                    <div class ="mx-5">
                      一般自覺健康 GH(transformed scale) : 
                      <span class="w-1/4 text-6xl font-black"> 
                        {{ Math.round( ((((((6-rds[3])+(6-rds[4])+rds[10]+rds[15]+rds[16]+rds[17]+rds[18])/7)*4)-4)*(100/16)) *100)/100 }}  
                      </span>
                    </div>
                    
                  </div>

<!--  // - - //  - - //  - - //  - - //  - - //  - - //  - - //  - - //  - - //  - - //  - - //  - - //  - - //   -->

                  <div class ="mx-5 flex-2"> 
                    <div class ="mx-5">
                      活力狀態 VT(transformed scale) : 
                      <span class="w-1/4 text-6xl font-black"> 
                        {{ Math.round( ((((((6-rds[3])+(6-rds[4])+rds[10]+rds[15]+rds[16]+rds[17]+rds[18])/7)*4)-4)*(100/16)) *100)/100 }}  
                      </span>
                    </div>
                    <div class ="mx-5">
                      社會功能 SF(transformed scale) :
                      <span class="w-1/4 text-6xl font-black">  
                        {{ Math.round( ((((rds[5] + rds[6] +rds[7]+rds[11]+rds[19]+(6-rds[26]))/6)*4)-4)*(100/16) *100)/100 }} 
                      </span>
                    </div> 
                    <div class ="mx-5">
                      角色限制－情緒 RE(transformed scale) :
                      <span class="w-1/4 text-6xl font-black">  
                        {{ Math.round( (((((rds[20] +rds[21]+rds[22]+rds[27])/4)*4)-4)*(100/16)) *100)/100 }}  
                      </span>
                    </div> 
                    <div class ="mx-5">
                      心理健康 MH(transformed scale) :
                      <span class="w-1/4 text-6xl font-black">  
                        {{ Math.round( ( (((rds[8] + rds[9] +rds[12] +rds[13] +rds[14] +rds[23] +rds[24] +rds[25] +rds[28]  )/9)*4)-4)*(100/16)  *100)/100 }}  
                      </span>
                    </div>  
                </div>
              </div>
              <br>
              <hr>

              <span class=" text-base"> 詳細答題內容 </span>
              <div class = "m-5 flex">
                
              
                  
                  <!-- <span class=" flex" v-for="n in item.quiz_dtl.length"  v-if="n >= 1 && n <= 5" > {{ n }} 題: {{ item.quiz_dtl[n] }}  </span>  -->
                  

                <td class="w-1/5" >
                  <span class=" text-lg font-black"> 【 1~5 】 </span>
                  <span class="ml-5 flex" v-for="n in rds.length"  v-if="n >= 1 && n <= 5" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <span class=" text-lg font-black"> 【 6~10 】 </span>
                  <span class="ml-5 flex" v-for="n in rds.length"  v-if="n >= 6 && n <= 10" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"  >
                  <span class=" text-lg font-black"> 【 11~15 】</span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 11 && n <= 15" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <span class=" text-lg font-black"> 【 16~20 】 </span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 16 && n <= 20" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <span class=" text-lg font-black"> 【 21~25 】 </span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 21 && n <= 25" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <span class=" text-lg font-black"> 【 26~30 】</span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 26 && n <= 30" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td> 
              </div>

              <div >  
                <br>
                <!-- <v-btn class="w-32 h-24" depressed color="error" @click="savePtst(1)" >  完成 </v-btn> -->
                     <button class="py-5 mx-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" @click="savePtst(1)" >
                      完成
                    </button>

                     <button class="py-5 mx-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" @click="getAnysisReport" >
                      了解 指標意義
                    </button>
              </div> 
            </div>  
        </v-tab-item> 

        <!-- // 8.SF-12 -->
        <v-tab-item key='k44' value='k44'>   
            
          <!-- {{ trns(tutorials[1].qzSno)}} -->

           <v-list-item-group 
            color="primary"
            class="pt-10 pl-15"  >  

            <v-list-item
              v-for="(tutorial, inx) in tutorials"  
              :key="inx"  
              @click="setActiveTutorial(tutorial, inx)" 
              v-if="tutorial.qzSno == 4 "
            > 
            <!-- && tutorial.memo == true -->
             <div class="grid grid-cols-6 gap-1">
              <div class="col-span-6  ">
                <!-- {{ this.dayjs(Date.now()).format("HH:mm:ss") }} -->

<!-- {{  cT }} | {{ transCurrentTime(cT)}} -->
<v-checkbox v-model="tutorial.memo" label="屬於 SF-12 題目"
                              @change="mdf_here(tutorial)"></v-checkbox>
                
                
                <span small class="text-white text-xs mr-5 p-1 px-3 justify-center rounded-3xl bg-yellow-500"   >
                   8
                   {{ tutorial.sno }}_{{ tutorial.sno_idx }} : {{ tutorial.sno_dtl }} : {{ tutorial.tmp_idx }} 
                </span>
              </div> 
               <div class="col-span-6  "> 
                  <span class="text-3xl text-green-700 font-semibold tracking-wide">{{ tutorial.question }}</span>
              </div>


              <div class="col-span-6">  
                 <v-container class="px-0" fluid >  
                
                     <v-radio-group  v-if="tutorial.sno_idx == 1" v-model="rds[1]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1" ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 2" v-model="rds[2]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 3" v-model="rds[3]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 4" v-model="rds[4]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 5" v-model="rds[5]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 6" v-model="rds[6]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 7" v-model="rds[7]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 8" v-model="rds[8]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 9" v-model="rds[9]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 10" v-model="rds[10]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                        <v-radio-group  v-if="tutorial.sno_idx == 11" v-model="rds[11]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 12" v-model="rds[12]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 13" v-model="rds[13]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 14" v-model="rds[14]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 15" v-model="rds[15]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 16" v-model="rds[16]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 17" v-model="rds[17]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 18" v-model="rds[18]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 19" v-model="rds[19]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 20" v-model="rds[20]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 21" v-model="rds[21]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 22" v-model="rds[22]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 23" v-model="rds[23]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 24" v-model="rds[24]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 25" v-model="rds[25]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 26" v-model="rds[26]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 27" v-model="rds[27]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                       <v-radio-group  v-if="tutorial.sno_idx == 28" v-model="rds[28]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                       <v-radio-group  v-if="tutorial.sno_idx == 29" v-model="rds[29]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                       <v-radio-group  v-if="tutorial.sno_idx == 30" v-model="rds[30]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 31" v-model="rds[31]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                      <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 32" v-model="rds[32]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 33" v-model="rds[33]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 34" v-model="rds[34]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 35" v-model="rds[35]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 36" v-model="rds[36]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 37" v-model="rds[37]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                       <v-radio-group  v-if="tutorial.sno_idx == 38" v-model="rds[38]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                       <v-radio-group  v-if="tutorial.sno_idx == 39" v-model="rds[39]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                       <v-radio-group  v-if="tutorial.sno_idx == 40" v-model="rds[40]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                 </v-container>
              </div> 
            </div> 
            
                       
            </v-list-item>
          </v-list-item-group> 
          <!-- 得分摘要：{{rds}}  -->
            <hr>
            <div class=" mb-30"  >
              答題計算結果，如以下 4個指數 ：
              <div class ="flex my-10"> 
                <div class ="mx-5">
                  PHYS : 
                  <span class="w-1/4 text-6xl font-black"> {{ Math.round( ((((((6-rds[3])+(6-rds[4])+rds[10]+rds[15]+rds[16]+rds[17]+rds[18])/7)*4)-4)*(100/16)) *100)/100 }}  
                  </span>
                </div>
                <div class ="mx-5">
                  PSYCH :
                  <span class="w-1/4 text-6xl font-black">  {{ Math.round( ((((rds[5] + rds[6] +rds[7]+rds[11]+rds[19]+(6-rds[26]))/6)*4)-4)*(100/16) *100)/100 }} 
                  </span>
                </div> 
                <div class ="mx-5">
                  SOCIAL :
                  <span class="w-1/4 text-6xl font-black">  {{ Math.round( (((((rds[20] +rds[21]+rds[22]+rds[27])/4)*4)-4)*(100/16)) *100)/100 }}  
                  </span>
                </div> 
                <div class ="mx-5">
                  ENVIR :
                  <span class="w-1/4 text-6xl font-black">  {{ Math.round( ( (((rds[8] + rds[9] +rds[12] +rds[13] +rds[14] +rds[23] +rds[24] +rds[25] +rds[28]  )/9)*4)-4)*(100/16)  *100)/100 }}  
                  </span>
                </div>  
              </div>
              <br>
              <hr>

              <span class=" text-base"> 詳細答題內容 </span>
              <div class = "m-5 flex">
                
              
                  
                  <!-- <span class=" flex" v-for="n in item.quiz_dtl.length"  v-if="n >= 1 && n <= 5" > {{ n }} 題: {{ item.quiz_dtl[n] }}  </span>  -->
                  

                <td class="w-1/5" >
                  <span class=" text-lg font-black"> 【 1~5 】 </span>
                  <span class="ml-5 flex" v-for="n in rds.length"  v-if="n >= 1 && n <= 5" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <span class=" text-lg font-black"> 【 6~10 】 </span>
                  <span class="ml-5 flex" v-for="n in rds.length"  v-if="n >= 6 && n <= 10" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"  >
                  <span class=" text-lg font-black"> 【 11~15 】</span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 11 && n <= 15" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <span class=" text-lg font-black"> 【 16~20 】 </span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 16 && n <= 20" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <span class=" text-lg font-black"> 【 21~25 】 </span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 21 && n <= 25" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td>

                <td class="w-1/5"   >
                  <span class=" text-lg font-black"> 【 26~30 】</span>
                  <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 26 && n <= 30" > {{ n }} 題: {{ rds[n] }}  </span> 
                </td> 
              </div>

              <div >  
                <br>
                <!-- <v-btn class="w-32 h-24" depressed color="error" @click="savePtst(1)" >  完成 </v-btn> -->
                     <button class="py-5 mx-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" @click="savePtst(1)" >
                      完成
                    </button>

                     <button class="py-5 mx-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" @click="getAnysisReport" >
                      了解 指標意義
                    </button>
              </div> 
            </div>  
        </v-tab-item> 

        
 
 
 
      </v-tabs-items>
    </div> 

        <!-- <div class="w-2/3 ml-10">
          <div v-if="currentTutorial">
            <tutorial-details
              :tutorial="currentTutorial"
              @refreshList="refreshList"
            />
          </div>
          <div v-else>
            <br />
            <p>Please 確認 on a Tutorial...</p>
          </div>
        </div> -->
    <hr> 
  </div>
</template>
 

<script>

import TutorialDetails  from "./asask5_Mdf";
import PlayerService    from "../services/playerService";
import SeatDataService  from "../services/SeatPrepareService";
import Cookies          from 'js-cookie' 

//  import Swal from 'sweetalert2';
// window.Swal = Swal;

export default {
  name: "tutorials-list",
  components: { TutorialDetails },
  

  data() {
    return { 
      // - - - - - 
        currentTime: Date.now(),
        cT:"",
        selt_lv:this.$route.params.play_lv,
        // - - - - - 

      msg:"",
      dialog: false,
      dialog2: false,
      cut_opts:['術前','術後一個月','術後三個月','術後四個月','術後六個月','術後九個月','術後一年','術後兩年','術後三年'], 
 

      menu2:false,
      DaTe: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10), 
      tab:"k0",
      // radios:[],
      rds:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      rds_BSRS:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      radios:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      radios1:"null",
      radios2:"null",
      ex7:[],
      ex8: [ { ans: "", },{ ans: "", },{ ans: "", },{ ans: "", },{ ans: "", }],
      // - - - - 
      show: false,
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1, 
      
      pS:"",
      pN:"",
      pI:"",
      pP:[],
      pM:"",
      qufd:[],

      test_DTA :[0,3,	3,	2,	2,	2,	2,	1,	1,	3,	2,	2,	2,	3,	3,	2,	2,	2,	3,	3,	3,	1,	3,	3,	3,	3,	3,	2,	3],
      test_DTA2:[0,5,	4,	2,	2,	5,	4,	3,	5,	5,	3,	4,	4,	4,	4,	4,	4,	4,	4,	5,	5,	5,	5,	5,	5,	5,	1,	5,	4],
      test_DTA3:[0,4,	3,	1,	2,	3,	4,	4,	4,	4,	3,	4,	4,	4,	3,	5,	3,	4,	4,	4,	4,	4,	4,	4,	4,	4,	3,	4,	4,],
      test_DTA4:[0,3, 3,	4,  2,	1,	2,	2,	2,	3,	2,	2,	3,	4,	2,	2,	1,	2,	3,	1,	1,	5,	3,	2,	1,	2,	1,	2,	3,	2,	1,	2,	3,	2,	4,	5,	5,  5,  5,	1,	1,	1,	3,	3,	5,  4,	5,	4,	4,	2,	5,	4,	2,  3, 	3,	3,	3,	3,],
      test_DTA5:[0,1,	4,	2,	3,	2,	1,	2,	1,	2,	2,	2,	3,	2,	2,	2,	1,	1,	1,	1,	1,	2,	1,	2,	1,	2,	2,	2,	3,	3,	3,	3,	3,	4,	1,	1,	3,	1,	4,	3,	4,	4,	2,	4,	4,	4,	3,	5,	2,	5,	5,	1,	4,	4,	4,	4,	4,	4,],

      tmplr:{
          memo:"",
          name:"",
          quiz_statu:"",
          quiz_date:"",
          quiz_name:"",

          patient_ID:"",
          prePare:[],
          quiz_1_dtl:[],
          quiz_1_fdbk:[], 
        },

      player:{
          memo:"",
          name:"",
          quiz_statu:"",
          quiz_date:"",
          
          patient_ID:"",
          prePare:[],
          quiz_1_dtl:[],
          quiz_1_fdbk:[], 
           
        },
    };
  }, 
  computed: {



         // 這邊是計算 sf-36 的設定內容
        sf_36_GH: function () {   
          let rds =this.rds; 
          let vx = 0;
          if( rds == 4 ){ vx = 2 }
          else if( rds == 1 ){ vx = 5 }
          else if( rds == 2 ){ vx = 4.4 }
          else if( rds == 3 ){ vx = 3.4 }
          else if( rds == 5 ){ vx = 1 }
          else { vx = 99 } 

          let v2 = +rds[33] +rds[34] +rds[35] +rds[36] 
          let r = vx + v2 ; 
          
              return r; 
        },
        sf_36_PF: function () {   
           let rds =this.rds; 
           let filtered = rds[3]+rds[4]+rds[5]+rds[6]+rds[7]+rds[8]+rds[9]+rds[10]+rds[11]+rds[12];
          
              return filtered; 
        },

        sf_36_RP: function () {   
           let rds =this.rds; 
           let filtered = rds[13]+rds[14]+rds[15]+rds[16];
          
              return filtered; 
        },
        sf_36_RE: function () {   
          let rds =this.rds;
          let filtered = rds[17]+rds[18]+rds[19] ;
          
              return filtered; 
        },
        sf_36_SF: function () {   
          let rds =this.rds;
          let filtered = rds[20]+rds[32];
          
              return filtered; 
        },
        sf_36_MH: function () {   
          let rds =this.rds;
          let filtered = rds[24]+rds[25]+( 7-rds[26] )+rds[28]+( 7-rds[30] );
          
              return filtered; 
        },
        sf_36_VT: function () {   
          let rds =this.rds;
          let filtered = ( 7-rds[23] )+ ( 7-rds[27] ) +rds[29]+rds[31] ;
          
              return filtered; 
        }, 
        
        sf_36_TranS: function () {   
          let _TS_aryA =[0,10,4,2,5,4,2,3,5];
          let _TS_aryB =[0,20,4,10,20,20,8,3,25];


          let _TS=[88,88,88,88,88,88,88,88,88]; 
          _TS[1] = (this.sf_36_PF-_TS_aryA[1])/_TS_aryB[1]*100;
          _TS[2] = (this.sf_36_PR-_TS_aryA[1])/_TS_aryB[2]*100;
          _TS[3] = (this.sf_36_BP-_TS_aryA[1])/_TS_aryB[3]*100;
          _TS[4] = (this.sf_36_GH-_TS_aryA[1])/_TS_aryB[4]*100;
          _TS[5] = (this.sf_36_VT-_TS_aryA[1])/_TS_aryB[5]*100;
          _TS[6] = (this.sf_36_SF-_TS_aryA[1])/_TS_aryB[6]*100;
          _TS[7] = (this.sf_36_RE-_TS_aryA[1])/_TS_aryB[7]*100;
          _TS[8] = (this.sf_36_MH-_TS_aryA[1])/_TS_aryB[9]*100;
          
              return _TS;
        }, 

         

        sf_36_Z: function () {   

          let _Z_aryA =[0,84.52404,81.19907,75.49196,72.21316,61.05453,83.59753,81.29467,74.84212];
          let _Z_aryB =[0,22.8949, 33.79729, 23.55879, 20.16964, 20.86942, 22.37642, 33.02717, 18.01189];

          let _Z_arry=[88,88,88,88,88,88,88,88,88]; 
          _Z_arry[1] = (this.sf_36_TranS[1]-_Z_aryA[1])/_Z_aryB[1];
          _Z_arry[2] = (this.sf_36_TranS[1]-_Z_aryA[1])/_Z_aryB[2];
          _Z_arry[3] = (this.sf_36_TranS[1]-_Z_aryA[1])/_Z_aryB[3];
          _Z_arry[4] = (this.sf_36_TranS[1]-_Z_aryA[1])/_Z_aryB[4];
          _Z_arry[5] = (this.sf_36_TranS[1]-_Z_aryA[1])/_Z_aryB[5];
          _Z_arry[6] = (this.sf_36_TranS[1]-_Z_aryA[1])/_Z_aryB[6];
          _Z_arry[7] = (this.sf_36_TranS[1]-_Z_aryA[1])/_Z_aryB[7];
          _Z_arry[8] = (this.sf_36_TranS[1]-_Z_aryA[1])/_Z_aryB[9];
          
              return _Z_arry; 
        }, 

        sf_36_AGG: function () {   

          let _PHYS_ary =[0,0.42402,0.35119,0.31754,0.24954,0.02877,-0.00753,-0.19206,-0.22069];
          let _MENT_ary =[0,-0.22999,-0.12329,-0.09731,-0.01571,0.23534,0.26876,0.43407,0.48581];
         
          let _AGG=[88,88,88]; 
          _AGG[1] = (this.sf_36_Z[1]*_PHYS_ary[1]) + (this.sf_36_Z[2]*_PHYS_ary[2]) + (this.sf_36_Z[3]*_PHYS_ary[3]) + (this.sf_36_Z[4]*_PHYS_ary[4])
                    (this.sf_36_Z[5]*_PHYS_ary[5]) + (this.sf_36_Z[6]*_PHYS_ary[6]) + (this.sf_36_Z[7]*_PHYS_ary[7]) + (this.sf_36_Z[8]*_PHYS_ary[8]);

          _AGG[2] = (this.sf_36_Z[1]*_MENT_ary[1]) + (this.sf_36_Z[2]*_MENT_ary[2]) + (this.sf_36_Z[3]*_MENT_ary[3]) + (this.sf_36_Z[4]*_MENT_ary[4])
                    (this.sf_36_Z[5]*_MENT_ary[5]) + (this.sf_36_Z[6]*_MENT_ary[6]) + (this.sf_36_Z[7]*_PHYS_ary[7]) + (this.sf_36_Z[8]*_PHYS_ary[8]);
           
          
              return _AGG;
        }, 

        



          // 计算属性的 getter
        cmpare1_length: function () {   
          let filtered = this.rds_BSRS.filter(function(value, index, arr){
              return value > 1;
          });
          
              return filtered.length; 
        },
        

        cmpare1_sum: function () {  
          let arr = this.rds_BSRS.filter(function(value, index, arr){
              return value > 1;
          });

           var sum=0;
              for (var i = 0; i < arr.length; i++) {
                  sum += arr[i];
              };  
          return sum; 

        },  

    },
  methods: { 
  
  getAnysisReport(){
    // Swal.fire({
    //                     position: 'top',
    //                     icon: 'success',
    //                     title: '正在開啟!!',
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                     }).then(() => {
    //                         this.$refs['login'].hide()
    //                         window.location.reload() 
    //                         }); 

              Swal.fire({
              icon: 'question',
              title: '是否好奇 測試完的結果?',
              text: '讓我 分析數據後,帶您了解 相關的診斷 建議',
              footer: '<a href=""> 重新測驗 </a>'
            })
  },

Te(idx){ 
  if(idx == 1) { this.rds = this.test_DTA;  }
  else if( idx == 2 ){ this.rds = this.test_DTA2; } 
  else if( idx == 3 ){ this.rds = this.test_DTA3; } 
  else if( idx == 4 ){ this.rds = this.test_DTA4; } 
  else if( idx == 5 ){ this.rds = this.test_DTA5; } 
},
trns(idx){
  let r ="" ;
  if(idx == 1)
  { r = '生活品質.量表' }
  return r 
},   
chkrds(){
 for(let i = 0; i <= this.rds.length; i++){

       if( this.rds[i] == "null" ){
          this.rds[i] = 0 ; 
        } 
        else if( this.rds[i] == 'null' ){
          this.rds[i] = 0 ; 
        } 
        else if( this.rds[i] == '' ){
          this.rds[i] = 0 ; 
        }  
        else if( this.rds[i] == 5){
          this.rds[i] = 55 ; 
        }    
      }

},
 
mdf_here(e) {
      var data = {
        
       
        
        pos: e.pos,
  memo: e.memo,     

      };

      SeatDataService.update(e.key,data)
        .then(() => {
          // Swal.fire({
          //   position: 'top-end',
          //   icon: 'success',
          //   title: '修改成功',
          //   showConfirmButton: false,
          //   timer: 500
          // })

          // this.submitted = true;
        this.newSt;
        
        })
        .catch(e => {
          console.log(e);
        });
    },

    savePtst(idx){  

        if( idx == 1){ 

           // 題本 1 計算方式
            this.qufd[0]=Math.round(((((((6-this.rds[3])+(6-this.rds[4])+this.rds[10]+this.rds[15]+this.rds[16]+this.rds[17]+this.rds[18])/7)*4)-4)*(100/16))*10)/10; 
            this.qufd[1]=Math.round( ((((this.rds[5] + this.rds[6] +this.rds[7]+this.rds[11]+this.rds[19]+(6-this.rds[26]))/6)*4)-4)*(100/16)*10)/10;
            this.qufd[2]=Math.round( ((((this.rds[20] + this.rds[21] +this.rds[22]+this.rds[27]                            )/4)*4)-4)*(100/16)*10)/10;       
            this.qufd[3]=Math.round( ((((this.rds[8] + this.rds[9] +this.rds[12] +this.rds[13] +this.rds[14] +this.rds[23] +this.rds[24] +this.rds[25] +this.rds[28]  )/9)*4)-4)*(100/16)*10)/10;
 
        }

        var data = { 
                      
                      name: this.pN,
                      patient_ID  : this.pI, 
                      quiz_statu  : this.pS,
                      quiz_encode : 1,
                      

                      // name        : this.tmplr.name,
                      // patient_ID  : this.tmplr.patient_ID,  
                      // quiz_statu  : this.tmplr.quiz_statu,

                      prePare     : this.tmplr.prePare,
                      
                      quiz_date   : this.DaTe, 

                      quiz_dtl    : this.rds, 
                      quiz_fdbk   : this.qufd,  
                      quiz_time: this.transCurrentTime(this.cT),
                   };

        PlayerService.create(data)
          .then(() => {
            this.msg= "測試中，登記成功";
            this.submitted = true;

            this.tab ="k2"; 

            if(this.prePare[2]=="")
            {
              this.tab ="k2"; 
            }



          })
          .catch(e => { console.log(e); });  
    },

    savePdta() {

      //  this.cntDat_qu1();
      // this.qufd[0]=(6-this.radios[1]-this.radios[2]);

      this.qufd[0]=((((((6-this.radios[3])+(6-this.radios[4])+this.radios[10]+this.radios[15]+this.radios[16]+this.radios[17]+this.radios[18])/7)*4)-4)*(100/16)); 
      this.qufd[1]= ((((this.radios[5] + this.radios[6] +this.radios[7]+this.radios[11]+this.radios[19]+(6-+this.radios[26]))/6)*4)-4)*(100/16);
      this.qufd[2]=(((((this.radios[20] + this.radios[21] +this.radios[22]+this.radios[27])/4)*4)-4)*(100/16));           
      this.qufd[3]=( (((this.radios[8] + this.radios[9] +this.radios[12] +this.radios[13] +this.radios[14] +this.radios[23] +this.radios[24] +this.radios[25] +this.radios[28]  )/9)*4)-4)*(100/16);
           

      var data = {  
        name        : this.tmplr.name,
        patient_ID  : this.tmplr.patient_ID,
        prePare     : this.tmplr.prePare, 
        quiz_1_fdbk : this.qufd,
        quiz_name   : this.tmplr.quiz_name,
      };

      PlayerService.create(data)
        .then(() => {
          this.msg= "第一份，登記成功";
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        }); 
    },
    
    cntDat_qu1(){

        // this.qufd[0]=((((((6-this.radios[3])+(6-this.radios[4])+this.radios[10]+this.radios[15]+this.radios[16]+this.radios[17]+this.radios[18])/7)*4)-4)*(100/16)) ;

            // <br/>
            // PSYCH : {{ ((((radios[5] + radios[6] +radios[7]+radios[11]+radios[19]+(6-+radios[26]))/6)*4)-4)*(100/16) }}

            // <br/>
            // SOCIAL : {{ (((((radios[20] + radios[21] +radios[22]+radios[27])/4)*4)-4)*(100/16)) }}
           
            // <br/>
            // ENVIR : {{ ( (((radios[8] + radios[9] +radios[12] +radios[13] +radios[14] +radios[23] +radios[24] +radios[25] +radios[28]  )/9)*4)-4)*(100/16) }}
               
    },

    saveFirstLogin(){
        this.tmplr.quiz_statu = this.pS; 
        this.tmplr.name = this.pN;
        this.tmplr.patient_ID = this.pI;
        this.tmplr.prePare = this.pP;

        this.dialog = false;

        this.tab='k3'
        
    },


    
   
    removeCookie() {
      Cookies.remove('login')
    },

     
    onDataChange(items) {
       
      let _tutorials = [];  
      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _tutorials.push({
          key: key, 


          pos: data.pos,
          sno: data.sno,
          sno_idx: data.sno_idx,
          sno_dtl:data.sno_dtl,
          qzSno: data.qzSno,

          questype:data.questype,
          question:data.question,
          quesopts:data.quesopts,
          quesinduc:data.quesinduc,
          quesimge:data.quesimge,  

            tmp_idx: data.tmp_idx,
            left_time: data.left_time,
            memo: data.memo,
            slted: data.slted,
            statu: data.statu
        });
      });

      this.tutorials = _tutorials; 
    },

    refreshList() {
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },

    removeAllTutorials() {
      SeatDataService.deleteAll()
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    get(index, sno_idx)
    {
        this.ex8[sno_idx].ans
    },
    updateCurrentTime(){ this.cT = Date.now(); },
    transCurrentTime(idx){ return this.dayjs(idx).format("HH:mm:ss"); },
 
// this.cT = Date.now();
    
  },
  // async mounted() {
  //   // console.log(_tutorials.title);  
  //    SeatDataService.getAll().on("value", this.onDataChange);  
  // }, 
  mounted() {
    // console.log(_tutorials.title);  
this.interval = setInterval(this.updateCurrentTime, 1000);
     SeatDataService.getAll().on("value", this.onDataChange);  
  },
  beforeDestroy() {
     SeatDataService.getAll().off("value", this.onDataChange);
  }, 

    
};
</script>

<style>
/* .submit-form {
  max-width: 300px;
  margin: auto;
} */
</style>


<style>
.list {
  text-align: left;
  /* max-width: 750px; */
  margin: auto;
}
</style>
