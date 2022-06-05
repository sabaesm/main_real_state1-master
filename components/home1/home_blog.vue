<template>
  <div class="larg_container ">
    <div class="new-main-sections pt-0">
      <h4>خونتو پیدا کن!</h4>
      <h2>جدید تررین ملک ها</h2>
      <div class="arrows d-none d-md-flex">
        <a href="#" class="see_more d-flex align-center justify-center px-3">
          مشاهده همه
          <svg
            class="mx-3"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.84463 2.16675H5.7863C3.4138 2.16675 2.16797 3.41258 2.16797 5.77425V7.83258C2.16797 10.1942 3.4138 11.4401 5.77547 11.4401H7.8338C10.1955 11.4401 11.4413 10.1942 11.4413 7.83258V5.77425C11.4521 3.41258 10.2063 2.16675 7.84463 2.16675Z"
              fill="white"
            />
            <path
              d="M20.2244 2.16675H18.1661C15.8044 2.16675 14.5586 3.41258 14.5586 5.77425V7.83258C14.5586 10.1942 15.8044 11.4401 18.1661 11.4401H20.2244C22.5861 11.4401 23.8319 10.1942 23.8319 7.83258V5.77425C23.8319 3.41258 22.5861 2.16675 20.2244 2.16675Z"
              fill="white"
            />
            <path
              d="M20.2244 14.5491H18.1661C15.8044 14.5491 14.5586 15.7949 14.5586 18.1566V20.2149C14.5586 22.5766 15.8044 23.8224 18.1661 23.8224H20.2244C22.5861 23.8224 23.8319 22.5766 23.8319 20.2149V18.1566C23.8319 15.7949 22.5861 14.5491 20.2244 14.5491Z"
              fill="white"
            />
            <path
              d="M7.84463 14.5491H5.7863C3.4138 14.5491 2.16797 15.7949 2.16797 18.1566V20.2149C2.16797 22.5874 3.4138 23.8332 5.77547 23.8332H7.8338C10.1955 23.8332 11.4413 22.5874 11.4413 20.2257V18.1674C11.4521 15.7949 10.2063 14.5491 7.84463 14.5491Z"
              fill="white"
            />
          </svg>
        </a>
        <div class="next-button1 d-flex align-center justify-center" slot="button-next">
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.7144 12L18.4286 7L12.7144 2"
              stroke="white"
              stroke-width="2.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 7H18.4286"
              stroke="white"
              stroke-width="2.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="prev-button1 d-flex align-center justify-center" slot="button-prev">
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.71436 12L2.00007 7L7.71436 2"
              stroke="white"
              stroke-width="2.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.4287 7H2.00014"
              stroke="white"
              stroke-width="2.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div
      
      >
        <div   v-swiper="swiperOption_new_home"
        class="w-5/6 ml-auto relative new_cards"
        :loadtheme="false">
          <ul class="swiper-wrapper card_style my-5" >
            <!-- Render original HTML in server, render Swiper in browser (client) -->
            <li class="swiper-slide" v-for="new1 in new1" :key="new1.id">
              <div class="left__main__card h-64 w-64">
                <v-row class="pa-0 my-0 mx-2">
                  <v-col cols="12" class="swiper-wrapper pa-0 ma-0">
                    <ul class="swiper-slide sale__cards d-flex flex-row">
                      <li class="pa-3 sale__card__items">
                        <div class="top_card">
                          <a href="#">
                            <img :src="new1.img" alt="" />
                          </a>
                          <div class="topcard__top__section">
                            <div
                              class="status d-flex flex-row align-center justify-center"
                            >
                              <span
                                class="sale__product  ml-2"
                              >
 <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4284 10.4896C16.4284 14.3133 13.3251 17.4167 9.5013 17.4167C5.67755 17.4167 2.57422 14.3133 2.57422 10.4896C2.57422 6.66583 5.67755 3.5625 9.5013 3.5625C13.3251 3.5625 16.4284 6.66583 16.4284 10.4896Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 6.33331V10.2916" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.125 1.58331H11.875" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


                                <span class="salecard_product__text">
                                 دو دقیقه مطالعه</span
                                >
                              </span>
                              
                            </div>
                            <span
                              class="icon_detaile  mb-0"
                            >
                            <p class="mb-0">دو روز پیش</p>
                             
                            </span>
                          </div>
                          <span class="hover__icon_bottom">
                            <div class="counter d-flex flex-column align-center pa-2 ml-2">
                              <span>20</span>
                              <span
                                ><svg
                                  width="19"
                                  height="19"
                                  viewBox="0 0 19 19"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.82496 17.4168H14.1776C16.6408 17.4168 17.6224 16.0789 17.7384 14.4481L18.2025 7.90891C18.3275 6.19891 16.7925 4.75016 14.8559 4.75016C14.3115 4.75016 13.8117 4.47308 13.5619 4.04558L12.9193 2.89766C12.5088 2.17725 11.4379 1.5835 10.5276 1.5835H8.48393C7.56472 1.5835 6.49381 2.17725 6.08329 2.89766L5.44074 4.04558C5.19086 4.47308 4.69109 4.75016 4.14671 4.75016C2.21013 4.75016 0.67515 6.19891 0.80009 7.90891L1.26415 14.4481C1.37125 16.0789 2.36185 17.4168 4.82496 17.4168Z"
                                    stroke="white"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M9.4987 14.2498C11.2428 14.2498 12.6654 12.8273 12.6654 11.0832C12.6654 9.33907 11.2428 7.9165 9.4987 7.9165C7.7546 7.9165 6.33203 9.33907 6.33203 11.0832C6.33203 12.8273 7.7546 14.2498 9.4987 14.2498Z"
                                    stroke="white"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </span>
                            </div>
                              <div class="counter d-flex flex-column align-center pa-2">
                              <span>30</span>
                              <span
                                ><svg
                                  width="19"
                                  height="19"
                                  viewBox="0 0 19 19"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.82496 17.4168H14.1776C16.6408 17.4168 17.6224 16.0789 17.7384 14.4481L18.2025 7.90891C18.3275 6.19891 16.7925 4.75016 14.8559 4.75016C14.3115 4.75016 13.8117 4.47308 13.5619 4.04558L12.9193 2.89766C12.5088 2.17725 11.4379 1.5835 10.5276 1.5835H8.48393C7.56472 1.5835 6.49381 2.17725 6.08329 2.89766L5.44074 4.04558C5.19086 4.47308 4.69109 4.75016 4.14671 4.75016C2.21013 4.75016 0.67515 6.19891 0.80009 7.90891L1.26415 14.4481C1.37125 16.0789 2.36185 17.4168 4.82496 17.4168Z"
                                    stroke="white"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M9.4987 14.2498C11.2428 14.2498 12.6654 12.8273 12.6654 11.0832C12.6654 9.33907 11.2428 7.9165 9.4987 7.9165C7.7546 7.9165 6.33203 9.33907 6.33203 11.0832C6.33203 12.8273 7.7546 14.2498 9.4987 14.2498Z"
                                    stroke="white"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </span>
                            </div>
                          </span>
                        </div>
                        <div class="bottom_card">
                          <h5 class="sale__desctiptipn py-2">
                            {{ new1.detaile }}
                          </h5>                        
                        <p class="card_description">اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.</p>
                          <div class="sale_person__details d-flex flex-row w-100">
                            <div class="sale_person d-flex flex-row">
                              <div class="sale_person__pictur pl-2">
                                <img :src="new1.person__pic" />
                              </div>
                              <span class="d-flex flex-column py-0 px-2">
                                <h5 class="px-0 py-1 ma-0">{{ new1.name }}</h5>
                                <p class="pa-0 ma-0">{{ new1.experience }}</p>
                              </span>
                            </div>
                            <div class="sale_contact_way pa-0 ma-0">
                              <svg
                                class=""
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
                              <svg
                                viewBox="0 0 44 44"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
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
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </v-col>
                </v-row>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { directive } from "vue-awesome-swiper";
import { mapState } from "vuex";
export default {
  name: "Slider",
  directives: {
    swiper: directive,
  },
  computed: mapState(["new1"]),
  data() {
    return {
      swiperOption_new_home: {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".prev-button1",
          prevEl: ".next-button1",
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
            freeMode: true,
            freeModeMomentum: true,
            loop: false,
            mousewheelSensitivity: 0.02,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
            freeMode: true,
            freeModeMomentum: true,
            loop: false,
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  mounted() {
    console.log(this.new1);
  },
};
</script>

<style scoped>
.class2 {
  background-color: blue;
}
.hh {
  background-color: red;
}
.new-main-sections {
  box-sizing: border-box;
  position: relative;
  margin: 70px 0;
}
.new-main-sections h4 {
  font-size: 21px;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: -0.035em;
  color: #519fff;
}
.new-main-sections h2 {
  font-size: 37px;
  font-weight: 800;
  line-height: 61px;
  letter-spacing: -0.035em;
  color: #121939 !important;
}


h4 {
  color: #519fff;
  font-size: 20px;
  font-weight: 200px;
}
h2 {
  color: #121939;
  font-size: 30px;
  font-weight: 500px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
.number {
  font-weight: 100px;
  color: #969595;
  font-size: 12px;
}

.arrows {
  position: absolute;
  top: 0;
  z-index: 999;
  display: flex;
  flex-direction: row;
  width: 20%;
  align-items: center;
  justify-content: space-around;
  direction: ltr;
  left: 0;
}
.see_more {
  background: #798595;
  height: 50px;
  border-radius: 10px;
  color: var(--light)!important;
  font-size: 17px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.035em;
}
.prev-button1,
.next-button1 {
  border-radius: 10px;
  cursor: pointer;
  position: relative;
}
.prev-button1 {
  background-color: #519fff;
  width: 50px;
  height: 50px;
}
.next-button1 {
  background-color: #3370bc;
  width: 50px;
  height: 50px;
}
/*card style*/
.sale__card__items:hover .sale__desctiptipn {
  color: #087cce !important;
}
.new_cards {
  margin-top: 50px;
}
.card_style .left__main__card {
  width: calc(100% - 5px);
 
}
.sale__cards {
  display: flex;
  flex-wrap: wrap;
  margin: 5px;
  justify-content: space-around;
}
.sale__cards .sale__card__items {
  width: 100% !important;
  background-color: #fff;
  border-radius: 14px;
  margin: 5px;
  box-shadow: 0px 0px 34px -9px rgba(12, 46, 96, 0.25);
  margin-bottom: 30px;
  height: 475px;
}
.top_card {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: all ease-in-out 0.3s;
  width: 100%;
  height: 240px;
}
.top_card a {
  overflow: hidden !important;
  border-radius: 10px;
  height: 100% !important;
  width: 100%;
  display: block;
}
.top_card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all ease-in-out 0.3s !important;
}
.top_card:hover img {
  transform: scale(1.1);
}

.top_card .topcard__top__section {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 95%;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
.bottom_card {
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.sale__product {
  background: var(--green100);
  width: 110px;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: 20px;
  letter-spacing: -0.035em;
  text-align: right;
  color: var(--light);
  border-radius: 5px;
  padding: 6px;
  transition: all ease-in-out 0.3s!important;
  height: 20px;
  display: flex;
  flex-direction:row;
  justify-content: space-around;
 
}
.sale__product svg {
height: 19px!important;
width: 19px!important;
}

.see_more svg{
width: 25px;
height: 25px;
}
.card_description{
color: #9EA1AC;
font-size: 14px;
font-weight: 400;
line-height: 21px;
letter-spacing: -0.021em;
}
.salecard_product__text {
white-space: nowrap;
font-size: 12px;
font-weight: 800;
line-height: 20px;
letter-spacing: -0.035em;
text-align: right;
width: 80px;
text-overflow: ellipsis;
 overflow: hidden;

}
.icon_detaile {
  background-color: var(--light) !important;
  border-radius: 9px;
  display: flex;
  padding: 6px 10px;
}
.icon_detaile p {
font-size: 12px;
font-weight: 800;
line-height: 20px;
letter-spacing: -0.035em;
}
.icon_detaile:hover h6 {
width: 40px;
}
.icon_detaile svg {
  height: 20px;
  width: 20px;
}
.top_card .hover__icon_bottom {
  position: absolute;
  right: 10px;
  left: 10px;
  bottom: -50%;
  display: flex;
justify-content: flex-end;
  transition: all ease-in-out 0.3s;
  margin-bottom: 20px;
}
.top_card:hover .hover__icon_bottom {
  position: absolute;
  bottom: 0;
  transition: all ease-in-out 0.3s;
  padding-left: 10px;
}
.sale_date {
  background-color: #fff;
  border-radius: 5px;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: 20px;
  letter-spacing: -0.035em;
  text-align: right;
  padding: 5px;
  position: absolute;
  left: 0;
}
.counter {
  background: #101737;
  color: #fff;
  border-radius: 5px;
  font-size: 12px;
}
.sale__desctiptipn {
font-size: 21px;
font-weight: 700;
line-height: 31px;
letter-spacing: -0.021em;
text-align: right;
  color: #101737;
  transition: all ease-in-out 0.3s;
}
.home__desctiption {
  display: flex;
  width: 100%;
}
.home__desctiption::before{

border-bottom: 1px solid red;
}
.home__desctiption li {
  display: inline-block;
  width: 20%;
font-size: 17px;
font-weight: 700;
line-height: 25px;
letter-spacing: -0.021em;
text-align: right;

}
.shape {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background: #c4c4c4;
}
.sale_price {
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: -0.021em;
  text-align: right;
  color: #818181;
}
.value {
  font-size: 23px;
  font-style: normal;
  font-weight: 800;
  line-height: 33px;
  letter-spacing: -0.021em;
  text-align: right;
  color: #101737;
}
.value .price_icone {
width: 32px;
height: 32px;
}
.price {
  color: rgba(129, 129, 129, 1);
  font-size: 10px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.021em;
}
.price__row {
  display: flex;
  justify-content: space-between;
}
.toman {
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: -0.021em;
  text-align: right;
}
.sale_person__details {
  justify-content: space-between;
  align-items: center;
}
.sale_contact_way {
  display: flex;
  cursor: pointer;
}
.sale_contact_way svg {
  width: 43px;
  height: 43px;
  padding: 0 5px;
}
.sale_person__pictur img {
  width: 40px;
  height: 40px;
  border-radius: 14px;
}
.sale_person {
  display: flex;
  align-items: center;
}
.sale_person p {
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.021em;
  color: #b1b1b1;
}
.sale_person h5 {
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.035em;
  text-align: right;
  color: #101737;
}
@media screen and (max-width: 760px) {
  .sale__cards .sale__card__items {
    width: 90% !important;
  }
}
@media screen and (max-width: 600px) {
     h2{
font-size: 18px;
font-weight: 800;
line-height: 30px;
letter-spacing: -0.035em;
text-align: center;

  }
   h4{
font-size: 13px;
font-weight: 700;
line-height: 22px;
letter-spacing: -0.035em;
text-align: center;

  }
  .sale__desctiptipn {
    font-size: 13px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: -0.021em;
  }
  .home__desctiption {
    font-size: 11px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.021em;
  }
  .value svg {
    width: 15px !important;
    height: 15px !important;
  }
  .value {
    font-size: 17px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: -0.021em;
  }
  .toman {
    font-size: 12px;
  }
  .sale_price {
    font-size: 10px;
    line-height: 15px;
    letter-spacing: -0.021em;
    text-align: right;
  }
  .sale_person__pictur {
    height: 35px !important;
    width: 35px !important;
  }
  .sale_person__pictur img {
    height: 100%;
    width: 100%;
  }
  .sale_person h5 {
    font-size: 10px;
  }
  .sale_person p {
    font-size: 8px;
  }
  .sale_contact_way svg {
    height: 26px;
    width: 26px;
  }
  .sale__status {
    font-size: 10px;
  }

  .sale__product {
    font-size: 10px;
  }
  .sale__product svg {
    width: 20px;
    height: 20px;
  }
}

</style>
