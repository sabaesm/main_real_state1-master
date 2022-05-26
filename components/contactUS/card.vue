<template>
  <div class="medium_container contactUs ">
    <v-col cols="12 pa-0 ma-0" class="mainCard">
      <div class="d-flex flex-column flex-md-row">
        <v-col cols="12" md="7">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-col class=" ma-0 pa-0  12">
              <div class=" ma-0 pa-0  registration d-flex flex-wrap">
                <v-col cols="12 " md="6">
                  <v-text-field
                    v-model="form.Customer_name"
                    :rules="nameRules"
                    label="نام و نام خانوادگی"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12 " md="6">
                  <v-text-field
                    v-model="form.Phone"
                    :counter="11"
                    :rules=" phoneRules"
                    label="شماره تماس"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12 " md="6">
                  <v-text-field
                    v-model="form.country"
                    :rules="countryRules"
                    label="استان"
                    required
                  ></v-text-field>
                </v-col>
                  <v-col cols="12 " md="6">
                  <v-text-field
                    v-model="form.city"
                    :rules="countryRules"
                    label="شهر"
                    required
                  ></v-text-field>
                </v-col>  <v-col cols="12 " md="6">
                  <v-text-field
                    v-model="form.country"
                    :rules="countryRules"
                    label="منطقه"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12 " md="6">
                  <v-text-field
                    v-model="form.city"
                    :rules="cityRules"
                    label="شهرستان"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12 " md="6">
                  <v-select
                    v-model="form.select"
                    :items="items"
                    :rules="[(v) => !!v || 'Item is required']"
                    label="منطقه"
                    required
                  ></v-select>
                </v-col>
              </div>
            </v-col>
            <v-row class="ma-0 pa-0 check_box">
            <v-col cols="4" md="2">
             <v-checkbox
              label="ویلا"
              hide-details
            ></v-checkbox>
             </v-col>
                 <v-col cols="4" md="2">
             <v-checkbox
              label="مغازه و تجاری"
              hide-details
            ></v-checkbox>
             </v-col>  
               <v-col cols="4" md="2">
             <v-checkbox
              label=" آپارتمان "
              hide-details
            ></v-checkbox>
             </v-col> <v-col cols="4" md="2">
             <v-checkbox
              label="خانه ویلایی"
              hide-details
            ></v-checkbox>
             </v-col>   <v-col cols="4" md="2">
             <v-checkbox
              label="باغ"
              hide-details
            ></v-checkbox>
             </v-col>   <v-col cols="4" md="2">
             <v-checkbox
              label="فلت"
              hide-details
            ></v-checkbox>
             </v-col>
                 <v-col cols="4" md="2">
             <v-checkbox
              label="دوبلکس"
              hide-details
            >
            </v-checkbox>
             </v-col>
                 <v-col cols="4" md="2">
             <v-checkbox
              label="تریبلکس"
              hide-details
            ></v-checkbox>
             </v-col>
                 <v-col cols="4" md="2">
             <v-checkbox
              label="نوساز"
              hide-details
            ></v-checkbox>
             </v-col>
            </v-row>
              <v-col
        cols="12"
        class="mt-5 pa-0"
      >
        <v-textarea
          label="متن  "
          hint="Hint text"
          placeholder="متن خود را بنویسید."
        ></v-textarea>
      </v-col>
     <v-col cols="12" lg="10" class="d-flex justify-content-center">
        <v-btn  class="mr-4 mt-5" @click="submitForm">
              ثبت اطلاعات
            </v-btn>
     </v-col>
          </v-form>
        </v-col>
        <v-col cols="5" class="picrur_person d-none d-md-flex">
          <img class="person_img" src="https://picsum.photos/200" />
        </v-col>
      </div>
    </v-col>
  </div>
</template>
<script>
import {vilayab} from '../../service/postApi'
export default {
  data: () => ({
    valid: true,
    Customer_name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 30) || "Name must be less than 10 characters",
    ],
    form:{
    Phone: "",
     country: "",
      city: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    },
    vilayab:[ 


    ],
    phoneRules: [
      (v) => !!v || "phone is required",
      
    ],
      countryRules: [
      (v) => !!v || "country is required",
      
    ],
      cityRules: [
      (v) => !!v || "city is required",
      
    ],

  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    
    },
      test(){

      },
      submitForm(){
        // console.log(this.form)
        var form_data = new FormData();

      for ( var key in this.form ) {
          form_data.append(key, item[key]);
      }
      vilayab(form_data).then( res =>console.log( 'hi'))
      // .then( res=>console.log( res.data))

      },
    mounted() {
        

    },
  },
};
</script>
<style >
 .contactUs  .v-text-field .v-input__control .v-input__slot{
border: none;
border-bottom: 1.5px solid  #9D9D9D !important;
border-radius: 0px;
}
 .contactUs .v-application .secondary--text{
color: #519FFF!important;
border-radius: 20px!important;
}
 .contactUs .theme--light.v-btn.v-btn--has-bg{
background: #519FFF!important;
color: #ffff;
font-size: 18px;
font-weight: 700;
}
 .contactUs .v-input--selection-controls .v-input__slot>.v-label, .v-input--selection-controls .v-radio>.v-label{
font-size: 18px;
font-weight: 500;
line-height: 30px;
letter-spacing: -0.02em;
color: #000;
}
 .contactUs .v-btn:not(.v-btn--round).v-size--default{
width: 100%;
text-align: center!important;
height: 54px!important;
border-radius: 14px;
}
</style>
<style scoped>
.villa__title {
  color: #000;
}
.v-messages__message {
  color: rgba(233, 31, 31, 0.842) !important;
}
.v-text-field .v-input__control,
.v-text-field fieldset {
  color: #9d9d9d !important;
}
.mainCard {
  background-color: #ffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 63px;
  margin-top: -80px;
}
.picrur_person img {
  width: 100%;
  border-radius: 50px;
  height: 650px;
}
.check_box{
display: flex;
flex-direction: row;
justify-content: flex-start;
flex-wrap: wrap;
}
</style>
