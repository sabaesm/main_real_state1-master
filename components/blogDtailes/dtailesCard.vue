<template>
  <div class="weblog__cards">
    <div></div>
    <div class="blog_detailes_right_section"  v-bind="data" :key="data.id">
      <div class="blog_description">
        <h4 class="blog_detailes__beautiful_home py-4 mt-5">{{ data.title }}</h4>
        <img src="~/assets/images/4.png" alt="" />
        <p class="py-0 my-0">
          {{ data.text }}
        </p>
        <p>{{ data.text }}</p>
        <h6 class="pa-0">اولین قدم برای داشتن خانه ای زیبا</h6>
        <p class="ma-0" :v-html="data.text">
          {{ parseInt(data.text) }}
        </p>
        <v-col cols="12" class="ma-0 pa-0"
          ><img src="~/assets/images/9.png" alt=""
        /></v-col>
        <h6 class="">اولین قدم برای داشتن خانه ای زیبا</h6>
        <p class="pa-0" :v-html="data.text">{parseInt(data.text }}</p>
        <div class="atention">
          <div class="overlay"></div>
          <img class="atention_images" src="~/assets/images/9.png" alt="" />
          <h5 class="my-2">نکته ای که باید به آن توجه کنید</h5>
          <p>ای که باید به آن توجه کنیدای که باید به آن توجه کنید</p>
        </div>
        <h6>اولین قدم برای داشتن خانه ای زیبا</h6>
        <p class="ma-0 pa-0" :v-html="data.text">
          {{ parseInt(data.text) }}
        </p>
      </div>
      <v-row>
        <v-col cols="6" class="d-none d-xl-flex d-md-flex">
          <img src="~/assets/images/9.png" alt=""
        /></v-col>
        <v-col cols="6" class="d-none d-xl-flex d-md-flex">
          <img src="~/assets/images/9.png" alt=""
        /></v-col>
      </v-row>
      <p class="d-none d-xl-flex d-md-flex pa-0 ma-0"></p>
      <div v-for="blogDetailes__user in blogDetailes__user" :key="blogDetailes__user.id">
        <div class="user w-100 mb-0 pa-0 d-flex justify-space-between">
          <div class="person d-flex flex-row">
            <div class="person__pictur">
              <img :src="img" />
            </div>
            <span class="pa-0 ma-0">
              <h5 class=" ">{{ data.username }}</h5>
              <p class="">{{ data.user_activity }}</p>
            </span>
          </div>
          <row class="contact_way d-flex flex-column justify-end align-end">
            <span class="d-flex flex-row">
              <svg
                class="ml-2"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.20312"
                  y="1.70801"
                  width="41.5"
                  height="41.5"
                  rx="13.25"
                  fill="#FFA80A"
                  fill-opacity="0.08"
                  stroke="#FFA80A"
                  stroke-width="1.5"
                />
                <path
                  d="M25.5942 13.9181L16.5642 16.9181C10.4942 18.9481 10.4942 22.2581 16.5642 24.2781L19.2442 25.1681L20.1342 27.8481C22.1542 33.9181 25.4742 33.9181 27.4942 27.8481L30.5042 18.8281C31.8442 14.7781 29.6442 12.5681 25.5942 13.9181ZM25.9142 19.2981L22.1142 23.1181C21.9642 23.2681 21.7742 23.3381 21.5842 23.3381C21.3942 23.3381 21.2042 23.2681 21.0542 23.1181C20.7642 22.8281 20.7642 22.3481 21.0542 22.0581L24.8542 18.2381C25.1442 17.9481 25.6242 17.9481 25.9142 18.2381C26.2042 18.5281 26.2042 19.0081 25.9142 19.2981Z"
                  fill="#FFA80A"
                />
              </svg>
              <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="1.20703"
                  y="1.70801"
                  width="41.5"
                  height="41.5"
                  rx="13.25"
                  fill="#0DA049"
                  fill-opacity="0.08"
                  stroke="#0DA049"
                  stroke-width="1.5"
                />
                <path
                  d="M27.077 21.7081C26.647 21.7081 26.307 21.3581 26.307 20.9381C26.307 20.5681 25.937 19.7981 25.317 19.1281C24.707 18.4781 24.037 18.0981 23.477 18.0981C23.047 18.0981 22.707 17.7481 22.707 17.3281C22.707 16.9081 23.057 16.5581 23.477 16.5581C24.477 16.5581 25.527 17.0981 26.447 18.0681C27.307 18.9781 27.857 20.1081 27.857 20.9281C27.857 21.3581 27.507 21.7081 27.077 21.7081Z"
                  fill="#0DA049"
                />
                <path
                  d="M30.6887 21.708C30.2587 21.708 29.9187 21.358 29.9187 20.938C29.9187 17.388 27.0287 14.508 23.4887 14.508C23.0587 14.508 22.7188 14.158 22.7188 13.738C22.7188 13.318 23.0588 12.958 23.4788 12.958C27.8788 12.958 31.4587 16.538 31.4587 20.938C31.4587 21.358 31.1087 21.708 30.6887 21.708Z"
                  fill="#0DA049"
                />
                <path
                  d="M20.507 25.908L18.657 27.758C18.267 28.148 17.647 28.148 17.247 27.768C17.137 27.658 17.027 27.558 16.917 27.448C15.887 26.408 14.957 25.318 14.127 24.178C13.307 23.038 12.647 21.898 12.167 20.768C11.697 19.628 11.457 18.538 11.457 17.498C11.457 16.818 11.577 16.168 11.817 15.568C12.057 14.958 12.437 14.398 12.967 13.898C13.607 13.268 14.307 12.958 15.047 12.958C15.327 12.958 15.607 13.018 15.857 13.138C16.117 13.258 16.347 13.438 16.527 13.698L18.847 16.968C19.027 17.218 19.157 17.448 19.247 17.668C19.337 17.878 19.387 18.088 19.387 18.278C19.387 18.518 19.317 18.758 19.177 18.988C19.047 19.218 18.857 19.458 18.617 19.698L17.857 20.488C17.747 20.598 17.697 20.728 17.697 20.888C17.697 20.968 17.707 21.038 17.727 21.118C17.757 21.198 17.787 21.258 17.807 21.318C17.987 21.648 18.297 22.078 18.737 22.598C19.187 23.118 19.667 23.648 20.187 24.178C20.287 24.278 20.397 24.378 20.497 24.478C20.897 24.868 20.907 25.508 20.507 25.908Z"
                  fill="#0DA049"
                />
                <path
                  d="M31.4275 29.288C31.4275 29.568 31.3775 29.858 31.2775 30.138C31.2475 30.218 31.2175 30.298 31.1775 30.378C31.0075 30.738 30.7875 31.078 30.4975 31.398C30.0075 31.938 29.4675 32.328 28.8575 32.578C28.8475 32.578 28.8375 32.588 28.8275 32.588C28.2375 32.828 27.5975 32.958 26.9075 32.958C25.8875 32.958 24.7975 32.718 23.6475 32.228C22.4975 31.738 21.3475 31.078 20.2075 30.248C19.8175 29.958 17.5575 28.038 17.1875 27.728L20.4575 24.458C20.7375 24.668 22.8575 26.458 23.0675 26.568C23.1175 26.588 23.1775 26.618 23.2475 26.648C23.3275 26.678 23.4075 26.688 23.4975 26.688C23.6675 26.688 23.7975 26.628 23.9075 26.518L24.6675 25.768C24.9175 25.518 25.1575 25.328 25.3875 25.208C25.6175 25.068 25.8475 24.998 26.0975 24.998C26.2875 24.998 26.4875 25.038 26.7075 25.128C26.9275 25.218 27.1575 25.348 27.4075 25.518L30.7175 27.868C30.9775 28.048 31.1575 28.258 31.2675 28.508C31.3675 28.758 31.4275 29.008 31.4275 29.288Z"
                  fill="#0DA049"
                />
              </svg>
            </span>
            <span class="d-flex flex-row align-center justify-center user_comment">
              <svg
                class="mx-2"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33183 1.83324V4.58324"
                  stroke="#989898"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.6682 1.83324V4.58324"
                  stroke="#989898"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.20683 8.33226H18.7902"
                  stroke="#989898"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.25 7.79157V15.5832C19.25 18.3332 17.875 20.1666 14.6667 20.1666H7.33333C4.125 20.1666 2.75 18.3332 2.75 15.5832V7.79157C2.75 5.04157 4.125 3.20824 7.33333 3.20824H14.6667C17.875 3.20824 19.25 5.04157 19.25 7.79157Z"
                  stroke="#989898"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.3887 12.5583H14.397"
                  stroke="#989898"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.3887 15.3083H14.397"
                  stroke="#989898"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.9965 12.5583H11.0047"
                  stroke="#989898"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.9965 15.3083H11.0047"
                  stroke="#989898"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.6042 12.5583H7.61243"
                  stroke="#989898"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.6042 15.3083H7.61243"
                  stroke="#989898"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span class="text">نوشته شده در :</span>
              <p class="">
                {{ date }}
              </p>
            </span>
          </row>
        </div>
      </div>
      <v-col cols="12" class="page_control">
        <ul class="d-flex py-5">
          <li class="cols-5 d-flex flex-row align-center">
            <svg
              class="d-none d-md-flex ml-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4297 5.92993L20.4997 11.9999L14.4297 18.0699"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.5 12H20.33"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div class="pagination__box">
              <span>پست قبلی</span>
              <p>چگونه یک ملک زیبا داشته باشیم ؟؟</p>
            </div>
          </li>
          <li class="cols-5 d-flex flex-row align-center">
            <div class="pagination__box">
              <span>پست بعدی</span>
              <p>چگونه یک ملک زیبا داشته باشیم ؟؟</p>
            </div>
            <svg
              class="mr-2 d-none d-md-flex"
              width="23"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.96875 5.92993L3.28011 11.9999L8.96875 18.0699"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.2109 12H3.43832"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
        </ul>
      </v-col>
      <relatedpost class="d-none d-lg-flex pb-5 mx-2"></relatedpost>
      <h4 class="comments py-5 my-5">کامنت ها</h4>
      <form action="" class="ma-0 pa-0">
        <v-col
          cols="10 "
          class="answer_box2 d-flex flex-column"
          v-for="answerbox in answerbox"
          :key="answerbox.id"
        >
          <row class="w-100 d-flex pa-0 ma-0">
            <v-col cols="2" md="1" class="pa-0 ma-0 user__img">
              <img :src="answerbox.user_imgag" />
            </v-col>
            <v-col cols="10" md="11" class="pa-0 ma-0">
              <row
                class="user__detailes d-flex flex-row justify-space-between pb-1 pa-0 ma-0"
              >
                <span class="respone__name">{{ answerbox.user_name }} </span>
                <span class="respone__date">
                  نوشته شده در :
                  {{ answerbox.user_date }}
                </span>
              </row>
              <div class="response__box">
                <textarea name="" id=""> </textarea>
                <button class="pa-0 ma-0">پاسخ</button>
              </div>
            </v-col>
          </row>
        </v-col>
      </form>
      <h4 class="comments py-5 mt-3">کامنت بگذارید</h4>
      <v-col>
        <form>
          <v-row class="d-flex d">
            <v-col cols="12 " md="6">
              <Label class="ma-0" for="">نام کامل</Label>
              <v-text-field
                v-model="name"
                class="m-0"
                :error-messages="nameErrors"
                required
                @input="$v.name.$touch()"
                placeholder="نام کامل"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12 " md="6">
              <Label class="m-0" for="">آدرس ایمیل</Label>
              <v-text-field
                v-model="email"
                :error-messages="nameErrors"
                class="m-0"
                required
                @input="$v.name.$touch()"
                placeholder=" آدرس ایمیل"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-col cols="12" class="m-0 p-0">
            <Label class="m-0 mb-2" for=""> پیام شما</Label>
            <v-textarea solo name="input-7-4" label="پیام خود را بنویسید..."></v-textarea>
          </v-col>
          <v-checkbox
            v-model="checkbox"
            :error-messages="checkboxErrors"
            label="وقتی پاسخی به نظرم دریافت کردم به من اطلاع دهید."
            required
          ></v-checkbox>
          <v-btn class="mybutton" @click="submit"> ارسال نظر </v-btn>
        </form>
      </v-col>
      <relatedpost class="d-flex d-lg-none"></relatedpost>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import relatedpost from "./relatedpost.vue";
import user from "./user.vue";
export default {
  computed: {
    ...mapState(["blogDetailes"]),
    ...mapState(["blogDetailes__user"]),
    ...mapState(["answerbox"]),
  },
  components: {
    relatedpost,
    user,
  },
  props: ["data"],
  mounted() {
    console.log(this.data);
  },
};
</script>
<style scoped>
.mainSection_weblog__cards p {
  margin-left: 0;
  padding-left: 0;
  margin-right: 0;
  padding-right: 0;
}
.mybutton {
  background-color: rgba(81, 159, 255, 1) !important;
  color: #ffff !important;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.021em;
  text-align: right;
  padding: 10px 70px !important;
}
.answer_box,
.answer_box2 {
  position: relative;
  margin: 0 !important;
  padding: 0 !important;
  margin-top: 20px;
  width: 100% !important;
}
.answer_box2 {
  margin: 0;
  padding: 0 !important;
  height: 125px;
  width: 100% !important;
  margin-bottom: 20px;
}
.response__box {
  border: 0.5px solid rgba(129, 129, 129, 0.3);
  box-sizing: border-box;
  border-radius: 11px;
  width: 100%;
  height: 100%;
  position: relative;
}
.response__box textarea {
  width: 100%;
  height: 100%;
}
.answer_box2 button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffff;
  border-radius: 5px;
  width: 85px !important;
  height: 25px;
  background: rgba(81, 159, 255, 1);
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: -0.035em;
  position: absolute;
  left: 2%;
  bottom: 6%;
}
.answer_box button {
  margin-left: 10px;
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: center;

  left: 0;
  color: #ffff;
  border-radius: 5px;
  width: 85px !important;
  height: 25px;
  background: rgba(81, 159, 255, 1);
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: -0.035em;
}
.response__box:nth-child() .user__img {
  border-radius: 15px !important;
  padding: 0 !important;

  right: 0;
}
.user__img img {
  padding: 0 !important;
  border-radius: 10px;
  width: 38px !important;
  height: 38px !important;
  object-fit: cover;
}
.user__detailes {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.user__detailes .respone__name {
  font-size: 12px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: -0.035em;
  text-align: right;
  color: rgba(16, 23, 55, 1);
}
.comments {
  font-size: 23px;
  font-style: normal;
  font-weight: 800;
  line-height: 35px;
  letter-spacing: -0.021em;
  text-align: center !important;
}
.respone__date {
  font-size: 9px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: -0.035em;
  text-align: right;
  color: rgba(129, 129, 129, 1);
}
.blog_detailes_right_section {
  margin: 0 30px;
}
.blog_detailes_right_section h4 {
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  line-height: 39px;
  letter-spacing: -0.04em;
  text-align: right;
}
.blog_detailes_right_section p {
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.021em;
  text-align: right;
  color: rgba(83, 83, 83, 1);
  margin: 30px 0;
}
.blog_detailes_right_section h6 {
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.021em;
  margin: 20px 0;
}
.blog_detailes_right_section img {
  width: 100%;
  padding: 20px 0;
}
.atention {
  position: relative;
  height: 120px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
}
.atention p {
  position: absolute;
  color: rgba(255, 255, 255, 0.67);
  z-index: 5;
  margin: 0;
  padding: 10px 0;
  top: 50%;
}
.atention h5 {
  position: absolute;
  z-index: 5;
  top: 20%;
  color: #ffff !important;
  margin: 0;
  padding: 0;
  padding-bottom: 10px;
}
.atention .overlay {
  position: absolute;
  background-color: black;
  opacity: 0.5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4 !important;
  border-radius: 10px;
}
.atention_images {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  object-fit: cover;
  height: 120px;
  margin: 0 !important;
  padding: 0 !important;
  border-radius: 10px;
}
.page_control {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.page_control ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.page_control li {
  width: 50% !important;
  margin: 0 1px;

  padding: 3px 0 !important;
}
.pagination__box {
  border: 0.5px solid #dad6d6;
  border-radius: 28px;
  padding: 20px 10px !important;
  margin: 0 5px;
  transition: all ease-in-out 0.3s;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.pagination__box:hover {
  background: rgba(35, 134, 255, 0.11);
  transition: all ease-in-out 0.3s;
}
.pagination__box:hover span {
  color: rgba(35, 134, 255, 1);
  transition: all ease-in-out 0.3s;
}
.pagination__box span {
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.021em;
  text-align: right;
  color: rgba(153, 153, 153, 1);
  padding: 5px 0;
}
.pagination__box p {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.021em;
  text-align: right;
  margin: 0px 0 !important;
  padding: 0px;
}
@media only screen and (max-width: 1300px) {
  .pagination__box p {
    font-size: 10px !important;
    font-weight: 700;
    letter-spacing: -0.021em;
    text-align: right;
  }
}
@media only screen and (max-width: 960px) {
  .blog_detailes__beautiful_home {
    text-align: center !important;
  }
  .pagination__box p {
    font-size: 14px !important;
    font-weight: 700;
    letter-spacing: -0.021em;
    text-align: right;
  }
}

@media only screen and (max-width: 600px) {
  .pagination__box p {
    font-size: 10px !important;
  }
  .weblog__cards p {
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: -0.021em;
    margin: 10px 0 !important;
  }
  .weblog__cards h4 {
    font-size: 16px;
    font-weight: 800;
    line-height: 23px;
    letter-spacing: -0.04em;
  }
  .weblog__cards h6 {
    font-size: 10px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: -0.021em;
    margin: 10px 0 !important;
  }
}
</style>
<style>
.v-text-field > .v-input__control > .v-input__slot {
  border: 0.5px solid rgba(129, 129, 129, 0.3);
  box-sizing: border-box;
  border-radius: 8px;
  border-radius: 5px;
}
.v-text-field > .v-input__control > .v-input__slot::after {
  display: none !important;
}
.v-text-field > .v-input__control > .v-input__slot::before {
  display: none !important;
}
.v-label {
  left: auto !important;
  right: 0 !important;
}
.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: none !important;
  border: 0.5px solid rgba(129, 129, 129, 0.3);
  box-sizing: border-box;
  border-radius: 8px;
}
/**/
.user .person__pictur {
  width: 50px;
  height: 50px;
}
.user .person__pictur img {
  height: 100%;
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
}
.user p {
  margin: 0 !important;
  padding: 3px !important;
  padding-right: 10px !important ;
}
.user h5 {
  margin: 0 !important;
  padding: 3px !important;
  padding-right: 10px !important;
}

.user .contact_way svg {
  height: 25px;
  width: 25px;
  margin-bottom: 5px;
}

.user_comment .text {
  font-size: 12px !important;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.035em;
  color: #b1b1b1 !important;
}
.user_comment p {
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.021em;
  color: #4d4d4d !important;
}
.user_comment svg {
  height: 20px !important;
  width: 20px !important;
  padding-right: 0 10px !important;
}
.person {
  display: flex;
  align-items: center;
}
.person p {
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.021em;
  color: #b1b1b1!important;
}

.person h5 {
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.035em;
  text-align: right;
  color: #101737;
}
@media screen and (max-width: 600px) {
  .person p {
    font-size: 11px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.021em;
    color: #b1b1b1 !important;
  }
  .user_comment .text {
    font-size: 8px !important;
  }
  .user_comment svg {
    height: 15px !important;
    width: 15px !important;
    padding: 0 !important;
  }
  .user_comment p {
    font-size: 8px;
  }
}
</style>
