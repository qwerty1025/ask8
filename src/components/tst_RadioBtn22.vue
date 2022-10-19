<template> 
  <div class=" flex w-full">  
    <div class="overflow-y-auto  w-full h-screen" v-show="play_lv ==2"> 
       <!-- // 這邊開始安排 ： 該次填寫進度 -->
       <a class ="mt-3 mr-10 flex justify-end text-lg text-gray-500 ">  〖 {{ pii.pI }} 〗 {{ pii.pN }} , {{ pii.pP }}  正在填寫 2.簡式症狀表(BSRS)</a>

      <div color="primary" class="pt-10 pl-15"  >   
      <div v-for="(tutorial, inx) in tutorials" :key="inx"  
           v-if="tutorial.qzSno == 3"
          @click="setActiveTutorial(tutorial, inx)"   >  
      <div class="flex-row ml-5"> 
        <div class="   ">  
          <span small class="text-white text-xs mr-5 p-1 px-3 justify-center rounded-3xl bg-yellow-500"   >
              {{ tutorial.pos }} 
              {{ tutorial.sno }}_{{ tutorial.sno_idx }} : {{ tutorial.sno_dtl }} 
          </span>
        </div> 
          <div class=" "> 
            <span class="text-3xl text-green-700 font-semibold w-full">{{ tutorial.question }}</span>
        </div>  

        <div class=" " v-for="nn in 30"  v-show="tutorial.sno_dtl != 99" >   
            <div  v-if="tutorial.sno_idx == nn" v-model="rds_BSRS[tutorial.sno_idx]"  
                  v-for="(quesopts, index) in tutorial.quesopts" :key="index" class=""> 
                  <radio v-model="rds_BSRS[tutorial.sno_idx]" :value="index+1"  
                          class="mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl" >
                    {{ quesopts }}
                  </radio> 
            </div>  
        </div>  
              
                  
        <!-- <div class="col-span-6">   
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
        </div>  -->
        </div>      
      </div >  
    </div >  
    <div class="grid grid-cols-1 gap-0.5">
        <div class="col-span-1 flex justify-center ">
          <a class="text-base text-gray-500"> 操作提示訊息 </a>
          {{ }}

        </div>
        <div class="col-span-1">
          <v-expansion-panels > 
          <v-expansion-panel >
              <v-expansion-panel-header>
                  <a class="rounded-full text-lg bg-gray-100 px-5"> 計算結果，如下 ： </a> 
              </v-expansion-panel-header>

              <v-expansion-panel-content>  

                <table class="table-fixed">
                  <thead>
                    <tr>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left 
                              text-xs font-semibold text-gray-700   "
                      >
                      GSI (general symptom index):  : 
                      </th>
                      <th
                        class="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 
                              text-left text-xs font-semibold text-gray-700  "
                      >
                      PST(分數大於一的症狀數) : 
                      </th>
                      <th
                        class="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 
                              text-center text-xs font-semibold text-gray-700 uppercase "
                      >
                        Activities of Daily Living
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white ">
                        <div class="flex"> 
                          <p class="text-gray-900  text-6xl font-black "> {{ Math.round((rds_BSRS[1]+rds_BSRS[2]+rds_BSRS[3]+rds_BSRS[4]+rds_BSRS[5]
                                                                          +rds_BSRS[6]+rds_BSRS[7]+rds_BSRS[8]+rds_BSRS[9]+rds_BSRS[10]
                                                                          +rds_BSRS[11]+rds_BSRS[12]+rds_BSRS[13]+rds_BSRS[14]+rds_BSRS[15]
                                                                          +rds_BSRS[16]+rds_BSRS[17]+rds_BSRS[18]+rds_BSRS[19]+rds_BSRS[20]
                                                                          +rds_BSRS[21]+rds_BSRS[22]+rds_BSRS[23]+rds_BSRS[24]+rds_BSRS[25]
                                                                          +rds_BSRS[26]+rds_BSRS[27]+rds_BSRS[28]+rds_BSRS[29]+rds_BSRS[30])/30 *100)/100 }}   </p> 
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white   ">
                        <p class="text-gray-900  text-6xl font-black ">
                          {{ Math.round( (cmpare1_length) *100)/100 }} 
                        </p> 
                      </td> 

                      <td class="px-5 py-5 border-b border-gray-200 bg-white ">  
                        <span class="w-1/4 text-6xl font-black">  {{ Math.round( ( rds_BSRS[1]+rds_BSRS[2]+rds_BSRS[3]+rds_BSRS[4]+rds_BSRS[5]
                                                                          +rds_BSRS[6]+rds_BSRS[7]+rds_BSRS[8]+rds_BSRS[9]+rds_BSRS[10]
                                                                          +rds_BSRS[11]+rds_BSRS[12]+rds_BSRS[13]+rds_BSRS[14]+rds_BSRS[15]
                                                                          +rds_BSRS[16]+rds_BSRS[17]+rds_BSRS[18]+rds_BSRS[19]+rds_BSRS[20]
                                                                          +rds_BSRS[21]+rds_BSRS[22]+rds_BSRS[23]+rds_BSRS[24]+rds_BSRS[25]
                                                                          +rds_BSRS[26]+rds_BSRS[27]+rds_BSRS[28]+rds_BSRS[29]+rds_BSRS[30] /cmpare1_length ) *100)/100 }} 
                        </span>

                        <span  class="relative inline-block m-1 px-5 py-1 text-green-900 leading-tight" >
                              <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full" ></span>
                              <p>(是  {{ rds_BSRS[1]+rds_BSRS[2]+rds_BSRS[3]+rds_BSRS[4]+rds_BSRS[5]
                                                                              +rds_BSRS[6]+rds_BSRS[7]+rds_BSRS[8]+rds_BSRS[9]+rds_BSRS[10]
                                                                              +rds_BSRS[11]+rds_BSRS[12]+rds_BSRS[13]+rds_BSRS[14]+rds_BSRS[15]
                                                                              +rds_BSRS[16]+rds_BSRS[17]+rds_BSRS[18]+rds_BSRS[19]+rds_BSRS[20]
                                                                              +rds_BSRS[21]+rds_BSRS[22]+rds_BSRS[23]+rds_BSRS[24]+rds_BSRS[25]
                                                                              +rds_BSRS[26]+rds_BSRS[27]+rds_BSRS[28]+rds_BSRS[29]+rds_BSRS[30] }} / {{cmpare1_length}} 的意思 )   </p>
                              <span class="relative text-4xl font-black">  </span>
                            </span> 
                      </td>  

                    </tr>

                  </tbody>
                    </table>  
                  
              </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel >
              <v-expansion-panel-header>
                  <a class="rounded-full text-lg bg-gray-100 px-5"> 詳細答題內容 </a> 
              </v-expansion-panel-header>

              <v-expansion-panel-content>   
                <span class=" text-base"> 詳細答題內容 </span>
                <div class = "m-5 flex"> 

                  <div class = "m-5 flex"> 
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
                </div> 
              </v-expansion-panel-content>
          </v-expansion-panel>
      </v-expansion-panels>  
        </div>
      </div>
      
      
      <button class="py-5 my-5 bg-red-500 w-full hover:bg-red-400 text-white 
                    font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" 
                    @click="savePtst()" >
              填答完成
      </button>   
    </div>  
  </div>
</template>


<script> 
import PlayerService    from "../services/playerService";
import SeatDataService  from "../services/SeatPrepareService";
import Cookies          from 'js-cookie' 


export default {
name: "tutorials-list",  
data() {
  return { 
    // - - - - - 
      currentTime: Date.now(),
      cT:"",
      play_lv:'2',     
      rds_BSRS:[0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0], 
      // rds_BSRS:[0, 1,3,4,0,3, 3,3,5,3,4, 3,3,2,1,0, 4,0,5,5,3, 3,0,1,2,3, 1,3,4,5,2], 
      // rds_BSRS:[],
        
      tutorials: [], 
      
      pS:"2",
      pN:"好",
      pI:"步",
      pP:[],
      pM:"",
      qufd:[], 
      pii:[], 

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
  chk_info() {

  let _tus = this.$route.params.id.split('&');
  let kk = {
            pI: _tus[0].split('=')[1],
            pN: _tus[1].split('=')[1], 
            pP: _tus[2].split('=')[1],
            };  
            this.pii = kk;
            this.pP = kk.pP;
            this.pI = kk.pI;
            this.pN = kk.pN; 

  }, 
 

  savePtst(){    
      // 題本 1 計算方式
      this.qufd[0]=
      Math.round((this.rds_BSRS[1]+this.rds_BSRS[2]+this.rds_BSRS[3]+this.rds_BSRS[4]+this.rds_BSRS[5]
                                                                          +this.rds_BSRS[6]+this.rds_BSRS[7]+this.rds_BSRS[8]+this.rds_BSRS[9]+this.rds_BSRS[10]
                                                                          +this.rds_BSRS[11]+this.rds_BSRS[12]+this.rds_BSRS[13]+this.rds_BSRS[14]+this.rds_BSRS[15]
                                                                          +this.rds_BSRS[16]+this.rds_BSRS[17]+this.rds_BSRS[18]+this.rds_BSRS[19]+this.rds_BSRS[20]
                                                                          +this.rds_BSRS[21]+this.rds_BSRS[22]+this.rds_BSRS[23]+this.rds_BSRS[24]+this.rds_BSRS[25]
                                                                          +this.rds_BSRS[26]+this.rds_BSRS[27]+this.rds_BSRS[28]+this.rds_BSRS[29]+this.rds_BSRS[30])/30 *100)/100
      ; 
      
      
      this.qufd[1]=
      Math.round( (this.cmpare1_length) *100)/100 
      
      ;
      
      
      
      this.qufd[2]=
      Math.round( ( this.rds_BSRS[1]+this.rds_BSRS[2]+this.rds_BSRS[3]+this.rds_BSRS[4]+this.rds_BSRS[5]
                  +this.rds_BSRS[6]+this.rds_BSRS[7]+this.rds_BSRS[8]+this.rds_BSRS[9]+this.rds_BSRS[10]
                  +this.rds_BSRS[11]+this.rds_BSRS[12]+this.rds_BSRS[13]+this.rds_BSRS[14]+this.rds_BSRS[15]
                  +this.rds_BSRS[16]+this.rds_BSRS[17]+this.rds_BSRS[18]+this.rds_BSRS[19]+this.rds_BSRS[20]
                  +this.rds_BSRS[21]+this.rds_BSRS[22]+this.rds_BSRS[23]+this.rds_BSRS[24]+this.rds_BSRS[25]
                  +this.rds_BSRS[26]+this.rds_BSRS[27]+this.rds_BSRS[28]+this.rds_BSRS[29]+this.rds_BSRS[30] /this.cmpare1_length ) *100)/100
      ;       
      
      

      var data = {   
                    // 填寫-玩家資料
                    name: this.pN, 
                    patient_ID  : this.pI, 
                    quiz_statu  : this.pS, 
                      
                    // 填寫-關卡資料
                    
                    play_lv: this.play_lv,
                    quiz_dtl    : this.rds_BSRS, 
                    quiz_fdbk   : this.qufd, 
                    
                    // 填寫-系統資料
                    quiz_time: this.transCurrentTime(this.cT), 
                    memo: "none",
                    tk_statu: 1, 
                 };

      PlayerService.create(data)
        .then(() => {
            Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '上傳成功',
            showConfirmButton: false,
            timer: 500
          }) 
        })
        .catch(e => { 
          
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: '上傳失敗',
            text:e,
            showConfirmButton: false,
            timer: 500
          })  ; 
        });  
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
  updateCurrentTime(){ this.cT = Date.now(); },
  transCurrentTime(idx){ return this.dayjs(idx).format("HH:mm:ss"); }, 
}, 
mounted() { 
  this.chk_info();
  this.interval = setInterval(this.updateCurrentTime, 1000);
  //  SeatDataService.getAll().on("value", this.onDataChange);  
   SeatDataService.getSome('pos').equalTo(this.play_lv).on("value", this.onDataChange);  
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
