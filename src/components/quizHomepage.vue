<template> 
   
        
    <div class="flex flex items-center bg-gray-50 h-screen">
      <!-- <div class="flex-1 text-gray-900 text-center bg-gray-100 px-4 py-2 m-2">歡迎填答</div> -->
      <div class="flex-1 text-center bg-gray-50 px-4 py-2 m-2">
        <div class="m-3">
                   <v-container>
                          <v-row> 
                            <v-col cols="12" sm="12" md="12" > 
                              <v-menu
                                v-model="menu2"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field
                                    v-model="DaTe"
                                    label="填表日期"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                  ></v-text-field>
                                </template>
                                <v-date-picker
                                  v-model="date"
                                  @input="menu2 = false"
                                ></v-date-picker>
                              </v-menu>
                            </v-col> 

                            <v-col cols="12" sm="6" md="6" >
                              <v-text-field 
                                solo  
                                v-model="pI"  
                                
                                class=" text-xs  px-1" label="病號" >
                              </v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="6" > 
                              <v-text-field 
                                solo  
                                v-model="pN"      
                                class="  text-xs  px-1" label="姓名" >
                              </v-text-field>  
                            </v-col>

                            <!-- <v-col cols="12" sm="6" md="6" >
                              <v-select
                                solo 
                                label="評估狀態"  
                                class=""
                                v-model="pS" 
                                :items="cut_opts" 
                              ></v-select>
                            </v-col>  -->
                            <!-- cut_opts:['術前','術後一個月','術後三個月','術後四個月','術後六個月','術後九個月','術後一年','術後兩年',],  -->
                            <v-col cols="12" sm="6" md="6" > 
                                <div class="w-full flex flex-wrap mb-4 pr-0 md:pr-4">
                                  <!-- <label class="w-full block text-xs mb-2 text-gray-400">手術部位</label> -->
                                    <div class="relative w-full border-none">
                                      <select v-model="pP" class="bg-gray-200 text-gray-900 appearance-none border-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full">
                                          <option value="未設定" class="pt-6">評估狀態?</option>
                                          <option value="術前" >術前</option>  
                                          
                                          <br>
                                          <option value="術後１個月" >術後１個月</option> 
                                          <option value="術後３個月" >術後３個月</option>
                                          <option value="術後６個月" >術後６個月</option>
                                          <option value="術後９個月" >術後９個月</option> 
                                          <br>
                                          <option value="術後１年" >術後1年</option>
                                          <option value="術後２年" >術後2年</option>
                                          <option value="術後３年" >術後3年</option> 
                                      </select> 
                                    </div>
                                </div> 
                            </v-col> 

                            <v-col cols="12" sm="3" md="3" > 
                                <div class="w-full flex flex-wrap mb-4 pr-0 md:pr-4">
                                  <!-- <label class="w-full block text-xs mb-2 text-gray-400">手術部位</label> -->
                                    <div class="relative w-full border-none">
                                      <select v-model="pOpp" class="bg-gray-200 text-gray-900 appearance-none border-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full">
                                          <option value="未設定" class="pt-6">手術部位?</option>
                                          <option value="左手" >左手</option>
                                          <option value="右手" >右手</option> 
                                      </select> 
                                    </div>
                                </div> 
                            </v-col> 

                            <v-col cols="12" sm="3" md="3" > 
                                <div class="w-full flex flex-wrap mb-4 pr-0 md:pr-4">
                                  <!-- <label class="w-full block text-xs mb-2 text-gray-400">手術次數</label> -->
                                    <div class="relative w-full border-none">
                                      <select v-model="pT" class="bg-gray-200 text-gray-900 appearance-none border-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full">
                                          <option value="未設定" class="pt-6">手術次數?</option>
                                          <option value="1" >1</option>
                                          <option value="2" >2</option> 
                                          <option value="3" >3</option>
                                          <option value="4" >4</option> 
                                          <option value="5" >5</option>
                                          <option value="6" >6</option> 
                                          <option value="7" >7</option>
                                          <option value="8" >8</option> 
                                          <option value="7" >9</option>
                                          <option value="8" >10</option> 
                                      </select> 
                                    </div>
                                </div> 
                            </v-col>   

                            <v-col cols="12">
                              <v-textarea
                                clearable
                                class="w-full"
                                outlined 
                                shaped
                                rows="2"
                                row-height="15"
                                v-model="pM"
                                
                                label="診治備註" 
                              ></v-textarea>
                            </v-col> 

                            <v-col cols="12" dark sm="12" md="12">
                              <v-btn 
                                @click="savePtst()"
                              > 進行填答 </v-btn>
                            </v-col> 
                          </v-row>
                        </v-container>
                        
 
 
                </div> 
      </div> 
    </div>   
</template>



 

<script> 
import PlayerService    from "../services/playerService";
// import SeatDataService  from "../services/SeatPrepareService";

export default {  
  data() {
    return { 

      // - - - - -
      pS:"",
      pN:"", // 姓名
      pI:"", // ID
      pP:'未設定', // 評估狀態
      pT:'未設定', // 手術次數
      pOpp:'未設定', // 手術部位
      pM:"",
      qufd:[],

      menu2:false,
      DaTe: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10), 
      // - - - - - 
        currentTime: Date.now(),
        cT:"",
        // selt_lv:this.$route.params.play_lv,
        // playLv_Scr:['','Quiz/1','Quiz/2','Quiz/3','Quiz/4','Quiz/5','Quiz/6','Quiz/7','Quiz/8'],
        // cut_opts:['未設定','左手','右手']
        // - - - - - 
  
    };
  },  
  methods: {  
    savePtst(){  
 
        var data = { 
              
              name: this.pN,
              patient_ID  : this.pI, 
              
              Operation_times  : this.pT, 
              Operation_part  : this.pOpp, 
              Asking_times  : this.pP,  
              
              
              quiz_date   : this.DaTe, 

              quiz_statu  : this.pS, // 還沒用到

              // quiz_dtl    : this.rds, 
              // quiz_fdbk   : this.qufd,  
              // quiz_time: this.transCurrentTime(this.cT),
           };

        PlayerService.create(data)
          .then(() => { 
            Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: '修改完畢!',
                    text: '請記得.確認收費',
                    showConfirmButton: false,
                    timer: 1200
                }) 
          })
          .catch(e => { console.log(e); });  
        },
    
   },
    
   mounted() {
    // console.log(_tutorials.title);  
    this.interval = setInterval(this.updateCurrentTime, 1000);
    PlayerService.getAll().on("value", this.onDataChange);  
  },
  beforeDestroy() {
    PlayerService.getAll().off("value", this.onDataChange);
  }, 
};
</script>
 