<template> 
    <div class=" flex w-full overflow-y-auto h-screen">  
      <div class="flex flex-col" v-show="play_lv ==5"  > 
         <!-- // 這邊開始安排 ： 該次填寫進度 -->
         <a class ="mt-3 mr-10 flex justify-end text-lg text-gray-500 ">  〖 {{ pii.pI }} 〗 {{ pii.pN }} , {{ pii.pP }}  正在填寫 5.MICHIGAN HAND OUTCOMES </a>

        <v-list-item-group  color="primary" class="pt-10 pl-15"  >   
          <v-list-item v-for="(tutorial, inx) in tutorials" :key="inx"  @click="setActiveTutorial(tutorial, inx)" v-if="tutorial.qzSno == 5" >  
            <div class="grid grid-cols-1 gap-0.5">
            <div class="col-span-1" v-show="tutorial.sno_dtl !=99">  
              <span small class="text-white text-xs mr-5 p-1 px-3 justify-center rounded-3xl bg-yellow-500"   >
                  {{ tutorial.pos }} 
                  {{ tutorial.sno }}_{{ tutorial.sno_idx }} : {{ tutorial.sno_dtl }} 
              </span>
            </div> 
            <div class="col-span-1  "> 
                <span class="text-3xl text-green-700 font-semibold w-full">{{ tutorial.question }}</span>
            </div>  

            <div class="col-span-1">  
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
                    <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                  <v-radio-group  v-if="tutorial.sno_idx == 27" v-model="rds[27]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                    <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                  
                    <v-radio-group  v-if="tutorial.sno_idx == 28" v-model="rds[28]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                    <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                  
                    <v-radio-group  v-if="tutorial.sno_idx == 29" v-model="rds[29]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                    <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                    <v-radio-group  v-if="tutorial.sno_idx == 30" v-model="rds[30]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                    <v-radio color="red" class="text-white text-xs mr-5" v-if="quesopts !='' " :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

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

                  <!-- <table class="table-auto">
                    <thead>
                      <tr>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                      </tr>
                      <tr>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                      </tr>
                      <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                      </tr>
                    </tbody>
                  </table> -->

                  <table class="table-fixed">
                    <thead>
                      <tr>
                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left 
                                text-xs font-semibold text-gray-700   "
                        >
                          部位
                        </th>
                        <th
                          class="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 
                                text-left text-xs font-semibold text-gray-700  "
                        >
                          Overall Hand Function  
                        </th>
                        <th
                          class="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 
                                text-center text-xs font-semibold text-gray-700 uppercase "
                        >
                          Activities of Daily Living
                        </th>
                        <th
                          class="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 
                                text-center text-xs font-semibold text-gray-700 uppercase "
                        >
                          Aesthetics
                        </th>
                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 
                                text-left text-xs font-semibold text-gray-700 uppercase "
                        >
                          Satisfaction
                        </th> 
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white ">
                          <div class="flex"> 
                            <p class="text-gray-900 text-4xl font-black "> 右手 </p> 
                          </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white   ">
                          <p class="text-gray-900 text-4xl font-black ">
                            {{ Math.round( ((((rds[1]+rds[2]+rds[3]+rds[4]+rds[5]/1)-25 )*(-1))/20)*10000)/100 }} 
                          </p> 
                        </td> 

                        <td class="px-5 py-5 border-b border-gray-200 bg-white ">  
                          <span class="relative inline-block m-1 px-5 py-1 text-blue-900 leading-tight" >
                            <span aria-hidden class="absolute inset-0 bg-blue-200 opacity-50 rounded-full" ></span>
                            <p>Handed : </p>
                            <span class="relative text-4xl font-black">{{ Math.round( ((((rds[16]+rds[17]+rds[18]+rds[19]+rds[20]/1)-25 )*(-1))/20)*10000)/100 }}  </span>
                          </span> 
                          <span  class="relative inline-block m-1 px-5 py-1 text-green-900 leading-tight" >
                            <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full" ></span>
                            <p>Overall ADL :  </p>
                            <span class="relative text-4xl font-black">{{ ( Math.round( ((((rds[16]+rds[17]+rds[18]+rds[19]+rds[20]/1)-25 )*(-1))/20)*10000)/100 +  Math.round( ((((rds[21]+rds[22]+rds[23]+rds[24]+rds[25]+rds[26]+rds[27]/1)-35 )*(-1))/28)*10000)/100  ) /2}} </span>
                          </span> 
                        </td>  

                        <td class="px-5 py-5 border-b border-gray-200 bg-white font-black text-4xl "> 
                          <p class="text-gray-900">{{ Math.round( ((((rds[38]+rds[39]+rds[40]+rds[41]/1)-4 ))/16)*10000)/100 }}  </p> 
                        </td>

                        <td class="px-5 py-5 border-b border-gray-200 bg-white font-black text-4xl "> 
                          <p class="text-gray-900 ">{{ Math.round( ((((rds[46]+rds[47]+rds[48]+rds[49]+rds[50]+rds[51]/1)-30 )*(-1))/24)*10000)/100 }} </p> 
                        </td> 
                      </tr>

                      <tr> 
                        <td class="px-5 py-5 border-b border-gray-200 bg-white ">
                          <div class="flex"> 
                            <p class="text-gray-900 text-4xl font-black "> 左手 </p> 
                          </div>
                        </td>

                        <td class="px-5 py-5 border-b border-gray-200 bg-white   ">
                          <p class="text-gray-900 text-4xl font-black ">
                            {{ Math.round( ((((rds[1]+rds[2]+rds[3]+rds[4]+rds[5]/1)-25 )*(-1))/20)*10000)/100 }} 
                          </p> 
                        </td> 

                        <td class="px-5 py-5 border-b border-gray-200 bg-white ">  
                          <span class="relative inline-block m-1 px-5 py-1 text-blue-900 leading-tight" >
                            <span aria-hidden class="absolute inset-0 bg-blue-200 opacity-50 rounded-full" ></span>
                            <p>Handed : </p>
                            <span class="relative text-4xl font-black">{{ Math.round( ((((rds[16]+rds[17]+rds[18]+rds[19]+rds[20]/1)-25 )*(-1))/20)*10000)/100 }}  </span>
                          </span> 
                          <span  class="relative inline-block m-1 px-5 py-1 text-green-900 leading-tight" >
                            <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full" ></span>
                            <p>Overall ADL :  </p>
                            <span class="relative text-4xl font-black">{{ ( Math.round( ((((rds[16]+rds[17]+rds[18]+rds[19]+rds[20]/1)-25 )*(-1))/20)*10000)/100 +  Math.round( ((((rds[21]+rds[22]+rds[23]+rds[24]+rds[25]+rds[26]+rds[27]/1)-35 )*(-1))/28)*10000)/100  ) /2}} </span>
                          </span> 
                        </td>  

                        <td class="px-5 py-5 border-b border-gray-200 bg-white font-black text-4xl "> 
                          <p class="text-gray-900">{{ Math.round( ((((rds[38]+rds[39]+rds[40]+rds[41]/1)-4 ))/16)*10000)/100 }}  </p> 
                        </td>

                        <td class="px-5 py-5 border-b border-gray-200 bg-white font-black text-4xl "> 
                          <p class="text-gray-900 ">{{ Math.round( ((((rds[46]+rds[47]+rds[48]+rds[49]+rds[50]+rds[51]/1)-30 )*(-1))/24)*10000)/100 }} </p> 
                        </td> 
                      </tr> 
                    </tbody>
                  </table>

                  <div class ="flex my-10"> 
                   
                    <div class ="mx-5 text-lg font-black">  

                      <span
                        class="relative inline-block m-1 px-3 py-1 font-semibold text-red-900 leading-tight"
                      >
                        <span aria-hidden class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative"> Work : {{ Math.round( ((((rds[28]+rds[29]+rds[30]+rds[31]+rds[32]/1)-5 ))/20)*10000)/100 }}    </span>
                      </span> 
                      <span
                        class="relative inline-block m-1 px-3 py-1 font-semibold text-yellow-900 leading-tight"
                      >
                        <span aria-hidden class="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">Pain : {{ Math.round( ((((rds[33]+rds[34]+rds[35]+rds[36]+rds[37]/1)-25 )*(-1))/20)*10000)/100 }}   </span>
                      </span> 
                    </div> 
                    <div class ="mx-5"> 
                      
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

                  <td class="w-1/6"   >
                    <span class=" text-lg font-black"> 【 1~10 】 </span>
                    <span class="ml-5 flex" v-for="n in rds.length"  v-if="n >= 1 && n <= 10" > {{ n }} 題: {{ rds[n] }}  </span> 
                  </td> 
                  <td class="w-1/6"   >
                    <span class=" text-lg font-black"> 【 11~20 】 </span>
                    <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 11 && n <= 20" > {{ n }} 題: {{ rds[n] }}  </span> 
                  </td> 
                  <td class="w-1/6"   >
                    <span class=" text-lg font-black"> 【 21~30 】</span>
                    <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 21 && n <= 30" > {{ n }} 題: {{ rds[n] }}  </span> 
                  </td>  
                  <td class="w-1/6"   >
                    <span class=" text-lg font-black"> 【 31~40 】</span>
                    <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 31 && n <= 40" > {{ n }} 題: {{ rds[n] }}  </span> 
                  </td> 

                  <td class="w-1/6"   >
                    <span class=" text-lg font-black"> 【 41~50 】</span>
                    <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 41 && n <= 50" > {{ n }} 題: {{ rds[n] }}  </span> 
                  </td> 

                  <td class="w-1/6"   >
                    <span class=" text-lg font-black"> 【 51~60 】</span>
                    <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 51 && n <= 60" > {{ n }} 題: {{ rds[n] }}  </span> 
                  </td> 
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
                    @click="savePtst(5)" >
              填答完成
      </button> 
      </div> 
       
    </div>
</template>
 

<script>
 
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
        play_lv:'5',
        // - - - - - 
        selectedButton: "",
        //- - - - -

      msg:"",
      dialog: false,
      dialog2: false,
      cut_opts:['術前','術後一個月','術後三個月','術後四個月','術後六個月','術後九個月','術後一年','術後兩年','術後三年'], 
 

      menu2:false,
      DaTe: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10), 
      tab:"k0",
      // radios:[],
      // rds:[0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, ],
      
      // rds:[0, 3,3,4,2,1, 2,2,2,3,2, 2,3,4,2,2, 1,2,3,1,1, 5,3,2,1,2, 1,2,3,2,1, 2,3,2,4,5, 5,5,5,1,1, 1,3,3,5,4, 5,4,4,2,5, 4,2,3,3,3, 3,3],
      rds:[],
      
      
      
      // rds:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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
      pii:[], 

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
            this.qufd[0]=Math.round( ((((this.rds[28]+this.rds[29]+this.rds[30]+this.rds[31]+this.rds[32]/1)-5 ))/20)*10000)/100; 
            this.qufd[1]=Math.round( ((((this.rds[33]+this.rds[34]+this.rds[35]+this.rds[36]+this.rds[37]/1)-25 )*(-1))/20)*10000)/100 ;
            
        

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
    this.chk_info();
    this.interval = setInterval(this.updateCurrentTime, 1000);
    //  SeatDataService.getAll().on("value", this.onDataChange);  
     SeatDataService.getSome('pos').equalTo(this.play_lv).on("value", this.onDataChange); 
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
