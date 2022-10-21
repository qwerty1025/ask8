<template>  
<v-container
      id="scroll-target"
      
      class="overflow-y-auto h-screen"
    >
      <v-row v-scroll:#scroll-target="onScroll"
            align="center" justify="center" >
      </v-row> 
    <div class="flex items-center bg-gray-50 "> 
      <!-- qq :  {{  qq }} -->
      <div class="flex-1 text-center bg-gray-50 px-4 py-2 m-2"> 
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
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
                solo required  dense
                :rules="[() => !!pI || '尚未填寫資料，請留下訊息']"
                :error-messages="errorMessages"
                 
                v-model="pI"  
                placeholder="請輸入病號"
                
                class=" text-xs  px-1" label="病號" >
              </v-text-field>
            </v-col>
              
            <v-col cols="12" sm="6" md="6" > 
              <v-text-field 
                solo required  dense
                :rules="[() => !!pN || '尚未填寫資料，請留下訊息']"
                :error-messages="errorMessages"
               
                placeholder="請輸入病號"
                v-model="pN"      
                class="  text-xs  px-1" label="姓名" >
              </v-text-field>  
            </v-col> 
            
            <v-col cols="12" sm="6" md="6" > 
                <div class="w-full flex flex-wrap mb-4 pr-0 md:pr-4">
                  <!-- <label class="w-full block text-xs mb-2 text-gray-400">手術部位</label> -->
                    <div class="relative w-full border-none">
                      <select dense required v-model="pP" class="bg-gray-200 text-gray-900 appearance-none border-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full">
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
                      <select dense required v-model="pOpp" class="bg-gray-200 text-gray-900 appearance-none border-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full">
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
                      <select dense required v-model="pT" class="bg-gray-200 text-gray-900 appearance-none border-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full">
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
            <a class="text-xs py-2 text-gray-50 bg-blue-600 rounded-t-2xl" > 預排 需測驗項目: </a>
            <div class="bg-blue-100 grid grid-cols-2 gap-1 rounded-b-2xl">
              <v-checkbox
                v-for="n in 8 " 
                v-model="pLv_N_need[n]"
                :label="pLv_N[n]"
                value="true" dense
                class="truncate"
              ></v-checkbox>   
            </div>
            <v-col cols="12" sm="12" md="12"> 
            <!--  ref: https://www.796t.com/content/1545760631.html --> 
            <!-- <a class="bg-red-300">
              <router-link :to="{path:'quiz2/',query: {play_lv: 12345}}">3333跳轉</router-link>  
            </a> -->
            </v-col> 
          </v-row>  
        </form>  
        <!-- {{ pLv_N_need }} -->
               <v-btn
                color="#1976D2"
                dark class="p-13  mr-4"
                @click="validate"
                large
                >
              - 登記 -
              </v-btn>  

              <hr class="my-5">
              <h3>已登記清單 (*)表示功能待上線.未啟用</h3> 
              <div class="mt-10 grid md:grid-cols-2  xs:grid-cols-1 gap-1 rounded-b-2xl">  
                <v-card v-for="VV in QZbking "  bg-gray-100 > 
                  
                  <div class="flex flex-row p-3"> 
                    <div class=" flex items-center"> 
                      <div class="grid grid-cols-2 gap-0.2 mr-3">
                        <a class="text-ms px-2 font-base bg-red-600 text-white rounded-l-full" color="#1976D2" Outlined dark >
                          {{  VV.patient_ID }}
                        </a>
                        <a  class=" font-black bg-blue-600 text-white  px-2 pr-3 rounded-r-full" color="#1976D2" Outlined dark >
                          {{  VV.Operation_part }}
                        </a>
                        <a  class="col-span-2 px-1 font-black text-center text-gray-500 p-1 rounded-b-full" 
                                color="#1976D2" Outlined dark >
                          {{  VV.Asking_times }}
                        </a>
                      </div> 
                      <a class=" xs:text-2xl md:text-4xl font-black "> {{  VV.name  }} </a> 
                    </div>
                   
                    <div class=" flex flex-col justify-end"> 
                        <!-- <v-btn small dark rounded class="flex-none ml-1 " >  修改 </v-btn> -->
                        <v-btn dark color="#2563eb" class="ml-1 " >  載入作答(*) </v-btn>  
                      <a class="text-xs pr-2 pt-1">  預計 {{  VV.cT_D  }} {{  VV.cT_T  }} 作答</a> 
                    </div>  
                  </div>  

                  <div class=" ">  
                    <div class=" flex justify-start">
                      <a class=" pl-4 text-ms pb-2 text-blue-500 "> 備註：{{  VV.memo }} </a>  
                    </div>
                    
                    

                    <div class="bg-gray-100 ">  
                      <div v-if="i > 0 " v-for="(m,i) in VV.pLv_N_need" :key="i" v-show="m == 'true' " >
                       
                        <v-expansion-panels >  
                          <v-expansion-panel >
                          <v-expansion-panel-header>
                            <a class ="text-left text-ms text-gray-900 truncate"> {{ pLv_N[i] }} , {{ cfg(m) }}</a>  
                            <v-spacer></v-spacer> 
                            <v-btn dark class=" ml-1 " >  前往作答(*) </v-btn>  
                            <!-- <v-btn dark class=" ml-1 " >  看結果 </v-btn>   -->
                            
                          </v-expansion-panel-header>
                          <v-expansion-panel-content class = "mb-30">
                            <a class ="text-xs text-gray-500 "> 關鍵指標：</a>
                            <br> 
                            <div class=" grid grid-cols-5  gap-0 ">    </div>
                            
                            <hr class="">
                            <a class ="text-xs text-gray-500 "> 答題細節：</a> 
                             <!-- {{ VV }} -->
                            <hr class="mb-4">
                            <!-- <v-btn class="my-1"   dark> 修改</v-btn> -->
                            <download-csv 
                              dark 
                              class=" bg-green-800 hover:bg-green-500 
                                      w-120 h-120 text-white font-bold 
                                      
                                      py-2 px-4 rounded"
                                      :data   = " TxsAry(VV)"
	                                    :name    = "VV.name  +'-'+ VV.patient_ID +'-'+  VV.Operation_part +'-'+ VV.Asking_times+'.csv'"
                            
                              
                            >下載 {{ VV.name +'_'+  pLv_N[i] }}.CSV
                            </download-csv> 

                            <!-- <download-csv 
                              dark 
                              class=" bg-green-800 hover:bg-green-500 
                                      w-120 h-120 text-white font-bold 
                                      
                                      py-2 px-4 rounded"
                                      :data   = " TxsAry(VV)"
	                                    name    = "[題本１].csv"
                            
                              
                            >下載已填寫資料 [題本１].CSV
                            </download-csv>  -->

                            <!-- name    = "[題本１]資料回報.csv"  
                              :fields="[' Dname' ]"
                              :las="las" -->

                              <!-- :data   = "json_data" -->
                            
                            <!-- @click="deleteTutorial(item)" -->
                          </v-expansion-panel-content>
                          </v-expansion-panel>
 
                          
                         </v-expansion-panels> 
                      </div>  
                    </div> 
                  </div> 
                </v-card>   
            </div> 

              <hr class="my-5">
              <h3>完成進度</h3> 
              <div class="mt-10 grid grid-cols-2 gap-1 rounded-b-2xl">  
                <v-card v-for="n in 8 "  bg-gray-100 > 
                    <div class="flex flex-row grid items-end ">
                      <div class="text-base  p-3 "> {{ pLv_N[n] }} </div>
                      <v-btn large dark rounded 
                            :color="getCHK(pLv_N_need[n],pLv_N_finsh_chk[n])[0]"
                            class="item-end mx-10 mb-3 " > 
                            {{ getCHK(pLv_N_need[n],pLv_N_finsh_chk[n])[1]  }} (*)
                      </v-btn>
                    </div> 
                  </v-card>   
              </div> 
            <hr class="my-5"> 
            

            

            <v-card flat> 
                  <v-btn class="w-full text-left" color="#059669" dark  @click="submit"    >  
                    前往 填寫表單
                  </v-btn>

                  <div class="grid grid-cols-2 gap-1"> 
                    <v-btn class="w-full text-left"  color="#6ee7b7"  @click="goTopage(1)"    >  
                      {{ pLv_N[1] }} 
                    </v-btn>
                    <v-btn class="w-full text-left"  color="#6ee7b7"  @click="goTopage(2)"    >  
                      {{ pLv_N[2] }} 
                    </v-btn>
                    <v-btn class="w-full text-left"  color="#6ee7b7"  @click="goTopage(3)"   >  
                      {{ pLv_N[3] }} 
                    </v-btn>
                    <v-btn class="w-full text-left"  color="#6ee7b7"  @click="goTopage(4)"     >  
                      {{ pLv_N[4] }} 
                    </v-btn>
                    <v-btn class="w-full text-left"  color="#6ee7b7"  @click="goTopage(5)"  >  
                      {{ pLv_N[5] }} 
                    </v-btn>
                    <v-btn class="w-full text-left"  color="#6ee7b7"  @click="goTopage(6)"   >  
                      {{ pLv_N[6] }} 
                    </v-btn> 
                    <v-btn class="w-full text-left"  color="#6ee7b7"  @click="goTopage(7)"  >  
                      {{ pLv_N[7] }} 
                    </v-btn>
                    <v-btn class="w-full text-left"  color="#6ee7b7"  @click="goTopage(8)"   >  
                      {{ pLv_N[8] }} 
                    </v-btn> 
                  </div> 
            </v-card> 

            <hr class="my-5">
      
            


      </v-form>
      </div> 
    </div>

  </v-container>
       
</template> 

<script> 
import PlayerService    from "../services/playerService";
import quizBookingService   from "../services/quizBookingService";

import Vue from 'vue' 
import JsonCSV from 'vue-json-csv'
Vue.component('downloadCsv', JsonCSV)
export default {  
  data() {
    return { 

      json_data: [
            {
                'name': 'Tony Peña',
                'city': 'New York',
                'country': 'United States',
                'birthdate': '1978-03-15',
                'phone': {
                    'mobile': '1-541-754-3010',
                    'landline': '(541) 754-3010'
                }
            },
            {
                'name': 'Thessaloniki',
                'city': 'Athens',
                'country': 'Greece',
                'birthdate': '1987-11-23',
                'phone': {
                    'mobile': '+1 855 275 5071',
                    'landline': '(2741) 2621-244'
                }
            }
        ],
      Dname:33,

      las: {
                'name': 'Tony Peña',
                'city': 'New York',
                'country': 'United States',
                'birthdate': '1978-03-15',
                'phone': {
                    'mobile': '1-541-754-3010',
                    'landline': '(541) 754-3010'
                }
            },
      
      labels: { 
                key:'流水編號', 

                name:'姓名',  
                patient_ID:'病號',
                quiz_date:'登記日期',
                quiz_time:'預計時間',

                cvs_fdbk_1:'指標_1', 
                cvs_fdbk_2:'指標_2', 
                cvs_fdbk_3:'指標_3', 
                cvs_fdbk_4:'指標_4', 
 
                cvs_dtl_1:'第1題',
                cvs_dtl_2:'第2題',
                cvs_dtl_3:'第3題',
                cvs_dtl_4:'第4題',
                cvs_dtl_5:'第5題',
                cvs_dtl_6:'第6題',
                cvs_dtl_7:'第7題',
                cvs_dtl_8:'第8題',
                cvs_dtl_9:'第9題',
                cvs_dtl_10:'第10題',
                cvs_dtl_11:'第11題',
                cvs_dtl_12:'第12題',
                cvs_dtl_13:'第13題',
                cvs_dtl_14:'第14題',
                cvs_dtl_15:'第15題',
                cvs_dtl_16:'第16題',
                cvs_dtl_17:'第17題',
                cvs_dtl_18:'第18題',
                cvs_dtl_19:'第19題',
                cvs_dtl_20:'第20題',
                cvs_dtl_21:'第21題',
                cvs_dtl_22:'第22題',
                cvs_dtl_23:'第23題',
                cvs_dtl_24:'第24題',
                cvs_dtl_25:'第25題',
                cvs_dtl_26:'第26題',
                cvs_dtl_27:'第27題',
                cvs_dtl_28:'第28題',
                quiz_encode:'題本編號',
                  
            },
        // fields: [ 'name','ply_amt','key','phone','plyd'],
        fields: [ 
                        'quiz_encode',
                        'name',
                        'patient_ID',
                        'quiz_date',
                        'quiz_time',
                        
                        // 'cvs_fdbk_1',
                        // 'cvs_fdbk_2',
                        // 'cvs_fdbk_3',
                        // 'cvs_fdbk_4',
                        // 'cvs_dtl_1',
                        // 'cvs_dtl_2',
                        // 'cvs_dtl_3',
                        // 'cvs_dtl_4',
                        // 'cvs_dtl_5',
                        // 'cvs_dtl_6',
                        // 'cvs_dtl_7',
                        // 'cvs_dtl_8',
                        // 'cvs_dtl_9',
                        // 'cvs_dtl_10',
                        // 'cvs_dtl_11',
                        // 'cvs_dtl_12',
                        // 'cvs_dtl_13',
                        // 'cvs_dtl_14',
                        // 'cvs_dtl_15',
                        // 'cvs_dtl_16',
                        // 'cvs_dtl_17',
                        // 'cvs_dtl_18',
                        // 'cvs_dtl_19',
                        // 'cvs_dtl_20',
                        // 'cvs_dtl_21',
                        // 'cvs_dtl_22',
                        // 'cvs_dtl_23',
                        // 'cvs_dtl_24',
                        // 'cvs_dtl_25',
                        // 'cvs_dtl_26',
                        // 'cvs_dtl_27',
                        // 'cvs_dtl_28',
                      ],

      // - - - - - 
      currentTime: Date.now(),
      cT:"",
      QZbking:"",
      
      // 
      qq :"",

      pLv_N:['','1.生活品質量表','2.簡式症狀表(BSRS)','3.上肢功能評估問卷(DASH)','4.上肢功能評估問卷(Quick-DASH)','5.MICHIGAN HAND OUTCOMES ','6.波士頓量表','7.SF-36','8.SF-12'],
              
      // - - - - -
      pS:"",
      pN:"", // 姓名
      pI:"", // ID
      // pN:"請輸入姓名", // 姓名
      // pI:"請輸入病號", // ID
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

        errorMessages:"",
        formHasErrors: false, 

        pLv_N_need:     ['',false,false,true,true,true,false,false,false],
        pLv_N_finsh_chk:['',false,false,false,false,false,false,false,false],
     
    };
  },
  computed: {
      
    },  
  methods: { 
    // getCHK_text(x) {   if(x == true){ return "已完成" }else{ return "加油，還差這一份"} },
     
    TxsAry(items){  
      let ary =[items]; 
      return ary; 
    },
    cfg(h){  
      if( h == true)
      {return "查看填答結果" }
      else
      { return "請點擊 >>> "}
      
    },
    getCHK(x,y) { 

        let ary =["#E539352","毋須填寫"];

        if( y == true)
        { ary =["#43A047","已完成"]; }
        else if( x== false && y== false)  
        { ary =["#424242","毋須填寫"]; } 
        else if( x== true && y== false) 
        { ary =["#E53935","加油，還差這一份"]; }

       
        
        return ary
       }, 

     
    validate () {
        this.$refs.form.validate();
 
        if( this.$refs.form.validate() == false)
        {
              Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: '修改中!', 
                showConfirmButton: false,
                timer: 1200
            }) 
        }
        else if(this.$refs.form.validate() == true )
        {
          // Swal.fire({
          //           position: 'top-end',
          //           icon: 'success',
          //           title: '修改完畢!',
          //           text: '請記得.確認收費',
          //           showConfirmButton: false,
          //           timer: 1200
          //       }) 
          // 開始修繕 內容如下：

          this.saveQzBking();
        }
         
      },

      saveQzBking(){   
        var data = {  
              name: this.pN,
              patient_ID  : this.pI,  
              Operation_times  : this.pT, 
              Operation_part  : this.pOpp, 
              Asking_times  : this.pP,   
              quiz_date   : this.DaTe,  
              quiz_statu  : this.pS,  
              pLv_N_need: this.pLv_N_need,
              pLv_N_finsh_chk: this.pLv_N_finsh_chk,

              cT_D: this.cT_D,
              cT_T: this.cT_T, 
              memo: this.pM,
            };

        quizBookingService.create(data)
          .then(() => { 
            Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: '會員資料上傳完畢!',
                    text: '各別修改內容，請點選',
                    showConfirmButton: false,
                    timer: 1200
                }) 
          })
          .catch(e => { console.log(e); });  
        },
    
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
    

    // - - - - - - - 
    savePtst(){  
 
        var data = {  
              name: this.pN,
              patient_ID  : this.pI,  
              Operation_times  : this.pT, 
              Operation_part  : this.pOpp, 
              Asking_times  : this.pP,   
              quiz_date   : this.DaTe,  
              quiz_statu  : this.pS,  
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

    // - - - - - - - 
    
    updateCurrentTime(){ this.cT = Date.now(); },
    transCurrentTime(cT){ return this.dayjs(cT).format("HH:mm:ss"); },

    QZonDataChange(items) {
     
     let _tutorials = [];  
     items.forEach((item) => {
       let key = item.key;
       let data = item.val();
       _tutorials.push({
        key: key,  
        name: data.name,
        patient_ID: data.patient_ID,  
        Operation_times  : data.Operation_times, 
        Operation_part  : data.Operation_part, 
        Asking_times  : data.Asking_times,   
        quiz_date   : data.quiz_date,  
        quiz_statu  : data.quiz_statu,  
        pLv_N_need: data.pLv_N_need,
        pLv_N_finsh_chk: data.pLv_N_finsh_chk,
        memo: data.memo,

        cT_D: data.cT_D,
        cT_T: data.cT_T
       });
     }); 
     this.QZbking = _tutorials.reverse(); 
   }, 
    
   },
    
   mounted() {
    this.qq=this.$route.query;
    // console.log(_tutorials.title);  
    this.interval = setInterval(this.updateCurrentTime, 1000);
    quizBookingService.getAll().on("value", this.QZonDataChange);  
  },
  beforeDestroy() {
    // PlayerService.getAll().off("value", this.onDataChange);
    quizBookingService.getAll().off("value", this.QZonDataChange);  
  }, 
};
</script>
 