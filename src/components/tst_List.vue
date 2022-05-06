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

    <div class="w-2/12 ">
    <v-banner  
      sticky
    >
<!-- grid grid-cols-5 gap-1  -->
<div class="flex justify-center  "> 

                 
</div> 

      <download-csv
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        :data   = "tutorials"
        name    = "本日資料回報.csv"
      >下載.CSV
      </download-csv>


      
      <div v-if="currentTutorial">
        <tutorial-details
          :tutorial="currentTutorial"
          @refreshList="refreshList"
        />
      </div>
      
      <div v-else>
        <br />
        <p>請選擇右方 題目...</p>

        {{ tutorials }}
      </div>
      </v-banner>
    </div>
    
    <div class="w-10/12">  
      <v-tabs
            v-model="tab"
            background-color="primary" 
            fixed-tabs 
          > 
          <v-tab key='k3' href='#k3' v-if="!hide"  >  題庫3 </v-tab> 
          <v-tab key='k2' href='#k2' >  已答題_清單 </v-tab> 
          <v-tab key='k1' href='#k1' v-if="!hide"  >   有一個測試在這邊  </v-tab>   
          
          

           

           
      </v-tabs>  
      <v-tabs-items v-model="tab"> 

        <v-tab-item key='k3' value='k3'>  
<!-- :items="desserts" -->
            <v-data-table 
              class="elevation-1"

              :headers="headers"
              :items="tutorials"

              item-key="patient_ID"
              multi-sort
              show-select

              :sort-by="['quiz_date','patient_ID' ]" 
              :sort-desc="[true, true]"
              
              :search="search"
              :custom-filter="filterOnlyCapsText"
            >
              <template v-slot:top>

                <v-row>
                  <v-col>
                    <v-text-field
                    v-model="search" 
                    label="關鍵字搜尋"
                    class="mx-4"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                        v-model="p_ID"
                        type="number"
                        label="病例號碼，過濾器"
                    ></v-text-field> 
                  </v-col>
                </v-row>   
              </template>

              <template v-slot:body.append>
                <tr> 
                  <td colspan="4"></td>
                </tr>
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
          {
            text: '姓名',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          {
            text: '病號',
            value: 'patient_ID',
            filter: value => {
              if (!this.p_ID) return true

              return value < parseInt(this.p_ID)
            },
          },
          { text: '手術階段', value: 'quiz_statu' },
          { text: '填答日期', value: 'quiz_date' },
          { text: '數值概要1', value: 'quiz_fdbk[0]' },
          { text: '數值概要2', value: 'quiz_fdbk[1]' },
          { text: '數值概要3', value: 'quiz_fdbk[2]' },
          { text: '數值概要4', value: 'quiz_fdbk[3]' },
          { text: '流水編號', value: 'key' },
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
    onDataChange(items) {
       
      let _tutorials = []; 


      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _tutorials.push({
            key: key,  

            patient_ID :data.patient_ID,
            prePare :data.prePare,
            quiz_statu: data.quiz_statu,
            quiz_date: data.quiz_date,

            name: data.name,
            quiz_dtl: data.quiz_dtl,
            quiz_fdbk: data.quiz_fdbk, 

        });
      });

      this.tutorials = _tutorials;

    // //  ::  藉由使用  ::
    // var temp_ary = _tutorials.map(function(item, index, array){ 
    //     if (item.description !== '') {
    //           return item.description;
    //         }  
    //   }) ; 
    // this.FVB = temp_ary ;
    // console.log('- - - < temp_ary > - - -');  
    // console.log(temp_ary);  
 
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
