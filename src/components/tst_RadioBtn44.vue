<template> 
    <div class=" flex w-full"> 
        
      <div class="overflow-y-auto  w-full h-screen" v-show="play_lv ==3"> 
         <!-- // 這邊開始安排 ： 該次填寫進度 -->
         <a class ="mt-3 mr-10 flex justify-end text-lg text-gray-500 ">  〖 {{ pii.pI }} 〗 {{ pii.pN }} , {{ pii.pP }}  正在填寫 4.上肢功能評估問卷(Quick-DASH) </a>

        <div  color="primary" class="pt-10 pl-15"  >   
        <div v-for="(tutorial, inx) in tutorials" :key="inx" 
                     @click="setActiveTutorial(tutorial, inx)" 
                     v-if="tutorial.qzSno == 2 " >  
        <div class="flex-row ml-5"
          v-show="tutorial.sno_idx == 1 |tutorial.sno_idx == 7 | tutorial.sno_idx == 8 | 
                       tutorial.sno_idx == 9 | tutorial.sno_idx == 10 | tutorial.sno_idx == 10 |
                       tutorial.sno_idx == 14| tutorial.sno_idx == 18 | tutorial.sno_idx == 16 |
                       tutorial.sno_idx == 27| tutorial.sno_idx == 30 |tutorial.sno_idx >= 32 |  
                       tutorial.sno_idx == 24 | tutorial.sno_idx == 25 | tutorial.sno_idx == 23"  
          
          >
          <div class="my-3" >  
            <span small class="text-white text-xs mr-5 p-1 px-3 justify-center rounded-3xl bg-yellow-500"   >
                <!-- {{ tutorial.pos }}  -->
                4
                {{ tutorial.sno }}_{{ tutorial.sno_idx }} : {{ tutorial.sno_dtl }} 
            </span>
          </div> 
          <div class=""> 
              <span class="text-3xl text-green-700 font-semibold w-full">{{ tutorial.question }}</span>
          </div>   
          <div class=" ">  
              <div class=" " v-for="nn in 41"  v-show="tutorial.sno_dtl != 99" >   
                  <div  v-if="tutorial.sno_idx == nn" v-model="rds[tutorial.sno_idx]"  
                        v-for="(quesopts, index) in tutorial.quesopts" :key="index" class=""> 
                        <radio v-model="rds[tutorial.sno_idx]" :value="index+1"  
                                class="mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl" >
                          {{ quesopts }}
                        </radio> 
                  </div>  
              </div> 
             
          </div> 
        </div>  
                    
        </div> 
          
      </div> 
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
                        <!-- <th
                          class="px-5 py-1 border-b-2 border-gray-200 bg-gray-100 
                                text-left text-xs font-semibold text-gray-700 uppercase "
                        >
                        DASH失能/症狀分數
                        </th> -->
                        <th
                          class="px-5 py-1 border-b-2 border-gray-200 bg-gray-100 
                                text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                        Quick DASH
                        </th> 
                        <th
                          class="px-5 py-1 border-b-2 border-gray-200 bg-gray-100 
                                text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                        工作自選
                        </th>
                        <th
                          class="px-5 py-1 border-b-2 border-gray-200 bg-gray-100 
                                text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                        音樂自選
                        </th> 
                      </tr>
                    </thead>
                    <tbody>
                      <tr>  
                        <!-- <td class="px-5 py-5 border-b border-gray-200 bg-white  "> 
                          <p class="text-gray-900 font-black text-6xl whitespace-no-wrap">
                            <span class="w-1/4 text-6xl font-black">   {{ Math.round( (((rds[1] + rds[2] +rds[3] +rds[4] +rds[5] + rds[6] +rds[7] + rds[8] + rds[9] +rds[10] 
                                                                          + rds[11] +rds[12] +rds[13] +rds[14] +rds[15] + rds[16] +rds[17] +rds[18] +rds[19] +rds[20] 
                                                                          + rds[21] +rds[23] +rds[24] +rds[25] +rds[26] +rds[27] +rds[28] +rds[29]+rds[30] 
                                                                          + rds[31] )/29)) *100*25)/100  }} 
                            </span> 
                          </p> 
                        </td>   -->
                        
                        <td class="px-5 py-5 border-b border-gray-200 bg-white  "> 
                          <p class="text-gray-900 font-black text-6xl whitespace-no-wrap">
                            {{ Math.round( (((rds[1] + rds[7] +rds[10] +rds[14] +rds[16] + rds[18] +rds[23] + rds[24] + rds[25] + rds[27] +rds[30])/10)) *100)/100*25  }} 
                          </p> 
                        </td>

                        <td class="px-5 py-5 border-b border-gray-200 bg-white  "> 
                          <p class="text-gray-900 font-black text-6xl whitespace-no-wrap">
                            {{ Math.round((((rds[33] +rds[34] +rds[35] +rds[36])/4)-1) *100)/100*25 }} 
                          </p> 
                        </td>

                        <td class="px-5 py-5 border-b border-gray-200 bg-white  "> 
                          <p class="text-gray-900 font-black text-6xl whitespace-no-wrap">
                            {{ Math.round((((rds[41] +rds[40] +rds[39] +rds[38])/4)-1) *100)/100*25 }} 
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
                      <span class=" text-lg font-black"> 【 21~30 】</span>
                      <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 21 && n <= 30" > {{ n }} 題: {{ rds[n] }}  </span> 
                    </td> 
                    <td class="w-1/4"   >
                      <span class=" text-lg font-black"> 【 31~40 】</span>
                      <span class="ml-6 flex" v-for="n in rds.length"  v-if="n == 31" > {{ n }} 題: {{ rds[n] }}  </span> 
                    </td> 
                  </div>
                  <div class = "m-5 flex">  
                    <td class="w-1/2"   >
                      <span class=" text-lg font-black"> 【 工作自選 】</span>
                      <br> 
                       <span class=" px-3 bg-gray-200 text-gray-900 font-black text-xl rounded-full"
                        > 32題： {{ rds[32] }}  </span> 
                       <p class="text-xs text-gary-400">(0:退休人員 ,1:受傷後沒有工作) </p>
                      <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 33 && n <= 36" > {{ n }} 題: {{ rds[n] }}  </span> 
                    </td> 

                    <td class="w-1/2"   >
                      <span class=" text-lg font-black"> 【 音樂自選 】</span>
                      <br>  
                       <span class=" px-3  bg-gray-200 text-gray-900 font-black text-xl rounded-full"
                        > 37題： {{ rds[37] }}  </span>
                       <p class="text-xs text-gary-400">(0:我不運動或玩樂器,1:其他) </p>
                      <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 38 && n <= 41" > {{ n }} 題: {{ rds[n] }}  </span> 
                    </td> 
                  </div> 
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>  
          </div>
        </div>
        
        
      <button class="py-5 my-5 bg-red-500 w-full hover:bg-red-400 text-white 
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
        play_lv:'3',
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
      rds:[0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,  0,0,0,0,0, 0,0,0,0,0 ],
      
      // 宗宗良
      // rds:[0, 2,2,3,1,1, 2,1,1,1,1, 3,1,1,1,1, 2,1,1,2,2, 1,0,2,3,3, 3,3,4,3,2, 2, 1,3,3,3,3, 0,2,2,2,2],
      // 靜淑靜
      // rds:[0, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1, 1,1,1,1,1, 0,1,1,1,1],
      


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