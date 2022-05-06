<template>

<div class=" w-full item-start  ">
 
<div class=" grid grid-cols-3 gap-2 ">   
      <div class= "col-end-5 m-2"> 
        <v-btn @click="saveS" class="btn btn-success ">儲存.單筆內容</v-btn> 
      </div>   
  </div> 
  <div class=" grid grid-cols-3 gap-2  "> 
 

 
      
<!--       
      <div class= "col-span-1 ">
         
        <button @click="saveS" class="btn btn-success ">儲存.單筆內容</button>
                {{ this.msg}} 
      </div>    -->
  </div> 


<div v-if="!submitted">
  <v-tabs
    v-model="tab"
    background-color="primary" 
    fixed-tabs
      
  > 
     
     <v-tab key='k3' href='#k3' v-if="!hide"  >   題庫.編輯工具   </v-tab> 
     <v-tab key='k1' href='#k1' v-if="!hide"  >  功能2 尚未設定 </v-tab>  
    <v-tab key='k5' href='#k5' v-if="!hide"  >   功能3 尚未設定 </v-tab> 

    

  </v-tabs> 

  <v-tabs-items v-model="tab">
 
  <v-tab-item key='k1' value='k1' >  

  </v-tab-item>


        <v-tab-item key='k3' value='k3'> 

<div> 
  
 
  
  <div class ="flex justify-center "> 請依序修改內容  </div>
  
  <div class="flex justify-center w-full my-3">  
      <v-row>  
        <v-col cols="12" md="6"  >
          <div class="flex">
            <v-select
              :items="quxDtaidx"
              v-model="st.pos"
              label="題本序號"
              solo
              rounded
              class="md:w-1/3 mx-2"
            ></v-select>
             
            <v-text-field
              type="number" 
              v-model="st.sno_idx"
              step="1"
              min="0" 
              label="主題號" 
              solo
              rounded
              
              class="md:w-1/3 mx-2"  
            ></v-text-field>  

            <v-text-field
              type="number"   
              v-model="st.sno_dtl"
              step="1"
              min="0"
              label="子題號"
              solo
              rounded
              
              class="md:w-1/3 mx-2" 
            ></v-text-field> 
          </div>
              <v-textarea
                clearable
                outlined 
                shaped
                rows="5"
                row-height="15"
                v-model="st.question"
                label="題目內容"
                rounded
                dense 
              ></v-textarea>

              <v-textarea
                outlined
                shaped 
                rows="2"
                row-height="10"
                v-model="st.quesinduc"
                label="提示" 
              ></v-textarea>

              <v-textarea
                outlined
                shaped 
                rows="1"
                row-height="10"
                v-model="st.memo"
                label="備註" 
              ></v-textarea>
          </v-col>

          <v-col cols="12" md="6"  >
            <v-textarea solo rounded v-model="st.quesopts[0]" label="選項(A)" rows="1" row-height="15" class="text-xs"></v-textarea>
            <v-textarea solo rounded v-model="st.quesopts[1]" label="選項(B)" rows="1" row-height="15" class="text-xs"></v-textarea>
            <v-textarea solo rounded v-model="st.quesopts[2]" label="選項(C)" rows="1" row-height="15" class="text-xs"></v-textarea>
            <v-textarea solo rounded v-model="st.quesopts[3]" label="選項(D)" rows="1" row-height="15" class="text-xs"></v-textarea>
            <v-textarea solo rounded v-model="st.quesopts[4]" label="選項(E)" rows="1" row-height="15" class="text-xs"></v-textarea> 
          </v-col>
   

 <v-tabs
    v-model="tab_support"
    background-color="primary" 
    fixed-tabs 
  >  
    <v-tab key='kk1' href='#kk1' v-if="!hide"  >    
       選項群組 
    </v-tab> 

     <v-tab key='kk3' href='#kk3' v-if="!hide"  >    
        計算分析工具
    </v-tab>

    <v-tab key='kk5' href='#kk5' v-if="!hide"  >    
        輔佐工具.操作提示說明  
    </v-tab>

    

  </v-tabs> 

  <v-tabs-items v-model="tab_support">
 
      <v-tab-item key='kk1' value='kk1' >
        <div class="flex ml-10 justify-center py-4 "> 
                    <v-col > 
                    <p>答案群組</p> 

                       <v-chip-group v-model="st.tmp_idx"  
                                    class=" " >   
                          <v-chip active-class="bg-green-500   text-white text-x"   @click="copyopts(0)"   >{{ slt_opts[0].opts_C}}</v-chip>
                          <v-chip active-class="bg-red-500     text-white text-x"    @click="copyopts(1)"  >{{ slt_opts[1].opts_C}}</v-chip>
                          <v-chip active-class="bg-blue-500    text-white text-x"   @click="copyopts(2)"  >{{ slt_opts[2].opts_C}}</v-chip>
                          <v-chip active-class="bg-yellow-500  text-white text-x"   @click="copyopts(3)"  >{{ slt_opts[3].opts_C}}</v-chip>
                          <v-chip active-class="bg-red-500    text-white text-x"     @click="copyopts(4)"  >{{ slt_opts[4].opts_C}}</v-chip>

                          <v-chip active-class="bg-green-500   text-white text-x"   @click="copyopts(5)"   >{{ slt_opts[5].opts_C}}</v-chip>
                          <v-chip active-class="bg-red-500     text-white text-x"    @click="copyopts(6)"  >{{ slt_opts[6].opts_C}}</v-chip>
                          <v-chip active-class="bg-blue-500    text-white text-x"   @click="copyopts(7)"  >{{ slt_opts[7].opts_C}}</v-chip>
                          <v-chip active-class="bg-yellow-500  text-white text-x"   @click="copyopts(8)"  >{{ slt_opts[8].opts_C}}</v-chip>
                          <v-chip active-class="bg-red-500    text-white text-x"     @click="copyopts(9)"  >{{ slt_opts[9].opts_C}}</v-chip>

                          <v-chip active-class="bg-green-500   text-white text-x"   @click="copyopts(10)"   >{{ slt_opts[10].opts_C}}</v-chip>
                          <!-- <v-chip active-class="bg-green-500   text-white text-x"   @click="copyopts(11)"   >{{ slt_opts[11].opts_C}}</v-chip> -->
                      </v-chip-group>  
                    </v-col>
                    <v-col > 
                     <!-- <p>答案群組B</p> -->
                      

                     <!-- <div 
                                  v-for="(slt_opt, index) in slt_opts"  
                                  :key="index"  >   
                                <v-btn active-class="bg-green-500   text-white text-x" @click="copyopts(index)" >  {{ slt_opts[index].opts_D}} </v-btn> 
                            </div>  -->
<!-- 
                      <v-chip-group v-model="st.tmp_idx" v-for="(slt_opt, index) in slt_opts"  :key="index"  >   
                          <v-chip active-class="bg-green-500 text-white text-x"  @click="copyopts(index)" >  {{ slt_opts[index].opts_D}} </v-chip>
                      </v-chip-group>  -->
                          
                    </v-col>

                   <!--<p>中題號  </p> 
                      <v-chip-group v-model="st.memo"  
                        active-class="bg-yellow-600 text-white text-xs  "
                        class="md:w-1/3 " multiple>   
                          <v-chip active-class="bg-green-500   text-white text-x" value="女" >  成人女 </v-chip>
                          <v-chip active-class="bg-green-500   text-white text-x" value="男" >  成人男 </v-chip>
                          <v-chip active-class="bg-green-500   text-white text-x" value="右手兒童" >  R兒童 </v-chip> 
                          <v-chip active-class="bg-green-500   text-white text-x" value="左手兒童" >  L兒童 </v-chip> 
                      </v-chip-group>  

                   <p>距離</p>
                      <v-chip-group v-model="st.memo"  
                        active-class="bg-yellow-600 text-white text-xs  "
                        class="md:w-1/3 " multiple >   
                          <v-chip active-class="bg-green-500   text-white text-x" value="輕體驗"  >  體驗距離 </v-chip>
                          <v-chip active-class="bg-green-500   text-white text-x" value="練反曲">  反曲弓練習 </v-chip>
                          <v-chip active-class="bg-green-500   text-white text-x" value="長距離">  特殊長距離 </v-chip> 
                      </v-chip-group>   --> 
                  </div >  
      </v-tab-item>
  </v-tabs-items>
 

      <!-- <v-btn icon @click="show = !show" >
        <v-icon x-large class="w-1/4" >{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
 
              <v-expand-transition class="" >
              <div v-show="show" >  
                   
                  <v-divider></v-divider>  
              </div>
            </v-expand-transition>  -->
          </v-row>  
      </div> 
      <button @click="saveS" class="btn btn-success ">儲存.單筆內容</button>
    <!-- <hr>
    
<button @click="saveS" class="btn py-19 w-full btn-success">儲存.單筆內容</button> -->
<!-- <div class ="flex justify-center bg-green-900 text-gray-100 py-2 "> 下個時段  </div>  
    
    -->
     
    </div>   
        </v-tab-item> 
        </v-tabs-items>  
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <v-btn class="btn btn-success" @click="newSt"> 再新增一筆 </v-btn>
      

      
 </div>  
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";  
import SeatDataService from "../services/SeatPrepareService"; 


export default {
  name: "add-tutorial",
  data() {
    return {
      radios:[],
      msg:"",
      quxDtaidx:['1','2','3','4','5','6','7','8'],
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      radioGroup: 1,
      includeFiles: false,
      enabled: false,
      toggle_exclusive: [],
       show: true,

       st_sno:"",
       statu01_1:[],
       slted01_1:[],  

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
 
      menu: false,
      modal: false,
      menu2: false,
      tab:"",
      tab_support:"", 
      

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

      tutorial: {
        title: "",
        description: "",
        idx: [],
        published: false
      },
      submitted: false
       
    };
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
    copyopts(idx){ 
        this.st.quesopts[0]= this.slt_opts[idx].opts_A,
        this.st.quesopts[1]= this.slt_opts[idx].opts_B,
        this.st.quesopts[2]= this.slt_opts[idx].opts_C,
        this.st.quesopts[3]= this.slt_opts[idx].opts_D,
        this.st.quesopts[4]= this.slt_opts[idx].opts_E 

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

    newSt() {
      this.submitted = false;
      this.st = {
        pos:"1",
        // sno: "",
        sno_idx: "",
        quesopts:["","","","",""]
        // tmp_idx: "",
        // left_time:"",
        // memo:"",
        // slted: [],
        // statu:[],
        // published: false
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


    newDataa(_sno,_sno_idx){

 
    var dta = {
            pos: '南',
            sno: _sno.toString(),
            sno_idx: '0'+_sno_idx.toString(),
            tmp_idx: this.st.tmp_idx, 
            left_time: this.st.left_time, 
            memo: this.st.memo, 
            slted: this.st.slted,
            statu: this.st.statu 
          };

      return dta
    },

autoInstallByforLoop() { 
      
for(let ii = 13; ii <= 18; ii++){

  for (let i = 1; i <= 3; i++) {
            var data = this.newDataa(ii,i);

                  SeatDataService.create(data)
                    .then(() => {
                      console.log("Created new item successfully!");
                      // 
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
 


    
    newTutorial() {
      this.submitted = false;
      this.tutorial = {
        title: "",
        description: "",
        published: false
      };
    }, 
    
     
  },
  mounted() {
    TutorialDataService.getAll().on("value", this.onDataChange);
    SeatDataService.getAll().on("value", this.onDataChange);
     

 
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
