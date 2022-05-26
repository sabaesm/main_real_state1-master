<template>
  <div class="main_section">
    <div class="medium_container">
      <div class="header-info pt-5" v-for="data in data" :key="data.id">
        <h5>{{ data.homePage_header }}</h5>
        <h2>{{ data.homePage_title }}</h2>
        <p>{{ data.homePage_text }}</p>
      </div>
      <div class="d-flex flex-row justify-space-between align-center">
        <v-col cols="10">
          <form action="" class="">
            <div class="region search_bar">
              <label for=""> منطقه : </label>
              <input
                type="text"
                name="region"
                id=""
                placeholder="  منطقه ی شما"
                v-on:change="onchangeGetValue"
              />
            </div>
            <div class="building search_bar">
              <label for=""> نوع ملک : </label>
              <input type="text" name="" id="" placeholder=" نوع شما" />
              <select name="estate_type" id="" v-on:change="onchangeGetValue">
                <option value="">انتخاب کنید:</option>
                <option value="V ">ویلا</option>
                <option value="G">باغ</option>
                <option value="H">خانه ویلایی</option>
                <option value="L">زمین</option>
                <option value="A">آپارتمان</option>
                <option value="B">مغازه و تجاری</option>
              </select>
            </div>

            <div class="price search_bar">
              <span> بازه قیمتی</span>
              <label for="down"> از</label>
              <input
                type="text"
                name="unit_price__gte"
                v-on:change="onchangeGetValue"
                id="down"
                placeholder="    "
              />
              <label for="top"> تا</label>
              <input
                type="text"
                name="unit_price__lte"
                v-on:change="onchangeGetValue"
                id="top"
                placeholder=""
              />
            </div>
          </form>
        </v-col>

        <!-- <nuxt-link :to="{ name: 'propertyCode', query: { region: `${this.onchangeGetValue.region}` } }"> -->
        <nuxt-link
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
          <v-btn class="search_home" v-on:click="handleSearch"> جستجوی ملک</v-btn>
        </nuxt-link>
      </div>
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
<style scoped>
/*search */

.main_section {
  padding: 200px 0 100px 0 !important;
  background-image: url("~/assets/images/headerimg.png");
  object-fit: cover;
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
  text-align: right;
  width: 163px;
  height: 48px !important;
}
form {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.search_bar {
  opacity: 0.9 !important;
  border-radius: 10px !important;
  height: 58px;
  position: relative;
}
.search_bar:hover {
  opacity: 1 !important;
  transition: all ease-in-out 0.2s;
  box-shadow: 0px 0px 52px -10px rgba(0, 0, 0, 0.29) !important;
}
.region {
  background-color: #ffff;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.building {
  background-color: #ffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: relative;
}

.select_building {
  background-color: #ffff;
  position: absolute;
  top: 100%;
  left: 10%;
  width: 80%;
}

.select_building ul li {
  border-bottom: 1px solid gray;
}

.region label {
  font-size: 19px;
  font-weight: 800;
  line-height: 32px;
  letter-spacing: -0.01em;
  text-align: right;
}

.price {
  background-color: #ffff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
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
  background-color: #ffff;
  width: 100% !important;
  position: absolute;
  top: 100%;
  outline: none;
}
</style>
