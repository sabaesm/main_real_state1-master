<template>
  <v-app >
    <div class="test">
      <div>
        <detaileHeader class="mb-4"></detaileHeader>
        <div class="medium_container">
          <div class="d-flex flex-row">
            <rightsection
              v-bind="getSearchDynamic"
              :data="getSearchDynamic"
            ></rightsection>
            <leftsetion></leftsetion>
          </div>
        </div>
      </div>
      <slider></slider>
    
    </div>
      <div class=" btns d-flex   d-md-none pa-0 ma-0">
        <v-row class=" pa-0 ma-0">
          <div>
            <v-dialog v-model="dialog2" width="500">
              <template v-slot:activator="{ on, attrs }">
                <h6></h6>
                <v-btn v-bind="attrs" v-on="on" class="call d-flex justify-space-around">
                  <span class="px-5">                   درخواست تماس
</span>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8871 9.30212C15.4751 9.30212 15.1492 8.9667 15.1492 8.5642C15.1492 8.20962 14.7946 7.4717 14.2005 6.82962C13.6159 6.2067 12.9738 5.84253 12.4371 5.84253C12.0251 5.84253 11.6992 5.50712 11.6992 5.10462C11.6992 4.70212 12.0346 4.3667 12.4371 4.3667C13.3955 4.3667 14.4017 4.8842 15.2834 5.81378C16.1076 6.68587 16.6346 7.76878 16.6346 8.55462C16.6346 8.9667 16.2992 9.30212 15.8871 9.30212Z"
                      fill="white"
                    />
                    <path
                      d="M19.3449 9.30192C18.9329 9.30192 18.607 8.9665 18.607 8.564C18.607 5.16192 15.8374 2.40192 12.4449 2.40192C12.0329 2.40192 11.707 2.0665 11.707 1.664C11.707 1.2615 12.0329 0.916504 12.4354 0.916504C16.652 0.916504 20.0829 4.34734 20.0829 8.564C20.0829 8.9665 19.7474 9.30192 19.3449 9.30192Z"
                      fill="white"
                    />
                    <path
                      d="M9.59088 13.3269L7.81797 15.0998C7.44422 15.4736 6.85005 15.4736 6.46672 15.1094C6.3613 15.004 6.25589 14.9082 6.15047 14.8028C5.16339 13.8061 4.27214 12.7615 3.47672 11.669C2.69089 10.5765 2.05839 9.484 1.59839 8.40109C1.14797 7.30859 0.917969 6.264 0.917969 5.26734C0.917969 4.61567 1.03297 3.99275 1.26297 3.41775C1.49297 2.83317 1.85714 2.2965 2.36505 1.81734C2.97839 1.21359 3.64922 0.916504 4.35839 0.916504C4.62672 0.916504 4.89505 0.974004 5.13464 1.089C5.3838 1.204 5.60422 1.3765 5.77672 1.62567L8.00005 4.75942C8.17255 4.999 8.29713 5.21942 8.38338 5.43025C8.46963 5.6315 8.51755 5.83275 8.51755 6.01484C8.51755 6.24484 8.45047 6.47484 8.3163 6.69525C8.19172 6.91567 8.00963 7.14567 7.77963 7.37567L7.0513 8.13275C6.94588 8.23817 6.89797 8.36275 6.89797 8.51609C6.89797 8.59275 6.90755 8.65984 6.92672 8.7365C6.95547 8.81317 6.98422 8.87067 7.00339 8.92817C7.17589 9.24442 7.47297 9.6565 7.89463 10.1548C8.32588 10.6532 8.78588 11.1611 9.28422 11.669C9.38005 11.7648 9.48547 11.8607 9.5813 11.9565C9.96463 12.3303 9.97422 12.9436 9.59088 13.3269Z"
                      fill="white"
                    />
                    <path
                      d="M20.0568 16.5663C20.0568 16.8346 20.0089 17.1125 19.9131 17.3808C19.8843 17.4575 19.8556 17.5342 19.8172 17.6108C19.6543 17.9558 19.4435 18.2817 19.1656 18.5883C18.696 19.1058 18.1785 19.4796 17.5939 19.7192C17.5843 19.7192 17.5747 19.7288 17.5652 19.7288C16.9997 19.9588 16.3864 20.0833 15.7252 20.0833C14.7477 20.0833 13.7031 19.8533 12.601 19.3838C11.4989 18.9142 10.3968 18.2817 9.30432 17.4863C8.93057 17.2083 6.76474 15.3683 6.41016 15.0712L9.54391 11.9375C9.81224 12.1388 11.8439 13.8542 12.0452 13.9596C12.0931 13.9788 12.1506 14.0075 12.2177 14.0363C12.2943 14.065 12.371 14.0746 12.4572 14.0746C12.6202 14.0746 12.7447 14.0171 12.8502 13.9117L13.5785 13.1929C13.8181 12.9533 14.0481 12.7713 14.2685 12.6563C14.4889 12.5221 14.7093 12.455 14.9489 12.455C15.131 12.455 15.3227 12.4933 15.5335 12.5796C15.7443 12.6658 15.9647 12.7904 16.2043 12.9533L19.3764 15.2054C19.6256 15.3779 19.7981 15.5792 19.9035 15.8188C19.9993 16.0583 20.0568 16.2979 20.0568 16.5663Z"
                      fill="white"
                    />
                  </svg>
                </v-btn>
              </template>

              <v-card>
                <v-row
                  class="d-flex flex-row align-center justify-space-between ma-0 pa-0 top_items"
                >
                  <h6 class="ma-0 pa-0">ارسال پیام</h6>
                  <span @click="dialog2 = false" class="ma-0 pa-0">
                    <svg
                      width="55"
                      height="55"
                      viewBox="0 0 55 55"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.848 32.5464L21.7916 23.49C21.3274 23.0258 21.3274 22.256 21.7916 21.7919C22.2557 21.3278 23.0255 21.3278 23.4897 21.7919L32.5461 30.8483C33.0102 31.3124 33.0102 32.0822 32.5461 32.5464C32.0819 33.0105 31.3121 33.0105 30.848 32.5464Z"
                        fill="#777777"
                      />
                      <path
                        d="M21.7899 32.5464C21.3257 32.0822 21.3257 31.3124 21.7899 30.8483L30.8463 21.7919C31.3104 21.3278 32.0802 21.3278 32.5443 21.7919C33.0085 22.256 33.0085 23.0258 32.5444 23.49L23.488 32.5464C23.0238 33.0105 22.254 33.0105 21.7899 32.5464Z"
                        fill="#777777"
                      />
                    </svg>
                  </span>
                </v-row>
                <v-card-text>
                  <div
                    class="send_message_person_detailes d-flex flex-column justify-center align-center"
                  >
                    <span class="send_message__images">
                      <img src="~/assets/images/person3.png" alt="" />
                    </span>
                    <h6 class="pt-2 px-0">پوریا حدادی</h6>
                    <p class="py-1">10 سال تجربه</p>
                  </div>
                  <v-btn class="call_detailes py-3 d-flex justify-center align-center">
                    <span class="phone_number px-2">09112278855</span>
                    <span>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.1418 16.8029C20.1418 17.1329 20.0684 17.4721 19.9126 17.8021C19.7568 18.1321 19.5551 18.4437 19.2893 18.7371C18.8401 19.2321 18.3451 19.5896 17.7859 19.8187C17.2359 20.0479 16.6401 20.1671 15.9984 20.1671C15.0634 20.1671 14.0643 19.9471 13.0101 19.4979C11.9559 19.0487 10.9018 18.4437 9.85677 17.6829C8.8026 16.9129 7.80344 16.0604 6.8501 15.1162C5.90594 14.1629 5.05344 13.1637 4.2926 12.1187C3.54094 11.0737 2.93594 10.0287 2.49594 8.99291C2.05594 7.94791 1.83594 6.94874 1.83594 5.99541C1.83594 5.37207 1.94594 4.77624 2.16594 4.22624C2.38594 3.66707 2.73427 3.15374 3.2201 2.69541C3.80677 2.11791 4.44844 1.83374 5.12677 1.83374C5.38344 1.83374 5.6401 1.88874 5.86927 1.99874C6.1076 2.10874 6.31844 2.27374 6.48344 2.51207L8.6101 5.50957C8.7751 5.73874 8.89427 5.94957 8.97677 6.15124C9.05927 6.34374 9.1051 6.53624 9.1051 6.71041C9.1051 6.93041 9.04094 7.15041 8.9126 7.36124C8.79344 7.57207 8.61927 7.79207 8.39927 8.01207L7.7026 8.73624C7.60177 8.83707 7.55594 8.95624 7.55594 9.10291C7.55594 9.17624 7.5651 9.24041 7.58344 9.31374C7.61094 9.38707 7.63844 9.44207 7.65677 9.49707C7.82177 9.79957 8.10594 10.1937 8.50927 10.6704C8.92177 11.1471 9.36177 11.6329 9.83844 12.1187C10.3334 12.6046 10.8101 13.0537 11.2959 13.4662C11.7726 13.8696 12.1668 14.1446 12.4784 14.3096C12.5243 14.3279 12.5793 14.3554 12.6434 14.3829C12.7168 14.4104 12.7901 14.4196 12.8726 14.4196C13.0284 14.4196 13.1476 14.3646 13.2484 14.2637L13.9451 13.5762C14.1743 13.3471 14.3943 13.1729 14.6051 13.0629C14.8159 12.9346 15.0268 12.8704 15.2559 12.8704C15.4301 12.8704 15.6134 12.9071 15.8151 12.9896C16.0168 13.0721 16.2276 13.1912 16.4568 13.3471L19.4909 15.5012C19.7293 15.6662 19.8943 15.8587 19.9951 16.0879C20.0868 16.3171 20.1418 16.5462 20.1418 16.8029Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M16.9622 8.25033C16.9622 7.70033 16.5314 6.85699 15.8897 6.16949C15.3031 5.53699 14.5239 5.04199 13.7539 5.04199"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20.1706 8.25041C20.1706 4.70291 17.3014 1.83374 13.7539 1.83374"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </v-btn>
                  <div class="text-center">
                    <div class="rate my-4 d-flex flex-column justify-center align-center">
                      <h6 class="">چه امتیازی به پوریا حدادی میدهید ?</h6>
                      <v-rating
                        v-model="rating"
                        background-color="green lighten-3"
                        color="green"
                        large
                      ></v-rating>
                    </div>
                  </div>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="dialog = false"> I accept </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
          <div>
            <v-dialog v-model="dialog1" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" class="send_message">
                  ارسال پیام

                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4658 2.83659L6.81203 5.71159C0.994948 7.657 0.994948 10.8291 6.81203 12.7649L9.38036 13.6178L10.2333 16.1862C12.1691 22.0033 15.3508 22.0033 17.2866 16.1862L20.1712 7.542C21.4554 3.66075 19.347 1.54284 15.4658 2.83659ZM15.7724 7.99242L12.1308 11.6533C11.987 11.797 11.8049 11.8641 11.6229 11.8641C11.4408 11.8641 11.2587 11.797 11.1149 11.6533C10.837 11.3753 10.837 10.9153 11.1149 10.6374L14.7566 6.97659C15.0345 6.69867 15.4945 6.69867 15.7724 6.97659C16.0504 7.2545 16.0504 7.7145 15.7724 7.99242Z"
                      fill="white"
                    />
                  </svg>
                </v-btn>
              </template>
              <v-card>
                <v-row
                  class="d-flex flex-row align-center justify-space-between ma-0 pa-0 top_items"
                >
                  <h6 class="ma-0 pa-0">ارسال پیام</h6>
                  <span @click="dialog1 = false" class="ma-0 pa-0">
                    <svg
                      width="55"
                      height="55"
                      viewBox="0 0 55 55"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.848 32.5464L21.7916 23.49C21.3274 23.0258 21.3274 22.256 21.7916 21.7919C22.2557 21.3278 23.0255 21.3278 23.4897 21.7919L32.5461 30.8483C33.0102 31.3124 33.0102 32.0822 32.5461 32.5464C32.0819 33.0105 31.3121 33.0105 30.848 32.5464Z"
                        fill="#777777"
                      />
                      <path
                        d="M21.7899 32.5464C21.3257 32.0822 21.3257 31.3124 21.7899 30.8483L30.8463 21.7919C31.3104 21.3278 32.0802 21.3278 32.5443 21.7919C33.0085 22.256 33.0085 23.0258 32.5444 23.49L23.488 32.5464C23.0238 33.0105 22.254 33.0105 21.7899 32.5464Z"
                        fill="#777777"
                      />
                    </svg>
                  </span>
                </v-row>
                <v-card-text>
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field
                      v-model="name"
                      :rules="nameRules"
                      label=" نام و نام خانوادگی"
                      required
                    ></v-text-field>
                    <v-text-field
                      class="pt-0"
                      v-model="email"
                      :rules="emailRules"
                      label="ایمیل"
                      required
                    ></v-text-field>
                    <v-col cols="12" class="pa-0 ma-0">
                      <v-textarea solo name="input-7-4" label="متن پیام شما"></v-textarea>
                    </v-col>
                    <v-col cols="12 " class="pa-0">
                      <v-btn @click="validate" class="p-0 w-100 send_message">
                        ارسال پیام
                      </v-btn>
                    </v-col>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-dialog>
          </div>
        </v-row>
      </div>
  </v-app>

  <!-- <mainDetaile v-bind="getSearchDynamic" :data="getSearchDynamic"></mainDetaile> -->
</template>
<script>
// import mainDetaile from "../../../components/propertyDtalis/mainDetaile.vue";
import { getSearchDynamic } from "../../../service/getApi";
import { consultants } from "../../../service/getApi";
import detaileHeader from "../../../components/propertyDtalis/header.vue";
import leftsetion from "../../../components/propertyDtalis/leftsetion.vue";
import rightsection from "../../../components/propertyDtalis/rightsection.vue";
import slider from "../../../components/propertyDtalis/slider.vue";

export default {
  components: {
    detaileHeader,
    leftsetion,
    rightsection,
    slider,
  },
  data() {
    return {
      getSearchDynamic: [],
      dialog1: false,
      dialog2: false,
    };
  },
  mounted() {
    // console.log(this.$route.query);
    // console.log(this.$route.query.unit_price__gte);
    // console.log(this.$route.query.unit_price__lte);
    // console.log(this.$route.query.estate_type);
    // getSearch({ ...this.$route.query }).then((res) => console.log(res.data.results));
    // getSearch({ ...this.$route.query }).then(
    //   (res) => (this.getSearch = res.data.results)
    // );
    getSearchDynamic(this.$route.params.id)
      .then((res) => (this.getSearchDynamic = res.data))
      // .then((res) => console.log(res));
    //   consultants().then(res=>console.log(res))
  },
  layout: "user",
};
</script>
<style>

</style>

<style scoped>
.v-sheet.v-card {
  border-radius: 30px !important;
}

.btns {
  background-color: #ffff;
  width: 100%!important;
  height: 10%;
  bottom: 0;
  position: fixed;
  left: 0px;
  right: 0px;
  z-index: 999;
  justify-content: center!important;
  align-items: center;
}
.call {
  background: #0da049 !important;
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.011em;
  text-align: right;
  color: #ffff;
}
.send_message {
  background: #ffa80a !important;
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.011em;
  text-align: right;
  color: #ffff;
}
.send_message , .call {
padding: 25px 30px!important;
border-radius: 13px;
display: flex;

}
.top_items h6 {
  font-size: 17px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: -0.041em;
  text-align: right;
}
.send_message {
  width: 100%;
}
.send_message__images {
  height: 66px;
  width: 66px;
}
.send_message__images img {
  width: 100%;
  height: 100%;
  object-fit: cover !important;
  border-radius: 25px;
}
.send_message_person_detailes h6 {
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.035em;
  color: #101737;
}
.send_message_person_detailes p {
  font-size: 13px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: -0.021em;
  color: #b1b1b1;
}
.rate {
  background: rgba(31, 198, 4, 0.08);
  border-radius: 17px;
}
.rate h6 {
  color: #494949;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: -0.021em;
  text-align: center;
}
.call_detailes {
  background: #519fff !important;
  width: 100%;
  border-radius: 17px;
  height: 50px !important;
}
.call_detailes .phone_number {
  font-size: 17px;
  font-weight: 800;
  line-height: 25px;
  letter-spacing: -0.011em;
  color: #ffff;
  padding: 10px 0;
}
@media screen and (max-width: 600px) {
}
</style>
