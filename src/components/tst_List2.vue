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
          <v-tab key='k2' href='#k2' >  2 </v-tab> 
          <v-tab key='k1' href='#k1' v-if="!hide"  >   1  </v-tab>   
          
          

           

           
      </v-tabs>  
      <v-tabs-items v-model="tab"> 

        <v-tab-item key='k3' value='k3'>  

          <v-dialog
          v-model="dialog"
          max-width="500px"
        >
           
          <v-card>
            <v-card-title>
           
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="t.name"
                      label="Dessert name"
                    ></v-text-field>
                  </v-col>
                  
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="dialog=false"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="up()"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
<!-- :items="desserts" -->
            <v-data-table 
              class="elevation-1"

              :headers="headers"
              :items="tutorials"

              item-key="patient_ID"
              multi-sort 

              :sort-by="['quiz_date','patient_ID' ]" 
              :sort-desc="[true, true]"
              
              :search="search"
              :custom-filter="filterOnlyCapsText"
            >
           <template v-slot:item.actions="{ item }">
              <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                small
                @click="deleteTutorial(item)"
              >
                mdi-delete
              </v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn
                color="primary"
                @click="initialize"
              >
                Reset
              </v-btn>
            </template>
            
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
   
        </v-tab-item> 

         <v-tab-item key='k1' value='k1' > 
   
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
      t:{
          // memo:"",
          key:"",
          name:"",
          quiz_statu:"",
          quiz_date:"",
          
          patient_ID:"",
          prePare:[],
          quiz_1_dtl:[],
          quiz_1_fdbk:[], 
        },
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
          { text: '編輯內容', value: 'actions' },
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

    deleteTutorial() {
          SeatDataService.delete(this.currentTutorial.key)
            .then(() => {
              this.$emit("refreshList");
            })
            .catch((e) => {
              console.log(e);
            });
        },

        de2(k) {
          SeatDataService.delete(k)
            .then(() => {
              alert(k);
              // this.$emit("refreshList");
            })
            .catch((e) => {
               alert(e);
              console.log(e);
            });
        },


        editItem (item) {
        this.editedIndex = this.tutorials.indexOf(item)
        this.editedItem = Object.assign({}, item)
        
        this.dialog = true
        this.t.key = item.key
        this.t.name = item.name

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

    up() {
      this.dialog=false;
      const data = {
         
        // tmp_idx: this.currentTutorial.tmp_idx,

        // left_time: this.currentTutorial.left_time,
        // memo: this.currentTutorial.memo,
 
        // slted: this.currentTutorial.slted,
        // statu: this.currentTutorial.statu,
        
        name: this.t.name, 
         

        // questype:this.currentTutorial.questype,
        // quesimge:this.currentTutorial.quesimge, 
 
         
      };

//       const words = k.split('-');
// // alert(words[1]);
      SeatDataService.update(this.t.k, data)
        .then(() => {
          alert('更新資料,上傳成功!');
          this.message = "更新資料,上傳成功!";
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
