<template>
  <div class=" flex justify-center  ">
    
    
    <div class="w-full ">
      <h4 class="mt-10 text-2xl font-black " >請回答下列問題</h4>


        <v-tabs
            v-model="tab"
            background-color="primary" 
            fixed-tabs
              
          > 
            <v-tab key='k1' href='#k1' v-if="!hide"  >    
              題本_1
            </v-tab>

            <v-tab key='k2' href='#k2' > 
              題本_2
            </v-tab>

            <v-tab key='k3' href='#k3' v-if="!hide"  >    
              題本_3
            </v-tab> 
          </v-tabs>  

      <v-tabs-items v-model="tab"> 
        <v-tab-item key='k1' value='k1'>   
           各題，得分摘要：{{radios}}

           <v-list-item-group 
            color="primary" 
            > 
            答題，結果呈現：由以下4個指數 提供填答者，參考
            <br> 
            PHYS : {{ ((((((6-radios[3])+(6-radios[4])+radios[10]+radios[15]+radios[16]+radios[17]+radios[18])/7)*4)-4)*(100/16)) }}

            <br/>
            PSYCH : {{ ((((radios[5] + radios[6] +radios[7]+radios[11]+radios[19]+(6-+radios[26]))/6)*4)-4)*(100/16) }}

            <br/>
            SOCIAL : {{ (((((radios[20] + radios[21] +radios[22]+radios[27])/4)*4)-4)*(100/16)) }}
           
            <br/>
            ENVIR : {{ ( (((radios[8] + radios[9] +radios[12] +radios[13] +radios[14] +radios[23] +radios[24] +radios[25] +radios[28]  )/9)*4)-4)*(100/16) }}
               
            <v-list-item
              v-for="(tutorial, inx) in tutorials"  
              :key="inx"  
              @click="setActiveTutorial(tutorial, inx)" 
            > 
            <v-chip class="text-white text-xs mr-5" color="green"  >
              {{ tutorial.pos }}
            {{ tutorial.sno }}_{{ tutorial.sno_idx }}_{{ tutorial.sno_dtl }}</v-chip>
            
            
            <span class="text-xs text-green-700 font-semibold tracking-wide">{{ tutorial.question }}</span>


<!-- <v-radio-group  v-if="tutorial.sno_idx == inx-1" v-model="radios[tutorial.sno_idx]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index" ></v-radio>   </v-radio-group> -->
                          

                          <v-radio-group  v-if="tutorial.sno_idx == 1" v-model="radios[1]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1" ></v-radio>   </v-radio-group>
                          <v-radio-group  v-if="tutorial.sno_idx == 2" v-model="radios[2]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                          <v-radio-group  v-if="tutorial.sno_idx == 3" v-model="radios[3]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                          <v-radio-group  v-if="tutorial.sno_idx == 4" v-model="radios[4]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                          <v-radio-group  v-if="tutorial.sno_idx == 5" v-model="radios[5]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                          <v-radio-group  v-if="tutorial.sno_idx == 6" v-model="radios[6]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                          <v-radio-group  v-if="tutorial.sno_idx == 7" v-model="radios[7]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                          <v-radio-group  v-if="tutorial.sno_idx == 8" v-model="radios[8]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                          <v-radio-group  v-if="tutorial.sno_idx == 9" v-model="radios[9]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                          <v-radio-group  v-if="tutorial.sno_idx == 10" v-model="radios[10]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                           <v-radio-group  v-if="tutorial.sno_idx == 11" v-model="radios[11]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                          <v-radio-group  v-if="tutorial.sno_idx == 12" v-model="radios[12]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                          <v-radio-group  v-if="tutorial.sno_idx == 13" v-model="radios[13]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                          <v-radio-group  v-if="tutorial.sno_idx == 14" v-model="radios[14]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                          <v-radio-group  v-if="tutorial.sno_idx == 15" v-model="radios[15]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                          <v-radio-group  v-if="tutorial.sno_idx == 16" v-model="radios[16]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                          <v-radio-group  v-if="tutorial.sno_idx == 17" v-model="radios[17]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                          <v-radio-group  v-if="tutorial.sno_idx == 18" v-model="radios[18]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                          <v-radio-group  v-if="tutorial.sno_idx == 19" v-model="radios[19]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                          <v-radio-group  v-if="tutorial.sno_idx == 20" v-model="radios[20]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                          <v-radio-group  v-if="tutorial.sno_idx == 21" v-model="radios[21]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                          <v-radio-group  v-if="tutorial.sno_idx == 22" v-model="radios[22]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                          <v-radio-group  v-if="tutorial.sno_idx == 23" v-model="radios[23]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                          <v-radio-group  v-if="tutorial.sno_idx == 24" v-model="radios[24]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                          <v-radio-group  v-if="tutorial.sno_idx == 25" v-model="radios[25]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>

                          <v-radio-group  v-if="tutorial.sno_idx == 26" v-model="radios[26]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                          <v-radio-group  v-if="tutorial.sno_idx == 27" v-model="radios[27]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                           <v-radio-group  v-if="tutorial.sno_idx == 28" v-model="radios[28]" column v-for="(quesopts, index) in tutorial.quesopts" :key="index" >
                            <v-radio color="red" class="text-white text-xs mr-5" :label="quesopts" :value="index+1"  ></v-radio>   </v-radio-group>
                          
                          
                          <!-- <v-radio-group 
                            column
                            v-for="(quesopts, index) in tutorial.quesopts"  
                            v-if="tutorial.sno_idx == 5"
                            :key="index" 
                            v-model="radios1" 
                          >
                            <v-radio 
                              class="text-white text-xs mr-5"
                              :label="quesopts"
                              color="red"
                              :value="index"
                              @click="get(index, tutorial.sno_idx)"   
                            ></v-radio>  
                          </v-radio-group> -->

 

            </v-list-item>
          </v-list-item-group>

        </v-tab-item>

                <v-tab-item key='k2' value='k2' > 
                  
          <v-list-item-group 
            color="primary" 
            >
            <v-list-item
              v-for="(tutorial, index) in tutorials"  
              :key="index"  
            > 
                  
              <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-blue-100 border-blue-300 " >

              <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.name }} </span> 
                      
 
              </v-list-item-content>   
 
            </v-list-item>
          </v-list-item-group>
        </v-tab-item>


      </v-tabs-items>
    </div> 

        <!-- <div class="w-2/3 ml-10">
          <div v-if="currentTutorial">
            <tutorial-details
              :tutorial="currentTutorial"
              @refreshList="refreshList"
            />
          </div>
          <div v-else>
            <br />
            <p>Please 確認 on a Tutorial...</p>
          </div>
        </div> -->
    <hr> 
  </div>
</template>
 

<script>

import TutorialDetails from "./asask5_Mdf";
 
import SeatDataService from "../services/playerService";

// import PlayerService from "../services/playerService";

export default {
  name: "tutorials-list",
  components: { TutorialDetails },
  

  data() {
    return { 
      tab:"",
      radios:["99","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
      radios1:"null",
      radios2:"null",
      ex7:[],
      ex8: [ { ans: "", },{ ans: "", },{ ans: "", },{ ans: "", },{ ans: "", }],
      // - - - - 
      show: false,
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1
    };
  }, 
  methods: { 
sh(){

alert('gooo');
},

    onDataChange(items) {
       
      let _tutorials = []; 


      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _tutorials.push({
          key: key, 


          // pos: data.pos,
          // sno: data.sno,
          // sno_idx: data.sno_idx,
          // sno_dtl:data.sno_dtl,

          // questype:data.questype,
          // question:data.question,
          // quesopts:data.quesopts,
          // quesinduc:data.quesinduc,
          // quesimge:data.quesimge,
          name       : data.name,
          patient_ID : data.patient_ID,
          prePare    : data.prePare,


          quiz_statu : data.quiz_statu,
          quiz_date  : data.quiz_date,  
          
          memo       : data.memo, 
 
          quiz_1: data.quiz_1,
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
  /* max-width: 750px; */
  margin: auto;
}
</style>
