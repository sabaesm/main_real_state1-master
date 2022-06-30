<template>
  <div class="medium_container contactUs">
    <v-col cols="12 pa-0 ma-0" class="mainCard">
      <div class="d-flex flex-column flex-md-row">
        <v-col cols="12" md="7">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-col class="ma-0 pa-0 12">
              <div class="ma-0 pa-0 registration d-flex flex-wrap">
                <v-col cols="12 " md="6">
                  <v-text-field
                    v-model="form.customer_name"
                    label="نام و نام خانوادگی"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12 " md="6">
                  <v-text-field
                    v-model="form.phone"
                    value=""
                    label="شماره تماس"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12 " md="6">
                  <v-text-field
                    v-model="form.province"
                    :rules="province"
                    label="استان"
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
                  <v-text-field
                    v-model="form.region"
                    :rules="region"
                    label="منطقه"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12 " md="6">
                  <v-text-field
                    v-model="form.min_price"
                    :rules="min_price"
                    label=" مینیمم قیمت"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12 " md="6">
                  <v-text-field
                    v-model="form.max_price"
                    :rules="max_price"
                    label=" ماکزیمم قیمت "
                    required
                  ></v-text-field>
                </v-col>
              </div>
            </v-col>
            <v-radio-group v-model="radios" mandatory>
              <v-row class="ma-0 pa-0 check_box">
                <v-col cols="4" md="2">
                  <label for="ویلا" @click="villaToggle"> ویلا</label>
                  <input
                    type="radio"
                    label="ویلا"
                    value="ویلا"
                    color="info"
                    v-model="form.demand_type"
                  />
                </v-col>
                <v-col cols="4" md="2" @click="resetData">
                  <label for="">مغازه و تجاری</label>
                  <input
                    type="radio"
                    label="مغازه و 
                     تجاری"
                    name="مغازه و 
                     تجاری"
                    hide-details
                    value=" مغازه  و تجاری"
                    color="info"
                    v-model="form.demand_type"
                  />
                </v-col>
                <v-col cols="4" md="2">
                  <label for="آپارتمان">آپارتمان</label>
                  <input
                    type="radio"
                    label=" آپارتمان "
                    value="آپارتمان"
                    hide-details
                    color="info"
                    v-model="form.demand_type"
                  />
                </v-col>
                <v-col cols="4" md="2">
                  <label for="  خانه ویلایی"> خانه ویلایی</label>
                  <input
                    type="radio"
                    label="
                    خانه ویلایی
                    "
                    value="خانه ویلایی"
                    hide-details
                    color="info"
                    v-model="form.demand_type"
                  />
                </v-col>
                <v-col cols="4" md="2">
                  <label for=""> باغ </label>
                  <input
                    type="radio"
                    name=""
                    id=""
                    label="باغ"
                    value="باغ"
                    hide-details
                    color="info"
                    v-model="form.demand_type"
                  />
                </v-col>
                <v-col cols="4" md="2" @click="resetData">
                  <label for="زمین"> زمین</label>
                  <input
                    type="radio"
                    name=""
                    id=""
                    label="زمین"
                    value="زمین"
                    hide-details
                    color="info"
                    v-model="form.demand_type"
                  />
                </v-col>
              </v-row>
            </v-radio-group>
            <input type="text" name="" id="" />

            <div v-bind:class="{ showVilla: showVilla, hideVilla: hideVilla }">
            <h6 class="villa_title"> انواع ویلا:</h6>

              <div class="d-flex flex-row vila_types">
                <v-col cols="4">
                  <label for="ویلا"> ویلا فلت </label>

                  <input
                    type="radio"
                    label="ویلا"
                    value=" ویلا فلت "
                    color="info"
                    v-model="form.demand_type"
                  />
                </v-col>
                <v-col cols="4">
                  <label for="ویلا"> ویلا دوبلکس </label>

                  <input
                    type="radio"
                    label="ویلا"
                    value="ویلا ی دوبلکس"
                    color="info"
                    v-model="form.demand_type"
                  />
                </v-col>
                <v-col cols="4">
                  <label for="ویلا"> ویلا ی تریبلکس</label>

                  <input
                    type="radio"
                    label="ویلا"
                    value=" ویلا ی تریبلکس"
                    color="info"
                    v-model="form.demand_type"
                  />
                </v-col>
              </div>
            </div>

            <!-- <v-col cols="4" md="2">
                <v-checkbox label="فلت" hide-details></v-checkbox>
              </v-col>
              <v-col cols="4" md="2">
                <v-checkbox label="دوبلکس" hide-details> </v-checkbox>
              </v-col>
              <v-col cols="4" md="2">
                <v-checkbox label="تریبلکس" hide-details></v-checkbox>
              </v-col>
              <v-col cols="4" md="2">
                <v-checkbox label="نوساز" hide-details></v-checkbox>
              </v-col> -->
            <v-col cols="12" class="mt-5 pa-0">
              <v-textarea
                v-model="form.text"
                label="متن  "
                hint="Hint text"
                placeholder="متن خود را بنویسید."
              ></v-textarea>
            </v-col>
            <v-col cols="12" md="6" class="d-flex justify-center align-center">
              <v-btn class="pa-0 ma-0" > ثبت اطلاعات </v-btn>
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
import { vilayab } from "../../service/postApi";
export default {
  data: () => ({
    valid: true,

    form: {
      customer_name: "",
      phone: "",
      province: "",
      city: "",
      region: "",
      demand_type: "",
      min_price: null,
      max_price: null,
      text: "",
    },
    showVilla: false,
    hideVilla: true,

    vilayab: [],
    phoneRules: [(v) => !!v || "phone is required"],
    countryRules: [(v) => !!v || "country is required"],
    cityRules: [(v) => !!v || "city is required"],
  }),
  methods: {
    submitForm() {
      vilayab(this.form)
        .then((res) => alert("عمیات با موفیت ثبت شد"))
        .catch((er) => alert("لطفا داده های درست وارد کنید"));
    },
    villaToggle() {
      this.hideVilla = !this.hideVilla;
      this.showVilla = !this.showVilla;
    },
    resetData() {
            this.showVilla =  false;
            this.hideVilla=false

    },
  },
};
</script>
<style>
.hideVilla {
  width: 100%;
  height: 0px;
  overflow: hidden;
  transition: all ease-in-out 0.3s;
  display: flex;
  flex-direction: row;
}
.showVilla {
  transition: all ease-in-out 0.3s;
  transform: translateY(0px);
  height: 200px;
  display: flex;
  flex-direction: column;
}
.villa_title {
  font-size:16px;
  font-weight: 500;
  color: rgba(47, 47, 47, 0.711);
  margin-right: 20px;
  margin-bottom: 25px;
}
.vila_types{
  margin-right: 30px;
}
.contactUs .v-text-field .v-input__control .v-input__slot {
  border: none;
  border-bottom: 1.5px solid #9d9d9d !important;
  border-radius: 0px;
}
.contactUs .v-application .secondary--text {
  color: #519fff !important;
  border-radius: 20px !important;
}
.contactUs .theme--light.v-btn.v-btn--has-bg {
  background: #519fff !important;
  color: #ffff;
  font-size: 18px;
  font-weight: 700;
}
.contactUs .v-input--selection-controls .v-input__slot > .v-label,
.v-input--selection-controls .v-radio > .v-label {
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #000;
}
.contactUs .v-btn:not(.v-btn--round).v-size--default {
  width: 100%;
  text-align: center !important;
  height: 54px !important;
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
.check_box {
  display: flex;
  flex-direction: row;
  align-items: flex-start !important;
  flex-wrap: wrap;
}
.check_box .v-label {
  white-space: nowrap!important;
}
.check_box div {
  white-space: nowrap!important;
  display: flex;
  align-items: center;
  justify-content: center;
}
.villa {
  background-color: #519fff;
  display: flex;
  flex-direction: row;
}
</style>

<style>
@media screen and (max-width: 600px) {
  .registration .v-label {
    font-size: 12px !important;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.02em;
    padding: 0px !important;
  }
  .v-input {
    font-size: 12px !important;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.02em;
    padding: 0px !important;
  }
  .mainCard {
    border-radius: 20px !important;
  }
  .check_box .v-label {
    white-space: nowrap;
    padding: 5px 0 !important;
    font-size: 12px !important;
    line-height: 20px;
    letter-spacing: -0.02em;
  }
}
</style>
