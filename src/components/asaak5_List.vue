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

    <div class="w-5/12 ">
    <v-banner  
      sticky
    >
<!-- grid grid-cols-5 gap-1  -->
<div class="flex justify-center  "> 

                <!-- <div class="mx-1"> 
  <v-switch
                color="primary"
                value
                label="快速場時間"
                v-model="copyRight_T"
                input-value="true"
                 
              ></v-switch> 

              <v-text-field filled clearable  
              v-model="bch_left_time" 
              class="text-xs " 
              label="離場時間"  
              placeholder="離場時間"  >
              </v-text-field>   

</div> -->

<!-- <div class="mx-1">

            <v-switch
                color="primary"
                value
                label="快速複製 號碼"
                v-model="copyRight_N"
                input-value="true"
                
              ></v-switch> 

              <v-text-field filled 
              v-model="bch_tmp_idx" 
              class="text-xs  " 
              label="第一號"  
              placeholder="第一號"

              type="number"   
              step="1"
              min="0"
              ref="input"
              :rules="[numberRule]"
                >
              </v-text-field>   
          </div> -->

          <!-- <div class="mx-1">

            <v-switch
                color="primary"
                value
                label="快速複製 備註"
                v-model="copyRight_M"
                input-value="true"
                
              ></v-switch> 

              <v-text-field filled 
              v-model="bch_memo" 
              class="text-xs  " 
              label="備註內容"  
              placeholder="備註內容"
 
                >
              </v-text-field>   
          </div> -->


              <!-- <v-dialog
                transition="dialog-top-transition"
                max-width="600"
              >
              
           


                <template v-slot:activator="{ on, attrs }">
                  <v-btn 
                    class   = "purple accent-3 text-white mt-3 "
                    v-bind="attrs"
                    v-on="on"
                  > 重置靶位 (換場使用) </v-btn>
                </template>

                <template v-slot:default="dialog">
                  <v-card>
                    <v-toolbar
                      color="purple accent-3"
                      dark
                    >修改 大批資料...謹慎操作</v-toolbar>
                    <v-card-text>
                      <div class="text-h2 pa-12">請選 北場 or 南場 </div>
                    </v-card-text>
                    <v-card-actions class="justify-end">

                      <v-btn
                        solo
                        @click="reSet_pos_0"
                      >全場(01 ~ 20)</v-btn>

                      <v-btn
                        solo
                        @click="reSet_pos_1"
                      >北場(01 ~ 12)</v-btn>

                      <v-btn
                        solo
                        @click="reSet_pos_2"
                      >南場(13 ~ 18)</v-btn>

                      <v-btn
                        text
                        @click="dialog.value = false"
                      >取消</v-btn>

                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>  -->
</div> 


      <div v-if="currentTutorial">
        <tutorial-details
          :tutorial="currentTutorial"
          @refreshList="refreshList"
        />
      </div>
      <div v-else>
        <br />
        <p>請選擇右方 題目...</p>
      </div>
      </v-banner>
    </div>
    
    <div class="w-7/12">  
      <v-tabs
            v-model="tab"
            background-color="primary" 
            fixed-tabs 
          > 
          <v-tab key='k1' href='#k1' v-if="!hide"  >   題庫1  </v-tab>   
          <v-tab key='k2' href='#k2' >  題庫2 </v-tab> 
          <v-tab key='k3' href='#k3' v-if="!hide"  >  題庫3 </v-tab> 

           

           
      </v-tabs>  
      <v-tabs-items v-model="tab"> 
        <v-tab-item key='k3' value='k3'>   </v-tab-item> 
        <v-tab-item key='k2' value='k2' >  </v-tab-item>

         <v-tab-item key='k1' value='k1' > 

          <v-list-item-group 
            color="primary" 
            > 
            <v-list-item
              v-for="(tutorial, index) in tutorials"  
              :key="index"  
              @click="setActiveTutorial(tutorial, index)"
              
            > 
            <v-chip class="text-white text-xs mr-5" color="green"  >
              {{ tutorial.pos }}
            {{ tutorial.sno }}_{{ tutorial.sno_idx }}_{{ tutorial.sno_dtl }}</v-chip>
            
            
            <span class="text-xs text-green-700 font-semibold tracking-wide">{{ tutorial.question }}</span>
 

                       <v-radio-group 
                            column
                            v-for="(quesopts, index) in tutorial.quesopts"  
                            :key="index" 
                            v-model="ex7[index]"
                          >
                            <v-radio
                              
                              class="text-white text-xs mr-5"
                              :label="quesopts"
                              color="red"
                              :value="index"
                              :text="xs"
                            ></v-radio>  
                          </v-radio-group>

            </v-list-item>
          </v-list-item-group>

           <!-- {{ tutorial.pos }},{{ tutorial.sno }},{{ tutorial.sno_idx }},{{ tutorial.sno_dtl }}, -->
<!-- <hr>
{{ tutorial.quesopts}}
{{ tutorial.question }} -->
         

             <!-- <v-radio-group
                            v-model="ex7"
                            column
                            v-for="(question, index) in tutorial.question"  
                            :key="index" 
                          >
                            <v-radio
                              :label="question"
                              color="red"
                              :value="index"
                            ></v-radio>  
                          </v-radio-group> -->
        </v-tab-item>


      </v-tabs-items> 
    </div> 


     
  </div>
</template>
 

<script>

import TutorialDetails from "./asask5_Mdf";
 
import SeatDataService from "../services/SeatPrepareService";

export default {
  name: "tutorials-list",
  components: { TutorialDetails },
  

  data() {
    return { 
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
  methods: { 
    onDataChange(items) {
       
      let _tutorials = []; 


      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _tutorials.push({
          key: key,
          // title: data.title,
          // description: data.description,
          // published: data.published,
          // date_s:data.date_s,
          // date_mor:data.date_mor,
          
            pos: data.pos,
            sno: data.sno,
            sno_idx: data.sno_idx,
            sno_dtl: data.sno_dtl,

            quesopts: data.quesopts,
            question: data.question,
            quesinduc: data.quesinduc,

            tmp_idx: data.tmp_idx,
            left_time: data.left_time,
            memo: data.memo,
            slted: data.slted,
            statu: data.statu


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
     SeatDataService.getAll().on("value", this.onDataChange);  
  },
  beforeDestroy() {
     SeatDataService.getAll().off("value", this.onDataChange);
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
