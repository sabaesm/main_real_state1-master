<template>
  <div>
    <ul v-for="recent in recent" :key="recent.id" class="my-1">
      <li>
        <div class="d-flex flex-row jusify-center align-center cards_row_weblog py-2 pr-2">
          <v-col cols="4" class="pa-0 home_img">
            <img class="" :src="recent.img" />
          </v-col>
          <v-col class="recent__home d-flex flex-column p-0 pr-2" cols="8">
            <h5 class="mb-2 mt-1 pa-0">{{ recent.title }}</h5>
            <p class="mb-0 pa-0" >{{ recent.desctiption }}</p>
            <div class="home_date pt-3">
              <span
                ><svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 1.25V3.125"
                    stroke="#989898"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 1.25V3.125"
                    stroke="#989898"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.1875 5.68115H12.8125"
                    stroke="#989898"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.125 5.3125V10.625C13.125 12.5 12.1875 13.75 10 13.75H5C2.8125 13.75 1.875 12.5 1.875 10.625V5.3125C1.875 3.4375 2.8125 2.1875 5 2.1875H10C12.1875 2.1875 13.125 3.4375 13.125 5.3125Z"
                    stroke="#989898"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.80907 8.5625H9.81468"
                    stroke="#989898"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.80907 10.4375H9.81468"
                    stroke="#989898"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.49657 8.5625H7.50218"
                    stroke="#989898"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.49657 10.4375H7.50218"
                    stroke="#989898"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.18407 8.5625H5.18968"
                    stroke="#989898"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.18407 10.4375H5.18968"
                    stroke="#989898"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              {{ recent.date }}
            </div>
          </v-col>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["recent"]),
};
</script>
<style scoped>
.home_img {
  width: 100%;
  height: 110px !important;
}
.home_img img{
height: 100%;
  width: 100%;

object-fit: cover;
  border-radius: 23px;

}
.recent__home h5 {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: -0.021em;
  color: rgba(16, 23, 55, 1)!important;
}
.recent__home p {
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  color: rgba(158, 161, 172, 1);
}
.home_date {
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -0.021em;
  text-align: right;
  color: #535353b8;
}
.cards_row_weblog {
  
  transition: all ease-in-out 0.3s;
}
.cards_row_weblog:hover {
  box-shadow: 0px 0px 34px -9px rgba(12, 46, 96, 0.15);
  border-radius: 25px;
  transition: all ease-in-out 0.3s;
}
@media screen and (max-width: 600px) {
  .cards_row_weblog {
    display: flex;
    align-items: center;
  }
  .recent__home h5 {
    font-size: 10px;
    margin-bottom: 5px !important;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: -0.021em;
    text-align: right;
  }
  .recent__home p {
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    line-height: 12px;
    letter-spacing: -0.021em;
    text-align: right;
  }
  .home_date {
    font-size: 8px;
    font-weight: 400;
    line-height: 12px;
    padding-top: 5px !important;
  }
  .home_date svg {
    width: 11px;
  }
  .home_img {
    width: 100%;
    height: 95px !important;
  }
}
@media screen and (max-width: 1300px) {
  .recent__home h5 {
    font-size: 11px !important;
    letter-spacing: -0.021em;
    margin-bottom: 3px !important;
  }
  .home_date {
    padding-top: 10px !important;
  }
}
</style>
