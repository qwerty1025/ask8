<template>  
    <div class="flex items-center bg-gray-50 h-screen"> 
      <div class="flex-1 text-center bg-gray-50 px-4 py-2 m-2"> 
        <v-container>
          <v-row> 
            <v-col cols="6" sm="6" md="6" >  
              <v-text-field
                    v-model="DaTe"
                    label="填表日期"
                    prepend-icon="mdi-calendar" 
                  ></v-text-field>
            </v-col> 

            <v-col cols="6" sm="6" md="6" > 
              <v-text-field
                    v-model="DaaTe"
                    label="填表時間"
                    prepend-icon="mdi-calendar" 
                  ></v-text-field>
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
 
            <v-col cols="12" sm="12" md="12">

            <!--  ref: https://www.796t.com/content/1545760631.html --> 
            <!-- <a class="bg-red-300">
              <router-link :to="{path:'quiz2/',query: {play_lv: 12345}}">3333跳轉</router-link> 

            </a> -->
            </v-col> 
          </v-row> 
        </v-container> 

        <v-card flat>
                        <div class="grid grid-cols-2 gap-1">
                            <div class="" v-for="(item, inx) in pLv_N"  :key="inx" v-if="inx > 0">
                                <!-- <v-btn :to=playLv_Scr_Mdf[index] class="col-span-1 w-full" color="#7CB342" height="80px" dark   >
                                       {{ '〖'+index+'〗'}} - {{ playLv_Name[index]}} 
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </v-btn>   -->
                                <v-btn class="w-full text-left"  dark  @click="goTopage(inx)" v-if="inx > 0"   >  
                                  {{ pLv_N[inx] }} 
                                </v-btn>
                            </div>
                             
                        </div>
 
                    </v-card>

                    
        <!-- <div class="flex w-full flex-row " > 
          <div class="flex-initial w-64 " v-for="(item, inx) in pLv_N"  :key="inx">
            <v-btn  dark  @click="goTopage(inx)" v-if="inx > 0"   >  {{ pLv_N[inx] }} </v-btn> 
          </div> 
        </div> -->
        

        <div class="flex " v-for="(item, inx) in pLv_N"  :key="inx" > 
          <div class="flex-initial m-2">
            
          </div>
           
        </div>


      </div> 
    </div>   
</template>

 <!-- <v-btn  @click="goTopage(2)"   > 進行 2 填答 </v-btn> 
                     <v-btn  @click="goTopage(3)"   > 進行 3 填答 </v-btn>  --> 
                   
                     <!-- <v-btn to="quiz2/" class="ma-2" color="primary" dark >
                       Q- 221
                     </v-btn>  --> 
                   <!-- </v-col>  -->



 

<script> 
import PlayerService    from "../services/playerService";
// import SeatDataService  from "../services/SeatPrepareService";

export default {  
  data() {
    return { 

      pLv_N:['','1.生活品質量表','2.簡式症狀表(BSRS)','3.上肢功能評估問卷(DASH)','4.上肢功能評估問卷(Quick-DASH)','5.MICHIGAN HAND OUTCOMES ','6.波士頓量表','7.SF-36','8.SF-12'],
              
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
      DaaTe: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10), 
      // - - - - - 
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
    goTopage(idx){
      // let v = '';
      // switch(idx) {
      //     case 1:
      //         v ='quiz1';
      //         break;
      //     case 符合數字或字元:
      //         陳述句二;
      //         break;
      //     default:
      //         陳述三;
      //         break;
      // }
      // if( idx == 3)
      // {
      //   v ='quiz3'
      // }
      // else if( idx == 2)
      // {
      //   v ='quiz2'
      // }
      // window.location.assign("http://localhost:8000/#/quiz"+idx)
      window.location.assign( "https://qwerty1025.github.io/ask8/#/quiz"+idx)
     
    },
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
 