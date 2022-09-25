<template> 
    <div id="myvideo" class="w-auto" > 
        <!-- {{ tutorials }}  w-full h-screen -->
  <!-- <v-btn @click="openFullscreen()">openFullscreen</v-btn> -->
   <a class =" text-xs " >  {{  this.dayjs(cT).format("HH:mm:ss")  }}</a> 
<br>
   <a class =" text-xs " >  {{  this.dayjs(cT).day()  }}</a> 
      <div class="overflow-x-scroll "  >  
        <div class=" grid grid-rows-2 grid-flow-col gap-0 "> 
            <div v-for="n in 50" :key="n" class="  " >  
                  <div>
                    <v-btn  class="m-2" color="primary" dark >
                      Q-{{ n }}
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </v-btn>
                    <p class="text-center"> Q-{{ n }}</p>

                  </div>
                    
              </div> 
          </div>
        </div>
        <!-- max-height="400" -->
        <v-card
    v-scroll.self="onScroll"
    class="overflow-y-auto h-screen"
   
  >
    <v-banner
      class="justify-center font-weight-bold text-h5 font-weight-light"
      sticky
    >
    {{ ex4 }} 
 
    </v-banner>

    <v-card-text>
      <div class=" grid grid-cols-7 gap-0 ">  
            <div v-for="n in 90" :key="n" class="  " >    
                <v-checkbox
                  v-model="ex4[n]" 
                  color="red" 
                  :label='dayjs(cT).add(n, "day").format("MM/DD") + weekday[dayjs(cT).add(n, "day").day()] '  
                ></v-checkbox> 

                <!-- <input 
                      type="checkbox" 
                      v-model="ex4[n]" 
                      class="border-gray-300 rounded h-5 w-5"  
                      
                      /><a class="">{{ dayjs(cT).add(n, "day").format("MM/DD")  +   weekday[dayjs(cT).add(n, "day").day()]}}}</a>
                     -->
              </div> 
          </div>
    </v-card-text>
  </v-card>
 
    </div>
</template>
 

<script>
 
import PlayerService    from "../services/playerService";
import SeatDataService  from "../services/SeatPrepareService";
import Cookies          from 'js-cookie'  

export default {
  name: "Quiz-3",  
  data() {
    return { 
      // - - - - - 
        currentTime: Date.now(),
        cT:"",
        play_lv:'1',
        // - - - - - 
        selectedButton: "",
        ex4:[],
        // ex4:[0, 'null',false,true,"",null, null,null,null,null,null, null,null,null,null,null, null,null,null,null,null, null,null,null,null,null, null,null,null,null,null, null,null,null,null,null, null,null,null,null,null],
        weekday:['(日)','(一)','(二)','(三)','(四)','(五)','(六)'],
        //- - - - -

      msg:"",
      dialog: false,
      dialog2: false,
      cut_opts:['術前','術後一個月','術後三個月','術後四個月','術後六個月','術後九個月','術後一年','術後兩年','術後三年'], 
 

      menu2:false,
      DaTe: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10), 
      tab:"k0",
      // radios:[],
      rds:[0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0 ],
       

      rds_BSRS:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      radios:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
       
       
      // - - - - 
      show: false,
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1, 
      
      pS:"",
      pN:"",
      pI:"",
      pP:[],
      pM:"",
      qufd:[],

      test_DTA :[0,3,	3,	2,	2,	2,	2,	1,	1,	3,	2,	2,	2,	3,	3,	2,	2,	2,	3,	3,	3,	1,	3,	3,	3,	3,	3,	2,	3],
      test_DTA2:[0,5,	4,	2,	2,	5,	4,	3,	5,	5,	3,	4,	4,	4,	4,	4,	4,	4,	4,	5,	5,	5,	5,	5,	5,	5,	1,	5,	4],
      test_DTA3:[0,4,	3,	1,	2,	3,	4,	4,	4,	4,	3,	4,	4,	4,	3,	5,	3,	4,	4,	4,	4,	4,	4,	4,	4,	4,	3,	4,	4,],
      test_DTA4:[0,3, 3,	4,  2,	1,	2,	2,	2,	3,	2,	2,	3,	4,	2,	2,	1,	2,	3,	1,	1,	5,	3,	2,	1,	2,	1,	2,	3,	2,	1,	2,	3,	2,	4,	5,	5,  5,  5,	1,	1,	1,	3,	3,	5,  4,	5,	4,	4,	2,	5,	4,	2,  3, 	3,	3,	3,	3,],
      test_DTA5:[0,1,	4,	2,	3,	2,	1,	2,	1,	2,	2,	2,	3,	2,	2,	2,	1,	1,	1,	1,	1,	2,	1,	2,	1,	2,	2,	2,	3,	3,	3,	3,	3,	4,	1,	1,	3,	1,	4,	3,	4,	4,	2,	4,	4,	4,	3,	5,	2,	5,	5,	1,	4,	4,	4,	4,	4,	4,],

      tmplr:{
          memo:"",
          name:"",
          quiz_statu:"",
          quiz_date:"",
          quiz_name:"",

          patient_ID:"",
          prePare:[],
          quiz_1_dtl:[],
          quiz_1_fdbk:[], 
        },

      player:{
          memo:"",
          name:"",
          quiz_statu:"",
          quiz_date:"",
          
          patient_ID:"",
          prePare:[],
          quiz_1_dtl:[],
          quiz_1_fdbk:[], 
           
        },
    };
  }, 
  
  methods: { 
   
    savePtst(idx){   
        if( idx == 1){  
           // 題本 1 計算方式
            this.qufd[0]=Math.round(((((((6-this.rds[3])+(6-this.rds[4])+this.rds[10]+this.rds[15]+this.rds[16]+this.rds[17]+this.rds[18])/7)*4)-4)*(100/16))*10)/10; 
            this.qufd[1]=Math.round( ((((this.rds[5] + this.rds[6] +this.rds[7]+this.rds[11]+this.rds[19]+(6-this.rds[26]))/6)*4)-4)*(100/16)*10)/10;
            this.qufd[2]=Math.round( ((((this.rds[20] + this.rds[21] +this.rds[22]+this.rds[27]                            )/4)*4)-4)*(100/16)*10)/10;       
            this.qufd[3]=Math.round( ((((this.rds[8] + this.rds[9] +this.rds[12] +this.rds[13] +this.rds[14] +this.rds[23] +this.rds[24] +this.rds[25] +this.rds[28]  )/9)*4)-4)*(100/16)*10)/10;
 
        }

        var data = { 
                      
                      name: this.pN,
                      patient_ID  : this.pI, 
                      quiz_statu  : this.pS,
                      quiz_encode : 1,
                      prePare     : this.tmplr.prePare,
                      
                      quiz_date   : this.DaTe, 

                      quiz_dtl    : this.rds, 
                      quiz_fdbk   : this.qufd,  
                      quiz_time: this.transCurrentTime(this.cT),
                   };

        PlayerService.create(data)
          .then(() => {
            this.msg= "測試中，登記成功";
            this.submitted = true;

            this.tab ="k2"; 

            if(this.prePare[2]=="")
            {
              this.tab ="k2"; 
            }



          })
          .catch(e => { console.log(e); });  
    },

    savePdta() { 
      this.qufd[0]=((((((6-this.radios[3])+(6-this.radios[4])+this.radios[10]+this.radios[15]+this.radios[16]+this.radios[17]+this.radios[18])/7)*4)-4)*(100/16)); 
      this.qufd[1]= ((((this.radios[5] + this.radios[6] +this.radios[7]+this.radios[11]+this.radios[19]+(6-+this.radios[26]))/6)*4)-4)*(100/16);
      this.qufd[2]=(((((this.radios[20] + this.radios[21] +this.radios[22]+this.radios[27])/4)*4)-4)*(100/16));           
      this.qufd[3]=( (((this.radios[8] + this.radios[9] +this.radios[12] +this.radios[13] +this.radios[14] +this.radios[23] +this.radios[24] +this.radios[25] +this.radios[28]  )/9)*4)-4)*(100/16);
           

      var data = {  
        name        : this.tmplr.name,
        patient_ID  : this.tmplr.patient_ID,
        prePare     : this.tmplr.prePare, 
        quiz_1_fdbk : this.qufd,
        quiz_name   : this.tmplr.quiz_name,
      };

      PlayerService.create(data)
        .then(() => {
          this.msg= "第一份，登記成功";
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        }); 
    },
    
    cntDat_qu1(){

        // this.qufd[0]=((((((6-this.radios[3])+(6-this.radios[4])+this.radios[10]+this.radios[15]+this.radios[16]+this.radios[17]+this.radios[18])/7)*4)-4)*(100/16)) ;

            // <br/>
            // PSYCH : {{ ((((radios[5] + radios[6] +radios[7]+radios[11]+radios[19]+(6-+radios[26]))/6)*4)-4)*(100/16) }}

            // <br/>
            // SOCIAL : {{ (((((radios[20] + radios[21] +radios[22]+radios[27])/4)*4)-4)*(100/16)) }}
           
            // <br/>
            // ENVIR : {{ ( (((radios[8] + radios[9] +radios[12] +radios[13] +radios[14] +radios[23] +radios[24] +radios[25] +radios[28]  )/9)*4)-4)*(100/16) }}
               
    },

    saveFirstLogin(){
        this.tmplr.quiz_statu = this.pS; 
        this.tmplr.name = this.pN;
        this.tmplr.patient_ID = this.pI;
        this.tmplr.prePare = this.pP; 
        this.dialog = false; 
        this.tab='k3'
        
    }, 
   
    removeCookie() {
      Cookies.remove('login')
    },

     
    onDataChange    (items) {
       
      let _tutorials = [];  
      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _tutorials.push({
          key: key,  

          pos: data.pos,
          sno: data.sno,
          sno_idx: data.sno_idx,
          sno_dtl:data.sno_dtl,
          qzSno: data.qzSno,

          questype:data.questype,
          question:data.question,
          quesopts:data.quesopts,
          quesinduc:data.quesinduc,
          quesimge:data.quesimge,  

            tmp_idx: data.tmp_idx,
            left_time: data.left_time,
            memo: data.memo,
            slted: data.slted,
            statu: data.statu
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
    updateCurrentTime(){ this.cT = Date.now(); },
    transCurrentTime(idx){ return this.dayjs(idx).format("HH:mm:ss"); },

    openFullscreen() {
      var elem = document.getElementById("myvideo");

      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    }
 
// this.cT = Date.now();
    
  }, 
  mounted() {
    
    // console.log(_tutorials.title);  
    this.interval = setInterval(this.updateCurrentTime, 1000);
     SeatDataService.getAll().on("value", this.onDataChange);  
     
    //  SeatDataService.getSome('pos').equalTo(this.play_lv).on("value", this.onDataChange); 
    //  SeatDataService.getSome('pos').equalTo('3').on("value", this.onDataChange); 
    /* Get the element you want displayed in fullscreen mode (a video in this example): */
    

    /* When the openFullscreen() function is executed, open the video in fullscreen.
    Note that we must include prefixes for different browsers, as they don't support the requestFullscreen property yet */
    
  },
  beforeMount(){
    // this.openFullscreen();
    var elem = document.getElementById("myvideo");

      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
 },
  beforeDestroy() {
     SeatDataService.getAll().off("value", this.onDataChange);
  },  
};
</script> 
<style scoped>

.element:fullscreen {
  background-color: #e4708a;
  width: 100vw;
  height: 100vh;
}


</style>