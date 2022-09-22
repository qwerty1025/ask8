<template> 
    <div class=" flex w-full"> 
        {{ tutorials }}
      <div class="overflow-y-auto  w-full h-screen" v-show="play_lv ==1"> 
        <v-list-item-group  color="primary" class="pt-10 pl-15"  >   
        <v-list-item v-for="(tutorial, inx) in tutorials" :key="inx"  @click="setActiveTutorial(tutorial, inx)" v-if="tutorial.qzSno == 2" >  
          <div class="grid grid-cols-6 gap-1">
          <div class="col-span-6  ">  
            <span small class="text-white text-xs mr-5 p-1 px-3 justify-center rounded-3xl bg-yellow-500"   >
                {{ tutorial.pos }} 
                {{ tutorial.sno }}_{{ tutorial.sno_idx }} : {{ tutorial.sno_dtl }} 
            </span>
          </div> 
            <div class="col-span-6  "> 
              <span class="text-3xl text-green-700 font-semibold w-full">{{ tutorial.question }}</span>
          </div>  

          <div class="col-span-6">  
            <v-container class="px-0" fluid  v-show="tutorial.sno_dtl != 99">  
                
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
          <button class="py-5 m-5 bg-red-500 w-full hover:bg-red-400 text-white 
                        font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" 
                        @click="savePtst(1)" >
                  填答完成
          </button> 
      </v-list-item-group>  
        <div class=" mb-30"  > 
          <v-expansion-panels >
            <v-expansion-panel >
                <v-expansion-panel-header>
                    <a class="rounded-full text-lg bg-gray-100 px-5"> 詳細答題內容 </a> 
                </v-expansion-panel-header>

                <v-expansion-panel-content>   
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
                    
                    
                </v-expansion-panel-content>
              </v-expansion-panel>

            <v-expansion-panel >
                <v-expansion-panel-header>
                    <a class="rounded-full text-lg bg-gray-100 px-5"> 答題計算結果，如以下 4個指數 ： </a> 
                </v-expansion-panel-header>

                <v-expansion-panel-content>  
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
                  </div>  
                    
                </v-expansion-panel-content>
              </v-expansion-panel>
        </v-expansion-panels>

           
        </div>  
      </div> 
       
    </div>
</template>
 

<script>

import TutorialDetails  from "./asask5_Mdf";
import PlayerService    from "../services/playerService";
import SeatDataService  from "../services/SeatPrepareService";
import Cookies          from 'js-cookie' 


import VueRadioButton from "vue-radio-button";

//  import Swal from 'sweetalert2';
// window.Swal = Swal;

export default {
  name: "tutorials-list",
  components: { VueRadioButton },
  

  data() {
    return { 
      // - - - - - 
        currentTime: Date.now(),
        cT:"",
        play_lv:'1',
        // - - - - - 
        selectedButton: "",
        //- - - - -

      msg:"",
        
      DaTe: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10), 
      tab:"k0",
      // radios:[],
      rds:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      rds_BSRS:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      radios:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      radios1:"null",
      radios2:"null",
       
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
  methods: { 
  
  getAnysisReport(){  
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

     
    onDataChange    (items) {
       
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
  },
  // async mounted() {
  //   // console.log(_tutorials.title);  
  //    SeatDataService.getAll().on("value", this.onDataChange);  
  // }, 
  mounted() {
    // console.log(_tutorials.title);  
    this.interval = setInterval(this.updateCurrentTime, 1000); 
     SeatDataService.getSome('pos').equalTo('1').on("value", this.onDataChange); 
    //  SeatDataService.getSome('pos').equalTo('3').on("value", this.onDataChange); 
  },
  beforeDestroy() {
     SeatDataService.getAll().off("value", this.onDataChange);
  }, 

    
};
</script>
 


<style>
.list {
  text-align: left;
  /* max-width: 750px; */
  margin: auto;
} 
  .v-radio-label {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    margin: 5px;
    border-radius: 4px;
    border: 1px solid #eee;
    transition: all 500ms;
  }

  .v-radio-active {
    box-shadow: 0 15px 15px 0 rgba(12, 67, 75, 0.793);
  }
</style>
