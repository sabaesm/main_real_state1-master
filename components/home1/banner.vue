<template>
  <div class="larg_container">
  <nuxt-link to="blog">
    <div class="pb-5 mb-5 mainSection_weblog__cards">
      <v-row>
        <v-col cols="12 " class="p-0 m-0">
          <div class="slider" v-for="data in data" :key="data.id">
            <div class="overlay p-0 m-0"></div>
            <!-- Render original HTML in server, render Swiper in browser (client) -->
            <div class="main-banner m-0 p-0">
              <img :src="data.banner" />
            </div>
            <v-col cols="5" md="4" lg="3" class="alider_left_items">
              <h4>
                {{ data.title }}
              </h4>
              <div class="next-button_luxry" slot="button-next">
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.9583 0.083252H9.03911C3.42745 0.083252 0.0820312 3.42867 0.0820312 9.04034V21.9441C0.0820312 27.5712 3.42745 30.9166 9.03911 30.9166H21.9429C27.5545 30.9166 30.8999 27.5712 30.8999 21.9595V9.04034C30.9154 3.42867 27.5699 0.083252 21.9583 0.083252ZM24.7487 16.6562H9.03911L13.6795 21.2966C14.1266 21.7437 14.1266 22.4837 13.6795 22.9308C13.4483 23.162 13.1554 23.2699 12.8624 23.2699C12.5695 23.2699 12.2766 23.162 12.0454 22.9308L5.43161 16.317C5.21578 16.1012 5.09245 15.8083 5.09245 15.4999C5.09245 15.1916 5.21578 14.8987 5.43161 14.6828L12.0454 8.06909C12.4924 7.622 13.2324 7.622 13.6795 8.06909C14.1266 8.51617 14.1266 9.25617 13.6795 9.70325L9.03911 14.3437H24.7487C25.3808 14.3437 25.9049 14.8678 25.9049 15.4999C25.9049 16.132 25.3808 16.6562 24.7487 16.6562Z"
                    fill="white"
                  />
                </svg>
              </div>
            </v-col>
          </div>
        </v-col>
      </v-row>
    </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: ["data"],
  mounted() {
    console.log(this.data);
  },
};
</script>
<style scoped>
.larg_container{
  background-color: #ffff!important;
}
.mainSection_weblog__cards {
  margin-top: 0;
}
.slider {
  position: relative;
  height: 200px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
}
.overlay {
  position: absolute;
  background: linear-gradient(
    90deg,
    rgba(28, 75, 133, 1) 30%,
    rgba(28, 75, 133, 0.5) 45%,
    rgba(28, 75, 133, 0.1) 50%
  );
  top: 0;
  border-radius: 20px;
  bottom: 0;
  right: 0;
  width: 100%;
  z-index: 2;
}
.main-banner {
  width: 100%;
}
.main-banner img {
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 20px !important;
  object-fit: cover;
  background-repeat: no-repeat;
}
.alider_left_items {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 10;
  left: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  bottom: 0;
}
.slider h4 {
  color: #ffff;
font-family: IRANYekanWeb;
font-size: 30px;
font-weight: 800;
line-height: 51px;
letter-spacing: -0.035em;
text-align: center;

  padding: 0 20px;
}

@media screen and (max-width: 960px) {
  .slider {
    height: 150px;
  }
  .slider h4 {
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: 26px;
  }
}
@media screen and (max-width: 600px) {
  .slider h4 {
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.035em;
  }
  .slider {
    height: 120px;
  }
}
</style>
