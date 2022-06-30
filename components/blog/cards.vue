<template>
  <div class="mainCard__weblog d-flex flex-column mb-5">
    <ul v-for="data in data" :key="data.id" class="grouping_card pa-0 mb-5">
      <nuxt-link :to="'/blog/' + data.slug">
        <v-col cols="12 " class="pa-3 ma-0">
          <v-row class="main__row d-flex pa-0 ma-0">
            <v-col cols="12" sm="5" class="ma-0 pa-0">
              <!-- right section of card -->
              <li class="right__section ma-0 pa-0">
                <div class="pictur ma-0">
                  <img class="" :src="env + data.cover" />

                  <div class="time">
                    <svg
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8058 7.6646C12.8058 10.4335 10.5585 12.6808 7.7896 12.6808C5.02068 12.6808 2.77344 10.4335 2.77344 7.6646C2.77344 4.89568 5.02068 2.64844 7.7896 2.64844C10.5585 2.64844 12.8058 4.89568 12.8058 7.6646Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.78906 4.65527V7.52165"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.07031 1.21533H9.50997"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>
                      {{ data.time }}
                    </p>
                  </div>
                  <div class="date">
                    <p class="">
                    {{ $moment( data.placed_at).format('jYYYY/jM/jDD') }}
                    </p>
                  </div>
                  <div class="d-flex flex-row count__icon mb-4">
                    <div class="text_counter px-2">
                      <p class="message__number pt-1">{{ data.review_count }}</p>
                      <span class="message__icon">
                        <svg
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.41725 10.0321H4.15799C2.08391 10.0321 1.04688 9.51358 1.04688 6.92099V4.3284C1.04688 2.25432 2.08391 1.21729 4.15799 1.21729H8.30613C10.3802 1.21729 11.4172 2.25432 11.4172 4.3284V6.92099C11.4172 8.99506 10.3802 10.0321 8.30613 10.0321H8.04687C7.88613 10.0321 7.73058 10.1099 7.63206 10.2395L6.85428 11.2765C6.51206 11.7328 5.95206 11.7328 5.60984 11.2765L4.83206 10.2395C4.7491 10.1254 4.55725 10.0321 4.41725 10.0321Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.30719 5.88377H8.31185"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.23297 5.88377H6.23763"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.15876 5.88377H4.16341"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                    <div class="view_counter px-2">
                      <p class="message__number pt-1">{{ data.view }}</p>
                      <span class="message__icon">
                        <svg
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.53681 6.4022C8.53681 7.42886 7.70718 8.25849 6.68051 8.25849C5.65385 8.25849 4.82422 7.42886 4.82422 6.4022C4.82422 5.37553 5.65385 4.5459 6.68051 4.5459C7.70718 4.5459 8.53681 5.37553 8.53681 6.4022Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.67917 10.6904C8.50954 10.6904 10.2155 9.61185 11.4029 7.74518C11.8695 7.01407 11.8695 5.78518 11.4029 5.05407C10.2155 3.1874 8.50954 2.10889 6.67917 2.10889C4.8488 2.10889 3.14288 3.1874 1.95547 5.05407C1.4888 5.78518 1.4888 7.01407 1.95547 7.74518C3.14288 9.61185 4.8488 10.6904 6.67917 10.6904Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </v-col>
            <!-- left section of card -->
            <v-col cols="12" sm="7" class="p-0 m-0 pr-3">
              <li class="left__section">
                <h4>
                  {{ data.title }}
                </h4>
                <p>{{ data.text.substring(0, 150) }}</p>
                <div class="person__details d-flex flex-row w-100">
                  <div class="person d-flex flex-row">
                    <div class="person__pictur">
                      <img :src="data.person__pic" />
                    </div>
                    <span class="d-flex flex-column p-1">
                      <h5 class="">{{ data.username }}</h5>
                      <p class="">{{ data.user_activity }}</p>
                    </span>
                  </div>
                  <div class="contact_way">
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
              </li>
            </v-col>
            <!-- end of left section -->
          </v-row>
        </v-col>
      </nuxt-link>
      <div>{{ data.count }}</div>
      <!-- end of card -->
    </ul>
   
  </div>

</template>
<script>
import { mapState } from "vuex";
import pagination from "./pagination.vue";
import { getBlog } from "../../service/getApi";
import axios from 'axios';
export default {
  components: {
    pagination,
  },
  computed: mapState(["weblog"]),
  props: ["data", "data2"],
  data() {
    return {
      env: process.env.baseURL,
      
      pagination:[]
    };

  },

};
</script>
<style scoped>
img {
  object-fit: cover !important;
}
p,
h4,
h5 {
  margin: 0 !important;
  padding: 3px !important;
}
.left__section h4 {
  font-size: 21px;
  font-weight: 800;
  line-height: 31px;
  letter-spacing: -0.021em;
  margin-top: 0;
  width: 100%;
  text-align: right !important;
  transition: all ease-out 0.2s;
  color: #000;
}
.left__section p {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.021em;
  color: rgba(158, 161, 172, 1);
}
.mainCard__weblog {
  align-items: center;
}
.main__row {
  align-items: center;
  justify-content: space-around;
  width: 100%;
}
.grouping_card {
  box-shadow: 0px 0px 34px -9px rgba(12, 46, 96, 0.25);
  border-radius: 31px;
  height: 210px;
  display: flex;
  align-items: center;
  transition: all ease-in-out 0.3s;
  width: 100% !important;
}
.grouping_card a {
  width: 100% !important;
}

li {
  width: 100% !important;
}
.pictur {
  width: 100% !important;
  position: relative;
  border-radius: 26px;
  height: 180px;
  overflow: hidden !important;
}
.pictur img{
  background-size: cover;
width: 100%!important;

}
.main__pic:hover {
  transform: scale(1.1);
}
.main__pic {
  width: 100% !important;
  border-radius: 26px;
  height: 100% !important;
  transition: all ease-in-out 0.3s;
}
.time {
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  background-color: rgba(109, 193, 117, 1);
  position: absolute;
  width: 85px;
  top: 13px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  right: 0%;
  padding: 6px 5px;
  margin-right: 13px;
}
.time p {
  padding: 0;
  margin: 0;
  font-size: 9px;
  font-style: normal;
  font-weight: 800;
  line-height: 13px;
  letter-spacing: -0.035em;
  text-align: right;
  white-space: nowrap;
  width: 55px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #ffff;
}
.time svg {
  height: 13.75px;
  width: 13.7px;
}
.date {
  position: absolute;
  width: 60px;
  top: 13px;
  left: 0%;
  background-color: #ffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 5px;
  margin-left: 13px;
}
.date p {
  font-size: 10px;
  font-weight: 800;
  line-height: 13px;
  letter-spacing: -0.035em;
  text-align: center;
  color: #535353;
  text-align: right;
  white-space: nowrap;
  width: 55px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  margin: 0;
}
.count__icon {
  position: absolute;
  left: 0%;
  bottom: 0%;
  padding-bottom: 8px;
  padding-left: 13px;
}
.count__icon svg {
  height: 25px;
  width: 20px;
}
.count__icon .text_counter,
.view_counter {
  background: rgba(16, 23, 55, 1);
  color: #ffff;
  border-radius: 5px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2px;
}
.message__number {
  font-size: 8px;
  font-weight: 800;
  line-height: 13px;
  letter-spacing: -0.035em;
  text-align: right;
}

.message__icon svg {
  width: 14.37px;
  height: 14px;
  padding: 0;
}
/*left section */
.left__section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  height: 185px;
}
.person__details {
  justify-content: space-between;
  align-items: center;
}
.person__pictur img {
  border-radius: 15px !important;
  margin-left: 8px;
}
.person__pictur img {
  width: 40px;
  height: 40px;
  border-radius: 0;
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
  color: #b1b1b1 !important;
}
.person h5 {
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.035em;
  text-align: right;
  color: #101737 !important;
}
.contact_way {
  display: flex;
  cursor: pointer;
}
.contact_way svg {
  width: 45px;
}

.mainCard__weblog :hover .main__row .left__section h4 {
  color: rgba(71, 138, 220, 1);
  transition: all 0.3s;
}
.grouping_card:hover {
  box-shadow: 0px 0px 34px -9px rgba(71, 138, 220, 0.4);
  transition: all ease-in-out 0.3s;
}
@media only screen and (max-width: 1300px) {
  .left__section h4 {
    font-size: 19px;
  }
  .left__section p {
    font-size: 12px;
    line-height: 19px;
  }
}
@media only screen and (max-width: 600px) {
  .grouping_card {
    height: 390px;
  }
  .main__pic {
    height: 220px;
  }
  .left__section {
    height: 150px;
  }
  .left__section h4 {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.021em;
    text-align: right;
    margin-top: 15px;
    width: 100%;
    text-align: right !important;
  }
  .time p {
    font-size: 8px;
  }
  .date p {
    font-size: 9px;
    text-overflow: ellipsis;
  }
  .date svg {
    width: 13px;
    height: 13px;
  }
  .message__number {
    font-size: 9px;
    height: 11px;
  }
  .time {
    width: 75px;
  }
  .date {
    width: 45px;
  }
  .time,
  .date {
    padding: 5px 4px;
  }
  .count__icon svg {
    width: 10px;
    height: 10px;
  }
  .left__section p {
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.021em;
  }
  .person h5 {
    font-size: 10px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.035em;
    padding-right: 10px;
  }
  .person p {
    font-size: 8px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: -0.021em;
    text-align: right;
    padding-right: 10px;
  }
  .person .person__pictur {
    height: 35px;
    width: 35px;
  }
  .contact_way svg {
    width: 35px;
    height: 35px;
  }
}
</style>
