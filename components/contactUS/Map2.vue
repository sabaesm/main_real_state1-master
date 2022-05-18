<template>
  <div class="medium_container">
    <v-col cols="12" class="mainCard__map m-0 p-0" v-for="data in data" :key="data.id">
      <v-row class="location">
        <div class="map">
          <div class="overlay"></div>
          <div class="mapCard">
            <iframe
              :src="data.map_frame"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
            <v-col cols="12" xl="3" lg="3" md="3" sm="6" class="way_descriptin">
              <h6 class="d-flex px-5 py-3 ">راه های ارتباطی</h6>
              <ul class=" ">
                <li class="detail py-3">
                  <span class="pl-3 title_info"> شهر :</span>
                  {{data.city}}
                </li>
                <li class="detail py-3">
                  <span class="pl-3 title_info"> آدرس </span>:     {{data.address}}
                </li>
                <li class="detail py-3">
                  <span class="pl-3 title_info">تلفن: </span>{{data.number}}
                </li>
                <li class="detail py-3">
                  <span class="pl-3 title_info"> همراه:</span>{{data.phone_number}}
                </li>
              </ul>
            </v-col>
          </div>
        </div>
      </v-row>
      <v-row class="pt-5">
        <v-col cols="12">
          <ul class="cantact-way mt-5">
            <v-col cols="4">
              <li>
                <a href="#">
                  <svg
                  
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.1935 32.8339C21.6784 32.8304 23.4842 32.799 24.611 32.7397C25.8082 32.6767 26.8479 32.4982 27.73 32.2041C28.7801 31.8261 29.6938 31.2485 30.4709 30.4714C31.248 29.6943 31.8256 28.7806 32.2037 27.7305C32.4977 26.8483 32.6762 25.8087 32.7392 24.6115C32.8023 23.4143 32.8338 21.4505 32.8338 18.7201L32.8329 17.7887C32.8285 15.5408 32.8078 13.898 32.7708 12.8602C32.6867 11.642 32.4977 10.5919 32.2037 9.70973C31.8256 8.65957 31.248 7.74593 30.4709 6.96882C29.6938 6.1917 28.7801 5.61411 27.73 5.23605C26.8479 4.94201 25.8082 4.76348 24.611 4.70047C23.4138 4.63746 21.45 4.60596 18.7196 4.60596L18.2457 4.60628C15.7608 4.60977 13.955 4.64117 12.8282 4.70047C11.631 4.76348 10.5914 4.94201 9.70924 5.23605C8.65908 5.61411 7.74545 6.1917 6.96833 6.96882C6.19121 7.74593 5.61362 8.65957 5.23556 9.70973C4.94152 10.5919 4.76299 11.6315 4.69998 12.8287C4.63697 14.0259 4.60547 15.9897 4.60547 18.7201L4.6058 19.194C4.60928 21.6789 4.64068 23.4847 4.69998 24.6115C4.76299 25.8087 4.94152 26.8483 5.23556 27.7305C5.61362 28.7806 6.19121 29.6943 6.96833 30.4714C7.74545 31.2485 8.65908 31.8051 9.70924 32.1411C10.5914 32.4772 11.631 32.6767 12.8282 32.7397C14.0254 32.8027 15.9892 32.8342 18.7196 32.8342L19.1935 32.8339ZM20.146 30.3132L17.2981 30.3132C15.8157 30.31 14.6509 30.2891 13.8037 30.2506C12.2495 30.1666 11.1153 29.9986 10.4012 29.7465C9.14102 29.2425 8.23789 28.3393 7.6918 27.0371C7.43976 26.323 7.27174 25.1888 7.18773 23.6346C7.14572 22.7105 7.12472 21.4083 7.12472 19.728L7.12515 17.2995C7.12836 15.817 7.14922 14.6522 7.18773 13.8051C7.27174 12.2089 7.43976 11.0747 7.6918 10.4026C8.19588 9.10039 9.09902 8.19726 10.4012 7.69318C11.1153 7.44114 12.2495 7.27312 13.8037 7.1891C14.7279 7.1471 16.0301 7.12609 17.7103 7.12609L20.1388 7.12653C21.6213 7.12974 22.7861 7.1506 23.6332 7.1891C25.2295 7.27312 26.3636 7.44114 27.0357 7.69318C28.3379 8.19726 29.2411 9.10039 29.7452 10.4026C29.9972 11.0747 30.1652 12.2089 30.2492 13.8051C30.2912 14.6872 30.3122 15.9894 30.3122 17.7117L30.3118 20.1402C30.3086 21.6227 30.2877 22.7875 30.2492 23.6346C30.1652 25.1888 29.9972 26.323 29.7452 27.0371C29.2411 28.2973 28.3379 29.2004 27.0357 29.7465C26.3636 29.9986 25.2295 30.1666 23.6332 30.2506C22.8244 30.2891 21.6624 30.31 20.1472 30.3132L20.146 30.3132ZM19.7266 30.3136C19.8693 30.3136 20.0091 30.3135 20.146 30.3132L19.7266 30.3136ZM27.4461 12.3561C27.131 12.6922 26.7425 12.8602 26.2804 12.8602C25.8183 12.8602 25.4193 12.6922 25.0832 12.3561C24.7472 12.0201 24.5791 11.621 24.5791 11.1589C24.5791 10.6968 24.7472 10.2978 25.0832 9.96174C25.4193 9.62569 25.8183 9.45766 26.2804 9.45766C26.7425 9.45766 27.1415 9.62569 27.4776 9.96174C27.8136 10.2978 27.9816 10.6968 27.9816 11.1589C27.9396 11.621 27.7611 12.0201 27.4461 12.3561ZM18.718 25.9662C20.0202 25.9662 21.2278 25.6407 22.341 24.9896C23.4542 24.3385 24.3363 23.4564 24.9874 22.3432C25.6385 21.23 25.9641 20.0223 25.9641 18.7201C25.9641 17.4179 25.6385 16.2103 24.9874 15.0971C24.3363 13.9839 23.4542 13.1018 22.341 12.4507C21.2278 11.7996 20.0202 11.474 18.718 11.474C17.4158 11.474 16.2081 11.7996 15.0949 12.4507C13.9817 13.1018 13.0996 13.9839 12.4485 15.0971C11.7974 16.2103 11.4719 17.4179 11.4719 18.7201C11.4719 20.0223 11.7974 21.23 12.4485 22.3432C13.0996 23.4564 13.9817 24.3385 15.0949 24.9896C16.2081 25.6407 17.4158 25.9662 18.718 25.9662ZM15.3807 22.0601C16.3048 22.9842 17.418 23.4463 18.7202 23.4463C20.0224 23.4463 21.1356 22.9842 22.0597 22.0601C22.9839 21.1359 23.4459 20.0228 23.4459 18.7206C23.4459 17.4184 22.9839 16.3052 22.0597 15.3811C21.1356 14.4569 20.0224 13.9949 18.7202 13.9949C17.418 13.9949 16.3048 14.4569 15.3807 15.3811C14.4566 16.3052 13.9945 17.4184 13.9945 18.7206C13.9945 20.0228 14.4566 21.1359 15.3807 22.0601Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <span class="id_number">{{data.instagram}}</span>
              </li>
            </v-col>
            <v-col cols="4">
              <li>
                <a href="">
                  <svg
                
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.4625 22.9125C27.4625 23.3625 27.3625 23.825 27.15 24.275C26.9375 24.725 26.6625 25.15 26.3 25.55C25.6875 26.225 25.0125 26.7125 24.25 27.025C23.5 27.3375 22.6875 27.5 21.8125 27.5C20.5375 27.5 19.175 27.2 17.7375 26.5875C16.3 25.975 14.8625 25.15 13.4375 24.1125C12 23.0625 10.6375 21.9 9.3375 20.6125C8.05 19.3125 6.8875 17.95 5.85 16.525C4.825 15.1 4 13.675 3.4 12.2625C2.8 10.8375 2.5 9.475 2.5 8.175C2.5 7.325 2.65 6.5125 2.95 5.7625C3.25 5 3.725 4.3 4.3875 3.675C5.1875 2.8875 6.0625 2.5 6.9875 2.5C7.3375 2.5 7.6875 2.575 8 2.725C8.325 2.875 8.6125 3.1 8.8375 3.425L11.7375 7.5125C11.9625 7.825 12.125 8.1125 12.2375 8.3875C12.35 8.65 12.4125 8.9125 12.4125 9.15C12.4125 9.45 12.325 9.75 12.15 10.0375C11.9875 10.325 11.75 10.625 11.45 10.925L10.5 11.9125C10.3625 12.05 10.3 12.2125 10.3 12.4125C10.3 12.5125 10.3125 12.6 10.3375 12.7C10.375 12.8 10.4125 12.875 10.4375 12.95C10.6625 13.3625 11.05 13.9 11.6 14.55C12.1625 15.2 12.7625 15.8625 13.4125 16.525C14.0875 17.1875 14.7375 17.8 15.4 18.3625C16.05 18.9125 16.5875 19.2875 17.0125 19.5125C17.075 19.5375 17.15 19.575 17.2375 19.6125C17.3375 19.65 17.4375 19.6625 17.55 19.6625C17.7625 19.6625 17.925 19.5875 18.0625 19.45L19.0125 18.5125C19.325 18.2 19.625 17.9625 19.9125 17.8125C20.2 17.6375 20.4875 17.55 20.8 17.55C21.0375 17.55 21.2875 17.6 21.5625 17.7125C21.8375 17.825 22.125 17.9875 22.4375 18.2L26.575 21.1375C26.9 21.3625 27.125 21.625 27.2625 21.9375C27.3875 22.25 27.4625 22.5625 27.4625 22.9125Z"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M23.125 11.25C23.125 10.5 22.5375 9.35 21.6625 8.4125C20.8625 7.55 19.8 6.875 18.75 6.875"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27.5 11.25C27.5 6.4125 23.5875 2.5 18.75 2.5"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></a>
                <span class="id_number">{{data.whatsapp}}</span>
              </li>
            </v-col>
            <v-col cols="4">
              <li>
                <a href="">
                  <svg
                   
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4481 25.6434L13.8331 19.8272L24.3931 10.3122C24.8606 9.8859 24.2969 9.67965 23.6781 10.0509L10.6431 18.2872L5.00565 16.4997C3.79565 16.1559 3.7819 15.3172 5.28065 14.7122L27.2394 6.24215C28.2431 5.7884 29.2056 6.48965 28.8206 8.02965L25.0806 25.6434C24.8194 26.8947 24.0631 27.1972 23.0181 26.6197L17.3256 22.4122L14.5894 25.0659C14.2731 25.3822 14.0119 25.6434 13.4481 25.6434Z"
                      fill="white"
                    /></svg
                ></a>
                <span class="id_number">{{data.whatsapp}}</span>
              </li>
            </v-col>
          </ul>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>
<script>
export default {
  props:[
    'data'
  ]
};
</script>
<style scoped>
.mainCard__map {
  background-color: #ffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 63px;
  margin-top: -100px;
}
.map,
.mapCard {
  position: relative;
  width: 100%;
}
.overlay {
  position: absolute;
  padding: 0;
  margin: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.15);
  z-index: 2;
  border-radius: 63px;
}
.location {
  position: relative;
  transition: all ease-in-out 0.4s;
}
.way_descriptin {
  background-color: #519fff;
  position: absolute;
  top: 10%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 33px;
  color: #ffff;
  padding: 20px 10px;
  margin-bottom: 40px;
  right: 4%;
  width: 100%;
  height: 80%;
  box-shadow: 0px 7px 9px 0px rgba(0, 0, 0, 0.25);
  z-index: 3;
}
.way_descriptin h6 {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: -0.02em;
  text-align: right;
  width: 100%;
}
.way_descriptin .detail {
  display: flex;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.02em;
  flex-direction: row;
  align-content: flex-start;
}
.map iframe {
  border: none;
  width: 100%;
  background-repeat: no-repeat;
  border-radius: 63px;
  height: 450px;
  margin: 0;
  padding: 0;
}
.map {
  height: 450px;
}
.cantact-way {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.detail span {
  opacity: 0.6;
  padding-right: 0 3px;
}
.cantact-way li {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cantact-way li a {
  cursor: pointer;
  background-color: #519fff !important;
  width: 55px;
  height: 55px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cantact-way li a svg{
width: 30px;
height: 28px;
}
li .id_number {
  padding-top: 20px;
  color: #6a6767;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: -0.005em;
  text-align: right;
}
/*hover*/
.location:hover .way_descriptin {
  display: none;
  transition: all ease-in-out 0.4s;
}
.location:hover .overlay {
  display: none;
  transition: all ease-in-out 0.4s;
}
@media only screen and (max-width: 600px) {
  .id_number {
    font-size: 15px !important;
    font-style: normal;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: -0.005em;
    text-align: right;
  }
  .mapCard {
    position: relative !important;
  }
  .way_descriptin {
    position: absolute;
    left: 0 !important;
    right: 0 !important;
    top: 30% !important;
  }
  .way_descriptin {
    box-shadow: 0 0 0;
    border-radius: 20px;
  }
  .mainCard__map,
  .mapCard,
  .overlay {
    border-radius: 20px;
  }
  .map iframe {
    border-radius: 20px;
  }
  .way_descriptin h6 {
    text-align: center !important;
  }
}
</style>
