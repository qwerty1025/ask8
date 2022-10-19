<template> 
    <div class=" flex w-full">  
      <!-- {{ tus }} -->
      <div class="overflow-y-auto w-full h-screen mb-30" > 
        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="(item, inx) in tus" :key="inx"
              :cols="6" >
              <v-card> 
                  <v-card-title > 
                    <v-chip
                      class="mr-2"
                      color="#1976D2"
                      Outlined
                      dark
                    >
                    {{ pLv_N[item.play_lv] }} 
                    </v-chip>
                    {{  item.name }}  
                    <v-spacer></v-spacer>
                    <a class ="text-xs text-gray-500 ">{{  item.quiz_statu}} ,{{ item.quiz_time}} 填寫 </a> 
                    <!-- <a class ="rounded-full py-1 px-3 m-1 bg-red-200 ">{{ item.tk_statu }} </a>  -->
                  </v-card-title> 

                  <v-expansion-panels > 

                  <v-expansion-panel >
                  <v-expansion-panel-header>
                    <v-btn small @click="deleteTutorial(item)" dark> 刪除 </v-btn> 
                    <!-- [ {{ item.play_lv }} ] {{  item.key }} | {{  item.quiz_time }}  <a class ="rounded-full py-1 px-3 m-1 bg-red-200 ">{{ item.tk_statu }} </a>  -->
                    <v-spacer></v-spacer> 
                    
                  </v-expansion-panel-header>
                  <v-expansion-panel-content class = "mb-30">
                    <a class ="text-xs text-gray-500 "> 答題細節 </a>
                    <br> 
                    <div class=" grid grid-cols-5  gap-0 ">  
                      <div v-for="(m,i) in item.quiz_dtl" :key="i" v-if="i >= 1" > 
                          <a class ="text-xs text-gray-900 " v-show="item.play_lv==1" >  {{ '【 ' + pLv_num_1[i] +' 】: '+  item.quiz_dtl[i] }} </a> 
                          <a class ="text-xs text-gray-900 " v-show="item.play_lv==2" >  {{ '【 ' + pLv_num_2[i] +' 】: '+  item.quiz_dtl[i] }} </a> 
                          <!-- <a class ="text-xs text-gray-900 " v-show="item.play_lv==3" >  {{ '【 ' + pLv_num_3[i] +' 】: '+  item.quiz_dtl[i] }} </a>  -->
                          <!-- <a class ="text-xs text-gray-900 " v-show="item.play_lv==4" >  {{ '【 ' + pLv_num_4[i] +' 】: '+  item.quiz_dtl[i] }} </a>  -->
                          <a class ="text-xs text-gray-900 " v-show="item.play_lv==5" >  {{ '【 ' + pLv_num_5[i] +' 】: '+  item.quiz_dtl[i] }} </a> 
                          <a class ="text-xs text-gray-900 " v-show="item.play_lv==6" >  {{ '【 ' + pLv_num_6[i] +' 】: '+  item.quiz_dtl[i] }} </a> 
                          <!-- <a class ="text-xs text-gray-900 " v-show="item.play_lv==7" >  {{ '【 ' + pLv_num_7[i] +' 】: '+  item.quiz_dtl[i] }} </a>  -->
                          <!-- <a class ="text-xs text-gray-900 " v-show="item.play_lv==8" >  {{ '【 ' + pLv_num_8[i] +' 】: '+  item.quiz_dtl[i] }} </a>  -->
                        </div>
                    </div>
 
                    <hr>
                    <a class ="text-xs text-gray-500 "> 指標： </a>

                    <div v-for="(m,i) in item.quiz_fdbk" :key="i"  >
                      <a class ="text-xs text-gray-900 " v-show="item.play_lv==1"> {{ pLv_inx_1[i] +' : '+ item.quiz_fdbk[i] }} </a> 
                      <a class ="text-xs text-gray-900 " v-show="item.play_lv==2"> {{ pLv_inx_2[i] +' : '+ item.quiz_fdbk[i] }} </a> 
                      <a class ="text-xs text-gray-900 " v-show="item.play_lv==3"> {{ pLv_inx_3[i] +' : '+ item.quiz_fdbk[i] }} </a> 
                      <a class ="text-xs text-gray-900 " v-show="item.play_lv==4"> {{ pLv_inx_4[i] +' : '+ item.quiz_fdbk[i] }} </a> 
                      <a class ="text-xs text-gray-900 " v-show="item.play_lv==5"> {{ pLv_inx_5[i] +' : '+ item.quiz_fdbk[i] }} </a> 
                      <a class ="text-xs text-gray-900 " v-show="item.play_lv==6"> {{ pLv_inx_6[i] +' : '+ item.quiz_fdbk[i] }} </a> 
                      <a class ="text-xs text-gray-900 " v-show="item.play_lv==7"> {{ pLv_inx_7[i] +' : '+ item.quiz_fdbk[i] }} </a> 
                      <a class ="text-xs text-gray-900 " v-show="item.play_lv==8"> {{ pLv_inx_8[i] +' : '+ item.quiz_fdbk[i] }} </a> 
                    </div> 
                    <br>
                    <v-btn class="my-1"  @click="deleteTutorial(item)" dark> 刪除 </v-btn>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel >
                  <v-expansion-panel-header>
                    <a class="text-xs"> 詳細作答.資訊: </a>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content class = "mb-30">
                    
                    <a class ="text-xs text-gray-500 ">{{item}} </a>
 
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels >  
              </v-card>
            </v-col>
          </v-row>
        </v-container> 
      </div>  
    </div>
</template> 
<script>
 
import PlayerService    from "../services/playerService"; 

export default {
  name: "Quiz-3",  
  data() {
    return { 
        // - - - - - 
        tus:[],
        currentTime: Date.now(),
        cT:"", 
        // - - - - -  
        pLv_N:['','1.生活品質量表','2.簡式症狀表(BSRS)','3.上肢功能評估問卷(DASH)','4.上肢功能評估問卷(Quick-DASH)','5.MICHIGAN HAND OUTCOMES ','6.波士頓量表','7.SF-36','8.SF-12'],
        pLv_num_1:[ ''
                  ,'1','2','3','4','5','6','7','8','9','10',
                  '11','12','13','14','15','16','17','18','19','20',
                  '21','22','23','24','25','26','27','28'
                  ],

        pLv_num_2:[ ''
                  ,'1','2','3','4','5','6','7','8','9','10',
                  '11','12','13','14','15','16','17','18','19','20',
                  '21','22','23','24','25','26','27','28'
                  ],
        pLv_num_5:[ ''
                  ,'1','2','3','4','5','6','7','8','9','10',
                  '11','12','13','14','15','16','17','18','19','20',
                  '21','22','23','24','25','26','27','28','29','30',
                  '31','32','33','34','35','36','37','38','39','40',
                  '41','42','43','44','45','46','47','48','49','50',
                  '51','52','53','54','55','56','57','58','59','60',

                  ],
        pLv_num_6:[ ''
                  ,'1','2','3','4','5','6','7','8','9','10',
                  '11','12','13','14','15','16','17','18','19' 

                  ],

        pLv_inx_1:['PHYS ','	PSYCH	','SOCIAL ','ENVIR '],
        pLv_inx_2:['GSI', 'PST ', 'ADL'],
        pLv_inx_3:['DASH失能/症狀分數 ','	Quick DASH	','工作自選 ','音樂自選 '], 
        pLv_inx_4:['Quick DASH','工作自選 ','音樂自選 '],

        pLv_inx_5:['Overall Hand Function   ','	Activities of Daily Living	','Aesthetics ','Satisfaction '],
        
        pLv_inx_6:['Symptom Score', 'Function Score '],
        pLv_inx_7:['PCS ','	MCS	','AGG_PHYS ','AGG_MENT ','生理功能 PF','角色限制－生理 RP ','身體疼痛 BP','一般自覺健康 GH','活力狀態 VT','社會功能 SF','角色限制－情緒 RE','心理健康 MH'], 
        pLv_inx_8:['PCS ','	MCS	','AGG_PHYS ','AGG_MENT ','生理功能 PF','角色限制－生理 RP ','身體疼痛 BP','一般自覺健康 GH','活力狀態 VT','社會功能 SF','角色限制－情緒 RE','心理健康 MH'], 

        //- - - - - 
        pS:"",
        pN:"Test_0925",
        pI:"",
        pP:[],
        pM:"",

        qufd:[],   
    };
  }, 
  
  methods: {  
    deleteTutorial(item) {
      PlayerService.delete(item.key)
            .then(() => {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: '修改成功',
                showConfirmButton: false,
                timer: 500
              }) 
            })
            .catch((e) => {
              console.log(e);
            });
        },

    Play_onDataChange    (items) { 
       let _tutorials = [];  
       items.forEach((item) => {
         let key = item.key;
         let data = item.val();
         _tutorials.push({
           key: key,   
           quiz_time:data.quiz_time,  

           name: data.name,
           patient_ID: data.patient_ID,
           quiz_statu: data.quiz_statu,

           play_lv: data.play_lv,
           quiz_dtl: data.quiz_dtl,
           quiz_fdbk : data.quiz_fdbk,
           
           pLv_N_need: data.pLv_N_need,
           
           memo: data.memo,
           tk_statu: data.tk_statu,
          
  
         });
       }); 
       this.tus = _tutorials.reverse(); 
     },  
    updateCurrentTime(){ this.cT = Date.now(); },
    transCurrentTime(idx){ return this.dayjs(idx).format("YYYY-MM-DD HH:mm:ss"); },  
  }, 
  mounted() { 
    this.interval = setInterval(this.updateCurrentTime, 1000);
    // 設定，讀取全部的 
    PlayerService.getAll().on("value", this.Play_onDataChange);  
    
    // 設定，某屬性.等於一個值
    // PlayerService.getAll().orderByChild("patient_ID").equalTo(445).on("value", this.Play_onDataChange);  
    
    // 設定，某屬性.等於一個值
    // PlayerService.getT("patient_ID").orderByValue().on("value", this.Play_onDataChange);  
    

    // PlayerService.getSome('name').equalTo('chang').on("value", this.Play_onDataChange);
    //  SeatDataService.getSome('pos').equalTo(this.play_lv).on("value", this.onDataChange); 
    //  SeatDataService.getSome('pos').equalTo('3').on("value", this.onDataChange); 
  },
  beforeDestroy() {
    PlayerService.getAll().off("value", this.Play_onDataChange);
  },  
};
</script> 