<template>
  <div class="larg_container">
    <div class="new-main-section">
      <div class="top_section">
        <div class="">
          <h4>خونتو پیدا کن</h4>
          <h2>جدیدترین ملک ها</h2>
        </div>
        <div class="arrows">
          <div class="see_more d-flex align-center">
            <span class="pl-5">مشاهده همه</span>
            <svg
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
          </div>
          <div
            class="next-button-new d-flex align-center justify-center"
            slot="next-button-new "
          >
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
          <div
            class="prev-button-new d-flex align-center justify-center"
            slot="button-prev"
          >
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
      </div>
      <div v-swiper="swiperOption" class="w-5/6 ml-auto relative custom_swiper_container">
        <div class="swiper-wrapper">
          <ul
            class="sale__cards d-flex flex-row align-center justify-center swiper-slide"
            v-for="(data,index) in data"
            :key="data.id"
          >
            <li v-if="index<=6"  class="ma-0 pa-2 sale__card__items">
              <div class="top_card">
                <a href="#">
                  <img :src="data.cover" alt="" />
                </a>
                <div class="topcard__top__section">
                  <div class="status d-flex flex-row align-center justify-center px-3">
                  <div v-if="data.special === true "> <span
                      class="sale__product d-flex align-center justify-center flex-row"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5846 20.1665H6.41797C6.04214 20.1665 5.73047 19.8548 5.73047 19.479C5.73047 19.1032 6.04214 18.7915 6.41797 18.7915H15.5846C15.9605 18.7915 16.2721 19.1032 16.2721 19.479C16.2721 19.8548 15.9605 20.1665 15.5846 20.1665Z"
                          fill="white"
                        />
                        <path
                          d="M18.6529 5.06012L14.9862 7.68178C14.5004 8.03012 13.8037 7.81928 13.5929 7.26012L11.8604 2.64012C11.5671 1.84262 10.4396 1.84262 10.1462 2.64012L8.40457 7.25095C8.19374 7.81928 7.50624 8.03012 7.0204 7.67262L3.35374 5.05095C2.6204 4.53762 1.64874 5.26178 1.95124 6.11428L5.76457 16.7935C5.8929 17.1601 6.24124 17.3985 6.62624 17.3985H15.3621C15.7471 17.3985 16.0954 17.151 16.2237 16.7935L20.0371 6.11428C20.3487 5.26178 19.3771 4.53762 18.6529 5.06012ZM13.2904 13.521H8.70707C8.33124 13.521 8.01957 13.2093 8.01957 12.8335C8.01957 12.4576 8.33124 12.146 8.70707 12.146H13.2904C13.6662 12.146 13.9779 12.4576 13.9779 12.8335C13.9779 13.2093 13.6662 13.521 13.2904 13.521Z"
                          fill="white"
                        />
                      </svg>
                      <span class="salecard_product__text">فروش ویژه</span>
                    </span></div>
                   
                    <div class="card_icons" v-if="data.Transaction === 'P' "> <span class="sale__status_v "> پیش فروش</span></div>
                    <div v-else-if="data.Transaction === 'S'"> <span class="sale__status_s ">  فروش</span></div>
                  </div>
                  <div class="d-flex flex-row align-center Building-type">
                    <p v-if="data.estate_type === 'A' ">آپارتمان</p>
                    <p v-else-if="data.estate_type === 'B' ">مغازه و تجاری</p>
                    <p v-else-if="data.estate_type === 'L' "> زمین </p>
                    <p v-else-if="data.estate_type === 'H' "> خانه</p>
                    <p v-else-if="data.estate_type === 'V' "> ویلایی </p>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8334 18.3333H4.16675C2.50008 18.3333 1.66675 17.5 1.66675 15.8333V9.16663C1.66675 7.49996 2.50008 6.66663 4.16675 6.66663H8.33342V15.8333C8.33342 17.5 9.16675 18.3333 10.8334 18.3333Z"
                        stroke="#535353"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.42507 3.33337C8.3584 3.58337 8.33342 3.85837 8.33342 4.16671V6.66671H4.16675V5.00004C4.16675 4.08337 4.91675 3.33337 5.83341 3.33337H8.42507Z"
                        stroke="#535353"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.6667 6.66663V10.8333"
                        stroke="#535353"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 6.66663V10.8333"
                        stroke="#535353"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.1667 14.1666H12.5001C12.0417 14.1666 11.6667 14.5416 11.6667 15V18.3333H15.0001V15C15.0001 14.5416 14.6251 14.1666 14.1667 14.1666Z"
                        stroke="#535353"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 10.8334V14.1667"
                        stroke="#535353"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.33325 15.8333V4.16663C8.33325 2.49996 9.16659 1.66663 10.8333 1.66663H15.8333C17.4999 1.66663 18.3333 2.49996 18.3333 4.16663V15.8333C18.3333 17.5 17.4999 18.3333 15.8333 18.3333H10.8333C9.16659 18.3333 8.33325 17.5 8.33325 15.8333Z"
                        stroke="#535353"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <span class="hover__icon_bottom">
                  <div class="counter d-flex flex-column align-center pa-2">
                    <span>{{data.media_count}}</span>
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
                  <span class="sale_date">{{ data.placed_at }}</span>
                </span>
              </div>
              <v-col class="bottom_card pa-0 ma-0" cols="12">
                <h5 class="sale__desctiptipn py-2 pt-5">
                  {{ data.title.substring(0, 50)   }}
                </h5>
                <ul class="home__desctiption">
                  <li v-if="data.land_size !== null" >{{ data.land_size }}</li>
                  <li v-if="data.building_size !== null" >{{ data.building_size }}</li>
                  <li v-if="data.dang !== null" >{{ data.dang }}</li>
                  <li v-if="data.rooms !== null" >{{ data.rooms }}</li>
                  <li v-if="data.wc !== null" >{{ data.wc }}</li>
                  <li v-if="data.master !== null" >{{ data.master }}</li>
                  <li v-if="data.view !== null" >{{ data.view }}</li>
                  <li v-if="data.in_material !== null" >{{ data.in_material }}</li>
                  <li v-if="data.ex_material !== null" >{{ data.ex_material }}</li>
                  <li v-if="data.floorCover !== null" >{{ data.floorCover }}</li>
                  <li v-if="data.cabinets !== null" >{{ data.cabinets }}</li>
                  <li v-if="data.building_age !== null" >{{ data.building_age }}</li>
                  <li v-if="data.document_type !== null" >{{ data.document_type }}</li>
                  <li v-if="data.unit_in_floors !== null" >{{ data.unit_in_floors }}</li>
                  <li v-if="data.wall_cover !== null" >{{ data.wall_cover }}</li>
                  <li v-if="data.length !== null" >{{ data.length }}</li>
                  <li v-if="data.ground_width !== null" >{{ data.ground_width }}</li>
                  <li v-if="data.corrected_area !== null" >{{ data.corrected_area }}</li>
                  <li v-if="data.passage_width !== null" >{{ data.passage_width }}</li>
                  <li v-if="data.tree_count !== null" >{{ data.tree_count }}</li>
                 
                </ul>
                <v-row class="price__row ma-0 px-0 py-2">
                  <span class="value d-flex flex-row align-center">
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
                    <a href="https://wa.me/09392832153" class="pa-0 ma-0"><svg
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
                    </svg></a>

                    
                  </div>
                </div>
              </v-col>
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
  computed: {
    ...mapState(["salecard"]),
  },
  data() {
    return {
      swiperOption: {
        slidesPerGroup: 1,
        loopFillGroupWithBlank: false,
            spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
                      spaceBetween: 10,

        },
        navigation: {
          nextEl: ".prev-button-new",
          prevEl: ".next-button-new",
        },
        breakpoints: {
          1024: {
            loop: true,

            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
            freeMode: true,
            freeModeMomentum: true,
            mousewheelSensitivity: 0.02,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
            freeMode: true,
            freeModeMomentum: true,
            mousewheelSensitivity: 0.02,
          },
          320: {
            freeMode: true,
            spaceBetween: 40,
            freeModeMomentum: true,
            mousewheelSensitivity: 0.02,
          },
        },
      },
    };
  },
  props: ['data'],
  mounted(){
    console.log( "case is 2 "+ this.data)

  }
  
};
</script>

<style scoped>
.custom_swiper_container {
  box-sizing: initial;
  padding: 0 10px !important;

}
.swiper-slide{
  width: 90;
}
.new-main-section {
  box-sizing: border-box;
  position: relative;
  margin-bottom: 60px;
}
.top_section {
  display: flex;
  align-items: center;
  margin: 40px 0;
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
  z-index: 999;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  direction: ltr;
  left: 0;
}
.see_more {
  background-color: #798595;
  border-radius: 10px;
  height: 61px;
  padding: 20px;
  margin: 0 5px;
}
.see_more svg {
  width: 25px;
  height: 25px;
}
.see_more span {
  color: #ffff;
  font-size: 17px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.035em;
  text-align: right;
}
.prev-button-new,
.next-button-new {
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  margin: 0 5px;
}

.prev-button-new {
  background-color: #519fff;
  width: 60px;
  height: 60px;
}
.next-button-new {
  background-color: #519fff;
  width: 60px;
  height: 60px;
}
.bottom_card {
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.sale__card__items{
  width: 100%!important;
  margin: 0 20px!important;
  background-color: red;

}
.sale__card__items:hover .sale__desctiptipn {
  color: #087cce !important;

}

.sale__cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px 0px !important;

}
.sale__cards .sale__card__items {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: calc(100% -20px);
  box-shadow: 0px 0px 34px -9px rgba(12, 46, 96, 0.25);
  height: 490px;
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
  height: 100%;
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
  align-items: center;
  width: 100%;
  margin-top: 10px;
}
.sale__product {
  background: #ffa80a;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: 20px;
  letter-spacing: -0.035em;
  text-align: right;
  color: #ffff;
  border-radius: 5px;
  transition: all ease-in-out 0.3s !important;
  overflow: hidden;
  height: 35px;
  width: 35px;
  margin-left: 5px;
}
.sale__product:hover {
  width: 100px;
}
.salecard_product__text {
  width: 0;
  transition: all ease-in-out 0.3s !important;
  overflow: hidden;
  white-space: nowrap;
}
.sale__product:hover .salecard_product__text {
  width: 60px;
  transition: all ease-in-out 0.3s !important;
}
.status {
  transition: all ease-in-out 0.3s !important;
}
.sale__status_v {
  background-color: #0a98ff;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: 20px;
  letter-spacing: -0.035em;
  text-align: right;
  color: #ffff;
  border-radius: 5px;
  padding: 0 10px;
  height: 35px;
  display: flex;
  align-items: center;
}
.sale__status_s {
background: #55499B;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: 20px;
  letter-spacing: -0.035em;
  text-align: right;
  color: #ffff;
  border-radius: 5px;
  padding: 0 10px;
  height: 35px;
  display: flex;
  align-items: center;
}
.Building-type {
  background-color: #ffff;
  margin-left: 10px;
  padding: 10px;
  border-radius: 9px;
}
.Building-type p {
  margin-bottom: 0;
  font-size: 12px;
  font-weight: 800;
  line-height: 20px;
  letter-spacing: -0.035em;
  color: #535353;
  width: 0;
  overflow: hidden;
  transition: all ease-in-out 0.3s;
  white-space: nowrap;
}
.Building-type:hover p {
  width: 70px;
}
.top_card .hover__icon_bottom {
  position: absolute;
  right: 10px;
  left: 10px;
  bottom: -50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  transition: all ease-in-out 0.3s;
  margin-bottom: 10px;
}
.top_card:hover .hover__icon_bottom {
  position: absolute;
  bottom: 0;
  transition: all ease-in-out 0.3s;
  padding-left: 10px;
}
.sale_date {
  background-color: #fff;
  border-radius: 9px;
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
  line-height: 29px;
  letter-spacing: -0.021em;
  text-align: right;
  color: #101737 !important;
  transition: all ease-in-out 0.3s;
}
.home__desctiption {
  display: flex;
  width: 100%;
}
.home__desctiption li {
  display: inline-block;
  width: 18%;
font-size: 17px;
font-weight: 700;
line-height: 25px;
letter-spacing: -0.021em;
text-align: right;
position: relative;
padding: 0 5px;
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
}
.value svg{

  height: 32px;
width: 32px;
padding-left: 5px;

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
  align-items: center;
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
  width: 45px;
}
.sale_person__pictur img {
  width: 40px;
  height: 40px;
  border-radius: 9px;
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
  color: #b1b1b1!important;
}
.sale_person h5 {
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.035em;
  text-align: right;
  color: #101737!important;
}
.home__desctiption li::before{

  content: '';
  height: 4px;
  width: 4px;
background: #C4C4C4;
  position: absolute;
  border-radius: 100%;
 top: 45%;
left: 100%;

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
  .home__desctiption {
    font-size: 13px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: -0.021em;
    text-align: right;
  }
}
</style>
