<template>
  <div v-if="currentTutorial" class="edit-form">
         <div class="mt-5 flex justify-end w-full"> 
    

 <div class="  text-xs align-text-bottom">
               
            </div> 

        <div class="form-group w-2/3 flex"> 
        <!-- <button class="border-2 border-solid px-2 mr-2"  >
          清除資料
        </button> -->

        <v-btn  class="1/5 border-2 border-solid px-2 mx-2" @click="updateTutorial">
          上傳更新
        </v-btn> 

        <v-btn  class="1/5 border-2 border-solid px-2 mx-2" @click="resetTutorial">
          重新設定
        </v-btn> 

        <!-- <v-btn  class="1/5 border-2 border-solid px-2 mx-2" @click="deleteTutorial">
          清除資料
        </v-btn> 
        <v-btn  class="border-2 border-solid px-2" @click="removeAllTutorials">
          刪除全部
        </v-btn>  -->
        <v-chip color="red" text-color="white"  class="mt-1 px-3 py-3 text-s font-bold"> {{ message }} </v-chip>

        <!-- <v-alert   type="info" > </v-alert> -->
          
      </div>
      
           


    </div>
    
   
    <form>
      

     <div class="flex justify-end w-full mt-10 my-3">  

        <div class="w-1/6 "></div>
         <div class="w-5/6 ">
      <v-row>  
         <div class="py-3 px-10 text-lg font-bold bg-green-500 text-white " >  
            {{ currentTutorial.pos }} _ {{ currentTutorial.sno_idx }} _ {{ currentTutorial.sno_dtl }}  </div>
          
          <div class="flex">
              <v-text-field solo  v-model="currentTutorial.pos"     v-on:change="updateTutorial" class="w-1/3 text-xs  px-1" label="題本序號"    ></v-text-field>   
              <v-text-field solo  v-model="currentTutorial.sno_idx" v-on:change="updateTutorial" class="w-1/3 text-xs  px-1" label="主題號"  ></v-text-field>   
              <v-text-field solo  v-model="currentTutorial.sno_dtl" v-on:change="updateTutorial" class="w-1/3 text-xs  px-1" label="子題號"  ></v-text-field>   
          </div>   

          <v-textarea
                clearable
                outlined 
                shaped
                rows="2"
                row-height="15"
                v-model="currentTutorial.question"
                label="題目內容"
                v-on:change="updateTutorial"
                rounded
                dense 
              ></v-textarea>

           <span class="w-1/6 text-lg mt-3" > (A) </span>  <div class="w-5/6"> <v-textarea solo rounded v-model="currentTutorial.quesopts[0]" label="選項(A)" rows="1" row-height="15" class="text-xs"></v-textarea> </div> 
           <span class="w-1/6 text-lg mt-3" > (B) </span>  <div class="w-5/6"> <v-textarea solo rounded v-model="currentTutorial.quesopts[1]" label="選項(B)" rows="1" row-height="15" class="text-xs"></v-textarea> </div>
           <span class="w-1/6 text-lg mt-3" > (C) </span>  <div class="w-5/6"> <v-textarea solo rounded v-model="currentTutorial.quesopts[2]" label="選項(C)" rows="1" row-height="15" class="text-xs"></v-textarea> </div>
           <span class="w-1/6 text-lg mt-3" > (D) </span>  <div class="w-5/6"> <v-textarea solo rounded v-model="currentTutorial.quesopts[3]" label="選項(D)" rows="1" row-height="15" class="text-xs"></v-textarea> </div>
           <span class="w-1/6 text-lg mt-3" > (E) </span>  <div class="w-5/6"> <v-textarea solo rounded v-model="currentTutorial.quesopts[4]" label="選項(E)" rows="1" row-height="15" class="text-xs"></v-textarea> </div> 
         


 <v-chip-group v-model="stmp_idx"  
                                    class="" >   
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

          </v-row>  
          </div>
      </div> 

    </form>

    <!-- <button
      class="border-2 border-solid px-2 mr-2"
      v-if="currentTutorial.published"
      @click="updatePublished(false)"
    >
      未發佈
    </button>
    <button
      v-else
      class="border-2 border-solid px-2 mr-2"
      @click="updatePublished(true)"
    >
      儲存
    </button> -->

    
  </div>

  <div v-else>
    <br />
    <p>Please 確認 on a Tutorial...</p>
  </div>
</template>

<script>
import TutorialDataService from "../services/SeatPrepareService";

export default {
  name: "tutorial",
  props: ["tutorial"],
  data() {
    return { 
      message: "",

show: true,
      currentTutorial: {
        pos:"",
        sno: "",
        sno_idx: "",
        sno_dtl: "",
        question:"",
        quesopts:[],

        left_time:"",
        tmp_idx:"",
        memo:"",
        slted:[],
        statu:[] 
        
      },
stmp_idx:"",
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

    };
  },
  watch: {
    tutorial: function(tutorial) {
      this.currentTutorial = { ...tutorial };
      this.message = "";
    },
  },
  methods: {
    updatePublished(status) {
      TutorialDataService.update(this.currentTutorial.key, {
        published: status,
      })
        .then(() => {
          this.currentTutorial.published = status;
          this.message = "The status was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    // clearAll(idx)
    // {
    //    const data = {
         
    //     tmp_idx: "", 
    //     left_time: "",
    //     memo: "",

    //     // slted: this.currentTutorial.slted,
    //     // statu: this.currentTutorial.statu

         
    //   }

    //   TutorialDataService.update(this.currentTutorial.key, data)
    //     .then(() => {
    //       this.message = "更新成功!";
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });

    // },
    resetTutorial()
    {
      this.currentTutorial.tmp_idx="";
      this.currentTutorial.left_time="";
      this.currentTutorial.memo="";

      const data = {   
        tmp_idx: "", 
        left_time: "",
        memo: "",  
      };

      TutorialDataService.update(this.currentTutorial.key, data)
        .then(() => {
          this.message = "資料，清除成功 !";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateTutorial() {
      const data = {
         
        // tmp_idx: this.currentTutorial.tmp_idx,

        // left_time: this.currentTutorial.left_time,
        // memo: this.currentTutorial.memo,
 
        // slted: this.currentTutorial.slted,
        // statu: this.currentTutorial.statu,
        
        pos: this.currentTutorial.pos, 
        sno_idx: this.currentTutorial.sno_idx,
        sno_dtl:this.currentTutorial.sno_dtl,

        question:this.currentTutorial.question,

        
        quesopts:this.currentTutorial.quesopts,
        quesinduc:this.currentTutorial.quesinduc,

        // questype:this.currentTutorial.questype,
        // quesimge:this.currentTutorial.quesimge, 
 
         
      };

      TutorialDataService.update(this.currentTutorial.key, data)
        .then(() => {
          this.message = "更新資料,上傳成功!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteTutorial() {
      TutorialDataService.delete(this.currentTutorial.key)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    },

    
    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    copyopts(idx){ 
        this.currentTutorial.quesopts[0]= this.slt_opts[idx].opts_A,
        this.currentTutorial.quesopts[1]= this.slt_opts[idx].opts_B,
        this.currentTutorial.quesopts[2]= this.slt_opts[idx].opts_C,
        this.currentTutorial.quesopts[3]= this.slt_opts[idx].opts_D,
        this.currentTutorial.quesopts[4]= this.slt_opts[idx].opts_E 

    },
  },
  mounted() {
    this.message = "";
    this.currentTutorial = { ...this.tutorial }
  },
};
</script>

<style>
.edit-form {
  /* max-width: 300px;
  margin: auto; */
}
</style>
