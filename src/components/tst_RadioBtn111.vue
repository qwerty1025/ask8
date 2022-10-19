<template> 
    <div class=" flex w-full"> 
        
      <div class="overflow-y-auto  w-full h-screen" v-show="play_lv ==1"> 
       <!-- // 這邊開始安排 ： 該次填寫進度 -->
        <a class ="mt-3 mr-10 flex justify-end text-lg text-gray-500 ">  〖 {{ pii.pI }} 〗 {{ pii.pN }} , {{ pii.pP }}  正在填寫 </a>
ssssss
        <v-list-item-group  color="primary" class="pt-2 pl-15"  >   
        <v-list-item v-for="(tutorial, inx) in tutorials" :key="inx"  @click="setActiveTutorial(tutorial, inx)" v-if="tutorial.qzSno == 1" >  
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

                  <table class="table-auto">
                    <thead>
                      <tr> 
                        <th
                          class="px-5 py-1 border-b-2 border-gray-200 bg-gray-100 
                                text-left text-xs font-semibold text-gray-700 uppercase "
                        >
                        PHYS :
                        </th>
                        <th
                          class="px-5 py-1 border-b-2 border-gray-200 bg-gray-100 
                                text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                        PSYCH :
                        </th> 
                        <th
                          class="px-5 py-1 border-b-2 border-gray-200 bg-gray-100 
                                text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                        SOCIAL :
                        </th> 
                        <th
                          class="px-5 py-1 border-b-2 border-gray-200 bg-gray-100 
                                text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                        ENVIR :
                        </th> 
                      </tr>
                    </thead>
                    <tbody>
                      <tr>  
                        <td class="px-5 py-5 border-b border-gray-200 bg-white  "> 
                          <p class="text-gray-900 font-black text-6xl whitespace-no-wrap">
                            <span class="w-1/4 text-6xl font-black">   
                              {{ Math.round( ((((((6-rds[3])+(6-rds[4])+rds[10]+rds[15]+rds[16]+rds[17]+rds[18])/7)*4)-4)*(100/16)) *100)/100 }}  
                            </span> 
                          </p> 
                        </td>  
                        
                        <td class="px-5 py-5 border-b border-gray-200 bg-white  "> 
                          <p class="text-gray-900 font-black text-6xl whitespace-no-wrap">
                              {{ Math.round( ((((rds[5] + rds[6] +rds[7]+rds[11]+rds[19]+(6-rds[26]))/6)*4)-4)*(100/16) *100)/100 }} 
                          </p> 
                        </td>

                        <td class="px-5 py-5 border-b border-gray-200 bg-white  "> 
                          <p class="text-gray-900 font-black text-6xl whitespace-no-wrap">
                            {{ Math.round( (((((rds[20] +rds[21]+rds[22]+rds[27])/4)*4)-4)*(100/16)) *100)/100 }}  
                          </p> 
                        </td>

                        <td class="px-5 py-5 border-b border-gray-200 bg-white  "> 
                          <p class="text-gray-900 font-black text-6xl whitespace-no-wrap">
                            {{ Math.round( ( (((rds[8] + rds[9] +rds[12] +rds[13] +rds[14] +rds[23] +rds[24] +rds[25] +rds[28]  )/9)*4)-4)*(100/16)  *100)/100 }}
                          </p> 
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

                    <td class="w-1/4"   >
                      <span class=" text-lg font-black"> 【 1~10 】 </span>
                      <span class="ml-5 flex" v-for="n in rds.length"  v-if="n >= 1 && n <= 10" > {{ n }} 題: {{ rds[n] }}  </span> 
                    </td> 
                    <td class="w-1/4"   >
                      <span class=" text-lg font-black"> 【 11~20 】 </span>
                      <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 11 && n <= 20" > {{ n }} 題: {{ rds[n] }}  </span> 
                    </td> 
                    <td class="w-1/4"   >
                      <span class=" text-lg font-black"> 【 21~28 】</span>
                      <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 21 && n <= 28" > {{ n }} 題: {{ rds[n] }}  </span> 
                    </td>  
                  </div> 
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>  
          </div>
        </div>
        
        
      <button class="py-5 m-5 bg-red-500 w-full hover:bg-red-400 text-white 
                    font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" 
                    @click="savePtst(1)" >
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
  name: "Quiz-3",  
  data() {
    return { 
      // - - - - - 
        currentTime: Date.now(),
        cT:"",
        play_lv:'1',
        // - - - - -  
        //- - - - -
  
  
      rds:[0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0 ],
      // rds:[0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,  0,0,0,0,0, 0,0,0,0,0 ],
      // - - - -  
      tutorials: [], 
      
      pS:"",
      pN:"Test_0925",
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
    
    savePtst(idx){    
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
              title: '修改成功',
              showConfirmButton: false,
              timer: 500
            }) 
          })
          .catch(e => { console.log(e); });  
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
    transCurrentTime(idx){ return this.dayjs(idx).format("YYYY-MM-DD HH:mm:ss"); },
 
// this.cT = Date.now();
    
  }, 
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