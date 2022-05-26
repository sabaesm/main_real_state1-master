<template>
  <v-col cols="4" class="d-none d-md-block">
    <div class="contact_class">
      <v-card>
        <v-tabs v-model="tab">
          <v-tab href="#tab-1"> ارسال پیام </v-tab>
          <v-tab href="#tab-2"> تماس </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item :value="'tab-1'">
            <v-card flat>
              <v-card-text class="pa-0">
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
                    <v-btn
                      color="warning"
                      @click="validate"
                      class="p-0 w-100 send_message"
                    >
                      ارسال پیام
                    </v-btn>
                  </v-col>
                </v-form>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item :value="'tab-2'">
            <v-card flat>
              <v-card-text class="pa-0">
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
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        <span class="d-flex flex-column flex-column justify-center align-center">
          <div
            class="report_box my-3 d-flex flex-column align-center justify-center py-4"
          >
            <div>
              کد ملکی:
              <span> 12234</span>
            </div>
            <p class="pa-0 ma-0">هنگام تماس یا ارسال پیام به کد آگهی اشاره فرمایید.</p>
          </div>
          <span class="problem-report"
            ><svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.07812 1.58325V17.4166"
                stroke="#FF9800"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.07812 3.16675H12.9448C15.0823 3.16675 15.5573 4.35425 14.0531 5.85842L13.1031 6.80842C12.4698 7.44175 12.4698 8.47091 13.1031 9.02508L14.0531 9.97508C15.5573 11.4792 15.0031 12.6667 12.9448 12.6667H4.07812"
                stroke="#FF9800"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            گزارش مشکل اگهی</span
          >
        </span>
      </v-card>
    </div>
  </v-col>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        { tab: "ارسال پیام", content: "Tab 1 Content" },
        { tab: "درخواست تماس", content: "Tab 2 Content" },
      ],
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      rating: 0,
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>
<style>
.contact_class .v-slide-group__content {
  display: flex;
  justify-content: center;
}

.contact_class .v-tab--active {
  background-color: #ffff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  color: #0000;
  overflow: hidden;
  box-shadow: 0px -1px 38px rgba(0, 0, 0, 0.07) !important;
}
.contact_class .v-tab--active:before {
  background-color: #ffff;
  border-top-left-radius: 25px !important;
  border-top-right-radius: 25px !important;
  box-shadow: 0px -1px 38px rgba(0, 0, 0, 0.07) !important;
}
.contact_class .v-slide-group__wrapper {
  display: flex !important;
  justify-content: start !important;
}
.contact_class .v-tabs-slider-wrapper {
  width: 0 !important;
}
.contact_class .v-sheet.v-card {
  box-shadow: none !important;
}
.contact_class .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled,
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active),
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn,
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon {
  border-top-left-radius: 25px !important;
  border-top-right-radius: 25px !important;
  /* color: red; */
}
.contact_class .v-slide-group__content {
  display: flex !important;
  justify-content: start !important;
}
.v-window__container {
  box-shadow: 21px -12px 38px rgba(226, 15, 15, 0.07) !important;
}

.contact_class .v-csrd {
  box-shadow: 0px -1px 38px rgba(0, 0, 0, 0.07);
}
.contact_class .report_box {
  background: #feeae3;
  border-radius: 20px;
  width: 100%;
}
.report_box span {
  font-size: 19px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.039em;
  text-align: right;
  color: #242424;
}
.report_box p {
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.039em;
}
.problem-report {
  text-align: center !important;
  width: 100% !important;
  color: #ff9800;
  width: 100%;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: -0.029em;
  text-align: right;
}
.v-application--is-ltr .v-rating .v-icon {
  padding: 10px 0px !important;
}
</style>

<style scoped>
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
