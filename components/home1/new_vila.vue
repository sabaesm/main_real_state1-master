<template>
  <div class="larg_container">
    <div class="new_vila__main_section">
      <h4>ویلای ساحلی مورد علاقت را پیدا کن !</h4>
      <h2>جدیدترین ویلاهای ساحلی</h2>
      <div class="arrows">
        <div class="next-button d-flex justify-center align-center" slot="button-next">
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
        <div class="prev-button d-flex justify-center align-center" slot="button-prev">
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
      <div v-swiper="swiperOption" class="w-5/6 ml-auto relative" :loadtheme="false">
        <div class="swiper-wrapper">
          <ul
            class="sale__cards d-flex flex-row swiper-slide"
            v-for="data in data"
            :key="data.id"
          >
            <li class="sale__card__items">
              <div class="top_card">
                <a href="#">
                  <img :src="data.cover" alt="" />
                </a>
              </div>
              <div class="bottom_card pa-2">
                <h5 class="sale__desctiptipn py-0">
                  {{ data.title }}
                </h5>

                <v-row class="price__row ma-0 px-0 py-0">
                  <span class="value d-flex flex-row align-center">
                    <span>
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.4"
                          d="M8.84724 3.62993V5.99036C8.84724 7.40203 8.04057 8.00701 6.83057 8.00701H2.80182C2.59557 8.00701 2.39849 7.9887 2.21515 7.94745C2.10057 7.92912 1.99057 7.89703 1.88974 7.86037C1.20224 7.6037 0.785156 7.00786 0.785156 5.99036V3.62993C0.785156 2.21826 1.59182 1.61328 2.80182 1.61328H6.83057C7.85724 1.61328 8.59516 2.0487 8.79224 3.04328C8.82432 3.22661 8.84724 3.41451 8.84724 3.62993Z"
                          fill="#237E48"
                        />
                        <path
                          d="M10.2219 5.00511V7.36554C10.2219 8.7772 9.41526 9.38219 8.20526 9.38219H4.17651C3.83734 9.38219 3.53026 9.33638 3.26443 9.23555C2.71901 9.03388 2.34776 8.6168 2.21484 7.94763C2.39818 7.98888 2.59526 8.00719 2.80151 8.00719H6.83026C8.04026 8.00719 8.84693 7.4022 8.84693 5.99054V3.63011C8.84693 3.41469 8.8286 3.22221 8.79193 3.04346C9.66276 3.22679 10.2219 3.84094 10.2219 5.00511Z"
                          fill="#237E48"
                        />
                        <path
                          d="M4.81157 6.02255C5.47983 6.02255 6.02158 5.48081 6.02158 4.81255C6.02158 4.14428 5.47983 3.60254 4.81157 3.60254C4.1433 3.60254 3.60156 4.14428 3.60156 4.81255C3.60156 5.48081 4.1433 6.02255 4.81157 6.02255Z"
                          fill="#237E48"
                        />
                        <path
                          d="M2.19141 3.78125C2.00349 3.78125 1.84766 3.93708 1.84766 4.125V5.5C1.84766 5.68792 2.00349 5.84375 2.19141 5.84375C2.37932 5.84375 2.53516 5.68792 2.53516 5.5V4.125C2.53516 3.93708 2.38391 3.78125 2.19141 3.78125Z"
                          fill="#237E48"
                        />
                        <path
                          d="M7.42969 3.78125C7.24177 3.78125 7.08594 3.93708 7.08594 4.125V5.5C7.08594 5.68792 7.24177 5.84375 7.42969 5.84375C7.6176 5.84375 7.77344 5.68792 7.77344 5.5V4.125C7.77344 3.93708 7.62219 3.78125 7.42969 3.78125Z"
                          fill="#237E48"
                        />
                      </svg>
                    </span>
                    {{ data.unit_price }}
                    <span class="toman">تومان</span>
                  </span>
                </v-row>
                <div class="sale_person__details d-flex flex-row w-100">
                  <div class="sale_person d-flex flex-row">
                    <div class="sale_person__pictur">
                      <img :src="data.cover" />
                    </div>
                    <span class="d-flex flex-column pa-1">
                      <h5 class="pa-0 ma-0">{{ data.username }}</h5>
                      <p class="pa-0 ma-0">{{ data.user_activity }}</p>
                    </span>
                  </div>
                  <div class="sale_contact_way pa-0 ma-0">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { directive } from "vue-awesome-swiper";
export default {
  name: "Slider",
  directives: {
    swiper: directive,
  },

  props: ["data"],
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 100,

        slidesPerGroup: 1,
        freeMode: true,
        freeModeMomentum: true,
        mousewheelSensitivity: 0.02,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".prev-button",
          prevEl: ".next-button",
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 200,
          },
          768: {
            slidesPerView: 1,
            freeMode: true,
            freeModeMomentum: true,
            mousewheelSensitivity: 0.02,
          },
          640: {
            spaceBetween: 10,

            freeMode: true,
            freeModeMomentum: true,
            mousewheelSensitivity: 0.02,
          },
          320: {
            spaceBetween: 150,
            freeMode: true,
            freeModeMomentum: true,
            mousewheelSensitivity: 0.02,
          },
        },
      },
    };
  },
};
</script>
<style scoped>
.new_vila__main_section {
  box-sizing: border-box;
  position: relative;
  margin: 100px 0;
}

p {
  font-weight: 100;
  font-size: 10px;
}
h4 {
  color: #519fff;
  font-size: 20px;
  font-weight: 200px;
}
h2 {
  font-size: 37px;
  font-weight: 800;
  line-height: 61px;
  letter-spacing: -0.035em;
  text-align: right;
  color: #121939 !important;
  margin-bottom: 90px;
}
.arrows {
  position: absolute;
  top: 0;
  z-index: 999;
  display: flex;
  flex-direction: row;
  width: 10%;
  align-items: center;
  justify-content: space-around;
  direction: ltr;
  left: 0;
}
.see_more {
  background: #abbdd3;
  border-radius: 10px;
  width: 61px;
  height: 61px;
}
.see_more svg {
  width: 25px;
  height: 25px;
}
.prev-button,
.next-button {
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  width: 61px;
  height: 61px;
}
.prev-button {
  background-color: #519fff !important;
  width: 50px;
  height: 50px;
  transition: all ease-in-out 0.3s !important;
}
.next-button {
  background-color: #519fff !important;
  width: 50px;
  height: 50px;
  transition: all ease-in-out 0.3s !important;
}
.next-button:hover {
  background-color: #3370bc !important;
}
.prev-button:hover {
  background-color: #3370bc !important;
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
.prev-button,
.next-button {
  border-radius: 10px;
  cursor: pointer;
  position: relative;
}

.prev-button {
  background-color: #519fff;
  width: 50px;
  height: 50px;
}
.next-button {
  background-color: #3370bc;
  width: 50px;
  height: 50px;
}



.sale__cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px 0;
}
.top_card {
  position: relative;
  overflow: hidden;
  transition: all ease-in-out 0.3s;
  width: 100%;
  height: 60%;
}

.bottom_card {
  height: 40% !important;

}
.sale__cards .sale__card__items {
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  min-width: 350px;
  box-shadow: 0px 0px 34px -9px rgba(12, 46, 96, 0.25);
  height: 275px;
}
.top_card a {
  overflow: hidden !important;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 0;
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

.sale__desctiptipn {
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.021em;
  text-align: right;
  color: #101737 !important;
  transition: all ease-in-out 0.3s;
  margin-bottom: 5px;
}
.sale__card__items:hover .sale__desctiptipn {
  color: #087cce !important;
}
.home__desctiption {
  display: flex;
  width: 100%;
}
.home__desctiptionli {
  display: inline-block;
  width: 20%;
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
  font-size: 14px;
  font-weight: 800;
  line-height: 20px;
  letter-spacing: -0.021em;
  text-align: right;
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
  font-size: 12px;
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
  width: 28px;
}
.sale_person__pictur  {
  width: 30px;
  height: 30px;
  border-radius: 6px;
  overflow: hidden;
}
.sale_person__pictur img{
width: 100%;
height: 100%;
object-fit: cover;

}
.sale_person {
  display: flex;
  align-items: center;
}
.sale_person p {
  font-size: 8px;
  font-weight: 400;
  line-height: 11px;
  letter-spacing: -0.021em;
  text-align: right;
  color: #b1b1b1;
}
.sale_person h5 {
  font-size: 10px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: -0.035em;
  text-align: right;

  color: #101737 !important;
}
@media screen and (max-width: 600px) {
  .arrows {
    display: none;
  }
  .top_section div {
    width: 100%;
  }
  h2 {
    text-align: center !important;
    width: 100% !important;
  }
  h4 {
    font-size: 13px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.035em;
    text-align: center !important;
    width: 100% !important;
  }
  h2 {
    font-size: 18px;
    font-weight: 800;
    line-height: 30px;
    letter-spacing: -0.035em;
  }
  .sale_date {
    font-size: 15px !important;
    font-weight: 700 !important;
    line-height: 22px !important;
    letter-spacing: -0.021em !important;
  }
  .sale__status_v {
    font-size: 10px !important;
    height: 27px;
  }
  .Building-type {
    height: 27px;
  }
  .top_card a {
    border-radius: 14px;
  }
  .counter {
    font-size: 11px !important;
    font-weight: 800;
    line-height: 18px;
    letter-spacing: -0.035em;
  }
  .sale__desctiptipn {
    font-size: 15px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.021em;
  }
  .sale__product {
    height: 27px;
  }
  .home__desctiption li {
    font-size: 13px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: -0.021em;
    text-align: right;
  }
  .sale__cards {
    width: 200px !important;
  }
  .sale__cards .sale__card__items {
    height: 415px;
    
  }

  .sale_contact_way svg {
    width: 28px;
  }
  .sale__cards {
    padding: 30px 5px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60% !important;
  }
  .sale__card__items {
    border-radius: 17px !important;
  }
  .toman {
    font-size: 13px;
  }
  .value {
    font-size: 18px;
  }
  .value svg {
    height: 27px;
    width: 27px;
    padding-left: 3px;
  }
  .sale_person h5 {
    font-size: 12px;
  }
  .sale_person p {
    font-size: 10px;
  }
}
</style>
