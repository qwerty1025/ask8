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

          <!-- <v-btn  class="1/5 border-2 border-solid px-2 mx-2" @click="resetTutorial">
            重新設定
          </v-btn>  -->

          <!-- <v-btn  class="1/5 border-2 border-solid px-2 mx-2" @click="deleteTutorial">
            清除資料
          </v-btn> 
          <v-btn  class="border-2 border-solid px-2" @click="removeAllTutorials">
            刪除全部
          </v-btn>  -->
          <v-chip color="red" text-color="white"  class="mt-1 px-3 py-3 text-s font-bold"> {{ message }} </v-chip>
  
        </div> 
    </div>
    
   
    <form>
      
    <div class="flex flex-col my-3">
          <div class="flex"> 
            <v-text-field 
              solo  
              v-model="currentTutorial.patient_ID"     
              v-on:change="updateTutorial" 
              class="w-1/2 text-xs  px-1" label="病號" >
            </v-text-field>  

            <v-text-field 
              solo  
              v-model="currentTutorial.name"     
              v-on:change="updateTutorial" 
              class="w-1/2 text-xs  px-1" label="姓名" >
            </v-text-field>    
          </div>
            

          <div class=" " >
            <v-container fluid  class ="grid grid-cols-2 gap-1 " > 
              <v-checkbox
                v-model="currentTutorial.prePare[0]"
                label="題本1"
                value=true 
                class="mx-3"
              ></v-checkbox>
              <v-checkbox
                v-model="currentTutorial.prePare[1]"
                label="題本2"
                value=true 
                class="mx-3"
              ></v-checkbox>
              <v-checkbox
                v-model="currentTutorial.prePare[2]"
                label="題本3"
                value=true 
                class="mx-3"
              ></v-checkbox>
              <v-checkbox
                v-model="currentTutorial.prePare[3]"
                label="題本4"
                value=true
                class="mx-3"
              ></v-checkbox>

              <v-checkbox
                v-model="currentTutorial.prePare[4]"
                label="題本5"
                value=true
                class="mx-3"
              ></v-checkbox>
              <v-checkbox
                v-model="currentTutorial.prePare[5]"
                label="題本6"
                value=true
                class="mx-3"
              ></v-checkbox>
              <v-checkbox
                v-model="currentTutorial.prePare[6]"
                label="題本7"
                value=true
                class="mx-3"
              ></v-checkbox> 
               <v-checkbox
                v-model="currentTutorial.prePare[7]"
                label="題本8"
                value=true
                class="mx-3"
              ></v-checkbox> 
          
            </v-container>  
          </div>  
          <div class="flex">  

          </div>
          <v-select
              solo
              v-model="currentTutorial.quiz_statu"
              label="評估狀態"  
              class=""
              :items="cut_opts" 
            ></v-select> 

             <v-date-picker 
              v-model="currentTutorial.quiz_date"
            ></v-date-picker> 

          <v-textarea
              clearable
              class="w-full"
              outlined 
              shaped
              rows="2"
              row-height="15"
              v-model="currentTutorial.memo"
              label="診治備註" 
            ></v-textarea> 

             
    </div> 
     <div class="flex justify-end w-full mt-10 my-3">  

        <div class="w-1/6 ">  </div> 
        <div class="w-5/6 ">  </div>

            
      
      </div>  
    </form> 
  </div>

  <div v-else>
    <br />
    <p>Please dd...</p>
  </div>
</template>

<script>
import TutorialDataService from "../services/playerService";

export default {
  name: "tutorial",
  props: ["tutorial"],
  data() {
    return { 
      message: "",
      cut_opts:['術前','術後一個月','術後三個月','術後四個月','術後六個月','術後九個月','術後一年','術後兩年','術後三年'], 
 

show: true,
      currentTutorial: {
        quiz_statu:"",
          quiz_date:"",
          memo:"",
          name:"",
          patient_ID:"",
          prePare:[],
          quiz_1:[],
          quiz_1_fdbk:[],

          quiz_2:[],
          quiz_2_fdbk:[],

          quiz_3:[],
          quiz_3_fdbk:[], 
        
      },
stmp_idx:"",
  

    };
  },
  watch: {
    tutorial: function(tutorial) {
      this.currentTutorial = { ...tutorial };
      this.message = "確認中...";
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
          
        
        // name: this.currentTutorial.name, 
        // sno_idx: this.currentTutorial.sno_idx,
        // sno_dtl:this.currentTutorial.sno_dtl,

        // question:this.currentTutorial.question,

        
        // quesopts:this.currentTutorial.quesopts,
        // quesinduc:this.currentTutorial.quesinduc,


        quiz_statu : this.currentTutorial.quiz_statu,
        quiz_date  : this.currentTutorial.quiz_date, 

        name       : this.currentTutorial.name,
        patient_ID : this.currentTutorial.patient_ID,
        prePare    : this.currentTutorial.prePare,
        
        memo       : this.currentTutorial.memo, 

        // quiz_1_dtl  : this.currentTutorial.quiz_1,
        // quiz_1_fdbk : this.currentTutorial.quiz_1_fdbk, 

        // quiz_2_dtl  : this.currentTutorial.quiz_2,
        // quiz_2_fdbk : this.currentTutorial.quiz_1_fdbk,

        // quiz_3_dtl  : this.currentTutorial.quiz_1,
        // quiz_3_fdbk : this.player.quiz_1_fdbk, 
 
 
         
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
