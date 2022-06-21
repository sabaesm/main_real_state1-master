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
        class="search_section d-flex flex-column flex-md-row justify-space-between align-center "
      >
        <v-col cols=" 12 " md="10" class="pa-0 ma-0">
          <form action="" class="select_bar d-flex flex-column flex-md-row align-center">
            <div class="region search_bar ma-md-0 mb-5">
              <!-- <label for=""> منطقه : </label> -->
              <select name="region" id="" v-on:change="onchangeGetValue">
                <option value="">منطقه:</option>
                <option value="هراز ">هراز</option>
                <option value="امام رضا">امام رضا</option>
                <option value="جاده نور">جاده نور</option>
                <option value="جاده محمودآباد">جاده محمودآباد</option>
              </select>
            </div>
            <div class="building ma-md-0 mb-5 pr-2">       
                   <label for="" class="name"> منطقه </label>

              <select name="estate_type" id="" v-on:change="onchangeGetValue" class=" ">
                <option value=""> نوع ملک: </option>
                <option value="V ">ویلا</option>
                <option value="G">باغ</option>
                <option value="H">خانه ویلایی</option>
                <option value="L">زمین</option>
                <option value="A">آپارتمان</option>
                <option value="B">مغازه و تجاری</option>
              </select>
              <label for="" class="name"> منطقه </label>
            </div>
               <div class="building pa-0 ma-md-0 mb-5">
              <select name="estate_type" id="" v-on:change="onchangeGetValue" >
                <option class=" pl-2" value="">نوع ملک:</option>
                <option value="V ">ویلا</option>
                <option value="G">باغ</option>
                <option value="H">خانه ویلایی</option>
                <option value="L">زمین</option>
                <option value="A">آپارتمان</option>
                <option value="B">مغازه و تجاری</option>
              </select>
              <label for="" class="name"> منطقه </label>
            </div>
            <!-- <div class="price search_bar ma-md-0 mb-5">
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
            </div> -->
          </form>
        </v-col>
        <!-- <nuxt-link :to="{ name: 'propertyCode', query: { region: `${this.onchangeGetValue.region}` } }"> -->
        <nuxt-link
          class="ma-md-0 pa-0 mb-5 col-12 col-md-2  test_btn"
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
  position: relative;
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
  width: 80%;
  height: 58px !important;
}
form {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
  position: relative;
  opacity: 0.9 !important;
  border-radius: 10px !important;
  height: 58px;
  overflow: hidden;
  width: 30%;
}
.region select {
  background-color: #ffff;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-right: 20px!important;
}

.building {
  opacity: 0.9 !important;
  border-radius: 10px !important;
  height: 58px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 30%;
  overflow: hidden;
}

.building select {
  background-color: #ffff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-right: 20px!important;
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
  background-color: #ffff;
  width: 100% !important;
  position: absolute;
  top: 100%;
  outline: none;
}
@media screen and (max-width: 600px) {
 .main_section{

  padding: 200px 0 0px 0 !important;

  }
  .main_section  h5{
font-size: 12px;
font-weight: 700;
line-height: 20px;
letter-spacing: -0.035em;
text-align: center!important;
color: #ffff!important;
  }
  .main_section h2{
    font-family: IRANYekanWeb;
font-size: 24px;
font-weight: 800;
line-height: 34px;
letter-spacing: -0.025em;
text-align: center!important;
color: #ffff!important;
  }
  .main_section p{
font-size: 11px;
font-weight: 400;
line-height: 18px;
letter-spacing: -0.015em;
text-align: center!important;
color: #ffff!important;
width: 100%!important;
margin: 0px!important;
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
    text-align: left;
  }
  .search_home{
    width: 90%;
  }
  .search_section{
    padding: 0px;
    align-items: center!important;
 position: absolute;
width: 100%;
bottom: 0;
height: 10%;
top: 96%;

}
.building, .region {
  opacity: 1!important;
}

  .test_btn{
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
