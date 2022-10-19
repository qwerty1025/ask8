<template> 
    <div class=" flex w-full"> 
        
      <div class="overflow-y-auto  w-full h-screen" v-show="play_lv ==1"> 
       <!-- // 這邊開始安排 ： 該次填寫進度 -->

       sssss



        <a class ="mt-3 mr-10 flex justify-end text-lg text-gray-500 ">  〖 {{ pii.pI }} 〗 {{ pii.pN }} , {{ pii.pP }}  正在填寫 1.生活品質量表</a>

        <div  color="primary" class="pt-2 pl-15"  >   
        <div v-for="(tutorial, inx) in tutorials" :key="inx"  
             v-if="tutorial.qzSno == 1"
              @click="setActiveTutorial(tutorial, inx)"  >  

          <!-- <div class="grid grid-cols-6 gap-1 ml-5"> 
            <div class="col-span-6  ">  
              <span small class="text-white text-xs mr-5 p-1 px-3 justify-center rounded-3xl bg-yellow-500"   >
                  {{ tutorial.pos }} 
                  {{ tutorial.sno }}_{{ tutorial.sno_idx }} : {{ tutorial.sno_dtl }} 
              </span>
            </div> 
            <div class="col-span-6  "> 
              <span class="text-3xl text-green-700 font-semibold w-full">{{ tutorial.question }}</span>
            </div>  

            <div class="col-span-6" v-for="nn in 28" v-show="tutorial.sno_dtl != 99">   
                <div  v-if="tutorial.sno_idx == nn" v-model="rds[tutorial.sno_idx]" row 
                      v-for="(quesopts, index) in tutorial.quesopts" :key="index" class="flex "> 
                      <radio v-model="rds[tutorial.sno_idx]" :value="index+1" required
                              class="mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl" >
                        {{ quesopts }}
                      </radio> 
                </div>  
            </div>  -->

            <div class="grid grid-cols-6 gap-1 ml-5"> 
            <div class="col-span-6  ">  
              <span small class="text-white text-xs mr-5 p-1 px-3 justify-center rounded-3xl bg-yellow-500"   >
                  {{ tutorial.pos }} 
                  {{ tutorial.sno }}_{{ tutorial.sno_idx }} : {{ tutorial.sno_dtl }} 
              </span>
            </div> 
            <div class="col-span-6  "> 
              <span class="text-3xl text-green-700 font-semibold w-full">{{ tutorial.question }}</span>
            </div>  

            <div class="col-span-6" v-for="nn in 28"  v-show="tutorial.sno_dtl != 99">   
                <div  v-if="tutorial.sno_idx == nn" v-model="rds[tutorial.sno_idx]"  
                      v-for="(quesopts, index) in tutorial.quesopts" :key="index" class="flex "> 
                      <radio v-model="rds[tutorial.sno_idx]" :value="index+1" required
                              class="mx-6 my-1 p-2 rounded border border-gray-200 w-2/3 text-3xl" >
                        {{ quesopts }}
                      </radio> 
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


<style>
    body {
      background-color: rgba(31, 41, 55); /* cool gray 800 */
      color: white;
    }

    .tabAnim {
      z-index: -9;
    }

    #option0:checked ~ div {
      --tw-translate-x: 0%;
    }

    #option1:checked ~ div {
      --tw-translate-x: 100%;
    }

    #option2:checked ~ div {
      --tw-translate-x: 200%;
    }

    #option3:checked ~ div {
      --tw-translate-x: 300%;
    }

    #option4:checked ~ div {
      --tw-translate-x: 400%;
    }


</style>