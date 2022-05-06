<template>
  <div class="about__us">
    <h3 class="m-0">اعضاء مشاورین املاک هوملند</h3>
    <div class="medium_container custom_slider mt-5 pt-5">
      <v-col cols="10" class="grouping-main-section">
        <v-col cols="12">
          <div v-swiper="swiperOption" class="ml-auto relative" :loadtheme="false">
            <div class="swiper-wrapper">
              <ul
                class="swiper-slide"
                :key="aboutSlider.id"
                v-for="aboutSlider in aboutSlider"
              >
                <!-- Render original HTML in server, render Swiper in browser (client) -->
                <li class="cards">
              
                  <img :src="aboutSlider.img" />
                  <h4>
                    {{ aboutSlider.name }}
                  </h4>
                  <p>
                    {{ aboutSlider.text }}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </v-col>
        <div class="prev-button d-none d-md-flex" slot="button-prev">
          <svg
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_576_15808)">
              <circle cx="31" cy="31" r="21" fill="white" />
            </g>
            <path
              d="M26.2563 39.8267C25.9456 39.5161 25.9174 39.03 26.1716 38.6874L26.2563 38.5893L33.8038 31.0413L26.2563 23.4934C25.9456 23.1827 25.9174 22.6966 26.1716 22.3541L26.2563 22.256C26.5669 21.9453 27.053 21.9171 27.3956 22.1712L27.4937 22.256L35.6604 30.4226C35.971 30.7333 35.9993 31.2194 35.7451 31.5619L35.6604 31.6601L27.4937 39.8267C27.152 40.1684 26.598 40.1684 26.2563 39.8267Z"
              fill="black"
            />
            <defs>
              <filter
                id="filter0_d_576_15808"
                x="0"
                y="0"
                width="62"
                height="62"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="3"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_576_15808"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="6.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.317647 0 0 0 0 0.623529 0 0 0 0 1 0 0 0 0.43 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_576_15808"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_576_15808"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div class="next-button d-none d-md-flex" slot="button-next">
          <svg
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_576_15811)">
              <circle r="21" transform="matrix(-1 0 0 1 31 31)" fill="white" />
            </g>
            <path
              d="M35.7437 39.8267C36.0544 39.5161 36.0826 39.03 35.8284 38.6874L35.7437 38.5893L28.1962 31.0413L35.7437 23.4934C36.0544 23.1827 36.0826 22.6966 35.8284 22.3541L35.7437 22.256C35.4331 21.9453 34.947 21.9171 34.6044 22.1712L34.5063 22.256L26.3396 30.4226C26.029 30.7333 26.0007 31.2194 26.2549 31.5619L26.3396 31.6601L34.5063 39.8267C34.848 40.1684 35.402 40.1684 35.7437 39.8267Z"
              fill="black"
            />
            <defs>
              <filter
                id="filter0_d_576_15811"
                x="0"
                y="0"
                width="62"
                height="62"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="3"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_576_15811"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="6.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.317647 0 0 0 0 0.623529 0 0 0 0 1 0 0 0 0.43 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_576_15811"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_576_15811"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div class="swiper-pagination d-flex d-md-none"></div>
      </v-col>
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
  computed: mapState(["aboutSlider"]),
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: -10,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".prev-button",
          prevEl: ".next-button",
        },

        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
           425: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },
      },
    };
  },
};
</script>

<style >
.about__us .swiper-pagination-bullet-active{
padding:  0 10px!important;
margin: 0 2px;
background: #9B9B9B;
}
.about__us .swiper-pagination-bullet{
border-radius: 10px;
margin: 0 2px;
}
</style>
<style scoped>
@import "../../assets/css/aboutUs/slider.css";
.custom_slider {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about__us h3 {
  text-align: center;
  margin-top: 100px!important;
  text-align: center!important;
}
</style>
