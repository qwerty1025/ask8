<template>  
    <!-- <v-container id="scroll-target" class="overflow-y-auto h-screen" > -->
       <div>   sss 
        <VueRadioButton v-model="selectedButton" :options="buttons">
            <template #label="{ props }">
                <img :src="props.icon" width="50" height="50" />
                <span>{{ props.title }}</span>
            </template>
        </VueRadioButton>
    </div>
      <!-- </v-container> -->
           
    </template> 
    
    <script> 
    import PlayerService    from "../services/playerService";
    // import SeatDataService  from "../services/SeatPrepareService";
    
    export default {  
      data() {
        return { 
          // - - - - -  
            selectedButton: "",
            buttons: [
                {
                id: 1,
                icon: "https://vuejs.org/images/logo.svg",
                title: "Vue",
                },
                {
                id: 2,
                icon: "https://vitejs.dev/logo.svg",
                title: "Vite",
                },
            ],
         
        };
      },
      computed: {
          
        },  
      methods: { 
        // getCHK_text(x) {   if(x == true){ return "已完成" }else{ return "加油，還差這一份"} },
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
              Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: '修改完畢!',
                        text: '請記得.確認收費',
                        showConfirmButton: false,
                        timer: 1200
                    }) 
            }
            
            savePtst();
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
        this.qq=this.$route.query;
        // console.log(_tutorials.title);  
        this.interval = setInterval(this.updateCurrentTime, 1000);
        PlayerService.getAll().on("value", this.onDataChange);  
      },
      beforeDestroy() {
        PlayerService.getAll().off("value", this.onDataChange);
      }, 
    };
    </script>
     