<template> 
    <div class=" flex justify-center  ">
    <div class="w-full ">
            <div class="grid grid-cols-9 gap-1">
              
                <!-- <div class="col-span-3 ..."></div>
                <div class="col-span-2 ..."></div>
                <div class="col-span-1 ..."></div>
                <div class="col-span-1 ..."></div>
                <div class="col-span-2 ..."></div> -->
              
              <div class =" col-span-4">
                <span class="pt-30 text-xl font-base " > {{msg}} 請 {{ tmplr.patient_ID }} - {{ tmplr.name }} ，完成 {{ tmplr.prePare }}</span>

              </div>
               <div class ="col-span-5">
                 <v-btn
                    class="mx-3 my-1"
                    color="primary" 
                    solo
                    @click="Te(1)"
                  >
                    載入 測試數據 1
                  </v-btn>

                  <v-btn
                    class="mx-3 my-1"
                    color="primary" 
                    solo
                    @click="Te(2)"
                  >
                    載入 測試數據 2
                  </v-btn>

                  <v-btn
                    class="mx-3 my-1"
                    color="primary" 
                    solo
                    @click="Te(3)"
                  >
                    載入 測試數據 3
                  </v-btn>
                
              </div>
              
            </div>
             

              
           <v-tabs
            v-model="tab"
            background-color="primary" 
            fixed-tabs 
           >  

            <v-tab key='k0' href='#k0' v-if="!hide"  >    
              登入作業
            </v-tab>

            <v-tab key='k1' href='#k1' v-if="!hide"  >    
              題本_1
            </v-tab> 

            <v-tab key='k2' href='#k2' v-if="!hide"  >    
              題本_2
            </v-tab>  

            <v-tab key='k3' href='#k3' v-if="!hide"  >    
              題本_3
            </v-tab> 

          </v-tabs>  

      <v-tabs-items v-model="tab"> 
        <v-tab-item key='k0' value='k0'>
              <div class="flex justify-center items-stretch ">
                
                <div class="m-3 ">
                  
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
                        
                        <!-- <v-btn
                          color="blue darken-1"
                          text
                          @click="dialog2 = false"
                        >
                          儲存
                        </v-btn> -->

                      </v-card-actions>

                    </v-card>
                  </v-dialog> 

                </div>
                <div class="m-3">
                  <v-dialog
                    v-model="dialog"
                    persistent
                    max-width="1000px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        width="300px"
                        height="300px"
                      >
                        首次登入
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="text-h5">首次登入 請填寫下列資料，進行下一步</span>
                      </v-card-title>
                      <v-card-text>
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
                        <small>*必須填寫欄位 </small>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="dialog = false"
                        >
                          關閉
                        </v-btn>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="saveFirstLogin"
                        >
                          儲存
                        </v-btn>
                      </v-card-actions>

                    </v-card>
                  </v-dialog>
                </div> 
              </div> 
        </v-tab-item> 

         <v-tab-item key='k1' value='k1'>   
            

           <v-list-item-group 
            color="primary"
            class="pt-10"  >  

            <v-list-item
              v-for="(tutorial, inx) in tutorials"  
              :key="inx"  
              @click="setActiveTutorial(tutorial, inx)" 
            > 
             <div class="grid grid-cols-6 gap-1">
              <div class="col-span-1  ">
                 <v-chip class="text-white text-xs mr-5" color="green"  >
                   {{ tutorial.pos }}
                   {{ tutorial.sno }}_{{ tutorial.sno_idx }}_{{ tutorial.sno_dtl }}</v-chip>
              </div>

               <div class="col-span-5  "> 
                  <span class="text-base text-green-700 font-semibold tracking-wide">{{ tutorial.question }}</span>
              </div>


              <div class="col-span-6">   
                     <v-radio-group  v-if="tutorial.sno_idx == 1" v-model="rds[1]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1" ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 2" v-model="rds[2]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                        <v-radio-group  v-if="tutorial.sno_idx == 3" v-model="rds[3]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 4" v-model="rds[4]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 5" v-model="rds[5]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                      <v-radio-group  v-if="tutorial.sno_idx == 6" v-model="rds[6]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 7" v-model="rds[7]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 8" v-model="rds[8]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 9" v-model="rds[9]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 10" v-model="rds[10]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                        <v-radio-group  v-if="tutorial.sno_idx == 11" v-model="rds[11]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 12" v-model="rds[12]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 13" v-model="rds[13]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 14" v-model="rds[14]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      <v-radio-group  v-if="tutorial.sno_idx == 15" v-model="rds[15]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                        <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

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
      
              </div> 
            </div> 
            
                       
            </v-list-item>
          </v-list-item-group> 
          得分摘要：{{rds}}
            <br>

            答題計算結果，如以下 4個指數 ：
            <br> 
             PHYS : {{ Math.round( ((((((6-rds[3])+(6-rds[4])+rds[10]+rds[15]+rds[16]+rds[17]+rds[18])/7)*4)-4)*(100/16)) *100)/100 }}  

            <br/>
             PSYCH : {{ Math.round( ((((rds[5] + rds[6] +rds[7]+rds[11]+rds[19]+(6-rds[26]))/6)*4)-4)*(100/16) *100)/100 }} 

            <br/>
             SOCIAL : {{ Math.round( (((((rds[20] +rds[21]+rds[22]+rds[27])/4)*4)-4)*(100/16)) *100)/100 }}  
           
            <br/>
             ENVIR : {{ Math.round( ( (((rds[8] + rds[9] +rds[12] +rds[13] +rds[14] +rds[23] +rds[24] +rds[25] +rds[28]  )/9)*4)-4)*(100/16)  *100)/100 }}  
             

          <v-btn class="w-full" depressed color="error" @click="savePtst(1)" >  完成 </v-btn>
        </v-tab-item> 

         <v-tab-item key='k2' value='k2' > 
            <!--  這邊是測試可以存取的一個過程，希望可以再往下執行 -->
             題本2
              <v-btn
                color="primary" 
                @click="savePtst(2)"
              >
                完成
              </v-btn>
 
        </v-tab-item>

         <v-tab-item key='k3' value='k3' > 
            <!--  這邊是測試可以存取的一個過程，希望可以再往下執行 -->
             題本2
              <v-btn
                color="primary" 
                @click="savePtst(4)"
              >
                完成
              </v-btn>
 
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

import TutorialDetails from "./asask5_Mdf";
 
import SeatDataService from "../services/SeatPrepareService";
import Cookies from 'js-cookie'


import PlayerService from "../services/playerService";

export default {
  name: "tutorials-list",
  components: { TutorialDetails },
  

  data() {
    return { 
      msg:"",
      dialog: false,
      dialog2: false,
      cut_opts:['術前','術後一個月','術後三個月','術後四個月','術後六個月','術後九個月','術後一年','術後兩年','術後三年'], 
 

      menu2:false,
      DaTe: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10), 
      tab:"",
      // radios:[],
      rds:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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

      tmplr:{
          memo:"",
          name:"",
          quiz_statu:"",
          quiz_date:"",
          
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
  methods: { 

Te(idx){ 
  if(idx == 1) { this.rds = this.test_DTA;  }
  else if( idx == 2 ){ this.rds = this.test_DTA2; } 
  else if( idx == 3 ){ this.rds = this.test_DTA3; } 
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

    savePtst(idx){  

        if( idx == 1){ 

           // 題本 1 計算方式
            this.qufd[0]=Math.round(((((((6-this.rds[3])+(6-this.rds[4])+this.rds[10]+this.rds[15]+this.rds[16]+this.rds[17]+this.rds[18])/7)*4)-4)*(100/16))*10)/10; 
            this.qufd[1]=Math.round( ((((this.rds[5] + this.rds[6] +this.rds[7]+this.rds[11]+this.rds[19]+(6-this.rds[26]))/6)*4)-4)*(100/16)*10)/10;
            this.qufd[2]=Math.round( ((((this.rds[20] + this.rds[21] +this.rds[22]+this.rds[27]                            )/4)*4)-4)*(100/16)*10)/10;       
            this.qufd[3]=Math.round( ((((this.rds[8] + this.rds[9] +this.rds[12] +this.rds[13] +this.rds[14] +this.rds[23] +this.rds[24] +this.rds[25] +this.rds[28]  )/9)*4)-4)*(100/16)*10)/10;
 
        }

        var data = { 
                      name        : this.tmplr.name,
                      patient_ID  : this.tmplr.patient_ID,  

                      prePare     : this.tmplr.prePare,
                      quiz_statu  : this.tmplr.quiz_statu,
                      quiz_date   : this.DaTe, 

                      quiz_dtl    : this.rds, 
                      quiz_fdbk   : this.qufd,  
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
  //     this.qufd[3]=( (((this.radios[8] + this.radios[9] +this.radios[12] +this.radios[13] +this.radios[14] +this.radios[23] +this.radios[24] +this.radios[25] +this.radios[28]  )/9)*4)-4)*(100/16);
           

      var data = {
       

        name        : this.tmplr.name,
        patient_ID  : this.tmplr.patient_ID,
        prePare     : this.tmplr.prePare, 
        quiz_1_fdbk : this.qufd,  
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


    
  },
  // async mounted() {
  //   // console.log(_tutorials.title);  
  //    SeatDataService.getAll().on("value", this.onDataChange);  
  // }, 
  mounted() {
    // console.log(_tutorials.title);  

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
