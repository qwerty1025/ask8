<template>

<div class=" w-full item-start  "> 

  <!-- <div class="grid grid-cols-6 gap-4">
    <div class="col-start-2 col-span-4 ...">01</div>
      <div class="col-start-1 col-end-3 ...">02</div>
       <div class="col-end-7 col-span-2 ...">03</div>
    <div class="col-start-1 col-end-7 ...">04</div>
  </div> -->

  <div class=" grid grid-cols-8 gap-2  ">  

      <div class= "col-span-5 m-2">  
      </div>

      <!-- <div class= "col-end-7 col-span-1 m-2"> 
        <v-btn @click="updateP" class="btn btn-success ">更新</v-btn> 
      </div>  -->

      <div class= "col-span-2 m-2"> 
        <!-- <v-btn @click="saveP" class="btn btn-success ">儲存.單筆內容</v-btn>  -->
      </div>   

      
  </div>  
  

<div v-if="!submitted">  
  <v-tabs
    v-model="tab"
    background-color="primary" 
    fixed-tabs 
  >  
    <v-tab key='k3' href='#k3' v-if="!hide"  >  新增玩家.工具   </v-tab> 
    <v-tab key='k1' href='#k1' v-if="!hide"  >  收單.排程狀況  </v-tab>  
    <v-tab key='k5' href='#k5' v-if="!hide"  >   客服聯繫，客製化.工具討論 </v-tab> 
  </v-tabs> 

  <v-tabs-items v-model="tab">
 
        <v-tab-item key='k1' value='k1' >  
          <v-row>   
            <v-col cols="12" md="3"  >   

              <div v-if="currentTutorial != null">
                <tutorial-details
                  :tutorial="currentTutorial"
                  @refreshList="refreshList"
                />
              </div>
              <div v-else>
                <br />
                <p>請選擇右方 題目...</p>
              </div>

            </v-col> 

            <v-col cols="12" md="9"  > 
               <v-list-item-group  color="primary"  >
                <v-list-item
                  v-for="(tutorial, index) in tutorials"  
                  :key="index"  
                  @click="setActiveTutorial(tutorial, index)"
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
                                          <span class=" w-auto px-2 py-1 text-xs font-base"
                                                  v-if= "tutorial.prePare[0] == 'true'" > {{ quxDtaidx[0] }}  </span>
                                          <span class=" w-auto px-2 py-1 text-xs font-base"
                                                  v-if= "tutorial.prePare[1] == 'true'" > {{ quxDtaidx[1] }}  </span>
                                          <span class=" w-auto px-2 py-1 text-xs font-base"
                                                  v-if= "tutorial.prePare[2] == 'true'" > {{ quxDtaidx[2] }}  </span>
                                          <span class=" w-auto px-2 py-1 text-xs font-base"
                                                  v-if= "tutorial.prePare[3] == 'true'" > {{ quxDtaidx[3] }}  </span>
                                          <span class=" w-auto px-2 py-1 text-xs font-base"
                                                  v-if= "tutorial.prePare[4] == 'true'" > {{ quxDtaidx[4] }}  </span>
                                          <span class=" w-auto px-2 py-1 text-xs font-base"
                                                  v-if= "tutorial.prePare[5] == 'true'" > {{ quxDtaidx[5] }}  </span>
                                          <span class=" w-auto px-2 py-1 text-xs font-base"
                                                  v-if= "tutorial.prePare[6] == 'true'" > {{ quxDtaidx[6] }}  </span>
                                          <span class=" w-auto px-2 py-1 text-xs font-base"
                                                  v-if= "tutorial.prePare[7] == 'true'" > {{ quxDtaidx[7] }}  </span>
                                          <span class=" w-auto px-2 py-1 text-xs font-base"
                                                  v-if= "tutorial.prePare[8] == 'true'" > {{ quxDtaidx[8] }}  </span>
                                  </div>
                                  <div class="grid grid-cols-3 gap-1">
                                  </div> 
                                  
                                </div>   

<!-- <a class="flex flex-row" v-for="(item, index) in tutorial.prePare" >
  <a class=" w-12 px-3 py-1 m-1 bg-gray-300 rounded-full text-white text-xs font-base"  >01</a> 
</a> --> 
                        <div class="col-start-10 col-span-1 "> 
                            <v-btn solo color="orange lighten-2"  >
                              修改內容
                            </v-btn>  
                        </div>
                          <div class="col-start-12 col-span-1 "> 
                            <v-btn rounded color="primary" @click="show = !show" >
                              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                            </v-btn> 
                        </div>

                        <div class="col-span-12 ">
                            <v-expand-transition>
                            <div v-show="show">
                              <v-divider></v-divider>

                              <v-card-text>

                                {{  tutorial.quiz_1 }}  
                                <br>
                                 {{  tutorial.quiz_1_dtl }}  
                                  <br>
                                  {{  tutorial.quiz_1_fdbk }} 
                              </v-card-text>
                            </div>
                          </v-expand-transition> 
                        </div> 
                           
                  </div>
                          <!-- <div class="col-end-7 col-span-2 ...">03</div>
                          <div class="col-start-1 col-end-7 ...">04</div> -->
                        
                      
                      <!-- <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.name }} </span>   -->
                  
                  
                  
                  </v-list-item-content>    
                </v-list-item>
              </v-list-item-group> 
            </v-col>
          </v-row>


                     


        </v-tab-item>

        <v-tab-item key='k2' value='k2' > 
                  
          <!-- <v-list-item-group 
            color="primary" 
            >
            <v-list-item
              v-for="(tutorial, index) in tutorials"  
              :key="index" 
               
            > 
                  
              <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-blue-100 border-blue-300 "
                      
              >
                  {{ tutorial.name }}
              </v-list-item-content>    

               
              
            </v-list-item>
          </v-list-item-group> -->
 
        </v-tab-item> 

        <v-tab-item key='k3' value='k3'   >   
          <div class="ml-20 " >  
            <div class="flex justify-center w-full my-3">  
                <v-row>   
                  <v-col cols="12" md="9"  class="px-10" > 

                    <v-col>
                      <v-avatar
                        tile
                        color="blue" 
                        size=" 100"
                      >
                        <v-icon dark>
                          mdi-alarm
                        </v-icon> 
                      </v-avatar> 
                      <span class=" text-sm text-gray-500 " > 近期預約概況：   </span> 
                      <span class=" text-sm text-gray-500 " > 已登入人數：     </span> 
                      <span class=" text-sm text-gray-500 " > 已完成人數：     </span>
                    </v-col>
                    
                    <div class="flex">
                      <v-select
                        :items="cut_opts"
                        v-model="player.quiz_statu"
                        label="評估狀態"
                        solo
                        rounded
                        class="md:w-1/3 mx-2"
                      ></v-select>

                      <v-text-field
                        type="number"   
                        v-model="player.patient_ID"
                        label="病號"
                        step="1"
                        min="0" 
                        solo
                        rounded
                        
                        class="md:w-1/3 mx-2" 
                      ></v-text-field>   

                      <v-text-field 
                        v-model="player.name"
                        label="玩家名稱" 
                        solo
                        rounded
                        
                        class="md:w-1/3 mx-2" 
                      ></v-text-field> 
                    </div> 

                    <v-row>
 <!-- <span class=" text-lg font-bold " > 請勾選需要填答的題本 {{ player.prePare }} </span> -->
              <v-container fluid  class ="flex justify-center " > 
                  <v-checkbox
                    v-model="player.prePare[1]"
                    label="題本1"
                    value=true 
                    class="mx-3"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="player.prePare[2]"
                    label="題本2"
                    value=true 
                    class="mx-3"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="player.prePare[3]"
                    label="題本3"
                    value=true
                    class="mx-3"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="player.prePare[4]"
                    label="題本4"
                    value=true
                    class="mx-3"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="player.prePare[5]"
                    label="題本5"
                    value=true
                    class="mx-3"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="player.prePare[6]"
                    label="題本6"
                    value=true
                    class="mx-3"
                  ></v-checkbox> 
              
                </v-container>  


                <v-textarea
                clearable
                class="ml-10"
                outlined 
                shaped
                rows="2"
                row-height="15"
                v-model="player.memo"
                label="診治備註" 
              ></v-textarea> 

               <button @click="saveP" class="btn btn-success ">儲存.單筆內容</button> 
             
              </v-row> 
          </v-col>

          <v-col cols="12" md="3"  >
           <v-row>
             
          <span class="md:w-full mx-2 text-sm text-gray-900 my-10 " > 預計填單時間： {{ player.quiz_date }}   </span>     

                              <v-date-picker 
                                v-model="player.quiz_date"
                              ></v-date-picker>

                </v-row>  
          </v-col>  
          </v-row>  
      </div> 
     
    </div>   
        </v-tab-item> 
        
        </v-tabs-items>  
    </div>

    <div v-else>
      <h4> 資料完成登入 </h4>
      <v-btn class="btn btn-success" @click=" newPlayer"> 再新增一筆 </v-btn>
      

      
 </div>  
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";  
import SeatDataService from "../services/SeatPrepareService";

import PlayerService from "../services/playerService";
// import SeatDataService from "../services/asask5_MdfPlayer";
 
 
import TutorialDetails from "./asask5_MdfPr";

export default {
  name: "add-tutorial",
  components: { TutorialDetails },
  data() {
    return {

      // - - - - --  systme temp flag 
      
      quxDtaidx:['題本1','題本2','題本3','題本4','題本5','題本6','題本7','題本8'], 
      

      radioGroup: 1,
      includeFiles: false,
      enabled: false,
      toggle_exclusive: [],
       show: true,

       st_sno:"",
       statu01_1:[],
       slted01_1:[],  


      // - - - -- -  list
      
        show: false,
        tutorials: [],
        currentTutorial: null,
        currentIndex: -1,

      // - - - -- -  db strkcturs
        player:{
          quiz_statu:"",
          quiz_date:"",
          memo:"",
          name:"",
          patient_ID:"",
          prePare:[],
          quiz_1_dtl:[],
          quiz_1_fdbk:[],
        },

        tutorial: {
          // title: "",
          // description: "",
          // idx: [],
          // published: false

          quiz_statu:"",
          quiz_date:"",
          memo:"",
          name:"",
          patient_ID:"",
          prePare:[],
          quiz_1_dtl:[],
          quiz_1_fdbk:[],

         
        },

        st: { 
          tmp_idx: "", 
          left_time:"",
          memo:"",
          slted:[],
          statu:[],
          published: false,  

          pos:"",
          sno: "",
          sno_idx: "",
          sno_dtl: "",

          questype:"",
          question:"",
          quesopts:[],
          quesinduc:"",
          quesimge:"",  
        }, 

      amenities: [],
      neighborhoods: [],
      season_states:['s1', 's2', 's3', 's4',],

      opts:['極不好', '不好', '中等程度好','好', '極好',],

        slt_opts: [
          {
            opts_A: '極不好',
            opts_B: '不好',
            opts_C: '中等程度好',
            opts_D: '好',
            opts_E: '極好' 
          },{
            opts_A: '極不滿意',
            opts_B: '不滿意',
            opts_C: '中等程度滿意',
            opts_D: '滿意',
            opts_E: '極滿意' 
          },{
            opts_A: '完全沒有需要',
            opts_B: '有一點需要',
            opts_C: '中等程度需要',
            opts_D: '很需要',
            opts_E: '極需要' 
          },{
            opts_A: '完全不享受',
            opts_B: '有一點享受',
            opts_C: '中等程度享受',
            opts_D: '很享受',
            opts_E: '極享受', 
          },{
            opts_A: '完全不健康',
            opts_B: '有一點健康',
            opts_C: '中等程度健康',
            opts_D: '很健康',
            opts_E: '極健康', 
          },{
            opts_A: '完全不足夠',
            opts_B: '有一點足夠',
            opts_C: '中等程度足夠',
            opts_D: '很足夠',
            opts_E: '極足夠', 
          },{
            opts_A: '完全不能夠',
            opts_B: '有一點能夠',
            opts_C: '中等程度能夠',
            opts_D: '很能夠',
            opts_E: '極能夠', 
          },{
            opts_A: '完全不方便',
            opts_B: '有一點方便',
            opts_C: '中等程度方便',
            opts_D: '很方便',
            opts_E: '極方便', 
          },{
            opts_A: '完全沒有機會',
            opts_B: '少許機會',
            opts_C: '中等程度機會',
            opts_D: '很有機會',
            opts_E: '完全有機會', 
          },{
            opts_A: '完全沒有',
            opts_B: '有一點有',
            opts_C: '一半有一半沒有',
            opts_D: '很有',
            opts_E: '極有'
          },{
            opts_A: '從來沒有',
            opts_B: '不常有',
            opts_C: '一半有一半沒有',
            opts_D: '很常有',
            opts_E: '一直都有' 
          },
        ],

      cut_opts:['術前','術後一個月','術後三個月','術後四個月','術後六個月','術後九個月','術後一年','術後兩年','術後三年'], 
 
      ttemp:[], 


      // - - - - --  systme deep flag
      tab:"",
      tab_support:"",  
      msg:"",
      submitted: false
       
    };
  },
  watch: {
    tutorial: function(tutorial) {
      this.currentTutorial = { ...tutorial };
      this.message = "";
    },
  },
  methods: { 

    saveT() {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description,
        published: false
      };

      TutorialDataService.create(data)
        .then(() => {
          console.log("Created new item successfully!");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    }, 
    saveS() {
      var data = {
        
        sno: this.st.sno,
        tmp_idx: this.st.tmp_idx, 
        left_time: this.st.left_time,         
        memo: this.st.memo, 
        slted: this.st.slted,
        statu: this.st.statu,
        
        pos: this.st.pos,
        sno_idx: this.st.sno_idx,
        sno_dtl:this.st.sno_dtl,

        questype:this.st.questype,
        question:this.st.question,
        quesopts:this.st.quesopts,
        quesinduc:this.st.quesinduc,
        quesimge:this.st.quesimge, 

      }; 
      SeatDataService.create(data)
        .then(() => {
          console.log("Created new item successfully!");
          this.msg="You submitted successfully!"

          // this.submitted = true;
        this.newSt;
        
        })
        .catch(e => {
          console.log(e);
        });
    }, 
    copyopts(idx){ 
        this.st.quesopts[0]= this.slt_opts[idx].opts_A,
        this.st.quesopts[1]= this.slt_opts[idx].opts_B,
        this.st.quesopts[2]= this.slt_opts[idx].opts_C,
        this.st.quesopts[3]= this.slt_opts[idx].opts_D,
        this.st.quesopts[4]= this.slt_opts[idx].opts_E 

    },  
    saveP() {
      var data = {
        quiz_statu : this.player.quiz_statu,
        quiz_date  : this.player.quiz_date, 

        name       : this.player.name,
        patient_ID : this.player.patient_ID,
        prePare    : this.player.prePare,
        
        memo       : this.player.memo, 

        quiz_1_dtl  : this.player.quiz_1_dtl,
        quiz_1_fdbk : this.player.quiz_1_fdbk, 
 
      };

      PlayerService.create(data)
        .then(() => {
          console.log("玩家資料 登記成功");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },   
    newSt() {
      this.submitted = false;
      this.st = {
        pos:"1",
        // sno: "",
        sno_idx: "",
        quesopts:["","","","",""]
         
      };
    },  
    newPlayer() {
      this.submitted = false;
      this.player = {

        name       : "",
        quiz_statu : "",
        quiz_date  : "",
        memo       : "",

        prePare    : "",

        patient_ID : "",
        quiz_1_dtl  : "",
        quiz_1_fdbk : "", 

        quiz_2_dtl  : "",
        quiz_2_fdbk : "",

        quiz_3_dtl  : "",
        quiz_3_fdbk : "", 
 
      };
    },  
    saveS_by_idx(_sno_idx) {
      var data = {
        pos: this.st.pos,
        sno: this.st._sno,
        sno_idx: _sno_idx,  
      };

      SeatDataService.create(data)
        .then(() => {
          console.log("Created new item successfully!");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },  
    autoInstallByforLoop() { 
      
          for(let ii = 13; ii <= 18; ii++){ 
            for (let i = 1; i <= 3; i++) {
                      var data = this.newDataa(ii,i); 
                            SeatDataService.create(data)
                              .then(() => {
                                console.log("Created new item successfully!"); 
                              })
                              .catch(e => {
                                console.log(e);
                              });
                  }  
          } 
           this.submitted = true; 
    }, 
    autoBud() { 
      
       var data = {
        pos: this.st.pos,
        sno: this.st.sno,
        sno_idx: '01',
        tmp_idx: this.st.tmp_idx,

        left_time: this.st.left_time,

        
        memo: this.st.memo,

        slted: this.st.slted,
        statu: this.st.statu
        

      };

      SeatDataService.create(data)
        .then(() => {
          console.log("Created new item successfully!");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });

      var data2 = {
              pos: this.st.pos,
              sno: this.st.sno,
              sno_idx: '02',
              tmp_idx: this.st.tmp_idx, 
              left_time: this.st.left_time, 
              memo: this.st.memo, 
              slted: this.st.slted,
              statu: this.st.statu  
            }; 
      SeatDataService.create(data2)
        .then(() => {
          console.log("Created new item successfully!");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });

        var data3 = {
        pos: this.st.pos,
        sno: this.st.sno,
        sno_idx: '03',
        tmp_idx: this.st.tmp_idx,

        left_time: this.st.left_time,

        
        memo: this.st.memo,

        slted: this.st.slted,
        statu: this.st.statu
        

      };

      SeatDataService.create(data3)
        .then(() => {
          console.log("Created new item successfully!");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });


    }, 
    updateP() {
      const data = { 
        name: this.currentTutorial.name, 
      };

      PlayerService.update(this.currentTutorial.key, data)
        .then(() => {
          this.message = "更新資料,上傳成功!";
        })
        .catch((e) => {
          console.log(e);
        });
    }, 

    onDataChange(items) {
       
      let _tutorials = [];  
      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _tutorials.push({
          key: key,  
          
          quiz_statu : data.quiz_statu,
          quiz_date  : data.quiz_date, 
          memo       : data.memo, 

          name       : data.name,
          patient_ID : data.patient_ID,
          prePare    : data.prePare,
          
          
          // quiz_1_dtl : data.quiz_1_dtl, 
          quiz_1_fdbk: data.quiz_1_fdbk,
          
           
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
    
     
  },
  mounted() {
    TutorialDataService.getAll().on("value", this.onDataChange);
    SeatDataService.getAll().on("value", this.onDataChange);
     
    
    PlayerService.getAll().on("value", this.onDataChange);  

    this.message = "";
    this.currentTutorial = { ...this.tutorial }
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
