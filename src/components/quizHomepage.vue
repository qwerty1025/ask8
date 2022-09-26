<template>  
    <div class="flex items-center bg-gray-50 h-screen"> 
      <div class="flex-1 text-center bg-gray-50 px-4 py-2 m-2"> 
         
          <v-row> 
            <v-col cols="6" sm="6" md="6" >  
              <v-text-field
                    v-model="cT_D"
                    label="填表日期"
                    prepend-icon="mdi-calendar" 
                  ></v-text-field>
            </v-col> 

            <v-col cols="6" sm="6" md="6" > 
              <v-text-field
                    v-model="cT_T"
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

        <v-card flat>
            <div class="grid grid-cols-2 gap-1"> 
              <v-btn class="w-full text-left"  dark  @click="goTopage(1)"    >  
                {{ pLv_N[1] }} 
              </v-btn>
              <v-btn class="w-full text-left"  dark  @click="goTopage(2)"    >  
                {{ pLv_N[2] }} 
              </v-btn>
              <v-btn class="w-full text-left"  dark  @click="goTopage(3)"   >  
                {{ pLv_N[3] }} 
              </v-btn>
              <v-btn class="w-full text-left"  dark  @click="goTopage(4)"     >  
                {{ pLv_N[4] }} 
              </v-btn>
              <v-btn class="w-full text-left"  dark  @click="goTopage(5)"  >  
                {{ pLv_N[5] }} 
              </v-btn>
              <v-btn class="w-full text-left"  dark  @click="goTopage(6)"   >  
                {{ pLv_N[6] }} 
              </v-btn> 
              <v-btn class="w-full text-left"  dark  @click="goTopage(7)"  >  
                {{ pLv_N[7] }} 
              </v-btn>
              <v-btn class="w-full text-left"  dark  @click="goTopage(8)"   >  
                {{ pLv_N[8] }} 
              </v-btn> 
            </div> 
        </v-card> 
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
      currentTime: Date.now(),
      cT:"",

      pLv_N:['','1.生活品質量表','2.簡式症狀表(BSRS)','3.上肢功能評估問卷(DASH)','4.上肢功能評估問卷(Quick-DASH)','5.MICHIGAN HAND OUTCOMES ','6.波士頓量表','7.SF-36','8.SF-12'],
              
      // - - - - -
      pS:"",
      pN:"未設定", // 姓名
      pI:"未設定", // ID
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
        cT_D:this.dayjs(Date.now()).format("YYYY-MM-DD"),
        cT_T:this.dayjs(Date.now()).format("HH:mm"),
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
      // window.location.assign("http://localhost:8000/#/quiz"+idx+"/pid="+this.pI+"&name="+this.pN +"&process="+this.pP)
      window.location.assign("https://qwerty1025.github.io/ask8/#/quiz"+idx+"/pid="+this.pI+"&name="+this.pN +"&process="+this.pP)
      // window.location.assign( "https://qwerty1025.github.io/ask8/#/quiz"+idx)
     
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

    updateCurrentTime(){ this.cT = Date.now(); },
    transCurrentTime(cT){ return this.dayjs(cT).format("HH:mm:ss"); },
    
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
 