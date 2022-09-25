<template> 
    <div class=" flex w-full overflow-y-auto h-screen">   
      <div class="flex flex-col" v-show="play_lv ==4"  > 
         <!-- // 這邊開始安排 ： 該次填寫進度 -->
         <a class ="mt-3 mr-10 flex justify-end text-lg text-gray-500 ">  〖 {{ pii.pI }} 〗 {{ pii.pN }} , {{ pii.pP }}  正在填寫 7.SF-36</a>

        <v-list-item-group  color="primary" class="pt-10 pl-15"  >   
          <v-list-item v-for="(tutorial, inx) in tutorials" :key="inx"  @click="setActiveTutorial(tutorial, inx)" v-if="tutorial.qzSno == 4" >  
            <div class="grid grid-cols-1 gap-0.5">
            <div class="col-span-1" v-show="tutorial.sno_dtl !=99">  
              <span small class="text-white text-xs mr-5 p-1 px-3 justify-center rounded-3xl bg-yellow-500"   >
                  {{ 7 }} 
                  {{ tutorial.sno }}_{{ tutorial.sno_idx }} : {{ tutorial.sno_dtl }} 
              </span>
            </div> 
            <div class="col-span-1  "> 
                <span class="text-3xl text-green-700 font-semibold w-full">{{ tutorial.question }}</span>
            </div>  

            <div class="col-span-1">  
              <v-container class="px-0" fluid >   
                 <v-radio-group  v-if="tutorial.sno_idx == 1" v-model="rds[1]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                   <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '0' " :label="quesopts" :value="5" ></v-radio>   
                   <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '1' " :label="quesopts" :value="4.4" ></v-radio>  
                   <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '2' " :label="quesopts" :value="3.4" ></v-radio>  
                   <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '3' " :label="quesopts" :value="2" ></v-radio>  
                   <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '4' " :label="quesopts" :value="1" ></v-radio>  
                    <!-- <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1" ></v-radio>   -->
                  <!-- <v-radio dense color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1" ></v-radio>   -->
                  </v-radio-group>
                  
                  
                  
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
                    {{ rds[21]}}
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '0' " :label="quesopts" :value="6" ></v-radio>   
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '1' " :label="quesopts" :value="5.4" ></v-radio>  
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '2' " :label="quesopts" :value="4.2" ></v-radio>  
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '3' " :label="quesopts" :value="3.4" ></v-radio>  
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '4' " :label="quesopts" :value="2" ></v-radio>    
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '5' " :label="quesopts" :value="1" ></v-radio>    
                    
                  </v-radio-group>
                  <v-radio-group  v-if="tutorial.sno_idx == 22" v-model="rds[22]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                   
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '0' " :label="quesopts" :value="5" ></v-radio>   
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '1' " :label="quesopts" :value="4" ></v-radio>  
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '2' " :label="quesopts" :value="3" ></v-radio>  
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '3' " :label="quesopts" :value="2" ></v-radio>  
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '4' " :label="quesopts" :value="1" ></v-radio>    
                  </v-radio-group>
                  <v-radio-group  v-if="tutorial.sno_idx == 23" v-model="rds[23]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '0' " :label="quesopts" :value="6" ></v-radio>   
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '1' " :label="quesopts" :value="5" ></v-radio>  
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '2' " :label="quesopts" :value="4" ></v-radio>  
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '3' " :label="quesopts" :value="3" ></v-radio>  
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '4' " :label="quesopts" :value="2" ></v-radio>  
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '4' " :label="quesopts" :value="1" ></v-radio>   
                  </v-radio-group>
                  <v-radio-group  v-if="tutorial.sno_idx == 24" v-model="rds[24]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                    <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                  <v-radio-group  v-if="tutorial.sno_idx == 25" v-model="rds[25]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                    <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                  <v-radio-group  v-if="tutorial.sno_idx == 26" v-model="rds[26]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '0' " :label="quesopts" :value="6" ></v-radio>   
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '1' " :label="quesopts" :value="5" ></v-radio>  
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '2' " :label="quesopts" :value="4" ></v-radio>  
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '3' " :label="quesopts" :value="3" ></v-radio>  
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '4' " :label="quesopts" :value="2" ></v-radio>  
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '4' " :label="quesopts" :value="1" ></v-radio> 
                  </v-radio-group>
                  <v-radio-group  v-if="tutorial.sno_idx == 27" v-model="rds[27]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '0' " :label="quesopts" :value="6" ></v-radio>   
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '1' " :label="quesopts" :value="5" ></v-radio>  
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '2' " :label="quesopts" :value="4" ></v-radio>  
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '3' " :label="quesopts" :value="3" ></v-radio>  
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '4' " :label="quesopts" :value="2" ></v-radio>  
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '4' " :label="quesopts" :value="1" ></v-radio> 
                  </v-radio-group>
                  
                  <v-radio-group  v-if="tutorial.sno_idx == 28" v-model="rds[28]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                   <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                
                  <v-radio-group  v-if="tutorial.sno_idx == 29" v-model="rds[29]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                    <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                  <v-radio-group  v-if="tutorial.sno_idx == 30" v-model="rds[30]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '0' " :label="quesopts" :value="6" ></v-radio>   
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '1' " :label="quesopts" :value="5" ></v-radio>  
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '2' " :label="quesopts" :value="4" ></v-radio>  
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '3' " :label="quesopts" :value="3" ></v-radio>  
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '4' " :label="quesopts" :value="2" ></v-radio>  
                    <v-radio dense color="red" class="text-white text-xs mr-5" v-if="index == '4' " :label="quesopts" :value="1" ></v-radio> 
                  </v-radio-group>

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

                    <v-radio-group  v-if="tutorial.sno_idx == 58" v-model="rds[58]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                      <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                    <v-radio-group  v-if="tutorial.sno_idx == 59" v-model="rds[59]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                      <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                    <v-radio-group  v-if="tutorial.sno_idx == 60" v-model="rds[60]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                      <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                      
                    <v-radio-group  v-if="tutorial.sno_idx == 61" v-model="rds[61]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                      <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                    <v-radio-group  v-if="tutorial.sno_idx == 62" v-model="rds[62]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                      <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                    <v-radio-group  v-if="tutorial.sno_idx == 63" v-model="rds[63]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                      <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
              </v-container>
            </div> 
          </div>  
                      
          </v-list-item>  
        </v-list-item-group>  

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
                  <div class="grid grid-cols-3 gap-0">
                    
                    <div class="col-span-1">
                      <tr class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block m-1 px-5 py-1 text-red-900 leading-tight" >
                          <span aria-hidden class="absolute inset-0 bg-red-200 opacity-50 rounded-full" ></span>
                          <p>PCS : </p>
                          <span class="relative text-4xl font-black"> 
                                    {{ (50+( 

                                    (((rds[3]+rds[4]+rds[5]+rds[6]+rds[7]+rds[8]+rds[9]+rds[10]+rds[11]+rds[12]-10)/20*100-84.52404)/22.8949)*AGG_PHYS_CST[1]
                                    +((( rds[13]+rds[14]+rds[15]+rds[16]  -4)/4*100-81.19907)/33.79729)*AGG_PHYS_CST[2]
                                    +((( rds[21] +rds[22]  -2)/10*100-75.49196)/23.55879)*AGG_PHYS_CST[3]
                                    +(((  rds[1] +rds[33] +rds[34] +rds[35] +rds[36]  -5)/20*100-72.21316)/20.16964)*AGG_PHYS_CST[4]
                                    +((( rds[23]+rds[27]+rds[29]+rds[31]  -4)/20*100-61.05453)/20.86942)*AGG_PHYS_CST[5]
                                    +((( rds[20]+rds[32]  -2)/8*100-83.59753)/22.37642)*AGG_PHYS_CST[6]
                                    +((( rds[17]+rds[18]+rds[19]  -3)/3*100-81.29467)/33.02717)*AGG_PHYS_CST[7]
                                    +((( rds[24]+rds[25]+rds[26]+rds[28]+rds[30]  -5)/25*100-74.84212)/18.01189)*AGG_PHYS_CST[8]

                                    )*10).toFixed(2) }}   
                            </span>
                        </span> 
                      </tr>
                      <tr class="px-2 py-5 border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block m-1 px-5 py-1 text-red-900 leading-tight" >
                          <span aria-hidden class="absolute inset-0 bg-red-200 opacity-50 rounded-full" ></span>
                          <p>MCS : </p>
                          <span class="relative text-4xl font-black"> 
                           
                          
                           {{ (50+( 
 
                              (((rds[3]+rds[4]+rds[5]+rds[6]+rds[7]+rds[8]+rds[9]+rds[10]+rds[11]+rds[12]-10)/20*100-84.52404)/22.8949)*AGG_MENT_CST[1]
                             +((( rds[13]+rds[14]+rds[15]+rds[16]  -4)/4*100-81.19907)/33.79729)*AGG_MENT_CST[2]
                             +((( rds[21] +rds[22]  -2)/10*100-75.49196)/23.55879)*AGG_MENT_CST[3]
                             +(((  rds[1] +rds[33] +rds[34] +rds[35] +rds[36]  -5)/20*100-72.21316)/20.16964)*AGG_MENT_CST[4]
                             +((( rds[23]+rds[27]+rds[29]+rds[31]  -4)/20*100-61.05453)/20.86942)*AGG_MENT_CST[5]
                             +((( rds[20]+rds[32]  -2)/8*100-83.59753)/22.37642)*AGG_MENT_CST[6]
                             +((( rds[17]+rds[18]+rds[19]  -3)/3*100-81.29467)/33.02717)*AGG_MENT_CST[7]
                             +((( rds[24]+rds[25]+rds[26]+rds[28]+rds[30]  -5)/25*100-74.84212)/18.01189)*AGG_MENT_CST[8]
 
                           )*10).toFixed(2) }} 
                            
                           </span>
                        </span> 
                      </tr>
                      <tr class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span  class="relative inline-block m-1 px-5 py-1 text-red-900 leading-tight" >
                          <span aria-hidden class="absolute inset-0 bg-red-200 opacity-50 rounded-full" ></span>
                          <p>AGG_PHYS : </p>
                          <span class="relative text-4xl font-black"> 
                                    {{  ( 

                            (((rds[3]+rds[4]+rds[5]+rds[6]+rds[7]+rds[8]+rds[9]+rds[10]+rds[11]+rds[12]-10)/20*100-84.52404)/22.8949)*AGG_PHYS_CST[1]
                            +((( rds[13]+rds[14]+rds[15]+rds[16]  -4)/4*100-81.19907)/33.79729)*AGG_PHYS_CST[2]
                            +((( rds[21] +rds[22]  -2)/10*100-75.49196)/23.55879)*AGG_PHYS_CST[3]
                            +(((  rds[1] +rds[33] +rds[34] +rds[35] +rds[36]  -5)/20*100-72.21316)/20.16964)*AGG_PHYS_CST[4]
                            +((( rds[23]+rds[27]+rds[29]+rds[31]  -4)/20*100-61.05453)/20.86942)*AGG_PHYS_CST[5]
                            +((( rds[20]+rds[32]  -2)/8*100-83.59753)/22.37642)*AGG_PHYS_CST[6]
                            +((( rds[17]+rds[18]+rds[19]  -3)/3*100-81.29467)/33.02717)*AGG_PHYS_CST[7]
                            +((( rds[24]+rds[25]+rds[26]+rds[28]+rds[30]  -5)/25*100-74.84212)/18.01189)*AGG_PHYS_CST[8]

                            ).toFixed(2) }}   
                            </span>
                        </span> 
                      </tr>
                      <tr class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span  class="relative inline-block m-1 px-5 py-1 text-red-900 leading-tight" >
                            <span aria-hidden class="absolute inset-0 bg-red-200 opacity-50 rounded-full" ></span>
                            <p>AGG_MENT : </p>
                            <span class="relative text-4xl font-black"> 
                           
                          
                          {{  ( 

                             (((rds[3]+rds[4]+rds[5]+rds[6]+rds[7]+rds[8]+rds[9]+rds[10]+rds[11]+rds[12]-10)/20*100-84.52404)/22.8949)*AGG_MENT_CST[1]
                            +((( rds[13]+rds[14]+rds[15]+rds[16]  -4)/4*100-81.19907)/33.79729)*AGG_MENT_CST[2]
                            +((( rds[21] +rds[22]  -2)/10*100-75.49196)/23.55879)*AGG_MENT_CST[3]
                            +(((  rds[1] +rds[33] +rds[34] +rds[35] +rds[36]  -5)/20*100-72.21316)/20.16964)*AGG_MENT_CST[4]
                            +((( rds[23]+rds[27]+rds[29]+rds[31]  -4)/20*100-61.05453)/20.86942)*AGG_MENT_CST[5]
                            +((( rds[20]+rds[32]  -2)/8*100-83.59753)/22.37642)*AGG_MENT_CST[6]
                            +((( rds[17]+rds[18]+rds[19]  -3)/3*100-81.29467)/33.02717)*AGG_MENT_CST[7]
                            +((( rds[24]+rds[25]+rds[26]+rds[28]+rds[30]  -5)/25*100-74.84212)/18.01189)*AGG_MENT_CST[8]

                          ).toFixed(2) }} 
                           
                          </span>
                        </span> 
                      </tr>
                    </div>  
                    <div class="col-span-1">
                      <tr class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block m-1 px-5 py-1 text-blue-900 leading-tight" >
                          <span aria-hidden class="absolute inset-0 bg-blue-200 opacity-50 rounded-full" ></span>
                          <p>生理功能 PF :  </p>
                          <span class="relative text-4xl font-black">{{  rds[3]+rds[4]+rds[5]+rds[6]+rds[7]+rds[8]+rds[9]+rds[10]+rds[11]+rds[12]   }}  </span>
                           
                          <span v-show="show_dtl == true" class="relative text-4xl text-blue-200 font-black">{{ (((rds[3]+rds[4]+rds[5]+rds[6]+rds[7]+rds[8]+rds[9]+rds[10]+rds[11]+rds[12]-10)/20*100-84.52404)/22.8949).toFixed(2) }}  </span>
                        </span> 
                      </tr>
                      <tr class="px-2 py-5 border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block m-1 px-5 py-1 text-blue-900 leading-tight" >
                          <span aria-hidden class="absolute inset-0 bg-blue-200 opacity-50 rounded-full" ></span>
                          <p>角色限制－生理 RP :  </p>
                          <span class="relative text-4xl font-black">{{  rds[13]+rds[14]+rds[15]+rds[16]  }}  </span>
                          
                          <span v-show="show_dtl == true" class="relative text-4xl text-blue-200 font-black">{{ ((( rds[13]+rds[14]+rds[15]+rds[16]  -4)/4*100-81.19907)/33.79729).toFixed(2) }}  </span>
                        </span> 
                      </tr>
                      <tr class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span  class="relative inline-block m-1 px-5 py-1 text-blue-900 leading-tight" >
                          <span aria-hidden class="absolute inset-0 bg-blue-200 opacity-50 rounded-full" ></span>
                          <p>身體疼痛 BP :  </p>
                          <span class="relative text-4xl font-black">{{  rds[21] +rds[22]   }}  </span>
                           
                          <span v-show="show_dtl == true" class="relative text-4xl text-blue-200 font-black">{{ ((( rds[21] +rds[22]  -2)/10*100-75.49196)/23.55879).toFixed(2) }}  </span>
                        </span> 
                      </tr>
                      <tr class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span  class="relative inline-block m-1 px-5 py-1 text-blue-900 leading-tight" >
                            <span aria-hidden class="absolute inset-0 bg-blue-200 opacity-50 rounded-full" ></span>
                            <p>一般自覺健康 GH : </p>
                            <span class="relative text-4xl font-black">{{  rds[1] +rds[33] +rds[34] +rds[35] +rds[36]  }}  </span>
                             
                            <span v-show="show_dtl == true" class="relative text-4xl text-blue-200 font-black">{{ (((  rds[1] +rds[33] +rds[34] +rds[35] +rds[36]  -5)/20*100-72.21316)/20.16964).toFixed(2) }}  </span>
                        </span>  
                      </tr>
                    </div>
                    <div class="col-span-1">
                      <tr class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block m-1 px-5 py-1 text-blue-900 leading-tight" >
                          <span aria-hidden class="absolute inset-0 bg-blue-200 opacity-50 rounded-full" ></span>
                          <p>活力狀態 VT :  </p>
                          <span class="relative text-4xl font-black">{{   rds[23]+rds[27]+rds[29]+rds[31]   }}  </span>
                          
                            <span v-show="show_dtl == true" class="relative text-4xl text-blue-200 font-black">{{ ((( rds[23]+rds[27]+rds[29]+rds[31]  -4)/20*100-61.05453)/20.86942).toFixed(2) }}  </span>
                        </span> 
                      </tr>
                      <tr class="px-2 py-5 border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block m-1 px-5 py-1 text-blue-900 leading-tight" >
                          <span aria-hidden class="absolute inset-0 bg-blue-200 opacity-50 rounded-full" ></span>
                          <p>社會功能 SF :  </p>
                          <span class="relative text-4xl font-black">{{   rds[20]+rds[32]  }}  </span>
                          
                            <span v-show="show_dtl == true" class="relative text-4xl text-blue-200 font-black">{{ ((( rds[20]+rds[32]  -2)/8*100-83.59753)/22.37642).toFixed(2) }}  </span>
                        </span> 
                      </tr>
                      <tr class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span  class="relative inline-block m-1 px-5 py-1 text-blue-900 leading-tight" >
                          <span aria-hidden class="absolute inset-0 bg-blue-200 opacity-50 rounded-full" ></span>
                          <p>角色限制－情緒 RE :  </p>
                          <span class="relative text-4xl font-black">{{ (   rds[17]+rds[18]+rds[19] ) }} </span>
                        
                            <span v-show="show_dtl == true" class="relative text-4xl text-blue-200 font-black">{{ ((( rds[17]+rds[18]+rds[19]  -3)/3*100-81.29467)/33.02717).toFixed(2) }}  </span>
                        </span> 
                      </tr>
                      <tr class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span  class="relative inline-block m-1 px-5 py-1 text-blue-900 leading-tight" >
                            <span aria-hidden class="absolute inset-0 bg-blue-200 opacity-50 rounded-full" ></span>
                            <p>心理健康 MH : </p>
                            <span class="relative text-4xl font-black">{{ ( rds[24]+rds[25]+rds[26]+rds[28]+rds[30]  ) }} </span>
                           
                            <span v-show="show_dtl == true" class="relative text-4xl text-blue-200 font-black">{{ ((( rds[24]+rds[25]+rds[26]+rds[28]+rds[30]  -5)/25*100-74.84212)/18.01189).toFixed(2) }} </span>
                        </span>  
                      </tr>
                    </div>
                  </div>
 
                </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel >
                <v-expansion-panel-header>
                    <a class="rounded-full text-lg bg-gray-100 px-5"> 詳細答題內容 </a> 
                </v-expansion-panel-header>

                <v-expansion-panel-content>   
                  <span class=" text-base"> 詳細答題內容 </span>
                  <div class = "m-5 flex"> 

                  <td class="w-1/4"   >
                    <span class=" text-lg font-black"> 【 1~10 】 </span>
                    <span class="ml-5 flex" v-for="n in rds.length"  v-if="n >= 1 && n <= 10" > {{ n }} 題: {{ rds[n] }}  </span> 
                  </td> 
                  <td class="w-1/4"   >
                    <span class=" text-lg font-black"> 【 11~20 】 </span>
                    <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 11 && n <= 20" > {{ n }} 題: {{ rds[n] }}  </span> 
                  </td> 
                  <td class="w-1/4"   >
                    <span class=" text-lg font-black"> 【 21~30 】</span>
                    <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 21 && n <= 30" > {{ n }} 題: {{ rds[n] }}  </span> 
                  </td>  
                  <td class="w-1/4"   >
                    <span class=" text-lg font-black"> 【 31~36 】</span>
                    <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 31 && n <= 36" > {{ n }} 題: {{ rds[n] }}  </span> 
                  </td> 

                  <!-- <td class="w-1/6"   >
                    <span class=" text-lg font-black"> 【 41~50 】</span>
                    <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 41 && n <= 50" > {{ n }} 題: {{ rds[n] }}  </span> 
                  </td> 

                  <td class="w-1/6"   >
                    <span class=" text-lg font-black"> 【 51~60 】</span>
                    <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 51 && n <= 60" > {{ n }} 題: {{ rds[n] }}  </span> 
                  </td>--> 
                </div> 
                    
                    
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>  
          </div>
        </div>

        <!-- <button class="py-5 py-2 px-4 m-2 bg-red-500 w-full hover:bg-red-400 text-white 
                      font-bold border-b-4 border-red-700 hover:border-red-500 rounded" 
                      @click="savePtst(2)" >
                送出答案
        </button>  -->

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
 
//  import Swal from 'sweetalert2';
// window.Swal = Swal;

export default {
  name: "tutorials-list", 

  data() {
    return { 
      // - - - - - 
        currentTime: Date.now(),
        cT:"",
        play_lv:'4',
        // - - - - - 
        selectedButton: "",
        //- - - - -
        
        AGG_PHYS_CST:[0,0.42402,0.35119,0.31754,0.24954,0.02877,-0.00753,-0.19206,-0.22069], 
        AGG_MENT_CST:[0,-0.22999,-0.12329,-0.09731,-0.01571,0.23534,0.26876,0.43407,0.48581], 
        //- - - - -

        msg:"",
        show_dtl:false,
        dialog: false,
        dialog2: false,
        cut_opts:['術前','術後一個月','術後三個月','術後四個月','術後六個月','術後九個月','術後一年','術後兩年','術後三年'], 
  

        menu2:false,
        DaTe: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10), 
        tab:"k0",
        // radios:[],
        rds:[0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, ],
      
      // rds:[0, 3,3,4,2,1, 2,2,2,3,2, 2,3,4,2,2, 1,2,3,1,1, 5,3,2,1,2, 1,2,3,2,1, 2,3,2,4,5, 5,5,5,1,1, 1,3,3,5,4, 5,4,4,2,5, 4,2,3,3,3, 3,3],
      
      // rds:[0, 1,5,1,1,2 ,2,2,2,1,1 ,2,3,1,1,1 ,1,1,1,1,3 ,4.2,4,3,3,4 ,5,4,5,4,4 ,5,4,3,3,3 ,3],
      
      
      // rds:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      // rds_BSRS:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      // radios:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      // radios1:"null",
      // radios2:"null",
      // ex7:[],
      // ex8: [ { ans: "", },{ ans: "", },{ ans: "", },{ ans: "", },{ ans: "", }],
      // - - - -  
      tutorials: [], 
      
      pS:"",
      pN:"",
      pI:"",
      pP:[],
      pM:"",
      qufd:[],
      pii:[], 
 
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
            this.qufd[0]=Math.round(((((((6-this.rds[3])+(6-this.rds[4])+this.rds[10]+this.rds[15]+this.rds[16]+this.rds[17]+this.rds[18])/7)*4)-4)*(100/16))*10)/10; 
            this.qufd[1]=Math.round( ((((this.rds[5] + this.rds[6] +this.rds[7]+this.rds[11]+this.rds[19]+(6-this.rds[26]))/6)*4)-4)*(100/16)*10)/10;
            this.qufd[2]=Math.round( ((((this.rds[20] + this.rds[21] +this.rds[22]+this.rds[27]                            )/4)*4)-4)*(100/16)*10)/10;       
            this.qufd[3]=Math.round( ((((this.rds[8] + this.rds[9] +this.rds[12] +this.rds[13] +this.rds[14] +this.rds[23] +this.rds[24] +this.rds[25] +this.rds[28]  )/9)*4)-4)*(100/16)*10)/10;
 
        

        var data = {   
                      // 填寫-玩家資料
                      name: this.pN, 
                      patient_ID  : this.pI, 
                      quiz_statu  : this.pS, 
                        
                      // 填寫-關卡資料
                      
                      play_lv: this.play_lv,
                      quiz_dtl    : this.rds, 
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

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
     
    
  }, 
  mounted() {
    // console.log(_tutorials.title);  
    this.chk_info();
    this.interval = setInterval(this.updateCurrentTime, 1000);
     SeatDataService.getAll().on("value", this.onDataChange);  
    //  SeatDataService.getSome('pos').equalTo(this.play_lv).on("value", this.onDataChange); 
    //  SeatDataService.getSome('pos').equalTo('3').on("value", this.onDataChange); 
  },
  beforeDestroy() {
     SeatDataService.getAll().off("value", this.onDataChange);
  },  
};
</script>  