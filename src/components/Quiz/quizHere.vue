<template> 
    <div class=" flex justify-center ">
      {{ play_lv }}

      <v-row dense v-for="(tutorial,index) in tutorials" :key="index" >
          <div class="grid grid-cols-2 gap-1"> 
            <div class="col-span-1 flex items-center" >   
              <v-container class="px-0" fluid >  
                
                <!-- <v-radio-group  v-if="tutorial.sno_idx == 1" v-model="rds[1]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                   <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1" ></v-radio>   </v-radio-group>
                 <v-radio-group  v-if="tutorial.sno_idx == 2" v-model="rds[2]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                   <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group> -->
                   <VueRadioButton v-if="tutorial.sno_idx == 3" v-model="rds[3]" 
                                  :options="quesopts" v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                                  <span>{{ index}}</span>
                                  <span>{{ quesopts[index]}}</span>
                  </VueRadioButton>
                <!-- <VueRadioButton  v-if="tutorial.sno_idx == 3" v-model="rds[3]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                   <v-radio dense color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </VueRadioButton> -->
                 <!-- <v-radio-group  v-if="tutorial.sno_idx == 4" v-model="rds[4]" row v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
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
                   <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group> -->
            </v-container>
            </div>

          </div>

      </v-row>
      <a class="text-xs">{{ tutorials }}</a>
      
      <!-- <VueRadioButton v-model="selectedButton" :options="buttons">
        <template #label="{ props }">
          <img :src="props.icon" width="50" height="50" />
          <span>{{ props.title }}</span>
        </template>
      </VueRadioButton> -->
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
        play_lv:this.$route.params.play_lv,
        // - - - - - 
        selectedButton: "",
      buttons: [
        {
          id: 1,
          icon: "https://vuejs.org/images/logo.svg",
          title: "Vue",
        },
        {
          id: 2,
          icon: "https://vitejs.dev/logo.svg",
          title: "Vite",
        },
      ],
      // - - - - - -

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