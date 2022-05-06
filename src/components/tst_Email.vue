
 
 <template>  
  <form ref="form" @submit.prevent="sendEmail">  
    <v-row>
            <label>Name</label>
            <v-text-field
              type="text" 
              v-model="to_name"
              name="name"
              placeholder="Your Name"
            ></v-text-field>

            <label>Email</label>
            <v-text-field 
              type="email" 
              v-model="email"
              name="email"
              placeholder="Your Email"
              ></v-text-field>

            <label>Attach file:</label>
            <input type="file" name="my_file"> 

            <hr>
            <br>
            <label>Message</label>

            <v-textarea
              solo
              name="message"
              v-model="message"
              cols="30" rows="5"
              placeholder="Message">
            </v-textarea> 
            <!-- <input type="submit" value="Send">{{msg}} -->
            <input type="submit" value="Submit"> 
          </v-row>
           
  </form>
</template>

<script>



// import TutorialDetails from "./asask5_Mdf";
// import SeatDataService from "../services/SeatPrepareService";
// import PlayerService from "../services/playerService";

import emailjs from 'emailjs-com';
 
export default {
  name: 'ContactUs',
  data() {
    return {
      from_name: '線上測試員',
      to_name: '',
      email: '',
      message: '',
      file:'',
    }
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_b41xp3e', 'template_e7yn6cn', this.$refs.form, 'tf3unL19JCsaTdxOY')
        .then((result) => {
            alert(result.text) ;
            console.log('SUCCESS!', result.text);
        }, (error) => {
            alert(error.text) ;
          //  this.msg= error.text;
            console.log('FAILED...', error.text);
        });
    }, 

    hhh(){
      
    }

    


    // sendEmail() {
    //   const data = {   
    //       name: this.name,
    //       email: this.email,
    //       message: this.message  
    //   };

    //   try {
    //     emailjs.sendForm('service_b41xp3e', 'template_e7yn6cn', e.target,'tf3unL19JCsaTdxOY',
    //     {
    //       name: this.name,
    //       email: this.email,
    //       message: this.message
    //     })
    //     alert('sent!')

    //   } catch(error) {
    //     alert('error = ' + error)
    //       console.log({error})
    //   }
    //   // Reset form field
    //   this.name = ''
    //   this.email = ''
    //   this.message = ''
    // },

    
  }  
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
  max-width: 750px;
  margin: auto;
}
</style>
