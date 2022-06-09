<template>  
<!-- pos     --- :: 題本編號  -->
<!-- sno     --- :: 大題編號  -->
<!-- sno_idx --- :: 中題編號  -->
<!-- sno_dtl --- :: 小題編號  -->

<!-- questype  --- :: 問題類型  -->
<!-- question  --- :: 問題內容 :: -->
<!-- quesopts  --- :: 問題選項 :: arry(5) -->
<!-- quesinduc  --- :: 問題備註  -->
<!-- quesimge  --- :: 問題說明圖  --> 

  <div class=" flex justify-center  ">  
    <div class="w-full">  
      <v-tabs
            v-model="tab"
            color="light-green darken-4"
            background-color="light-green lighten-2"  
            active-class="font-weight-black .text-lg"
            fixed-tabs 
          > 
          <v-tab key='k3' href='#k3' v-if="!hide"  >  題庫1 測試結果 </v-tab> 
          <!-- <v-tab key='k2' href='#k2' >  已答題_清單 </v-tab> 
          <v-tab key='k1' href='#k1' v-if="!hide"  >   有一個測試在這邊  </v-tab>    -->
          
          <v-tab key='k4' href='#k4' v-if="!hide"  >   下載工具  </v-tab>   
            
      </v-tabs>  
      <v-tabs-items v-model="tab"> 

        <v-tab-item key='k3' value='k3'>   

          <!-- {{ tutorials }} -->
            <v-data-table 
              class="elevation-1"

              :headers="headers"
              :items="tutorials"

              item-key="patient_ID" 

              :sort-by="['quiz_date','patient_ID' ]" 
              :sort-desc="[true, true]"
              
              :search="search"
              :custom-filter="filterOnlyCapsText"

              :single-expand="singleExpand"
              :expanded.sync="expanded" 
              show-expand
            >

            
              <template v-slot:top>

                <v-row>
                   <v-col>  
                   </v-col> 
                  <v-col> 
                    <v-text-field
                    v-model="search" 
                    label="使用快速搜尋，請輸入姓名"
                    class="mx-4"
                    ></v-text-field>
                  </v-col>   
                </v-row>   
              </template>

              <template v-slot:item.edit="{ item }"> 
               <!-- @click="(item)" -->
              <v-btn
                  small
                  class="mx-3 "  >
                  更新
                </v-btn>

                <v-btn
                  small
                  class="mx-3"
                  @click="deleteAns(item)" >
                  刪除
                </v-btn>
              </template>

              <template v-slot:expanded-item="{ item }">  

              <!-- {{ headers.length }} -->
                <td class="w-1/6" >
                  <span class=" text-lg font-black"> 詳細答題內容 </span>
                  <!-- <span class=" flex" v-for="n in item.quiz_dtl.length"  v-if="n >= 1 && n <= 5" > {{ n }} 題: {{ item.quiz_dtl[n] }}  </span>  -->
                </td>

                <td class="w-1/6" >
                  <span class=" text-lg font-black"> 1~5 </span>
                  <span class=" flex" v-for="n in item.quiz_dtl.length"  v-if="n >= 1 && n <= 5" > {{ n }} 題: {{ item.quiz_dtl[n] }}  </span> 
                </td>

                <td class="w-1/6"   >
                  <span class=" text-lg font-black"> 6~10 </span>
                  <span class=" flex" v-for="n in item.quiz_dtl.length"  v-if="n >= 6 && n <= 10" > {{ n }} 題: {{ item.quiz_dtl[n] }}  </span> 
                </td>

                <td class="w-1/6"  >
                  <span class=" text-lg font-black"> 11~15 </span>
                  <span class=" flex" v-for="n in item.quiz_dtl.length"  v-if="n >= 11 && n <= 15" > {{ n }} 題: {{ item.quiz_dtl[n] }}  </span> 
                </td>

                <td class="w-1/6"   >
                  <span class=" text-lg font-black"> 16~20 </span>
                  <span class=" flex" v-for="n in item.quiz_dtl.length"  v-if="n >= 16 && n <= 20" > {{ n }} 題: {{ item.quiz_dtl[n] }}  </span> 
                </td>

                <td class="w-1/6"   >
                  <span class=" text-lg font-black"> 21~25 </span>
                  <span class=" flex" v-for="n in item.quiz_dtl.length"  v-if="n >= 21 && n <= 25" > {{ n }} 題: {{ item.quiz_dtl[n] }}  </span> 
                </td>

                <td class="w-1/6"   >
                  <span class=" text-lg font-black"> 26~28 </span>
                  <span class=" flex" v-for="n in item.quiz_dtl.length"  v-if="n >= 26 && n <= 28" > {{ n }} 題: {{ item.quiz_dtl[n] }}  </span> 
                </td> 
                
              </template> 
            </v-data-table>
          
        </v-tab-item> 
        <v-tab-item key='k2' value='k2' >   
          <v-row>    
            <v-col cols="12" md="12"  > 
                <!-- @click="setActiveTutorial(tutorial, index)" -->
               <v-list-item-group  color="primary"  >
                <v-list-item
                  v-for="(tutorial, index) in tutorials"  
                  :key="index"   
                >  
                  <v-list-item-content  class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-blue-100 border-blue-300 " >
                  <div class="grid grid-cols-12 gap-0 "> 
                               
                                <div class="col-span-1 ">  
                                  <div class="flex flex-col . ">
                                    <div>
                                       <span class="px-2 my-2 bg-red-500 rounded-full text-white text-lg font-black"> 
                                      {{ tutorial.patient_ID  }} </span>
                                     </div>
                                    <div> <span class=" px-2 my-2 bg-red-100 rounded-b-full text-red-900 text-xs "> 
                                      {{ tutorial.quiz_date  }}  </span>
                                    </div> 
                                  </div> 
                                </div> 
                                
                                <div class="col-span-2">  
                                  <span class=" py-2 my-2 mx-4 text-base font-normal">  {{ tutorial.name }} 
                                    <span class="py-2 text-gary-200 text-xs "> 先生/ 小姐 </span>
                                  </span>  
                                </div> 
                                <div class="col-span-6 ">  
                                  <div class="flex flex-row">  
                                         預計顯示.得分摘要 相關內容
                                  </div>
                                  <div class="grid grid-cols-3 gap-1">
                                  </div> 
                                  
                                </div>   
 
                          <div class="col-start-11 col-span-1 "> 
                            <v-btn rounded color="primary" @click="show = !show" >
                              查詢.答題結果 <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                            </v-btn> 
                        </div>

                        <div class="col-span-12 ">
                            <v-expand-transition>
                            <div v-show="show"> 

                              <v-card-text> 

                                  <v-chip class="text-white text-xs mr-5" color="red"  > 
                                    <v-list-item v-for="(quiz_fdbk, index) in tutorial.quiz_fdbk" :key="index"  >
                                      {{ tutorial.quiz_fdbk[index] }}
                                    </v-list-item> 
                                  </v-chip> 
                                <hr>

                                  <v-chip class="text-white text-xs mr-5" color=""  > 
                                    <v-list-item v-for="(quiz_dtl, index) in tutorial.quiz_dtl" :key="index"  >
                                      {{ tutorial.quiz_dtl[index] }}
                                    </v-list-item> 
                                  </v-chip> 

                              </v-card-text>
                            </div>
                          </v-expand-transition> 
                        </div> 
                           
                  </div>
                          
                  
                  </v-list-item-content>    
                </v-list-item>
              </v-list-item-group> 
            </v-col>
          </v-row>

        </v-tab-item> 
         <v-tab-item key='k1' value='k1' > 
  <!-- @click="setActiveTutorial(tutorial, index)" -->
          <v-list-item-group 
            color="primary" 
            > 
            <v-list-item
              v-for="(tutorial, index) in tutorials"  
              :key="index"  
            > 
            <v-chip class="text-white text-xs mr-5" color="green"  > 
              <v-list-item v-for="(quiz_dtl, index) in tutorial.quiz_dtl" :key="index"  >
                {{ tutorial.quiz_dtl[index] }}
              </v-list-item> 
            </v-chip> 
            <span class="text-xs text-green-700 font-semibold tracking-wide">{{ tutorial.name }}</span>
 

                     

            </v-list-item>
          </v-list-item-group> 
        </v-tab-item> 
        <v-tab-item key='k4' value='k4'>
          <div class="m-10">

            <!-- <template v-slot:activator="{ on, attrs }">
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
            </template> -->
     
              <download-csv 
                dark 
                class=" bg-green-800 hover:bg-green-500 w-120 h-120 text-white font-bold py-2 px-4 rounded"
                :data   = "tutorials"
                name    = "[題本１]資料回報.csv"
                
  
                :labels="labels"
                :fields="fields"
              >下載已填寫資料 [題本１].CSV
              </download-csv> 
               
            </div>
          </v-tab-item>



        
      </v-tabs-items> 
    </div> 


     
  </div>
</template>
 

<script>

import TutorialDetails from "./asask5_Mdf";
 
import SeatDataService from "../services/SeatPrepareService";

import PlayerService from "../services/playerService";
 
import Vue from 'vue' 
import JsonCSV from 'vue-json-csv'
Vue.component('downloadCsv', JsonCSV)

export default {
  name: "tutorials-list",
  components: { TutorialDetails },
  

  data() {
    return { 
         
        search: '',
        calories: '',

        labels: { 
                key:'流水編號', 

                name:'姓名',  
                patient_ID:'病號',
                quiz_date:'登記日期',
                quiz_time:'完成時間',

                cvs_fdbk_1:'指標_1', 
                cvs_fdbk_2:'指標_2', 
                cvs_fdbk_3:'指標_3', 
                cvs_fdbk_4:'指標_4', 
 
                cvs_dtl_1:'第1題',
                cvs_dtl_2:'第2題',
                cvs_dtl_3:'第3題',
                cvs_dtl_4:'第4題',
                cvs_dtl_5:'第5題',
                cvs_dtl_6:'第6題',
                cvs_dtl_7:'第7題',
                cvs_dtl_8:'第8題',
                cvs_dtl_9:'第9題',
                cvs_dtl_10:'第10題',
                cvs_dtl_11:'第11題',
                cvs_dtl_12:'第12題',
                cvs_dtl_13:'第13題',
                cvs_dtl_14:'第14題',
                cvs_dtl_15:'第15題',
                cvs_dtl_16:'第16題',
                cvs_dtl_17:'第17題',
                cvs_dtl_18:'第18題',
                cvs_dtl_19:'第19題',
                cvs_dtl_20:'第20題',
                cvs_dtl_21:'第21題',
                cvs_dtl_22:'第22題',
                cvs_dtl_23:'第23題',
                cvs_dtl_24:'第24題',
                cvs_dtl_25:'第25題',
                cvs_dtl_26:'第26題',
                cvs_dtl_27:'第27題',
                cvs_dtl_28:'第28題',
                quiz_encode:'題本編號',
                  
            },
        // fields: [ 'name','ply_amt','key','phone','plyd'],
        fields: [ 'quiz_encode','name','patient_ID','quiz_date','quiz_time',
                        'cvs_fdbk_1',
                        'cvs_fdbk_2',
                        'cvs_fdbk_3',
                        'cvs_fdbk_4',
                        'cvs_dtl_1',
                        'cvs_dtl_2',
                        'cvs_dtl_3',
                        'cvs_dtl_4',
                        'cvs_dtl_5',
                        'cvs_dtl_6',
                        'cvs_dtl_7',
                        'cvs_dtl_8',
                        'cvs_dtl_9',
                        'cvs_dtl_10',
                        'cvs_dtl_11',
                        'cvs_dtl_12',
                        'cvs_dtl_13',
                        'cvs_dtl_14',
                        'cvs_dtl_15',
                        'cvs_dtl_16',
                        'cvs_dtl_17',
                        'cvs_dtl_18',
                        'cvs_dtl_19',
                        'cvs_dtl_20',
                        'cvs_dtl_21',
                        'cvs_dtl_22',
                        'cvs_dtl_23',
                        'cvs_dtl_24',
                        'cvs_dtl_25',
                        'cvs_dtl_26',
                        'cvs_dtl_27',
                        'cvs_dtl_28',],
        // 修改_簡化版本  
      

      // - - - - 
      p_ID:"",

      radioGroup:"",
      ex7:[],
      
      dialog: false,
      tab:"",
      ckbx:"",

      opts: ['1星','2星','3星','4星','5星'],
      copyRight_N:false,
      copyRight_T:false, 
      copyRight_M:false, 
      
      bch_left_time:"",
      bch_tmp_idx:"",
      bch_memo:"",
 
      show: false,
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1
       
    };
  }, 
  computed: {
      headers () {
        return [
          { text: '姓名', value: 'name' ,align: 'start', sortable: false ,width: "10%" },
          { text: '病號', value: 'patient_ID', width: "10%" },
          { text: '手術階段', value: 'quiz_statu' ,width: "12%"},
          { text: '填表日期', value: 'quiz_date',width: "8%" },
          { text: '完成時間', value: 'quiz_time',width: "8%" },
          { text: '指標 <1>', value: 'quiz_fdbk[0]',width: "6%" },
          { text: '指標 <2>', value: 'quiz_fdbk[1]' ,width: "6%" },
          { text: '指標 <3>', value: 'quiz_fdbk[2]' ,width: "6%"},
          { text: '指標 <4>', value: 'quiz_fdbk[3]' ,width: "6%"},
          { text: '題本名稱', value: 'quiz_encode' ,width: "12%"},
          { text: '編輯', value: 'edit' ,width: "24%"},
          
          // { text: '流水編號', value: 'key' },
        ]
      },
    },
  methods: { 
    filterOnlyCapsText (value, search, item) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
    },

    // tanArry2Single () {
       
       
    //    return value != null &&
    //       search != null &&
    //       typeof value === 'string' &&
    //       value.toString().toLocaleUpperCase().indexOf(search) !== -1
    // },
    
     
    onDataChange(items) {
       
      let _tutorials = []; 


      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _tutorials.push({
            key: key, 
            name: data.name, 

            patient_ID :data.patient_ID,
            prePare :data.prePare,

            quiz_statu: data.quiz_statu,
            quiz_date: data.quiz_date,   
            quiz_time: data.quiz_time,

            quiz_dtl: data.quiz_dtl,
            quiz_fdbk: data.quiz_fdbk,  

            quiz_encode: data.quiz_encode,
            
            cvs_fdbk_1:data.quiz_fdbk[0],  
            cvs_fdbk_2:data.quiz_fdbk[1],  
            cvs_fdbk_3:data.quiz_fdbk[2],  
            cvs_fdbk_4:data.quiz_fdbk[3],  

            // - - - - - - - - - - - - - - - - - - -

            cvs_dtl_1:data.quiz_dtl[0],
            cvs_dtl_2:data.quiz_dtl[1],
            cvs_dtl_3:data.quiz_dtl[2],
            cvs_dtl_4:data.quiz_dtl[3],
            cvs_dtl_5:data.quiz_dtl[4],
            cvs_dtl_6:data.quiz_dtl[5],
            cvs_dtl_7:data.quiz_dtl[6],
            cvs_dtl_8:data.quiz_dtl[7],
            cvs_dtl_9:data.quiz_dtl[8],
            cvs_dtl_10:data.quiz_dtl[9],
            cvs_dtl_11:data.quiz_dtl[10],
            cvs_dtl_12:data.quiz_dtl[11],
            cvs_dtl_13:data.quiz_dtl[12],
            cvs_dtl_14:data.quiz_dtl[13],
            cvs_dtl_15:data.quiz_dtl[14],
            cvs_dtl_16:data.quiz_dtl[15],
            cvs_dtl_17:data.quiz_dtl[16],
            cvs_dtl_18:data.quiz_dtl[17],
            cvs_dtl_19:data.quiz_dtl[18],
            cvs_dtl_20:data.quiz_dtl[19],
            cvs_dtl_21:data.quiz_dtl[20],
            cvs_dtl_22:data.quiz_dtl[21],
            cvs_dtl_23:data.quiz_dtl[22],
            cvs_dtl_24:data.quiz_dtl[23],
            cvs_dtl_25:data.quiz_dtl[24],
            cvs_dtl_26:data.quiz_dtl[25],
            cvs_dtl_27:data.quiz_dtl[26],
            cvs_dtl_28:data.quiz_dtl[27],

             // - - - - - - - - - - - - - - - - - - -

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

        if( this.copyRight_N != false)
        {
              this.currentTutorial.tmp_idx = this.bch_tmp_idx; 
              this.bch_updta();
              this.message = "複製更新 成功!";
        } 
        
        if( this.copyRight_T != false)
        { 
              this.currentTutorial.left_time = this.bch_left_time;
              this.bch_updta();
              this.message = "複製更新 成功!";
        } 

         if( this.copyRight_M != false)
        { 
              this.currentTutorial.memo = this.bch_memo;
              this.bch_updta();
              this.message = "複製更新 成功!";
        } 

        

},

bch_updta()
{
  const data = {   
        tmp_idx: this.currentTutorial.tmp_idx, 
        left_time: this.currentTutorial.left_time,
        memo: this.currentTutorial.memo,  
      };

      SeatDataService.update(this.currentTutorial.key, data)
        .then(() => {
          this.message = "更新成功!";
        })
        .catch((e) => {
          console.log(e);
        }); 
}

// reSet_bch_N(){ if(this.copyRight_N == false) { this.bch_left_time = ""; }  },
// reSet_bch_T(){ if(this.copyRight_T == false) { this.bch_tmp_idx = ""  ; }  },
      
,


 reSet_pos_0() { 
       
      for (let index = 0; index <= 100; index++) {  
        
          this.setActiveTutorial(this.tutorials[index] , index);
          this.reSetOne(this.tutorials[index] , index); 
      }
      this.dialog.value = false;

  },
    reSet_pos_1() { 
       
      for (let index = 0; index <= 36; index++) {  
        
          this.setActiveTutorial(this.tutorials[index] , index);
          this.reSetOne(this.tutorials[index] , index);

          
      }
      this.dialog.value = false;

  },

  reSet_pos_2() { 
       
      for (let index = 37; index <= 100; index++) {  
        
          this.setActiveTutorial(this.tutorials[index] , index);
          this.reSetOne(this.tutorials[index] , index);
          
      }
      this.dialog.value = false;

  },

    reSetOne(tutorial, index) {
       
      this.currentTutorial = tutorial;
      this.currentIndex = index; 

      this.currentTutorial.tmp_idx="";
      this.currentTutorial.left_time="";
      this.currentTutorial.memo="";

      const data = {   
        tmp_idx: "", 
        left_time: "",
        memo: "",  
      };

      SeatDataService.update(this.currentTutorial.key, data)
        .then(() => {
          this.message = "更新成功!";
        })
        .catch((e) => {
          console.log(e);
        }); 
    },

    deleteAns(e) {
      PlayerService.delete(e.key)
        .then(() => {
          this.$emit("refreshList");
          this.message = "刪除成功!";
        })
        .catch((e) => {
          console.log(e);
        });
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

    
  },
  mounted() {
    // console.log(_tutorials.title);  
     PlayerService.getAll().on("value", this.onDataChange);  
  },
  beforeDestroy() {
     PlayerService.getAll().off("value", this.onDataChange);
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
  max-width: 750px;
  margin: auto;
}
</style>
