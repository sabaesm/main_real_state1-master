<template>
  <div class="main_section">
    <div class="medium_container">
      <div class="header-info pt-5" v-for="data in data" :key="data.id">
        <h5>{{ data.homePage_header }}</h5>
        <h2>{{ data.homePage_title }}</h2>
        <p>{{ data.homePage_text }}</p>
      </div>
    </div>
    <div
      class="search_section d-flex flex-column flex-md-row justify-space-between align-center"
    >
      <v-col cols=" 12 " md="10" class="pa-0 ma-0">
        <form action="" class="select_bar d-flex flex-column flex-md-row align-center">
          <div class="animation">
            <div class="region search_bar ma-md-0 mb-5">
              <label for=""> منطقه : </label>
              <div class="test">
                <select name="region" id="" v-on:change="onchangeGetValue">
                  <option value="">مکان شما</option>
                  <option value="هراز ">هراز</option>
                  <option value="امام رضا">امام رضا</option>
                  <option value="جاده نور">جاده نور</option>
                  <option value="جاده محمودآباد">جاده محمودآباد</option>
                </select>
              </div>
              <span class="arrow"></span>
            </div>
          </div>
          <div class="animation">
            <div class="region search_bar ma-md-0 mb-5">
              <label for="" class="name"> نوع ملک </label>
              <div class="test">
                <select name="estate_type" id="" v-on:change="onchangeGetValue" class=" ">
                  <option value="">هر ملکی</option>
                  <option value="V ">ویلا</option>
                  <option value="G">باغ</option>
                  <option value="H">خانه ویلایی</option>
                  <option value="L">زمین</option>
                  <option value="A">آپارتمان</option>
                  <option value="B">مغازه و تجاری</option>
                </select>
              </div>
              <span class="arrow"></span>
            </div>
          </div>

          <div class="animation">
            <div class="region search_bar ma-md-0 mb-5">
              <label for="" class="name"> نوع ملک </label>
              <div class="test">
                <select name="estate_type" id="" v-on:change="onchangeGetValue" class=" ">
                  <option value="">هر ملکی</option>
                  <option value="V ">ویلا</option>
                  <option value="G">باغ</option>
                  <option value="H">خانه ویلایی</option>
                  <option value="L">زمین</option>
                  <option value="A">آپارتمان</option>
                  <option value="B">مغازه و تجاری</option>
                </select>
              </div>
              <span class="arrow"></span>
            </div>
          </div>
        </form>
      </v-col>
      <nuxt-link
        class="ma-md-0 pa-0 mb-5 col-12 col-md-2 test_btn"
        :to="{
          name: 'propertyCode',
          query: {
            region: `${this.valueInput.region}`,
            estate_type: `${this.valueInput.estate_type}`,
            unit_price__lte: `${this.valueInput.unit_price__lte}`,
            unit_price__gte: `${this.valueInput.unit_price__gte}`,
          },
        }"
      >
        <!-- <nuxt-link :to=" { name: 'propertyCode', query: ` ${'region'}`}">     -->
        <button class="search_home" v-on:click="handleSearch">جستجوی ملک</button>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import search from "./Search.vue";
import { getSearch } from "../../service/getApi";
export default {
  components: {
    search,
  },
  props: ["data"],
  data() {
    return {
      select_building: true,
      valueInput: {
        unit_price__lte: "",
        unit_price__gte: "",
        region: "",
        estate_type: "",
      },
      region: "",
    };
  },
  methods: {
    submited() {
      (this.region = region),
        (this.estate_type = estate_type),
        (this.high_price = high_price),
        (this.low_price = low_price);
    },
    onchangeGetValue(e) {
      this.valueInput = {
        ...this.valueInput,
        [e.target.name]: e.target.value,
      };
    },
    async handleSearch() {
      console.log(this.valueInput);
      const httpRequest = await getSearch(keyword);
      console.log(httpRequest);
    },
  },
  mounted() {},
};
</script>

<style>
.region select {
  text-align-last: left !important;
}
</style>
<style scoped>
/*search */
.main_section {
  position: relative;
  padding: 260px 0 100px 0 !important;
  background-image: url("~/assets/images/headerimg.png");
  background-size: cover;

  width: 100%;
}
.main_section h5,
h2,
p {
  padding-bottom: 20px;
  color: #000 !important;
}
h2 {
  font-size: 57px;
  font-weight: 800;
  line-height: 80px;
  letter-spacing: -0.025em;
}
.header-info {
  padding-top: 80px;
  width: 25%;
}
p {
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: right;
  width: 50% !important;
  opacity: 0.6;
  padding-top: 0px !important;
}

h5 {
  font-size: 23px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: -0.035em;
}

.search_home {
  background: #519fff !important;
  border-radius: 9px;
  color: #ffff !important;
  padding: 15px !important;
  font-size: 17px !important;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: -0.01em;
  text-align: center;
  width: 80%;
  height: 58px !important;
  position: relative;
  z-index: 0;
  overflow: hidden;
}
.search_home::before {
  content: "";
  width: 100%;
  height: 0;
  background-color: #478adc !important;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 8px;
  transition: 0.3s;
  transform-origin: center;
  z-index: -1 !important;
}
.search_home:hover:before {
  height: 100% !important;
}
form {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.animation {
  width: 30%;
  position: relative;
}
.animation::before {
  content: "";
  position: absolute;
  height: 100%;
  z-index: -1;
  border-radius: 9px;
  transition: 0.3s;
  pointer-events: none;
  top: 10px;
  left: 40px;
  width: calc(100% - 80px);
  background-color: hsla(0, 0%, 100%, 0.4);
}
.animation:hover::before,
.animation:hover::after {
  top: 0;
  bottom: 0;

  left: 0;
}
.animation::after {
  content: "";
  position: absolute;
  height: 100%;
  z-index: -1;
  border-radius: 9px;
  transition: 0.3s;
  pointer-events: none;
  top: 5px;
  left: 20px;
  width: calc(100% - 40px);
  background-color: hsla(0, 0%, 100%, 0.6);
}
.search_bar {
  width: 100%;
}
.search_bar:hover {
  opacity: 1 !important;
}
.region {
  background-color: #ffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  position: relative;
  opacity: 0.95 !important;
  border-radius: 10px !important;
  height: 58px;
  overflow: hidden;
}
.search_bar::before {
  content: "";

  position: absolute;
  width: 8px;
  height: 2px;
  left: 7%;
  background-color: #848486;
  transition: all ease-in-out 0.2s;
}
.search_bar:hover::before {
  transform: rotate(45deg);
  height: 3px;
}
.search_bar::after {
  content: "";
  position: absolute;
  width: 8px;
  height: 2px;
  left: 8.5%;
  background-color: #848486;
  transition: all ease-in-out 0.2s;
}
.search_bar:hover::after {
  transform: rotate(-45deg);
  height: 3px;
}

.region label {
  font-size: 19px;
  font-weight: 800;
  line-height: 32px;
  letter-spacing: -0.01em;
  text-align: right;
  position: absolute !important;
  z-index: 2;
}
.select_bar {
  width: 95%;
  float: left;
  padding-left: 20px;
}
.test {
  z-index: 1;
  position: absolute !important;
  top: 0;
  left: 0px;
  right: 0;
  bottom: 0;
  direction: ltr !important;
  padding-right: 40px !important;
}
.region select {
  position: absolute;
  left: 0px;
  bottom: 0;
  top: 0;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.05em;
  padding-left: 45px;

  opacity: 0.37;
}

.building {
  opacity: 0.95 !important;
  border-radius: 10px !important;
  height: 58px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.building select {
  background-color: #ffff;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0px;
  right: 0;
  bottom: 0;
  padding-right: 20px !important;
}
.price {
  background-color: #ffff;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: relative;
  width: 300px !important;
  opacity: 0.9 !important;
  border-radius: 10px !important;
  height: 58px;
  overflow: hidden;
  width: 400px;
}

.price span {
  font-family: IRANYekanWeb;
  font-size: 19px;
  font-weight: 800;
  line-height: 32px;
  letter-spacing: -0.01em;
  text-align: right;
}

.price input {
  width: 70px;
  border: 1px solid gray;
}

input {
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.05em;
  text-align: left;
  opacity: 0.8;
}

select {
  outline: none;
}
@media screen and (max-width: 600px) {
  .main_section {
    padding: 200px 0 0px 0 !important;
  }
  .main_section h5 {
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.035em;
    text-align: center !important;
    color: #ffff !important;
  }
  .main_section h2 {
    font-family: IRANYekanWeb;
    font-size: 24px;
    font-weight: 800;
    line-height: 34px;
    letter-spacing: -0.025em;
    text-align: center !important;
    color: #ffff !important;
  }
  .main_section p {
    font-size: 11px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.015em;
    text-align: center !important;
    color: #ffff !important;
    width: 100% !important;
    margin: 0px !important;
    opacity: 1;
  }
  .building,
  .region {
    box-shadow: 0px 0px 34px -9px rgba(0, 0, 0, 0.25);
    width: 90%;
    height: 40px;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.05em;
  }
  .search_home {
    width: 90%;
  }
  .search_section {
    padding: 0px;
    align-items: center !important;
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 10%;
    top: 96%;
  }
  .building,
  .region {
    opacity: 1 !important;
  }

  .test_btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
