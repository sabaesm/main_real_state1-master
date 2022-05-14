<template>
  <div class="main_section">
    <div class="header-info" v-for="data in data" :key="data.id">
      <h5>{{ data.homePage_header }}</h5>
      <h2>{{ data.homePage_title }}</h2>
      <p>{{ data.homePage_text }}</p>
    </div>
    <div class="d-flex flex-row justify-space-between">
      <v-col cols="10">
        <form action="" class="">
          <div class="region">
            <label for=""> منطقه : </label>
            <input
              type="text"
              name="region"
              id=""
              placeholder="  منطقه ی شما"
              v-on:change="onchangeGetValue"
            />
          </div>
          <div class="building">
            <label for=""> نوع ملک : </label>
            <input type="text" name="" id="" placeholder=" نوع شما" />
            <select
              name="estate_type"
              id=""
              v-on:change="onchangeGetValue"
            >
              <option value="">انتخاب کنید:</option>
              <option value="V ">ویلا</option>
              <option value="G">باغ</option>
              <option value="H">خانه ویلایی</option>
              <option value="L">زمین</option>
              <option value="ََA">آپارتمان</option>
              <option value="B">مغازه و تجاری</option>
            </select>
          </div>
          <a :class="{ select_building }" v-on:click="select_building = !select_building">
            test</a
          >

          <div class="price">
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
      <nuxt-link to=""></nuxt-link>

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
      const keyword = this.valueInput;
      const httpRequest = await getSearch(keyword);
      console.log(httpRequest)
    },
  },
  mounted() {},
};
</script>
<style scoped>
/*search */
form {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.region {
  background-color: #ffff;
  opacity: 0.93;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  padding: 10px;
}

.building {
  background-color: #ffff;
  opacity: 0.93;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
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
  opacity: 0.93;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
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

.main_section {
  padding: 50px;
  background-image: url("~/assets/images/headerimg.png");
  object-fit: cover;
  width: 100%;
}

.main_section h5,
h2,
p {
  padding: 15px;
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
  font-weight: 100;
  font-size: 13px;
  width: 35% !important;
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
  font-size: 17px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: -0.01em;
}
</style>
