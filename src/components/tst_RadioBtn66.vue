<template> 
    <div class=" flex w-full overflow-y-auto h-screen">  
      <div class="flex flex-col" v-show="play_lv ==6"  > 
         <!-- // 這邊開始安排 ： 該次填寫進度 -->
        <a class ="mt-3 mr-10 flex justify-end text-lg text-gray-500 ">  〖 {{ pii.pI }} 〗 {{ pii.pN }} , {{ pii.pP }}  正在填寫 6.波士頓量表</a>

        <div  color="primary" class="pt-10 pl-15"  >   
          <div v-for="(tutorial, inx) in tutorials" :key="inx"  @click="setActiveTutorial(tutorial, inx)" v-if="tutorial.qzSno == 6" >  
            <div class="flex-row ml-5">
            <div class="" v-show="tutorial.sno_dtl !=99">  
              <span small class="text-white text-xs mr-5 p-1 px-3 justify-center rounded-3xl bg-yellow-500"   >
                  {{ tutorial.pos }} 
                  {{ tutorial.sno }}_{{ tutorial.sno_idx }} : {{ tutorial.sno_dtl }} 
              </span>
            </div> 
            <div class="  "> 
                <span class="text-3xl text-green-700 font-semibold w-full">{{ tutorial.question }}</span>
            </div>  

            <div class="my-3">   
              <div class=" " v-for="nn in 19"  v-show="tutorial.sno_dtl != 99" >   
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
                        <th
                          class="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 
                                text-left text-xs font-semibold text-gray-700  "
                        >
                        Symptom Score :  
                        </th>
                        <th
                          class="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 
                                text-center text-xs font-semibold text-gray-700 uppercase "
                                text-center text-xs font-semibold text-gray-700 uppercase "
                        >
                        Function Score :
                        </th> 
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white   ">
                          <p class="text-gray-900 text-6xl font-black ">
                            {{ Math.round((rds[0]+ rds[1]+ rds[2]+ rds[3]+ rds[4]+ rds[5]+ rds[6]+ rds[7] + rds[8]+ rds[9]+ rds[10]+ rds[11]) /11*100) / 100 }}  
                          </p> 
                        </td> 

                        <td class="px-5 py-5 border-b border-gray-200 bg-white ">
                          <div class="flex"> 
                            <p class="text-gray-900 text-6xl font-black "> 
                              {{ Math.round((rds[19]+ rds[12]+ rds[13]+ rds[14]+ rds[15]+ rds[16]+ rds[17] + rds[18] ) /8*100) / 100 }}  </p> 
                          </div>
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
                    <span class=" text-lg font-black"> 【 1~5 】 </span>
                    <span class="ml-5 flex" v-for="n in rds.length"  v-if="n >= 1 && n <= 5" > {{ n }} 題: {{ rds[n] }}  </span> 
                  </td> 
                  <td class="w-1/4"   >
                    <span class=" text-lg font-black"> 【 6~10 】 </span>
                    <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 6 && n <= 10" > {{ n }} 題: {{ rds[n] }}  </span> 
                  </td> 
                  <td class="w-1/4"   >
                    <span class=" text-lg font-black"> 【 11~15 】</span>
                    <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 11 && n <= 15" > {{ n }} 題: {{ rds[n] }}  </span> 
                  </td>  
                  <td class="w-1/4"   >
                    <span class=" text-lg font-black"> 【 16~19 】</span>
                    <span class="ml-6 flex" v-for="n in rds.length"  v-if="n >= 16 && n <= 19" > {{ n }} 題: {{ rds[n] }}  </span> 
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
        play_lv:'6',
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
      
      // rds:[0, 3,3,4,2,1, 2,2,2,3,2, 2,3,4,2,2, 1,2,3,1],
      
      rds:[],
      
      
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
            this.qufd[0]= 
            Math.round((this.rds[0]+ this.rds[1]+ this.rds[2]+ this.rds[3]+ this.rds[4]+ this.rds[5]+ this.rds[6]+ this.rds[7] + this.rds[8]+ this.rds[9]+ this.rds[10]+ this.rds[11]) /11*100) / 100
            ;
            this.qufd[1]= 
            Math.round((this.rds[19]+ this.rds[12]+ this.rds[13]+ this.rds[14]+ this.rds[15]+ this.rds[16]+ this.rds[17] + this.rds[18] ) /8*100) / 100 
            ;

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
